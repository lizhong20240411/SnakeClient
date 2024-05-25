

// import CryptoJS from "../tool/crypto-js.min.js";
import { sys } from 'cc';
import CryptoJS from 'crypto-js';
export class Tool
{   
    public static Encrypt(_str : string) : string
    {
        let key = CryptoJS.enc.Utf8.parse("96ac58d7a2efba1f416d2489f9bde583");
        let encrypted = CryptoJS.AES.encrypt(_str, key, 
        {
            mode: CryptoJS.mode.ECB,
            padding:CryptoJS.pad.Pkcs7
        })
        return encrypted.toString();
    }

    public static DealHttpGetParam(_param : any) : string
    {
        let result = "";
        let keyArray = Object.keys(_param);
        for(let i = 0 ; i < keyArray.length ; i++)
        {
            let name = keyArray[i];
            let val = _param[name];

            if(i == 0)
            {
                result = "?" + name + "=" + val;
            }
            else
            {
                result += "&" + name + "=" + val;
            }
        }
        return result;
    } 

    //计算输入字符串的长度， 汉字算2位
    public static CountStrRealLength(_str :string )
    {
        let currentLength = 0;
        for(let i = 0 ; i < _str.length ; i++)
        {
            let current = _str[i];
            let hanzi = Tool.IsHanZi(current);
            if(hanzi)
            {
                currentLength += 2;
            }
            else
            {
                currentLength += 1;
            }
        }
        return currentLength;
    }

    public static ContainNumber(_str : string) : boolean
    {
        var reg=/\d/;
	    return reg.test(_str);
    }

    public static ContainBigLetter( _str : string)
    {
        var regex = /[A-Z]/; 
        let result = regex.test(_str); 
        return result;
    }

    public static ContainSmallLetter( _str : string)
    {
        var regex = /[a-z]/;
        let result = regex.test(_str); 
        return result;
    }

    //6-20位 包含英文大小写
    public static IsNumberAndLetter(_str : string) : boolean
    {
        if(_str.length <6 || _str.length >20)
        {
            return false;
        }

        let haveNumber = Tool.ContainNumber(_str);
        let haveBigLetter = Tool.ContainBigLetter(_str);
        let haveSmallLetter = Tool.ContainSmallLetter(_str);
        return haveNumber&&haveBigLetter&&haveSmallLetter
    }

    /* 输入是否为 6 位数的数字 */ 
    public static IsSmsCode(_str : string) : boolean
    {
        const reg = /^\d{6}$/
        let result = reg.test(_str)
        return result
    }

    /* 输入是否为 4 位数的数字 */ 
    public static IsSmsCode4(_str : string) : boolean
    {
        const reg = /^\d{4}$/
        let result = reg.test(_str)
        return result
    }


    //是否是汉字
    public static IsHanZi(_str : string) : boolean
    {
        var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
        let result = reg.test(_str);
        return result;
    }


    /* 电子邮箱 */
    public static IsEmail(_str : string) : boolean
    {
        //const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        const reg = /^.+@\w+\.\w+$/
        let result = reg.test(_str);
        return result;
    }

    public static MailNameTest(_mailName): boolean
    {
        let patten = /^[\w-][\w-.]*[\w-]@[\w-.]+$/
        if (patten.test(_mailName) && _mailName.search(/\.\./) == -1) 
        {
            return true
        }
        else 
        {
            return false
        }
        
    }

    /* 手机号 最少11位 最多13位 */ 
    public static IsPhoneNumber(_str : string) : boolean
    {
        const reg = /^\d{11,11}$/
        let result = reg.test(_str)
        return result
    }

    /* 验证用户密码:  密码必须以字母开头，长度在6~12之间*/ 
    public static IsPasswrod(_str : string) : boolean
    {
        const reg = /^[a-zA-Z]\w{5,11}$/
        let result = reg.test(_str);
        return result;
    }

    public static StringIsNullOrEmpty(_str : string) : boolean
    {
        if(_str == null || _str == undefined || _str == "null" || _str == "")
        {
            return true;
        }

        return false;
    }

    public static FormatGold(count: string | number, showDot00: boolean = false): string 
    {
        if (count == null) {
            return count = "0";
        }
        let tmp = 0;
        if (typeof (count) == "string") {
            tmp = parseFloat(count);
        }
        else {
            tmp = count;
        }

        let ret = tmp.toFixed(2);
        if (showDot00 == false) {
            if (ret.length > 3 && (ret.substring(ret.length - 3, ret.length) == ".00")) {
                ret = ret.substring(0, ret.length - 3);
            }
        }
        return ret;
    }

