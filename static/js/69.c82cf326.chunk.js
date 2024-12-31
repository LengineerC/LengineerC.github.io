/*! For license information please see 69.c82cf326.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[69],{26069:(t,e,a)=>{var i=a(96069),n=a(2444),o=(a(34515),a(34113)),r=a(7589),s=a(80933);(0,n.Y)([o.a,r.a]);(0,n.Y)(s._),i.NA({type:"series.wordCloud",visualStyleAccessPath:"textStyle",visualStyleMapper:function(t){return{fill:t.get("color")}},visualDrawType:"fill",optionUpdated:function(){var t=this.option;t.gridSize=Math.max(Math.floor(t.gridSize),4)},getInitialData:function(t,e){var a=i.dw.createDimensions(t.data,{coordDimensions:["value"]}),n=new i.B8(a,this);return n.initData(t.data),n},defaultOption:{maskImage:null,shape:"circle",keepAspect:!1,left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,textStyle:{fontWeight:"normal"}}}),i.yX({type:"wordCloud",render:function(t,e,a){var n=this.group;n.removeAll();var o=t.getData(),r=t.get("gridSize");t.layoutInstance.ondraw=function(e,a,s,l){var d=o.getItemModel(s),f=d.getModel("textStyle"),u=new i.fA.EY({style:i.dw.createTextStyle(f),scaleX:1/l.info.mu,scaleY:1/l.info.mu,x:(l.gx+l.info.gw/2)*r,y:(l.gy+l.info.gh/2)*r,rotation:l.rot});u.setStyle({x:l.info.fillTextOffsetX,y:l.info.fillTextOffsetY+.5*a,text:e,verticalAlign:"middle",fill:o.getItemVisual(s,"style").fill,fontSize:a}),n.add(u),o.setItemGraphicEl(s,u),u.ensureState("emphasis").style=i.dw.createTextStyle(d.getModel(["emphasis","textStyle"]),{state:"emphasis"}),u.ensureState("blur").style=i.dw.createTextStyle(d.getModel(["blur","textStyle"]),{state:"blur"}),i.dw.enableHoverEmphasis(u,d.get(["emphasis","focus"]),d.get(["emphasis","blurScope"])),u.stateTransition={duration:t.get("animation")?t.get(["stateAnimation","duration"]):0,easing:t.get(["stateAnimation","easing"])},u.__highDownDispatcher=!0},this._model=t},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}}),window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message";return window.addEventListener("message",(function(a){if("string"===typeof a.data&&a.data.substr(0,20)===e){a.stopImmediatePropagation();var i=parseInt(a.data.substr(20),36);t[i]&&(t[i](),t[i]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},function(a){var i=t.length;return t.push(a),window.postMessage(e+i.toString(36),"*"),i}}()||function(t){window.setTimeout(t,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)});var l=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!e&&(!!e.getImageData&&(!!e.fillText&&(!!Array.prototype.some&&!!Array.prototype.push)))}(),d=function(){if(l){for(var t,e,a=document.createElement("canvas").getContext("2d"),i=20;i;){if(a.font=i.toString(10)+"px sans-serif",a.measureText("\uff37").width===t&&a.measureText("m").width===e)return i+1;t=a.measureText("\uff37").width,e=a.measureText("m").width,i--}return 0}}(),f=function(t){for(var e,a,i=t.length;i;)e=Math.floor(Math.random()*i),a=t[--i],t[i]=t[e],t[e]=a;return t},u={},h=function(t,e){if(l){var a=Math.floor(Math.random()*Date.now());Array.isArray(t)||(t=[t]),t.forEach((function(e,a){if("string"===typeof e){if(t[a]=document.getElementById(e),!t[a])throw new Error("The element id specified is not found.")}else if(!e.tagName&&!e.appendChild)throw new Error("You must pass valid HTML elements, or ID of the element.")}));var i={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "\u5fae\u8edf\u6b63\u9ed1\u9ad4", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,layoutAnimation:!0,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var n in e)n in i&&(i[n]=e[n]);if("function"!==typeof i.weightFactor){var o=i.weightFactor;i.weightFactor=function(t){return t*o}}if("function"!==typeof i.shape)switch(i.shape){case"circle":default:i.shape="circle";break;case"cardioid":i.shape=function(t){return 1-Math.sin(t)};break;case"diamond":i.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"square":i.shape=function(t){return Math.min(1/Math.abs(Math.cos(t)),1/Math.abs(Math.sin(t)))};break;case"triangle-forward":i.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":i.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":i.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":i.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}i.gridSize=Math.max(Math.floor(i.gridSize),4);var r,s,h,c,m,g,w,v,p=i.gridSize,y=p-i.maskGapWidth,M=Math.abs(i.maxRotation-i.minRotation),x=Math.min(i.maxRotation,i.minRotation),S=i.rotationStep;switch(i.color){case"random-dark":w=function(){return L(10,50)};break;case"random-light":w=function(){return L(50,90)};break;default:"function"===typeof i.color&&(w=i.color)}"function"===typeof i.fontWeight&&(v=i.fontWeight);var I=null;"function"===typeof i.classes&&(I=i.classes);var b,T=!1,k=[],C=function(t){var e,a,i=t.currentTarget,n=i.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,a=t.touches[0].clientY):(e=t.clientX,a=t.clientY);var o=e-n.left,r=a-n.top,s=Math.floor(o*(i.width/n.width||1)/p),l=Math.floor(r*(i.height/n.height||1)/p);return k[s]?k[s][l]:null},E=function(t){var e=C(t);b!==e&&(b=e,e?i.hover(e.item,e.dimension,t):i.hover(void 0,void 0,t))},A=function(t){var e=C(t);e&&(i.click(e.item,e.dimension,t),t.preventDefault())},O=[],F=function(t){if(O[t])return O[t];var e=8*t,a=e,n=[];for(0===t&&n.push([c[0],c[1],0]);a--;){var o=1;"circle"!==i.shape&&(o=i.shape(a/e*2*Math.PI)),n.push([c[0]+t*o*Math.cos(-a/e*2*Math.PI),c[1]+t*o*Math.sin(-a/e*2*Math.PI)*i.ellipticity,a/e*2*Math.PI])}return O[t]=n,n},D=function(){return i.abortThreshold>0&&(new Date).getTime()-g>i.abortThreshold},P=function(e,a,i,n,o){if(!(e>=s||a>=h||e<0||a<0)){if(r[e][a]=!1,i)t[0].getContext("2d").fillRect(e*p,a*p,y,y);T&&(k[e][a]={item:o,dimension:n})}},R=function e(a,n){if(n>20)return null;var o,l,u;Array.isArray(a)?(o=a[0],l=a[1]):(o=a.word,l=a.weight,u=a.attributes);var c=0===i.rotateRatio||Math.random()>i.rotateRatio?0:0===M?x:x+Math.round(Math.random()*M/S)*S,g=function(t){if(Array.isArray(t)){var e=t.slice();return e.splice(0,2),e}return[]}(a),y=function(t,e,a,n){var o=i.weightFactor(e);if(o<=i.minSize)return!1;var r,s=1;o<d&&(s=function(){for(var t=2;t*o<d;)t+=2;return t}()),r=v?v(t,e,o,n):i.fontWeight;var l=document.createElement("canvas"),f=l.getContext("2d",{willReadFrequently:!0});f.font=r+" "+(o*s).toString(10)+"px "+i.fontFamily;var u=f.measureText(t).width/s,h=Math.max(o*s,f.measureText("m").width,f.measureText("\uff37").width)/s,c=u+2*h,m=3*h,g=Math.ceil(c/p),w=Math.ceil(m/p);c=g*p,m=w*p;var y=-u/2,M=.4*-h,x=Math.ceil((c*Math.abs(Math.sin(a))+m*Math.abs(Math.cos(a)))/p),S=Math.ceil((c*Math.abs(Math.cos(a))+m*Math.abs(Math.sin(a)))/p),I=S*p,b=x*p;l.setAttribute("width",I),l.setAttribute("height",b),f.scale(1/s,1/s),f.translate(I*s/2,b*s/2),f.rotate(-a),f.font=r+" "+(o*s).toString(10)+"px "+i.fontFamily,f.fillStyle="#000",f.textBaseline="middle",f.fillText(t,y*s,(M+.5*o)*s);var T=f.getImageData(0,0,I,b).data;if(D())return!1;for(var k,C,E,A=[],O=S,F=[x/2,S/2,x/2,S/2];O--;)for(k=x;k--;){E=p;t:for(;E--;)for(C=p;C--;)if(T[4*((k*p+E)*I+(O*p+C))+3]){A.push([O,k]),O<F[3]&&(F[3]=O),O>F[1]&&(F[1]=O),k<F[0]&&(F[0]=k),k>F[2]&&(F[2]=k);break t}}return{mu:s,occupied:A,bounds:F,gw:S,gh:x,fillTextOffsetX:y,fillTextOffsetY:M,fillTextWidth:u,fillTextHeight:h,fontSize:o}}(o,l,c,g);if(!y)return!1;if(D())return!1;if(!i.drawOutOfBound&&!i.shrinkToFit){var b=y.bounds;if(b[1]-b[3]+1>s||b[2]-b[0]+1>h)return!1}for(var k=m+1,C=function(e){var n=Math.floor(e[0]-y.gw/2),d=Math.floor(e[1]-y.gh/2);y.gw,y.gh;return!!function(t,e,a,n,o){for(var l=o.length;l--;){var d=t+o[l][0],f=e+o[l][1];if(d>=s||f>=h||d<0||f<0){if(!i.drawOutOfBound)return!1}else if(!r[d][f])return!1}return!0}(n,d,0,0,y.occupied)&&(function(e,a,n,o,r,s,l,d,f,u){var h,c,m,g=n.fontSize;h=w?w(o,r,g,s,l,u):i.color,c=v?v(o,r,g,u):i.fontWeight,m=I?I(o,r,g,u):i.classes,t.forEach((function(t){if(t.getContext){var r=t.getContext("2d"),s=n.mu;r.save(),r.scale(1/s,1/s),r.font=c+" "+(g*s).toString(10)+"px "+i.fontFamily,r.fillStyle=h,r.translate((e+n.gw/2)*p*s,(a+n.gh/2)*p*s),0!==d&&r.rotate(-d),r.textBaseline="middle",r.fillText(o,n.fillTextOffsetX*s,(n.fillTextOffsetY+.5*g)*s),r.restore()}else{var l=document.createElement("span"),u="";u="rotate("+-d/Math.PI*180+"deg) ",1!==n.mu&&(u+="translateX(-"+n.fillTextWidth/4+"px) scale("+1/n.mu+")");var w={position:"absolute",display:"block",font:c+" "+g*n.mu+"px "+i.fontFamily,left:(e+n.gw/2)*p+n.fillTextOffsetX+"px",top:(a+n.gh/2)*p+n.fillTextOffsetY+"px",width:n.fillTextWidth+"px",height:n.fillTextHeight+"px",lineHeight:g+"px",whiteSpace:"nowrap",transform:u,webkitTransform:u,msTransform:u,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var v in h&&(w.color=h),l.textContent=o,w)l.style[v]=w[v];if(f)for(var y in f)l.setAttribute(y,f[y]);m&&(l.className+=m),t.appendChild(l)}}))}(n,d,y,o,l,m-k,e[2],c,u,g),function(e,a,n,o,r,l){var d,f,u=r.occupied,c=i.drawMask;if(c&&((d=t[0].getContext("2d")).save(),d.fillStyle=i.maskColor),T){var m=r.bounds;f={x:(e+m[3])*p,y:(a+m[0])*p,w:(m[1]-m[3]+1)*p,h:(m[2]-m[0]+1)*p}}for(var g=u.length;g--;){var w=e+u[g][0],v=a+u[g][1];w>=s||v>=h||w<0||v<0||P(w,v,c,f,l)}c&&d.restore()}(n,d,0,0,y,a),{gx:n,gy:d,rot:c,info:y})};k--;){var E=F(m-k);i.shuffle&&(E=[].concat(E),f(E));for(var A=0;A<E.length;A++){var O=C(E[A]);if(O)return O}}return i.shrinkToFit?(Array.isArray(a)?a[1]=3*a[1]/4:a.weight=3*a.weight/4,e(a,n+1)):null},z=function(e,a,i){if(a)return!t.some((function(t){var a=new CustomEvent(e,{detail:i||{}});return!t.dispatchEvent(a)}),this);t.forEach((function(t){var a=new CustomEvent(e,{detail:i||{}});t.dispatchEvent(a)}),this)};!function(){var e=t[0];if(e.getContext)s=Math.ceil(e.width/p),h=Math.ceil(e.height/p);else{var n=e.getBoundingClientRect();s=Math.ceil(n.width/p),h=Math.ceil(n.height/p)}if(z("wordcloudstart",!0)){var o,l,d,f,w;if(c=i.origin?[i.origin[0]/p,i.origin[1]/p]:[s/2,h/2],m=Math.floor(Math.sqrt(s*s+h*h)),r=[],!e.getContext||i.clearCanvas)for(t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=i.backgroundColor,e.clearRect(0,0,s*(p+1),h*(p+1)),e.fillRect(0,0,s*(p+1),h*(p+1))}else t.textContent="",t.style.backgroundColor=i.backgroundColor,t.style.position="relative"})),o=s;o--;)for(r[o]=[],l=h;l--;)r[o][l]=!0;else{var v=document.createElement("canvas").getContext("2d");v.fillStyle=i.backgroundColor,v.fillRect(0,0,1,1);var y,M,x=v.getImageData(0,0,1,1).data,S=e.getContext("2d").getImageData(0,0,s*p,h*p).data;for(o=s;o--;)for(r[o]=[],l=h;l--;){M=p;t:for(;M--;)for(y=p;y--;)for(d=4;d--;)if(S[4*((l*p+M)*s*p+(o*p+y))+d]!==x[d]){r[o][l]=!1;break t}!1!==r[o][l]&&(r[o][l]=!0)}S=v=x=void 0}if(i.hover||i.click){for(T=!0,o=s+1;o--;)k[o]=[];i.hover&&e.addEventListener("mousemove",E),i.click&&(e.addEventListener("click",A),e.addEventListener("touchstart",A),e.addEventListener("touchend",(function(t){t.preventDefault()})),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",E),e.removeEventListener("click",A),b=void 0}))}d=0;var I=!0;i.layoutAnimation?0!==i.wait?(f=window.setTimeout,w=window.clearTimeout):(f=window.setImmediate,w=window.clearImmediate):(f=function(t){t()},w=function(){I=!1});var C=function(e,a){t.forEach((function(t){t.removeEventListener(e,a)}),this)},O=function t(){C("wordcloudstart",t),w(u[a])};!function(e,a){t.forEach((function(t){t.addEventListener(e,a)}),this)}("wordcloudstart",O),u[a]=(i.layoutAnimation?f:setTimeout)((function t(){if(I){if(d>=i.list.length)return w(u[a]),z("wordcloudstop",!1),C("wordcloudstart",O),void delete u[a];g=(new Date).getTime();var e=R(i.list[d],0),n=!z("wordclouddrawn",!0,{item:i.list[d],drawn:e});if(D()||n)return w(u[a]),i.abort(),z("wordcloudabort",!1),z("wordcloudstop",!1),void C("wordcloudstart",O);d++,u[a]=f(t,i.wait)}}),i.wait)}}()}function L(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}};h.isSupported=l,h.minFontSize=d;const c=h;if(!c.isSupported)throw new Error("Sorry your browser not support wordCloud");i.Oh((function(t,e){t.eachSeriesByType("wordCloud",(function(a){var n=i.dw.getLayoutRect(a.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),o=a.get("keepAspect"),r=a.get("maskImage"),s=r?r.width/r.height:1;o&&function(t,e){var a=t.width,i=t.height;a>i*e?(t.x+=(a-i*e)/2,t.width=i*e):(t.y+=(i-a/e)/2,t.height=a/e)}(n,s);var l=a.getData(),d=document.createElement("canvas");d.width=n.width,d.height=n.height;var f=d.getContext("2d");if(r)try{f.drawImage(r,0,0,d.width,d.height),function(t){for(var e=t.getContext("2d"),a=e.getImageData(0,0,t.width,t.height),i=e.createImageData(a),n=0,o=0,r=0;r<a.data.length;r+=4)a.data[r+3]>128&&(n+=l=a.data[r]+a.data[r+1]+a.data[r+2],++o);var s=n/o;for(r=0;r<a.data.length;r+=4){var l=a.data[r]+a.data[r+1]+a.data[r+2];a.data[r+3]<128||l>s?(i.data[r]=0,i.data[r+1]=0,i.data[r+2]=0,i.data[r+3]=0):(i.data[r]=255,i.data[r+1]=255,i.data[r+2]=255,i.data[r+3]=255)}e.putImageData(i,0,0)}(d)}catch(p){console.error("Invalid mask image"),console.error(p.toString())}var u=a.get("sizeRange"),h=a.get("rotationRange"),m=l.getDataExtent("value"),g=Math.PI/180,w=a.get("gridSize");function v(t){var e=t.detail.item;t.detail.drawn&&a.layoutInstance.ondraw&&(t.detail.drawn.gx+=n.x/w,t.detail.drawn.gy+=n.y/w,a.layoutInstance.ondraw(e[0],e[1],e[2],t.detail.drawn))}c(d,{list:l.mapArray("value",(function(t,e){var a=l.getItemModel(e);return[l.getName(e),a.get("textStyle.fontSize",!0)||i.ai.linearMap(t,m,u),e]})).sort((function(t,e){return e[1]-t[1]})),fontFamily:a.get("textStyle.fontFamily")||a.get("emphasis.textStyle.fontFamily")||t.get("textStyle.fontFamily"),fontWeight:a.get("textStyle.fontWeight")||a.get("emphasis.textStyle.fontWeight")||t.get("textStyle.fontWeight"),gridSize:w,ellipticity:n.height/n.width,minRotation:h[0]*g,maxRotation:h[1]*g,clearCanvas:!r,rotateRatio:1,rotationStep:a.get("rotationStep")*g,drawOutOfBound:a.get("drawOutOfBound"),shrinkToFit:a.get("shrinkToFit"),layoutAnimation:a.get("layoutAnimation"),shuffle:!1,shape:a.get("shape")}),d.addEventListener("wordclouddrawn",v),a.layoutInstance&&a.layoutInstance.dispose(),a.layoutInstance={ondraw:null,dispose:function(){d.removeEventListener("wordclouddrawn",v),d.addEventListener("wordclouddrawn",(function(t){t.preventDefault()}))}}}))})),i.lP((function(t){var e=(t||{}).series;!i.ZS.isArray(e)&&(e=e?[e]:[]);var a=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];function n(t){t&&i.ZS.each(a,(function(e){t.hasOwnProperty(e)&&(t["text"+i.GP.capitalFirst(e)]=t[e])}))}i.ZS.each(e,(function(t){if(t&&"wordCloud"===t.type){var e=t.textStyle||{};n(e.normal),n(e.emphasis)}}))}))}}]);
//# sourceMappingURL=69.c82cf326.chunk.js.map