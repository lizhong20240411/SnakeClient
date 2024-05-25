import { _decorator, Component, Node, Tween, tween, Vec3, instantiate, BlockInputEvents } from 'cc';
import { BaseUI } from './BaseUI';

const { ccclass, property } = _decorator;

@ccclass('BaseWindow')
export class BaseWindow extends BaseUI 
{

    public static PrefabPath : string = "prefab/BaseWindow";
    public static Bunddle : string = "common";
    @property(Node) 
    mDarkBG: Node = null;
    mAnimating : boolean  = false;
    mContent : Node = null;
    mContentScript : BaseUI = null;
    InitParam() 
    {
        this.mIsWindow = true;
    }
    BindUI() 
    {
        this.AddTouchCloseEvent(this.mDarkBG);
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {
    }

    public SetContent(_target : Node , _script : BaseUI)
    {
        this.node.addChild(_target);
        this.mContent = _target;
        this.mContentScript = _script;
        if(!this.mContent.getComponent(BlockInputEvents))
        {
            this.mContent.addComponent(BlockInputEvents);
        }
    }

    public GetContentScript() : BaseUI
    {
        return this.mContentScript;
    }

    public Show(_val : boolean)
    {
        if(this.mAnimating)
        {
            console.log("弹窗动画执行中，无法打开或关闭");
            return;
        }

        if(_val)
        {
            this.ShowAnm();
        }
        else
        {
            this.HideAnm();
        }
    }

    private ShowAnm()
    {
        this.node.active =true;
        let duration = 0.15;
        this.mAnimating = true;
        this.mContent.setScale(new Vec3(0.1,0.1,0.1));
        let tempTween = new Tween(this.mContent);
        tempTween.to(duration,{scale : new Vec3(1.2,1.2,1.2)});
        tempTween.to(duration/2,{scale : Vec3.ONE});
        tempTween.call(this.ShowEnd.bind(this));
        tempTween.start();
    }

    private ShowEnd()
    {
        this.mAnimating = false;
    }

    private HideAnm()
    {
        let duration = 0.15;
        this.mAnimating = true;
        this.mContent.setScale(Vec3.ONE);
        let tempTween = new Tween(this.mContent);
        tempTween.to(duration/2,{scale : new Vec3(1.2,1.2,1.2)});
        tempTween.to(duration,{scale : new Vec3(0.1,0.1,0.1)});
        tempTween.call(this.HideEnd.bind(this));
        tempTween.start();
    }

    private HideEnd()
    {
        this.mAnimating = false;
        this.node.active =false;
    }
}

