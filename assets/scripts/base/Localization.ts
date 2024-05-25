import { CommonNotify } from "../CommonNotify";

export enum LanguageType {
    CN = 0, //简体中文
    HK = 1, //繁体中文
    EN = 2, //英文
    // Japan , //日语
    // Korea , //韩语
}

export class Localization {
    public static CurrentLanguage;
    public static CurrentLanguageType: LanguageType = LanguageType.CN;

    public static SetLanguage(_languageType: LanguageType) 
    {
        this.CurrentLanguageType = _languageType;
        CommonNotify.Instance.Data_LanguageType.mData = _languageType;
        switch (this.CurrentLanguageType) 
        {
            case LanguageType.EN:
                Localization.CurrentLanguage = 'en';
                break;
            case LanguageType.HK:
                Localization.CurrentLanguage = 'ch';
                break;
            case LanguageType.CN:
                Localization.CurrentLanguage = 'ch';
                break;
        }
    }

    public static GetString(_key: string) 
    {
        let index = this.LocationData.findIndex((_item) => _item.name === _key);
        if (index >= 0) {
            return this.LocationData[index][this.CurrentLanguage];
        } else {
            console.log('没有找到对应的多语言 key====' + _key);
        }

        return '';
    }

    public static ReplaceString(_target: string, _to: string , _from : string): string 
    {
        let origin = Localization.GetString(_target);
        var newstr = origin.replace(_from, _to);
        return newstr;
    }

    /**
     * 格式化字符串
     * @param _target 文本ID
     * @param params 按顺序替换文本内标识为“{0}{1}{2}……”的变量
     * @returns 
     */
    public static FormatString(_target: string, params: string[]): string
    {
        var newStr: string = Localization.GetString(_target);
        var i: number = 0;
        for (i; i < params.length; i++)
        {
            let replace = "{"+i+"}";
            newStr = newStr.replace(replace, params[i]);
        }
        return newStr;
    }

