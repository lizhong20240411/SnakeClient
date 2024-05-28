import { _decorator, Collider2D, Component, Label, Node, UITransform, Vec2 } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Singleton } from '../../base/Singleton';
const { ccclass, property } = _decorator;

// 构造一个圆
export class Circle{
    constructor(center:Vec2, radius:number){
        this.center = center
        this.radius = radius
    }
    center:Vec2
    radius:number
}

export class CollideGroup{
    constructor(Co1:Collider2D, Co2:Collider2D, Node1:Node, Node2:Node){
        [this.first, this.second] = Co1.tag < Co2.tag ? [Co1,Co2] : [Co2,Co1]
        this.key = `${this.first.tag}${this.second.tag}`
        this.circleFirst = new Circle(new Vec2(Node1.position.x, Node1.position.y), Node1.getComponent(UITransform).width/2)
        this.circleSecond = new Circle(new Vec2(Node2.position.x, Node2.position.y), Node2.getComponent(UITransform).width/2)
        this.intersectPoints = this.intersectionPoints()
    }
    first:Collider2D
    second:Collider2D
    key:string
    circleFirst:Circle
    circleSecond:Circle
    // 交点
    intersectPoints:Vec2[]

    // 两个圆 相交的交点,  现有缺陷为 两个圆不在同一坐标系  因为他们有各自的父节点, 将父节点统一, 坐标系统一
    /*
    
    interface Point {
    x: number;
    y: number;
}

interface Circle {
    center: Point;
    radius: number;
}

// 计算两个圆相交的交点坐标
function calculateIntersectionPoints(circle1: Circle, circle2: Circle): Point[] {
    const intersectionPoints: Point[] = [];

    // 计算两个圆之间的距离
    const distanceBetweenCenters = Math.sqrt(
        Math.pow(circle2.center.x - circle1.center.x, 2) +
        Math.pow(circle2.center.y - circle1.center.y, 2)
    );

    // 计算相交的角度
    const angle1 = Math.acos(
        (Math.pow(circle1.radius, 2) + Math.pow(distanceBetweenCenters, 2) - Math.pow(circle2.radius, 2)) /
        (2 * circle1.radius * distanceBetweenCenters)
    );
    const angle2 = Math.atan2(circle2.center.y - circle1.center.y, circle2.center.x - circle1.center.x);

    // 计算相交点坐标
    const intersectionAngle1 = angle2 + angle1;
    const intersectionAngle2 = angle2 - angle1;

    const intersectionPoint1: Point = {
        x: circle1.center.x + circle1.radius * Math.cos(intersectionAngle1),
        y: circle1.center.y + circle1.radius * Math.sin(intersectionAngle1)
    };
    const intersectionPoint2: Point = {
        x: circle1.center.x + circle1.radius * Math.cos(intersectionAngle2),
        y: circle1.center.y + circle1.radius * Math.sin(intersectionAngle2)
    };

    intersectionPoints.push(intersectionPoint1, intersectionPoint2);

    return intersectionPoints;
}

// 示例用法
const circle1: Circle = {
    center: { x: 0, y: 0 },
    radius: 3
};

const circle2: Circle = {
    center: { x: 4, y: 0 },
    radius: 2
};

const intersections = calculateIntersectionPoints(circle1, circle2);
console.log("Intersection Points:", intersections);

    */
    // 获取两个圆的交点    
    private intersectionPoints(): Vec2[] {
        const circle1 = this.circleFirst
        const circle2 = this.circleSecond
        const d = Math.sqrt(Math.pow(circle2.center.x - circle1.center.x, 2) + Math.pow(circle2.center.y - circle1.center.y, 2));
        const angle1 = Math.acos((Math.pow(circle1.radius, 2) + Math.pow(d, 2) - Math.pow(circle2.radius, 2)) / (2 * circle1.radius * d));
        const angle2 = Math.atan2(circle2.center.y - circle1.center.y, circle2.center.x - circle1.center.x);
    
        const intersection1 = new Vec2(
            circle1.center.x + circle1.radius * Math.cos(angle1 + angle2),
            circle1.center.y + circle1.radius * Math.sin(angle1 + angle2)
        );
    
        const intersection2 = new Vec2(
            circle1.center.x + circle1.radius * Math.cos(-angle1 + angle2),
            circle1.center.y + circle1.radius * Math.sin(-angle1 + angle2)
        );
    
        return [intersection1, intersection2];
    }
}

export class SnakeExtra extends Singleton<SnakeExtra>()
{
    private CollideMap:Map<string,CollideGroup> = new Map<string,CollideGroup>()

    public AddToMap(Co1:Collider2D, Co2:Collider2D, Node1:Node, Node2:Node){
        const obj = new CollideGroup(Co1, Co2, Node1, Node2)
        if (!this.CollideMap.has(obj.key)) {
            this.CollideMap.set(obj.key, obj)
        }
    }

    public RemoveFromMap(Co1:Collider2D, Co2:Collider2D, Node1:Node, Node2:Node){
        const obj = new CollideGroup(Co1, Co2, Node1, Node2)
        if (this.CollideMap.has(obj.key)) {
            this.CollideMap.delete(obj.key)
        }
    }
}


