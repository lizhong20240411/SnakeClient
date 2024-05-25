import { _decorator, Component, Node, ResolutionPolicy, view } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DynamicAdaptScreen')
export class DynamicAdaptScreen extends Component {
    protected onLoad(): void 
    {
        this.OnResize();
        view.on('canvas-resize', this.OnResize, this);
    }

    OnResize()
    {
        let getVisibleSizeInPixel = view.getVisibleSizeInPixel(); //真正屏幕大小
        let originDesignSize = view.getDesignResolutionSize(); //我的设计分辨率
        console.log("originDesignSize==" + originDesignSize)
        let designWidthRatio = originDesignSize.x / originDesignSize.y;
        let screenWidthRatio = getVisibleSizeInPixel.x / getVisibleSizeInPixel.y;



        if(screenWidthRatio > designWidthRatio)
        {
            //console.log("屏幕非常宽")
            view.setDesignResolutionSize(originDesignSize.width , originDesignSize.height , ResolutionPolicy.FIXED_WIDTH);
        }
        else if(screenWidthRatio < designWidthRatio)
        {
            //console.log("屏幕非常窄")
            view.setDesignResolutionSize(originDesignSize.width , originDesignSize.height , ResolutionPolicy.FIXED_HEIGHT);
        }
    }
}

