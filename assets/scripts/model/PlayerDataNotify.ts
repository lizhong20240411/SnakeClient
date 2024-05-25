import { BaseData } from "../base/BaseData";
import { SingletonBaseNotify } from "../base/Singleton";
import { HttpCaptchaInfo, HttpHallGameInfoRes, HttpLastGameRecordRes, HttpRecentGameInfo } from "../network/HttpStruct";
import { GameCateogry } from "./UIConfig";

export class PlayerDataNotify extends SingletonBaseNotify<PlayerDataNotify>()
{
    protected ResetInstance() 
    {
        PlayerDataNotify.ClearInstance();
    }

    public Init()
    {
        this.mToken = "";
        this.mExpiresAt =0;
    }


    public CustomerClear()
    {
        this.Data_PlayerDataSuccess.mData = false;
        this.Data_HttpHallGameInfoTexasRes.Clear();
        this.Data_HttpRecentGameInfo.Clear();
    }

    mAccount : string; //登陆账号名
    mToken : string;             //口令
    mExpiresAt : number;         //过期时间
    Data_HttpCaptchaInfo: BaseData<HttpCaptchaInfo> = new BaseData<HttpCaptchaInfo>(); //图片验证码
    //======个人信息==================================================
    Data_MemberId: BaseData<number> = new BaseData<number>();      //更新玩家UID
    Data_Member: BaseData<string> = new BaseData<string>();        //更新玩家名
    Data_Nickname: BaseData<string> = new BaseData<string>();      //更新昵称
    Data_RealName: BaseData<string> = new BaseData<string>();      //更新真名 
    Data_Avatar : BaseData<string> = new BaseData<string>();       //更新头像
    Data_TicketCount : BaseData<number> = new BaseData<number>();  //更新门票数
    Data_Balance : BaseData<number> = new BaseData<number>();      //更新金币
    Data_ScoreBalance: BaseData<number> = new BaseData<number>();  //更新积分
    Data_DiamondBalance : BaseData<number> = new BaseData<number>();  //更新钻石
    Data_LevelId: BaseData<number> = new BaseData<number>();          //更新等级
    Data_IdNumber: BaseData<string> = new BaseData<string>();         //更新身份证
    Data_PhoneNumber: BaseData<string> = new BaseData<string>();      //更新手机
    Data_Email : BaseData<string> = new BaseData<string>();           //更新email
    Data_EarnMonthly : BaseData<string> = new BaseData<string>();     //更新本月收益
    Data_LastGameRecord : BaseData<HttpLastGameRecordRes> = new BaseData<HttpLastGameRecordRes>();        //更新游戏记录
    Data_TransPassword : BaseData<string> = new BaseData<string>();   //资金密码是否设置  "0"没设置, "1"设置
    Data_PSWLogin : BaseData<string> = new BaseData<string>();        //登录密码
    Data_PlayerDataSuccess : BaseData<boolean> = new BaseData<boolean>();  //用户信息获取成功了
    public ModifyBalance(_value : number)
    {
        this.Data_Balance.mData = this.Data_Balance.mData + _value;
    }

    public SetBalance(_value : number)
    {
        this.Data_Balance.mData = _value;
    }
    //========================================================

    Data_HttpHallGameInfoTexasRes : BaseData<HttpHallGameInfoRes> = new BaseData<HttpHallGameInfoRes>();  //大厅游戏信息返回
    Data_HttpRecentGameInfo : BaseData<HttpRecentGameInfo> = new BaseData<HttpRecentGameInfo>();  //最近还在进行的游戏信息
    public GetGameList(_gameCateogry : GameCateogry) : HttpHallGameInfoRes
    {
        switch(_gameCateogry)
        {
            case GameCateogry.Texas:
                {
                    return PlayerDataNotify.Instance.Data_HttpHallGameInfoTexasRes.mData;
                }
                break;
            case GameCateogry.Short:
                {
                    return null;
                }
                break;
        }
    }

    public StillInGame() : boolean
    {
        return this.Data_HttpRecentGameInfo.mData != null;
    }   
}
