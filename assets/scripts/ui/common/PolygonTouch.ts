import { _decorator, Component, EventTouch, Input, input, Intersection2D, math, Node, Sprite, Vec2 } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;


//不规则图形点击检查
//只能是凸多边形
//子node必须顺时针顺序排列
//子node必须至少有3个 才能计算
@ccclass('PolygonTouch')
export class PolygonTouch extends BaseUI
{
    public static PrefabPath : string = "prefab/PolygonTouch";
    public static Bunddle : string = "common";
    public static Debug : boolean = false;
    mTouchStartCallback : Function = null;
    mTouchEndCallback : Function = null;

    mSelected : boolean = false;
    InitParam()
    {
        this.mSelected = false;
        this.node.on(Input.EventType.TOUCH_START, this.OnTouchStart, this);
        this.node.on(Input.EventType.TOUCH_END, this.OnTouchEnd, this);
    }
    BindUI()
    {
        if(PolygonTouch.Debug == false)
        {
            for(let i = 0 ; i < this.node.children.length ; i++)
            {
                this.node.children[i].getComponent(Sprite).enabled = false;
            }
        }
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        this.mTouchStartCallback = null;
        this.mTouchEndCallback = null;
        this.node.off(Input.EventType.TOUCH_START, this.OnTouchStart, this);
        this.node.off(Input.EventType.TOUCH_END, this.OnTouchEnd, this);
    }

    public SetTouchCallback(_touchStartCallback : Function , _touchEndCallback : Function)
    {
        this.mTouchStartCallback = _touchStartCallback;
        this.mTouchEndCallback = _touchEndCallback;
    }

    GetSubNodeWorldPosition(_index : number) : math.Vec3
    {
        return this.node.children[_index].getWorldPosition();
    }

    GetSubNodePolygon() : Array<Vec2>
    {
        let vertArray = new Array<Vec2>();
        for(let i = 0 ; i < this.node.children.length ; i++)
        {
            let currentNodeWorldPos = this.GetSubNodeWorldPosition(i);
            let tempVec2 = new Vec2(currentNodeWorldPos.x , currentNodeWorldPos.y);
            vertArray.push(tempVec2);
        }
        return vertArray;
    }
    
    OnTouchStart(event: EventTouch) 
    {
        event.preventSwallow = true;
        // console.log(event.getLocation());  
        // console.log(event.getUILocation()); 
        let pos = event.getUILocation();
        this.TouchStartCheck(new Vec2(pos.x , pos.y));
    }

    OnTouchEnd(event: EventTouch) 
    {
        event.preventSwallow = true;
        this.onTouchEndCheck();
    }

    TouchStartCheck(_touchPos : Vec2) 
    {
        if(this.node.children.length < 3)
        {
            return;
        }
        if(Intersection2D.pointInPolygon(_touchPos,this.GetSubNodePolygon()))
        {
            this.OnSelect();
        }
    }

    onTouchEndCheck() 
    {
        if(this.mSelected)
        {
            if(this.mTouchEndCallback != null)
            {
                this.mTouchEndCallback();
            }
        }

        this.mSelected = false;
    }

    OnSelect()
    {
        this.mSelected = true;
        if(this.mTouchStartCallback != null)
        {
            this.mTouchStartCallback();
        }
    }
}


