import { sys } from "cc";
import { LanguageType } from "./Localization";

export class JsbScript
{
    public static getSysLanguage() 
    {
        let currentLanguage = sys.language;
        if (sys.os === sys.OS.ANDROID) 
        {
            if( -1 != currentLanguage.indexOf('en') ) 
            {
                return LanguageType.EN;
            }
            else if( -1 != currentLanguage.indexOf('zh-CN') ) 
            {
                return LanguageType.CN;
            } 
            else if( -1 != currentLanguage.indexOf('zh-HK') || -1 != currentLanguage.indexOf('zh-TW') )
            {
                return LanguageType.HK;
            }
        } 
        else if (sys.os === sys.OS.IOS) 
        {
            if (-1 != currentLanguage.indexOf('en')) 
            {
                return LanguageType.EN;
            } 
            else if (-1 != currentLanguage.indexOf('zh')) 
            {
                return LanguageType.CN;
            } 
            else if (-1 != currentLanguage.indexOf('zh-Hans-CN') || -1 != currentLanguage.indexOf('zh-Hant-CN')) 
            {
                return LanguageType.HK;
            }
        } 

        return LanguageType.CN;
    };

    public static KeepScreenOn(_value : boolean)
    {
        if (sys.isNative) 
        {
            console.log('设置屏幕常亮')
            jsb.Device.setKeepScreenOn(_value);
        }
    }

} 