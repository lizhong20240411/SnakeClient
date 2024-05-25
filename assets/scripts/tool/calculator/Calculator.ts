export class PokerData
{
    constructor(_type : PokerType , _num : PokerNum)
    {
        this.mPokerType = _type;
        this.mPokerNum = _num;

    }

    mPokerType : PokerType = PokerType.None;
    mPokerNum :  PokerNum = PokerNum.None;

}
// var pokerCards = [TotalCount]Poker{
//     0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1A, 0x1B, 0x1C, 0x1D, // diamonds 2-A
//     0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2A, 0x2B, 0x2C, 0x2D, // clubs 2-A
//     0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A, 0x3B, 0x3C, 0x3D, // hearts 2-A
//     0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4A, 0x4B, 0x4C, 0x4D, // spades 2-A
//   }

export enum PokerType
{
    None = 0 , //错误
    Spade , //黑桃
    Heart , //红桃
    Club,   //梅花
    Diamond,//方片
}

export enum PokerNum
{
    None = 0,//错误
    None1 = 1,//错误
    Two  = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 11,
    Queen = 12,
    King = 13,
    Ace = 14,
}


export class Calculator<T>
{

    constructor()
    {
        this.Init();
    }

    Init()
    {

    }

    Release()
    {
        this.mCurrentCombineList = null;
        this.mCurrentFindFunctions = null;
        this.mCurrentJudgeFunctions = null;
    }

    mCurrentCombination : T;
    mCurrentCombineList : Array<T>;
    mCurrentFindFunctions : Array<Function>;
    mCurrentJudgeFunctions: Array<Function>;

    public FindCombination(_targetCards : Array<PokerData>) :Array<PokerData>
    {
        return null;
    }

    public JudgeCombination(_targetCards : Array<PokerData>) :Array<PokerData>
    {
        return null;
    }
    

    public LogCards(_targetCards : Array<PokerData>)
    {

        if(_targetCards == null)
        {
            console.log("当前牌组====null");
            return;
        }

        console.log("当前牌组====");

        for(let i = 0 ; i < _targetCards.length ; i++)
        {
            let typeStr = "";
            switch(_targetCards[i].mPokerType)
            {
                case PokerType.Club:
                    typeStr = "♣️";
                break;
                case PokerType.Diamond:
                    typeStr = "♦️";
                break;
                case PokerType.Spade:
                    typeStr = "♠️";
                break;
                case PokerType.Heart:
                    typeStr = "♥️";
                break;
            }
            console.log("==== "+ _targetCards[i].mPokerNum + typeStr);
        }
    }

    public FindBiggestCards(_targetList : Array<PokerData>, _findCount : number)  : Array<PokerData>
    {
        if (_targetList.length < _findCount)
        {
            return null;
        }
        let copyList = Calculator.DeepCopyCards(_targetList);
        while (copyList.length > _findCount)
        {
            copyList.shift();
        }
        return copyList;
    }

    FindExaclySameNumCards(_targetList : Array<PokerData>, _sameCount : number) : Array<Array<PokerData>>
    {
        let copyList = Calculator.DeepCopyCards(_targetList);
        let result = new Array<Array<PokerData>>();
        for (let i = PokerNum.Two; i <= PokerNum.Ace; i++)
        {
            let tempResult = this.FindTargetNumList(copyList , i);
            if (tempResult.length == _sameCount)
            {
                result.push(tempResult);
            }
        }
        return result;
    }

    FindSameNumCards(_targetList : Array<PokerData>, _sameCount : number) : Array<Array<PokerData>>
    {
        let copyList = Calculator.DeepCopyCards(_targetList);
        let result = new Array<Array<PokerData>>();
        for (let i = PokerNum.Two; i <= PokerNum.Ace; i++)
        {
            let tempResult = this.FindTargetNumList(copyList , i);
            if(tempResult.length < _sameCount)
            {
                continue;
            }

            while(tempResult.length > _sameCount)
            {
                tempResult.shift();
            }

            if (tempResult.length == _sameCount)
            {
                result.push(tempResult);
            }
        }
        return result;
    }

    FindTargetNumList(_targetList : Array<PokerData> , _targetNum : PokerNum) : Array<PokerData>
    {
        let temp = new Array<PokerData>();
        for(let i = 0 ; i < _targetList.length ; i++)
        {
            if(_targetList[i].mPokerNum == _targetNum)
            {
                temp.push(_targetList[i]);
            }
        }
        return temp;
    }

    FindTargetNumCard(_targetList : Array<PokerData> , _targetNum : PokerNum) : PokerData
    {
        for (let i = 0; i < _targetList.length; i++)
        {
            if (_targetList[i].mPokerNum == _targetNum)
            {
                return new PokerData(_targetList[i].mPokerType , _targetList[i].mPokerNum);
            }
        }
        return null;
    }

