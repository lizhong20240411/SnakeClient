
export enum GameCateogry
{
    Texas = 101, //德州
    Short = 102, //短牌
}

export enum GameListType
{
    Room = 0, //房间列表
    Table = 1, //桌子列表
}


export enum ToggleSubView
{
    Agent = 0 , //代理界面
    Bank , //银行
    Setting , //设置
    UserInfo , //用户中心
}

//注册方式
export enum RegisterMethod
{
    Phone = 0 , //手机注册
    Mail , //邮箱注册
}




//大厅首页底部分页索引
export enum HallSubview
{
    Club = 0 , //俱乐部
    Game , //赛事
    Main , //大厅
    Entertainment , //娱乐
    Me , //我的
}

//大厅游戏类型索引
export enum HallGameCategory
{
    Texas = 0, //德州
    Short, //短牌
    Omh , //奥马哈
    MTT, //锦标赛
}

//大厅游戏级别索引
export enum HallGameLevel
{
    Tiny = 0, //微
    Small, //小
    Middle , //中
    Big, //大
}

//Event 游戏类型
export enum EventMatchType
{
    Texas = 0, //全民德州
    Invite, //邀请赛
    Master , //大师赛
}

//Event 列表下拉框选项
export enum EventListOption
{
    All = 0, //所有
    Pause, //已暂停
    Waiting , //未开始
    Delay, //延迟报名
    Ready,//即将开始
}


//=========个人中心,下拉框响应事件=============================================

//账户记录类型 菜单
export enum EventAccRecordType
{
    All = 0, //所有
    In,      //收入
    Out,     //支出
}


//账户记录目标菜单   (充值1,提款2,游戏3,返水4,佣金5,消费6)
export enum EventAccRecordTarget
{
    All = 0,   //所有
    Target1,      //充值
    Target2,      //提款
    Target3,      //游戏
    Target4,      //返水
    Target5,      //佣金
    Target6,      //消费
}


//游戏类型菜单
export enum EventGameType
{
    All = 0, //所有
    Game1,   //炸金花
    Game2,   //德州扑克
    Game3,   //斗地主
    Game4,   //麻将
}


//游戏级别场次菜单
export enum EventGameLev
{
    All = 0,   //所有
    Lev1,      //初级场
    Lev2,      //中级场
    Lev3,      //高级场
}


//菜单响应事件, 所有选项卡都可以用这个;
export enum EventMeALL
{
    All = 0, //所有
    Event1,   //
    Event2,   
    Event3,   
    Event4,   
    Event5,   
    Event6,   
    Event7,   
    Event8,   
    Event9, 
    Event10,   
    Event11,   
    Event12,   
    Event13,   
    Event14,   
    Event15,   
    Event16,   
    Event17,   
}



//======================================================