import { Vec3 ,Node} from "cc";
import { BaseData } from "./base/BaseData";
import { LanguageType } from "./base/Localization";
import { SingletonBaseNotify } from "./base/Singleton";
import { DropBox } from "./ui/common/DropBox";

export class CommonNotify extends SingletonBaseNotify<CommonNotify>()
{
    protected ResetInstance() 
    {
        CommonNotify.ClearInstance();
    }

    public Init()
    {

    }

    Data_Login : BaseData<boolean> = new BaseData<boolean>(true);
    Data_Logout : BaseData<boolean> = new BaseData<boolean>(true);
    Data_SocketOpen : BaseData<boolean> = new BaseData<boolean>();
    Data_SocketClose : BaseData<boolean> = new BaseData<boolean>();
    Data_NormalClose : BaseData<boolean> = new BaseData<boolean>(); //socket手动关闭
    Data_SocketError : BaseData<boolean> = new BaseData<boolean>(true);
    Data_DynamicBundleLoaded : BaseData<boolean> = new BaseData<boolean>(true , false); //动态bundle加载完毕

    //当前选中语言
    Data_LanguageType: BaseData<LanguageType> = new BaseData<LanguageType>();

    //下拉框管理
    ChosingDropBoxData: DropBoxClickData = null;
    //显示下拉框
    Data_ShowDropBox :  BaseData<boolean> = new BaseData<boolean>(true);
}


export class DropBoxData
{
    constructor(_title : string , _bundle :string, _path : string)
    {
        this.mTitle = _title;
        this.mPicBundle = _bundle;
        this.mPicPath = _path;
    }
    mTitle : string;
    mPicPath : string;
    mPicBundle : string;
}

export class DropBoxClickData
{
    constructor()
    {

    }
    mTargetDropBox : DropBox;
    mDropBoxParent : Node;
    mBeforePos : Vec3;
}