    public static LocationData =
    [
        //
        { name: '0001', ch: '下拉刷新', en: 'xxx' , korea :"xxx"},
        { name: '0002', ch: '松手刷新', en: 'xxx' , korea :"xxx"},

        //Loading界面
        { name: '1000', ch: '加载中...', en: 'xxx' , korea :"xxx"},
        { name: '1001', ch: '正在加载资源：', en: 'xxx' , korea :"xxx"},
        { name: '1002', ch: '下载中...', en: 'xxx' , korea :"xxx"},
        { name: '1003', ch: '正在更新资源：', en: 'xxx' , korea :"xxx"},
        { name: '1004', ch: '加载完成', en: 'xxx' , korea :"xxx"},
        { name: '1005', ch: '下载完成', en: 'xxx' , korea :"xxx"},
        { name: '1006', ch: '无登陆记录', en: 'xxx' , korea :"xxx"},
        

        //登录界面
        { name: '2000', ch: '请输入账号', en: 'xxx' , korea :"xxx"},
        { name: '2001', ch: '请输入登录密码', en: 'xxx' , korea :"xxx"},
        { name: '2002', ch: '登录', en: 'xxx' , korea :"xxx"},
        { name: '2003', ch: '请输入验证码', en: 'xxx' , korea :"xxx"},
        { name: '2004', ch: '立即注册', en: 'xxx' , korea :"xxx"},
        { name: '2005', ch: '忘记密码？', en: 'xxx' , korea :"xxx"},
        { name: '2006', ch: '发送', en: 'xxx' , korea :"xxx"},
        { name: '2007', ch: '请再次输入登录密码', en: 'xxx' , korea :"xxx"},
        { name: '2008', ch: '注册', en: 'xxx' , korea :"xxx"},
        { name: '2009', ch: '返回登录', en: 'xxx' , korea :"xxx"},
        { name: '2010', ch: '请输入正确的验证码', en: 'xxx' , korea :"xxx"},
        { name: '2011', ch: '请输入密码', en: 'xxx' , korea :"xxx"},
        { name: '2012', ch: '请再输入密码', en: 'xxx' , korea :"xxx"},
        { name: '2013', ch: '两次密码不一致', en: 'xxx' , korea :"xxx"},
        { name: '2014', ch: '注册成功', en: 'xxx' , korea :"xxx"},
        { name: '2015', ch: '验证码已发送', en: 'xxx' , korea :"xxx"},
        { name: '2016', ch: '账号必须是手机号或邮箱', en: 'xxx' , korea :"xxx"},
        { name: '2017', ch: '<color=#FFFFFF>阅读并同意</color><color=#FFC962>《CG棋牌用户协议》</color>', en: 'xxx' , korea :"xxx"},
        { name: '2018', ch: '请输入6-20位（数字、大小写英文）', en: 'xxx' , korea :"xxx"},
        { name: '2019', ch: '账号必须是6-20位（数字、大小写英文）', en: 'xxx' , korea :"xxx"},
        { name: '2020', ch: '密码6-20位（数字、大小写英文）', en: 'xxx' , korea :"xxx"},
        { name: '2021', ch: '请输入正确的手机号', en: 'xxx' , korea :"xxx"},
        { name: '2022', ch: '请输入推广码（选填）', en: 'xxx' , korea :"xxx"},
        { name: '2023', ch: '请同意《CG棋牌用户协议》', en: 'xxx' , korea :"xxx"},
        { name: '2024', ch: '找回密码', en: 'xxx' , korea :"xxx"},
        { name: '2025', ch: '请输入您要找回的账号', en: 'xxx' , korea :"xxx"},
        { name: '2026', ch: '请输入昵称', en: 'xxx' , korea :"xxx"},
        { name: '2027', ch: '<color=#ffffff>返回</color><color=#FFC962>登陆</color>', en: 'xxx' , korea :"xxx"},
        { name: '2028', ch: '请再次输入密码', en: 'xxx' , korea :"xxx"},
        
        

        //这个编号可以从任意序号开始 没有必要大家都一样， 避免冲突
        { name: '10000', ch: '俱乐部', en: 'xxx' , korea :"xxx"},
        { name: '10001', ch: '赛事', en: 'xxx' , korea :"xxx"},
        { name: '10002', ch: '大厅', en: 'xxx' , korea :"xxx"},
        { name: '10003', ch: '娱乐', en: 'xxx' , korea :"xxx"},
        { name: '10004', ch: '我的', en: 'xxx' , korea :"xxx"},
        { name: '10005', ch: '首充豪礼', en: 'xxx' , korea :"xxx"},
        { name: '10006', ch: '实名认证', en: 'xxx' , korea :"xxx"},
        { name: '10007', ch: '绑定送金', en: 'xxx' , korea :"xxx"},
        { name: '10008', ch: '精彩活动', en: 'xxx' , korea :"xxx"},
        { name: '10009', ch: '全民推广', en: 'xxx' , korea :"xxx"},
        { name: '10010', ch: '更多', en: 'xxx' , korea :"xxx"},
        { name: '10011', ch: '德州扑克', en: 'xxx' , korea :"xxx"},
        { name: '10012', ch: '短牌', en: 'xxx' , korea :"xxx"},
        { name: '10013', ch: '奥马哈', en: 'xxx' , korea :"xxx"},
        { name: '10014', ch: '锦标赛', en: 'xxx' , korea :"xxx"},
        { name: '10015', ch: '微', en: 'xxx' , korea :"xxx"},
        { name: '10016', ch: '小', en: 'xxx' , korea :"xxx"},
        { name: '10017', ch: '中', en: 'xxx' , korea :"xxx"},
        { name: '10018', ch: '大', en: 'xxx' , korea :"xxx"},
        { name: '10019', ch: '不看满桌', en: 'xxx' , korea :"xxx"},
        { name: '10020', ch: '更多选项', en: 'xxx' , korea :"xxx"},
        { name: '10021', ch: '筛选房间', en: 'xxx' , korea :"xxx"},
        { name: '10022', ch: '快速入座', en: 'xxx' , korea :"xxx"},
        { name: '10023', ch: '帮我筛选', en: 'xxx' , korea :"xxx"},
        { name: '10024', ch: '设置', en: 'xxx' , korea :"xxx"},
        { name: '10025', ch: '关注', en: 'xxx' , korea :"xxx"},
        { name: '10026', ch: '修复', en: 'xxx' , korea :"xxx"},
        { name: '10027', ch: '语言', en: 'xxx' , korea :"xxx"},
        { name: '10028', ch: '取消', en: 'xxx' , korea :"xxx"},
        { name: '10029', ch: '确定', en: 'xxx' , korea :"xxx"},
        { name: '10030', ch: '版本修复', en: 'xxx' , korea :"xxx"},
        { name: '10031', ch: '当前版本号：', en: 'xxx' , korea :"xxx"},
        { name: '10032', ch: '是否清理本地缓存的游戏资源?', en: 'xxx' , korea :"xxx"},
        { name: '10033', ch: '当游戏运行有问题时，也可通关此操作解决部分异常问题，需要重新下载热更新资源。', en: 'xxx' , korea :"xxx"},
        { name: '10034', ch: '关注频道', en: 'xxx' , korea :"xxx"},
        { name: '10035', ch: '一键加入', en: 'xxx' , korea :"xxx"},
        { name: '10036', ch: '音效', en: 'xxx' , korea :"xxx"},
        { name: '10037', ch: '声音', en: 'xxx' , korea :"xxx"},
        { name: '10038', ch: '语音', en: 'xxx' , korea :"xxx"},
        { name: '10039', ch: '私聊消息通知', en: 'xxx' , korea :"xxx"},
        { name: '10040', ch: '咪牌', en: 'xxx' , korea :"xxx"},
        { name: '10041', ch: '主题背景', en: 'xxx' , korea :"xxx"},
        { name: '10042', ch: '魅金黑', en: 'xxx' , korea :"xxx"},
        { name: '10043', ch: '象牙白', en: 'xxx' , korea :"xxx"},
        { name: '10044', ch: '平均底池', en: 'xxx' , korea :"xxx"},
        { name: '10045', ch: '准入', en: 'xxx' , korea :"xxx"},
        { name: '10046', ch: '入池率', en: 'xxx' , korea :"xxx"},
        { name: '10047', ch: '房间列表', en: 'xxx' , korea :"xxx"},
        { name: '10048', ch: '桌台列表', en: 'xxx' , korea :"xxx"},
        //个人中心=========================================================
        { name: '100001', ch: '积分', en: 'xxx' , korea :"xxx"},
        { name: '100002', ch: '账户余额', en: 'xxx' , korea :"xxx"},
        { name: '100003', ch: '充值', en: 'xxx' , korea :"xxx"},
        { name: '100004', ch: '提款', en: 'xxx' , korea :"xxx"},
        { name: '100005', ch: '手机号', en: 'xxx' , korea :"xxx"},
        { name: '100006', ch: '邮箱', en: 'xxx' , korea :"xxx"},
        { name: '100007', ch: '登录密码', en: 'xxx' , korea :"xxx"},
        { name: '100008', ch: '资金密码', en: 'xxx' , korea :"xxx"},
        { name: '100009', ch: '实名认证', en: 'xxx' , korea :"xxx"},
        { name: '100010', ch: '未认证', en: 'xxx' , korea :"xxx"},
        { name: '100011', ch: '未绑定', en: 'xxx' , korea :"xxx"},
        { name: '100012', ch: '账变记录', en: 'xxx' , korea :"xxx"},
        { name: '100013', ch: '本月收益', en: 'xxx' , korea :"xxx"},
        { name: '100014', ch: '游戏记录', en: 'xxx' , korea :"xxx"},
        { name: '100015', ch: '提出您的建议和问题', en: 'xxx' , korea :"xxx"},
        { name: '100016', ch: '建议反馈', en: 'xxx' , korea :"xxx"},
        { name: '100017', ch: '真诚为您服务', en: 'xxx' , korea :"xxx"},
        { name: '100018', ch: '在线客服', en: 'xxx' , korea :"xxx"},
        { name: '100019', ch: '登出', en: 'xxx' , korea :"xxx"},
        { name: '100020', ch: '修改昵称', en: 'xxx' , korea :"xxx"},
        { name: '100021', ch: '旧昵称', en: 'xxx' , korea :"xxx"},
        { name: '100022', ch: '请输入新昵称(6-20位数字+大小写英文)', en: 'xxx' , korea :"xxx"},
        { name: '100023', ch: '绑定手机号', en: 'xxx' , korea :"xxx"},
        { name: '100024', ch: '请输入手机号', en: 'xxx' , korea :"xxx"},
        { name: '100025', ch: '请输入手机验证码', en: 'xxx' , korea :"xxx"},
        { name: '100026', ch: '修改手机号', en: 'xxx' , korea :"xxx"},
        { name: '100027', ch: '旧手机号', en: 'xxx' , korea :"xxx"},
        { name: '100028', ch: '绑定邮箱', en: 'xxx' , korea :"xxx"},
        { name: '100029', ch: '请输入邮箱', en: 'xxx' , korea :"xxx"},
        { name: '100030', ch: '请输入邮箱验证码', en: 'xxx' , korea :"xxx"},
        { name: '100031', ch: '邮箱输入不合法', en: 'xxx' , korea :"xxx"},
        { name: '100032', ch: '昵称必须是6-20位数字+大小写英文', en: 'xxx' , korea :"xxx"},
        { name: '100033', ch: '修改邮箱', en: 'xxx' , korea :"xxx"},
        { name: '100034', ch: '旧邮箱', en: 'xxx' , korea :"xxx"},
        { name: '100035', ch: '请输入旧邮箱验证码', en: 'xxx' , korea :"xxx"},
        { name: '100036', ch: '请输入新邮箱', en: 'xxx' , korea :"xxx"},
        { name: '100037', ch: '请输入新邮箱验证码', en: 'xxx' , korea :"xxx"},
        { name: '100038', ch: '修改登录密码', en: 'xxx' , korea :"xxx"},
        { name: '100039', ch: '请输入旧密码', en: 'xxx' , korea :"xxx"},
        { name: '100040', ch: '请输入新密码', en: 'xxx' , korea :"xxx"},
        { name: '100041', ch: '请再次输入新密码', en: 'xxx' , korea :"xxx"},
        { name: '100042', ch: '密码必须是6-20位（数字、大小写英文）', en: 'xxx' , korea :"xxx"},
        { name: '100043', ch: '设置资金密码', en: 'xxx' , korea :"xxx"},
        { name: '100044', ch: '请输入资金密码', en: 'xxx' , korea :"xxx"},
        { name: '100045', ch: '请再次输入资金密码', en: 'xxx' , korea :"xxx"},
        { name: '100046', ch: '修改资金密码', en: 'xxx' , korea :"xxx"},
        { name: '100046', ch: '请输入旧资金密码', en: 'xxx' , korea :"xxx"},
        { name: '100047', ch: '请输入新资金密码', en: 'xxx' , korea :"xxx"},
        { name: '100048', ch: '实名认证', en: 'xxx' , korea :"xxx"},
        { name: '100049', ch: '请输入姓名', en: 'xxx' , korea :"xxx"},
        { name: '100050', ch: '请输入身份证号码', en: 'xxx' , korea :"xxx"},
        { name: '100051', ch: '请输入姓名', en: 'xxx' , korea :"xxx"},
        { name: '100052', ch: '请输入身份证号', en: 'xxx' , korea :"xxx"},
        { name: '100053', ch: '用户姓名', en: 'xxx' , korea :"xxx"},
        { name: '100054', ch: '身份证号', en: 'xxx' , korea :"xxx"},
        { name: '100055', ch: '修改成功', en: 'xxx' , korea :"xxx"},     //======
        { name: '100056', ch: '已经绑定', en: 'xxx' , korea :"xxx"},
        { name: '100057', ch: '已经实名认证', en: 'xxx' , korea :"xxx"},
        { name: '100058', ch: '所有类型', en: 'xxx' , korea :"xxx"},
        { name: '100059', ch: '所有对象', en: 'xxx' , korea :"xxx"},
        { name: '100060', ch: '单号', en: 'xxx' , korea :"xxx"},
        { name: '100061', ch: '提款', en: 'xxx' , korea :"xxx"},
        { name: '100062', ch: '所有游戏', en: 'xxx' , korea :"xxx"},
        { name: '100063', ch: '游戏统计', en: 'xxx' , korea :"xxx"},
        { name: '100064', ch: '统计', en: 'xxx' , korea :"xxx"},
        { name: '100065', ch: '局号', en: 'xxx' , korea :"xxx"},
        { name: '100066', ch: '游戏', en: 'xxx' , korea :"xxx"},
        { name: '100070', ch: '所有场馆', en: 'xxx' , korea :"xxx"},
        { name: '100071', ch: '盘数', en: 'xxx' , korea :"xxx"},
        { name: '100072', ch: '胜率', en: 'xxx' , korea :"xxx"},
        { name: '100073', ch: '总盈利', en: 'xxx' , korea :"xxx"},
        
        //  
        { name: '100074', ch: '所有类型', en: 'xxx' , korea :"xxx"},
        { name: '100075', ch: '收入', en: 'xxx' , korea :"xxx"},
        { name: '100076', ch: '支出', en: 'xxx' , korea :"xxx"},

        { name: '100080', ch: '所有对象', en: 'xxx' , korea :"xxx"},
        { name: '100081', ch: '充值', en: 'xxx' , korea :"xxx"},
        { name: '100082', ch: '提款', en: 'xxx' , korea :"xxx"},
        { name: '100083', ch: '游戏', en: 'xxx' , korea :"xxx"},
        { name: '100084', ch: '返水', en: 'xxx' , korea :"xxx"},
        { name: '100085', ch: '佣金', en: 'xxx' , korea :"xxx"},
        { name: '100086', ch: '消费', en: 'xxx' , korea :"xxx"},

        { name: '100090', ch: '所有场次', en: 'xxx' , korea :"xxx"},
        { name: '100091', ch: '初级场', en: 'xxx' , korea :"xxx"},
        { name: '100092', ch: '中级场', en: 'xxx' , korea :"xxx"},
        { name: '100093', ch: '高级场', en: 'xxx' , korea :"xxx"},

        { name: '100100', ch: '所有游戏', en: 'xxx' , korea :"xxx"},
        { name: '100101', ch: '炸金花', en: 'xxx' , korea :"xxx"},
        { name: '100102', ch: '德州扑克', en: 'xxx' , korea :"xxx"},
        { name: '100103', ch: '斗地主', en: 'xxx' , korea :"xxx"},
        { name: '100104', ch: '麻将', en: 'xxx' , korea :"xxx"},
       
        { name: '100130', ch: '所有对象', en: 'xxx' , korea :"xxx"},
        { name: '100131', ch: '赛事', en: 'xxx' , korea :"xxx"},
        { name: '100132', ch: '邮箱', en: 'xxx' , korea :"xxx"},
        { name: '100133', ch: '抽奖', en: 'xxx' , korea :"xxx"},

        { name: '100140', ch: '所有类型', en: 'xxx' , korea :"xxx"},
        { name: '100141', ch: '银行卡', en: 'xxx' , korea :"xxx"},
        { name: '100142', ch: '微信', en: 'xxx' , korea :"xxx"},
        { name: '100143', ch: '支付宝', en: 'xxx' , korea :"xxx"},
        { name: '100144', ch: 'USTD', en: 'xxx' , korea :"xxx"},
       
        { name: '100150', ch: '所有状态', en: 'xxx' , korea :"xxx"},
        { name: '100151', ch: '成功', en: 'xxx' , korea :"xxx"},
        { name: '100152', ch: '失败', en: 'xxx' , korea :"xxx"},
        { name: '100153', ch: '进行中', en: 'xxx' , korea :"xxx"},

        { name: '100155', ch: '启用', en: 'xxx' , korea :"xxx"},
        { name: '100156', ch: '禁用', en: 'xxx' , korea :"xxx"},
        { name: '100157', ch: '删除', en: 'xxx' , korea :"xxx"},

        { name: '100160', ch: '中国银行', en: 'xxx' , korea :"xxx"},
        { name: '100161', ch: '中国农业银行', en: 'xxx' , korea :"xxx"},
        { name: '100162', ch: '中国建设银行', en: 'xxx' , korea :"xxx"},
        { name: '100163', ch: '中国工商银行', en: 'xxx' , korea :"xxx"},


        { name: '100171', ch: '抽水', en: 'xxx' , korea :"xxx"},
        { name: '100172', ch: '保险', en: 'xxx' , korea :"xxx"},

        { name: '100176', ch: '已到账', en: 'xxx' , korea :"xxx"},
        { name: '100177', ch: '处理中', en: 'xxx' , korea :"xxx"},
        { name: '100178', ch: '拒绝', en: 'xxx' , korea :"xxx"},   
        { name: '100179', ch: '失败', en: 'xxx' , korea :"xxx"},  
        //
        { name: '101000', ch: '菜单', en: 'xxx' , korea :"xxx"},
        { name: '101001', ch: '输入', en: 'xxx' , korea :"xxx"},
        { name: '101002', ch: '公告', en: 'xxx' , korea :"xxx"},
        { name: '101003', ch: '邮箱', en: 'xxx' , korea :"xxx"},
        { name: '101004', ch: '一键已读', en: 'xxx' , korea :"xxx"},
        { name: '101005', ch: '领取', en: 'xxx' , korea :"xxx"},
        { name: '101006', ch: '下一等级福利', en: 'xxx' , korea :"xxx"},
        { name: '101007', ch: '去充值', en: 'xxx' , korea :"xxx"},
        { name: '101008', ch: '已领取', en: 'xxx' , korea :"xxx"},
        { name: '101009', ch: '积分记录', en: 'xxx' , korea :"xxx"},

        { name: '101010', ch: '门票', en: 'xxx' , korea :"xxx"},
        { name: '101011', ch: '距离截止日期还剩          天', en: 'xxx' , korea :"xxx"},
        { name: '101012', ch: '通用票', en: 'xxx' , korea :"xxx"},
        { name: '101016', ch: '充值', en: 'xxx' , korea :"xxx"},
        { name: '101017', ch: '记录', en: 'xxx' , korea :"xxx"},
        { name: '101018', ch: '申诉', en: 'xxx' , korea :"xxx"},
        { name: '101019', ch: '充值到', en: 'xxx' , korea :"xxx"},
        { name: '101020', ch: '充值金额', en: 'xxx' , korea :"xxx"},
        { name: '101021', ch: '请输入充值金额', en: 'xxx' , korea :"xxx"},
        { name: '101022', ch: '下一步', en: 'xxx' , korea :"xxx"},
        { name: '101023', ch: '我已付款', en: 'xxx' , korea :"xxx"},
        { name: '101024', ch: '收款类型', en: 'xxx' , korea :"xxx"},
        { name: '101025', ch: '收款账号', en: 'xxx' , korea :"xxx"},
        { name: '101026', ch: '收款姓名', en: 'xxx' , korea :"xxx"},
        { name: '101027', ch: '金额超出范围 ', en: 'xxx' , korea :"xxx"},
        { name: '101028', ch: '申诉说明', en: 'xxx' , korea :"xxx"},
        { name: '101029', ch: '上传凭证', en: 'xxx' , korea :"xxx"},

        { name: '101030', ch: '可上传不超过1M的图片或者视频', en: 'xxx' , korea :"xxx"},
        { name: '101031', ch: '渠道', en: 'xxx' , korea :"xxx"},
        { name: '101032', ch: '提款到', en: 'xxx' , korea :"xxx"},
        { name: '101033', ch: '提款金额', en: 'xxx' , korea :"xxx"},
        { name: '101034', ch: '资金密码', en: 'xxx' , korea :"xxx"},
        { name: '101035', ch: '确定提款', en: 'xxx' , korea :"xxx"},
        { name: '101036', ch: '每个账号可以配置10个提款渠道,当前', en: 'xxx' , korea :"xxx"},
        { name: '101037', ch: '添加提款渠道', en: 'xxx' , korea :"xxx"},
        { name: '101038', ch: '请输入资金密码', en: 'xxx' , korea :"xxx"},
        { name: '101040', ch: '新增', en: 'xxx' , korea :"xxx"},
        { name: '101041', ch: '粘贴', en: 'xxx' , korea :"xxx"},
        { name: '101042', ch: '请选择银行', en: 'xxx' , korea :"xxx"},
        { name: '101043', ch: '请输入银行卡号', en: 'xxx' , korea :"xxx"},
        { name: '101044', ch: '请输入银行支行', en: 'xxx' , korea :"xxx"},
        { name: '101045', ch: '请输入银行开户名', en: 'xxx' , korea :"xxx"},
        { name: '101046', ch: '请输入手机/邮箱验证码', en: 'xxx' , korea :"xxx"},
        { name: '101047', ch: '上传', en: 'xxx' , korea :"xxx"},
        { name: '101048', ch: '请填微信账号', en: 'xxx' , korea :"xxx"},
        { name: '101049', ch: '请上传微信二维码', en: 'xxx' , korea :"xxx"},
        { name: '101050', ch: '请输入微信昵称', en: 'xxx' , korea :"xxx"},
        { name: '101051', ch: '请填支付宝账号', en: 'xxx' , korea :"xxx"},
        { name: '101052', ch: '请上传支付宝二维码', en: 'xxx' , korea :"xxx"},
        { name: '101053', ch: '请输入支付宝昵称', en: 'xxx' , korea :"xxx"},
        { name: '101054', ch: '请输入钱包地址', en: 'xxx' , korea :"xxx"},

        { name: '101055', ch: '个人资料', en: 'xxx' , korea :"xxx"},
        { name: '101056', ch: '头像', en: 'xxx' , korea :"xxx"},
        { name: '101057', ch: '昵称', en: 'xxx' , korea :"xxx"},
        { name: '101058', ch: '账号', en: 'xxx' , korea :"xxx"},
        { name: '101059', ch: 'QQ号', en: 'xxx' , korea :"xxx"},
        { name: '101060', ch: '提款姓名', en: 'xxx' , korea :"xxx"},
        { name: '101061', ch: '旺旺号', en: 'xxx' , korea :"xxx"},
        { name: '101062', ch: '推广中心', en: 'xxx' , korea :"xxx"},
        { name: '101063', ch: '个人生涯', en: 'xxx' , korea :"xxx"},
        { name: '101064', ch: '活动优惠', en: 'xxx' , korea :"xxx"},
        { name: '101065', ch: '安全设置', en: 'xxx' , korea :"xxx"},
        { name: '101066', ch: '设备锁', en: 'xxx' , korea :"xxx"},

        { name: '101067', ch: '闲置时间', en: 'xxx' , korea :"xxx"},
        { name: '101068', ch: '已设置', en: 'xxx' , korea :"xxx"},
        { name: '101069', ch: '未设置', en: 'xxx' , korea :"xxx"},
        { name: '101070', ch: '周', en: 'xxx' , korea :"xxx"},
        { name: '101071', ch: '个月', en: 'xxx' , korea :"xxx"},
        { name: '101072', ch: '个人生涯', en: 'xxx' , korea :"xxx"},
        { name: '101073', ch: '总局数', en: 'xxx' , korea :"xxx"}, 
        { name: '101074', ch: '入池率', en: 'xxx' , korea :"xxx"},
        { name: '101075', ch: '场均带入', en: 'xxx' , korea :"xxx"},   
        { name: '101076', ch: '总手数', en: 'xxx' , korea :"xxx"},
        { name: '101077', ch: '翻前加注率', en: 'xxx' , korea :"xxx"}, 
        { name: '101078', ch: '场均战绩', en: 'xxx' , korea :"xxx"}, 
        { name: '101079', ch: '总成绩', en: 'xxx' , korea :"xxx"}, 
        { name: '101080', ch: '激进度', en: 'xxx' , korea :"xxx"}, 
        { name: '101081', ch: '大厅战绩', en: 'xxx' , korea :"xxx"}, 
        { name: '101082', ch: '赛事生涯', en: 'xxx' , korea :"xxx"}, 
        { name: '101083', ch: '徽章', en: 'xxx' , korea :"xxx"}, 
        { name: '101084', ch: '推广', en: 'xxx' , korea :"xxx"}, 
        { name: '101085', ch: '直属', en: 'xxx' , korea :"xxx"}, 
        { name: '101086', ch: '税收', en: 'xxx' , korea :"xxx"}, 
        { name: '101087', ch: '拥金', en: 'xxx' , korea :"xxx"}, 
        { name: '101088', ch: '邀请码', en: 'xxx' , korea :"xxx"}, 
        { name: '101089', ch: '邀请链接', en: 'xxx' , korea :"xxx"}, 
        { name: '101090', ch: '复制', en: 'xxx' , korea :"xxx"}, 
        { name: '101091', ch: '分享', en: 'xxx' , korea :"xxx"},
        { name: '101092', ch: '下级玩家数', en: 'xxx' , korea :"xxx"},
        { name: '101093', ch: '今日新增玩家', en: 'xxx' , korea :"xxx"},
        { name: '101094', ch: '今日活跃玩家', en: 'xxx' , korea :"xxx"},
        { name: '101095', ch: '下级ID', en: 'xxx' , korea :"xxx"},
        { name: '101096', ch: '有效投注', en: 'xxx' , korea :"xxx"},
        { name: '101097', ch: '存款', en: 'xxx' , korea :"xxx"},
        { name: '101098', ch: '取款', en: 'xxx' , korea :"xxx"},
        { name: '101099', ch: '预计拥金', en: 'xxx' , korea :"xxx"},
        { name: '101100', ch: '本月游戏税收', en: 'xxx' , korea :"xxx"}, 
        { name: '101101', ch: '本月保险税收', en: 'xxx' , korea :"xxx"},
        { name: '101102', ch: '日期', en: 'xxx' , korea :"xxx"},
        { name: '101103', ch: '游戏输赢', en: 'xxx' , korea :"xxx"},
        { name: '101104', ch: '保险输赢', en: 'xxx' , korea :"xxx"},
        { name: '101105', ch: '合计', en: 'xxx' , korea :"xxx"},
        { name: '101106', ch: '总拥金', en: 'xxx' , korea :"xxx"},
        { name: '101107', ch: '项目', en: 'xxx' , korea :"xxx"},
        { name: '101108', ch: '日期/单号', en: 'xxx' , korea :"xxx"},
        { name: '101109', ch: '金额', en: 'xxx' , korea :"xxx"},
        { name: '101110', ch: '代理报表', en: 'xxx' , korea :"xxx"},
        { name: '101111', ch: '下家人数', en: 'xxx' , korea :"xxx"},
        { name: '101112', ch: '平台服务费', en: 'xxx' , korea :"xxx"},
        { name: '101113', ch: '游戏局数', en: 'xxx' , korea :"xxx"},
        { name: '101114', ch: '日活跃人数', en: 'xxx' , korea :"xxx"},
        { name: '101115', ch: '月活跃人数', en: 'xxx' , korea :"xxx"},
        { name: '101116', ch: '游戏有效投注', en: 'xxx' , korea :"xxx"},
        { name: '101117', ch: '税收金额', en: 'xxx' , korea :"xxx"},
        { name: '101118', ch: '保险投注', en: 'xxx' , korea :"xxx"},
        { name: '101119', ch: '税收提成', en: 'xxx' , korea :"xxx"},
        { name: '101120', ch: '代理说明', en: 'xxx' , korea :"xxx"},
        { name: '101121', ch: '抽水点位(日结)', en: 'xxx' , korea :"xxx"},
        { name: '101122', ch: '保险点位(月结)', en: 'xxx' , korea :"xxx"},
        { name: '101123', ch: '开始区间', en: 'xxx' , korea :"xxx"},
        { name: '101124', ch: '结束区间', en: 'xxx' , korea :"xxx"},
        { name: '101125', ch: '佣金点位%', en: 'xxx' , korea :"xxx"},
        { name: '101126', ch: '选择头像', en: 'xxx' , korea :"xxx"},
        { name: '101127', ch: '可兑换', en: 'xxx' , korea :"xxx"},
        { name: '101128', ch: '出售门票', en: 'xxx' , korea :"xxx"},
        { name: '101129', ch: '您确定要出售这张门票吗?', en: 'xxx' , korea :"xxx"},
        { name: '101130', ch: '这张门票的价格为', en: 'xxx' , korea :"xxx"},
        { name: '101131', ch: '一键领取', en: 'xxx' , korea :"xxx"},
        { name: '101132', ch: '领取成功', en: 'xxx' , korea :"xxx"},
        { name: '101133', ch: '回复', en: 'xxx' , korea :"xxx"},
        { name: '101134', ch: '复制成功', en: 'xxx' , korea :"xxx"},
        { name: '101135', ch: 'GGG', en: 'xxx' , korea :"xxx"},
        { name: '101136', ch: 'GGG', en: 'xxx' , korea :"xxx"},
        { name: '101137', ch: 'GGG', en: 'xxx' , korea :"xxx"},
        { name: '101138', ch: 'GGG', en: 'xxx' , korea :"xxx"},
        { name: '101139', ch: 'GGG', en: 'xxx' , korea :"xxx"},
        { name: '101140', ch: 'GGG', en: 'xxx' , korea :"xxx"},
        { name: '101141', ch: 'GGG', en: 'xxx' , korea :"xxx"},



        //==========================================================
        //karl 你可以从50000开始
        // HallClub
        { name: '50000', ch: '我的俱乐部', en: 'xxx' , korea :"xxx"},
        { name: '50001', ch: '现金桌', en: 'xxx' , korea :"xxx"},
        { name: '50002', ch: '钻石桌', en: 'xxx' , korea :"xxx"},
        { name: '50003', ch: '全部', en: 'xxx' , korea :"xxx"},
        { name: '50004', ch: '德州扑克', en: 'xxx' , korea :"xxx"},
        { name: '50005', ch: '短牌', en: 'xxx' , korea :"xxx"},
        { name: '50006', ch: '炸金花', en: 'xxx' , korea :"xxx"},
        { name: '50007', ch: '百家乐', en: 'xxx' , korea :"xxx"},
        { name: '50008', ch: '德州扑克', en: 'xxx' , korea :"xxx"},
        { name: '50009', ch: '德州扑克', en: 'xxx' , korea :"xxx"},
        { name: '50010', ch: '德州扑克', en: 'xxx' , korea :"xxx"},


        // fred
        { name: '200001', ch: '常规赛', en: 'xxx' , korea :"xxx"},
        { name: '200002', ch: '赏金赛', en: 'xxx' , korea :"xxx"},
        { name: '200003', ch: '卫星赛', en: 'xxx' , korea :"xxx"},
        { name: '200004', ch: '时间', en: 'xxx' , korea :"xxx"},
        { name: '200005', ch: '赛事', en: 'xxx' , korea :"xxx"},
        { name: '200006', ch: '奖金', en: 'xxx' , korea :"xxx"},
        { name: '200007', ch: '所有', en: 'xxx' , korea :"xxx"},
        { name: '200008', ch: '已暂停', en: 'xxx' , korea :"xxx"},
        { name: '200009', ch: '报名中', en: 'xxx' , korea :"xxx"},
        { name: '200010', ch: '比赛中', en: 'xxx' , korea :"xxx"},
        { name: '200011', ch: '延迟报名', en: 'xxx' , korea :"xxx"},
        { name: '200012', ch: '即将开始', en: 'xxx' , korea :"xxx"},
        { name: '200013', ch: '我的赛事', en: 'xxx' , korea :"xxx"},
        { name: '200014', ch: '赛事搜索', en: 'xxx' , korea :"xxx"},
        { name: '200015', ch: '距离关闭', en: 'xxx' , korea :"xxx"},
        { name: '200016', ch: '距离开始', en: 'xxx' , korea :"xxx"},
        { name: '200017', ch: '重新开始', en: 'xxx' , korea :"xxx"},
        { name: '200018', ch: '下次休息', en: 'xxx' , korea :"xxx"},

        // 赛事信息
        { name: '200019', ch: '奖金池', en: 'xxx' , korea :"xxx"},
        { name: '200020', ch: '等级', en: 'xxx' , korea :"xxx"},
        { name: '200021', ch: '赏金', en: 'xxx' , korea :"xxx"},
        { name: '200022', ch: '信息', en: 'xxx' , korea :"xxx"},
        { name: '200023', ch: '结构', en: 'xxx' , korea :"xxx"},
        { name: '200024', ch: '卫星赛', en: 'xxx' , korea :"xxx"},

        // 赛事结构
        { name: '200025', ch: '盲注', en: 'xxx' , korea :"xxx"},
        { name: '200026', ch: '钱圈', en: 'xxx' , korea :"xxx"},
        { name: '200027', ch: '起始筹码', en: 'xxx' , korea :"xxx"},
        { name: '200028', ch: '级别', en: 'xxx' , korea :"xxx"},
        { name: '200029', ch: '前注', en: 'xxx' , korea :"xxx"},
        { name: '200030', ch: '秒', en: 'xxx' , korea :"xxx"},
        { name: '200031', ch: '分', en: 'xxx' , korea :"xxx"},
        { name: '200032', ch: '名次', en: 'xxx' , korea :"xxx"},
        { name: '200033', ch: '中的', en: 'xxx' , korea :"xxx"},
        { name: '200034', ch: '人次', en: 'xxx' , korea :"xxx"},
        { name: '200035', ch: '奖金', en: 'xxx' , korea :"xxx"},
        { name: '200036', ch: '钱圈名次', en: 'xxx' , korea :"xxx"},
        { name: '200037', ch: '买入/玩家 | 奖金', en: 'xxx' , korea :"xxx"},

        { name: '200038', ch: '选座中', en: 'xxx' , korea :"xxx"},
        { name: '200039', ch: '协商', en: 'xxx' , korea :"xxx"},

        // 德州游戏
        { name: '90000', ch: '前注', en: 'Ante' , korea :"xxx"},
        { name: '90001', ch: '过牌', en: 'Check' , korea :"xxx"},
        { name: '90002', ch: '大盲', en: 'BB' , korea :"xxx"},
        { name: '90003', ch: '小盲', en: 'SB' , korea :"xxx"},
        { name: '90004', ch: '加注', en: 'SB' , korea :"xxx"},
        { name: '90005', ch: '弃牌', en: 'Fold' , korea :"xxx"},
        { name: '90006', ch: '全下', en: 'AllIn' , korea :"xxx"},
        { name: '90007', ch: '跟注', en: 'Call' , korea :"xxx"},
        { name: '90008', ch: '坐下', en: 'xxx' , korea :"xxx"},
        { name: '90009', ch: '空位', en: 'xxx' , korea :"xxx"},
        { name: '90010', ch: '带入金额', en: 'xxx' , korea :"xxx"},
        { name: '90011', ch: '申请带入金额', en: 'xxx' , korea :"xxx"},
        { name: '90012', ch: '最小', en: 'xxx' , korea :"xxx"},
        { name: '90013', ch: '最大', en: 'xxx' , korea :"xxx"},
        { name: '90014', ch: '已带入', en: 'xxx' , korea :"xxx"},
        { name: '90015', ch: '手续费', en: 'xxx' , korea :"xxx"},
        { name: '90016', ch: '表情', en: 'xxx' , korea :"xxx"},
        { name: '90017', ch: '快捷语', en: 'xxx' , korea :"xxx"},
        { name: '90028', ch: '最近使用', en: 'xxx' , korea :"xxx"},
        { name: '90029', ch: '全部表情', en: 'xxx' , korea :"xxx"},
        { name: '90030', ch: '站起', en: 'xxx' , korea :"xxx"},
        { name: '90031', ch: '请先站起离开座位', en: 'xxx' , korea :"xxx"},
        { name: '90032', ch: '牌桌设置', en: 'xxx' , korea :"xxx"},
        { name: '90033', ch: '桌面风格', en: 'xxx' , korea :"xxx"},
        { name: '90034', ch: '自定义快捷加注', en: 'xxx' , korea :"xxx"},
        { name: '90035', ch: '牌局静音', en: 'xxx' , korea :"xxx"},
        { name: '90036', ch: '禁用弹幕', en: 'xxx' , korea :"xxx"},
        { name: '90037', ch: '保险提示', en: 'xxx' , korea :"xxx"},
        { name: '90038', ch: '拉杆确认', en: 'xxx' , korea :"xxx"},
        { name: '90039', ch: '保存设置', en: 'xxx' , korea :"xxx"},
        { name: '90040', ch: '无', en: 'xxx' , korea :"xxx"},
        { name: '90041', ch: '牌型提示', en: 'xxx' , korea :"xxx"},
        { name: '90042', ch: '保险说明', en: 'xxx' , korea :"xxx"},
        { name: '90043', ch: '请先选择要调整的快捷加注按钮', en: 'xxx' , korea :"xxx"},
        { name: '90044', ch: '余额不足', en: 'xxx' , korea :"None"},
        { name: '90045', ch: '余额不足最小带入', en: 'xxx' , korea :"xxx"},
        { name: '90046', ch: '超过最大带入上限', en: 'xxx' , korea :"xxx"},
        { name: '90047', ch: '带入成功', en: 'xxx' , korea :"xxx"},
        { name: '90048', ch: '带出金额', en: 'xxx' , korea :"xxx"},
        { name: '90049', ch: '申请带出金额', en: 'xxx' , korea :"xxx"},
        { name: '90050', ch: '确定带出', en: 'xxx' , korea :"xxx"},
        { name: '90051', ch: '确定带入', en: 'xxx' , korea :"xxx"},
        { name: '90052', ch: '带出成功', en: 'xxx' , korea :"xxx"},
        { name: '90053', ch: '下注', en: 'xxx' , korea :"xxx"},
        { name: '90054', ch: '序号', en: 'xxx' , korea :"xxx"},
        { name: '90055', ch: '牌局编号', en: 'xxx' , korea :"xxx"},
        { name: '90056', ch: '盈利', en: 'xxx' , korea :"xxx"},
        { name: '90057', ch: '牌局阶段', en: 'xxx' , korea :"xxx"},
        { name: '90058', ch: '玩家', en: 'xxx' , korea :"xxx"},
        { name: '90059', ch: '下注金额', en: 'xxx' , korea :"xxx"},
        { name: '90060', ch: '底池金额', en: 'xxx' , korea :"xxx"},
        { name: '90061', ch: '买入金额不足，请先买入', en: 'xxx' , korea :"xxx"},
        { name: '90062', ch: '赔率', en: 'xxx' , korea :"xxx"},
        { name: '90063', ch: '投保额', en: 'xxx' , korea :"xxx"},
        { name: '90064', ch: '赔付额', en: 'xxx' , korea :"xxx"},
        { name: '90065', ch: '补牌', en: 'xxx' , korea :"xxx"},
        { name: '90066', ch: '最大值', en: 'xxx' , korea :"xxx"},
        { name: '90067', ch: '公共牌', en: 'xxx' , korea :"xxx"},
        { name: '90068', ch: '放弃', en: 'xxx' , korea :"xxx"},
        { name: '90069', ch: '购买', en: 'xxx' , korea :"xxx"},
        { name: '90070', ch: '保本', en: 'xxx' , korea :"xxx"},
        { name: '90071', ch: '满池', en: 'xxx' , korea :"xxx"},
        { name: '90072', ch: '底池', en: 'xxx' , korea :"xxx"},
        //快捷语
        { name: '900000', ch: '快点吧，我等到花儿也谢了～', en: 'xxx' , korea :"xxx"},
        { name: '900001', ch: '我5个1，斋!', en: 'xxx' , korea :"xxx"},
        { name: '900002', ch: '你的牌打的太好了', en: 'xxx' , korea :"xxx"},
        { name: '900003', ch: '天苍苍，野茫茫，风吹草低见牛羊', en: 'xxx' , korea :"xxx"},
        { name: '900004', ch: '我有酒，你有故事么', en: 'xxx' , korea :"xxx"},
        { name: '900005', ch: '睡什么睡，决战到天亮！', en: 'xxx' , korea :"xxx"},
        { name: '900006', ch: '槟榔加烟，发礼物表！', en: 'xxx' , korea :"xxx"},
        

        //游戏背景
        { name: '910000', ch: '平面红', en: 'xxx' , korea :"xxx"},
        { name: '910001', ch: '平面紫', en: 'xxx' , korea :"xxx"},
        { name: '910002', ch: '平面蓝', en: 'xxx' , korea :"xxx"},
        { name: '910003', ch: '平面绿', en: 'xxx' , korea :"xxx"},
        { name: '910004', ch: '平面棕', en: 'xxx' , korea :"xxx"},
        { name: '910005', ch: '海底星空', en: 'xxx' , korea :"xxx"},
        { name: '910006', ch: '夏日沙滩', en: 'xxx' , korea :"xxx"},
        { name: '910007', ch: '高山流水', en: 'xxx' , korea :"xxx"},
        { name: '910008', ch: '极地冰川', en: 'xxx' , korea :"xxx"},
        { name: '910009', ch: '子夜星空', en: 'xxx' , korea :"xxx"},

        //牌型名称
        { name: '920001', ch: '高牌', en: 'xxx' , korea :"xxx"},
        { name: '920002', ch: '一对', en: 'xxx' , korea :"xxx"},
        { name: '920003', ch: '两对', en: 'xxx' , korea :"xxx"},
        { name: '920004', ch: '三条', en: 'xxx' , korea :"xxx"},
        { name: '920005', ch: '顺子', en: 'xxx' , korea :"xxx"},
        { name: '920006', ch: '同花', en: 'xxx' , korea :"xxx"},
        { name: '920007', ch: '葫芦', en: 'xxx' , korea :"xxx"},
        { name: '920008', ch: '四条', en: 'xxx' , korea :"xxx"},
        { name: '920009', ch: '同花顺', en: 'xxx' , korea :"xxx"},
        { name: '920010', ch: '皇家同花顺', en: 'xxx' , korea :"xxx"},

        //牌型描述
        { name: '930001', ch: '五张牌都无法组成以上任何牌型', en: 'xxx' , korea :"xxx"},
        { name: '930002', ch: '两张大小相同的牌带三张散牌', en: 'xxx' , korea :"xxx"},
        { name: '930003', ch: '两对对子带一张散牌', en: 'xxx' , korea :"xxx"},
        { name: '930004', ch: '三张大小相同的牌带两张散牌', en: 'xxx' , korea :"xxx"},
        { name: '930005', ch: '两种花色以上的顺子', en: 'xxx' , korea :"xxx"},
        { name: '930006', ch: '五张花色相同的牌', en: 'xxx' , korea :"xxx"},
        { name: '930007', ch: '三张大小相同的牌带两张大小相同的牌', en: 'xxx' , korea :"xxx"},
        { name: '930008', ch: '四张大小相同的牌带一张散牌', en: 'xxx' , korea :"xxx"},
        { name: '930009', ch: '同一种花色的顺子', en: 'xxx' , korea :"xxx"},
        { name: '930010', ch: '同一种花色最大的顺子', en: 'xxx' , korea :"xxx"},
    ];
}
