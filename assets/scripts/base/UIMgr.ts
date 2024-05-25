
import { BlockInputEvents, Prefab, find, instantiate, js  ,Node} from "cc";

import { ResMgr } from "./ResMgr";
import { Singleton } from "./Singleton";

import { GameConfig } from "../GameConfig";

class LayerKeyPair
{
    constructor(_key :string  , _value : Node , _belong :SceneType , _tag : string) 
    {
        this.key = _key;
        this.value = _value;
        this.belong = _belong;
        this.tag = _tag;
    }
    key : string ;
    value : Node;
    belong : SceneType;
    tag : string ;
}

export class SceneConfig
{
    constructor(_type :SceneType ,_prefabPath : string, _defaultBundle : string , _scriptName : string, _bundles : Array<string>) 
    {
        this.type = _type;
        this.bundleNames = _bundles;
        this.prefabPath = _prefabPath;
        this.scriptName = _scriptName;
        this.defaultBundle = _defaultBundle;
    }
    type : SceneType;
    bundleNames : Array<string>; //依赖的所有bundle
    defaultBundle : string; //作为当前场景的prefab属于哪一个bundle
    prefabPath : string; //作为当前场景的prefab的路径
    scriptName : string 
}

export enum LayerType
{
    Layer,
    Window,
}

export enum SceneType
{
    None,
    Loading,
    Login,
    Hall,
    Texas,
    Snake,
}

export class UIMgr extends Singleton<UIMgr>()
{
    public static ResFolder : Array<string>; //Bundle目录结构
    public static InitialBundle : Array<string>;//初始bundle
    public static RestBundle : Array<string>;//剩余bundle
    mLayerRoot : Node = null;
    mWindowRoot : Node = null;
    mTopRoot : Node = null;
    mLayerList : Array<LayerKeyPair>;
    mWindowList  : Array<LayerKeyPair>;
    mCurrentScene : SceneType;
    mSceneConfig : Array<SceneConfig>;
    mLoadingMask  = null;
    mToast  = null;
    public Init(_loadFinish : Function , _sceneConfig : Array<SceneConfig>)
    {
        this.mLayerRoot = find("Canvas/LayerRoot");
        this.mWindowRoot = find("Canvas/WindowRoot");
        this.mTopRoot = find("Canvas/TopRoot");
        this.mLayerList = new Array<LayerKeyPair>();
        this.mWindowList = new Array<LayerKeyPair>();
        this.mCurrentScene = SceneType.None;
        this.mSceneConfig = new Array<SceneConfig>();

        //场景配置            动画文件     骨骼动画     字体      音效音乐    预制体       大图        图集        粒子
        UIMgr.ResFolder = ["animation" , "spine" , "font" , "music" , "prefab" , "texture" , "atlas" , "particular"];
        UIMgr.InitialBundle = ["common","loading"]; //需要优先加载的bundle，给热更新场景用
        UIMgr.RestBundle = ["snake"]; //热更新场景的热更逻辑跑完后，需要加载的剩下的bundle
        let sceneCfgs = _sceneConfig
        this.mSceneConfig = sceneCfgs;
        this.LoadInitRes(_loadFinish);
    }
    
    mStaticPrefab : number = 2;
    mCurrentLoad :number = 0;

    TryStaticPrefabLoadFinsh(_loadFinish : Function)
    {
        this.mCurrentLoad++
        if(this.mStaticPrefab == this.mCurrentLoad)
        {
            if(_loadFinish != null)
            {
                _loadFinish();
            }
        }
    }

    //公用资源加载和启动资源
    public LoadInitRes(_loadFinish : Function)
    {
        this.PreloadRes(UIMgr.InitialBundle, ()=>
        {
            //初始化菊花图
            this.CreatePrefab("","common","prefab/LoadingMask" , (_tempNode)=>
            {
                let tempScript  = UIMgr.GetScriptInTarget(_tempNode, "LoadingMask");
                this.mTopRoot.addChild(_tempNode);
                this.mLoadingMask = tempScript;
                this.mLoadingMask.ShowLoading(false);
                this.TryStaticPrefabLoadFinsh(_loadFinish);
            });
            //初始化快捷提示
            this.CreatePrefab("","common", "prefab/Toast", (_tempNode)=>
            {
                let tempScript  = UIMgr.GetScriptInTarget(_tempNode, "Toast");
                this.mTopRoot.addChild(_tempNode);
                this.mToast = tempScript;
                this.mToast.Show(false);
                this.TryStaticPrefabLoadFinsh(_loadFinish);
            });
        });
    }

    
    //加载 除了启动资源外的剩下所有资源
    public LoadRestRes(_loadFinish : Function , _loadCallback : Function)
    {
        this.PreloadRes(UIMgr.RestBundle , ()=>
        {
            _loadFinish();
        } , _loadCallback);
    }

