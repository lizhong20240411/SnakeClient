import { _decorator, Component, Node, UITransform } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { CommonNotify } from '../../CommonNotify';
const { ccclass, property } = _decorator;

@ccclass('DropBoxCtr')
export class DropBoxCtr extends BaseUI 
{
    mTouchCloseBG : Node
    InitParam()
    {
        this.mTouchCloseBG = this.GetComponentInPath("TouchCloseBG")
    }
    BindUI()
    {
        this.mTouchCloseBG.on(Node.EventType.TOUCH_END,this.OnClick.bind(this),this);
        this.mTouchCloseBG.active = false;
    }
    RegDataNotify()
    {
        CommonNotify.Instance.Data_ShowDropBox.AddListenner(this , (_data)=>
        {
            if(CommonNotify.Instance.ChosingDropBoxData == null)
            {
                return;
            }
            if(_data == true)
            {
                this.ExpandCurrentDropBox();
            }
            else
            {
                this.HideCurrentDropBox();
            }
        })
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        CommonNotify.Instance.RemoveAllDataListennerByTarget(this);
    }

    OnClick()
    {
        CommonNotify.Instance.Data_ShowDropBox.mData = false;
    }

    ExpandCurrentDropBox()
    {
        this.mTouchCloseBG.active = true;
        let dropBox = CommonNotify.Instance.ChosingDropBoxData.mTargetDropBox;
        let posBefore = dropBox.node.worldPosition;
        dropBox.node.removeFromParent();
        this.node.addChild(dropBox.node);
        dropBox.node.setWorldPosition(posBefore);
        dropBox.Expand(true);
    }

    HideCurrentDropBox()
    {
        this.mTouchCloseBG.active = false;
        let dropBox = CommonNotify.Instance.ChosingDropBoxData.mTargetDropBox;
        let parentBefore = CommonNotify.Instance.ChosingDropBoxData.mDropBoxParent;
        let worldPosBeore = CommonNotify.Instance.ChosingDropBoxData.mBeforePos;
        dropBox.node.removeFromParent();
        parentBefore.addChild(dropBox.node);
        let localPos = dropBox.node.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPosBeore);
        dropBox.node.setPosition(localPos);
        dropBox.Expand(false);
        CommonNotify.Instance.ChosingDropBoxData = null
    }
}

