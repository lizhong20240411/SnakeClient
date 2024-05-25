import { _decorator, Component, Node } from 'cc';
import { BaseData } from '../../base/BaseData';
import { BaseUI } from '../../base/BaseUI';
import { ToggleBtn } from './ToggleBtn';
import { DropBoxData } from '../../CommonNotify';
import { Tool } from '../../base/Tool';
const { ccclass, property } = _decorator;

@ccclass('DropBoxItem')
export class DropBoxItem extends BaseUI 
{
    public static PrefabPath : string = "prefab/DropBoxItem";
    public static Bunddle : string = "common";
    mToggleBtn: ToggleBtn = null;
    InitParam()
    {
        this.mToggleBtn = this.GetComponentInPath("ToggleBtn",ToggleBtn);
    }
    BindUI()
    {

    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    public InitWithData(_baseData : BaseData<number> , _custmoerData : number , _data : DropBoxData)
    {
        this.PreInit();
        this.mToggleBtn.SetDataNotify(_baseData , _custmoerData);
        this.mToggleBtn.SetTitle(_data.mTitle);
        if(Tool.StringIsNullOrEmpty(_data.mPicBundle) == false && Tool.StringIsNullOrEmpty(_data.mPicPath) == false)
        {
            this.LoadSprite(_data.mPicBundle , _data.mPicPath , (_spriteFrame)=>
            {
                this.mToggleBtn.SetImage(_spriteFrame);
            })
        }
    }
}

