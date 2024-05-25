import { _decorator, Component, Node, SpriteFrame, ImageAsset, assetManager, TweenSystem, game, Game, isValid } from 'cc';
import { ResMgr } from './ResMgr';
import { UIMgr } from './UIMgr';




class SubViewKeyPair {
    constructor(_key: string, _value: Node) {
        this.key = _key;
        this.value = _value;
    }
    key: string;
    value: Node;
}
const { ccclass, property } = _decorator;
// InitParam()
// {

// }
// BindUI()
// {

// }
// RegDataNotify()
// {

// }
// LateInit()
// {

// }
// CustmoerDestory()
// {

// }
@ccclass('BaseUI')

export abstract class BaseUI extends Component {
    mInitFlag : boolean = false;
    mLayerList: Array<SubViewKeyPair>;

    mIsWindow : boolean = false;
    mTotalCountTime : number;
    mTimerStartingTime : number;
    mTimerCallback : Function = null;
    mTimerRunning : boolean = false;

    protected __preload(): void 
    {
        this.PreInit();
    }

    onLoad() 
    {

    }

    protected start(): void 
    {
        this.BindUI();
        game.on(Game.EVENT_SHOW,this.OnGameShow,this);
        game.on(Game.EVENT_HIDE,this.OnGameHide,this);
        this.RegDataNotify();
        this.scheduleOnce(()=>
        {
            this.LateInit();
        },0.01)
    }


    onDestroy() 
    {
        game.off(Game.EVENT_SHOW,this.OnGameShow,this);
        game.off(Game.EVENT_HIDE,this.OnGameHide,this);
        this.StopSecondsTimer();
        this.CustmoerDestory();
        this.mLayerList = null;
    }

    //“把UI节点与代码变量”绑定起来
    abstract InitParam();
    //绑定ui事件
    abstract BindUI();
    //数据驱动注册
    abstract RegDataNotify();
    //延迟一贞初始化的内容
    abstract LateInit();
    //自定义析构
    abstract CustmoerDestory();

    public Show(_val: boolean) 
    {
        this.node.active = _val;
    }

