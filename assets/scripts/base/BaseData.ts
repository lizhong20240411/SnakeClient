import { Component, isValid } from "cc";

class DataEvent 
{
    constructor(_target: any, _callfunc: Function) 
    {
        this.mTarget = _target;
        this.mCallfunc = _callfunc;
    }
    mTarget: any;
    mCallfunc: Function;
}

export class BaseData <T>
{
    constructor(_autoReset: boolean = false , _defaultValue : T = null)
    {
        this.mAutoReset = _autoReset;
        var propertyDefine = {};
        propertyDefine["mData"] =
        {
            get()
            { 
                return this.mSavingData;
            },
            set(val)
            { 
                this.UpdateData(val);
            },
            
        }
        Object.defineProperties(this, propertyDefine);
        this.mEventArray = new Array<DataEvent>();

        this.UpdateData(_defaultValue);
    }



    public mData : T = null;
    private mSavingData : T = null;
    private mEventArray : Array<DataEvent>;
    private mSetValueAlready : boolean = false;
    private mAutoReset : boolean = false;
    private UpdateData(_value : T)
    {
        this.mSavingData = _value;
        if(_value == null || _value == undefined)
        {
            return;
        }

        this.mSetValueAlready = true;
        this.mSavingData = _value;

        // for(let i = 0 ; i < this.mEventArray.length ; i++)
        // {
        //     let current = this.mEventArray[i];
        //     if (cc.isValid(current.mTarget, true))
        //     {
        //         current.mCallfunc(this.mSavingData);
        //     } 
        // }


        let step = 0;
        while(step < this.mEventArray.length)
        {
            let current = this.mEventArray[step];
            if(current.mTarget instanceof Component)
            {
                let currentNode = current.mTarget.node
                if (isValid(currentNode , true))
                {
                    current.mCallfunc(this.mSavingData);
                    step++;
                } 
                else
                {
                    this.RemoveListennerByTarget(current.mTarget);
                }
            }
            else
            {
                current.mCallfunc(this.mSavingData);
                step++;
            }
        }

        if(this.mAutoReset)
        {
            this.ResetData();
        }
    }



    public AddListenner(_target : any , _callfunc : Function)
    {
        let index = this.mEventArray.findIndex((_item) => _item.mTarget === _target);
        if(index >= 0)
        {
            console.log("当前target已经添加过 相同的数据监听了  _target==" + _target.name);
            return;
        }

        let dataEvent = new DataEvent(_target , _callfunc);
        this.mEventArray.push(dataEvent);

        if(this.mSetValueAlready)
        {
            dataEvent.mCallfunc(this.mSavingData);
        }
    }
    

    public RemoveListennerByTarget(_target : any)
    {
        let index = this.mEventArray.findIndex((_item) => _item.mTarget === _target);
        if(index < 0)
        {
            //console.log("当前target并没有添加这个数据监听  _target==" + _target.name);
            return;
        }

        this.mEventArray.splice(index , 1);
    }

    public RemoveAllListenner()
    {
        this.mEventArray.splice(0 , this.mEventArray.length);
    }

    public ResetData()
    {
        this.mSetValueAlready = false;
        this.mSavingData = null;
    }

    public Clear()
    {
        this.ResetData();
        this.RemoveAllListenner();
    }
}

