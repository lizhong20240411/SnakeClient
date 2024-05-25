import { BaseData } from "../base/BaseData";
import { LanguageType, Localization } from "../base/Localization";
import { SingletonBaseNotify } from "../base/Singleton";
import { PersistenceData } from "./PersistenceData";
import { EventListOption, EventMatchType, GameListType, HallGameCategory, HallGameLevel, HallSubview, RegisterMethod, ToggleSubView } from "./UIConfig";
import { EventGameType,EventGameLev,EventAccRecordTarget,EventAccRecordType,EventMeALL } from "./UIConfig";

export class UIDataNotify extends SingletonBaseNotify<UIDataNotify>()
{
    protected ResetInstance() 
    {
        UIDataNotify.ClearInstance();
    }

    public Init()
    {
        //this.Data_HallGameCategory.mData = HallGameCategory.Texas; //游戏分类默认选中德州
        this.Data_HallGameLevel.mData = HallGameLevel.Small;        //游戏级别默认选中小
        this.Data_HideFullTable.mData = false;        //默认不选中 不看满桌按钮
        this.Data_Mute.mData = PersistenceData.GetMute(); //本地读取静音设定
        this.Data_Chatable.mData = PersistenceData.GetChatable(); //本地读取聊天开关
        this.Data_MiPai.mData =  PersistenceData.GetMiPai();     //本地读取咪牌开关
        this.Data_SkinStyle.mData =  PersistenceData.GetSkinStyle();    //本地读取皮肤编号
        this.Data_RegisterMethod.mData = RegisterMethod.Phone;
    }

    Data_ToggleSubView : BaseData<ToggleSubView> = new BaseData<ToggleSubView>();
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //登录页面
    //登录页面
    //登录页面
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////


    Data_RegisterMethod : BaseData<number> = new BaseData<number>();
    Data_HistoryAccountChose : BaseData<string> = new BaseData<string>(true);

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //大厅主页
    //大厅主页
    //大厅主页
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////



    //大厅子页面选中索引
    Data_HallSubview : BaseData<HallSubview> = new BaseData<HallSubview>();
    //大厅游戏类别选中索引
    Data_HallGameCategory : BaseData<HallGameCategory> = new BaseData<HallGameCategory>();
    //大厅游戏级别选中索引
    Data_HallGameLevel : BaseData<HallGameLevel> = new BaseData<HallGameLevel>();
    //大厅不看满桌开关
    Data_HideFullTable : BaseData<boolean> = new BaseData<boolean>();

    //设置界面私聊消息开关
    Data_Chatable : BaseData<boolean> = new BaseData<boolean>();
    //设置界面咪牌开关
    Data_MiPai : BaseData<boolean> = new BaseData<boolean>();
    //设置界面背景风格选中索引
    Data_SkinStyle : BaseData<number> = new BaseData<number>();
    //是否静音
    Data_Mute : BaseData<boolean> = new BaseData<boolean>();
    //游戏列表类型
    Data_GameListType : BaseData<GameListType> = new BaseData<GameListType>();
    //游戏列表强制翻页
    Data_GameListToPage : BaseData<number> = new BaseData<number>();
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //大厅Event
    //大厅Event
    //大厅Event
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //大厅个人中心
    //大厅个人中心
    //大厅个人中心
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    Data_EventAccRecordType : BaseData<EventAccRecordType> = new BaseData<EventAccRecordType>();           //账户记录类型菜单
    Data_EventAccRecordTarget : BaseData<EventAccRecordTarget> = new BaseData<EventAccRecordTarget>();     //账户记录目标菜单
    Data_EventGameType : BaseData<EventGameType> = new BaseData<EventGameType>();  //游戏类型菜单
    Data_EventGameLev : BaseData<EventGameLev> = new BaseData<EventGameLev>();     //游戏级别场次菜单

    //Data_EventNotice : BaseData<EventMeALL> = new BaseData<EventMeALL>();           //公告邮箱菜单
    Data_EventScore : BaseData<EventMeALL> = new BaseData<EventMeALL>();            //积分菜单
    Data_EventRecharge : BaseData<EventMeALL> = new BaseData<EventMeALL>();         //充值选项卡
    Data_EventRecharge1A : BaseData<EventMeALL> = new BaseData<EventMeALL>();       //充值1多选1
    Data_EventRecharge1B : BaseData<EventMeALL> = new BaseData<EventMeALL>();       //充值1多选2
    Data_EventRecharge2Menu1 : BaseData<EventMeALL> = new BaseData<EventMeALL>();   //充值2下拉菜单1
    Data_EventRecharge2Menu2 : BaseData<EventMeALL> = new BaseData<EventMeALL>();   //充值2下拉菜单2
    Data_EventPayoutAccount : BaseData<EventMeALL> = new BaseData<EventMeALL>();    //提款添加账号
    Data_EventPayoutAccountP1 : BaseData<EventMeALL> = new BaseData<EventMeALL>();     //提款添加账号1 银行
    Data_EventPayoutAccountP41 : BaseData<EventMeALL> = new BaseData<EventMeALL>();    //提款添加账号41 转币商
    Data_EventPayoutAccountP42 : BaseData<EventMeALL> = new BaseData<EventMeALL>();    //提款添加账号42 币种
    //Data_EventUserHead : BaseData<EventMeALL> = new BaseData<EventMeALL>();            //头像
    Data_EventSafeSet : BaseData<EventMeALL> = new BaseData<EventMeALL>();             //闲置时间
    Data_EventPromote : BaseData<EventMeALL> = new BaseData<EventMeALL>();             //推广
}