// Copyright 2020 Cao Gaoting<caogtaa@gmail.com>
// https://caogtaa.github.io
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/*
 * Date: 2021-04-12 19:12:44
 * LastEditors: GT<caogtaa@gmail.com>
 * LastEditTime: 2021-04-12 19:15:20
*/ 

import { EDTAA3 } from "./EDTAA3";
import { EDT } from "./EDT";
import { Camera, Color, Component, Label, Material, RenderTexture, Size, Sprite, SpriteFrame, _decorator, size,Node, UITransform} from "cc";

const { ccclass, menu, property } = _decorator;


@ccclass
export class SceneSDF extends Component {
    @property([Node])
    renderNodes: Node[] = [];

    @property(Node)
    objNode: Node = null;

    @property(Node)
    btnSwitchImage: Node = null;

    @property(Node)
    btnSwitchEffect: Node = null;

    @property([SpriteFrame])
    images: SpriteFrame[] = [];

    @property([Material])
    materials: Material[] = [];

    @property(Label)
    lblHint: Label = null;

    protected _hints = new Map<string, string>([
        ["SpriteRaw", "原始SDF纹理"],
        ["SDFGradient", "距离映射到灰度"],
        ["SDFMorph", "形变"],
        ["SDFBloom", "霓虹灯"],
        ["SDFOutline0", "描边"],
        ["SDFSelect", "框选动画"],
        ["SDFOutline2", "外发光"],
        ["SDFRawTest", ""],
        ["SDFGlow", "外发光2"],
        ["SDFSquiggle", "手绘线描"],
        ["SDFColorPallete", "颜色渐变"],
        ["SDFContour", "等高线"],
        ["SDFDropShadow", "投影"],
        ["SDFFake3D", "伪3D"],
    ]);
    protected _edt: EDT;
    protected _edtaa3: EDTAA3;
    protected _maxDist: number = 17;
    protected _imageIndex: number = 3;
    protected _effectIndex: number = 1;

    onLoad() {
        this.btnSwitchImage?.on("click", this.NextImage, this);
        this.btnSwitchEffect?.on("click", this.NextEffect, this);
    }

    start() {
        this._edt = new EDT;
        this._edtaa3 = new EDTAA3;
        this.ApplyImage(this._imageIndex);
        this.ApplyEffect(this._effectIndex);
    }

    protected NextImage() {
        let index = this._imageIndex = (this._imageIndex + 1) % this.images.length;
        this.ApplyImage(index);
    }

    protected ApplyImage(index: number) {
        let sf = this.images[index];
        let sz = sf.getOriginalSize();

        // let testLabel = this.node.getChildByName("lblOrigin");
        this.objNode.getComponent(Sprite).spriteFrame = sf;
        for (let i = 0; i < 2; ++i) {
            let renderNode = this.renderNodes[i];
            let maxDist = this._maxDist;
            renderNode.getComponent(UITransform).width = sz.width
            this.objNode.getComponent(UITransform).width = sz.width;
            renderNode.getComponent(UITransform).height = sz.height
            this.objNode.getComponent(UITransform).height = sz.height;
            let texture = this.RenderToMemory(this.objNode, null, renderNode, maxDist);

            let result: { texture: RenderTexture, alpha: Uint8ClampedArray } = null;
            if (i === 0) {
                result = this._edt.RenderSDF(texture, maxDist);
            } else {
                result = this._edtaa3.RenderSDF(texture, maxDist);
            }

            let sprite = renderNode.getComponent(Sprite);
            const _SpriteFrame = new SpriteFrame();
            _SpriteFrame.texture = result.texture
            sprite.spriteFrame = _SpriteFrame;
            // sprite.spriteFrame = new SpriteFrame(result.texture);
            this.FlushMatProperties(sprite, size(texture.width, texture.height), i === 1 && maxDist > 8);
        }
    }

    protected FlushMatProperties(sprite: Sprite, sz: Size, useDualChannel: boolean) {
        let mat = sprite.getMaterial(0);
        const _UITransform = sprite.node.getComponent(UITransform)
        let tw = _UITransform.width;
        let th = _UITransform.height;
        mat.setProperty("texSize", [tw, th, 1./tw, 1./th]);
        mat.setProperty("maxDist", [this._maxDist, 1./this._maxDist]);
        mat.define("SDF_HI_RES", useDualChannel);
        mat.define("SDF_DUAL_CHANNEL", useDualChannel);

        //@ts-ignore
        if (mat.getProperty("originTexture") !== undefined) {
            mat.setProperty("originTexture", this.objNode.getComponent(Sprite).spriteFrame.getTexture());
        }
    }

