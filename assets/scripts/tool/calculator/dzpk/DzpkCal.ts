
import { Calculator, PokerData, PokerNum, PokerType} from "../Calculator";

export enum DeZhouCombiantion // 牌型
{
    None = 0 ,  //错误
    High = 1,   //单牌
    OnePair = 2,    //一对
    TwoPair = 3,    //两对
    ThreeOfKind = 4,//三条
    Straight = 5,   //顺子
    Flush = 6,  //同花
    FullHouse = 7, //葫芦
    FourOfKind = 8, //四条
    StraightFlush = 9,  //同花顺
    RoyalStraightFlush = 10, //皇家同花顺
}
export class DzpkCal extends Calculator<DeZhouCombiantion> {
    Init()
    {
        this.mCurrentCombineList = new Array<DeZhouCombiantion>();
        this.mCurrentCombineList.push(DeZhouCombiantion.None);
        this.mCurrentCombineList.push(DeZhouCombiantion.High);
        this.mCurrentCombineList.push(DeZhouCombiantion.OnePair);
        this.mCurrentCombineList.push(DeZhouCombiantion.TwoPair);
        this.mCurrentCombineList.push(DeZhouCombiantion.ThreeOfKind);
        this.mCurrentCombineList.push(DeZhouCombiantion.Straight);
        this.mCurrentCombineList.push(DeZhouCombiantion.Flush);
        this.mCurrentCombineList.push(DeZhouCombiantion.FullHouse);
        this.mCurrentCombineList.push(DeZhouCombiantion.FourOfKind);
        this.mCurrentCombineList.push(DeZhouCombiantion.StraightFlush);
        this.mCurrentCombineList.push(DeZhouCombiantion.RoyalStraightFlush);

        this.mCurrentFindFunctions = new Array<Function>();
        this.mCurrentFindFunctions.push(null);
        this.mCurrentFindFunctions.push(this.FindHighCard.bind(this));
        this.mCurrentFindFunctions.push(this.FindOnePair.bind(this));
        this.mCurrentFindFunctions.push(this.FindTwoPair.bind(this));
        this.mCurrentFindFunctions.push(this.FindThreeOfKind.bind(this));
        this.mCurrentFindFunctions.push(this.FindStraight.bind(this));
        this.mCurrentFindFunctions.push(this.FindFlush.bind(this));
        this.mCurrentFindFunctions.push(this.FindFullHouse.bind(this));
        this.mCurrentFindFunctions.push(this.FindFourOfKind.bind(this));
        this.mCurrentFindFunctions.push(this.FindStraightFlush.bind(this));
        this.mCurrentFindFunctions.push(this.FindRoyalStraightFlush.bind(this));
    }

    Destroy()
    {
        this.mCurrentCombineList = null;
        this.mCurrentFindFunctions = null;
    }

    public TryToFind( _publicCards:Array<PokerData> , _playerCards:Array<PokerData> ) : Array<PokerData>
    {
        let tempPublicCards = Calculator.DeepCopyCards(_publicCards);
        let tempPlayerCards = Calculator.DeepCopyCards(_playerCards);
        let totalCardList = tempPublicCards.concat(tempPlayerCards);
        totalCardList = Calculator.SortCardList(totalCardList);
        let result = this.FindCombination(totalCardList);

        //this.LogCards(result);
        return result;
    }

    public FindCombination(_targetCards : Array<PokerData>) :Array<PokerData>
    {
        if (_targetCards.length < 5)
        {
            this.mCurrentCombination = DeZhouCombiantion.None;
            return null;
        }

        for (let i = this.mCurrentCombineList.length - 1 ; i >= 1; i--)
        {
            let result = this.mCurrentFindFunctions[i](_targetCards);
            if (result != null)
            {
                this.mCurrentCombination = this.mCurrentCombineList[i];
                return result;
            }
        }
        
        this.mCurrentCombination = DeZhouCombiantion.None;
        return null;
    }

    public FindHighCard(_targetCards : Array<PokerData>) : Array<PokerData>
    {
        let count = 5;
        if (_targetCards.length < 5)
        {
            return null;
        }
        let result = this.FindBiggestCards(_targetCards,count);
        return result;
    }

    public FindOnePair(_targetCards : Array<PokerData>): Array<PokerData>
    {
        let pairResult = this.FindExaclySameNumCards(_targetCards , 2);
        let pairCount = 1;
        if (pairResult.length != pairCount)
        {
            return null;
        }

        let restCards = this.RemoveCards(_targetCards, pairResult[0]);
        let highCards = this.FindBiggestCards(restCards,3);
        let result = pairResult[0].concat(highCards);
        return result;
    }

    public FindTwoPair(_targetCards : Array<PokerData>): Array<PokerData>
    {
        let pairResult = this.FindExaclySameNumCards(_targetCards , 2);
        let pairCount = 2;
        if (pairResult.length < pairCount)
        {
            return null;
        }
        while (pairResult.length > pairCount)
        {
            pairResult.shift();
        }

        let result = new Array<PokerData>();
        let restCards = _targetCards;
        for (let i = 0; i < pairResult.length; i++)
        {
            result = result.concat(pairResult[i]);
            restCards = this.RemoveCards(restCards, pairResult[i]);
        }
        
        let highCards = this.FindBiggestCards(restCards,1);
        result = result.concat(highCards);
        return result;
    }