    public ShowLoading(_show:boolean , _force : boolean = false )
    {
        if(_force)
        {
            if(_show)
            {
                this.mLoadingMask.FocreShowLoading();
            }
            else
            {
                this.mLoadingMask.FocreHideLoading();
            }
        }
        else
        {
            this.mLoadingMask.ShowLoading(_show);
        }
    }

    public ShowToast(_tips:string ,  _duration:number = 2)
    {
        let childCount = this.mTopRoot.children.length;
        this.mToast.node.setSiblingIndex(childCount);
        this.mToast.ShowToast(_tips , _duration);
    }
    
    public HaveLayer(_bundleName :string , _prefabPath:string , _tag : string = "", _aka : string  = "")
    {
        let key = this.CreateKey(_bundleName,_prefabPath,_aka);
        let target = this.FindLayer(key,LayerType.Layer);
        if(target != null)
        {
            return true;
        }
        return false;
    }

    public ShowLayer(_scriptName : string , _bundleName :string , _prefabPath:string , _show :boolean = true , _finishFunction : Function = null ,
         _tag : string = "", _aka : string  = "")
    {
        let key = this.CreateKey(_bundleName,_prefabPath,_aka);
        let target = this.FindLayer(key,LayerType.Layer);

        if(target != null && target.value == null)
        {
            console.log("ShowLayer 正在创建中，请不要重复创建 ===key" + key);
            return;
        }
        
        if(target != null && target.value!=null)
        {
            target.tag = _tag;
            let nodeCount = this.GetRootNode(LayerType.Layer).children.length;
            target.value.setSiblingIndex(nodeCount);
            target.value.active = false;
            let tempScript  = UIMgr.GetScriptInTarget(target.value, "BaseUI");
            tempScript.Show(_show);
            if(_finishFunction != null)
            {
                _finishFunction(tempScript);
            }
            return;
        }
        if(_show == false)
        {
            return;
        }

        
        this.CreateRecordItem(key, LayerType.Layer , _tag);
        this.CreatePrefab(_scriptName,_bundleName,_prefabPath , (_tempNode)=>
        {
            this.GetRootNode(LayerType.Layer).addChild(_tempNode);
            this.RecordLayer(key , _tempNode , LayerType.Layer);
            let nodeCount = this.GetRootNode(LayerType.Layer).children.length;
            _tempNode.setSiblingIndex(nodeCount);
            if(!_tempNode.getComponent(BlockInputEvents))
            {
                _tempNode.addComponent(BlockInputEvents);
            }
            let tempScript = UIMgr.GetScriptInTarget(_tempNode, "BaseUI");
            tempScript.Show(_show);
            if(_finishFunction != null)
            {
                _finishFunction(tempScript);
            }
        });
    }

    public ShowWindow(_scriptName :string,  _bundleName :string , _prefabPath:string , _show : boolean = true, _finishFunction : Function = null, _tag : string = "",_aka : string  = "")
    {
        let key = this.CreateKey(_bundleName,_prefabPath,_aka);
        let target = this.FindLayer(key,LayerType.Window);

        if(target != null && target.value == null)
        {
            console.log("ShowWindow 正在创建中，请不要重复创建 ===key" + key);
            return;
        }

        if(target != null && target.value!=null)
        {
            target.tag = _tag;
            let nodeCount = this.GetRootNode(LayerType.Window).children.length;
            target.value.setSiblingIndex(nodeCount);
            let tempScript  = UIMgr.GetScriptInTarget(target.value, "BaseWindow");
            tempScript.Show(_show);
            if(_finishFunction != null)
            {
                _finishFunction(tempScript.GetContentScript());
            }
            return;
        }

        if(_show == false)
        {
            return;
        }

        this.CreateRecordItem(key , LayerType.Window , _tag);
        this.CreatePrefab("","common","prefab/BaseWindow" , (_tempWindow)=>
        {
            this.CreatePrefab(_scriptName,_bundleName,_prefabPath , (_tempNode)=>
            {
                this.GetRootNode(LayerType.Window).addChild(_tempWindow);
                this.RecordLayer(key , _tempWindow , LayerType.Window);
                let tempScript  = UIMgr.GetScriptInTarget(_tempWindow, "BaseWindow");
                let contentScript  = UIMgr.GetScriptInTarget(_tempNode, "BaseUI");
                tempScript.SetContent(_tempNode , contentScript);
                tempScript.Show(_show);
                let nodeCount = this.GetRootNode(LayerType.Window).children.length;
                tempScript.node.setSiblingIndex(nodeCount);
                if(_finishFunction != null)
                {
                    _finishFunction(contentScript);
                }
            });
        });
    }

