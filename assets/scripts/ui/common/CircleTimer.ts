import { _decorator, Component, Node, Sprite, Label, Color } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('CircleTimer')
export class CircleTimer extends BaseUI {
    @property(Sprite) 
    mBG: Sprite = null;
    @property(Sprite) 
    mProgress: Sprite = null;
    @property(Label) 
    mCount: Label = null;
    @property(Label) 
    mTips: Label = null;
    mSecondCallback : Function = null;

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

    public SetTimerTitle(_title : string)
    {
        this.mCount.string = _title;
    }

    public SetColor(_color : Color)
    {
        this.mProgress.color = _color;
        this.mCount.color = _color;
    }

    public SetProgress(_progress : number)
    {
        this.mProgress.fillRange = _progress;
    }

    public StartTimer(_totalTime : number , _SecondCallback : Function = null)
    {
        this.node.active = true;
        if(_totalTime == 0)
        {
            return;
        }
        this.StartSecondsTimer(_totalTime , 0.01);
        this.mSecondCallback = _SecondCallback;
        this.OnSecondTimer();
    }

    public StopTimer()
    {
        this.StopSecondsTimer();
        this.node.active = false;
    }

    public SetTips(_tips : string)
    {
        this.mTips.string = _tips
    }

    OnSecondTimer()
    {
        this.UpdateCount();
        this.UpdateProgress();
    }

    UpdateCount()
    {
        let seconds = this.GetRestSeconds();
        this.mCount.string = seconds.toString();
        if(this.mSecondCallback != null)
        {
            this.mSecondCallback(seconds);
        }
        
        this.UpdateColor();
    }

    UpdateProgress()
    {
        let millSeconds = this.GetRestMillSeconds();
        let ratio = millSeconds/this.mTotalCountTime;
        this.mProgress.fillRange = ratio;
    }

    UpdateColor()
    {
        // let seconds = this.GetRestSeconds();
        // let color;
        // if(seconds<=3)
        // {
        //     color = new Color(220,34,34);
        // }
        // else
        // {
        //     color = new Color(34,220,82);
        // }
        // //this.mBG.color = color;
        // this.mProgress.color = color;
        // this.mCount.color = color;
    }
}

