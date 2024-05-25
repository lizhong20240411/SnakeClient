
export class PersistenceData
{   
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //静音选项储存
    public static SaveMute(_data:boolean)
    {
        let key = "Mute";
        PersistenceData.WriteSimpleData_Bool(key , _data);
    }
    public static GetMute(_default:boolean=true) : boolean
    {
        let key = "Mute";
        return PersistenceData.ReadSimpleData_Bool(key, _default);
    }
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //背景音乐选项储存
    public static SaveBGMVolume(_data:number)
    {
        let key = "BGMVolume";
        PersistenceData.WriteSimpleData(key , _data);
    }
    public static GetBGMVolume(_default:number=1) : number
    {
        let key = "BGMVolume";
        let result =  PersistenceData.ReadSimpleData(key, _default);
        return Number(result);
    }
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //音效选项储存
    public static SaveEffectVolume(_data:number)
    {
        let key = "EffectVolume";
        PersistenceData.WriteSimpleData(key , _data);
    }
    public static GetEffectVolume(_default:number=1) : number
    {
        let key = "EffectVolume";
        let result =  PersistenceData.ReadSimpleData(key, _default);
        return Number(result);
    }
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //语音选项储存
    public static SaveVoiceVolume(_data:number)
    {
        let key = "VoiceVolume";
        PersistenceData.WriteSimpleData(key , _data);
    }
    public static GetVoiceVolume(_default:number=1) : number
    {
        let key = "VoiceVolume";
        let result = PersistenceData.ReadSimpleData(key, _default);
        return Number(result);
    }
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //私聊选项储存
    public static SaveChatable(_data:boolean)
    {
        let key = "Chatable";
        PersistenceData.WriteSimpleData_Bool(key , _data);
    }
    public static GetChatable(_default:boolean=true): boolean
    {
        let key = "Chatable";
        return PersistenceData.ReadSimpleData_Bool(key, _default);
    }
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //咪牌选项储存
    public static SaveMiPai(_data:boolean)
    {
        let key = "MiPai";
        PersistenceData.WriteSimpleData_Bool(key , _data);
    }
    public static GetMiPai(_default:boolean=true) : boolean
    {
        let key = "MiPai";
        return PersistenceData.ReadSimpleData_Bool(key, _default);
    }
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //主题背景选项储存
    public static SaveSkinStyle(_data:number)
    {
        let key = "SkinStyle";
        PersistenceData.WriteSimpleData(key , _data);
    }
    public static GetSkinStyle(_default:number=0) : number
    {
        let key = "SkinStyle";
        let result =  PersistenceData.ReadSimpleData(key, _default);
        return Number(result);
    }
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //德州背景选项
    public static SaveTexasBG(_data:number)
    {
        let key = "TexasBG";
        PersistenceData.WriteSimpleData(key , _data);
    }
    public static GetTexasBG(_default:number=0) : number
    {
        let key = "TexasBG";
        let result =  PersistenceData.ReadSimpleData(key, _default);
        return Number(result);
    }
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //德州快捷下注选项
    public static SaveTexasShortcut(_index : number ,  _optinIndex :number )
    {
        let key = "TexasShortcut" + _index;
        PersistenceData.WriteSimpleData(key , _optinIndex);
    }
    public static GetTexasShortcut(_index : number , _default:number=0 ) : number
    {
        let key = "TexasShortcut" + _index;
        let result =  PersistenceData.ReadSimpleData(key, _default);
        return Number(result);
    }

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //游戏内聊天开关
    public static SaveChat(_data:boolean)
    {
        let key = "Chat";
        PersistenceData.WriteSimpleData_Bool(key , _data);
    }
    public static GetChat(_default:boolean=false) : boolean
    {
        let key = "Chat";
        return PersistenceData.ReadSimpleData_Bool(key, _default);
    }
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //游戏内保险提示开关
    public static SaveInsTips(_data:boolean)
    {
        let key = "InsTips";
        PersistenceData.WriteSimpleData_Bool(key , _data);
    }
    public static GetInsTips(_default:boolean=false) : boolean
    {
        let key = "InsTips";
        return PersistenceData.ReadSimpleData_Bool(key, _default);
    }
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //游戏内拉杆操作开关
    public static SaveSliderConfirm(_data:boolean)
    {
        let key = "SliderConfirm";
        PersistenceData.WriteSimpleData_Bool(key , _data);
    }
    public static GetSliderConfirm(_default:boolean=false) : boolean
    {
        let key = "SliderConfirm";
        return PersistenceData.ReadSimpleData_Bool(key, _default);
    }
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //登陆历史账号
    public static SaveAccountHistory(_data: string)
    {
        if(_data == "")
        {
            return;
        }

        let histroyList = PersistenceData.GetAccountHistoryList();



        let index = histroyList.findIndex((_item) => _item === _data);
        if (index >= 0)
        {
            return
            // histroyList.splice(index , 1);
        }


        histroyList.push(_data)

        if(histroyList.length > 5)
        {
            histroyList.shift();
        }

        let key = "AccountHistory";
        let result = histroyList[0];
        for(let i = 1 ; i < histroyList.length ; i++)
        {
            let current = histroyList[i];
            result += "`" + current
        }

        PersistenceData.WriteSimpleData(key , result);
    }
    public static GetAccountHistory(_default:string="") : string
    {
        let key = "AccountHistory";
        return PersistenceData.ReadSimpleData(key, _default);
    }

    public static GetAccountHistoryList() : Array<string>
    {
        let histroyStr = PersistenceData.GetAccountHistory();
        if(histroyStr == "")
        {
            return [];
        }
        let histroyList = histroyStr.split("`");
        return histroyList;
    }








    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //内部方法
    //内部方法
    //内部方法
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    private static WriteSimpleData(key, data)
    {
        localStorage.setItem(key, data);
    };
    //读取简单数据
    private static ReadSimpleData(key, defaultDate = null) : string | null
    {
        var data = localStorage.getItem(key);
        if(data === "null" || data === null || data == "") 
        {
            data = defaultDate
        }
        return data;
    };

    private static WriteSimpleData_Bool(_key : string , _data : boolean)
    {
        PersistenceData.WriteSimpleData(_key, _data == true ? 1 : 0);
    }

    private static ReadSimpleData_Bool(_key : string , _defualtValue = false) : boolean
    {
        let result = PersistenceData.ReadSimpleData(_key, null);
        if(result == null)
        {
            return _defualtValue;
        }
        return Number(result) == 1 ? true : false;
    }
} 

