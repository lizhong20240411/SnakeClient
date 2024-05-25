import { _decorator, Color, Component, Graphics, Node, UITransform, Vec3 } from 'cc';
import { QRCode } from '../../tool/QrGen/QRCode';
import { QRErrorCorrectLevel } from '../../tool/QrGen/QRConst';
const { ccclass, property } = _decorator;

@ccclass('QRCodeTS')
export class QRCodeTS extends Component 
{
	mInited : boolean = false ; // 是否已经生成完毕
	protected start(): void 
	{
		//this.CreateQRCode("www.baidu.com")
	}
    public CreateQRCode(_url : string)
    {
        var qrcode = new QRCode(-1, QRErrorCorrectLevel.H);
		qrcode.addData(_url);		
		qrcode.make();

		var ctx = this.node.getComponent(Graphics)!;
        if(ctx == null || ctx == undefined)
        {
			ctx = this.node.addComponent(Graphics);
        }
		ctx.destroyRenderData();
		ctx.clear();
		

		let nodeWidth = this.node.getComponent(UITransform).width;
		let nodeHeight = this.node.getComponent(UITransform).height;
		ctx.fillColor = Color.BLACK;		
		var tileW = nodeWidth / qrcode.getModuleCount();
		var tileH = nodeHeight / qrcode.getModuleCount();

		for (var row = 0; row < qrcode.getModuleCount(); row++) 
        {
			for (var col = 0; col < qrcode.getModuleCount(); col++) 
            {
				if (qrcode.isDark(row, col)) 
                {					
					var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
					var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
					ctx.rect(Math.round(col * tileW), Math.round(row * tileH), w, h);
					ctx.fill();
				} 
                else 
                {
					// ctx.fillColor = cc.Color.WHITE;
				}
				var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
			}
		}

		if(this.mInited == false)
		{
			let currentPos = this.node.getPosition();
			let finalPos = new Vec3(currentPos.x - nodeWidth/2 , currentPos.y - nodeHeight/2);
			this.node.setPosition(finalPos);
			this.mInited = true;
		}
    }
}