    RemoveCards(_targetList:Array<PokerData> , _removeList:Array<PokerData>) : Array<PokerData>
    {
        let copyList = Calculator.DeepCopyCards(_targetList);
        if(_removeList.length == 0)
        {
            return copyList;
        }
        let step = 0 ;
        while(step < copyList.length)
        {
            let currentCard = copyList[step];
            let found = false;
            for(let i = 0 ; i < _removeList.length ; i++)
            {
                if(Calculator.IsSameCards(currentCard , _removeList[i]))
                {
                    copyList.splice(step,1);
                    found = true;
                    break;
                }
            }
            if(found == false)
            {
                step++;
            }
        }
        return copyList;
    }

    RemoveCardsByNum(_targetList:Array<PokerData> , _cardNum : PokerNum) : Array<PokerData>
    {
        let copyList = Calculator.DeepCopyCards(_targetList);

        let step = 0 ;
        while(step < copyList.length)
        {
            let currentCard = copyList[step];
            let found = false;

            if(currentCard.mPokerNum == _cardNum)
            {
                copyList.splice(step,1);
                found = true;
            }

            if(found == false)
            {
                step++;
            }
        }
        return copyList;
    }

    FindSameTypeCards(_targetList : Array<PokerData> , _type : PokerType) : Array<PokerData>
    {
        let copyList = Calculator.DeepCopyCards(_targetList);
        let result = new Array<PokerData>();
        for(let i = 0 ; i < copyList.length ; i++)
        {
            let current = copyList[i];
            if(current.mPokerType == _type)
            {
                result.push(current);
            }
        }

        return result;
    }

    FindStraightWithMinCount(_targetList : Array<PokerData> , _minCount = 5) : Array<Array<PokerData>>
    {
        let copyList = Calculator.DeepCopyCards(_targetList);
        let result = new Array<Array<PokerData>>();
        let step = 0;
        while (step  < copyList.length)
        {
            let tempResult = new Array<PokerData>();
            tempResult.push(copyList[step]);
            for (let i = step; i < copyList.length; i++)
            {
                let currentStepCard = copyList[i];
                let lastStepCard = tempResult[tempResult.length - 1];
                
                if (Calculator.CompareNumPower(currentStepCard.mPokerNum , lastStepCard.mPokerNum) == 0)
                {
                    continue;   
                }
                else 
                {
                    if (Calculator.CompareNumPower(currentStepCard.mPokerNum , lastStepCard.mPokerNum) == 1)
                    {
                        tempResult.push(currentStepCard);
                    }
                    else
                    {
                        break;
                    }
                }
            }
            if (tempResult.length >= _minCount)
            {
                result.push(tempResult);
            }
            step++;
        }

        return result;
    }