    protected NextEffect() {
        let index = this._effectIndex = (this._effectIndex + 1) % this.materials.length;
        this.ApplyEffect(index);
    }

    protected ApplyEffect(index: number) {
        this.UpdateHint(index);
        let mat = this.materials[index];

        for (let i = 0; i < 2; ++i) {
            let renderNode = this.renderNodes[i];
            let sprite = renderNode.getComponent(Sprite);
            sprite.setMaterial(0, mat);

            let sf = sprite.spriteFrame;
            let sz = sf.getOriginalSize();
            let maxDist = this._maxDist;
            this.FlushMatProperties(sprite, sz, i === 1 && maxDist > 8);
        }
    }


    /**
     * 将root节点渲染到target节点上，target节点如果没有sprite组件会自动创建一个并关联内存纹理
     * @param root 
     * @param others 
     * @param target 
     * @param extend 内存纹理相比较原图的扩边大小，上下左右分别多出extend宽度的像素
     * @returns 
     */
     public RenderToMemory(root: Node, others: Node[], target: Node, extend: number = 0): RenderTexture {
        // 使截屏处于被截屏对象中心（两者有同样的父节点）
        let node = new Node;
        node.parent = root;
        node.x = (0.5 - root.anchorX) * root.width;
        node.y = (0.5 - root.anchorY) * root.height;

        let camera = node.addComponent(Camera);
        camera.backgroundColor = new Color(255, 255, 255, 0);        // 透明区域仍然保持透明，半透明区域和白色混合
        camera.clearFlags = Camera.ClearFlags.DEPTH | Camera.ClearFlags.STENCIL | Camera.ClearFlags.COLOR;

        // 设置你想要的截图内容的 cullingMask
        camera.cullingMask = 0xffffffff;

        let success: boolean = false;
        try {
            let scaleX = 1.0;   //this.fitArea.scaleX;
            let scaleY = 1.0;   //this.fitArea.scaleY;
            //@ts-ignore
            let gl = game._renderContext;

            let targetWidth = Math.floor(root.width * scaleX + extend * 2);      // texture's width/height must be integer
            let targetHeight = Math.floor(root.height * scaleY + extend * 2);

            // 内存纹理创建后缓存在目标节点上
            // 如果尺寸和上次不一样也重新创建
            let texture: RenderTexture = target["__gt_texture"];
            if (!texture || texture.width != targetWidth || texture.height != target.height) {
                texture = target["__gt_texture"] = new RenderTexture();

                texture.initWithSize(targetWidth, targetHeight, gl.STENCIL_INDEX8);
                texture.packable = false;
            }
        
            camera.alignWithScreen = false;
            // camera.orthoSize = root.height / 2;
            camera.orthoSize = targetHeight / 2;
            camera.targetTexture = texture;

            // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
            camera.render(root);
            if (others) {
                for (let o of others) {
                    camera.render(o);
                }
            }

            let screenShot = target;
            screenShot.active = true;
            screenShot.opacity = 255;

            // screenShot.parent = root.parent;
            // screenShot.position = root.position;
            screenShot.width = targetWidth;     // root.width;
            screenShot.height = targetHeight;   // root.height;
            screenShot.angle = root.angle;

            // fitArea有可能被缩放，截图的实际尺寸是缩放后的
            screenShot.scaleX = 1.0 / scaleX;
            screenShot.scaleY = -1.0 / scaleY;

            let sprite = screenShot.getComponent(Sprite);
            if (!sprite) {
                sprite = screenShot.addComponent(Sprite);
                // sprite.srcBlendFactor = macro.BlendFactor.ONE;
            }

            if (!sprite.spriteFrame) {
                sprite.sizeMode = Sprite.SizeMode.CUSTOM;
                sprite.spriteFrame = new SpriteFrame(texture);
            }
            
            success = true;
        } finally {
            camera.targetTexture = null;
            node.removeFromParent();
            if (!success) {
                target.active = false;
            }
        }

        return target["__gt_texture"];
    }

    protected UpdateHint(materialIndex: number) {
        let mat = this.materials[materialIndex];
        let hint = this._hints.get(mat.name) || "";
        if (hint)
            this.lblHint.string = `当前效果:\n ${hint}`;
        else
            this.lblHint.string = "";
    }
}

