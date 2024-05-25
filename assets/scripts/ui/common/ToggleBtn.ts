import { _decorator, Component, Node, Button, Label, Sprite, SpriteFrame } from 'cc';
import { AudioManager } from '../../base/AudioManager';
import { BaseData } from '../../base/BaseData';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('ToggleBtn')
export class ToggleBtn extends BaseUI {

    @property(Button) 
    mSelected: Button = null;
    @property(Label) 
    mSelectedLabel: Label = null;
    @property(Button) 
    mDisabled: Button = null;
    @property(Label) 
    mDisableLabel: Label = null;

    mCustmoerData:number = 0;
    mDataNotify : BaseData<number> = null;

    mClickCallback : Function = null;
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
        if(this.mDataNotify != null)
        {
            this.mDataNotify.RemoveListennerByTarget(this);
            this.mDataNotify = null;
        }
    }

    //需要数据驱动的toggle用这个初始化
    public SetDataNotify(_baseData : BaseData<any> , _custmoerData : any)
    {
        _baseData.RemoveListennerByTarget(this);
        this.mDataNotify = _baseData;
        this.mCustmoerData = _custmoerData;
        this.mDataNotify.AddListenner(this , this.NotifyCallback.bind(this));
        this.mSelected.node.on(Node.EventType.TOUCH_END,this.OnSelected.bind(this),this);
        this.mDisabled.node.on(Node.EventType.TOUCH_END,this.OnDisabled.bind(this),this);

        if(this.mDataNotify.mData == null)
        {
            this.ShowUnselected();
        }
    }

    //不需要数据驱动的toggle用这个初始化
    public SetClickCallback(_callback : Function ,_custmoerData : number = 0)
    {
        this.mCustmoerData = _custmoerData;
        this.mClickCallback = _callback;
        if(this.mClickCallback != null)
        {
            this.mSelected.node.on(Node.EventType.TOUCH_END,()=>
            {
                AudioManager.Instance.PlayEffectOneShot("common","music/Btn");
                this.ShowUnselected(); 
                this.mClickCallback(false,this.mCustmoerData);
            },this);
            this.mDisabled.node.on(Node.EventType.TOUCH_END,()=>
            {
                AudioManager.Instance.PlayEffectOneShot("common","music/Btn");
                this.ShowSelected();    
                this.mClickCallback(true,this.mCustmoerData);
            },this);
        }
    }

    public SetTitle(_title :string)
    {
        this.mSelectedLabel.string = _title;
        this.mDisableLabel.string = _title;
    }

    public GetTitle()
    {
        return this.mSelectedLabel.string;
    }

    public SetImage(_spriteFrame : SpriteFrame)
    {
        this.mSelected.node.getChildByName("Icon").getComponent(Sprite).spriteFrame = _spriteFrame;
        this.mDisabled.node.getChildByName("Icon").getComponent(Sprite).spriteFrame = _spriteFrame;
    }


    public SetInteractable(_val : boolean)
    {
        this.mSelected.interactable = _val;
        this.mDisabled.interactable = _val;
    }

    public SetGray(_val : boolean)
    {
        this.mSelected.node.getChildByName("Icon").getComponent(Sprite).grayscale = _val;
        this.mDisabled.node.getChildByName("Icon").getComponent(Sprite).grayscale = _val;
    }

    OnSelected()
    {
        if(!this.mSelected.interactable)
        {
            return
        }
        AudioManager.Instance.PlayEffectOneShot("common","music/Btn");
    }

    OnDisabled(_PlayEffect : boolean = true)
    {
        if(!this.mSelected.interactable)
        {
            return
        }
        if (_PlayEffect) 
        {
            AudioManager.Instance.PlayEffectOneShot("common","music/Btn");
        }
        if(this.mDataNotify == null)
        {
            return;
        }
        this.mDataNotify.mData = this.mCustmoerData;

    }

    NotifyCallback(_val , _bef)
    {
        if(_val == this.mCustmoerData)
        {
            this.ShowSelected();
        }
        else
        {
            this.ShowUnselected();
        }
    }

    ShowSelected()
    {
        this.mSelected.node.active = true;
        this.mDisabled.node.active = false;
    }

    ShowUnselected()
    {
        this.mSelected.node.active = false;
        this.mDisabled.node.active = true;
    }

    SetShowStauts(_value : boolean , _triggerCallback : boolean = false)
    {
        if(_value)
        {
            this.ShowSelected();
        }
        else
        {
            this.ShowUnselected();
        }

        if(_triggerCallback)
        {
            if(this.mClickCallback != null)
            {
                this.mClickCallback(_value);
            }
        }
    }

    public IsSelected() : boolean
    {
        return this.mSelected.node.active;
    }
}

