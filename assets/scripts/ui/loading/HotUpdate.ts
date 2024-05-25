const jsb = (<any>window).jsb;
import { _decorator, Component, Node, Label, ProgressBar, Asset, game, sys, debug, JsonAsset, resources } from 'cc';
import { LoadingData } from './LoadingData';
import { GameConfig } from '../../GameConfig';
import { Localization } from '../../base/Localization';

const { ccclass, property } = _decorator;

@ccclass('HotUpdate')
export class HotUpdate extends Component {

    @property(Asset)
    manifestUrl: Asset = null!;


    private _updating = false;
    private _canRetry = false;
    private _storagePath = '';
    private _am;
    private _failCount = 0;
    private versionCompareHandle: (versionA: string, versionB: string) => number = null!;




    onLoad() 
    {
        if (!jsb) 
        {
            LoadingData.Instance.Data_HotUpdateEnd.mData = true;
            return;
        }
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'shgame-remote-asset');
        console.log('Storage path for remote asset : ' + this._storagePath);

        this.versionCompareHandle = function (versionA: string, versionB: string) {
            console.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
            GameConfig.Version = versionB;
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || '0');
                if (a === b) {
                    continue;
                }
                else {
                    return a - b;
                }
            }
            if (vB.length > vA.length) {
                return -1;
            }
            else {
                return 0;
            }
        };

        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);

        this._am.setVerifyCallback(function (path: string, asset: any) {
            var compressed = asset.compressed;
            var expectedMD5 = asset.md5;
            var relativePath = asset.path;
            var size = asset.size;
            if (compressed) 
            {
                return true;
            }
            else 
            {
                return true;
            }
        });

        if (sys.os === sys.OS.ANDROID) 
        {

            this._am.setMaxConcurrentTask(2);
        }
        /***********************************************检测是否有更新版本***********************************/
        LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00001");
        LoadingData.Instance.Data_HotUpdateProgress.mData = 0;
        this.scheduleOnce(()=>{
            this.checkUpdate();
        },0.1);
    }


    checkCb(event: any) {
        console.log('Code: ' + event.getEventCode());
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00002");
                LoadingData.Instance.Data_HotUpdateEnd.mData = true;
                console.log("checkCb","本地没有找到manifest文件，跳过热更新");
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00003");
                LoadingData.Instance.Data_HotUpdateEnd.mData = true;
                console.log("checkCb","下载远端manifest文件失败，跳过热更新");
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00004");
                LoadingData.Instance.Data_HotUpdateEnd.mData = true;
                console.log("checkCb","已是最新版本");
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00005");
                LoadingData.Instance.Data_HotUpdateProgress.mData = 0;
                console.log("checkCb","发现新版本");
                this.scheduleOnce(()=>{
                    this.hotUpdate();
                },1);
                break;
            default:
                return;
        }
        

        //this._am.setEventCallback(null);
        this._updating = false;
    }

    updateCb(event: any) {
        var needRestart = false;
        var failed = false;
        console.log("updateCb + event.getEventCode()");
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00002");
                console.log("本地没有找到manifest文件");
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                LoadingData.Instance.Data_HotUpdateProgress.mData = event.getPercent();
                console.log("updateCb event.getPercent()=="+event.getPercent());
                console.log("updateCb event.getPercentByFile()=="+event.getPercentByFile());
                console.log("updateCb event.getDownloadedFiles()=="+event.getDownloadedFiles());
                console.log("updateCb event.getTotalFiles()=="+event.getTotalFiles());
                var msg = event.getMessage();
                if (msg) 
                {
                    LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00006");

                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00007");
                console.log("updateCb ERROR_PARSE_MANIFEST or ERROR_DOWNLOAD_MANIFEST ");
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00004");
                LoadingData.Instance.Data_HotUpdateEnd.mData = true;
                console.log("已是最新版本");
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00008");
                console.log("更新完毕");
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00009");
                console.log("更新失败");
                this._updating = false;
                this._canRetry = true;
                this.retry();
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00009");
                console.log('更新失败==' +  event.getMessage());
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                console.log("updateCb ERROR_DECOMPRESS");
                break;
            default:
                break;
        }

        if (failed) {
            this._am.setEventCallback(null);
            this._updating = false;
        }

        if (needRestart) {
            this._am.setEventCallback(null);
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            console.log(JSON.stringify(newPaths));
            Array.prototype.unshift.apply(searchPaths, newPaths);
            localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);

            // restart game.
            setTimeout(() => {
                game.restart();
            }, 1000)
        }
    }

    retry() {
        if (!this._updating && this._canRetry) 
        {
            this._canRetry = false;
            LoadingData.Instance.Data_HotUpdateTips.mData = Localization.GetString("00010");
            console.log("下载更新失败的资源..'");
            this._am.downloadFailedAssets();
        }
    }

    checkUpdate() {
        if (this._updating) 
        {
            return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) 
        {
            var url = this.manifestUrl.nativeUrl;
            this._am.loadLocalManifest(url);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) 
        {
            return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));

        this._am.checkUpdate();
        this._updating = true;
    }

    hotUpdate() {
        if (this._am && !this._updating) 
        {
            this._am.setEventCallback(this.updateCb.bind(this));

            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) 
            {
                var url = this.manifestUrl.nativeUrl;
                this._am.loadLocalManifest(url);
            }
            this._failCount = 0;
            this._am.update();
            this._updating = true;
        }
    }

    onDestroy() 
    {
        if (!jsb) 
        {
            return;
        }
        if(this._am != null)
        {
            this._am.setEventCallback(null);
        }
    }
}