    public CreatePrefab(_scriptName : string , _bundleName :string , _prefabPath:string, _loadFinish:Function)
    {
        ResMgr.GetPrefabAssetInBundle(_bundleName , _prefabPath , Prefab , (_prefab)=>
        {
            if(_loadFinish)
            {
                let tempNode = instantiate(_prefab);
                if(_scriptName != "")
                {
                    let scriptNameFromSkin = UIMgr.GetScriptNameFromSkin(_scriptName);
                    tempNode.addComponent(scriptNameFromSkin);
                }
                _loadFinish(tempNode);
            }
        });
    }

    public static GetScriptInTarget(_target : Node , _scriptName : any) : any
    {
        if(typeof(_scriptName) == "string")
        {
            let scriptNameFromSkin = UIMgr.GetScriptNameFromSkin(_scriptName);
            return _target.getComponent(scriptNameFromSkin);
        }
        else
        {
            return _target.getComponent(_scriptName);
        }

    }

    public static GetScriptNameFromSkin(_scriptName : string) : string
    {
        if(GameConfig.Skin != "")
        {
            let newName = _scriptName + "_" + GameConfig.Skin;
            var constructor = js.getClassByName(newName);
            if (constructor) 
            {
                return newName;
            } 
        }

        return _scriptName;
    }

    public ChangeScene(_sceneType :SceneType)
    {
        if(_sceneType == SceneType.None)
        {
            console.log("不能跳转目标场景====SceneType.None");
            return;
        }

        if(this.mCurrentScene == _sceneType)
        {
            console.log("不能跳转到同一个场景 _sceneType==" + _sceneType);
            return;
        }

        if(this.mCurrentScene != SceneType.None)
        {
            this.DeleteScene( this.mCurrentScene);
            let deleteSceneConfig= this.GetSceneConfig(this.mCurrentScene);
            if(deleteSceneConfig.bundleNames.length != 0)
            {
                //这里是因为3.8引擎的ondestory延迟了，需要先让析构函数先跑
                setTimeout(()=>
                {
                    //删除bundle
                    for(let i = 0 ; i < deleteSceneConfig.bundleNames.length ; i++)
                    {
                        ResMgr.ReleaseBundle(deleteSceneConfig.bundleNames[i],UIMgr.ResFolder);
                    }
                }, 100);
            }
        }

        setTimeout(()=>
        {
            this.mCurrentScene = _sceneType;
            let configNewScene = this.GetSceneConfig(_sceneType);
            if(configNewScene.bundleNames.length != 0)
            {
                this.PreloadRes(configNewScene.bundleNames  , ()=>
                {
                    this.ShowLayer(configNewScene.scriptName, configNewScene.defaultBundle,configNewScene.prefabPath);
                });
            }
            else
            {
                this.ShowLayer(configNewScene.scriptName, configNewScene.defaultBundle,configNewScene.prefabPath);
            }
        }, 200);



    }

    public PreloadRes(_bundleNames : Array<string>  , _loadFinish : Function 
        , _loadCallback : Function = null)
    {
        let loadCount = _bundleNames.length * UIMgr.ResFolder.length;
        let totalCount = _bundleNames.length * UIMgr.ResFolder.length;
        if(loadCount == 0)
        {
            if(_loadFinish)
            {
                _loadFinish();
            }
            return;
        }

        for(let i = 0 ; i < _bundleNames.length ; i++)
        {
            ResMgr.PreloadBundle(_bundleNames[i] , (_bundle)=>
            {
                ResMgr.PreloadAssetsInBundle(_bundle , UIMgr.ResFolder , ()=>
                {
                    loadCount--;
                    if(_loadCallback != null)
                    {
                        _loadCallback(loadCount,totalCount);
                    }
                    let tips = "加载资源 BundleName:" +_bundleNames[i] + "  count =" + loadCount;
                    console.log(tips);
                    if(loadCount == 0)
                    {
                        if(_loadFinish)
                        {
                            _loadFinish();
                        }
                    }
                });
            });
        }
    }

    public SetSceneConfig(_sceneConfig:SceneConfig)
    {
        if (_sceneConfig == null || _sceneConfig == undefined){
            console.error("设置了非法的场景配置");
            return;
        }

        let index = this.mSceneConfig.findIndex((_item) => _item.type === _sceneConfig.type);
        if (index < 0){
            this.mSceneConfig.push(_sceneConfig);
        }
    }

    private GetSceneConfig(_sceneType :SceneType) : SceneConfig
    {
        let index = this.mSceneConfig.findIndex((_item) => _item.type === _sceneType);
        if(index < 0)
        {
            console.log("GetSceneConfig 没有找到该场景 _sceneType ===" +_sceneType);
            return null;
        }

        return this.mSceneConfig[index];
    }

