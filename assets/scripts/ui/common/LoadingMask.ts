import { _decorator, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
const { ccclass, property } = _decorator;

@ccclass('LoadingMask')
export class LoadingMask extends BaseUI {
    public static PrefabPath : string = "prefab/LoadingMask";
    public static Bunddle : string = "common";
    @property(Label) 
    mTips: Label = null;
    @property(Sprite) 
    mIcon: Sprite = null;
    @property(Node) 
    mLoading: Node = null;

    mForceShow : boolean = false;
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

    public ShowLoading(_show : boolean)
    {
        if(this.mForceShow)
        {
            return;
        }
        this.node.active = _show;
    }

    public FocreShowLoading()
    {
        this.node.active = true;
        this.mForceShow = true;
    }

    public FocreHideLoading()
    {
        this.mForceShow = false;
        this.node.active = false;
    }


}

