let UUID=require("uuid");const Fs=require("fs"),Path=require("path");class Font{constructor(){this.dirty=!0,this.uuid=UUID.v4(),this.isShowBoard=!1,this.x=0,this.y=0,this.width=0,this.height=0,this.texture=null,this.letterPath=null,this.fontSize=50,this.fontFamily="Arial",this.string="",this.color="#ffffff",this.shadowEnable=!1,this.shadowColor=null,this.shadowOffsetX=0,this.shadowOffsetY=0,this.shadowBlur=0,this.gradualEnable=!1,this.gradualDirection=0,this.gradualStartColor="#fff",this.gradualEndColor="#fff",this.outlineEnable=!1,this.outlineWidth=1,this.outlineColor="#fff",this.textureEnable=!1,this.textureFile=null}syncBase(t){this.fontFamily!==t.name&&(this.fontFamily=t.name,this.dirty=!0),this.fontSize!==t.size&&(this.fontSize=t.size,this.dirty=!0);let e=FontEngine.Util.colorToCss(t.color);this.color!==e&&(this.color=e,this.dirty=!0)}syncShadow(t){let e=FontEngine.Util.colorToCss(t.color);this.shadowEnable!==t.enable?(this.dirty=!0,this.shadowEnable=t.enable,this.shadowColor=e,this.shadowOffsetX=t.offset.x,this.shadowOffsetY=t.offset.y,this.shadowBlur=t.dim):this.shadowEnable?(this.shadowColor!==e&&(this.shadowColor=e,this.dirty=!0),this.shadowOffsetX!==t.offset.x&&(this.shadowOffsetX=t.offset.x,this.dirty=!0),this.shadowOffsetY!==t.offset.y&&(this.shadowOffsetY=t.offset.y,this.dirty=!0),this.shadowBlur!==t.dim&&(this.shadowBlur=t.dim,this.dirty=!0)):(this.shadowColor=e,this.shadowOffsetX=t.offset.x,this.shadowOffsetY=t.offset.y,this.shadowBlur=t.dim)}syncGradual(t){let e=FontEngine.Util.colorToCss(t.start),i=FontEngine.Util.colorToCss(t.end);this.gradualEnable!==t.enable?(this.dirty=!0,this.gradualEnable=t.enable,this.gradualDirection=t.direction,this.gradualStartColor=e,this.gradualEndColor=i):this.gradualEnable?(this.gradualDirection!==t.direction&&(this.gradualDirection=t.direction,this.dirty=!0),this.gradualStartColor!==e&&(this.gradualStartColor=e,this.dirty=!0),this.gradualEndColor!==i&&(this.gradualEndColor=i,this.dirty=!0)):(this.gradualDirection=t.direction,this.gradualStartColor=e,this.gradualEndColor=i)}syncOutLine(t){let e=FontEngine.Util.colorToCss(t.color);this.outlineEnable!==t.enable?(this.dirty=!0,this.outlineEnable=t.enable,this.outlineWidth=t.width,this.outlineColor=e):this.outlineEnable?(this.outlineWidth!==t.width&&(this.outlineWidth=t.width,this.dirty=!0),this.outlineColor!==e&&(this.outlineColor=e,this.dirty=!0)):(this.outlineWidth=t.width,this.outlineColor=e)}syncTexture(t){this.textureEnable!==t.enable&&(this.textureEnable=t.enable,this.dirty=!0)}attachContext(t){this.context=t}_getGradualPos(t,e,i){let s={began:{x:e.x,y:e.y},end:{x:i.x,y:i.y}},h=(i.x-e.x)/2,o=(i.y-e.y)/2;const{GradualDirection:a}=FontEngine;return t===a.Up2Down.value?(s.began.x=h,s.began.y=e.y,s.end.x=h,s.end.y=i.y):t===a.Down2Up.value?(s.began.x=h,s.began.y=i.y,s.end.x=h,s.end.y=e.y):t===a.Left2Right.value?(s.began.x=e.x,s.began.y=o,s.end.x=i.x,s.end.y=o):t===a.Right2Left.value?(s.began.x=i.x,s.began.y=o,s.end.x=e.x,s.end.y=o):t===a.LeftUp2RightDown.value?(s.began.x=e.x,s.began.y=e.y,s.end.x=i.x,s.end.y=i.y):t===a.LeftDown2RightUp.value?(s.began.x=e.x,s.began.y=i.y,s.end.x=i.x,s.end.y=e.y):t===a.RightUp2LeftDown.value?(s.began.x=i.x,s.began.y=e.y,s.end.x=e.x,s.end.y=i.y):t===a.RightDown2LeftUp.value&&(s.began.x=i.x,s.began.y=i.y,s.end.x=e.x,s.end.y=e.y),s}_onGradual(){let t=document.createElement("canvas"),e=t.getContext("2d"),{x1:i,y1:s,x2:h,y2:o}=this.getBoundingBox(),a=h;0===a&&(a=1);let n=h;0===n&&(n=1),t.setAttribute("width",a),t.setAttribute("height",n);let r=this._getGradualPos(this.gradualDirection,{x:i,y:s},{x:h,y:o}),l=e.createLinearGradient(r.began.x,r.began.y,r.end.x,r.end.y);return l.addColorStop(0,this.gradualStartColor),l.addColorStop(1,this.gradualEndColor),e.fillStyle=l,e.fillRect(0,0,h,o),{gradient:l,context:e,canvas:t}}_onTexture(){let{x1:t,y1:e,x2:i,y2:s}=this.letterPath.getBoundingBox(),h=FontEngine.textureImage,{width:o,height:a}=h,n=document.createElement("canvas"),r=n.getContext("2d");return n.setAttribute("width",o+t),n.setAttribute("height",a+e),r.drawImage(h,t,e),{pattern:r.createPattern(n,"repeat"),context:r,canvas:n}}_onShadow(t){this.shadowEnable?(t.shadowColor=this.shadowColor,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY,t.shadowBlur=this.shadowBlur):(t.shadowBlur=0,t.shadowOffsetX=t.shadowOffsetY=0)}_saveImage(t,e){let i=Path.join(__dirname,"../../../../../PaidPlugin/doc/BM Font/ttf");if(Fs.existsSync(i)){let s=t.toDataURL("image/png").replace(/^data:image\/png;base64,/,"");Fs.writeFileSync(Path.join(i,`canvas-${e}.png`),s,"base64")}}_getCharImageData(){let t=this.getFontRealHeight(this.string,this.fontSize),e=0,i=0,s=0,h=0;this.shadowEnable&&(i=this.shadowOffsetX,s=this.shadowOffsetY,h=this.shadowBlur),this.outlineEnable&&(e=this.outlineWidth+2*h);let o=e,a=e+t;i<=0&&(o-=i-h),s<=0&&(a-=s-h);let n=FontEngine.openTypeInfo.getPath(this.string,o,a,this.fontSize);this.letterPath=n,this.outlineEnable&&(n.stroke=this.outlineColor,n.strokeWidth=this.outlineWidth);let r=null,l=null;if(r=this.gradualEnable?(l=this._onGradual()).gradient:this.color,this.textureEnable&&FontEngine.textureImage){let t=this._onTexture();r=t.pattern,this.gradualEnable&&l&&(l.context.blendOnto(t.context,"overlay"),r=t.context.createPattern(t.canvas,"repeat"))}r&&(n.fill=r);let d=document.createElement("canvas"),g=d.getContext("2d");this.setFont(g);let{x1:u,y1:f,x2:x,y2:y}=n.getBoundingBox(),w=x+e+10,c=y+e+10;i>=0&&(w+=i+2*h),s>=0&&(c+=s+2*h),d.setAttribute("width",w),d.setAttribute("height",c),this._onShadow(g),n.draw(g);let b=this.cropTransparentColor(d),m=b.right-b.left,E=b.bottom-b.top,C=g.getImageData(b.left,b.top,m,E),p=document.createElement("canvas"),F=p.getContext("2d");p.setAttribute("width",m),p.setAttribute("height",E),F.putImageData(C,0,0,0,0,m,E);let B={width:m,height:E,data:C};return d.remove(),p.remove(),B}cropTransparentColor(t){let e=t.getContext("2d").getImageData(0,0,t.width,t.height).data,i=t.width,s=0,h=t.height,o=0,a=!1;for(let n=0;n<t.width;n++)for(let r=0;r<t.height;r++){let l=4*(n+t.width*r);(e[l]>0||e[l+1]>0||e[l+2]>0||e[l+3]>0)&&(a=!0,h=Math.min(r,h),o=Math.max(r,o),s=Math.max(n,s),i=Math.min(n,i))}return a?{left:i,right:s+1,top:h,bottom:o+1}:{left:0,right:1,top:0,bottom:1}}getFontRealHeight(t,e){let i=0,s=FontEngine.openTypeInfo;if(s){let{ascender:t,descender:h,unitsPerEm:o}=s;i=(t-h)/o*e}return i}getXAdvance(){let t=0,e=FontEngine.openTypeInfo;return e&&(t=e.getAdvanceWidth(this.string,this.fontSize)),t}getBoundingBox(){return this.letterPath?this.letterPath.getBoundingBox():{x1:0,y1:0,x2:0,y2:0}}genTexture(){if(this.dirty){let t=this._getCharImageData();return this.width=t.width,this.height=t.height,this.texture=t.data,this.dirty=!1,!0}return!1}draw(){this.texture||(this.dirty=!0,this.genTexture());let t=this.context;createImageBitmap(this.texture).then(e=>{t.drawImage(e,this.x,this.y)}),this.isShowBoard&&this._showBoard()}_showBoard(){let t=this.context;t.lineWidth=1,t.strokeStyle="#ff0000",t.strokeRect(this.x,this.y,this.width,this.height)}setFont(t){let e=`${this.fontSize}px`;t.font=`normal normal bold ${e} ${this.fontFamily}`}hitTest(t,e){return this.x<=t&&this.y<=e&&t<=this.x+this.width&&e<=this.y+this.height}}FontEngine.Font=module.exports=Font;