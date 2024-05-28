import { _decorator, CircleCollider2D, Collider2D, Component, Contact2DType, EventTouch, IPhysics2DContact, Node,PhysicsSystem2D,UITransform, Vec2, Vec3 } from 'cc';
import { SnakeExtra } from './SnakeExtra';
const { ccclass, property } = _decorator;

@ccclass('SnakeBodyNode')
export class SnakeBodyNode extends Component {
    protected onLoad(): void {
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
    }

    protected onDestroy(): void {
        this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
    }

    private outLoction:Vec2 = new Vec2()

    start() {
        console.log('--------------')
        let collider = this.node.getComponent(CircleCollider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }

        // 注册全局碰撞回调函数
        // if (PhysicsSystem2D.instance) {
        //     PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        // }
    }

    update(deltaTime: number) {
        
    }

    onTouchMove(event:EventTouch){
        let touchLoc = event.getLocation();
        const uitr = this.node.parent.getComponent(UITransform)
        const pos = new Vec3(touchLoc.x, touchLoc.y)
        let touchPos = uitr.convertToNodeSpaceAR(pos);
        touchPos.y += this.node.getComponent(UITransform).height
        // 移动精灵节点到触摸点位置
        this.node.setPosition(touchPos);
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        console.log('onBeginContact', selfCollider.tag, otherCollider.tag, contact);
        SnakeExtra.Instance.AddToMap(selfCollider, otherCollider)
    }
    onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体结束接触时被调用一次
        console.log('onEndContact', selfCollider.tag, otherCollider.tag, contact);
        SnakeExtra.Instance.RemoveFromMap(selfCollider, otherCollider)
    }
    onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 每次将要处理碰撞体接触逻辑时被调用
        console.log('onPreSolve', selfCollider.tag, otherCollider.tag, contact);
    }
    onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 每次处理完碰撞体接触逻辑时被调用
        console.log('onPostSolve', selfCollider.tag, otherCollider.tag, contact);
    }
}