    PreInit()
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mLayerList = new Array<SubViewKeyPair>();
        this.InitParam();
    }

    CheckInitFlag()
    {
        if(this.mInitFlag)
        {
            return true;
        }

        this.mInitFlag = true;
        return false;   
    }

    LoadSprite(_bundleName: string, _assetPath: string, _loadFinish: Function) 
    {
        ResMgr.GetAssetInBundle(_bundleName, _assetPath, ImageAsset, (_imageAsset) => 
        {
            if (isValid(this.node, true) == false) 
            {
                return;
            }
            let tempSpriteFrame = SpriteFrame.createWithImage(_imageAsset);
            _loadFinish(tempSpriteFrame);
        });
    }

    LoadHead(_head : string ,  _loadFinish: Function)
    {
        let isUrl = _head.startsWith("http");
        if(isUrl)
        {
            this.LoadRemoteSprite(_head,_loadFinish);
        }
        else
        {
            this.LoadLocalHead(_head.toString() , _loadFinish);
        }
    }

    LoadLocalHead(_headIndex: string, _loadFinish: Function) 
    {
        this.LoadSprite('common', 'atlas/head/' + _headIndex, (_spriteFrame) => 
        {
            if (_loadFinish) 
            {
                _loadFinish(_spriteFrame);
            }
        });
    }

    LoadRemoteSprite(_url: string, _finish: Function) 
    {
        if(_url == "")
        {
            return;
        }
        assetManager.loadRemote(_url, (_err: Error | null, _imageAsset: ImageAsset) => 
        {
            if (isValid(this.node, true) == false) 
            {
                return;
            }
            if (_err) 
            {
                console.error(_err.message || _err);
            } 
            else if (_finish != null) 
            {
                let tempSpriteFrame = SpriteFrame.createWithImage(_imageAsset);
                _finish(tempSpriteFrame);
            }
        });
    }

    LoadBase64Spirte(_base64 : string ,  _finish: Function)
    {
        assetManager.loadRemote(_base64,{ ext: ".png" }, (err, res: ImageAsset) => 
        {
            let spriteFrame = SpriteFrame.createWithImage(res);
            _finish(spriteFrame);
        })
    }

    LoadPrefab(_scriptName : string ,_bundleName: string, _assetPath: string, _loadFinish: Function) 
    {
        UIMgr.Instance.CreatePrefab(_scriptName,_bundleName, _assetPath, (_prefab) => 
        {
            if (isValid(this.node, true) == false) 
            {
                return;
            }
            _loadFinish(_prefab);
        });
    }

    HaveSubView(_bundleName : string, _assetPath : string ) : boolean
    {
        let key = _bundleName + _assetPath;
        let index = this.mLayerList.findIndex((_item) => _item.key === key);
        return index >= 0;
    }

    GetSubView(_bundleName : string, _assetPath : string) : Node
    {
        let key = _bundleName + _assetPath;
        let index = this.mLayerList.findIndex((_item) => _item.key === key);
        if(index < 0)
        {
            return null;
        }

        return this.mLayerList[index].value;
    }


    AddSubView(_scriptName : string , _bundleName : string, _assetPath : string ,  _loadFinish : Function = null , _parent : Node = null)
    {
        let key = _bundleName + _assetPath;
        let index = this.mLayerList.findIndex((_item) => _item.key === key);
        if (index >= 0) 
        {
            let currentValue = this.mLayerList[index].value;
            if(currentValue == null)
            {
                console.warn("AddSubView 正在创建中，请不要重复创建 key ==" ,key)
                return;
            }
            let currentScript : BaseUI = UIMgr.GetScriptInTarget(currentValue , BaseUI);
            currentScript.Show(true);
            currentScript.node.setSiblingIndex(currentScript.node.parent.children.length);
            if (_loadFinish != null) 
            {
                _loadFinish(currentScript);
            }
        } 
        else 
        {
            let keyPair = new SubViewKeyPair(key, null);
            this.mLayerList.push(keyPair);
            this.LoadPrefab(_scriptName , _bundleName, _assetPath, (_node) => 
            {
                if (isValid(this.node, true) == false) 
                {
                    return;
                }
                if (_parent == null) 
                {
                    _parent = this.node;
             
                } 
                _parent.addChild(_node);
                let currentScript : BaseUI = UIMgr.GetScriptInTarget(_node , BaseUI);
                keyPair.value = _node;
                if (_loadFinish != null) 
                {
                    _loadFinish(currentScript);
                }
            });
        }
    }

    TryToHide() 
    {
        let parentNode = this.node.parent;
        let parentScript : BaseUI = UIMgr.GetScriptInTarget(parentNode , BaseUI);
        if(parentScript == null)
        {
            this.Show(false);
            return;
        }

        if(parentScript.mIsWindow)
        {
            parentScript.Show(false);
        }
        else
        {
            this.Show(false);
        }
        
    }
    //启动秒表       //计时器，这个计时器可以自动补偿切到后台的时候定时器停止造成的时间对不上
    StartSecondsTimer(_totalTime : number , _timeSpace :number = 1 , _callback : Function = null)
    {
        this.StopSecondsTimer();
        this.mTimerCallback = _callback;
        this.mTotalCountTime = _totalTime * 1000;
        let tempDate = new Date();
        this.mTimerStartingTime = tempDate.getTime(); 
        if(_totalTime <= 0)
        {
            this.OnSecondTimer();
            return;
        }
        this.mTimerRunning = true;
        this.schedule(this.SecondsTimerLogic, _timeSpace);
        this.SecondsTimerLogic();
    }

    StopSecondsTimer()
    {
        this.mTimerRunning = false;
        this.unschedule(this.SecondsTimerLogic);
    }

    GetRestSeconds():number
    {
        let tempDate = new Date();
        let nowTime = tempDate.getTime(); 
        let timePast = nowTime - this.mTimerStartingTime;

        let restTime = this.mTotalCountTime - timePast;
        if(restTime <= 0)
        {
            return 0;
        }
        return Math.ceil(restTime/1000);
    }

    GetRestMillSeconds():number
    {
        let tempDate = new Date();
        let nowTime = tempDate.getTime(); 
        let timePast = nowTime - this.mTimerStartingTime;
        let restTime = this.mTotalCountTime - timePast;

        if(restTime <= 0)
        {
            return 0;
        }
        
        return restTime;
    }

    SecondsTimerLogic()
    {
        let restTime = this.GetRestMillSeconds();
        if(restTime <= 0)
        {
            restTime = 0;
            this.StopSecondsTimer();
        }
        this.OnSecondTimer();
    }

    OnSecondTimer()
    {
        if(this.mTimerCallback != null)
        {
            this.mTimerCallback();
        }
    }

    AddTouchCloseEvent(_node : Node)
    {
        _node.on(Node.EventType.TOUCH_END,this.TouchToClose,this);
    }

    TouchToClose()
    {
        this.TryToHide();
    }

    StopAllTween(_target : Node = null)
    {
        let target = _target == null ? this.node : _target;
        TweenSystem.instance.ActionManager.pauseTarget(target);
        TweenSystem.instance.ActionManager.removeAllActionsFromTarget(target);
    }

    DeleteSelf()
    {
        if (isValid(this.node, true) == false) 
        {
            return;
        }
        this.StopAllTween();
        this.node.removeFromParent();
        this.node.destroy();
    }


    OnGameShow()
    {
        if(this.mTimerRunning)
        {
            this.SecondsTimerLogic();
        }
    }

    OnGameHide()
    {

    }

    public RemoveAndDestoryAllChild(_target : Node)
    {
        while(_target.children.length > 0)
        {
            let current =  _target.children[0];
            current.removeFromParent();
            current.destroy();
        }
    }

    public AddBaseUIInNode(_Node : Node , _scriptName : any) : any
    {
        if(_scriptName == "")
        {
            return null;
        }

        let scriptNameFromSkin = UIMgr.GetScriptNameFromSkin(_scriptName);
        let script = _Node.addComponent(scriptNameFromSkin)as BaseUI;
        return script;
    }

    //给某个节点添加脚本  添加的脚本需要是baseui或继承baseui的脚本
    public AddBaseUIInPath(_path : string , _scriptName : any) : any
    {
        let tempNode = this.node.getChildByPath(_path);
        if(!tempNode)
        {
            return null;
        }
        let scriptNameFromSkin = UIMgr.GetScriptNameFromSkin(_scriptName);
        let script = tempNode.addComponent(scriptNameFromSkin) as BaseUI;
        return script;
    }

    public GetComponentInPath(_path : string , _scriptName : any = "") : any
    {
        let tempNode = this.node.getChildByPath(_path);
        if(!tempNode)
        {
            return null;
        }
        if(_scriptName == "")
        {
            return tempNode;
        }
        else
        {
            if(typeof(_scriptName) == "string")
            {
                let scriptNameFromSkin = UIMgr.GetScriptNameFromSkin(_scriptName);
                let script = tempNode.getComponent(scriptNameFromSkin);
                return script;
            }
            else
            {
                return tempNode.getComponent(_scriptName);
            }
        }
    }
}

