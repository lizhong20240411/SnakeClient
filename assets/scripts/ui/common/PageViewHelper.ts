import { _decorator, Component, isValid, math, Node, PageView, ScrollView, UITransform, Vec2 } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import ListView from './ListView';
const { ccclass, property } = _decorator;

@ccclass('PageViewHelper')
export class PageViewHelper extends BaseUI 
{
    mPageView  : PageView;
    mTouchStartPosition : Vec2;
    mTouchMovePosition : Vec2;
    mTouchEndPosition : Vec2;
    mOffset : number = 10;

    mTouchMovePosList : Array<Vec2>;
    mMoveDirection : MoveDirection = MoveDirection.None;

    mScrollViews : Array<ScrollView>;
    InitParam()
    {

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
        this.mScrollViews = null;
    }

    public SetPageView(_pageView : PageView)
    {
        this.mPageView = _pageView;
        this.mScrollViews = new Array<ScrollView>()
    }

    public SetScrollViewEvent(_scrollView : ScrollView) 
    {
        this.mScrollViews.push(_scrollView);
        _scrollView.node.on(Node.EventType.TOUCH_START, this.TouchStart, this);
        _scrollView.node.on(Node.EventType.TOUCH_MOVE, this.TouchMove, this);
        _scrollView.node.on(Node.EventType.TOUCH_END, this.TouchEnd, this);     
        _scrollView.node.on(Node.EventType.TOUCH_CANCEL, this.TouchCancel, this);       
    }
    public TouchStart(event) 
    {
        if(isValid(this.node , true) == false)
        {
            return;
        }
        this.mTouchStartPosition = event.getLocation();
        this.Reset();      
    }

    public TouchMove(event) 
    {
        if(isValid(this.node , true) == false)
        {
            return;
        }
  

        let currentTouchPos =  event.getLocation();
        this.mTouchMovePosition = new Vec2(currentTouchPos.x , currentTouchPos.y);
        this.InsertTouchMovePos(currentTouchPos);
        if(this.mMoveDirection == MoveDirection.None)
        {
            this.CalculateMoveDirection();
            return;
        }

        if(this.mMoveDirection == MoveDirection.Vertical)
        {
            return;
        }

        this.ModifyPageViewContentPos();
    }
    public TouchEnd(event) 
    {
        if(isValid(this.node , true) == false)
        {
            return;
        }
        this.Reset();
        if(this.mMoveDirection == MoveDirection.Vertical)
        {
            return;
        }
        this.mTouchEndPosition = event.getLocation();
        this.PageScroll();
    }

    public TouchCancel(event) 
    {
        if(isValid(this.node , true) == false)
        {
            return;
        }
        this.Reset();


        if(this.mMoveDirection == MoveDirection.Vertical)
        {
            return;
        }
        this.mTouchEndPosition = event.getLocation();
        this.PageScroll();
    }

    PageScroll()
    {
        let currentPage = this.mPageView.getCurrentPageIndex();
        let distanceX = Math.abs(this.mTouchEndPosition.x - this.mTouchStartPosition.x);
        let pageWidth = this.mPageView.getComponent(UITransform).width;
        if(distanceX < pageWidth / 3)
        {
            this.mPageView.scrollToPage(currentPage);
            return;
        }

        let totalPage = this.mPageView.getPages().length;
        if(this.mTouchEndPosition.x < this.mTouchStartPosition.x)
        {
            let nextPage = currentPage + 1;
            if(nextPage >= totalPage)
            {
                nextPage = currentPage;
            }
            this.mPageView.scrollToPage(nextPage);
        }
        else
        {
            let lastPage = currentPage - 1;
            if(lastPage < 0)
            {
                lastPage = 0;
            }
            this.mPageView.scrollToPage(lastPage);
        }
    }

    CalculateMoveDirection()
    {
        let distanceX = this.mTouchMovePosition.x - this.mTouchStartPosition.x;
        let distanceY = this.mTouchMovePosition.y - this.mTouchStartPosition.y;
        let direction = new Vec2(distanceX , distanceY);
        let distance = direction.length();

        if(distance < this.mOffset)
        {
    
            return;
        }

        let standardDirection = new Vec2(1 , 0);
        let radius = direction.angle(standardDirection);
        let degree = math.toDegree(radius);
        if(degree < 30 || degree > 150)
        {
            this.mMoveDirection = MoveDirection.Horizontal
            this.EnableScrollView(false);
        }
        else
        {
            this.mMoveDirection = MoveDirection.Vertical
        }
    }
    
    ModifyPageViewContentPos()
    {
        if(this.mTouchMovePosList == null)
        {
            return;
        }

        if(this.mTouchMovePosList.length < 2)
        {
            return;
        }

        let deltaX = this.mTouchMovePosList[1].x - this.mTouchMovePosList[0].x
        let currentPos= this.mPageView.content.getPosition();
        let toPosX = currentPos.x + deltaX;
        this.mPageView.content.setPosition(toPosX , currentPos.y);
    }

    InsertTouchMovePos(_newPos : Vec2)
    {
        let newPos = new Vec2(_newPos.x , _newPos.y)
        this.mTouchMovePosList.push(newPos);
        if(this.mTouchMovePosList.length > 2)
        {
            this.mTouchMovePosList.shift();
        }
    }

    Reset()
    {
        this.mTouchMovePosList = new Array<Vec2>();
        this.mMoveDirection = MoveDirection.None
        this.EnableScrollView(true);
    }

    EnableScrollView(_value : boolean)
    {
        for(let i = 0 ; i < this.mScrollViews.length ; i++)
        {
            let currentListView = this.mScrollViews[i];
            let currentScrollView = currentListView.node.getComponent(ScrollView);
            currentScrollView.enabled = _value;
        }
        this.mPageView.enabled = _value;
    }

}

enum MoveDirection
{
    None = 0,
    Vertical = 1,
    Horizontal = 2,
}