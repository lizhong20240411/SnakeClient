import { _decorator, Component, profiler } from 'cc';
import { JsbScript } from './base/JsbScript';
import { Localization } from './base/Localization';
import { SceneConfig, SceneType, UIMgr } from './base/UIMgr';
import { Tool } from './base/Tool';
import { LoadingUI } from './ui/loading/LoadingUI';
// import { LoginUI } from './ui/login/LoginUI';
// import { HallUI } from './ui/hall/main/HallUI';
// import { GameUI } from './ui/hall/main/GameUI';
import { SnakeUI } from './ui/game/SnakeUI';
import { Calculator } from './tool/calculator/Calculator';

const jsb = (<any>window).jsb;


// macro.CLEANUP_IMAGE_CACHE = false;
// dynamicAtlasManager.enabled = true;
const { ccclass, property } = _decorator;


@ccclass('Start')
export class Start extends Component 
{
    onLoad()
    {

    }

    start() 
    {
        //打开性能显示
        profiler.showStats()
        // profiler.hideStats()
        //保持屏幕常亮
        JsbScript.KeepScreenOn(true);
        //获取系统语言设置
        let systemLanguage = JsbScript.getSysLanguage();
        //设置当前语言
        Localization.SetLanguage(systemLanguage);
        //初始化UIMgr
        let sceneCfgs = 
        [
            new SceneConfig(SceneType.Loading , LoadingUI.PrefabPath ,LoadingUI.Bunddle ,"LoadingUI",[]),
            // new SceneConfig(SceneType.Login,  LoginUI.PrefabPath ,LoginUI.Bunddle, "LoginUI" ,[]),
            // new SceneConfig(SceneType.Hall, HallUI.PrefabPath ,HallUI.Bunddle, "HallUI" ,[]),
            new SceneConfig(SceneType.Snake, SnakeUI.PrefabPath ,SnakeUI.Bunddle, "SnakeUI" ,[]),
        ];

        UIMgr.Instance.Init(()=>
        {
            //初始化UIMgr成功后   跳转到Loading页面
            UIMgr.Instance.ChangeScene(SceneType.Loading);  
        } , sceneCfgs);
    }
}
