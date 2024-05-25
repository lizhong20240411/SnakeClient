
 const { ccclass, property, disallowMultiple, menu, executionOrder, requireComponent } = _decorator;
 import { Node, Component, Enum, tween, _decorator, EventHandler, ScrollView, Prefab, Layout, Vec2, Size, NodePool, isValid, instantiate, Vec3, Widget, UITransform, CCFloat, CCBoolean, CCInteger, Tween } from 'cc';
 import { DEV } from 'cc/env';

 
 enum TemplateType {
     NODE = 1,
     PREFAB = 2,
 }

 @ccclass
 @disallowMultiple()
 @menu('ListView')
 @requireComponent(ScrollView)
 //脚本生命周期回调的执行优先级。小于 0 的脚本将优先执行，大于 0 的脚本将最后执行。该优先级只对 onLoad, onEnable, start, update 和 lateUpdate 有效，对 onDisable 和 onDestroy 无效。
 @executionOrder(-5000)
 export default class ListView extends Component {

    @property(Node) 
    mDragToRefresh: Node = null; //下拉刷新提示
     //模板类型
     @property({ type: Enum(TemplateType), tooltip: DEV && '模板类型', })
     private templateType: TemplateType = TemplateType.NODE;
     //模板Item（Node）
     @property({
         type: Node,
         tooltip: DEV && '模板Item',
         visible() { return this.templateType == TemplateType.NODE; }
     })
     tmpNode: Node = null;
     //模板Item（Prefab）
     @property({
         type: Prefab,
         tooltip: DEV && '模板Item',
         visible() { return this.templateType == TemplateType.PREFAB; }
     })
     tmpPrefab: Prefab = null;
     //是否为虚拟列表（动态列表）
     @property({})
     private _virtual: boolean = true;
     @property({
         type: CCBoolean,
         tooltip: DEV && '是否为虚拟列表（动态列表）'
     })
     set virtual(val: boolean) {
         if (val != null)
             this._virtual = val;
         if (!DEV && this._numItems != 0) {
             this._onScrolling();
         }
     }
     get virtual() {
         return this._virtual;
     }

    //缺省可滑动
    @property({
        tooltip: DEV && 'Item数量不足以填满Content时，是否可滑动',
        visible() {
            let val: boolean = this.virtual;
            if (!val)
                this.lackSlide = false;
            return val;
        }
    })
    public lackSlide : boolean = true;

     //刷新频率
     @property({ type: CCInteger })
     private _updateRate: number = 0;
     @property({
         type: CCInteger,
         range: [0, 6, 1],
         tooltip: DEV && '刷新频率（值越大刷新频率越低、性能越高）',
         slide: true,
     })
     set updateRate(val: number) {
         if (val >= 0 && val <= 6) {
             this._updateRate = val;
         }
     }
     get updateRate() {
         return this._updateRate;
     }
     //分帧渲染（每帧渲染的Item数量（<=0时关闭分帧渲染））
     @property({
         type: CCInteger,
         range: [0, 12, 1],
         tooltip: DEV && '逐帧渲染时，每帧渲染的Item数量（<=0时关闭分帧渲染）',
         slide: true,
     })

     
    public frameByFrameRenderNum: number = 0;
    private renderEvent: Function = null;
    private dragBottomCallback :  Function = null;
    private dragTopCallback :  Function = null;
    private touchUpCallback : Function = null;
    private touchMoveCallback : Function = null;
    private scrollingCallback : Function = null;

    private _forceUpdate: boolean = false;
    private _align: number;
    private _horizontalDir: number;
    private _verticalDir: number;
    private _startAxis: number;
    private _alignCalcType: number;
    public content: Node;
    private _contentUt: UITransform;
    private firstListId: number;
    public displayItemNum: number;
    private _updateDone: boolean = true;
    private _updateCounter: number;
    public _actualNumItems: number;
     //列表数量
     @property({
         serializable: false
     })
     private _numItems: number = 0;
     set numItems(val: number) {
         if (!this.checkInited(false))
             return;
         if (val == null || val < 0) {
             console.error('numItems set the wrong::', val);
             return;
         }
         this._actualNumItems = this._numItems = val;
         this._forceUpdate = true;

         if (this._virtual) {
             this._resizeContent();

             this._onScrolling();

         } 
         else 
         {

             let layout: Layout = this.content.getComponent(Layout);
             if (layout) {
                 layout.enabled = true;
             }
             this._delRedundantItem();
 
             this.firstListId = 0;
             if (this.frameByFrameRenderNum > 0) {
                 //先渲染几个出来
                 let len: number = this.frameByFrameRenderNum > this._numItems ? this._numItems : this.frameByFrameRenderNum;
                 for (let n: number = 0; n < len; n++) {
                     this._createOrUpdateItem2(n);
                 }
                 if (this.frameByFrameRenderNum < this._numItems) {
                     this._updateCounter = this.frameByFrameRenderNum;
                     this._updateDone = false;
                 }
             } else {
                 for (let n: number = 0; n < this._numItems; n++) {
                     this._createOrUpdateItem2(n);
                 }
                 this.displayItemNum = this._numItems;
             }
         }
     }
     get numItems() {
         return this._actualNumItems;
     }
 
     private _inited: boolean = false;
     private _scrollView: ScrollView;
     get scrollView() {
         return this._scrollView;
     }
     private _layout: Layout;
     private _resizeMode: number;
     private _topGap: number;
     private _rightGap: number;
     private _bottomGap: number;
     private _leftGap: number;
 
     private _columnGap: number;
     private _lineGap: number;
     private _colLineNum: number;
 
     private _lastDisplayData: number[];
     public displayData: any[];
     private _pool: NodePool;
 
     private _itemTmp: any;
     private _itemTmpUt: UITransform;
     private _needUpdateWidget: boolean = false;
     private _itemSize: Size;
     private _sizeType: boolean;
 
     public _customSize: any;
 
     private frameCount: number;
     private viewTop: number;
     private viewRight: number;
     private viewBottom: number;
     private viewLeft: number;
 
     private _doneAfterUpdate: boolean = false;
 
     private elasticTop: number;
     private elasticRight: number;
     private elasticBottom: number;
     private elasticLeft: number;
 
     private scrollToListId: number;
 
     private adhering: boolean = false;
 
     private _adheringBarrier: boolean = false;
     private nearestListId: number;
 
     private _beganPos: number;
     private _scrollPos: number;
     private _curScrollIsTouch: boolean;//当前滑动是否为手动
 
     private _scrollToListId: number;
     private _scrollToEndTime: number;
     private _scrollToSo: any;
 
     private _allItemSize: number;
     private _allItemSizeNoEdge: number;
 
     private _scrollItem: any;//当前控制 ScrollView 滚动的 Item
 
     private _thisNodeUt: UITransform;
 
     //----------------------------------------------------------------------------
 
     onLoad() {
         this._init();
     }
 
     onDestroy() {

         if (isValid(this._itemTmp))
             this._itemTmp.destroy();
         if (isValid(this.tmpNode))
             this.tmpNode.destroy();
         this._pool && this._pool.clear();


        this.renderEvent = null;
        this.dragBottomCallback = null;
        this.dragTopCallback = null;
        this.touchUpCallback  = null;
        this.touchMoveCallback = null;
        this.scrollingCallback = null;
     }
 
     onEnable() {
         // if (!EDITOR) 
         this._registerEvent();
         this._init();
     }
 
     onDisable() {
         // if (!EDITOR) 
         this._unregisterEvent();
     }
     //注册事件
     _registerEvent() {
         this.node.on(Node.EventType.TOUCH_START, this._onTouchStart, this);
         this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
         this.node.on(ScrollView.EventType.TOUCH_UP, this._onTouchUp, this);
         this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this);
         this.node.on(ScrollView.EventType.SCROLL_BEGAN, this._onScrollBegan, this);
         this.node.on(ScrollView.EventType.SCROLL_ENDED, this._onScrollEnded, this);
         this.node.on(ScrollView.EventType.SCROLLING, this._onScrolling, this);
         this.node.on(Node.EventType.SIZE_CHANGED, this._onSizeChanged, this);
         this.node.getComponent(ScrollView).node.on(ScrollView.EventType.BOUNCE_BOTTOM, this.OnDragBottom, this);
         this.node.getComponent(ScrollView).node.on(ScrollView.EventType.BOUNCE_TOP, this.OnDragTop, this);
     }
     //卸载事件
     _unregisterEvent() {
         this.node.off(Node.EventType.TOUCH_START, this._onTouchStart, this);
         this.node.off(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
         this.node.off(ScrollView.EventType.TOUCH_UP, this._onTouchUp, this);
         this.node.off(Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this);
         this.node.off(ScrollView.EventType.SCROLL_BEGAN, this._onScrollBegan, this);
         this.node.off(ScrollView.EventType.SCROLL_ENDED, this._onScrollEnded, this);
         this.node.off(ScrollView.EventType.SCROLLING, this._onScrolling, this);
         this.node.off(Node.EventType.SIZE_CHANGED, this._onSizeChanged, this);
         this.node.getComponent(ScrollView).node.off(ScrollView.EventType.BOUNCE_BOTTOM, this.OnDragBottom, this);
         this.node.getComponent(ScrollView).node.off(ScrollView.EventType.BOUNCE_TOP, this.OnDragTop, this);
     }
     //初始化各种..
     _init() {
         if (this._inited)
             return;
 
         this._thisNodeUt = this.node.getComponent(UITransform);
         this._scrollView = this.node.getComponent(ScrollView);
 
         this.content = this._scrollView.content;
         this._contentUt = this.content.getComponent(UITransform);
         if (!this.content) {
             console.error(this.node.name + "'s ScrollView unset content!");
             return;
         }
 
         this._layout = this.content.getComponent(Layout);
 
         this._align = this._layout.type; //排列模式
         this._resizeMode = this._layout.resizeMode; //自适应模式
         this._startAxis = this._layout.startAxis;
 
         this._topGap = this._layout.paddingTop; //顶边距
         this._rightGap = this._layout.paddingRight; //右边距
         this._bottomGap = this._layout.paddingBottom; //底边距
         this._leftGap = this._layout.paddingLeft; //左边距
 
         this._columnGap = this._layout.spacingX; //列距
         this._lineGap = this._layout.spacingY; //行距
 
         this._colLineNum; //列数或行数（非GRID模式则=1，表示单列或单行）;
 
         this._verticalDir = this._layout.verticalDirection; //垂直排列子节点的方向
         this._horizontalDir = this._layout.horizontalDirection; //水平排列子节点的方向
 
         let targetItem = this.templateType == TemplateType.PREFAB ? this.tmpPrefab : this.tmpNode;
         this.setTemplateItem(instantiate(targetItem));
         if(this.tmpNode != null)
         {
            this.tmpNode.active = false;
         }

 
         this._lastDisplayData = []; //最后一次刷新的数据
         this.displayData = []; //当前数据
         this._pool = new NodePool();    //这是个池子..
         this._forceUpdate = false;         //是否强制更新
         this._updateCounter = 0;           //当前分帧渲染帧数
         this._updateDone = true;           //分帧渲染是否完成
 
         switch (this._align) {
             case Layout.Type.HORIZONTAL: {
                 switch (this._horizontalDir) {
                     case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                         this._alignCalcType = 1;
                         break;
                     case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                         this._alignCalcType = 2;
                         break;
                 }
                 break;
             }
             case Layout.Type.VERTICAL: {
                 switch (this._verticalDir) {
                     case Layout.VerticalDirection.TOP_TO_BOTTOM:
                         this._alignCalcType = 3;
                         break;
                     case Layout.VerticalDirection.BOTTOM_TO_TOP:
                         this._alignCalcType = 4;
                         break;
                 }
                 break;
             }
             case Layout.Type.GRID: {
                 switch (this._startAxis) {
                     case Layout.AxisDirection.HORIZONTAL:
                         switch (this._verticalDir) {
                             case Layout.VerticalDirection.TOP_TO_BOTTOM:
                                 this._alignCalcType = 3;
                                 break;
                             case Layout.VerticalDirection.BOTTOM_TO_TOP:
                                 this._alignCalcType = 4;
                                 break;
                         }
                         break;
                     case Layout.AxisDirection.VERTICAL:
                         switch (this._horizontalDir) {
                             case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                 this._alignCalcType = 1;
                                 break;
                             case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                 this._alignCalcType = 2;
                                 break;
                         }
                         break;
                 }
                 break;
             }
         }
         // 清空 content
         // this.content.children.forEach((child: Node) => {
         //     child.removeFromParent();
         //     if (child != this.tmpNode && child.isValid)
         //         child.destroy();
         // });
         this.content.removeAllChildren();
         this._inited = true;
     }
     /**
      * 为了实现循环列表，必须覆写cc.ScrollView的某些函数
      * @param {Number} dt
      */
     _processAutoScrolling(dt: number) {
 
         // ------------- scroll-view 里定义的一些常量 -------------
         const OUT_OF_BOUNDARY_BREAKING_FACTOR = 0.05;
         const EPSILON = 1e-4;
         const ZERO = new Vec3();
         const quintEaseOut = (time: number) => {
             time -= 1;
             return (time * time * time * time * time + 1);
         };
         // ------------- scroll-view 里定义的一些常量 -------------
 
         let sv: ScrollView = this._scrollView;
 
         const isAutoScrollBrake = sv['_isNecessaryAutoScrollBrake']();
         const brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1;
         sv['_autoScrollAccumulatedTime'] += dt * (1 / brakingFactor);
 
         let percentage = Math.min(1, sv['_autoScrollAccumulatedTime'] / sv['_autoScrollTotalTime']);
         if (sv['_autoScrollAttenuate']) {
             percentage = quintEaseOut(percentage);
         }
 
         const clonedAutoScrollTargetDelta = sv['_autoScrollTargetDelta'].clone();
         clonedAutoScrollTargetDelta.multiplyScalar(percentage);
         const clonedAutoScrollStartPosition = sv['_autoScrollStartPosition'].clone();
         clonedAutoScrollStartPosition.add(clonedAutoScrollTargetDelta);
         let reachedEnd = Math.abs(percentage - 1) <= EPSILON;
 
         const fireEvent = Math.abs(percentage - 1) <= sv['getScrollEndedEventTiming']();
         if (fireEvent && !sv['_isScrollEndedWithThresholdEventFired']) {
             sv['_dispatchEvent'](ScrollView.EventType.SCROLL_ENG_WITH_THRESHOLD);
             sv['_isScrollEndedWithThresholdEventFired'] = true;
         }
 
         if (sv['elastic']) {
             const brakeOffsetPosition = clonedAutoScrollStartPosition.clone();
             brakeOffsetPosition.subtract(sv['_autoScrollBrakingStartPosition']);
             if (isAutoScrollBrake) {
                 brakeOffsetPosition.multiplyScalar(brakingFactor);
             }
             clonedAutoScrollStartPosition.set(sv['_autoScrollBrakingStartPosition']);
             clonedAutoScrollStartPosition.add(brakeOffsetPosition);
         } else {
             const moveDelta = clonedAutoScrollStartPosition.clone();
             moveDelta.subtract(sv['_getContentPosition']());
             const outOfBoundary = sv['_getHowMuchOutOfBoundary'](moveDelta);
             if (!outOfBoundary.equals(ZERO, EPSILON)) {
                 clonedAutoScrollStartPosition.add(outOfBoundary);
                 reachedEnd = true;
             }
         }
 
         if (reachedEnd) {
             sv['_autoScrolling'] = false;
         }
 
         const deltaMove = new Vec3(clonedAutoScrollStartPosition);
         deltaMove.subtract(sv['_getContentPosition']());
         sv['_clampDelta'](deltaMove);
         sv['_moveContent'](deltaMove, reachedEnd);
         sv['_dispatchEvent'](ScrollView.EventType.SCROLLING);
 
         if (!sv['_autoScrolling']) {
             sv['_isBouncing'] = false;
             sv['_scrolling'] = false;
             sv['_dispatchEvent'](ScrollView.EventType.SCROLL_ENDED);
         }
     }
     //设置模板Item
     setTemplateItem(item: any) {
         if (!item)
             return;
         this._itemTmp = item;
         this._itemTmpUt = item.getComponent(UITransform);
 
         if (this._resizeMode == Layout.ResizeMode.CHILDREN)
             this._itemSize = this._layout.cellSize;
         else {
             let itemUt: UITransform = item.getComponent(UITransform);
             this._itemSize = new Size(itemUt.width, itemUt.height);
         }
 

         let com: any = item.getComponent(Widget);
         if (com && com.enabled) {
             this._needUpdateWidget = true;
         }
 
         switch (this._align) {
             case Layout.Type.HORIZONTAL:
                 this._colLineNum = 1;
                 this._sizeType = false;
                 break;
             case Layout.Type.VERTICAL:
                 this._colLineNum = 1;
                 this._sizeType = true;
                 break;
             case Layout.Type.GRID:
                 switch (this._startAxis) {
                     case Layout.AxisDirection.HORIZONTAL:
                         //计算列数
                         let trimW: number = this._contentUt.width - this._leftGap - this._rightGap;
                         this._colLineNum = Math.floor((trimW + this._columnGap) / (this._itemSize.width + this._columnGap));
                         this._sizeType = true;
                         break;
                     case Layout.AxisDirection.VERTICAL:
                         //计算行数
                         let trimH: number = this._contentUt.height - this._topGap - this._bottomGap;
                         this._colLineNum = Math.floor((trimH + this._lineGap) / (this._itemSize.height + this._lineGap));
                         this._sizeType = false;
                         break;
                 }
                 break;
         }
     }
     /**
      * 检查是否初始化
      * @param {Boolean} printLog 是否打印错误信息
      * @returns
      */
     checkInited(printLog: boolean = true) {
         if (!this._inited) {
             if (printLog)
                 console.error('List initialization not completed!');
             return false;
         }
         return true;
     }
     //禁用 Layout 组件，自行计算 Content Size
     _resizeContent() {
         let result: number;
 
         switch (this._align) {
             case Layout.Type.HORIZONTAL: {
                 if (this._customSize) {
                     let fixed: any = this._getFixedSize(null);
                     result = this._leftGap + fixed.val + (this._itemSize.width * (this._numItems - fixed.count)) + (this._columnGap * (this._numItems - 1)) + this._rightGap;
                 } else {
                     result = this._leftGap + (this._itemSize.width * this._numItems) + (this._columnGap * (this._numItems - 1)) + this._rightGap;
                 }
                 break;
             }
             case Layout.Type.VERTICAL: {
                 if (this._customSize) {
                     let fixed: any = this._getFixedSize(null);
                     result = this._topGap + fixed.val + (this._itemSize.height * (this._numItems - fixed.count)) + (this._lineGap * (this._numItems - 1)) + this._bottomGap;
                 } else {
                     result = this._topGap + (this._itemSize.height * this._numItems) + (this._lineGap * (this._numItems - 1)) + this._bottomGap;
                 }
                 break;
             }
             case Layout.Type.GRID: {
                 switch (this._startAxis) {
                     case Layout.AxisDirection.HORIZONTAL:
                         let lineNum: number = Math.ceil(this._numItems / this._colLineNum);
                         result = this._topGap + (this._itemSize.height * lineNum) + (this._lineGap * (lineNum - 1)) + this._bottomGap;
                         break;
                     case Layout.AxisDirection.VERTICAL:
                         let colNum: number = Math.ceil(this._numItems / this._colLineNum);
                         result = this._leftGap + (this._itemSize.width * colNum) + (this._columnGap * (colNum - 1)) + this._rightGap;
                         break;
                 }
                 break;
             }
         }
 
        let layout: Layout = this.content.getComponent(Layout);
        if (layout)
        {
            layout.enabled = false;
        }

        this._allItemSize = result;
        this._allItemSizeNoEdge = this._allItemSize - (this._sizeType ? (this._topGap + this._bottomGap) : (this._leftGap + this._rightGap));

        //  let tempCyclic = false;    
        //  let lackCenter = false;
        //  let tempLack = !tempCyclic && this._allItemSize < (this._sizeType ? this._thisNodeUt.height : this._thisNodeUt.width);
        //  let slideOffset: number = ((!tempLack || !lackCenter) && this.lackSlide) ? 0 : .1;
        this.lackSlide = false;

        if(this._allItemSize <= this._thisNodeUt.height || this._numItems == 0)
        {
            this.lackSlide = true;
        }

        let slideOffset: number =  this.lackSlide ? 0 : 0.1;
        let targetWH: number = this.lackSlide ? ((this._sizeType ? this._thisNodeUt.height : this._thisNodeUt.width) - slideOffset) : (this._allItemSize);
        if (targetWH < 0)
        {
            targetWH = 0;
        }
        
        if (this._sizeType) 
        {
            this._contentUt.height = targetWH;
        } 
        else 
        {
            this._contentUt.width = targetWH;
        }

     }
 
     //滚动进行时...
     _onScrolling(ev: Event = null) 
     {
         if (this.frameCount == null)
             this.frameCount = this._updateRate;
         if (!this._forceUpdate && (ev && ev.type != 'scroll-ended') && this.frameCount > 0) {
             this.frameCount--;
             return;
         } else
             this.frameCount = this._updateRate;
 
        
         this._calcViewPos();
 
         let vTop: number, vRight: number, vBottom: number, vLeft: number;
         if (this._sizeType) 
         {
             vTop = this.viewTop;
             vBottom = this.viewBottom;
         } 
         else 
         {
             vRight = this.viewRight;
             vLeft = this.viewLeft;
         }
 
         if (this._virtual) 
         {
             this.displayData = [];
             let itemPos: any;
 
             let curId: number = 0;
             let endId: number = this._numItems - 1;
 
             if (this._customSize) {
                 let breakFor: boolean = false;
                 //如果该item的位置在可视区域内，就推入displayData
                 for (; curId <= endId && !breakFor; curId++) {
                     itemPos = this._calcItemPos(curId);
                     switch (this._align) {
                         case Layout.Type.HORIZONTAL:
                             if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                 this.displayData.push(itemPos);
                             } else if (curId != 0 && this.displayData.length > 0) {
                                 breakFor = true;
                             }
                             break;
                         case Layout.Type.VERTICAL:
                             if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                 this.displayData.push(itemPos);
                             } else if (curId != 0 && this.displayData.length > 0) {
                                 breakFor = true;
                             }
                             break;
                         case Layout.Type.GRID:
                             switch (this._startAxis) {
                                 case Layout.AxisDirection.HORIZONTAL:
                                     if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                         this.displayData.push(itemPos);
                                     } else if (curId != 0 && this.displayData.length > 0) {
                                         breakFor = true;
                                     }
                                     break;
                                 case Layout.AxisDirection.VERTICAL:
                                     if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                         this.displayData.push(itemPos);
                                     } else if (curId != 0 && this.displayData.length > 0) {
                                         breakFor = true;
                                     }
                                     break;
                             }
                             break;
                     }
                 }
             } else {
                 let ww: number = this._itemSize.width + this._columnGap;
                 let hh: number = this._itemSize.height + this._lineGap;
                 switch (this._alignCalcType) {
                     case 1://单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                         curId = (vLeft - this._leftGap) / ww;
                         endId = (vRight - this._leftGap) / ww;
                         break;
                     case 2://单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                         curId = (-vRight - this._rightGap) / ww;
                         endId = (-vLeft - this._rightGap) / ww;
                         break;
                     case 3://单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                         curId = (-vTop - this._topGap) / hh;
                         endId = (-vBottom - this._topGap) / hh;
                         break;
                     case 4://单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                         curId = (vBottom - this._bottomGap) / hh;
                         endId = (vTop - this._bottomGap) / hh;
                         break;
                 }
                 curId = Math.floor(curId) * this._colLineNum;
                 endId = Math.ceil(endId) * this._colLineNum;
                 endId--;
                 if (curId < 0)
                     curId = 0;
                 if (endId >= this._numItems)
                     endId = this._numItems - 1;
                 for (; curId <= endId; curId++) {
                     this.displayData.push(this._calcItemPos(curId));
                 }
             }
             this._delRedundantItem();
             if (this.displayData.length <= 0 || !this._numItems) { //if none, delete all.
                 this._lastDisplayData = [];
                 return;
             }
             this.firstListId = this.displayData[0].id;
             this.displayItemNum = this.displayData.length;
 
             let len: number = this._lastDisplayData.length;
 
             let haveDataChange: boolean = this.displayItemNum != len;
             if (haveDataChange) {
                 // 如果是逐帧渲染，需要排序
                 if (this.frameByFrameRenderNum > 0) {
                     this._lastDisplayData.sort((a, b) => { return a - b });
                 }
                 // 因List的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。
                 haveDataChange = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
             }
 
             if (this._forceUpdate || haveDataChange) {    //如果是强制更新
                 if (this.frameByFrameRenderNum > 0) {
                     // if (this._updateDone) {
                     // this._lastDisplayData = [];
                     //逐帧渲染
                     if (this._numItems > 0) {
                         if (!this._updateDone) {
                             this._doneAfterUpdate = true;
                         } else {
                             this._updateCounter = 0;
                         }
                         this._updateDone = false;
                     } else {
                         this._updateCounter = 0;
                         this._updateDone = true;
                     }
                     // }
                 } else {
                     //直接渲染
                     this._lastDisplayData = [];
                     // cc.log('List Display Data II::', this.displayData);
                     for (let c = 0; c < this.displayItemNum; c++) {
                         this._createOrUpdateItem(this.displayData[c]);
                     }
                     this._forceUpdate = false;
                 }
             }
             this._calcNearestItem();
         }

         this.OnScrolling();
     }
     //计算可视范围
     _calcViewPos() {
         let scrollPos: any = this.content.getPosition();
         switch (this._alignCalcType) {
             case 1://单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                 this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
                 this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
 
                 this.viewRight = this.viewLeft + this._thisNodeUt.width;
                 this.elasticRight = this.viewRight > this._contentUt.width ? Math.abs(this.viewRight - this._contentUt.width) : 0;
                 this.viewRight += this.elasticRight;
                 // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                 break;
             case 2://单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                 this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
                 this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
                 this.viewLeft = this.viewRight - this._thisNodeUt.width;
                 this.elasticLeft = this.viewLeft < -this._contentUt.width ? Math.abs(this.viewLeft + this._contentUt.width) : 0;
                 this.viewLeft -= this.elasticLeft;
                 // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                 break;
             case 3://单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                 this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
                 this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
                 this.viewBottom = this.viewTop - this._thisNodeUt.height;
                 this.elasticBottom = this.viewBottom < -this._contentUt.height ? Math.abs(this.viewBottom + this._contentUt.height) : 0;
                 this.viewBottom += this.elasticBottom;
                 // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                 break;
             case 4://单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                 this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
                 this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
                 this.viewTop = this.viewBottom + this._thisNodeUt.height;
                 this.elasticTop = this.viewTop > this._contentUt.height ? Math.abs(this.viewTop - this._contentUt.height) : 0;
                 this.viewTop -= this.elasticTop;
                 // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                 break;
         }
     }
     //计算位置 根据id
     _calcItemPos(id: number) {
         let width: number, height: number, top: number, bottom: number, left: number, right: number, itemX: number, itemY: number;
         switch (this._align) {
             case Layout.Type.HORIZONTAL:
                 switch (this._horizontalDir) {
                     case Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                         if (this._customSize) {
                             let fixed: any = this._getFixedSize(id);
                             left = this._leftGap + ((this._itemSize.width + this._columnGap) * (id - fixed.count)) + (fixed.val + (this._columnGap * fixed.count));
                             let cs: number = this._customSize[id];
                             width = (cs > 0 ? cs : this._itemSize.width);
                         } else {
                             left = this._leftGap + ((this._itemSize.width + this._columnGap) * id);
                             width = this._itemSize.width;
                         }

                         right = left + width;
                         return {
                             id: id,
                             left: left,
                             right: right,
                             x: left + (this._itemTmpUt.anchorX * width),
                             y: this._itemTmp.y,
                         };
                     }
                     case Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                         if (this._customSize) {
                             let fixed: any = this._getFixedSize(id);
                             right = -this._rightGap - ((this._itemSize.width + this._columnGap) * (id - fixed.count)) - (fixed.val + (this._columnGap * fixed.count));
                             let cs: number = this._customSize[id];
                             width = (cs > 0 ? cs : this._itemSize.width);
                         } else {
                             right = -this._rightGap - ((this._itemSize.width + this._columnGap) * id);
                             width = this._itemSize.width;
                         }

                         left = right - width;
                         return {
                             id: id,
                             right: right,
                             left: left,
                             x: left + (this._itemTmpUt.anchorX * width),
                             y: this._itemTmp.y,
                         };
                     }
                 }
                 break;
             case Layout.Type.VERTICAL: {
                 switch (this._verticalDir) {
                     case Layout.VerticalDirection.TOP_TO_BOTTOM: {
                         if (this._customSize) {
                             let fixed: any = this._getFixedSize(id);
                             top = -this._topGap - ((this._itemSize.height + this._lineGap) * (id - fixed.count)) - (fixed.val + (this._lineGap * fixed.count));
                             let cs: number = this._customSize[id];
                             height = (cs > 0 ? cs : this._itemSize.height);
                         } else {
                             top = -this._topGap - ((this._itemSize.height + this._lineGap) * id);
                             height = this._itemSize.height;
                         }

                         bottom = top - height;
                         return {
                             id: id,
                             top: top,
                             bottom: bottom,
                             x: this._itemTmp.x,
                             y: bottom + (this._itemTmpUt.anchorY * height),
                         };
                     }
                     case Layout.VerticalDirection.BOTTOM_TO_TOP: {
                         if (this._customSize) {
                             let fixed: any = this._getFixedSize(id);
                             bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * (id - fixed.count)) + (fixed.val + (this._lineGap * fixed.count));
                             let cs: number = this._customSize[id];
                             height = (cs > 0 ? cs : this._itemSize.height);
                         } else {
                             bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * id);
                             height = this._itemSize.height;
                         }

                         top = bottom + height;
                         return {
                             id: id,
                             top: top,
                             bottom: bottom,
                             x: this._itemTmp.x,
                             y: bottom + (this._itemTmpUt.anchorY * height),
                         };
                         break;
                     }
                 }
             }
             case Layout.Type.GRID: {
                 let colLine: number = Math.floor(id / this._colLineNum);
                 switch (this._startAxis) {
                     case Layout.AxisDirection.HORIZONTAL: {
                         switch (this._verticalDir) {
                             case Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                 top = -this._topGap - ((this._itemSize.height + this._lineGap) * colLine);
                                 bottom = top - this._itemSize.height;
                                 itemY = bottom + (this._itemTmpUt.anchorY * this._itemSize.height);
                                 break;
                             }
                             case Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                 bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * colLine);
                                 top = bottom + this._itemSize.height;
                                 itemY = bottom + (this._itemTmpUt.anchorY * this._itemSize.height);
                                 break;
                             }
                         }
                         itemX = this._leftGap + ((id % this._colLineNum) * (this._itemSize.width + this._columnGap));
                         switch (this._horizontalDir) {
                             case Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                 itemX += (this._itemTmpUt.anchorX * this._itemSize.width);
                                 itemX -= (this._contentUt.anchorX * this._contentUt.width);
                                 break;
                             }
                             case Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                 itemX += ((1 - this._itemTmpUt.anchorX) * this._itemSize.width);
                                 itemX -= ((1 - this._contentUt.anchorX) * this._contentUt.width);
                                 itemX *= -1;
                                 break;
                             }
                         }
                         return {
                             id: id,
                             top: top,
                             bottom: bottom,
                             x: itemX,
                             y: itemY,
                         };
                     }
                     case Layout.AxisDirection.VERTICAL: {
                         switch (this._horizontalDir) {
                             case Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                 left = this._leftGap + ((this._itemSize.width + this._columnGap) * colLine);
                                 right = left + this._itemSize.width;
                                 itemX = left + (this._itemTmpUt.anchorX * this._itemSize.width);
                                 itemX -= (this._contentUt.anchorX * this._contentUt.width);
                                 break;
                             }
                             case Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                 right = -this._rightGap - ((this._itemSize.width + this._columnGap) * colLine);
                                 left = right - this._itemSize.width;
                                 itemX = left + (this._itemTmpUt.anchorX * this._itemSize.width);
                                 itemX += ((1 - this._contentUt.anchorX) * this._contentUt.width);
                                 break;
                             }
                         }
                         itemY = -this._topGap - ((id % this._colLineNum) * (this._itemSize.height + this._lineGap));
                         switch (this._verticalDir) {
                             case Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                 itemY -= ((1 - this._itemTmpUt.anchorY) * this._itemSize.height);
                                 itemY += ((1 - this._contentUt.anchorY) * this._contentUt.height);
                                 break;
                             }
                             case Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                 itemY -= ((this._itemTmpUt.anchorY) * this._itemSize.height);
                                 itemY += (this._contentUt.anchorY * this._contentUt.height);
                                 itemY *= -1;
                                 break;
                             }
                         }
                         return {
                             id: id,
                             left: left,
                             right: right,
                             x: itemX,
                             y: itemY,
                         };
                     }
                 }
                 break;
             }
         }
     }
     //计算已存在的Item的位置
     _calcExistItemPos(id: number) {
         let item: any = this.getItemByListId(id);
         if (!item)
             return null;
         let ut: UITransform = item.getComponent(UITransform);
         let pos: Vec3 = item.getPosition();
         let data: any = {
             id: id,
             x: pos.x,
             y: pos.y,
         }
         if (this._sizeType) {
             data.top = pos.y + (ut.height * (1 - ut.anchorY));
             data.bottom = pos.y - (ut.height * ut.anchorY);
         } else {
             data.left = pos.x - (ut.width * ut.anchorX);
             data.right = pos.x + (ut.width * (1 - ut.anchorX));
         }
         return data;
     }
     //获取Item位置
     getItemPos(id: number) {
         if (this._virtual)
             return this._calcItemPos(id);
         else {
             if (this.frameByFrameRenderNum)
                 return this._calcItemPos(id);
             else
                 return this._calcExistItemPos(id);
         }
     }
     //获取固定尺寸
     _getFixedSize(listId: number) {
         if (!this._customSize)
             return null;
         if (listId == null)
             listId = this._numItems;
         let fixed: number = 0;
         let count: number = 0;
         for (let id in this._customSize) {
             if (parseInt(id) < listId) {
                 fixed += this._customSize[id];
                 count++;
             }
         }
         return {
             val: fixed,
             count: count,
         }
     }
     //滚动结束时..
     _onScrollBegan() {
         this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
     }
     //滚动结束时..
     _onScrollEnded() {
         this._curScrollIsTouch = false;
         if (this.scrollToListId != null) {
             let item: any = this.getItemByListId(this.scrollToListId);
             this.scrollToListId = null;
             if (item) {
                 tween(item)
                     .to(.1, { scale: 1.06 })
                     .to(.1, { scale: 1 })
                     .start();
             }
         }
         this._onScrolling();

     }
     // 触摸时
     _onTouchStart(ev, captureListeners) {
         if (this._scrollView['_hasNestedViewGroup'](ev, captureListeners))
             return;
         this._curScrollIsTouch = true;
         let isMe = ev.eventPhase === Event.AT_TARGET && ev.target === this.node;
         if (!isMe) {
             let itemNode: any = ev.target;
             while (itemNode._listId == null && itemNode.parent)
                 itemNode = itemNode.parent;
             this._scrollItem = itemNode._listId != null ? itemNode : ev.target;
         }
     }

     _onTouchMove(ev, captureListeners){

        this.OnTouchMove()
     }

     //触摸抬起时..
     _onTouchUp() {
         this._scrollPos = null;
         this._scrollItem = null;
         this.OnTouchUp();
     }
 
     _onTouchCancelled(ev, captureListeners) {
         if (this._scrollView['_hasNestedViewGroup'](ev, captureListeners) || ev.simulate)
             return;
 
         this._scrollPos = null;
         this._scrollItem = null;
         this.OnTouchUp();
     }
     //当尺寸改变
     _onSizeChanged() {
         if (this.checkInited(false))
             this._onScrolling();
     }


     update() {
         if (this.frameByFrameRenderNum <= 0 || this._updateDone)
             return;
         // cc.log(this.displayData.length, this._updateCounter, this.displayData[this._updateCounter]);
         if (this._virtual) {
             let len: number = (this._updateCounter + this.frameByFrameRenderNum) > this.displayItemNum ? this.displayItemNum : (this._updateCounter + this.frameByFrameRenderNum);
             for (let n: number = this._updateCounter; n < len; n++) {
                 let data: any = this.displayData[n];
                 if (data) {
                     this._createOrUpdateItem(data);
                 }
             }
 
             if (this._updateCounter >= this.displayItemNum - 1) { //最后一个
                 if (this._doneAfterUpdate) {
                     this._updateCounter = 0;
                     this._updateDone = false;
                     // if (!this._scrollView.isScrolling())
                     this._doneAfterUpdate = false;
                 } else {
                     this._updateDone = true;
                     this._delRedundantItem();
                     this._forceUpdate = false;
                     this._calcNearestItem();
                 }
             } else {
                 this._updateCounter += this.frameByFrameRenderNum;
             }
         } else {
             if (this._updateCounter < this._numItems) {
                 let len: number = (this._updateCounter + this.frameByFrameRenderNum) > this._numItems ? this._numItems : (this._updateCounter + this.frameByFrameRenderNum);
                 for (let n: number = this._updateCounter; n < len; n++) {
                     this._createOrUpdateItem2(n);
                 }
                 this._updateCounter += this.frameByFrameRenderNum;
             } else {
                 this._updateDone = true;
                 this._calcNearestItem();
             }
         }
     }
     /**
      * 创建或更新Item（虚拟列表用）
      * @param {Object} data 数据
      */
     _createOrUpdateItem(data: any) {
         let item: any = this.getItemByListId(data.id);
         if (!item) { //如果不存在
             let canGet: boolean = this._pool.size() > 0;
             if (canGet) {
                 item = this._pool.get();
                 // cc.log('从池中取出::   旧id =', item['_listId'], '，新id =', data.id, item);
             } else {
                 item = instantiate(this._itemTmp);
                 // cc.log('新建::', data.id, item);
             }
             if (!canGet || !isValid(item)) {
                 item = instantiate(this._itemTmp);
                 canGet = false;
             }
             if (item._listId != data.id) {
                 item._listId = data.id;
                 let ut: UITransform = item.getComponent(UITransform);
                 ut.setContentSize(this._itemSize);
             }
             item.setPosition(new Vec3(data.x, data.y, 0));
             this._resetItemSize(item);
             this.content.addChild(item);
             if (canGet && this._needUpdateWidget) {
                 let widget: Widget = item.getComponent(Widget);
                 if (widget)
                     widget.updateAlignment();
             }
             item.setSiblingIndex(this.content.children.length - 1);
             if (this.renderEvent) 
             {
                this.renderEvent(item, data.id % this._actualNumItems)
             }
         } else if (this._forceUpdate && this.renderEvent) { //强制更新
             item.setPosition(new Vec3(data.x, data.y, 0));
             this._resetItemSize(item);
             // cc.log('ADD::', data.id, item);
             if (this.renderEvent) 
             {
                this.renderEvent(item, data.id % this._actualNumItems)
             }
         }
         this._resetItemSize(item);
 
         if (this._lastDisplayData.indexOf(data.id) < 0) {
             this._lastDisplayData.push(data.id);
         }
     }
     //创建或更新Item（非虚拟列表用）
     _createOrUpdateItem2(listId: number) {
         let item: any = this.content.children[listId];
         if (!item) { //如果不存在
             item = instantiate(this._itemTmp);
             item._listId = listId;
             this.content.addChild(item);
             if (this.renderEvent) 
             {
                this.renderEvent(item, listId % this._actualNumItems)
             }
         } else if (this._forceUpdate && this.renderEvent) { //强制更新
             if (this.renderEvent) 
             {
                this.renderEvent(item, listId % this._actualNumItems)
             }
         }
         if (this._lastDisplayData.indexOf(listId) < 0) {
             this._lastDisplayData.push(listId);
         }
     }

     //仅虚拟列表用
     _resetItemSize(item: any) {
         return;
         let size: number;
         let ut: UITransform = item.getComponent(UITransform);
         if (this._customSize && this._customSize[item._listId]) {
             size = this._customSize[item._listId];
         } else {
             if (this._colLineNum > 1)
                 ut.setContentSize(this._itemSize);
             else
                 size = this._sizeType ? this._itemSize.height : this._itemSize.width;
         }
         if (size) {
             if (this._sizeType)
                 ut.height = size;
             else
                 ut.width = size;
         }
     }
    
     /**
      * 更新指定的Item
      * @param {Array} args 单个listId，或者数组
      * @returns
      */
     updateItem(args: any) {
         if (!this.checkInited())
             return;
         if (!Array.isArray(args)) {
             args = [args];
         }
         for (let n: number = 0, len: number = args.length; n < len; n++) {
             let listId: number = args[n];
             let item: any = this.getItemByListId(listId);
             if (item)
             {
                if (this.renderEvent) 
                {
                   this.renderEvent(item, listId % this._actualNumItems)
                }
             }
         }
     }
     /**
      * 更新全部
      */
     updateAll() {
         if (!this.checkInited())
             return;
         this.numItems = this.numItems;
     }
     /**
      * 根据ListID获取Item
      * @param {Number} listId
      * @returns
      */
     getItemByListId(listId: number) {
         if (this.content) {
             for (let n: number = this.content.children.length - 1; n >= 0; n--) {
                 let item: any = this.content.children[n];
                 if (item._listId == listId)
                     return item;
             }
         }
     }
     /**
      * 获取在显示区域外的Item
      * @returns
      */
     _getOutsideItem() {
         let item: any;
         let result: any[] = [];
         for (let n: number = this.content.children.length - 1; n >= 0; n--) {
             item = this.content.children[n];
             if (!this.displayData.find(d => d.id == item._listId)) {
                 result.push(item);
             }
         }
         return result;
     }
     //删除显示区域以外的Item
     _delRedundantItem() {
         if (this._virtual) {
             let arr: any[] = this._getOutsideItem();
             for (let n: number = arr.length - 1; n >= 0; n--) {
                 let item: any = arr[n];
                 if (this._scrollItem && item._listId == this._scrollItem._listId)
                     continue;
                 item.isCached = true;
                 this._pool.put(item);
                 for (let m: number = this._lastDisplayData.length - 1; m >= 0; m--) {
                     if (this._lastDisplayData[m] == item._listId) {
                         this._lastDisplayData.splice(m, 1);
                         break;
                     }
                 }
             }
             // cc.log('存入::', str, '    pool.length =', this._pool.length);
         } else {
             while (this.content.children.length > this._numItems) {
                 this.DelSingleItem(this.content.children[this.content.children.length - 1]);
             }
         }
     }
     //删除单个Item
     DelSingleItem(item: any) {
         // cc.log('DEL::', item['_listId'], item);
         item.removeFromParent();
         if (item.destroy)
             item.destroy();
         item = null;
     }
   
     /**
      * 滚动到..
      * @param {Number} listId 索引（如果<0，则滚到首个Item位置，如果>=_numItems，则滚到最末Item位置）
      * @param {Number} timeInSecond 时间
      * @param {Number} offset 索引目标位置偏移，0-1
      * @param {Boolean} overStress 滚动后是否强调该Item（这只是个实验功能）
      */
     scrollTo(listId: number, timeInSecond: number = .5, offset: number = null, overStress: boolean = false) {
         if (!this.checkInited(false))
             return;
         // t._scrollView.stopAutoScroll();
         if (timeInSecond == null)   //默认0.5
             timeInSecond = .5;
         else if (timeInSecond < 0)
             timeInSecond = 0;
         if (listId < 0)
             listId = 0;
         else if (listId >= this._numItems)
             listId = this._numItems - 1;
         // 以防设置了numItems之后layout的尺寸还未更新
         if (!this._virtual && this._layout && this._layout.enabled)
             this._layout.updateLayout();
 
         let pos = this.getItemPos(listId);
         if (!pos) {
             return DEV && console.error('pos is null', listId);
         }
         let targetX: number, targetY: number;
 
         switch (this._alignCalcType) {
             case 1://单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                 targetX = pos.left;
                 if (offset != null)
                     targetX -= this._thisNodeUt.width * offset;
                 else
                     targetX -= this._leftGap;
                 pos = new Vec3(targetX, 0, 0);
                 break;
             case 2://单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                 targetX = pos.right - this._thisNodeUt.width;
                 if (offset != null)
                     targetX += this._thisNodeUt.width * offset;
                 else
                     targetX += this._rightGap;
                 pos = new Vec3(targetX + this._contentUt.width, 0, 0);
                 break;
             case 3://单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                 targetY = pos.top;
                 if (offset != null)
                     targetY += this._thisNodeUt.height * offset;
                 else
                     targetY += this._topGap;
                 pos = new Vec3(0, -targetY, 0);
                 break;
             case 4://单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                 targetY = pos.bottom + this._thisNodeUt.height;
                 if (offset != null)
                     targetY -= this._thisNodeUt.height * offset;
                 else
                     targetY -= this._bottomGap;
                 pos = new Vec3(0, -targetY + this._contentUt.height, 0);
                 break;
         }
         let viewPos: any = this.content.getPosition();
         viewPos = Math.abs(this._sizeType ? viewPos.y : viewPos.x);
 
         let comparePos = this._sizeType ? pos.y : pos.x;
         let runScroll = Math.abs((this._scrollPos != null ? this._scrollPos : viewPos) - comparePos) > .5;
         // cc.log(runScroll, this._scrollPos, viewPos, comparePos)
 
         // this._scrollView.stopAutoScroll();
         if (runScroll) {
             this._scrollView.scrollToOffset(pos, timeInSecond);
             this._scrollToListId = listId;
             this._scrollToEndTime = ((new Date()).getTime() / 1000) + timeInSecond;
             // cc.log(listId, this.content.width, this.content.getPosition(), pos);
             this._scrollToSo = this.scheduleOnce(() => {
                 if (!this._adheringBarrier) {
                     this.adhering = this._adheringBarrier = false;
                 }
                 this._scrollPos =
                     this._scrollToListId =
                     this._scrollToEndTime =
                     this._scrollToSo =
                     null;
                 //cc.log('2222222222', this._adheringBarrier)
                 if (overStress) {
                     // this.scrollToListId = listId;
                     let item = this.getItemByListId(listId);
                     if (item) {
                         tween(item)
                             .to(.1, { scale: 1.05 })
                             .to(.1, { scale: 1 })
                             .start();
                     }
                 }
             }, timeInSecond + .1);
 
             if (timeInSecond <= 0) {
                 this._onScrolling();
             }
         }
     }
     /**
      * 计算当前滚动窗最近的Item
      */
     _calcNearestItem() {
         this.nearestListId = null;
         let data: any, center: number;
 
         if (this._virtual)
             this._calcViewPos();
 
         let vTop: number, vRight: number, vBottom: number, vLeft: number;
         vTop = this.viewTop;
         vRight = this.viewRight;
         vBottom = this.viewBottom;
         vLeft = this.viewLeft;
 
         let breakFor: boolean = false;
         for (let n = 0; n < this.content.children.length && !breakFor; n += this._colLineNum) {
             data = this._virtual ? this.displayData[n] : this._calcExistItemPos(n);
             if (data) {
                 center = this._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
                 switch (this._alignCalcType) {
                     case 1://单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                         if (data.right >= vLeft) {
                             this.nearestListId = data.id;
                             if (vLeft > center)
                                 this.nearestListId += this._colLineNum;
                             breakFor = true;
                         }
                         break;
                     case 2://单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                         if (data.left <= vRight) {
                             this.nearestListId = data.id;
                             if (vRight < center)
                                 this.nearestListId += this._colLineNum;
                             breakFor = true;
                         }
                         break;
                     case 3://单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                         if (data.bottom <= vTop) {
                             this.nearestListId = data.id;
                             if (vTop < center)
                                 this.nearestListId += this._colLineNum;
                             breakFor = true;
                         }
                         break;
                     case 4://单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                         if (data.top >= vBottom) {
                             this.nearestListId = data.id;
                             if (vBottom > center)
                                 this.nearestListId += this._colLineNum;
                             breakFor = true;
                         }
                         break;
                 }
             }
         }
         //判断最后一个Item。。。（哎，这些判断真心恶心，判断了前面的还要判断最后一个。。。一开始呢，就只有一个布局（单列布局），那时候代码才三百行，后来就想着完善啊，艹..这坑真深，现在这行数都一千五了= =||）
         data = this._virtual ? this.displayData[this.displayItemNum - 1] : this._calcExistItemPos(this._numItems - 1);
         if (data && data.id == this._numItems - 1) {
             center = this._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
             switch (this._alignCalcType) {
                 case 1://单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                     if (vRight > center)
                         this.nearestListId = data.id;
                     break;
                 case 2://单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                     if (vLeft < center)
                         this.nearestListId = data.id;
                     break;
                 case 3://单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                     if (vBottom < center)
                         this.nearestListId = data.id;
                     break;
                 case 4://单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                     if (vTop > center)
                         this.nearestListId = data.id;
                     break;
             }
         }
         // cc.log('this.nearestListId =', this.nearestListId);
     }

     public SetRenderCallback(_renderCallback : Function)
     {
        this.renderEvent = _renderCallback;
     }

     public SetDragBottom(_dragBottomCallback : Function)
     {
        this.dragBottomCallback = _dragBottomCallback;
     }

     public SetDragTop(_dragTopCallback : Function)
     {
        this.dragTopCallback = _dragTopCallback;
     }

     public SetTouchUp(_touchUpCallback : Function)
     {
        this.touchUpCallback = _touchUpCallback;
     }

     public SetTouchMove(_touchMoveCallback : Function)
     {
        this.touchMoveCallback = _touchMoveCallback
     }
     
     public SetOnScrolling(_scrollingCallback : Function)
     {
        this.scrollingCallback = _scrollingCallback
     }

     private OnDragBottom()
     {
        if(this.dragBottomCallback)
        {
            this.dragBottomCallback();
        }
     }

     private OnDragTop()
     {
        if(this.dragTopCallback)
        {
            this.dragTopCallback();
        }
     }

     private OnTouchUp()
     {
        if(this.touchUpCallback)
        {
            this.touchUpCallback();
        }
     }

     private OnTouchMove()
     {
        if(this.touchMoveCallback)
        {
            this.touchMoveCallback();
        }
     }

     private OnScrolling()
     {
        if(this.scrollingCallback)
        {
            this.scrollingCallback();
        }
     }
 }