    IsMultipleStraight(_targetList : Array<Array<PokerData>>) : boolean
    {
        for(let i = 0 ; i < _targetList.length ; i++)
        {
            let nextIndex = i+1;
            if(nextIndex < _targetList.length)
            {
                let current = _targetList[i][0];
                let next = _targetList[nextIndex][0];
                let compareResult =  Calculator.CompareNumPower(current.mPokerNum , next.mPokerNum);
                if(compareResult == -1)
                {
                    continue;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                break;
            }
        }
        
        return true;
    }

    FindAllMultipleStraight(_targetList : Array<Array<PokerData>> , _minLength : number) :  Array<Array<PokerData>>
    {
        if(_targetList.length < _minLength)
        {
            return null;
        }

        let maxPairLength = _targetList.length;
        let result = new Array<Array<PokerData>>();
        let startLength = _minLength;

        while(startLength <= maxPairLength)
        {
            for(let i = 0 ; i < _targetList.length ; i++)
            {
                let endIndex = i + startLength;
                if(endIndex <= _targetList.length)
                {
                    let tempMultipleStraight = new Array<Array<PokerData>>();
                    let tempResult = new Array<PokerData>();
                    for(let k = i ; k < endIndex ; k++)
                    {
                        tempMultipleStraight.push(_targetList[k]);
                        tempResult = tempResult.concat(_targetList[k]);
                    }

                    if(this.IsMultipleStraight(tempMultipleStraight))
                    {
                        result.push(tempResult);
                    }
                }
                else
                {
                    break;
                }
            }

            startLength++;
        }

        if(result.length == 0 )
        {
            return null;
        }

        return result;
    }

    FindMultipleXAndY(_targetList : Array<PokerData> , _multiple : number , _carry : number) : Array<Array<PokerData>>
    {
        if(_targetList.length < _multiple + _carry)
        {
            return null;
        }

        let multipleResult = this.FindExaclySameNumCards(_targetList,_multiple);
        if(multipleResult.length == 0)
        {
            return null;
        }
        let result = new Array<Array<PokerData>>();

        for(let i = 0 ; i < multipleResult.length ; i++)
        {
            let currentMultiple = multipleResult[i];
            let restCards = this.RemoveCards(_targetList , currentMultiple);

            let allCombinations = []
            this.CalCombination(restCards , _carry , allCombinations);
            for(let k = 0 ; k < allCombinations.length ; k++)
            {
                let currentCombine = allCombinations[i];
                let tempResult = new Array<PokerData>();
                tempResult = tempResult.concat(currentMultiple);
                tempResult = tempResult.concat(currentCombine);
                result.push(tempResult);
            }
        }

        if(result.length == 0)
        {
            return null;
        }

        return result;
    }


    //查找所有可能存在的排列组合
    CalCombination(dataArr: Array<any>, count : number, _result: Array<any>, _helpArray : Array<any> = []) 
    {
        if (count === 0) 
        {
            _result.push(Calculator.DeepCopyCards(_helpArray));
            return;
        }
        for (let i = 0; i < dataArr.length + 1 - count; i++) 
        {
            _helpArray.push(dataArr[i]);
            this.CalCombination(dataArr.slice(i + 1), count - 1,_result, _helpArray);
            _helpArray.pop();
        }
    }

    public SamePokerList(_left : Array<PokerData> , _right : Array<PokerData>) : boolean
    {
        if(_left.length != _right.length)
        {
            return false;
        }   

        let deepCopyLeft = Calculator.DeepCopyCards(_left);
        let sortCardsLeft = Calculator.SortCardList(deepCopyLeft);

        let deepCopyRight = Calculator.DeepCopyCards(_right);
        let sortCardsRight = Calculator.SortCardList(deepCopyRight);


        let result = this.RemoveCards(sortCardsRight,sortCardsLeft)
        return result.length ==0;

    }

    public static ConvertByte_2_PokerData(_serverNum : number) : PokerData
    {
        let startIndex;
        let pokerType;
        let pokerNum;
        if(_serverNum >= 17 && _serverNum <= 29)
        {
            startIndex = 17;
            pokerType = PokerType.Diamond;
        }
        else if(_serverNum >= 33 && _serverNum <= 45)
        {
            startIndex = 33;
            pokerType = PokerType.Club;
        }
        else if(_serverNum >= 49 && _serverNum <= 61)
        {
            startIndex = 49;
            pokerType = PokerType.Heart;
        }
        else if(_serverNum >= 65 && _serverNum <= 77)
        {
            startIndex = 65;
            pokerType = PokerType.Spade;
        }
        let currentIndex = _serverNum - startIndex;
        pokerNum = currentIndex + PokerNum.Two;
        let pokerData = new PokerData(pokerType , pokerNum);
        return pokerData
    }

    public static IsSameCards(card0 : PokerData , card1 : PokerData) : boolean
    {
        if(card0.mPokerNum == card1.mPokerNum && card0.mPokerType == card1.mPokerType)
        {
            return true;
        }

        return false;
    }

    public static PokersContain(_pokerList : Array<PokerData> , _onePoker : PokerData) : boolean
    {
        for(let i = 0 ; i < _pokerList.length ; i++)
        {
            let current = _pokerList[i];
            if(Calculator.IsSameCards(current , _onePoker))
            {
                return true;
            }
        }

        return false;
    }

    public static CreatePokerData(_type : PokerType , _num : PokerNum) : PokerData
    {
        let pokerData= new PokerData(_type , _num);
        return pokerData;
    }

    public static CreatePokerDataWithNum(_type : number , _num : number) : PokerData
    {
        let pokerData= new PokerData(_type , _num);
        return pokerData;
    }

    public static SortCardList(_targetList : Array<PokerData>)  :  Array<PokerData>
    {
        _targetList.sort(function (A, B) 
        {
            return Calculator.CompareNumPower(A.mPokerNum , B.mPokerNum);
        }.bind(this));
        return _targetList;
    }

    public static DeepCopyCards(_targetList : Array<PokerData>)  :  Array<PokerData>
    {
        let tempList = JSON.parse(JSON.stringify(_targetList));
        return tempList;
    }

    public static CompareNumPower(_left : PokerNum , _rgiht : PokerNum) : number
    {
        return Calculator.GetNumPower(_left) - Calculator.GetNumPower(_rgiht)
    }

    //根据点数获取牌力大小
    public static GetNumPower(_cardNum : PokerNum) : number
    {
        if(_cardNum == PokerNum.Two)
        {
            return 0;
        }
        if(_cardNum == PokerNum.Three)
        {
            return 1;
        }
        if(_cardNum == PokerNum.Four)
        {
            return 2;
        }
        if(_cardNum == PokerNum.Five)
        {
            return 3;
        }
        if(_cardNum == PokerNum.Six)
        {
            return 4;
        }
        if(_cardNum == PokerNum.Seven)
        {
            return 5;
        }
        if(_cardNum == PokerNum.Eight)
        {
            return 6;
        }
        if(_cardNum == PokerNum.Nine)
        {
            return 7;
        }
        if(_cardNum == PokerNum.Ten)
        {
            return 8;
        }
        if(_cardNum == PokerNum.Jack)
        {
            return 9;
        }
        if(_cardNum == PokerNum.Queen)
        {
            return 10;
        }
        if(_cardNum == PokerNum.King)
        {
            return 11;
        }
        if(_cardNum == PokerNum.Ace)
        {
            return 12;
        }
    }
    
}

