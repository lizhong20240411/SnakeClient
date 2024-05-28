import { _decorator, Collider2D, Component, Label, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Singleton } from '../../base/Singleton';
const { ccclass, property } = _decorator;



export class CollideGroup{
    constructor(Co1:Collider2D, Co2:Collider2D){
        [this.first, this.second] = Co1.tag < Co2.tag ? [Co1,Co2] : [Co2,Co1]
        this.key = `${this.first.tag}${this.second.tag}`
    }
    first:Collider2D
    second:Collider2D
    key:string
}

export class SnakeExtra extends Singleton<SnakeExtra>()
{
    private CollideMap:Map<string,CollideGroup> = new Map<string,CollideGroup>()

    public AddToMap(Co1:Collider2D, Co2:Collider2D){
        const obj = new CollideGroup(Co1, Co2)
        if (!this.CollideMap.has(obj.key)) {
            this.CollideMap.set(obj.key, obj)
        }
    }

    public RemoveFromMap(Co1:Collider2D, Co2:Collider2D){
        const obj = new CollideGroup(Co1, Co2)
        if (this.CollideMap.has(obj.key)) {
            this.CollideMap.delete(obj.key)
        }
    }
}


