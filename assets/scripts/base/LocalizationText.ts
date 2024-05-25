import { _decorator, Component, Node, Label, CCString, RichText } from 'cc';
import { Localization } from './Localization';
const { ccclass, property } = _decorator;

@ccclass('LocalizationText')
export class LocalizationText extends Component 
{
    @property({}) 
    mKey: string = "";
    private mLabel: Label = null;
    private mRichText: RichText = null;
    start() 
    {
        this.mLabel = this.node.getComponent(Label);
        if(this.mLabel)
        {
            this.mLabel.string = Localization.GetString(this.mKey);
        }
        else
        {
            this.mRichText = this.node.getComponent(RichText);
            if (this.mRichText)
                this.mRichText.string = Localization.GetString(this.mKey);
        }
    }
}

