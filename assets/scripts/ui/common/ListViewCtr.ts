import { _decorator, Component, Label, Node } from 'cc';
import ListView from './ListView';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
const { ccclass, property } = _decorator;

@ccclass('ListViewCtr')
export abstract class ListViewCtr<T> extends BaseUI 
{
    @property(ListView) 
    mListView: ListView = null;

    mCurrentPage :number = 1;
    mPageSize : number = 20;
    mIsLastPage : boolean = false;
    mCurrentData : Array<T>;

    mDragRefreshFunction :boolean;
    mActiveDragRefreshLength : number;
    InitParam()
    {
        this.mListView.SetDragBottom(this.OnDragBottom.bind(this));
        this.mListView.SetDragTop(this.OnDragTop.bind(this));
        this.mListView.SetTouchUp(this.OnTouchUp.bind(this));
        this.mListView.SetTouchMove(this.OnTouchMove.bind(this));
        this.mListView.SetOnScrolling(this.OnScrolling.bind(this));
        this.mListView.SetRenderCallback(this.RenderEvent.bind(this));
        this.SetDragRefreshFunction(false);
        this.ResetPage();
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
        this.mCurrentData = null;
    }
    abstract Refresh();
    abstract RenderEvent(_item: Node , _index: number);


    public SetDragRefreshFunction(_value : boolean , _activeFunctionLength : number = -50)
    {
        this.mDragRefreshFunction = _value;
        this.mListView.mDragToRefresh.active = _value;
        this.mActiveDragRefreshLength = _activeFunctionLength;
    }

    ForceRefresh()
    {
        this.ResetPage();
        this.Refresh();
    }
    OnDragTop() 
    {
        // if(this.mDragRefreshFunction == false)
        // {
        //     return;
        // }
        // this.ForceRefresh();
    }
    OnDragBottom() 
    {
        if(this.mIsLastPage)
        {
            return;
        }
        this.Refresh();
    }

    OnTouchUp()
    {
        if(this.mDragRefreshFunction == false)
        {
            return;
        }
        let currentDragY = this.mListView.scrollView.content.getPosition().y;
        if(currentDragY <= this.mActiveDragRefreshLength)
        {
            this.ForceRefresh();
        }
    }

    OnTouchMove()
    {
        let currentDragY = this.mListView.scrollView.content.getPosition().y;
        this.mListView.mDragToRefresh.setPosition(0,currentDragY)

        if(currentDragY <= this.mActiveDragRefreshLength)
        {
            this.SetDragTips(Localization.GetString("0002"))
            this.GetDragArrow().setScale(1,-1)
        }
        else
        {
            this.SetDragTips(Localization.GetString("0001"))
            this.GetDragArrow().setScale(1,1)
        }
    }

    OnScrolling()
    {
        let currentDragY = this.mListView.scrollView.content.getPosition().y;
        this.mListView.mDragToRefresh.setPosition(0,currentDragY)
    }

    ResetPage()
    {
        this.mListView.mDragToRefresh.setPosition(0,0)
        this.SetDragTips(Localization.GetString("0001"))
        this.GetDragArrow().setScale(1,1)
        this.mIsLastPage = false;
        this.mCurrentData = new Array<T>();
        this.mCurrentPage = 1;
        this.mListView.numItems = 0;
    }

    protected UpdateData(_datas : Array<T> ,_maxDataLength : number = 0)
    {
        if(this.mCurrentData == null)
        {
            return;
        }


        this.mCurrentData = this.mCurrentData.concat(_datas)
        this.mListView.numItems = this.mCurrentData.length;
        if(this.mCurrentData.length >= _maxDataLength)
        {
            this.mIsLastPage = true;
        }
        else
        {
            this.mIsLastPage = false;
        }
        this.mCurrentPage++;
    }

    public ForceSetData(_datas : Array<T> ,_maxDataLength : number = 0)
    {
        this.mCurrentData = _datas;
        this.mListView.numItems = this.mCurrentData.length;
        if(this.mCurrentData.length >= _maxDataLength)
        {
            this.mIsLastPage = true;
        }
        else
        {
            this.mIsLastPage = false;
        }
    }


    private SetDragTips(_tips : string) 
    {
        this.mListView.mDragToRefresh.getChildByName("Tips").getComponent(Label).string = _tips
    }

    private GetDragArrow() : Node
    {
        return this.mListView.mDragToRefresh.getChildByName("Arrow");
    }
}

