import { _decorator, Component, Label, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('SnakeUI')
export class SnakeUI extends BaseUI {
    public static PrefabPath : string = "prefab/SnakeUI";
    public static Bunddle : string = "snake";

    mTitle : Label;

    InitParam() //初始化变量绑定
    {
        this.mTitle = this.GetComponentInPath("Title" , Label);
    }
    BindUI()  //对初始化好的变量进行自定义操作
    {

    }

    RegDataNotify()  //注册数据驱动
    {
        

    }
    LateInit() //初始化结束后，间隔一帧后调用
    {

    }

    CustmoerDestory() //析构
    {

    }

    start() {

    }

    update(deltaTime: number) {
        // this.mTitle.string = `${deltaTime}`
    }
}