    public static DateFormat(_fmt : string, _date :Date)  : string
    {
        let ret;
        const opt = 
        {
            "Y+": _date.getFullYear().toString(),        // 年
            "m+": (_date.getMonth() + 1).toString(),     // 月
            "d+": _date.getDate().toString(),            // 日
            "H+": _date.getHours().toString(),           // 时
            "M+": _date.getMinutes().toString(),         // 分
            "S+": _date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) 
        {
            ret = new RegExp("(" + k + ")").exec(_fmt);
            if (ret) {
                _fmt = _fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return _fmt;
    }


     /**
     * 将文本复制到剪切板
     * @param [_text] 要复制的内容
     */
    public static CopyText(_text: string) 
    {
        if (!sys.isNative) 
        {
            if (sys.os === sys.OS.IOS) 
            {
                Tool.CopyFromiOSWeb(_text);
            }
            else 
            {
                Tool.CopyFromWeb(_text);
            }
        }
        else {
            // if (sys.platform == sys.Platform.ANDROID) 
            // {
            //     jsb.reflection.callStaticMethod("com/cocos/game/AppActivity",
            //         "CopyToClipboard",
            //         "(Ljava/lang/String;)V",
            //         _text);
            // } 
            // else if (sys.platform == sys.Platform.IOS || sys.platform == sys.Platform.MACOS) 
            // {
            //     jsb.reflection.callStaticMethod("ViewController",
            //         "CopyToClipboard:",
            //         _text);
            // }
        }
    }

        /**
     * web 上复制
     * @param [str] 要复制的内容
     */
    public static CopyFromWeb(str: string) 
    {
        var input = str + '';
        const el = document.createElement('textarea');
        el.value = input;
        el.setAttribute('readonly', '');
        el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt'; // Prevent zooming on iOS
        const selection = getSelection();
        var originalRange = false;
        if (selection.rangeCount > 0) 
        {
            // @ts-ignore
            originalRange = selection.getRangeAt(0);
        }
        document.body.appendChild(el);
        el.select();
        el.selectionStart = 0;
        el.selectionEnd = input.length;
        var success = false;
        try 
        {
            success = document.execCommand('copy');
        }
        catch (err) 
        {
            console.log('err:', err);
        }
        document.body.removeChild(el);
        if (originalRange) 
        {
            selection.removeAllRanges();
            // @ts-ignore
            selection.addRange(originalRange);
        }
        return success;
    }

    /**
     * iOS web 上复制，备用：解决 iOS web 剪切板问题
     * @param [str] 要复制的内容
     */
    public static CopyFromiOSWeb(str: string) 
    {
        const textString = str + '';
        let input = document.querySelector('#copy-input');
        if (!input) 
        {
            input = document.createElement('input');
            input.id = "copy-input";
            // 防止ios聚焦触发键盘事件 
            // @ts-ignore
            input.readOnly = true;
            // @ts-ignore
            input.style.position = "absolute";
            // @ts-ignore
            input.style.left = "-1000px";
            // @ts-ignore
            input.style.zIndex = "-1000";
            document.body.appendChild(input);
        }
        // ios必须先选中文字且不支持
        // @ts-ignore
        input.value = textString;
        // @ts-ignore
        input.select();
        selectText(input, 0, textString.length);
        console.log(document.execCommand('copy'), 'execCommand');
        if (document.execCommand('copy')) 
        {
            document.execCommand('copy');
        }
        // input 自带的 select() 方法在苹果端无法进行选择，所以需要自己去写一个类似的方法 
        // @ts-ignore
        input.blur();
        // 选择文本。createTextRange(setSelectionRange)是 input 方法 
        function selectText(textbox, startIndex, stopIndex) 
        {
            if (textbox.createTextRange) 
            {
                const range = textbox.createTextRange();
                range.collapse(true);
                // 起始光标
                range.moveStart('character', startIndex);
                // 结束光标
                range.moveEnd('character', stopIndex - startIndex);
                range.select();
            }
            else 
            {
                textbox.setSelectionRange(startIndex, stopIndex);
                textbox.focus();
            }
        }
    }
} 