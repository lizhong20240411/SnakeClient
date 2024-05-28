import { _decorator, CircleCollider2D, Component, Label, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { SnakeExtra } from './SnakeExtra';
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
        console.log('--- SnakeExtra ---', SnakeExtra.Instance)
    }

    update(deltaTime: number) {
        // this.mTitle.string = `${deltaTime}`
    }

    lateUpdate(){
        // 计算两个圆相交的点,并将焦点坐标转换成 以圆心为圆点的相对坐标
    }
}


