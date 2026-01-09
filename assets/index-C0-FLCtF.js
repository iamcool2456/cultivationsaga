(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="160",ah=0,xl=1,lh=2,fu=1,ch=2,Dn=3,Zn=0,qt=1,kn=2,Xn=0,io=1,Sn=2,wl=3,Cl=4,uh=5,bi=100,dh=101,hh=102,Al=103,Tl=104,fh=200,ph=201,mh=202,gh=203,ua=204,da=205,vh=206,bh=207,yh=208,Mh=209,_h=210,Sh=211,xh=212,wh=213,Ch=214,Ah=0,Th=1,Eh=2,Hs=3,Rh=4,Lh=5,Ih=6,Ph=7,pu=0,Dh=1,Nh=2,Kn=0,kh=1,Fh=2,Uh=3,mu=4,Bh=5,Oh=6,gu=300,lo=301,co=302,ha=303,fa=304,sr=306,pa=1e3,fn=1001,ma=1002,Gt=1003,El=1004,Tr=1005,tn=1006,Gh=1007,Vo=1008,Qn=1009,Hh=1010,qh=1011,Oa=1012,vu=1013,jn=1014,Yn=1015,zo=1016,bu=1017,yu=1018,xi=1020,Vh=1021,pn=1023,zh=1024,Wh=1025,wi=1026,uo=1027,$h=1028,Mu=1029,jh=1030,_u=1031,Su=1033,Er=33776,Rr=33777,Lr=33778,Ir=33779,Rl=35840,Ll=35841,Il=35842,Pl=35843,xu=36196,Dl=37492,Nl=37496,kl=37808,Fl=37809,Ul=37810,Bl=37811,Ol=37812,Gl=37813,Hl=37814,ql=37815,Vl=37816,zl=37817,Wl=37818,$l=37819,jl=37820,Yl=37821,Pr=36492,Xl=36494,Kl=36495,Yh=36283,Ql=36284,Jl=36285,Zl=36286,wu=3e3,Ci=3001,Xh=3200,Kh=3201,Cu=0,Qh=1,on="",yt="srgb",On="srgb-linear",Ga="display-p3",rr="display-p3-linear",qs="linear",ut="srgb",Vs="rec709",zs="p3",ki=7680,ec=519,Jh=512,Zh=513,ef=514,Au=515,tf=516,nf=517,of=518,sf=519,tc=35044,nc="300 es",ga=1035,Fn=2e3,Ws=2001;class go{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(t)===-1&&o[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const o=this._listeners;return o[e]!==void 0&&o[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const o=this._listeners[e.type];if(o!==void 0){e.target=this;const s=o.slice(0);for(let r=0,l=s.length;r<l;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const Do=Math.PI/180,Wo=180/Math.PI;function vo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[o&255]+Dt[o>>8&255]+Dt[o>>16&255]+Dt[o>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function Ha(n,e){return(n%e+e)%e}function rf(n,e,t,o,s){return o+(n-e)*(s-o)/(t-e)}function af(n,e,t){return n!==e?(t-n)/(e-n):0}function No(n,e,t){return(1-t)*n+t*e}function lf(n,e,t,o){return No(n,e,1-Math.exp(-t*o))}function cf(n,e=1){return e-Math.abs(Ha(n,e*2)-e)}function uf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function df(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ff(n,e){return n+Math.random()*(e-n)}function pf(n){return n*(.5-Math.random())}function mf(n){n!==void 0&&(ic=n);let e=ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gf(n){return n*Do}function vf(n){return n*Wo}function va(n){return(n&n-1)===0&&n!==0}function bf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $s(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yf(n,e,t,o,s){const r=Math.cos,l=Math.sin,a=r(t/2),c=l(t/2),u=r((e+o)/2),d=l((e+o)/2),f=r((e-o)/2),p=l((e-o)/2),v=r((o-e)/2),b=l((o-e)/2);switch(s){case"XYX":n.set(a*d,c*f,c*p,a*u);break;case"YZY":n.set(c*p,a*d,c*f,a*u);break;case"ZXZ":n.set(c*f,c*p,a*d,a*u);break;case"XZX":n.set(a*d,c*b,c*v,a*u);break;case"YXY":n.set(c*v,a*d,c*b,a*u);break;case"ZYZ":n.set(c*b,c*v,a*d,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Mf={DEG2RAD:Do,RAD2DEG:Wo,generateUUID:vo,clamp:Ht,euclideanModulo:Ha,mapLinear:rf,inverseLerp:af,lerp:No,damp:lf,pingpong:cf,smoothstep:uf,smootherstep:df,randInt:hf,randFloat:ff,randFloatSpread:pf,seededRandom:mf,degToRad:gf,radToDeg:vf,isPowerOfTwo:va,ceilPowerOfTwo:bf,floorPowerOfTwo:$s,setQuaternionFromProperEuler:yf,normalize:Ut,denormalize:Qi};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,o=this.y,s=e.elements;return this.x=s[0]*t+s[3]*o+s[6],this.y=s[1]*t+s[4]*o+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(e,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(Ht(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y;return t*t+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const o=Math.cos(t),s=Math.sin(t),r=this.x-e.x,l=this.y-e.y;return this.x=r*o-l*s+e.x,this.y=r*s+l*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,o,s,r,l,a,c,u){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,o,s,r,l,a,c,u)}set(e,t,o,s,r,l,a,c,u){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=o,d[7]=l,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],this}extractBasis(e,t,o){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,s=t.elements,r=this.elements,l=o[0],a=o[3],c=o[6],u=o[1],d=o[4],f=o[7],p=o[2],v=o[5],b=o[8],y=s[0],g=s[3],h=s[6],C=s[1],m=s[4],S=s[7],L=s[2],T=s[5],R=s[8];return r[0]=l*y+a*C+c*L,r[3]=l*g+a*m+c*T,r[6]=l*h+a*S+c*R,r[1]=u*y+d*C+f*L,r[4]=u*g+d*m+f*T,r[7]=u*h+d*S+f*R,r[2]=p*y+v*C+b*L,r[5]=p*g+v*m+b*T,r[8]=p*h+v*S+b*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[1],s=e[2],r=e[3],l=e[4],a=e[5],c=e[6],u=e[7],d=e[8];return t*l*d-t*a*u-o*r*d+o*a*c+s*r*u-s*l*c}invert(){const e=this.elements,t=e[0],o=e[1],s=e[2],r=e[3],l=e[4],a=e[5],c=e[6],u=e[7],d=e[8],f=d*l-a*u,p=a*c-d*r,v=u*r-l*c,b=t*f+o*p+s*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/b;return e[0]=f*y,e[1]=(s*u-d*o)*y,e[2]=(a*o-s*l)*y,e[3]=p*y,e[4]=(d*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=v*y,e[7]=(o*c-u*t)*y,e[8]=(l*t-o*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,o,s,r,l,a){const c=Math.cos(r),u=Math.sin(r);return this.set(o*c,o*u,-o*(c*l+u*a)+l+e,-s*u,s*c,-s*(-u*l+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dr.makeScale(e,t)),this}rotate(e){return this.premultiply(Dr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,o,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,o=e.elements;for(let s=0;s<9;s++)if(t[s]!==o[s])return!1;return!0}fromArray(e,t=0){for(let o=0;o<9;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dr=new tt;function Tu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _f(){const n=js("canvas");return n.style.display="block",n}const oc={};function ko(n){n in oc||(oc[n]=!0,console.warn(n))}const sc=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rc=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[On]:{transfer:qs,primaries:Vs,toReference:n=>n,fromReference:n=>n},[yt]:{transfer:ut,primaries:Vs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[rr]:{transfer:qs,primaries:zs,toReference:n=>n.applyMatrix3(rc),fromReference:n=>n.applyMatrix3(sc)},[Ga]:{transfer:ut,primaries:zs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(rc),fromReference:n=>n.applyMatrix3(sc).convertLinearToSRGB()}},Sf=new Set([On,rr]),rt={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Sf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const o=ls[e].toReference,s=ls[t].fromReference;return s(o(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ls[n].primaries},getTransfer:function(n){return n===on?qs:ls[n].transfer}};function oo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fi;class Eu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=js("canvas")),Fi.width=e.width,Fi.height=e.height;const o=Fi.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const o=t.getContext("2d");o.drawImage(e,0,0,e.width,e.height);const s=o.getImageData(0,0,e.width,e.height),r=s.data;for(let l=0;l<r.length;l++)r[l]=oo(r[l]/255)*255;return o.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let o=0;o<t.length;o++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[o]=Math.floor(oo(t[o]/255)*255):t[o]=oo(t[o]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xf=0;class Ru{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=vo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const o={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let l=0,a=s.length;l<a;l++)s[l].isDataTexture?r.push(kr(s[l].image)):r.push(kr(s[l]))}else r=kr(s);o.url=r}return t||(e.images[this.uuid]=o),o}}function kr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wf=0;class zt extends go{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,o=fn,s=fn,r=tn,l=Vo,a=pn,c=Qn,u=zt.DEFAULT_ANISOTROPY,d=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=vo(),this.name="",this.source=new Ru(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=o,this.wrapT=s,this.magFilter=r,this.minFilter=l,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ci?yt:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const o={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),t||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?Ci:wu}set encoding(e){ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ci?yt:on}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=gu;zt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,o=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=o,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,o,s){return this.x=e,this.y=t,this.z=o,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,o=this.y,s=this.z,r=this.w,l=e.elements;return this.x=l[0]*t+l[4]*o+l[8]*s+l[12]*r,this.y=l[1]*t+l[5]*o+l[9]*s+l[13]*r,this.z=l[2]*t+l[6]*o+l[10]*s+l[14]*r,this.w=l[3]*t+l[7]*o+l[11]*s+l[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,o,s,r;const c=e.elements,u=c[0],d=c[4],f=c[8],p=c[1],v=c[5],b=c[9],y=c[2],g=c[6],h=c[10];if(Math.abs(d-p)<.01&&Math.abs(f-y)<.01&&Math.abs(b-g)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+y)<.1&&Math.abs(b+g)<.1&&Math.abs(u+v+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(u+1)/2,S=(v+1)/2,L=(h+1)/2,T=(d+p)/4,R=(f+y)/4,V=(b+g)/4;return m>S&&m>L?m<.01?(o=0,s=.707106781,r=.707106781):(o=Math.sqrt(m),s=T/o,r=R/o):S>L?S<.01?(o=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),o=T/s,r=V/s):L<.01?(o=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),o=R/r,s=V/r),this.set(o,s,r,t),this}let C=Math.sqrt((g-b)*(g-b)+(f-y)*(f-y)+(p-d)*(p-d));return Math.abs(C)<.001&&(C=1),this.x=(g-b)/C,this.y=(f-y)/C,this.z=(p-d)/C,this.w=Math.acos((u+v+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(e,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this.w=e.w+(t.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cf extends go{constructor(e=1,t=1,o={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const s={width:e,height:t,depth:1};o.encoding!==void 0&&(ko("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),o.colorSpace=o.encoding===Ci?yt:on),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},o),this.texture=new zt(s,o.mapping,o.wrapS,o.wrapT,o.magFilter,o.minFilter,o.format,o.type,o.anisotropy,o.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=o.generateMipmaps,this.texture.internalFormat=o.internalFormat,this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.depthTexture=o.depthTexture,this.samples=o.samples}setSize(e,t,o=1){(this.width!==e||this.height!==t||this.depth!==o)&&(this.width=e,this.height=t,this.depth=o,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=o,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ru(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Cf{constructor(e=1,t=1,o={}){super(e,t,o),this.isWebGLRenderTarget=!0}}class Lu extends zt{constructor(e=null,t=1,o=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:o,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Af extends zt{constructor(e=null,t=1,o=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:o,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,t=0,o=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=o,this._w=s}static slerpFlat(e,t,o,s,r,l,a){let c=o[s+0],u=o[s+1],d=o[s+2],f=o[s+3];const p=r[l+0],v=r[l+1],b=r[l+2],y=r[l+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=v,e[t+2]=b,e[t+3]=y;return}if(f!==y||c!==p||u!==v||d!==b){let g=1-a;const h=c*p+u*v+d*b+f*y,C=h>=0?1:-1,m=1-h*h;if(m>Number.EPSILON){const L=Math.sqrt(m),T=Math.atan2(L,h*C);g=Math.sin(g*T)/L,a=Math.sin(a*T)/L}const S=a*C;if(c=c*g+p*S,u=u*g+v*S,d=d*g+b*S,f=f*g+y*S,g===1-a){const L=1/Math.sqrt(c*c+u*u+d*d+f*f);c*=L,u*=L,d*=L,f*=L}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,o,s,r,l){const a=o[s],c=o[s+1],u=o[s+2],d=o[s+3],f=r[l],p=r[l+1],v=r[l+2],b=r[l+3];return e[t]=a*b+d*f+c*v-u*p,e[t+1]=c*b+d*p+u*f-a*v,e[t+2]=u*b+d*v+a*p-c*f,e[t+3]=d*b-a*f-c*p-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,o,s){return this._x=e,this._y=t,this._z=o,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const o=e._x,s=e._y,r=e._z,l=e._order,a=Math.cos,c=Math.sin,u=a(o/2),d=a(s/2),f=a(r/2),p=c(o/2),v=c(s/2),b=c(r/2);switch(l){case"XYZ":this._x=p*d*f+u*v*b,this._y=u*v*f-p*d*b,this._z=u*d*b+p*v*f,this._w=u*d*f-p*v*b;break;case"YXZ":this._x=p*d*f+u*v*b,this._y=u*v*f-p*d*b,this._z=u*d*b-p*v*f,this._w=u*d*f+p*v*b;break;case"ZXY":this._x=p*d*f-u*v*b,this._y=u*v*f+p*d*b,this._z=u*d*b+p*v*f,this._w=u*d*f-p*v*b;break;case"ZYX":this._x=p*d*f-u*v*b,this._y=u*v*f+p*d*b,this._z=u*d*b-p*v*f,this._w=u*d*f+p*v*b;break;case"YZX":this._x=p*d*f+u*v*b,this._y=u*v*f+p*d*b,this._z=u*d*b-p*v*f,this._w=u*d*f-p*v*b;break;case"XZY":this._x=p*d*f-u*v*b,this._y=u*v*f-p*d*b,this._z=u*d*b+p*v*f,this._w=u*d*f+p*v*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const o=t/2,s=Math.sin(o);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,o=t[0],s=t[4],r=t[8],l=t[1],a=t[5],c=t[9],u=t[2],d=t[6],f=t[10],p=o+a+f;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(d-c)*v,this._y=(r-u)*v,this._z=(l-s)*v}else if(o>a&&o>f){const v=2*Math.sqrt(1+o-a-f);this._w=(d-c)/v,this._x=.25*v,this._y=(s+l)/v,this._z=(r+u)/v}else if(a>f){const v=2*Math.sqrt(1+a-o-f);this._w=(r-u)/v,this._x=(s+l)/v,this._y=.25*v,this._z=(c+d)/v}else{const v=2*Math.sqrt(1+f-o-a);this._w=(l-s)/v,this._x=(r+u)/v,this._y=(c+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let o=e.dot(t)+1;return o<Number.EPSILON?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const o=this.angleTo(e);if(o===0)return this;const s=Math.min(1,t/o);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const o=e._x,s=e._y,r=e._z,l=e._w,a=t._x,c=t._y,u=t._z,d=t._w;return this._x=o*d+l*a+s*u-r*c,this._y=s*d+l*c+r*a-o*u,this._z=r*d+l*u+o*c-s*a,this._w=l*d-o*a-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const o=this._x,s=this._y,r=this._z,l=this._w;let a=l*e._w+o*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=o,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*o+t*this._x,this._y=v*s+t*this._y,this._z=v*r+t*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,a),f=Math.sin((1-t)*d)/u,p=Math.sin(t*d)/u;return this._w=l*f+this._w*p,this._x=o*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,o){return this.copy(e).slerp(t,o)}random(){const e=Math.random(),t=Math.sqrt(1-e),o=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),o*Math.sin(r),o*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,o=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=o}set(e,t,o){return o===void 0&&(o=this.z),this.x=e,this.y=t,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,o=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*o+r[6]*s,this.y=r[1]*t+r[4]*o+r[7]*s,this.z=r[2]*t+r[5]*o+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,o=this.y,s=this.z,r=e.elements,l=1/(r[3]*t+r[7]*o+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*o+r[8]*s+r[12])*l,this.y=(r[1]*t+r[5]*o+r[9]*s+r[13])*l,this.z=(r[2]*t+r[6]*o+r[10]*s+r[14])*l,this}applyQuaternion(e){const t=this.x,o=this.y,s=this.z,r=e.x,l=e.y,a=e.z,c=e.w,u=2*(l*s-a*o),d=2*(a*t-r*s),f=2*(r*o-l*t);return this.x=t+c*u+l*f-a*d,this.y=o+c*d+a*u-r*f,this.z=s+c*f+r*d-l*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,o=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*o+r[8]*s,this.y=r[1]*t+r[5]*o+r[9]*s,this.z=r[2]*t+r[6]*o+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(e,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const o=e.x,s=e.y,r=e.z,l=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*l-o*c,this.z=o*a-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const o=e.dot(this)/t;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return Fr.copy(this).projectOnVector(e),this.sub(Fr)}reflect(e){return this.sub(Fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(Ht(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y,s=this.z-e.z;return t*t+o*o+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,o){const s=Math.sin(t)*e;return this.x=s*Math.sin(o),this.y=Math.cos(t)*e,this.z=s*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,o){return this.x=e*Math.sin(t),this.y=o,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=o,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,o=Math.sqrt(1-e**2);return this.x=o*Math.cos(t),this.y=o*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new K,ac=new Ko;class Qo{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,o=e.count;t<o;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const o=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const o=e.geometry;if(o!==void 0){const r=o.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let l=0,a=r.count;l<a;l++)e.isMesh===!0?e.getVertexPosition(l,an):an.fromBufferAttribute(r,l),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),cs.copy(o.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const s=e.children;for(let r=0,l=s.length;r<l;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,o;return e.normal.x>0?(t=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),t<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),us.subVectors(this.max,wo),Ui.subVectors(e.a,wo),Bi.subVectors(e.b,wo),Oi.subVectors(e.c,wo),Gn.subVectors(Bi,Ui),Hn.subVectors(Oi,Bi),di.subVectors(Ui,Oi);let t=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-di.z,di.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,di.z,0,-di.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-di.y,di.x,0];return!Ur(t,Ui,Bi,Oi,us)||(t=[1,0,0,0,1,0,0,0,1],!Ur(t,Ui,Bi,Oi,us))?!1:(ds.crossVectors(Gn,Hn),t=[ds.x,ds.y,ds.z],Ur(t,Ui,Bi,Oi,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new K,new K,new K,new K,new K,new K,new K,new K],an=new K,cs=new Qo,Ui=new K,Bi=new K,Oi=new K,Gn=new K,Hn=new K,di=new K,wo=new K,us=new K,ds=new K,hi=new K;function Ur(n,e,t,o,s){for(let r=0,l=n.length-3;r<=l;r+=3){hi.fromArray(n,r);const a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),c=e.dot(hi),u=t.dot(hi),d=o.dot(hi);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>a)return!1}return!0}const Tf=new Qo,Co=new K,Br=new K;class ar{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const o=this.center;t!==void 0?o.copy(t):Tf.setFromPoints(e).getCenter(o);let s=0;for(let r=0,l=e.length;r<l;r++)s=Math.max(s,o.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const o=this.center.distanceToSquared(e);return t.copy(e),o>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const t=Co.lengthSq();if(t>this.radius*this.radius){const o=Math.sqrt(t),s=(o-this.radius)*.5;this.center.addScaledVector(Co,s/o),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Br)),this.expandByPoint(Co.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new K,Or=new K,hs=new K,qn=new K,Gr=new K,fs=new K,Hr=new K;class Iu{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const o=t.dot(this.direction);return o<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,o,s){Or.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Or);const r=e.distanceTo(t)*.5,l=-this.direction.dot(hs),a=qn.dot(this.direction),c=-qn.dot(hs),u=qn.lengthSq(),d=Math.abs(1-l*l);let f,p,v,b;if(d>0)if(f=l*c-a,p=l*a-c,b=r*d,f>=0)if(p>=-b)if(p<=b){const y=1/d;f*=y,p*=y,v=f*(f+l*p+2*a)+p*(l*f+p+2*c)+u}else p=r,f=Math.max(0,-(l*p+a)),v=-f*f+p*(p+2*c)+u;else p=-r,f=Math.max(0,-(l*p+a)),v=-f*f+p*(p+2*c)+u;else p<=-b?(f=Math.max(0,-(-l*r+a)),p=f>0?-r:Math.min(Math.max(-r,-c),r),v=-f*f+p*(p+2*c)+u):p<=b?(f=0,p=Math.min(Math.max(-r,-c),r),v=p*(p+2*c)+u):(f=Math.max(0,-(l*r+a)),p=f>0?r:Math.min(Math.max(-r,-c),r),v=-f*f+p*(p+2*c)+u);else p=l>0?-r:r,f=Math.max(0,-(l*p+a)),v=-f*f+p*(p+2*c)+u;return o&&o.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Or).addScaledVector(hs,p),v}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const o=Rn.dot(this.direction),s=Rn.dot(Rn)-o*o,r=e.radius*e.radius;if(s>r)return null;const l=Math.sqrt(r-s),a=o-l,c=o+l;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(e.normal)+e.constant)/t;return o>=0?o:null}intersectPlane(e,t){const o=this.distanceToPlane(e);return o===null?null:this.at(o,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let o,s,r,l,a,c;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(o=(e.min.x-p.x)*u,s=(e.max.x-p.x)*u):(o=(e.max.x-p.x)*u,s=(e.min.x-p.x)*u),d>=0?(r=(e.min.y-p.y)*d,l=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,l=(e.min.y-p.y)*d),o>l||r>s||((r>o||isNaN(o))&&(o=r),(l<s||isNaN(s))&&(s=l),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),o>c||a>s)||((a>o||o!==o)&&(o=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(o>=0?o:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,o,s,r){Gr.subVectors(t,e),fs.subVectors(o,e),Hr.crossVectors(Gr,fs);let l=this.direction.dot(Hr),a;if(l>0){if(s)return null;a=1}else if(l<0)a=-1,l=-l;else return null;qn.subVectors(this.origin,e);const c=a*this.direction.dot(fs.crossVectors(qn,fs));if(c<0)return null;const u=a*this.direction.dot(Gr.cross(qn));if(u<0||c+u>l)return null;const d=-a*qn.dot(Hr);return d<0?null:this.at(d/l,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,o,s,r,l,a,c,u,d,f,p,v,b,y,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,o,s,r,l,a,c,u,d,f,p,v,b,y,g)}set(e,t,o,s,r,l,a,c,u,d,f,p,v,b,y,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=o,h[12]=s,h[1]=r,h[5]=l,h[9]=a,h[13]=c,h[2]=u,h[6]=d,h[10]=f,h[14]=p,h[3]=v,h[7]=b,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],t[9]=o[9],t[10]=o[10],t[11]=o[11],t[12]=o[12],t[13]=o[13],t[14]=o[14],t[15]=o[15],this}copyPosition(e){const t=this.elements,o=e.elements;return t[12]=o[12],t[13]=o[13],t[14]=o[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,o){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(e,t,o){return this.set(e.x,t.x,o.x,0,e.y,t.y,o.y,0,e.z,t.z,o.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,o=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),l=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=o[0]*s,t[1]=o[1]*s,t[2]=o[2]*s,t[3]=0,t[4]=o[4]*r,t[5]=o[5]*r,t[6]=o[6]*r,t[7]=0,t[8]=o[8]*l,t[9]=o[9]*l,t[10]=o[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,o=e.x,s=e.y,r=e.z,l=Math.cos(o),a=Math.sin(o),c=Math.cos(s),u=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=l*d,v=l*f,b=a*d,y=a*f;t[0]=c*d,t[4]=-c*f,t[8]=u,t[1]=v+b*u,t[5]=p-y*u,t[9]=-a*c,t[2]=y-p*u,t[6]=b+v*u,t[10]=l*c}else if(e.order==="YXZ"){const p=c*d,v=c*f,b=u*d,y=u*f;t[0]=p+y*a,t[4]=b*a-v,t[8]=l*u,t[1]=l*f,t[5]=l*d,t[9]=-a,t[2]=v*a-b,t[6]=y+p*a,t[10]=l*c}else if(e.order==="ZXY"){const p=c*d,v=c*f,b=u*d,y=u*f;t[0]=p-y*a,t[4]=-l*f,t[8]=b+v*a,t[1]=v+b*a,t[5]=l*d,t[9]=y-p*a,t[2]=-l*u,t[6]=a,t[10]=l*c}else if(e.order==="ZYX"){const p=l*d,v=l*f,b=a*d,y=a*f;t[0]=c*d,t[4]=b*u-v,t[8]=p*u+y,t[1]=c*f,t[5]=y*u+p,t[9]=v*u-b,t[2]=-u,t[6]=a*c,t[10]=l*c}else if(e.order==="YZX"){const p=l*c,v=l*u,b=a*c,y=a*u;t[0]=c*d,t[4]=y-p*f,t[8]=b*f+v,t[1]=f,t[5]=l*d,t[9]=-a*d,t[2]=-u*d,t[6]=v*f+b,t[10]=p-y*f}else if(e.order==="XZY"){const p=l*c,v=l*u,b=a*c,y=a*u;t[0]=c*d,t[4]=-f,t[8]=u*d,t[1]=p*f+y,t[5]=l*d,t[9]=v*f-b,t[2]=b*f-v,t[6]=a*d,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ef,e,Rf)}lookAt(e,t,o){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Vn.crossVectors(o,$t),Vn.lengthSq()===0&&(Math.abs(o.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Vn.crossVectors(o,$t)),Vn.normalize(),ps.crossVectors($t,Vn),s[0]=Vn.x,s[4]=ps.x,s[8]=$t.x,s[1]=Vn.y,s[5]=ps.y,s[9]=$t.y,s[2]=Vn.z,s[6]=ps.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,s=t.elements,r=this.elements,l=o[0],a=o[4],c=o[8],u=o[12],d=o[1],f=o[5],p=o[9],v=o[13],b=o[2],y=o[6],g=o[10],h=o[14],C=o[3],m=o[7],S=o[11],L=o[15],T=s[0],R=s[4],V=s[8],w=s[12],x=s[1],q=s[5],$=s[9],ue=s[13],D=s[2],X=s[6],z=s[10],Q=s[14],J=s[3],le=s[7],oe=s[11],de=s[15];return r[0]=l*T+a*x+c*D+u*J,r[4]=l*R+a*q+c*X+u*le,r[8]=l*V+a*$+c*z+u*oe,r[12]=l*w+a*ue+c*Q+u*de,r[1]=d*T+f*x+p*D+v*J,r[5]=d*R+f*q+p*X+v*le,r[9]=d*V+f*$+p*z+v*oe,r[13]=d*w+f*ue+p*Q+v*de,r[2]=b*T+y*x+g*D+h*J,r[6]=b*R+y*q+g*X+h*le,r[10]=b*V+y*$+g*z+h*oe,r[14]=b*w+y*ue+g*Q+h*de,r[3]=C*T+m*x+S*D+L*J,r[7]=C*R+m*q+S*X+L*le,r[11]=C*V+m*$+S*z+L*oe,r[15]=C*w+m*ue+S*Q+L*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[4],s=e[8],r=e[12],l=e[1],a=e[5],c=e[9],u=e[13],d=e[2],f=e[6],p=e[10],v=e[14],b=e[3],y=e[7],g=e[11],h=e[15];return b*(+r*c*f-s*u*f-r*a*p+o*u*p+s*a*v-o*c*v)+y*(+t*c*v-t*u*p+r*l*p-s*l*v+s*u*d-r*c*d)+g*(+t*u*f-t*a*v-r*l*f+o*l*v+r*a*d-o*u*d)+h*(-s*a*d-t*c*f+t*a*p+s*l*f-o*l*p+o*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,o){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=o),this}invert(){const e=this.elements,t=e[0],o=e[1],s=e[2],r=e[3],l=e[4],a=e[5],c=e[6],u=e[7],d=e[8],f=e[9],p=e[10],v=e[11],b=e[12],y=e[13],g=e[14],h=e[15],C=f*g*u-y*p*u+y*c*v-a*g*v-f*c*h+a*p*h,m=b*p*u-d*g*u-b*c*v+l*g*v+d*c*h-l*p*h,S=d*y*u-b*f*u+b*a*v-l*y*v-d*a*h+l*f*h,L=b*f*c-d*y*c-b*a*p+l*y*p+d*a*g-l*f*g,T=t*C+o*m+s*S+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=C*R,e[1]=(y*p*r-f*g*r-y*s*v+o*g*v+f*s*h-o*p*h)*R,e[2]=(a*g*r-y*c*r+y*s*u-o*g*u-a*s*h+o*c*h)*R,e[3]=(f*c*r-a*p*r-f*s*u+o*p*u+a*s*v-o*c*v)*R,e[4]=m*R,e[5]=(d*g*r-b*p*r+b*s*v-t*g*v-d*s*h+t*p*h)*R,e[6]=(b*c*r-l*g*r-b*s*u+t*g*u+l*s*h-t*c*h)*R,e[7]=(l*p*r-d*c*r+d*s*u-t*p*u-l*s*v+t*c*v)*R,e[8]=S*R,e[9]=(b*f*r-d*y*r-b*o*v+t*y*v+d*o*h-t*f*h)*R,e[10]=(l*y*r-b*a*r+b*o*u-t*y*u-l*o*h+t*a*h)*R,e[11]=(d*a*r-l*f*r-d*o*u+t*f*u+l*o*v-t*a*v)*R,e[12]=L*R,e[13]=(d*y*s-b*f*s+b*o*p-t*y*p-d*o*g+t*f*g)*R,e[14]=(b*a*s-l*y*s-b*o*c+t*y*c+l*o*g-t*a*g)*R,e[15]=(l*f*s-d*a*s+d*o*c-t*f*c-l*o*p+t*a*p)*R,this}scale(e){const t=this.elements,o=e.x,s=e.y,r=e.z;return t[0]*=o,t[4]*=s,t[8]*=r,t[1]*=o,t[5]*=s,t[9]*=r,t[2]*=o,t[6]*=s,t[10]*=r,t[3]*=o,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,o,s))}makeTranslation(e,t,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,o,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,t,-o,0,0,o,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,0,o,0,0,1,0,0,-o,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,0,o,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const o=Math.cos(t),s=Math.sin(t),r=1-o,l=e.x,a=e.y,c=e.z,u=r*l,d=r*a;return this.set(u*l+o,u*a-s*c,u*c+s*a,0,u*a+s*c,d*a+o,d*c-s*l,0,u*c-s*a,d*c+s*l,r*c*c+o,0,0,0,0,1),this}makeScale(e,t,o){return this.set(e,0,0,0,0,t,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,t,o,s,r,l){return this.set(1,o,r,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,o){const s=this.elements,r=t._x,l=t._y,a=t._z,c=t._w,u=r+r,d=l+l,f=a+a,p=r*u,v=r*d,b=r*f,y=l*d,g=l*f,h=a*f,C=c*u,m=c*d,S=c*f,L=o.x,T=o.y,R=o.z;return s[0]=(1-(y+h))*L,s[1]=(v+S)*L,s[2]=(b-m)*L,s[3]=0,s[4]=(v-S)*T,s[5]=(1-(p+h))*T,s[6]=(g+C)*T,s[7]=0,s[8]=(b+m)*R,s[9]=(g-C)*R,s[10]=(1-(p+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,o){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const l=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ln.copy(this);const u=1/r,d=1/l,f=1/a;return ln.elements[0]*=u,ln.elements[1]*=u,ln.elements[2]*=u,ln.elements[4]*=d,ln.elements[5]*=d,ln.elements[6]*=d,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,t.setFromRotationMatrix(ln),o.x=r,o.y=l,o.z=a,this}makePerspective(e,t,o,s,r,l,a=Fn){const c=this.elements,u=2*r/(t-e),d=2*r/(o-s),f=(t+e)/(t-e),p=(o+s)/(o-s);let v,b;if(a===Fn)v=-(l+r)/(l-r),b=-2*l*r/(l-r);else if(a===Ws)v=-l/(l-r),b=-l*r/(l-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,o,s,r,l,a=Fn){const c=this.elements,u=1/(t-e),d=1/(o-s),f=1/(l-r),p=(t+e)*u,v=(o+s)*d;let b,y;if(a===Fn)b=(l+r)*f,y=-2*f;else if(a===Ws)b=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=y,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,o=e.elements;for(let s=0;s<16;s++)if(t[s]!==o[s])return!1;return!0}fromArray(e,t=0){for(let o=0;o<16;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e[t+9]=o[9],e[t+10]=o[10],e[t+11]=o[11],e[t+12]=o[12],e[t+13]=o[13],e[t+14]=o[14],e[t+15]=o[15],e}}const Gi=new K,ln=new Mt,Ef=new K(0,0,0),Rf=new K(1,1,1),Vn=new K,ps=new K,$t=new K,lc=new Mt,cc=new Ko;class lr{constructor(e=0,t=0,o=0,s=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=o,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,o,s=this._order){return this._x=e,this._y=t,this._z=o,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,o=!0){const s=e.elements,r=s[0],l=s[4],a=s[8],c=s[1],u=s[5],d=s[9],f=s[2],p=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,o){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,o)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class Pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lf=0;const uc=new K,Hi=new Ko,Ln=new Mt,ms=new K,Ao=new K,If=new K,Pf=new Ko,dc=new K(1,0,0),hc=new K(0,1,0),fc=new K(0,0,1),Df={type:"added"},Nf={type:"removed"};class Lt extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new K,t=new lr,o=new Ko,s=new K(1,1,1);function r(){o.setFromEuler(t,!1)}function l(){t.setFromQuaternion(o,void 0,!1)}t._onChange(r),o._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new tt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(dc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,o){e.isVector3?ms.copy(e):ms.set(e,t,o);const s=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ao,ms,this.up):Ln.lookAt(ms,Ao,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Df)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let o=0,s=this.children.length;o<s;o++){const l=this.children[o].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,o=[]){this[e]===t&&o.push(this);const s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].getObjectsByProperty(e,t,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let o=0,s=t.length;o<s;o++)t[o].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let o=0,s=t.length;o<s;o++){const r=t[o];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const o=this.parent;if(e===!0&&o!==null&&o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,l=s.length;r<l;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",o={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const f=c[u];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=l(e.geometries),c=l(e.materials),u=l(e.textures),d=l(e.images),f=l(e.shapes),p=l(e.skeletons),v=l(e.animations),b=l(e.nodes);a.length>0&&(o.geometries=a),c.length>0&&(o.materials=c),u.length>0&&(o.textures=u),d.length>0&&(o.images=d),f.length>0&&(o.shapes=f),p.length>0&&(o.skeletons=p),v.length>0&&(o.animations=v),b.length>0&&(o.nodes=b)}return o.object=s,o;function l(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let o=0;o<e.children.length;o++){const s=e.children[o];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new K(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new K,In=new K,qr=new K,Pn=new K,qi=new K,Vi=new K,pc=new K,Vr=new K,zr=new K,Wr=new K;let gs=!1;class dn{constructor(e=new K,t=new K,o=new K){this.a=e,this.b=t,this.c=o}static getNormal(e,t,o,s){s.subVectors(o,t),cn.subVectors(e,t),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,o,s,r){cn.subVectors(s,t),In.subVectors(o,t),qr.subVectors(e,t);const l=cn.dot(cn),a=cn.dot(In),c=cn.dot(qr),u=In.dot(In),d=In.dot(qr),f=l*u-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,v=(u*c-a*d)*p,b=(l*d-a*c)*p;return r.set(1-v-b,b,v)}static containsPoint(e,t,o,s){return this.getBarycoord(e,t,o,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(e,t,o,s,r,l,a,c){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),this.getInterpolation(e,t,o,s,r,l,a,c)}static getInterpolation(e,t,o,s,r,l,a,c){return this.getBarycoord(e,t,o,s,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(l,Pn.y),c.addScaledVector(a,Pn.z),c)}static isFrontFacing(e,t,o,s){return cn.subVectors(o,t),In.subVectors(e,t),cn.cross(In).dot(s)<0}set(e,t,o){return this.a.copy(e),this.b.copy(t),this.c.copy(o),this}setFromPointsAndIndices(e,t,o,s){return this.a.copy(e[t]),this.b.copy(e[o]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,o,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),cn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,o,s,r){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,o,s,r)}getInterpolation(e,t,o,s,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,o,s,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,s=this.b,r=this.c;let l,a;qi.subVectors(s,o),Vi.subVectors(r,o),Vr.subVectors(e,o);const c=qi.dot(Vr),u=Vi.dot(Vr);if(c<=0&&u<=0)return t.copy(o);zr.subVectors(e,s);const d=qi.dot(zr),f=Vi.dot(zr);if(d>=0&&f<=d)return t.copy(s);const p=c*f-d*u;if(p<=0&&c>=0&&d<=0)return l=c/(c-d),t.copy(o).addScaledVector(qi,l);Wr.subVectors(e,r);const v=qi.dot(Wr),b=Vi.dot(Wr);if(b>=0&&v<=b)return t.copy(r);const y=v*u-c*b;if(y<=0&&u>=0&&b<=0)return a=u/(u-b),t.copy(o).addScaledVector(Vi,a);const g=d*b-v*f;if(g<=0&&f-d>=0&&v-b>=0)return pc.subVectors(r,s),a=(f-d)/(f-d+(v-b)),t.copy(s).addScaledVector(pc,a);const h=1/(g+y+p);return l=y*h,a=p*h,t.copy(o).addScaledVector(qi,l).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function $r(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,o)}set(e,t,o){if(t===void 0&&o===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,o,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=o,rt.toWorkingColorSpace(this,s),this}setHSL(e,t,o,s=rt.workingColorSpace){if(e=Ha(e,1),t=Ht(t,0,1),o=Ht(o,0,1),t===0)this.r=this.g=this.b=o;else{const r=o<=.5?o*(1+t):o+t-o*t,l=2*o-r;this.r=$r(l,r,e+1/3),this.g=$r(l,r,e),this.b=$r(l,r,e-1/3)}return rt.toWorkingColorSpace(this,s),this}setStyle(e,t=yt){function o(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const l=s[1],a=s[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return o(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return o(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return o(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],l=r.length;if(l===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const o=Du[e.toLowerCase()];return o!==void 0?this.setHex(o,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return rt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Ht(Nt.r*255,0,255))*65536+Math.round(Ht(Nt.g*255,0,255))*256+Math.round(Ht(Nt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Nt.copy(this),t);const o=Nt.r,s=Nt.g,r=Nt.b,l=Math.max(o,s,r),a=Math.min(o,s,r);let c,u;const d=(a+l)/2;if(a===l)c=0,u=0;else{const f=l-a;switch(u=d<=.5?f/(l+a):f/(2-l-a),l){case o:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-o)/f+2;break;case r:c=(o-s)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=yt){rt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,o=Nt.g,s=Nt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${o.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(o*255)},${Math.round(s*255)})`}offsetHSL(e,t,o){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,o){return this.r=e.r+(t.r-e.r)*o,this.g=e.g+(t.g-e.g)*o,this.b=e.b+(t.b-e.b)*o,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(vs);const o=No(zn.h,vs.h,t),s=No(zn.s,vs.s,t),r=No(zn.l,vs.l,t);return this.setHSL(o,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,o=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*o+r[6]*s,this.g=r[1]*t+r[4]*o+r[7]*s,this.b=r[2]*t+r[5]*o+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new nt;nt.NAMES=Du;let kf=0;class bo extends go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=io,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=da,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(o):s&&s.isVector3&&o&&o.isVector3?s.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const o={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(o.blending=this.blending),this.side!==Zn&&(o.side=this.side),this.vertexColors===!0&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=!0),this.blendSrc!==ua&&(o.blendSrc=this.blendSrc),this.blendDst!==da&&(o.blendDst=this.blendDst),this.blendEquation!==bi&&(o.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(o.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(o.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(o.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(o.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(o.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(o.depthFunc=this.depthFunc),this.depthTest===!1&&(o.depthTest=this.depthTest),this.depthWrite===!1&&(o.depthWrite=this.depthWrite),this.colorWrite===!1&&(o.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(o.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(o.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(o.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(o.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(o.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(o.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(o.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(o.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaHash===!0&&(o.alphaHash=!0),this.alphaToCoverage===!0&&(o.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=!0),this.forceSinglePass===!0&&(o.forceSinglePass=!0),this.wireframe===!0&&(o.wireframe=!0),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=!0),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function s(r){const l=[];for(const a in r){const c=r[a];delete c.metadata,l.push(c)}return l}if(t){const r=s(e.textures),l=s(e.images);r.length>0&&(o.textures=r),l.length>0&&(o.images=l)}return o}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let o=null;if(t!==null){const s=t.length;o=new Array(s);for(let r=0;r!==s;++r)o[r]=t[r].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class un extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new K,bs=new ot;class wn{constructor(e,t,o=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=o,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,o){e*=this.itemSize,o*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[o+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,o=this.count;t<o;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,o=this.count;t<o;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,o=this.count;t<o;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,o=this.count;t<o;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,o=this.count;t<o;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let o=this.array[e*this.itemSize+t];return this.normalized&&(o=Qi(o,this.array)),o}setComponent(e,t,o){return this.normalized&&(o=Ut(o,this.array)),this.array[e*this.itemSize+t]=o,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,o){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),o=Ut(o,this.array)),this.array[e+0]=t,this.array[e+1]=o,this}setXYZ(e,t,o,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),o=Ut(o,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=s,this}setXYZW(e,t,o,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),o=Ut(o,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}}class Nu extends wn{constructor(e,t,o){super(new Uint16Array(e),t,o)}}class ku extends wn{constructor(e,t,o){super(new Uint32Array(e),t,o)}}class _t extends wn{constructor(e,t,o){super(new Float32Array(e),t,o)}}let Ff=0;const Zt=new Mt,jr=new Lt,zi=new K,jt=new Qo,To=new Qo,Tt=new K;class Kt extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tu(e)?ku:Nu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,o=0){this.groups.push({start:e,count:t,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const r=new tt().getNormalMatrix(e);o.applyNormalMatrix(r),o.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,o){return Zt.makeTranslation(e,t,o),this.applyMatrix4(Zt),this}scale(e,t,o){return Zt.makeScale(e,t,o),this.applyMatrix4(Zt),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=[];for(let o=0,s=e.length;o<s;o++){const r=e[o];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const r=t[o];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const o=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,l=t.length;r<l;r++){const a=t[r];To.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(jt.min,To.min),jt.expandByPoint(Tt),Tt.addVectors(jt.max,To.max),jt.expandByPoint(Tt)):(jt.expandByPoint(To.min),jt.expandByPoint(To.max))}jt.getCenter(o);let s=0;for(let r=0,l=e.count;r<l;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,o.distanceToSquared(Tt));if(t)for(let r=0,l=t.length;r<l;r++){const a=t[r],c=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Tt.fromBufferAttribute(a,u),c&&(zi.fromBufferAttribute(e,u),Tt.add(zi)),s=Math.max(s,o.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=e.array,s=t.position.array,r=t.normal.array,l=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let x=0;x<a;x++)u[x]=new K,d[x]=new K;const f=new K,p=new K,v=new K,b=new ot,y=new ot,g=new ot,h=new K,C=new K;function m(x,q,$){f.fromArray(s,x*3),p.fromArray(s,q*3),v.fromArray(s,$*3),b.fromArray(l,x*2),y.fromArray(l,q*2),g.fromArray(l,$*2),p.sub(f),v.sub(f),y.sub(b),g.sub(b);const ue=1/(y.x*g.y-g.x*y.y);isFinite(ue)&&(h.copy(p).multiplyScalar(g.y).addScaledVector(v,-y.y).multiplyScalar(ue),C.copy(v).multiplyScalar(y.x).addScaledVector(p,-g.x).multiplyScalar(ue),u[x].add(h),u[q].add(h),u[$].add(h),d[x].add(C),d[q].add(C),d[$].add(C))}let S=this.groups;S.length===0&&(S=[{start:0,count:o.length}]);for(let x=0,q=S.length;x<q;++x){const $=S[x],ue=$.start,D=$.count;for(let X=ue,z=ue+D;X<z;X+=3)m(o[X+0],o[X+1],o[X+2])}const L=new K,T=new K,R=new K,V=new K;function w(x){R.fromArray(r,x*3),V.copy(R);const q=u[x];L.copy(q),L.sub(R.multiplyScalar(R.dot(q))).normalize(),T.crossVectors(V,q);const ue=T.dot(d[x])<0?-1:1;c[x*4]=L.x,c[x*4+1]=L.y,c[x*4+2]=L.z,c[x*4+3]=ue}for(let x=0,q=S.length;x<q;++x){const $=S[x],ue=$.start,D=$.count;for(let X=ue,z=ue+D;X<z;X+=3)w(o[X+0]),w(o[X+1]),w(o[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let p=0,v=o.count;p<v;p++)o.setXYZ(p,0,0,0);const s=new K,r=new K,l=new K,a=new K,c=new K,u=new K,d=new K,f=new K;if(e)for(let p=0,v=e.count;p<v;p+=3){const b=e.getX(p+0),y=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,y),l.fromBufferAttribute(t,g),d.subVectors(l,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(o,b),c.fromBufferAttribute(o,y),u.fromBufferAttribute(o,g),a.add(d),c.add(d),u.add(d),o.setXYZ(b,a.x,a.y,a.z),o.setXYZ(y,c.x,c.y,c.z),o.setXYZ(g,u.x,u.y,u.z)}else for(let p=0,v=t.count;p<v;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),l.fromBufferAttribute(t,p+2),d.subVectors(l,r),f.subVectors(s,r),d.cross(f),o.setXYZ(p+0,d.x,d.y,d.z),o.setXYZ(p+1,d.x,d.y,d.z),o.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,o=e.count;t<o;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,c){const u=a.array,d=a.itemSize,f=a.normalized,p=new u.constructor(c.length*d);let v=0,b=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?v=c[y]*a.data.stride+a.offset:v=c[y]*d;for(let h=0;h<d;h++)p[b++]=u[v++]}return new wn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,o=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=e(c,o);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let d=0,f=u.length;d<f;d++){const p=u[d],v=e(p,o);c.push(v)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,c=l.length;a<c;a++){const u=l[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const o=this.attributes;for(const c in o){const u=o[c];e.data.attributes[c]=u.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let f=0,p=u.length;f<p;f++){const v=u[f];d.push(v.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const o=e.index;o!==null&&this.setIndex(o.clone(t));const s=e.attributes;for(const u in s){const d=s[u];this.setAttribute(u,d.clone(t))}const r=e.morphAttributes;for(const u in r){const d=[],f=r[u];for(let p=0,v=f.length;p<v;p++)d.push(f[p].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let u=0,d=l.length;u<d;u++){const f=l[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new Mt,fi=new Iu,ys=new ar,gc=new K,Wi=new K,$i=new K,ji=new K,Yr=new K,Ms=new K,_s=new ot,Ss=new ot,xs=new ot,vc=new K,bc=new K,yc=new K,ws=new K,Cs=new K;class st extends Lt{constructor(e=new Kt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const s=t[o[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=s.length;r<l;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const o=this.geometry,s=o.attributes.position,r=o.morphAttributes.position,l=o.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ms.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const d=a[c],f=r[c];d!==0&&(Yr.fromBufferAttribute(f,e),l?Ms.addScaledVector(Yr,d):Ms.addScaledVector(Yr.sub(t),d))}t.add(Ms)}return t}raycast(e,t){const o=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),ys.copy(o.boundingSphere),ys.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(ys.containsPoint(fi.origin)===!1&&(fi.intersectSphere(ys,gc)===null||fi.origin.distanceToSquared(gc)>(e.far-e.near)**2))&&(mc.copy(r).invert(),fi.copy(e.ray).applyMatrix4(mc),!(o.boundingBox!==null&&fi.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,o){let s;const r=this.geometry,l=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,v=r.drawRange;if(a!==null)if(Array.isArray(l))for(let b=0,y=p.length;b<y;b++){const g=p[b],h=l[g.materialIndex],C=Math.max(g.start,v.start),m=Math.min(a.count,Math.min(g.start+g.count,v.start+v.count));for(let S=C,L=m;S<L;S+=3){const T=a.getX(S),R=a.getX(S+1),V=a.getX(S+2);s=As(this,h,e,o,u,d,f,T,R,V),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const b=Math.max(0,v.start),y=Math.min(a.count,v.start+v.count);for(let g=b,h=y;g<h;g+=3){const C=a.getX(g),m=a.getX(g+1),S=a.getX(g+2);s=As(this,l,e,o,u,d,f,C,m,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(l))for(let b=0,y=p.length;b<y;b++){const g=p[b],h=l[g.materialIndex],C=Math.max(g.start,v.start),m=Math.min(c.count,Math.min(g.start+g.count,v.start+v.count));for(let S=C,L=m;S<L;S+=3){const T=S,R=S+1,V=S+2;s=As(this,h,e,o,u,d,f,T,R,V),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const b=Math.max(0,v.start),y=Math.min(c.count,v.start+v.count);for(let g=b,h=y;g<h;g+=3){const C=g,m=g+1,S=g+2;s=As(this,l,e,o,u,d,f,C,m,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Uf(n,e,t,o,s,r,l,a){let c;if(e.side===qt?c=o.intersectTriangle(l,r,s,!0,a):c=o.intersectTriangle(s,r,l,e.side===Zn,a),c===null)return null;Cs.copy(a),Cs.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Cs);return u<t.near||u>t.far?null:{distance:u,point:Cs.clone(),object:n}}function As(n,e,t,o,s,r,l,a,c,u){n.getVertexPosition(a,Wi),n.getVertexPosition(c,$i),n.getVertexPosition(u,ji);const d=Uf(n,e,t,o,Wi,$i,ji,ws);if(d){s&&(_s.fromBufferAttribute(s,a),Ss.fromBufferAttribute(s,c),xs.fromBufferAttribute(s,u),d.uv=dn.getInterpolation(ws,Wi,$i,ji,_s,Ss,xs,new ot)),r&&(_s.fromBufferAttribute(r,a),Ss.fromBufferAttribute(r,c),xs.fromBufferAttribute(r,u),d.uv1=dn.getInterpolation(ws,Wi,$i,ji,_s,Ss,xs,new ot),d.uv2=d.uv1),l&&(vc.fromBufferAttribute(l,a),bc.fromBufferAttribute(l,c),yc.fromBufferAttribute(l,u),d.normal=dn.getInterpolation(ws,Wi,$i,ji,vc,bc,yc,new K),d.normal.dot(o.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:u,normal:new K,materialIndex:0};dn.getNormal(Wi,$i,ji,f.normal),d.face=f}return d}class hn extends Kt{constructor(e=1,t=1,o=1,s=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:o,widthSegments:s,heightSegments:r,depthSegments:l};const a=this;s=Math.floor(s),r=Math.floor(r),l=Math.floor(l);const c=[],u=[],d=[],f=[];let p=0,v=0;b("z","y","x",-1,-1,o,t,e,l,r,0),b("z","y","x",1,-1,o,t,-e,l,r,1),b("x","z","y",1,1,e,o,t,s,l,2),b("x","z","y",1,-1,e,o,-t,s,l,3),b("x","y","z",1,-1,e,t,o,s,r,4),b("x","y","z",-1,-1,e,t,-o,s,r,5),this.setIndex(c),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(f,2));function b(y,g,h,C,m,S,L,T,R,V,w){const x=S/R,q=L/V,$=S/2,ue=L/2,D=T/2,X=R+1,z=V+1;let Q=0,J=0;const le=new K;for(let oe=0;oe<z;oe++){const de=oe*q-ue;for(let ve=0;ve<X;ve++){const B=ve*x-$;le[y]=B*C,le[g]=de*m,le[h]=D,u.push(le.x,le.y,le.z),le[y]=0,le[g]=0,le[h]=T>0?1:-1,d.push(le.x,le.y,le.z),f.push(ve/R),f.push(1-oe/V),Q+=1}}for(let oe=0;oe<V;oe++)for(let de=0;de<R;de++){const ve=p+de+X*oe,B=p+de+X*(oe+1),j=p+(de+1)+X*(oe+1),re=p+(de+1)+X*oe;c.push(ve,B,re),c.push(B,j,re),J+=6}a.addGroup(v,J,w),v+=J,p+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(n){const e={};for(const t in n){e[t]={};for(const o in n[t]){const s=n[t][o];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][o]=null):e[t][o]=s.clone():Array.isArray(s)?e[t][o]=s.slice():e[t][o]=s}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const o=ho(n[t]);for(const s in o)e[s]=o[s]}return e}function Bf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fu(n){return n.getRenderTarget()===null?n.outputColorSpace:rt.workingColorSpace}const Of={clone:ho,merge:Bt};var Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=Bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const o={};for(const s in this.extensions)this.extensions[s]===!0&&(o[s]=!0);return Object.keys(o).length>0&&(t.extensions=o),t}}class Uu extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends Uu{constructor(e=50,t=1,o=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,o,s,r,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Do*.5*this.fov)/this.zoom,o=2*t,s=this.aspect*o,r=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,u=l.fullHeight;r+=l.offsetX*s/c,t-=l.offsetY*o/u,s*=l.width/c,o*=l.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-o,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,Xi=1;class qf extends Lt{constructor(e,t,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Yi,Xi,e,t);s.layers=this.layers,this.add(s);const r=new nn(Yi,Xi,e,t);r.layers=this.layers,this.add(r);const l=new nn(Yi,Xi,e,t);l.layers=this.layers,this.add(l);const a=new nn(Yi,Xi,e,t);a.layers=this.layers,this.add(a);const c=new nn(Yi,Xi,e,t);c.layers=this.layers,this.add(c);const u=new nn(Yi,Xi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[o,s,r,l,a,c]=t;for(const u of t)this.remove(u);if(e===Fn)o.up.set(0,1,0),o.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ws)o.up.set(0,-1,0),o.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:o,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,l,a,c,u,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const y=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,e.setRenderTarget(o,0,s),e.render(t,r),e.setRenderTarget(o,1,s),e.render(t,l),e.setRenderTarget(o,2,s),e.render(t,a),e.setRenderTarget(o,3,s),e.render(t,c),e.setRenderTarget(o,4,s),e.render(t,u),o.texture.generateMipmaps=y,e.setRenderTarget(o,5,s),e.render(t,d),e.setRenderTarget(f,p,v),e.xr.enabled=b,o.texture.needsPMREMUpdate=!0}}class Bu extends zt{constructor(e,t,o,s,r,l,a,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:lo,super(e,t,o,s,r,l,a,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vf extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const o={width:e,height:e,depth:1},s=[o,o,o,o,o,o];t.encoding!==void 0&&(ko("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ci?yt:on),this.texture=new Bu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hn(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:ho(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:qt,blending:Xn});r.uniforms.tEquirect.value=t;const l=new st(s,r),a=t.minFilter;return t.minFilter===Vo&&(t.minFilter=tn),new qf(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,o,s){const r=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,o,s);e.setRenderTarget(r)}}const Xr=new K,zf=new K,Wf=new tt;class gi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,o,s){return this.normal.set(e,t,o),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,o){const s=Xr.subVectors(o,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const o=e.delta(Xr),s=this.normal.dot(o);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(o,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return t<0&&o>0||o<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const o=t||Wf.getNormalMatrix(e),s=this.coplanarPoint(Xr).applyMatrix4(e),r=this.normal.applyMatrix3(o).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new ar,Ts=new K;class qa{constructor(e=new gi,t=new gi,o=new gi,s=new gi,r=new gi,l=new gi){this.planes=[e,t,o,s,r,l]}set(e,t,o,s,r,l){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(o),a[3].copy(s),a[4].copy(r),a[5].copy(l),this}copy(e){const t=this.planes;for(let o=0;o<6;o++)t[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,t=Fn){const o=this.planes,s=e.elements,r=s[0],l=s[1],a=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],v=s[8],b=s[9],y=s[10],g=s[11],h=s[12],C=s[13],m=s[14],S=s[15];if(o[0].setComponents(c-r,p-u,g-v,S-h).normalize(),o[1].setComponents(c+r,p+u,g+v,S+h).normalize(),o[2].setComponents(c+l,p+d,g+b,S+C).normalize(),o[3].setComponents(c-l,p-d,g-b,S-C).normalize(),o[4].setComponents(c-a,p-f,g-y,S-m).normalize(),t===Fn)o[5].setComponents(c+a,p+f,g+y,S+m).normalize();else if(t===Ws)o[5].setComponents(a,f,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,o=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(o)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let o=0;o<6;o++){const s=t[o];if(Ts.x=s.normal.x>0?e.max.x:e.min.x,Ts.y=s.normal.y>0?e.max.y:e.min.y,Ts.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let o=0;o<6;o++)if(t[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ou(){let n=null,e=!1,t=null,o=null;function s(r,l){t(r,l),o=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(o=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $f(n,e){const t=e.isWebGL2,o=new WeakMap;function s(u,d){const f=u.array,p=u.usage,v=f.byteLength,b=n.createBuffer();n.bindBuffer(d,b),n.bufferData(d,f,p),u.onUploadCallback();let y;if(f instanceof Float32Array)y=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=n.SHORT;else if(f instanceof Uint32Array)y=n.UNSIGNED_INT;else if(f instanceof Int32Array)y=n.INT;else if(f instanceof Int8Array)y=n.BYTE;else if(f instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:b,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:v}}function r(u,d,f){const p=d.array,v=d._updateRange,b=d.updateRanges;if(n.bindBuffer(f,u),v.count===-1&&b.length===0&&n.bufferSubData(f,0,p),b.length!==0){for(let y=0,g=b.length;y<g;y++){const h=b[y];t?n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}v.count!==-1&&(t?n.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p,v.offset,v.count):n.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),o.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=o.get(u);d&&(n.deleteBuffer(d.buffer),o.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const p=o.get(u);(!p||p.version<u.version)&&o.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=o.get(u);if(f===void 0)o.set(u,s(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,u,d),f.version=u.version}}return{get:l,remove:a,update:c}}class $o extends Kt{constructor(e=1,t=1,o=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:o,heightSegments:s};const r=e/2,l=t/2,a=Math.floor(o),c=Math.floor(s),u=a+1,d=c+1,f=e/a,p=t/c,v=[],b=[],y=[],g=[];for(let h=0;h<d;h++){const C=h*p-l;for(let m=0;m<u;m++){const S=m*f-r;b.push(S,-C,0),y.push(0,0,1),g.push(m/a),g.push(1-h/c)}}for(let h=0;h<c;h++)for(let C=0;C<a;C++){const m=C+u*h,S=C+u*(h+1),L=C+1+u*(h+1),T=C+1+u*h;v.push(m,S,T),v.push(S,L,T)}this.setIndex(v),this.setAttribute("position",new _t(b,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.widthSegments,e.heightSegments)}}var jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$p=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:jf,alphahash_pars_fragment:Yf,alphamap_fragment:Xf,alphamap_pars_fragment:Kf,alphatest_fragment:Qf,alphatest_pars_fragment:Jf,aomap_fragment:Zf,aomap_pars_fragment:ep,batching_pars_vertex:tp,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:op,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:ap,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:up,clipping_planes_vertex:dp,color_fragment:hp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:vp,defaultnormal_vertex:bp,displacementmap_pars_vertex:yp,displacementmap_vertex:Mp,emissivemap_fragment:_p,emissivemap_pars_fragment:Sp,colorspace_fragment:xp,colorspace_pars_fragment:wp,envmap_fragment:Cp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Tp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Gp,envmap_vertex:Rp,fog_vertex:Lp,fog_pars_vertex:Ip,fog_fragment:Pp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Np,lightmap_fragment:kp,lightmap_pars_fragment:Fp,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Bp,lights_pars_begin:Op,lights_toon_fragment:Hp,lights_toon_pars_fragment:qp,lights_phong_fragment:Vp,lights_phong_pars_fragment:zp,lights_physical_fragment:Wp,lights_physical_pars_fragment:$p,lights_fragment_begin:jp,lights_fragment_maps:Yp,lights_fragment_end:Xp,logdepthbuf_fragment:Kp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Zp,map_fragment:em,map_pars_fragment:tm,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:om,metalnessmap_pars_fragment:sm,morphcolor_vertex:rm,morphnormal_vertex:am,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:um,normal_fragment_maps:dm,normal_pars_fragment:hm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:ym,opaque_fragment:Mm,packing:_m,premultiplied_alpha_fragment:Sm,project_vertex:xm,dithering_fragment:wm,dithering_pars_fragment:Cm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Rm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Im,skinbase_vertex:Pm,skinning_pars_vertex:Dm,skinning_vertex:Nm,skinnormal_vertex:km,specularmap_fragment:Fm,specularmap_pars_fragment:Um,tonemapping_fragment:Bm,tonemapping_pars_fragment:Om,transmission_fragment:Gm,transmission_pars_fragment:Hm,uv_pars_fragment:qm,uv_pars_vertex:Vm,uv_vertex:zm,worldpos_vertex:Wm,background_vert:$m,background_frag:jm,backgroundCube_vert:Ym,backgroundCube_frag:Xm,cube_vert:Km,cube_frag:Qm,depth_vert:Jm,depth_frag:Zm,distanceRGBA_vert:eg,distanceRGBA_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:og,linedashed_frag:sg,meshbasic_vert:rg,meshbasic_frag:ag,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:ug,meshmatcap_frag:dg,meshnormal_vert:hg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:vg,meshtoon_vert:bg,meshtoon_frag:yg,points_vert:Mg,points_frag:_g,shadow_vert:Sg,shadow_frag:xg,sprite_vert:wg,sprite_frag:Cg},Le={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},xn={basic:{uniforms:Bt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Bt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new nt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Bt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Bt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Bt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new nt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Bt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Bt([Le.points,Le.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Bt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Bt([Le.common,Le.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Bt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Bt([Le.sprite,Le.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Bt([Le.common,Le.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Bt([Le.lights,Le.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};xn.physical={uniforms:Bt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Es={r:0,b:0,g:0};function Ag(n,e,t,o,s,r,l){const a=new nt(0);let c=r===!0?0:1,u,d,f=null,p=0,v=null;function b(g,h){let C=!1,m=h.isScene===!0?h.background:null;m&&m.isTexture&&(m=(h.backgroundBlurriness>0?t:e).get(m)),m===null?y(a,c):m&&m.isColor&&(y(m,1),C=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?o.buffers.color.setClear(0,0,0,1,l):S==="alpha-blend"&&o.buffers.color.setClear(0,0,0,0,l),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),m&&(m.isCubeTexture||m.mapping===sr)?(d===void 0&&(d=new st(new hn(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ho(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=m,d.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=rt.getTransfer(m.colorSpace)!==ut,(f!==m||p!==m.version||v!==n.toneMapping)&&(d.material.needsUpdate=!0,f=m,p=m.version,v=n.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):m&&m.isTexture&&(u===void 0&&(u=new st(new $o(2,2),new Ri({name:"BackgroundMaterial",uniforms:ho(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=m,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=rt.getTransfer(m.colorSpace)!==ut,m.matrixAutoUpdate===!0&&m.updateMatrix(),u.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||p!==m.version||v!==n.toneMapping)&&(u.material.needsUpdate=!0,f=m,p=m.version,v=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function y(g,h){g.getRGB(Es,Fu(n)),o.buffers.color.setClear(Es.r,Es.g,Es.b,h,l)}return{getClearColor:function(){return a},setClearColor:function(g,h=1){a.set(g),c=h,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,y(a,c)},render:b}}function Tg(n,e,t,o){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=o.isWebGL2?null:e.get("OES_vertex_array_object"),l=o.isWebGL2||r!==null,a={},c=g(null);let u=c,d=!1;function f(D,X,z,Q,J){let le=!1;if(l){const oe=y(Q,z,X);u!==oe&&(u=oe,v(u.object)),le=h(D,Q,z,J),le&&C(D,Q,z,J)}else{const oe=X.wireframe===!0;(u.geometry!==Q.id||u.program!==z.id||u.wireframe!==oe)&&(u.geometry=Q.id,u.program=z.id,u.wireframe=oe,le=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(le||d)&&(d=!1,V(D,X,z,Q),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function p(){return o.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function v(D){return o.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function b(D){return o.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function y(D,X,z){const Q=z.wireframe===!0;let J=a[D.id];J===void 0&&(J={},a[D.id]=J);let le=J[X.id];le===void 0&&(le={},J[X.id]=le);let oe=le[Q];return oe===void 0&&(oe=g(p()),le[Q]=oe),oe}function g(D){const X=[],z=[],Q=[];for(let J=0;J<s;J++)X[J]=0,z[J]=0,Q[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:z,attributeDivisors:Q,object:D,attributes:{},index:null}}function h(D,X,z,Q){const J=u.attributes,le=X.attributes;let oe=0;const de=z.getAttributes();for(const ve in de)if(de[ve].location>=0){const j=J[ve];let re=le[ve];if(re===void 0&&(ve==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),ve==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;oe++}return u.attributesNum!==oe||u.index!==Q}function C(D,X,z,Q){const J={},le=X.attributes;let oe=0;const de=z.getAttributes();for(const ve in de)if(de[ve].location>=0){let j=le[ve];j===void 0&&(ve==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),ve==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const re={};re.attribute=j,j&&j.data&&(re.data=j.data),J[ve]=re,oe++}u.attributes=J,u.attributesNum=oe,u.index=Q}function m(){const D=u.newAttributes;for(let X=0,z=D.length;X<z;X++)D[X]=0}function S(D){L(D,0)}function L(D,X){const z=u.newAttributes,Q=u.enabledAttributes,J=u.attributeDivisors;z[D]=1,Q[D]===0&&(n.enableVertexAttribArray(D),Q[D]=1),J[D]!==X&&((o.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[o.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,X),J[D]=X)}function T(){const D=u.newAttributes,X=u.enabledAttributes;for(let z=0,Q=X.length;z<Q;z++)X[z]!==D[z]&&(n.disableVertexAttribArray(z),X[z]=0)}function R(D,X,z,Q,J,le,oe){oe===!0?n.vertexAttribIPointer(D,X,z,J,le):n.vertexAttribPointer(D,X,z,Q,J,le)}function V(D,X,z,Q){if(o.isWebGL2===!1&&(D.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const J=Q.attributes,le=z.getAttributes(),oe=X.defaultAttributeValues;for(const de in le){const ve=le[de];if(ve.location>=0){let B=J[de];if(B===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(B=D.instanceColor)),B!==void 0){const j=B.normalized,re=B.itemSize,Me=t.get(B);if(Me===void 0)continue;const Ae=Me.buffer,ae=Me.type,P=Me.bytesPerElement,k=o.isWebGL2===!0&&(ae===n.INT||ae===n.UNSIGNED_INT||B.gpuType===vu);if(B.isInterleavedBufferAttribute){const G=B.data,I=G.stride,ne=B.offset;if(G.isInstancedInterleavedBuffer){for(let ie=0;ie<ve.locationSize;ie++)L(ve.location+ie,G.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ie=0;ie<ve.locationSize;ie++)S(ve.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let ie=0;ie<ve.locationSize;ie++)R(ve.location+ie,re/ve.locationSize,ae,j,I*P,(ne+re/ve.locationSize*ie)*P,k)}else{if(B.isInstancedBufferAttribute){for(let G=0;G<ve.locationSize;G++)L(ve.location+G,B.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let G=0;G<ve.locationSize;G++)S(ve.location+G);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let G=0;G<ve.locationSize;G++)R(ve.location+G,re/ve.locationSize,ae,j,re*P,re/ve.locationSize*G*P,k)}}else if(oe!==void 0){const j=oe[de];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(ve.location,j);break;case 3:n.vertexAttrib3fv(ve.location,j);break;case 4:n.vertexAttrib4fv(ve.location,j);break;default:n.vertexAttrib1fv(ve.location,j)}}}}T()}function w(){$();for(const D in a){const X=a[D];for(const z in X){const Q=X[z];for(const J in Q)b(Q[J].object),delete Q[J];delete X[z]}delete a[D]}}function x(D){if(a[D.id]===void 0)return;const X=a[D.id];for(const z in X){const Q=X[z];for(const J in Q)b(Q[J].object),delete Q[J];delete X[z]}delete a[D.id]}function q(D){for(const X in a){const z=a[X];if(z[D.id]===void 0)continue;const Q=z[D.id];for(const J in Q)b(Q[J].object),delete Q[J];delete z[D.id]}}function $(){ue(),d=!0,u!==c&&(u=c,v(u.object))}function ue(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:$,resetDefaultState:ue,dispose:w,releaseStatesOfGeometry:x,releaseStatesOfProgram:q,initAttributes:m,enableAttribute:S,disableUnusedAttributes:T}}function Eg(n,e,t,o){const s=o.isWebGL2;let r;function l(d){r=d}function a(d,f){n.drawArrays(r,d,f),t.update(f,r,1)}function c(d,f,p){if(p===0)return;let v,b;if(s)v=n,b="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[b](r,d,f,p),t.update(f,r,p)}function u(d,f,p){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<p;b++)this.render(d[b],f[b]);else{v.multiDrawArraysWEBGL(r,d,0,f,0,p);let b=0;for(let y=0;y<p;y++)b+=f[y];t.update(b,r,1)}}this.setMode=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function Rg(n,e,t){let o;function s(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),b=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),m=p>0,S=l||e.has("OES_texture_float"),L=m&&S,T=l?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:C,vertexTextures:m,floatFragmentTextures:S,floatVertexTextures:L,maxSamples:T}}function Lg(n){const e=this;let t=null,o=0,s=!1,r=!1;const l=new gi,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const v=f.length!==0||p||o!==0||s;return s=p,o=f.length,v},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,v){const b=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,h=n.get(f);if(!s||b===null||b.length===0||r&&!g)r?d(null):u();else{const C=r?0:o,m=C*4;let S=h.clippingState||null;c.value=S,S=d(b,p,m,v);for(let L=0;L!==m;++L)S[L]=t[L];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function d(f,p,v,b){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=c.value,b!==!0||g===null){const h=v+y*4,C=p.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<h)&&(g=new Float32Array(h));for(let m=0,S=v;m!==y;++m,S+=4)l.copy(f[m]).applyMatrix4(C,a),l.normal.toArray(g,S),g[S+3]=l.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Ig(n){let e=new WeakMap;function t(l,a){return a===ha?l.mapping=lo:a===fa&&(l.mapping=co),l}function o(l){if(l&&l.isTexture){const a=l.mapping;if(a===ha||a===fa)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const u=new Vf(c.height/2);return u.fromEquirectangularTexture(n,l),e.set(l,u),l.addEventListener("dispose",s),t(u.texture,l.mapping)}else return null}}return l}function s(l){const a=l.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:o,dispose:r}}class Gu extends Uu{constructor(e=-1,t=1,o=1,s=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=o,this.bottom=s,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,o,s,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=o-e,l=o+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,l=r+u*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,l,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,Mc=[.125,.215,.35,.446,.526,.582],yi=20,Kr=new Gu,_c=new nt;let Qr=null,Jr=0,Zr=0;const vi=(1+Math.sqrt(5))/2,Ki=1/vi,Sc=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,vi,Ki),new K(0,vi,-Ki),new K(Ki,0,vi),new K(-Ki,0,vi),new K(vi,Ki,0),new K(-vi,Ki,0)];class xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,o=.1,s=100){Qr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,o,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qr,Jr,Zr),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel();const o=t||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,o={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:zo,format:pn,colorSpace:On,depthBuffer:!1},s=wc(e,t,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(e,t,o);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pg(r)),this._blurMaterial=Dg(r,e,t)}return s}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,o,s){const a=new nn(90,1,t,o),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(_c),d.toneMapping=Kn,d.autoClear=!1;const v=new un({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),b=new st(new hn,v);let y=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,y=!0):(v.color.copy(_c),y=!0);for(let h=0;h<6;h++){const C=h%3;C===0?(a.up.set(0,c[h],0),a.lookAt(u[h],0,0)):C===1?(a.up.set(0,0,c[h]),a.lookAt(0,u[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,u[h]));const m=this._cubeSize;Rs(s,C*m,h>2?m:0,m,m),d.setRenderTarget(s),y&&d.render(b,a),d.render(e,a)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){const o=this._renderer,s=e.mapping===lo||e.mapping===co;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const r=s?this._cubemapMaterial:this._equirectMaterial,l=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Rs(t,0,0,3*c,2*c),o.setRenderTarget(t),o.render(l,Kr)}_applyPMREM(e){const t=this._renderer,o=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Sc[(s-1)%Sc.length];this._blur(e,s-1,s,r,l)}t.autoClear=o}_blur(e,t,o,s,r){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,o,s,"latitudinal",r),this._halfBlur(l,e,o,o,s,"longitudinal",r)}_halfBlur(e,t,o,s,r,l,a){const c=this._renderer,u=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new st(this._lodPlanes[s],u),p=u.uniforms,v=this._sizeLods[o]-1,b=isFinite(r)?Math.PI/(2*v):2*Math.PI/(2*yi-1),y=r/b,g=isFinite(r)?1+Math.floor(d*y):yi;g>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);const h=[];let C=0;for(let R=0;R<yi;++R){const V=R/y,w=Math.exp(-V*V/2);h.push(w),R===0?C+=w:R<g&&(C+=2*w)}for(let R=0;R<h.length;R++)h[R]=h[R]/C;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=h,p.latitudinal.value=l==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:m}=this;p.dTheta.value=b,p.mipInt.value=m-o;const S=this._sizeLods[s],L=3*S*(s>m-Ji?s-m+Ji:0),T=4*(this._cubeSize-S);Rs(t,L,T,3*S,2*S),c.setRenderTarget(t),c.render(f,Kr)}}function Pg(n){const e=[],t=[],o=[];let s=n;const r=n-Ji+1+Mc.length;for(let l=0;l<r;l++){const a=Math.pow(2,s);t.push(a);let c=1/a;l>n-Ji?c=Mc[l-n+Ji-1]:l===0&&(c=0),o.push(c);const u=1/(a-2),d=-u,f=1+u,p=[d,d,f,d,f,f,d,d,f,f,d,f],v=6,b=6,y=3,g=2,h=1,C=new Float32Array(y*b*v),m=new Float32Array(g*b*v),S=new Float32Array(h*b*v);for(let T=0;T<v;T++){const R=T%3*2/3-1,V=T>2?0:-1,w=[R,V,0,R+2/3,V,0,R+2/3,V+1,0,R,V,0,R+2/3,V+1,0,R,V+1,0];C.set(w,y*b*T),m.set(p,g*b*T);const x=[T,T,T,T,T,T];S.set(x,h*b*T)}const L=new Kt;L.setAttribute("position",new wn(C,y)),L.setAttribute("uv",new wn(m,g)),L.setAttribute("faceIndex",new wn(S,h)),e.push(L),s>Ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:o}}function wc(n,e,t){const o=new Ei(n,e,t);return o.texture.mapping=sr,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function Rs(n,e,t,o,s){n.viewport.set(e,t,o,s),n.scissor.set(e,t,o,s)}function Dg(n,e,t){const o=new Float32Array(yi),s=new K(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Cc(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ac(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ng(n){let e=new WeakMap,t=null;function o(a){if(a&&a.isTexture){const c=a.mapping,u=c===ha||c===fa,d=c===lo||c===co;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new xc(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||d&&f&&s(f)){t===null&&(t=new xc(n));const p=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let c=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:o,dispose:l}}function kg(n){const e={};function t(o){if(e[o]!==void 0)return e[o];let s;switch(o){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(o)}return e[o]=s,s}return{has:function(o){return t(o)!==null},init:function(o){o.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(o){const s=t(o);return s===null&&console.warn("THREE.WebGLRenderer: "+o+" extension not supported."),s}}}function Fg(n,e,t,o){const s={},r=new WeakMap;function l(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const b in p.attributes)e.remove(p.attributes[b]);for(const b in p.morphAttributes){const y=p.morphAttributes[b];for(let g=0,h=y.length;g<h;g++)e.remove(y[g])}p.removeEventListener("dispose",l),delete s[p.id];const v=r.get(p);v&&(e.remove(v),r.delete(p)),o.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",l),s[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const b in p)e.update(p[b],n.ARRAY_BUFFER);const v=f.morphAttributes;for(const b in v){const y=v[b];for(let g=0,h=y.length;g<h;g++)e.update(y[g],n.ARRAY_BUFFER)}}function u(f){const p=[],v=f.index,b=f.attributes.position;let y=0;if(v!==null){const C=v.array;y=v.version;for(let m=0,S=C.length;m<S;m+=3){const L=C[m+0],T=C[m+1],R=C[m+2];p.push(L,T,T,R,R,L)}}else if(b!==void 0){const C=b.array;y=b.version;for(let m=0,S=C.length/3-1;m<S;m+=3){const L=m+0,T=m+1,R=m+2;p.push(L,T,T,R,R,L)}}else return;const g=new(Tu(p)?ku:Nu)(p,1);g.version=y;const h=r.get(f);h&&e.remove(h),r.set(f,g)}function d(f){const p=r.get(f);if(p){const v=f.index;v!==null&&p.version<v.version&&u(f)}else u(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function Ug(n,e,t,o){const s=o.isWebGL2;let r;function l(v){r=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function d(v,b){n.drawElements(r,b,a,v*c),t.update(b,r,1)}function f(v,b,y){if(y===0)return;let g,h;if(s)g=n,h="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[h](r,b,a,v*c,y),t.update(b,r,y)}function p(v,b,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<y;h++)this.render(v[h]/c,b[h]);else{g.multiDrawElementsWEBGL(r,b,0,a,v,0,y);let h=0;for(let C=0;C<y;C++)h+=b[C];t.update(h,r,1)}}this.setMode=l,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p}function Bg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function o(r,l,a){switch(t.calls++,l){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:o}}function Og(n,e){return n[0]-e[0]}function Gg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Hg(n,e,t){const o={},s=new Float32Array(8),r=new WeakMap,l=new Et,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function c(u,d,f){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const b=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=b!==void 0?b.length:0;let g=r.get(d);if(g===void 0||g.count!==y){let X=function(){ue.dispose(),r.delete(d),d.removeEventListener("dispose",X)};var v=X;g!==void 0&&g.texture.dispose();const m=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,L=d.morphAttributes.color!==void 0,T=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],V=d.morphAttributes.color||[];let w=0;m===!0&&(w=1),S===!0&&(w=2),L===!0&&(w=3);let x=d.attributes.position.count*w,q=1;x>e.maxTextureSize&&(q=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const $=new Float32Array(x*q*4*y),ue=new Lu($,x,q,y);ue.type=Yn,ue.needsUpdate=!0;const D=w*4;for(let z=0;z<y;z++){const Q=T[z],J=R[z],le=V[z],oe=x*q*4*z;for(let de=0;de<Q.count;de++){const ve=de*D;m===!0&&(l.fromBufferAttribute(Q,de),$[oe+ve+0]=l.x,$[oe+ve+1]=l.y,$[oe+ve+2]=l.z,$[oe+ve+3]=0),S===!0&&(l.fromBufferAttribute(J,de),$[oe+ve+4]=l.x,$[oe+ve+5]=l.y,$[oe+ve+6]=l.z,$[oe+ve+7]=0),L===!0&&(l.fromBufferAttribute(le,de),$[oe+ve+8]=l.x,$[oe+ve+9]=l.y,$[oe+ve+10]=l.z,$[oe+ve+11]=le.itemSize===4?l.w:1)}}g={count:y,texture:ue,size:new ot(x,q)},r.set(d,g),d.addEventListener("dispose",X)}let h=0;for(let m=0;m<p.length;m++)h+=p[m];const C=d.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",C),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const b=p===void 0?0:p.length;let y=o[d.id];if(y===void 0||y.length!==b){y=[];for(let S=0;S<b;S++)y[S]=[S,0];o[d.id]=y}for(let S=0;S<b;S++){const L=y[S];L[0]=S,L[1]=p[S]}y.sort(Gg);for(let S=0;S<8;S++)S<b&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Og);const g=d.morphAttributes.position,h=d.morphAttributes.normal;let C=0;for(let S=0;S<8;S++){const L=a[S],T=L[0],R=L[1];T!==Number.MAX_SAFE_INTEGER&&R?(g&&d.getAttribute("morphTarget"+S)!==g[T]&&d.setAttribute("morphTarget"+S,g[T]),h&&d.getAttribute("morphNormal"+S)!==h[T]&&d.setAttribute("morphNormal"+S,h[T]),s[S]=R,C+=R):(g&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),h&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),s[S]=0)}const m=d.morphTargetsRelative?1:1-C;f.getUniforms().setValue(n,"morphTargetBaseInfluence",m),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function qg(n,e,t,o){let s=new WeakMap;function r(c){const u=o.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function l(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:l}}class Hu extends zt{constructor(e,t,o,s,r,l,a,c,u,d){if(d=d!==void 0?d:wi,d!==wi&&d!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");o===void 0&&d===wi&&(o=jn),o===void 0&&d===uo&&(o=xi),super(null,s,r,l,a,c,d,o,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qu=new zt,Vu=new Hu(1,1);Vu.compareFunction=Au;const zu=new Lu,Wu=new Af,$u=new Bu,Tc=[],Ec=[],Rc=new Float32Array(16),Lc=new Float32Array(9),Ic=new Float32Array(4);function yo(n,e,t){const o=n[0];if(o<=0||o>0)return n;const s=e*t;let r=Tc[s];if(r===void 0&&(r=new Float32Array(s),Tc[s]=r),e!==0){o.toArray(r,0);for(let l=1,a=0;l!==e;++l)a+=t,n[l].toArray(r,a)}return r}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,o=n.length;t<o;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,o=e.length;t<o;t++)n[t]=e[t]}function cr(n,e){let t=Ec[e];t===void 0&&(t=new Int32Array(e),Ec[e]=t);for(let o=0;o!==e;++o)t[o]=n.allocateTextureUnit();return t}function Vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function jg(n,e){const t=this.cache,o=e.elements;if(o===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(xt(t,o))return;Ic.set(o),n.uniformMatrix2fv(this.addr,!1,Ic),wt(t,o)}}function Yg(n,e){const t=this.cache,o=e.elements;if(o===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(xt(t,o))return;Lc.set(o),n.uniformMatrix3fv(this.addr,!1,Lc),wt(t,o)}}function Xg(n,e){const t=this.cache,o=e.elements;if(o===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(xt(t,o))return;Rc.set(o),n.uniformMatrix4fv(this.addr,!1,Rc),wt(t,o)}}function Kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function e0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function o0(n,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(n.uniform1i(this.addr,s),o[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Vu:qu;t.setTexture2D(e||r,s)}function s0(n,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(n.uniform1i(this.addr,s),o[0]=s),t.setTexture3D(e||Wu,s)}function r0(n,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(n.uniform1i(this.addr,s),o[0]=s),t.setTextureCube(e||$u,s)}function a0(n,e,t){const o=this.cache,s=t.allocateTextureUnit();o[0]!==s&&(n.uniform1i(this.addr,s),o[0]=s),t.setTexture2DArray(e||zu,s)}function l0(n){switch(n){case 5126:return Vg;case 35664:return zg;case 35665:return Wg;case 35666:return $g;case 35674:return jg;case 35675:return Yg;case 35676:return Xg;case 5124:case 35670:return Kg;case 35667:case 35671:return Qg;case 35668:case 35672:return Jg;case 35669:case 35673:return Zg;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}function c0(n,e){n.uniform1fv(this.addr,e)}function u0(n,e){const t=yo(e,this.size,2);n.uniform2fv(this.addr,t)}function d0(n,e){const t=yo(e,this.size,3);n.uniform3fv(this.addr,t)}function h0(n,e){const t=yo(e,this.size,4);n.uniform4fv(this.addr,t)}function f0(n,e){const t=yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function p0(n,e){const t=yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function m0(n,e){const t=yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function g0(n,e){n.uniform1iv(this.addr,e)}function v0(n,e){n.uniform2iv(this.addr,e)}function b0(n,e){n.uniform3iv(this.addr,e)}function y0(n,e){n.uniform4iv(this.addr,e)}function M0(n,e){n.uniform1uiv(this.addr,e)}function _0(n,e){n.uniform2uiv(this.addr,e)}function S0(n,e){n.uniform3uiv(this.addr,e)}function x0(n,e){n.uniform4uiv(this.addr,e)}function w0(n,e,t){const o=this.cache,s=e.length,r=cr(t,s);xt(o,r)||(n.uniform1iv(this.addr,r),wt(o,r));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||qu,r[l])}function C0(n,e,t){const o=this.cache,s=e.length,r=cr(t,s);xt(o,r)||(n.uniform1iv(this.addr,r),wt(o,r));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||Wu,r[l])}function A0(n,e,t){const o=this.cache,s=e.length,r=cr(t,s);xt(o,r)||(n.uniform1iv(this.addr,r),wt(o,r));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||$u,r[l])}function T0(n,e,t){const o=this.cache,s=e.length,r=cr(t,s);xt(o,r)||(n.uniform1iv(this.addr,r),wt(o,r));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||zu,r[l])}function E0(n){switch(n){case 5126:return c0;case 35664:return u0;case 35665:return d0;case 35666:return h0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return v0;case 35668:case 35672:return b0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return _0;case 36295:return S0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return T0}}class R0{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.setValue=l0(t.type)}}class L0{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}}class I0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,o){const s=this.seq;for(let r=0,l=s.length;r!==l;++r){const a=s[r];a.setValue(e,t[a.id],o)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Pc(n,e){n.seq.push(e),n.map[e.id]=e}function P0(n,e,t){const o=n.name,s=o.length;for(ea.lastIndex=0;;){const r=ea.exec(o),l=ea.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&l+2===s){Pc(t,u===void 0?new R0(a,n,e):new L0(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new I0(a),Pc(t,f)),t=f}}}class Ns{constructor(e,t){this.seq=[],this.map={};const o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<o;++s){const r=e.getActiveUniform(t,s),l=e.getUniformLocation(t,r.name);P0(r,l,this)}}setValue(e,t,o,s){const r=this.map[t];r!==void 0&&r.setValue(e,o,s)}setOptional(e,t,o){const s=t[o];s!==void 0&&this.setValue(e,o,s)}static upload(e,t,o,s){for(let r=0,l=t.length;r!==l;++r){const a=t[r],c=o[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const o=[];for(let s=0,r=e.length;s!==r;++s){const l=e[s];l.id in t&&o.push(l)}return o}}function Dc(n,e,t){const o=n.createShader(e);return n.shaderSource(o,t),n.compileShader(o),o}const D0=37297;let N0=0;function k0(n,e){const t=n.split(`
`),o=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let l=s;l<r;l++){const a=l+1;o.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return o.join(`
`)}function F0(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let o;switch(e===t?o="":e===zs&&t===Vs?o="LinearDisplayP3ToLinearSRGB":e===Vs&&t===zs&&(o="LinearSRGBToLinearDisplayP3"),n){case On:case rr:return[o,"LinearTransferOETF"];case yt:case Ga:return[o,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[o,"LinearTransferOETF"]}}function Nc(n,e,t){const o=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(o&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const l=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+k0(n.getShaderSource(e),l)}else return s}function U0(n,e){const t=F0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function B0(n,e){let t;switch(e){case kh:t="Linear";break;case Fh:t="Reinhard";break;case Uh:t="OptimizedCineon";break;case mu:t="ACESFilmic";break;case Oh:t="AgX";break;case Bh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function G0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zi).join(`
`)}function H0(n){const e=[];for(const t in n){const o=n[t];o!==!1&&e.push("#define "+t+" "+o)}return e.join(`
`)}function q0(n,e){const t={},o=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<o;s++){const r=n.getActiveAttrib(e,s),l=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[l]={type:r.type,location:n.getAttribLocation(e,l),locationSize:a}}return t}function Zi(n){return n!==""}function kc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(n){return n.replace(V0,W0)}const z0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function W0(n,e){let t=Je[e];if(t===void 0){const o=z0.get(e);if(o!==void 0)t=Je[o],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("Can not resolve #include <"+e+">")}return ba(t)}const $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(n){return n.replace($0,j0)}function j0(n,e,t,o){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=o.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function Q0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pu:e="ENVMAP_BLENDING_MULTIPLY";break;case Dh:e="ENVMAP_BLENDING_MIX";break;case Nh:e="ENVMAP_BLENDING_ADD";break}return e}function J0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:o,maxMip:t}}function Z0(n,e,t,o){const s=n.getContext(),r=t.defines;let l=t.vertexShader,a=t.fragmentShader;const c=Y0(t),u=X0(t),d=K0(t),f=Q0(t),p=J0(t),v=t.isWebGL2?"":O0(t),b=G0(t),y=H0(r),g=s.createProgram();let h,C,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Zi).join(`
`),h.length>0&&(h+=`
`),C=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Zi).join(`
`),C.length>0&&(C+=`
`)):(h=[Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),C=[v,Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Kn?B0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),l=ba(l),l=kc(l,t),l=Fc(l,t),a=ba(a),a=kc(a,t),a=Fc(a,t),l=Uc(l),a=Uc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,h=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const S=m+h+l,L=m+C+a,T=Dc(s,s.VERTEX_SHADER,S),R=Dc(s,s.FRAGMENT_SHADER,L);s.attachShader(g,T),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function V($){if(n.debug.checkShaderErrors){const ue=s.getProgramInfoLog(g).trim(),D=s.getShaderInfoLog(T).trim(),X=s.getShaderInfoLog(R).trim();let z=!0,Q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,T,R);else{const J=Nc(s,T,"vertex"),le=Nc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+ue+`
`+J+`
`+le)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(D===""||X==="")&&(Q=!1);Q&&($.diagnostics={runnable:z,programLog:ue,vertexShader:{log:D,prefix:h},fragmentShader:{log:X,prefix:C}})}s.deleteShader(T),s.deleteShader(R),w=new Ns(s,g),x=q0(s,g)}let w;this.getUniforms=function(){return w===void 0&&V(this),w};let x;this.getAttributes=function(){return x===void 0&&V(this),x};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(g,D0)),q},this.destroy=function(){o.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=R,this}let ev=0;class tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,o=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(o),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const o of t)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let o=t.get(e);return o===void 0&&(o=new Set,t.set(e,o)),o}_getShaderStage(e){const t=this.shaderCache;let o=t.get(e);return o===void 0&&(o=new nv(e),t.set(e,o)),o}}class nv{constructor(e){this.id=ev++,this.code=e,this.usedTimes=0}}function iv(n,e,t,o,s,r,l){const a=new Pu,c=new tv,u=[],d=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures;let v=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return w===0?"uv":`uv${w}`}function g(w,x,q,$,ue){const D=$.fog,X=ue.geometry,z=w.isMeshStandardMaterial?$.environment:null,Q=(w.isMeshStandardMaterial?t:e).get(w.envMap||z),J=Q&&Q.mapping===sr?Q.image.height:null,le=b[w.type];w.precision!==null&&(v=s.getMaxPrecision(w.precision),v!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const oe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=oe!==void 0?oe.length:0;let ve=0;X.morphAttributes.position!==void 0&&(ve=1),X.morphAttributes.normal!==void 0&&(ve=2),X.morphAttributes.color!==void 0&&(ve=3);let B,j,re,Me;if(le){const kt=xn[le];B=kt.vertexShader,j=kt.fragmentShader}else B=w.vertexShader,j=w.fragmentShader,c.update(w),re=c.getVertexShaderID(w),Me=c.getFragmentShaderID(w);const Ae=n.getRenderTarget(),ae=ue.isInstancedMesh===!0,P=ue.isBatchedMesh===!0,k=!!w.map,G=!!w.matcap,I=!!Q,ne=!!w.aoMap,ie=!!w.lightMap,ye=!!w.bumpMap,be=!!w.normalMap,Be=!!w.displacementMap,Ie=!!w.emissiveMap,A=!!w.metalnessMap,_=!!w.roughnessMap,W=w.anisotropy>0,he=w.clearcoat>0,ce=w.iridescence>0,se=w.sheen>0,Ee=w.transmission>0,_e=W&&!!w.anisotropyMap,Ce=he&&!!w.clearcoatMap,Fe=he&&!!w.clearcoatNormalMap,Ge=he&&!!w.clearcoatRoughnessMap,H=ce&&!!w.iridescenceMap,Se=ce&&!!w.iridescenceThicknessMap,Pe=se&&!!w.sheenColorMap,Ne=se&&!!w.sheenRoughnessMap,we=!!w.specularMap,fe=!!w.specularColorMap,xe=!!w.specularIntensityMap,pe=Ee&&!!w.transmissionMap,Ve=Ee&&!!w.thicknessMap,He=!!w.gradientMap,me=!!w.alphaMap,F=w.alphaTest>0,Re=!!w.alphaHash,De=!!w.extensions,$e=!!X.attributes.uv1,je=!!X.attributes.uv2,at=!!X.attributes.uv3;let lt=Kn;return w.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(lt=n.toneMapping),{isWebGL2:d,shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:B,fragmentShader:j,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:Me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,batching:P,instancing:ae,instancingColor:ae&&ue.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:On,map:k,matcap:G,envMap:I,envMapMode:I&&Q.mapping,envMapCubeUVHeight:J,aoMap:ne,lightMap:ie,bumpMap:ye,normalMap:be,displacementMap:p&&Be,emissiveMap:Ie,normalMapObjectSpace:be&&w.normalMapType===Qh,normalMapTangentSpace:be&&w.normalMapType===Cu,metalnessMap:A,roughnessMap:_,anisotropy:W,anisotropyMap:_e,clearcoat:he,clearcoatMap:Ce,clearcoatNormalMap:Fe,clearcoatRoughnessMap:Ge,iridescence:ce,iridescenceMap:H,iridescenceThicknessMap:Se,sheen:se,sheenColorMap:Pe,sheenRoughnessMap:Ne,specularMap:we,specularColorMap:fe,specularIntensityMap:xe,transmission:Ee,transmissionMap:pe,thicknessMap:Ve,gradientMap:He,opaque:w.transparent===!1&&w.blending===io,alphaMap:me,alphaTest:F,alphaHash:Re,combine:w.combine,mapUv:k&&y(w.map.channel),aoMapUv:ne&&y(w.aoMap.channel),lightMapUv:ie&&y(w.lightMap.channel),bumpMapUv:ye&&y(w.bumpMap.channel),normalMapUv:be&&y(w.normalMap.channel),displacementMapUv:Be&&y(w.displacementMap.channel),emissiveMapUv:Ie&&y(w.emissiveMap.channel),metalnessMapUv:A&&y(w.metalnessMap.channel),roughnessMapUv:_&&y(w.roughnessMap.channel),anisotropyMapUv:_e&&y(w.anisotropyMap.channel),clearcoatMapUv:Ce&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:H&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(w.sheenRoughnessMap.channel),specularMapUv:we&&y(w.specularMap.channel),specularColorMapUv:fe&&y(w.specularColorMap.channel),specularIntensityMapUv:xe&&y(w.specularIntensityMap.channel),transmissionMapUv:pe&&y(w.transmissionMap.channel),thicknessMapUv:Ve&&y(w.thicknessMap.channel),alphaMapUv:me&&y(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(be||W),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:je,vertexUv3s:at,pointsUvs:ue.isPoints===!0&&!!X.attributes.uv&&(k||me),fog:!!D,useFog:w.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ue.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ve,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:k&&w.map.isVideoTexture===!0&&rt.getTransfer(w.map.colorSpace)===ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===kn,flipSided:w.side===qt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:De&&w.extensions.derivatives===!0,extensionFragDepth:De&&w.extensions.fragDepth===!0,extensionDrawBuffers:De&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&w.extensions.clipCullDistance&&o.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||o.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||o.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||o.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:o.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function h(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const q in w.defines)x.push(q),x.push(w.defines[q]);return w.isRawShaderMaterial===!1&&(C(x,w),m(x,w),x.push(n.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function C(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function m(w,x){a.disableAll(),x.isWebGL2&&a.enable(0),x.supportsVertexTextures&&a.enable(1),x.instancing&&a.enable(2),x.instancingColor&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),w.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function S(w){const x=b[w.type];let q;if(x){const $=xn[x];q=Of.clone($.uniforms)}else q=w.uniforms;return q}function L(w,x){let q;for(let $=0,ue=u.length;$<ue;$++){const D=u[$];if(D.cacheKey===x){q=D,++q.usedTimes;break}}return q===void 0&&(q=new Z0(n,x,w,r),u.push(q)),q}function T(w){if(--w.usedTimes===0){const x=u.indexOf(w);u[x]=u[u.length-1],u.pop(),w.destroy()}}function R(w){c.remove(w)}function V(){c.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:S,acquireProgram:L,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:V}}function ov(){let n=new WeakMap;function e(r){let l=n.get(r);return l===void 0&&(l={},n.set(r,l)),l}function t(r){n.delete(r)}function o(r,l,a){n.get(r)[l]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:o,dispose:s}}function sv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Oc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gc(){const n=[];let e=0;const t=[],o=[],s=[];function r(){e=0,t.length=0,o.length=0,s.length=0}function l(f,p,v,b,y,g){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:v,groupOrder:b,renderOrder:f.renderOrder,z:y,group:g},n[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=v,h.groupOrder=b,h.renderOrder=f.renderOrder,h.z=y,h.group=g),e++,h}function a(f,p,v,b,y,g){const h=l(f,p,v,b,y,g);v.transmission>0?o.push(h):v.transparent===!0?s.push(h):t.push(h)}function c(f,p,v,b,y,g){const h=l(f,p,v,b,y,g);v.transmission>0?o.unshift(h):v.transparent===!0?s.unshift(h):t.unshift(h)}function u(f,p){t.length>1&&t.sort(f||sv),o.length>1&&o.sort(p||Oc),s.length>1&&s.sort(p||Oc)}function d(){for(let f=e,p=n.length;f<p;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:o,transparent:s,init:r,push:a,unshift:c,finish:d,sort:u}}function rv(){let n=new WeakMap;function e(o,s){const r=n.get(o);let l;return r===void 0?(l=new Gc,n.set(o,[l])):s>=r.length?(l=new Gc,r.push(l)):l=r[s],l}function t(){n=new WeakMap}return{get:e,dispose:t}}function av(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new nt};break;case"SpotLight":t={position:new K,direction:new K,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function lv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cv=0;function uv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dv(n,e){const t=new av,o=lv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new K);const r=new K,l=new Mt,a=new Mt;function c(d,f){let p=0,v=0,b=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let y=0,g=0,h=0,C=0,m=0,S=0,L=0,T=0,R=0,V=0,w=0;d.sort(uv);const x=f===!0?Math.PI:1;for(let $=0,ue=d.length;$<ue;$++){const D=d[$],X=D.color,z=D.intensity,Q=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)p+=X.r*z*x,v+=X.g*z*x,b+=X.b*z*x;else if(D.isLightProbe){for(let le=0;le<9;le++)s.probe[le].addScaledVector(D.sh.coefficients[le],z);w++}else if(D.isDirectionalLight){const le=t.get(D);if(le.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){const oe=D.shadow,de=o.get(D);de.shadowBias=oe.bias,de.shadowNormalBias=oe.normalBias,de.shadowRadius=oe.radius,de.shadowMapSize=oe.mapSize,s.directionalShadow[y]=de,s.directionalShadowMap[y]=J,s.directionalShadowMatrix[y]=D.shadow.matrix,S++}s.directional[y]=le,y++}else if(D.isSpotLight){const le=t.get(D);le.position.setFromMatrixPosition(D.matrixWorld),le.color.copy(X).multiplyScalar(z*x),le.distance=Q,le.coneCos=Math.cos(D.angle),le.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),le.decay=D.decay,s.spot[h]=le;const oe=D.shadow;if(D.map&&(s.spotLightMap[R]=D.map,R++,oe.updateMatrices(D),D.castShadow&&V++),s.spotLightMatrix[h]=oe.matrix,D.castShadow){const de=o.get(D);de.shadowBias=oe.bias,de.shadowNormalBias=oe.normalBias,de.shadowRadius=oe.radius,de.shadowMapSize=oe.mapSize,s.spotShadow[h]=de,s.spotShadowMap[h]=J,T++}h++}else if(D.isRectAreaLight){const le=t.get(D);le.color.copy(X).multiplyScalar(z),le.halfWidth.set(D.width*.5,0,0),le.halfHeight.set(0,D.height*.5,0),s.rectArea[C]=le,C++}else if(D.isPointLight){const le=t.get(D);if(le.color.copy(D.color).multiplyScalar(D.intensity*x),le.distance=D.distance,le.decay=D.decay,D.castShadow){const oe=D.shadow,de=o.get(D);de.shadowBias=oe.bias,de.shadowNormalBias=oe.normalBias,de.shadowRadius=oe.radius,de.shadowMapSize=oe.mapSize,de.shadowCameraNear=oe.camera.near,de.shadowCameraFar=oe.camera.far,s.pointShadow[g]=de,s.pointShadowMap[g]=J,s.pointShadowMatrix[g]=D.shadow.matrix,L++}s.point[g]=le,g++}else if(D.isHemisphereLight){const le=t.get(D);le.skyColor.copy(D.color).multiplyScalar(z*x),le.groundColor.copy(D.groundColor).multiplyScalar(z*x),s.hemi[m]=le,m++}}C>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=v,s.ambient[2]=b;const q=s.hash;(q.directionalLength!==y||q.pointLength!==g||q.spotLength!==h||q.rectAreaLength!==C||q.hemiLength!==m||q.numDirectionalShadows!==S||q.numPointShadows!==L||q.numSpotShadows!==T||q.numSpotMaps!==R||q.numLightProbes!==w)&&(s.directional.length=y,s.spot.length=h,s.rectArea.length=C,s.point.length=g,s.hemi.length=m,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=T+R-V,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=w,q.directionalLength=y,q.pointLength=g,q.spotLength=h,q.rectAreaLength=C,q.hemiLength=m,q.numDirectionalShadows=S,q.numPointShadows=L,q.numSpotShadows=T,q.numSpotMaps=R,q.numLightProbes=w,s.version=cv++)}function u(d,f){let p=0,v=0,b=0,y=0,g=0;const h=f.matrixWorldInverse;for(let C=0,m=d.length;C<m;C++){const S=d[C];if(S.isDirectionalLight){const L=s.directional[p];L.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(h),p++}else if(S.isSpotLight){const L=s.spot[b];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(h),L.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(h),b++}else if(S.isRectAreaLight){const L=s.rectArea[y];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(h),a.identity(),l.copy(S.matrixWorld),l.premultiply(h),a.extractRotation(l),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const L=s.point[v];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(h),v++}else if(S.isHemisphereLight){const L=s.hemi[g];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(h),g++}}}return{setup:c,setupView:u,state:s}}function Hc(n,e){const t=new dv(n,e),o=[],s=[];function r(){o.length=0,s.length=0}function l(f){o.push(f)}function a(f){s.push(f)}function c(f){t.setup(o,f)}function u(f){t.setupView(o,f)}return{init:r,state:{lightsArray:o,shadowsArray:s,lights:t},setupLights:c,setupLightsView:u,pushLight:l,pushShadow:a}}function hv(n,e){let t=new WeakMap;function o(r,l=0){const a=t.get(r);let c;return a===void 0?(c=new Hc(n,e),t.set(r,[c])):l>=a.length?(c=new Hc(n,e),a.push(c)):c=a[l],c}function s(){t=new WeakMap}return{get:o,dispose:s}}class fv extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pv extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vv(n,e,t){let o=new qa;const s=new ot,r=new ot,l=new Et,a=new fv({depthPacking:Kh}),c=new pv,u={},d=t.maxTextureSize,f={[Zn]:qt,[qt]:Zn,[kn]:kn},p=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:mv,fragmentShader:gv}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const b=new Kt;b.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new st(b,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let h=this.type;this.render=function(T,R,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const w=n.getRenderTarget(),x=n.getActiveCubeFace(),q=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Xn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ue=h!==Dn&&this.type===Dn,D=h===Dn&&this.type!==Dn;for(let X=0,z=T.length;X<z;X++){const Q=T[X],J=Q.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const le=J.getFrameExtents();if(s.multiply(le),r.copy(J.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/le.x),s.x=r.x*le.x,J.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/le.y),s.y=r.y*le.y,J.mapSize.y=r.y)),J.map===null||ue===!0||D===!0){const de=this.type!==Dn?{minFilter:Gt,magFilter:Gt}:{};J.map!==null&&J.map.dispose(),J.map=new Ei(s.x,s.y,de),J.map.texture.name=Q.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const oe=J.getViewportCount();for(let de=0;de<oe;de++){const ve=J.getViewport(de);l.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),$.viewport(l),J.updateMatrices(Q,de),o=J.getFrustum(),S(R,V,J.camera,Q,this.type)}J.isPointLightShadow!==!0&&this.type===Dn&&C(J,V),J.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(w,x,q)};function C(T,R){const V=e.update(y);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,v.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ei(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,V,p,y,null),v.uniforms.shadow_pass.value=T.mapPass.texture,v.uniforms.resolution.value=T.mapSize,v.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,V,v,y,null)}function m(T,R,V,w){let x=null;const q=V.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(q!==void 0)x=q;else if(x=V.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const $=x.uuid,ue=R.uuid;let D=u[$];D===void 0&&(D={},u[$]=D);let X=D[ue];X===void 0&&(X=x.clone(),D[ue]=X,R.addEventListener("dispose",L)),x=X}if(x.visible=R.visible,x.wireframe=R.wireframe,w===Dn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,V.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=n.properties.get(x);$.light=V}return x}function S(T,R,V,w,x){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Dn)&&(!T.frustumCulled||o.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld);const ue=e.update(T),D=T.material;if(Array.isArray(D)){const X=ue.groups;for(let z=0,Q=X.length;z<Q;z++){const J=X[z],le=D[J.materialIndex];if(le&&le.visible){const oe=m(T,le,w,x);T.onBeforeShadow(n,T,R,V,ue,oe,J),n.renderBufferDirect(V,null,ue,oe,T,J),T.onAfterShadow(n,T,R,V,ue,oe,J)}}}else if(D.visible){const X=m(T,D,w,x);T.onBeforeShadow(n,T,R,V,ue,X,null),n.renderBufferDirect(V,null,ue,X,T,null),T.onAfterShadow(n,T,R,V,ue,X,null)}}const $=T.children;for(let ue=0,D=$.length;ue<D;ue++)S($[ue],R,V,w,x)}function L(T){T.target.removeEventListener("dispose",L);for(const V in u){const w=u[V],x=T.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}function bv(n,e,t){const o=t.isWebGL2;function s(){let F=!1;const Re=new Et;let De=null;const $e=new Et(0,0,0,0);return{setMask:function(je){De!==je&&!F&&(n.colorMask(je,je,je,je),De=je)},setLocked:function(je){F=je},setClear:function(je,at,lt,Ct,kt){kt===!0&&(je*=Ct,at*=Ct,lt*=Ct),Re.set(je,at,lt,Ct),$e.equals(Re)===!1&&(n.clearColor(je,at,lt,Ct),$e.copy(Re))},reset:function(){F=!1,De=null,$e.set(-1,0,0,0)}}}function r(){let F=!1,Re=null,De=null,$e=null;return{setTest:function(je){je?P(n.DEPTH_TEST):k(n.DEPTH_TEST)},setMask:function(je){Re!==je&&!F&&(n.depthMask(je),Re=je)},setFunc:function(je){if(De!==je){switch(je){case Ah:n.depthFunc(n.NEVER);break;case Th:n.depthFunc(n.ALWAYS);break;case Eh:n.depthFunc(n.LESS);break;case Hs:n.depthFunc(n.LEQUAL);break;case Rh:n.depthFunc(n.EQUAL);break;case Lh:n.depthFunc(n.GEQUAL);break;case Ih:n.depthFunc(n.GREATER);break;case Ph:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=je}},setLocked:function(je){F=je},setClear:function(je){$e!==je&&(n.clearDepth(je),$e=je)},reset:function(){F=!1,Re=null,De=null,$e=null}}}function l(){let F=!1,Re=null,De=null,$e=null,je=null,at=null,lt=null,Ct=null,kt=null;return{setTest:function(ct){F||(ct?P(n.STENCIL_TEST):k(n.STENCIL_TEST))},setMask:function(ct){Re!==ct&&!F&&(n.stencilMask(ct),Re=ct)},setFunc:function(ct,Ft,_n){(De!==ct||$e!==Ft||je!==_n)&&(n.stencilFunc(ct,Ft,_n),De=ct,$e=Ft,je=_n)},setOp:function(ct,Ft,_n){(at!==ct||lt!==Ft||Ct!==_n)&&(n.stencilOp(ct,Ft,_n),at=ct,lt=Ft,Ct=_n)},setLocked:function(ct){F=ct},setClear:function(ct){kt!==ct&&(n.clearStencil(ct),kt=ct)},reset:function(){F=!1,Re=null,De=null,$e=null,je=null,at=null,lt=null,Ct=null,kt=null}}}const a=new s,c=new r,u=new l,d=new WeakMap,f=new WeakMap;let p={},v={},b=new WeakMap,y=[],g=null,h=!1,C=null,m=null,S=null,L=null,T=null,R=null,V=null,w=new nt(0,0,0),x=0,q=!1,$=null,ue=null,D=null,X=null,z=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,le=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(oe)[1]),J=le>=1):oe.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),J=le>=2);let de=null,ve={};const B=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),re=new Et().fromArray(B),Me=new Et().fromArray(j);function Ae(F,Re,De,$e){const je=new Uint8Array(4),at=n.createTexture();n.bindTexture(F,at),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<De;lt++)o&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(Re,0,n.RGBA,1,1,$e,0,n.RGBA,n.UNSIGNED_BYTE,je):n.texImage2D(Re+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,je);return at}const ae={};ae[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),o&&(ae[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),P(n.DEPTH_TEST),c.setFunc(Hs),Ie(!1),A(xl),P(n.CULL_FACE),be(Xn);function P(F){p[F]!==!0&&(n.enable(F),p[F]=!0)}function k(F){p[F]!==!1&&(n.disable(F),p[F]=!1)}function G(F,Re){return v[F]!==Re?(n.bindFramebuffer(F,Re),v[F]=Re,o&&(F===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Re),F===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Re)),!0):!1}function I(F,Re){let De=y,$e=!1;if(F)if(De=b.get(Re),De===void 0&&(De=[],b.set(Re,De)),F.isWebGLMultipleRenderTargets){const je=F.texture;if(De.length!==je.length||De[0]!==n.COLOR_ATTACHMENT0){for(let at=0,lt=je.length;at<lt;at++)De[at]=n.COLOR_ATTACHMENT0+at;De.length=je.length,$e=!0}}else De[0]!==n.COLOR_ATTACHMENT0&&(De[0]=n.COLOR_ATTACHMENT0,$e=!0);else De[0]!==n.BACK&&(De[0]=n.BACK,$e=!0);$e&&(t.isWebGL2?n.drawBuffers(De):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(De))}function ne(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const ie={[bi]:n.FUNC_ADD,[dh]:n.FUNC_SUBTRACT,[hh]:n.FUNC_REVERSE_SUBTRACT};if(o)ie[Al]=n.MIN,ie[Tl]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(ie[Al]=F.MIN_EXT,ie[Tl]=F.MAX_EXT)}const ye={[fh]:n.ZERO,[ph]:n.ONE,[mh]:n.SRC_COLOR,[ua]:n.SRC_ALPHA,[_h]:n.SRC_ALPHA_SATURATE,[yh]:n.DST_COLOR,[vh]:n.DST_ALPHA,[gh]:n.ONE_MINUS_SRC_COLOR,[da]:n.ONE_MINUS_SRC_ALPHA,[Mh]:n.ONE_MINUS_DST_COLOR,[bh]:n.ONE_MINUS_DST_ALPHA,[Sh]:n.CONSTANT_COLOR,[xh]:n.ONE_MINUS_CONSTANT_COLOR,[wh]:n.CONSTANT_ALPHA,[Ch]:n.ONE_MINUS_CONSTANT_ALPHA};function be(F,Re,De,$e,je,at,lt,Ct,kt,ct){if(F===Xn){h===!0&&(k(n.BLEND),h=!1);return}if(h===!1&&(P(n.BLEND),h=!0),F!==uh){if(F!==C||ct!==q){if((m!==bi||T!==bi)&&(n.blendEquation(n.FUNC_ADD),m=bi,T=bi),ct)switch(F){case io:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sn:n.blendFunc(n.ONE,n.ONE);break;case wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case io:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,L=null,R=null,V=null,w.set(0,0,0),x=0,C=F,q=ct}return}je=je||Re,at=at||De,lt=lt||$e,(Re!==m||je!==T)&&(n.blendEquationSeparate(ie[Re],ie[je]),m=Re,T=je),(De!==S||$e!==L||at!==R||lt!==V)&&(n.blendFuncSeparate(ye[De],ye[$e],ye[at],ye[lt]),S=De,L=$e,R=at,V=lt),(Ct.equals(w)===!1||kt!==x)&&(n.blendColor(Ct.r,Ct.g,Ct.b,kt),w.copy(Ct),x=kt),C=F,q=!1}function Be(F,Re){F.side===kn?k(n.CULL_FACE):P(n.CULL_FACE);let De=F.side===qt;Re&&(De=!De),Ie(De),F.blending===io&&F.transparent===!1?be(Xn):be(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),a.setMask(F.colorWrite);const $e=F.stencilWrite;u.setTest($e),$e&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),W(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?P(n.SAMPLE_ALPHA_TO_COVERAGE):k(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(F){$!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),$=F)}function A(F){F!==ah?(P(n.CULL_FACE),F!==ue&&(F===xl?n.cullFace(n.BACK):F===lh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):k(n.CULL_FACE),ue=F}function _(F){F!==D&&(J&&n.lineWidth(F),D=F)}function W(F,Re,De){F?(P(n.POLYGON_OFFSET_FILL),(X!==Re||z!==De)&&(n.polygonOffset(Re,De),X=Re,z=De)):k(n.POLYGON_OFFSET_FILL)}function he(F){F?P(n.SCISSOR_TEST):k(n.SCISSOR_TEST)}function ce(F){F===void 0&&(F=n.TEXTURE0+Q-1),de!==F&&(n.activeTexture(F),de=F)}function se(F,Re,De){De===void 0&&(de===null?De=n.TEXTURE0+Q-1:De=de);let $e=ve[De];$e===void 0&&($e={type:void 0,texture:void 0},ve[De]=$e),($e.type!==F||$e.texture!==Re)&&(de!==De&&(n.activeTexture(De),de=De),n.bindTexture(F,Re||ae[F]),$e.type=F,$e.texture=Re)}function Ee(){const F=ve[de];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(F){re.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),re.copy(F))}function pe(F){Me.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Me.copy(F))}function Ve(F,Re){let De=f.get(Re);De===void 0&&(De=new WeakMap,f.set(Re,De));let $e=De.get(F);$e===void 0&&($e=n.getUniformBlockIndex(Re,F.name),De.set(F,$e))}function He(F,Re){const $e=f.get(Re).get(F);d.get(Re)!==$e&&(n.uniformBlockBinding(Re,$e,F.__bindingPointIndex),d.set(Re,$e))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),o===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},de=null,ve={},v={},b=new WeakMap,y=[],g=null,h=!1,C=null,m=null,S=null,L=null,T=null,R=null,V=null,w=new nt(0,0,0),x=0,q=!1,$=null,ue=null,D=null,X=null,z=null,re.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:P,disable:k,bindFramebuffer:G,drawBuffers:I,useProgram:ne,setBlending:be,setMaterial:Be,setFlipSided:Ie,setCullFace:A,setLineWidth:_,setPolygonOffset:W,setScissorTest:he,activeTexture:ce,bindTexture:se,unbindTexture:Ee,compressedTexImage2D:_e,compressedTexImage3D:Ce,texImage2D:we,texImage3D:fe,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:Pe,texStorage3D:Ne,texSubImage2D:Fe,texSubImage3D:Ge,compressedTexSubImage2D:H,compressedTexSubImage3D:Se,scissor:xe,viewport:pe,reset:me}}function yv(n,e,t,o,s,r,l){const a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,_){return v?new OffscreenCanvas(A,_):js("canvas")}function y(A,_,W,he){let ce=1;if((A.width>he||A.height>he)&&(ce=he/Math.max(A.width,A.height)),ce<1||_===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const se=_?$s:Math.floor,Ee=se(ce*A.width),_e=se(ce*A.height);f===void 0&&(f=b(Ee,_e));const Ce=W?b(Ee,_e):f;return Ce.width=Ee,Ce.height=_e,Ce.getContext("2d").drawImage(A,0,0,Ee,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ee+"x"+_e+")."),Ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return va(A.width)&&va(A.height)}function h(A){return a?!1:A.wrapS!==fn||A.wrapT!==fn||A.minFilter!==Gt&&A.minFilter!==tn}function C(A,_){return A.generateMipmaps&&_&&A.minFilter!==Gt&&A.minFilter!==tn}function m(A){n.generateMipmap(A)}function S(A,_,W,he,ce=!1){if(a===!1)return _;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=_;if(_===n.RED&&(W===n.FLOAT&&(se=n.R32F),W===n.HALF_FLOAT&&(se=n.R16F),W===n.UNSIGNED_BYTE&&(se=n.R8)),_===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.R8UI),W===n.UNSIGNED_SHORT&&(se=n.R16UI),W===n.UNSIGNED_INT&&(se=n.R32UI),W===n.BYTE&&(se=n.R8I),W===n.SHORT&&(se=n.R16I),W===n.INT&&(se=n.R32I)),_===n.RG&&(W===n.FLOAT&&(se=n.RG32F),W===n.HALF_FLOAT&&(se=n.RG16F),W===n.UNSIGNED_BYTE&&(se=n.RG8)),_===n.RGBA){const Ee=ce?qs:rt.getTransfer(he);W===n.FLOAT&&(se=n.RGBA32F),W===n.HALF_FLOAT&&(se=n.RGBA16F),W===n.UNSIGNED_BYTE&&(se=Ee===ut?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function L(A,_,W){return C(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==tn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function T(A){return A===Gt||A===El||A===Tr?n.NEAREST:n.LINEAR}function R(A){const _=A.target;_.removeEventListener("dispose",R),w(_),_.isVideoTexture&&d.delete(_)}function V(A){const _=A.target;_.removeEventListener("dispose",V),q(_)}function w(A){const _=o.get(A);if(_.__webglInit===void 0)return;const W=A.source,he=p.get(W);if(he){const ce=he[_.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&x(A),Object.keys(he).length===0&&p.delete(W)}o.remove(A)}function x(A){const _=o.get(A);n.deleteTexture(_.__webglTexture);const W=A.source,he=p.get(W);delete he[_.__cacheKey],l.memory.textures--}function q(A){const _=A.texture,W=o.get(A),he=o.get(_);if(he.__webglTexture!==void 0&&(n.deleteTexture(he.__webglTexture),l.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(W.__webglFramebuffer[ce]))for(let se=0;se<W.__webglFramebuffer[ce].length;se++)n.deleteFramebuffer(W.__webglFramebuffer[ce][se]);else n.deleteFramebuffer(W.__webglFramebuffer[ce]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[ce])}else{if(Array.isArray(W.__webglFramebuffer))for(let ce=0;ce<W.__webglFramebuffer.length;ce++)n.deleteFramebuffer(W.__webglFramebuffer[ce]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ce=0;ce<W.__webglColorRenderbuffer.length;ce++)W.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[ce]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ce=0,se=_.length;ce<se;ce++){const Ee=o.get(_[ce]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),l.memory.textures--),o.remove(_[ce])}o.remove(_),o.remove(A)}let $=0;function ue(){$=0}function D(){const A=$;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),$+=1,A}function X(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function z(A,_){const W=o.get(A);if(A.isVideoTexture&&Be(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const he=A.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(W,A,_);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+_)}function Q(A,_){const W=o.get(A);if(A.version>0&&W.__version!==A.version){re(W,A,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+_)}function J(A,_){const W=o.get(A);if(A.version>0&&W.__version!==A.version){re(W,A,_);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+_)}function le(A,_){const W=o.get(A);if(A.version>0&&W.__version!==A.version){Me(W,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+_)}const oe={[pa]:n.REPEAT,[fn]:n.CLAMP_TO_EDGE,[ma]:n.MIRRORED_REPEAT},de={[Gt]:n.NEAREST,[El]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Gh]:n.LINEAR_MIPMAP_NEAREST,[Vo]:n.LINEAR_MIPMAP_LINEAR},ve={[Jh]:n.NEVER,[sf]:n.ALWAYS,[Zh]:n.LESS,[Au]:n.LEQUAL,[ef]:n.EQUAL,[of]:n.GEQUAL,[tf]:n.GREATER,[nf]:n.NOTEQUAL};function B(A,_,W){if(W?(n.texParameteri(A,n.TEXTURE_WRAP_S,oe[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,oe[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,oe[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,de[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,de[_.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==fn||_.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,T(_.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,T(_.minFilter)),_.minFilter!==Gt&&_.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ve[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const he=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Gt||_.minFilter!==Tr&&_.minFilter!==Vo||_.type===Yn&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===zo&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||o.get(_).__currentAnisotropy)&&(n.texParameterf(A,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),o.get(_).__currentAnisotropy=_.anisotropy)}}function j(A,_){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const he=_.source;let ce=p.get(he);ce===void 0&&(ce={},p.set(he,ce));const se=X(_);if(se!==A.__cacheKey){ce[se]===void 0&&(ce[se]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,W=!0),ce[se].usedTimes++;const Ee=ce[A.__cacheKey];Ee!==void 0&&(ce[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&x(_)),A.__cacheKey=se,A.__webglTexture=ce[se].texture}return W}function re(A,_,W){let he=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(he=n.TEXTURE_3D);const ce=j(A,_),se=_.source;t.bindTexture(he,A.__webglTexture,n.TEXTURE0+W);const Ee=o.get(se);if(se.version!==Ee.__version||ce===!0){t.activeTexture(n.TEXTURE0+W);const _e=rt.getPrimaries(rt.workingColorSpace),Ce=_.colorSpace===on?null:rt.getPrimaries(_.colorSpace),Fe=_.colorSpace===on||_e===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ge=h(_)&&g(_.image)===!1;let H=y(_.image,Ge,!1,s.maxTextureSize);H=Ie(_,H);const Se=g(H)||a,Pe=r.convert(_.format,_.colorSpace);let Ne=r.convert(_.type),we=S(_.internalFormat,Pe,Ne,_.colorSpace,_.isVideoTexture);B(he,_,Se);let fe;const xe=_.mipmaps,pe=a&&_.isVideoTexture!==!0&&we!==xu,Ve=Ee.__version===void 0||ce===!0,He=L(_,H,Se);if(_.isDepthTexture)we=n.DEPTH_COMPONENT,a?_.type===Yn?we=n.DEPTH_COMPONENT32F:_.type===jn?we=n.DEPTH_COMPONENT24:_.type===xi?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:_.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===wi&&we===n.DEPTH_COMPONENT&&_.type!==Oa&&_.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=jn,Ne=r.convert(_.type)),_.format===uo&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,_.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=xi,Ne=r.convert(_.type))),Ve&&(pe?t.texStorage2D(n.TEXTURE_2D,1,we,H.width,H.height):t.texImage2D(n.TEXTURE_2D,0,we,H.width,H.height,0,Pe,Ne,null));else if(_.isDataTexture)if(xe.length>0&&Se){pe&&Ve&&t.texStorage2D(n.TEXTURE_2D,He,we,xe[0].width,xe[0].height);for(let me=0,F=xe.length;me<F;me++)fe=xe[me],pe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,fe.width,fe.height,Pe,Ne,fe.data):t.texImage2D(n.TEXTURE_2D,me,we,fe.width,fe.height,0,Pe,Ne,fe.data);_.generateMipmaps=!1}else pe?(Ve&&t.texStorage2D(n.TEXTURE_2D,He,we,H.width,H.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,H.width,H.height,Pe,Ne,H.data)):t.texImage2D(n.TEXTURE_2D,0,we,H.width,H.height,0,Pe,Ne,H.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){pe&&Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,we,xe[0].width,xe[0].height,H.depth);for(let me=0,F=xe.length;me<F;me++)fe=xe[me],_.format!==pn?Pe!==null?pe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,fe.width,fe.height,H.depth,Pe,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,we,fe.width,fe.height,H.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,fe.width,fe.height,H.depth,Pe,Ne,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,we,fe.width,fe.height,H.depth,0,Pe,Ne,fe.data)}else{pe&&Ve&&t.texStorage2D(n.TEXTURE_2D,He,we,xe[0].width,xe[0].height);for(let me=0,F=xe.length;me<F;me++)fe=xe[me],_.format!==pn?Pe!==null?pe?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,fe.width,fe.height,Pe,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,me,we,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,fe.width,fe.height,Pe,Ne,fe.data):t.texImage2D(n.TEXTURE_2D,me,we,fe.width,fe.height,0,Pe,Ne,fe.data)}else if(_.isDataArrayTexture)pe?(Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,we,H.width,H.height,H.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,Pe,Ne,H.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,H.width,H.height,H.depth,0,Pe,Ne,H.data);else if(_.isData3DTexture)pe?(Ve&&t.texStorage3D(n.TEXTURE_3D,He,we,H.width,H.height,H.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,Pe,Ne,H.data)):t.texImage3D(n.TEXTURE_3D,0,we,H.width,H.height,H.depth,0,Pe,Ne,H.data);else if(_.isFramebufferTexture){if(Ve)if(pe)t.texStorage2D(n.TEXTURE_2D,He,we,H.width,H.height);else{let me=H.width,F=H.height;for(let Re=0;Re<He;Re++)t.texImage2D(n.TEXTURE_2D,Re,we,me,F,0,Pe,Ne,null),me>>=1,F>>=1}}else if(xe.length>0&&Se){pe&&Ve&&t.texStorage2D(n.TEXTURE_2D,He,we,xe[0].width,xe[0].height);for(let me=0,F=xe.length;me<F;me++)fe=xe[me],pe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Pe,Ne,fe):t.texImage2D(n.TEXTURE_2D,me,we,Pe,Ne,fe);_.generateMipmaps=!1}else pe?(Ve&&t.texStorage2D(n.TEXTURE_2D,He,we,H.width,H.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ne,H)):t.texImage2D(n.TEXTURE_2D,0,we,Pe,Ne,H);C(_,Se)&&m(he),Ee.__version=se.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Me(A,_,W){if(_.image.length!==6)return;const he=j(A,_),ce=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+W);const se=o.get(ce);if(ce.version!==se.__version||he===!0){t.activeTexture(n.TEXTURE0+W);const Ee=rt.getPrimaries(rt.workingColorSpace),_e=_.colorSpace===on?null:rt.getPrimaries(_.colorSpace),Ce=_.colorSpace===on||Ee===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Fe=_.isCompressedTexture||_.image[0].isCompressedTexture,Ge=_.image[0]&&_.image[0].isDataTexture,H=[];for(let me=0;me<6;me++)!Fe&&!Ge?H[me]=y(_.image[me],!1,!0,s.maxCubemapSize):H[me]=Ge?_.image[me].image:_.image[me],H[me]=Ie(_,H[me]);const Se=H[0],Pe=g(Se)||a,Ne=r.convert(_.format,_.colorSpace),we=r.convert(_.type),fe=S(_.internalFormat,Ne,we,_.colorSpace),xe=a&&_.isVideoTexture!==!0,pe=se.__version===void 0||he===!0;let Ve=L(_,Se,Pe);B(n.TEXTURE_CUBE_MAP,_,Pe);let He;if(Fe){xe&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,fe,Se.width,Se.height);for(let me=0;me<6;me++){He=H[me].mipmaps;for(let F=0;F<He.length;F++){const Re=He[F];_.format!==pn?Ne!==null?xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F,0,0,Re.width,Re.height,Ne,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F,fe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F,0,0,Re.width,Re.height,Ne,we,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F,fe,Re.width,Re.height,0,Ne,we,Re.data)}}}else{He=_.mipmaps,xe&&pe&&(He.length>0&&Ve++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,fe,H[0].width,H[0].height));for(let me=0;me<6;me++)if(Ge){xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,H[me].width,H[me].height,Ne,we,H[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,fe,H[me].width,H[me].height,0,Ne,we,H[me].data);for(let F=0;F<He.length;F++){const De=He[F].image[me].image;xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F+1,0,0,De.width,De.height,Ne,we,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F+1,fe,De.width,De.height,0,Ne,we,De.data)}}else{xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ne,we,H[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,fe,Ne,we,H[me]);for(let F=0;F<He.length;F++){const Re=He[F];xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F+1,0,0,Ne,we,Re.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F+1,fe,Ne,we,Re.image[me])}}}C(_,Pe)&&m(n.TEXTURE_CUBE_MAP),se.__version=ce.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ae(A,_,W,he,ce,se){const Ee=r.convert(W.format,W.colorSpace),_e=r.convert(W.type),Ce=S(W.internalFormat,Ee,_e,W.colorSpace);if(!o.get(_).__hasExternalTextures){const Ge=Math.max(1,_.width>>se),H=Math.max(1,_.height>>se);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,se,Ce,Ge,H,_.depth,0,Ee,_e,null):t.texImage2D(ce,se,Ce,Ge,H,0,Ee,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),be(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,ce,o.get(W).__webglTexture,0,ye(_)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,ce,o.get(W).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(A,_,W){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer&&!_.stencilBuffer){let he=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||be(_)){const ce=_.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Yn?he=n.DEPTH_COMPONENT32F:ce.type===jn&&(he=n.DEPTH_COMPONENT24));const se=ye(_);be(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,he,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,he,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,he,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(_.depthBuffer&&_.stencilBuffer){const he=ye(_);W&&be(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,n.DEPTH24_STENCIL8,_.width,_.height):be(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const he=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ce=0;ce<he.length;ce++){const se=he[ce],Ee=r.convert(se.format,se.colorSpace),_e=r.convert(se.type),Ce=S(se.internalFormat,Ee,_e,se.colorSpace),Fe=ye(_);W&&be(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ce,_.width,_.height):be(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Ce,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function P(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!o.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z(_.depthTexture,0);const he=o.get(_.depthTexture).__webglTexture,ce=ye(_);if(_.depthTexture.format===wi)be(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(_.depthTexture.format===uo)be(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function k(A){const _=o.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");P(_.__webglFramebuffer,A)}else if(W){_.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[he]),_.__webglDepthbuffer[he]=n.createRenderbuffer(),ae(_.__webglDepthbuffer[he],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),ae(_.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(A,_,W){const he=o.get(A);_!==void 0&&Ae(he.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&k(A)}function I(A){const _=A.texture,W=o.get(A),he=o.get(_);A.addEventListener("dispose",V),A.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=_.version,l.memory.textures++);const ce=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,Ee=g(A)||a;if(ce){W.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer[_e]=[];for(let Ce=0;Ce<_.mipmaps.length;Ce++)W.__webglFramebuffer[_e][Ce]=n.createFramebuffer()}else W.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer=[];for(let _e=0;_e<_.mipmaps.length;_e++)W.__webglFramebuffer[_e]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(se)if(s.drawBuffers){const _e=A.texture;for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const Ge=o.get(_e[Ce]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&be(A)===!1){const _e=se?_:[_];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Fe=_e[Ce];W.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Ce]);const Ge=r.convert(Fe.format,Fe.colorSpace),H=r.convert(Fe.type),Se=S(Fe.internalFormat,Ge,H,Fe.colorSpace,A.isXRRenderTarget===!0),Pe=ye(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Se,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,W.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),B(n.TEXTURE_CUBE_MAP,_,Ee);for(let _e=0;_e<6;_e++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)Ae(W.__webglFramebuffer[_e][Ce],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce);else Ae(W.__webglFramebuffer[_e],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);C(_,Ee)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const _e=A.texture;for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const Ge=_e[Ce],H=o.get(Ge);t.bindTexture(n.TEXTURE_2D,H.__webglTexture),B(n.TEXTURE_2D,Ge,Ee),Ae(W.__webglFramebuffer,A,Ge,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),C(Ge,Ee)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?_e=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,he.__webglTexture),B(_e,_,Ee),a&&_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)Ae(W.__webglFramebuffer[Ce],A,_,n.COLOR_ATTACHMENT0,_e,Ce);else Ae(W.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,_e,0);C(_,Ee)&&m(_e),t.unbindTexture()}A.depthBuffer&&k(A)}function ne(A){const _=g(A)||a,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let he=0,ce=W.length;he<ce;he++){const se=W[he];if(C(se,_)){const Ee=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=o.get(se).__webglTexture;t.bindTexture(Ee,_e),m(Ee),t.unbindTexture()}}}function ie(A){if(a&&A.samples>0&&be(A)===!1){const _=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,he=A.height;let ce=n.COLOR_BUFFER_BIT;const se=[],Ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=o.get(A),Ce=A.isWebGLMultipleRenderTargets===!0;if(Ce)for(let Fe=0;Fe<_.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Fe=0;Fe<_.length;Fe++){se.push(n.COLOR_ATTACHMENT0+Fe),A.depthBuffer&&se.push(Ee);const Ge=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Ge===!1&&(A.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Fe]),Ge===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ee])),Ce){const H=o.get(_[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,W,he,0,0,W,he,ce,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<_.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Fe]);const Ge=o.get(_[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function ye(A){return Math.min(s.maxSamples,A.samples)}function be(A){const _=o.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Be(A){const _=l.render.frame;d.get(A)!==_&&(d.set(A,_),A.update())}function Ie(A,_){const W=A.colorSpace,he=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ga||W!==On&&W!==on&&(rt.getTransfer(W)===ut?a===!1?e.has("EXT_sRGB")===!0&&he===pn?(A.format=ga,A.minFilter=tn,A.generateMipmaps=!1):_=Eu.sRGBToLinear(_):(he!==pn||ce!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),_}this.allocateTextureUnit=D,this.resetTextureUnits=ue,this.setTexture2D=z,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=le,this.rebindTextures=G,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=be}function Mv(n,e,t){const o=t.isWebGL2;function s(r,l=on){let a;const c=rt.getTransfer(l);if(r===Qn)return n.UNSIGNED_BYTE;if(r===bu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===yu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Hh)return n.BYTE;if(r===qh)return n.SHORT;if(r===Oa)return n.UNSIGNED_SHORT;if(r===vu)return n.INT;if(r===jn)return n.UNSIGNED_INT;if(r===Yn)return n.FLOAT;if(r===zo)return o?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Vh)return n.ALPHA;if(r===pn)return n.RGBA;if(r===zh)return n.LUMINANCE;if(r===Wh)return n.LUMINANCE_ALPHA;if(r===wi)return n.DEPTH_COMPONENT;if(r===uo)return n.DEPTH_STENCIL;if(r===ga)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===$h)return n.RED;if(r===Mu)return n.RED_INTEGER;if(r===jh)return n.RG;if(r===_u)return n.RG_INTEGER;if(r===Su)return n.RGBA_INTEGER;if(r===Er||r===Rr||r===Lr||r===Ir)if(c===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Er)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Er)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ir)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rl||r===Ll||r===Il||r===Pl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Rl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ll)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Il)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Dl||r===Nl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Dl)return c===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Nl)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kl||r===Fl||r===Ul||r===Bl||r===Ol||r===Gl||r===Hl||r===ql||r===Vl||r===zl||r===Wl||r===$l||r===jl||r===Yl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===kl)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fl)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ul)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bl)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ol)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gl)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hl)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ql)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vl)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zl)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wl)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$l)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jl)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yl)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pr||r===Xl||r===Kl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Pr)return c===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yh||r===Ql||r===Jl||r===Zl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Pr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ql)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xi?o?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class _v extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mi extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const o of e.hand.values())this._getHandJoint(t,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,o){let s=null,r=null,l=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){l=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,o),h=this._getHandJoint(u,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=d.position.distanceTo(f.position),v=.02,b=.005;u.inputState.pinching&&p>v+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=v-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,o),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const o=new Mi;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[t.jointName]=o,e.add(o)}return e.joints[t.jointName]}}class xv extends go{constructor(e,t){super();const o=this;let s=null,r=1,l=null,a="local-floor",c=1,u=null,d=null,f=null,p=null,v=null,b=null;const y=t.getContextAttributes();let g=null,h=null;const C=[],m=[],S=new ot;let L=null;const T=new nn;T.layers.enable(1),T.viewport=new Et;const R=new nn;R.layers.enable(2),R.viewport=new Et;const V=[T,R],w=new _v;w.layers.enable(1),w.layers.enable(2);let x=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=C[B];return j===void 0&&(j=new ta,C[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=C[B];return j===void 0&&(j=new ta,C[B]=j),j.getGripSpace()},this.getHand=function(B){let j=C[B];return j===void 0&&(j=new ta,C[B]=j),j.getHandSpace()};function $(B){const j=m.indexOf(B.inputSource);if(j===-1)return;const re=C[j];re!==void 0&&(re.update(B.inputSource,B.frame,u||l),re.dispatchEvent({type:B.type,data:B.inputSource}))}function ue(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",D);for(let B=0;B<C.length;B++){const j=m[B];j!==null&&(m[B]=null,C[B].disconnect(j))}x=null,q=null,e.setRenderTarget(g),v=null,p=null,f=null,s=null,h=null,ve.stop(),o.isPresenting=!1,e.setPixelRatio(L),e.setSize(S.width,S.height,!1),o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return f},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),h=new Ei(v.framebufferWidth,v.framebufferHeight,{format:pn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,re=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?uo:wi,re=y.stencil?xi:jn);const Ae={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(Ae),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),h=new Ei(p.textureWidth,p.textureHeight,{format:pn,type:Qn,depthTexture:new Hu(p.textureWidth,p.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ae=e.properties.get(h);ae.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),u=null,l=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(B){for(let j=0;j<B.removed.length;j++){const re=B.removed[j],Me=m.indexOf(re);Me>=0&&(m[Me]=null,C[Me].disconnect(re))}for(let j=0;j<B.added.length;j++){const re=B.added[j];let Me=m.indexOf(re);if(Me===-1){for(let ae=0;ae<C.length;ae++)if(ae>=m.length){m.push(re),Me=ae;break}else if(m[ae]===null){m[ae]=re,Me=ae;break}if(Me===-1)break}const Ae=C[Me];Ae&&Ae.connect(re)}}const X=new K,z=new K;function Q(B,j,re){X.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(re.matrixWorld);const Me=X.distanceTo(z),Ae=j.projectionMatrix.elements,ae=re.projectionMatrix.elements,P=Ae[14]/(Ae[10]-1),k=Ae[14]/(Ae[10]+1),G=(Ae[9]+1)/Ae[5],I=(Ae[9]-1)/Ae[5],ne=(Ae[8]-1)/Ae[0],ie=(ae[8]+1)/ae[0],ye=P*ne,be=P*ie,Be=Me/(-ne+ie),Ie=Be*-ne;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ie),B.translateZ(Be),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const A=P+Be,_=k+Be,W=ye-Ie,he=be+(Me-Ie),ce=G*k/_*A,se=I*k/_*A;B.projectionMatrix.makePerspective(W,he,ce,se,A,_),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function J(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;w.near=R.near=T.near=B.near,w.far=R.far=T.far=B.far,(x!==w.near||q!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),x=w.near,q=w.far);const j=B.parent,re=w.cameras;J(w,j);for(let Me=0;Me<re.length;Me++)J(re[Me],j);re.length===2?Q(w,T,R):w.projectionMatrix.copy(T.projectionMatrix),le(B,w,j)};function le(B,j,re){re===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(re.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Wo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&v===null))return c},this.setFoveation=function(B){c=B,p!==null&&(p.fixedFoveation=B),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=B)};let oe=null;function de(B,j){if(d=j.getViewerPose(u||l),b=j,d!==null){const re=d.views;v!==null&&(e.setRenderTargetFramebuffer(h,v.framebuffer),e.setRenderTarget(h));let Me=!1;re.length!==w.cameras.length&&(w.cameras.length=0,Me=!0);for(let Ae=0;Ae<re.length;Ae++){const ae=re[Ae];let P=null;if(v!==null)P=v.getViewport(ae);else{const G=f.getViewSubImage(p,ae);P=G.viewport,Ae===0&&(e.setRenderTargetTextures(h,G.colorTexture,p.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(h))}let k=V[Ae];k===void 0&&(k=new nn,k.layers.enable(Ae),k.viewport=new Et,V[Ae]=k),k.matrix.fromArray(ae.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(ae.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(P.x,P.y,P.width,P.height),Ae===0&&(w.matrix.copy(k.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Me===!0&&w.cameras.push(k)}}for(let re=0;re<C.length;re++){const Me=m[re],Ae=C[re];Me!==null&&Ae!==void 0&&Ae.update(Me,j,u||l)}oe&&oe(B,j),j.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:j}),b=null}const ve=new Ou;ve.setAnimationLoop(de),this.setAnimationLoop=function(B){oe=B},this.dispose=function(){}}}function wv(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function o(g,h){h.color.getRGB(g.fogColor.value,Fu(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,C,m,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(g,h):h.isMeshToonMaterial?(r(g,h),f(g,h)):h.isMeshPhongMaterial?(r(g,h),d(g,h)):h.isMeshStandardMaterial?(r(g,h),p(g,h),h.isMeshPhysicalMaterial&&v(g,h,S)):h.isMeshMatcapMaterial?(r(g,h),b(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),y(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(l(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?c(g,h,C,m):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===qt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===qt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const C=e.get(h).envMap;if(C&&(g.envMap.value=C,g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const m=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*m,t(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function l(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function c(g,h,C,m){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*C,g.scale.value=m*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function d(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function p(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function v(g,h,C){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===qt&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function b(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const C=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:s}}function Cv(n,e,t,o){let s={},r={},l=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(C,m){const S=m.program;o.uniformBlockBinding(C,S)}function u(C,m){let S=s[C.id];S===void 0&&(b(C),S=d(C),s[C.id]=S,C.addEventListener("dispose",g));const L=m.program;o.updateUBOMapping(C,L);const T=e.render.frame;r[C.id]!==T&&(p(C),r[C.id]=T)}function d(C){const m=f();C.__bindingPointIndex=m;const S=n.createBuffer(),L=C.__size,T=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,L,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,m,S),S}function f(){for(let C=0;C<a;C++)if(l.indexOf(C)===-1)return l.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){const m=s[C.id],S=C.uniforms,L=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,m);for(let T=0,R=S.length;T<R;T++){const V=Array.isArray(S[T])?S[T]:[S[T]];for(let w=0,x=V.length;w<x;w++){const q=V[w];if(v(q,T,w,L)===!0){const $=q.__offset,ue=Array.isArray(q.value)?q.value:[q.value];let D=0;for(let X=0;X<ue.length;X++){const z=ue[X],Q=y(z);typeof z=="number"||typeof z=="boolean"?(q.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,$+D,q.__data)):z.isMatrix3?(q.__data[0]=z.elements[0],q.__data[1]=z.elements[1],q.__data[2]=z.elements[2],q.__data[3]=0,q.__data[4]=z.elements[3],q.__data[5]=z.elements[4],q.__data[6]=z.elements[5],q.__data[7]=0,q.__data[8]=z.elements[6],q.__data[9]=z.elements[7],q.__data[10]=z.elements[8],q.__data[11]=0):(z.toArray(q.__data,D),D+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,q.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(C,m,S,L){const T=C.value,R=m+"_"+S;if(L[R]===void 0)return typeof T=="number"||typeof T=="boolean"?L[R]=T:L[R]=T.clone(),!0;{const V=L[R];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return L[R]=T,!0}else if(V.equals(T)===!1)return V.copy(T),!0}return!1}function b(C){const m=C.uniforms;let S=0;const L=16;for(let R=0,V=m.length;R<V;R++){const w=Array.isArray(m[R])?m[R]:[m[R]];for(let x=0,q=w.length;x<q;x++){const $=w[x],ue=Array.isArray($.value)?$.value:[$.value];for(let D=0,X=ue.length;D<X;D++){const z=ue[D],Q=y(z),J=S%L;J!==0&&L-J<Q.boundary&&(S+=L-J),$.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=Q.storage}}}const T=S%L;return T>0&&(S+=L-T),C.__size=S,C.__cache={},this}function y(C){const m={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(m.boundary=4,m.storage=4):C.isVector2?(m.boundary=8,m.storage=8):C.isVector3||C.isColor?(m.boundary=16,m.storage=12):C.isVector4?(m.boundary=16,m.storage=16):C.isMatrix3?(m.boundary=48,m.storage=48):C.isMatrix4?(m.boundary=64,m.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),m}function g(C){const m=C.target;m.removeEventListener("dispose",g);const S=l.indexOf(m.__bindingPointIndex);l.splice(S,1),n.deleteBuffer(s[m.id]),delete s[m.id],delete r[m.id]}function h(){for(const C in s)n.deleteBuffer(s[C]);l=[],s={},r={}}return{bind:c,update:u,dispose:h}}class ju{constructor(e={}){const{canvas:t=_f(),context:o=null,depth:s=!0,stencil:r=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;o!==null?p=o.getContextAttributes().alpha:p=l;const v=new Uint32Array(4),b=new Int32Array(4);let y=null,g=null;const h=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;const m=this;let S=!1,L=0,T=0,R=null,V=-1,w=null;const x=new Et,q=new Et;let $=null;const ue=new nt(0);let D=0,X=t.width,z=t.height,Q=1,J=null,le=null;const oe=new Et(0,0,X,z),de=new Et(0,0,X,z);let ve=!1;const B=new qa;let j=!1,re=!1,Me=null;const Ae=new Mt,ae=new ot,P=new K,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return R===null?Q:1}let I=o;function ne(E,Y){for(let ee=0;ee<E.length;ee++){const te=E[ee],Z=t.getContext(te,Y);if(Z!==null)return Z}return null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ba}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Re,!1),I===null){const Y=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&Y.shift(),I=ne(Y,E),I===null)throw ne(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ie,ye,be,Be,Ie,A,_,W,he,ce,se,Ee,_e,Ce,Fe,Ge,H,Se,Pe,Ne,we,fe,xe,pe;function Ve(){ie=new kg(I),ye=new Rg(I,ie,e),ie.init(ye),fe=new Mv(I,ie,ye),be=new bv(I,ie,ye),Be=new Bg(I),Ie=new ov,A=new yv(I,ie,be,Ie,ye,fe,Be),_=new Ig(m),W=new Ng(m),he=new $f(I,ye),xe=new Tg(I,ie,he,ye),ce=new Fg(I,he,Be,xe),se=new qg(I,ce,he,Be),Pe=new Hg(I,ye,A),Ge=new Lg(Ie),Ee=new iv(m,_,W,ie,ye,xe,Ge),_e=new wv(m,Ie),Ce=new rv,Fe=new hv(ie,ye),Se=new Ag(m,_,W,be,se,p,c),H=new vv(m,se,ye),pe=new Cv(I,Be,ye,be),Ne=new Eg(I,ie,Be,ye),we=new Ug(I,ie,Be,ye),Be.programs=Ee.programs,m.capabilities=ye,m.extensions=ie,m.properties=Ie,m.renderLists=Ce,m.shadowMap=H,m.state=be,m.info=Be}Ve();const He=new xv(m,I);this.xr=He,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(X,z,!1))},this.getSize=function(E){return E.set(X,z)},this.setSize=function(E,Y,ee=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,z=Y,t.width=Math.floor(E*Q),t.height=Math.floor(Y*Q),ee===!0&&(t.style.width=E+"px",t.style.height=Y+"px"),this.setViewport(0,0,E,Y)},this.getDrawingBufferSize=function(E){return E.set(X*Q,z*Q).floor()},this.setDrawingBufferSize=function(E,Y,ee){X=E,z=Y,Q=ee,t.width=Math.floor(E*ee),t.height=Math.floor(Y*ee),this.setViewport(0,0,E,Y)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,Y,ee,te){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,Y,ee,te),be.viewport(x.copy(oe).multiplyScalar(Q).floor())},this.getScissor=function(E){return E.copy(de)},this.setScissor=function(E,Y,ee,te){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,Y,ee,te),be.scissor(q.copy(de).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ve},this.setScissorTest=function(E){be.setScissorTest(ve=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(E=!0,Y=!0,ee=!0){let te=0;if(E){let Z=!1;if(R!==null){const Oe=R.texture.format;Z=Oe===Su||Oe===_u||Oe===Mu}if(Z){const Oe=R.texture.type,We=Oe===Qn||Oe===jn||Oe===Oa||Oe===xi||Oe===bu||Oe===yu,Ye=Se.getClearColor(),Xe=Se.getClearAlpha(),Ze=Ye.r,Ke=Ye.g,Qe=Ye.b;We?(v[0]=Ze,v[1]=Ke,v[2]=Qe,v[3]=Xe,I.clearBufferuiv(I.COLOR,0,v)):(b[0]=Ze,b[1]=Ke,b[2]=Qe,b[3]=Xe,I.clearBufferiv(I.COLOR,0,b))}else te|=I.COLOR_BUFFER_BIT}Y&&(te|=I.DEPTH_BUFFER_BIT),ee&&(te|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ce.dispose(),Fe.dispose(),Ie.dispose(),_.dispose(),W.dispose(),se.dispose(),xe.dispose(),pe.dispose(),Ee.dispose(),He.dispose(),He.removeEventListener("sessionstart",kt),He.removeEventListener("sessionend",ct),Me&&(Me.dispose(),Me=null),Ft.stop()};function me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Be.autoReset,Y=H.enabled,ee=H.autoUpdate,te=H.needsUpdate,Z=H.type;Ve(),Be.autoReset=E,H.enabled=Y,H.autoUpdate=ee,H.needsUpdate=te,H.type=Z}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){const Y=E.target;Y.removeEventListener("dispose",De),$e(Y)}function $e(E){je(E),Ie.remove(E)}function je(E){const Y=Ie.get(E).programs;Y!==void 0&&(Y.forEach(function(ee){Ee.releaseProgram(ee)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,Y,ee,te,Z,Oe){Y===null&&(Y=k);const We=Z.isMesh&&Z.matrixWorld.determinant()<0,Ye=ih(E,Y,ee,te,Z);be.setMaterial(te,We);let Xe=ee.index,Ze=1;if(te.wireframe===!0){if(Xe=ce.getWireframeAttribute(ee),Xe===void 0)return;Ze=2}const Ke=ee.drawRange,Qe=ee.attributes.position;let mt=Ke.start*Ze,Wt=(Ke.start+Ke.count)*Ze;Oe!==null&&(mt=Math.max(mt,Oe.start*Ze),Wt=Math.min(Wt,(Oe.start+Oe.count)*Ze)),Xe!==null?(mt=Math.max(mt,0),Wt=Math.min(Wt,Xe.count)):Qe!=null&&(mt=Math.max(mt,0),Wt=Math.min(Wt,Qe.count));const At=Wt-mt;if(At<0||At===1/0)return;xe.setup(Z,te,Ye,ee,Xe);let Tn,ft=Ne;if(Xe!==null&&(Tn=he.get(Xe),ft=we,ft.setIndex(Tn)),Z.isMesh)te.wireframe===!0?(be.setLineWidth(te.wireframeLinewidth*G()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(Z.isLine){let et=te.linewidth;et===void 0&&(et=1),be.setLineWidth(et*G()),Z.isLineSegments?ft.setMode(I.LINES):Z.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else Z.isPoints?ft.setMode(I.POINTS):Z.isSprite&&ft.setMode(I.TRIANGLES);if(Z.isBatchedMesh)ft.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)ft.renderInstances(mt,At,Z.count);else if(ee.isInstancedBufferGeometry){const et=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,xr=Math.min(ee.instanceCount,et);ft.renderInstances(mt,At,xr)}else ft.render(mt,At)};function at(E,Y,ee){E.transparent===!0&&E.side===kn&&E.forceSinglePass===!1?(E.side=qt,E.needsUpdate=!0,as(E,Y,ee),E.side=Zn,E.needsUpdate=!0,as(E,Y,ee),E.side=kn):as(E,Y,ee)}this.compile=function(E,Y,ee=null){ee===null&&(ee=E),g=Fe.get(ee),g.init(),C.push(g),ee.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),E!==ee&&E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights(m._useLegacyLights);const te=new Set;return E.traverse(function(Z){const Oe=Z.material;if(Oe)if(Array.isArray(Oe))for(let We=0;We<Oe.length;We++){const Ye=Oe[We];at(Ye,ee,Z),te.add(Ye)}else at(Oe,ee,Z),te.add(Oe)}),C.pop(),g=null,te},this.compileAsync=function(E,Y,ee=null){const te=this.compile(E,Y,ee);return new Promise(Z=>{function Oe(){if(te.forEach(function(We){Ie.get(We).currentProgram.isReady()&&te.delete(We)}),te.size===0){Z(E);return}setTimeout(Oe,10)}ie.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let lt=null;function Ct(E){lt&&lt(E)}function kt(){Ft.stop()}function ct(){Ft.start()}const Ft=new Ou;Ft.setAnimationLoop(Ct),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(E){lt=E,He.setAnimationLoop(E),E===null?Ft.stop():Ft.start()},He.addEventListener("sessionstart",kt),He.addEventListener("sessionend",ct),this.render=function(E,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(Y),Y=He.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,Y,R),g=Fe.get(E,C.length),g.init(),C.push(g),Ae.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B.setFromProjectionMatrix(Ae),re=this.localClippingEnabled,j=Ge.init(this.clippingPlanes,re),y=Ce.get(E,h.length),y.init(),h.push(y),_n(E,Y,0,m.sortObjects),y.finish(),m.sortObjects===!0&&y.sort(J,le),this.info.render.frame++,j===!0&&Ge.beginShadows();const ee=g.state.shadowsArray;if(H.render(ee,E,Y),j===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(y,E),g.setupLights(m._useLegacyLights),Y.isArrayCamera){const te=Y.cameras;for(let Z=0,Oe=te.length;Z<Oe;Z++){const We=te[Z];vl(y,E,We,We.viewport)}}else vl(y,E,Y);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(m,E,Y),xe.resetDefaultState(),V=-1,w=null,C.pop(),C.length>0?g=C[C.length-1]:g=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function _n(E,Y,ee,te){if(E.visible===!1)return;if(E.layers.test(Y.layers)){if(E.isGroup)ee=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(Y);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||B.intersectsSprite(E)){te&&P.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const We=se.update(E),Ye=E.material;Ye.visible&&y.push(E,We,Ye,ee,P.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||B.intersectsObject(E))){const We=se.update(E),Ye=E.material;if(te&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),P.copy(E.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),P.copy(We.boundingSphere.center)),P.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ye)){const Xe=We.groups;for(let Ze=0,Ke=Xe.length;Ze<Ke;Ze++){const Qe=Xe[Ze],mt=Ye[Qe.materialIndex];mt&&mt.visible&&y.push(E,We,mt,ee,P.z,Qe)}}else Ye.visible&&y.push(E,We,Ye,ee,P.z,null)}}const Oe=E.children;for(let We=0,Ye=Oe.length;We<Ye;We++)_n(Oe[We],Y,ee,te)}function vl(E,Y,ee,te){const Z=E.opaque,Oe=E.transmissive,We=E.transparent;g.setupLightsView(ee),j===!0&&Ge.setGlobalState(m.clippingPlanes,ee),Oe.length>0&&nh(Z,Oe,Y,ee),te&&be.viewport(x.copy(te)),Z.length>0&&rs(Z,Y,ee),Oe.length>0&&rs(Oe,Y,ee),We.length>0&&rs(We,Y,ee),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function nh(E,Y,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Oe=ye.isWebGL2;Me===null&&(Me=new Ei(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?zo:Qn,minFilter:Vo,samples:Oe?4:0})),m.getDrawingBufferSize(ae),Oe?Me.setSize(ae.x,ae.y):Me.setSize($s(ae.x),$s(ae.y));const We=m.getRenderTarget();m.setRenderTarget(Me),m.getClearColor(ue),D=m.getClearAlpha(),D<1&&m.setClearColor(16777215,.5),m.clear();const Ye=m.toneMapping;m.toneMapping=Kn,rs(E,ee,te),A.updateMultisampleRenderTarget(Me),A.updateRenderTargetMipmap(Me);let Xe=!1;for(let Ze=0,Ke=Y.length;Ze<Ke;Ze++){const Qe=Y[Ze],mt=Qe.object,Wt=Qe.geometry,At=Qe.material,Tn=Qe.group;if(At.side===kn&&mt.layers.test(te.layers)){const ft=At.side;At.side=qt,At.needsUpdate=!0,bl(mt,ee,te,Wt,At,Tn),At.side=ft,At.needsUpdate=!0,Xe=!0}}Xe===!0&&(A.updateMultisampleRenderTarget(Me),A.updateRenderTargetMipmap(Me)),m.setRenderTarget(We),m.setClearColor(ue,D),m.toneMapping=Ye}function rs(E,Y,ee){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Oe=E.length;Z<Oe;Z++){const We=E[Z],Ye=We.object,Xe=We.geometry,Ze=te===null?We.material:te,Ke=We.group;Ye.layers.test(ee.layers)&&bl(Ye,Y,ee,Xe,Ze,Ke)}}function bl(E,Y,ee,te,Z,Oe){E.onBeforeRender(m,Y,ee,te,Z,Oe),E.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(m,Y,ee,te,E,Oe),Z.transparent===!0&&Z.side===kn&&Z.forceSinglePass===!1?(Z.side=qt,Z.needsUpdate=!0,m.renderBufferDirect(ee,Y,te,Z,E,Oe),Z.side=Zn,Z.needsUpdate=!0,m.renderBufferDirect(ee,Y,te,Z,E,Oe),Z.side=kn):m.renderBufferDirect(ee,Y,te,Z,E,Oe),E.onAfterRender(m,Y,ee,te,Z,Oe)}function as(E,Y,ee){Y.isScene!==!0&&(Y=k);const te=Ie.get(E),Z=g.state.lights,Oe=g.state.shadowsArray,We=Z.state.version,Ye=Ee.getParameters(E,Z.state,Oe,Y,ee),Xe=Ee.getProgramCacheKey(Ye);let Ze=te.programs;te.environment=E.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(E.isMeshStandardMaterial?W:_).get(E.envMap||te.environment),Ze===void 0&&(E.addEventListener("dispose",De),Ze=new Map,te.programs=Ze);let Ke=Ze.get(Xe);if(Ke!==void 0){if(te.currentProgram===Ke&&te.lightsStateVersion===We)return Ml(E,Ye),Ke}else Ye.uniforms=Ee.getUniforms(E),E.onBuild(ee,Ye,m),E.onBeforeCompile(Ye,m),Ke=Ee.acquireProgram(Ye,Xe),Ze.set(Xe,Ke),te.uniforms=Ye.uniforms;const Qe=te.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Qe.clippingPlanes=Ge.uniform),Ml(E,Ye),te.needsLights=sh(E),te.lightsStateVersion=We,te.needsLights&&(Qe.ambientLightColor.value=Z.state.ambient,Qe.lightProbe.value=Z.state.probe,Qe.directionalLights.value=Z.state.directional,Qe.directionalLightShadows.value=Z.state.directionalShadow,Qe.spotLights.value=Z.state.spot,Qe.spotLightShadows.value=Z.state.spotShadow,Qe.rectAreaLights.value=Z.state.rectArea,Qe.ltc_1.value=Z.state.rectAreaLTC1,Qe.ltc_2.value=Z.state.rectAreaLTC2,Qe.pointLights.value=Z.state.point,Qe.pointLightShadows.value=Z.state.pointShadow,Qe.hemisphereLights.value=Z.state.hemi,Qe.directionalShadowMap.value=Z.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qe.spotShadowMap.value=Z.state.spotShadowMap,Qe.spotLightMatrix.value=Z.state.spotLightMatrix,Qe.spotLightMap.value=Z.state.spotLightMap,Qe.pointShadowMap.value=Z.state.pointShadowMap,Qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),te.currentProgram=Ke,te.uniformsList=null,Ke}function yl(E){if(E.uniformsList===null){const Y=E.currentProgram.getUniforms();E.uniformsList=Ns.seqWithValue(Y.seq,E.uniforms)}return E.uniformsList}function Ml(E,Y){const ee=Ie.get(E);ee.outputColorSpace=Y.outputColorSpace,ee.batching=Y.batching,ee.instancing=Y.instancing,ee.instancingColor=Y.instancingColor,ee.skinning=Y.skinning,ee.morphTargets=Y.morphTargets,ee.morphNormals=Y.morphNormals,ee.morphColors=Y.morphColors,ee.morphTargetsCount=Y.morphTargetsCount,ee.numClippingPlanes=Y.numClippingPlanes,ee.numIntersection=Y.numClipIntersection,ee.vertexAlphas=Y.vertexAlphas,ee.vertexTangents=Y.vertexTangents,ee.toneMapping=Y.toneMapping}function ih(E,Y,ee,te,Z){Y.isScene!==!0&&(Y=k),A.resetTextureUnits();const Oe=Y.fog,We=te.isMeshStandardMaterial?Y.environment:null,Ye=R===null?m.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:On,Xe=(te.isMeshStandardMaterial?W:_).get(te.envMap||We),Ze=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ke=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,Wt=!!ee.morphAttributes.color;let At=Kn;te.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(At=m.toneMapping);const Tn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ft=Tn!==void 0?Tn.length:0,et=Ie.get(te),xr=g.state.lights;if(j===!0&&(re===!0||E!==w)){const Jt=E===w&&te.id===V;Ge.setState(te,E,Jt)}let pt=!1;te.version===et.__version?(et.needsLights&&et.lightsStateVersion!==xr.state.version||et.outputColorSpace!==Ye||Z.isBatchedMesh&&et.batching===!1||!Z.isBatchedMesh&&et.batching===!0||Z.isInstancedMesh&&et.instancing===!1||!Z.isInstancedMesh&&et.instancing===!0||Z.isSkinnedMesh&&et.skinning===!1||!Z.isSkinnedMesh&&et.skinning===!0||Z.isInstancedMesh&&et.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&et.instancingColor===!1&&Z.instanceColor!==null||et.envMap!==Xe||te.fog===!0&&et.fog!==Oe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ge.numPlanes||et.numIntersection!==Ge.numIntersection)||et.vertexAlphas!==Ze||et.vertexTangents!==Ke||et.morphTargets!==Qe||et.morphNormals!==mt||et.morphColors!==Wt||et.toneMapping!==At||ye.isWebGL2===!0&&et.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,et.__version=te.version);let ci=et.currentProgram;pt===!0&&(ci=as(te,Y,Z));let _l=!1,xo=!1,wr=!1;const Pt=ci.getUniforms(),ui=et.uniforms;if(be.useProgram(ci.program)&&(_l=!0,xo=!0,wr=!0),te.id!==V&&(V=te.id,xo=!0),_l||w!==E){Pt.setValue(I,"projectionMatrix",E.projectionMatrix),Pt.setValue(I,"viewMatrix",E.matrixWorldInverse);const Jt=Pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(I,P.setFromMatrixPosition(E.matrixWorld)),ye.logarithmicDepthBuffer&&Pt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Pt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,xo=!0,wr=!0)}if(Z.isSkinnedMesh){Pt.setOptional(I,Z,"bindMatrix"),Pt.setOptional(I,Z,"bindMatrixInverse");const Jt=Z.skeleton;Jt&&(ye.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Pt.setValue(I,"boneTexture",Jt.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Pt.setOptional(I,Z,"batchingTexture"),Pt.setValue(I,"batchingTexture",Z._matricesTexture,A));const Cr=ee.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0&&ye.isWebGL2===!0)&&Pe.update(Z,ee,ci),(xo||et.receiveShadow!==Z.receiveShadow)&&(et.receiveShadow=Z.receiveShadow,Pt.setValue(I,"receiveShadow",Z.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ui.envMap.value=Xe,ui.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),xo&&(Pt.setValue(I,"toneMappingExposure",m.toneMappingExposure),et.needsLights&&oh(ui,wr),Oe&&te.fog===!0&&_e.refreshFogUniforms(ui,Oe),_e.refreshMaterialUniforms(ui,te,Q,z,Me),Ns.upload(I,yl(et),ui,A)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ns.upload(I,yl(et),ui,A),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Pt.setValue(I,"center",Z.center),Pt.setValue(I,"modelViewMatrix",Z.modelViewMatrix),Pt.setValue(I,"normalMatrix",Z.normalMatrix),Pt.setValue(I,"modelMatrix",Z.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Jt=te.uniformsGroups;for(let Ar=0,rh=Jt.length;Ar<rh;Ar++)if(ye.isWebGL2){const Sl=Jt[Ar];pe.update(Sl,ci),pe.bind(Sl,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function oh(E,Y){E.ambientLightColor.needsUpdate=Y,E.lightProbe.needsUpdate=Y,E.directionalLights.needsUpdate=Y,E.directionalLightShadows.needsUpdate=Y,E.pointLights.needsUpdate=Y,E.pointLightShadows.needsUpdate=Y,E.spotLights.needsUpdate=Y,E.spotLightShadows.needsUpdate=Y,E.rectAreaLights.needsUpdate=Y,E.hemisphereLights.needsUpdate=Y}function sh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,Y,ee){Ie.get(E.texture).__webglTexture=Y,Ie.get(E.depthTexture).__webglTexture=ee;const te=Ie.get(E);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,Y){const ee=Ie.get(E);ee.__webglFramebuffer=Y,ee.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(E,Y=0,ee=0){R=E,L=Y,T=ee;let te=!0,Z=null,Oe=!1,We=!1;if(E){const Xe=Ie.get(E);Xe.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(I.FRAMEBUFFER,null),te=!1):Xe.__webglFramebuffer===void 0?A.setupRenderTarget(E):Xe.__hasExternalTextures&&A.rebindTextures(E,Ie.get(E.texture).__webglTexture,Ie.get(E.depthTexture).__webglTexture);const Ze=E.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(We=!0);const Ke=Ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[Y])?Z=Ke[Y][ee]:Z=Ke[Y],Oe=!0):ye.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?Z=Ie.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?Z=Ke[ee]:Z=Ke,x.copy(E.viewport),q.copy(E.scissor),$=E.scissorTest}else x.copy(oe).multiplyScalar(Q).floor(),q.copy(de).multiplyScalar(Q).floor(),$=ve;if(be.bindFramebuffer(I.FRAMEBUFFER,Z)&&ye.drawBuffers&&te&&be.drawBuffers(E,Z),be.viewport(x),be.scissor(q),be.setScissorTest($),Oe){const Xe=Ie.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Xe.__webglTexture,ee)}else if(We){const Xe=Ie.get(E.texture),Ze=Y||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xe.__webglTexture,ee||0,Ze)}V=-1},this.readRenderTargetPixels=function(E,Y,ee,te,Z,Oe,We){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye){be.bindFramebuffer(I.FRAMEBUFFER,Ye);try{const Xe=E.texture,Ze=Xe.format,Ke=Xe.type;if(Ze!==pn&&fe.convert(Ze)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ke===zo&&(ie.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ie.has("EXT_color_buffer_float"));if(Ke!==Qn&&fe.convert(Ke)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===Yn&&(ye.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=E.width-te&&ee>=0&&ee<=E.height-Z&&I.readPixels(Y,ee,te,Z,fe.convert(Ze),fe.convert(Ke),Oe)}finally{const Xe=R!==null?Ie.get(R).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(E,Y,ee=0){const te=Math.pow(2,-ee),Z=Math.floor(Y.image.width*te),Oe=Math.floor(Y.image.height*te);A.setTexture2D(Y,0),I.copyTexSubImage2D(I.TEXTURE_2D,ee,0,0,E.x,E.y,Z,Oe),be.unbindTexture()},this.copyTextureToTexture=function(E,Y,ee,te=0){const Z=Y.image.width,Oe=Y.image.height,We=fe.convert(ee.format),Ye=fe.convert(ee.type);A.setTexture2D(ee,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ee.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ee.unpackAlignment),Y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,te,E.x,E.y,Z,Oe,We,Ye,Y.image.data):Y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,te,E.x,E.y,Y.mipmaps[0].width,Y.mipmaps[0].height,We,Y.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,te,E.x,E.y,We,Ye,Y.image),te===0&&ee.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(E,Y,ee,te,Z=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=E.max.x-E.min.x+1,We=E.max.y-E.min.y+1,Ye=E.max.z-E.min.z+1,Xe=fe.convert(te.format),Ze=fe.convert(te.type);let Ke;if(te.isData3DTexture)A.setTexture3D(te,0),Ke=I.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)A.setTexture2DArray(te,0),Ke=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,te.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,te.unpackAlignment);const Qe=I.getParameter(I.UNPACK_ROW_LENGTH),mt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Wt=I.getParameter(I.UNPACK_SKIP_PIXELS),At=I.getParameter(I.UNPACK_SKIP_ROWS),Tn=I.getParameter(I.UNPACK_SKIP_IMAGES),ft=ee.isCompressedTexture?ee.mipmaps[Z]:ee.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),ee.isDataTexture||ee.isData3DTexture?I.texSubImage3D(Ke,Z,Y.x,Y.y,Y.z,Oe,We,Ye,Xe,Ze,ft.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ke,Z,Y.x,Y.y,Y.z,Oe,We,Ye,Xe,ft.data)):I.texSubImage3D(Ke,Z,Y.x,Y.y,Y.z,Oe,We,Ye,Xe,Ze,ft),I.pixelStorei(I.UNPACK_ROW_LENGTH,Qe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,At),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Tn),Z===0&&te.generateMipmaps&&I.generateMipmap(Ke),be.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){L=0,T=0,R=null,be.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ga?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===rr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?Ci:wu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ci?yt:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Av extends ju{}Av.prototype.isWebGL1Renderer=!0;class za{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new nt(e),this.density=t}clone(){return new za(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tv extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ya extends bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qc=new K,Vc=new K,zc=new Mt,na=new Iu,Ls=new ar;class Wc extends Lt{constructor(e=new Kt,t=new ya){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,o=[0];for(let s=1,r=t.count;s<r;s++)qc.fromBufferAttribute(t,s-1),Vc.fromBufferAttribute(t,s),o[s]=o[s-1],o[s]+=qc.distanceTo(Vc);e.setAttribute("lineDistance",new _t(o,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const o=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,l=o.drawRange;if(o.boundingSphere===null&&o.computeBoundingSphere(),Ls.copy(o.boundingSphere),Ls.applyMatrix4(s),Ls.radius+=r,e.ray.intersectsSphere(Ls)===!1)return;zc.copy(s).invert(),na.copy(e.ray).applyMatrix4(zc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=new K,d=new K,f=new K,p=new K,v=this.isLineSegments?2:1,b=o.index,g=o.attributes.position;if(b!==null){const h=Math.max(0,l.start),C=Math.min(b.count,l.start+l.count);for(let m=h,S=C-1;m<S;m+=v){const L=b.getX(m),T=b.getX(m+1);if(u.fromBufferAttribute(g,L),d.fromBufferAttribute(g,T),na.distanceSqToSegment(u,d,p,f)>c)continue;p.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(p);V<e.near||V>e.far||t.push({distance:V,point:f.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,l.start),C=Math.min(g.count,l.start+l.count);for(let m=h,S=C-1;m<S;m+=v){if(u.fromBufferAttribute(g,m),d.fromBufferAttribute(g,m+1),na.distanceSqToSegment(u,d,p,f)>c)continue;p.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(p);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const s=t[o[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=s.length;r<l;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}class $c extends zt{constructor(e,t,o,s,r,l,a,c,u){super(e,t,o,s,r,l,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _i extends Kt{constructor(e=1,t=1,o=1,s=32,r=1,l=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:o,radialSegments:s,heightSegments:r,openEnded:l,thetaStart:a,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],p=[],v=[];let b=0;const y=[],g=o/2;let h=0;C(),l===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(d),this.setAttribute("position",new _t(f,3)),this.setAttribute("normal",new _t(p,3)),this.setAttribute("uv",new _t(v,2));function C(){const S=new K,L=new K;let T=0;const R=(t-e)/o;for(let V=0;V<=r;V++){const w=[],x=V/r,q=x*(t-e)+e;for(let $=0;$<=s;$++){const ue=$/s,D=ue*c+a,X=Math.sin(D),z=Math.cos(D);L.x=q*X,L.y=-x*o+g,L.z=q*z,f.push(L.x,L.y,L.z),S.set(X,R,z).normalize(),p.push(S.x,S.y,S.z),v.push(ue,1-x),w.push(b++)}y.push(w)}for(let V=0;V<s;V++)for(let w=0;w<r;w++){const x=y[w][V],q=y[w+1][V],$=y[w+1][V+1],ue=y[w][V+1];d.push(x,q,ue),d.push(q,$,ue),T+=6}u.addGroup(h,T,0),h+=T}function m(S){const L=b,T=new ot,R=new K;let V=0;const w=S===!0?e:t,x=S===!0?1:-1;for(let $=1;$<=s;$++)f.push(0,g*x,0),p.push(0,x,0),v.push(.5,.5),b++;const q=b;for(let $=0;$<=s;$++){const D=$/s*c+a,X=Math.cos(D),z=Math.sin(D);R.x=w*z,R.y=g*x,R.z=w*X,f.push(R.x,R.y,R.z),p.push(0,x,0),T.x=X*.5+.5,T.y=z*.5*x+.5,v.push(T.x,T.y),b++}for(let $=0;$<s;$++){const ue=L+$,D=q+$;S===!0?d.push(D,D+1,ue):d.push(D+1,D,ue),V+=3}u.addGroup(h,V,S===!0?1:2),h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wa extends _i{constructor(e=1,t=1,o=32,s=1,r=!1,l=0,a=Math.PI*2){super(0,e,t,o,s,r,l,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:o,heightSegments:s,openEnded:r,thetaStart:l,thetaLength:a}}static fromJSON(e){return new Wa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wn extends Kt{constructor(e=1,t=32,o=16,s=0,r=Math.PI*2,l=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:o,phiStart:s,phiLength:r,thetaStart:l,thetaLength:a},t=Math.max(3,Math.floor(t)),o=Math.max(2,Math.floor(o));const c=Math.min(l+a,Math.PI);let u=0;const d=[],f=new K,p=new K,v=[],b=[],y=[],g=[];for(let h=0;h<=o;h++){const C=[],m=h/o;let S=0;h===0&&l===0?S=.5/t:h===o&&c===Math.PI&&(S=-.5/t);for(let L=0;L<=t;L++){const T=L/t;f.x=-e*Math.cos(s+T*r)*Math.sin(l+m*a),f.y=e*Math.cos(l+m*a),f.z=e*Math.sin(s+T*r)*Math.sin(l+m*a),b.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),g.push(T+S,1-m),C.push(u++)}d.push(C)}for(let h=0;h<o;h++)for(let C=0;C<t;C++){const m=d[h][C+1],S=d[h][C],L=d[h+1][C],T=d[h+1][C+1];(h!==0||l>0)&&v.push(m,S,T),(h!==o-1||c<Math.PI)&&v.push(S,L,T)}this.setIndex(v),this.setAttribute("position",new _t(b,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $a extends Kt{constructor(e=1,t=.4,o=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:o,tubularSegments:s,arc:r},o=Math.floor(o),s=Math.floor(s);const l=[],a=[],c=[],u=[],d=new K,f=new K,p=new K;for(let v=0;v<=o;v++)for(let b=0;b<=s;b++){const y=b/s*r,g=v/o*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),c.push(p.x,p.y,p.z),u.push(b/s),u.push(v/o)}for(let v=1;v<=o;v++)for(let b=1;b<=s;b++){const y=(s+1)*v+b-1,g=(s+1)*(v-1)+b-1,h=(s+1)*(v-1)+b,C=(s+1)*v+b;l.push(y,g,C),l.push(g,h,C)}this.setIndex(l),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Eo extends bo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yu extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ia=new Mt,jc=new K,Yc=new K;class Ev{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,o=this.matrix;jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(jc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),o.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),o.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rv extends Ev{constructor(){super(new Gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xc extends Yu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Rv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lv extends Yu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const Xu=[{name:"Mortal",weight:8,qiMult:1.1,hpMult:1.1,strMult:1.1,tier:5},{name:"Commoner",weight:7,qiMult:1.2,hpMult:1.2,strMult:1.2,tier:5},{name:"Farmhand",weight:6,qiMult:1.25,hpMult:1.25,strMult:1.25,tier:5},{name:"Merchant's Line",weight:5,qiMult:1.3,hpMult:1.3,strMult:1.3,tier:5},{name:"Demon's Guard Line",weight:5,qiMult:1.35,hpMult:1.35,strMult:1.35,tier:5},{name:"Hunter",weight:4,qiMult:1.4,hpMult:1.4,strMult:1.4,tier:5},{name:"Scholar's Line",weight:4,qiMult:1.45,hpMult:1.45,strMult:1.45,tier:5},{name:"Craftsman",weight:3,qiMult:1.5,hpMult:1.5,strMult:1.5,tier:5},{name:"Minor Noble",weight:3,qiMult:1.55,hpMult:1.55,strMult:1.55,tier:5},{name:"Demonic Retainer Line",weight:3,qiMult:1.6,hpMult:1.6,strMult:1.6,tier:5},{name:"Martial Apprentice",weight:5,qiMult:1.23,hpMult:1.22,strMult:1.22,tier:4},{name:"Traveling Monk",weight:5,qiMult:1.26,hpMult:1.25,strMult:1.25,tier:4},{name:"Eastern Line",weight:4,qiMult:1.29,hpMult:1.28,strMult:1.28,tier:4},{name:"Forest Kin",weight:4,qiMult:1.33,hpMult:1.31,strMult:1.32,tier:4},{name:"Desert Line",weight:4,qiMult:1.37,hpMult:1.35,strMult:1.36,tier:4},{name:"River Clan",weight:3.5,qiMult:1.41,hpMult:1.39,strMult:1.4,tier:4},{name:"Mountain Kin",weight:3.5,qiMult:1.46,hpMult:1.44,strMult:1.45,tier:4},{name:"Mystic Apprentice",weight:3,qiMult:1.51,hpMult:1.48,strMult:1.5,tier:4},{name:"Spiritual Line",weight:3,qiMult:1.56,hpMult:1.53,strMult:1.55,tier:4},{name:"Hidden Sect Descendant",weight:3,qiMult:1.62,hpMult:1.59,strMult:1.61,tier:4},{name:"Shadow Line",weight:3,qiMult:1.68,hpMult:1.65,strMult:1.67,tier:3},{name:"Demonwater Line",weight:3,qiMult:1.74,hpMult:1.71,strMult:1.73,tier:3},{name:"Star Kin",weight:2.8,qiMult:1.81,hpMult:1.78,strMult:1.8,tier:3},{name:"Demon Thunder Line",weight:2.6,qiMult:1.88,hpMult:1.85,strMult:1.87,tier:3},{name:"Iron Line",weight:2.4,qiMult:1.96,hpMult:1.92,strMult:1.95,tier:3},{name:"Thunder Line",weight:2.2,qiMult:2.05,hpMult:2.01,strMult:2.03,tier:3},{name:"Jade Kin",weight:2,qiMult:2.14,hpMult:2.1,strMult:2.12,tier:3},{name:"Azure Line",weight:1.8,qiMult:2.24,hpMult:2.2,strMult:2.22,tier:3},{name:"Tiger Line",weight:1.6,qiMult:2.35,hpMult:2.31,strMult:2.33,tier:3},{name:"Crane Line",weight:1.5,qiMult:2.47,hpMult:2.42,strMult:2.45,tier:3},{name:"Phoenix Line",weight:2,qiMult:2.6,hpMult:2.55,strMult:2.57,tier:2},{name:"Celestial Line",weight:1.8,qiMult:2.74,hpMult:2.69,strMult:2.71,tier:2},{name:"Dragonborn Line",weight:1.6,qiMult:2.89,hpMult:2.83,strMult:2.86,tier:2},{name:"Serpent Line",weight:1.4,qiMult:3.05,hpMult:2.99,strMult:3.02,tier:2},{name:"Spirit Wolf Line",weight:1.2,qiMult:10,hpMult:9,strMult:9.5,tier:2},{name:"Demonic Crusader Line",weight:1,qiMult:14,hpMult:11,strMult:11,tier:2},{name:"Demonic Line",weight:.9,qiMult:16,hpMult:13,strMult:13,tier:2},{name:"Spirit Tiger Line",weight:.8,qiMult:18,hpMult:15,strMult:16,tier:2},{name:"Sky Demon Serpent Line",weight:.7,qiMult:30,hpMult:25,strMult:27,tier:2},{name:"Star Dragon Line",weight:.6,qiMult:50,hpMult:42,strMult:45,tier:2},{name:"Moon Demon Tiger Line",weight:1,qiMult:80,hpMult:65,strMult:70,tier:1},{name:"Sun Phoenix Line",weight:.9,qiMult:120,hpMult:95,strMult:100,tier:1},{name:"Cosmic Demon Dragon Line",weight:.8,qiMult:180,hpMult:145,strMult:150,tier:1},{name:"Celestial Demon Tiger Line",weight:.7,qiMult:230,hpMult:185,strMult:200,tier:1},{name:"Heavenly Phoenix Line",weight:.6,qiMult:270,hpMult:210,strMult:225,tier:1},{name:"Star Serpent Line",weight:.5,qiMult:300,hpMult:235,strMult:250,tier:1},{name:"Eternal Dragon Line",weight:.4,qiMult:320,hpMult:250,strMult:270,tier:1},{name:"Supreme Celestial Line",weight:.3,qiMult:330,hpMult:260,strMult:280,tier:1},{name:"Primordial Demon Dragon Line",weight:.2,qiMult:340,hpMult:265,strMult:290,tier:1},{name:"Immortal Celestial Dragon Cultivator",weight:.1,qiMult:350,hpMult:270,strMult:300,tier:1},{name:"Primordial Immortal's Bloodline",weight:.5,qiMult:1400,hpMult:1080,strMult:1200,tier:0}],Iv={Mortal:"A human born without an awakened bloodline. Their fate is unmarked by lineage.",Commoner:"A widespread bloodline found among ordinary people. Its history is rooted in daily survival.",Farmhand:"Descended from agricultural families tied to the land. Their blood carries generations of rural life.","Merchant's Line":"A lineage shaped by trade, travel, and exchange. Often found among caravans and market cities.","Demon's Guard Line":"Blood linked to those who once stood watch over demonic domains. Their lineage bears ancient oaths.",Hunter:"Descended from those who lived by tracking beasts. Their blood remembers wilderness and pursuit.","Scholar's Line":"A lineage associated with study and record keeping. Many descendants serve as historians or advisors.",Craftsman:"Blood passed down through builders and makers. Their lineage is tied to creation and refinement.","Minor Noble":"A diluted aristocratic bloodline. Its authority is local and often ceremonial.","Demonic Retainer Line":"Descended from servants of demonkind. Their blood carries traces of old allegiances.","Martial Apprentice":"A lineage historically trained in combat traditions. Its roots lie in martial schools.","Traveling Monk":"Blood shaped by ascetic wanderers. Their lineage reflects discipline and pilgrimage.","Eastern Line":"A bloodline originating from eastern cultivation regions. Its traditions are old and formalized.","Forest Kin":"Descended from clans living close to woodland realms. Their blood carries ties to beasts and trees.","Desert Line":"A lineage born of arid lands and endless sands. Survival shaped its culture and customs.","River Clan":"Blood tied to settlements along major waterways. Their history follows trade routes and floods.","Mountain Kin":"Descended from highland and mountain clans. Their lineage reflects isolation and endurance.","Mystic Apprentice":"A bloodline connected to early mystical study. Many ancestors served under greater masters.","Spiritual Line":"A lineage known for its association with spiritual practices. Its blood is often recorded in sect registries.","Hidden Sect Descendant":"Descended from a sect that vanished or went into secrecy. Records of their origin are fragmented.","Shadow Line":"A lineage tied to secrecy and covert traditions. Its history is poorly documented.","Demonwater Line":"Blood associated with corrupted rivers or seas. Its origins are linked to tainted environments.","Star Kin":"A lineage connected to celestial observation. Many ancestors were astrologers or sky-watchers.","Demon Thunder Line":"Blood tied to violent storms touched by demonic influence. Its origin is marked by catastrophe.","Iron Line":"Descended from clans associated with metal and fortification. Their blood is tied to industry and war.","Thunder Line":"A lineage born during eras of frequent storms. Its history is marked by natural upheaval.","Jade Kin":"Blood historically prized by cultivation sects. Its lineage appears often in ancient genealogies.","Azure Line":"A bloodline associated with the open sky and high places. Often found among wanderers and travelers.","Tiger Line":"Descended from clans that revered the tiger. Their lineage is steeped in martial symbolism.","Crane Line":"A bloodline tied to grace and ritual. Often associated with temples and high culture.","Phoenix Line":"A lineage bound to fire and renewal myths. Its history includes cycles of rise and fall.","Celestial Line":"Blood touched by heaven-aligned traditions. Its descendants are often watched by higher powers.","Dragonborn Line":"Descended from those claiming draconic ancestry. Their lineage is surrounded by legend.","Serpent Line":"A bloodline tied to serpents and ancient cults. Its history favors patience and secrecy.","Spirit Wolf Line":"Descended from clans bonded to wolf spirits. Their lineage values unity and survival.","Demonic Crusader Line":"Blood tied to wars against demonkind. Their history is written in conflict and zeal.","Demonic Line":"A lineage of true demonic origin. Its existence is often contested or feared.","Spirit Tiger Line":"A spiritual offshoot of tiger-revering clans. Their blood mixes reverence and spirit lore.","Sky Demon Serpent Line":"A rare lineage blending demonic serpents and the heavens. Its origins are heavily mythologized.","Star Dragon Line":"Blood said to descend from dragons of the night sky. Its history is recorded in star charts.","Moon Demon Tiger Line":"A lineage bound to lunar cycles and demonic rites. Its rituals are rarely shared.","Sun Phoenix Line":"Blood tied to solar myths and phoenix legends. Its records speak of fire and rebirth.","Cosmic Demon Dragon Line":"A lineage born from cosmic calamity and demonkind. Its existence challenges natural order.","Celestial Demon Tiger Line":"Blood shaped by both heaven and demon realms. Its history reflects internal contradiction.","Heavenly Phoenix Line":"A divine-adjacent phoenix lineage. Its name appears in sacred texts.","Star Serpent Line":"Blood tied to astral serpents and fate myths. Its genealogy follows constellations.","Eternal Dragon Line":"A lineage associated with timeless dragons. Its ancestry spans multiple eras.","Supreme Celestial Line":"Blood close to the highest heavens. Its descendants are rare and closely observed.","Primordial Demon Dragon Line":"A lineage predating structured realms. Its records are fragmented and forbidden.","Immortal Celestial Dragon Cultivator":"A perfected bloodline formed through ascension. Its bearer exists beyond mortal classification.","Primordial Immortal's Bloodline":"Blood from the earliest age of existence. Its origin lies before recorded history."};function Te(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Pv(n){const e=String(n||"");return e.trim()?e.split(/\r?\n/).filter(s=>!/^\s*Tradeoff\s*:/i.test(String(s||""))).join(`
`).replace(/\n{3,}/g,`

`).trim():""}function It(n,e={}){const t=String(n||""),o=Number.isFinite(e.size)?e.size:24,s=e.title!=null?String(e.title):"",r=s?`uiicon_${t.replace(/[^a-z0-9]+/gi,"_")}_${Math.floor(Math.random()*1e9)}`:"",l=s?`role="img" aria-labelledby="${r}"`:'aria-hidden="true"',a=`class="ui-inline-icon" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${l}`,c=u=>`
    <svg ${a}>
      ${s?`<title id="${r}">${Te(s)}</title>`:""}
      ${u}
    </svg>
  `.trim();switch(t){case"stats":return c('<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-6"/><path d="M22 20V8"/>');case"inventory":return c('<path d="M21 8l-9-5-9 5 9 5 9-5Z"/><path d="M3 8v10l9 5 9-5V8"/><path d="M12 13v10"/>');case"actions":return c('<path d="M13 2L3 14h8l-1 8 10-12h-8l1-8Z"/>');case"profile":return c('<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/>');case"sect":return c('<path d="M4 10l8-6 8 6"/><path d="M6 10v10"/><path d="M18 10v10"/><path d="M9 20v-6h6v6"/>');case"quests":return c('<path d="M7 3h10v4H7z"/><path d="M6 7h12v14H6z"/><path d="M9 11h6"/><path d="M9 15h6"/>');case"moves":return c('<path d="M14 3l7 7-3 3-7-7 3-3Z"/><path d="M2 21l7-7"/><path d="M6 18l-3 3"/>');case"shop":return c('<path d="M6 7l2-4h8l2 4"/><path d="M4 7h16l-1 14H5L4 7Z"/><path d="M9 11v0"/><path d="M15 11v0"/>');case"settings":return c('<path d="M12 1l1.5 2.6 3-.2 1.2 2.8 2.7 1.1-.9 2.9 1.9 2.4-1.9 2.4.9 2.9-2.7 1.1-1.2 2.8-3-.2L12 23l-1.5-2.6-3 .2-1.2-2.8-2.7-1.1.9-2.9L2.6 12 4.5 9.6l-.9-2.9 2.7-1.1 1.2-2.8 3 .2L12 1Z"/><circle cx="12" cy="12" r="3"/>');case"flag":return c('<path d="M5 3v18"/><path d="M5 4h11l-1.5 3L16 10H5"/>');case"dice":return c('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h.01"/><path d="M15 9h.01"/><path d="M12 12h.01"/><path d="M9 15h.01"/><path d="M15 15h.01"/>');case"spark":return c('<path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2Z"/>');default:return c('<circle cx="12" cy="12" r="9"/><path d="M12 7v0"/><path d="M12 11v6"/>')}}function ja(n){const e=String(n||"").toLowerCase().replace(/\s+/g,"");return e?`assets/${e}.png`:""}function Dv(n){const e=Iv[n]||"";return e?Te(e).replace(/\n/g,"<br>"):""}function Nv(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function kv(n){let e=n>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Fv(n){const e=Nv(String(n||"")),t=kv(e),s=`fill="none" stroke="currentColor" stroke-width="${3.1}" stroke-linecap="square" stroke-linejoin="miter"`,r='fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" opacity="0.9"',l='fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="miter" opacity="0.65"',a=Math.floor(t()*5),c=Math.floor(t()*8),u=2+Math.floor(t()*4),d=t()>.5,f=t()>.25,p=(()=>{switch(a){case 0:return`
          <circle cx="32" cy="32" r="25" ${s} />
          ${f?`<circle cx="32" cy="32" r="20" ${l} />`:""}
        `;case 1:return`
          <path d="M32 8 L52 18 V34 C52 47 42 55 32 56 C22 55 12 47 12 34 V18 Z" ${s} />
          ${f?`<path d="M32 14 L46 20 V33 C46 42 39 48 32 49 C25 48 18 42 18 33 V20 Z" ${l} />`:""}
        `;case 2:return`
          <path d="M32 7 L53 19 L53 45 L32 57 L11 45 L11 19 Z" ${s} />
          ${f?`<path d="M32 13 L47 22 L47 42 L32 51 L17 42 L17 22 Z" ${l} />`:""}
        `;case 3:return`
          <path d="M32 8 L54 32 L32 56 L10 32 Z" ${s} />
          ${f?`<path d="M32 16 L46 32 L32 48 L18 32 Z" ${l} />`:""}
        `;default:return`
          <path d="M18 12 H46 L54 22 V42 L46 52 H18 L10 42 V22 Z" ${s} />
          ${f?`<path d="M22 18 H42 L48 25 V39 L42 46 H22 L16 39 V25 Z" ${l} />`:""}
        `}})(),v=(()=>{switch(c){case 0:return`<path d="M32 16 L40 30 L56 32 L40 34 L32 48 L24 34 L8 32 L24 30 Z" ${r} />`;case 1:return`<path d="M20 44 L32 16 L44 44 Z" ${r} />
<path d="M22 40 H42" ${l} />`;case 2:return`<path d="M20 24 H44" ${r} />
<path d="M24 24 V44" ${r} />
<path d="M40 24 V44" ${r} />
<path d="M24 44 H40" ${r} />`;case 3:return`<path d="M18 34 C22 22 30 18 40 18 C46 18 50 22 50 28 C50 40 34 38 34 46 C34 50 40 52 46 50" ${r} />`;case 4:return`<path d="M32 16 V48" ${r} />
<path d="M20 26 H44" ${l} />
<path d="M22 20 L32 16 L42 20" ${l} />
<path d="M24 48 L32 40 L40 48" ${l} />`;case 5:return`<path d="M18 40 C20 28 26 22 32 20 C38 22 44 28 46 40" ${r} />
<path d="M24 40 C26 32 29 28 32 27 C35 28 38 32 40 40" ${l} />`;case 6:return`<path d="M32 18 L46 26 L46 42 L32 50 L18 42 L18 26 Z" ${r} />
<path d="M32 22 L40 28 V40 L32 46 L24 40 V28 Z" ${l} />`;default:return`<path d="M22 22 L42 42" ${r} />
<path d="M42 22 L22 42" ${r} />
<path d="M18 32 H46" ${l} />
<path d="M32 18 V46" ${l} />`}})(),b=Array.from({length:u}).map((g,h)=>{const C=h/u*Math.PI*2,m=17.5+t()*2,S=21.5+t()*2,L=32+Math.cos(C)*m,T=32+Math.sin(C)*m,R=32+Math.cos(C)*S,V=32+Math.sin(C)*S;return`<path d="M${L.toFixed(2)} ${T.toFixed(2)} L${R.toFixed(2)} ${V.toFixed(2)}" ${l} />`}).join(`
`),y=d?`<path d="M12 32 H18" ${l} />
<path d="M46 32 H52" ${l} />
<path d="M32 12 V18" ${l} />
<path d="M32 46 V52" ${l} />`:"";return`
    <svg class="bloodline-portrait" viewBox="0 0 64 64" role="img" aria-label="Bloodline Crest">
      ${p}
      ${y}
      ${b}
      ${v}
    </svg>
  `.trim()}{let e=0,t=0,o=0;const s=r=>!Number.isFinite(r)||Math.abs(r)>=10?r:Math.round(r*100)/100;for(const r of Xu)Number.isFinite(r.qiMult)&&r.qiMult<e+.01&&(r.qiMult=e+.01),Number.isFinite(r.hpMult)&&r.hpMult<t+.01&&(r.hpMult=t+.01),Number.isFinite(r.strMult)&&r.strMult<o+.01&&(r.strMult=o+.01),r.qiMult=s(r.qiMult),r.hpMult=s(r.hpMult),r.strMult=s(r.strMult),e=Number.isFinite(r.qiMult)?r.qiMult:e,t=Number.isFinite(r.hpMult)?r.hpMult:t,o=Number.isFinite(r.strMult)?r.strMult:o}const Uv={5:1,4:1,3:1,2:.4,1:.2,0:.06};function Bv(n){return Uv[n]??1}const Ov=[{count:1,weight:68,qiMult:2},{count:2,weight:21,qiMult:3.2},{count:3,weight:6.5,qiMult:5.8},{count:4,weight:2.3,qiMult:8.3},{count:5,weight:.9,qiMult:12.8},{count:6,weight:.35,qiMult:17},{count:7,weight:.15,qiMult:22},{count:8,weight:.06,qiMult:28},{count:9,weight:.025,qiMult:36},{count:10,weight:.01,qiMult:46}],Ys=["Fire","Decay","Sound","Water","Ice","Space","Earth","Cloud","Air","Black Hole","Grass","Thunder","Poison","Sickness"],Gv=[{count:1,weight:60},{count:2,weight:25},{count:3,weight:10},{count:4,weight:4},{count:5,weight:1}],An={Fire:{name:"Crimson Pyre Sect",icon:""},Decay:{name:"Withering Ash Sect",icon:""},Sound:{name:"Resonant Echo Sect",icon:""},Water:{name:"Tideflow Pavilion",icon:""},Ice:{name:"Frostbound Lotus Sect",icon:""},Space:{name:"Voidstep Sect",icon:""},Earth:{name:"Stoneheart Sect",icon:""},Cloud:{name:"Cloud Sect",icon:""},Air:{name:"Galespirit Sect",icon:""},"Black Hole":{name:"Singularity Abyss Sect",icon:""},Grass:{name:"Verdant Bloom Sect",icon:""},Thunder:{name:"Heavenclap Sect",icon:""},Poison:{name:"Venomshade Sect",icon:""},Sickness:{name:"Pale Omen Sect",icon:""},Orthodox:{name:"Orthodox Sect",icon:""}};function Hv(n){const e=String(n||"");if(!e)return{name:"",icon:""};if(e==="Heavenly Demon")return{name:"Heavenly Demon Sect",icon:""};if(e==="Demon Monarch")return{name:"Demon Monarch Sect",icon:""};const t=An[e];return t?{name:t.name,icon:t.icon}:{name:e,icon:""}}const ei={punch:{id:"punch",name:"Punch",icon:"",damageMult:1,qiCost:0,cooldownMs:900},superPunch:{id:"superPunch",name:"Super Punch",icon:"",damageMult:2,qiCost:0,cooldownMs:2e3}},ur={name:"Qi Blast",damageMult:3,cooldownMs:3e3},Ma={Fire:[{tier:1,name:"Flame Palm",damage:2,qiCost:5,cooldown:2},{tier:5,name:"Inferno Strike",damage:5,qiCost:15,cooldown:4},{tier:10,name:"Phoenix Rebirth",damage:10,qiCost:50,cooldown:8,special:"heal"},{tier:15,name:"Crimson Hellfire",damage:20,qiCost:100,cooldown:12},{tier:20,name:"Solar Annihilation",damage:50,qiCost:300,cooldown:20}],Water:[{tier:1,name:"Water Whip",damage:1.5,qiCost:4,cooldown:2},{tier:5,name:"Tidal Wave",damage:4,qiCost:12,cooldown:4},{tier:10,name:"Whirlpool Prison",damage:8,qiCost:40,cooldown:7,special:"stun"},{tier:15,name:"Tsunami Force",damage:18,qiCost:90,cooldown:11},{tier:20,name:"Ocean God Strike",damage:45,qiCost:280,cooldown:18}],Thunder:[{tier:1,name:"Lightning Bolt",damage:2.5,qiCost:6,cooldown:2},{tier:5,name:"Thunder Clap",damage:6,qiCost:18,cooldown:4},{tier:10,name:"Storm Fury",damage:12,qiCost:60,cooldown:8},{tier:15,name:"Heavenly Tribulation",damage:25,qiCost:120,cooldown:13},{tier:20,name:"Divine Thunder Judgment",damage:60,qiCost:350,cooldown:22}],Ice:[{tier:1,name:"Frost Touch",damage:1.8,qiCost:5,cooldown:2,special:"slow"},{tier:5,name:"Ice Spike",damage:4.5,qiCost:14,cooldown:4},{tier:10,name:"Frozen Domain",damage:9,qiCost:45,cooldown:7},{tier:15,name:"Glacial Prison",damage:19,qiCost:95,cooldown:12},{tier:20,name:"Absolute Zero",damage:48,qiCost:290,cooldown:19}],Earth:[{tier:1,name:"Stone Fist",damage:2.2,qiCost:5,cooldown:2},{tier:5,name:"Boulder Crash",damage:5.5,qiCost:16,cooldown:4},{tier:10,name:"Earthquake",damage:11,qiCost:55,cooldown:8},{tier:15,name:"Mountain Collapse",damage:22,qiCost:110,cooldown:13},{tier:20,name:"Continental Sunder",damage:55,qiCost:320,cooldown:21}],Poison:[{tier:1,name:"Venom Touch",damage:1.5,qiCost:4,cooldown:2,special:"dot"},{tier:5,name:"Toxic Cloud",damage:3.5,qiCost:11,cooldown:4},{tier:10,name:"Plague Strike",damage:7,qiCost:35,cooldown:6},{tier:15,name:"Deadly Miasma",damage:16,qiCost:85,cooldown:10},{tier:20,name:"Extinction Poison",damage:40,qiCost:260,cooldown:17}],Space:[{tier:1,name:"Void Step",damage:2,qiCost:6,cooldown:2,special:"dodge"},{tier:5,name:"Spatial Slash",damage:5.5,qiCost:17,cooldown:4},{tier:10,name:"Dimensional Rift",damage:11,qiCost:56,cooldown:8},{tier:15,name:"Reality Tear",damage:23,qiCost:115,cooldown:13},{tier:20,name:"Universe Collapse",damage:58,qiCost:330,cooldown:22}],Demon:[{tier:1,name:"Dark Claw",damage:2.5,qiCost:5,cooldown:2},{tier:5,name:"Soul Rend",damage:6.5,qiCost:19,cooldown:4,special:"lifesteal"},{tier:10,name:"Demon Possession",damage:13,qiCost:65,cooldown:8},{tier:15,name:"Infernal Chains",damage:27,qiCost:130,cooldown:14},{tier:20,name:"Apocalypse",damage:70,qiCost:380,cooldown:24}],Decay:[{tier:1,name:"Rotting Touch",damage:1.8,qiCost:5,cooldown:2,special:"dot"},{tier:5,name:"Ashen Grasp",damage:4.5,qiCost:14,cooldown:4},{tier:10,name:"Wither Bloom",damage:9,qiCost:45,cooldown:7,special:"slow"},{tier:15,name:"Gravewind",damage:19,qiCost:100,cooldown:12},{tier:20,name:"Entropy Spiral",damage:50,qiCost:300,cooldown:20}],Sound:[{tier:1,name:"Resonant Tap",damage:2,qiCost:5,cooldown:2},{tier:5,name:"Echo Slice",damage:5,qiCost:15,cooldown:4},{tier:10,name:"Disrupting Chime",damage:10,qiCost:50,cooldown:8,special:"stun"},{tier:15,name:"Harmonic Collapse",damage:21,qiCost:110,cooldown:13},{tier:20,name:"World-Shattering Requiem",damage:55,qiCost:320,cooldown:21}],Cloud:[{tier:1,name:"Mist Veil",damage:1.7,qiCost:5,cooldown:2,special:"dodge"},{tier:5,name:"Drifting Gale",damage:4.8,qiCost:15,cooldown:4},{tier:10,name:"Sky Bind",damage:10.5,qiCost:55,cooldown:8,special:"slow"},{tier:15,name:"Tempest Curtain",damage:22,qiCost:115,cooldown:13},{tier:20,name:"Celestial Cloudfall",damage:58,qiCost:330,cooldown:22}],Air:[{tier:1,name:"Wind Step",damage:2.1,qiCost:5,cooldown:2,special:"dodge"},{tier:5,name:"Vacuum Cut",damage:5.4,qiCost:16,cooldown:4},{tier:10,name:"Suffocating Spiral",damage:11,qiCost:55,cooldown:8,special:"slow"},{tier:15,name:"Jetstream Lance",damage:23,qiCost:120,cooldown:13},{tier:20,name:"Stormfront Sever",damage:60,qiCost:350,cooldown:22}],"Black Hole":[{tier:1,name:"Event Horizon",damage:2.3,qiCost:6,cooldown:2,special:"slow"},{tier:5,name:"Gravity Crush",damage:6,qiCost:18,cooldown:4},{tier:10,name:"Singularity Grip",damage:12,qiCost:60,cooldown:8,special:"stun"},{tier:15,name:"Accretion Torrent",damage:25,qiCost:125,cooldown:13},{tier:20,name:"Total Collapse",damage:65,qiCost:360,cooldown:22}],Grass:[{tier:1,name:"Vine Lash",damage:1.9,qiCost:5,cooldown:2},{tier:5,name:"Thorn Barrage",damage:4.7,qiCost:14,cooldown:4},{tier:10,name:"Rejuvenating Bloom",damage:9.5,qiCost:50,cooldown:8,special:"heal"},{tier:15,name:"Ancient Grove Wrath",damage:20,qiCost:105,cooldown:12},{tier:20,name:"Verdant Overgrowth",damage:52,qiCost:310,cooldown:20}],Sickness:[{tier:1,name:"Fever Touch",damage:1.7,qiCost:5,cooldown:2,special:"dot"},{tier:5,name:"Contagion Breath",damage:4.2,qiCost:13,cooldown:4,special:"dot"},{tier:10,name:"Pale Omen",damage:9,qiCost:48,cooldown:8},{tier:15,name:"Plague Court",damage:19.5,qiCost:100,cooldown:12},{tier:20,name:"Black Death Mandate",damage:50,qiCost:300,cooldown:20}],Orthodox:[{tier:1,name:"Righteous Palm",damage:2.2,qiCost:5,cooldown:2},{tier:5,name:"Oathbound Strike",damage:5.6,qiCost:16,cooldown:4},{tier:10,name:"Purifying Flame",damage:11,qiCost:55,cooldown:8,special:"heal"},{tier:15,name:"Heavenly Mandate",damage:23,qiCost:120,cooldown:13},{tier:20,name:"Judgment of the Ten Thousand Laws",damage:60,qiCost:350,cooldown:22}]};for(const n of Ys)Ma[n]||(Ma[n]=[{tier:1,name:`${n} Strike`,damage:2,qiCost:5,cooldown:2},{tier:5,name:`${n} Burst`,damage:5,qiCost:15,cooldown:4},{tier:10,name:`${n} Dominance`,damage:10,qiCost:50,cooldown:8},{tier:15,name:`${n} Catastrophe`,damage:20,qiCost:100,cooldown:12},{tier:20,name:`${n} Apocalypse`,damage:50,qiCost:300,cooldown:20}]);const dr=[{major:"Meridian Opening",subRealms:[{sub:"I",qiMult:1.1,strMult:1,hpMult:1,minorCost:2,majorCost:null},{sub:"II",qiMult:1.2,strMult:1.1,hpMult:1.1,minorCost:4,majorCost:null},{sub:"III",qiMult:1.3,strMult:1.2,hpMult:1.2,minorCost:6,majorCost:null},{sub:"IV",qiMult:1.4,strMult:1.3,hpMult:1.3,minorCost:8,majorCost:null},{sub:"V",qiMult:1.5,strMult:1.4,hpMult:1.4,minorCost:10,majorCost:null},{sub:"VI",qiMult:1.6,strMult:1.5,hpMult:1.5,minorCost:12,majorCost:null},{sub:"VII",qiMult:1.7,strMult:1.6,hpMult:1.6,minorCost:14,majorCost:null},{sub:"VIII",qiMult:1.8,strMult:1.7,hpMult:1.7,minorCost:16,majorCost:null},{sub:"IX",qiMult:1.9,strMult:1.8,hpMult:1.8,minorCost:18,majorCost:35}]},{major:"Meridian Channeling",subRealms:[{sub:"I",qiMult:2,strMult:2,hpMult:2,minorCost:40,majorCost:null},{sub:"II",qiMult:2.2,strMult:2.2,hpMult:2.2,minorCost:50,majorCost:null},{sub:"III",qiMult:2.4,strMult:2.4,hpMult:2.4,minorCost:60,majorCost:null},{sub:"IV",qiMult:2.6,strMult:2.6,hpMult:2.6,minorCost:70,majorCost:null},{sub:"V",qiMult:2.8,strMult:2.8,hpMult:2.8,minorCost:80,majorCost:null},{sub:"VI",qiMult:3,strMult:3,hpMult:3,minorCost:90,majorCost:null},{sub:"VII",qiMult:3.2,strMult:3.2,hpMult:3.2,minorCost:100,majorCost:null},{sub:"VIII",qiMult:3.4,strMult:3.4,hpMult:3.4,minorCost:110,majorCost:null},{sub:"IX",qiMult:3.6,strMult:3.6,hpMult:3.6,minorCost:120,majorCost:200}]},{major:"Qi Channeling",subRealms:[{sub:"I",qiMult:4,strMult:4,hpMult:4,minorCost:250,majorCost:null},{sub:"II",qiMult:4.5,strMult:4.5,hpMult:4.5,minorCost:300,majorCost:null},{sub:"III",qiMult:5,strMult:5,hpMult:5,minorCost:350,majorCost:null},{sub:"IV",qiMult:5.5,strMult:5.5,hpMult:5.5,minorCost:400,majorCost:null},{sub:"V",qiMult:6,strMult:6,hpMult:6,minorCost:450,majorCost:null},{sub:"VI",qiMult:6.5,strMult:6.5,hpMult:6.5,minorCost:500,majorCost:null},{sub:"VII",qiMult:7,strMult:7,hpMult:7,minorCost:550,majorCost:null},{sub:"VIII",qiMult:7.5,strMult:7.5,hpMult:7.5,minorCost:600,majorCost:null},{sub:"IX",qiMult:8,strMult:8,hpMult:8,minorCost:650,majorCost:1200}]},{major:"Qi Fusion",subRealms:[{sub:"I",qiMult:9,strMult:9,hpMult:9,minorCost:1500,majorCost:null},{sub:"II",qiMult:10,strMult:10,hpMult:10,minorCost:1700,majorCost:null},{sub:"III",qiMult:11,strMult:11,hpMult:11,minorCost:1900,majorCost:null},{sub:"IV",qiMult:12,strMult:12,hpMult:12,minorCost:2100,majorCost:null},{sub:"V",qiMult:13,strMult:13,hpMult:13,minorCost:2300,majorCost:null},{sub:"VI",qiMult:14,strMult:14,hpMult:14,minorCost:2500,majorCost:null},{sub:"VII",qiMult:15,strMult:15,hpMult:15,minorCost:2700,majorCost:null},{sub:"VIII",qiMult:16,strMult:16,hpMult:16,minorCost:2900,majorCost:null},{sub:"IX",qiMult:17,strMult:17,hpMult:17,minorCost:3100,majorCost:5500}]},{major:"Core Formation",subRealms:[{sub:"I",qiMult:19,strMult:19,hpMult:19,minorCost:6e3,majorCost:null},{sub:"II",qiMult:21,strMult:21,hpMult:21,minorCost:6500,majorCost:null},{sub:"III",qiMult:23,strMult:23,hpMult:23,minorCost:7e3,majorCost:null},{sub:"IV",qiMult:25,strMult:25,hpMult:25,minorCost:7500,majorCost:null},{sub:"V",qiMult:27,strMult:27,hpMult:27,minorCost:8e3,majorCost:null},{sub:"VI",qiMult:29,strMult:29,hpMult:29,minorCost:8500,majorCost:null},{sub:"VII",qiMult:31,strMult:31,hpMult:31,minorCost:9e3,majorCost:null},{sub:"VIII",qiMult:33,strMult:33,hpMult:33,minorCost:9500,majorCost:null},{sub:"IX",qiMult:35,strMult:35,hpMult:35,minorCost:1e4,majorCost:18e3}]},{major:"Core Foundation",subRealms:[{sub:"I",qiMult:38,strMult:38,hpMult:38,minorCost:2e4,majorCost:null},{sub:"II",qiMult:41,strMult:41,hpMult:41,minorCost:22e3,majorCost:null},{sub:"III",qiMult:44,strMult:44,hpMult:44,minorCost:24e3,majorCost:null},{sub:"IV",qiMult:47,strMult:47,hpMult:47,minorCost:26e3,majorCost:null},{sub:"V",qiMult:50,strMult:50,hpMult:50,minorCost:28e3,majorCost:null},{sub:"VI",qiMult:53,strMult:53,hpMult:53,minorCost:3e4,majorCost:null},{sub:"VII",qiMult:56,strMult:56,hpMult:56,minorCost:32e3,majorCost:null},{sub:"VIII",qiMult:59,strMult:59,hpMult:59,minorCost:34e3,majorCost:null},{sub:"IX",qiMult:62,strMult:62,hpMult:62,minorCost:36e3,majorCost:65e3}]},{major:"Golden Core Formation",subRealms:[{sub:"I",qiMult:66,strMult:66,hpMult:66,minorCost:7e4,majorCost:null},{sub:"II",qiMult:70,strMult:70,hpMult:70,minorCost:75e3,majorCost:null},{sub:"III",qiMult:74,strMult:74,hpMult:74,minorCost:8e4,majorCost:null},{sub:"IV",qiMult:78,strMult:78,hpMult:78,minorCost:85e3,majorCost:null},{sub:"V",qiMult:82,strMult:82,hpMult:82,minorCost:9e4,majorCost:null},{sub:"VI",qiMult:86,strMult:86,hpMult:86,minorCost:95e3,majorCost:null},{sub:"VII",qiMult:90,strMult:90,hpMult:90,minorCost:1e5,majorCost:null},{sub:"VIII",qiMult:94,strMult:94,hpMult:94,minorCost:105e3,majorCost:null},{sub:"IX",qiMult:98,strMult:98,hpMult:98,minorCost:11e4,majorCost:2e5}]},{major:"Golden Core Foundation",subRealms:[{sub:"I",qiMult:103,strMult:103,hpMult:103,minorCost:22e4,majorCost:null},{sub:"II",qiMult:108,strMult:108,hpMult:108,minorCost:24e4,majorCost:null},{sub:"III",qiMult:113,strMult:113,hpMult:113,minorCost:26e4,majorCost:null},{sub:"IV",qiMult:118,strMult:118,hpMult:118,minorCost:28e4,majorCost:null},{sub:"V",qiMult:123,strMult:123,hpMult:123,minorCost:3e5,majorCost:null},{sub:"VI",qiMult:128,strMult:128,hpMult:128,minorCost:32e4,majorCost:null},{sub:"VII",qiMult:133,strMult:133,hpMult:133,minorCost:34e4,majorCost:null},{sub:"VIII",qiMult:138,strMult:138,hpMult:138,minorCost:36e4,majorCost:null},{sub:"IX",qiMult:143,strMult:143,hpMult:143,minorCost:38e4,majorCost:7e5}]},{major:"Foundation Establishment",subRealms:[{sub:"I",qiMult:150,strMult:150,hpMult:150,minorCost:75e4,majorCost:null},{sub:"II",qiMult:157,strMult:157,hpMult:157,minorCost:8e5,majorCost:null},{sub:"III",qiMult:164,strMult:164,hpMult:164,minorCost:85e4,majorCost:null},{sub:"IV",qiMult:171,strMult:171,hpMult:171,minorCost:9e5,majorCost:null},{sub:"V",qiMult:178,strMult:178,hpMult:178,minorCost:95e4,majorCost:null},{sub:"VI",qiMult:185,strMult:185,hpMult:185,minorCost:1e6,majorCost:null},{sub:"VII",qiMult:192,strMult:192,hpMult:192,minorCost:105e4,majorCost:null},{sub:"VIII",qiMult:199,strMult:199,hpMult:199,minorCost:11e5,majorCost:null},{sub:"IX",qiMult:206,strMult:206,hpMult:206,minorCost:115e4,majorCost:2e6}]},{major:"Spiritual Understanding",subRealms:[{sub:"I",qiMult:215,strMult:215,hpMult:215,minorCost:22e5,majorCost:null},{sub:"II",qiMult:224,strMult:224,hpMult:224,minorCost:24e5,majorCost:null},{sub:"III",qiMult:233,strMult:233,hpMult:233,minorCost:26e5,majorCost:null},{sub:"IV",qiMult:242,strMult:242,hpMult:242,minorCost:28e5,majorCost:null},{sub:"V",qiMult:251,strMult:251,hpMult:251,minorCost:3e6,majorCost:null},{sub:"VI",qiMult:260,strMult:260,hpMult:260,minorCost:32e5,majorCost:null},{sub:"VII",qiMult:269,strMult:269,hpMult:269,minorCost:34e5,majorCost:null},{sub:"VIII",qiMult:278,strMult:278,hpMult:278,minorCost:36e5,majorCost:null},{sub:"IX",qiMult:287,strMult:287,hpMult:287,minorCost:38e5,majorCost:7e6}]},{major:"Soul Understanding",subRealms:[{sub:"I",qiMult:300,strMult:300,hpMult:300,minorCost:75e5,majorCost:null},{sub:"II",qiMult:313,strMult:313,hpMult:313,minorCost:8e6,majorCost:null},{sub:"III",qiMult:326,strMult:326,hpMult:326,minorCost:85e5,majorCost:null},{sub:"IV",qiMult:339,strMult:339,hpMult:339,minorCost:9e6,majorCost:null},{sub:"V",qiMult:352,strMult:352,hpMult:352,minorCost:95e5,majorCost:null},{sub:"VI",qiMult:365,strMult:365,hpMult:365,minorCost:1e7,majorCost:null},{sub:"VII",qiMult:378,strMult:378,hpMult:378,minorCost:105e5,majorCost:null},{sub:"VIII",qiMult:391,strMult:391,hpMult:391,minorCost:11e6,majorCost:null},{sub:"IX",qiMult:404,strMult:404,hpMult:404,minorCost:115e5,majorCost:2e7}]},{major:"Nascent Soul",subRealms:[{sub:"I",qiMult:420,strMult:420,hpMult:420,minorCost:22e6,majorCost:null},{sub:"II",qiMult:436,strMult:436,hpMult:436,minorCost:24e6,majorCost:null},{sub:"III",qiMult:452,strMult:452,hpMult:452,minorCost:26e6,majorCost:null},{sub:"IV",qiMult:468,strMult:468,hpMult:468,minorCost:28e6,majorCost:null},{sub:"V",qiMult:484,strMult:484,hpMult:484,minorCost:3e7,majorCost:null},{sub:"VI",qiMult:500,strMult:500,hpMult:500,minorCost:32e6,majorCost:null},{sub:"VII",qiMult:516,strMult:516,hpMult:516,minorCost:34e6,majorCost:null},{sub:"VIII",qiMult:532,strMult:532,hpMult:532,minorCost:36e6,majorCost:null},{sub:"IX",qiMult:548,strMult:548,hpMult:548,minorCost:38e6,majorCost:65e6}]},{major:"Spatial Awareness",subRealms:[{sub:"I",qiMult:570,strMult:570,hpMult:570,minorCost:7e7,majorCost:null},{sub:"II",qiMult:592,strMult:592,hpMult:592,minorCost:75e6,majorCost:null},{sub:"III",qiMult:614,strMult:614,hpMult:614,minorCost:8e7,majorCost:null},{sub:"IV",qiMult:636,strMult:636,hpMult:636,minorCost:85e6,majorCost:null},{sub:"V",qiMult:658,strMult:658,hpMult:658,minorCost:9e7,majorCost:null},{sub:"VI",qiMult:680,strMult:680,hpMult:680,minorCost:95e6,majorCost:null},{sub:"VII",qiMult:702,strMult:702,hpMult:702,minorCost:1e8,majorCost:null},{sub:"VIII",qiMult:724,strMult:724,hpMult:724,minorCost:105e6,majorCost:null},{sub:"IX",qiMult:746,strMult:746,hpMult:746,minorCost:11e7,majorCost:2e8}]},{major:"Spatial Mastery",subRealms:[{sub:"I",qiMult:775,strMult:775,hpMult:775,minorCost:22e7,majorCost:null},{sub:"II",qiMult:804,strMult:804,hpMult:804,minorCost:24e7,majorCost:null},{sub:"III",qiMult:833,strMult:833,hpMult:833,minorCost:26e7,majorCost:null},{sub:"IV",qiMult:862,strMult:862,hpMult:862,minorCost:28e7,majorCost:null},{sub:"V",qiMult:891,strMult:891,hpMult:891,minorCost:3e8,majorCost:null},{sub:"VI",qiMult:920,strMult:920,hpMult:920,minorCost:32e7,majorCost:null},{sub:"VII",qiMult:949,strMult:949,hpMult:949,minorCost:34e7,majorCost:null},{sub:"VIII",qiMult:978,strMult:978,hpMult:978,minorCost:36e7,majorCost:null},{sub:"IX",qiMult:1007,strMult:1007,hpMult:1007,minorCost:38e7,majorCost:7e8}]},{major:"Cosmic Channeling",subRealms:[{sub:"I",qiMult:1045,strMult:1045,hpMult:1045,minorCost:75e7,majorCost:null},{sub:"II",qiMult:1083,strMult:1083,hpMult:1083,minorCost:8e8,majorCost:null},{sub:"III",qiMult:1121,strMult:1121,hpMult:1121,minorCost:85e7,majorCost:null},{sub:"IV",qiMult:1159,strMult:1159,hpMult:1159,minorCost:9e8,majorCost:null},{sub:"V",qiMult:1197,strMult:1197,hpMult:1197,minorCost:95e7,majorCost:null},{sub:"VI",qiMult:1235,strMult:1235,hpMult:1235,minorCost:1e9,majorCost:null},{sub:"VII",qiMult:1273,strMult:1273,hpMult:1273,minorCost:105e7,majorCost:null},{sub:"VIII",qiMult:1311,strMult:1311,hpMult:1311,minorCost:11e8,majorCost:null},{sub:"IX",qiMult:1349,strMult:1349,hpMult:1349,minorCost:115e7,majorCost:2e9}]},{major:"Cosmic Fusion",subRealms:[{sub:"I",qiMult:1400,strMult:1400,hpMult:1400,minorCost:22e8,majorCost:null},{sub:"II",qiMult:1451,strMult:1451,hpMult:1451,minorCost:24e8,majorCost:null},{sub:"III",qiMult:1502,strMult:1502,hpMult:1502,minorCost:26e8,majorCost:null},{sub:"IV",qiMult:1553,strMult:1553,hpMult:1553,minorCost:28e8,majorCost:null},{sub:"V",qiMult:1604,strMult:1604,hpMult:1604,minorCost:3e9,majorCost:null},{sub:"VI",qiMult:1655,strMult:1655,hpMult:1655,minorCost:32e8,majorCost:null},{sub:"VII",qiMult:1706,strMult:1706,hpMult:1706,minorCost:34e8,majorCost:null},{sub:"VIII",qiMult:1757,strMult:1757,hpMult:1757,minorCost:36e8,majorCost:null},{sub:"IX",qiMult:1808,strMult:1808,hpMult:1808,minorCost:38e8,majorCost:7e9}]},{major:"Early Immortality",subRealms:[{sub:"I",qiMult:1875,strMult:1875,hpMult:1875,minorCost:75e8,majorCost:null},{sub:"II",qiMult:1942,strMult:1942,hpMult:1942,minorCost:8e9,majorCost:null},{sub:"III",qiMult:2009,strMult:2009,hpMult:2009,minorCost:85e8,majorCost:null},{sub:"IV",qiMult:2076,strMult:2076,hpMult:2076,minorCost:9e9,majorCost:null},{sub:"V",qiMult:2143,strMult:2143,hpMult:2143,minorCost:95e8,majorCost:null},{sub:"VI",qiMult:2210,strMult:2210,hpMult:2210,minorCost:1e10,majorCost:null},{sub:"VII",qiMult:2277,strMult:2277,hpMult:2277,minorCost:105e8,majorCost:null},{sub:"VIII",qiMult:2344,strMult:2344,hpMult:2344,minorCost:11e9,majorCost:null},{sub:"IX",qiMult:2411,strMult:2411,hpMult:2411,minorCost:115e8,majorCost:2e10}]},{major:"Demi-God",subRealms:[{sub:"I",qiMult:2500,strMult:2500,hpMult:2500,minorCost:22e9,majorCost:null},{sub:"II",qiMult:2589,strMult:2589,hpMult:2589,minorCost:24e9,majorCost:null},{sub:"III",qiMult:2678,strMult:2678,hpMult:2678,minorCost:26e9,majorCost:null},{sub:"IV",qiMult:2767,strMult:2767,hpMult:2767,minorCost:28e9,majorCost:null},{sub:"V",qiMult:2856,strMult:2856,hpMult:2856,minorCost:3e10,majorCost:null},{sub:"VI",qiMult:2945,strMult:2945,hpMult:2945,minorCost:32e9,majorCost:null},{sub:"VII",qiMult:3034,strMult:3034,hpMult:3034,minorCost:34e9,majorCost:null},{sub:"VIII",qiMult:3123,strMult:3123,hpMult:3123,minorCost:36e9,majorCost:null},{sub:"IX",qiMult:3212,strMult:3212,hpMult:3212,minorCost:38e9,majorCost:65e9}]},{major:"Universal Fusion",subRealms:[{sub:"I",qiMult:3325,minorCost:7e10,majorCost:null},{sub:"II",qiMult:3438,minorCost:75e9,majorCost:null},{sub:"III",qiMult:3551,minorCost:8e10,majorCost:null},{sub:"IV",qiMult:3664,minorCost:85e9,majorCost:null},{sub:"V",qiMult:3777,minorCost:9e10,majorCost:null},{sub:"VI",qiMult:3890,minorCost:95e9,majorCost:null},{sub:"VII",qiMult:4003,minorCost:1e11,majorCost:null},{sub:"VIII",qiMult:4116,minorCost:105e9,majorCost:null},{sub:"IX",qiMult:4229,minorCost:11e10,majorCost:2e11}]},{major:"Monarch Immortal",subRealms:[{sub:"I",qiMult:4375,minorCost:22e10,majorCost:null},{sub:"II",qiMult:4521,minorCost:24e10,majorCost:null},{sub:"III",qiMult:4667,minorCost:26e10,majorCost:null},{sub:"IV",qiMult:4813,minorCost:28e10,majorCost:null},{sub:"V",qiMult:4959,minorCost:3e11,majorCost:null},{sub:"VI",qiMult:5105,minorCost:32e10,majorCost:null},{sub:"VII",qiMult:5251,minorCost:34e10,majorCost:null},{sub:"VIII",qiMult:5397,minorCost:36e10,majorCost:null},{sub:"IX",qiMult:5543,minorCost:38e10,majorCost:null}]}],hr=[{major:"Demonic Sensing",subRealms:[{sub:"I",qiMult:1.2,strMult:1.3,hpMult:1.2,minorCost:2,majorCost:null,corruptionGain:1},{sub:"II",qiMult:1.4,strMult:1.5,hpMult:1.4,minorCost:4,majorCost:null,corruptionGain:1},{sub:"III",qiMult:1.6,strMult:1.7,hpMult:1.6,minorCost:6,majorCost:null,corruptionGain:1},{sub:"IV",qiMult:1.8,strMult:1.9,hpMult:1.8,minorCost:8,majorCost:null,corruptionGain:1},{sub:"V",qiMult:2,strMult:2.1,hpMult:2,minorCost:10,majorCost:null,corruptionGain:1},{sub:"VI",qiMult:2.2,strMult:2.3,hpMult:2.2,minorCost:12,majorCost:null,corruptionGain:1},{sub:"VII",qiMult:2.4,strMult:2.5,hpMult:2.4,minorCost:14,majorCost:null,corruptionGain:1},{sub:"VIII",qiMult:2.6,strMult:2.7,hpMult:2.6,minorCost:16,majorCost:null,corruptionGain:1},{sub:"IX",qiMult:2.8,strMult:2.9,hpMult:2.8,minorCost:18,majorCost:40,corruptionGain:2}]},{major:"Flesh Corruption",subRealms:[{sub:"I",qiMult:3.2,strMult:3.5,hpMult:3.2,minorCost:45,majorCost:null,corruptionGain:2},{sub:"II",qiMult:3.6,strMult:3.9,hpMult:3.6,minorCost:55,majorCost:null,corruptionGain:2},{sub:"III",qiMult:4,strMult:4.3,hpMult:4,minorCost:65,majorCost:null,corruptionGain:2},{sub:"IV",qiMult:4.4,strMult:4.7,hpMult:4.4,minorCost:75,majorCost:null,corruptionGain:2},{sub:"V",qiMult:4.8,strMult:5.1,hpMult:4.8,minorCost:85,majorCost:null,corruptionGain:2},{sub:"VI",qiMult:5.2,strMult:5.5,hpMult:5.2,minorCost:95,majorCost:null,corruptionGain:2},{sub:"VII",qiMult:5.6,strMult:5.9,hpMult:5.6,minorCost:105,majorCost:null,corruptionGain:2},{sub:"VIII",qiMult:6,strMult:6.3,hpMult:6,minorCost:115,majorCost:null,corruptionGain:2},{sub:"IX",qiMult:6.4,strMult:6.7,hpMult:6.4,minorCost:125,majorCost:220,corruptionGain:3}]},{major:"Blood Circulation",subRealms:[{sub:"I",qiMult:7.2,strMult:7.8,hpMult:7,minorCost:280,majorCost:null,corruptionGain:3},{sub:"II",qiMult:8,strMult:8.6,hpMult:7.8,minorCost:330,majorCost:null,corruptionGain:3},{sub:"III",qiMult:8.8,strMult:9.4,hpMult:8.6,minorCost:380,majorCost:null,corruptionGain:3},{sub:"IV",qiMult:9.6,strMult:10.2,hpMult:9.4,minorCost:430,majorCost:null,corruptionGain:3},{sub:"V",qiMult:10.4,strMult:11,hpMult:10.2,minorCost:480,majorCost:null,corruptionGain:3},{sub:"VI",qiMult:11.2,strMult:11.8,hpMult:11,minorCost:530,majorCost:null,corruptionGain:3},{sub:"VII",qiMult:12,strMult:12.6,hpMult:11.8,minorCost:580,majorCost:null,corruptionGain:3},{sub:"VIII",qiMult:12.8,strMult:13.4,hpMult:12.6,minorCost:630,majorCost:null,corruptionGain:3},{sub:"IX",qiMult:13.6,strMult:14.2,hpMult:13.4,minorCost:680,majorCost:1400,corruptionGain:4}]},{major:"Sin Core Formation",subRealms:[{sub:"I",qiMult:15.5,strMult:16.5,hpMult:15,minorCost:1700,majorCost:null,corruptionGain:4},{sub:"II",qiMult:17.5,strMult:18.5,hpMult:17,minorCost:1950,majorCost:null,corruptionGain:4},{sub:"III",qiMult:19.5,strMult:20.5,hpMult:19,minorCost:2200,majorCost:null,corruptionGain:4},{sub:"IV",qiMult:21.5,strMult:22.5,hpMult:21,minorCost:2450,majorCost:null,corruptionGain:4},{sub:"V",qiMult:23.5,strMult:24.5,hpMult:23,minorCost:2700,majorCost:null,corruptionGain:4},{sub:"VI",qiMult:25.5,strMult:26.5,hpMult:25,minorCost:2950,majorCost:null,corruptionGain:4},{sub:"VII",qiMult:27.5,strMult:28.5,hpMult:27,minorCost:3200,majorCost:null,corruptionGain:4},{sub:"VIII",qiMult:29.5,strMult:30.5,hpMult:29,minorCost:3450,majorCost:null,corruptionGain:4},{sub:"IX",qiMult:31.5,strMult:32.5,hpMult:31,minorCost:3700,majorCost:6500,corruptionGain:5}]},{major:"Will of Atrocity",subRealms:[{sub:"I",qiMult:36,strMult:38,hpMult:35,minorCost:7500,majorCost:null,corruptionGain:5},{sub:"II",qiMult:41,strMult:43,hpMult:40,minorCost:8200,majorCost:null,corruptionGain:5},{sub:"III",qiMult:46,strMult:48,hpMult:45,minorCost:8900,majorCost:null,corruptionGain:5},{sub:"IV",qiMult:51,strMult:53,hpMult:50,minorCost:9600,majorCost:null,corruptionGain:5},{sub:"V",qiMult:56,strMult:58,hpMult:55,minorCost:10300,majorCost:null,corruptionGain:5},{sub:"VI",qiMult:61,strMult:63,hpMult:60,minorCost:11e3,majorCost:null,corruptionGain:5},{sub:"VII",qiMult:66,strMult:68,hpMult:65,minorCost:11700,majorCost:null,corruptionGain:5},{sub:"VIII",qiMult:71,strMult:73,hpMult:70,minorCost:12400,majorCost:null,corruptionGain:5},{sub:"IX",qiMult:76,strMult:78,hpMult:75,minorCost:13100,majorCost:25e3,corruptionGain:6}]},{major:"Domain of Slaughter",subRealms:[{sub:"I",qiMult:88,strMult:92,hpMult:85,minorCost:3e4,majorCost:null,corruptionGain:6},{sub:"II",qiMult:100,strMult:104,hpMult:97,minorCost:34e3,majorCost:null,corruptionGain:6},{sub:"III",qiMult:112,strMult:116,hpMult:109,minorCost:38e3,majorCost:null,corruptionGain:6},{sub:"IV",qiMult:124,strMult:128,hpMult:121,minorCost:42e3,majorCost:null,corruptionGain:6},{sub:"V",qiMult:136,strMult:140,hpMult:133,minorCost:46e3,majorCost:null,corruptionGain:6},{sub:"VI",qiMult:148,strMult:152,hpMult:145,minorCost:5e4,majorCost:null,corruptionGain:6},{sub:"VII",qiMult:160,strMult:164,hpMult:157,minorCost:54e3,majorCost:null,corruptionGain:6},{sub:"VIII",qiMult:172,strMult:176,hpMult:169,minorCost:58e3,majorCost:null,corruptionGain:6},{sub:"IX",qiMult:184,strMult:188,hpMult:181,minorCost:62e3,majorCost:11e4,corruptionGain:7}]},{major:"Law of Ruin Perception",subRealms:[{sub:"I",qiMult:210,strMult:220,hpMult:205,minorCost:14e4,majorCost:null,corruptionGain:7},{sub:"II",qiMult:236,strMult:246,hpMult:231,minorCost:16e4,majorCost:null,corruptionGain:7},{sub:"III",qiMult:262,strMult:272,hpMult:257,minorCost:18e4,majorCost:null,corruptionGain:7},{sub:"IV",qiMult:288,strMult:298,hpMult:283,minorCost:2e5,majorCost:null,corruptionGain:7},{sub:"V",qiMult:314,strMult:324,hpMult:309,minorCost:22e4,majorCost:null,corruptionGain:7},{sub:"VI",qiMult:340,strMult:350,hpMult:335,minorCost:24e4,majorCost:null,corruptionGain:7},{sub:"VII",qiMult:366,strMult:376,hpMult:361,minorCost:26e4,majorCost:null,corruptionGain:7},{sub:"VIII",qiMult:392,strMult:402,hpMult:387,minorCost:28e4,majorCost:null,corruptionGain:7},{sub:"IX",qiMult:418,strMult:428,hpMult:413,minorCost:3e5,majorCost:55e4,corruptionGain:8}]},{major:"Fate Devouring",subRealms:[{sub:"I",qiMult:480,strMult:500,hpMult:475,minorCost:7e5,majorCost:null,corruptionGain:8},{sub:"II",qiMult:542,strMult:562,hpMult:537,minorCost:82e4,majorCost:null,corruptionGain:8},{sub:"III",qiMult:604,strMult:624,hpMult:599,minorCost:94e4,majorCost:null,corruptionGain:8},{sub:"IV",qiMult:666,strMult:686,hpMult:661,minorCost:106e4,majorCost:null,corruptionGain:8},{sub:"V",qiMult:728,strMult:748,hpMult:723,minorCost:118e4,majorCost:null,corruptionGain:8},{sub:"VI",qiMult:790,strMult:810,hpMult:785,minorCost:13e5,majorCost:null,corruptionGain:8},{sub:"VII",qiMult:852,strMult:872,hpMult:847,minorCost:142e4,majorCost:null,corruptionGain:8},{sub:"VIII",qiMult:914,strMult:934,hpMult:909,minorCost:154e4,majorCost:null,corruptionGain:8},{sub:"IX",qiMult:976,strMult:996,hpMult:971,minorCost:166e4,majorCost:3e6,corruptionGain:9}]},{major:"Abyssal Ascension",subRealms:[{sub:"I",qiMult:1120,strMult:1160,hpMult:1100,minorCost:38e5,majorCost:null,corruptionGain:9},{sub:"II",qiMult:1264,strMult:1304,hpMult:1244,minorCost:44e5,majorCost:null,corruptionGain:9},{sub:"III",qiMult:1408,strMult:1448,hpMult:1388,minorCost:5e6,majorCost:null,corruptionGain:9},{sub:"IV",qiMult:1552,strMult:1592,hpMult:1532,minorCost:56e5,majorCost:null,corruptionGain:9},{sub:"V",qiMult:1696,strMult:1736,hpMult:1676,minorCost:62e5,majorCost:null,corruptionGain:9},{sub:"VI",qiMult:1840,strMult:1880,hpMult:1820,minorCost:68e5,majorCost:null,corruptionGain:9},{sub:"VII",qiMult:1984,strMult:2024,hpMult:1964,minorCost:74e5,majorCost:null,corruptionGain:9},{sub:"VIII",qiMult:2128,strMult:2168,hpMult:2108,minorCost:8e6,majorCost:null,corruptionGain:9},{sub:"IX",qiMult:2272,strMult:2312,hpMult:2252,minorCost:86e5,majorCost:15e6,corruptionGain:10}]},{major:"Demon Monarch Existence",subRealms:[{sub:"I",qiMult:2600,strMult:2700,hpMult:2550,minorCost:19e6,majorCost:null,corruptionGain:10},{sub:"II",qiMult:2928,strMult:3028,hpMult:2878,minorCost:22e6,majorCost:null,corruptionGain:10},{sub:"III",qiMult:3256,strMult:3356,hpMult:3206,minorCost:25e6,majorCost:null,corruptionGain:10},{sub:"IV",qiMult:3584,strMult:3684,hpMult:3534,minorCost:28e6,majorCost:null,corruptionGain:10},{sub:"V",qiMult:3912,strMult:4012,hpMult:3862,minorCost:31e6,majorCost:null,corruptionGain:10},{sub:"VI",qiMult:4240,strMult:4340,hpMult:4190,minorCost:34e6,majorCost:null,corruptionGain:10},{sub:"VII",qiMult:4568,strMult:4668,hpMult:4518,minorCost:37e6,majorCost:null,corruptionGain:10},{sub:"VIII",qiMult:4896,strMult:4996,hpMult:4846,minorCost:4e7,majorCost:null,corruptionGain:10},{sub:"IX",qiMult:5224,strMult:5324,hpMult:5174,minorCost:43e6,majorCost:null,corruptionGain:12}]}],i={phase:"FATE_ROLL",playerName:"",playerGender:null,intro:{progress:0,step:"loading",usernameDraft:"",hasAnimatedTitle:!1},bloodline:null,spiritualRoots:null,luck:0,affinities:[],primaryAffinity:null,stamina:10,maxStamina:10,qi:0,copper:0,silver:0,gold:0,spiritStonesLow:0,spiritStonesMid:0,spiritStonesHigh:0,isResting:!1,isCultivating:!1,health:100,maxHealth:100,strength:10,cultivationMajorIndex:0,cultivationSubIndex:0,bestMajorRealm:{index:0,subIndex:0,isDemon:!1,label:""},bestRebirthPoints:0,leaderboards:{major:{rows:[],loading:!1,error:"",fetchedAt:0},rebirth:{rows:[],loading:!1,error:"",fetchedAt:0}},leaderboardsTab:"major",showCredits:!1,ageMonths:0,expectedLifespanMonths:1200,hasMetFakeImmortal:!1,hasPaidFakeImmortal:!1,hasUnlockedWood:!1,hasJoinedSect:!1,currentSect:null,isDemonPath:!1,corruption:0,demonCorruptionAscended:!1,demonCosmicFinaleDone:!1,dozeOffUnlocked:!1,demonCabinRevengeStage:"",runEnded:!1,hardMode:!1,orthodoxWarStage:0,orthodoxTrueEndingDone:!1,farmingLevel:1,farmingToolCost:10,copperMultiplier:1,qiMultiplier:1,silverMultiplier:1,hasBoughtTools:!1,hasBoughtNormalAxe:!1,hasBoughtLegendaryTools:!1,hasSeenBargain:!1,bargainOfferRolled:!1,bargainOfferAvailable:!1,legendaryAxeOfferRolled:!1,legendaryAxeOfferAvailable:!1,hasStartedBusiness:!1,isBusinessOriented:!1,incomeCycleSeconds:0,businessCycleSeconds:5,businessIncomePerCycle:{silver:5,copper:15,gold:0},businessUpgradedExpansion:!1,businessUpgradedEmployees:!1,businessChoseStabilityIsntEnough:!1,businessChoseNoMoreGames:!1,businessMerchantGuildPartnered:!1,businessNervousNeighboringSectOpened:!1,businessNeighboringSectNegotiated:!1,businessNeighboringSectDenied:!1,businessSectRetaliationResolved:!1,businessFoundMysteriousManual:!1,businessGuildRetaliationPrepared:!1,businessCarpetBombDone:!1,businessHeavenlyDemonWatcherFollowed:!1,businessHeavenlyDemonOfferMade:!1,businessHeavenlyDemonOfferResolved:!1,businessHeavenlyDemonOfferAccepted:!1,businessHeavenlyDemonOfferDenied:!1,businessMergedWithMilitary:!1,businessBombTestingDone:!1,businessAntiMatterCreationDone:!1,businessWarpingDone:!1,businessStormHeavensStarted:!1,businessStormHeavensCinematicDone:!1,heavensImmortalGodClashStarted:!1,heavensEnding:null,hdDetour:{unlocked:!1,choseDifferentPath:!1,exploredCave:!1,caveChoice:null,startedFamily:!1,groceriesCount:0,returnHomeAvailable:!1,demonCinematicResolved:!1},dmFate:{unlocked:!1,stage:null},storyDialog:null,storyDialogReturnPhase:null,sectIncomeSeconds:0,hasChosen100SilverRoute:!1,cloudCultivatorStoryStage:0,cloudConqueredSects:[],cloudConqueredSectsUnlocked:!1,searchingAndConqueringCooldown:0,cloudCoalitionWarStage:0,cloudCoalitionWave:null,cloudFinalConfrontationCinematicDone:!1,hasLargerBagSpace:!1,largerBagSpaceUnlocked:!1,hasManual:!1,contributionPoints:0,encounterCooldown:0,manualTier:0,manualType:null,demonMonarchOnly:!1,fledDemon:!1,joinedOrthodoxSect:!1,customSectName:"",orthodoxHide:{stage:null},inCombat:!1,enemy:null,playerCooldowns:{punch:0,superPunch:0,qiBlast:0},equippedMoves:["punch","superPunch","punch"],rebirthPoints:0,rebirthStoneBonusLast:0,rebirthUpgrades:{minRootCount:1,maxRootCount:5,bloodlineBias:0,canRerollFate:!1,resetUnlockProgress:0,qiMultiplierLevel:0,herbGatherSpeedLevel:0,herbMultiGatherLevel:0,strengthMultiplierLevel:0,healthMultiplierLevel:0,specialCooldownLevel:0,repeatableSpeedLevel:0,autoGatherLevel:0,autoCraftLevel:0,pillCraftSpeedLevel:0,minRootBonusLevel:0,rootLuckLevel:0,maxRootBonusLevel:0,extraRerollsLevel:0,bloodlineLuckLevel:0,multiAffinityLuckLevel:0,affinityAlignmentLuckLevel:0,storyLuckLuckLevel:0,spiritStoneRpMultLevel:0,questDropChanceLevel:0},rebirthStoryAwards:{},rerollsRemaining:5,showResetModal:!1,showRebirthNodeModal:!1,rebirthNodeModalId:null,autoCraftPillFile:"",devModalMode:"RESET",devSpeed3x:!1,devIgnoreRequirements:!1,activeSidePanels:new Set,sectJoinPickerOpen:!1,sectRankPyramidOpen:!1,sectRankLayer:"outer",sectRankNumber:6,activeQuest:null,questReturnPhase:null,combatContext:null,sectTier:0,sectMultipliers:{qi:1,str:1,hp:1},characterProfile:{attributes:null},audio:{enabled:!1,sfxVolume:.7,musicVolume:.35},panelPositions:{stats:{x:0,y:0},inventory:{x:0,y:0},actions:{x:0,y:0},herbalism:{x:0,y:0},settings:{x:0,y:0},recipes:{x:0,y:0},profile:{x:0,y:0},sect:{x:0,y:0},quests:{x:0,y:0},moves:{x:0,y:0},shop:{x:0,y:0},leaderboards:{x:0,y:0},conqueredSects:{x:0,y:0},townShop:{x:0,y:0},hourShop:{x:0,y:0}},panelSizes:{},inventory:[],selectedInventoryIndex:null,equipped:{tool:null,manual:null},shopTab:"town",shops:{town:{resetAt:0,offers:[]},hour:{resetAt:0,offers:[]}},repeatableActions:[],specialActions:[],buttonCooldowns:{},villageMaterialsCooldown:0},qv=5*60*1e3,Vv=60*60*1e3;function Xs(n){const e=Number(n);return!Number.isFinite(e)||e<=0?0:Math.floor(e)}function Ku(n){const e=Math.max(0,Math.floor(n/1e3)),t=e%60,o=Math.floor(e/60),s=o%60,r=Math.floor(o/60),l=a=>String(a).padStart(2,"0");return r>0?`${r}:${l(s)}:${l(t)}`:`${s}:${l(t)}`}function Ii(){return[{file:"ying_yang_pill.png",src:"assets/ying_yang_pill.png",name:"Ying-Yang Pill"},{file:"herb_pill.png",src:"assets/herb_pill.png",name:"Herbal Pill"},{file:"qi_pill.png",src:"assets/qi_pill.png",name:"Qi Pill"},{file:"breakthrough_pill.png",src:"assets/breakthrough_pill.png",name:"Breakthrough Pill"},{file:"iron_body_pill.png",src:"assets/iron_body_pill.png",name:"Iron Body Pill"},{file:"angel_pill.png",src:"assets/angel_pill.png",name:"Angel Pill"},{file:"corruption_pill.png",src:"assets/corruption_pill.png",name:"Corruption Pill"},{file:"demon_pill.png",src:"assets/demon_pill.png",name:"Demon Pill"},{file:"lightning_pill.png",src:"assets/lightning_pill.png",name:"Lightning Pill"},{file:"death_pill.png",src:"assets/death_pill.png",name:"Death Pill"}]}function Ya(n){const e=String(n||""),t={"breakthrough_pill.png":"A sharp pill that pushes the boundary of your realm.","corruption_pill.png":"A dark pill that whispers of forbidden power.","herb_pill.png":"A fragrant pill brewed from concentrated spirit herbs.","qi_pill.png":"A simple pill that restores and refines your Qi.","ying_yang_pill.png":"A balanced pill that steadies your inner flow.","iron_body_pill.png":"A dense pill that hardens flesh and bone.","angel_pill.png":"A gentle pill that leaves a calming warmth behind.","death_pill.png":"A chilling pill that numbs the senses and sharpens focus.","demon_pill.png":"A fierce pill that burns with demonic intent.","lightning_pill.png":"A crackling pill that tingles with storm essence."};if(t[e])return t[e];const o=["A glossy pill that hums faintly with stored essence.","A dense pill that smells of minerals and cold air.","A bright pill that tingles on the tongue.","A bitter pill that leaves a metallic aftertaste.","A strange pill that seems heavier than it looks.","A smooth pill that swirls with faint, shifting light."];let s=0;for(let r=0;r<e.length;r++)s=s*31+e.charCodeAt(r)>>>0;return o[s%o.length]}function eo(n,e){const t=Math.ceil(Number(n)),o=Math.floor(Number(e));return!Number.isFinite(t)||!Number.isFinite(o)||o<t?t:Math.floor(Math.random()*(o-t+1))+t}function zv(){const n=Math.floor(Math.random()*4);return n===0?{currency:"copper",amount:eo(100,125)}:n===1?{currency:"silver",amount:eo(60,90)}:n===2?{currency:"gold",amount:eo(20,30)}:{currency:"spiritLow",amount:eo(5,10)}}function Qu(n){return n==="copper"?"COPPER":n==="silver"?"SILVER":n==="gold"?"GOLD":n==="spiritLow"?"LOW SPIRIT STONES":n==="spiritMid"?"MID SPIRIT STONES":n==="spiritHigh"?"HIGH SPIRIT STONES":String(n||"").toUpperCase()}function Wv(n){return n==="copper"?M(i.copper):n==="silver"?M(i.silver):n==="gold"?M(i.gold):n==="spiritLow"?M(i.spiritStonesLow):n==="spiritMid"?M(i.spiritStonesMid):n==="spiritHigh"?M(i.spiritStonesHigh):0}function Ju(n,e){if(i.devIgnoreRequirements)return;const t=M(e);n==="copper"?i.copper=Math.max(0,M(i.copper)-t):n==="silver"?i.silver=Math.max(0,M(i.silver)-t):n==="gold"?i.gold=Math.max(0,M(i.gold)-t):n==="spiritLow"?i.spiritStonesLow=Math.max(0,M(i.spiritStonesLow)-t):n==="spiritMid"?i.spiritStonesMid=Math.max(0,M(i.spiritStonesMid)-t):n==="spiritHigh"&&(i.spiritStonesHigh=Math.max(0,M(i.spiritStonesHigh)-t))}function Zu(n,e){return i.devIgnoreRequirements?!0:Wv(n)>=M(e)}function Xa(){(!i.shops||typeof i.shops!="object")&&(i.shops={town:{resetAt:0,offers:[]},hour:{resetAt:0,offers:[]}}),(!i.shops.town||typeof i.shops.town!="object")&&(i.shops.town={resetAt:0,offers:[]}),(!i.shops.hour||typeof i.shops.hour!="object")&&(i.shops.hour={resetAt:0,offers:[]}),Array.isArray(i.shops.town.offers)||(i.shops.town.offers=[]),Array.isArray(i.shops.hour.offers)||(i.shops.hour.offers=[]),i.shops.town.resetAt=Xs(i.shops.town.resetAt),i.shops.hour.resetAt=Xs(i.shops.hour.resetAt)}function Kc(n){const t=Ii().slice(),o=t.find(c=>c&&c.file==="death_pill.png"),s=t.filter(c=>c&&c.file!=="death_pill.png"),r=!!o&&Math.random()<.05;for(let c=s.length-1;c>0;c--){const u=Math.floor(Math.random()*(c+1)),d=s[c];s[c]=s[u],s[u]=d}const l=[];r&&l.push(o),l.push(...s.slice(0,Math.max(0,Math.min(6-l.length,s.length))));const a=Date.now();return l.map((c,u)=>{const d=zv();return{id:`${n}:${a}:${u}:${c.file}`,pillFile:c.file,pillName:String(c.name||"").trim()||c.file.replace(/\.(png|webp)$/i,""),imageSrc:c.src,description:Ya(c.file),priceCurrency:d.currency,priceAmount:d.amount,purchased:!1}})}function fo(n){Xa();const e=Date.now();n==="hour"?(i.shops.hour.offers=Kc("hour"),i.shops.hour.resetAt=e+Vv):(i.shops.town.offers=Kc("town"),i.shops.town.resetAt=e+qv)}function Pi(){Xa();const n=Date.now();(!i.shops.town.resetAt||i.shops.town.resetAt<=n||i.shops.town.offers.length!==6)&&fo("town"),(!i.shops.hour.resetAt||i.shops.hour.resetAt<=n||i.shops.hour.offers.length!==6)&&fo("hour")}function $v(){Pi();const n=Date.now();let e=!1;return i.shops.town.resetAt&&n>=i.shops.town.resetAt&&(fo("town"),e=!0),i.shops.hour.resetAt&&n>=i.shops.hour.resetAt&&(fo("hour"),e=!0),e}window.buyShopOffer=(n,e)=>{const t=String(n||""),o=String(e||"");Pi();const s=t==="hour"?i.shops.hour:i.shops.town,l=(Array.isArray(s==null?void 0:s.offers)?s.offers:[]).find(u=>u&&String(u.id)===o);if(!l||l.purchased)return;const a=String(l.priceCurrency||""),c=M(l.priceAmount);if(!Zu(a,c)){try{St("error")}catch{}O("Insufficient funds."),N(),U();return}Ju(a,c),l.purchased=!0;try{St("buy")}catch{}Array.isArray(i.inventory)||(i.inventory=[]);try{dt({name:l.pillName,kind:"pill",pillFile:String(l.pillFile||""),imageSrc:l.imageSrc,description:l.description,quantity:1})}catch{i.inventory.push({name:l.pillName,kind:"pill",pillFile:String(l.pillFile||""),imageSrc:l.imageSrc,description:l.description,quantity:1})}O(`Purchased ${l.pillName} for ${c} ${Qu(a)}.`),N(),U()};function jv(n){const e=Number(n);if(!Number.isFinite(e)||e<=0)return!1;if(e>=1)return!0;const t=i.isBusinessOriented?.8:1;return Math.random()<e*t}function Yv(){let n=document.getElementById("action-tooltip");return n||(n=document.createElement("div"),n.id="action-tooltip",n.className="action-tooltip",n.style.display="none",document.body.appendChild(n),n)}function ed(n,e,t){const s=Math.max(0,window.innerWidth||0),r=Math.max(0,window.innerHeight||0);n.style.left="0px",n.style.top="0px",n.style.maxWidth="280px";const l=n.getBoundingClientRect(),a=l.width||0,c=l.height||0,u=Math.max(12,Math.min(s-a-12,e+14)),d=Math.max(12,Math.min(r-c-12,t+14));n.style.left=`${u}px`,n.style.top=`${d}px`}window.showActionTooltip=(n,e)=>{const t=String(e||"").trim();if(!t)return;const o=Yv();o.textContent=t,o.style.display="block";try{const s=n||window.event;s&&Number.isFinite(s.clientX)&&Number.isFinite(s.clientY)&&ed(o,s.clientX,s.clientY)}catch{}};window.moveActionTooltip=n=>{const e=document.getElementById("action-tooltip");if(!(!e||e.style.display==="none"))try{const t=n||window.event;t&&Number.isFinite(t.clientX)&&Number.isFinite(t.clientY)&&ed(e,t.clientX,t.clientY)}catch{}};window.hideActionTooltip=()=>{const n=document.getElementById("action-tooltip");n&&(n.style.display="none")};function Qc(n){const e=Pv(n&&typeof n.description=="string"?n.description:""),o=(String((n==null?void 0:n.name)||"").trim()||"Action").replaceAll(".","").trim()||"Action",s=typeof(n==null?void 0:n.costText)=="string"?n.costText.trim():"",r=[];try{const f=(typeof(n==null?void 0:n.onStart)=="function"?String(n.onStart):"").match(/state\.stamina\s*-=?=\s*(\d+)/);if(f){const p=Number(f[1]);Number.isFinite(p)&&p>0&&r.push(`${ge(p)} stamina`)}}catch{}const l=[["costCopper","copper"],["costSilver","silver"],["costGold","gold"],["costSpiritStonesLow","Low Spirit Stones"],["costSpiritStonesMid","Mid Spirit Stones"],["costSpiritStonesHigh","High Spirit Stones"]];for(const[d,f]of l){const p=Number(n==null?void 0:n[d]);Number.isFinite(p)&&p>0&&r.push(`${ge(p)} ${f}`)}const a=r.length?r.join(", "):"None",c=s||a,u=!/(^|\n)Cost\s*:/i.test(e);return e?u?`${e}
Cost: ${c}`:e:`${o}
Cost: ${c}`}function Jc(n){return String(n||"").replaceAll(".","").trim()}function Xv(){Array.isArray(i.repeatableActions)||(i.repeatableActions=[]),Array.isArray(i.specialActions)||(i.specialActions=[]);const n=(e,t)=>{if(!t||typeof t!="object"||typeof t.callback=="function")return t;const o=String(t.name||""),s={...t};return e==="repeatable"?(o==="Rest"?s.callback=()=>window.rest():o==="Farm Crops"?s.callback=()=>window.farmCrops():o==="Sell Crops"?s.callback=()=>window.sellCrops():o==="Chop Wood"?s.callback=()=>window.chopWood():o==="Sell Wood"?s.callback=()=>window.sellWood():o==="Gather Materials for Village"?s.callback=()=>window.gatherMaterialsForVillage():o==="Grab Groceries"?s.callback=()=>window.hdGrabGroceries():o==="Searching and Conquering"?s.callback=()=>window.searchingAndConquering():o==="Slaughter Sheep"?s.callback=()=>window.slaughterSheep():o==="Slaughter Random Civilians"&&(s.callback=()=>window.slaughterRandomCivilians()),s):(o.includes("Buy Farming Tools")||o.includes("Buy Better Farming Tools")?s.callback=()=>window.buyTools():o.includes("Meet the")?s.callback=()=>window.meetFakeImmortal():o.includes("Buy Axe")?s.callback=()=>window.buyAxe():o==="Buy Normal Axe"?s.callback=()=>window.buyNormalAxe():o.includes("Buy Legendary Axe")?s.callback=()=>window.buyLegendaryTools():o==="Bargain"?s.callback=()=>window.startBargain():o.includes("Bargain with Merchant")?s.callback=()=>window.acceptBargain():o==="Ignore Merchant"?s.callback=()=>window.ignoreBargain():o==="Help Neighboring Village"?s.callback=()=>window.helpNeighboringVillage():o==="Steady Coin"?s.callback=()=>window.chooseSteadyCoin():o==="Follow the Mysterious Cultivator"?s.callback=()=>window.followMysteriousCultivator():o==="Walk with the Mysterious Cultivator to the Building."?s.callback=()=>window.cloudStoryWalkToBuilding():o==="Sect Leader Offers Items and Recruitment."?s.callback=()=>window.cloudStoryLeaderOffers():o==="Arrival Among Clouds."?s.callback=()=>window.cloudStoryArrivalAmongClouds():o==="Confronted by an Outer Disciple."?s.callback=()=>window.cloudStoryConfrontedByOuterDisciple():o==="Battle starts."?s.callback=()=>window.cloudStoryBattleStarts():o==="Exploring the Sect Library."?s.callback=()=>window.cloudStoryExploreLibrary():o==="Find heavenly demon manual."?s.callback=()=>window.cloudStoryFindHeavenlyDemonManual():o==="Find nothing."?s.callback=()=>window.cloudStoryFindNothingInLibrary():o==="Take the Demonic Manual."?s.callback=()=>window.cloudStoryTakeDemonicManual():o==="Venture Out to the Neighboring Sects"?s.callback=()=>window.cloudStoryVentureOutToNeighboringSects():o==="Cause Commotion"?s.callback=()=>window.cloudStoryCauseCommotion():o==="Attacked"?s.callback=()=>window.cloudStoryAttacked():o==="Run to Sect Leader"?s.callback=()=>window.cloudStoryRunToSectLeader():o==="Conquering Sect"?s.callback=()=>window.cloudStoryConqueringSect():o==="Major Accident"?s.callback=()=>window.cloudStoryMajorAccident():o==="Face the United Sects"?s.callback=()=>window.cloudStoryFaceUnitedSects():o==="Sect Armies Clash"?s.callback=()=>window.cloudStorySectArmiesClash():o==="Champions Duel"?s.callback=()=>window.cloudStoryChampionsDuel():o==="Final Confrontation"?s.callback=()=>window.cloudStoryFinalConfrontation():o==="Larger Bag Space"?s.callback=()=>window.claimLargerBagSpace():o==="Expansion Opportunity."?s.callback=()=>window.businessExpansionOpportunity():o==="Hiring Employees."?s.callback=()=>window.businessHiringEmployees():o==="Stability Isn’t Enough"?s.callback=()=>window.businessStabilityIsntEnough():o==="No More Games"?s.callback=()=>window.businessNoMoreGames():o==="I Rather Walk a Different Path."?s.callback=()=>window.hdRatherWalkDifferentPath():o==="Explore a Mysterious Cave."?s.callback=()=>window.hdExploreMysteriousCave():o==="The Demonic Manual has followed you."?s.callback=()=>window.hdCaveDemonicManualFollowed():o==="Ignore the calling and continue journey."?s.callback=()=>window.hdCaveIgnoreCalling():o==="Settling down and starting a family."?s.callback=()=>window.hdStartFamily():o==="Gather Groceries."?s.callback=()=>window.hdGatherGroceries():o==="Return Home."?s.callback=()=>window.hdReturnHome():o==="Destroy the Sect from Within."?s.callback=()=>window.dmDestroySectFromWithin():o==="Decide Fate of the Sect"?s.callback=()=>window.dmDecideFateOfSect():o==="Slaughter Sect."?s.callback=()=>window.dmSlaughterSect():o==="Stay as a demon."?s.callback=()=>window.dmStayAsDemon():o==="Find the demon who killed your family."?s.callback=()=>window.dmFindFamilyKiller():o==="Capture the demon."?s.callback=()=>window.dmCaptureDemon():o==="End the life of the demon."?s.callback=()=>window.dmEndLifeOfDemon():o==="To end the demons is to end myself."?s.callback=()=>window.dmEndDemonsEndMyself():o==="Rend the Multiverse."?s.callback=()=>window.dmRendMultiverse():o==="Slaughter the family in the cabin."?s.callback=()=>window.dmCabinSlaughterFamily():o==="The family man returns."?s.callback=()=>window.dmCabinFamilyManReturns():o==="Recruit the family man."?s.callback=()=>window.dmCabinRecruitFamilyMan():o==="Successful recruitment."?s.callback=()=>window.dmCabinSuccessfulRecruitment():o==="Stay focused on your journey."?s.callback=()=>window.dmCabinStayFocused():o==="Doze off."?s.callback=()=>window.dmCabinDozeOff():o==="Wake up with a sack covering your face."?s.callback=()=>window.dmCabinWakeUpSack():o==="Realization."?s.callback=()=>window.dmCabinRealization():o==="The end."?s.callback=()=>window.dmCabinTheEnd():o==="What's the point."?s.callback=()=>window.demonCinematicWhatsPoint():o==="Just lay down and rot"?s.callback=()=>window.demonCinematicLayDownAndRot():o==="Follow the Unseen Watcher"?s.callback=()=>window.businessFollowUnseenWatcher():o==="Offer of a lifetime"?s.callback=()=>window.businessOfferOfLifetime():o==="Accept"?s.callback=()=>window.businessAcceptHeavenlyDemonOffer():o==="Deny"?s.callback=()=>window.businessDenyHeavenlyDemonOffer():o==="Merge With the Private Military"?s.callback=()=>window.businessMergeWithPrivateMilitary():o==="Bomb Testing"?s.callback=()=>window.businessBombTesting():o==="Anti-Matter Creation"?s.callback=()=>window.businessAntiMatterCreation():o==="Warping"?s.callback=()=>window.businessWarping():o==="Storm the Heavens"?s.callback=()=>window.businessStormTheHeavens():o==="Clash with the Immortal God"?s.callback=()=>window.heavensClashImmortalGod():o==="Fall of Heaven"?s.callback=()=>window.heavensFallOfHeaven():o==="Final confrontation: Demon King"?s.callback=()=>window.heavensFinalConfrontationDemonKing():o==="Discover Hidden Orthodox Sect"?s.callback=()=>window.orthodoxDiscoverHiddenSect():o==="Saved by the mysterious sect."?s.callback=()=>window.orthodoxSavedByMysteriousSect():o==="In exchange for utmost loyalty you will learn the way of the orthodox."?s.callback=()=>window.orthodoxPledgeUtmostLoyalty():o==="Orthodox War Council"?s.callback=()=>window.orthodoxWarCouncil():o==="March to the Front"?s.callback=()=>window.orthodoxWarMarchToFront():o==="Break the Demonic Lines"?s.callback=()=>window.orthodoxWarBreakTheDemonicLines():o==="Confront the Demonic Monarch"?s.callback=()=>window.orthodoxWarConfrontTheMonarch():o==="Shatter the Mandate of Hell"?s.callback=()=>window.orthodoxWarShatterTheMandate():o==="The world ends."?s.callback=()=>window.orthodoxTheWorldEnds():o==="Rebirth."&&(s.callback=()=>window.beginRebirth()),s)};i.repeatableActions=i.repeatableActions.map(e=>n("repeatable",e)),i.specialActions=i.specialActions.map(e=>n("special",e))}function sn(){Array.isArray(i.cloudConqueredSects)||(i.cloudConqueredSects=[]),i.cloudConqueredSects=i.cloudConqueredSects.map(n=>String(n||"")).filter(Boolean),typeof i.cloudConqueredSectsUnlocked!="boolean"&&(i.cloudConqueredSectsUnlocked=!1),(!Number.isFinite(i.searchingAndConqueringCooldown)||i.searchingAndConqueringCooldown<0)&&(i.searchingAndConqueringCooldown=0)}function td(){sn();const n=new Set(["Cloud","Orthodox",String(i.currentSect||"")].filter(Boolean));for(const e of i.cloudConqueredSects)n.add(String(e||""));return Object.keys(An).filter(e=>!n.has(e))}function ks(n){sn();const e=String(n||"");return!e||i.cloudConqueredSects.includes(e)?!1:(i.cloudConqueredSects.push(e),!0)}function nd(n){const e=td();if(!e.length)return O("You search for a vulnerable sect... but there are none left to take."),null;const t=e[Math.floor(Math.random()*e.length)],o=An[t],s=(o==null?void 0:o.name)||t;ks(t);const r=String(n||"").trim();return O(`${r?r+" ":""}Conquered: ${s}.`),t}function ri(){(!Number.isFinite(i.cloudCoalitionWarStage)||i.cloudCoalitionWarStage<0)&&(i.cloudCoalitionWarStage=0),typeof i.cloudFinalConfrontationCinematicDone!="boolean"&&(i.cloudFinalConfrontationCinematicDone=!1);const n=i.cloudCoalitionWave;if(!n||typeof n!="object"){i.cloudCoalitionWave=null;return}const e=String(n.kind||""),t=e==="armies"||e==="champions",o=Math.floor(Number(n.index)),s=Number.isFinite(o)&&o>=0&&o<=2;if(!t||!s){i.cloudCoalitionWave=null;return}i.cloudCoalitionWave={kind:e,index:o,awaitingStaminaFull:!!n.awaitingStaminaFull,pendingStart:!!n.pendingStart}}function Kv(){return Object.keys(An).filter(n=>n!=="Cloud"&&n!=="Orthodox")}function Jo(){sn();const n=new Set(i.cloudConqueredSects),e=Kv();if(e.length===0)return!1;for(const t of e)if(!n.has(t))return!1;return!0}function _a(){ri();const n=!!(i.cloudConqueredSectsUnlocked&&Jo()),e=["Face the United Sects","Sect Armies Clash","Champions Duel","Final Confrontation"];if(!n){Ue(e),i.cloudCoalitionWarStage!==0&&(i.cloudCoalitionWarStage=0),i.cloudCoalitionWave&&(i.cloudCoalitionWave=null);return}if(i.cloudCoalitionWave){Ue(e);return}const t=M(i.cloudCoalitionWarStage);if(Ue(e),t<=0){ke({name:"Face the United Sects",icon:"⚔️",description:"The heavenly demon, demonic monarch, and orthodox sects put aside their differences and joined together under a common enemy. You, the player, the conquerer. This will be one of the largest wars in history.",disabled:!1,callback:()=>window.cloudStoryFaceUnitedSects()});return}if(t===1){ke({name:"Sect Armies Clash",icon:"🛡️",description:"Player’s conquered sects fight coalition armies.",disabled:!1,callback:()=>window.cloudStorySectArmiesClash()});return}if(t===3){ke({name:"Champions Duel",icon:"🥊",description:"You get to personally fight some mysteriously ranked personel of the coalition.",disabled:!1,callback:()=>window.cloudStoryChampionsDuel()});return}t===4&&ke({name:"Final Confrontation",icon:"🔥",description:"The coalition prepared for you. A fusion of a sect elder from each of the 3 sects. Very close to a god.",disabled:!1,callback:()=>window.cloudStoryFinalConfrontation()})}function oa(n,e="weight"){const t=n.reduce((s,r)=>s+r[e],0);let o=Math.random()*t;for(const s of n)if(o-=s[e],o<=0)return s;return n[n.length-1]}function ti(){const n=Ka();if(!n)return[];const e=String(i.manualType||""),t=M(i.manualTier),o=n===e&&t>0?t:1;return(Ma[n]||[]).filter(r=>r.tier<=o)}function Ka(){var t;const n=String(((t=i.equipped)==null?void 0:t.manual)||"");if(!n)return null;if(n==="Beginner Cultivation Manual")return"Cloud";if(n==="Hidden Heavenly Demon Manual"||n==="Demonic Manual"||n.startsWith("Heavenly Demon Manual")||n.startsWith("Demon Monarch Manual"))return"Demon";if(n==="Orthodox Manual")return"Orthodox";const e=n.match(/^(.*) Manual \(Tier (\d+)\)$/);if(e){const o=String(e[1]||"").trim();return o==="Heavenly Demon"||o==="Demon Monarch"?"Demon":o||null}return null}function Zo(n){const e=i.affinities.find(t=>t.type===n);return e?e.score:0}function id(n){return Zo(n)/50}function fr(){return i.cultivationMajorIndex>=1}function es(n){const e=Math.floor(Number(n)||0);return e<5?0:e<=19?1:e<=29?2:e<=39?3:e<=45?4:5}function Qv(n){const e=Math.floor(Number(n)||0);return e<=0?{qi:1,str:1,hp:1}:e===1?{qi:1.2,str:1.2,hp:1.2}:e===2?{qi:1.4,str:1.4,hp:1.4}:e===3?{qi:1.6,str:1.6,hp:1.6}:e===4?{qi:1.8,str:1.8,hp:1.8}:{qi:2,str:2,hp:2}}function od(){const n=i.currentSect;if(!n)return null;if(n==="Heavenly Demon"||n==="Demon Monarch"){const o=Math.floor(Number(i.sectTier)||0),s=o>=1&&o<=5?o:5;return{id:n,name:n+" Sect",icon:"",tier:s}}const e=An[n];if(e){const t=Zo(n),o=es(t);return{id:n,name:e.name,icon:"",tier:o}}return{id:n,name:String(n),icon:"",tier:Number.isFinite(i.sectTier)?i.sectTier:0}}function Mo(n){i.sectTier=Math.floor(Number(n)||0),i.sectMultipliers=Qv(i.sectTier),oi()}function Qa(){i.hasJoinedSect=!1,i.currentSect=null,i.sectTier=0,i.sectMultipliers={qi:1,str:1,hp:1},i.sectJoinPickerOpen=!1,i.sectRankPyramidOpen=!1,i.sectRankLayer="outer",i.sectRankNumber=6,i.sectIncomeSeconds=0,i.combatContext&&typeof i.combatContext=="object"&&i.combatContext.type==="sectRankDuel"&&(i.combatContext=null),i.manualType=null,i.manualTier=0,oi()}window.openSectJoinPicker=()=>{fr()&&(i.hasJoinedSect||(i.sectJoinPickerOpen=!0,N(),U()))};window.joinSectFromPanel=n=>{if(!fr()||i.hasJoinedSect)return;const e=String(n||""),t=An[e];if(!t)return;const o=Zo(e);if(o<5)return;const s=es(o);i.hasJoinedSect=!0,i.currentSect=e,i.manualType=e,i.manualTier=1,i.sectRankLayer="outer",i.sectRankNumber=6,i.sectRankPyramidOpen=!1,Mo(s),O(`You join the ${t.name}! (Tier ${s})`),O(`Sect Manual Bonuses: Qi ${it(i.sectMultipliers.qi)}, STR ${it(i.sectMultipliers.str)}, HP ${it(i.sectMultipliers.hp)}`),ai(),i.sectJoinPickerOpen=!1,N(),U()};window.leaveSectFromPanel=()=>{if(!i.hasJoinedSect||!fr()||i.joinedOrthodoxSect)return;const n=od();n&&O(`You leave the ${n.name}.`),Qa(),N(),U()};function Jv(){var C;let n=document.getElementById("sect-panel");if(!n){n=document.createElement("div"),n.id="sect-panel",n.className="sect-panel draggable-panel",bn(n,"sect"),Qt().appendChild(n),yn(n,"sect");const m=(C=i.panelPositions)==null?void 0:C.sect;m&&(m.x!==0||m.y!==0)&&(n.style.transform=`translate(${m.x}px, ${m.y}px)`)}const e=fr(),t=!!(i.hasJoinedSect&&i.currentSect),o=t?od():null,s=!!i.demonMonarchOnly,r=!!(!t&&e&&i.sectJoinPickerOpen),l=(Array.isArray(i.affinities)?i.affinities:[]).filter(m=>m&&typeof m.type=="string"&&Number.isFinite(m.score)).filter(m=>m.score>=5).map(m=>{const S=An[m.type];if(!S)return null;const L=es(m.score);return{affinity:m.type,alignment:m.score,tier:L,name:S.name}}).filter(Boolean).sort((m,S)=>S.tier-m.tier||S.alignment-m.alignment||String(m.name).localeCompare(String(S.name))),a=t||!e,c=M(i.manualTier),u=c+1,d=u<=20?qd(u):null,f=ze(i.contributionPoints),p=t&&Number.isFinite(d)&&d>0&&c<20&&f>=d,v=t?pl(i.sectRankLayer,i.sectRankNumber):"",b=!!(t&&i.sectRankPyramidOpen),y=t?Od(i.sectRankLayer,i.sectRankNumber):{low:0,mid:0,high:0},g=[];(y.low||0)>0&&g.push(`+${ge(y.low)} Low Spirit Stones/min`),(y.mid||0)>0&&g.push(`+${ge(y.mid)} Mid Spirit Stones/min`),(y.high||0)>0&&g.push(`+${ge(y.high)} High Spirit Stones/min`);const h=g.length?g.join(", "):"None";n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'sect-panel')">
      <h3>SECT</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      ${t?`
        ${b?`
          <div class="sect-ranks-header">
            <button class="sect-ranks-back" onclick="window.sectCloseRanks()">BACK</button>
            <div class="sect-ranks-title">SECT RANKS</div>
            <div style="width:72px;"></div>
          </div>
          <div class="sect-ranks-bonus">Current Bonus: ${Te(h)}</div>
          <div class="sect-ranks-current">Current: ${Te(v)}</div>
          <div class="sect-ranks-pyramid">${xy()}</div>
        `:`
          <div class="sect-btn-grid top">
            <button class="sect-btn" style="grid-column: 1 / -1;" disabled>Sect Shop</button>
          </div>

          <div class="sect-btn-grid mid">
            <button class="sect-btn" onclick="window.upgradeSectManual()" ${p?"":"disabled"}>Upgrade Manual</button>
            <button class="sect-btn" onclick="window.sectGetQuest()">Get Quest</button>
            <button class="sect-btn" onclick="window.sectShowRank()">Sect Ranks</button>
          </div>

          <div class="sect-info">
            <div>Current Sect: ${o?Te(o.name):"Unknown"}</div>
            ${String(i.customSectName||"").trim()?`<div>Your Sect Name: ${Te(String(i.customSectName).trim())}</div>`:""}
            <div>Sect Tier: ${o?o.tier:0}</div>
            <div>Sect Rank: ${Te(v)}</div>
            <div>Sect Manual: ${Te(String(i.manualType||"None"))} Manual</div>
            <div>Current Manual Tier: ${ge(c)}</div>
            <div>Next Manual Tier Cost: ${c>=20?"MAX":Ai(d||0)}</div>
            <div>Contribution Points: ${Ai(i.contributionPoints||0)}</div>
          </div>

          <button class="sect-leave-btn" onclick="window.leaveSectFromPanel()" ${e&&!i.joinedOrthodoxSect?"":"disabled"}>
            LEAVE SECT
          </button>
        `}
      `:`
        <button class="sect-gate-btn" onclick="window.openSectJoinPicker()" ${a?"disabled":""}>
          <div class="sect-gate-title">Join a Sect</div>
          ${e?s?'<div class="sect-gate-sub">Only the Demon Monarch Sect will accept you</div>':'<div class="sect-gate-sub">Choose a sect aligned to your affinities</div>':'<div class="sect-gate-sub">Requires higher realm</div>'}
        </button>

        ${r?`
          <div class="sect-picker">
            ${s?`
              <button class="sect-choice-btn" onclick="window.joinDemonMonarchSect()">
                <div class="sect-choice-left">
                  <span class="sect-choice-icon"><img class="inline-asset-icon" src="assets/demon.png" alt="" aria-hidden="true"></span>
                  <span class="sect-choice-name">Demon Monarch Sect</span>
                </div>
                <div class="sect-choice-right">
                  <span class="sect-choice-tier">Tier 5</span>
                </div>
              </button>
            `:l.length===0?`
              <div class="sect-empty">No eligible sects. (Need affinity alignment ≥ 5)</div>
            `:`
              ${l.map(m=>`
                ${(()=>{const S=ja(m.affinity)||"",L=S?`<img class="inline-asset-icon" src="${Te(S)}" alt="" aria-hidden="true">`:It("spark");return`
                <button class="sect-choice-btn" onclick="window.joinSectFromPanel('${Te(m.affinity)}')">
                  <div class="sect-choice-left">
                    <span class="sect-choice-icon">${L}</span>
                    <span class="sect-choice-name">${Te(m.name)}</span>
                  </div>
                  <div class="sect-choice-right">
                    <span class="sect-choice-tier">Tier ${m.tier}</span>
                    <span class="sect-choice-align">Align ${ge(m.alignment)}/50</span>
                  </div>
                </button>
                  `.trim()})()}
              `).join("")}
            `}
          </div>
        `:""}
      `}
    </div>
  `}function ai(){ti().forEach(e=>{const t=`manual_${e.name.replace(/\s+/g,"_")}`;t in i.playerCooldowns||(i.playerCooldowns[t]=0)})}const sd="cultivationSagaMeta",Ja="cultivationSagaSupabaseUrl",Za="cultivationSagaSupabaseAnonKey";function Zv(){try{const n=String(localStorage.getItem(Ja)||"").trim(),e=String(localStorage.getItem(Za)||"").trim();return{url:n,anonKey:e}}catch{return{url:"",anonKey:""}}}function eb(){try{const n=window;if(!n||typeof n!="object")return{url:"",anonKey:""};const e=String(n.__CS_SUPABASE_URL||n.__CULTIVATION_SAGA_SUPABASE_URL||"").trim(),t=String(n.__CS_SUPABASE_ANON_KEY||n.__CULTIVATION_SAGA_SUPABASE_ANON_KEY||"").trim();return{url:e,anonKey:t}}catch{return{url:"",anonKey:""}}}function rd(n){let e=String(n||"").trim();return!e||((e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'"))&&(e=e.slice(1,-1).trim()),!e)||(/^https?:\/\//i.test(e)||/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(e)&&(e=`https://${e}`),!/^https?:\/\//i.test(e))?"":e}function ts(){let n="",e="";try{n="https://hzbhmgqwrodygufajpoe.supabase.co".trim(),e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6YmhtZ3F3cm9keWd1ZmFqcG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0Nzc3NjEsImV4cCI6MjA4MzA1Mzc2MX0.xCwl9Y-_SHjW5p6xxBOnc-KK0b6Z7f2YvcUBSRgsF2Y".trim()}catch{n="",e=""}const t=eb(),o=Zv(),s=rd(n||t.url||o.url),r=String(e||t.anonKey||o.anonKey||"").trim(),l=n&&e?"env":t.url&&t.anonKey?"window":o.url&&o.anonKey?"localStorage":"";return{url:s,anonKey:r,source:l}}function _o(){const n=ts();return!!(n.url&&n.anonKey)}window.setLeaderboardConfig=(n,e)=>{const t=rd(n);let o=String(e||"").trim();if((o.startsWith('"')&&o.endsWith('"')||o.startsWith("'")&&o.endsWith("'"))&&(o=o.slice(1,-1).trim()),!t||!o)return!1;try{localStorage.setItem(Ja,t),localStorage.setItem(Za,o)}catch{return!1}try{ii("set_config")}catch{}try{window.refreshLeaderboards()}catch{}return!0};function sa(){try{const n=Bn(),e=String(n.major||""),t=String(n.sub||"");return e?t?`${e}-${t}`:e:""}catch{return""}}function ad(n,e,t){try{const o=t?hr:dr,s=M(n),r=o[s],l=r&&Array.isArray(r.subRealms)?r.subRealms:[],a=M(e),c=l.length?Math.max(0,Math.min(l.length-1,a)):0,u=l[c],d=String((r==null?void 0:r.major)||""),f=String((u==null?void 0:u.sub)||"");return d?f?`${d}-${f}`:d:""}catch{return""}}function po(){const n=M(i.cultivationMajorIndex),e=M(i.cultivationSubIndex),t=!!i.isDemonPath;(!i.bestMajorRealm||typeof i.bestMajorRealm!="object")&&(i.bestMajorRealm={index:0,subIndex:0,isDemon:!1,label:""});const o=M(i.bestMajorRealm.index),s=M(i.bestMajorRealm.subIndex);try{const l=ad(o,s,!!i.bestMajorRealm.isDemon);if(l&&String(i.bestMajorRealm.label||"")!==l){i.bestMajorRealm.label=l;try{ii("best_major_label_migrate")}catch{}}}catch{}if(n<o||n===o&&e<s)return;const r=()=>i.bestMajorRealm.label===""||i.bestMajorRealm.label!==sa();if(n===o&&e===s&&i.bestMajorRealm.isDemon&&!t){i.bestMajorRealm.isDemon=t,i.bestMajorRealm.label=sa();return}if(n>o||e>s||r()){i.bestMajorRealm.index=n,i.bestMajorRealm.subIndex=e,i.bestMajorRealm.isDemon=t,i.bestMajorRealm.label=sa();try{ii("best_major_update")}catch{}}}function ns(){const n=M(i.rebirthPoints);(!Number.isFinite(i.bestRebirthPoints)||i.bestRebirthPoints<0)&&(i.bestRebirthPoints=0),i.bestRebirthPoints=Math.max(M(i.bestRebirthPoints),n)}function tb(){const n=M(i.spiritStonesLow),e=M(i.spiritStonesMid),t=M(i.spiritStonesHigh),o=Math.floor(n/500)+Math.floor(e/500)+Math.floor(t/500),s=el();return Math.floor(o*s)}function Ks(){const n=M(tb()),e=Number.isFinite(i.rebirthStoneBonusLast)?M(i.rebirthStoneBonusLast):0,t=n-e;if(t!==0){(!Number.isFinite(i.rebirthPoints)||i.rebirthPoints<0)&&(i.rebirthPoints=0),i.rebirthPoints=Math.max(0,Math.floor(i.rebirthPoints+t)),i.rebirthStoneBonusLast=n;try{ns()}catch{}try{ni()}catch{}}}function ht(n){const e=n&&typeof n=="object"?n:{},t=M(e.minRootCount),o=M(e.maxRootCount),s=ze(e.bloodlineBias),r=M(e.resetUnlockProgress),l=M(e.qiMultiplierLevel),a=M(e.herbGatherSpeedLevel),c=M(e.herbMultiGatherLevel),u=M(e.strengthMultiplierLevel),d=M(e.healthMultiplierLevel),f=M(e.specialCooldownLevel),p=M(e.repeatableSpeedLevel),v=M(e.autoGatherLevel),b=M(e.autoCraftLevel),y=M(e.pillCraftSpeedLevel),g=M(e.minRootBonusLevel),h=M(e.rootLuckLevel),C=M(e.maxRootBonusLevel),m=M(e.extraRerollsLevel),S=M(e.bloodlineLuckLevel),L=M(e.multiAffinityLuckLevel),T=M(e.affinityAlignmentLuckLevel),R=M(e.storyLuckLuckLevel),V=M(e.spiritStoneRpMultLevel),w=M(e.questDropChanceLevel);return{minRootCount:Math.max(1,t||1),maxRootCount:Math.max(1,o||5),bloodlineBias:Number.isFinite(s)?s:0,canRerollFate:!!e.canRerollFate,resetUnlockProgress:Math.max(0,Math.min(100,r)),qiMultiplierLevel:Math.max(0,l),herbGatherSpeedLevel:Math.max(0,a),herbMultiGatherLevel:Math.max(0,c),strengthMultiplierLevel:Math.max(0,u),healthMultiplierLevel:Math.max(0,d),specialCooldownLevel:Math.max(0,f),repeatableSpeedLevel:Math.max(0,p),autoGatherLevel:Math.max(0,v),autoCraftLevel:Math.max(0,b),pillCraftSpeedLevel:Math.max(0,y),minRootBonusLevel:Math.max(0,g),rootLuckLevel:Math.max(0,h),maxRootBonusLevel:Math.max(0,C),extraRerollsLevel:Math.max(0,m),bloodlineLuckLevel:Math.max(0,S),multiAffinityLuckLevel:Math.max(0,L),affinityAlignmentLuckLevel:Math.max(0,T),storyLuckLuckLevel:Math.max(0,R),spiritStoneRpMultLevel:Math.max(0,V),questDropChanceLevel:Math.max(0,w)}}function qe(n,e=1.5){const t=M(n),o=Number(e),s=Number.isFinite(o)&&o>1?o:1.5;return Math.max(1,Math.ceil(1*Math.pow(s,t)))}function el(){const n=ht(i.rebirthUpgrades);return i.rebirthUpgrades=n,1+2*M(n.spiritStoneRpMultLevel)}function nb(){const n=ht(i.rebirthUpgrades);return i.rebirthUpgrades=n,1+.1*M(n.strengthMultiplierLevel)}function ib(){const n=ht(i.rebirthUpgrades);return i.rebirthUpgrades=n,1+.1*M(n.healthMultiplierLevel)}function ld(){const n=ht(i.rebirthUpgrades);return i.rebirthUpgrades=n,1+.05*M(n.herbGatherSpeedLevel)}function cd(){const n=ht(i.rebirthUpgrades);i.rebirthUpgrades=n;const e=M(n.herbMultiGatherLevel);return 1+Math.floor(e/10)}function ud(){const n=ht(i.rebirthUpgrades);return i.rebirthUpgrades=n,M(n.autoGatherLevel)>=20}function dd(){const n=ht(i.rebirthUpgrades);return i.rebirthUpgrades=n,M(n.autoCraftLevel)>=20}function ob(){const n=ht(i.rebirthUpgrades);return i.rebirthUpgrades=n,M(n.pillCraftSpeedLevel)*250}function sb(){const n=ht(i.rebirthUpgrades);return i.rebirthUpgrades=n,M(n.repeatableSpeedLevel)*250}function rb(){const n=ht(i.rebirthUpgrades);return i.rebirthUpgrades=n,M(n.specialCooldownLevel)*.5}function Qs(){const n=ht(i.rebirthUpgrades);return i.rebirthUpgrades=n,M(n.qiMultiplierLevel)}function tl(){return 1+.2*Qs()}function ab(){const n=Qs(),t=1*Math.pow(1.5,n);return Math.max(1,Math.ceil(t))}function hd(){(!i.rebirthStoryAwards||typeof i.rebirthStoryAwards!="object")&&(i.rebirthStoryAwards={})}function gt(n,e,t){hd();const o=String(n||"");o&&(i.rebirthStoryAwards[o]||(i.rebirthStoryAwards[o]=!0,lb(e,t)))}function fd(){var l,a;hd();const n=M(i.cloudCultivatorStoryStage);n>=1&&gt("cloud_stage_1",1,"Cloud Sect"),n>=3&&gt("cloud_stage_3",2,"Cloud Sect"),n>=5&&gt("cloud_stage_5",3,"Cloud Sect"),i.cloudConqueredSectsUnlocked&&gt("cloud_conquest_unlocked",5,"Cloud Conquest");const e=M(i.cloudCoalitionWarStage);e>=3&&gt("cloud_coalition_mid",8,"Cloud Coalition"),(i.cloudFinalConfrontationCinematicDone||e>=5)&&gt("cloud_coalition_final",20,"Cloud Coalition Finale"),i.hasStartedBusiness&&gt("biz_started",2,"Business"),i.businessUpgradedExpansion&&gt("biz_expansion",2,"Business"),i.businessUpgradedEmployees&&gt("biz_employees",2,"Business"),i.businessStormHeavensStarted&&gt("biz_storm_started",10,"Storm the Heavens");const t=i.heavensEnding;t==="demonKingDeath"&&gt("heavens_ending_demonKingDeath",55,"Heavens: Demon King"),t==="tartarusEaten"&&gt("heavens_ending_tartarus",45,"Heavens: Tartarus");const o=M(i.orthodoxWarStage);o>=1&&gt("orthodox_war_1",2,"Orthodox War"),o>=3&&gt("orthodox_war_3",4,"Orthodox War"),o>=5&&gt("orthodox_war_5",6,"Orthodox War"),i.orthodoxTrueEndingDone&&gt("orthodox_true_ending",50,"True Ending"),i.demonCosmicFinaleDone&&gt("demon_cosmic_finale",80,"Demonic Finale"),String(i.demonCabinRevengeStage||"")==="end"&&gt("demon_cabin_end",20,"Cabin Betrayal");const r=String(((l=i.dmFate)==null?void 0:l.stage)||"");r==="dead"&&gt("dm_good_self_extinction",35,"Self-Extinction"),r==="done"&&gt("dm_neutral_blood_price",25,"Blood Price"),(a=i.hdDetour)!=null&&a.demonCinematicResolved&&gt("hd_demon_cinematic",10,"Heavenly Detour")}function ni(){var n,e,t,o;try{const s={playerName:i.playerName&&String(i.playerName).trim()?String(i.playerName).trim():"",playerGender:i.playerGender==="male"||i.playerGender==="female"?i.playerGender:null,rebirthPoints:M(i.rebirthPoints),bestRebirthPoints:M(i.bestRebirthPoints),rebirthStoneBonusLast:M(i.rebirthStoneBonusLast),rebirthUpgrades:ht(i.rebirthUpgrades),bestMajorRealm:{index:M((n=i.bestMajorRealm)==null?void 0:n.index),subIndex:M((e=i.bestMajorRealm)==null?void 0:e.subIndex),isDemon:!!((t=i.bestMajorRealm)!=null&&t.isDemon),label:String(((o=i.bestMajorRealm)==null?void 0:o.label)||"")}};localStorage.setItem(sd,JSON.stringify(s))}catch{}}function Sa(){try{const n=localStorage.getItem(sd);if(!n)return;const e=JSON.parse(n),t=String((e==null?void 0:e.playerName)||"").trim(),o=e==null?void 0:e.playerGender;t&&(i.playerName=t),(o==="male"||o==="female")&&(i.playerGender=o);const s=M(e==null?void 0:e.rebirthPoints),r=M(e==null?void 0:e.bestRebirthPoints),l=M(e==null?void 0:e.rebirthStoneBonusLast),a=ht(e==null?void 0:e.rebirthUpgrades),c=e==null?void 0:e.bestMajorRealm,u=M(c==null?void 0:c.index),d=M(c==null?void 0:c.subIndex),f=!!(c!=null&&c.isDemon),p=String((c==null?void 0:c.label)||"");i.rebirthPoints=s,i.rebirthStoneBonusLast=l,i.rebirthUpgrades=ht({...a,...i.rebirthUpgrades||{}}),(!i.bestMajorRealm||typeof i.bestMajorRealm!="object")&&(i.bestMajorRealm={index:0,subIndex:0,isDemon:!1,label:""}),i.bestMajorRealm.index=u,i.bestMajorRealm.subIndex=d,i.bestMajorRealm.isDemon=f,i.bestMajorRealm.label=p,i.bestRebirthPoints=Math.max(r,M(i.rebirthPoints))}catch{}}function lb(n,e){const t=M(n);if(t<=0)return;(!Number.isFinite(i.rebirthPoints)||i.rebirthPoints<0)&&(i.rebirthPoints=0),i.rebirthPoints+=t;try{ns()}catch{}const o=String(e||"").trim();O(`Rebirth Points +${ge(t)}${o?` (${o})`:""}. Total: ${ge(i.rebirthPoints)}.`);try{ni()}catch{}}window.beginRebirth=()=>{try{po()}catch{}try{ns()}catch{}try{ni()}catch{}try{localStorage.removeItem("cultivationSagaSave"),location.reload()}catch(n){console.error("Failed to rebirth:",n)}};function U(){try{try{fd()}catch{}try{Ks()}catch{}try{po()}catch{}try{ns()}catch{}const n={...i,activeSidePanels:Array.from(i.activeSidePanels),panelPositions:i.panelPositions,panelSizes:i.panelSizes};localStorage.setItem("cultivationSagaSave",JSON.stringify(n));try{ni()}catch{}}catch(n){console.error("Failed to save game:",n)}}function cb(){try{const n=localStorage.getItem("cultivationSagaSave");if(n){const e=JSON.parse(n);Object.assign(i,e);try{if(Array.isArray(i.inventory))for(const r of i.inventory)!r||typeof r!="object"||String(r.name||"")==="Medicinal Herb"&&(r.name="Ginseng",r.description||(r.description="A hardy root used in many formulas."),r.kind||(r.kind="ingredient"),r.imageSrc||(r.imageSrc="assets/grass.png"))}catch{}if(Number.isFinite(e.storyLuck)&&(i.luck=e.storyLuck),typeof i.demonMonarchOnly!="boolean"&&(i.demonMonarchOnly=!1),typeof i.isDemonPath!="boolean"&&(i.isDemonPath=!1),(!Number.isFinite(i.corruption)||i.corruption<0)&&(i.corruption=0),i.corruption=Math.min(100,Math.floor(i.corruption)),typeof i.demonCorruptionAscended!="boolean"&&(i.demonCorruptionAscended=i.corruption>=100),typeof i.demonCosmicFinaleDone!="boolean"&&(i.demonCosmicFinaleDone=!1),typeof i.dozeOffUnlocked!="boolean"&&(i.dozeOffUnlocked=!1),typeof i.demonCabinRevengeStage!="string"&&(i.demonCabinRevengeStage=""),typeof i.runEnded!="boolean"&&(i.runEnded=!1),typeof i.hardMode!="boolean"&&(i.hardMode=!1),(!Number.isFinite(i.rebirthStoneBonusLast)||i.rebirthStoneBonusLast<0)&&(i.rebirthStoneBonusLast=0),(!Number.isFinite(i.rebirthPoints)||i.rebirthPoints<0)&&(i.rebirthPoints=0),i.rebirthPoints=Math.floor(i.rebirthPoints),i.rebirthUpgrades=ht(i.rebirthUpgrades),(!i.rebirthStoryAwards||typeof i.rebirthStoryAwards!="object")&&(i.rebirthStoryAwards={}),(!Number.isFinite(i.orthodoxWarStage)||i.orthodoxWarStage<0)&&(i.orthodoxWarStage=0),i.orthodoxWarStage=Math.floor(i.orthodoxWarStage),typeof i.orthodoxTrueEndingDone!="boolean"&&(i.orthodoxTrueEndingDone=!1),(!i.buttonCooldowns||typeof i.buttonCooldowns!="object")&&(i.buttonCooldowns={}),Array.isArray(e.activeSidePanels)){const r=new Set(e.activeSidePanels);(r.has("townShop")||r.has("hourShop"))&&(r.delete("townShop"),r.delete("hourShop"),r.add("shop")),i.activeSidePanels=r}else e.activeSidePanel?i.activeSidePanels=new Set([e.activeSidePanel]):i.activeSidePanels=new Set;i.leaderboardsTab!=="major"&&i.leaderboardsTab!=="rebirth"&&(i.leaderboardsTab="major"),i.panelPositions||(i.panelPositions={stats:{x:0,y:0},inventory:{x:0,y:0},actions:{x:0,y:0},herbalism:{x:0,y:0},settings:{x:0,y:0},recipes:{x:0,y:0},profile:{x:0,y:0},sect:{x:0,y:0},quests:{x:0,y:0},moves:{x:0,y:0},shop:{x:0,y:0},leaderboards:{x:0,y:0},conqueredSects:{x:0,y:0},townShop:{x:0,y:0},hourShop:{x:0,y:0}});for(const r of["stats","inventory","actions","herbalism","settings","recipes","profile","sect","quests","moves","shop","leaderboards","conqueredSects","townShop","hourShop"]){const l=i.panelPositions[r]||{};i.panelPositions[r]={x:Number.isFinite(l.x)?l.x:0,y:Number.isFinite(l.y)?l.y:0}}const t=i.panelPositions.shop;if(!t||t.x===0&&t.y===0){const r=i.panelPositions.townShop,l=i.panelPositions.hourShop;r&&(r.x!==0||r.y!==0)?i.panelPositions.shop={x:r.x,y:r.y}:l&&(l.x!==0||l.y!==0)&&(i.panelPositions.shop={x:l.x,y:l.y})}(!i.panelSizes||typeof i.panelSizes!="object")&&(i.panelSizes={});for(const r of["stats","inventory","actions","herbalism","settings","recipes","profile","sect","quests","moves","shop","leaderboards","conqueredSects","townShop","hourShop"]){const l=i.panelSizes[r];if(!l||typeof l!="object")continue;const a=Number.isFinite(l.w)?l.w:void 0,c=Number.isFinite(l.h)?l.h:void 0;i.panelSizes[r]={...a!==void 0?{w:a}:{},...c!==void 0?{h:c}:{}}}i.panelSizes.shop||(i.panelSizes.townShop?i.panelSizes.shop={...i.panelSizes.townShop}:i.panelSizes.hourShop&&(i.panelSizes.shop={...i.panelSizes.hourShop}));try{Xa()}catch{}try{fb()}catch{}typeof i.bargainOfferRolled!="boolean"&&(i.bargainOfferRolled=!1),typeof i.bargainOfferAvailable!="boolean"&&(i.bargainOfferAvailable=!1),(!Array.isArray(i.equippedMoves)||i.equippedMoves.length!==3)&&(i.equippedMoves=["punch","superPunch","punch"]),(!i.playerCooldowns||typeof i.playerCooldowns!="object")&&(i.playerCooldowns={punch:0,superPunch:0,qiBlast:0});for(const r of Object.keys(i.playerCooldowns)){const l=Number(i.playerCooldowns[r]);if(!Number.isFinite(l)||l<=0){i.playerCooldowns[r]=0;continue}l>0&&l<=60&&(i.playerCooldowns[r]=l*1e3)}if(typeof i.sectJoinPickerOpen!="boolean"&&(i.sectJoinPickerOpen=!1),typeof i.sectRankPyramidOpen!="boolean"&&(i.sectRankPyramidOpen=!1),(!Number.isFinite(i.sectIncomeSeconds)||i.sectIncomeSeconds<0)&&(i.sectIncomeSeconds=0),Number.isFinite(i.sectTier)||(i.sectTier=0),!i.sectMultipliers||typeof i.sectMultipliers!="object")i.sectMultipliers={qi:1,str:1,hp:1};else{const r=Number(i.sectMultipliers.qi),l=Number(i.sectMultipliers.str),a=Number(i.sectMultipliers.hp);i.sectMultipliers={qi:Number.isFinite(r)&&r>0?r:1,str:Number.isFinite(l)&&l>0?l:1,hp:Number.isFinite(a)&&a>0?a:1}}if(Number.isFinite(i.contributionPoints)||(i.contributionPoints=0),Number.isFinite(e.sectReputation)&&!Number.isFinite(e.contributionPoints)&&(i.contributionPoints=e.sectReputation),!Ud(i.sectRankLayer)||!Number.isFinite(i.sectRankNumber))if(i.hasJoinedSect)i.sectRankLayer="outer",i.sectRankNumber=6;else{const r=Gd(i.contributionPoints);i.sectRankLayer=r.layer,i.sectRankNumber=r.rank}i.activeQuest&&typeof i.activeQuest!="object"&&(i.activeQuest=null),i.activeQuest&&typeof i.activeQuest.title!="string"&&(i.activeQuest=null),typeof i.questReturnPhase!="string"&&(i.questReturnPhase=null),typeof i.playerName!="string"&&(i.playerName=""),i.playerGender!=="male"&&i.playerGender!=="female"&&(i.playerGender=null),!i.characterProfile||typeof i.characterProfile!="object"?i.characterProfile={attributes:null}:Array.isArray(i.characterProfile.attributes)||(i.characterProfile.attributes=null),!i.intro||typeof i.intro!="object"?i.intro={progress:0,step:"loading",usernameDraft:"",hasAnimatedTitle:!1}:(Number.isFinite(i.intro.progress)||(i.intro.progress=0),typeof i.intro.step!="string"&&(i.intro.step="loading"),typeof i.intro.usernameDraft!="string"&&(i.intro.usernameDraft=""),typeof i.intro.hasAnimatedTitle!="boolean"&&(i.intro.hasAnimatedTitle=!1)),(!Number.isFinite(i.ageMonths)||i.ageMonths<0)&&(i.ageMonths=0),(!Number.isFinite(i.expectedLifespanMonths)||i.expectedLifespanMonths<=0)&&(i.expectedLifespanMonths=1200),i.isDemonPath&&(i.expectedLifespanMonths=Math.max(M(i.expectedLifespanMonths),1e3*12)),i.phase==="SECT"&&(i.phase="FARMING"),i.showResetModal=!1,i.devModalMode="RESET",i.devSpeed3x=!1,i.devIgnoreRequirements=!1;try{delete i.hasGoneWithCultivator,delete i.hasMetRealCultivator,delete i.hasAdvancedManual}catch{}if((!i.bestMajorRealm||typeof i.bestMajorRealm!="object")&&(i.bestMajorRealm={index:0,subIndex:0,isDemon:!1,label:""}),(!Number.isFinite(i.bestMajorRealm.index)||i.bestMajorRealm.index<0)&&(i.bestMajorRealm.index=0),(!Number.isFinite(i.bestMajorRealm.subIndex)||i.bestMajorRealm.subIndex<0)&&(i.bestMajorRealm.subIndex=0),typeof i.bestMajorRealm.label!="string"&&(i.bestMajorRealm.label=""),i.bestMajorRealm.isDemon=!!i.bestMajorRealm.isDemon,(!Number.isFinite(i.bestRebirthPoints)||i.bestRebirthPoints<0)&&(i.bestRebirthPoints=M(i.rebirthPoints)),(!i.leaderboards||typeof i.leaderboards!="object")&&(i.leaderboards={major:{rows:[],loading:!1,error:"",fetchedAt:0},rebirth:{rows:[],loading:!1,error:"",fetchedAt:0}}),typeof i.fledDemon!="boolean"&&(i.fledDemon=!1),typeof i.joinedOrthodoxSect!="boolean"&&(i.joinedOrthodoxSect=!1),typeof i.customSectName!="string"&&(i.customSectName=""),!i.orthodoxHide||typeof i.orthodoxHide!="object")i.orthodoxHide={stage:null};else{const r=i.orthodoxHide.stage,l=r===null||typeof r=="string"?String(r||""):"",a=l===""||l==="discover"||l==="saved"||l==="loyalty"||l==="joined";i.orthodoxHide.stage=a&&l?l:null}if(typeof i.legendaryAxeOfferRolled!="boolean"&&(i.legendaryAxeOfferRolled=!1),typeof i.legendaryAxeOfferAvailable!="boolean"&&(i.legendaryAxeOfferAvailable=!1),typeof i.isBusinessOriented!="boolean"&&(i.isBusinessOriented=!1),(!Number.isFinite(i.incomeCycleSeconds)||i.incomeCycleSeconds<0)&&(i.incomeCycleSeconds=0),(!Number.isFinite(i.businessCycleSeconds)||i.businessCycleSeconds<=0)&&(i.businessCycleSeconds=5),!i.businessIncomePerCycle||typeof i.businessIncomePerCycle!="object")i.businessIncomePerCycle={silver:5,copper:15,gold:0,spiritStonesLow:0};else{const r=Number(i.businessIncomePerCycle.silver),l=Number(i.businessIncomePerCycle.copper),a=Number(i.businessIncomePerCycle.gold),c=Number(i.businessIncomePerCycle.spiritStonesLow);i.businessIncomePerCycle={silver:Number.isFinite(r)&&r>=0?Math.floor(r):5,copper:Number.isFinite(l)&&l>=0?Math.floor(l):15,gold:Number.isFinite(a)&&a>=0?Math.floor(a):0,spiritStonesLow:Number.isFinite(c)&&c>=0?Math.floor(c):0}}if(typeof i.businessUpgradedExpansion!="boolean"&&(i.businessUpgradedExpansion=!1),typeof i.businessUpgradedEmployees!="boolean"&&(i.businessUpgradedEmployees=!1),typeof i.businessChoseStabilityIsntEnough!="boolean"&&(i.businessChoseStabilityIsntEnough=!1),typeof i.businessChoseNoMoreGames!="boolean"&&(i.businessChoseNoMoreGames=!1),typeof i.businessMerchantGuildPartnered!="boolean"&&(i.businessMerchantGuildPartnered=!1),typeof i.businessNervousNeighboringSectOpened!="boolean"&&(i.businessNervousNeighboringSectOpened=!1),typeof i.businessNeighboringSectNegotiated!="boolean"&&(i.businessNeighboringSectNegotiated=!1),typeof i.businessNeighboringSectDenied!="boolean"&&(i.businessNeighboringSectDenied=!1),typeof i.businessSectRetaliationResolved!="boolean"&&(i.businessSectRetaliationResolved=!1),typeof i.businessFoundMysteriousManual!="boolean"&&(i.businessFoundMysteriousManual=!1),typeof i.businessGuildRetaliationPrepared!="boolean"&&(i.businessGuildRetaliationPrepared=!1),typeof i.businessCarpetBombDone!="boolean"&&(i.businessCarpetBombDone=!1),typeof i.businessHeavenlyDemonWatcherFollowed!="boolean"&&(i.businessHeavenlyDemonWatcherFollowed=!1),typeof i.businessHeavenlyDemonOfferMade!="boolean"&&(i.businessHeavenlyDemonOfferMade=!1),typeof i.businessHeavenlyDemonOfferResolved!="boolean"&&(i.businessHeavenlyDemonOfferResolved=!1),typeof i.businessHeavenlyDemonOfferAccepted!="boolean"&&(i.businessHeavenlyDemonOfferAccepted=!1),typeof i.businessHeavenlyDemonOfferDenied!="boolean"&&(i.businessHeavenlyDemonOfferDenied=!1),typeof i.businessMergedWithMilitary!="boolean"&&(i.businessMergedWithMilitary=!1),typeof i.businessBombTestingDone!="boolean"&&(i.businessBombTestingDone=!1),typeof i.businessAntiMatterCreationDone!="boolean"&&(i.businessAntiMatterCreationDone=!1),typeof i.businessWarpingDone!="boolean"&&(i.businessWarpingDone=!1),typeof i.businessStormHeavensStarted!="boolean"&&(i.businessStormHeavensStarted=!1),typeof i.businessStormHeavensCinematicDone!="boolean"&&(i.businessStormHeavensCinematicDone=!1),typeof i.heavensImmortalGodClashStarted!="boolean"&&(i.heavensImmortalGodClashStarted=!1),i.heavensEnding!==null&&i.heavensEnding!=="demonKingDeath"&&i.heavensEnding!=="tartarusEaten"&&(i.heavensEnding=null),typeof i.hasChosen100SilverRoute!="boolean"&&(i.hasChosen100SilverRoute=!1),(!Number.isFinite(i.cloudCultivatorStoryStage)||i.cloudCultivatorStoryStage<0)&&(i.cloudCultivatorStoryStage=0),Array.isArray(i.cloudConqueredSects)||(i.cloudConqueredSects=[]),i.cloudConqueredSects=i.cloudConqueredSects.map(r=>String(r||"")).filter(Boolean),typeof i.cloudConqueredSectsUnlocked!="boolean"&&(i.cloudConqueredSectsUnlocked=!1),(!Number.isFinite(i.searchingAndConqueringCooldown)||i.searchingAndConqueringCooldown<0)&&(i.searchingAndConqueringCooldown=0),(!Number.isFinite(i.cloudCoalitionWarStage)||i.cloudCoalitionWarStage<0)&&(i.cloudCoalitionWarStage=0),typeof i.cloudFinalConfrontationCinematicDone!="boolean"&&(i.cloudFinalConfrontationCinematicDone=!1),!i.cloudCoalitionWave||typeof i.cloudCoalitionWave!="object")i.cloudCoalitionWave=null;else{const r=String(i.cloudCoalitionWave.kind||""),l=r==="armies"||r==="champions",a=Math.floor(Number(i.cloudCoalitionWave.index)),c=Number.isFinite(a)&&a>=0&&a<=2;!l||!c?i.cloudCoalitionWave=null:i.cloudCoalitionWave={kind:r,index:a,awaitingStaminaFull:!!i.cloudCoalitionWave.awaitingStaminaFull,pendingStart:!!i.cloudCoalitionWave.pendingStart}}try{Sa()}catch{}try{Ks()}catch{}try{(!Number.isFinite(i.rebirthPoints)||i.rebirthPoints<0)&&(i.rebirthPoints=0),(!Number.isFinite(i.rebirthStoneBonusLast)||i.rebirthStoneBonusLast<0)&&(i.rebirthStoneBonusLast=0),i.rebirthUpgrades=ht(i.rebirthUpgrades),Sa();try{Ks()}catch{}}catch{}if(typeof i.hasLargerBagSpace!="boolean"&&(i.hasLargerBagSpace=!1),typeof i.largerBagSpaceUnlocked!="boolean"&&(i.largerBagSpaceUnlocked=!1),i.hasLargerBagSpace&&(i.largerBagSpaceUnlocked=!0),!i.hdDetour||typeof i.hdDetour!="object"?i.hdDetour={unlocked:!1,choseDifferentPath:!1,exploredCave:!1,caveChoice:null,startedFamily:!1,groceriesCount:0,returnHomeAvailable:!1,demonCinematicResolved:!1}:(typeof i.hdDetour.unlocked!="boolean"&&(i.hdDetour.unlocked=!1),typeof i.hdDetour.choseDifferentPath!="boolean"&&(i.hdDetour.choseDifferentPath=!1),typeof i.hdDetour.exploredCave!="boolean"&&(i.hdDetour.exploredCave=!1),i.hdDetour.caveChoice!=="demonicManual"&&i.hdDetour.caveChoice!=="ignore"&&(i.hdDetour.caveChoice=null),typeof i.hdDetour.startedFamily!="boolean"&&(i.hdDetour.startedFamily=!1),(!Number.isFinite(i.hdDetour.groceriesCount)||i.hdDetour.groceriesCount<0)&&(i.hdDetour.groceriesCount=0),typeof i.hdDetour.returnHomeAvailable!="boolean"&&(i.hdDetour.returnHomeAvailable=!1),typeof i.hdDetour.demonCinematicResolved!="boolean"&&(i.hdDetour.demonCinematicResolved=!1)),!i.dmFate||typeof i.dmFate!="object")i.dmFate={unlocked:!1,stage:null};else{typeof i.dmFate.unlocked!="boolean"&&(i.dmFate.unlocked=!1);const r=String(i.dmFate.stage||""),l=r===""||r==="awaitLeader"||r==="choose"||r==="slaughterFinal"||r==="stay_find"||r==="stay_capture"||r==="stay_end"||r==="done"||r==="dead";i.dmFate.stage=l&&r?r:null}i.storyDialog&&typeof i.storyDialog!="object"&&(i.storyDialog=null),typeof i.storyDialogReturnPhase!="string"&&(i.storyDialogReturnPhase=null),Array.isArray(i.inventory)||(i.inventory=[]),i.inventory=i.inventory.filter(r=>r&&typeof r=="object"&&typeof r.name=="string"&&r.name).map(r=>({...r,quantity:Number.isFinite(r.quantity)?r.quantity:1})),Number.isFinite(i.selectedInventoryIndex)||(i.selectedInventoryIndex=null),(!i.equipped||typeof i.equipped!="object")&&(i.equipped={tool:null,manual:null}),typeof i.equipped.tool!="string"&&(i.equipped.tool=null),typeof i.equipped.manual!="string"&&(i.equipped.manual=null);const o=r=>i.inventory.some(l=>(l==null?void 0:l.name)===r),s=r=>{o(r.name)||i.inventory.push({...r,quantity:1})};i.hasBoughtTools&&s({name:"Farming Tools",icon:"🔨",description:"Increases copper gained from selling crops by 50%"}),i.hasUnlockedWood&&s({name:"Rusted Axe",icon:"🪓",description:"A basic axe for chopping wood"}),i.hasBoughtNormalAxe&&s({name:"Normal Axe",icon:"🪓",description:"A quality axe that increases silver gain by 50%"}),i.hasBoughtLegendaryTools&&s({name:"Legendary Axe",icon:"",description:"A legendary axe that increases silver gain by 70%"}),i.hasManual&&s({name:"Beginner Cultivation Manual",icon:"",description:"A basic manual that allows major realm breakthroughs"}),i.hasBoughtLegendaryTools?i.equipped.tool="Legendary Axe":i.hasBoughtNormalAxe?i.equipped.tool="Normal Axe":i.hasBoughtTools?i.equipped.tool="Farming Tools":i.hasUnlockedWood&&(i.equipped.tool="Rusted Axe");try{xd()}catch{}Array.isArray(i.specialActions)||(i.specialActions=[]),i.specialActions=i.specialActions.filter(r=>{const l=r==null?void 0:r.name;return typeof l!="string"?!0:!["Trade Spirit Stones","Decline Trade","Explore Ruins","Ignore Ruins","Go into Business","Go with Mysterious Cultivator","Seek Azure Peak Sect","Sect Mission","Visit Sect Treasury","Leave Treasury","Buy Qi Gathering Pill","Buy Advanced Manual","Upgrade Manual","Legendary Farming Tools"].some(c=>l.includes(c))}),i.specialActions=i.specialActions.filter(r=>{const l=r==null?void 0:r.name;return l!=="Explore the Nearby Forest"&&l!=="Enter Deep into the Woods"&&l!=="Find Nothing"&&l!=="Find Mysterious Herb"});try{vn()}catch{}return!0}}catch(n){console.error("Failed to load game:",n)}return!1}let bt=null,Ro=null,Un=null,Jn=null,Ot=null,Nn="",Zc=!1,eu=!1;const tu=new Map,ub="assets/alex-productions-chinese-new-year.mp3";let mn=null,ra=!1;const db={shoot:"assets/sfx/clean-machine-gun-burst-98224.mp3",explosion:"assets/sfx/explosion-fx-343683.mp3",lightning:"assets/sfx/peals-of-thunder-191992.mp3",plane:"assets/sfx/aeroplane-327235.mp3"},xa=new Map,aa=new Map,la=new Set;function hb(n){var l,a;if(vn(),!((l=i.audio)!=null&&l.enabled))return!1;const e=String(n||""),t=db[e];if(!t||la.has(e))return!1;let o=xa.get(e);if(!o){o=[];const c=4;for(let u=0;u<c;u++)try{const d=new Audio;d.preload="auto",d.src=t,d.addEventListener("error",()=>{la.add(e)},{once:!0}),o.push(d)}catch{}xa.set(e,o),aa.set(e,0)}if(!o||o.length===0)return!1;const s=aa.get(e)||0;aa.set(e,s+1);const r=o[s%o.length];if(!r)return!1;try{const c=ze((a=i.audio)==null?void 0:a.sfxVolume);r.volume=Math.max(0,Math.min(1,c))}catch{}try{r.currentTime=0}catch{}try{const c=r.play();return c&&typeof c.catch=="function"&&c.catch(u=>{const d=String((u==null?void 0:u.name)||"");d&&d!=="NotAllowedError"&&la.add(e)}),!0}catch{return!1}}const nu=(()=>{try{return new RegExp("\\p{Extended_Pictographic}","u")}catch{return null}})();function Is(n){if(!nu)return!1;try{return nu.test(String(n||""))}catch{return!1}}function fb(){try{if(Array.isArray(i.inventory))for(const n of i.inventory)n&&typeof n=="object"&&typeof n.icon=="string"&&Is(n.icon)&&(n.icon="")}catch{}try{if(Array.isArray(i.repeatableActions))for(const n of i.repeatableActions)n&&typeof n=="object"&&typeof n.icon=="string"&&Is(n.icon)&&(n.icon="")}catch{}try{if(Array.isArray(i.specialActions))for(const n of i.specialActions)n&&typeof n=="object"&&typeof n.icon=="string"&&Is(n.icon)&&(n.icon="")}catch{}try{i.enemy&&typeof i.enemy=="object"&&typeof i.enemy.icon=="string"&&Is(i.enemy.icon)&&(i.enemy.icon="")}catch{}}function vn(){(!i.audio||typeof i.audio!="object")&&(i.audio={enabled:!1,sfxVolume:.7,musicVolume:.6}),typeof i.audio.enabled!="boolean"&&(i.audio.enabled=!1);const n=Number(i.audio.sfxVolume),e=Number(i.audio.musicVolume);if(i.audio.sfxVolume=Number.isFinite(n)?Math.max(0,Math.min(1,n)):.7,i.audio.musicVolume=Number.isFinite(e)?Math.max(0,Math.min(1,e)):.6,!Zc){Zc=!0;try{window.addEventListener("pointerdown",()=>{var t;if((t=i.audio)!=null&&t.enabled)try{pr();try{bt&&bt.resume&&bt.resume()}catch{}nl()}catch{}},{once:!1,passive:!0})}catch{}}if(!eu){eu=!0;try{document.addEventListener("click",t=>{try{const o=t&&t.target;if(!o||!o.closest)return;const s=o.closest("button");if(!s||s.disabled)return;St("click")}catch{}},!0)}catch{}}}function pr(){if(bt)return bt;const n=window.AudioContext||window.webkitAudioContext;return n?(bt=new n,Ro=bt.createGain(),Un=bt.createGain(),Jn=bt.createGain(),Ro.gain.value=.9,Un.gain.value=0,Jn.gain.value=0,Un.connect(Ro),Jn.connect(Ro),Ro.connect(bt.destination),mo(),bt):null}function mo(){var s,r,l;vn();const n=!!((s=i.audio)!=null&&s.enabled),e=ze((r=i.audio)==null?void 0:r.sfxVolume),t=ze((l=i.audio)==null?void 0:l.musicVolume);try{if(mn&&(mn.volume=Math.max(0,Math.min(1,n?t:0)),!n))try{mn.pause()}catch{}}catch{}try{for(const a of xa.values())if(Array.isArray(a))for(const c of a)try{c&&(c.volume=Math.max(0,Math.min(1,n?e:0)))}catch{}}catch{}if(!bt||!Un||!Jn)return;const o=bt.currentTime;try{Un.gain.setTargetAtTime(n?e:0,o,.03),Jn.gain.setTargetAtTime(n?t:0,o,.1)}catch{Un.gain.value=n?e:0,Jn.gain.value=n?t:0}}function pb(){var n,e;if(vn(),!((n=i.audio)!=null&&n.enabled)||ra)return!1;if(!mn)try{const t=new Audio;t.preload="auto",t.loop=!0,t.src=ub,t.addEventListener("error",()=>{ra=!0},{once:!0}),mn=t}catch{return ra=!0,!1}try{const t=ze((e=i.audio)==null?void 0:e.musicVolume);mn.volume=Math.max(0,Math.min(1,t))}catch{}try{if(mn.paused){const t=mn.play();t&&typeof t.catch=="function"&&t.catch(()=>{})}}catch{}return!0}function St(n){var v;if(vn(),!((v=i.audio)!=null&&v.enabled))return;try{const b=String(n||""),y=Date.now(),g=tu.get(b)||0;if(y-g<35)return;tu.set(b,y)}catch{}const e=String(n||"");if(e==="shoot"||e==="explosion"||e==="lightning"||e==="plane")try{if(hb(e))return}catch{}const t=pr();if(!t||!Un)return;try{t.state==="suspended"&&t.resume()}catch{}const o=t.currentTime,s=t.createOscillator(),r=t.createGain();let l="triangle",a=220,c=440,u=.08,d=.18;e==="click"?(l="triangle",a=520,c=360,u=.045,d=.1):e==="start"?(l="sine",a=260,c=520,u=.08,d=.14):e==="complete"?(l="triangle",a=660,c=880,u=.1,d=.16):e==="hit"?(l="square",a=160,c=120,u=.06,d=.12):e==="buy"?(l="sine",a=740,c=980,u=.11,d=.14):e==="error"?(l="sawtooth",a=220,c=140,u=.11,d=.1):e==="gather"?(l="triangle",a=380,c=620,u=.09,d=.12):e==="craft"?(l="sine",a=520,c=1040,u=.12,d=.14):e==="rebirth"&&(l="triangle",a=440,c=1320,u=.14,d=.16);const f=b=>{const y=Math.max(.01,Number(b)||.01),g=Math.max(1,Math.floor(t.sampleRate*y)),h=t.createBuffer(1,g,t.sampleRate),C=h.getChannelData(0);for(let m=0;m<g;m++)C[m]=(Math.random()*2-1)*.98;return h},p=(b,y,g,h,C,m,S)=>{const L=t.createBufferSource(),T=t.createGain(),R=t.createBiquadFilter();L.buffer=f(b),R.type=y||"lowpass";const V=Math.max(.02,Number(b)||.02),w=Math.max(.002,Number(m)||.004),x=Math.max(.01,Number(S)||V),q=Math.max(2e-4,Number(C)||.1);T.gain.setValueAtTime(1e-4,o),T.gain.exponentialRampToValueAtTime(q,o+w),T.gain.exponentialRampToValueAtTime(1e-4,o+V);const $=Math.max(30,Number(g)||220),ue=Math.max(30,Number(h)||$);try{R.frequency.setValueAtTime($,o),R.frequency.exponentialRampToValueAtTime(ue,o+Math.max(.02,x))}catch{R.frequency.value=$}L.connect(R),R.connect(T),T.connect(Un),L.start(o),L.stop(o+V+.02),L.onended=()=>{try{L.disconnect()}catch{}try{R.disconnect()}catch{}try{T.disconnect()}catch{}}};if(e==="shoot"){try{p(.06,"highpass",1400,900,.1,.003,.06)}catch{}l="square",a=1900,c=520,u=.055,d=.1}else if(e==="explosion"){try{p(.85,"lowpass",220,85,.18,.004,.85)}catch{}l="sine",a=85,c=32,u=.65,d=.14}else if(e==="lightning"){try{p(.12,"highpass",2600,1400,.12,.002,.12)}catch{}try{p(1.35,"lowpass",180,70,.16,.01,1.35)}catch{}l="sine",a=58,c=26,u=1.05,d=.12}else if(e==="plane"){try{p(1.25,"bandpass",420,280,.06,.02,1.25)}catch{}l="sawtooth",a=120,c=78,u=1.25,d=.06}s.type=l,s.frequency.setValueAtTime(a,o),s.frequency.exponentialRampToValueAtTime(Math.max(40,c),o+u),r.gain.setValueAtTime(1e-4,o),r.gain.exponentialRampToValueAtTime(Math.max(2e-4,d),o+.01),r.gain.exponentialRampToValueAtTime(1e-4,o+u),s.connect(r),r.connect(Un),s.start(o),s.stop(o+u+.02),s.onended=()=>{try{s.disconnect()}catch{}try{r.disconnect()}catch{}}}let Io=[],Po=[];function mr(n){if(Array.isArray(n)){for(const e of n){try{clearTimeout(e)}catch{}try{clearInterval(e)}catch{}}n.length=0}}window.forceLeaderboardSyncNow=async()=>{if(!_o()){O("Leaderboards are not configured for this build.");return}(!i.leaderboardsSync||typeof i.leaderboardsSync!="object")&&(i.leaderboardsSync={lastAt:0,lastOk:!1,lastMsg:"",sentLabel:"",storedLabel:""}),i.leaderboardsSync.lastAt=Date.now(),i.leaderboardsSync.lastOk=!1,i.leaderboardsSync.lastMsg="Syncing...",i.leaderboardsSync.sentLabel="",i.leaderboardsSync.storedLabel="";try{U()}catch{}try{N()}catch{}try{Ta={username:"",rp:-1,bestRp:-1,bestMajor:-1,bestMajorIsDemon:null,bestMajorLabel:""}}catch{}try{try{po()}catch{}try{const n=md();i.leaderboardsSync.sentLabel=String((n==null?void 0:n.best_major_label)||"")}catch{}await gd();try{const n=ts(),e=i.playerName&&String(i.playerName).trim()?String(i.playerName).trim():"",o=`${`${n.url.replace(/\/+$|\/+$/g,"")}/rest/v1/leaderboard`}?select=username,best_major_label,best_major_index,best_major_sub_index,best_major_is_demon&username=eq.${encodeURIComponent(e)}`,s=await fetch(o,{method:"GET",headers:{apikey:n.anonKey,Authorization:`Bearer ${n.anonKey}`}});if(s.ok){const r=await s.json().catch(()=>[]),l=Array.isArray(r)?r[0]:null,a=String((l==null?void 0:l.best_major_label)||"");i.leaderboardsSync.lastOk=!0,i.leaderboardsSync.storedLabel=a,i.leaderboardsSync.lastMsg=a,O(`Leaderboard synced. Sent: ${String(i.leaderboardsSync.sentLabel||"")||"(empty)"} | Stored: ${a||"(empty)"}`)}else{const r=await s.text().catch(()=>"");i.leaderboardsSync.lastOk=!0,i.leaderboardsSync.lastMsg="Synced, but verify fetch failed.",O(`Leaderboard synced. Verify fetch failed (${s.status}): ${r||s.statusText}`)}}catch{i.leaderboardsSync.lastOk=!0,i.leaderboardsSync.lastMsg="Synced.",O("Leaderboard synced.")}}catch(n){const e=String(n&&n.message?n.message:n);i.leaderboardsSync.lastOk=!1,i.leaderboardsSync.lastMsg=e,O(`Leaderboard sync failed: ${e}`)}try{window.refreshLeaderboards()}catch{}try{U()}catch{}try{N()}catch{}};function Fs(){try{if(mn){try{mn.pause()}catch{}try{mn.currentTime=0}catch{}}}catch{}if(Ot){try{const n=Array.isArray(Ot)?Ot:(Ot==null?void 0:Ot.nodes)||[],e=Array.isArray(Ot)?[]:(Ot==null?void 0:Ot.timers)||[];for(const t of e){try{clearInterval(t)}catch{}try{clearTimeout(t)}catch{}}for(const t of n){try{t.stop&&t.stop()}catch{}try{t.disconnect&&t.disconnect()}catch{}}}catch{}Ot=null,Nn=""}}function nl(){var ve;if(vn(),!((ve=i.audio)!=null&&ve.enabled)){Fs(),mo();return}const n=pb();if(mo(),n){Ot&&Fs(),Nn="mp3";return}const e=pr();if(!e||!Jn)return;const t=i.phase==="COMBAT"?"combat":i.phase==="FATE_ROLL"?"fate":"calm";if(Ot&&Nn===t)return;Ot&&Nn!==t&&Fs(),Nn=t;const o=e.currentTime,r=60/Math.max(30,t==="combat"?104:t==="fate"?86:74),l=B=>440*Math.pow(2,(Number(B)-69)/12),a=t==="combat"?57:t==="fate"?62:55,c=[0,2,4,7,9],u=(B,j)=>B[(j%B.length+B.length)%B.length],d=e.createGain();d.gain.setValueAtTime(t==="combat"?.62:.55,o);const f=e.createDynamicsCompressor();f.threshold.setValueAtTime(-26,o),f.knee.setValueAtTime(18,o),f.ratio.setValueAtTime(7,o),f.attack.setValueAtTime(.004,o),f.release.setValueAtTime(.22,o),d.connect(f),f.connect(Jn);const p=e.createGain();p.gain.setValueAtTime(1e-4,o),p.gain.setTargetAtTime(.03,o+.05,.6);const v=e.createBiquadFilter();v.type="lowpass",v.frequency.setValueAtTime(280,o),p.connect(v),v.connect(d);const b=e.createOscillator();b.type="sine",b.frequency.setValueAtTime(l(a-24),o),b.connect(p);const y=e.createGain();y.gain.setValueAtTime(1e-4,o);const g=e.createBiquadFilter();g.type="bandpass",g.frequency.setValueAtTime(1200,o),g.Q.setValueAtTime(6.5,o),y.connect(g),g.connect(d);const h=e.createOscillator();h.type="triangle",h.connect(y);const C=e.createOscillator();C.type="sine",C.frequency.setValueAtTime(5.2,o);const m=e.createGain();m.gain.setValueAtTime(12,o),C.connect(m),m.connect(h.detune);const S=e.createGain();S.gain.setValueAtTime(t==="combat"?.2:.17,o);const L=e.createBiquadFilter();L.type="lowpass",L.frequency.setValueAtTime(5e3,o),S.connect(L),L.connect(d);const T=e.createGain();T.gain.setValueAtTime(1e-4,o);const R=e.createBiquadFilter();R.type="bandpass",R.frequency.setValueAtTime(1800,o),R.Q.setValueAtTime(3.6,o),T.connect(R),R.connect(d);const V=e.createOscillator();V.type="sawtooth",V.detune.setValueAtTime(-6,o),V.connect(T);const w=e.createGain();w.gain.setValueAtTime(1e-4,o);const x=e.createBiquadFilter();x.type="lowpass",x.frequency.setValueAtTime(2400,o),w.connect(x),x.connect(d);const q=()=>{const B=e.currentTime,j=e.createOscillator();j.type="sine";const re=e.createOscillator();re.type="sine";const Me=e.createGain();Me.gain.setValueAtTime(1e-4,B);const Ae=l(a-12);j.frequency.setValueAtTime(Ae,B),re.frequency.setValueAtTime(Ae*2.01,B),re.detune.setValueAtTime(7,B),Me.gain.exponentialRampToValueAtTime(t==="combat"?.12:.095,B+.02),Me.gain.exponentialRampToValueAtTime(1e-4,B+1.4),j.connect(Me),re.connect(Me),Me.connect(w),j.start(B),re.start(B),j.stop(B+1.6),re.stop(B+1.6),re.onended=()=>{try{j.disconnect()}catch{}try{re.disconnect()}catch{}try{Me.disconnect()}catch{}}};let $=null;try{const B=Math.floor(e.sampleRate*.35);$=e.createBuffer(1,B,e.sampleRate);const j=$.getChannelData(0);for(let re=0;re<B;re++)j[re]=(Math.random()*2-1)*.7}catch{}const ue=()=>{const B=e.currentTime,j=e.createOscillator();j.type="sine";const re=e.createGain();re.gain.setValueAtTime(1e-4,B),j.frequency.setValueAtTime(120,B),j.frequency.exponentialRampToValueAtTime(48,B+.12),re.gain.exponentialRampToValueAtTime(t==="combat"?.25:.18,B+.01),re.gain.exponentialRampToValueAtTime(1e-4,B+.18),j.connect(re),re.connect(S),j.start(B),j.stop(B+.22),j.onended=()=>{try{j.disconnect()}catch{}try{re.disconnect()}catch{}}},D=B=>{if(!$)return;const j=e.currentTime,re=e.createBufferSource();re.buffer=$;const Me=e.createGain();Me.gain.setValueAtTime(1e-4,j);const Ae=e.createBiquadFilter();Ae.type="bandpass",Ae.frequency.setValueAtTime(B==="snare"?1800:9e3,j),Ae.Q.setValueAtTime(B==="snare"?.9:.7,j),re.connect(Ae),Ae.connect(Me),Me.connect(S);const ae=B==="snare"?.1:.05,P=B==="snare"?.12:.05;Me.gain.exponentialRampToValueAtTime(ae,j+.005),Me.gain.exponentialRampToValueAtTime(1e-4,j+P),re.start(j),re.stop(j+Math.max(.07,P+.02)),re.onended=()=>{try{re.disconnect()}catch{}try{Ae.disconnect()}catch{}try{Me.disconnect()}catch{}}},X=(B,j)=>{const re=e.currentTime,Me=l(B),Ae=Math.max(.08,(Number(j)||1)*r);try{h.frequency.setTargetAtTime(Me,re,.015)}catch{h.frequency.setValueAtTime(Me,re)}const ae=t==="combat"?.14:.12;y.gain.cancelScheduledValues(re),y.gain.setValueAtTime(1e-4,re),y.gain.exponentialRampToValueAtTime(ae,re+.02),y.gain.exponentialRampToValueAtTime(1e-4,re+Ae)},z=B=>{const j=e.currentTime,re=l(B);try{V.frequency.setValueAtTime(Math.max(40,re),j)}catch{}T.gain.cancelScheduledValues(j),T.gain.setValueAtTime(1e-4,j),T.gain.exponentialRampToValueAtTime(.12,j+.008),T.gain.exponentialRampToValueAtTime(1e-4,j+.12)};b.start(o),h.start(o),C.start(o),V.start(o);const Q=[];let J=0;Q.push(setInterval(()=>{!bt||Nn!==t||q()},Math.max(200,Math.floor(r*1e3*8)))),Q.push(setInterval(()=>{if(!bt||Nn!==t)return;const B=J%16;(B===0||B===8||t==="combat"&&(B===6||B===14))&&ue(),(B===4||B===12)&&D("snare"),B%2===1&&D("hat"),J++},Math.max(40,Math.floor(r*1e3*.5))));let le=0;Q.push(setInterval(()=>{if(!bt||Nn!==t)return;const B=le%16;if(B===2||B===6||B===10||B===14){const j=u(c,B===10?3:1),re=a+12+j;z(re)}le++},Math.max(60,Math.floor(r*1e3*.5))));let oe=0;const de=t==="combat"?[0,2,4,2,7,4,2,-1,9,7,4,2,0,2,4,7]:t==="fate"?[0,2,4,7,4,2,0,-1,0,2,4,9,7,4,2,0]:[0,2,4,7,4,2,0,-1,0,2,4,2,0,-1,2,0];Q.push(setInterval(()=>{if(!bt||Nn!==t)return;const B=de[oe%de.length];if(oe++,B===-1)return;const j=t==="combat"?2:1,re=u(c,B),Me=a+12*j+re;X(Me,1)},Math.max(80,Math.floor(r*1e3)))),Ot={nodes:[d,f,S,L,p,v,b,y,g,h,C,m,T,R,V,w,x],timers:Q}}window.setAudioEnabled=n=>{if(vn(),i.audio.enabled=!!n,i.audio.enabled){try{pr()}catch{}try{bt&&bt.resume&&bt.resume()}catch{}nl(),St("complete")}else Fs();mo(),U(),N()};window.setAudioSfxVolume=n=>{vn();const e=Number(n);Number.isFinite(e)&&(i.audio.sfxVolume=Math.max(0,Math.min(1,e))),mo(),U()};window.setAudioMusicVolume=n=>{vn();const e=Number(n);Number.isFinite(e)&&(i.audio.musicVolume=Math.max(0,Math.min(1,e))),mo(),nl(),U()};window.toggleCredits=()=>{i.showCredits=!i.showCredits,U(),N()};window.audioTestSfx=()=>{vn(),i.audio.enabled&&St("click")};let so=null,wa=0;const mb=2600;function pd(n){const e=Math.max(0,Math.min(100,Math.floor(Number(n)||0))),t=document.getElementById("intro-progress-bar"),o=document.getElementById("intro-progress-tip");t&&(t.style.width=`${e}%`),o&&(o.textContent=`${e}%`);const s=document.querySelector(".intro-loading-track");if(s&&o){const r=s.clientWidth,l=o.offsetWidth,c=e/100*r+6,u=Math.max(0,Math.min(r-l,c));o.style.left=`${u}px`}else o&&(o.style.left=`${e}%`)}function Ca(){if(so)try{cancelAnimationFrame(so)}catch{}so=null,wa=0}function gb(){var e;if(so||i.phase!=="INTRO_LOADING"||((e=i.intro)==null?void 0:e.step)!=="loading"||i.intro.progress>=100)return;wa=performance.now();const n=t=>{var l;if(i.phase!=="INTRO_LOADING"||((l=i.intro)==null?void 0:l.step)!=="loading"){Ca();return}const o=t-wa,s=Math.max(0,Math.min(1,o/mb)),r=Math.max(0,Math.min(100,Math.floor(s*100)));if(i.intro.progress=r,pd(r),r>=100){i.intro.progress=100,i.intro.step="username",Ca(),N();return}so=requestAnimationFrame(n)};so=requestAnimationFrame(n)}function Aa(n){const e='fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';return n==="female"?`
      <svg class="intro-silhouette" viewBox="0 0 64 64" role="img" aria-label="Female cultivator silhouette">
        <path d="M32 10c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10z" ${e} />
        <path d="M20 54c2-14 10-22 12-22s10 8 12 22" ${e} />
        <path d="M22 38c4 2 6 2 10 2s6 0 10-2" ${e} opacity="0.8" />
        <path d="M18 46c6-4 22-4 28 0" ${e} opacity="0.7" />
      </svg>
    `.trim():`
    <svg class="intro-silhouette" viewBox="0 0 64 64" role="img" aria-label="Male cultivator silhouette">
      <path d="M32 10c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10z" ${e} />
      <path d="M18 54c3-16 11-24 14-24s11 8 14 24" ${e} />
      <path d="M22 36c4 3 6 4 10 4s6-1 10-4" ${e} opacity="0.8" />
      <path d="M24 54v-8" ${e} opacity="0.7" />
      <path d="M40 54v-8" ${e} opacity="0.7" />
    </svg>
  `.trim()}window.onIntroUsernameInput=function(n){var s;const e=((s=n==null?void 0:n.target)==null?void 0:s.value)??"";i.intro.usernameDraft=e;const t=document.getElementById("intro-username-confirm");t&&(t.disabled=e.trim().length===0);const o=document.getElementById("intro-username-error");o&&(o.textContent="")};window.confirmIntroUsername=function(){var e;const n=String(((e=i.intro)==null?void 0:e.usernameDraft)??"").trim();if(!n){const t=document.getElementById("intro-username-error");t&&(t.textContent="Username is required.");return}i.playerName=n,i.intro.step="gender";try{U()}catch{}N()};function vb(){window.__introKeybindingsBound||(window.__introKeybindingsBound=!0,window.addEventListener("keydown",n=>{var t;if(i.phase!=="INTRO_LOADING"||n.key!=="Enter")return;n.preventDefault();const e=(t=i.intro)==null?void 0:t.step;if(e==="username"){window.confirmIntroUsername();return}e==="ready"&&window.introContinue()}))}window.selectIntroGender=function(n){if(!(n!=="male"&&n!=="female")){i.playerGender=n,i.intro.step="ready";try{U()}catch{}N()}};window.introContinue=function(){var n;if(i.phase==="INTRO_LOADING"&&((n=i.intro)==null?void 0:n.step)==="ready"&&!(!i.playerName||!String(i.playerName).trim())&&!(i.playerGender!=="male"&&i.playerGender!=="female")){gr(),i.phase="FATE_ROLL",U();try{ii("intro")}catch{}N()}};let Ps=null,Ta={username:"",rp:-1,bestRp:-1,bestMajor:-1,bestMajorSub:-1,bestMajorIsDemon:null,bestMajorLabel:""};function md(){const n=i.playerName&&String(i.playerName).trim()?String(i.playerName).trim():"",e=M(i.rebirthPoints),t=M(i.bestRebirthPoints),o=i.bestMajorRealm&&typeof i.bestMajorRealm=="object"?i.bestMajorRealm:{index:0,subIndex:0,isDemon:!1,label:""},s=M(o.index),r=M(o.subIndex),l=!!o.isDemon,a=String(o.label||"");return{username:n,rebirth_points:e,best_rebirth_points:t,best_major_index:s,best_major_sub_index:r,best_major_is_demon:l,best_major_label:a}}async function gd(){if(!_o())return!1;const n=md();if(!n.username)return!1;const e=Ta;if(e.username===n.username&&e.rp===n.rebirth_points&&e.bestRp===n.best_rebirth_points&&e.bestMajor===n.best_major_index&&e.bestMajorSub===n.best_major_sub_index&&e.bestMajorIsDemon===n.best_major_is_demon&&e.bestMajorLabel===n.best_major_label)return!0;const o=ts(),s=`${o.url.replace(/\/+$/,"")}/rest/v1/leaderboard?on_conflict=username`,r=async a=>fetch(s,{method:"POST",headers:{"Content-Type":"application/json",apikey:o.anonKey,Authorization:`Bearer ${o.anonKey}`,Prefer:"resolution=merge-duplicates,return=minimal"},body:JSON.stringify(a)});let l=await r(n);if(!l.ok){const a=await l.text().catch(()=>""),c=String(a||"").toLowerCase();if(l.status===400&&(c.includes("best_major_sub_index")||c.includes("best_major_sub"))){const d={...n};try{delete d.best_major_sub_index}catch{}if(l=await r(d),!l.ok){const f=await l.text().catch(()=>"");throw new Error(`Leaderboard upsert failed (${l.status}): ${f||l.statusText}`)}}else throw new Error(`Leaderboard upsert failed (${l.status}): ${a||l.statusText}`)}return Ta={username:n.username,rp:n.rebirth_points,bestRp:n.best_rebirth_points,bestMajor:n.best_major_index,bestMajorSub:n.best_major_sub_index,bestMajorIsDemon:n.best_major_is_demon,bestMajorLabel:n.best_major_label},!0}function ii(n){if(_o()&&i.phase!=="INTRO_LOADING"){if(String(n||"").trim(),Ps)try{clearTimeout(Ps)}catch{}Ps=setTimeout(async()=>{Ps=null;try{await gd()}catch(e){console.warn(String(e&&e.message?e.message:e))}},1500)}}async function iu(n){const e=String(n||"");if(!_o())throw new Error(`Leaderboards are not configured. Missing Supabase URL/key. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY at build time, or set window.__CS_SUPABASE_URL / window.__CS_SUPABASE_ANON_KEY, or localStorage keys ${Ja} / ${Za}.`);const t=ts(),o=`${t.url.replace(/\/+$/,"")}/rest/v1/leaderboard`,s="select=username,rebirth_points,best_rebirth_points,best_major_index,best_major_sub_index,best_major_is_demon,best_major_label",r="select=username,rebirth_points,best_rebirth_points,best_major_index,best_major_is_demon,best_major_label";let l="order=best_major_index.desc";e==="rebirth"&&(l="order=best_rebirth_points.desc");const a={apikey:t.anonKey,Authorization:`Bearer ${t.anonKey}`};let c=`${o}?${s}&${l}&limit=25`,u=await fetch(c,{method:"GET",headers:a});if(!u.ok){const f=await u.text().catch(()=>""),p=String(f||"").toLowerCase();if(u.status===400&&(p.includes("best_major_sub_index")||p.includes("best_major_sub")))c=`${o}?${r}&${l}&limit=25`,u=await fetch(c,{method:"GET",headers:a});else throw new Error(`Leaderboard fetch failed (${u.status}): ${f||u.statusText}`)}if(!u.ok){const f=await u.text().catch(()=>"");throw new Error(`Leaderboard fetch failed (${u.status}): ${f||u.statusText}`)}const d=await u.json().catch(()=>[]);return Array.isArray(d)?d:[]}window.refreshLeaderboards=async()=>{if(!(!i.leaderboards||typeof i.leaderboards!="object")){i.leaderboards.major.loading=!0,i.leaderboards.rebirth.loading=!0,i.leaderboards.major.error="",i.leaderboards.rebirth.error="",N();try{const[n,e]=await Promise.all([iu("major"),iu("rebirth")]);i.leaderboards.major.rows=n,i.leaderboards.rebirth.rows=e;const t=Date.now();i.leaderboards.major.fetchedAt=t,i.leaderboards.rebirth.fetchedAt=t}catch(n){const e=String(n&&n.message?n.message:n);i.leaderboards.major.error=e,i.leaderboards.rebirth.error=e}finally{i.leaderboards.major.loading=!1,i.leaderboards.rebirth.loading=!1,N()}}};function bb(n){var l,a,c,u;const e=Math.max(0,Math.min(100,Math.floor(Number((l=i.intro)==null?void 0:l.progress)||0))),t=((a=i.intro)==null?void 0:a.step)||"loading",o=((c=i.intro)==null?void 0:c.usernameDraft)??"",s=String(o).trim().length>0,r=!((u=i.intro)!=null&&u.hasAnimatedTitle);n.innerHTML=`
    <div class="intro-loading-screen">
      <div class="intro-loading-card">
        <div class="intro-title ${r?"intro-title-animate":""}">Cultivation Saga</div>
        <div class="intro-loading-bar-wrap">
          <div class="intro-loading-track">
            <div id="intro-progress-bar" class="intro-loading-bar" style="width: ${e}%"></div>
            <div id="intro-progress-tip" class="intro-progress-tip" style="left: ${e}%">${e}%</div>
          </div>
        </div>

        ${t==="ready"?`
          <button class="intro-continue" onclick="window.introContinue()">Continue</button>
        `:""}
      </div>

      ${t==="username"?`
        <div class="modal-overlay intro-modal-overlay">
          <div class="modal-content intro-modal-content">
            <h2>Enter Username</h2>
            <input
              id="intro-username-input"
              class="password-input"
              type="text"
              value="${Te(o)}"
              oninput="window.onIntroUsernameInput(event)"
              onkeydown="if(event.key==='Enter'){ event.preventDefault(); window.confirmIntroUsername(); }"
              placeholder="Username"
              autocomplete="off"
              spellcheck="false"
            />
            <div id="intro-username-error" class="password-error" style="display:block; min-height: 22px;"></div>
            <div class="modal-buttons">
              <button id="intro-username-confirm" onclick="window.confirmIntroUsername()" ${s?"":"disabled"}>
                Enter
              </button>
            </div>
          </div>
        </div>
      `:""}

      ${t==="gender"?`
        <div class="modal-overlay intro-modal-overlay">
          <div class="modal-content intro-modal-content">
            <h2>Select Cultivator</h2>
            <div class="intro-gender-grid">
              <button class="intro-gender-option" onclick="window.selectIntroGender('male')">
                ${Aa("male")}
                <div class="intro-gender-label">Male cultivator silhouette</div>
              </button>
              <button class="intro-gender-option" onclick="window.selectIntroGender('female')">
                ${Aa("female")}
                <div class="intro-gender-label">Female cultivator silhouette</div>
              </button>
            </div>
          </div>
        </div>
      `:""}
    </div>
  `,pd(e),vb(),r&&(i.intro.hasAnimatedTitle=!0),t==="loading"?gb():Ca()}function gr(){i.rebirthUpgrades=ht(i.rebirthUpgrades);const n=i.rebirthUpgrades,e=1+M(n.bloodlineLuckLevel),t=M(n.rootLuckLevel),o=M(n.maxRootBonusLevel),s=M(n.multiAffinityLuckLevel),r=M(n.affinityAlignmentLuckLevel),l=M(n.storyLuckLuckLevel),a=Xu.map(h=>{const C=h.tier<=3?1+i.rebirthUpgrades.bloodlineBias:1,m=Bv(h.tier),S=h.tier<=3?e:1;return{...h,weight:h.weight*C*m*S}});i.bloodline=oa(a);const c=M(i.rebirthUpgrades.minRootCount)+M(i.rebirthUpgrades.minRootBonusLevel),u=Math.max(c,M(i.rebirthUpgrades.maxRootCount)+o),d=Ov.filter(h=>h.count>=c&&h.count<=u).map(h=>{const C=M(h.count),m=Math.max(0,C-1),S=1+t*m;return{...h,weight:ze(h.weight)*S}});i.spiritualRoots=oa(d);const f=Math.floor(Math.random()*100)+1,p=Math.max(0,Math.min(1,.05*l)),v=Math.floor(Math.random()*100)+1;i.luck=Math.random()<p?Math.max(f,v):f;const b=Gv.map(h=>{const C=M(h.count),m=1+s*Math.max(0,C-1);return{...h,weight:ze(h.weight)*m}}),y=oa(b).count;i.affinities=[];const g=[...Ys].sort(()=>Math.random()-.5);for(let h=0;h<y;h++){const C=Math.max(0,Math.min(.95,.01*r)),m=Math.random()<C?Math.floor(Math.random()*25)+26:Math.floor(Math.random()*50)+1;i.affinities.push({type:g[h],score:m})}i.affinities.sort((h,C)=>C.score-h.score),i.primaryAffinity=i.affinities[0].type,i.strength=bd(),i.maxHealth=yd(),i.health=i.maxHealth,console.log("Fate rolled:",i.bloodline.name,i.spiritualRoots.count,"roots","Luck:",i.luck)}function Bn(){const e=(i.isDemonPath?hr:dr)[i.cultivationMajorIndex],t=e.subRealms[i.cultivationSubIndex];return{major:e.major,sub:t.sub,data:t}}function vd(){i.isDemonPath||(i.isDemonPath=!0,i.cultivationMajorIndex=0,i.cultivationSubIndex=0,O("The Demonic Manual twists your path. Your cultivation realms are replaced by Demonic Major Realms.")),i.expectedLifespanMonths=Math.max(M(i.expectedLifespanMonths),1e3*12),Number.isFinite(i.corruption)||(i.corruption=0),i.corruption<=0&&(i.corruption=1,O(`Corruption awakens within you. Corruption: ${i.corruption}`));try{oi()}catch{}}function yb(n,e=!1){const t=Math.max(0,Math.floor(Number(n)||0)),s=(e?hr:dr)[t],r=s&&Array.isArray(s.subRealms)?s.subRealms:[];if(!r.length)return{qiMult:1,strMult:1,hpMult:1};let l=0,a=0,c=0;for(const d of r)l+=Number.isFinite(d==null?void 0:d.qiMult)?d.qiMult:1,a+=Number.isFinite(d==null?void 0:d.strMult)?d.strMult:1,c+=Number.isFinite(d==null?void 0:d.hpMult)?d.hpMult:1;const u=r.length;return{qiMult:l/u,strMult:a/u,hpMult:c/u}}function il(n){var a,c;const e=yb(n,!!i.isDemonPath),t=Number.isFinite((a=i.sectMultipliers)==null?void 0:a.str)?i.sectMultipliers.str:1,o=Number.isFinite((c=i.sectMultipliers)==null?void 0:c.hp)?i.sectMultipliers.hp:1,s=i.bloodline||{strMult:1,hpMult:1},r=Number.isFinite(s.strMult)?s.strMult:1,l=Number.isFinite(s.hpMult)?s.hpMult:1;return{strength:Math.floor(10*r*e.strMult*t),maxHealth:Math.floor(100*l*e.hpMult*o)}}function M(n){const e=Math.floor(Number(n)||0);return e<0?0:e}function ze(n){const e=Number(n);return Number.isFinite(e)?e<0?0:e:0}function Ai(n){const e=Number(n);if(!Number.isFinite(e))return String(n);const t=Math.round(e*10)/10;return Math.abs(t-Math.round(t))<1e-9?String(Math.round(t)):t.toFixed(1)}function Li(n){const e=M(n);return{years:Math.floor(e/12),months:e%12}}function Js(){return Math.max(0,M(i.expectedLifespanMonths)-2)}function Zs(){return M(i.ageMonths)<Js()}function Mb(n,e){return n<=0?0:n===1&&e===4?12:n>=2?60:0}function ou(n,e){if(!n)return n;const t=i.cultivationMajorIndex,o=i.cultivationSubIndex;if(e==="advancement"){const s=Math.pow(1.06,o),r=Math.pow(1.03,t);return Math.ceil(n*s*r)}if(e==="breakthrough"){const s=Math.pow(1.06,t),r=Math.min(1.35+t*.12,2.6),l=1+Math.max(0,t-3)*.25;return Math.ceil(n*s*r*l)}return n}function vr(){const n=Bn(),e=i.cultivationSubIndex===8;return e&&n.data.majorCost?{cost:ou(n.data.majorCost,"breakthrough"),type:"breakthrough"}:e?{cost:null,type:"max"}:{cost:ou(n.data.minorCost,"advancement"),type:"advancement"}}function Ea(n){var l,a;const e=Bn(),t=Number.isFinite((l=e==null?void 0:e.data)==null?void 0:l.qiMult)?e.data.qiMult:1,o=Math.max(1.1,t),s=Number.isFinite((a=i.sectMultipliers)==null?void 0:a.qi)?i.sectMultipliers.qi:1,r=i.demonCorruptionAscended?2.5:1;return n*i.bloodline.qiMult*i.spiritualRoots.qiMult*o*(i.qiMultiplier||1)*tl()*s*r}function bd(){var o;const n=Bn(),e=Number.isFinite((o=i.sectMultipliers)==null?void 0:o.str)?i.sectMultipliers.str:1,t=i.demonCorruptionAscended?2.5:1;return Math.floor(10*i.bloodline.strMult*n.data.strMult*e*t*nb())}function yd(){var o;const n=Bn(),e=Number.isFinite((o=i.sectMultipliers)==null?void 0:o.hp)?i.sectMultipliers.hp:1,t=i.demonCorruptionAscended?2.5:1;return Math.floor(100*i.bloodline.hpMult*n.data.hpMult*e*t*ib())}function ol(n,e){const t=Math.floor(Number(n));if(!Number.isFinite(t)||t<=0||!i.isDemonPath)return;const o=M(i.corruption),s=Math.min(100,o+t);i.corruption=s;const r=String(e||"").trim();O(`Corruption +${t}%${r?` (${r})`:""}. Total: ${s}%`),s>=100&&!i.demonCorruptionAscended&&(i.demonCorruptionAscended=!0,O("Your corruption reaches 100%. A permanent demonic ascension takes hold (+2.5× Health/Strength/Qi)."),oi())}function ge(n){const e=Number(n);if(!Number.isFinite(e))return String(n);const t=e<0?"-":"",o=Math.floor(Math.abs(e)),s=[{unit:1e33,suffix:"Dc"},{unit:1e30,suffix:"No"},{unit:1e27,suffix:"Oc"},{unit:1e24,suffix:"Sp"},{unit:1e21,suffix:"Sx"},{unit:1e18,suffix:"Qi"},{unit:1e15,suffix:"Qa"},{unit:1e12,suffix:"T"},{unit:1e9,suffix:"B"},{unit:1e6,suffix:"M"},{unit:1e3,suffix:"k"}];for(const{unit:r,suffix:l}of s)if(o>=r)return`${t}${Math.floor(o/r)}${l}`;return`${t}${o}`}function it(n){const e=Number(n);if(!Number.isFinite(e))return String(n);if(Math.abs(e)>=10){const r=ge(e);return/[A-Za-z]$/.test(r)?r:`${r}x`}let s=(Math.round(e*100)/100).toFixed(2);return s=s.replace(/0+$/,"").replace(/\.$/,""),`${s}x`}function oi(){const n=i.maxHealth;if(i.strength=bd(),i.maxHealth=yd(),n>0){const e=i.health/n;i.health=Math.floor(i.maxHealth*e)}else i.health=i.maxHealth}function Md(){var T,R,V,w,x;const n=Bn(),e=vr(),t=Li(i.ageMonths),o=Li(i.expectedLifespanMonths),s=Zs(),r=!!(e&&Number.isFinite(e.cost)&&e.cost>0&&i.qi>=e.cost),l=i.isDemonPath?`Demonic Major Realm ${M(i.cultivationMajorIndex)+1} — ${n.major} ${n.sub}`:`${n.major} ${n.sub}`,a=Number.isFinite((T=n==null?void 0:n.data)==null?void 0:T.qiMult)?n.data.qiMult:1,c=Math.max(1.1,a),u=Number.isFinite((R=i.sectMultipliers)==null?void 0:R.qi)?i.sectMultipliers.qi:1,d=Ea(1);let f=0;e.cost?f=Math.min(i.qi/e.cost*100,100):f=100;let p="";if(e.type==="breakthrough"){const $=(i.isDemonPath?hr:dr)[i.cultivationMajorIndex+1];p=$?`${$.major} I`:"MAX REALM"}else if(e.type==="advancement"){const q=i.cultivationSubIndex+1,$=["I","II","III","IV","V","VI","VII","VIII","IX"];p=`${n.major} ${$[q]}`}else p="MAX REALM";const v=Number(i.qi)||0,b=Number.isFinite(e==null?void 0:e.cost)?e.cost:null,y=b!==null?Math.max(0,b-v):0,g=Math.max(1e-9,Ea(1)),h=b!==null?Math.ceil(y/g):0,C=Math.floor(h/60),m=h%60,S=b===null?"MAX":`${C} minutes and ${m} seconds`,L=String(((V=i.equipped)==null?void 0:V.manual)||"");return`
    <div class="cultivation-panel">
      <div class="cultivation-top">
        <div class="cultivation-left">
          <div class="cultivation-silhouette-container" onmouseenter="window.setCultivationMultiplierPeek(true)" onmouseleave="window.setCultivationMultiplierPeek(false)">
            <div class="cultivation-silhouette-base" aria-hidden="true"></div>
            <div class="cultivation-silhouette-fill ${i.isCultivating?"cultivating-active":""}"
                 style="--fill: ${f}%;" aria-hidden="true"></div>

            <div class="cultivation-box" aria-label="Cultivation Multipliers" onmouseenter="window.setCultivationMultiplierPeek(true)" onmouseleave="window.setCultivationMultiplierPeek(false)">
              <div class="cultivation-box-title">CULTIVATION</div>
              <div class="cultivation-box-rows">
                <div class="cultivation-box-row"><span>SPIRITUAL ROOTS:</span><span>${it(((w=i.spiritualRoots)==null?void 0:w.qiMult)||1)}</span></div>
                <div class="cultivation-box-row"><span>MANUAL TIER:</span><span>${ge(i.manualTier||0)}%</span></div>
                <div class="cultivation-box-row"><span>REALM:</span><span>${it(c)}</span></div>
                <div class="cultivation-box-row"><span>BLOODLINE:</span><span>${it(((x=i.bloodline)==null?void 0:x.qiMult)||1)}</span></div>
                <div class="cultivation-box-row"><span>QI BONUS:</span><span>${it((i.qiMultiplier||1)*tl())}</span></div>
                <div class="cultivation-box-row"><span>SECT MANUAL:</span><span>${it(u)}</span></div>
              </div>
              <div class="cultivation-box-total">TOTAL: ${it(d)}</div>
            </div>
          </div>

          <button onclick="window.toggleCultivate()" ${(!s||r)&&!i.isCultivating?"disabled":""} class="cultivate-btn ${i.isCultivating?"cultivating":""}">
            ${i.isCultivating?"CULTIVATING...":"CULTIVATE"}
          </button>
        </div>

        <div class="cultivation-meta" aria-label="Cultivation Status">
          <div class="meta-row"><span class="meta-label">Realm:</span><span class="meta-value">${l}</span></div>
          <div class="meta-row"><span class="meta-label">Age:</span><span class="meta-value">${t.years} year(s), ${t.months} month(s)</span></div>
          <div class="meta-row"><span class="meta-label">Current Manual:</span><span class="meta-value">${Te(L||"None")}</span></div>
          <div class="meta-row"><span class="meta-label">Current Qi Amount:</span><span class="meta-value">${ge(v)}</span></div>
          <div class="meta-row"><span class="meta-label">Qi Multiplication Rate:</span><span class="meta-value">${it(d)}</span></div>
          <div class="meta-row"><span class="meta-label">Needed Qi Amount:</span><span class="meta-value">${b===null?"MAX":ge(b)}</span></div>
          <div class="meta-row"><span class="meta-label">Expected Lifespan:</span><span class="meta-value">${o.years} years</span></div>
          <div class="meta-row"><span class="meta-label">Time Left:</span><span class="meta-value">${S}</span></div>
        </div>
      </div>

      <div class="cultivation-actions-row">
        ${e.cost?`
          <button onclick="window.advanceRealm()" ${i.qi<e.cost||e.type==="breakthrough"&&i.cultivationMajorIndex===0&&!i.hasManual?"disabled":""}>
            ${e.type==="breakthrough"?"Breakthrough":"Advance"} to ${p} (${ge(e.cost)} Qi)
          </button>
          ${e.type==="breakthrough"&&i.cultivationMajorIndex===0&&!i.hasManual?'<div class="cultivation-warn">Requires cultivation manual</div>':""}
        `:'<div class="max-realm">Maximum Realm Achieved!</div>'}
      </div>
    </div>
  `}window.setCultivationMultiplierPeek=n=>{const e=!!n,t=document.querySelector(".cultivation-panel");if(t){if(window.__cultivationPeekOffTimer||(window.__cultivationPeekOffTimer=null),e){window.__cultivationPeekOffTimer&&(clearTimeout(window.__cultivationPeekOffTimer),window.__cultivationPeekOffTimer=null),t.classList.add("cultivation-mults-peek");return}window.__cultivationPeekOffTimer&&clearTimeout(window.__cultivationPeekOffTimer),window.__cultivationPeekOffTimer=setTimeout(()=>{try{t.classList.remove("cultivation-mults-peek")}catch{}window.__cultivationPeekOffTimer=null},70)}};function su(n){if(n!=null&&n.imageSrc)return String(n.imageSrc);const e=String((n==null?void 0:n.name)||"");if(e==="Demonic Manual"||e==="Demon Monarch Manual"||e==="Demon Monarch Manual (Tier 1)")return"assets/Demonic_manual.png";if(e==="Hidden Heavenly Demon Manual"||e==="Heavenly Demon Manual")return"assets/Heavenly_demon_manual.png";const t=e.match(/^(.*) Manual \(Tier \d+\)$/);return t?`assets/${String(t[1]||"").trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")}-manual.png`:{"Beginner Cultivation Manual":"assets/cloud-manual.png","Demonic Manual":"assets/Demonic_manual.png","Hidden Heavenly Demon Manual":"assets/Heavenly_demon_manual.png","Orthodox Manual":"assets/Orthodox_manual.png","Farming Tools":"assets/rusted-pickaxe.png","Rusted Axe":"assets/rusted-axe.png","Normal Axe":"assets/silver-axe.png","Legendary Axe":"assets/thunder-axe.png","Mysterious Herb":"assets/grass.png",Ginseng:"assets/grass.png","Spirit Grass":"assets/grass.png","Bloody Root":"assets/grass.png","Snow Lotus":"assets/grass.png","Jade Leaf":"assets/grass.png",Moonflower:"assets/grass.png",Dragonwort:"assets/grass.png","Herb Pill":"assets/herb_pill.png","Qi Gathering Pill":"assets/qi_pill.png"}[e]||""}function _b(n){const e=String((n==null?void 0:n.name)||"");if(e==="Farming Tools")return["Copper gained from selling crops: +50%"];if(e==="Normal Axe")return["Silver gained from selling wood: +50%"];if(e==="Legendary Axe")return["Silver gained from selling wood: +70%"];if(e==="Mysterious Herb")return["Qi gain: +20%"];if(e==="Qi Gathering Pill")return["Use: Instantly grants 500 Qi"];if((n==null?void 0:n.kind)==="pill"||e==="Herb Pill"){const t=String((n==null?void 0:n.pillFile)||"");return t==="qi_pill.png"||e==="Qi Pill"?["Use: Instantly grants 120 Qi"]:t==="herb_pill.png"||e==="Herbal Pill"||e==="Herb Pill"?["Use: Instantly grants 25 Qi"]:t==="breakthrough_pill.png"||e==="Breakthrough Pill"?["Use: Instantly grants 200 Qi"]:t==="iron_body_pill.png"||e==="Iron Body Pill"?["Use: Instantly grants 40 Qi","Bonus: +10 Max HP"]:t==="ying_yang_pill.png"||e==="Ying-Yang Pill"?["Use: Instantly grants 30 Qi","Bonus: Fully heals you"]:t==="angel_pill.png"||e==="Angel Pill"?["Use: Instantly grants 60 Qi","Bonus: Fully heals you","Bonus: +1 fate reroll"]:t==="lightning_pill.png"||e==="Lightning Pill"?["Use: Instantly grants 80 Qi","Bonus: +1 stamina"]:t==="demon_pill.png"||e==="Demon Pill"?["Use: Instantly grants 250 Qi"]:t==="corruption_pill.png"||e==="Corruption Pill"?["Use: Instantly grants 180 Qi"]:t==="death_pill.png"||e==="Death Pill"?["Use: Instantly grants 500 Qi"]:["Use: Instantly grants Qi"]}return e.endsWith("Manual (Tier 1)")?["Unlocks manual moves (Tier 1)"]:e==="Beginner Cultivation Manual"?["Allows major realm breakthroughs"]:[]}function _d(n){const e=String((n==null?void 0:n.name)||"");return e.includes("Axe")||e==="Farming Tools"?"tool":e.includes("Manual")?"manual":null}function Sd(n){const e=String((n==null?void 0:n.name)||"");return e==="Qi Gathering Pill"||e==="Mysterious Herb"||e==="Herb Pill"||(n==null?void 0:n.kind)==="pill"}function xd(){var e;i.copperMultiplier=1,i.silverMultiplier=1;const n=(e=i.equipped)==null?void 0:e.tool;n==="Farming Tools"&&(i.copperMultiplier=1.5),n==="Normal Axe"&&(i.silverMultiplier=1.5),n==="Legendary Axe"&&(i.silverMultiplier=1.7)}window.selectInventoryItem=n=>{const e=Number(n);Number.isFinite(e)&&(i.selectedInventoryIndex=e,N(),U())};window.equipInventoryItem=n=>{const e=Number(n),o=(Array.isArray(i.inventory)?i.inventory:[])[e];if(!o)return;const s=_d(o);s&&((!i.equipped||typeof i.equipped!="object")&&(i.equipped={tool:null,manual:null}),i.equipped[s]=String(o.name||""),xd(),s==="manual"&&String(o.name||"")==="Demonic Manual"&&(i.hasJoinedSect&&(O("Your demonic ways will not be tolerated in this sect! BE GONE!"),i.demonExileReturnPhase=i.phase,i.phase="DEMON_EXILE"),Qa(),i.demonMonarchOnly=!0,i.sectJoinPickerOpen=!1,i.sectRankPyramidOpen=!1),N(),U())};window.dismissDemonExile=()=>{i.phase=i.demonExileReturnPhase||"FARMING",i.demonExileReturnPhase=null,N(),U()};window.useInventoryItem=n=>{const e=Number(n),t=Array.isArray(i.inventory)?i.inventory:[],o=t[e];if(!o||!Sd(o))return;const s=String(o.name||"");if(o.kind==="pill"||s==="Qi Gathering Pill"||s==="Herb Pill"){const l=String(o.pillFile||""),a=s;let c=10,u=!1,d=0,f=0,p=0;a==="Qi Gathering Pill"?c=500:l==="qi_pill.png"||a==="Qi Pill"?c=120:l==="herb_pill.png"||a==="Herbal Pill"||a==="Herb Pill"?c=25:l==="breakthrough_pill.png"||a==="Breakthrough Pill"?c=200:l==="iron_body_pill.png"||a==="Iron Body Pill"?(c=40,p=10):l==="ying_yang_pill.png"||a==="Ying-Yang Pill"?(c=30,u=!0):l==="angel_pill.png"||a==="Angel Pill"?(c=60,u=!0,f=1):l==="lightning_pill.png"||a==="Lightning Pill"?(c=80,d=1):l==="demon_pill.png"||a==="Demon Pill"?(c=250,typeof i.corruption=="number"&&(i.corruption=M(i.corruption)+1)):l==="corruption_pill.png"||a==="Corruption Pill"?(c=180,typeof i.corruption=="number"&&(i.corruption=M(i.corruption)+2)):(l==="death_pill.png"||a==="Death Pill")&&(c=500,i.health=Math.max(1,M(i.health)),i.health=1),p>0&&(i.maxHealth=M(i.maxHealth)+p,i.health=Math.min(M(i.maxHealth),M(i.health))),u&&(i.health=M(i.maxHealth)),d>0&&(i.stamina=Math.min(M(i.maxStamina),M(i.stamina)+d)),f>0&&(i.rerollsRemaining=M(i.rerollsRemaining)+f),i.qi=(Number(i.qi)||0)+c,O(`You consume ${a}. +${c} Qi.`),p>0&&O(`Your body hardens. +${p} Max HP.`),u&&O("Your wounds knit closed."),d>0&&O(`You feel energized. +${d} stamina.`),f>0&&O(`Fate stirs. +${f} reroll.`)}else s==="Mysterious Herb"&&(i.qiMultiplier=1.2,O("You consume the Mysterious Herb. Qi gain permanently increased by 20%!"));const r=Number(o.quantity)||1;r<=1?(t.splice(e,1),i.selectedInventoryIndex===e&&(i.selectedInventoryIndex=null),i.selectedInventoryIndex!==null&&i.selectedInventoryIndex>e&&(i.selectedInventoryIndex-=1)):o.quantity=r-1,i.inventory=t,N(),U()};function N(){Jy();try{Ks()}catch{}const n=document.getElementById("app");try{document.body.classList.toggle("phase-intro-loading",i.phase==="INTRO_LOADING")}catch{}i.phase==="FATE_ROLL"?n.classList.add("app-wide"):n.classList.remove("app-wide");let e=document.getElementById("app-root");e||(e=document.createElement("div"),e.id="app-root",e.className="main-container",n.appendChild(e));let t=document.getElementById("app-content");if(t||(t=document.createElement("div"),t.id="app-content",e.appendChild(t)),i.activeSidePanels instanceof Set||(Array.isArray(i.activeSidePanels)?i.activeSidePanels=new Set(i.activeSidePanels):i.activeSidePanels=new Set),i.phase==="INTRO_LOADING")bb(t);else if(i.phase==="FATE_ROLL")Wb(t);else if(i.phase==="FARMING")$b(t);else if(i.phase==="FAKE_IMMORTAL")jb(t);else if(i.phase==="STORY_DIALOG"){ny(t);try{i.storyDialog&&typeof i.storyDialog=="object"&&!i.storyDialog.done&&ro()}catch{}}else i.phase==="DEMON_EXILE"?sy(t):i.phase==="WOOD"?ry(t):i.phase==="COMBAT"&&ly(t);if(Qd(),wd(),i.phase!=="FATE_ROLL"&&i.phase!=="INTRO_LOADING"&&i.phase!=="STORY_DIALOG")Ab(),Tb();else{const r=document.getElementById("side-panel-toggles");r&&r.remove();const l=document.getElementById("stats-panel");l&&l.remove();const a=document.getElementById("inventory-panel");a&&a.remove();const c=document.getElementById("actions-panel");c&&(Vt(c),c.remove())}const o=document.getElementById("dev-reset-container");o&&o.remove();const s=document.getElementById("reset-modal");if(s&&s.remove(),i.showRebirthNodeModal)xb();else{const r=document.getElementById("rebirth-node-modal");r&&r.remove()}}function Sb(){return document.getElementById("app-root")||document.getElementById("app")}function wd(){const n=Sb();if(!n)return null;n.classList.contains("main-container")||n.classList.add("main-container");let e=n.querySelector("#side-panels-overlay");return e||(e=document.createElement("div"),e.id="side-panels-overlay",e.className="side-panels-overlay",n.appendChild(e)),e}function Qt(){return wd()||document.body}const er=new WeakMap,ru=Object.create(null);function bn(n,e){const t=i.panelSizes&&i.panelSizes[e];!t||typeof t!="object"||(Number.isFinite(t.w)&&(n.style.width=`${t.w}px`),Number.isFinite(t.h)&&(n.style.height=`${t.h}px`))}function Vt(n){var t,o;const e=er.get(n);if(e){try{(o=(t=e.ro)==null?void 0:t.disconnect)==null||o.call(t)}catch{}er.delete(n)}}function yn(n,e){var r;if(er.has(n))return;let t=!1;const o=()=>{t=!0};n.addEventListener("pointerdown",o,{passive:!0});const s=typeof ResizeObserver<"u"?new ResizeObserver(()=>{if(!t)return;const l=n.offsetWidth,a=n.offsetHeight;if(!Number.isFinite(l)||!Number.isFinite(a))return;(!i.panelSizes||typeof i.panelSizes!="object")&&(i.panelSizes={});const c=i.panelSizes[e]||{};c.w===l&&c.h===a||(i.panelSizes[e]={w:l,h:a},clearTimeout(ru[e]),ru[e]=setTimeout(()=>{try{U()}catch{}},250))}):null;(r=s==null?void 0:s.observe)==null||r.call(s,n),er.set(n,{ro:s})}function Cd(n){const e=String(n||"");return{start:"assets/ying_yang_pill.png",reroll:"assets/Orthodox_manual.png",bias1:"assets/gold-coin.png",bias2:"assets/silver-coin.png",bias3:"assets/copper-coin.png",min2:"assets/grass.png",min3:"assets/grass-manual.png",max6:"assets/rock.png",max7:"assets/space.png",reset:"assets/breakthrough_pill.png",qi_mult:"assets/ki.png",herb_speed:"assets/grass.png",herb_multi:"assets/spiritstone-low.png",auto_gather:"assets/rusted-pickaxe.png",auto_craft:"assets/herb_pill.png",pill_speed:"assets/qi_pill.png",str_mult:"assets/gold-sword.png",hp_mult:"assets/iron_body_pill.png",special_cd:"assets/battery.png",repeat_speed:"assets/rusted-axe.png",min_roots_plus:"assets/grass-manual.png",root_luck:"assets/space.png",max_roots_plus:"assets/rock.png",more_rerolls:"assets/Orthodox_manual.png",bloodline_luck:"assets/gold-coin.png",multi_affinity_luck:"assets/ki.png",affinity_alignment:"assets/Pentagram.png",story_luck:"assets/battery.png",spiritstone_rp:"assets/spiritstone-high.png",quest_drop:"assets/gold-sword.png"}[e]||"assets/qi_pill.png"}function ca(n){const e=String(n||""),t=ht(i.rebirthUpgrades);i.rebirthUpgrades=t;const o=M(t.resetUnlockProgress),s=Math.min(100,o+10),r=5,l=Qs(),a=tl(),c=ab(),u=M(t.herbGatherSpeedLevel),d=u*5,f=qe(u),p=M(t.herbMultiGatherLevel),v=p*10,b=1+Math.floor(p/10),y=qe(p),g=M(t.strengthMultiplierLevel),h=1+.1*g,C=qe(g),m=M(t.healthMultiplierLevel),S=1+.1*m,L=qe(m),T=M(t.specialCooldownLevel),R=.5*T,V=qe(T),w=M(t.repeatableSpeedLevel),x=.25*w,q=qe(w),$=M(t.autoGatherLevel),ue=$*5,D=ue>=100,X=qe($),z=M(t.autoCraftLevel),Q=z*5,J=Q>=100,le=qe(z),oe=M(t.pillCraftSpeedLevel),de=.25*oe,ve=qe(oe),B=M(t.minRootBonusLevel),j=qe(B),re=M(t.minRootCount)+B,Me=M(t.rootLuckLevel),Ae=qe(Me),ae=M(t.maxRootBonusLevel),P=qe(ae),k=Math.max(re,M(t.maxRootCount)+ae),G=M(t.extraRerollsLevel),I=qe(G),ne=M(t.bloodlineLuckLevel),ie=qe(ne),ye=M(t.multiAffinityLuckLevel),be=qe(ye),Be=M(t.affinityAlignmentLuckLevel),Ie=qe(Be),A=M(t.storyLuckLuckLevel),_=qe(A),W=M(t.spiritStoneRpMultLevel),he=el(),ce=qe(W,3),se=M(t.questDropChanceLevel),Ee=se*1,_e=qe(se);return{start:{id:"start",name:"Rebirth",description:"The origin of your fate blessings.",cost:0,prereq:[],purchased:!0,canBuy:()=>!1},qi_mult:{id:"qi_mult",name:"Qi Multiplier",description:`Permanently increases your Qi gain multiplier. Current: ${it(a)} (level ${l}). Each purchase adds +0.2×.`,cost:c,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{const Fe=Qs()+1;t.qiMultiplierLevel=Math.max(t.qiMultiplierLevel,Fe)},levelText:()=>`Level: ${l}`,nextText:()=>`Next: ${it(1+.2*(l+1))}`},herb_speed:{id:"herb_speed",name:"Faster Herb Gathering",description:`Herb gathering becomes faster. Current: +${ge(d)}% (level ${u}). Each purchase adds +5%.`,cost:f,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.herbGatherSpeedLevel=u+1},levelText:()=>`Speed: +${ge(d)}%`,nextText:()=>`Next: +${ge(d+5)}%`},herb_multi:{id:"herb_multi",name:"Gather Multiple Herbs",description:`Increases the number of herbs gathered per completion. Current: +${ge(v)}% (level ${p}) → ${ge(b)} herb(s)/gather. Each purchase adds +10%. At 100% you gather 2, at 200% you gather 3, etc.`,cost:y,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.herbMultiGatherLevel=p+1},levelText:()=>`Per gather: ${ge(b)} herb(s)`,nextText:()=>`Next: +${ge(v+10)}%`},auto_gather:{id:"auto_gather",name:"Auto Gather Herbs",description:`Progress: ${ge(ue)}% (level ${$}). Each purchase adds +5%. At 100% you unlock Auto Gather. Faster gathering + multi-gather apply to auto gather.`,cost:X,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.autoGatherLevel=$+1},levelText:()=>D?"Status: UNLOCKED":`Status: LOCKED (${ge(ue)}%)`,nextText:()=>`Next: ${ge(ue+5)}%`},auto_craft:{id:"auto_craft",name:"Auto Pill Crafting",description:`Progress: ${ge(Q)}% (level ${z}). Each purchase adds +5%. At 100% you unlock Auto Craft and can select a pill to craft automatically.`,cost:le,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.autoCraftLevel=z+1},levelText:()=>J?"Status: UNLOCKED":`Status: LOCKED (${ge(Q)}%)`,nextText:()=>`Next: ${ge(Q+5)}%`},pill_speed:{id:"pill_speed",name:"Faster Pill Crafting",description:`Reduces pill crafting time. Current: -${de.toFixed(2)}s (level ${oe}). Each purchase reduces by 0.25s. Applies to auto crafting.`,cost:ve,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.pillCraftSpeedLevel=oe+1},levelText:()=>`Craft time: -${de.toFixed(2)}s`,nextText:()=>`Next: -${(de+.25).toFixed(2)}s`},str_mult:{id:"str_mult",name:"Strength Multiplier",description:`Permanently increases Strength. Current: ${it(h)} (level ${g}). Each purchase adds +0.1×.`,cost:C,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.strengthMultiplierLevel=g+1},levelText:()=>`Strength: ${it(h)}`,nextText:()=>`Next: ${it(1+.1*(g+1))}`},hp_mult:{id:"hp_mult",name:"Health Multiplier",description:`Permanently increases Max Health. Current: ${it(S)} (level ${m}). Each purchase adds +0.1×.`,cost:L,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.healthMultiplierLevel=m+1},levelText:()=>`Health: ${it(S)}`,nextText:()=>`Next: ${it(1+.1*(m+1))}`},special_cd:{id:"special_cd",name:"Faster Special Action Cooldowns",description:`Reduces special action cooldowns. Current: -${R.toFixed(1)}s (level ${T}). Each purchase reduces by 0.5s.`,cost:V,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.specialCooldownLevel=T+1},levelText:()=>`Cooldowns: -${R.toFixed(1)}s`,nextText:()=>`Next: -${(R+.5).toFixed(1)}s`},repeat_speed:{id:"repeat_speed",name:"Faster Repeatable Actions",description:`Repeatable actions complete faster. Current: -${x.toFixed(2)}s (level ${w}). Each purchase reduces by 0.25s.`,cost:q,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.repeatableSpeedLevel=w+1},levelText:()=>`Duration: -${x.toFixed(2)}s`,nextText:()=>`Next: -${(x+.25).toFixed(2)}s`},min_roots_plus:{id:"min_roots_plus",name:"Increase Minimum Roots",description:`Increases the minimum spiritual roots you can roll. Current bonus: +${ge(B)} (effective min ${ge(re)}). Each purchase adds +1.`,cost:j,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.minRootBonusLevel=B+1},levelText:()=>`Bonus: +${ge(B)}`,nextText:()=>`Next bonus: +${ge(B+1)}`},root_luck:{id:"root_luck",name:"Increase Root Luck",description:`Increases your luck of rolling more spiritual roots within your min/max range. Current: +${ge(Me)} luck (level ${Me}). Each purchase adds +1.`,cost:Ae,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.rootLuckLevel=Me+1},levelText:()=>`Luck: +${ge(Me)}`,nextText:()=>`Next: +${ge(Me+1)}`},max_roots_plus:{id:"max_roots_plus",name:"Increase Maximum Roots",description:`Increases the maximum spiritual roots you can roll. Current bonus: +${ge(ae)} (effective max ${ge(k)}). Each purchase adds +1.`,cost:P,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.maxRootBonusLevel=ae+1},levelText:()=>`Bonus: +${ge(ae)}`,nextText:()=>`Next bonus: +${ge(ae+1)}`},more_rerolls:{id:"more_rerolls",name:"More Fate Rerolls",description:`Grants +1 additional fate reroll per purchase. Current bonus purchased: +${ge(G)}.`,cost:I,prereq:["reroll"],purchased:!1,canBuy:()=>!0,apply:()=>{t.extraRerollsLevel=G+1},levelText:()=>`Bonus rerolls: +${ge(G)}`,nextText:()=>`Next: +${ge(G+1)}`},bloodline_luck:{id:"bloodline_luck",name:"Better Bloodline Luck",description:`Increases your luck of rolling better bloodlines. Current: +${ge(ne)} luck (level ${ne}). Each purchase adds +1.`,cost:ie,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.bloodlineLuckLevel=ne+1},levelText:()=>`Luck: +${ge(ne)}`,nextText:()=>`Next: +${ge(ne+1)}`},multi_affinity_luck:{id:"multi_affinity_luck",name:"Multiple Affinity Luck",description:`Increases your luck of rolling multiple affinities. Current: +${ge(ye)} luck (level ${ye}). Each purchase adds +1.`,cost:be,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.multiAffinityLuckLevel=ye+1},levelText:()=>`Luck: +${ge(ye)}`,nextText:()=>`Next: +${ge(ye+1)}`},affinity_alignment:{id:"affinity_alignment",name:"Higher Affinity Alignment",description:`Each purchase adds +1% chance for higher affinity alignment (higher affinity scores). Current: +${ge(Be)}%.`,cost:Ie,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.affinityAlignmentLuckLevel=Be+1},levelText:()=>`Chance: +${ge(Be)}%`,nextText:()=>`Next: +${ge(Be+1)}%`},story_luck:{id:"story_luck",name:"Higher Story Luck",description:`Each purchase adds +5% chance to roll higher Story Luck. Current: +${ge(A*5)}%.`,cost:_,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.storyLuckLuckLevel=A+1},levelText:()=>`Chance: +${ge(A*5)}%`,nextText:()=>`Next: +${ge((A+1)*5)}%`},spiritstone_rp:{id:"spiritstone_rp",name:"More RP from Spirit Stones",description:`Increases rebirth points gained from spirit stones (per 500 of any grade). Current multiplier: ${it(he)}. Each purchase adds +2×. Cost scales by 3× per level.`,cost:ce,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.spiritStoneRpMultLevel=W+1},levelText:()=>`Multiplier: ${it(he)}`,nextText:()=>`Next: ${it(1+2*(W+1))}`},quest_drop:{id:"quest_drop",name:"Higher Quest Drop Chance",description:`Increases item drop rate for quests that can drop bonus items. Current: +${ge(Ee)}%. Each purchase adds +1%.`,cost:_e,prereq:["start"],purchased:!1,canBuy:()=>!0,apply:()=>{t.questDropChanceLevel=se+1},levelText:()=>`Bonus: +${ge(Ee)}%`,nextText:()=>`Next: +${ge(Ee+1)}%`},reroll:{id:"reroll",name:"Reroll Fate",description:"Unlocks the ability to reroll your starting fate.",cost:20,prereq:["start"],purchased:!!t.canRerollFate,canBuy:()=>!t.canRerollFate,apply:()=>{t.canRerollFate=!0}},bias1:{id:"bias1",name:"Bloodline Bias I",description:"Increases your odds of better bloodlines.",cost:5,prereq:["reroll"],purchased:t.bloodlineBias>=.1,canBuy:()=>t.bloodlineBias<.1,apply:()=>{t.bloodlineBias=Math.max(t.bloodlineBias,.1)}},bias2:{id:"bias2",name:"Bloodline Bias II",description:"Further increases your odds of better bloodlines.",cost:12,prereq:["bias1"],purchased:t.bloodlineBias>=.25,canBuy:()=>t.bloodlineBias<.25,apply:()=>{t.bloodlineBias=Math.max(t.bloodlineBias,.25)}},bias3:{id:"bias3",name:"Bloodline Bias III",description:"Greatly increases your odds of better bloodlines.",cost:25,prereq:["bias2"],purchased:t.bloodlineBias>=.5,canBuy:()=>t.bloodlineBias<.5,apply:()=>{t.bloodlineBias=Math.max(t.bloodlineBias,.5)}},min2:{id:"min2",name:"Minimum Roots II",description:"Guarantees at least 2 spiritual roots.",cost:8,prereq:["start"],purchased:t.minRootCount>=2,canBuy:()=>t.minRootCount<2,apply:()=>{t.minRootCount=Math.max(t.minRootCount,2),t.maxRootCount<t.minRootCount&&(t.maxRootCount=t.minRootCount)}},min3:{id:"min3",name:"Minimum Roots III",description:"Guarantees at least 3 spiritual roots.",cost:16,prereq:["min2"],purchased:t.minRootCount>=3,canBuy:()=>t.minRootCount<3,apply:()=>{t.minRootCount=Math.max(t.minRootCount,3),t.maxRootCount<t.minRootCount&&(t.maxRootCount=t.minRootCount)}},max6:{id:"max6",name:"Maximum Roots VI",description:"Raises your maximum spiritual roots to 6.",cost:10,prereq:["start"],purchased:t.maxRootCount>=6,canBuy:()=>t.maxRootCount<6,apply:()=>{t.maxRootCount=Math.max(t.maxRootCount,6)}},max7:{id:"max7",name:"Maximum Roots VII",description:"Raises your maximum spiritual roots to 7.",cost:18,prereq:["max6"],purchased:t.maxRootCount>=7,canBuy:()=>t.maxRootCount<7,apply:()=>{t.maxRootCount=Math.max(t.maxRootCount,7)}},reset:{id:"reset",name:"Reset Unlock",description:o>=100?"Reset is fully unlocked.":`Progress toward unlocking Reset in Settings. Upgrade to ${s}% each purchase.`,cost:o>=100?0:r,prereq:["bias3","max7"],purchased:o>=100,canBuy:()=>o<100,apply:()=>{t.resetUnlockProgress=Math.max(t.resetUnlockProgress,s)},levelText:()=>`Progress: ${o}%`,nextText:()=>`Next: ${s}%`}}[e]||{id:e,name:e,description:"Coming soon.",cost:0,prereq:[],purchased:!1,canBuy:()=>!1}}window.openRebirthNodeModal=n=>{const e=String(n||"");if(e){i.rebirthNodeModalId=e,i.showRebirthNodeModal=!0,N();try{U()}catch{}}};window.closeRebirthNodeModal=()=>{i.showRebirthNodeModal=!1,i.rebirthNodeModalId=null,N();try{U()}catch{}};window.buyRebirthNodeFromModal=()=>{const n=String(i.rebirthNodeModalId||"");n&&(window.buyRebirthNode(n),i.showRebirthNodeModal=!0,N())};function xb(){let n=document.getElementById("rebirth-node-modal");n||(n=document.createElement("div"),n.id="rebirth-node-modal",n.className="modal-overlay",document.body.appendChild(n));const e=String(i.rebirthNodeModalId||""),t=ca(e),o=M(i.rebirthPoints||0),s=Array.isArray(t.prereq)?t.prereq:[],r=y=>!!ca(y).purchased,l=s.some(y=>!r(y)),a=M(t.cost),c=o>=a,u=typeof t.canBuy=="function"?!!t.canBuy():!0,d=l||a<=0||!c||!u,f=Te(String(Cd(t.id))),p=typeof t.levelText=="function"?String(t.levelText()||""):"",v=typeof t.nextText=="function"?String(t.nextText()||""):"",b=s.length?`Requires: ${s.map(y=>Te(String(ca(y).name||y))).join(", ")}`:"";n.innerHTML=`
    <div class="modal-content">
      <div class="rebirth-node-modal-top">
        <img class="rebirth-node-icon" src="${f}" alt="" />
        <h2>${Te(String(t.name||"Node"))}</h2>
      </div>
      <p>${Te(String(t.description||""))}</p>
      ${p?`<p><strong>${Te(p)}</strong></p>`:""}
      ${v?`<p><strong>${Te(v)}</strong></p>`:""}
      ${b?`<p class="muted">${b}</p>`:""}
      <p><strong>Cost:</strong> ${ge(a)} RP</p>
      <div class="modal-buttons">
        <button onclick="window.buyRebirthNodeFromModal()" class="reset-button" ${d?"disabled":""}>Buy</button>
        <button onclick="window.closeRebirthNodeModal()" class="cancel-button">Close</button>
      </div>
    </div>
  `}const wb=Object.freeze(["Short","Tall","Funny","Ugly","Hot","Intelligent","Dumb","Capable","Disabled","Smelly","Aromatic","Romantic","Chud"]);function Cb(){const n=1+Math.floor(Math.random()*5),e=[];Math.random()<.01&&e.push("Hot");const o=n-e.length;if(o<=0)return e;const s=wb.filter(r=>r!=="Hot");for(let r=s.length-1;r>0;r--){const l=Math.floor(Math.random()*(r+1)),a=s[r];s[r]=s[l],s[l]=a}return e.concat(s.slice(0,o))}function Ad(){if((!i.characterProfile||typeof i.characterProfile!="object")&&(i.characterProfile={attributes:null}),!Array.isArray(i.characterProfile.attributes)||i.characterProfile.attributes.length===0){i.characterProfile.attributes=Cb();try{U()}catch{}}}function Ab(){let n=document.getElementById("side-panel-toggles");n||(n=document.createElement("div"),n.id="side-panel-toggles",n.className="side-panel-toggles",document.body.appendChild(n)),n.classList.toggle("has-conquered",!!i.cloudConqueredSectsUnlocked),n.innerHTML=`
    <button class="panel-toggle-btn ${i.activeSidePanels.has("stats")?"active":""}" onclick="window.toggleSidePanel('stats')" title="Stats">
      📊
    </button>
    <button class="panel-toggle-btn ${i.activeSidePanels.has("inventory")?"active":""}" onclick="window.toggleSidePanel('inventory')" title="Inventory">
      🎒
    </button>
    <button class="panel-toggle-btn ${i.activeSidePanels.has("actions")?"active":""}" onclick="window.toggleSidePanel('actions')" title="Actions">
      ⚔️
    </button>
    <button class="panel-toggle-btn ${i.activeSidePanels.has("herbalism")?"active":""}" onclick="window.toggleSidePanel('herbalism')" title="Herbalism">
      🌿
    </button>
    <button class="panel-toggle-btn ${i.activeSidePanels.has("settings")?"active":""}" onclick="window.toggleSidePanel('settings')" title="Settings">
      ⚙️
    </button>
    <button class="panel-toggle-btn ${i.activeSidePanels.has("quests")?"active":""}" onclick="window.toggleSidePanel('quests')" title="Quests">
      📜
    </button>
    <button class="panel-toggle-btn ${i.activeSidePanels.has("profile")?"active":""}" onclick="window.toggleSidePanel('profile')" title="Character Profile">
      👤
    </button>
    <button class="panel-toggle-btn ${i.activeSidePanels.has("sect")?"active":""}" onclick="window.toggleSidePanel('sect')" title="Sect">
      🏯
    </button>
    <button class="panel-toggle-btn ${i.activeSidePanels.has("recipes")?"active":""}" onclick="window.toggleSidePanel('recipes')" title="Recipe Book">
      📖
    </button>
    <button class="panel-toggle-btn ${i.activeSidePanels.has("moves")?"active":""}" onclick="window.toggleSidePanel('moves')" title="Moves">
      🥋
    </button>
    <button class="panel-toggle-btn ${i.activeSidePanels.has("shop")?"active":""}" onclick="window.toggleSidePanel('shop')" title="Shop">
      🛒
    </button>

    <button class="panel-toggle-btn ${i.activeSidePanels.has("leaderboards")?"active":""}" onclick="window.toggleSidePanel('leaderboards')" title="Leaderboards">
      🏆
    </button>

    ${i.cloudConqueredSectsUnlocked?`
      <button class="panel-toggle-btn ${i.activeSidePanels.has("conqueredSects")?"active":""}" onclick="window.toggleSidePanel('conqueredSects')" title="Conquered Sects">
        🚩
      </button>
    `:""}
  `}window.toggleSidePanel=function(n){if(i.activeSidePanels.has(n)){if(i.activeSidePanels.delete(n),n==="leaderboards")try{sl()}catch{}}else{if(i.activeSidePanels.add(n),n==="profile"&&Ad(),n==="shop"){try{Pi()}catch{}i.shopTab||(i.shopTab="town")}if(n==="leaderboards"){try{ii("open_panel")}catch{}try{Td()}catch{}try{window.refreshLeaderboards()}catch{}}}N()};function Tb(){const n=document.getElementById("stats-panel"),e=document.getElementById("inventory-panel"),t=document.getElementById("actions-panel"),o=document.getElementById("herbalism-panel"),s=document.getElementById("settings-panel"),r=document.getElementById("recipe-book-panel"),l=document.getElementById("profile-panel"),a=document.getElementById("sect-panel"),c=document.getElementById("quest-panel"),u=document.getElementById("moves-panel"),d=document.getElementById("shop-panel"),f=document.getElementById("conquered-sects-panel"),p=document.getElementById("leaderboards-panel"),v=document.getElementById("town-shop-panel"),b=document.getElementById("hour-shop-panel");n&&!i.activeSidePanels.has("stats")&&n.remove(),e&&!i.activeSidePanels.has("inventory")&&e.remove(),t&&!i.activeSidePanels.has("actions")&&(Vt(t),t.remove()),o&&!i.activeSidePanels.has("herbalism")&&(Vt(o),o.remove()),s&&!i.activeSidePanels.has("settings")&&(Vt(s),s.remove()),r&&!i.activeSidePanels.has("recipes")&&(Vt(r),r.remove()),l&&!i.activeSidePanels.has("profile")&&(Vt(l),l.remove()),a&&!i.activeSidePanels.has("sect")&&(Vt(a),a.remove()),c&&!i.activeSidePanels.has("quests")&&(Vt(c),c.remove()),u&&!i.activeSidePanels.has("moves")&&(Vt(u),u.remove()),d&&!i.activeSidePanels.has("shop")&&(Vt(d),d.remove()),f&&!i.activeSidePanels.has("conqueredSects")&&(Vt(f),f.remove()),p&&!i.activeSidePanels.has("leaderboards")&&(Vt(p),p.remove()),v&&(Vt(v),v.remove()),b&&(Vt(b),b.remove()),i.activeSidePanels.has("stats")&&Ib(),i.activeSidePanels.has("inventory")&&Pb(),i.activeSidePanels.has("actions")&&Id(),i.activeSidePanels.has("herbalism")&&Db(),i.activeSidePanels.has("settings")&&Vb(),i.activeSidePanels.has("recipes")&&Hb(),i.activeSidePanels.has("profile")&&Lb(),i.activeSidePanels.has("sect")&&Jv(),i.activeSidePanels.has("quests")&&Oy(),i.activeSidePanels.has("moves")&&Gy(),i.activeSidePanels.has("shop")&&jy(),i.activeSidePanels.has("conqueredSects")&&Rb(),i.activeSidePanels.has("leaderboards")&&Eb()}function Eb(){var y,g,h;let n=document.getElementById("leaderboards-panel");if(!n){n=document.createElement("div"),n.id="leaderboards-panel",n.className="draggable-panel stats-panel",bn(n,"leaderboards"),Qt().appendChild(n),yn(n,"leaderboards");const C=(y=i.panelPositions)==null?void 0:y.leaderboards;C&&(C.x!==0||C.y!==0)&&(n.style.transform=`translate(${C.x}px, ${C.y}px)`)}const e=ts(),t=!!(e!=null&&e.url&&(e!=null&&e.anonKey)),o=((g=i.leaderboards)==null?void 0:g.major)||{rows:[],loading:!1,error:"",fetchedAt:0},s=((h=i.leaderboards)==null?void 0:h.rebirth)||{rows:[],loading:!1,error:""},r=i.playerName&&String(i.playerName).trim()?String(i.playerName).trim():"",l=r?r.trim().toLowerCase():"";i.leaderboardsTab!=="major"&&i.leaderboardsTab!=="rebirth"&&(i.leaderboardsTab="major");const a=i.leaderboardsTab,c=!!(o.loading||s.loading),u=String(o.error||s.error||""),d=(C,m,S)=>{const L=String((C==null?void 0:C.username)||""),T=l&&L.trim().toLowerCase()===l,R=M(C==null?void 0:C.best_rebirth_points),V=M(C==null?void 0:C.best_major_index),w=!!(C!=null&&C.best_major_is_demon),x=C==null?void 0:C.best_major_sub_index,q=Number.isFinite(Number(x)),$=q?M(x):0,ue=q?ad(V,$,w):"",D=String((C==null?void 0:C.best_major_label)||""),X=ue||D||(V>=0?`Major Realm ${V+1}`:""),z=S==="rebirth"?ge(R):X;return`
      <div class="lb-row ${T?"is-self":""}">
        <div class="lb-rank">#${M(m)}</div>
        <div class="lb-namecell">
          <div class="lb-avatar" aria-hidden="true">${It("profile")}</div>
          <div class="lb-name">${Te(L||"Unknown")}</div>
        </div>
        <div class="lb-value">${Te(String(z||""))}</div>
      </div>
    `.trim()},f=Array.isArray(o.rows)?o.rows:[],p=Array.isArray(s.rows)?s.rows:[],b=(a==="rebirth"?p:f).map((C,m)=>d(C,m+1,a)).join("");if(n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'leaderboards-panel')">
      <h3>LEADERBOARD</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      ${t?"":`
        <div class="inventory-empty">Global leaderboards are not configured for this build.</div>
        <div class="settings-hint">
          Set <strong>VITE_SUPABASE_URL</strong> and <strong>VITE_SUPABASE_ANON_KEY</strong> (GitHub Actions secrets),
          or define <strong>window.__CS_SUPABASE_URL</strong> / <strong>window.__CS_SUPABASE_ANON_KEY</strong>,
          or set them in <strong>localStorage</strong>.
        </div>
        <div class="settings-hint" style="opacity:0.85">
          Status: URL=${e!=null&&e.url?"yes":"no"}; Key=${e!=null&&e.anonKey?"yes":"no"}; Source=${Te(String((e==null?void 0:e.source)||"none"))}
        </div>
      `}

      ${t?`
        ${u?`<div class="password-error" style="display:block; margin-top:8px;">${Te(u)}</div>`:""}

        <div class="leaderboards-tabs" role="tablist" aria-label="Leaderboard tabs">
          <button class="leaderboards-tab ${a==="major"?"active":""}" onclick="window.setLeaderboardsTab('major')" role="tab" aria-selected="${a==="major"?"true":"false"}">Cultivation LB</button>
          <button class="leaderboards-tab ${a==="rebirth"?"active":""}" onclick="window.setLeaderboardsTab('rebirth')" role="tab" aria-selected="${a==="rebirth"?"true":"false"}">Rebirth Points LB</button>
        </div>

        <div class="lb-table-header">
          <div class="lb-col lb-col-rank">Rank</div>
          <div class="lb-col lb-col-name">Name</div>
          <div class="lb-col lb-col-value">${a==="rebirth"?"Rebirth":"Cultivation"}</div>
        </div>

        <div class="lb-table" role="table" aria-label="Leaderboard">
          ${b||(c?'<div class="inventory-empty">Loading...</div>':'<div class="inventory-empty">No entries yet.</div>')}
        </div>
      `:""}
    </div>
  `,t){try{Td()}catch{}const C=Date.now(),m=M(o.fetchedAt);!c&&(!m||C-m>2e4)&&setTimeout(()=>{try{window.refreshLeaderboards()}catch{}},0)}else try{sl()}catch{}}let Fo=null;function Td(){Fo||(Fo=setInterval(()=>{var n,e,t;try{if(!i.activeSidePanels||!i.activeSidePanels.has("leaderboards")){sl();return}if(!_o()||!i.leaderboards||typeof i.leaderboards!="object"||(n=i.leaderboards.major)!=null&&n.loading||(e=i.leaderboards.rebirth)!=null&&e.loading)return;const o=M((t=i.leaderboards.major)==null?void 0:t.fetchedAt),s=Date.now();(!o||s-o>3e4)&&window.refreshLeaderboards()}catch{}},5e3))}function sl(){if(Fo){try{clearInterval(Fo)}catch{}Fo=null}}window.setLeaderboardsTab=n=>{var t,o;const e=String(n||"")==="rebirth"?"rebirth":"major";i.leaderboardsTab=e;try{_o()&&(M((o=(t=i.leaderboards)==null?void 0:t.major)==null?void 0:o.fetchedAt)||window.refreshLeaderboards())}catch{}N()};function Rb(){var o;sn();let n=document.getElementById("conquered-sects-panel");if(!n){n=document.createElement("div"),n.id="conquered-sects-panel",n.className="conquered-sects-panel draggable-panel",bn(n,"conqueredSects"),Qt().appendChild(n),yn(n,"conqueredSects");const s=(o=i.panelPositions)==null?void 0:o.conqueredSects;s&&(s.x!==0||s.y!==0)&&(n.style.transform=`translate(${s.x}px, ${s.y}px)`)}const e=Array.isArray(i.cloudConqueredSects)?i.cloudConqueredSects:[],t=e.length?e.map(s=>{const r=Hv(s),l=(r==null?void 0:r.name)||String(s||""),a=ja(s)||"";return`<div class="profile-trait">${a?`<img class="inline-asset-icon" src="${Te(a)}" alt="" aria-hidden="true">`:It("flag")} ${Te(String(l))}</div>`}).join(""):'<div class="inventory-empty">None conquered yet.</div>';n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'conquered-sects-panel')">
      <h3>${It("flag",{title:"Conquered Sects"})} Conquered Sects</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      ${t}
    </div>
  `}function Lb(){var o,s;Ad();let n=document.getElementById("profile-panel");if(!n){n=document.createElement("div"),n.id="profile-panel",n.className="profile-panel draggable-panel",bn(n,"profile"),Qt().appendChild(n),yn(n,"profile");const r=(o=i.panelPositions)==null?void 0:o.profile;r&&(r.x!==0||r.y!==0)&&(n.style.transform=`translate(${r.x}px, ${r.y}px)`)}const e=i.playerName&&i.playerName.trim()?i.playerName.trim():"Wanderer",t=Array.isArray((s=i.characterProfile)==null?void 0:s.attributes)?i.characterProfile.attributes:[];n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'profile-panel')">
      <h3>${It("profile",{title:"Character Profile"})} Character Profile</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      <div class="profile-name">${Te(e)}</div>
      <div class="profile-traits">
        ${t.map(r=>`<div class="profile-trait">• ${Te(r)}</div>`).join("")}
      </div>
    </div>
  `}function Ib(){var e;let n=document.getElementById("stats-panel");if(!n){n=document.createElement("div"),n.id="stats-panel",n.className="stats-panel draggable-panel",Qt().appendChild(n);const t=(e=i.panelPositions)==null?void 0:e.stats;t&&(t.x!==0||t.y!==0)&&(n.style.transform=`translate(${t.x}px, ${t.y}px)`)}n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'stats-panel')">
      <h3>${It("stats",{title:"Stats"})} Stats</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
    <div class="stat-item">
      <span class="stat-label"><img src="assets/battery.png" class="stat-icon" alt="Stamina"> Stamina:</span>
      <span class="stat-value">${ge(i.stamina)}/${ge(i.maxStamina)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Strength:</span>
      <span class="stat-value">${ge(i.strength)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Health:</span>
      <span class="stat-value">${ge(i.health)}/${ge(i.maxHealth)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="assets/ki.png" class="stat-icon" alt="Qi"> Qi:</span>
      <span class="stat-value">${ge(i.qi)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Luck:</span>
      <span class="stat-value">${ge(i.luck)}</span>
    </div>
    
    <div class="stat-divider"></div>
    <h4>Currencies</h4>
    
    <div class="stat-item">
      <span class="stat-label"><img src="assets/copper-coin.png" class="stat-icon" alt="Copper"> Copper:</span>
      <span class="stat-value">${ge(i.copper)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="assets/silver-coin.png" class="stat-icon" alt="Silver"> Silver:</span>
      <span class="stat-value">${ge(i.silver)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="assets/gold-coin.png" class="stat-icon" alt="Gold"> Gold:</span>
      <span class="stat-value">${ge(i.gold)}</span>
    </div>

    <div class="stat-item">
      <span class="stat-label">Contribution Points:</span>
      <span class="stat-value">${Ai(i.contributionPoints||0)}</span>
    </div>

    <div class="stat-divider"></div>
    <h4>Meta</h4>

    <div class="stat-item">
      <span class="stat-label">Rebirth Points:</span>
      <span class="stat-value">${ge(M(i.rebirthPoints||0))}</span>
    </div>

    <div class="stat-divider"></div>
    <h4>Spirit Stones</h4>

    <div class="stat-item">
      <span class="stat-label"><img src="assets/spiritstone-low.png" class="stat-icon" alt="Low"> Low:</span>
      <span class="stat-value">${ge(i.spiritStonesLow)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="assets/spiritstone-mid.png" class="stat-icon" alt="Mid"> Mid:</span>
      <span class="stat-value">${ge(i.spiritStonesMid)}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label"><img src="assets/spiritstone-high.png" class="stat-icon" alt="High"> High:</span>
      <span class="stat-value">${ge(i.spiritStonesHigh)}</span>
    </div>
    
    ${i.isDemonPath?`
      <div class="stat-divider"></div>
      <h4>Demon Path</h4>
      <div class="stat-item">
        <span class="stat-label">Corruption:</span>
        <span class="stat-value">${i.corruption}</span>
      </div>
    `:""}
    
    </div>
  `}function Pb(){var s;let n=document.getElementById("inventory-panel");if(!n){n=document.createElement("div"),n.id="inventory-panel",n.className="inventory-panel draggable-panel",Qt().appendChild(n);const r=(s=i.panelPositions)==null?void 0:s.inventory;r&&(r.x!==0||r.y!==0)&&(n.style.transform=`translate(${r.x}px, ${r.y}px)`)}const e=Array.isArray(i.inventory)?i.inventory:[],t=Number.isFinite(i.selectedInventoryIndex)?i.selectedInventoryIndex:null,o=t!==null?e[t]:null;n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'inventory-panel')">
      <h3>${It("inventory",{title:"Inventory"})} Inventory</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      <div class="inventory-grid" role="list">
        ${e.length===0?'<div class="inventory-empty">Empty</div>':""}
        ${e.map((r,l)=>{const a=su(r),c=Number(r.quantity)||1;return`
            <button class="inv-tile ${t===l?"selected":""}" onclick="window.selectInventoryItem(${l})" title="${Te(String(r.name||""))}">
              ${a?`<img class="inv-tile-img" src="${a}" alt="${Te(String(r.name||"Item"))}">`:`<div class="inv-tile-emoji">${It("inventory")}</div>`}
              ${c>1?`<div class="inv-tile-qty">x${ge(c)}</div>`:""}
            </button>
          `}).join("")}
      </div>

      <div class="inventory-detail" aria-label="Item Details">
        ${o?(()=>{var b;const r=su(o),l=String(o.description||""),a=_b(o),c=_d(o),u=c?String(((b=i.equipped)==null?void 0:b[c])||""):"",d=c&&u===String(o.name||""),f=!!c,v=Sd(o)?`<button class="inv-primary-btn" onclick="window.useInventoryItem(${t})">USE</button>`:f?`<button class="inv-primary-btn" onclick="window.equipInventoryItem(${t})" ${d?"disabled":""}>${d?"EQUIPPED":"EQUIP"}</button>`:'<button class="inv-primary-btn" disabled>NO ACTION</button>';return`
            <div class="inv-detail-top">
              <div class="inv-detail-imgwrap">
                ${r?`<img class="inv-detail-img" src="${r}" alt="${Te(String(o.name||"Item"))}">`:'<div class="inv-detail-img" aria-hidden="true"></div>'}
              </div>
              <div class="inv-detail-text">
                <div class="inv-detail-name">${Te(String(o.name||""))}</div>
                ${l?`<div class="inv-detail-desc">${Te(l)}</div>`:""}
                ${a.length?`<div class="inv-detail-bonuses">${a.map(y=>`<div class="inv-bonus">• ${Te(y)}</div>`).join("")}</div>`:""}
              </div>
            </div>
            <div class="inv-detail-actions">${v}</div>
          `})():'<div class="inventory-empty">Select an item</div>'}
      </div>
    </div>
  `}function Db(){var C,m;let n=document.getElementById("herbalism-panel");if(!n){n=document.createElement("div"),n.id="herbalism-panel",n.className="herbalism-panel draggable-panel",bn(n,"herbalism"),Qt().appendChild(n),yn(n,"herbalism");const S=(C=i.panelPositions)==null?void 0:C.herbalism;S&&(S.x!==0||S.y!==0)&&(n.style.transform=`translate(${S.x}px, ${S.y}px)`)}const e=!!i.devIgnoreRequirements,t="herbalism:Gather Herbs",o=Xt(t),s="herbalism:Craft Pill",r=Xt(s),l=Math.max(.25,10/Math.max(1,ld())),a=Math.max(1,M(cd())),c=ud(),u=dd(),d=Ii(),f=String(i.autoCraftPillFile||""),p=((m=d.find(S=>String(S.file||"")===f))==null?void 0:m.name)||"",v=Ed(),b=Object.fromEntries(v.map(S=>[S.name,Si(S.name)]));(!Array.isArray(i.herbalismCraftSlots)||i.herbalismCraftSlots.length!==3)&&(i.herbalismCraftSlots=[null,null,null]),Number.isFinite(i.herbalismCraftPickerIndex)||(i.herbalismCraftPickerIndex=-1);const y=i.herbalismCraftSlots.map(S=>typeof S=="string"&&S.trim()?S.trim():""),g=y.filter(Boolean).length,h=e?g===3:g===3&&y.every(S=>Si(S)>=1);n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'herbalism-panel')">
      <h3>${It("spark",{title:"Herbalism"})} Herbalism</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content herbalism-content">
      <div class="herbalism-summary">
        ${v.map(S=>`
          <div class="herbalism-line"><img class="inline-asset-icon" src="${Te(String(S.imageSrc||"assets/grass.png"))}" alt=""> ${Te(S.name)}: <strong>${ge(b[S.name]||0)}</strong></div>
        `.trim()).join("")}
      </div>

      <div class="herbalism-block">
        <div class="herbalism-block-title">GATHER</div>
        <button class="herbalism-btn" onclick="window.gatherHerbs()" ${o&&!e?"disabled":""}>
          ${o?"Gathering…":`Gather Herbs (${l.toFixed(1)}s)`}
        </button>
        <div class="herbalism-progress" ${o?"":'style="display:none;"'}>
          <div class="herbalism-progress-bar">
            <div class="herbalism-progress-fill" data-progress-key="${Te(t)}"></div>
          </div>
        </div>
        <div class="herbalism-hint">Herb gathering costs no stamina and gathers ${ge(a)} herb(s) per completion.</div>
        ${c?'<div class="herbalism-hint">Auto Gather: UNLOCKED (runs automatically).</div>':""}
      </div>

      <div class="herbalism-block">
        <div class="herbalism-block-title">CRAFT</div>
        <div class="herbalism-craft-grid" aria-label="Crafting herbs">
          ${[0,1,2].map(S=>{const L=y[S];return`
              <button class="herbalism-craft-slot" type="button" onclick="window.openHerbCraftPicker(${S})">${Te(L||"Select herb")}</button>
            `.trim()}).join("")}
        </div>
        <div class="herbalism-hint">Pick 3 herbs to match a recipe from the Recipe Book.</div>

        ${i.herbalismCraftPickerIndex>=0?`
          <div class="herbalism-picker" aria-label="Choose herb">
            <div class="herbalism-block-title">CHOOSE HERB</div>
            <div class="herbalism-picker-list">
              ${v.filter(S=>e?!0:Si(S.name)>0).map(S=>`<button class="herbalism-picker-item" type="button" onclick="window.setHerbCraftSlot(${i.herbalismCraftPickerIndex}, ${JSON.stringify(String(S.name))})">${Te(S.name)} (${ge(Si(S.name))})</button>`).join("")||'<div class="inventory-empty">No herbs available.</div>'}
            </div>
            <div class="herbalism-picker-actions">
              <button class="herbalism-btn" type="button" onclick="window.clearHerbCraftSlot(${i.herbalismCraftPickerIndex})">Clear Slot</button>
              <button class="herbalism-btn" type="button" onclick="window.closeHerbCraftPicker()">Close</button>
            </div>
          </div>
        `:""}

        <button class="herbalism-btn" onclick="window.craftFromHerbSlots()" ${!h&&!e||r&&!e?"disabled":""}>
          ${r?"Crafting…":"Craft (use selected herbs)"}
        </button>
        <div class="herbalism-progress" ${r?"":'style="display:none;"'}>
          <div class="herbalism-progress-bar">
            <div class="herbalism-progress-fill" data-progress-key="${Te(s)}"></div>
          </div>
        </div>
        <div class="herbalism-hint">Crafting consumes exactly 3 herbs and produces 1 pill.</div>

        ${u?`
          <div class="herbalism-hint">Auto Craft: UNLOCKED (crafts automatically when possible).</div>
          <div class="herbalism-line">
            Auto craft pill:
            <select class="herbalism-select" onchange="window.setAutoCraftPillFile(this.value)">
              <option value="" ${f?"":"selected"}>None</option>
              ${d.map(S=>{const L=String(S.file||""),T=String(S.name||L);return`<option value="${Te(L)}" ${L===f?"selected":""}>${Te(T)}</option>`}).join("")}
            </select>
          </div>
          ${p?`<div class="herbalism-hint">Selected: ${Te(String(p))}</div>`:""}
        `:""}
      </div>

      <div class="herbalism-block">
        <div class="herbalism-block-title">RECIPE BOOK</div>
        <button class="herbalism-btn" onclick="window.toggleSidePanel('recipes')">Open Recipe Book</button>
        <div class="herbalism-hint">View all pills and their herb recipes.</div>
      </div>
    </div>
  `}function Ed(){return[{name:"Ginseng",kind:"ingredient",imageSrc:"assets/grass.png",description:"A hardy root used in many formulas."},{name:"Spirit Grass",kind:"ingredient",imageSrc:"assets/grass.png",description:"A grass infused with faint Qi."},{name:"Bloody Root",kind:"ingredient",imageSrc:"assets/grass.png",description:"A crimson root that carries a sharp essence."},{name:"Snow Lotus",kind:"ingredient",imageSrc:"assets/grass.png",description:"A rare lotus that grows in cold peaks."},{name:"Jade Leaf",kind:"ingredient",imageSrc:"assets/grass.png",description:"A leaf with a clean, cooling essence."},{name:"Moonflower",kind:"ingredient",imageSrc:"assets/grass.png",description:"A pale flower that blooms under moonlight."},{name:"Dragonwort",kind:"ingredient",imageSrc:"assets/grass.png",description:"A pungent herb said to carry draconic warmth."}]}function br(n){const e=String(n||""),t={"herb_pill.png":[{herb:"Jade Leaf",qty:2},{herb:"Spirit Grass",qty:1}],"qi_pill.png":[{herb:"Spirit Grass",qty:2},{herb:"Ginseng",qty:1}],"ying_yang_pill.png":[{herb:"Moonflower",qty:1},{herb:"Ginseng",qty:1},{herb:"Jade Leaf",qty:1}],"breakthrough_pill.png":[{herb:"Ginseng",qty:2},{herb:"Snow Lotus",qty:1}],"iron_body_pill.png":[{herb:"Bloody Root",qty:2},{herb:"Dragonwort",qty:1}],"angel_pill.png":[{herb:"Snow Lotus",qty:2},{herb:"Moonflower",qty:1}],"corruption_pill.png":[{herb:"Bloody Root",qty:2},{herb:"Moonflower",qty:1}],"demon_pill.png":[{herb:"Dragonwort",qty:2},{herb:"Bloody Root",qty:1}],"lightning_pill.png":[{herb:"Spirit Grass",qty:1},{herb:"Moonflower",qty:2}],"death_pill.png":[{herb:"Bloody Root",qty:1},{herb:"Dragonwort",qty:1},{herb:"Moonflower",qty:1}]},o=Array.isArray(t[e])?t[e]:null;return o&&o.reduce((s,r)=>s+M(r==null?void 0:r.qty),0)===3?o:[{herb:"Ginseng",qty:1},{herb:"Spirit Grass",qty:1},{herb:"Jade Leaf",qty:1}]}function Nb(n){const e=Ed(),t=Math.max(1,M(n)),o=Object.create(null),s=()=>{const l=Math.random();let a=e.find(c=>c.name==="Spirit Grass")||e[0];return l<.12?a=e.find(c=>c.name==="Snow Lotus")||a:l<.24?a=e.find(c=>c.name==="Moonflower")||a:l<.38?a=e.find(c=>c.name==="Dragonwort")||a:l<.54?a=e.find(c=>c.name==="Bloody Root")||a:l<.72?a=e.find(c=>c.name==="Ginseng")||a:l<.88&&(a=e.find(c=>c.name==="Jade Leaf")||a),a};for(let l=0;l<t;l++){const a=s(),c=(a==null?void 0:a.name)||"Spirit Grass";o[c]=(o[c]||0)+1,dt({name:c,kind:"ingredient",description:(a==null?void 0:a.description)||"",imageSrc:(a==null?void 0:a.imageSrc)||"assets/grass.png",quantity:1})}const r=Object.keys(o).map(l=>`+${ge(o[l])} ${l}`);O(`You gather herbs. ${r.join(", ")||"+1 Spirit Grass"}.`)}function kb(){const e=Math.max(1,ld());return Math.max(250,Math.floor(1e4/e))}function Fb(){const e=ob();return Math.max(250,5e3-e)}function Rd(n,e){const o=!!(e&&typeof e=="object"?e:{}).ignoreRequirements,s=n&&typeof n=="object"?n:null;if(!s)return!1;const r={name:"Craft Pill",callback:()=>{dt({name:String(s.name||"Pill"),kind:"pill",pillFile:String(s.file||""),imageSrc:String(s.src||""),description:Ya(s.file),quantity:1}),O(`You craft a ${String(s.name||"pill")}.`)}},l=Yt("herbalism",r);return o?(Xt(l)&&nr(l,{ignoreCooldown:!0}),r.callback(),N(),U(),!0):Xt(l)?!1:(Yo("herbalism",r,Fb()),U(),!0)}function Ub(){const n=String(i.autoCraftPillFile||"");if(!n||!Ii().find(o=>String(o.file||"")===n))return!1;const t=br(n);if(!Array.isArray(t)||t.length===0)return!1;if(i.devIgnoreRequirements)return!0;for(const o of t){const s=String((o==null?void 0:o.herb)||""),r=M(o==null?void 0:o.qty);if(!s||r<=0||Si(s)<r)return!1}return!0}function Bb(n){const e=br(n);if(!Array.isArray(e)||e.length===0)return!1;if(i.devIgnoreRequirements)return!0;for(const t of e){const o=String((t==null?void 0:t.herb)||""),s=M(t==null?void 0:t.qty);if(!o||s<=0||Si(o)<s)return!1}for(const t of e){const o=String((t==null?void 0:t.herb)||""),s=M(t==null?void 0:t.qty);if(!ll(o,s))return!1}return!0}window.setAutoCraftPillFile=n=>{i.autoCraftPillFile=String(n||""),N(),U()};function Ld(n){if(!!!(n&&typeof n=="object"?n:{}).silent)try{St("gather")}catch{}Yo("herbalism",{name:"Gather Herbs",callback:()=>{i.isResting=!1,typeof i.mysteriousHerbFound!="boolean"&&(i.mysteriousHerbFound=!1),Nb(cd()),!i.mysteriousHerbFound&&Math.random()<.03&&(i.mysteriousHerbFound=!0,dt({name:"Mysterious Herb",description:"Qi gain permanently increased by 20%",quantity:1}),O("You discover a Mysterious Herb."))}},kb())}window.gatherHerbs=()=>{Ld({silent:!1})};window.openHerbCraftPicker=n=>{const e=M(n);i.herbalismCraftPickerIndex=e>=0&&e<=2?e:-1,N()};window.closeHerbCraftPicker=()=>{i.herbalismCraftPickerIndex=-1,N()};window.setHerbCraftSlot=(n,e)=>{const t=M(n);(!Array.isArray(i.herbalismCraftSlots)||i.herbalismCraftSlots.length!==3)&&(i.herbalismCraftSlots=[null,null,null]);const o=String(e||"").trim();o&&(i.herbalismCraftSlots[t]=o,i.herbalismCraftPickerIndex=-1,N(),U())};window.clearHerbCraftSlot=n=>{const e=M(n);(!Array.isArray(i.herbalismCraftSlots)||i.herbalismCraftSlots.length!==3)&&(i.herbalismCraftSlots=[null,null,null]),i.herbalismCraftSlots[e]=null,i.herbalismCraftPickerIndex=-1,N(),U()};function Ra(n){const e=Object.create(null);for(const t of n){const o=String(t||"").trim();o&&(e[o]=(e[o]||0)+1)}return e}function Ob(n,e){const t=Object.keys(n||{}),o=Object.keys(e||{});if(t.length!==o.length)return!1;for(const s of t)if((n[s]||0)!==(e[s]||0))return!1;return!0}function Gb(n){const e=Ra(n),t=Ii();for(const o of t){const s=br(o.file),r=[];for(const a of s){const c=M(a.qty);for(let u=0;u<c;u++)r.push(String(a.herb||""))}const l=Ra(r);if(Ob(e,l))return o}return null}window.craftFromHerbSlots=()=>{try{St("craft")}catch{}(!Array.isArray(i.herbalismCraftSlots)||i.herbalismCraftSlots.length!==3)&&(i.herbalismCraftSlots=[null,null,null]);const n=i.herbalismCraftSlots.map(t=>typeof t=="string"&&t.trim()?t.trim():"").filter(Boolean);if(n.length!==3)return;const e=Gb(n);if(!e){O("No known recipe matches those herbs. Check the Recipe Book."),N(),U();return}if(!i.devIgnoreRequirements){const t=Ra(n);for(const o of Object.keys(t))if(Si(o)<t[o])return;for(const o of Object.keys(t))if(!ll(o,t[o]))return}Rd(e,{ignoreRequirements:!!i.devIgnoreRequirements})};function Hb(){var o;let n=document.getElementById("recipe-book-panel");if(!n){n=document.createElement("div"),n.id="recipe-book-panel",n.className="recipe-book-panel draggable-panel",bn(n,"recipes"),Qt().appendChild(n),yn(n,"recipes");const s=(o=i.panelPositions)==null?void 0:o.recipes;s&&(s.x!==0||s.y!==0)&&(n.style.transform=`translate(${s.x}px, ${s.y}px)`)}const t=Ii().map(s=>{const l=br(s.file).map(a=>`${ge(a.qty)} ${Te(a.herb)}`).join(", ");return`
      <div class="profile-trait">
        <strong>${Te(String(s.name||"Pill"))}</strong><br>
        <span>${l}</span>
      </div>
    `.trim()}).join("");n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'recipe-book-panel')">
      <h3>${It("quests",{title:"Recipe Book"})} Recipe Book</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      ${t||'<div class="inventory-empty">No recipes.</div>'}
    </div>
  `}function qb(){const n=ht(i.rebirthUpgrades);return i.rebirthUpgrades=n,M(n.resetUnlockProgress)>=100}window.setHardMode=n=>{i.hardMode=!!n,O(i.hardMode?"Hard Mode enabled. Enemies hit harder, and death ends your run.":"Hard Mode disabled."),N(),U()};function Di(n){if(!i.hardMode||!n||typeof n!="object")return n;const e=1.12,t=1.12,o=Math.max(1,Math.floor(ze(n.maxHealth??n.health)*e)),s=Math.max(1,Math.floor(ze(n.health??o)*e)),r=Math.max(1,Math.floor(ze(n.strength)*t));return n.maxHealth=o,n.health=Math.min(o,s),n.strength=r,n}window.endRunViaUnlockedReset=()=>{qb()&&(i.runEnded||(O("You invoke the Reset blessing. Your run ends."),window.endRunToRebirth()))};function Vb(){var b,y,g,h,C,m,S,L,T;try{vn()}catch{}let n=document.getElementById("settings-panel");if(!n){n=document.createElement("div"),n.id="settings-panel",n.className="settings-panel draggable-panel",bn(n,"settings"),Qt().appendChild(n),yn(n,"settings");const R=(b=i.panelPositions)==null?void 0:b.settings;R&&(R.x!==0||R.y!==0)&&(n.style.transform=`translate(${R.x}px, ${R.y}px)`)}const e=ht(i.rebirthUpgrades);i.rebirthUpgrades=e;const t=M(e.resetUnlockProgress),o=t>=100,s=!!((y=i.audio)!=null&&y.enabled),r=ze((g=i.audio)==null?void 0:g.sfxVolume),l=ze((h=i.audio)==null?void 0:h.musicVolume),a=!!i.showCredits,c=M((C=i.leaderboardsSync)==null?void 0:C.lastAt),u=!!((m=i.leaderboardsSync)!=null&&m.lastOk),d=String(((S=i.leaderboardsSync)==null?void 0:S.lastMsg)||""),f=String(((L=i.leaderboardsSync)==null?void 0:L.sentLabel)||""),p=String(((T=i.leaderboardsSync)==null?void 0:T.storedLabel)||""),v=c?new Date(c).toLocaleString():"";n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'settings-panel')">
      <h3>${It("settings",{title:"Settings"})} Settings</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content settings-content">
      <div class="settings-block">
        <div class="settings-block-title">DIFFICULTY</div>
        <label class="settings-row">
          <input type="checkbox" ${i.hardMode?"checked":""} onchange="window.setHardMode(this.checked)" />
          <span class="settings-row-text">Hard Mode (death ends your run)</span>
        </label>
      </div>

      <div class="settings-block">
        <div class="settings-hint">Unlock progress: <strong>${ge(t)}%</strong></div>
        <button class="settings-btn" onclick="window.endRunViaUnlockedReset()" ${!o||i.runEnded?"disabled":""}>
          End Run (Reset)
        </button>
        <div class="settings-hint">This button unlocks from the Rebirth Tree at 100%.</div>
      </div>

      <div class="settings-block">
        <button class="settings-btn" onclick="window.forceLeaderboardSyncNow()">Sync Leaderboard Now</button>
        <div class="settings-hint">Sends your best cultivation + rebirth stats to the global leaderboard.</div>
        ${c?`<div class="settings-hint" style="opacity:0.9">Last sync: <strong>${Te(v)}</strong> — ${u?"OK":"FAILED"}${d?` — ${Te(d)}`:""}</div>`:""}
        ${c?`<div class="settings-hint" style="opacity:0.85">Sent label: <strong>${Te(f||"(empty)")}</strong><br>Stored label: <strong>${Te(p||"(empty)")}</strong></div>`:""}
      </div>

      <div class="profile-audio">
        <div class="profile-audio-title">Audio</div>
        <label class="profile-audio-row">
          <input type="checkbox" ${s?"checked":""} onchange="window.setAudioEnabled(this.checked)">
          <span>Enable sound</span>
        </label>
        <label class="profile-audio-row">
          <span class="profile-audio-label">SFX</span>
          <input class="profile-audio-range" type="range" min="0" max="1" step="0.01" value="${Te(String(r))}" oninput="window.setAudioSfxVolume(this.value)">
          <button class="profile-audio-test" type="button" onclick="window.audioTestSfx()">TEST</button>
        </label>
        <label class="profile-audio-row">
          <span class="profile-audio-label">Music</span>
          <input class="profile-audio-range" type="range" min="0" max="1" step="0.01" value="${Te(String(l))}" oninput="window.setAudioMusicVolume(this.value)">
        </label>
      </div>

      <div class="settings-block">
        <button class="settings-btn" onclick="window.toggleCredits()">${a?"Hide Credits":"Show Credits"}</button>
        ${a?`
          <div class="settings-hint" style="margin-top:8px">
            Chinese New Year by Alex-Productions | <a href="https://onsound.eu/" target="_blank" rel="noopener noreferrer">https://onsound.eu/</a>
            <br>
            Music promoted by <a href="https://www.free-stock-music.com" target="_blank" rel="noopener noreferrer">https://www.free-stock-music.com</a>
            <br>
            Creative Commons / Attribution 3.0 Unported License (CC BY 3.0)
            <br>
            <a href="https://creativecommons.org/licenses/by/3.0/deed.en_US" target="_blank" rel="noopener noreferrer">https://creativecommons.org/licenses/by/3.0/deed.en_US</a>
          </div>
        `:""}
      </div>
    </div>
  `}function Id(){var e,t;let n=document.getElementById("actions-panel");if(!n){n=document.createElement("div"),n.id="actions-panel",n.className="actions-panel draggable-panel",bn(n,"actions"),Qt().appendChild(n),yn(n,"actions");const o=(e=i.panelPositions)==null?void 0:e.actions;o&&(o.x!==0||o.y!==0)&&(n.style.transform=`translate(${o.x}px, ${o.y}px)`)}if(i.phase==="FARMING"){const o=!!i.devIgnoreRequirements;try{Xv()}catch{}i.runEnded&&(i.repeatableActions=[],i.specialActions=[],ke({name:"Rebirth.",icon:"🔁",description:"Start a new life. (Keeps Rebirth Points.)",disabled:!1,callback:()=>window.beginRebirth()})),i.specialActions=i.specialActions.filter(m=>{const S=m==null?void 0:m.name;return S!=="Explore the Nearby Forest"&&S!=="Enter Deep into the Woods"&&S!=="Find Nothing"&&S!=="Find Mysterious Herb"});const s=i.repeatableActions.find(m=>m.name==="Rest");s&&(s.disabled=o?!1:i.stamina>=i.maxStamina);const r=i.repeatableActions.find(m=>m.name==="Farm Crops");r&&(r.disabled=o?!1:i.stamina<2);const l=i.repeatableActions.find(m=>m.name==="Chop Wood");l&&(l.disabled=o?!1:i.stamina<3);const a=i.repeatableActions.find(m=>m.name==="Gather Materials for Village");a&&(a.disabled=o?!1:i.villageMaterialsCooldown>0);const c=i.repeatableActions.find(m=>m.name==="Grab Groceries");c&&(c.disabled=o?!1:i.stamina<2),i.repeatableActions=(Array.isArray(i.repeatableActions)?i.repeatableActions:[]).filter(m=>(m==null?void 0:m.name)!=="Gather Herbs");try{Ue(["Craft Herb Pill"])}catch{}try{sn()}catch{}i.cloudConqueredSectsUnlocked?i.repeatableActions.some(m=>(m==null?void 0:m.name)==="Searching and Conquering")||i.repeatableActions.push({name:"Searching and Conquering",icon:"🗺️",disabled:!1,callback:()=>window.searchingAndConquering()}):i.repeatableActions=i.repeatableActions.filter(m=>(m==null?void 0:m.name)!=="Searching and Conquering");const u=i.repeatableActions.find(m=>(m==null?void 0:m.name)==="Searching and Conquering");if(u){const m=td().length===0;u.disabled=o?!1:i.searchingAndConqueringCooldown>0||m}const d=["Slaughter Sheep","Slaughter Random Civilians"];i.isDemonPath?(i.repeatableActions.some(m=>(m==null?void 0:m.name)==="Slaughter Sheep")||i.repeatableActions.push({name:"Slaughter Sheep",icon:"🐑",cooldownSeconds:3,disabled:!1,callback:()=>window.slaughterSheep()}),i.repeatableActions.some(m=>(m==null?void 0:m.name)==="Slaughter Random Civilians")||i.repeatableActions.push({name:"Slaughter Random Civilians",icon:"🔪",cooldownSeconds:5,disabled:!1,callback:()=>window.slaughterRandomCivilians()})):i.repeatableActions=(Array.isArray(i.repeatableActions)?i.repeatableActions:[]).filter(m=>!d.includes(m==null?void 0:m.name)),i.hasChosen100SilverRoute&&!i.isBusinessOriented&&(i.repeatableActions=(Array.isArray(i.repeatableActions)?i.repeatableActions:[]).filter(m=>(m==null?void 0:m.name)!=="Chop Wood"&&(m==null?void 0:m.name)!=="Sell Wood")),!i.hasMetFakeImmortal&&i.copper>=30&&(i.specialActions.find(m=>m.name&&m.name.includes("Meet the"))||i.specialActions.push({name:'Meet the "Immortal Cultivator"',icon:"🧙",disabled:!1,callback:()=>window.meetFakeImmortal()}));const f=i.specialActions.find(m=>m.name&&m.name.includes("Buy Farming Tools"));f&&(f.disabled=i.copper<i.farmingToolCost);const p=i.specialActions.find(m=>m.name&&m.name.includes("Meet the"));p&&(p.disabled=i.copper<30);const v=i.specialActions.find(m=>m.name&&m.name.includes("Buy Axe"));v&&(v.disabled=i.copper<50),i.silver>=50&&!i.hasBoughtNormalAxe&&!i.hasBoughtLegendaryTools&&(i.legendaryAxeOfferRolled||(i.legendaryAxeOfferRolled=!0,i.legendaryAxeOfferAvailable=Math.random()<.2),i.bargainOfferRolled||(i.bargainOfferRolled=!0,i.bargainOfferAvailable=jv(.5)),i.specialActions.find(m=>m.name&&m.name.includes("Buy Normal Axe"))||i.specialActions.push({name:"Buy Normal Axe",icon:"🪓",disabled:!1,onStart:()=>(i.bargainOfferAvailable=!1,i.specialActions=i.specialActions.filter(m=>!String((m==null?void 0:m.name)||"").includes("Bargain")),!0),callback:()=>window.buyNormalAxe()}),i.legendaryAxeOfferAvailable&&!i.specialActions.find(m=>m.name&&m.name.includes("Buy Legendary Axe"))&&i.specialActions.push({name:"Buy Legendary Axe (20 Luck)",icon:"✨",disabled:!1,callback:()=>window.buyLegendaryTools()}),!i.hasSeenBargain&&i.bargainOfferAvailable&&!i.specialActions.find(m=>m.name&&m.name.includes("Bargain"))&&i.specialActions.push({name:"Bargain",icon:"💰",disabled:!1,callback:()=>window.startBargain()}));const b=i.specialActions.find(m=>m.name&&m.name==="Buy Normal Axe");b&&(b.disabled=i.silver<50);const y=i.specialActions.find(m=>m.name&&m.name.includes("Buy Legendary Axe"));y&&(y.disabled=i.luck<20);const g=!!i.hasChosen100SilverRoute,h=i.specialActions.some(m=>(m==null?void 0:m.name)==="Steady Coin"),C=i.specialActions.some(m=>(m==null?void 0:m.name)==="Follow the Mysterious Cultivator");if(g?i.specialActions=i.specialActions.filter(m=>(m==null?void 0:m.name)!=="Steady Coin"&&(m==null?void 0:m.name)!=="Follow the Mysterious Cultivator"):i.silver>=100&&(h||i.specialActions.push({name:"Steady Coin",icon:"🪙",description:"You invest in storage, tools, and repeatable agreements.",costSilver:100,disabled:!1,onStart:()=>(i.specialActions=i.specialActions.filter(m=>(m==null?void 0:m.name)!=="Follow the Mysterious Cultivator"),!0),callback:()=>{window.chooseSteadyCoin()}}),C||i.specialActions.push({name:"Follow the Mysterious Cultivator",icon:"☁️",costSilver:100,disabled:!1,onStart:()=>(i.specialActions=i.specialActions.filter(m=>(m==null?void 0:m.name)!=="Steady Coin"),!0),callback:()=>{i.hasChosen100SilverRoute=!0,i.cloudCultivatorStoryStage=Math.max(1,M(i.cloudCultivatorStoryStage)),i.specialActions.some(m=>(m==null?void 0:m.name)==="Walk with the Mysterious Cultivator to the Building.")||i.specialActions.push({name:"Walk with the Mysterious Cultivator to the Building.",icon:"🚶",description:"The cultivator leads you beyond familiar paths, toward a quiet structure half-hidden by drifting cloud.",disabled:!1,callback:()=>window.cloudStoryWalkToBuilding()})}})),!i.hasLargerBagSpace&&(i.largerBagSpaceUnlocked||i.silver>=100)&&(!i.largerBagSpaceUnlocked&&i.silver>=100&&(i.largerBagSpaceUnlocked=!0),i.specialActions.some(m=>(m==null?void 0:m.name)==="Larger Bag Space")||i.specialActions.push({name:"Larger Bag Space",icon:"🎒",disabled:!1,callback:()=>window.claimLargerBagSpace()})),M(i.cloudCultivatorStoryStage)===2&&(i.specialActions.some(m=>(m==null?void 0:m.name)==="Sect Leader Offers Items and Recruitment.")||i.specialActions.push({name:"Sect Leader Offers Items and Recruitment.",icon:"🏯",description:`A figure waits within, unmoving. “You’ve reached the end of your road as a wanderer,” they say.
A thin manual glides forward, light as mist.`,disabled:!1,callback:()=>window.cloudStoryLeaderOffers()})),i.hasJoinedSect&&i.currentSect==="Cloud"){const m=M(i.cloudCultivatorStoryStage),S=i.specialActions.some(x=>{const q=String((x==null?void 0:x.name)||"");return q==="Arrival Among Clouds."||q==="Confronted by an Outer Disciple."||q==="Battle starts."||q==="Exploring the Sect Library."||q==="Find heavenly demon manual."||q==="Take the Demonic Manual."||q==="Find nothing."||q==="Venture Out to the Neighboring Sects"||q==="Cause Commotion"||q==="Attacked"||q==="Run to Sect Leader"||q==="Conquering Sect"||q==="Major Accident"});if(m>=3&&!S)if(m<=4)i.cloudCultivatorStoryStage=Math.max(4,m),i.specialActions.push({name:"Arrival Among Clouds.",icon:"☁️",description:"The Cloud Sect is quieter than you expected. You can feel it — you don’t belong here yet.",disabled:!1,callback:()=>window.cloudStoryArrivalAmongClouds()});else if(m===5)i.specialActions.push({name:"Confronted by an Outer Disciple.",icon:"🥋",description:`A young disciple steps into your path, blocking the stone walkway.
“Another lucky mortal,” they scoff. This is not a discussion.`,disabled:!1,callback:()=>window.cloudStoryConfrontedByOuterDisciple()});else if(m===6)i.specialActions.push({name:"Battle starts.",icon:"⚔️",description:"This is not a discussion.",disabled:!1,callback:()=>window.cloudStoryBattleStarts()});else if(m===7)i.specialActions.push({name:"Exploring the Sect Library.",icon:"📚",description:"With your new standing, the Cloud Sect’s library opens to you.",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.cloudStoryExploreLibrary()});else if(m===8)ke({name:"Find heavenly demon manual.",icon:"📖",description:`Cost: Story Luck −55
Requirement: Story Luck ≥ 55
Outcome: Obtain Hidden Heavenly Demon Manual`,disabled:i.luck<55,onStart:()=>i.luck<55?!1:(i.luck-=55,i.specialActions=i.specialActions.filter(x=>(x==null?void 0:x.name)!=="Take the Demonic Manual."&&(x==null?void 0:x.name)!=="Find nothing."),!0),callback:()=>window.cloudStoryFindHeavenlyDemonManual()}),ke({name:"Take the Demonic Manual.",icon:"📕",description:`Cost: None
Outcome: Obtain Demonic Manual
Equipping it will get you expelled from your sect.`,disabled:!1,onStart:()=>(i.specialActions=i.specialActions.filter(x=>(x==null?void 0:x.name)!=="Find heavenly demon manual."),!0),callback:()=>window.cloudStoryTakeDemonicManual()}),ke({name:"Find nothing.",icon:"🫙",description:`Cost: None
Outcome: You find nothing of value.`,disabled:!1,callback:()=>window.cloudStoryFindNothingInLibrary()});else if(m===9)Ue(["Find heavenly demon manual.","Take the Demonic Manual.","Find nothing."]),ke({name:"Venture Out to the Neighboring Sects",icon:"🧭",description:"You leave the library empty-handed. If knowledge cannot be found, it must be taken.",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.cloudStoryVentureOutToNeighboringSects()});else if(m===10)Ue(["Find heavenly demon manual.","Take the Demonic Manual.","Find nothing."]),ke({name:"Cause Commotion",icon:"💥",description:"You stir the outer halls of a neighboring sect—just enough to draw attention.",disabled:i.stamina<5,onStart:()=>i.stamina<5?!1:(i.stamina-=5,!0),callback:()=>window.cloudStoryCauseCommotion()});else if(m===11)Ue(["Find heavenly demon manual.","Take the Demonic Manual.","Find nothing."]),ke({name:"Attacked",icon:"🩸",description:"Your commotion works. Too well. You are struck in the dark.",disabled:!1,onStart:()=>{const x=ze(i.qi),q=Math.floor(x*.25);return i.qi=Math.max(0,x-q),!0},callback:()=>window.cloudStoryAttacked()});else if(m===12)Ue(["Find heavenly demon manual.","Take the Demonic Manual.","Find nothing."]),ke({name:"Run to Sect Leader",icon:"🏃",description:"You return to the Cloud Sect, bleeding anger into your steps.",disabled:i.stamina<5,onStart:()=>i.stamina<5?!1:(i.stamina-=5,!0),callback:()=>window.cloudStoryRunToSectLeader()});else if(m===13)Ue(["Find heavenly demon manual.","Take the Demonic Manual.","Find nothing."]),ke({name:"Conquering Sect",icon:"🏴",description:"The answer is simple: if they can strike you, you can end them.",disabled:!1,callback:()=>window.cloudStoryConqueringSect()});else if(m===14)Ue(["Find heavenly demon manual.","Take the Demonic Manual.","Find nothing."]),ke({name:"Major Accident",icon:"⚠️",description:"A single misstep becomes a chain of consequences that no disciple can contain.",disabled:!1,callback:()=>window.cloudStoryMajorAccident()});else{Ue(["Find heavenly demon manual.","Take the Demonic Manual.","Find nothing.","Venture Out to the Neighboring Sects","Cause Commotion","Attacked","Run to Sect Leader","Conquering Sect","Major Accident"]);try{if(sn(),i.cloudConqueredSectsUnlocked)try{_a()}catch{}}catch{}}const L=i.specialActions.find(x=>(x==null?void 0:x.name)==="Exploring the Sect Library.");L&&(L.disabled=i.stamina<15);const T=i.specialActions.find(x=>(x==null?void 0:x.name)==="Find heavenly demon manual.");T&&(T.disabled=i.luck<55);const R=i.specialActions.find(x=>(x==null?void 0:x.name)==="Venture Out to the Neighboring Sects");R&&(R.disabled=i.stamina<15);const V=i.specialActions.find(x=>(x==null?void 0:x.name)==="Cause Commotion");V&&(V.disabled=i.stamina<5);const w=i.specialActions.find(x=>(x==null?void 0:x.name)==="Run to Sect Leader");w&&(w.disabled=i.stamina<5)}try{Mn();const m=i.hdDetour;if(m&&typeof m=="object"&&m.unlocked){const S=R=>i.specialActions.some(V=>(V==null?void 0:V.name)===R),L=R=>{i.specialActions=i.specialActions.filter(V=>!R.includes(V==null?void 0:V.name))},T=R=>Array.isArray(i.repeatableActions)&&i.repeatableActions.some(V=>(V==null?void 0:V.name)===R);if(!m.choseDifferentPath)S("I Rather Walk a Different Path.")||ke({name:"I Rather Walk a Different Path.",icon:"🚪",disabled:!1,callback:()=>window.hdRatherWalkDifferentPath()});else if(L(["I Rather Walk a Different Path."]),!m.exploredCave)S("Explore a Mysterious Cave.")||ke({name:"Explore a Mysterious Cave.",icon:"🕳️",disabled:!1,callback:()=>window.hdExploreMysteriousCave()});else if(L(["Explore a Mysterious Cave."]),m.caveChoice!=="demonicManual"&&m.caveChoice!=="ignore")S("The Demonic Manual has followed you.")||ke({name:"The Demonic Manual has followed you.",icon:"📕",disabled:!1,callback:()=>window.hdCaveDemonicManualFollowed()}),S("Ignore the calling and continue journey.")||ke({name:"Ignore the calling and continue journey.",icon:"🚶",disabled:!1,callback:()=>window.hdCaveIgnoreCalling()});else if(m.caveChoice==="ignore")if(L(["The Demonic Manual has followed you.","Ignore the calling and continue journey."]),!m.startedFamily)ke({name:"Settling down and starting a family.",icon:"👪",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.hdStartFamily()});else if(L(["Settling down and starting a family."]),M(m.groceriesCount)>=5&&(m.returnHomeAvailable=!0),m.returnHomeAvailable)i.repeatableActions=(Array.isArray(i.repeatableActions)?i.repeatableActions:[]).filter(R=>(R==null?void 0:R.name)!=="Grab Groceries"),ke({name:"Return Home.",icon:"🏠",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.hdReturnHome()}),L(["Gather Groceries."]);else{const R=M(m.groceriesCount),V=S("Gather Groceries."),w=T("Grab Groceries");R<=0&&!V&&!w&&ke({name:"Gather Groceries.",icon:"🛒",disabled:!1,callback:()=>window.hdGatherGroceries()}),!V&&(R>0||w)&&(Array.isArray(i.repeatableActions)||(i.repeatableActions=[]),i.repeatableActions.some(x=>(x==null?void 0:x.name)==="Grab Groceries")||i.repeatableActions.push({name:"Grab Groceries",icon:"🛍️",disabled:i.stamina<2,onStart:()=>i.stamina<2?!1:(i.stamina-=2,!0),callback:()=>window.hdGrabGroceries()}))}}}catch{}try{Cn();const m=i.dmFate;if(m&&typeof m=="object"&&m.unlocked){const S=String(m.stage||""),L=["Decide Fate of the Sect","Slaughter Sect.","Stay as a demon.","Find the demon who killed your family.","Capture the demon.","End the life of the demon.","To end the demons is to end myself."],T=R=>Ue(L.filter(V=>V!==R));S==="awaitLeader"?(T("Decide Fate of the Sect"),ke({name:"Decide Fate of the Sect",icon:"⚖️",description:"Requirement: Reach Sect Leader rank in the Demonic Monarch Sect",disabled:!jo(),onStart:()=>jo(),callback:()=>window.dmDecideFateOfSect()})):S==="choose"?(Ue(["Decide Fate of the Sect","Find the demon who killed your family.","Capture the demon.","End the life of the demon.","To end the demons is to end myself."]),ke({name:"Slaughter Sect.",icon:"🩸",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.dmSlaughterSect()}),ke({name:"Stay as a demon.",icon:"😈",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.dmStayAsDemon()})):S==="slaughterFinal"?(T("To end the demons is to end myself."),ke({name:"To end the demons is to end myself.",icon:"🕯️",disabled:!1,callback:()=>window.dmEndDemonsEndMyself()})):S==="stay_find"?(T("Find the demon who killed your family."),ke({name:"Find the demon who killed your family.",icon:"🕵️",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.dmFindFamilyKiller()})):S==="stay_capture"?(T("Capture the demon."),ke({name:"Capture the demon.",icon:"⛓️",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.dmCaptureDemon()})):S==="stay_end"?(T("End the life of the demon."),ke({name:"End the life of the demon.",icon:"🗡️",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.dmEndLifeOfDemon()})):(S==="done"||S==="dead")&&Ue(L)}}catch{}try{!!i.isDemonPath&&!i.demonCosmicFinaleDone&&M(i.cultivationMajorIndex)>=9?ke({name:"Rend the Multiverse.",icon:"🌌",description:"At the peak of demonic cultivation, you can challenge the laws of existence itself.",disabled:!1,callback:()=>window.dmRendMultiverse()}):Ue(["Rend the Multiverse."])}catch{}try{const m=String(i.demonCabinRevengeStage||""),S=M(i.corruption)>=50,L=!!i.isDemonPath&&!i.runEnded&&(S||m!==""),T=["Slaughter the family in the cabin.","The family man returns.","Recruit the family man.","Successful recruitment.","Stay focused on your journey.","Doze off.","Wake up with a sack covering your face.","Realization.","The end."];L?m===""?(Ue(T.filter(R=>R!=="Slaughter the family in the cabin.")),ke({name:"Slaughter the family in the cabin.",icon:"🩸",disabled:!1,callback:()=>window.dmCabinSlaughterFamily()})):m==="slaughter"?(Ue(T.filter(R=>R!=="The family man returns.")),ke({name:"The family man returns.",icon:"🚪",disabled:!1,callback:()=>window.dmCabinFamilyManReturns()})):m==="returns"?(Ue(T.filter(R=>R!=="Recruit the family man.")),ke({name:"Recruit the family man.",icon:"🤝",disabled:!1,callback:()=>window.dmCabinRecruitFamilyMan()})):m==="recruit"?(Ue(T.filter(R=>R!=="Successful recruitment.")),ke({name:"Successful recruitment.",icon:"✅",disabled:!1,callback:()=>window.dmCabinSuccessfulRecruitment()})):m==="recruited"?(Ue(T.filter(R=>R!=="Stay focused on your journey."&&R!=="Doze off.")),ke({name:"Stay focused on your journey.",icon:"🧘",disabled:!1,callback:()=>window.dmCabinStayFocused()}),ke({name:"Doze off.",icon:"😴",disabled:!1,callback:()=>window.dmCabinDozeOff()})):m==="doze"?(Ue(T.filter(R=>R!=="Wake up with a sack covering your face.")),ke({name:"Wake up with a sack covering your face.",icon:"🧺",disabled:!1,callback:()=>window.dmCabinWakeUpSack()})):m==="sack"?(Ue(T.filter(R=>R!=="Realization.")),ke({name:"Realization.",icon:"🕯️",disabled:!1,callback:()=>window.dmCabinRealization()})):m==="realization"?(Ue(T.filter(R=>R!=="The end.")),ke({name:"The end.",icon:"⚰️",disabled:!1,callback:()=>window.dmCabinTheEnd()})):Ue(T):Ue(T)}catch{}try{is();const m=String(((t=i.orthodoxHide)==null?void 0:t.stage)||""),S=!!i.fledDemon&&!i.joinedOrthodoxSect&&(m==="discover"||m==="saved"||m==="loyalty"),L=["Discover Hidden Orthodox Sect","Saved by the mysterious sect.","In exchange for utmost loyalty you will learn the way of the orthodox."];S?m==="discover"?(Ue(L.filter(T=>T!=="Discover Hidden Orthodox Sect")),ke({name:"Discover Hidden Orthodox Sect",icon:"☯️",disabled:!1,callback:()=>window.orthodoxDiscoverHiddenSect()})):m==="saved"?(Ue(L.filter(T=>T!=="Saved by the mysterious sect.")),ke({name:"Saved by the mysterious sect.",icon:"🕯️",disabled:i.stamina<5,onStart:()=>i.stamina<5?!1:(i.stamina-=5,!0),callback:()=>window.orthodoxSavedByMysteriousSect()})):m==="loyalty"&&(Ue(L.filter(T=>T!=="In exchange for utmost loyalty you will learn the way of the orthodox.")),ke({name:"In exchange for utmost loyalty you will learn the way of the orthodox.",icon:"📜",disabled:!1,callback:()=>window.orthodoxPledgeUtmostLoyalty()})):Ue(L)}catch{}try{li();const m=!!i.joinedOrthodoxSect&&!i.isDemonPath&&!i.runEnded&&!i.orthodoxTrueEndingDone,S=["Orthodox War Council","March to the Front","Break the Demonic Lines","Confront the Demonic Monarch","Shatter the Mandate of Hell","The world ends."];if(!m)Ue(S);else{const L=M(i.orthodoxWarStage);if(Ue(S),L<=0)ke({name:"Orthodox War Council",icon:"☯️",description:"The Orthodox Sect declares war on the Demonic Monarch Sect.",disabled:!1,callback:()=>window.orthodoxWarCouncil()});else if(L===1)ke({name:"March to the Front",icon:"🛡️",description:"You march with righteous armies toward the demonic battlefield.",disabled:i.stamina<10,onStart:()=>i.stamina<10?!1:(i.stamina-=10,!0),callback:()=>window.orthodoxWarMarchToFront()});else if(L===2)ke({name:"Break the Demonic Lines",icon:"⚔️",description:"A decisive push. The battlefield bends around your intent.",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.orthodoxWarBreakTheDemonicLines()});else if(L===3)ke({name:"Confront the Demonic Monarch",icon:"👁️",description:"The heart of the war. The Monarch awaits.",disabled:i.stamina<20,onStart:()=>i.stamina<20?!1:(i.stamina-=20,!0),callback:()=>window.orthodoxWarConfrontTheMonarch()});else if(L===4)ke({name:"Shatter the Mandate of Hell",icon:"🕯️",description:"You break the law that allows demons to rule.",disabled:!1,callback:()=>window.orthodoxWarShatterTheMandate()});else{const T=M(i.cultivationMajorIndex)>=14;ke({name:"The world ends.",icon:"🌍",description:"Requirement: Major Realm 15",disabled:!T,onStart:()=>T,callback:()=>window.orthodoxTheWorldEnds()})}}}catch{}if(i.isBusinessOriented&&i.hasStartedBusiness){const m=i.specialActions.some(P=>(P==null?void 0:P.name)==="Expansion Opportunity."),S=i.specialActions.some(P=>(P==null?void 0:P.name)==="Hiring Employees."),L=i.specialActions.some(P=>(P==null?void 0:P.name)==="Stability Isn’t Enough"),T=i.specialActions.some(P=>(P==null?void 0:P.name)==="No More Games"),R=i.specialActions.some(P=>(P==null?void 0:P.name)==="A Merchant Guild Seeks Partnership"),V=i.specialActions.some(P=>(P==null?void 0:P.name)==="Nervous Neighboring Sect"),w=i.specialActions.some(P=>(P==null?void 0:P.name)==="Negotiate With Sect"),x=i.specialActions.some(P=>(P==null?void 0:P.name)==="Deny Negoitation"),q=i.specialActions.some(P=>(P==null?void 0:P.name)==="Sect Retaliation"),$=i.specialActions.some(P=>(P==null?void 0:P.name)==="Find Mysterious Manual in Rubble");if(!i.businessUpgradedExpansion&&!m&&i.specialActions.push({name:"Expansion Opportunity.",icon:"📈",description:`Your operation stabilizes faster than expected. Coin circulates.
Outcome: Passive income improves significantly.`,costSilver:150,costCopper:250,disabled:i.silver<150||i.copper<250,callback:()=>window.businessExpansionOpportunity()}),i.businessUpgradedExpansion&&!i.businessUpgradedEmployees&&!S&&i.specialActions.push({name:"Hiring Employees.",icon:"👥",description:`Coin alone isn’t enough anymore. Hands are.
Outcome: Income cycle time reduced (faster payouts).`,costCopper:700,disabled:i.copper<700,callback:()=>window.businessHiringEmployees()}),i.businessUpgradedEmployees&&!i.businessChoseStabilityIsntEnough&&!i.businessChoseNoMoreGames&&(L||i.specialActions.push({name:"Stability Isn’t Enough",icon:"🏦",description:`You throw in all your money. Your copper. Silver, and gold all for a chance for better riches.
Outcome: Massive steady returns per income cycle.`,costCopper:1e3,costSilver:1e3,costGold:50,disabled:i.copper<1e3||i.silver<1e3||i.gold<50,onStart:()=>i.copper<1e3||i.silver<1e3||i.gold<50?!1:(i.specialActions=i.specialActions.filter(P=>(P==null?void 0:P.name)!=="No More Games"),!0),callback:()=>window.businessStabilityIsntEnough()}),T||i.specialActions.push({name:"No More Games",icon:"🕶️",description:`You decide you had enough following rules. Screw corporate. You wanna go underground and make the real cash.
Outcome: Huge gold and spirit-stone payouts per income cycle.`,costText:"All copper, all silver, all gold",tradeoffText:"Spend all copper, silver, and gold.",disabled:!1,onStart:()=>(i.specialActions=i.specialActions.filter(P=>(P==null?void 0:P.name)!=="Stability Isn’t Enough"),i.copper=0,i.silver=0,i.gold=0,!0),callback:()=>window.businessNoMoreGames()})),i.businessChoseStabilityIsntEnough){!i.businessMerchantGuildPartnered&&!R&&i.specialActions.push({name:"A Merchant Guild Seeks Partnership",icon:"🤝",description:"The merchant guild notices you know how to make cash flow. They like that.",costText:"25% of your current income per cycle",tradeoffText:"Income cycle becomes every 0.9 seconds.",disabled:!1,callback:()=>window.businessMerchantGuildSeeksPartnership()}),i.businessMerchantGuildPartnered&&!i.businessNervousNeighboringSectOpened&&!V&&i.specialActions.push({name:"Nervous Neighboring Sect",icon:"🏯",description:"The neighboring sect, once holding lots of power, is slowly losing its grip because of your growing business. They want to make a deal.",costText:"None",tradeoffText:"Progresses story.",disabled:!1,callback:()=>window.businessNervousNeighboringSect()}),i.businessNervousNeighboringSectOpened&&!i.businessNeighboringSectNegotiated&&!i.businessNeighboringSectDenied&&(i.specialActions=i.specialActions.filter(ne=>(ne==null?void 0:ne.name)!=="Nervous Neighboring Sect"),w||i.specialActions.push({name:"Negotiate With Sect",icon:"📜",description:"The sect wants a fraction of your power. And where does your power come from? Money.",costText:"15% of your income per cycle",tradeoffText:"The sect backs off for now.",disabled:!1,callback:()=>window.businessNegotiateWithSect()}),x||i.specialActions.push({name:"Deny Negoitation",icon:"🚫",description:"",costText:"15 stamina",tradeoffText:"None.",disabled:!i.devIgnoreRequirements&&i.stamina<15,onStart:()=>!i.devIgnoreRequirements&&i.stamina<15?!1:(i.devIgnoreRequirements||(i.stamina-=15),!0),callback:()=>window.businessDenyNegoitation()})),i.businessNeighboringSectDenied&&!i.businessSectRetaliationResolved&&!q&&i.specialActions.push({name:"Sect Retaliation",icon:"🔥",description:"With them feeling anxious they decide to strike first. They burn down the merchants guild. Killing everyone inside, but you.",costText:"None",tradeoffText:"Progresses story.",disabled:!1,callback:()=>window.businessSectRetaliation()}),i.businessSectRetaliationResolved&&!i.businessFoundMysteriousManual&&!$&&i.specialActions.push({name:"Find Mysterious Manual in Rubble",icon:"📖",description:"As you sit in the remains of the building, surrounded by charred bodies, something catches your eye. Something untouched by the flames. You pick it up.",costText:"15 stamina",tradeoffText:"You get the heavenly demon manual.",disabled:!i.devIgnoreRequirements&&i.stamina<15,onStart:()=>!i.devIgnoreRequirements&&i.stamina<15?!1:(i.devIgnoreRequirements||(i.stamina-=15),!0),callback:()=>window.businessFindMysteriousManualInRubble()});const P=i.specialActions.some(ne=>(ne==null?void 0:ne.name)==="Follow the Unseen Watcher"),k=i.specialActions.some(ne=>(ne==null?void 0:ne.name)==="Offer of a lifetime"),G=i.specialActions.some(ne=>(ne==null?void 0:ne.name)==="Accept"),I=i.specialActions.some(ne=>(ne==null?void 0:ne.name)==="Deny");i.businessFoundMysteriousManual&&!i.businessHeavenlyDemonOfferResolved&&(!i.businessHeavenlyDemonWatcherFollowed&&!P&&i.specialActions.push({name:"Follow the Unseen Watcher",icon:"🕯️",description:"There was an unknown watcher who saw everything...and you. When you make eye contact he turns around and puts on his robe.",costText:"15 stamina",tradeoffText:"You follow, unable to look away.",disabled:!i.devIgnoreRequirements&&i.stamina<15,onStart:()=>!i.devIgnoreRequirements&&i.stamina<15?!1:(i.devIgnoreRequirements||(i.stamina-=15),!0),callback:()=>window.businessFollowUnseenWatcher()}),i.businessHeavenlyDemonWatcherFollowed&&!i.businessHeavenlyDemonOfferMade&&!k&&i.specialActions.push({name:"Offer of a lifetime",icon:"🎭",description:"As you follow behind the unknown watcher he turns around and asks for you to come out. What else is there to lose. He offers you ultimate power like no other.",costText:"None",tradeoffText:"A choice you cannot un-hear.",disabled:!1,callback:()=>window.businessOfferOfLifetime()}),i.businessHeavenlyDemonOfferMade&&!i.businessHeavenlyDemonOfferResolved&&(i.specialActions=i.specialActions.filter(ne=>(ne==null?void 0:ne.name)!=="Offer of a lifetime"),G||i.specialActions.push({name:"Accept",icon:"😇",description:"You accept. The path opens.",costText:"None",tradeoffText:"You join the Heavenly Demon Sect.",disabled:!1,callback:()=>window.businessAcceptHeavenlyDemonOffer()}),I||i.specialActions.push({name:"Deny",icon:"🚫",description:"You reject the offer. You keep the manual — and your freedom.",costText:"None",tradeoffText:"You keep the Heavenly Demon Manual and can still use its moves.",disabled:!1,callback:()=>window.businessDenyHeavenlyDemonOffer()})))}const ue=i.specialActions.some(P=>(P==null?void 0:P.name)==="Guild Retaliation"),D=i.specialActions.some(P=>(P==null?void 0:P.name)==="Carpet Bomb");i.businessNeighboringSectNegotiated&&!i.businessGuildRetaliationPrepared&&!ue&&i.specialActions.push({name:"Guild Retaliation",icon:"⚔️",description:"You noticed the evil glint in the sect leader eyes when you shook hands. You decide you and the guild will strike first. But you need the funds first.",costText:"15 stamina",tradeoffText:"20% in income in your income cycle.",disabled:!i.devIgnoreRequirements&&i.stamina<15,onStart:()=>!i.devIgnoreRequirements&&i.stamina<15?!1:(i.devIgnoreRequirements||(i.stamina-=15),hl(.8),!0),callback:()=>window.businessGuildRetaliation()}),i.businessGuildRetaliationPrepared&&!i.businessCarpetBombDone&&!D&&i.specialActions.push({name:"Carpet Bomb",icon:"✈️",description:"You may not outmatch the sect with magic, but you outmatch them with money. And money is essentially power. You hire a private military and bomb the sect's property killing all of the members.",costText:"All of your silver, copper, gold, and low spirit stones",tradeoffText:"Get to blow some people to smithereens.",disabled:!1,callback:()=>window.businessCarpetBomb()});const X=i.specialActions.some(P=>(P==null?void 0:P.name)==="Merge With the Private Military"),z=i.specialActions.some(P=>(P==null?void 0:P.name)==="Bomb Testing"),Q=i.specialActions.some(P=>(P==null?void 0:P.name)==="Anti-Matter Creation"),J=i.specialActions.some(P=>(P==null?void 0:P.name)==="Warping"),le=i.specialActions.some(P=>(P==null?void 0:P.name)==="Storm the Heavens"),oe=i.specialActions.some(P=>(P==null?void 0:P.name)==="Clash with the Immortal God");if(i.businessCarpetBombDone&&!i.businessMergedWithMilitary&&!X&&i.specialActions.push({name:"Merge With the Private Military",icon:"🎖️",description:"Money and technology. How could that not equal power. The private military is thrilled to see the places you can take them too. The Player becomes a General in the military.",costText:"None",tradeoffText:"Progresses story.",disabled:!1,callback:()=>window.businessMergeWithPrivateMilitary()}),i.businessMergedWithMilitary&&!i.businessBombTestingDone&&!z&&i.specialActions.push({name:"Bomb Testing",icon:"💣",description:"The Guild funds the advanced bombs and the player gets to press the button. It's marvelous.",costText:"20 income cycles worth of currency",tradeoffText:"Spend the equivalent of 20 passive income cycles.",disabled:!1,callback:()=>window.businessBombTesting()}),i.businessBombTestingDone&&!i.businessAntiMatterCreationDone&&!Q&&i.specialActions.push({name:"Anti-Matter Creation",icon:"⚛️",description:"The stakes are raising. Power increasing 10 fold but something else is happening. Sky anomalies begin.",costText:"40 income cycles worth of currency",tradeoffText:"Spend the equivalent of 40 passive income cycles.",disabled:!1,callback:()=>window.businessAntiMatterCreation()}),i.businessAntiMatterCreationDone&&!i.businessWarpingDone&&!J&&i.specialActions.push({name:"Warping",icon:"🌀",description:"The power to explore has increased. The player has access to anywhere and everywhere now. A certain entity will not forget this.",costText:"60 income cycles worth of currency",tradeoffText:"Spend the equivalent of 60 passive income cycles.",disabled:!1,callback:()=>window.businessWarping()}),i.businessWarpingDone&&!i.businessStormHeavensStarted&&!le){const P=i.cultivationMajorIndex>=14;i.specialActions.push({name:"Storm the Heavens",icon:"⛈️",description:"Your power has reached the threshold. You will storm the heavens.",costText:"Requirement: Major Realm ≥ 15",tradeoffText:"Begins the Heavens assault cinematic.",disabled:!P,callback:()=>window.businessStormTheHeavens()})}i.businessStormHeavensCinematicDone&&!i.heavensImmortalGodClashStarted&&!oe&&i.specialActions.push({name:"Clash with the Immortal God",icon:"⚔️",description:"You face the Immortal God.",costText:"None",tradeoffText:"A battle that decides everything.",disabled:!1,callback:()=>window.heavensClashImmortalGod()});const de=i.specialActions.find(P=>(P==null?void 0:P.name)==="Expansion Opportunity.");de&&(de.costSilver=150,de.costCopper=250,typeof de.description=="string"&&de.description&&!/(^|\n)Outcome\s*:/i.test(de.description)&&(de.description=`${de.description.trim()}
Outcome: Passive income improves significantly.`),de.disabled=i.silver<150||i.copper<250);const ve=i.specialActions.find(P=>(P==null?void 0:P.name)==="Hiring Employees.");ve&&(ve.costCopper=700,typeof ve.description=="string"&&ve.description&&!/(^|\n)Outcome\s*:/i.test(ve.description)&&(ve.description=`${ve.description.trim()}
Outcome: Income cycle time reduced (faster payouts).`),ve.disabled=i.copper<700);const B=i.specialActions.find(P=>(P==null?void 0:P.name)==="Stability Isn’t Enough");B&&(B.costCopper=1e3,B.costSilver=1e3,B.costGold=50,typeof B.description=="string"&&B.description&&!/(^|\n)Outcome\s*:/i.test(B.description)&&(B.description=`${B.description.trim()}
Outcome: Massive steady returns per income cycle.`),B.disabled=i.copper<1e3||i.silver<1e3||i.gold<50);const j=i.specialActions.find(P=>(P==null?void 0:P.name)==="No More Games");j&&((typeof j.costText!="string"||!j.costText.trim())&&(j.costText="All copper, all silver, all gold"),(typeof j.tradeoffText!="string"||!j.tradeoffText.trim())&&(j.tradeoffText="Spend all copper, silver, and gold."),typeof j.description=="string"&&j.description&&!/(^|\n)Outcome\s*:/i.test(j.description)&&(j.description=`${j.description.trim()}
Outcome: Huge gold and spirit-stone payouts per income cycle.`),j.disabled=!1);const re=i.specialActions.find(P=>(P==null?void 0:P.name)==="Deny Negoitation");re&&(re.costText="15 stamina",(typeof re.tradeoffText!="string"||!re.tradeoffText.trim())&&(re.tradeoffText="None."),re.disabled=!i.devIgnoreRequirements&&i.stamina<15);const Me=i.specialActions.find(P=>(P==null?void 0:P.name)==="Find Mysterious Manual in Rubble");Me&&(Me.costText="15 stamina",(typeof Me.tradeoffText!="string"||!Me.tradeoffText.trim())&&(Me.tradeoffText="You get the heavenly demon manual."),Me.disabled=!i.devIgnoreRequirements&&i.stamina<15);const Ae=i.specialActions.find(P=>(P==null?void 0:P.name)==="Guild Retaliation");Ae&&(Ae.costText="15 stamina",(typeof Ae.tradeoffText!="string"||!Ae.tradeoffText.trim())&&(Ae.tradeoffText="20% in income in your income cycle."),Ae.disabled=!i.devIgnoreRequirements&&i.stamina<15);const ae=(P,k)=>{const G=i.specialActions.find(ne=>(ne==null?void 0:ne.name)===P);if(!G)return;const I=yr(k);G.costCopper=I.copper,G.costSilver=I.silver,G.costGold=I.gold,G.costSpiritStonesLow=I.spiritStonesLow,G.costSpiritStonesMid=I.spiritStonesMid,G.costSpiritStonesHigh=I.spiritStonesHigh,G.costText="",G.tradeoffText="",G.disabled=!Mr(I)};ae("Bomb Testing",20),ae("Anti-Matter Creation",40),ae("Warping",60)}}n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'actions-panel')">
      <h3>${It("actions",{title:"Actions"})} Actions</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
    <div class="actions-columns">
      <div class="actions-section">
        <h4>Repeatable Actions</h4>
        <div class="actions-list">
          ${i.repeatableActions.length===0?'<div class="actions-empty">None available</div>':""}
          ${i.repeatableActions.map((o,s)=>{const r=Yt("repeatable",o),l=[];o.name==="Gather Materials for Village"&&i.villageMaterialsCooldown>0&&l.push(`Cooldown: ${i.villageMaterialsCooldown}s`),o.name==="Searching and Conquering"&&i.searchingAndConqueringCooldown>0&&l.push(`Cooldown: ${i.searchingAndConqueringCooldown}s`);const a=cu(r);a>0&&l.push(`Cooldown: ${a}s`);const c=l.length?`<br><small>${l.join(" • ")}</small>`:"",d=`${(ao(r)*100).toFixed(1)}%`,f=Xt(r),p=Qc(o),v=p?JSON.stringify(String(p)):null,b=v?` onmouseenter='window.showActionTooltip(event, ${v})' onmousemove="window.moveActionTooltip(event)" onmouseleave="window.hideActionTooltip()"`:"",y=a>0;return`
              <button class="action-button" data-action-key="${Te(String(r))}" data-running="${f?1:0}" ${f?'aria-busy="true"':""} style="--progressPct:${d};" onclick="window.executeAction('repeatable', ${s})" ${(o.disabled||y)&&!i.devIgnoreRequirements?"disabled":""}${b}>
                <span class="action-button-label">${Te(Jc(o.name))}${c}</span>
              </button>
            `}).join("")}
        </div>
      </div>
      
      <div class="actions-section">
        <h4>Special Actions</h4>
        <div class="actions-list">
          ${i.specialActions.length===0?'<div class="actions-empty">None available</div>':""}
          ${i.specialActions.map((o,s)=>`
            ${(()=>{const r=Yt("special",o),l=cu(r),c=`${(ao(r)*100).toFixed(1)}%`,u=Xt(r),d=Qc(o),f=d?JSON.stringify(String(d)):null,p=f?` onmouseenter='window.showActionTooltip(event, ${f})' onmousemove="window.moveActionTooltip(event)" onmouseleave="window.hideActionTooltip()"`:"",v=l>0,b=l>0?`<br><small>Cooldown: ${l}s</small>`:"";return`
                <button class="action-button special" data-action-key="${Te(String(r))}" data-running="${u?1:0}" ${u?'aria-busy="true"':""} style="--progressPct:${c};" onclick="window.executeAction('special', ${s})" ${(o.disabled||v)&&!i.devIgnoreRequirements?"disabled":""}${p}>
                  <span class="action-button-label">${Te(Jc(o.name))}${b}</span>
                </button>
              `})()}
          `).join("")}
        </div>
      </div>
    </div>
    </div>
  `;try{zb()}catch{}}let en=null;function zb(){if(!!!(i.activeSidePanels&&i.activeSidePanels.has("actions"))){if(en){try{clearInterval(en)}catch{}en=null}return}if(![...Array.isArray(i.repeatableActions)?i.repeatableActions.map(o=>Yt("repeatable",o)):[],...Array.isArray(i.specialActions)?i.specialActions.map(o=>Yt("special",o)):[]].some(o=>tr(o)>0)){if(en){try{clearInterval(en)}catch{}en=null}return}en||(en=setInterval(()=>{try{if(!!!(i.activeSidePanels&&i.activeSidePanels.has("actions"))){try{clearInterval(en)}catch{}en=null;return}if(![...Array.isArray(i.repeatableActions)?i.repeatableActions.map(l=>Yt("repeatable",l)):[],...Array.isArray(i.specialActions)?i.specialActions.map(l=>Yt("special",l)):[]].some(l=>tr(l)>0)){try{clearInterval(en)}catch{}en=null;return}Id()}catch{}},1e3))}function Wb(n){var o,s;const e=i.playerName&&String(i.playerName).trim()?String(i.playerName).trim():"Wanderer",t=i.playerGender==="male"||i.playerGender==="female"?i.playerGender:null;n.innerHTML=`
    <div class="fate-screen">
      <h1>Fate Roll</h1>
      <div class="fate-results">
        <div class="fate-section bloodline-section">
          <h2>Bloodline</h2>
          <div class="bloodline-name">${i.bloodline.name}</div>
          <div class="bloodline-tier">Tier ${ge(i.bloodline.tier)}</div>
          <div class="multipliers">
            <div>Qi: ${it(i.bloodline.qiMult)}</div>
            <div>Health: ${it(i.bloodline.hpMult)}</div>
            <div>Strength: ${it(i.bloodline.strMult)}</div>
          </div>
        </div>

        <div class="fate-section affinity-section">
          <h2>Elemental Affinities</h2>
          <div class="magic-circle">
            <svg class="pentagram" viewBox="0 0 100 100" aria-label="Pentagram" role="img">
              <defs>
                <radialGradient id="flameGrad" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" style="stop-color: var(--accent); stop-opacity: 0.0" />
                  <stop offset="55%" style="stop-color: var(--accent); stop-opacity: 0.55" />
                  <stop offset="100%" style="stop-color: var(--maroon); stop-opacity: 0.0" />
                </radialGradient>
                <filter id="flameJitter" x="-35%" y="-35%" width="170%" height="170%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
                  <feGaussianBlur stdDeviation="0.4" />
                </filter>
              </defs>

              <!-- Fiery outer spread -->
              <circle cx="50" cy="50" r="47" fill="url(#flameGrad)" filter="url(#flameJitter)" opacity="0.9" />

              <!-- Pentagram ring (tips touch this) -->
              <circle cx="50" cy="50" r="37" fill="none" stroke="var(--ink)" stroke-width="3" opacity="0.75" />

              <!-- Regular pentagram (inscribed) -->
              <path
                d="M50 13 L71.749 79.933 L14.811 38.567 L85.189 38.567 L28.251 79.933 Z"
                fill="none"
                stroke="var(--ink)"
                stroke-width="2.6"
                stroke-linejoin="round"
                opacity="0.88"
              />

              <!-- Inner circle -->
              <circle cx="50" cy="50" r="28" fill="none" stroke="var(--ink)" stroke-width="1.5" opacity="0.35" />
            </svg>
            <div class="affinity-display">
              ${i.affinities.map((r,l)=>{const a=r.type.toLowerCase().replace(/\s+/g,""),c=ja(r.type),u={1:[0],2:[0,2],3:[0,2,4],4:[0,1,3,4],5:[0,1,2,3,4]},p=((u[i.affinities.length]||u[5])[l]??l%5)*360/5-90,g=78/2*(37/50),h=50+g*Math.cos(p*Math.PI/180),C=50+g*Math.sin(p*Math.PI/180);return`
                  <div class="affinity-item ${l===0?"primary":""}" style="left: ${h}%; top: ${C}%;">
                    <img src="${Te(c||`assets/${a}.png`)}" class="affinity-icon" alt="${r.type}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="affinity-icon-fallback">${It("spark")}</div>
                    <div class="affinity-name">${r.type}</div>
                    <div class="affinity-score">${ge(r.score)}</div>
                  </div>
                `}).join("")}
            </div>
          </div>
          <div class="primary-affinity-label">
            Primary Affinity: <span>${i.primaryAffinity}</span> (${ge(((o=i.affinities[0])==null?void 0:o.score)||0)})
          </div>
          <div class="multipliers">
            <div>Higher scores boost manual effectiveness</div>
            <div>Multiple affinities unlock different sect paths</div>
          </div>
        </div>

        <div class="fate-section fate-profile-inline" aria-label="Player Profile">
          <div class="fate-profile-top">
            ${t?Aa(t):'<div class="fate-profile-unknown">?</div>'}
          </div>
          <div class="fate-profile-bottom">
            <div class="fate-profile-name">${Te(e)}</div>
          </div>
        </div>

        <div class="fate-section roots-section">
          <h2>Spiritual Roots</h2>
          <div class="root-count">${i.spiritualRoots.count} Root${i.spiritualRoots.count>1?"s":""}</div>
          <div class="multipliers">
            <div>Qi Multiplier: ${it(i.spiritualRoots.qiMult)}</div>
          </div>
        </div>

        <div class="fate-section luck-section">
          <h2>Story Luck</h2>
          <div class="root-count">${ge(i.luck)}</div>
          <div class="multipliers">
            <div>Unlocks special story paths</div>
          </div>
        </div>
      </div>
      
      <div class="fate-actions">
        ${(s=i.rebirthUpgrades)!=null&&s.canRerollFate&&i.rerollsRemaining>0?`<button onclick="window.rerollFate()">${It("dice",{title:"Reroll"})} Reroll (${i.rerollsRemaining} left)</button>`:""}
        <button onclick="window.startGame()">Continue →</button>
      </div>
    </div>
  `}function $b(n){n.innerHTML=`
    <div class="game-screen">
      <div class="character-display">
        <div class="bloodline-portrait-wrap">${Fv(i.bloodline.name)}</div>
        <div class="character-info">
          <div><strong>${i.bloodline.name}</strong></div>
          <div>${i.spiritualRoots.count} Spiritual Root${i.spiritualRoots.count>1?"s":""}</div>
        </div>
        <div class="bloodline-lore">${Dv(i.bloodline.name)}</div>
      </div>
      
      <div class="game-content-layout">
        <div class="log">
          <h3>Activity Log</h3>
          <div id="game-log"></div>
        </div>
        
        <div class="panels-container">
          ${Md()}
        </div>
      </div>
    </div>
  `}function jb(n){n.innerHTML=`
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette"><img class="character-silhouette-img" src="assets/Cultivation_silhouette_new_mask.png" alt="" /></div>
        <div class="character-info">
          <div><strong>Alchemy Apprentice Phase</strong></div>
          <div>A chance encounter with a "master"</div>
        </div>
      </div>
      
      <div class="action-panel">
        <h2>The "Immortal" Cultivator</h2>
        <p class="story-text">"Greetings, mortal! I sense great potential within you. For a mere 30 copper coins, I can teach you the ancient arts of alchemy! You shall become my... assistant. A great honor!"</p>
        
        <div class="button-group">
          <button onclick="window.acceptImmortal()">
            Accept (Pay 30 Copper)
          </button>
          
          <button onclick="window.rejectImmortal()">
            Reject
          </button>
        </div>
      </div>
    </div>
  `}function Mn(){(!i.hdDetour||typeof i.hdDetour!="object")&&(i.hdDetour={unlocked:!1,choseDifferentPath:!1,exploredCave:!1,caveChoice:null,startedFamily:!1,groceriesCount:0,returnHomeAvailable:!1,demonCinematicResolved:!1})}function is(){(!i.orthodoxHide||typeof i.orthodoxHide!="object")&&(i.orthodoxHide={stage:null});const n=i.orthodoxHide.stage,e=n===null||typeof n=="string"?String(n||""):"",t=e===""||e==="discover"||e==="saved"||e==="loyalty"||e==="joined";i.orthodoxHide.stage=t&&e?e:null}function li(){(!Number.isFinite(i.orthodoxWarStage)||i.orthodoxWarStage<0)&&(i.orthodoxWarStage=0),i.orthodoxWarStage=Math.floor(i.orthodoxWarStage),typeof i.orthodoxTrueEndingDone!="boolean"&&(i.orthodoxTrueEndingDone=!1)}const Yb=50;window.orthodoxWarCouncil=()=>{li(),i.joinedOrthodoxSect&&(i.runEnded||(i.orthodoxWarStage=1,Ue(["Orthodox War Council"]),O("☯️ The Orthodox Sect convenes. A war is declared against the Demonic Monarch Sect."),N(),U()))};window.orthodoxWarMarchToFront=()=>{li(),i.joinedOrthodoxSect&&(i.runEnded||(i.orthodoxWarStage=2,Ue(["March to the Front"]),O("🛡️ You march with the righteous armies. The air is thick with killing intent."),N(),U()))};window.orthodoxWarBreakTheDemonicLines=()=>{li(),i.joinedOrthodoxSect&&(i.runEnded||(i.orthodoxWarStage=3,Ue(["Break the Demonic Lines"]),O("You break the demonic lines. Countless lives are saved — countless more are lost."),N(),U()))};window.orthodoxWarConfrontTheMonarch=()=>{li(),i.joinedOrthodoxSect&&(i.runEnded||(i.orthodoxWarStage=4,Ue(["Confront the Demonic Monarch"]),O("👁️ You step into the heart of enemy territory. The Demonic Monarch turns toward you."),N(),U()))};window.orthodoxWarShatterTheMandate=()=>{li(),i.joinedOrthodoxSect&&(i.runEnded||(i.orthodoxWarStage=5,Ue(["Shatter the Mandate of Hell"]),O("🕯️ You shatter the Mandate of Hell. The world holds its breath for what comes next."),N(),U()))};window.orthodoxTrueEndingClaimRebirth=()=>{try{window.closeStoryDialog()}catch{}if(!i.runEnded){try{fd()}catch{}N(),U()}};window.orthodoxTheWorldEnds=()=>{if(li(),!i.joinedOrthodoxSect||i.runEnded||M(i.cultivationMajorIndex)<14)return;i.orthodoxWarStage=6,i.orthodoxTrueEndingDone=!0,Ue(["The world ends."]),rn("TRUE_ENDING","True Ending",["The Orthodox Sect and the Demonic Monarch Sect collide. The war consumes everything.","You do not fight to win. You fight to end it.","You strike the Earth’s core. It shatters like glass.","The world ends — not with noise, but with silence.","You drift through space, immortal and alone.","Time passes. The stars forget your name.","Then you crash into a new world.","A planet of waifus. A second chance.","TRUE ENDING","best choices of all time"],[{label:`Claim ${Yb} Rebirth Points.`,onClick:"window.orthodoxTrueEndingClaimRebirth()"}],{mode:"PAGE_SWAP",sentencesPerPage:1,pageHoldMs:9e3,transitionMs:1100,choicesFadeInDelayMs:950})};function Cn(){(!i.dmFate||typeof i.dmFate!="object")&&(i.dmFate={unlocked:!1,stage:null}),typeof i.dmFate.unlocked!="boolean"&&(i.dmFate.unlocked=!1),i.dmFate.stage!==null&&typeof i.dmFate.stage!="string"&&(i.dmFate.stage=null)}function ke(n){const e=String((n==null?void 0:n.name)||"");if(!e)return;const t=i.specialActions.findIndex(o=>(o==null?void 0:o.name)===e);t===-1?i.specialActions.push(n):i.specialActions[t]={...i.specialActions[t],...n}}function jo(){return!i.hasJoinedSect||i.currentSect!=="Demon Monarch"?!1:String(i.sectRankLayer||"")==="leader"}function Ue(n){const e=new Set((Array.isArray(n)?n:[]).map(String));i.specialActions=(Array.isArray(i.specialActions)?i.specialActions:[]).filter(t=>!e.has(String((t==null?void 0:t.name)||"")))}window.dmDestroySectFromWithin=()=>{Cn(),i.dmFate.unlocked=!0,i.dmFate.stage="awaitLeader",Ue(["Destroy the Sect from Within.","Decide Fate of the Sect","Slaughter Sect.","Stay as a demon.","Find the demon who killed your family.","Capture the demon.","End the life of the demon.","To end the demons is to end myself."]),ke({name:"Decide Fate of the Sect",icon:"⚖️",description:"Requirement: Reach Sect Leader rank in the Demonic Monarch Sect",disabled:!jo(),onStart:()=>jo(),callback:()=>window.dmDecideFateOfSect()}),O("🗡️ You move through the shadows. The sect will never see it coming."),N(),U()};window.dmDecideFateOfSect=()=>{if(Cn(),!jo()){N(),U();return}i.dmFate.stage="choose",Ue(["Decide Fate of the Sect","Slaughter Sect.","Stay as a demon.","Find the demon who killed your family.","Capture the demon.","End the life of the demon.","To end the demons is to end myself."]),ke({name:"Slaughter Sect.",icon:"🩸",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.dmSlaughterSect()}),ke({name:"Stay as a demon.",icon:"😈",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.dmStayAsDemon()}),N(),U()};window.dmSlaughterSect=()=>{Cn(),i.dmFate.stage="slaughterFinal",Ue(["Slaughter Sect.","Stay as a demon.","Find the demon who killed your family.","Capture the demon.","End the life of the demon."]),ke({name:"To end the demons is to end myself.",icon:"🕯️",disabled:!1,callback:()=>window.dmEndDemonsEndMyself()}),N(),U()};window.dmEndDemonsEndMyself=()=>{Cn(),i.dmFate.stage="dead",Ue(["To end the demons is to end myself."]),rn("ENDING","Good Ending — Self-Extinction",["🕯️ To end the demons is to end yourself.","You cut the rot out at the root — and the blade does not stop at the target.","The world survives you. That was the price."],[{label:"Continue.",onClick:"window.closeStoryDialog()"}],{mode:"PAGE_SWAP",sentencesPerPage:1,pageHoldMs:9e3,transitionMs:1100,choicesFadeInDelayMs:950}),N(),U()};window.dmStayAsDemon=()=>{Cn(),i.dmFate.stage="stay_find",Ue(["Slaughter Sect.","Stay as a demon.","To end the demons is to end myself.","Find the demon who killed your family.","Capture the demon.","End the life of the demon."]),ke({name:"Find the demon who killed your family.",icon:"🕵️",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.dmFindFamilyKiller()}),N(),U()};window.dmFindFamilyKiller=()=>{Cn(),i.dmFate.stage="stay_capture",Ue(["Find the demon who killed your family."]),ke({name:"Capture the demon.",icon:"⛓️",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.dmCaptureDemon()}),N(),U()};window.dmCaptureDemon=()=>{Cn(),i.dmFate.stage="stay_end",Ue(["Capture the demon."]),ke({name:"End the life of the demon.",icon:"🗡️",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.dmEndLifeOfDemon()}),N(),U()};let Us=null,Bs=null;function au(){if(Us){try{clearInterval(Us)}catch{}Us=null}if(Bs){try{clearTimeout(Bs)}catch{}Bs=null}}function Xb(){let n=document.getElementById("blood-ending-overlay");return n||(n=document.createElement("div"),n.id="blood-ending-overlay",n.className="blood-ending-overlay",n.innerHTML='<div class="blood-ending-splatters" aria-hidden="true"></div>',document.body.appendChild(n),n)}function lu(n){const e=document.createElement("div");e.className="blood-splatter";const t=60+Math.floor(Math.random()*220),o=Math.floor(Math.random()*100),s=Math.floor(Math.random()*100),r=-45+Math.floor(Math.random()*90);e.style.left=`${o}%`,e.style.top=`${s}%`,e.style.width=`${t}px`,e.style.height=`${Math.max(40,Math.floor(t*(.55+Math.random()*.8)))}px`,e.style.setProperty("--rot",`${r}deg`),n.appendChild(e),setTimeout(()=>{try{e.classList.add("show")}catch{}},10)}function Kb(n){au();const e=Xb(),t=e.querySelector(".blood-ending-splatters");t&&(t.innerHTML=""),e.classList.remove("fade-out"),e.classList.add("active"),t&&(lu(t),Us=setInterval(()=>{try{lu(t)}catch{}},2e3)),Bs=setTimeout(()=>{try{au(),e.classList.add("fade-out"),setTimeout(()=>{try{e.classList.remove("active"),e.classList.remove("fade-out"),t&&(t.innerHTML="")}catch{}try{typeof n=="function"&&n()}catch{}},900)}catch{try{typeof n=="function"&&n()}catch{}}},2e4)}window.dmEndLifeOfDemon=()=>{Cn(),Ue(["End the life of the demon."]),Kb(()=>{try{Cn(),i.dmFate.stage="done",rn("ENDING","Neutral Ending — Blood Price",["The deed is done.","Revenge is a clean word for a dirty act.","The screaming stops. The stain does not."],[{label:"Continue.",onClick:"window.closeStoryDialog()"}],{mode:"PAGE_SWAP",sentencesPerPage:1,pageHoldMs:8500,transitionMs:1100,choicesFadeInDelayMs:950}),N(),U()}catch{}}),N(),U()};window.endRunToRebirth=n=>{try{window.closeStoryDialog()}catch{}if(i.runEnded)return;const e=n&&typeof n=="object"?n:{},t=String(e.actionName||"Rebirth."),o=String(e.actionIcon||"🔁"),s=String(e.actionDescription||"Start a new life. (Keeps Rebirth Points.)");i.runEnded=!0,i.isResting=!1,i.isCultivating=!1,i.repeatableActions=[],i.specialActions=[],ke({name:t,icon:o,description:s,disabled:!1,callback:()=>window.beginRebirth()}),N(),U()};function Qb(){if(i.inCombat||i.demonCosmicFinaleDone||!i.isDemonPath||M(i.cultivationMajorIndex)<9)return;const n=il(9),e=Math.max(1,Math.floor(M(n.maxHealth)*1.35)),t=Math.max(1,Math.floor(M(n.strength)*1.25));i.combatContext={type:"demonCosmicFinale"},i.questReturnPhase=i.phase,Ni(),i.inCombat=!0,i.enemy=Di({name:"Being of Pure Energy",icon:"✨",health:e,maxHealth:e,strength:t}),i.phase="COMBAT",Rt(),O("🌌 You tear at reality itself. The multiverse answers."),O("A Being of Pure Energy descends — silent, absolute.")}window.dmRendMultiverse=()=>{i.inCombat||i.demonCosmicFinaleDone||(Ue(["Rend the Multiverse."]),Qb(),N(),U())};function Jb(n){const e=i.combatContext;!e||e.type!=="demonCosmicFinale"||(i.combatContext=null,i.demonCosmicFinaleDone=!0,Ue(["Rend the Multiverse."]),rn("ENDING","Demonic Finale",["💥 The energy form fractures into impossible colors.","🜏 You do not ascend. You overwrite the rules.","🌌 Reality tears. Somewhere, something screams without a mouth.","…and then there is only you."],[{label:"Continue.",onClick:"window.closeStoryDialog()"}],{mode:"PAGE_SWAP",sentencesPerPage:1,pageHoldMs:8500,transitionMs:1100,choicesFadeInDelayMs:950}),N(),U())}window.demonCosmicEndingEndRun=()=>{window.closeStoryDialog()};function Zb(){const n=i.combatContext;return!n||n.type!=="demonCosmicFinale"?!1:(i.inCombat=!1,i.enemy=null,i.combatContext=null,i.phase=i.questReturnPhase||"FARMING",i.questReturnPhase=null,Rt(),O("🕳️ You are erased at the edge of existence — then forced back into form."),O("The Being of Pure Energy remains unbroken."),N(),U(),!0)}function ey(){const n=i.combatContext;return!n||n.type!=="demonCosmicFinale"?!1:(os(),i.health=Math.max(1,M(i.health)),O("You retreat. The multiverse does not forget you tried."),N(),U(),!0)}window.slaughterSheep=()=>{if(!i.isDemonPath)return;const n=eo(1,5);O("🐑 You slaughter sheep without hesitation."),ol(n,"Slaughter Sheep"),oi(),N(),U()};window.slaughterRandomCivilians=()=>{if(!i.isDemonPath)return;const n=eo(3,5);O("🔪 You slaughter random civilians. The screams fade, but the power remains."),ol(n,"Slaughter Civilians"),oi(),N(),U()};window.dmCabinSlaughterFamily=()=>{i.runEnded||i.isDemonPath&&(i.demonCabinRevengeStage="slaughter",Ue(["Slaughter the family in the cabin."]),O("You slaughter the family in the cabin. Silence follows."),N(),U())};window.dmCabinFamilyManReturns=()=>{i.runEnded||i.isDemonPath&&(i.demonCabinRevengeStage="returns",Ue(["The family man returns."]),O("🚪 The family man returns and finds what you left behind."),O("🤝 You offer him a place at your side — vengeance redirected into loyalty."),N(),U())};window.dmCabinRecruitFamilyMan=()=>{i.runEnded||i.isDemonPath&&(i.demonCabinRevengeStage="recruit",Ue(["Recruit the family man."]),O("🤝 He accepts. The hatred in his eyes becomes a weapon you can point."),N(),U())};window.dmCabinSuccessfulRecruitment=()=>{i.runEnded||i.isDemonPath&&(i.demonCabinRevengeStage="recruited",Ue(["Successful recruitment."]),O("Successful recruitment."),N(),U())};window.dmCabinStayFocused=()=>{i.runEnded||i.isDemonPath&&(i.demonCabinRevengeStage="focused",Ue(["Stay focused on your journey.","Doze off."]),O("🧘 You stay focused on your journey. You do not let exhaustion dull your instincts."),N(),U())};window.dmCabinDozeOff=()=>{i.runEnded||i.isDemonPath&&(i.dozeOffUnlocked=!0,i.demonCabinRevengeStage="doze",Ue(["Doze off."]),O("😴 You doze off. Your body recovers faster now. (Rest: +1.5 stamina/sec)"),N(),U())};window.dmCabinWakeUpSack=()=>{i.runEnded||i.isDemonPath&&(i.demonCabinRevengeStage="sack",Ue(["Wake up with a sack covering your face."]),i.isResting=!1,i.isCultivating=!1,O("🧺 You wake up with a sack covering your face. Hands bind. Breath is hot and thin."),N(),U())};window.dmCabinRealization=()=>{i.runEnded||i.isDemonPath&&(i.demonCabinRevengeStage="realization",Ue(["Realization."]),O("🕯️ Realization hits like a blade: you made a disciple out of a grieving man."),O("⚰️ He didn’t forget. He learned."),N(),U())};window.dmCabinTheEnd=()=>{i.runEnded||i.isDemonPath&&(i.demonCabinRevengeStage="end",i.isResting=!1,i.isCultivating=!1,i.repeatableActions=[],Ue(["Slaughter the family in the cabin.","The family man returns.","Recruit the family man.","Successful recruitment.","Stay focused on your journey.","Doze off.","Wake up with a sack covering your face.","Realization.","The end."]),rn("ENDING","Idiot Ending — Cabin Betrayal",["⚰️ You wanted a disciple. You forged a weapon.","It learned fast.","It learned you."],[{label:"Continue.",onClick:"window.closeStoryDialog()"}],{mode:"PAGE_SWAP",sentencesPerPage:1,pageHoldMs:8500,transitionMs:1100,choicesFadeInDelayMs:950}),N(),U())};function rl(n){if(Array.isArray(i.inventory)||(i.inventory=[]),i.inventory=i.inventory.filter(e=>{const t=String((e==null?void 0:e.name)||"");return!n(t)}),i.selectedInventoryIndex!==null&&Number.isFinite(i.selectedInventoryIndex)){const e=i.selectedInventoryIndex;(e<0||e>=i.inventory.length)&&(i.selectedInventoryIndex=null)}}function al(n){const e=String(n||"");return Array.isArray(i.inventory)&&i.inventory.some(t=>t&&String(t.name||"")===e)}function Si(n){const e=String(n||"");if(!e)return 0;Array.isArray(i.inventory)||(i.inventory=[]);const t=i.inventory.find(o=>o&&String(o.name||"")===e);return M((t==null?void 0:t.quantity)||0)}function ll(n,e){const t=String(n||""),o=M(e);if(!t||o<=0)return!1;Array.isArray(i.inventory)||(i.inventory=[]);const s=i.inventory.findIndex(c=>c&&String(c.name||"")===t);if(s<0)return!1;const r=i.inventory[s],l=M((r==null?void 0:r.quantity)||0);if(l<o)return!1;const a=l-o;return a<=0?(i.inventory.splice(s,1),i.selectedInventoryIndex===s&&(i.selectedInventoryIndex=null),i.selectedInventoryIndex!==null&&Number.isFinite(i.selectedInventoryIndex)&&i.selectedInventoryIndex>s&&(i.selectedInventoryIndex-=1)):r.quantity=a,!0}let $n=null;function ty(n,e){const t=[],o=Math.max(1,M(e)||1),s=Array.isArray(n)?n:[];for(let r=0;r<s.length;r+=o){const l=s.slice(r,r+o).map(a=>String(a||"").trim()).filter(Boolean);l.length&&t.push(l)}return t}function cl(){if($n){try{clearTimeout($n)}catch{}$n=null}}function ro(){cl();const n=i.storyDialog;if(!n||typeof n!="object"||n.done)return;if(n.mode==="PAGE_SWAP"){const u=Array.isArray(n.pages)?n.pages:[];if(!u.length){n.done=!0,N(),U();return}const d=M(n.pageIndex),f=M(n.pageHoldMs)||12e3,p=M(n.transitionMs)||1100,v=M(n.choicesFadeInDelayMs)||850;if(d>=u.length-1){n.pageIndex=Math.min(d,u.length-1),n.pageText=Array.isArray(u[n.pageIndex])?u[n.pageIndex].join(" "):"",n.transition="in",n.done=!0,n.choicesVisible||($n=setTimeout(()=>{try{if(!i.storyDialog||i.phase!=="STORY_DIALOG"||i.storyDialog.mode!=="PAGE_SWAP")return;i.storyDialog.choicesVisible=!0,N(),U()}catch{}},v)),N(),U();return}n.transition="in",n.pageText=Array.isArray(u[d])?u[d].join(" "):"",N(),U(),$n=setTimeout(()=>{try{if(!i.storyDialog||i.phase!=="STORY_DIALOG"||i.storyDialog.mode!=="PAGE_SWAP")return;i.storyDialog.transition="out",N(),U(),$n=setTimeout(()=>{try{if(!i.storyDialog||i.phase!=="STORY_DIALOG"||i.storyDialog.mode!=="PAGE_SWAP")return;i.storyDialog.pageIndex=M(i.storyDialog.pageIndex)+1,i.storyDialog.transition="in",N(),U(),ro()}catch{}},p)}catch{}},f);return}const e=Array.isArray(n.sentences)?n.sentences:[],t=M(n.sentencesPerPage)||3,o=M(n.sentenceMs)||1800,s=M(n.pagePauseMs)||2300,r=M(n.sentenceIndex);if(r>=e.length){n.done=!0,N(),U();return}const l=String(e[r]||"").trim();n.sentenceIndex=r+1,Array.isArray(n.pageSentences)||(n.pageSentences=[]),n.pageSentences.push(l);const a=n.pageSentences.length>=t,c=n.sentenceIndex<e.length;if(N(),U(),a&&c){$n=setTimeout(()=>{try{if(!i.storyDialog||i.phase!=="STORY_DIALOG")return;i.storyDialog.pageIndex=M(i.storyDialog.pageIndex)+1,i.storyDialog.pageSentences=[],N(),U(),ro()}catch{}},s);return}$n=setTimeout(()=>{try{ro()}catch{}},o)}function rn(n,e,t,o){cl(),i.storyDialogReturnPhase=i.phase,i.phase="STORY_DIALOG";const s=arguments.length>=5?arguments[4]:null,r=s&&typeof s=="object"&&s.mode?String(s.mode):"SENTENCE_SCROLL",l=Array.isArray(t)?t.map(c=>String(c||"").trim()).filter(Boolean):[],a=Array.isArray(o)?o:[];if(r==="PAGE_SWAP"){const c=M(s==null?void 0:s.sentencesPerPage)||2,u=ty(l,c);i.storyDialog={kind:String(n||""),title:String(e||""),mode:"PAGE_SWAP",sentences:l,pages:u,pageIndex:0,pageText:u.length?u[0].join(" "):"",pageHoldMs:M(s==null?void 0:s.pageHoldMs)||12e3,transitionMs:M(s==null?void 0:s.transitionMs)||1100,choicesFadeInDelayMs:M(s==null?void 0:s.choicesFadeInDelayMs)||850,transition:"in",done:!1,choices:a,choicesVisible:!1},N(),U(),ro();return}i.storyDialog={kind:String(n||""),title:String(e||""),mode:"SENTENCE_SCROLL",sentences:l,sentencesPerPage:3,sentenceMs:1900,pagePauseMs:2600,sentenceIndex:0,pageIndex:0,pageSentences:[],done:!1,choices:a},N(),U(),ro()}window.closeStoryDialog=()=>{cl(),i.storyDialog=null;const n=i.storyDialogReturnPhase;i.storyDialogReturnPhase=null,i.phase=typeof n=="string"&&n?n:"FARMING",N(),U()};function ny(n){const e=i.storyDialog,t=e&&typeof e=="object"?String(e.title||""):"",o=e&&typeof e=="object"&&Array.isArray(e.pageSentences)?e.pageSentences:[],s=!!(e&&typeof e=="object"&&e.done),r=e&&typeof e=="object"&&Array.isArray(e.choices)?e.choices:[],l=e&&typeof e=="object"?String(e.mode||"SENTENCE_SCROLL"):"SENTENCE_SCROLL",a=e&&typeof e=="object"?String(e.transition||"in"):"in",c=!!(e&&typeof e=="object"&&e.choicesVisible),u=l==="PAGE_SWAP"?String(e&&typeof e=="object"&&e.pageText||""):o.join(" "),d=l==="PAGE_SWAP"?a==="out"?"story-text story-text-wobble-out":"story-text story-text-wobble-in":"story-text",f=l==="PAGE_SWAP"?s&&c:s,p=l==="PAGE_SWAP"?"button-group story-choices story-choices-fade-in":"button-group";n.innerHTML=`
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette"><img class="character-silhouette-img" src="assets/Cultivation_silhouette_new_mask.png" alt="" /></div>
        <div class="character-info">
          <div><strong>${Te(t||"Story")}</strong></div>
          <div></div>
        </div>
      </div>

      <div class="action-panel story-dialog-panel">
        <h2>${Te(t||"Story")}</h2>
        <p class="${d}">${Te(u||"")}</p>

        ${f?`
          <div class="${p}">
            ${r.map(v=>{const b=Te(String((v==null?void 0:v.label)||"")),y=String((v==null?void 0:v.onClick)||"");return!b||!y?"":`<button onclick="${Te(y)}">${b}</button>`}).join("")}
          </div>
        `:""}
      </div>
    </div>
  `}let Ds=[],Uo=null,Bo=null;function ul(){Array.isArray(Ds)||(Ds=[]);for(const n of Ds)try{clearTimeout(n)}catch{}if(Ds=[],Uo){try{cancelAnimationFrame(Uo)}catch{}Uo=null}if(Bo){try{window.removeEventListener("resize",Bo)}catch{}Bo=null}}function dl(){let n=document.getElementById("cinematic-overlay");return n||(n=document.createElement("div"),n.id="cinematic-overlay",n.className="cinematic-overlay",n.innerHTML=`
    <div class="cinematic-stage">
      <div class="cinematic-bg" aria-hidden="true"></div>
      <div class="cinematic-vignette" aria-hidden="true"></div>
      <div class="cinematic-grain" aria-hidden="true"></div>

      <canvas class="cinematic-canvas" aria-hidden="true"></canvas>

      <div class="cinematic-fighter left" aria-hidden="true">
        <div class="cinematic-fighter-icon"><img class="cinematic-fighter-sprite" src="assets/Cultivation_silhouette_new_mask.png" alt="" /></div>
        <div class="cinematic-fighter-badge">You</div>
      </div>

      <div class="cinematic-fighter right" aria-hidden="true">
        <div class="cinematic-fighter-icon"><img class="cinematic-fighter-sprite" src="assets/demon.png" alt="" /></div>
        <div class="cinematic-fighter-badge">Demon</div>
      </div>

      <div class="cinematic-flash" aria-hidden="true"></div>
      <div class="cinematic-explosion" aria-hidden="true"></div>
      <div class="cinematic-shockwave" aria-hidden="true"></div>
      <div class="cinematic-blood" aria-hidden="true"></div>
    </div>
  `,document.body.appendChild(n),n)}function iy(n){const e=n&&typeof n=="object"?n:{},t=typeof e.onResolved=="function"?e.onResolved:null;ul();const o=dl();o.classList.remove("active","impact","fade-out"),o.offsetWidth,o.classList.add("active");const s=o.querySelector(".cinematic-canvas"),r=s&&s.getContext?s.getContext("2d"):null;if(!s||!r){const ae=typeof e.playerWins=="boolean"?e.playerWins:Math.random()<.5;try{o.remove()}catch{}t&&t(ae),N(),U();return}o.classList.add("canvas-mode");function l(ae,P){try{return getComputedStyle(document.documentElement).getPropertyValue(ae).trim()||P}catch{return P}}const a={paper:l("--paper","#eeeeee"),accent:l("--accent","#b91c1c"),maroon:l("--maroon","#5b2323"),maroon2:l("--maroon-2","#3f1a1a"),backdrop0:l("--backdrop-0","#0b1220"),backdrop1:l("--backdrop-1","#0f172a"),backdrop2:l("--backdrop-2","#111827")},c=Math.max(1,Math.min(2.5,window.devicePixelRatio||1));function u(){const ae=Math.max(1,window.innerWidth),P=Math.max(1,window.innerHeight);s.width=Math.floor(ae*c),s.height=Math.floor(P*c),s.style.width=ae+"px",s.style.height=P+"px",r.setTransform(c,0,0,c,0,0)}u(),Bo=()=>{try{u()}catch{}};try{window.addEventListener("resize",Bo)}catch{}const d=(ae,P)=>ae+Math.random()*(P-ae),f=ae=>Math.max(0,Math.min(1,ae)),p=(ae,P,k)=>ae+(P-ae)*k,v=ae=>ae<.5?4*ae*ae*ae:1-Math.pow(-2*ae+2,3)/2;function b(ae){return Math.sin(ae*6.1)*.55+Math.sin(ae*10.7+1.7)*.28+Math.sin(ae*17.3+3.2)*.17}function y(ae){let P=ae>>>0;return()=>{P+=1831565813;let k=Math.imul(P^P>>>15,1|P);return k^=k+Math.imul(k^k>>>7,61|k),((k^k>>>14)>>>0)/4294967296}}const g=typeof e.playerWins=="boolean"?e.playerWins:Math.random()<.5,h=1350,C=1e4,m=1200,S=h+C+m,L={player:{spriteSrc:"assets/Cultivation_silhouette_new_mask.png",side:-1},demon:{spriteSrc:"assets/demon.png",side:1}},T=new Map,R=ae=>{const P=String(ae||"");if(!P)return null;const k=T.get(P);if(k)return k;let G;try{G=new Image,G.decoding="async",G.loading="eager",G.src=P}catch{G=null}return T.set(P,G),G};let V=null,w=null,x=null;const q=[],$=[],ue=[];let D=null,X=!1;function z(ae){const P=y(ae),k=()=>P(),G=(Ie,A)=>Ie+k()*(A-Ie),I=900;let ne;try{ne=document.createElement("canvas")}catch{return null}ne.width=I,ne.height=I;const ie=ne.getContext("2d");if(!ie)return null;const ye=I*.5,be=I*.5;ie.clearRect(0,0,I,I),ie.save(),ie.translate(ye,be);try{ie.filter="blur(14px)"}catch{}ie.globalAlpha=1,ie.fillStyle=a.accent,ie.beginPath(),ie.arc(0,0,270,0,Math.PI*2),ie.fill();for(let Ie=0;Ie<58;Ie++){const A=G(0,Math.PI*2),_=G(120,290),W=G(55,170);ie.beginPath(),ie.arc(Math.cos(A)*_,Math.sin(A)*_*G(.75,1.15),W,0,Math.PI*2),ie.fill()}for(let Ie=0;Ie<10;Ie++){const A=G(-.55,.55)+(k()<.5?Math.PI:0),_=G(220,360),W=G(90,210);ie.beginPath(),ie.arc(Math.cos(A)*_,Math.sin(A)*_,W,0,Math.PI*2),ie.fill()}try{ie.filter="none"}catch{}const Be=ie.createRadialGradient(0,0,40,0,0,420);return Be.addColorStop(0,a.maroon2),Be.addColorStop(.55,a.maroon),Be.addColorStop(1,"rgba(0,0,0,0)"),ie.globalAlpha=.42,ie.fillStyle=Be,ie.beginPath(),ie.arc(0,0,430,0,Math.PI*2),ie.fill(),ie.restore(),{canvas:ne,size:I}}function Q(ae,P){D=z(Math.random()*1e9>>>0);for(let k=0;k<180;k++){const G=d(0,Math.PI*2),I=d(220,820);q.push({x:ae,y:P,vx:Math.cos(G)*I,vy:Math.sin(G)*I,r:d(2,8),life:d(.35,.9),age:0,color:Math.random()<.45?a.paper:Math.random()<.6?a.accent:a.maroon2})}for(let k=0;k<140;k++){const G=d(0,Math.PI*2),I=d(160,760);$.push({x:ae,y:P,vx:Math.cos(G)*I,vy:Math.sin(G)*I*.85,r:d(2,10),age:0,life:d(2.5,7.5),color:Math.random()<.5?a.accent:a.maroon})}for(let k=0;k<70;k++){const G=ae+d(-Math.min(320,window.innerWidth*.25),Math.min(320,window.innerWidth*.25));ue.push({x:G,y:P+d(-40,120),vy:d(26,85),w:d(3,10),len:d(40,260),age:0,life:d(6,12)})}}let J=0,le=0,oe=null;function de(ae,P){if(!oe||J!==ae||le!==P){J=ae,le=P;const k=r.createRadialGradient(ae*.5,P*.4,20,ae*.5,P*.4,Math.max(ae,P)*.9);k.addColorStop(0,a.backdrop2),k.addColorStop(.6,a.backdrop1),k.addColorStop(1,a.backdrop0),oe=k}r.fillStyle=oe,r.fillRect(0,0,ae,P)}function ve(ae,P,k){const G=p(10,Math.max(window.innerWidth,window.innerHeight)*.95,k),I=(1-k)*.9;r.save(),r.globalAlpha=I,r.lineWidth=3,r.strokeStyle="rgba(255,255,255,0.75)",r.beginPath(),r.arc(ae,P,G,0,Math.PI*2),r.stroke(),r.lineWidth=2,r.strokeStyle="rgba(185,28,28,0.55)",r.beginPath(),r.arc(ae,P,G*.92,0,Math.PI*2),r.stroke(),r.restore()}function B(ae,P,k,G,I){const ne=ae&&typeof ae.spriteSrc=="string"?ae.spriteSrc:"",ie=ae&&Number.isFinite(ae.side)?ae.side:0,ye=ne?R(ne):null,Be=118*G;r.save(),r.translate(P,k),r.shadowColor=I,r.shadowBlur=26,ye&&ye.complete&&ye.naturalWidth>0?(r.globalAlpha=1,r.drawImage(ye,-Be*.5,-Be*.5,Be,Be)):(r.globalAlpha=.92,r.lineWidth=Math.max(2,3*G),r.strokeStyle="rgba(255,255,255,0.80)",r.fillStyle=ie>0?"rgba(185,28,28,0.18)":"rgba(255,255,255,0.10)",r.beginPath(),r.arc(0,0,Be*.38,0,Math.PI*2),r.fill(),r.stroke(),r.globalAlpha=.75,r.beginPath(),r.moveTo(-Be*.16,-Be*.18),r.lineTo(Be*.18,Be*.16),r.stroke()),r.restore()}function j(ae,P,k){if(!D||!D.canvas)return;const G=window.innerWidth,I=window.innerHeight,ie=Math.max(G,I)*1.65/D.size,ye=k*220;r.save(),r.translate(ae,P+ye),r.globalAlpha=1,r.drawImage(D.canvas,-.5*D.size*ie,-.5*D.size*ie,D.size*ie,D.size*ie),r.restore()}let re=performance.now(),Me=re;function Ae(ae){const P=Math.min(.05,(ae-Me)/1e3);Me=ae;const k=ae-re,G=window.innerWidth,I=window.innerHeight,ie=1-f((k-(h+C))/m);r.save(),r.globalAlpha=1,de(G,I);const Be=f(1-Math.abs(k-h)/520)*14,Ie=k/1e3,A=b(Ie)*Be,_=b(Ie+.33)*Be;r.translate(A,_);const W=f(k/h),he=v(W),ce=G*.5,se=I*.5,Ee=Math.min(520,G*.42);let _e=p(ce-Ee,ce,he),Ce=p(ce+Ee,ce,he);const Fe=p(1,1.25,he),H=46*Fe*2+10;if(Ce-_e<H&&(_e=ce-H*.5,Ce=ce+H*.5),k<h){if(V!=null&&w!=null){const Se=Math.abs(_e-V)+Math.abs(Ce-w),Pe=Math.max(6,Math.min(18,Math.floor(Se/16)));for(let Ne=0;Ne<Pe;Ne++){const we=(Ne+1)/(Pe+1),fe=p(V,_e,we),xe=p(w,Ce,we),pe=x!=null?p(x,se,we):se,Ve=(1-we)*.22;r.globalAlpha=Ve,B(L.player,fe,pe,Fe,"rgba(255,255,255,0.14)"),B(L.demon,xe,pe,Fe,"rgba(185,28,28,0.20)")}}V=_e,w=Ce,x=se}else V=null,w=null,x=null;if(r.globalAlpha=1,k<h&&(B(L.player,_e,se,Fe,"rgba(255,255,255,0.18)"),B(L.demon,Ce,se,Fe,"rgba(185,28,28,0.30)")),!X&&k>=h&&(X=!0,Q(ce,se)),k>=h){const Pe=f((k-h)/240);if(o.classList.toggle("hard-flash",k<h+240),r.save(),r.globalAlpha=1-Pe,r.fillStyle=a.paper,r.fillRect(-A,-_,G,I),r.restore(),k>=h+240){const Ne=f((k-(h+240))/700);ve(ce,se,Ne);for(let xe=q.length-1;xe>=0;xe--){const pe=q[xe];if(pe.age+=P,pe.age>=pe.life){q.splice(xe,1);continue}pe.vx*=Math.pow(.08,P),pe.vy*=Math.pow(.08,P),pe.x+=pe.vx*P,pe.y+=pe.vy*P;const Ve=1-pe.age/pe.life;r.globalAlpha=Ve*.95,r.fillStyle=pe.color,r.beginPath(),r.arc(pe.x,pe.y,pe.r,0,Math.PI*2),r.fill()}const we=f((k-(h+240))/C);r.globalAlpha=1,j(ce,se,we);const fe=980;for(let xe=$.length-1;xe>=0;xe--){const pe=$[xe];if(pe.age+=P,pe.age>=pe.life){$.splice(xe,1);continue}pe.vy+=fe*P,pe.vx*=Math.pow(.35,P),pe.vy*=Math.pow(.45,P),pe.x+=pe.vx*P,pe.y+=pe.vy*P;const Ve=1-pe.age/pe.life;r.globalAlpha=Ve,r.fillStyle=pe.color,r.beginPath(),r.arc(pe.x,pe.y,pe.r,0,Math.PI*2),r.fill()}for(let xe=ue.length-1;xe>=0;xe--){const pe=ue[xe];if(pe.age+=P,pe.age>=pe.life){ue.splice(xe,1);continue}pe.y+=pe.vy*P;const Ve=1-pe.age/pe.life;r.globalAlpha=Ve,r.strokeStyle=a.maroon,r.lineWidth=pe.w,r.lineCap="round",r.beginPath(),r.moveTo(pe.x,pe.y),r.lineTo(pe.x,pe.y+pe.len),r.stroke()}}}if(r.restore(),ie<1&&(r.save(),r.globalAlpha=1-ie,r.fillStyle="rgba(0,0,0,1)",r.fillRect(0,0,G,I),r.restore()),k>=S){try{o.remove()}catch{}t&&t(g),N(),U();return}Uo=requestAnimationFrame(Ae)}Uo=requestAnimationFrame(Ae)}function oy(){iy({onResolved:n=>{n?(O("You stand victorious."),ke({name:"What's the point.",icon:"…",disabled:!1,callback:()=>window.demonCinematicWhatsPoint()})):(O("💀 The demon wins."),ke({name:"Just lay down and rot",icon:"💀",disabled:!1,callback:()=>window.demonCinematicLayDownAndRot()})),Mn(),i.hdDetour.demonCinematicResolved=!0}})}window.demonCinematicWhatsPoint=()=>{i.runEnded||(Ue(["What's the point."]),rn("ENDING","Bad Ending — What's the Point",["You win.","…and nothing changes inside you.","You stare at the horizon until the horizon stares back."],[{label:"Continue.",onClick:"window.closeStoryDialog()"}],{mode:"PAGE_SWAP",sentencesPerPage:1,pageHoldMs:8500,transitionMs:1100,choicesFadeInDelayMs:950}))};window.demonCinematicLayDownAndRot=()=>{i.runEnded||(Ue(["Just lay down and rot"]),rn("ENDING","Terrible Ending — Lay Down and Rot",["💀 The demon wins.","You stop running. You stop fighting.","The world keeps moving without you."],[{label:"Continue.",onClick:"window.closeStoryDialog()"}],{mode:"PAGE_SWAP",sentencesPerPage:1,pageHoldMs:8500,transitionMs:1100,choicesFadeInDelayMs:950}))};window.hdRatherWalkDifferentPath=()=>{Mn(),i.hdDetour.choseDifferentPath=!0,i.hasJoinedSect&&Qa(),i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="I Rather Walk a Different Path."),ke({name:"Explore a Mysterious Cave.",icon:"🕳️",disabled:!1,callback:()=>window.hdExploreMysteriousCave()}),N(),U()};window.hdExploreMysteriousCave=()=>{Mn(),i.hdDetour.exploredCave=!0,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Explore a Mysterious Cave."),ke({name:"The Demonic Manual has followed you.",icon:"📕",disabled:!1,callback:()=>window.hdCaveDemonicManualFollowed()}),ke({name:"Ignore the calling and continue journey.",icon:"🚶",disabled:!1,callback:()=>window.hdCaveIgnoreCalling()}),N(),U()};window.hdCaveDemonicManualFollowed=()=>{Mn(),i.hdDetour.caveChoice="demonicManual",i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="The Demonic Manual has followed you."&&(n==null?void 0:n.name)!=="Ignore the calling and continue journey."),rl(n=>n==="Hidden Heavenly Demon Manual"||n.startsWith("Heavenly Demon Manual")),al("Demonic Manual")||dt({name:"Demonic Manual",icon:"📕",description:"A manual steeped in demonic intent. Other sects will not tolerate its use.",equippable:!0}),vd(),N(),U()};window.hdCaveIgnoreCalling=()=>{Mn(),i.hdDetour.caveChoice="ignore",i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="The Demonic Manual has followed you."&&(n==null?void 0:n.name)!=="Ignore the calling and continue journey."),ke({name:"Settling down and starting a family.",icon:"👪",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.hdStartFamily()}),N(),U()};window.hdStartFamily=()=>{Mn(),i.hdDetour.startedFamily=!0,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Settling down and starting a family."),ke({name:"Gather Groceries.",icon:"🛒",disabled:!1,callback:()=>window.hdGatherGroceries()}),N(),U()};window.hdGatherGroceries=()=>{Mn(),i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Gather Groceries."),i.hdDetour.groceriesCount=0,i.hdDetour.returnHomeAvailable=!1,Array.isArray(i.repeatableActions)||(i.repeatableActions=[]),i.repeatableActions.some(n=>(n==null?void 0:n.name)==="Grab Groceries")||i.repeatableActions.push({name:"Grab Groceries",icon:"🛍️",disabled:!1,onStart:()=>i.stamina<2?!1:(i.stamina-=2,!0),callback:()=>window.hdGrabGroceries()}),N(),U()};window.hdGrabGroceries=()=>{Mn(),i.hdDetour.groceriesCount=M(i.hdDetour.groceriesCount)+1;const n=Math.max(0,5-i.hdDetour.groceriesCount);O(`You gather groceries. (${n} remaining)`),i.hdDetour.groceriesCount>=5&&(i.repeatableActions=(Array.isArray(i.repeatableActions)?i.repeatableActions:[]).filter(e=>(e==null?void 0:e.name)!=="Grab Groceries"),i.hdDetour.returnHomeAvailable=!0,ke({name:"Return Home.",icon:"🏠",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.hdReturnHome()})),N(),U()};window.hdReturnHome=()=>{i.specialActions=i.specialActions.filter(e=>(e==null?void 0:e.name)!=="Return Home."),rn("RETURN_HOME","Return Home",["You return to your house.","The door is open, though you remember closing it.","Stepping inside blood is splattered everywhere.","You go into shock from horror.","The world blurs.","You walk deeper inside.","You see your kids and wife pale white and covered in blood laying in the living room.","The man who did this, no the demon who did this is sitting on their bodies.",`The demon speaks: "You should have taken the demon manual when you had the chance. Your poor sweet family. Anyways its a shame but I'll be kind and in exchange I'll allow you one last opportunity to join a higher power. What do you say?"`],[{label:"Face the Demon.",onClick:"window.hdFaceDemon()"},{label:"Go With Demon.",onClick:"window.hdGoWithDemon()"},{label:"Run Away from Demon.",onClick:"window.hdRunAwayFromDemon()"}],{mode:"PAGE_SWAP",sentencesPerPage:2,pageHoldMs:12e3,transitionMs:1100,choicesFadeInDelayMs:950})};window.hdRunAwayFromDemon=()=>{window.closeStoryDialog(),is(),i.fledDemon=!0,i.orthodoxHide.stage||(i.orthodoxHide.stage="discover"),O("You run. You do not look back."),O("☯️ In the days that follow, whispers reach you — a hidden orthodox sect."),ke({name:"Discover Hidden Orthodox Sect",icon:"☯️",disabled:!1,callback:()=>window.orthodoxDiscoverHiddenSect()}),N(),U()};window.orthodoxDiscoverHiddenSect=()=>{is(),i.orthodoxHide.stage="saved",Ue(["Discover Hidden Orthodox Sect","Saved by the mysterious sect.","In exchange for utmost loyalty you will learn the way of the orthodox."]),O("☯️ You follow the rumors into the mountains..."),O("🌫️ Shadows move. You are being watched."),ke({name:"Saved by the mysterious sect.",icon:"🕯️",disabled:i.stamina<5,onStart:()=>i.stamina<5?!1:(i.stamina-=5,!0),callback:()=>window.orthodoxSavedByMysteriousSect()}),N(),U()};window.orthodoxSavedByMysteriousSect=()=>{is(),i.orthodoxHide.stage="loyalty",Ue(["Discover Hidden Orthodox Sect","Saved by the mysterious sect.","In exchange for utmost loyalty you will learn the way of the orthodox."]),O("The demon finds you — but not before the sect does."),O("☯️ A formation flares. You are pulled to safety."),ke({name:"In exchange for utmost loyalty you will learn the way of the orthodox.",icon:"📜",disabled:!1,callback:()=>window.orthodoxPledgeUtmostLoyalty()}),N(),U()};window.orthodoxPledgeUtmostLoyalty=()=>{is(),i.orthodoxHide.stage="joined",i.joinedOrthodoxSect=!0,i.demonMonarchOnly=!1,Ue(["Discover Hidden Orthodox Sect","Saved by the mysterious sect.","In exchange for utmost loyalty you will learn the way of the orthodox."]),rl(n=>{const e=String(n||"");return e.includes("Manual")?e!=="Orthodox Manual":!1}),al("Orthodox Manual")||dt({name:"Orthodox Manual",icon:"📕",description:"A manual of righteous cultivation. Its loyalty binds you forever.",equippable:!0}),i.hasJoinedSect=!0,i.currentSect="Orthodox",i.manualType="Orthodox",i.manualTier=1,i.sectRankLayer="outer",i.sectRankNumber=6,i.sectRankPyramidOpen=!1,Mo(5),(!i.equipped||typeof i.equipped!="object")&&(i.equipped={}),i.equipped.manual="Orthodox Manual",ai(),O("☯️ You kneel and pledge loyalty. The sect accepts you."),O("You receive the Orthodox Manual."),O("Your loyalty is sealed. You can never leave this sect.");try{li(),i.orthodoxWarStage===0&&(i.orthodoxWarStage=0)}catch{}N(),U()};window.hdFaceDemon=()=>{window.closeStoryDialog(),oy()};window.hdGoWithDemon=()=>{window.closeStoryDialog(),rl(n=>n==="Hidden Heavenly Demon Manual"||n.startsWith("Heavenly Demon Manual")),al("Demonic Manual")||dt({name:"Demonic Manual",icon:"📕",description:"A manual steeped in demonic intent. Other sects will not tolerate its use.",equippable:!0}),window.joinDemonMonarchSect(),ke({name:"Destroy the Sect from Within.",icon:"🗡️",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.dmDestroySectFromWithin()}),N(),U()};function sy(n){n.innerHTML=`
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette"><img class="character-silhouette-img" src="assets/Demonic_manual.png" alt="" /></div>
        <div class="character-info">
          <div><strong>Forbidden Manual</strong></div>
          <div>You have been cast out</div>
        </div>
      </div>

      <div class="action-panel">
        <h2>Expelled</h2>
        <p class="story-text">Your demonic ways will not be tolerated in this sect! BE GONE!</p>
        <div class="button-group">
          <button onclick="window.dismissDemonExile()">Continue</button>
        </div>
      </div>
    </div>
  `}function ry(n){n.innerHTML=`
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette"><img class="character-silhouette-img" src="assets/rusted-axe.png" alt="" /></div>
        <div class="character-info">
          <div><strong>Lumberjack Phase</strong></div>
          <div>Honest work in the forest</div>
        </div>
      </div>
      
      <div class="game-content-layout">
        <div class="log">
          <h3>Activity Log</h3>
          <div id="game-log"></div>
        </div>
        
        <div class="panels-container">
          ${Md()}
        </div>
      </div>
    </div>
  `}function ay(n){const e=String((n==null?void 0:n.name)||"").toLowerCase();return e.includes("demon")||e.includes("monarch")||e.includes("hell")?"assets/demon.png":e.includes("heaven")||e.includes("immortal")||e.includes("angel")?"assets/heavenly-demon.png":"assets/Cultivation_silhouette_new_mask.png"}function ly(n){const e=i.enemy,t=ay(e);n.innerHTML=`
    <div class="game-screen">
      <div class="character-display">
        <div class="character-silhouette">${It("moves")}</div>
        <div class="character-info">
          <div><strong>Combat Phase</strong></div>
          <div>Life and death hang in the balance</div>
        </div>
      </div>
      
      <div class="combat-view">
        <div class="combatant player-side">
          <div class="character-silhouette"><img class="character-silhouette-img" src="assets/Cultivation_silhouette_new_mask.png" alt="" /></div>
          <div class="hp-bar">
            <div class="hp-fill" style="width: ${i.health/i.maxHealth*100}%"></div>
          </div>
          <div class="hp-text">${i.health}/${i.maxHealth} HP</div>
          <div class="combat-name">You</div>
        </div>
        
        <div class="vs">VS</div>
        
        <div class="combatant enemy-side">
          <div class="character-silhouette"><img class="character-silhouette-img" src="${Te(t)}" alt="" /></div>
          <div class="hp-bar">
            <div class="hp-fill enemy-hp" style="width: ${e.health/e.maxHealth*100}%"></div>
          </div>
          <div class="hp-text">${e.health}/${e.maxHealth} HP</div>
          <div class="combat-name">${e.name}</div>
        </div>
      </div>
      
      <div class="action-panel">
        <h2>Combat</h2>

        <div class="combat-moves-bar">
          ${[0,1,2].map(o=>{const s=String((Array.isArray(i.equippedMoves)?i.equippedMoves[o]:"punch")||"punch"),r=Xo(s)||"Punch",l=jd(s),a=Yd(s),c=Xd(s),u=c&&Number.isFinite(c.damage)?`DMG: ${ge(c.damage)}`:"",d=l>0?`Cooldown: ${Te($d(l))}`:"&nbsp;",f=u?Te(u):"&nbsp;";return`
              <button class="combat-move-btn" type="button" onpointerdown="window.useEquippedMove(${o})" ${a?"disabled":""}>
                <div class="combat-move-title">${Te(r)}</div>
                <div class="combat-move-sub">${f}</div>
                <div class="combat-move-sub">${d}</div>
              </button>
            `}).join("")}
        </div>

        <div class="combat-actions-row" style="margin-top:12px; display:flex; justify-content:center;">
          <button class="combat-move-btn" style="max-width:260px;" onclick="window.fleeCombat()">FLEE</button>
        </div>
      </div>
      
      <div class="log">
        <div id="game-log"></div>
      </div>
    </div>
  `}function Ni(){try{i.activeSidePanels instanceof Set&&i.activeSidePanels.clear()}catch{}i.sectRankPyramidOpen=!1,i.movesPickerSlot=null}function os(){i.inCombat=!1,i.enemy=null,i.combatContext=null,i.phase=i.questReturnPhase||"FARMING",i.questReturnPhase=null,Rt()}function cy(){const n=i.activeQuest;if(!n||n.completed||!n.started||!n.pendingCombatStepId)return!1;const e=n.activeStep;if(!e||e.type!=="combat"||e.id!==n.pendingCombatStepId)return!1;n.pendingCombatStepId=null,n.steps.push({...e,resolved:!0,outcome:"flee"}),n.activeStep=null;const t=10+Math.floor(Math.random()*6);return n.progressPct=Math.max(0,Math.min(100,M(n.progressPct)-t)),O(`You fled the quest fight. Progress -${t}%. Mercy step next.`),n.forceMercyStep=!0,os(),i.health=Math.max(1,M(i.health)),i.activeSidePanels.add("quests"),So(),U(),N(),!0}window.fleeCombat=()=>{if(!i.inCombat||i.phase!=="COMBAT"||cy()||Iy()||Sy()||ey())return;const n=i.combatContext;n&&n.type==="sectRankDuel"?(i.stamina=0,O("You flee. Your stamina is exhausted.")):O("You flee the battle."),os(),i.health=M(i.maxHealth),N(),U()};let to=0,no=0;window.rerollFate=()=>{var e;if(!((e=i.rebirthUpgrades)!=null&&e.canRerollFate)||i.rerollsRemaining<=0)return;i.rerollsRemaining--;const n=i.luck;gr(),i.luck=n,N(),U(),O(`Rerolled fate! ${i.rerollsRemaining} rerolls remaining.`)};window.startGame=()=>{i.phase="FARMING",i.repeatableActions=[{name:"Rest",icon:"😴",disabled:!1,callback:()=>window.rest()},{name:"Farm Crops",icon:"🌾",disabled:!1,callback:()=>window.farmCrops()},{name:"Sell Crops",icon:"💰",disabled:!1,callback:()=>window.sellCrops()}],i.hasBoughtTools?i.specialActions=[]:i.specialActions=[{name:`Buy Farming Tools (${i.farmingToolCost} Copper)`,icon:"🔨",disabled:i.copper<i.farmingToolCost,callback:()=>window.buyTools()}],!i.hasMetFakeImmortal&&i.copper>=30&&i.specialActions.push({name:'Meet the "Immortal Cultivator"',icon:"🧙",disabled:i.copper<30,callback:()=>window.meetFakeImmortal()}),N(),U(),O("Your cultivation journey begins as a humble farmer...")};window.rest=()=>{if(!(!i.devIgnoreRequirements&&i.stamina>=i.maxStamina))if(i.isResting=!i.isResting,N(),U(),i.isResting){const n=i.dozeOffUnlocked?1.5:1;O(`You begin resting... (+${n} stamina per second)`)}else O("You stop resting.")};window.farmCrops=()=>{if(!i.devIgnoreRequirements){if(i.stamina<2)return;i.stamina-=2}i.isResting=!1;const n=i.farmingLevel;to+=n,N(),U(),O(`You farm crops. +${n} crops (Total: ${to})`)};window.sellCrops=()=>{if(to<=0)return;const n=Math.floor(to*2*i.copperMultiplier);i.copper+=n,O(`You sell ${to} crops for ${n} copper.`),to=0,N(),U()};window.gatherHerbsLegacy=()=>{try{St("gather")}catch{}if(!i.devIgnoreRequirements){if(i.stamina<2)return;i.stamina-=2}i.isResting=!1,typeof i.mysteriousHerbFound!="boolean"&&(i.mysteriousHerbFound=!1);const n=1+Math.floor(Math.random()*3);dt({name:"Ginseng",kind:"ingredient",description:"A hardy root used in many formulas.",quantity:n}),O(`You gather herbs. +${n} Ginseng.`),!i.mysteriousHerbFound&&Math.random()<.03&&(i.mysteriousHerbFound=!0,dt({name:"Mysterious Herb",description:"Qi gain permanently increased by 20%",quantity:1}),O("You discover a Mysterious Herb.")),N(),U()};window.craftHerbPillLegacy=()=>{try{St("craft")}catch{}ll("Ginseng",5)&&(dt({name:"Herb Pill",kind:"pill",pillFile:"herb_pill.png",imageSrc:"assets/herb_pill.png",description:"Use: Instantly grants 15 Qi",quantity:1}),O("You craft an Herb Pill."),N(),U())};function dt(n){if(!n||typeof n!="object"||typeof n.name!="string"||!n.name)return;const e=i.inventory.find(t=>t.name===n.name);e?e.quantity=(e.quantity||1)+(n.quantity||1):i.inventory.push({...n,quantity:n.quantity||1})}window.buyTools=()=>{!i.devIgnoreRequirements&&i.copper<i.farmingToolCost||i.hasBoughtTools||(i.devIgnoreRequirements||(i.copper-=i.farmingToolCost),i.hasBoughtTools=!0,i.copperMultiplier=1.5,dt({name:"Farming Tools",icon:"🔨",description:"Increases copper gained from selling crops by 50%"}),N(),U(),O("You buy farming tools! Copper gain increased by 50%!"))};window.toggleCultivate=()=>{if(i.isCultivating){i.isCultivating=!1,N(),U(),O("You stop cultivating.");return}const n=vr();if(n&&Number.isFinite(n.cost)&&n.cost>0&&i.qi>=n.cost){i.isCultivating=!1,N(),U(),O("Your Qi is already at the maximum needed for the next realm.");return}if(!Zs()){i.isCultivating=!1,N(),U();const e=Li(Js());O(`You can no longer cultivate past ${e.years} years, ${e.months} months.`);return}i.isCultivating=!0,N(),U(),O("You begin cultivating... (+1 Qi per second)")};const si=new Map;let mi=null;function uy(){const n=document.querySelectorAll(".action-button[data-action-key]");for(const o of n){const s=String(o.getAttribute("data-action-key")||"");if(!s)continue;const r=Xt(s);if(o.dataset.running=r?"1":"0",r){o.setAttribute("aria-busy","true");const l=`${(ao(s)*100).toFixed(1)}%`;o.style.setProperty("--progressPct",l)}else o.removeAttribute("aria-busy"),o.style.setProperty("--progressPct","0%")}const e=document.querySelectorAll(".herbalism-progress-fill[data-progress-key]");for(const o of e){const s=String(o.getAttribute("data-progress-key")||"");if(!s)continue;const r=`${Math.max(0,Math.min(100,Math.floor(ao(s)*100)))}%`;o.style.width=r}const t=document.querySelectorAll(".quest-step-fill[data-progress-key]");for(const o of t){const s=String(o.getAttribute("data-progress-key")||"");if(!s)continue;const r=`${Math.max(0,Math.min(100,Math.floor(ao(s)*100)))}%`;o.style.width=r}}function Yt(n,e){return`${n}:${(e==null?void 0:e.name)||""}`}function dy(n,e){const t=String((e==null?void 0:e.name)||""),o=sb();if(n==="repeatable")return t==="Farm Crops"||t==="Chop Wood"?Math.max(250,2e3-o):t==="Sell Crops"||t==="Sell Wood"||t==="Grab Groceries"?Math.max(250,1e3-o):0;if(n==="special"){const s=Number(e==null?void 0:e.durationMs);if(Number.isFinite(s)&&s>=0)return s;const r=t.includes("Enter Deep into"),l=t.includes("Buy Normal Axe"),a=t.includes("Buy Legendary Axe"),c=t.includes("Bargain"),u=t.includes("Ignore Merchant"),d=t.includes("Meet the"),f=t.includes("Buy Farming Tools")||t.includes("Buy Better Farming Tools");return 5e3}return 0}function Xt(n){return si.has(n)}function ao(n){const e=si.get(n);if(!e)return 0;const o=(performance.now()-e.startedAt)/e.durationMs;return Number.isFinite(o)?Math.max(0,Math.min(1,o)):0}function Pd(){const n=si.size>0;if(n&&!mi){const e=()=>{if(si.size===0){mi=null;return}try{uy()}catch(t){try{console.error("Timed action progress update error:",t)}catch{}}mi=requestAnimationFrame(e)};mi=requestAnimationFrame(e)}if(!n&&mi){try{cancelAnimationFrame(mi)}catch{}mi=null}}function Dd(n){return nr(n)}function Nd(){(!i.buttonCooldowns||typeof i.buttonCooldowns!="object")&&(i.buttonCooldowns={})}function tr(n){var o;Nd();const e=Number((o=i.buttonCooldowns)==null?void 0:o[n]);if(!Number.isFinite(e)||e<=0)return 0;const t=e-Date.now();return t>0?t:0}function cu(n){const e=tr(n);return e>0?Math.ceil(e/1e3):0}function kd(n,e){const t=Number(e);if(!Number.isFinite(t)||t<=0)return;Nd();let o=t;String(n||"").startsWith("special:")&&(o=Math.max(.1,o-rb())),i.buttonCooldowns[n]=Date.now()+Math.floor(o*1e3)}function nr(n,e){var a,c,u;const t=e&&typeof e=="object"?e:{},o=si.get(n);if(!o)return;try{o.timeoutId&&clearTimeout(o.timeoutId)}catch{}const s=String(o.type||""),r=String(((a=o.action)==null?void 0:a.name)||""),l=typeof((c=o.action)==null?void 0:c.callback)=="function"?o.action.callback:null;if(si.delete(n),s==="special"&&(i.specialActions=i.specialActions.filter(d=>Yt("special",d)!==n)),l?l():s==="special"&&(r==="Exploring the Sect Library."?window.cloudStoryExploreLibrary():r==="Walk with the Mysterious Cultivator to the Building."?window.cloudStoryWalkToBuilding():r==="Sect Leader Offers Items and Recruitment."?window.cloudStoryLeaderOffers():r==="Arrival Among Clouds."?window.cloudStoryArrivalAmongClouds():r==="Confronted by an Outer Disciple."?window.cloudStoryConfrontedByOuterDisciple():r==="Battle starts."?window.cloudStoryBattleStarts():r==="Find heavenly demon manual."?window.cloudStoryFindHeavenlyDemonManual():r==="Take the Demonic Manual."?window.cloudStoryTakeDemonicManual():r==="Find nothing."&&window.cloudStoryFindNothingInLibrary()),!t.ignoreCooldown){const d=Number((u=o.action)==null?void 0:u.cooldownSeconds);Number.isFinite(d)&&d>0&&kd(n,d)}N(),U(),Pd()}function Yo(n,e,t){const o=Yt(n,e);if(si.has(o))return;const s={type:n,action:e,durationMs:t,startedAt:performance.now(),timeoutId:null};s.timeoutId=setTimeout(()=>Dd(o),t),si.set(o,s),Pd(),N()}window.executeAction=(n,e)=>{if(i.runEnded)return;const o=(n==="repeatable"?i.repeatableActions:i.specialActions)[e],s=!!i.devIgnoreRequirements;if(!o)return;const r=Yt(n,o);if(!s&&tr(r)>0||o.disabled&&!s)return;try{St("click")}catch{}if(typeof o.onStart=="function"){let a=!0;if(s){const c={stamina:i.stamina,qi:i.qi,copper:i.copper,silver:i.silver,gold:i.gold,spiritStonesLow:i.spiritStonesLow,spiritStonesMid:i.spiritStonesMid,spiritStonesHigh:i.spiritStonesHigh,luck:i.luck};a=o.onStart(),i.stamina=c.stamina,i.qi=c.qi,i.copper=c.copper,i.silver=c.silver,i.gold=c.gold,i.spiritStonesLow=c.spiritStonesLow,i.spiritStonesMid=c.spiritStonesMid,i.spiritStonesHigh=c.spiritStonesHigh,i.luck=c.luck}else a=o.onStart();if(a===!1&&!s){N(),U();return}}if(!s){const a=[["costCopper","copper"],["costSilver","silver"],["costGold","gold"],["costSpiritStonesLow","spiritLow"],["costSpiritStonesMid","spiritMid"],["costSpiritStonesHigh","spiritHigh"]];for(const[c,u]of a){const d=Number(o==null?void 0:o[c]);if(!(!Number.isFinite(d)||d<=0)&&!Zu(u,d))return}for(const[c,u]of a){const d=Number(o==null?void 0:o[c]);!Number.isFinite(d)||d<=0||Ju(u,d)}}const l=dy(n,o);if(l>0){try{St("start")}catch{}if(s){if(Xt(r)){nr(r,{ignoreCooldown:!0});return}Yo(n,o,l),nr(r,{ignoreCooldown:!0});return}Yo(n,o,l),U();return}n==="special"&&(i.specialActions=i.specialActions.filter(a=>a!==o)),o.callback&&o.callback();try{St("complete")}catch{}if(!s){const a=Number(o==null?void 0:o.cooldownSeconds);Number.isFinite(a)&&a>0&&kd(r,a)}N(),U()};window.advanceRealm=()=>{const n=vr();if(!n.cost||i.qi<n.cost)return;i.qi-=n.cost;const e=i.cultivationSubIndex===8,t=Bn();if(e&&n.type==="breakthrough"){if(i.cultivationMajorIndex===0&&!i.hasManual){O("You need a cultivation manual to breakthrough to the next major realm!"),i.qi+=n.cost;return}if(i.isDemonPath&&t.data.corruptionGain&&ol(t.data.corruptionGain,"Breakthrough"),i.isDemonPath){const a=M(i.cultivationMajorIndex)+1>=6?2e3:1e3;i.expectedLifespanMonths=M(i.expectedLifespanMonths)+a*12,O(`🕰️ Lifespan extended by ${a} years! Expected Lifespan: ${Li(i.expectedLifespanMonths).years} years.`)}i.cultivationMajorIndex++,i.cultivationSubIndex=0;const o=Bn();oi(),O(`🌟 BREAKTHROUGH! You advance to ${o.major} ${o.sub}!`);try{po()}catch{}try{ni()}catch{}try{ii("major_breakthrough")}catch{}const s=M(i.cultivationMajorIndex)+1;if(!i.isDemonPath&&s>=20){O("You have reached the 20th Major Realm. Your run ends."),window.endRunToRebirth({actionName:"Reincarnate."});return}if(i.isDemonPath&&s>=10){O("You have reached the 10th Demonic Major Realm. Your run ends."),window.endRunToRebirth({actionName:"Reincarnate."});return}}else{i.cultivationSubIndex++;const o=Bn(),s=i.isDemonPath?(M(i.cultivationMajorIndex)+1>=6?1e3:500)*12:Mb(i.cultivationMajorIndex,i.cultivationSubIndex);if(s>0){i.expectedLifespanMonths=M(i.expectedLifespanMonths)+s;const r=Math.floor(s/12),l=Li(i.expectedLifespanMonths).years;O(`🕰️ Lifespan extended by ${r} year${r===1?"":"s"}! Expected Lifespan: ${l} years.`)}oi(),O(`📈 You advance to ${o.major} ${o.sub}!`);try{po()}catch{}try{ni()}catch{}try{ii("minor_advance")}catch{}}N(),U()};window.meetFakeImmortal=()=>{i.hasMetFakeImmortal=!0,i.phase="FAKE_IMMORTAL",N()};window.acceptImmortal=()=>{i.copper-=30,i.hasPaidFakeImmortal=!0,O('You pay 30 copper to the "immortal"...'),O("He smirks, pockets the money, and vanishes in a puff of smoke."),O("You have been scammed."),setTimeout(()=>{i.phase="FARMING",i.specialActions.find(n=>n.name&&n.name.includes("Buy Axe"))||i.specialActions.push({name:"Buy Axe (50 Copper)",icon:"🪓",disabled:i.copper<50,callback:()=>window.buyAxe()}),N(),U(),O("Dejected but wiser, you return to the fields.")},2e3)};window.rejectImmortal=()=>{O('You reject the suspicious "immortal" and walk away.'),setTimeout(()=>{i.phase="FARMING",i.specialActions.find(n=>n.name&&n.name.includes("Buy Axe"))||i.specialActions.push({name:"Buy Axe (50 Copper)",icon:"🪓",disabled:i.copper<50,callback:()=>window.buyAxe()}),N(),U(),O("You return to the fields, looking for new opportunities.")},1500)};window.buyAxe=()=>{i.copper<50||(i.copper-=50,dt({name:"Rusted Axe",icon:"🪓",description:"A basic axe for chopping wood"}),O("🪓 You buy a rusted axe! You can now chop wood."),i.hasUnlockedWood=!0,i.repeatableActions=[{name:"Rest",icon:"😴",disabled:!1,callback:()=>window.rest()},{name:"Chop Wood",icon:"🪓",disabled:!1,callback:()=>window.chopWood()},{name:"Sell Wood",icon:"💰",disabled:!1,callback:()=>window.sellWood()}],N(),U())};window.helpNeighboringVillage=()=>{O("🏘️ You decide to help the neighboring village with their needs."),i.specialActions=i.specialActions.filter(n=>!n.name.includes("Help Neighboring Village")),i.repeatableActions.push({name:"Gather Materials for Village",icon:"📦",disabled:!1,callback:()=>window.gatherMaterialsForVillage()}),N(),U()};window.gatherMaterialsForVillage=()=>{if(!i.devIgnoreRequirements&&i.villageMaterialsCooldown>0)return;i.devIgnoreRequirements||(i.villageMaterialsCooldown=2),i.copper+=10;const n=Math.floor(2*i.silverMultiplier);i.silver+=n,O(`📦 You gather materials for the village! +10 copper, +${n} silver`),N(),U()};window.chooseSteadyCoin=()=>{i.hasChosen100SilverRoute=!0,i.isBusinessOriented=!0,i.hasStartedBusiness=!0,i.incomeCycleSeconds=0,i.businessCycleSeconds=5,i.businessIncomePerCycle={silver:5,copper:15,gold:0,spiritStonesLow:0},i.businessUpgradedExpansion=!1,i.businessUpgradedEmployees=!1,i.businessChoseStabilityIsntEnough=!1,i.businessChoseNoMoreGames=!1,i.businessMerchantGuildPartnered=!1,i.businessNervousNeighboringSectOpened=!1,i.businessNeighboringSectNegotiated=!1,i.businessNeighboringSectDenied=!1,i.businessSectRetaliationResolved=!1,i.businessFoundMysteriousManual=!1,i.businessGuildRetaliationPrepared=!1,i.businessCarpetBombDone=!1,N(),U()};function hl(n){const e=Number(n);if(!Number.isFinite(e)||e<0)return;const t=i.businessIncomePerCycle&&typeof i.businessIncomePerCycle=="object"?i.businessIncomePerCycle:{silver:5,copper:15,gold:0,spiritStonesLow:0},o={copper:Math.floor(M(t.copper)*e),silver:Math.floor(M(t.silver)*e),gold:Math.floor(M(t.gold)*e),spiritStonesLow:Math.floor(M(t.spiritStonesLow)*e)};i.businessIncomePerCycle={copper:M(o.copper),silver:M(o.silver),gold:M(o.gold),spiritStonesLow:M(o.spiritStonesLow)}}window.businessExpansionOpportunity=()=>{i.businessUpgradedExpansion=!0,i.incomeCycleSeconds=0,i.businessCycleSeconds=5,i.businessIncomePerCycle={silver:25,copper:35,gold:1,spiritStonesLow:0},O("📈 Expansion complete. New passive income: +25 Silver, +35 Copper, +1 Gold per cycle."),N(),U()};window.businessHiringEmployees=()=>{i.businessUpgradedEmployees=!0,i.incomeCycleSeconds=0,i.businessCycleSeconds=3.5,O("👥 Employees hired. Income cycle time reduced to 3.5 seconds."),N(),U()};window.businessStabilityIsntEnough=()=>{i.businessChoseStabilityIsntEnough=!0,i.businessChoseNoMoreGames=!1,i.incomeCycleSeconds=0,i.businessIncomePerCycle={silver:100,copper:200,gold:10,spiritStonesLow:0},i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Stability Isn’t Enough"&&(n==null?void 0:n.name)!=="No More Games"),O("🏦 Stability isn’t enough. New passive income: +200 Copper, +100 Silver, +10 Gold per cycle."),N(),U()};window.businessNoMoreGames=()=>{i.businessChoseNoMoreGames=!0,i.businessChoseStabilityIsntEnough=!1,i.incomeCycleSeconds=0,i.businessIncomePerCycle={silver:5,copper:5,gold:30,spiritStonesLow:20},i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Stability Isn’t Enough"&&(n==null?void 0:n.name)!=="No More Games"),O("🕶️ No more games. New passive income: +5 Copper, +5 Silver, +30 Gold, +20 Low Spirit Stones per cycle."),N(),U()};window.businessMerchantGuildSeeksPartnership=()=>{i.businessMerchantGuildPartnered=!0,i.incomeCycleSeconds=0,hl(.75),i.businessCycleSeconds=.9,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="A Merchant Guild Seeks Partnership"),O("🤝 A Merchant Guild partnership forms. Income reduced by 25%, cycle time becomes 0.9 seconds."),N(),U()};window.businessNervousNeighboringSect=()=>{i.businessNervousNeighboringSectOpened=!0,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Nervous Neighboring Sect"),N(),U()};window.businessNegotiateWithSect=()=>{i.businessNeighboringSectNegotiated=!0,i.businessNeighboringSectDenied=!1,hl(.85),i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Negotiate With Sect"&&(n==null?void 0:n.name)!=="Deny Negoitation"),O("🕊️ You negotiate with the sect. Income reduced by 15%. The sect backs off... for now."),N(),U()};window.businessDenyNegoitation=()=>{i.businessNeighboringSectDenied=!0,i.businessNeighboringSectNegotiated=!1,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Negotiate With Sect"&&(n==null?void 0:n.name)!=="Deny Negoitation"),N(),U()};window.businessSectRetaliation=()=>{i.businessSectRetaliationResolved=!0,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Sect Retaliation"),N(),U()};window.businessFindMysteriousManualInRubble=()=>{i.businessFoundMysteriousManual=!0,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Find Mysterious Manual in Rubble"),dt({name:"Hidden Heavenly Demon Manual",icon:"📖",description:"A forbidden-yet-radiant tome. Its techniques feel like sunlight cast through smoke.",equippable:!0}),O("You recover a heavenly demon manual from the rubble."),N(),U()};window.businessFollowUnseenWatcher=()=>{i.businessHeavenlyDemonWatcherFollowed=!0,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Follow the Unseen Watcher"),N(),U()};window.businessOfferOfLifetime=()=>{i.businessHeavenlyDemonOfferMade=!0,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Offer of a lifetime"),N(),U()};window.businessAcceptHeavenlyDemonOffer=()=>{i.businessHeavenlyDemonOfferResolved=!0,i.businessHeavenlyDemonOfferAccepted=!0,i.businessHeavenlyDemonOfferDenied=!1,window.joinHeavenlyDemonSect(),i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Accept"&&(n==null?void 0:n.name)!=="Deny"),O("You accept the offer. The Heavenly Demon Sect welcomes you."),N(),U()};window.businessDenyHeavenlyDemonOffer=()=>{i.businessHeavenlyDemonOfferResolved=!0,i.businessHeavenlyDemonOfferDenied=!0,i.businessHeavenlyDemonOfferAccepted=!1,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Accept"&&(n==null?void 0:n.name)!=="Deny"),O("🚫 You deny the offer. You keep the manual — and your freedom."),N(),U()};function yr(n){const e=Math.max(0,Math.floor(Number(n)||0)),t=i.businessIncomePerCycle&&typeof i.businessIncomePerCycle=="object"?i.businessIncomePerCycle:{},o=s=>M(t[s]);return{copper:o("copper")*e,silver:o("silver")*e,gold:o("gold")*e,spiritStonesLow:o("spiritStonesLow")*e,spiritStonesMid:o("spiritStonesMid")*e,spiritStonesHigh:o("spiritStonesHigh")*e}}function Mr(n){const e=n&&typeof n=="object"?n:{};return!(!i.devIgnoreRequirements&&(M(i.copper)<M(e.copper)||M(i.silver)<M(e.silver)||M(i.gold)<M(e.gold)||M(i.spiritStonesLow)<M(e.spiritStonesLow)||M(i.spiritStonesMid)<M(e.spiritStonesMid)||M(i.spiritStonesHigh)<M(e.spiritStonesHigh)))}function fl(n){const e=n&&typeof n=="object"?n:{};i.devIgnoreRequirements||(i.copper=M(i.copper)-M(e.copper),i.silver=M(i.silver)-M(e.silver),i.gold=M(i.gold)-M(e.gold),i.spiritStonesLow=M(i.spiritStonesLow)-M(e.spiritStonesLow),i.spiritStonesMid=M(i.spiritStonesMid)-M(e.spiritStonesMid),i.spiritStonesHigh=M(i.spiritStonesHigh)-M(e.spiritStonesHigh))}window.businessMergeWithPrivateMilitary=()=>{i.businessMergedWithMilitary=!0,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Merge With the Private Military"),O("You merge with the private military. You become a General."),N(),U()};window.businessBombTesting=()=>{const n=yr(20);Mr(n)&&(fl(n),i.businessBombTestingDone=!0,i.specialActions=i.specialActions.filter(e=>(e==null?void 0:e.name)!=="Bomb Testing"),O("Bomb testing complete. The button press feels divine."),N(),U())};window.businessAntiMatterCreation=()=>{const n=yr(40);Mr(n)&&(fl(n),i.businessAntiMatterCreationDone=!0,i.specialActions=i.specialActions.filter(e=>(e==null?void 0:e.name)!=="Anti-Matter Creation"),O("Anti-matter creation succeeds. The sky begins to fracture."),N(),U())};window.businessWarping=()=>{const n=yr(60);Mr(n)&&(fl(n),i.businessWarpingDone=!0,i.specialActions=i.specialActions.filter(e=>(e==null?void 0:e.name)!=="Warping"),O("Warping awakens. Anywhere. Everywhere. Someone notices."),N(),U())};window.businessStormTheHeavens=()=>{i.cultivationMajorIndex<14||(i.businessStormHeavensStarted=!0,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Storm the Heavens"),window.runHeavensAssaultCinematic())};window.heavensClashImmortalGod=()=>{if(i.inCombat||i.heavensEnding)return;i.heavensImmortalGodClashStarted=!0;const n=il(14),e=Math.max(1,M(n.maxHealth)),t=Math.max(1,M(n.strength));i.combatContext={type:"heavensImmortalGod"},i.questReturnPhase=i.phase,Ni(),i.inCombat=!0,i.enemy=Di({name:"Immortal God",icon:"👁️",health:e,maxHealth:e,strength:t}),i.phase="COMBAT",Rt(),i.specialActions=i.specialActions.filter(o=>(o==null?void 0:o.name)!=="Clash with the Immortal God"),O("You clash with the Immortal God!"),N(),U()};function hy(n){const e=i.combatContext;if(!e||e.type!=="heavensImmortalGod")return;i.combatContext=null,i.heavensEnding=null,i.specialActions=i.specialActions.filter(o=>(o==null?void 0:o.name)!=="Clash with the Immortal God"),(o=>{const s=String((o==null?void 0:o.name)||"");if(!s)return;const r=i.specialActions.findIndex(l=>(l==null?void 0:l.name)===s);r===-1?i.specialActions.push(o):i.specialActions[r]={...i.specialActions[r],...o}})({name:"Fall of Heaven",icon:"🏛️",description:"Heaven collapses. The world becomes corrupted. Demons pour into the mortal realm. “You didn't know this would happen.”",disabled:!1,callback:()=>window.heavensFallOfHeaven()})}function fy(){const n=i.combatContext;return!n||n.type!=="heavensImmortalGod"?!1:(i.inCombat=!1,i.enemy=null,i.combatContext=null,i.phase=i.questReturnPhase||"FARMING",i.questReturnPhase=null,Rt(),i.heavensEnding="tartarusEaten",i.specialActions=i.specialActions.filter(e=>(e==null?void 0:e.name)!=="Clash with the Immortal God"),rn("ENDING","Tartarus Descent",["🕳️ You fall from the heavens... and land in Tartarus.","Everything hunts you. No hope. No escape.","☠️ Final Result: You are eaten alive by monsters."],[{label:"The end.",onClick:"window.heavensEndingEndRun()"}],{mode:"PAGE_SWAP",sentencesPerPage:1,pageHoldMs:9e3,transitionMs:1100,choicesFadeInDelayMs:950}),N(),U(),!0)}window.heavensFallOfHeaven=()=>{i.heavensEnding||(i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Fall of Heaven"),O("😨 Demons flood the mortal realm. Endless wars begin."),i.specialActions.some(n=>(n==null?void 0:n.name)==="Final confrontation: Demon King")||i.specialActions.push({name:"Final confrontation: Demon King",icon:"👑",description:"Endless demon wars. Earth cannot be reclaimed. The Demon King steps onto the battlefield.",disabled:!1,callback:()=>window.heavensFinalConfrontationDemonKing()}),rn("ENDING","False Ending — Fall of Heaven",["🏛️ Heaven collapses. You stand among ruins you mistook for victory.","😨 Demons flood the mortal realm. Endless wars begin.","A new king rises from the chaos."],[{label:"Continue.",onClick:"window.closeStoryDialog()"}],{mode:"PAGE_SWAP",sentencesPerPage:1,pageHoldMs:8500,transitionMs:1100,choicesFadeInDelayMs:950}),N(),U())};window.heavensFinalConfrontationDemonKing=()=>{i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Final confrontation: Demon King"),i.heavensEnding="demonKingDeath",rn("ENDING","Final Confrontation",["👑 The Demon King smiles.","☠️ Final Result: You die by the Demon King's hand."],[{label:"Continue.",onClick:"window.closeStoryDialog()"}],{mode:"PAGE_SWAP",sentencesPerPage:1,pageHoldMs:8500,transitionMs:1100,choicesFadeInDelayMs:950}),N(),U()};window.heavensEndingEndRun=()=>{window.closeStoryDialog()};let Oo=null,Go=null;function La(){if(Oo){try{cancelAnimationFrame(Oo)}catch{}Oo=null}if(Go){try{window.removeEventListener("resize",Go)}catch{}Go=null}try{mr(Io)}catch{}}function py(n){const e=n&&typeof n=="object"?n:{},t=typeof e.onDone=="function"?e.onDone:null;try{ul()}catch{}La();const o=dl();o.classList.remove("active","impact","fade-out","heavens-assault","carpet-bomb"),o.offsetWidth,o.classList.add("active","canvas-mode","carpet-bomb");const s=o.querySelector(".cinematic-canvas"),r=s&&s.getContext?s.getContext("webgl2",{alpha:!0,antialias:!0})||s.getContext("webgl",{alpha:!0,antialias:!0}):null;if(!s||!r){try{o.remove()}catch{}t&&t(),N(),U();return}function l(z,Q){const J=r.createShader(z);if(r.shaderSource(J,Q),r.compileShader(J),!r.getShaderParameter(J,r.COMPILE_STATUS)){const le=r.getShaderInfoLog(J)||"shader compile failed";try{r.deleteShader(J)}catch{}throw new Error(le)}return J}function a(z,Q){const J=l(r.VERTEX_SHADER,z),le=l(r.FRAGMENT_SHADER,Q),oe=r.createProgram();r.attachShader(oe,J),r.attachShader(oe,le),r.linkProgram(oe);try{r.deleteShader(J)}catch{}try{r.deleteShader(le)}catch{}if(!r.getProgramParameter(oe,r.LINK_STATUS)){const de=r.getProgramInfoLog(oe)||"program link failed";try{r.deleteProgram(oe)}catch{}throw new Error(de)}return oe}const c=8,u=12,d=1.5,f=1,p=1.35,v=Math.max(3,Math.min(c,Math.floor((u-f)/d)+1)),b=new Float32Array(c),y=new Float32Array(c);for(let z=0;z<c;z++)if(z<v){const Q=f+d*z;b[z]=Q;const J=Math.min(1,Math.max(0,Q/u));y[z]=1.2-1.4*J}else b[z]=-1,y[z]=-10;try{mr(Io);const z=[.25,3.8,7.2,10.2];for(const Q of z)Io.push(setTimeout(()=>{try{St("plane")}catch{}},Math.floor(Q*1e3)));for(let Q=0;Q<v;Q++){const J=b[Q]+p;!Number.isFinite(J)||J<=0||(Io.push(setTimeout(()=>{try{St("explosion")}catch{}},Math.floor(J*1e3))),Io.push(setTimeout(()=>{try{St("explosion")}catch{}},Math.floor(J*1e3+110))))}}catch{}const g=u+p+2.2,h=.9,C=g,m=g+h,S=`#version 300 es
  precision highp float;
  out vec2 vUv;
  void main() {
    // Fullscreen triangle
    vec2 p = vec2((gl_VertexID == 1) ? 3.0 : -1.0, (gl_VertexID == 2) ? 3.0 : -1.0);
    vUv = 0.5 * (p + 1.0);
    gl_Position = vec4(p, 0.0, 1.0);
  }
  `,L=`#version 300 es
  precision highp float;
  in vec2 vUv;
  out vec4 fragColor;

  uniform vec2 uRes;
  uniform float uTime;
  uniform float uFade;
  uniform int uBombCount;
  uniform float uBombTimes[${c}];
  uniform float uBombXs[${c}];

  float hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
  }

  float sdCircle(vec2 p, float r) {
    return length(p) - r;
  }

  float rect(vec2 p, vec2 b) {
    vec2 d = abs(p) - b;
    return max(d.x, d.y);
  }

  float buildingHeightAt(float x) {
    // A sect compound: fewer structures, lots of open space.
    float cols = 7.0;
    float id = floor(x * cols);
    float r = hash11(id + 4.0);
    // ~45% of columns empty.
    if (r < 0.45) return 0.0;
    float h = 0.10 + 0.20 * hash11(id + 6.0);
    // rare taller pagoda tower
    h += step(0.86, hash11(id + 9.0)) * 0.16;
    return h;
  }

  vec2 shakeOffset(float t) {
    float amp = 0.0;
    for (int i = 0; i < ${c}; i++) {
      float dt = t - (uBombTimes[i] + ${p.toFixed(2)});
      if (dt > 0.0 && dt < 0.55) {
        amp += exp(-8.5 * dt) * 0.018;
      }
    }
    return vec2(sin(71.0 * t), cos(59.0 * t)) * amp;
  }

  void main() {
    vec2 uv = vUv;
    uv += shakeOffset(uTime);

    // Letterbox-ish safe clamp (avoid sampling outside)
    uv = clamp(uv, vec2(0.0), vec2(1.0));

    float groundY = 0.18;

    // Sky gradient
    vec3 skyA = vec3(0.04, 0.07, 0.12);
    vec3 skyB = vec3(0.18, 0.22, 0.30);
    vec3 col = mix(skyA, skyB, smoothstep(0.0, 1.0, uv.y));

    // Ground
    float g = smoothstep(groundY, groundY - 0.01, uv.y);
    col = mix(col, vec3(0.05, 0.05, 0.06), g);

    // Sect structures band (sparse)
    float colsN = 7.0;
    float cx = floor(uv.x * colsN);
    float x0 = cx / colsN;
    float x1 = (cx + 1.0) / colsN;
    float h = buildingHeightAt(uv.x);
    float inCol = step(x0, uv.x) * step(uv.x, x1);
    float b = inCol * step(groundY, uv.y) * step(uv.y, groundY + h);
    // Courtyard walls/roofline feel
    vec3 base = mix(vec3(0.10, 0.10, 0.12), vec3(0.18, 0.18, 0.22), hash11(cx + 2.0));
    float roofY = groundY + h;
    float roof = inCol * step(roofY - 0.014, uv.y) * step(uv.y, roofY + 0.006);
    col = mix(col, base, b);
    col = mix(col, vec3(0.28, 0.22, 0.14), roof);

    // Plane (more detailed silhouette + shading)
    float px = mix(1.20, -0.20, clamp(uTime / ${u.toFixed(2)}, 0.0, 1.0));
    float py = 0.78;
    vec2 p = (uv - vec2(px, py));
    float body = rect(p, vec2(0.075, 0.012));
    float nose = sdCircle(p - vec2(-0.075, 0.0), 0.013);
    float fus = min(body, nose);
    float wing = rect(uv - vec2(px - 0.010, py - 0.017), vec2(0.030, 0.007));
    float wing2 = rect(uv - vec2(px + 0.010, py - 0.010), vec2(0.020, 0.005));
    float tail = rect(uv - vec2(px + 0.060, py + 0.010), vec2(0.012, 0.014));
    float stab = rect(uv - vec2(px + 0.048, py - 0.004), vec2(0.018, 0.004));
    float planeSdf = min(fus, min(min(wing, wing2), min(min(tail, stab), 1.0)));
    float planeMask = smoothstep(0.012, -0.012, planeSdf);
    // simple metallic shading
    float shade = 0.65 + 0.35 * smoothstep(-0.10, 0.10, p.x);
    vec3 planeCol = mix(vec3(0.70, 0.73, 0.78), vec3(0.92, 0.92, 0.95), shade);
    // cockpit window
    float cockpit = smoothstep(0.010, 0.0, sdCircle(p - vec2(-0.030, 0.006), 0.010));
    planeCol = mix(planeCol, vec3(0.10, 0.18, 0.24), cockpit);
    col = mix(col, planeCol, planeMask);

    // Bombs + explosions + mushroom clouds
    for (int i = 0; i < ${c}; i++) {
      float dt = uTime - uBombTimes[i];
      if (uBombTimes[i] > 0.0 && dt > 0.0) {
        float bx = uBombXs[i];
        // nuke falling (body + fins)
        float t = dt;
        float by = 0.76 - (0.22 * t) - (0.34 * t * t);
        vec2 bp = uv - vec2(bx, by);
        // capsule-ish body
        float cyl = rect(bp, vec2(0.010, 0.020));
        float cap = sdCircle(bp - vec2(0.0, 0.020), 0.010);
        float cap2 = sdCircle(bp - vec2(0.0, -0.020), 0.010);
        float bodySdf = min(cyl, min(cap, cap2));
        // fins
        float fin1 = rect(bp - vec2(0.014, -0.020), vec2(0.006, 0.008));
        float fin2 = rect(bp - vec2(-0.014, -0.020), vec2(0.006, 0.008));
        float nukeSdf = min(bodySdf, min(fin1, fin2));
        float nukeMask = smoothstep(0.010, -0.010, nukeSdf);
        float metal = 0.55 + 0.45 * smoothstep(-0.020, 0.020, bp.y);
        vec3 nukeCol = mix(vec3(0.12, 0.13, 0.14), vec3(0.40, 0.42, 0.45), metal);
        // warning stripe
        float stripe = step(abs(bp.x), 0.010) * step(abs(bp.y - 0.004), 0.004);
        nukeCol = mix(nukeCol, vec3(0.85, 0.75, 0.20), stripe);
        col = mix(col, nukeCol, nukeMask);

        // impact/explosion at fixed fallTime
        float exT = uTime - (uBombTimes[i] + ${p.toFixed(2)});
        float bh = buildingHeightAt(bx);
        float hitY = groundY + max(0.04, bh * 0.70);
        vec2 ep = uv - vec2(bx, hitY);
        if (exT > 0.0) {
          float boom = exp(-3.2 * exT);
          float r = 0.02 + 0.18 * (1.0 - exp(-6.0 * exT));
          float core = smoothstep(r, r - 0.02, length(ep));
          vec3 fire = mix(vec3(1.0, 0.86, 0.35), vec3(1.0, 0.25, 0.05), smoothstep(0.0, 1.0, exT));
          col += fire * core * boom;

          // mushroom cloud linger
          float cloudT = exT - 0.15;
          if (cloudT > 0.0) {
            float rise = min(0.20, 0.06 + 0.06 * cloudT);
            vec2 cp = uv - vec2(bx, hitY + rise);
            float puff1 = smoothstep(0.16, 0.0, sdCircle(cp + vec2(0.04, 0.02), 0.07));
            float puff2 = smoothstep(0.16, 0.0, sdCircle(cp + vec2(-0.02, 0.01), 0.06));
            float puff3 = smoothstep(0.16, 0.0, sdCircle(cp + vec2(0.01, 0.05), 0.08));
            float stem = smoothstep(0.03, 0.0, rect(cp + vec2(0.0, -0.05), vec2(0.02, 0.08)));
            float cloud = max(max(puff1, puff2), max(puff3, stem));
            float smoke = exp(-0.35 * cloudT);
            col = mix(col, vec3(0.22, 0.22, 0.24), cloud * smoke);
          }
        }
      }
    }

    // Fade out back to game
    col = mix(col, vec3(0.0), uFade);
    float alpha = 1.0 - uFade;
    fragColor = vec4(col, alpha);
  }
  `;let T=null,R=performance.now(),V,w,x,q,$,ue;try{T=a(S,L),r.useProgram(T),V=r.getUniformLocation(T,"uTime"),w=r.getUniformLocation(T,"uRes"),x=r.getUniformLocation(T,"uFade"),q=r.getUniformLocation(T,"uBombCount"),$=r.getUniformLocation(T,"uBombTimes[0]"),ue=r.getUniformLocation(T,"uBombXs[0]")}catch(z){try{console.error(z)}catch{}try{T&&r.deleteProgram(T)}catch{}try{o.remove()}catch{}t&&t(),N(),U();return}function D(){const z=Math.max(1,window.devicePixelRatio||1),Q=Math.floor(window.innerWidth*z),J=Math.floor(window.innerHeight*z);s.width=Q,s.height=J,s.style.width="100%",s.style.height="100%",r.viewport(0,0,Q,J)}Go=()=>D();try{window.addEventListener("resize",Go)}catch{}D();function X(){const Q=(performance.now()-R)/1e3,J=Q<=C?0:Math.min(1,(Q-C)/h);if(r.useProgram(T),r.uniform2f(w,s.width,s.height),r.uniform1f(V,Q),r.uniform1f(x,J),r.uniform1i(q,v),$&&r.uniform1fv($,b),ue&&r.uniform1fv(ue,y),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLES,0,3),Q>=m){La();try{r.useProgram(null)}catch{}try{T&&r.deleteProgram(T)}catch{}try{o.remove()}catch{}t&&t(),N(),U();return}Oo=requestAnimationFrame(X)}Oo=requestAnimationFrame(X)}let Ho=null,qo=null,Os=null;function uu(){if(Ho){try{cancelAnimationFrame(Ho)}catch{}Ho=null}if(qo){try{window.removeEventListener("resize",qo)}catch{}qo=null}try{mr(Po)}catch{}if(typeof Os=="function")try{Os()}catch{}Os=null}function my(n){n&&n.traverse(e=>{if(e&&e.geometry&&typeof e.geometry.dispose=="function")try{e.geometry.dispose()}catch{}const t=e&&e.material;if(Array.isArray(t)){for(const o of t)if(o&&typeof o.dispose=="function")try{o.dispose()}catch{}}else if(t&&typeof t.dispose=="function")try{t.dispose()}catch{}})}function gy(n){const e=n&&typeof n=="object"?n:{},t=typeof e.onDone=="function"?e.onDone:null;try{ul()}catch{}try{La()}catch{}uu();const o=dl();o.classList.remove("active","impact","fade-out","heavens-assault","carpet-bomb"),o.offsetWidth,o.classList.add("active","canvas-mode","heavens-assault");const s=o.querySelector(".cinematic-canvas");if(!s){try{o.remove()}catch{}t&&t(),N(),U();return}const r=10.5,l=1.1,a=r+l,c=performance.now();let u=null,d=null,f=null,p=null,v=null,b=null;try{mr(Po);const k=650,G=6500,I=260;Po.push(setTimeout(()=>{try{const ie=setInterval(()=>{try{if(performance.now()-c>G){try{clearInterval(ie)}catch{}return}Math.random()<.85&&St("shoot")}catch{}},I);Po.push(ie)}catch{}},k));const ne=[1.9,4.1,6.6,9];for(const ie of ne)Po.push(setTimeout(()=>{try{St("lightning")}catch{}},Math.floor(ie*1e3)))}catch{}function y(k){const ne=document.createElement("canvas");ne.width=1024,ne.height=512;const ie=ne.getContext&&ne.getContext("2d");if(!ie)return null;const ye=ie.createLinearGradient(0,0,0,512);ye.addColorStop(0,"#0b1326"),ye.addColorStop(.55,"#16233b"),ye.addColorStop(1,"#0a0f1f"),ie.fillStyle=ye,ie.fillRect(0,0,1024,512);const be=22;for(let A=0;A<be;A++){const _=A/be*512,W=.06+.04*Math.sin((A+k)*1.7);ie.fillStyle=`rgba(255,255,255,${Math.max(0,W)})`;const he=(Math.sin((A+k)*2.3)*.5+.5)*1024,ce=1024*(.35+.25*(Math.sin((A+k)*1.1)*.5+.5));ie.beginPath(),ie.ellipse(he,_,ce,512*.03,0,0,Math.PI*2),ie.fill()}const Be=ie.createLinearGradient(0,512*.55,0,512);Be.addColorStop(0,"rgba(255,255,255,0.05)"),Be.addColorStop(1,"rgba(255,255,255,0)"),ie.fillStyle=Be,ie.fillRect(0,512*.55,1024,512*.45);const Ie=new $c(ne);return Ie.colorSpace=yt,Ie.needsUpdate=!0,Ie}function g(k){return k&&k.isMaterial,k}function h(k){const G=Math.sin(k*12.9898)*43758.5453;return G-Math.floor(G)}function C(k){const I=document.createElement("canvas");I.width=512,I.height=512;const ne=I.getContext&&I.getContext("2d");if(!ne)return null;ne.clearRect(0,0,512,512),ne.save(),ne.translate(512/2,512/2);const ie=8+Math.floor(h(k+10.1)*6);for(let be=0;be<ie;be++){const Be=h(k*7.3+be*13.7)*Math.PI*2,Ie=512*(.26+.22*h(k*5.7+be*9.1)),A=10+Math.floor(h(k*3.9+be*11.9)*10),_=(h(k*2.1+be*17)-.5)*.55;ne.strokeStyle="rgba(210,245,255,0.16)",ne.lineWidth=10,ne.lineCap="round",ne.lineJoin="round",ne.beginPath();let W=0,he=0;ne.moveTo(W,he);for(let se=1;se<=A;se++){const Ee=se/A,_e=Be+_*(Ee-.5),Ce=(h(k*19.1+be*23.3+se*3.7)-.5)*(512*.012),Fe=Ie*Ee+Ce,Ge=Math.cos(_e)*Fe,H=Math.sin(_e)*Fe;W=Ge,he=H,ne.lineTo(W,he)}ne.stroke(),ne.strokeStyle="rgba(240,252,255,0.52)",ne.lineWidth=2.4,ne.beginPath(),ne.moveTo(0,0);for(let se=1;se<=A;se++){const Ee=se/A,_e=Be+_*(Ee-.5),Ce=(h(k*29.7+be*31.1+se*7.9)-.5)*(512*.006),Fe=Ie*Ee+Ce,Ge=Math.cos(_e)*Fe,H=Math.sin(_e)*Fe;ne.lineTo(Ge,H)}ne.stroke();const ce=1+Math.floor(h(k*41.9+be*2.3)*3);for(let se=0;se<ce;se++){const Ee=.22+.62*h(k*37+be*5.9+se*11.1),_e=Be+_*(Ee-.5),Ce=Ie*Ee,Fe=Math.cos(_e)*Ce,Ge=Math.sin(_e)*Ce,H=_e+(h(k*13.3+be*17.1+se*3.1)-.5)*1.4,Se=Ie*(.1+.18*h(k*21.2+be*7.3+se*19.7));ne.strokeStyle="rgba(240,252,255,0.40)",ne.lineWidth=1.6,ne.beginPath(),ne.moveTo(Fe,Ge),ne.lineTo(Fe+Math.cos(H)*Se,Ge+Math.sin(H)*Se),ne.stroke()}}ne.restore();const ye=new $c(I);return ye.colorSpace=yt,ye.needsUpdate=!0,ye}function m(k){const G=new Mi,I=[{a:4147746,b:6971194,c:2830111,canopy:856346},{a:4739621,b:8022852,c:2040858,canopy:856346},{a:3753247,b:9075282,c:2763554,canopy:856346}],ne=I[Math.floor(h(k+1.7)*I.length)%I.length],ie=g(new Eo({color:ne.a,roughness:.55,metalness:.35})),ye=g(new Eo({color:ne.c,roughness:.6,metalness:.25})),be=g(new Eo({color:ne.b,roughness:.65,metalness:.2})),Be=g(new Eo({color:ne.canopy,roughness:.15,metalness:.05,transparent:!0,opacity:.55})),Ie=new _i(.06,.056,.68,14,1),A=new st(Ie,ie);A.position.set(0,0,0),G.add(A);const _=new Wa(.06,.2,14,1),W=new st(_,ie);W.position.set(0,.43,0),G.add(W);const he=new Wn(.06,12,10),ce=new st(he,Be);ce.scale.set(1,1.25,1.6),ce.position.set(0,.2,.035),G.add(ce);const se=new hn(.74,.025,.16),Ee=new st(se,ye);Ee.position.set(0,.06,0),G.add(Ee);const _e=new hn(.06,.06,.06),Ce=new st(_e,ye);Ce.position.set(-.34,.01,.02),G.add(Ce);const Fe=new st(_e,ye);Fe.position.set(.34,.01,.02),G.add(Fe);const Ge=new _i(.038,.045,.22,12,1),H=new st(Ge,ie);H.rotation.z=Math.PI/2,H.position.set(-.18,0,-.08),G.add(H);const Se=new st(Ge,ie);Se.rotation.z=Math.PI/2,Se.position.set(.18,0,-.08),G.add(Se);const Pe=new hn(.26,.02,.11),Ne=new st(Pe,ye);Ne.position.set(0,-.28,0),G.add(Ne);const we=new hn(.02,.2,.12),fe=new st(we,ye);fe.position.set(0,-.3,0),G.add(fe);const xe=new hn(.3,.008,.08),pe=new hn(.12,.01,.1),Ve=[ie,ye,be];for(let He=0;He<5;He++){const me=h(k*7.7+He*13.1),F=h(k*9.3+He*5.9),Re=Ve[Math.floor(h(k*3.1+He*2.7)*Ve.length)%Ve.length],De=He<3,$e=new st(De?xe:pe,Re);De?($e.position.set((me-.5)*.45,.074,(F-.5)*.1),$e.rotation.y=(F-.5)*.9):($e.position.set((me-.5)*.1,.1+(F-.5)*.12,.06),$e.rotation.z=(me-.5)*.6),G.add($e)}return G.rotation.x=0,G.rotation.z=0,G}function S(){const k=new Mi,G=new _i(.13,.13,1,18,1,!0),I=new _i(.32,.26,1,22,1,!0),ne=g(new un({color:16120831,transparent:!0,opacity:0,blending:Sn,depthWrite:!1})),ie=g(new un({color:12183551,transparent:!0,opacity:0,blending:Sn,depthWrite:!1})),ye=new st(I,ie);ye.rotation.y=.25;const be=new st(G,ne);return k.add(ye),k.add(be),k.visible=!1,k.userData.__core=be,k.userData.__halo=ye,k}function L(){const k=new Wn(.12,10,8),G=g(new un({color:16770739,transparent:!0,opacity:0,blending:Sn,depthWrite:!1})),I=new st(k,G);return I.visible=!1,I}function T(){const k=new Mi,G=new Wn(.11,18,14),I=g(new Eo({color:11815935,emissive:7141330,emissiveIntensity:1.35,roughness:.15,metalness:.05,transparent:!0,opacity:.98})),ne=new st(G,I);k.add(ne);const ie=new Wn(.18,18,14),ye=g(new un({color:15772668,transparent:!0,opacity:.35,blending:Sn,depthWrite:!1})),be=new st(ie,ye);k.add(be);const Be=new $a(.16,.018,10,28),Ie=g(new un({color:8246268,transparent:!0,opacity:.35,blending:Sn,depthWrite:!1})),A=new st(Be,Ie);A.rotation.x=Math.PI/2,k.add(A);const _=new Kt;_.setAttribute("position",new _t([0,0,0,0,0,0],3));const W=g(new ya({color:6354368,transparent:!0,opacity:.55,blending:Sn,depthWrite:!1})),he=new Wc(_,W);return k.add(he),k.userData.__trail=he,k}function R(){const k=new Kt;k.setAttribute("position",new _t([0,0,0,0,0,0],3));const G=g(new ya({color:16765578,transparent:!0,opacity:.75,blending:Sn,depthWrite:!1}));return new Wc(k,G)}function V(k){p&&(p.material.opacity=Math.max(0,Math.min(1,k)),p.visible=p.material.opacity>.001)}try{u=new ju({canvas:s,alpha:!0,antialias:!0,powerPreference:"high-performance"}),u.outputColorSpace=yt,u.toneMapping=mu,u.toneMappingExposure=1.05,u.setClearColor(395794,1),d=new Tv,d.fog=new za(725536,.18),f=new nn(55,Math.max(1,window.innerWidth)/Math.max(1,window.innerHeight),.1,100),f.position.set(0,1.9,6.8),f.lookAt(0,1.1,0);const k=new Lv(10467327,.35);d.add(k);const G=new Xc(16777215,1.35);G.position.set(-2.2,4.2,3.2),d.add(G);const I=new Xc(10348799,.9);I.position.set(2.6,2.4,-3),d.add(I);const ne=new Wn(30,18,12),ie=y(2.7),ye=g(new un({color:16777215,map:ie||null,side:qt})),be=new st(ne,ye);d.add(be);const Be=new $o(2,2),Ie=new un({color:0,transparent:!0,opacity:0,depthWrite:!1});if(p=new st(Be,Ie),p.position.set(0,0,-1),f.add(p),b=C(4.2),b){const A=new $o(2,2),_=g(new un({map:b,transparent:!0,opacity:0,blending:Sn,depthWrite:!1,depthTest:!1}));v=new st(A,_),v.position.set(0,0,-.95),v.renderOrder=999,f.add(v)}d.add(f)}catch(k){try{console.error(k)}catch{}try{u&&u.dispose&&u.dispose()}catch{}try{o.remove()}catch{}t&&t(),N(),U();return}const w=[],x=[],q=[],$=[],ue=[],D=[],X=18;for(let k=0;k<X;k++){const G=S();x.push({mesh:G,t0:0}),d.add(G);const I=L();q.push({mesh:I,t0:0}),d.add(I)}const z=9,Q=7,J=2,le=2.65,oe=.75;let de=0;for(let k=0;k<J;k++)for(let G=0;G<Q;G++){const I=(G-(Q-1)/2)*le;for(let ne=0;ne<z;ne++){const ie=(z-1)/2,ye=ne-ie,be=ye*.62,Be=-Math.abs(ye)*.18,Ie=(h(de*8.13+1.7)-.5)*.12,A=(h(de*9.77+3.1)-.5)*.1,_=I+be+Ie,W=-k*oe+Be+A,he=m(de+13);he.scale.setScalar(.86),d.add(he);const se=h(de*9.17+2.33)<.22;w.push({plane:he,i:de,xOff:_,yOff:W,driftSeed:de*11.73,willBeHit:se,hitAt:se?.2+.6*h((de+21)*13.37):2,hit:!1,hitT0:0,baseX:0,baseY:0,spin:0}),de++}}function ve(){for(const k of x)if(!k.mesh.visible)return k;return x[0]}function B(){for(const k of q)if(!k.mesh.visible)return k;return q[0]}function j(k,G,I){const ne=R();ne.userData={t0:G,seed:I,from:k.clone()},d.add(ne),$.push(ne)}function re(k,G,I){const ne=T();ne.position.copy(k);const ie=(h(I+1.1)-.5)*.55,ye=(h(I+2.2)-.5)*1.2;ne.userData={t0:G,seed:I,from:k.clone(),drift:ie,roll:ye},d.add(ne),ue.push(ne)}function Me(k,G,I){const ne=new Wn(.1,8,6),ie=g(new un({color:I,transparent:!0,opacity:.35,depthWrite:!1})),ye=new st(ne,ie);ye.position.copy(k),ye.userData={t0:G},d.add(ye),D.push(ye)}const Ae=performance.now();function ae(){const k=Math.max(1,Math.min(2.5,window.devicePixelRatio||1));u.setPixelRatio(k);const G=Math.max(1,window.innerWidth),I=Math.max(1,window.innerHeight);u.setSize(G,I,!1),f.aspect=G/I,f.updateProjectionMatrix()}qo=()=>ae();try{window.addEventListener("resize",qo)}catch{}ae(),Os=()=>{try{for(const k of $){try{d.remove(k)}catch{}try{k.geometry&&k.geometry.dispose&&k.geometry.dispose()}catch{}try{k.material&&k.material.dispose&&k.material.dispose()}catch{}}for(const k of ue)try{d.remove(k)}catch{}for(const k of D)try{d.remove(k)}catch{}my(d);try{u.dispose()}catch{}try{if(v){try{v.geometry&&v.geometry.dispose&&v.geometry.dispose()}catch{}try{v.material&&v.material.dispose&&v.material.dispose()}catch{}}b&&b.dispose&&b.dispose()}catch{}}catch{}};function P(k){var be,Be,Ie,A,_,W,he,ce,se,Ee,_e,Ce,Fe,Ge;const G=(k-Ae)/1e3,I=Math.max(0,Math.min(1,G/r)),ne=G<=r?0:Math.max(0,Math.min(1,(G-r)/l));if(V(ne),v&&v.material){const H=(fe,xe,pe)=>{const Ve=Math.max(0,Math.min(1,(pe-fe)/Math.max(1e-6,xe-fe)));return Ve*Ve*(3-2*Ve)},Se=H(.14,.42,I),Pe=1-H(.82,1,I),Ne=.8+.2*Math.sin(G*4.6),we=.62*Se*Pe*Ne;v.material.opacity=Math.max(0,Math.min(.85,we)),v.visible=v.material.opacity>.01,v.position.x=.012*Math.sin(G*1.25),v.position.y=.01*Math.cos(G*1.05),v.rotation.z=.02*Math.sin(G*.55)}const ie=Mf.lerp(-3.9,1.35,I),ye=.1*Math.sin(G*1.1);f.position.x=.12*Math.sin(G*.22),f.position.z=6.8+.2*Math.sin(G*.17),f.lookAt(0,1.15+.12*Math.sin(G*.25),0);for(const H of w){const Se=.1*Math.sin(G*1.15+H.driftSeed),Pe=.06*Math.sin(G*.95+H.driftSeed*1.3),Ne=H.xOff+ye*.55+Se,we=ie+H.yOff+Pe;if(H.baseX=Ne,H.baseY=we,H.willBeHit&&!H.hit&&I>=H.hitAt){H.hit=!0,H.hitT0=G,H.spin=6.5+4*(Math.sin((H.i+11)*17.7)*.5+.5);const pe=ve();pe.t0=G,pe.mesh.visible=!0,(Be=(be=pe.mesh.userData)==null?void 0:be.__core)!=null&&Be.material&&(pe.mesh.userData.__core.material.opacity=.98),(A=(Ie=pe.mesh.userData)==null?void 0:Ie.__halo)!=null&&A.material&&(pe.mesh.userData.__halo.material.opacity=.75);const Ve=B();Ve.t0=G,Ve.mesh.visible=!0,Ve.mesh.material.opacity=.95,Ve.mesh.scale.setScalar(1),Me(new K(Ne,we,0),G,16753226)}let fe=Ne,xe=we;if(H.hit){const pe=Math.max(0,Math.min(1,(G-H.hitT0)/1.8));fe+=.55*Math.sin(G*3+H.i*2.2)*pe,xe+=-3.8*pe,H.plane.rotation.z=H.spin*pe,pe>.02&&Math.random()<.28&&Me(new K(fe,xe-.1,0),G,Math.random()<.6?3422790:16742954)}else H.plane.rotation.z=0;if(H.plane.position.set(fe,xe,0),!H.hit){const pe=H.i%2===0,Ve=H.i%6===0,He=(G*4+H.i*1.7)%1;pe&&He<.018&&j(new K(fe,xe+.55,0),G,H.i*3.1);const me=(G*.52+H.i*.23)%1;Ve&&me<.02&&re(new K(fe,xe+.55,0),G,H.i*9.7)}}for(let H=$.length-1;H>=0;H--){const Se=$[H],Pe=G-(((_=Se.userData)==null?void 0:_.t0)||0),Ne=7.8,we=((W=Se.userData)==null?void 0:W.from)||new K,fe=we.clone().add(new K(0,Ne*Pe,0)),xe=Se.geometry.getAttribute("position");if(xe.setXYZ(0,we.x,we.y,we.z),xe.setXYZ(1,fe.x,fe.y,fe.z),xe.needsUpdate=!0,Se.material.opacity=Math.max(0,.85-Pe*1.1),Pe>.9){try{d.remove(Se)}catch{}try{Se.geometry.dispose()}catch{}try{Se.material.dispose()}catch{}$.splice(H,1)}}for(let H=ue.length-1;H>=0;H--){const Se=ue[H],Pe=G-(((he=Se.userData)==null?void 0:he.t0)||0),Ne=((ce=Se.userData)==null?void 0:ce.from)||Se.position,we=((se=Se.userData)==null?void 0:se.drift)||0,fe=6.6,xe=Ne.x+we*Math.sin(Pe*5),pe=Ne.y+fe*Pe;Se.position.set(xe,pe,0),Se.rotation.y+=.09,Se.rotation.x+=.07,Se.rotation.z=(((Ee=Se.userData)==null?void 0:Ee.roll)||0)+.15*Math.sin(Pe*6);const Ve=Math.max(0,1-Pe*.45);Se.traverse(me=>{var F;me&&me.material&&typeof me.material.opacity=="number"&&(me.material.opacity=(F=me.material.userData)!=null&&F.__baseOpacity?me.material.userData.__baseOpacity*Ve:me.material.opacity*(Ve>0?1:0))});const He=(_e=Se.userData)==null?void 0:_e.__trail;if(He&&He.geometry){const me=He.geometry.getAttribute("position"),F=pe-1.15;me.setXYZ(0,xe,pe,0),me.setXYZ(1,xe-.06*Math.sin(Pe*7),F,0),me.needsUpdate=!0,He.material&&(He.material.opacity=.55*Ve)}if(Se.position.y>7.2||Pe>2.6){try{d.remove(Se)}catch{}try{Se.traverse(me=>{try{me.geometry&&me.geometry.dispose&&me.geometry.dispose()}catch{}})}catch{}try{Se.traverse(me=>{try{me.material&&me.material.dispose&&me.material.dispose()}catch{}})}catch{}ue.splice(H,1)}}for(const H of x){if(!H.mesh.visible)continue;const Se=G-H.t0,Pe=Math.max(0,1-Se*2),Ne=(Ce=H.mesh.userData)==null?void 0:Ce.__core,we=(Fe=H.mesh.userData)==null?void 0:Fe.__halo;if(Ne!=null&&Ne.material&&(Ne.material.opacity=.98*Pe),we!=null&&we.material&&(we.material.opacity=.75*Pe*(.85+.15*Math.sin(Se*14))),we){const fe=1+.14*Math.sin(Se*10);we.scale.set(fe,1,fe),we.rotation.y+=.06}Pe<=.01&&(H.mesh.visible=!1)}for(const H of q){if(!H.mesh.visible)continue;const Se=G-H.t0,Pe=1+Se*6;H.mesh.scale.setScalar(Pe),H.mesh.material.opacity=Math.max(0,.95-Se*2.3),Se>.55&&(H.mesh.visible=!1)}for(let H=0;H<w.length;H++){const Se=w[H];if(!Se.hit)continue;const Pe=G-Se.hitT0;if(Pe>.55)continue;const Ne=x[H%x.length],we=q[H%q.length],fe=6,xe=(fe+Se.baseY)/2,pe=Math.max(.2,fe-Se.baseY);Ne.mesh.position.set(Se.baseX,xe,0),Ne.mesh.scale.set(1+.2*Math.sin(Pe*9),pe,1+.2*Math.cos(Pe*9)),Ne.mesh.visible=!0,we.mesh.position.set(Se.baseX,Se.baseY,0),we.mesh.visible=!0}for(let H=D.length-1;H>=0;H--){const Se=D[H],Pe=G-(((Ge=Se.userData)==null?void 0:Ge.t0)||0);if(Se.scale.setScalar(1+Pe*2.2),Se.material.opacity=Math.max(0,.35-Pe*.35),Pe>1.2){try{d.remove(Se)}catch{}try{Se.geometry&&Se.geometry.dispose&&Se.geometry.dispose()}catch{}try{Se.material&&Se.material.dispose&&Se.material.dispose()}catch{}D.splice(H,1)}}if(u.render(d,f),G>=a){uu(),t&&t();return}Ho=requestAnimationFrame(P)}Ho=requestAnimationFrame(P)}window.runHeavensAssaultCinematic=()=>{gy({onDone:()=>{i.businessStormHeavensCinematicDone=!0,O("The heavens tremble. You step forward alone...");try{const n=Array.isArray(i.specialActions)&&i.specialActions.some(e=>(e==null?void 0:e.name)==="Clash with the Immortal God");!i.heavensImmortalGodClashStarted&&!n&&i.specialActions.push({name:"Clash with the Immortal God",icon:"⚔️",description:"You face the Immortal God.",costText:"None",tradeoffText:"A battle that decides everything.",disabled:!1,callback:()=>window.heavensClashImmortalGod()})}catch{}try{const n=document.querySelector(".cinematic-overlay");n&&n.remove()}catch{}N(),U()}})};window.businessGuildRetaliation=()=>{i.businessGuildRetaliationPrepared=!0,N(),U()};window.businessCarpetBomb=()=>{i.copper=0,i.silver=0,i.gold=0,i.spiritStonesLow=0,i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Carpet Bomb"),py({onDone:()=>{i.businessCarpetBombDone=!0,O("The sect is reduced to rubble.")}})};window.followMysteriousCultivator=()=>{i.hasChosen100SilverRoute=!0,i.cloudCultivatorStoryStage=Math.max(1,M(i.cloudCultivatorStoryStage)),Array.isArray(i.repeatableActions)&&(i.repeatableActions=i.repeatableActions.filter(n=>(n==null?void 0:n.name)!=="Chop Wood"&&(n==null?void 0:n.name)!=="Sell Wood")),N(),U()};window.cloudStoryWalkToBuilding=()=>{i.cloudCultivatorStoryStage=Math.max(2,M(i.cloudCultivatorStoryStage)),i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Walk with the Mysterious Cultivator to the Building."),i.specialActions.some(n=>(n==null?void 0:n.name)==="Sect Leader Offers Items and Recruitment.")||i.specialActions.push({name:"Sect Leader Offers Items and Recruitment.",icon:"🏯",description:`A figure waits within, unmoving. “You’ve reached the end of your road as a wanderer,” they say.
A thin manual glides forward, light as mist.`,disabled:!1,callback:()=>window.cloudStoryLeaderOffers()}),N(),U()};window.cloudStoryLeaderOffers=()=>{i.cloudCultivatorStoryStage=Math.max(3,M(i.cloudCultivatorStoryStage)),i.hasManual=!0,i.manualType="Cloud",i.manualTier=Math.max(1,M(i.manualTier)||1),dt({name:"Cloud Manual (Tier 1)",icon:"📖",description:"Basic Cloud cultivation techniques",equippable:!0}),i.hasJoinedSect=!0,i.currentSect="Cloud",i.sectRankLayer="outer",i.sectRankNumber=6,i.sectRankPyramidOpen=!1;const n=Math.max(1,es(Zo("Cloud")));Mo(n),ai(),i.specialActions=i.specialActions.filter(e=>{const t=String((e==null?void 0:e.name)||"");return t!=="Sect Leader Offers Items and Recruitment."&&t!=="Walk with the Mysterious Cultivator to the Building."}),i.cloudCultivatorStoryStage=Math.max(4,M(i.cloudCultivatorStoryStage)),i.specialActions.some(e=>(e==null?void 0:e.name)==="Arrival Among Clouds.")||i.specialActions.push({name:"Arrival Among Clouds.",icon:"☁️",description:"The Cloud Sect is quieter than you expected. You can feel it — you don’t belong here yet.",disabled:!1,callback:()=>window.cloudStoryArrivalAmongClouds()}),N(),U()};window.cloudStoryArrivalAmongClouds=()=>{i.cloudCultivatorStoryStage=Math.max(5,M(i.cloudCultivatorStoryStage)),i.specialActions.some(n=>(n==null?void 0:n.name)==="Confronted by an Outer Disciple.")||i.specialActions.push({name:"Confronted by an Outer Disciple.",icon:"🥋",description:`A young disciple steps into your path, blocking the stone walkway.
“Another lucky mortal,” they scoff. This is not a discussion.`,disabled:!1,callback:()=>window.cloudStoryConfrontedByOuterDisciple()}),N(),U()};window.cloudStoryConfrontedByOuterDisciple=()=>{i.cloudCultivatorStoryStage=Math.max(6,M(i.cloudCultivatorStoryStage)),i.specialActions.some(n=>(n==null?void 0:n.name)==="Battle starts.")||i.specialActions.push({name:"Battle starts.",icon:"⚔️",description:"This is not a discussion.",disabled:!1,callback:()=>window.cloudStoryBattleStarts()}),N(),U()};window.cloudStoryBattleStarts=()=>{if(i.inCombat)return;i.cloudCultivatorStoryStage=Math.max(6,M(i.cloudCultivatorStoryStage));const n=Hd("outer",5);i.combatContext={type:"cloudStoryOuterDiscipleDuel"},i.questReturnPhase=i.phase,Ni(),i.inCombat=!0,i.enemy=Di({name:"Outer Disciple",icon:"🥋",health:n.health,maxHealth:n.health,strength:n.damage}),i.phase="COMBAT",Rt(),N(),U()};window.cloudStoryExploreLibrary=()=>{i.cloudCultivatorStoryStage=Math.max(8,M(i.cloudCultivatorStoryStage));const n=e=>{const t=String((e==null?void 0:e.name)||"");if(!t)return;const o=i.specialActions.findIndex(s=>(s==null?void 0:s.name)===t);if(o===-1){i.specialActions.push(e);return}i.specialActions[o]={...i.specialActions[o],...e}};n({name:"Find heavenly demon manual.",icon:"📖",description:`Cost: Story Luck −55
Requirement: Story Luck ≥ 55
Outcome: Obtain Hidden Heavenly Demon Manual`,disabled:i.luck<55,onStart:()=>i.luck<55?!1:(i.luck-=55,i.specialActions=i.specialActions.filter(e=>(e==null?void 0:e.name)!=="Take the Demonic Manual."&&(e==null?void 0:e.name)!=="Find nothing."),!0),callback:()=>window.cloudStoryFindHeavenlyDemonManual()}),n({name:"Take the Demonic Manual.",icon:"📕",description:`Cost: None
Outcome: Obtain Demonic Manual
Equipping it will get you expelled from your sect.`,disabled:!1,onStart:()=>(i.specialActions=i.specialActions.filter(e=>(e==null?void 0:e.name)!=="Find heavenly demon manual."),!0),callback:()=>window.cloudStoryTakeDemonicManual()}),n({name:"Find nothing.",icon:"🫙",description:`Cost: None
Outcome: You find nothing of value.`,disabled:!1,callback:()=>window.cloudStoryFindNothingInLibrary()}),N(),U()};window.cloudStoryFindNothingInLibrary=()=>{i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Find heavenly demon manual."&&(n==null?void 0:n.name)!=="Take the Demonic Manual."&&(n==null?void 0:n.name)!=="Find nothing."),i.cloudCultivatorStoryStage=Math.max(9,M(i.cloudCultivatorStoryStage)),O("You search the shelves... and find nothing."),O("The emptiness is an answer. If the library holds no power, you will find it elsewhere."),i.specialActions.some(n=>(n==null?void 0:n.name)==="Venture Out to the Neighboring Sects")||i.specialActions.push({name:"Venture Out to the Neighboring Sects",icon:"🧭",description:"You leave the sect grounds, following rumor and pressure points instead of scrolls.",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.cloudStoryVentureOutToNeighboringSects()}),N(),U()};window.cloudStoryVentureOutToNeighboringSects=()=>{i.cloudCultivatorStoryStage=Math.max(10,M(i.cloudCultivatorStoryStage)),Ue(["Venture Out to the Neighboring Sects"]),O("You drift from sect to sect like weather: present, inevitable, and hard to pin down."),ke({name:"Cause Commotion",icon:"💥",description:"A small disturbance. A rumor. A shattered gate latch. Enough to summon someone important.",disabled:i.stamina<5,onStart:()=>i.stamina<5?!1:(i.stamina-=5,!0),callback:()=>window.cloudStoryCauseCommotion()}),N(),U()};window.cloudStoryCauseCommotion=()=>{i.cloudCultivatorStoryStage=Math.max(11,M(i.cloudCultivatorStoryStage)),Ue(["Cause Commotion"]),O("The commotion spreads. Footsteps multiply. Voices harden."),ke({name:"Attacked",icon:"🩸",description:"They answer with steel, talismans, and killing intent.",disabled:!1,onStart:()=>{const n=ze(i.qi),e=Math.floor(n*.25);return i.qi=Math.max(0,n-e),!0},callback:()=>window.cloudStoryAttacked()}),N(),U()};window.cloudStoryAttacked=()=>{i.cloudCultivatorStoryStage=Math.max(12,M(i.cloudCultivatorStoryStage)),Ue(["Attacked"]),O("Pain blooms behind your ribs. You retreat—not in fear, but in calculation."),ke({name:"Run to Sect Leader",icon:"🏃",description:"You return to the Cloud Sect and demand judgment—if the sect will not act, you will.",disabled:i.stamina<5,onStart:()=>i.stamina<5?!1:(i.stamina-=5,!0),callback:()=>window.cloudStoryRunToSectLeader()}),N(),U()};window.cloudStoryRunToSectLeader=()=>{i.cloudCultivatorStoryStage=Math.max(13,M(i.cloudCultivatorStoryStage)),Ue(["Run to Sect Leader"]),O("The sect leader listens without blinking. A single nod is permission, or doom."),ke({name:"Conquering Sect",icon:"🏴",description:"You take a small force and strike fast—before the rumor can turn into resistance.",disabled:!1,callback:()=>window.cloudStoryConqueringSect()}),N(),U()};window.cloudStoryConqueringSect=()=>{i.cloudCultivatorStoryStage=Math.max(14,M(i.cloudCultivatorStoryStage)),Ue(["Conquering Sect"]),nd("Victory is swift:"),O("The surviving disciples kneel. The banner comes down. The treasury is sealed under Cloud authority."),ke({name:"Major Accident",icon:"⚠️",description:"Power moves faster than paperwork. Faster than tradition. Faster than control.",disabled:!1,callback:()=>window.cloudStoryMajorAccident()}),N(),U()};window.cloudStoryMajorAccident=()=>{sn(),i.cloudCultivatorStoryStage=Math.max(15,M(i.cloudCultivatorStoryStage)),Ue(["Major Accident"]),O("A major accident tears through the hierarchy. Blame passes like lightning."),O("When the ash settles, the sect needs a hand to hold the seal. That hand becomes yours."),i.sectRankLayer="leader",i.sectRankNumber=1,i.cloudConqueredSectsUnlocked=!0,Array.isArray(i.repeatableActions)||(i.repeatableActions=[]),i.repeatableActions.some(n=>(n==null?void 0:n.name)==="Searching and Conquering")||i.repeatableActions.push({name:"Searching and Conquering",icon:"🗺️",disabled:!1,callback:()=>window.searchingAndConquering()}),N(),U()};window.searchingAndConquering=()=>{if(sn(),!i.cloudConqueredSectsUnlocked||!i.devIgnoreRequirements&&i.searchingAndConqueringCooldown>0)return;if(i.devIgnoreRequirements||(i.searchingAndConqueringCooldown=3),!(Math.random()<.5)){O("You search the region for weaknesses... but the trail goes cold."),N(),U();return}nd("You strike before dawn:")||O("Even with momentum, there is nothing left to take."),N(),U()};window.cloudStoryFaceUnitedSects=()=>{sn(),ri(),i.cloudConqueredSectsUnlocked&&Jo()&&(i.cloudCoalitionWarStage=Math.max(1,M(i.cloudCoalitionWarStage)),Ue(["Face the United Sects"]),O("The united sects march. Your banners answer."),ke({name:"Sect Armies Clash",icon:"🛡️",description:"Player’s conquered sects fight coalition armies.",disabled:!1,callback:()=>window.cloudStorySectArmiesClash()}),N(),U())};window.cloudStorySectArmiesClash=()=>{sn(),ri(),i.cloudConqueredSectsUnlocked&&Jo()&&(Ue(["Sect Armies Clash"]),i.cloudCoalitionWarStage=2,i.cloudCoalitionWave={kind:"armies",index:0,awaitingStaminaFull:!1,pendingStart:!0},O("🛡️ Sect armies clash. The first disciple steps forward."),setTimeout(()=>{try{_r()}catch{}},25),N(),U())};window.cloudStoryChampionsDuel=()=>{sn(),ri(),i.cloudConqueredSectsUnlocked&&Jo()&&(Ue(["Champions Duel"]),i.cloudCoalitionWarStage=2,i.cloudCoalitionWave={kind:"champions",index:0,awaitingStaminaFull:!1,pendingStart:!0},O("🥊 The coalition sends champions. The first enters the ring."),setTimeout(()=>{try{_r()}catch{}},25),N(),U())};window.cloudStoryFinalConfrontation=()=>{sn(),ri(),i.cloudConqueredSectsUnlocked&&Jo()&&(Ue(["Final Confrontation"]),i.cloudFinalConfrontationCinematicDone=!0,i.cloudCoalitionWarStage=5,O("🔥 The final fusion forms. The world holds its breath."),yy(),N(),U())};function Fd(){try{Mn(),i.hdDetour.unlocked=!0,i.hdDetour.choseDifferentPath||ke({name:"I Rather Walk a Different Path.",icon:"🚪",disabled:!1,callback:()=>window.hdRatherWalkDifferentPath()})}catch{}}function vy(){const n=e=>{try{dt(e)}catch{}};n({name:"Beginner Cultivation Manual",icon:"📖",description:"A basic manual that allows major realm breakthroughs",equippable:!0});for(const e of Object.keys(An))e!=="Cloud"&&e!=="Orthodox"&&n({name:`${e} Manual (Tier 1)`,icon:"📖",description:`Basic ${e} cultivation techniques`,equippable:!0});n({name:"Heavenly Demon Manual (Tier 1)",icon:"📖",description:"Balanced demon cultivation techniques",equippable:!0}),n({name:"Demon Monarch Manual (Tier 1)",icon:"📖",description:"Forbidden demon cultivation techniques",equippable:!0}),n({name:"Orthodox Manual",icon:"📕",description:"A manual of righteous cultivation. Its loyalty binds you forever.",equippable:!0})}function by(){if(typeof i.customSectName!="string"&&(i.customSectName=""),i.customSectName.trim())return;const n=window.prompt("Name your sect:","");if(n===null)return;const e=String(n||"").trim().slice(0,40);e&&(i.customSectName=e,O(`Your sect will be known as: ${e}`))}function yy(){if(i.inCombat)return;const n=il(14),e=Math.max(1,Math.floor(M(n.maxHealth)*1.15)),t=Math.max(1,Math.floor(M(n.strength)*1.15));i.combatContext={type:"cloudTriSectBoss"},i.questReturnPhase=i.phase,Ni(),i.inCombat=!0,i.enemy=Di({name:"Tri-Sect Fusion",icon:"🔥",health:e,maxHealth:e,strength:t}),i.phase="COMBAT",Rt(),O("The Tri-Sect Fusion challenges you!")}function My(n){const e=i.combatContext;if(!(!e||e.type!=="cloudTriSectBoss")){i.combatContext=null,vy();try{ai()}catch{}try{ks("Heavenly Demon")}catch{}try{ks("Demon Monarch")}catch{}try{ks("Orthodox")}catch{}O("🏁 The coalition breaks. The war ends."),O("📚 You seize every technique the world can offer."),rn("ENDING","Good Ending — Tri-Sect Dominion",["🏁 The coalition breaks. The war ends.","📚 You seize every technique the world can offer.","No sect can oppose you now."],[{label:"Continue.",onClick:"window.closeStoryDialog()"}],{mode:"PAGE_SWAP",sentencesPerPage:1,pageHoldMs:8500,transitionMs:1100,choicesFadeInDelayMs:950}),by(),N(),U()}}function _y(){const n=i.combatContext;return!n||n.type!=="cloudTriSectBoss"?!1:(i.inCombat=!1,i.enemy=null,i.combatContext=null,i.phase=i.questReturnPhase||"FARMING",i.questReturnPhase=null,Rt(),O("You fail to defeat the fusion."),O("🗣️ A voice in your head whispers: “Finally… listen.”"),Fd(),N(),U(),!0)}function Sy(){const n=i.combatContext;return!n||n.type!=="cloudTriSectBoss"?!1:(os(),i.health=Math.max(1,M(i.health)),O("You retreat from the fusion. The voice follows you."),O("🗣️ “Finally… listen.”"),Fd(),N(),U(),!0)}window.cloudStoryFindHeavenlyDemonManual=()=>{i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Find heavenly demon manual."&&(n==null?void 0:n.name)!=="Take the Demonic Manual."&&(n==null?void 0:n.name)!=="Find nothing."),i.cloudCultivatorStoryStage=Math.max(9,M(i.cloudCultivatorStoryStage)),dt({name:"Hidden Heavenly Demon Manual",icon:"📖",description:"A forbidden-yet-radiant tome. Its techniques feel like sunlight cast through smoke.",equippable:!0});try{Mn(),i.hdDetour.unlocked=!0,i.hdDetour.choseDifferentPath||ke({name:"I Rather Walk a Different Path.",icon:"🚪",disabled:!1,callback:()=>window.hdRatherWalkDifferentPath()})}catch{}N(),U()};window.cloudStoryTakeDemonicManual=()=>{i.specialActions=i.specialActions.filter(n=>(n==null?void 0:n.name)!=="Find heavenly demon manual."&&(n==null?void 0:n.name)!=="Take the Demonic Manual."&&(n==null?void 0:n.name)!=="Find nothing."),i.cloudCultivatorStoryStage=Math.max(9,M(i.cloudCultivatorStoryStage)),dt({name:"Demonic Manual",icon:"📕",description:"A manual steeped in demonic intent. Other sects will not tolerate its use.",equippable:!0}),vd(),N(),U()};window.claimLargerBagSpace=()=>{i.hasLargerBagSpace||(i.hasLargerBagSpace=!0,i.maxStamina=M(i.maxStamina)+5,O("🎒 Your bag straps tighten into place. (+5 Max Stamina)"),N(),U())};window.chopWood=()=>{if(!i.devIgnoreRequirements){if(i.stamina<3)return;i.stamina-=3}i.isResting=!1,no+=1,N(),O(`You chop wood. +1 wood (Total: ${no})`)};window.sellWood=()=>{if(no<=0)return;const n=Math.floor(no*3*i.silverMultiplier);i.silver+=n,O(`You sell ${no} wood for ${n} silver.`),no=0,N(),U()};window.buyNormalAxe=()=>{i.silver<50||(i.silver-=50,i.silverMultiplier=1.5,i.hasBoughtNormalAxe=!0,i.legendaryAxeOfferRolled=!0,i.legendaryAxeOfferAvailable=!1,i.bargainOfferRolled=!0,i.bargainOfferAvailable=!1,dt({name:"Normal Axe",icon:"🪓",description:"A quality axe that increases silver gain by 50%"}),O("🪓 You buy a normal axe! Silver gain increased by 50%!"),i.specialActions=i.specialActions.filter(n=>{const e=String((n==null?void 0:n.name)||"");return!e.includes("Buy Legendary Axe")&&!e.includes("Bargain")&&!e.includes("Bargain with Merchant")&&!e.includes("Ignore Merchant")}),N(),U())};window.buyLegendaryTools=()=>{i.luck<20||(i.luck-=20,i.silverMultiplier=1.7,i.hasBoughtLegendaryTools=!0,i.legendaryAxeOfferRolled=!0,i.legendaryAxeOfferAvailable=!1,i.bargainOfferRolled=!0,i.bargainOfferAvailable=!1,dt({name:"Legendary Axe",icon:"✨",description:"A legendary axe that increases silver gain by 70%"}),O("You acquire a legendary axe! Silver gain increased by 70%!"),i.specialActions=i.specialActions.filter(n=>!n.name.includes("Buy Normal Axe")&&!n.name.includes("Bargain")&&!n.name.includes("Bargain with Merchant")&&!n.name.includes("Ignore Merchant")),N(),U())};window.startBargain=()=>{O("A mysterious merchant approaches you..."),i.hasSeenBargain=!0,i.specialActions=i.specialActions.filter(n=>!n.name.includes("Bargain")),i.specialActions.push({name:"Bargain with Merchant",icon:"🤝",disabled:!1,callback:()=>window.acceptBargain()},{name:"Ignore Merchant",icon:"🚫",disabled:!1,callback:()=>window.ignoreBargain()}),N(),U()};window.acceptBargain=()=>{const n=.1+Math.random()*.3,e=Math.floor(n*100),t=Math.floor(50*(1-n));O(`🤝 The merchant offers you a ${e}% discount on your next axe purchase!`),i.specialActions=i.specialActions.filter(s=>!s.name.includes("Bargain with Merchant")&&!s.name.includes("Ignore Merchant")),i.specialActions.find(s=>s.name&&s.name.includes("Buy Normal Axe"))&&(i.specialActions=i.specialActions.filter(s=>!s.name.includes("Buy Normal Axe")),i.specialActions.push({name:`Buy Normal Axe (${t} silver - ${e}% off!)`,icon:"🪓",disabled:!1,callback:()=>window.buyNormalAxeDiscounted(t)})),N(),U()};window.buyNormalAxeDiscounted=n=>{i.silver<n||(i.silver-=n,i.silverMultiplier=1.5,i.hasBoughtNormalAxe=!0,dt({name:"Normal Axe",icon:"🪓",description:"A quality axe that increases silver gain by 50%"}),O("🪓 You buy a normal axe at a discounted price! Silver gain increased by 50%!"),i.specialActions=i.specialActions.filter(e=>!e.name.includes("Buy Legendary Axe")),N(),U())};window.ignoreBargain=()=>{O("🚫 You ignore the merchant and continue on your way."),i.specialActions=i.specialActions.filter(n=>!n.name.includes("Bargain with Merchant")&&!n.name.includes("Ignore Merchant")),N(),U()};window.seekAzurePeakSect=()=>{if(i.cultivationMajorIndex<1){O("Sects only accept cultivators at Foundation Establishment or higher.");return}i.specialActions=i.specialActions.filter(e=>!e.name.includes("Seek Azure Peak Sect"));const n=An[i.primaryAffinity];O(`${n.icon} You arrive at the ${n.name}!`),O("The sect master senses your affinity and offers you a place."),i.specialActions.push({name:`Join ${n.name}`,icon:n.icon,disabled:!1,callback:()=>window.joinAffinitySect()},{name:"Join Heavenly Demon Sect",icon:"😇",disabled:!1,callback:()=>window.joinHeavenlyDemonSect()},{name:"Join Demon Monarch Sect",icon:"😈",disabled:!1,callback:()=>window.joinDemonMonarchSect()}),N(),U()};window.joinAffinitySect=()=>{const n=An[i.primaryAffinity];i.hasJoinedSect=!0,i.currentSect=i.primaryAffinity,i.manualType=i.primaryAffinity,i.manualTier=1,i.sectRankLayer="outer",i.sectRankNumber=6,i.sectRankPyramidOpen=!1,Mo(es(Zo(i.primaryAffinity))),O(`${n.icon} You join the ${n.name} as an outer disciple!`),O(`You receive a Tier 1 ${i.primaryAffinity} cultivation manual!`),dt({name:`${i.primaryAffinity} Manual (Tier 1)`,icon:"📖",description:`Basic ${i.primaryAffinity} cultivation techniques`,equippable:!0}),ai(),i.specialActions=i.specialActions.filter(e=>!e.name.includes("Join ")||e.name.includes("Joined")),N(),U()};window.joinHeavenlyDemonSect=()=>{i.hasJoinedSect=!0,i.currentSect="Heavenly Demon",i.manualType="Demon",i.manualTier=1,i.sectRankLayer="outer",i.sectRankNumber=6,i.sectRankPyramidOpen=!1,Mo(5),O("You join the Heavenly Demon Sect!"),O("You receive a Tier 1 Heavenly Demon cultivation manual!"),O("⚠️ This path grants powerful techniques but may affect your reputation."),dt({name:"Heavenly Demon Manual (Tier 1)",icon:"📖",description:"Balanced demon cultivation techniques",equippable:!0}),ai(),i.specialActions=i.specialActions.filter(n=>!n.name.includes("Join ")||n.name.includes("Joined")),N(),U()};window.joinDemonMonarchSect=n=>{const e=Math.floor(Number(n)||0),t=e>=1&&e<=5?e:5;i.hasJoinedSect=!0,i.currentSect="Demon Monarch",i.manualType="Demon",i.manualTier=1,i.isDemonPath=!0,i.corruption=5,i.sectRankLayer="outer",i.sectRankNumber=6,i.sectRankPyramidOpen=!1,Mo(t),i.cultivationMajorIndex=0,i.cultivationSubIndex=0,O(`You join the Demon Monarch Sect! (Tier ${t})`),O("You receive a Tier 1 Demon Monarch cultivation manual!"),O("WARNING: You have entered the Demon Path!"),O("Your cultivation realms have changed to Demonic realms."),O(`Corruption: ${i.corruption} - Increases with major breakthroughs.`),dt({name:"Demon Monarch Manual (Tier 1)",icon:"📖",description:"Forbidden demon cultivation techniques",equippable:!0}),ai(),i.specialActions=i.specialActions.filter(o=>!o.name.includes("Join ")||o.name.includes("Joined")),N(),U()};window.buyQiPill=()=>{if(i.spiritStonesLow<50){O("Insufficient spirit stones. Need 50 low-grade.");return}i.spiritStonesLow-=50,dt({name:"Qi Gathering Pill",icon:"💊",description:"Instantly grants 500 Qi when consumed"}),O("You purchase a Qi Gathering Pill!"),N(),U()};function Ud(n){return String(n)==="outer"||String(n)==="inner"||String(n)==="core"||String(n)==="master"||String(n)==="elder"||String(n)==="leader"}function Bd(n){switch(String(n)){case"inner":return{key:"inner",label:"Inner Disciple",count:5};case"core":return{key:"core",label:"Core Disciple",count:4};case"master":return{key:"master",label:"Master",count:3};case"elder":return{key:"elder",label:"Elder",count:2};case"leader":return{key:"leader",label:"Sect Leader",count:1};default:return{key:"outer",label:"Outer Disciple",count:6}}}function ss(n,e){const t=Bd(n),o=t.count,s=Math.max(1,Math.min(o,Math.floor(Number(e)||o)));return{layer:t.key,rank:s}}function Od(n,e){const t=ss(n,e);return i.hasJoinedSect?t.layer==="outer"?{low:0,mid:0,high:0}:t.layer==="inner"?{low:Math.max(0,6-t.rank),mid:0,high:0}:t.layer==="core"?{low:Math.max(0,18-2*t.rank),mid:0,high:0}:t.layer==="master"?{low:0,mid:Math.max(0,7-2*t.rank),high:0}:t.layer==="elder"?{low:0,mid:t.rank===1?15:10,high:0}:{low:0,mid:0,high:2}:{low:0,mid:0,high:0}}function Gd(n){const e=Math.floor(Number(n)||0);return e>=300?{layer:"elder",rank:2}:e>=150?{layer:"core",rank:4}:e>=50?{layer:"inner",rank:5}:{layer:"outer",rank:6}}function pl(n,e){const t=ss(n,e),o=Bd(t.layer);return o.key==="leader"?"Sect Leader":`${o.label} Rank ${t.rank}`}function Hd(n,e){const t=ss(n,e),o=g=>Math.max(1,Math.floor((Number(g)||0)*3/2)),s=g=>Math.max(1,Math.floor((Number(g)||0)*2)),r=g=>Math.max(1,Math.floor((Number(g)||0)*5/2)),l=g=>{const h=Math.max(1,Math.floor(Number(g)||0));return h%2===0?h:Math.max(1,h-1)},a={};a[5]={health:200,damage:100},a[4]={health:o(a[5].health),damage:o(a[5].damage)},a[3]={health:o(a[4].health),damage:o(a[4].damage)},a[2]={health:o(a[3].health),damage:o(a[3].damage)},a[1]={health:o(a[2].health),damage:o(a[2].damage)},a[6]={health:50,damage:50};const c={};c[5]={health:s(a[1].health),damage:s(a[1].damage)},c[4]={health:o(c[5].health),damage:o(c[5].damage)},c[3]={health:o(c[4].health),damage:o(c[4].damage)},c[2]={health:o(c[3].health),damage:o(c[3].damage)},c[1]={health:o(c[2].health),damage:o(c[2].damage)};const u={};u[4]={health:s(c[1].health),damage:s(c[1].damage)},u[3]={health:o(u[4].health),damage:o(u[4].damage)},u[2]={health:o(u[3].health),damage:o(u[3].damage)},u[1]={health:o(u[2].health),damage:o(u[2].damage)};const d={};d[3]={health:s(u[1].health),damage:s(u[1].damage)},d[2]={health:o(d[3].health),damage:o(d[3].damage)},d[1]={health:o(d[2].health),damage:o(d[2].damage)};const f={};f[2]={health:s(d[1].health),damage:s(d[1].damage)},f[1]={health:l(o(f[2].health)),damage:l(o(f[2].damage))};const p={};p[1]={health:r(f[1].health),damage:r(f[1].damage)};const b={outer:a,inner:c,core:u,master:d,elder:f,leader:p}[t.layer],y=b&&b[t.rank];return y?{health:y.health,damage:y.damage}:{health:1,damage:1}}function xy(){const n=String(i.sectRankLayer||"outer"),e=Math.floor(Number(i.sectRankNumber)||6);return[{key:"leader",label:"LEADER",count:1},{key:"elder",label:"ELDER",count:2},{key:"master",label:"MASTER",count:3},{key:"core",label:"CORE",count:4},{key:"inner",label:"INNER",count:5},{key:"outer",label:"OUTER",count:6}].map(o=>`<div class="sect-ranks-row">${Array.from({length:o.count}).map((r,l)=>{const a=l+1,u=`sect-rank-node${o.key===n&&a===e?" owned":""}`,d=o.key==="leader"?"LEADER":`${o.label} ${a}`;return`<button class="${u}" onclick="window.sectChallengeRank('${o.key}', ${a})">${Te(d)}</button>`}).join("")}</div>`).join("")}window.sectCloseRanks=()=>{i.sectRankPyramidOpen=!1,N(),U()};window.sectChallengeRank=(n,e)=>{if(!i.hasJoinedSect||i.inCombat)return;const t=ss(n,e),o=Hd(t.layer,t.rank);i.combatContext={type:"sectRankDuel",layer:t.layer,rank:t.rank},i.questReturnPhase=i.phase,Ni(),i.inCombat=!0,i.enemy=Di({name:pl(t.layer,t.rank),icon:t.layer==="leader"?"🏯":"🥋",health:o.health,maxHealth:o.health,strength:o.damage}),i.phase="COMBAT",Rt(),N(),U()};function wy(n){const e=i.combatContext;if(!e||e.type!=="sectRankDuel")return;const t=ss(e.layer,e.rank);i.sectRankLayer=t.layer,i.sectRankNumber=t.rank,i.combatContext=null,O(`You claim the rank of ${pl(t.layer,t.rank)}!`)}function Cy(n){const e=i.combatContext;!e||e.type!=="cloudStoryOuterDiscipleDuel"||(i.sectRankLayer="inner",i.sectRankNumber=5,i.cloudCultivatorStoryStage=Math.max(7,M(i.cloudCultivatorStoryStage)),i.combatContext=null,i.specialActions.some(t=>(t==null?void 0:t.name)==="Exploring the Sect Library.")||i.specialActions.push({name:"Exploring the Sect Library.",icon:"📚",description:"With your new standing, the Cloud Sect’s library opens to you.",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.cloudStoryExploreLibrary()}))}function Ay(){const n=i.combatContext;return!n||n.type!=="cloudStoryOuterDiscipleDuel"?!1:(i.stamina=0,i.inCombat=!1,i.enemy=null,i.combatContext=null,i.health=Math.max(1,M(i.health)),i.cloudCultivatorStoryStage=Math.max(7,M(i.cloudCultivatorStoryStage)),i.specialActions=i.specialActions.filter(e=>(e==null?void 0:e.name)!=="Battle starts."),i.specialActions.some(e=>(e==null?void 0:e.name)==="Exploring the Sect Library.")||i.specialActions.push({name:"Exploring the Sect Library.",icon:"📚",description:"With your new standing, the Cloud Sect’s library opens to you.",disabled:i.stamina<15,onStart:()=>i.stamina<15?!1:(i.stamina-=15,!0),callback:()=>window.cloudStoryExploreLibrary()}),!0)}function Ty(n){if(!n||typeof n!="object"||i.inCombat)return;ri();const e=i.cloudCoalitionWave;if(!e)return;i.combatContext={type:"cloudCoalitionWar",kind:e.kind,index:e.index},i.questReturnPhase=i.phase,Ni(),i.inCombat=!0;const t=Math.max(1,M(n.health)),o=Math.max(1,M(n.maxHealth??n.health)),s=Math.max(1,M(n.strength));i.enemy=Di({name:String(n.name||"Coalition Enemy"),icon:String(n.icon||"⚔️"),health:t,maxHealth:o,strength:s}),i.phase="COMBAT",Rt(),N(),U()}function Ey(n,e){const t=String(n||""),o=Math.max(0,Math.min(2,Math.floor(Number(e)||0)));if(t==="armies"){const v=[.8,.9,1.1][o]??1,b=Math.max(1,Math.floor(ze(i.maxHealth)*v)),y=Math.max(1,Math.floor(ze(i.strength)*v));return{name:"Core Coalition Disciple",icon:"⚔️",health:b,maxHealth:b,strength:y}}const s=["Heavenly Demon Champion","Demonic Monarch General","Orthodox Grandmaster"],r=["👁️","👹","☯️"],a=[.95,1,1.05][o]??1,c=Math.max(1,Math.floor(ze(i.health))),u=Math.max(1,Math.floor(ze(i.strength))),d=Math.max(1,Math.floor(c*a)),f=Math.max(1,Math.floor(u*a));return{name:s[o]||"Coalition Champion",icon:r[o]||"⚔️",health:d,maxHealth:d,strength:f}}function _r(){if(ri(),i.inCombat||i.phase!=="FARMING")return!1;const n=i.cloudCoalitionWave;if(!n||typeof n!="object"||!n.pendingStart||n.awaitingStaminaFull&&!i.devIgnoreRequirements&&M(i.stamina)<M(i.maxStamina))return!1;n.pendingStart=!1,i.cloudCoalitionWave=n;const e=Ey(n.kind,n.index);return Ty(e),!0}function ml(n){ri();const e=i.cloudCoalitionWave;if(!e)return;const t=String(e.kind),o=M(e.index);if((n==="defeat"||n==="flee")&&(i.stamina=0),n==="victory"){if(o<2){i.cloudCoalitionWave={kind:t,index:o+1,awaitingStaminaFull:!1,pendingStart:!0},setTimeout(()=>{try{_r()}catch{}},25);return}i.cloudCoalitionWave=null,t==="armies"?(i.cloudCoalitionWarStage=3,O("Your conquered sects hold the line. The coalition escalates.")):(i.cloudCoalitionWarStage=4,O("The champions fall. The final fusion approaches."));try{_a()}catch{}return}if(o<2){i.cloudCoalitionWave={kind:t,index:o+1,awaitingStaminaFull:!0,pendingStart:!0},O("Your stamina is shattered. Recover it to face the next battle.");return}i.cloudCoalitionWave=null,t==="armies"?(i.cloudCoalitionWarStage=3,O("The last clash drains you. The war moves on regardless.")):(i.cloudCoalitionWarStage=4,O("Even in defeat, the duel ends. The final confrontation is inevitable."));try{_a()}catch{}}function Ry(){const n=i.combatContext;return!n||n.type!=="cloudCoalitionWar"?!1:(ml("defeat"),i.inCombat=!1,i.enemy=null,i.combatContext=null,i.phase=i.questReturnPhase||"FARMING",i.questReturnPhase=null,i.health=M(i.maxHealth),Rt(),N(),U(),!0)}function Ly(n){const e=i.combatContext;!e||e.type!=="cloudCoalitionWar"||(ml("victory"),i.combatContext=null)}function Iy(){const n=i.combatContext;return!n||n.type!=="cloudCoalitionWar"?!1:(ml("flee"),os(),i.health=M(i.maxHealth),N(),U(),!0)}function qd(n){const e=Math.floor(Number(n)||0);return{2:1,3:2,4:5,5:10,6:15,7:20,8:30,9:70,10:150,11:225,12:250,13:300,14:350,15:400,16:425,17:475,18:500,19:750,20:1e3}[e]??null}window.upgradeSectManual=()=>{if(!i.hasJoinedSect)return;const n=M(i.manualTier);if(n>=20){O("📚 Your manual is already at maximum tier (20).");return}const e=n+1,t=qd(e);if(!Number.isFinite(t)||t<=0)return;const o=ze(i.contributionPoints);if(o<t){O(`Not enough Contribution Points. Need ${Ai(t)}, have ${Ai(o)}.`);return}i.contributionPoints=o-t,i.manualTier=e,ai(),O(`📚 Manual upgraded to Tier ${i.manualTier}! (-${Ai(t)} CP)`),N(),U()};window.sectGetQuest=()=>{if(i.hasJoinedSect){if(i.activeQuest&&i.activeQuest.completed!==!0){i.activeSidePanels.add("quests"),N(),U(),O("You already have an active quest.");return}i.activeQuest=Py(),i.activeSidePanels.add("quests"),N(),U(),O("New quest received. Open the Quests panel.")}};window.sectShowRank=()=>{if(i.hasJoinedSect){if(!Ud(i.sectRankLayer)||!Number.isFinite(i.sectRankNumber)){const n=Gd(i.contributionPoints);i.sectRankLayer=n.layer,i.sectRankNumber=n.rank}i.sectRankPyramidOpen=!0,N(),U()}};function Py(){const n=Date.now(),e=String(i.primaryAffinity||"").trim(),t=String(i.currentSect||"").trim(),o=Ys.includes(e)?e:"",s=Ys.includes(t)?t:o,r=[{kind:"bandits",title:"Clear Thunder Mountain Bandits"},{kind:"beast",title:"Hunt the Spirit Beast"},{kind:"relic",title:"Recover the Lost Sect Relic"},{kind:"escort",title:"Escort the Caravan Through the Pass"},{kind:"purge",title:"Purge the Corrupted Shrine"}],l=Math.random();let a=r[Math.floor(Math.random()*r.length)];return s==="Thunder"&&l<.45&&(a=r.find(c=>c.kind==="bandits")||a),s==="Grass"&&l<.35&&(a=r.find(c=>c.kind==="relic")||a),s==="Poison"&&l<.35&&(a=r.find(c=>c.kind==="purge")||a),s==="Water"&&l<.3&&(a=r.find(c=>c.kind==="escort")||a),{id:`q_${n}`,kind:String(a.kind),affinity:s||null,title:String(a.title),started:!1,completed:!1,progressPct:0,steps:[],activeStep:null,pendingCombatStepId:null,forceMercyStep:!1}}function Vd(n){const e=String((n==null?void 0:n.kind)||"");if(e)return e;const t=String((n==null?void 0:n.title)||"").toLowerCase();return t.includes("bandit")&&t.includes("thunder")&&t.includes("mountain")?"thunderMountainBandits":t.includes("bandit")?"bandits":"generic"}function Dy(n){const e=(Number.isFinite(n)?n:0)+1,t=200,o=100,s=Math.max(0,e-2),r=Math.pow(1.5,s);return{health:Math.max(1,Math.floor(t*r)),strength:Math.max(1,Math.floor(o*r))}}function Ny(n){const e=(Number.isFinite(n)?n:0)+1;return e>=16&&e<=20?{contributionPoints:100,low:0,mid:0,high:10}:e>=11&&e<=15?{contributionPoints:25,low:0,mid:20,high:0}:e>=7&&e<=10?{contributionPoints:5,low:0,mid:8,high:0}:e>=4&&e<=6?{contributionPoints:1.2,low:20,mid:0,high:0}:e===3?{contributionPoints:.8,low:12,mid:0,high:0}:{contributionPoints:.6,low:10,mid:0,high:0}}function ky(n){const e=Vd(n);if(n&&n.forceMercyStep)return{type:"progress",label:e==="thunderMountainBandits"?"Regroup and treat wounds (mercy)":"Recover and regroup (mercy)"};if(e==="thunderMountainBandits"||e==="bandits")return{type:"combat",label:e==="thunderMountainBandits"?"Fight Thunder Mountain Bandit":"Fight Bandit Raider"};if(e==="beast"){const r=["Track fresh claw marks","Follow the scent trail","Set a spirit bait lure"],l=["Ambushed by a spirit beast","Face the spirit beast head-on"];return Math.random()<.55?{type:"combat",label:l[Math.floor(Math.random()*l.length)]}:{type:"progress",label:r[Math.floor(Math.random()*r.length)]}}if(e==="relic"){const r=["Search the ruined courtyard","Decipher an old inscription","Navigate the collapsed tunnels"],l=["Fend off a tomb-robber","Defeat the relic guardian"];return Math.random()<.3?{type:"combat",label:l[Math.floor(Math.random()*l.length)]}:{type:"progress",label:r[Math.floor(Math.random()*r.length)]}}if(e==="escort"){const r=["Guide the caravan forward","Secure the narrow pass","Scout ahead for danger"],l=["Repel highwaymen","Drive off a hungry beast"];return Math.random()<.38?{type:"combat",label:l[Math.floor(Math.random()*l.length)]}:{type:"progress",label:r[Math.floor(Math.random()*r.length)]}}if(e==="purge"){const r=["Cleanse the shrine wards","Reinforce a broken seal","Burn corrupted offerings"],l=["Slay a corrupted cultist","Defeat the shrine abomination"];return Math.random()<.42?{type:"combat",label:l[Math.floor(Math.random()*l.length)]}:{type:"progress",label:r[Math.floor(Math.random()*r.length)]}}const t=["Gathering materials","Preparing supplies","Scouting the area"],o=["Skirmish with a hostile cultivator","Fend off a wild beast"];return Math.random()<.33?{type:"combat",label:o[Math.floor(Math.random()*o.length)]}:{type:"progress",label:t[Math.floor(Math.random()*t.length)]}}function zd(){const n=i.activeQuest;!n||n.completed||n.started||(n.started=!0,n.progressPct=0,n.steps=[],n.activeStep=null,n.pendingCombatStepId=null,n.forceMercyStep=!1,So(),U(),N())}function So(){const n=i.activeQuest;if(!n||n.completed)return;if(n.progressPct>=100){gl();return}const e=ky(n),t={id:`qs_${Date.now()}_${Math.floor(Math.random()*1e4)}`,type:e.type,label:e.label,resolved:!1};if(n.activeStep=t,n.forceMercyStep&&t.type==="progress"&&(n.forceMercyStep=!1),t.type==="progress"){const o={name:`QuestStep:${n.id}:${t.id}`,callback:()=>Fy(t.id)};Yo("quest",o,5e3)}}function Fy(n){const e=i.activeQuest;if(!e||e.completed||!e.activeStep||e.activeStep.id!==n)return;e.steps.push({...e.activeStep,resolved:!0}),e.activeStep=null;const t=10+Math.floor(Math.random()*11);e.progressPct=Math.min(100,M(e.progressPct)+t),e.progressPct>=100?gl():So(),U(),N()}function Wd(n){const e=i.activeQuest;if(!e||e.completed||!e.started)return;const t=e.activeStep;if(!t||t.type!=="combat")return;if(String(n)==="retreat"){e.steps.push({...t,resolved:!0,outcome:"retreat"}),e.activeStep=null,So(),U(),N();return}e.pendingCombatStepId=t.id,i.questReturnPhase=i.phase,Ni(),i.inCombat=!0;const o=Vd(e),s=Dy(i.cultivationMajorIndex),r=o==="thunderMountainBandits"?"Thunder Mountain Bandit":o==="bandits"?"Bandit Raider":o==="beast"?"Spirit Beast":o==="relic"?"Relic Guardian":o==="escort"?"Highwayman":o==="purge"?"Corrupted Cultist":"Quest Enemy";i.enemy=Di({name:r,health:s.health,maxHealth:s.health,strength:s.strength}),i.phase="COMBAT",Rt(),N(),U()}function Uy(){const n=i.activeQuest;if(!n||n.completed||!n.started||!n.pendingCombatStepId)return!1;const e=n.activeStep;if(!e||e.type!=="combat"||e.id!==n.pendingCombatStepId)return!1;n.pendingCombatStepId=null,n.steps.push({...e,resolved:!0,outcome:"defeat"}),n.activeStep=null;const t=10+Math.floor(Math.random()*6);return n.progressPct=Math.max(0,Math.min(100,M(n.progressPct)-t)),O(`Quest fight lost. Progress -${t}%. Mercy step next.`),n.forceMercyStep=!0,i.inCombat=!1,i.enemy=null,i.combatContext=null,i.phase=i.questReturnPhase||"FARMING",i.questReturnPhase=null,i.health=Math.max(1,M(i.health)),i.activeSidePanels.add("quests"),Rt(),So(),U(),N(),!0}function By(n){const e=i.activeQuest;if(!e||e.completed||!e.pendingCombatStepId)return;const t=e.activeStep;if(!t||t.type!=="combat"||t.id!==e.pendingCombatStepId)return;e.pendingCombatStepId=null,e.steps.push({...t,resolved:!0,outcome:"victory"}),e.activeStep=null;const o=10+Math.floor(Math.random()*11);e.progressPct=Math.min(100,M(e.progressPct)+o),e.progressPct>=100?gl():So()}function gl(){const n=i.activeQuest;if(!n||n.completed)return;n.completed=!0,n.progressPct=100;const e=Ny(i.cultivationMajorIndex);i.contributionPoints=ze(i.contributionPoints)+e.contributionPoints,i.spiritStonesLow=M(i.spiritStonesLow)+e.low,i.spiritStonesMid=M(i.spiritStonesMid)+e.mid,i.spiritStonesHigh=M(i.spiritStonesHigh)+e.high,O(`Quest complete! +${Ai(e.contributionPoints)} Contribution Points`),e.low&&O(`+${ge(e.low)} low-grade spirit stones`),e.mid&&O(`+${ge(e.mid)} mid-grade spirit stones`),e.high&&O(`+${ge(e.high)} high-grade spirit stones`);const t=(Number.isFinite(i.cultivationMajorIndex)?i.cultivationMajorIndex:0)+1,o=ht(i.rebirthUpgrades);i.rebirthUpgrades=o;const s=.01*M(o.questDropChanceLevel),r=Math.max(0,Math.min(.9,.12+t*.01+s));if(Math.random()<r){const l=Ii().filter(c=>c&&c.file!=="death_pill.png"),a=l.length?l[Math.floor(Math.random()*l.length)]:null;a&&(dt({name:String(a.name||"Pill"),kind:"pill",pillFile:String(a.file),imageSrc:String(a.src),description:Ya(a.file),quantity:1}),O(`Bonus reward: ${String(a.name||"Pill")}.`))}N(),U()}function Oy(){var c;let n=document.getElementById("quest-panel");if(!n){n=document.createElement("div"),n.id="quest-panel",n.className="quest-panel draggable-panel",bn(n,"quests"),Qt().appendChild(n),yn(n,"quests");const u=(c=i.panelPositions)==null?void 0:c.quests;u&&(u.x!==0||u.y!==0)&&(n.style.transform=`translate(${u.x}px, ${u.y}px)`)}const e=i.activeQuest;if(!e){n.innerHTML=`
      <div class="panel-header" onmousedown="window.startDrag(event, 'quest-panel')">
        <h3>QUEST</h3>
        <span class="drag-hint">✥ Drag to move ✥</span>
      </div>
      <div class="panel-content">
        <div class="quest-empty">No active quest. Use <b>Get Quest</b> in the Sect panel.</div>
      </div>
    `;return}const t=Math.max(0,Math.min(100,Math.floor(Number(e.progressPct)||0))),o=!!e.started,s=!!e.completed,r=e.activeStep;let l="0%",a=null;if(r&&r.type==="progress"){const u=Yt("quest",{name:`QuestStep:${e.id}:${r.id}`});l=`${Math.max(0,Math.min(100,Math.floor(ao(u)*100)))}%`,a=u}n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'quest-panel')">
      <h3>${s?"QUEST PROGRESS":"QUEST"}</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      <div class="quest-title">${Te(String(e.title||"Quest"))}</div>

      <div class="quest-progress-label">${s?"PROGRESS: 100%":`CURRENT PROGRESS: ${t}%`}</div>
      <div class="quest-progress-track">
        <div class="quest-progress-fill" style="width:${t}%;"></div>
        <div class="quest-progress-text">PROGRESS: ${t}%</div>
      </div>

      ${o?"":`
        <button class="quest-start-btn" onclick="window.startQuestFromPanel()">START</button>
      `}

      ${o&&!s&&r?`
        <div class="quest-step">
          ${r.type==="progress"?`
            <div class="quest-step-track">
              <div class="quest-step-fill" ${a?`data-progress-key=${JSON.stringify(String(a))}`:""} style="width:${l};"></div>
              <div class="quest-step-text">${Te(r.label)}</div>
            </div>
          `:`
            <div class="quest-step-track">
              <div class="quest-step-text">${Te(r.label)}</div>
            </div>
            <div class="quest-combat-actions">
              <button class="quest-combat-btn" onclick="window.questCombatRush()">RUSH</button>
              <button class="quest-combat-btn" onclick="window.questCombatRetreat()">RETREAT</button>
            </div>
          `}
        </div>
      `:""}

      ${s?`
        <div class="quest-empty">Quest completed. Get another quest from your sect.</div>
      `:""}
    </div>
  `}function Gy(){var l;let n=document.getElementById("moves-panel");if(!n){n=document.createElement("div"),n.id="moves-panel",n.className="moves-panel draggable-panel",bn(n,"moves"),Qt().appendChild(n),yn(n,"moves");const a=(l=i.panelPositions)==null?void 0:l.moves;a&&(a.x!==0||a.y!==0)&&(n.style.transform=`translate(${a.x}px, ${a.y}px)`)}(!Array.isArray(i.equippedMoves)||i.equippedMoves.length!==3)&&(i.equippedMoves=["punch","superPunch","punch"]),Ti()||(i.equippedMoves=i.equippedMoves.map(a=>String(a||"")==="qiBlast"?"punch":a));const e=i.equippedMoves,t=["punch","superPunch"],o=[...Ti()?["qiBlast"]:[],...ti().map(a=>`manual:${a.name}`)],s=Number.isFinite(i.movesPickerSlot)?Math.floor(Number(i.movesPickerSlot)):null,r=[...t,...Ti()?["qiBlast"]:[],...ti().map(a=>`manual:${a.name}`)];n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'moves-panel')">
      <h3>${It("moves",{title:"Moves"})} Moves</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content moves-content">
      <div class="moves-block">
        <div class="moves-block-title">BASIC</div>
        <div class="moves-list">${t.map(a=>du(a)).join("")}</div>
      </div>

      <div class="moves-block">
        <div class="moves-block-title">WEAPON</div>
        <div class="moves-empty">None</div>
      </div>

      <div class="moves-block">
        <div class="moves-block-title">MANUAL</div>
        ${o.length===0?'<div class="moves-empty">Equip a manual to see manual moves</div>':`<div class="moves-list">${o.map(a=>du(a)).join("")}</div>`}
      </div>

      <div class="moves-block">
        <div class="moves-block-title">EQUIPPED MOVES</div>
        <div class="moves-equipped-grid">
          ${e.map((a,c)=>`
            <button class="moves-equipped-slot moves-equipped-slot-btn" onclick="window.openMovesPicker(${c})">
              <div class="moves-equipped-slot-title">SLOT ${c+1}</div>
              <div class="moves-equipped-slot-name">${Te(Xo(a)||"")}</div>
            </button>
          `).join("")}
        </div>

        ${s!==null&&s>=0&&s<=2?`
          <div class="moves-picker">
            <div class="moves-picker-title">CHOOSE FOR SLOT ${s+1}</div>
            <div class="moves-picker-list">
              ${r.map(a=>`
                <button class="moves-picker-item" onclick='window.pickMoveForSlot(${s}, ${JSON.stringify(String(a))})'>
                  ${Te(Xo(a)||String(a))}
                </button>
              `).join("")}
            </div>
          </div>
        `:""}
      </div>
    </div>
  `}function du(n){const e=Xo(n),t=Hy(n);return`
    <div class="moves-row">
      <div class="moves-row-label">${Te(e)}</div>
      ${t?`<div class="moves-row-meta">${Te(t)}</div>`:""}
    </div>
  `}function Hy(n){const e=[],t=Xd(n);t&&Number.isFinite(t.damage)&&e.push(`DMG: ${ge(t.damage)}`);const o=qy(n);return o>0&&e.push(`CD: ${$d(o)}`),e.join(" • ")}function qy(n){const e=String(n||"");if(!e)return 0;if(ei[e])return ze(ei[e].cooldownMs);if(e==="qiBlast")return ze(ur.cooldownMs);if(e.startsWith("manual:")){const t=e.slice(7),o=ti().find(s=>s.name===t);return o?ze(o.cooldown)*1e3:0}return 0}function Xo(n){var o;const e=String(n||"");if(!e)return"";if(e.startsWith("manual:"))return e.slice(7);if(e==="qiBlast"){const s=String(((o=i.equipped)==null?void 0:o.manual)||"");return s==="Demonic Manual"||s.startsWith("Demon Monarch Manual")?"Bleeding Qi":s==="Hidden Heavenly Demon Manual"||s.startsWith("Heavenly Demon Manual")?"Angelic Burn":s==="Orthodox Manual"?"Righteous Flame":"Qi Blast"}const t=ei[e];return t?t.name:e}function Ti(){var n;return!!String(((n=i.equipped)==null?void 0:n.manual)||"")}window.openMovesPicker=n=>{const e=Math.floor(Number(n));if(!Number.isFinite(e)||e<0||e>2)return;const t=Number.isFinite(i.movesPickerSlot)?Math.floor(Number(i.movesPickerSlot)):null;i.movesPickerSlot=t===e?null:e,N(),U()};window.pickMoveForSlot=(n,e)=>{const t=Math.floor(Number(n));if(!Number.isFinite(t)||t<0||t>2)return;(!Array.isArray(i.equippedMoves)||i.equippedMoves.length!==3)&&(i.equippedMoves=["punch","superPunch","punch"]);const o=String(e||"");!o||!new Set(["punch","superPunch",...Ti()?["qiBlast"]:[],...ti().map(r=>`manual:${r.name}`)]).has(o)||(i.equippedMoves[t]=o,i.movesPickerSlot=null,N(),U())};window.setEquippedMove=(n,e)=>{window.pickMoveForSlot(n,e)};function Vy(n){Pi();const e=String(n||"town"),t=e==="hour"?i.shops.hour:i.shops.town,o=Date.now(),s=Math.max(0,Xs(t.resetAt)-o),l=(Array.isArray(t.offers)?t.offers:[]).map(a=>{const c=String(a.id||""),u=Te(String(a.pillName||"pill")),d=Te(String(a.description||"")),f=Te(String(a.imageSrc||"")),p=`${ge(M(a.priceAmount))} ${Te(Qu(a.priceCurrency))}`,v=!!a.purchased,b=`window.buyShopOffer(${JSON.stringify(e)}, ${JSON.stringify(c)})`;return`
      <div class="shop-card" data-testid="shop-item">
        <div class="shop-card-top">
          <div class="shop-card-imgwrap">
            <img class="shop-card-img shop-item-img" src="${f}" alt="${u}" />
          </div>
          <div class="shop-card-title shop-item-title">${u}</div>
          <div class="shop-card-desc">${d}</div>
        </div>

        <div class="shop-card-bottom">
          <div class="shop-card-price shop-item-price">${p}</div>
          <button class="shop-card-buy shop-buy-btn" ${v?"disabled":""} onclick="${Te(b)}">${v?"Not for sale":"BUY"}</button>
        </div>
      </div>
    `.trim()}).join("");return`
    <div class="shop-header-row">
      <div class="shop-reset">Reset in: <span data-testid="shop-reset" data-shop-kind="${Te(e)}">${Te(Ku(s))}</span></div>
    </div>
    <div class="shop-row" aria-label="Shop offers">
      <div class="shop-list">${l||'<div class="inventory-empty">No offers.</div>'}</div>
    </div>
  `.trim()}function zy(){const n=M(i.rebirthPoints||0),e=ht(i.rebirthUpgrades);i.rebirthUpgrades=e;const t=M(e.resetUnlockProgress),o=Math.min(100,t+10),s=5,r=M(e.qiMultiplierLevel),l=1+.2*r,a=Math.max(1,Math.ceil(1*Math.pow(1.5,r))),c=M(e.herbGatherSpeedLevel),u=c*5,d=qe(c),f=M(e.herbMultiGatherLevel),p=f*10,v=1+Math.floor(f/10),b=qe(f),y=M(e.strengthMultiplierLevel),g=1+.1*y,h=qe(y),C=M(e.healthMultiplierLevel),m=1+.1*C,S=qe(C),L=M(e.specialCooldownLevel),T=.5*L,R=qe(L),V=M(e.repeatableSpeedLevel),w=.25*V,x=qe(V),q=M(e.autoGatherLevel),$=q*5,ue=qe(q),D=M(e.autoCraftLevel),X=D*5,z=qe(D),Q=M(e.pillCraftSpeedLevel),J=.25*Q,le=qe(Q),oe=M(e.minRootBonusLevel),de=qe(oe),ve=M(e.rootLuckLevel),B=qe(ve),j=M(e.maxRootBonusLevel),re=qe(j),Me=M(e.extraRerollsLevel),Ae=qe(Me),ae=M(e.bloodlineLuckLevel),P=qe(ae),k=M(e.multiAffinityLuckLevel),G=qe(k),I=M(e.affinityAlignmentLuckLevel),ne=qe(I),ie=M(e.storyLuckLuckLevel),ye=ie*5,be=qe(ie),Be=M(e.spiritStoneRpMultLevel),Ie=el(),A=qe(Be,3),_=M(e.questDropChanceLevel),W=_*1,he=qe(_),ce=[{id:"start",title:"Rebirth",cost:0,pos:{x:580,y:420},prereq:[],purchased:!0},{id:"qi_mult",title:`Qi ${it(l)}`,cost:a,pos:{x:580,y:260},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. Current: ${it(l)} (lvl ${r}). Next costs ${a} RP.`},{id:"herb_speed",title:`Herb +${ge(u)}%`,cost:d,pos:{x:760,y:120},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. Faster herb gathering (+5% per buy). Current: +${ge(u)}%.`},{id:"herb_multi",title:`Herbs ×${ge(v)}`,cost:b,pos:{x:420,y:120},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. +10% per buy. At 100% you gather 2, at 200% you gather 3, etc. Current: ${ge(p)}% → ${ge(v)} herbs.`},{id:"min_roots_plus",title:`Min +${ge(oe)}`,cost:de,pos:{x:240,y:260},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. +1 minimum roots per buy. Current bonus: +${ge(oe)}.`},{id:"root_luck",title:`Root Luck +${ge(ve)}`,cost:B,pos:{x:240,y:100},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:"Infinite. Increases odds of rolling more roots within your min/max. +1 luck per buy."},{id:"max_roots_plus",title:`Max +${ge(j)}`,cost:re,pos:{x:240,y:580},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. +1 maximum roots per buy. Current bonus: +${ge(j)}.`},{id:"auto_gather",title:`Auto G ${ge($)}%`,cost:ue,pos:{x:240,y:420},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. +5% per buy. Unlock at 100%. Current: ${ge($)}%.`},{id:"auto_craft",title:`Auto C ${ge(X)}%`,cost:z,pos:{x:920,y:420},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. +5% per buy. Unlock at 100%. Current: ${ge(X)}%.`},{id:"pill_speed",title:`Pill -${J.toFixed(2)}s`,cost:le,pos:{x:920,y:580},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. Pill crafting faster (0.25s per buy). Current: -${J.toFixed(2)}s.`},{id:"str_mult",title:`STR ${it(g)}`,cost:h,pos:{x:760,y:580},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. Strength multiplier (+0.1× per buy). Current: ${it(g)}.`},{id:"hp_mult",title:`HP ${it(m)}`,cost:S,pos:{x:1040,y:580},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. Health multiplier (+0.1× per buy). Current: ${it(m)}.`},{id:"special_cd",title:`Spec -${T.toFixed(1)}s`,cost:R,pos:{x:80,y:520},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. Special action cooldowns reduced by 0.5s per buy. Current: -${T.toFixed(1)}s.`},{id:"repeat_speed",title:`Rep -${w.toFixed(2)}s`,cost:x,pos:{x:80,y:360},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:`Infinite. Repeatable actions complete faster by 0.25s per buy. Current: -${w.toFixed(2)}s.`},{id:"reroll",title:"Reroll",cost:20,pos:{x:760,y:260},prereq:["start"],purchased:!!e.canRerollFate,canBuy:()=>!e.canRerollFate,apply:()=>{e.canRerollFate=!0}},{id:"more_rerolls",title:`Rerolls +${ge(Me)}`,cost:Ae,pos:{x:920,y:260},prereq:["reroll"],purchased:!1,canBuy:()=>!0,tooltip:"Infinite. Grants +1 fate reroll per buy."},{id:"bloodline_luck",title:`BL Luck +${ge(ae)}`,cost:P,pos:{x:1040,y:120},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:"Infinite. Better bloodline luck (+1 per buy)."},{id:"multi_affinity_luck",title:`Aff +${ge(k)}`,cost:G,pos:{x:1040,y:260},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:"Infinite. Increases luck of rolling multiple affinities (+1 per buy)."},{id:"affinity_alignment",title:`Align +${ge(I)}%`,cost:ne,pos:{x:1040,y:420},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:"Infinite. +1% chance per buy to roll higher affinity alignment (higher scores)."},{id:"story_luck",title:`Story +${ge(ye)}%`,cost:be,pos:{x:1040,y:760},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:"Infinite. +5% chance per buy to roll higher Story Luck."},{id:"spiritstone_rp",title:`Stones ${it(Ie)}`,cost:A,pos:{x:760,y:760},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:"Infinite. More RP from spirit stones. Each buy adds +2×. Cost scales by 3×."},{id:"quest_drop",title:`Quest +${ge(W)}%`,cost:he,pos:{x:420,y:760},prereq:["start"],purchased:!1,canBuy:()=>!0,tooltip:"Infinite. +1% item drop chance for quest bonus drops per buy."},{id:"bias1",title:"Bias I",cost:5,pos:{x:940,y:160},prereq:["reroll"],purchased:e.bloodlineBias>=.1,canBuy:()=>e.bloodlineBias<.1,apply:()=>{e.bloodlineBias=Math.max(e.bloodlineBias,.1)}},{id:"bias2",title:"Bias II",cost:12,pos:{x:1100,y:280},prereq:["bias1"],purchased:e.bloodlineBias>=.25,canBuy:()=>e.bloodlineBias<.25,apply:()=>{e.bloodlineBias=Math.max(e.bloodlineBias,.25)}},{id:"bias3",title:"Bias III",cost:25,pos:{x:980,y:420},prereq:["bias2"],purchased:e.bloodlineBias>=.5,canBuy:()=>e.bloodlineBias<.5,apply:()=>{e.bloodlineBias=Math.max(e.bloodlineBias,.5)}},{id:"min2",title:"Min II",cost:8,pos:{x:400,y:260},prereq:["start"],purchased:e.minRootCount>=2,canBuy:()=>e.minRootCount<2,apply:()=>{e.minRootCount=Math.max(e.minRootCount,2),e.maxRootCount<e.minRootCount&&(e.maxRootCount=e.minRootCount)}},{id:"min3",title:"Min III",cost:16,pos:{x:260,y:140},prereq:["min2"],purchased:e.minRootCount>=3,canBuy:()=>e.minRootCount<3,apply:()=>{e.minRootCount=Math.max(e.minRootCount,3),e.maxRootCount<e.minRootCount&&(e.maxRootCount=e.minRootCount)}},{id:"max6",title:"Max VI",cost:10,pos:{x:400,y:580},prereq:["start"],purchased:e.maxRootCount>=6,canBuy:()=>e.maxRootCount<6,apply:()=>{e.maxRootCount=Math.max(e.maxRootCount,6)}},{id:"max7",title:"Max VII",cost:18,pos:{x:260,y:700},prereq:["max6"],purchased:e.maxRootCount>=7,canBuy:()=>e.maxRootCount<7,apply:()=>{e.maxRootCount=Math.max(e.maxRootCount,7)}},{id:"reset",title:`Reset ${t}%`,cost:t>=100?0:s,pos:{x:620,y:660},prereq:["bias3","max7"],purchased:t>=100,canBuy:()=>t<100,apply:()=>{e.resetUnlockProgress=Math.max(e.resetUnlockProgress,o)},tooltip:t>=100?"Reset unlocked (100%).":`Upgrade to ${o}% (cost ${s}).`},{id:"p_a1",title:"A1",cost:0,pos:{x:160,y:520},prereq:["max6"],purchased:!1},{id:"p_a2",title:"A2",cost:0,pos:{x:80,y:640},prereq:["p_a1"],purchased:!1},{id:"p_a3",title:"A3",cost:0,pos:{x:120,y:780},prereq:["p_a2"],purchased:!1},{id:"p_b1",title:"B1",cost:0,pos:{x:520,y:720},prereq:["max6"],purchased:!1},{id:"p_b2",title:"B2",cost:0,pos:{x:660,y:820},prereq:["p_b1"],purchased:!1},{id:"p_b3",title:"B3",cost:0,pos:{x:820,y:720},prereq:["p_b2"],purchased:!1},{id:"p_c1",title:"C1",cost:0,pos:{x:920,y:560},prereq:["start"],purchased:!1},{id:"p_c2",title:"C2",cost:0,pos:{x:1060,y:660},prereq:["p_c1"],purchased:!1},{id:"p_c3",title:"C3",cost:0,pos:{x:1180,y:520},prereq:["p_c2"],purchased:!1},{id:"p_d1",title:"D1",cost:0,pos:{x:720,y:520},prereq:["start"],purchased:!1},{id:"p_d2",title:"D2",cost:0,pos:{x:820,y:620},prereq:["p_d1"],purchased:!1},{id:"p_d3",title:"D3",cost:0,pos:{x:760,y:740},prereq:["p_d2"],purchased:!1},{id:"p_e1",title:"E1",cost:0,pos:{x:520,y:120},prereq:["start"],purchased:!1},{id:"p_e2",title:"E2",cost:0,pos:{x:620,y:40},prereq:["p_e1"],purchased:!1},{id:"p_e3",title:"E3",cost:0,pos:{x:760,y:60},prereq:["p_e2"],purchased:!1},{id:"p_f1",title:"F1",cost:0,pos:{x:1040,y:40},prereq:["bias1"],purchased:!1},{id:"p_f2",title:"F2",cost:0,pos:{x:1200,y:120},prereq:["p_f1"],purchased:!1},{id:"p_f3",title:"F3",cost:0,pos:{x:1340,y:60},prereq:["p_f2"],purchased:!1},{id:"p_g1",title:"G1",cost:0,pos:{x:1180,y:860},prereq:["bias3"],purchased:!1},{id:"p_g2",title:"G2",cost:0,pos:{x:1340,y:760},prereq:["p_g1"],purchased:!1},{id:"p_g3",title:"G3",cost:0,pos:{x:1460,y:860},prereq:["p_g2"],purchased:!1}],se=[["start","reroll"],["start","qi_mult"],["start","herb_speed"],["start","herb_multi"],["start","min_roots_plus"],["start","root_luck"],["start","max_roots_plus"],["start","auto_gather"],["start","auto_craft"],["start","pill_speed"],["start","str_mult"],["start","hp_mult"],["start","special_cd"],["start","repeat_speed"],["start","bloodline_luck"],["start","multi_affinity_luck"],["start","affinity_alignment"],["start","story_luck"],["start","spiritstone_rp"],["start","quest_drop"],["reroll","more_rerolls"],["reroll","bias1"],["bias1","bias2"],["bias2","bias3"],["start","min2"],["min2","min3"],["start","max6"],["max6","max7"],["bias3","reset"],["max7","reset"],["max6","p_a1"],["p_a1","p_a2"],["p_a2","p_a3"],["max6","p_b1"],["p_b1","p_b2"],["p_b2","p_b3"],["start","p_c1"],["p_c1","p_c2"],["p_c2","p_c3"],["start","p_d1"],["p_d1","p_d2"],["p_d2","p_d3"],["start","p_e1"],["p_e1","p_e2"],["p_e2","p_e3"],["bias1","p_f1"],["p_f1","p_f2"],["p_f2","p_f3"],["bias3","p_g1"],["p_g1","p_g2"],["p_g2","p_g3"]],Ee=Object.fromEntries(ce.map(fe=>[fe.id,fe])),_e=fe=>{var xe;return!!((xe=Ee[fe])!=null&&xe.purchased)},Ce=fe=>(Array.isArray(fe.prereq)?fe.prereq:[]).every(_e),Fe=fe=>n>=M(fe.cost),Ge=1600,H=980,Se=56,Pe=Se/2,Ne=se.map(([fe,xe])=>{const pe=Ee[fe],Ve=Ee[xe];if(!pe||!Ve)return"";const He=pe.pos.x+Pe,me=pe.pos.y+Pe,F=Ve.pos.x+Pe,Re=Ve.pos.y+Pe,De=_e(xe)&&Ce(Ve);return`<line x1="${He}" y1="${me}" x2="${F}" y2="${Re}" class="rebirth-tree-line ${De?"active":""}" />`}).join(""),we=ce.map(fe=>{const xe=!!fe.purchased,pe=!Ce(fe),Ve=Fe(fe),He=typeof fe.canBuy=="function"?!!fe.canBuy():!xe,me=`window.openRebirthNodeModal(${JSON.stringify(String(fe.id))})`,F=String(fe.tooltip||fe.title||""),Re=Te(String(Cd(fe.id)));return`
      <button
        class="rebirth-node ${xe?"purchased":""} ${pe?"locked":""} ${!pe&&!xe&&Ve&&He?"available":""}"
        style="left:${fe.pos.x}px; top:${fe.pos.y}px; width:${Se}px; height:${Se}px;"
        ${`onclick="${Te(me)}"`}
        title="${Te(F)}"
        type="button"
      >
        <img class="rebirth-node-icon" src="${Re}" alt="" />
        <div class="rebirth-node-label">${Te(String(fe.title||""))}</div>
      </button>
    `.trim()}).join("");return`
    <div class="rebirth-shop-header">
      <div class="rebirth-shop-points">Rebirth Points: <span class="rebirth-shop-points-value">${ge(n)}</span></div>
      <div class="rebirth-shop-sub">Choose nodes to unlock permanent fate blessings.</div>
    </div>
    <div class="rebirth-tree-scroll">
      <div class="rebirth-tree-canvas" style="width:${Ge}px; height:${H}px;">
        <svg class="rebirth-tree-lines" width="${Ge}" height="${H}" viewBox="0 0 ${Ge} ${H}" aria-hidden="true">
          ${Ne}
        </svg>
        ${we}
      </div>
    </div>
  `.trim()}function Wy(){const n=document.querySelector("#shop-panel .rebirth-tree-scroll");if(!n)return;try{(!i.rebirthTreeScroll||typeof i.rebirthTreeScroll!="object")&&(i.rebirthTreeScroll={left:0,top:0});const d=M(i.rebirthTreeScroll.left),f=M(i.rebirthTreeScroll.top);n.dataset&&n.dataset.panRestored!=="1"&&(n.scrollLeft=d,n.scrollTop=f,n.dataset.panRestored="1")}catch{}if(n.dataset&&n.dataset.panBound==="1")return;n.dataset&&(n.dataset.panBound="1");let e=!1,t=0,o=0,s=0,r=0;const l=d=>{if(d&&d.button!==void 0&&d.button!==0)return;const f=d==null?void 0:d.target;if(!(f&&f.closest&&f.closest(".rebirth-node"))){e=!0,t=d.clientX,o=d.clientY,s=n.scrollLeft,r=n.scrollTop,n.classList.add("is-panning");try{n.setPointerCapture(d.pointerId)}catch{}d.preventDefault()}},a=d=>{if(!e)return;const f=d.clientX-t,p=d.clientY-o;n.scrollLeft=s-f,n.scrollTop=r-p;try{(!i.rebirthTreeScroll||typeof i.rebirthTreeScroll!="object")&&(i.rebirthTreeScroll={left:0,top:0}),i.rebirthTreeScroll.left=M(n.scrollLeft),i.rebirthTreeScroll.top=M(n.scrollTop)}catch{}d.preventDefault()},c=()=>{try{(!i.rebirthTreeScroll||typeof i.rebirthTreeScroll!="object")&&(i.rebirthTreeScroll={left:0,top:0}),i.rebirthTreeScroll.left=M(n.scrollLeft),i.rebirthTreeScroll.top=M(n.scrollTop)}catch{}},u=()=>{e=!1,n.classList.remove("is-panning")};n.addEventListener("pointerdown",l),n.addEventListener("pointermove",a),n.addEventListener("pointerup",u),n.addEventListener("pointercancel",u),n.addEventListener("pointerleave",u),n.addEventListener("scroll",c,{passive:!0})}window.buyRebirthNode=n=>{var ye;const e=String(n||"");if(!e)return;const t=M(i.rebirthPoints||0),o=ht(i.rebirthUpgrades),s=M(o.qiMultiplierLevel),r=Math.max(1,Math.ceil(1*Math.pow(1.5,s))),l=M(o.herbGatherSpeedLevel),a=qe(l),c=M(o.herbMultiGatherLevel),u=qe(c),d=M(o.autoGatherLevel),f=qe(d),p=M(o.autoCraftLevel),v=qe(p),b=M(o.pillCraftSpeedLevel),y=qe(b),g=M(o.strengthMultiplierLevel),h=qe(g),C=M(o.healthMultiplierLevel),m=qe(C),S=M(o.specialCooldownLevel),L=qe(S),T=M(o.repeatableSpeedLevel),R=qe(T),V=M(o.minRootBonusLevel),w=qe(V),x=M(o.rootLuckLevel),q=qe(x),$=M(o.maxRootBonusLevel),ue=qe($),D=M(o.extraRerollsLevel),X=qe(D),z=M(o.bloodlineLuckLevel),Q=qe(z),J=M(o.multiAffinityLuckLevel),le=qe(J),oe=M(o.affinityAlignmentLuckLevel),de=qe(oe),ve=M(o.storyLuckLuckLevel),B=qe(ve),j=M(o.spiritStoneRpMultLevel),re=qe(j,3),Me=M(o.questDropChanceLevel),Ae=qe(Me),ae={qi_mult:{cost:r,canBuy:()=>!0,apply:()=>{o.qiMultiplierLevel=Math.max(0,s+1)}},herb_speed:{cost:a,canBuy:()=>!0,apply:()=>{o.herbGatherSpeedLevel=Math.max(0,l+1)}},herb_multi:{cost:u,canBuy:()=>!0,apply:()=>{o.herbMultiGatherLevel=Math.max(0,c+1)}},auto_gather:{cost:f,canBuy:()=>!0,apply:()=>{o.autoGatherLevel=Math.max(0,d+1)}},auto_craft:{cost:v,canBuy:()=>!0,apply:()=>{o.autoCraftLevel=Math.max(0,p+1)}},pill_speed:{cost:y,canBuy:()=>!0,apply:()=>{o.pillCraftSpeedLevel=Math.max(0,b+1)}},str_mult:{cost:h,canBuy:()=>!0,apply:()=>{o.strengthMultiplierLevel=Math.max(0,g+1)}},hp_mult:{cost:m,canBuy:()=>!0,apply:()=>{o.healthMultiplierLevel=Math.max(0,C+1)}},special_cd:{cost:L,canBuy:()=>!0,apply:()=>{o.specialCooldownLevel=Math.max(0,S+1)}},repeat_speed:{cost:R,canBuy:()=>!0,apply:()=>{o.repeatableSpeedLevel=Math.max(0,T+1)}},min_roots_plus:{cost:w,canBuy:()=>!0,apply:()=>{o.minRootBonusLevel=Math.max(0,V+1)}},root_luck:{cost:q,canBuy:()=>!0,apply:()=>{o.rootLuckLevel=Math.max(0,x+1)}},max_roots_plus:{cost:ue,canBuy:()=>!0,apply:()=>{o.maxRootBonusLevel=Math.max(0,$+1)}},more_rerolls:{cost:X,canBuy:()=>!0,apply:()=>{o.extraRerollsLevel=Math.max(0,D+1),i.rerollsRemaining=M(i.rerollsRemaining)+1}},bloodline_luck:{cost:Q,canBuy:()=>!0,apply:()=>{o.bloodlineLuckLevel=Math.max(0,z+1)}},multi_affinity_luck:{cost:le,canBuy:()=>!0,apply:()=>{o.multiAffinityLuckLevel=Math.max(0,J+1)}},affinity_alignment:{cost:de,canBuy:()=>!0,apply:()=>{o.affinityAlignmentLuckLevel=Math.max(0,oe+1)}},story_luck:{cost:B,canBuy:()=>!0,apply:()=>{o.storyLuckLuckLevel=Math.max(0,ve+1)}},spiritstone_rp:{cost:re,canBuy:()=>!0,apply:()=>{o.spiritStoneRpMultLevel=Math.max(0,j+1)}},quest_drop:{cost:Ae,canBuy:()=>!0,apply:()=>{o.questDropChanceLevel=Math.max(0,Me+1)}},reroll:{cost:20,canBuy:()=>!o.canRerollFate,apply:()=>{o.canRerollFate=!0}},bias1:{cost:5,canBuy:()=>o.bloodlineBias<.1,apply:()=>{o.bloodlineBias=Math.max(o.bloodlineBias,.1)}},bias2:{cost:12,canBuy:()=>o.bloodlineBias<.25,apply:()=>{o.bloodlineBias=Math.max(o.bloodlineBias,.25)}},bias3:{cost:25,canBuy:()=>o.bloodlineBias<.5,apply:()=>{o.bloodlineBias=Math.max(o.bloodlineBias,.5)}},min2:{cost:8,canBuy:()=>o.minRootCount<2,apply:()=>{o.minRootCount=Math.max(o.minRootCount,2),o.maxRootCount<o.minRootCount&&(o.maxRootCount=o.minRootCount)}},min3:{cost:16,canBuy:()=>o.minRootCount<3,apply:()=>{o.minRootCount=Math.max(o.minRootCount,3),o.maxRootCount<o.minRootCount&&(o.maxRootCount=o.minRootCount)}},max6:{cost:10,canBuy:()=>o.maxRootCount<6,apply:()=>{o.maxRootCount=Math.max(o.maxRootCount,6)}},max7:{cost:18,canBuy:()=>o.maxRootCount<7,apply:()=>{o.maxRootCount=Math.max(o.maxRootCount,7)}},reset:{cost:o.resetUnlockProgress>=100?0:5,canBuy:()=>o.resetUnlockProgress<100,apply:()=>{const be=M(o.resetUnlockProgress),Be=Math.min(100,be+10);o.resetUnlockProgress=Math.max(be,Be)}}},P={qi_mult:["start"],herb_speed:["start"],herb_multi:["start"],auto_gather:["start"],auto_craft:["start"],pill_speed:["start"],str_mult:["start"],hp_mult:["start"],special_cd:["start"],repeat_speed:["start"],min_roots_plus:["start"],root_luck:["start"],max_roots_plus:["start"],more_rerolls:["reroll"],bloodline_luck:["start"],multi_affinity_luck:["start"],affinity_alignment:["start"],story_luck:["start"],spiritstone_rp:["start"],quest_drop:["start"],reroll:["start"],bias1:["reroll"],bias2:["bias1"],bias3:["bias2"],min2:["start"],min3:["min2"],max6:["start"],max7:["max6"],reset:["bias3","max7"]},k={start:!0,qi_mult:!1,herb_speed:!1,herb_multi:!1,auto_gather:!1,auto_craft:!1,pill_speed:!1,str_mult:!1,hp_mult:!1,special_cd:!1,repeat_speed:!1,min_roots_plus:!1,root_luck:!1,max_roots_plus:!1,more_rerolls:!1,bloodline_luck:!1,multi_affinity_luck:!1,affinity_alignment:!1,story_luck:!1,spiritstone_rp:!1,quest_drop:!1,reroll:!!o.canRerollFate,bias1:o.bloodlineBias>=.1,bias2:o.bloodlineBias>=.25,bias3:o.bloodlineBias>=.5,min2:o.minRootCount>=2,min3:o.minRootCount>=3,max6:o.maxRootCount>=6,max7:o.maxRootCount>=7,reset:M(o.resetUnlockProgress)>=100};if(!(Array.isArray(P[e])?P[e]:[]).every(be=>!!k[be]))return;const ne=ae[e];if(!ne)return;const ie=M(ne.cost);if(!(ie<=0)&&!(t<ie)&&!(typeof ne.canBuy=="function"&&!ne.canBuy())){try{St("rebirth")}catch{}i.rebirthPoints=t-ie;try{(ye=ne.apply)==null||ye.call(ne)}catch{}i.rebirthUpgrades=ht(o);try{ni()}catch{}try{U()}catch{}N()}};function $y(){var r,l,a,c;try{Pi()}catch{return}const n=Date.now(),e=document.querySelector('#shop-panel [data-testid="shop-reset"]');if(!e)return;const o=(i.shopTab==="hour"?"hour":"town")==="hour"?(l=(r=i.shops)==null?void 0:r.hour)==null?void 0:l.resetAt:(c=(a=i.shops)==null?void 0:a.town)==null?void 0:c.resetAt,s=Math.max(0,Xs(o)-n);e.textContent=Ku(s)}window.setShopTab=n=>{const e=String(n||"");e!=="town"&&e!=="hour"&&e!=="rebirth"||(i.shopTab=e,N(),U())};function jy(){var t;Pi(),i.shopTab!=="town"&&i.shopTab!=="hour"&&i.shopTab!=="rebirth"&&(i.shopTab="town");let n=document.getElementById("shop-panel");if(!n){n=document.createElement("div"),n.id="shop-panel",n.className="shop-panel draggable-panel",bn(n,"shop"),Qt().appendChild(n),yn(n,"shop");const o=(t=i.panelPositions)==null?void 0:t.shop;o&&(o.x!==0||o.y!==0)&&(n.style.transform=`translate(${o.x}px, ${o.y}px)`)}const e=i.shopTab;if(n.innerHTML=`
    <div class="panel-header" onmousedown="window.startDrag(event, 'shop-panel')">
      <h3>${It("shop",{title:"Shop"})} Shop</h3>
      <span class="drag-hint">✥ Drag to move ✥</span>
    </div>
    <div class="panel-content">
      <div class="shop-tabs">
        <button class="shop-tab-btn ${e==="town"?"active":""}" onclick="window.setShopTab('town')">DAILY SHOP</button>
        <button class="shop-tab-btn ${e==="hour"?"active":""}" onclick="window.setShopTab('hour')">HOURLY SHOP</button>
        <button class="shop-tab-btn ${e==="rebirth"?"active":""}" onclick="window.setShopTab('rebirth')">REBIRTH TREE</button>
      </div>
      ${e==="rebirth"?zy():Vy(e)}
    </div>
  `,e==="rebirth")try{Wy()}catch{}}window.startQuestFromPanel=()=>zd();window.questCombatRush=()=>Wd("rush");window.questCombatRetreat=()=>Wd("retreat");function $d(n){const e=Math.max(0,Number(n)||0);if(e<=0)return"";const t=e/1e3;return`${(Math.ceil(t*10)/10).toFixed(1)}s`}function jd(n){var t,o;const e=String(n||"");if(e.startsWith("manual:")){const s=`manual_${e.slice(7).replace(/\s+/g,"_")}`;return ze((t=i.playerCooldowns)==null?void 0:t[s])}return ze((o=i.playerCooldowns)==null?void 0:o[e])}function Yd(n){const e=String(n||"");if(!i.inCombat||!i.enemy||jd(e)>0)return!0;if(e==="qiBlast")return!Ti();if(e.startsWith("manual:")){const t=e.slice(7);return!ti().find(s=>s.name===t)}return!1}function Xd(n){const e=String(n||"");if(!e)return null;const t=ze(i.strength);if(ei[e]){const o=ei[e];return{damage:Math.floor(t*ze(o.damageMult)),qiCost:0}}if(e==="qiBlast")return Ti()?{damage:Math.floor(t*ze(ur.damageMult)),qiCost:0}:null;if(e.startsWith("manual:")){const o=e.slice(7),s=ti().find(u=>u.name===o);if(!s)return null;const r=Ka(),l=r?id(r):0,a=t*ze(s.damage);return{damage:Math.floor(a*(1+l)),qiCost:0}}return null}window.useEquippedMove=n=>{const e=Math.floor(Number(n));if(!Number.isFinite(e)||e<0||e>2)return;const t=String((Array.isArray(i.equippedMoves)?i.equippedMoves[e]:"punch")||"punch");window.useCombatMove(t)};window.useCombatMove=n=>{if(!i.inCombat||!i.enemy)return;const e=String(n||"");if(!e||Yd(e))return;try{St("hit")}catch{}const t=i.enemy;if(Yy(e,t),t.health<=0){const o=t.name;O(`${t.name} defeated!`),Kd(o);return}N(),U()};function Yy(n,e){const t=String(n||"");if(e){if(ei[t]){const o=ei[t],s=Math.floor(ze(i.strength)*o.damageMult);e.health=Math.max(0,ze(e.health)-s),i.playerCooldowns[t]=o.cooldownMs,O(`You use ${o.name}! ${s} damage!`);return}if(t==="qiBlast"){if(!Ti())return;const o=ur,s=Math.floor(ze(i.strength)*o.damageMult);e.health=Math.max(0,ze(e.health)-s),i.playerCooldowns[t]=o.cooldownMs,O(`You use ${Xo("qiBlast")}! ${s} damage!`);return}if(t.startsWith("manual:")){const o=t.slice(7),s=ti().find(f=>f.name===o);if(!s)return;const r=Ka(),l=r?id(r):0,a=ze(i.strength)*ze(s.damage),c=Math.floor(a*(1+l));e.health=Math.max(0,ze(e.health)-c);const u=`manual_${s.name.replace(/\s+/g,"_")}`;i.playerCooldowns[u]=ze(s.cooldown)*1e3,O(`You use ${s.name}! ${c} damage!`),l>0&&O(`Affinity bonus: +${Math.floor(l*100)}%`);const d=String(s.special||"");if(d==="heal"){const f=Math.floor(ze(i.maxHealth)*.2);i.health=Math.min(ze(i.maxHealth),ze(i.health)+f),O(`You heal for ${f} HP.`)}else if(d==="lifesteal"){const f=Math.floor(c*.3);i.health=Math.min(ze(i.maxHealth),ze(i.health)+f),O(`You steal ${f} HP.`)}else{try{Sr()}catch{}if(d==="dot"){(!e.effects||typeof e.effects!="object")&&(e.effects={});const f=Math.max(1,Math.floor(c*.12)),p=3;e.effects.dotDamage=Math.max(M(e.effects.dotDamage),f),e.effects.dotTicks=M(e.effects.dotTicks)+p,e.effects.nextDotAt=performance.now()+1e3,O("A lingering toxin gnaws at the enemy.")}else if(d==="stun"){(!e.effects||typeof e.effects!="object")&&(e.effects={});const f=performance.now()+or;e.effects.stunnedUntil=Math.max(ze(e.effects.stunnedUntil),f),O("The enemy is stunned.")}else if(d==="slow"){(!e.effects||typeof e.effects!="object")&&(e.effects={});const f=performance.now()+or*2;e.effects.slowUntil=Math.max(ze(e.effects.slowUntil),f),O("The enemy is slowed.")}else d==="dodge"&&((!i.combatFx||typeof i.combatFx!="object")&&(i.combatFx={}),i.combatFx.dodgeCharges=Math.max(1,M(i.combatFx.dodgeCharges)),i.combatFx.dodgeChance=Math.max(ze(i.combatFx.dodgeChance),.7),O("You feel light on your feet."))}return}}}let Lo=null,ir=0,Ia=0;const Xy=320,or=3e3;function Sr(){(!i.combatFx||typeof i.combatFx!="object")&&(i.combatFx={}),(!Number.isFinite(i.combatFx.dodgeCharges)||i.combatFx.dodgeCharges<0)&&(i.combatFx.dodgeCharges=0),(!Number.isFinite(i.combatFx.dodgeChance)||i.combatFx.dodgeChance<0)&&(i.combatFx.dodgeChance=0);const n=i.enemy;n&&(!n.effects||typeof n.effects!="object")&&(n.effects={}),n&&n.effects&&((!Number.isFinite(n.effects.dotDamage)||n.effects.dotDamage<0)&&(n.effects.dotDamage=0),(!Number.isFinite(n.effects.dotTicks)||n.effects.dotTicks<0)&&(n.effects.dotTicks=0),(!Number.isFinite(n.effects.nextDotAt)||n.effects.nextDotAt<0)&&(n.effects.nextDotAt=0),(!Number.isFinite(n.effects.stunnedUntil)||n.effects.stunnedUntil<0)&&(n.effects.stunnedUntil=0),(!Number.isFinite(n.effects.slowUntil)||n.effects.slowUntil<0)&&(n.effects.slowUntil=0))}function Ky(n=performance.now()){const e=i.enemy;if(!e||e.health<=0||!e.effects||typeof e.effects!="object")return;const t=M(e.effects.dotTicks),o=M(e.effects.dotDamage),s=ze(e.effects.nextDotAt);t>0&&o>0&&n>=s&&(e.health=Math.max(0,M(e.health)-o),e.effects.dotTicks=Math.max(0,t-1),e.effects.nextDotAt=n+1e3,O(`${String(e.name||"Enemy")} suffers ${o} damage over time.`))}function Rt(){if(!!!(i.inCombat&&i.phase==="COMBAT"&&i.enemy)){Lo&&(clearInterval(Lo),Lo=null,ir=0,Ia=0);return}if(!Lo){try{Sr()}catch{}try{const e=i.enemy;e&&(!Number.isFinite(e.nextActionAt)||e.nextActionAt<=0)&&(e.nextActionAt=performance.now()+or)}catch{}ir=performance.now(),Lo=setInterval(()=>{hu()},100),hu(!0)}}function hu(n=!1){if(!i.inCombat||i.phase!=="COMBAT"||!i.enemy){Rt();return}const e=performance.now(),t=n?0:Math.max(0,e-ir);ir=e;try{Sr()}catch{}if(Ky(e),i.playerCooldowns&&typeof i.playerCooldowns=="object")for(const o of Object.keys(i.playerCooldowns)){const s=Number(i.playerCooldowns[o]);if(!Number.isFinite(s)||s<=0){i.playerCooldowns[o]=0;continue}i.playerCooldowns[o]=Math.max(0,s-t)}(!i.enemy.cooldowns||typeof i.enemy.cooldowns!="object")&&(i.enemy.cooldowns={punch:0,superPunch:0,qiBlast:0});for(const o of Object.keys(i.enemy.cooldowns)){const s=Number(i.enemy.cooldowns[o]);if(!Number.isFinite(s)||s<=0){i.enemy.cooldowns[o]=0;continue}i.enemy.cooldowns[o]=Math.max(0,s-t)}Qy(e),(n||e>=Ia)&&(Ia=e+Xy,N())}function Qy(n=performance.now()){var b,y,g,h;if(!i.inCombat||!i.enemy)return;const e=i.enemy;if(e.health<=0||ze(i.health)<=0)return;try{Sr()}catch{}const t=ze((b=e.effects)==null?void 0:b.stunnedUntil);if(t&&n<t){e.nextActionAt=Math.max(ze(e.nextActionAt),t);return}const o=Number(e.nextActionAt);if(Number.isFinite(o)&&n<o)return;const s=e.cooldowns||{punch:0,superPunch:0,qiBlast:0},r=s.punch<=0?"punch":s.superPunch<=0?"superPunch":s.qiBlast<=0?"qiBlast":null;if(!r)return;const a=ei[r]||(r==="qiBlast"?ur:null);if(!a)return;const c=Math.floor(ze(e.strength)*a.damageMult),u=M((y=i.combatFx)==null?void 0:y.dodgeCharges),d=ze((g=i.combatFx)==null?void 0:g.dodgeChance),f=u>0&&Math.random()<Math.max(.05,Math.min(.9,d));f?(i.combatFx.dodgeCharges=Math.max(0,u-1),O("You dodge the attack!")):i.health=Math.max(0,ze(i.health)-c),e.cooldowns[r]=a.cooldownMs;const p=ze((h=e.effects)==null?void 0:h.slowUntil),v=p&&n<p?1.6:1;if(e.nextActionAt=n+or*v,O(f?`${e.name} uses ${a.name}!`:`${e.name} uses ${a.name}! ${c} damage!`),i.health<=0){if(i.hardMode){i.health=0,i.inCombat=!1,i.enemy=null,i.combatContext=null,i.phase=i.questReturnPhase||"FARMING",i.questReturnPhase=null,Rt(),O("💀 You have been defeated in Hard Mode. Your run ends."),window.endRunToRebirth();return}if(Uy()||Ry()||_y()||Zb())return;if(Ay()){i.phase=i.questReturnPhase||"FARMING",i.questReturnPhase=null,Rt(),N(),U();return}if(fy())return;i.health=0,i.inCombat=!1,i.enemy=null,i.combatContext=null,i.phase=i.questReturnPhase||"FARMING",i.questReturnPhase=null,Rt(),O("You have been defeated..."),N(),U(),setTimeout(()=>{i.health=M(i.maxHealth),N(),U()},0)}}function Kd(n){i.inCombat=!1,i.enemy=null;try{By(n)}catch{}try{wy(n)}catch{}try{Ly(n)}catch{}try{My(n)}catch{}try{Jb(n)}catch{}try{Cy(n)}catch{}try{hy(n)}catch{}i.health=M(i.maxHealth),i.phase=i.questReturnPhase||"FARMING",i.questReturnPhase=null,Rt(),U(),N()}window.attack=n=>{window.useCombatMove(String(n||""))};window.useManualMove=n=>{window.useCombatMove(`manual:${String(n||"")}`)};const Gs=[];let Pa=null,Da=0,Na=0,ka=!0;function Jy(){const n=document.getElementById("game-log");if(!n)return;const e=n.closest(".log")||n.parentElement||n;Pa=e,Da=e.scrollTop,Na=e.scrollHeight,ka=e.scrollTop<=4}function O(n){Gs.push(n),Gs.length>50&&Gs.shift(),Qd()}function Qd(){const n=document.getElementById("game-log");if(n){const e=n.closest(".log")||n.parentElement||n,t=e!==Pa,o=t?Da:e.scrollTop,s=t?Na:e.scrollHeight,r=t?ka:o<=4;if(n.innerHTML=Gs.slice().reverse().map(l=>`<div>${l}</div>`).join(""),r)e.scrollTop=0;else{const l=e.scrollHeight;e.scrollTop=o+(l-s)}Pa=e,Da=e.scrollTop,Na=e.scrollHeight,ka=e.scrollTop<=4}}setInterval(()=>{let n=!1,e=!1;const t=i.devSpeed3x?3:1;if(!i.inCombat)for(const s in i.playerCooldowns)i.playerCooldowns[s]>0&&(i.playerCooldowns[s]=Math.max(0,ze(i.playerCooldowns[s])-1e3*t),n=!0);if(i.villageMaterialsCooldown>0&&(i.villageMaterialsCooldown=Math.max(0,i.villageMaterialsCooldown-t),n=!0),i.searchingAndConqueringCooldown>0&&(i.searchingAndConqueringCooldown=Math.max(0,i.searchingAndConqueringCooldown-t),n=!0),i.encounterCooldown>0&&(i.encounterCooldown=Math.max(0,i.encounterCooldown-t)),i.isResting&&i.stamina<i.maxStamina){const s=i.dozeOffUnlocked?1.5:1;i.stamina=Math.min(i.maxStamina,i.stamina+s*t),n=!0,e=!0,i.stamina>=i.maxStamina&&(i.isResting=!1,O("Stamina fully restored!"))}try{_r()&&(n=!0,e=!0)}catch{}if(i.isCultivating){const s=vr(),r=!!(s&&Number.isFinite(s.cost)&&s.cost>0);if(r&&i.qi>=s.cost)i.isCultivating=!1,O("Your Qi is capped for the next realm. Breakthrough/Advance to progress further."),n=!0,e=!0;else if(Zs()){i.ageMonths=M(i.ageMonths)+2*t;const a=Ea(t);if(r?i.qi=Math.min(i.qi+a,s.cost):i.qi+=a,n=!0,e=!0,!Zs()){i.isCultivating=!1;const c=Li(Js());O(`You can no longer cultivate past ${c.years} years, ${c.months} months.`),n=!0,e=!0}}else{i.isCultivating=!1;const a=Li(Js());O(`You can no longer cultivate past ${a.years} years, ${a.months} months.`),n=!0,e=!0}}if(i.isBusinessOriented){const s=Number(i.businessCycleSeconds),r=Number.isFinite(s)&&s>0?s:5,l=i.businessIncomePerCycle&&typeof i.businessIncomePerCycle=="object"?i.businessIncomePerCycle:{silver:5,copper:15,gold:0};if(i.incomeCycleSeconds=ze(i.incomeCycleSeconds)+1,i.incomeCycleSeconds>=r){const a=Math.floor(i.incomeCycleSeconds/r);i.incomeCycleSeconds=i.incomeCycleSeconds-a*r;const c=M(l.silver)*a,u=M(l.copper)*a,d=M(l.gold)*a,f=M(l.spiritStonesLow)*a;c&&(i.silver=M(i.silver)+c),u&&(i.copper=M(i.copper)+u),d&&(i.gold=M(i.gold)+d),f&&(i.spiritStonesLow=M(i.spiritStonesLow)+f),(c||u||d||f)&&(n=!0,e=!0)}}if(i.hasJoinedSect&&(i.sectIncomeSeconds=M(i.sectIncomeSeconds)+1,i.sectIncomeSeconds>=60)){const s=Math.floor(i.sectIncomeSeconds/60);i.sectIncomeSeconds=i.sectIncomeSeconds-s*60;const r=Od(i.sectRankLayer,i.sectRankNumber),l=M(r.low)*s,a=M(r.mid)*s,c=M(r.high)*s;l>0&&(i.spiritStonesLow=M(i.spiritStonesLow)+l),a>0&&(i.spiritStonesMid=M(i.spiritStonesMid)+a),c>0&&(i.spiritStonesHigh=M(i.spiritStonesHigh)+c),(l>0||a>0||c>0)&&(n=!0,e=!0)}$v()&&(n=!0,e=!0),$y();try{const s=i.phase!=="INTRO_LOADING"&&i.phase!=="FATE_ROLL"&&i.phase!=="STORY_DIALOG";if(!i.runEnded&&!i.inCombat&&s&&(ud()&&!Xt("herbalism:Gather Herbs")&&(Ld({silent:!0}),e=!0),dd()&&!Xt("herbalism:Craft Pill")&&Ub())){const a=String(i.autoCraftPillFile||""),c=Ii().find(u=>String(u.file||"")===a);c&&Bb(a)&&(Rd(c,{ignoreRequirements:!!i.devIgnoreRequirements}),e=!0)}}catch{}n&&N(),e&&U()},1e3);let gn=null,Jd=0,Zd=0,Fa=0,Ua=0;window.startDrag=function(n,e){if(gn=document.getElementById(e),!gn)return;n.preventDefault(),n.stopPropagation(),Jd=n.clientX,Zd=n.clientY;const o=(gn.style.transform||"").match(/translate\((-?\d+(?:\.\d+)?)px,\s*(-?\d+(?:\.\d+)?)px\)/);o?(Fa=parseFloat(o[1]),Ua=parseFloat(o[2])):(Fa=0,Ua=0),document.addEventListener("mousemove",eh),document.addEventListener("mouseup",th),gn.classList.add("dragging")};function eh(n){if(!gn)return;const e=n.clientX-Jd,t=n.clientY-Zd,o=Fa+e,s=Ua+t;gn.style.transform=`translate(${o}px, ${s}px)`}function th(){if(gn){gn.classList.remove("dragging");const n=gn.id,e=n==="stats-panel"?"stats":n==="inventory-panel"?"inventory":n==="actions-panel"?"actions":n==="profile-panel"?"profile":n==="sect-panel"?"sect":n==="quest-panel"?"quests":n==="moves-panel"?"moves":n==="shop-panel"?"shop":n==="conquered-sects-panel"?"conqueredSects":null;if(e){const o=(gn.style.transform||"").match(/translate\((-?\d+(?:\.\d+)?)px,\s*(-?\d+(?:\.\d+)?)px\)/);if(o){const s=parseFloat(o[1]),r=parseFloat(o[2]);i.panelPositions[e]={x:s,y:r},U()}}}gn=null,document.removeEventListener("mousemove",eh),document.removeEventListener("mouseup",th)}function Zy(){try{return new URLSearchParams(String(window.location.search||"")).has("qa")}catch{return!1}}function eM(){if(!Zy()||window.__qa)return;const n=e=>{try{return JSON.parse(JSON.stringify(e))}catch{return null}};window.__qa={getState:()=>n(i),setState:e=>{if(!(!e||typeof e!="object")){Object.assign(i,e);try{N()}catch{}try{U()}catch{}}},render:()=>{N()},save:()=>{U()},isTimedActionRunning:(e,t)=>{const o=Yt(String(e||""),{name:String(t||"")});return Xt(o)},finishTimedActionNow:async(e,t,o)=>{const s=Yt(String(e||""),{name:String(t||"")}),r=Math.max(0,Number(o==null?void 0:o.timeoutMs)||1e3),l=Math.max(0,Number(o==null?void 0:o.pollMs)||25),a=performance.now();for(;!Xt(s)&&performance.now()-a<r;)await new Promise(d=>setTimeout(d,l));if(Xt(s))return Dd(s),!0;const c=String(e||""),u=String(t||"");if(c==="special"&&u){u==="Exploring the Sect Library."?window.cloudStoryExploreLibrary():u==="Walk with the Mysterious Cultivator to the Building."?window.cloudStoryWalkToBuilding():u==="Sect Leader Offers Items and Recruitment."?window.cloudStoryLeaderOffers():u==="Arrival Among Clouds."?window.cloudStoryArrivalAmongClouds():u==="Confronted by an Outer Disciple."?window.cloudStoryConfrontedByOuterDisciple():u==="Battle starts."?window.cloudStoryBattleStarts():u==="Find heavenly demon manual."?window.cloudStoryFindHeavenlyDemonManual():u==="Take the Demonic Manual."?window.cloudStoryTakeDemonicManual():u==="Find nothing."&&window.cloudStoryFindNothingInLibrary();try{N()}catch{}try{U()}catch{}return!0}return!1},startSectPyramidDuel:(e,t)=>{window.sectChallengeRank(String(e||"outer"),Number(t||6))},startCloudStoryDuel:()=>{window.cloudStoryBattleStarts()},winCombatNow:()=>{if(!i.inCombat||!i.enemy)return!1;const e=String(i.enemy.name||"Enemy");return i.enemy.health=0,Kd(e),!0},ensureQuest:()=>(i.hasJoinedSect||window.joinHeavenlyDemonSect(),window.sectGetQuest(),!0),startQuest:()=>{zd()},rushQuestCombat:()=>{window.questCombatRush()},getShopOffers:e=>{var o,s;return Pi(),String(e||"town")==="hour"?n(((o=i.shops.hour)==null?void 0:o.offers)||[]):n(((s=i.shops.town)==null?void 0:s.offers)||[])},forceShopReset:e=>{const t=String(e||"town");fo(t==="hour"?"hour":"town");try{N()}catch{}try{U()}catch{}return!0}}}if(!cb()){try{Sa()}catch{}!!String(i.playerName||"").trim()&&(i.playerGender==="male"||i.playerGender==="female")?(i.phase="FATE_ROLL",gr(),U()):(i.phase="INTRO_LOADING",i.playerName="",i.playerGender=null,i.intro={progress:0,step:"loading",usernameDraft:"",hasAnimatedTitle:!1})}i.phase==="FATE_ROLL"&&!i.bloodline&&(gr(),U());try{po()}catch{}try{ns()}catch{}try{ni()}catch{}try{ii("boot")}catch{}eM();N();console.log("Cultivation Saga loaded");
