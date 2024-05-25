import { _decorator, Component, Enum, Node, Slider, Sprite, UITransform, Widget } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

enum ProgressSliderType
{
    Simple = 0,
    Slice = 1,
}

@ccclass('ProgressSlider')
export class ProgressSlider extends BaseUI 
{

    @property({ type: Enum(ProgressSliderType)})
    private mType: ProgressSliderType = ProgressSliderType.Simple;
    @property(Slider) 
    mSlider: Slider = null;
    @property(Node) 
    mHadnle: Node = null;
    @property(Sprite) 
    mProgress: Sprite = null;

    mPrgressWidth : number = 0;

    mEndCallback :Function = null;
    mDragCallback:Function = null;
    onEnable()
    {

    }
    InitParam()
    {

    }
    BindUI()
    {
        this.mHadnle.on(Node.EventType.TOUCH_END,()=>
        {
            this.UpdateProgress(this.mSlider.progress);
            if(this.mEndCallback)
            {
                this.mEndCallback(this.mSlider.progress);
            }
        });

        this.mHadnle.on(Node.EventType.TOUCH_CANCEL,()=>
        {
            this.UpdateProgress(this.mSlider.progress);
            if(this.mEndCallback)
            {
                this.mEndCallback(this.mSlider.progress);
            }
        });


        this.mSlider.node.on("slide",()=>
        {
            this.UpdateProgress(this.mSlider.progress);
            if(this.mDragCallback)
            {
                this.mDragCallback(this.mSlider.progress);
            }
        });
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        this.mEndCallback = null;
        this.mDragCallback = null;
    }


    public GetPercent():number
    {
        return this.mSlider.progress;
    }


    public SetEndCallback(_callback : Function)
    {
        this.mEndCallback = _callback;
    }

    public SetDragCallback(_callback : Function)
    {
        this.mDragCallback = _callback;
    }

    public SetPercent(_value : number)
    {
        this.ChangeProgressToSliceType();
        this.mSlider.progress = _value;
        this.UpdateProgress(_value);
    }

    UpdateProgress(_value : number)
    {
        if(this.mType == ProgressSliderType.Simple)
        {
            this.mProgress.fillRange = _value;
        }
        else if(this.mType == ProgressSliderType.Slice)
        {
            let currentLength = this.mPrgressWidth * _value;
            if(this.mSlider.direction == Slider.Direction.Horizontal)
            {
                this.mProgress.getComponent(UITransform).width = currentLength;
            }
            else
            {
                this.mProgress.getComponent(UITransform).height = currentLength;
            }
        }
    }

    ChangeProgressToSliceType()
    {
        if(this.mType == ProgressSliderType.Simple)
        {
            return;
        }

        if(this.mPrgressWidth != 0)
        {
            return;
        }

        if(this.mSlider.direction == Slider.Direction.Horizontal)
        {
            this.mPrgressWidth = this.node.getComponent(UITransform).width;
            this.mProgress.getComponent(UITransform).anchorX = 0;
            this.mProgress.type = Sprite.Type.SLICED;
            let widget = this.mProgress.getComponent(Widget);
            widget.isAlignLeft = true;
            widget.isAlignRight = false;
            widget.left = 0;
            widget.updateAlignment();
        }
        else
        {
            this.mPrgressWidth = this.node.getComponent(UITransform).height;
            this.mProgress.getComponent(UITransform).anchorY = 0;
            this.mProgress.type = Sprite.Type.SLICED;
            let widget = this.mProgress.getComponent(Widget);
            widget.isAlignBottom = true;
            widget.isAlignTop = false;
            widget.bottom = 0;
            widget.updateAlignment();
        }

    }

    public SetEnable(_value : boolean)
    {
        this.mSlider.enabled = _value;
    }
}
