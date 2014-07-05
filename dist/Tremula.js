(function(){var e,t,n;(function(r){function v(e,t){return h.call(e,t)}function m(e,t){var n,r,i,s,o,u,a,f,c,h,p,v=t&&t.split("/"),m=l.map,g=m&&m["*"]||{};if(e&&e.charAt(0)===".")if(t){v=v.slice(0,v.length-1),e=e.split("/"),o=e.length-1,l.nodeIdCompat&&d.test(e[o])&&(e[o]=e[o].replace(d,"")),e=v.concat(e);for(c=0;c<e.length;c+=1){p=e[c];if(p===".")e.splice(c,1),c-=1;else if(p===".."){if(c===1&&(e[2]===".."||e[0]===".."))break;c>0&&(e.splice(c-1,2),c-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((v||g)&&m){n=e.split("/");for(c=n.length;c>0;c-=1){r=n.slice(0,c).join("/");if(v)for(h=v.length;h>0;h-=1){i=m[v.slice(0,h).join("/")];if(i){i=i[r];if(i){s=i,u=c;break}}}if(s)break;!a&&g&&g[r]&&(a=g[r],f=c)}!s&&a&&(s=a,u=f),s&&(n.splice(0,u,s),e=n.join("/"))}return e}function g(e,t){return function(){return s.apply(r,p.call(arguments,0).concat([e,t]))}}function y(e){return function(t){return m(t,e)}}function b(e){return function(t){a[e]=t}}function w(e){if(v(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!v(a,e)&&!v(c,e))throw new Error("No "+e);return a[e]}function E(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice,d=/\.js$/;o=function(e,t){var n,r=E(e),i=r[0];return e=r[1],i&&(i=m(i,t),n=w(i)),i?n&&n.normalize?e=n.normalize(e,y(t)):e=m(e,t):(e=m(e,t),r=E(e),i=r[0],e=r[1],i&&(n=w(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return g(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:S(e)}}},i=function(e,t,n,i){var s,l,h,p,d,m=[],y=typeof n,E;i=i||e;if(y==="undefined"||y==="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(d=0;d<t.length;d+=1){p=o(t[d],i),l=p.f;if(l==="require")m[d]=u.require(e);else if(l==="exports")m[d]=u.exports(e),E=!0;else if(l==="module")s=m[d]=u.module(e);else if(v(a,l)||v(f,l)||v(c,l))m[d]=w(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,g(i,!0),b(l),{}),m[d]=a[l]}}h=n?n.apply(a[e],m):undefined;if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!E)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){if(typeof e=="string")return u[e]?u[e](t):w(o(e,t).f);if(!e.splice){l=e,l.deps&&s(l.deps,l.callback);if(!t)return;t.splice?(e=t,t=n,n=null):e=r}return t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s},s.config=function(e){return s(e)},e._defined=a,n=function(e,t,n){t.splice||(n=t,t=[]),!v(a,e)&&!v(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}})(),n("almond",function(){}),n("Layouts",[],function(){function e(e,t){function d(){var e=0;if(i>0)for(var t=1;t<=i;t++){if(!a[e])return e;if(!a[t])return t;e=a[t]<a[e]?t:e}return e}function v(){var e=0;if(i>0)for(var t=1;t<=i;t++)e=a[t]>a[e]?t:e;return e}var n="basicGridLayout",r=this;t=t?t:{};var i=t.axes||t.staticAxisCount;i||(i=0),r.layout_cache||(r.layout_cache={lastLayoutOptions:t,lastLayoutId:n,axesLengthArr:new Array(i),lastAxesObjArr:new Array(i)});var s=e.index,o=r.itemConstraint,u=[r.itemMargins[0]*2,r.itemMargins[1]*2],a=r.layout_cache.axesLengthArr,f=r.layout_cache.lastAxesObjArr,l=e.layoutType,c=l=="tremulaBlockItem"?v():d();e.staticAxis=c;if(!f[c])e.headPointPos[r.si]=0;else{e.prevObj=f[c],e.prevObj.nextObj=e;var h=e.prevObj.tailPointPos;e.headPointPos[r.si]=h[r.si]}var p=l=="tremulaBlockItem"?0:o*c+u[r.si_]*c;e.headPointPos[r.si_]=p,e.tailPointPos=[e.headPointPos[0]+e.w+u[0],e.headPointPos[1]+e.h+u[1]],e.outerDims=[e.tailPointPos[0]-e.headPointPos[0],e.tailPointPos[1]-e.headPointPos[1]],f[c]=e,a[c]=(a[c]||0)+e.dims[r.si]}function t(e,t){var n=this;t=t?t:{};var r=t.axisCount,i=e.index;if(i==0)e.headPointPos=[0,0];else{e.prevObj=n.boxes[i-1],e.prevObj.nextObj=e;var s=e.prevObj.tailPointPos;e.headPointPos[n.si]=s[n.si];var o=s[n.si];e.headPointPos[n.si_]=o}e.tailPointPos=[20+e.headPointPos[0],e.headPointPos[1]]}return{basicGridLayout:e,stackLayout:t}}),n("Easings",[],function(){function e(e,t,n,r,i){return r*(t/i)+n}function t(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n}function n(e,t,n,r,i){return t/=i/2,t<1?r/2*t*t+n:(t--,-r/2*(t*(t-2)-1)+n)}function r(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n}function i(e,t,n,r,i){return t/=i,t--,r*(t*t*t+1)+n}function s(e,t,n,r,i){return t/=i/2,t<1?r/2*t*t*t+n:(t-=2,r/2*(t*t*t+2)+n)}function o(e,t,n,r,i){return t/=i/2,t<1?r/2*Math.pow(2,10*(t-1))+n:(t--,r/2*(-Math.pow(2,-10*t)+2)+n)}function u(e,t,n,r,i){return t/=i/2,t<1?-r/2*(Math.sqrt(1-t*t)-1)+n:(t-=2,r/2*(Math.sqrt(1-t*t)+1)+n)}function a(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i)==1)return n+r;o||(o=i*.3);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n}function f(e){return e*e*e*e*e}function l(e){return 1+ --e*e*e*e*e}return{linearOut:e,easeOutSine:t,easeInOutQuad:n,easeOutQuart:r,easeOutCubic:i,easeInOutCubic:s,easeOutElastic:a,easeInQuint_t:f,easeOutQuint_t:l}}),n("DataAdapters",[],function(){function e(e){this.data=e,this.imgUrl=e.imgUrl,this.w=e.w,this.h=e.h}function t(e,t){this.data=e,this.isLastContentBlock=e.isLastContentBlock,this.layoutType=this.data.layoutType||"tremulaInline",this.noScaling=this.data.noScaling||!1,this.isFavorite=e.isFavorite,this.auxClassList=e.auxClassList||"";var n=t.options.itemConstraint;if(e.UrlInfo){var r="http://imgc.artprintimages.com/images/P-{{w}}-{{h}}-85/"+e.UrlInfo.ImageUrl.split("/MED/")[1];t.sx?this.src=r.replace(/{{w}}/,"1000").replace(/{{h}}/,n):this.src=r.replace(/{{h}}/,"1000").replace(/{{w}}/,n),this.w=this.width=e.ImageDimensions[2].PixelWidth,this.h=this.height=e.ImageDimensions[2].PixelHeight,this.imgUrl=this.src,this.data.JudyLastNativeAspectImgURL=this.imgUrl,this.auxClassList="judyRS "+this.auxClassList}else this.w=this.width=this.data.w||100,this.h=this.height=this.data.h||100,this.imgUrl="";this.artistName="",this.artistUrl="",this.itemTitle="",this.itemPrice="";var i="",s="";e.Artist&&(i=e.Artist.FirstName||""),e.Artist&&(s=e.Artist.LastName||""),e.Artist&&(this.artistName=(i+" "+s).replace(/  /g," ").trim()||""),e.Artist&&(this.artistUrl=(e.Artist.ArtistUrl||"").replace(/gallery/g,"discover")||""),e.Title&&(this.itemTitle=e.Title||""),e.ItemPrice&&(this.itemPrice=e.ItemPrice.Price),this.artistNameTitle=this.artistName+(this.artistName&&this.itemTitle?", ":"")+this.itemTitle,this.template=this.data.template||'<img class="moneyShot" onload="imageLoaded(this)" src=""/> <div class="boxLabel">{{artistNameTitle}}</div>'.replace(/{{artistNameTitle}}/g,this.artistNameTitle).replace(/{{itemTitle}}/g,this.itemTitle);var o=t.options.itemConstraint,u=o/this[t.saDim_],a=this[t.saDim]*u,f=[a,o],l=t.options.maxWidthClassMap;if(l)for(key in l)if(f[0]<l[key]){this.auxClassList=this.auxClassList+" "+key;break}}function n(e,t){this.data=e,this.isLastContentBlock=e.isLastContentBlock||!1,this.layoutType=this.data.layoutType||"tremulaInline",this.noScaling=this.data.noScaling||!1,this.isFavorite=e.isFavorite||!1,this.auxClassList=e.auxClassList||"";var n=t.options.itemConstraint;e.url_z?(this.src=e.url_z,this.w=this.width=e.width_z,this.h=this.height=e.height_z,this.imgUrl=this.src,this.auxClassList="flickrRS "+this.auxClassList):(this.w=this.width=this.data.w||100,this.h=this.height=this.data.h||100,this.imgUrl=""),this.itemTitle=e.title||"",this.template=this.data.template||'<img class="moneyShot" onload="imageLoaded(this)" src=""/> <div class="boxLabel">{{itemTitle}}</div>'.replace(/{{itemTitle}}/g,"")}function r(e){this.imgUrl_SM=e.UrlInfo.ImageUrl,this.imgUrl_LG=e.UrlInfo.XLargeUrl,this.imgUrl_ZOOM=e.UrlInfo.ZoomUrlWithoutWatermark,this.imgUrl_SQ=e.UrlInfo.CroppedSquareImageUrl,this.data=e,this.w=this.width=100,this.h=this.height=100,this.imgUrl=this.imgUrl_SQ,this.data.JudyLastNativeAspectImgURL=null}return{TremulaItem:e,flickrSearch:n,JudyItem:t,JudyItem_SQ:r}}),n("Projections",[],function(){function f(e,t){var n=[{x:e[3].x*t[0],y:e[3].y*t[1]},{x:e[2].x*t[0],y:e[2].y*t[1]},{x:e[1].x*t[0],y:e[1].y*t[1]},{x:e[0].x*t[0],y:e[0].y*t[1]}];return n}function l(e,t){var n=s,r=this.parent.gridDims[0],i=this.parent.gridDims[1],o=this.parent.currentGridContentDims,u=this.waves.tailRamp,a=this.waves.headRamp,l=this.waves.triangle,c,h,p,d=[r,i],v=f(n,d),m=jsBezier.pointOnCurve(v,a),g=jsBezier.gradientAtPoint(v,a),h=r-this.outerDims[0]*.5-m.x,p=m.y-this.dims[1]*.5+t-(o[1]-this.dims[1])*.5-this.itemMargins[1],y=Math.min(-400,(1-l)*-1e3);this.e.style.webkitTransformOrigin="50%",this.e.style.MozTransformOrigin="50%",this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+h+"px,"+p+"px, "+y+"px)"+" rotateY("+(u*180-90)+"deg)",this.e.style.opacity=Math.min(1,l*2-.5),this.pPos=[e,t]}function c(e,t){var n=o,r=this.parent.gridDims[0],i=this.parent.gridDims[1],s=this.parent.currentGridContentDims,u=this.waves.tailRamp,a=this.waves.headRamp,l=this.waves.triangle,c,h,p,d=[r,i],v=f(n,d),m=jsBezier.pointOnCurve(v,a),g=jsBezier.gradientAtPoint(v,a),h=r-this.outerDims[0]*.5-m.x,p=m.y-this.dims[1]*.5+t-(s[1]-this.dims[1])*.5-this.itemMargins[1],y=Math.max(-800,l*-1e3);this.e.style.webkitTransformOrigin="50%",this.e.style.MozTransformOrigin="50%",this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+h+"px,"+p+"px, "+y+"px)"+" rotateY("+(a*180-90)+"deg)",this.e.style.opacity=Math.min(1,l*2-.5),this.pPos=[e,t]}function h(e,t){var n=r,i=this.parent.gridDims[0],s=this.parent.gridDims[1],o=this.waves.tailRamp,u=this.waves.headRamp,a=this.waves.triangle,l,c,h,p=[i,s],d=f(n,p),v=jsBezier.pointOnCurve(d,u),m=jsBezier.gradientAtPoint(d,u),c=i-this.outerDims[0]*.5-v.x,h=t+this.itemMargins[1]+(s-this.outerDims[1]*.5)-v.y;this.e.style.webkitTransformOrigin="50%",this.e.style.MozTransformOrigin="50%",this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+c+"px,"+h+"px, 0)"+" rotateZ("+m*60+"deg)",this.e.style.opacity=1,this.pPos=[e,t]}function p(e,t){var s=1e3,o=this.parent.gridDims[0],u=this.parent.gridDims[1],a=this.parent.currentGridContentDims,l=this.waves.tailRamp,c=this.waves.headRamp,h=this.waves.triangle,p,d,v,m=[o,u],g=o<s?o<641?n:r:i,y=f(g,m),b=jsBezier.pointOnCurve(y,c),w=jsBezier.gradientAtPoint(y,c),d=o-this.outerDims[0]*.5-b.x,v=b.y-this.dims[1]*.5+t-(a[1]-this.dims[1])*.5-this.itemMargins[1];this.e.style.webkitTransformOrigin="50%",this.e.style.MozTransformOrigin="50%",this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+d+"px,"+v+"px, 0)"+" rotateZ("+w*-60+"deg)",this.e.style.opacity=1,this.pPos=[e,t]}function v(e,t){var n=d,r=this.parent.gridDims[0],i=this.parent.gridDims[1],s=this.parent.currentGridContentDims,o=this.waves.tailRamp,u=this.waves.headRamp,a=this.waves.triangle,l,c,h,p=[r,i],v=f(n,p),m=jsBezier.pointOnCurve(v,u),g=jsBezier.gradientAtPoint(v,u),c=r-this.outerDims[0]*.5-m.x,h=m.y-this.dims[1]*.5+t-(s[1]-this.dims[1])*.5-this.itemMargins[1],y=0;this.e.style.webkitTransformOrigin="50%",this.e.style.MozTransformOrigin="50%",this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+c+"px,"+h+"px, "+y+"px)";var b=1e6-this.index;this.e.style.zIndex=b,this.e.style.opacity=1,this.pPos=[e,t]}function m(e,t){var n=u,r=this.parent.gridDims,i=this.parent.currentGridContentDims,s=this.waves.tailRamp,o=this.waves.headRamp,a=this.waves.triangle,l,c,h,p=[r[0],r[1]],d=f(n,p),v=jsBezier.pointOnCurve(d,o),m=jsBezier.gradientAtPoint(d,o),c=r[0]-this.outerDims[0]*.5-v.x,h=v.y-this.dims[1]*.5*(this.parent.staticAxisCount+1)+t-this.parent.itemMargins[1]*this.parent.staticAxisCount,g=0;this.e.style.webkitTransformOrigin=this.e.style.MozTransformOrigin="50%",this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+c+"px,"+h+"px, "+g+"px)";var y=1e6-this.index;this.e.style.zIndex=y,this.e.style.opacity=1,this.pPos=[e,t]}function g(e,t){var n=a,r=this.parent.staticAxisCount+1,i=this.parent.gridDims,s=this.parent.currentGridContentDims,o=this.waves.tailRamp,u=this.waves.headRamp,l=this.waves.triangle,c,h,p,d=[i[0],i[1]],v=f(n,d),m=jsBezier.pointOnCurve(v,u),g=jsBezier.gradientAtPoint(v,u),h=m.x-this.dims[0]*.5*r+e-this.parent.itemMargins[0]*this.parent.staticAxisCount,p=i[1]-this.outerDims[1]*.5-m.y,y=0;this.e.style.webkitTransformOrigin=this.e.style.MozTransformOrigin="50%",this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+h+"px,"+p+"px, "+y+"px)";var b=1e6-this.index;this.e.style.zIndex=b,this.e.style.opacity=1,this.pPos=[e,t]}function y(e,t){var n=this.waves,r=n.tailRamp,i=n.headRamp,s=n.triangle,o,u;o=e,u=t,this.e.style.webkitTransformOrigin="50%",this.e.style.MozTransformOrigin="50%",this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+o+"px,"+u+"px, 0) ",this.e.style.opacity=1,this.pPos=[e,t]}function b(e,t){var n=this.waves,r=n.tailRamp,i=n.headRamp,s=n.triangle,o,u;o=e,u=t,this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+o+"px,"+u+"px, 0) "+"scale("+(s*1+.4)+")",this.e.style.opacity=s,this.pPos=[e,t]}var e={},t=[{x:0,y:0},{x:.1,y:.5},{x:0,y:.01},{x:1,y:0}],n=[{x:0,y:.57},{x:.33,y:.5},{x:.66,y:.5},{x:1,y:.57}],r=[{x:0,y:.65},{x:.33,y:.5},{x:.66,y:.5},{x:1,y:.65}],i=[{x:0,y:.8},{x:.33,y:.5},{x:.66,y:.5},{x:1,y:.8}],s=[{x:0,y:.5},{x:.45,y:.5},{x:.55,y:.5},{x:1,y:.5}],o=[{x:-0.1,y:.5},{x:.6,y:.5},{x:.4,y:.5},{x:1.1,y:.5}],u=[{x:0,y:.5},{x:.33,y:.5},{x:.66,y:.5},{x:1,y:.5}],a=[{x:.5,y:0},{x:.5,y:.33},{x:.5,y:.66},{x:.5,y:1}];e.turntable=l,e.enterTheDragon=c,e.sunrise=h,e.mountain=p;var d=[{x:0,y:.5},{x:.1,y:.5},{x:.1,y:.5},{x:1,y:.5}];return e.headExpansion=v,e.centerLinear=m,e.pinterest=g,e.xyPlane=y,e.xyBumpTaper=b,e}),n("Animator",[],function(){var e=function(e){e||(e={});var t=e.parent;return this.resetAnimation=function(){this.easingCurve=e.easingCurve,this.easeToDuration=e.easeTime||500,this.isEasing=!1,this.activeDuration=0,this.easingProgress=this.activeDuration,this.easeFactor=0,this.easingStartTime=0,this.easeToStart=0,this.easeToDiff=0,e.parent.isEasing=!1},this.animateFrTo=function(t,n,r,i){r=r==undefined?this.easeToDuration:r,i&&(this.easingCurve=i);var s=r,o=t-n;this.easeToDiff=-1*o,this.isEasing=!0,this.activeDuration=s,this.easingStartTime=new Date,this.easingProgress=0,e.parent.isEasing=!0},this.getNextFrameDiff=function(){var e=this.easingProgress<this.activeDuration;e?(this.easingProgress=new Date-this.easingStartTime,this.easeFactor=this.easingCurve(null,this.easingProgress,0,1,this.activeDuration)):this.resetAnimation();var t=this.easeToDiff*(1-this.easeFactor);return t},this.resetAnimation(),{isEasing:function(){return this.isEasing},resetAnimation:this.resetAnimation,animateFrTo:this.animateFrTo,getNextFrameDiff:this.getNextFrameDiff}};return e}),n("Box",["Easings","Animator"],function(e,t){var n=function(n){this.parent=n;var r=this;this.ezEnabled=function(){return this.parent.itemEasing},this.ezOptions=this.parent.options.itemEasingParams,this.doPreloading=this.parent.options.itemPreloading,this.getlayoutXansEasing=function(){return this.parent.layoutXansEasing},this.getLayoutIsXing=function(){return this.parent.layoutIsXing},this.getLayoutXingMs=function(){return this.parent.layoutXansMs},this.springLimit=this.parent.springLimit,this.itemMargins=this.parent.itemMargins,this.index=null,this.x=this.y=0,this.dims=[0,0],this.outerDims=[0,0],this.staticAxis=0,this.headPointPos=[0,0],this.tailPointPos=[0,0],this.pPos=[0,0],this.prevObj=null,this.nextObj=null,this.targetPaintPos=[0,0],this.currentPaintPos=[0,0],this.targetXY=[0,0],this.currentXY=[0,0],this.sizeRatio=0,this.displayClass="",this.isOnScreen=!1,this.isLoaded=!1,this.hasEntered=!1,this.ani_si=new t({easingCurve:e.easeOutCubic,parent:this}),this.ani_si_=new t({easingCurve:e.easeOutCubic,parent:this}),this.element=this.e=document.createElement("div"),this.$e=$(this.e),this.element.classList.add("gridBox"),this.e.style.display="none",this.model={},this.setModel=function(e){this.model=e,this.model.data.getNextJudyItem=function(){var e=n.getBoxFromIndex(r.index+1);return e&&e.model&&(e=e.model.data),e},this.model.data.getPrevJudyItem=function(){var e=n.getBoxFromIndex(r.index-1);return e&&e.model&&(e=e.model.data),e},this.layoutType=e.layoutType||"tremulaInLine",this.noScaling=e.noScaling||!1,this.e.innerHTML.trim()==""&&(this.model.template?this.e.innerHTML=this.model.template:this.e.innerHTML='<div class="boxLabel">X</div><img class="moneyShot" onload="imageLoaded(this)" src=""/>',this.$moneyShot=$(".moneyShot",this.$e),this.$c=$(".boxLabel",this.e)),this.$e.data("model",this),e.auxClassList&&this.$e.addClass(e.auxClassList),e.isLastContentBlock&&this.$e.addClass("isLastContentBlock"),e.isFavorite?this.$e.addClass("isFavorite"):this.$e.removeClass("isFavorite")}};return n.prototype.updateContent=function(){this.$c.length&&this.$c.html(this.index+"<br/>"+this.waves.headRamp.toFixed(3))},n.prototype.setDimensions=function(e,t){this.e.style.width=e+"px",this.e.style.height=t+"px",this.dims[0]=this.width=this.w=e,this.dims[1]=this.height=this.h=t,this.sizeRatio=t/e,this.displayClass=this.getDisplayClass(this.sizeRatio),this.$moneyShot.css({width:this.w,height:this.h})},n.prototype.getDisplayClass=function(e){return e>1.1?"portrait":e<.9?"landscape":"square"},n.prototype.paintToSurfaceMap=function(e,t){this.parent.surfaceMap.call(this,e,t)},n.prototype.remove=function(){this.parent.e.removeChild(this.e)},n.prototype.doOnScreen=function(e){if(e!=undefined&&this.isOnScreen!==e){this.isOnScreen=e,e&&!this.isLoaded&&this.$moneyShot.attr("src",this.model.imgUrl);var t=this.e.classList,n=this.e.style.display;e?(this.hasEntered||(this.hasEntered=!0,setTimeout(function(){t.add("hasEntered")},10)),this.e.style.display="block",setTimeout(function(){t.add("onScreen")},10)):(this.e.style.display="none",t.remove("onScreen")),this.isLoaded=!0}return this.isOnScreen},n.prototype.setWaveforms=function(e){this.waves=e},n.prototype.getSaEvtStats=function(){var e=this.parent.si,t=this.pPos[e],n=t+this.outerDims[e]*.5,r=this.parent.saEventPos,i=n-r;return{d:i,dPercent:i/this.parent.gridDims[e],isOnEvtPos:r>=t&&r<=t+this.outerDims[e]?!0:!1}},n.prototype.setAbsPos=function(e,t){if(!this.ezEnabled()&&!this.getLayoutIsXing()){this.currentXY[0]=e,this.x=e,this.currentXY[1]=t,this.y=t;return}var n=this.isOnSaEvt,r=this.getSaEvtStats();this.isOnSaEvt=r.isOnEvtPos,this.saEvtDistance=r.d,this.saEvtDistPercent=r.dPercent;var i=r.dPercent,s=Math.abs(i)<.09,o=5*(1-this.parent.easingPercent),u=this.parent.si,a=this.parent.si_,f=u?t:e,l=a?t:e,c=f>this.targetXY[u]+o||f<this.targetXY[u]-o||s?1:0,h=l>this.targetXY[a]+o||l<this.targetXY[a]-o||s?1:0;if(f!=this.targetXY[u]&&c||l!=this.targetXY[a]&&h){this.targetXY=[e,t];var p,d;this.getLayoutIsXing()?(p=this.getlayoutXansEasing(),d=this.getLayoutXingMs()):this.parent.isTouching?(p=this.ezOptions.touchCurve,d=this.ezOptions.easeTime):(p=this.ezOptions.swipeCurve,d=this.ezOptions.easeTime),this.currentXY[0]==0&&this.currentXY[1]==0&&(this.currentXY[0]=e,this.currentXY[1]=t),this.ani_si.animateFrTo(this.currentXY[u],this.targetXY[u],d,p),this.ani_si_.animateFrTo(this.currentXY[a],this.targetXY[a],d,p)}var v=this.ani_si.getNextFrameDiff();Math.abs(v)>.001?this.currentXY[u]=this.targetXY[u]-v:this.currentXY[u]=this.targetXY[u];var m=this.ani_si_.getNextFrameDiff();Math.abs(m)>.001?this.currentXY[a]=this.targetXY[a]-v:this.currentXY[a]=this.targetXY[a];var g=Math.min(Math.abs(i),1),y=this.springLimit,b=this.targetXY[u]+y*g,w=this.targetXY[u]-y*g,E=this.targetXY[a]+y*g,S=this.targetXY[a]-y*g;this.currentXY[u]>b&&(this.currentXY[u]=b),this.currentXY[u]<w&&(this.currentXY[u]=w),this.currentXY[a]>E&&(this.currentXY[a]=E),this.currentXY[a]<S&&(this.currentXY[a]=S),this.x=this.currentXY[0],this.y=this.currentXY[1]},n}),n("Grid",["Easings","Box","Layouts"],function(e,t,n){function h(e){var t=this;s=new Date;if(!i){i=!0;var n=setInterval(function(){var e=new Date;e-s>100&&(i=!1,t.handleGesture({type:"release"}),clearInterval(n))},65)}}var r=function(t,n,r){this.physicsLoopRAF=null,this.options=n,this.$e=t,this.e=t[0],this.parent=r,this.parentParentE=t.parent(),this.statsCache={},this.onChangePub=n.onChangePub,this.surfaceMap=function(){},this.setSurfaceMap=function(e){this.surfaceMap=e},this.setSurfaceMap(n.surfaceMap),this.boxCount=0,this.boxes=[],this.springLimit=n.itemEasingParams.springLimit,this.boxAxisLengths=[0,0],this.currentGridContentDims=[0,0],this.trailingEdgeScrollPos=null,this.scrollAxisOffset=n.scrollAxisOffset,this.staticAxisOffset=n.staticAxisOffset,this.axisOffset=[],this.gridDims=[],this.scrollPos=0,this.absScrollPos=0;var i=0,s=0;this.setScrollPos=function(e,t){this.scrollPos=t?this.scrollPos+e:e},this.setAbsScrollPos=function(e,t){return this.scrollPos=t?this.scrollPos+e:this.firstItemPos+e,this.scrollPos},this.getScrollViewDim=function(){return this.gridDims[this.si]},this.getScrollDimCenter=function(){return this.gridDims[this.si]/2},this.getScrollPos=function(){return this.scrollPos},this.saEventPos=null,this.saEventPosProgress=0,this.easingPercent=100,this.isEasing=!1,this.isEasingTo=!1,this.marginScrollWarp=!1,this.easeToThresh=2,this.easingProgress=0,this.easingStartTime=0,this.schwingBackDuration=500,this.schwingEasingFn=e.easeOutCubic,this.easingDuration=1800,this.easeToDuration=300,this.activeDuration=this.easingDuration,this.easeToStart=0,this.easeToEnd=0,this.easeToDiff=0,this.dMomentum=100,this.momentum=0,this.momentumLimit=150,this.mouseWheelReleaseTime=100,this.isLooping=n.isLooping||!1,this.isTouching=!1,this.hasData=!1,this.isInTailMargin=!1,this.isInHeadMargin=!1,this.hasShortGridDimsSi=!1,this.hasMediumGridDimsSi=!1,this.scrollDirection=0,this.itemMargins=n.itemMargins,this.itemConstraint=n.itemConstraint,this.staticAxisCount=n.staticAxisCount,this.scrollMarginFactor=10,this.scrollMargin=[0,0],this.firstItemPos=0,this.frameCtr=0,this.frameRateLog=[],this.frameRate=0,this.lastFrameTime=new Date,this.trackFrameRate=function(){var e,t=new Date;this.frameRateLog.push(t-this.lastFrameTime),this.frameRateLog.length>100&&this.frameRateLog.shift(),e=this.frameRateLog.reduce(function(e,t){return e+t}),this.frameRate=1e3/(e/100),this.lastFrameTime=t},this.lastSPL=0,this.splReleaseTime=500,this.fastScrollThresh=20,this.itemEasing=n.itemEasing,this.setItemEasing=function(e){this.itemEasing=e?!0:!1},this.isChildEasing=!1,this.lastSelected=null,this.getBoxFromIndex=function(e){return this.boxes[e]},this.getLastBoxFromIndex=function(){return this.boxes[this.boxes.length-1]},this.setScrollAxis=function(e){e||(e=this.sa),this.sa=e=="y"?"y":"x",this.SA=this.sa.toUpperCase(),this.sx=this.sa=="x",this.si=this.sx?0:1,this.si_=this.sx?1:0,this.saDim=this.sx?"width":"height",this.saDim_=this.sx?"height":"width",this.gridDims[0]=this.$e.width(),this.gridDims[1]=this.$e.height(),this.axisOffset[0]=this.sx?this.scrollAxisOffset:this.staticAxisOffset,this.axisOffset[1]=this.sx?this.staticAxisOffset:this.scrollAxisOffset,this.scrollPos==undefined&&(this.scrollPos=0),this.lastScrollPos=0,this.lastScrollDiff=0,this.bounceMarginDefault=50,this.bounceMargin=this.bounceMarginDefault,this.trailingEdgeScrollPos&&(this.trailingEdgeScrollPos=this.getTrailingEdgeScrollPos())},this.lastUserEvent={time:new Date,evt:"init"},this.tagLastUserEvent=function(e){this.lastUserEvent={time:new Date,evt:e}},this.resetEasing(),this.setScrollAxis(n.scrollAxis)};r.prototype.updateConfig=function(e,t){e.hasOwnProperty("axes")&&(e.staticAxisCount=e.axes),$.extend(this,e),this.resetAllItemConstraints(),t&&this.setLayout(null,e)},r.prototype.toggleScrollAxis=function(e){this.jumpToScrollProgress(0),e||(e=this.sa=="x"?"y":"x"),this.setScrollAxis(e),this.resetAllItemConstraints();var t=this;setTimeout(function(){t.setLayout(n.basicGridLayout,{axes:t.staticAxisCount})},100),this.setLayout(n.basicGridLayout,{axes:this.staticAxisCount})},r.prototype.toggleIsLooping=function(e){typeof e=="undefined"&&(e=!this.isLooping),this.isLooping=e},r.prototype.setLastTouchOrigin=function(e){if(!this.itemEasing)return;if(this.marginScrollWarp)return;if(!e)return;var t=isNaN(e)?this.getPageSA_evt(e):e,n=t/this.gridDims[this.si];return this.saEventPos=t,this.saEventPosProgress=n,{saEventPos:t,saEventPosProgress:n}},r.prototype.getScrollFrame=function(){this.frameCtr++,this.isEasing=this.easingProgress<this.activeDuration;var t=0;if(this.isEasing)this.easingProgress=new Date-this.easingStartTime,t=easingFn(null,this.easingProgress,0,1,this.activeDuration),this.easingPercent=Math.min(1,this.easingProgress/this.activeDuration);else{this.resetEasing();var n=new Date;!this.isChildEasing&&n-this.lastSPL>this.splReleaseTime&&this.stopPhysicsLoop()}if(this.isEasingTo){var r=this.easeToDiff*(1-t);this.setScrollPos(this.easeToEnd-r)}else{var r=this.momentum*(1-t);r!=0&&this.setScrollPos(this.scrollPos+r)}this.isInTailMargin=!1,this.isInHeadMargin=!1;var i=this.lastScrollPos-this.scrollPos;this.lastScrollDiff=i;if(!this.isLooping&&this.scrollPos>this.firstItemPos||this.hasShortGridDimsSi&&this.absScrollPos>2)this.isInHeadMargin=!0,i<0?(this.setLastTouchOrigin(0),this.marginScrollWarp=!0,this.isEasing&&this.activeDuration-this.easingProgress>this.easeToDuration&&(this.activeDuration=this.easeToDuration)):i>0&&(this.marginScrollWarp=!1),this.scrollPos>this.bounceMargin+this.firstItemPos&&(this.setScrollPos(this.bounceMargin+this.firstItemPos),this.resetEasing()),!this.isTouching&&!this.isEasing&&this.easeTo(this.firstItemPos-1,this.schwingBackDuration,this.schwingEasingFn);!this.isLooping&&this.scrollPos<this.trailingEdgeScrollPos&&(this.isInTailMargin=!0,i>0?(this.setLastTouchOrigin(this.gridDims[this.si]),this.marginScrollWarp=!0,this.activeDuration-this.easingProgress>this.easeToDuration&&(this.activeDuration=this.easeToDuration)):i<0&&(this.marginScrollWarp=!1),this.scrollPos<this.trailingEdgeScrollPos-this.bounceMargin&&(this.setScrollPos(this.trailingEdgeScrollPos-this.bounceMargin),this.resetEasing()),!this.isTouching&&!this.isEasing&&this.easeTo(this.trailingEdgeScrollPos+1,this.schwingBackDuration,this.schwingEasingFn)),!this.isInHeadMargin&&!this.isInTailMargin&&(this.marginScrollWarp=!1);if((this.hasShortGridDimsSi||this.marginScrollWarp)&&!this.isEasing){var s;(this.hasShortGridDimsSi||this.hasMediumGridDimsSi)&&this.absScrollPos>0?s=this.absScrollPos:this.scrollPos>0?s=this.scrollPos-this.firstItemPos:s=-(this.scrollPos-this.trailingEdgeScrollPos);var o=Math.min(1,s/this.bounceMargin),u=Math.min(1,e.easeOutQuart(null,o,0,1,1));this.setScrollPos(i*u,!0)}return i>0?this.scrollDirection=1:i<0?this.scrollDirection=-1:this.scrollDirection=0,this.lastScrollPos=this.scrollPos,this.absScrollPos=-(this.scrollPos-this.firstItemPos),this.scrollProgress=this.absScrollPos/this.absTrailingEdgeScrollPos,this.trackFrameRate(),this.onChangePub&&this.onChangePub(this),this.scrollPos},r.prototype.startPhysicsLoop=function(){this.lastSPL=new Date;if(!this.physicsLoopRAF){var e=this;this.physicsLoopRAF=requestAnimationFrame(function(){e.assignBoxObjects()})}},r.prototype.stopPhysicsLoop=function(){this.physicsLoopRAF&&(cancelAnimationFrame(this.physicsLoopRAF),this.physicsLoopRAF=null)},r.prototype.oneShotPaint=function(e){if(!e)return;this.setLastTouchOrigin(e),this.isEasing&&this.resetEasing(),this.startPhysicsLoop()},r.prototype.getPageSA_evt=function(e){return!e||!e.gesture?null:e.gesture.center["page"+this.SA]},r.prototype.jumpObjTo=function(e,t,n){this.resetEasing(),t||(t=0),isNaN(t)||(t=this.getBoxFromIndex(t)),e>this.firstItemPos&&(e=this.firstItemPos),e<this.trailingEdgeScrollPos&&(e=this.trailingEdgeScrollPos);var r=t.headPointPos[this.si]+t.width*.5;this.setAbsScrollPos(e-r),this.startPhysicsLoop()},r.prototype.jumpToScrollProgress=function(e){e>1&&(e=.999),e<0&&(e=.001),this.setAbsScrollPos(-this.absTrailingEdgeScrollPos*e),this.startPhysicsLoop()},r.prototype.easeTo=function(e,t,n){t=t==undefined?this.easeToDuration:t,n&&(easingFn=n),e>this.firstItemPos&&(e=this.firstItemPos),e<this.trailingEdgeScrollPos&&(e=this.trailingEdgeScrollPos),this.momentum=0,this.easingPercent=0,this.isEasingTo=!0,this.activeDuration=t,this.easingStartTime=new Date,this.easingProgress=0,this.easeToStart=this.scrollPos,this.easeToEnd=e,this.easeToDiff=-1*(this.easeToStart-this.easeToEnd);if(this.easeToDiff<2&&this.easeToDiff>-2)return!1;this.startPhysicsLoop()},r.prototype.resetEasing=function(){easingFn=e.easeOutCubic,this.easingProgress=this.activeDuration,this.isEasingTo=!1,this.isEasing=!1,this.easeToDiff=0,this.momentum=0},r.prototype.startEasing=function(e,t){e&&(e=Math.pow(e,3)*20);if(this.isInHeadMargin||this.isInTailMargin)return;e!=undefined&&(this.momentum=Math.min(Math.max(e,-this.momentumLimit),this.momentumLimit)),this.isEasing=!0,this.easingStartTime=new Date,this.easingProgress=0,this.activeDuration=this.easingDuration,this.startPhysicsLoop()},r.prototype.initBoxes=function(e,r,i){try{e.length}catch(s){return console&&console.log("initBoxes(): No data found.")}r||(r=this.options.adapter);var o=this.options.lastContentBlock;i||($.each(this.boxes,function(e,t){t.remove()}),this.boxes=[],this.boxCount=0,o&&e.splice(0,0,o));if(!e)return;var u=this.boxCount,a=this.boxCount+=e.length;for(var f=u;f<a;f++){var l=new t(this);l.setModel(new r(e[f-u],this));var c=l.noScaling?[l.model[this.saDim],l.model[this.saDim_]]:this.getConstrainedItemDims(l);l.setDimensions(c[this.si],c[this.si_]),o&&f>0?this.boxes.splice(-1,0,l):i=="insert"?this.boxes.splice(0,0,l):this.boxes.push(l),this.e.appendChild(l.e)}this.setLayout(n.basicGridLayout,{axes:this.staticAxisCount,isNewSet:u==0?!0:!1})},r.prototype.resetAllItemConstraints=function(){var e=this.boxCount;for(var t=0;t<e;t++){var n=this.boxes[t],r=this.getConstrainedItemDims(n);n.setDimensions(r[this.si],r[this.si_])}},r.prototype.getConstrainedItemDims=function(e){var t=this.itemConstraint,n=t/e.model[this.saDim_],r=e.model[this.saDim]*n,i=[r,t];return i},r.prototype.setLayout=function(e,t){var n=this.lastLayoutOptions&&this.lastLayoutOptions.options||{};if(!e&&(!this.lastLayoutOptions||!this.lastLayoutOptions.layout))return;if(!t&&(!this.lastLayoutOptions||!this.lastLayoutOptions.options))return;e||(e=this.lastLayoutOptions.layout),$.extend(n,t),this.lastLayoutOptions={layout:e,options:n},this.layout_cache&&delete this.layout_cache,this.hasShortGridDimsSi=!1,this.hasMediumGridDimsSi=!1,this.boxAxisLengths=[0,0];var r,i=this.boxCount;for(var s=0;s<i;s++)r=this.getBoxFromIndex(s),r.index=s,e.call(this,r,n),s==0&&(this.scrollMargin=[-r.width*this.si_*this.scrollMarginFactor,-r.height*this.si*this.scrollMarginFactor],this.firstItemPos=this.sx?r.width*this.scrollMarginFactor:r.height*this.scrollMarginFactor,this.bounceMargin=this.firstItemPos+this.bounceMarginDefault);if(!r){this.hasData=!1,console&&console.error&&console.error("tremula: no data found");return}this.hasData=!0,this.boxAxisLengths[0]<r.tailPointPos[0]&&(this.boxAxisLengths[0]=r.tailPointPos[0]),this.boxAxisLengths[1]<r.tailPointPos[1]&&(this.boxAxisLengths[1]=r.tailPointPos[1]);var o=-2*parseInt(this.scrollMargin),u=this.gridDims[this.si]+o;this.boxAxisLengths[this.si]<this.gridDims[this.si]&&(this.hasShortGridDimsSi=!0),this.hasShortGridDimsSi&&this.boxAxisLengths[this.si]<u&&(this.boxAxisLengths[this.si]=u),this.trailingEdgeScrollPos=-this.scrollAxisOffset+Math.min(this.gridDims[this.si],this.getTrailingEdgeScrollPos()),this.absTrailingEdgeScrollPos=this.firstItemPos-this.trailingEdgeScrollPos,!this.hasShortGridDimsSi&&this.boxAxisLengths[this.si]<u&&(this.hasMediumGridDimsSi=!0,this.boxAxisLengths[this.si]=u),this.currentGridContentDims[this.si]=this.boxAxisLengths[this.si],this.currentGridContentDims[this.si_]=(this.staticAxisCount+1)*(this.itemConstraint+this.itemMargins[this.si_]*2),n.isNewSet&&this.setAbsScrollPos(1),this.oneShotPaint(1)},r.prototype.doTransition=function(e,t,n,r,i){t=t?t:{},isNaN(n)&&(n=0),this.layoutXansEasing=r||easeOutElastic,this.layoutXansMs=n,this.layoutIsXing=n>0?!0:!1;var s=this;this.ltTimer=setTimeout(function(){s.layoutIsXing=!1,s.ltTimer=null},n+100),i&&this.setSurfaceMap(i),this.updateConfig(t),this.setLayout(e,t),this.oneShotPaint(1)},r.prototype.getTrailingEdgeScrollPos=function(){return-this.boxAxisLengths[this.si]+this.firstItemPos+this.gridDims[this.si]},r.prototype.assignBoxObjects=function(){function e(e){return e[this.sa]>=l[o]&&e[this.sa]<=this.boxAxisLengths[o]+l[o]?!0:!1}function t(e){return f[o]>=-(l[0]+e.width+this.itemMargins[o]*2)&&f[o]<=this.gridDims[o]-l[o]?!0:!1}function n(e){return e>=0?e:Math.abs(this.boxAxisLengths[o]+e)}var r=!1,i=this,s=this.getScrollFrame(),o=this.si,u=this.si_,a=[0,0],f=[0,0],l=this.scrollMargin;for(var c=0;c<this.boxCount;c++){var h=this.boxes[c];a[o]=h.headPointPos[o]+s,a[u]=h.headPointPos[u],h.setAbsPos(this.axisOffset[0]+a[0],this.axisOffset[1]+a[1]),f[0]=this.sx?h.x%this.boxAxisLengths[0]:h.x,f[1]=this.sx?h.y:h.y%this.boxAxisLengths[1],f[o]=n.call(this,f[o]);var p=f[o]+l[o]+h.dims[o]*.5+this.itemMargins[o],d=p/this.gridDims[o],v=1-d,m=2*(d<.5?d:v);t.call(this,h)&&(this.isLooping||e.call(this,h))?(h.doOnScreen(!0),h.setWaveforms({tailRamp:d,headRamp:v,triangle:m}),h.paintToSurfaceMap(f[0]+l[0],f[1]+l[1])):(h.doOnScreen(!1),h.setWaveforms({tailRamp:!1,headRamp:!1,triangle:!1})),h.isEasing&&(r=!0)}this.isChildEasing=r?!0:!1,this.physicsLoopRAF!==null&&(this.physicsLoopRAF=requestAnimationFrame(function(){i.assignBoxObjects()}))};var i=!1,s=new Date,o=new Date,u="",a=0,f=0,l=0,c=0;return r.prototype.handleGesture=function(e){switch(e.type){case"mousewheel":case"DOMMouseScroll":case"wheel":h.call(this,e);case"_mw":var t=e.originalEvent,n=t.wheelDeltaY*.5||-t.deltaY||-t.detail*3,r=t.wheelDeltaX*.5||-t.deltaX||-t.detail*3,i=this.scrollPos+this.sx?r:n,s=this.trailingEdgeScrollPos,o=!this.hasMediumGridDimsSi&&i>this.firstItemPos,u=!this.hasMediumGridDimsSi&&i<s;!this.isLooping&&(o||u)&&(this.sx?r=Math.min(r*.1,100):n=Math.min(n*.1,100)),e.gesture=e.gesture||{},e.gesture.deltaX=r,e.gesture.deltaY=n,e.gesture.center=e.gesture.center||{},e.gesture.center.pageX=e.originalEvent.pageX,e.gesture.center.pageY=e.originalEvent.pageY;case"dragup":case"dragdown":case"dragright":case"dragleft":this.isTouching=!0;if(a==0||e.originalEvent)a=this.scrollPos,l=0;if(f==0||e.originalEvent)f=this.parentParentE.scrollTop,c=0;var p=this.sx?e.gesture.deltaX:e.gesture.deltaY,d=this.sx?e.gesture.deltaY:e.gesture.deltaX;if(Math.abs(p)>Math.abs(d))this.setScrollPos(p-l,!0),l=p,this.oneShotPaint(e);else{var v=this.parentParentE.scrollTop;this.parentParentE.scrollTop(v-(d-c)),c=d}this.tagLastUserEvent(e);break;case"swipeleft":if(!this.sx)return;e.gesture.stopDetect(),this.isTouching=!1;var m=-e.gesture.velocityX;this.startEasing(m,e),this.tagLastUserEvent(e);break;case"swiperight":if(!this.sx)return;e.gesture.stopDetect(),this.isTouching=!1;var m=e.gesture.velocityX;this.startEasing(m,e),this.tagLastUserEvent(e);break;case"swipeup":if(this.sx)return;e.gesture.stopDetect(),this.isTouching=!1;var m=-e.gesture.velocityY;this.startEasing(m,e),this.tagLastUserEvent(e);break;case"swipedown":if(this.sx)return;e.gesture.stopDetect(),this.isTouching=!1;var m=e.gesture.velocityY;this.startEasing(m,e),this.tagLastUserEvent(e);break;case"touch":a=0,f=0,this.isTouching=!0,this.oneShotPaint(e),this.tagLastUserEvent(e);break;case"release":var g=new Date-this.lastUserEvent.time;!this.isEasing&&this.lastUserEvent.evt.type=="touch"&&g<1e3&&this.$e.trigger("tremulaItemSelect",e),this.isTouching=!1,this.oneShotPaint(),this.tagLastUserEvent(e)}},r}),e.config({baseUrl:"src"}),n("Tremula",["Layouts","Easings","DataAdapters","Projections","Grid"],function(e,t,n,r,i){function o(e){var t=$(e);if(t.hasClass("loaded"))return;t.addClass("loaded"),setTimeout(function(){t.parents(".gridBox").addClass("loaded")},1500)}var s=function(){this.Grid={},this.dataAdapters=n,this.layouts=e,this.easings=t,this.projections=r,this.cache={}};return s.prototype.resize=function(e){if(this.$e[0].offsetWidth==0)return;this.Grid.setScrollAxis(),this.Grid.setLayout(),this.Grid.oneShotPaint()},s.prototype.appendData=function(e,t){this.Grid.initBoxes(e,t,!0),this.cache.endOfScrollFlag=!1},s.prototype.insertData=function(e,t){this.Grid.initBoxes(e,t,"insert"),this.cache.endOfScrollFlag=!1},s.prototype.refreshData=function(e,t){this.Grid.initBoxes(e,t,!1),this.cache.endOfScrollFlag=!1},s.prototype.init=function(e,s,o){var u=this;this.parent=o||null,e&&(this.$e=e||null);var a={onChangePub:null,adapter:n.TremulaItem,isLooping:!1,surfaceMap:r.xyPlane,itemPreloading:!1,itemEasing:!1,itemEasingParams:{touchCurve:t.easeOutCubic,swipeCurve:t.easeOutCubic,transitionCurve:t.easeOutCubic,easeTime:500,springLimit:20},scrollAxis:"x",itemConstraint:null,staticAxisCount:0},f=$.extend({},a,s||{});this.Grid=new i(e,f,o),s&&s.data&&this.Grid.initBoxes(s.data,s.adapter),$(window).on("resize",function(e){u.resize(e)});var l=new Hammer(e[0],{prevent_default:!0});l.on("dragdown dragup dragleft dragright swipeleft swipeup swipedown swiperight touch release tap",function(e){u.Grid.handleGesture(e)}),e.on("mousewheel wheel DOMMouseScroll",function(e){u.Grid.handleGesture(e),e.preventDefault(),e.stopPropagation()})},window.imageLoaded||(window.imageLoaded=o),window.Tremula=s,s}),t(["Tremula"])})();