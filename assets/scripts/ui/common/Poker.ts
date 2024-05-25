import { _decorator, Component, easing, Node, Sprite, Tween, UIOpacity, Vec3 } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from './BaseButton';
import { Calculator, PokerData, PokerNum, PokerType } from '../../tool/calculator/Calculator';
const { ccclass, property } = _decorator;

@ccclass('Poker')
export class Poker extends BaseUI {
    public static PrefabPath : string = "prefab/Poker";
    public static Bunddle : string = "common";
    public static GetPokerSrcPath() : string
    {
        return "atlas/poker/"
    }

    @property(Node) 
    mRoot: Node = null;
    @property(Node) 
    mBack: Node = null;
    @property(Node) 
    mFront: Node = null;
    @property(Sprite) 
    mNum: Sprite = null;
    @property(Sprite) 
    mSmallType: Sprite = null;
    @property(Sprite) 
    mBigTypeNumber: Sprite = null;
    @property(Sprite) 
    mBigTypeJQK: Sprite = null;
    @property(Node) 
    mDark: Node = null;
    @property(BaseButton) 
    mBtn: BaseButton = null;


    mClickCallback : Function = null;
    mPokerData : PokerData = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mBtn.SetClickCallback(()=>
        {
            if(this.mClickCallback != null)
            {
                this.mClickCallback(this);
            }
        })
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        this.mClickCallback = null;
        this.mPokerData = null;
    }

    //初始化图像
    public InitWithTypeAndNum(_type : PokerType , _num : PokerNum )
    {
        this.mPokerData = Calculator.CreatePokerData(_type , _num);
        this.LoadSrc();
    }
    //初始化图像
    public InitWithPokerData(_pokerData : PokerData)
    {
        this.mPokerData = _pokerData;
        this.LoadSrc();
    }

    public SetRootOpcity(_opacity : number)
    {
        this.mRoot.getComponent(UIOpacity).opacity = _opacity;
    }

    public ShowBack()
    {
        this.mBack.active = true;
        this.mFront.active = false;
    }

    public ShowFront()
    {
        this.mBack.active = false;
        this.mFront.active = true;
    }

    public SetClickCallback(_callback : Function)
    {
        this.mClickCallback = _callback;
    }

    public SetInteractable(_value : boolean)
    {
        this.mBtn.SetInteractable(_value);
    }

    public SetDark(_value : boolean)
    {
        this.mDark.active = _value;
    }

    public GetPokerData() : PokerData
    {
        return this.mPokerData;
    }

    //从背面翻转到正面
    public FlipToFront(_duration : number = 0.2 , _delay : number = null ,  _finishCallback :Function = null )
    {
        this.ShowBack();
        this.mRoot.setScale(Vec3.ONE);        
        let halfDuration = _duration / 2;
        let tweenFlip = new Tween(this.mRoot); 
        if(_delay != null)
        {
            tweenFlip.delay(_delay);
        }
        tweenFlip.to(halfDuration , {scale: new Vec3(0,1,1)});
        tweenFlip.call(()=>
        {
            this.ShowFront();
        });
        tweenFlip.to(halfDuration , {scale: Vec3.ONE});
        tweenFlip.call(()=>
        {
            if(_finishCallback != null)
            {
                _finishCallback();
            }
        });
        tweenFlip.start();
    }

    //从天空落下来 模拟发牌的感觉
    public FallingDown(_duration :number = 0.2 , _offsetY : number = 100 ,_delay : number = 0, 
        _startFalling  : Function = null,_afterFalling : Function = null)
    {
        //this.StopAllTween(this.mRoot);
        this.mRoot.setPosition(0 , _offsetY);
        let tweenFalling= new Tween(this.mRoot); 
        tweenFalling.delay(_delay);
        tweenFalling.call(()=>
        {
            if(_startFalling != null)
            {
                _startFalling();
            }
        })
        tweenFalling.to(_duration , {position : new Vec3(0,0,0)} , {easing : easing.quadIn});
        tweenFalling.call(()=>
        {
            if(_afterFalling != null)
            {
                _afterFalling();
            }
        })
        tweenFalling.start();
    }

    public MoveTo(_toPos : Vec3 ,_duration : number = 0.5 , _finish : Function = null )
    {
        let tweenMoveTo = new Tween(this.node); 
        tweenMoveTo.to(_duration , {position : new Vec3(_toPos.x,_toPos.y,_toPos.z)} , {easing : easing.quadIn});
        tweenMoveTo.call(()=>
        {
            if(_finish != null)
            {
                _finish();
            }
        })
        tweenMoveTo.start();
    }

    //抬起动作
    public MoveUp(_duration: number = 0.2, _offset: number = 100, _delay: number = null)
    {
        let tweenUp = new Tween(this.mRoot);
        if (_delay != null)
        {
            tweenUp.delay(_delay);
        }
        tweenUp.to(_duration, {position: new Vec3(0, _offset, 0)});
        tweenUp.start();
    }

    public StopTween()
    {
        this.StopAllTween(this.node)
        this.StopAllTween(this.mRoot)
    }


    LoadSrc()
    {
        this.ClearPokerUI();

        let srcPath = Poker.GetPokerSrcPath();
        let type = this.mPokerData.mPokerType;
        let num = this.mPokerData.mPokerNum;
        if(num == PokerNum.Jack || num == PokerNum.Queen || num == PokerNum.King)
        {
            let suffix = "";
            if(type == PokerType.Club || PokerType.Spade)
            {
                suffix = "BIcon" + num;
            }
            else
            {
                suffix = "RIcon" + num;
            }
            this.LoadSprite("common" , srcPath + suffix , (_spriteFrame)=>
            {
                this.mBigTypeJQK.spriteFrame = _spriteFrame;
                this.mBigTypeJQK.node.active = true;
            })
        }
        else
        {
            let suffix = "";
            if(type == PokerType.Spade)
            {
                suffix = "Spade"
            }
            else if(type == PokerType.Heart)
            {
                suffix = "Heart"
            }
            else if(type == PokerType.Club)
            {
                suffix = "Club"
            }
            else if(type == PokerType.Diamond)
            {
                suffix = "Diamond"
            }

            this.LoadSprite("common", srcPath + suffix , (_spriteFrame)=>
            {
                this.mBigTypeNumber.spriteFrame = _spriteFrame;
                this.mBigTypeNumber.node.active = true;
            })
        }

        let srcName = "";
        let preffix = "";
        if(type == PokerType.Spade)
        {
            srcName = "Spade"
            preffix = "B"
        }
        else if(type == PokerType.Heart)
        {
            srcName = "Heart"
            preffix = "R"
        }
        else if(type == PokerType.Club)
        {
            srcName = "Club"
            preffix = "B"
        }
        else if(type == PokerType.Diamond)
        {
            srcName = "Diamond"
            preffix = "R"
        }
        this.LoadSprite("common", srcPath + srcName , (_spriteFrame)=>
        {
            this.mSmallType.spriteFrame = _spriteFrame;
            this.mSmallType.node.active = true;
        })


        this.LoadSprite("common", srcPath + preffix + num , (_spriteFrame)=>
        {
            this.mNum.spriteFrame = _spriteFrame;
            this.mNum.node.active = true;
        })
    }

    ClearPokerUI()
    {
        this.mNum.node.active = false;
        this.mSmallType.node.active = false;
        this.mBigTypeNumber.node.active = false;
        this.mBigTypeJQK.node.active = false;

    }
}

