import { _decorator, Component, Node, Label, instantiate, Prefab, Vec3 } from 'cc';
import { BaseData } from '../../base/BaseData';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from './BaseButton';
import { DropBoxItem } from './DropBoxItem';
import { UIMgr } from '../../base/UIMgr';
import { CommonNotify, DropBoxClickData, DropBoxData } from '../../CommonNotify';
import { Tool } from '../../base/Tool';
const { ccclass, property } = _decorator;




@ccclass('DropBox')
export class DropBox extends BaseUI 
{

    @property(BaseButton) 
    mBtn: BaseButton = null;
    @property(Node) 
    mSelectedTag: Node = null;
    @property(Node) 
    mUnSelectedTag: Node = null;
    @property(Node) 
    mDropContainer: Node = null;
    @property(Node) 
    mDropDown: Node = null;
    @property(Node) 
    mDropBoxItem: Node = null;

    mDropBoxItemScript : BaseUI;

    mDataNotify : BaseData<number> = null;
    mDataList : Array<DropBoxData> ;
    mItemScriptName : string;
    InitParam()
    {

    }
    BindUI()
    {
        this.mBtn.SetClickCallback(()=>
        {
            if(this.mDropContainer.active == false)
            {
                let dropBoxClickData = new DropBoxClickData();
                let worldPos = this.node.worldPosition;
                dropBoxClickData.mBeforePos = new Vec3(worldPos.x , worldPos.y , worldPos.z);
                dropBoxClickData.mDropBoxParent = this.node.parent;
                dropBoxClickData.mTargetDropBox = this;
                CommonNotify.Instance.ChosingDropBoxData = dropBoxClickData;
                CommonNotify.Instance.Data_ShowDropBox.mData = true;
            }
            else
            {
                CommonNotify.Instance.Data_ShowDropBox.mData = false;
            }

        });

        this.Expand(false);
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        if(this.mDataNotify != null)
        {
            this.mDataNotify.RemoveListennerByTarget(this);
            this.mDataNotify = null;
        }

        this.mDataList = null;
    }

    public Expand(_value : boolean)
    {
        this.mSelectedTag.active = _value;
        this.mUnSelectedTag.active = !_value;
        this.mDropContainer.active = _value;
    }

    public InitWithData(_baseData : BaseData<number> ,  _dataList : Array<DropBoxData> ,_scriptName : string = "DropBoxItem")
    {
        _baseData.RemoveListennerByTarget(this);
        this.mDataNotify = _baseData;
        this.mDataList = _dataList;
        this.mDataNotify.AddListenner(this , this.NotifyCallback.bind(this));

        this.mItemScriptName = _scriptName;
        if(this.mDropBoxItemScript == null)
        {
            this.mDropBoxItemScript = this.AddBaseUIInNode(this.mDropBoxItem ,this.mItemScriptName);
            this.mDropBoxItemScript.PreInit();
            this.mDropBoxItemScript.Show(false);
        }


        this.CreateItem()
    }

    CreateItem()
    {
        for(let i = 0 ; i < this.mDataList.length ; i++)
        {
            let tempNode = instantiate(this.mDropBoxItem);
            let currentData = this.mDataList[i];
            this.mDropDown.addChild(tempNode);
            let itemScript  =  UIMgr.GetScriptInTarget(tempNode , this.mItemScriptName);
            itemScript.Show(true);
            itemScript.InitWithData(this.mDataNotify , i , currentData);
        }
    }

    NotifyCallback(_val)
    {
        let data = this.mDataList[_val]
        this.mBtn.SetTitle(data.mTitle);

        if(Tool.StringIsNullOrEmpty(data.mPicBundle) == false && Tool.StringIsNullOrEmpty(data.mPicPath) == false)
        {
            this.LoadSprite(data.mPicBundle , data.mPicPath , (_spriteFrame)=>
            {
                this.mBtn.SetSprite(_spriteFrame);
            })
        }

        CommonNotify.Instance.Data_ShowDropBox.mData = false;
    }
}

