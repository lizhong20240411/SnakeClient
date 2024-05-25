import { _decorator, Component, Node,sp } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('SpineCtr')
export class SpineCtr extends BaseUI 
{
    @property(sp.Skeleton) 
    mSpine : sp.Skeleton = null;
    InitParam()
    {

    }
    BindUI()
    {

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

    public Hide()
    {
        this.mSpine.clearTracks();
        this.mSpine.node.active = false;
    }

    public SetAnimation(_name : string, _loop : boolean = false , _callback : Function = null)
    {
        this.mSpine.node.active = true;
        this.mSpine.clearTracks();
        this.mSpine.setAnimation(0 , _name , _loop);
        this.mSpine.setCompleteListener((_trackEntry) => 
        {
            if (_callback) 
            {
                _callback(_trackEntry.animation.name);
            }
        });
    }

}

