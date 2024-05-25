import { _decorator, Component, EventTouch, Input, input, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('InputSystemDispatcher')
export class InputSystemDispatcher extends BaseUI
{
    InitParam()
    {
        this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
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
        this.node.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(event: EventTouch) 
    {
        event.preventSwallow = true;
        // console.log(event.getLocation());  
        // console.log(event.getUILocation()); 

    }

    onTouchEnd(event: EventTouch) 
    {
        event.preventSwallow = true;
    }
}

