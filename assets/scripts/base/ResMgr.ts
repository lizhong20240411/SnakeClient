
import { AssetManager, assetManager, debug, sys } from "cc";
import { GameConfig } from "../GameConfig";

class BundleInfo
{
    constructor(_bundleName : string)
    {
        this.mBundleName = _bundleName;
        this.mSrcPathList = new Array<string>();
    }

    mBundleName : string 
    mSrcPathList : Array<string>

    public InsertSrcPath(_path : string)
    {
        if(this.HavePath(_path) == false)
        {
            this.mSrcPathList.push(_path);
        }
    }

    public HavePath(_path : string) : boolean
    {
        let index = this.mSrcPathList.findIndex((_item) => _item === _path);
        if (index < 0)
        {
            return false;
        }
        return true;
    }

    public Clear()
    {
        this.mSrcPathList = null;
    }
}

export class ResMgr 
{
    public static BundleInfoList : Array<BundleInfo> = new Array<BundleInfo>();
    static RecordLoadedSrc(_bundleName : string , _srcPath : string)
    {
        let bundleInfo = ResMgr.GetBundleInfo(_bundleName);
        if(bundleInfo == null)
        {
            bundleInfo = ResMgr.InsertBunddleInfo(_bundleName);
        }

        bundleInfo.InsertSrcPath(_srcPath);
    }

    static GetBundleInfo(_bundleName : string) : BundleInfo
    {
        let index = ResMgr.BundleInfoList.findIndex((_item) => _item.mBundleName === _bundleName);
        if (index < 0)
        {
            return null;
        }
        return ResMgr.BundleInfoList[index];
    }

    static InsertBunddleInfo(_bundleName : string) : BundleInfo
    {
        let temp = new BundleInfo(_bundleName);
        ResMgr.BundleInfoList.push(temp);
        return temp;
    }

    static DeleteBundleInfo(_bundleName : string)
    {
        let index = ResMgr.BundleInfoList.findIndex((_item) => _item.mBundleName === _bundleName);
        if (index < 0)
        {
            return null;
        }
        ResMgr.BundleInfoList[index].Clear();
        ResMgr.BundleInfoList.splice(index , 1);
    }

    public static PreloadBundle( _bundleName : string , _loadFinish : Function)
    {
        assetManager.loadBundle(_bundleName,(_error , _bundle)=>
        {
            if(_error != null)
            {
                console.log("PreloadBundle error   name===:" + _bundleName);
            }
            else
            {
                if(_loadFinish)
                {
                    _loadFinish(_bundle);
                }
            }
        });
    }

    public static PreloadAssetsInBundle(_bundle : AssetManager.Bundle , _folders : Array<string> , _loadFinish : Function)
    {
        for(let i = 0 ; i < _folders.length ; i++)
        {
            if(sys.isNative)
            {
                _bundle.loadDir(_folders[i],(_param0 , _param1)=>
                {
                    // console.log("_param0 ===" + _param0);
                    // console.log("_param1 ===" + _param1.length);
                    if(_loadFinish)
                    {
                        _loadFinish();
                    }
                });
            }
            else
            {
                if(_loadFinish)
                {
                    _loadFinish();
                }
            }
        }
    }
    

    public static GetAssetInBundle(_bundleName : string , _assetPath : string , _assetType , _loadFinish : Function) : any
    {
        var bundle = this.GetBundle(_bundleName);
        if(bundle == null)
        {
            console.log("GetAssetInBundle  失败  name===:" + _bundleName);
            return null;
        }

        bundle.load(_assetPath,_assetType,(_error , _asset)=>
        {
            if(_error != null)
            {
                console.log("GetAssetInBundle _bundleName:_assetName===" + _bundleName + ":" + _assetPath);
                console.log("GetAssetInBundle error  ===" + _error);
            }
            else
            {
                ResMgr.RecordLoadedSrc(_bundleName , _assetPath);
                if(_loadFinish)
                {
                    _loadFinish(_asset);
                }
            }
        });
    }

    public static GetPrefabAssetInBundle(_bundleName : string , _assetPath : string , _assetType , _loadFinish : Function) : any
    {
        var bundle = this.GetBundle(_bundleName);
        if(bundle == null)
        {
            console.log("GetAssetInBundle  失败  name===:" + _bundleName);
            return null;
        }

        let pathWithSkin = "";
        if(GameConfig.Skin != "")
        {
            pathWithSkin += _assetPath + "_" + GameConfig.Skin;
            var assetsInfo = bundle.getInfoWithPath(pathWithSkin);
            if(!assetsInfo)
            {
                pathWithSkin = _assetPath;
            }
        }
        else
        {
            pathWithSkin = _assetPath;
        }

        bundle.load(pathWithSkin,_assetType,(_error , _asset)=>
        {
            if(_error != null)
            {
                console.log("GetAssetInBundle _bundleName:_assetName===" + _bundleName + ":" + _assetPath);
                console.log("GetAssetInBundle error  ===" + _error);
            }
            else
            {
                ResMgr.RecordLoadedSrc(_bundleName , pathWithSkin);
                if(_loadFinish)
                {
                    _loadFinish(_asset);
                }
            }
        });
    }

    public static ReleaseBundle(_bundleName : string,_folders : Array<string>)
    {
        var bundle = this.GetBundle(_bundleName);
        if(bundle == null)
        {
            console.log("ReleaseBundle  失败  name===:" + _bundleName);
            return null;
        }

        let bundleInfo = ResMgr.GetBundleInfo(_bundleName);
        if(bundleInfo != null)
        {
            for(let i = 0 ; i < bundleInfo.mSrcPathList.length ; i++)
            {
                bundle.release(bundleInfo.mSrcPathList[i]);
            }
        }

        for(let i = 0 ; i < _folders.length ; i++)
        {
            bundle.release(_folders[i]);
        }

        ResMgr.DeleteBundleInfo(_bundleName);

        
        //3.8调用这个要报错  3.5不会  奇怪
        bundle.releaseAll();
        assetManager.removeBundle(bundle);
        console.log("Bundle 删除完毕 _bundleName===" + _bundleName)
    }    


    private static GetBundle(_bundleName : string) : AssetManager.Bundle
    {
        var bundle = assetManager.getBundle(_bundleName);
        if(bundle==null)
        {
            console.log("GetBundle  当前bundle还没有加载  name===:" + _bundleName);
            return null;
        }

        return bundle;
    }
}