    private DeleteScene(_SceneType : SceneType)
    {
        this.DeleteLayerBySecene(LayerType.Layer,_SceneType);
        this.DeleteLayerBySecene(LayerType.Window,_SceneType);
        this.ClearLayerList();
    }


    private DeleteLayerBySecene(_type :LayerType , _belong : SceneType)
    {
        let targetList = this.GetList(_type);
        let step = 0;
        while(step < targetList.length)
        {
            if(targetList[step].belong == _belong)
            {
                console.log("删除targetList[step]===" + targetList[step].key)
                if(targetList[step].value != null)
                {
                    targetList[step].value.destroy();
                }
                targetList.splice(step , 1);
            }
            else
            {
                step++;
            }
        }
    }

    public DeleteUI(_bundleName :string , _prefabPath:string , _layerType : LayerType ,  _aka : string = "")
    {
        let key = this.CreateKey(_bundleName , _prefabPath,_aka);
        let target = this.FindLayer(key , _layerType);
        if(target == null || target.value == null)
        {
            console.log("没有找到该layer ，无法删除 ===key===" + key);
            return;
        }
        UIMgr.GetScriptInTarget(target.value , "BaseUI").DeleteSelf();
        let targetList = this.GetList(_layerType);
        let index = targetList.findIndex((_item) => _item.key === key);
        targetList.splice(index , 1);
    }

    public DeleteUIByTarget(_target )
    {
        for(let i = LayerType.Layer ; i <= LayerType.Window ; i++)
        {
            let currentList = this.GetList(i);

            let index;
            if(i == LayerType.Layer)
            {
                index = currentList.findIndex((_item) => _item.value === _target.node);
            }
            else
            {
                index = currentList.findIndex((_item) => UIMgr.GetScriptInTarget(_item.value , "BaseWindow").mContent === _target.node);
            }
            
            if(index >=0)
            {
                UIMgr.GetScriptInTarget(currentList[index].value , "BaseUI").DeleteSelf();
                currentList.splice(index , 1);
                break;
            }
        }
    }

    public DeleteUiByTag(_tag:string)
    {
        for(let i = LayerType.Layer ; i <= LayerType.Window ; i++)
        {
            let currentList = this.GetList(i);
            let step = 0;
            while(step < currentList.length)
            {
                let currentKeyPair = currentList[step];
                if(currentKeyPair.tag == _tag)
                {
                    let tempScript = UIMgr.GetScriptInTarget(currentKeyPair.value, "BaseUI");
                    tempScript.DeleteSelf();
                    currentList.splice(step , 1);
                }
                else
                {
                    step++;
                }
            }
        }
    }

    public HideUiByTag(_tag : string)
    {
        for(let i = LayerType.Layer ; i <= LayerType.Window ; i++)
        {
            let currentList = this.GetList(i);
            for(let k = 0 ; k < currentList.length ; k++)
            {
                let currentKeyPair = currentList[k];
                if(currentKeyPair.tag == _tag)
                {
                    if(currentKeyPair.value != null)
                    {
                        let tempScript = UIMgr.GetScriptInTarget(currentKeyPair.value, "BaseUI");
                        tempScript.TryToHide();
                    }
                }
            }
        }
    }


    private CreateKey(_bundleName :string , _prefabPath:string , _aka:string) : string 
    {
        let key = _bundleName + "/"  + _prefabPath + ":aka==" + _aka;
        return key;
    }

    private GetList(_type :LayerType) : Array<LayerKeyPair>
    {
        switch(_type)
        {
            case LayerType.Layer:
                return this.mLayerList;
            case LayerType.Window:
                return this.mWindowList;
        }
    }

    private FindLayer(_key : string , _type :LayerType) : LayerKeyPair
    {
        let targetList = this.GetList(_type);
        let index = targetList.findIndex((_item) => _item.key === _key);
        if(index >= 0)
        {
            return targetList[index];
        }
        return null;
    }

    private GetRootNode( _type :LayerType) : Node
    {
        switch(_type)
        {
            case LayerType.Layer:
                return this.mLayerRoot;
            case LayerType.Window:
                return this.mWindowRoot;
        }
    }

    private RecordLayer(_key : string , _node : Node , _type : LayerType)
    {
        let target = this.FindLayer(_key,_type);
        if(target == null)
        {
            console.log("RecordLayer error 没有当前key ====" + _key);
            return;
        }
        target.value = _node;
    }

    private CreateRecordItem(_key : string ,  _type : LayerType , _tag : string)
    {
        let keyPair = new LayerKeyPair(_key , null , this.mCurrentScene , _tag);
        this.GetList(_type).push(keyPair);
    }

    private ClearLayerList()
    {
        this.mLayerList = new Array<LayerKeyPair>();
        this.mWindowList = new Array<LayerKeyPair>();
    }

}

