import { _decorator, Component, Node, Tween, Widget, Vec3, UITransform, easing, BlockInputEvents } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('MovingShow')
export class MovingShow extends BaseUI {
    private mMoving : boolean = false;

    private mAnimationShowType : AnimationShowType = null;
    private mOriginPos : Vec3 = null;
    private mShowCallback : Function = null;
    private mHideCallback : Function = null;
    private mStartHideCallback : Function = null;   // 开始执行动画的时候 执行的回调
    private mDuration : number = 0.35;

    private mRootNode : Node = null;
    private mTargetNode : Node = null;


    private mShowing : boolean = false;

    onEnable()
    {
        this.ResetPosition();
        this.ShowAnimation();
    }

    InitParam()
    {

    }
    BindUI()
    {
        if(!this.node.getComponent(BlockInputEvents))
        {
            this.node.addComponent(BlockInputEvents);
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
        this.mShowCallback = null;
        this.mHideCallback = null;
        this.mStartHideCallback = null;
        this.mRootNode = null;
    }

    /**
     * 当选择 ScaleIn 时, 可能会传入指定的缩放节点 _TargetNode
     */
    public SetRoot(_RootNode : Node, _TargetNode?:Node)
    {
        this.mRootNode = _RootNode;
        this.mTargetNode = _TargetNode
    }

    public SetDuration(_duration : number)
    {
        this.mDuration = _duration;
    }

    public SetShowAnimationCallback(_showCallback : Function)
    {
        this.mShowCallback = _showCallback;
    }

    public SetHideAnimationCallback(_hideCallback : Function)
    {
        this.mHideCallback = _hideCallback;
    }

    public SetStartHideCallback(_hideCallback : Function)
    {
        this.mStartHideCallback = _hideCallback;
    }

    public SetAnimationType(_type : AnimationShowType)
    {
        this.mAnimationShowType = _type;
        let widget = this.node.getComponent(Widget);
        if(widget)
        {
            if(widget.enabled == true)
            {
                widget.updateAlignment();
            }
            widget.enabled = false;
            widget.destroy();
        }
        this.mOriginPos = new Vec3(this.node.position.x , this.node.position.y , this.node.position.z);
        this.ResetPosition();
    }

    ResetPosition()
    {
        if(this.mAnimationShowType == AnimationShowType.None)
        {
            return;
        }

        if(this.mAnimationShowType == AnimationShowType.FromLeft)
        {
            let width = this.node.getComponent(UITransform).width;
            let startPos = new Vec3(this.mOriginPos.x - width, this.mOriginPos.y , this.mOriginPos.z);
            this.node.setPosition(startPos);
        }
        else if(this.mAnimationShowType == AnimationShowType.FromBottom)
        {
            let height = this.node.getComponent(UITransform).height;
            let startPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y - height , this.mOriginPos.z);
            this.node.setPosition(startPos);
        }
        else if(this.mAnimationShowType == AnimationShowType.FromRight)
        {
            let width = this.node.getComponent(UITransform).width;
            let startPos = new Vec3(this.mOriginPos.x + width,this.mOriginPos.y , this.mOriginPos.z);
            this.node.setPosition(startPos);
        }
        else if(this.mAnimationShowType == AnimationShowType.FromTop)
        {
            let height = this.node.getComponent(UITransform).height;
            let startPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y + height , this.mOriginPos.z);
            this.node.setPosition(startPos);
        }
    }

    public ShowAnimation()
    {
        if(this.mAnimationShowType == AnimationShowType.None)
        {
            return;
        }

        if(this.mMoving)
        {
            return;
        }

        if(this.mShowing)
        {
            return;
        }
        this.mMoving = true;
        this.mShowing = true;
        this.StopAllTween();

        if(this.mAnimationShowType == AnimationShowType.FromLeft)
        {
            let width = this.node.getComponent(UITransform).width;
            let startPos = new Vec3(this.mOriginPos.x - width, this.mOriginPos.y , this.mOriginPos.z);
            this.node.setPosition(startPos);
        }
        else if(this.mAnimationShowType == AnimationShowType.FromBottom)
        {
            let height = this.node.getComponent(UITransform).height;
            let startPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y - height , this.mOriginPos.z);
            this.node.setPosition(startPos);
        }
        else if(this.mAnimationShowType == AnimationShowType.FromRight)
        {
            let width = this.node.getComponent(UITransform).width;
            let startPos = new Vec3(this.mOriginPos.x + width,this.mOriginPos.y , this.mOriginPos.z);
            this.node.setPosition(startPos);
        }
        else if(this.mAnimationShowType == AnimationShowType.FromTop)
        {
            let height = this.node.getComponent(UITransform).height;
            let startPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y + height , this.mOriginPos.z);
            this.node.setPosition(startPos);
        }


        switch(this.mAnimationShowType)
        {
            case AnimationShowType.FromLeft:
                this.ShowAnimationFromLeft();
                break
            case AnimationShowType.FromBottom:
                this.ShowAnimationFromBottom();
                break
            case AnimationShowType.FromRight:
                this.ShowAnimationFromRight();
                break
            case AnimationShowType.FromTop:
                this.ShowAnimationFromTop();
                break
            case AnimationShowType.ScaleIn:
                this.ShowAnimationScaleIn();
                break
        }
    }

    public HideAnimation()
    {
        if(this.mAnimationShowType == AnimationShowType.None)
        {
            this.HideRoot();
            return;
        }

        if(this.mMoving)
        {
            return;
        }
        if(this.mShowing == false)
        {
            return;
        }

        if (this.mStartHideCallback != null) {
            this.mStartHideCallback()
        }

        this.mMoving = true;
        this.mShowing = false;
        this.StopAllTween();
        switch(this.mAnimationShowType)
        {
            case AnimationShowType.FromLeft:
                this.HideAnimationFromLeft();
                break
            case AnimationShowType.FromBottom:
                this.HideAnimationFromBottom();
                break
            case AnimationShowType.FromRight:
                this.HideAnimationFromRight();
                break
            case AnimationShowType.FromTop:
                this.HideAnimationFromTop();
                break
            case AnimationShowType.ScaleIn:
                this.HideAnimationScaleIn()
                break
        }
    }

    private ShowAnimationFromLeft()
    {
        let toPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y , this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            if(this.mShowCallback !=null)
            {
                this.mShowCallback();
            }
        });
        tempTween.start();
    }

    private HideAnimationFromLeft()
    {
        let width = this.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x - width , this.mOriginPos.y , this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            this.HideRoot();
        });
        tempTween.start();
    }

    private ShowAnimationFromBottom()
    {
        let toPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y , this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            if(this.mShowCallback !=null)
            {
                this.mShowCallback ();
            }
        });
        tempTween.start();
    }

    private HideAnimationFromBottom()
    {
        let height = this.node.getComponent(UITransform).height;
        let startPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y - height, this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            this.HideRoot();
        });
        tempTween.start();
    }

    private ShowAnimationFromTop()
    {
        let toPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y , this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            if(this.mShowCallback !=null)
            {
                this.mShowCallback ();
            }
        });
        tempTween.start();
    }

    private HideAnimationFromTop()
    {
        let height = this.node.getComponent(UITransform).height;
        let startPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y + height, this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            this.HideRoot();
        });
        tempTween.start();
    }

    private ShowAnimationScaleIn(){
        const actNode = this.mTargetNode || this.node
        actNode.scale = new Vec3(0, 0, 1)
        const tempTween = new Tween(actNode);
        tempTween.to(this.mDuration, { scale: new Vec3(1, 1, 1) }, {easing:easing.quartOut});
        tempTween.call(()=>
        {
            this.mMoving = false;
            if(this.mShowCallback !=null)
            {
                this.mShowCallback ();
            }
        });
        tempTween.start();
    }

    private HideAnimationScaleIn()
    {
        const actNode = this.mTargetNode || this.node
        const tempTween = new Tween(actNode);
        tempTween.to(this.mDuration, { scale: new Vec3(0, 0, 1) }, {easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            this.HideRoot();
        });
        tempTween.start();
    }
    
    private ShowAnimationFromRight()
    {
    
        let toPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y , this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            if(this.mShowCallback !=null)
            {
                this.mShowCallback ();
            }
        });
        tempTween.start();
    }

    private HideAnimationFromRight()
    {
        let width = this.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x + width , this.mOriginPos.y , this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            this.HideRoot();
        });
        tempTween.start();
    }

    private HideRoot()
    {
        if(this.mRootNode != null)
        {
            this.mRootNode.active = false;
        }
        if(this.mHideCallback != null)
        {
            this.mHideCallback();
        }
    }
}

export enum AnimationShowType
{
    FromLeft = 0, //从屏幕左侧滑出
    FromBottom, //从屏幕底部滑出
    FromRight , //从屏幕右边滑出
    FromTop, //从顶部滑出
    ScaleIn, // 缩放进入(0-1)
    None,
}