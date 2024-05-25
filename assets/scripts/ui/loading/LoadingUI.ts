import { _decorator, Component, Node, find, Label, Sprite, sys, js, UI, JsonAsset, Tween, Quat, Vec3 } from 'cc';

import { LoadingData } from './LoadingData';
import { BaseUI } from '../../base/BaseUI';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { Localization } from '../../base/Localization';
import { BaseButton } from '../common/BaseButton';
import { GameConfig } from '../../GameConfig';
import { ProgressSlider } from '../common/ProgressSlider';



const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends BaseUI 
{
    public static PrefabPath : string = "prefab/LoadingUI";
    public static Bunddle : string = "loading";


    mProgressSlider :  ProgressSlider;
    mTitle : Label;
    mProgressTips : Label;

    InitParam() //初始化变量绑定
    {
        // this.mProgressSlider = this.GetComponentInPath("ProgressSlider" , ProgressSlider)
        this.mTitle = this.GetComponentInPath("Title" , Label);
        // this.mProgressTips = this.GetComponentInPath("ProgressTips" , Label);
    }
    BindUI()  //对初始化好的变量进行自定义操作
    {
        // this.mProgressSlider.SetEnable(false);
        // this.mProgressSlider.SetPercent(0);
        this.mTitle.string = Localization.GetString("1000");
        // this.mProgressTips.string = Localization.GetString("1001") + "0%";
    }

    RegDataNotify()  //注册数据驱动
    {
        

    }
    LateInit() //初始化结束后，间隔一帧后调用
    {
        UIMgr.Instance.LoadRestRes(()=>
        {
            // this.mProgressSlider.SetPercent(1);
            this.mTitle.string = Localization.GetString("1004");
            // this.mProgressTips.string = Localization.GetString("1001") + "100%";
            this.GoLogin();
        },
        (_restCount , _totalCount)=>
        {
            // let progress = (_totalCount - _restCount) / _totalCount;
            // let precent = (progress * 100).toFixed(1) + "%";
            // this.mProgressSlider.SetPercent(progress);
            // this.mProgressTips.string = Localization.GetString("1001") + precent;
        })
    }

    CustmoerDestory() //析构
    {

    }

    GoLogin()
    {
        // this.StartSecondsTimer(2,0.5,()=>
        // {
        //     let restTime = this.GetRestMillSeconds();
        //     if(restTime == 0)
        //     {
                UIMgr.Instance.ChangeScene(SceneType.Snake);
        //     }
        // })
    }


}