    public FindThreeOfKind(_targetCards : Array<PokerData>): Array<PokerData>
    {
        let tribleResult = this.FindExaclySameNumCards(_targetCards,3);
        if (tribleResult.length == 0)
        {
            return null;
        }
        
        while (tribleResult.length > 1)
        {
            tribleResult.shift();
        }
        
        let restCards = this.RemoveCards(_targetCards, tribleResult[0]);
        let highCards = this.FindBiggestCards(restCards,2);
        let result  = tribleResult[0].concat(highCards);
        return result;
    }

    public FindStraight(_targetCards : Array<PokerData>): Array<PokerData>
    {
        let smallAceStraight = this.FindA2345(_targetCards);
        let normalStraights = this.FindNormalStraight(_targetCards);
        
        if (normalStraights.length == 0 && smallAceStraight == null)
        {
            return null;
        }
        
        if (normalStraights.length == 0)
        {
            return smallAceStraight;
        }
        else
        {
            return normalStraights[normalStraights.length - 1];
        }
    }

    public FindFlush(_targetCards : Array<PokerData>): Array<PokerData>
    {
        for (let i = PokerType.Spade; i <= PokerType.Diamond; i++)
        {
            let currentFlush = this.FindSameTypeCards(_targetCards , i);
            if (currentFlush.length < 5)
            {
                continue;
            }

            while (currentFlush.length > 5)
            {
                currentFlush.shift();
            }

            return currentFlush;
        }

        return null;
    }

    public FindFullHouse(_targetCards : Array<PokerData>): Array<PokerData>
    {
        let tribleResult = this.FindExaclySameNumCards(_targetCards,3);
        if (tribleResult.length == 0)
        {
            return null;
        }
        let resTrible = null;
        while (tribleResult.length > 1)
        {
            resTrible = tribleResult[0];
            tribleResult.shift();
        }

        if(resTrible != null)
        {
            resTrible.shift();
            let result = tribleResult[0].concat(resTrible);
            return result;
        }
        else
        {
            let restCards = this.RemoveCards(_targetCards, tribleResult[0]);
            let pairResult = this.FindExaclySameNumCards(restCards,2);
            if (pairResult.length == 0)
            {
                return null;
            }
            while (pairResult.length > 1)
            {
                pairResult.shift();
            }
            let result = tribleResult[0].concat(pairResult[0]);
            return result;
        }
    }
        
    public FindFourOfKind(_targetCards : Array<PokerData>): Array<PokerData>
    {
        let fourResult = this.FindExaclySameNumCards(_targetCards,4);
        if (fourResult.length == 0)
        {
            return null;
        }
        let restCards = this.RemoveCards(_targetCards, fourResult[0]);
        let highCards = this.FindBiggestCards(restCards,1);
        let result = fourResult[0].concat(highCards);
        return result;
    }

    public FindStraightFlush(_targetCards : Array<PokerData>): Array<PokerData>
    {
        let flush = null;
        for (let i = PokerType.Spade; i <= PokerType.Diamond; i++)
        {
            let currentFlush = this.FindSameTypeCards(_targetCards , i);
            if (currentFlush.length < 5)
            {
                continue;
            }

            flush = currentFlush;
            break;
        }

        if (flush == null)
        {
            return null;
        }

        let straightFlush = this.FindStraight(flush);
        return straightFlush;
    }

    public FindRoyalStraightFlush(_targetCards : Array<PokerData>): Array<PokerData>
    {
        let result = this.FindStraightFlush(_targetCards);
        if (result == null)
        {
            return null;
        }

        if (result[result.length - 1].mPokerNum != PokerNum.Ace)
        {
            return null;
        }
        return result;
    }

    private FindNormalStraight(_targetList : Array<PokerData>) : Array<Array<PokerData>>
    {
        let copyList = Calculator.DeepCopyCards(_targetList);
        let result = new Array<Array<PokerData>>();
        let step = 0;
        let condition = 5;
        while (step  < copyList.length)
        {
            let tempResult = new Array<PokerData>();
            tempResult.push(copyList[step]);
            for (let i = step; i < copyList.length; i++)
            {
                let currentStepCard = copyList[i];
                let lastStepCard = tempResult[tempResult.length - 1];
                
                if (DzpkCal.CompareNumPower(currentStepCard.mPokerNum , lastStepCard.mPokerNum) == 0)
                {
                    continue;   
                }
                else 
                {
                    if (DzpkCal.CompareNumPower(currentStepCard.mPokerNum , lastStepCard.mPokerNum) == 1)
                    {
                        tempResult.push(currentStepCard);
                        if (tempResult.length == condition)
                        {
                            break;
                        }
                    }
                    else
                    {
                        break;
                    }
                }
            }
            if (tempResult.length == condition)
            {
                result.push(tempResult);
            }
            step++;
        }

        return result;
    }

    FindA2345(_targetList : Array<PokerData>)  :  Array<PokerData>
    {
        let result = new Array<PokerData>();
        let ace = this.FindTargetNumCard(_targetList, PokerNum.Ace);
        let card2 = this.FindTargetNumCard(_targetList, PokerNum.Two);
        let card3 = this.FindTargetNumCard(_targetList, PokerNum.Three);
        let card4 = this.FindTargetNumCard(_targetList, PokerNum.Four);
        let card5 = this.FindTargetNumCard(_targetList, PokerNum.Five);
        result.push(ace);
        result.push(card2);
        result.push(card3);
        result.push(card4);
        result.push(card5);
        
        for (let i = 0; i < result.length; i++)
        {
            if (result[i] == null)
            {
                return null;
            }
        }

        return result;
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

    public static CompareNumPower(_left : PokerNum , _rgiht : PokerNum) : number
    {
        return DzpkCal.GetNumPower(_left) - DzpkCal.GetNumPower(_rgiht)
    }
}

