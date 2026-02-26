(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mc="148",Kd=0,Yc=1,Jd=2,Kf=1,Qd=2,Os=3,wr=0,Hn=1,gc=2,To=3,Wi=0,rs=1,$c=2,jc=3,Zc=4,ep=5,Kr=100,tp=101,np=102,Kc=103,Jc=104,ip=200,rp=201,sp=202,op=203,Jf=204,Qf=205,ap=206,lp=207,cp=208,up=209,fp=210,hp=0,dp=1,pp=2,Ol=3,mp=4,gp=5,_p=6,xp=7,eh=0,vp=1,yp=2,bi=0,Mp=1,Sp=2,bp=3,wp=4,Tp=5,th=300,hs=301,ds=302,zl=303,Nl=304,Ia=306,Ul=1e3,Kn=1001,kl=1002,on=1003,Qc=1004,Va=1005,Un=1006,Ep=1007,ro=1008,Tr=1009,Cp=1010,Ap=1011,nh=1012,Pp=1013,ur=1014,fr=1015,so=1016,Dp=1017,Lp=1018,ss=1020,Rp=1021,Ip=1022,Jn=1023,Fp=1024,Op=1025,pr=1026,ps=1027,zp=1028,Np=1029,Up=1030,kp=1031,Bp=1033,Wa=33776,Ha=33777,Xa=33778,qa=33779,eu=35840,tu=35841,nu=35842,iu=35843,Gp=36196,ru=37492,su=37496,ou=37808,au=37809,lu=37810,cu=37811,uu=37812,fu=37813,hu=37814,du=37815,pu=37816,mu=37817,gu=37818,_u=37819,xu=37820,vu=37821,yu=36492,Er=3e3,mt=3001,Vp=3200,Wp=3201,Hp=0,Xp=1,ti="srgb",oo="srgb-linear",Ya=7680,qp=519,Mu=35044,Su="300 es",Bl=1035;class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,bu=180/Math.PI;function xo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[o&255]+Xt[o>>8&255]+Xt[o>>16&255]+Xt[o>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function wn(o,e,t){return Math.max(e,Math.min(t,o))}function Yp(o,e){return(o%e+e)%e}function ja(o,e,t){return(1-t)*o+t*e}function wu(o){return(o&o-1)===0&&o!==0}function Gl(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Eo(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function xn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class An{constructor(){An.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],b=i[1],v=i[4],M=i[7],y=i[2],A=i[5],C=i[8];return r[0]=a*d+s*b+l*y,r[3]=a*p+s*v+l*A,r[6]=a*_+s*M+l*C,r[1]=c*d+u*b+f*y,r[4]=c*p+u*v+f*A,r[7]=c*_+u*M+f*C,r[2]=h*d+m*b+g*y,r[5]=h*p+m*v+g*A,r[8]=h*_+m*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*a-s*c,h=s*l-u*r,m=c*r-a*l,g=t*f+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(i*c-u*n)*d,e[2]=(s*n-i*a)*d,e[3]=h*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-s*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new An;function ih(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ya(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function mr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ca(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ka={[ti]:{[oo]:mr},[oo]:{[ti]:ca}},Kt={legacyMode:!0,get workingColorSpace(){return oo},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Ka[e]&&Ka[e][t]!==void 0){const n=Ka[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pt={r:0,g:0,b:0},qn={h:0,s:0,l:0},Co={h:0,s:0,l:0};function Ja(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Ao(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Kt.workingColorSpace){if(e=Yp(e,1),t=wn(t,0,1),n=wn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ja(a,r,e+1/3),this.g=Ja(a,r,e),this.b=Ja(a,r,e-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(e,t=ti){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Kt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Kt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Kt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Kt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ti){const n=rh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Kt.fromWorkingColorSpace(Ao(this,Pt),e),wn(Pt.r*255,0,255)<<16^wn(Pt.g*255,0,255)<<8^wn(Pt.b*255,0,255)<<0}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ao(this,Pt),t);const n=Pt.r,i=Pt.g,r=Pt.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const f=a-s;switch(c=u<=.5?f/(a+s):f/(2-a-s),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ao(this,Pt),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=ti){return Kt.fromWorkingColorSpace(Ao(this,Pt),e),e!==ti?`color(${e} ${Pt.r} ${Pt.g} ${Pt.b})`:`rgb(${Pt.r*255|0},${Pt.g*255|0},${Pt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(qn),qn.h+=e,qn.s+=t,qn.l+=n,this.setHSL(qn.h,qn.s,qn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Co);const n=ja(qn.h,Co.h,t),i=ja(qn.s,Co.s,t),r=ja(qn.l,Co.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}dt.NAMES=rh;let Fr;class sh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=ya("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ya("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=mr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mr(t[n]/255)*255):t[n]=mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class oh{constructor(e=null){this.isSource=!0,this.uuid=xo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Qa(i[a].image)):r.push(Qa(i[a]))}else r=Qa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qa(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?sh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $p=0;class Ln extends bs{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,n=Kn,i=Kn,r=Un,a=ro,s=Jn,l=Tr,c=Ln.DEFAULT_ANISOTROPY,u=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=xo(),this.name="",this.source=new oh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new An,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ul:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ul:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=th;Ln.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(m+1)/2,y=(_+1)/2,A=(u+h)/4,C=(f+d)/4,x=(g+p)/4;return v>M&&v>y?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=C/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=x/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=x/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-d)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cr extends bs{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new oh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ah extends Ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jp extends Ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==g){let p=1-s;const _=l*h+c*m+u*g+f*d,b=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const y=Math.sqrt(v),A=Math.atan2(y,_*b);p=Math.sin(p*A)/y,s=Math.sin(s*A)/y}const M=s*b;if(l=l*p+h*M,c=c*p+m*M,u=u*p+g*M,f=f*p+d*M,p===1-s){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return e[t]=s*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-s*m,e[t+2]=c*g+u*m+s*h-l*f,e[t+3]=u*g-s*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),f=s(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+s+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>f){const m=2*Math.sqrt(1+n-s-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-n-f);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*i-s*n,u=l*n+s*t-r*i,f=l*i+r*n-a*t,h=-r*t-a*n-s*i;return this.x=c*l+h*-r+u*-s-f*-a,this.y=u*l+h*-a+f*-r-c*-s,this.z=f*l+h*-s+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new j,Tu=new vo;class yo{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)Ji.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ji)}else n.boundingBox===null&&n.computeBoundingBox(),tl.copy(n.boundingBox),tl.applyMatrix4(e.matrixWorld),this.union(tl);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Po.subVectors(this.max,Ts),Or.subVectors(e.a,Ts),zr.subVectors(e.b,Ts),Nr.subVectors(e.c,Ts),Pi.subVectors(zr,Or),Di.subVectors(Nr,zr),Qi.subVectors(Or,Nr);let t=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-Qi.z,Qi.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,Qi.z,0,-Qi.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-Qi.y,Qi.x,0];return!nl(t,Or,zr,Nr,Po)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,Or,zr,Nr,Po))?!1:(Do.crossVectors(Pi,Di),t=[Do.x,Do.y,Do.z],nl(t,Or,zr,Nr,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ji.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new j,new j,new j,new j,new j,new j,new j,new j],Ji=new j,tl=new yo,Or=new j,zr=new j,Nr=new j,Pi=new j,Di=new j,Qi=new j,Ts=new j,Po=new j,Do=new j,er=new j;function nl(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){er.fromArray(o,r);const s=i.x*Math.abs(er.x)+i.y*Math.abs(er.y)+i.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),u=n.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Zp=new yo,Es=new j,il=new j;class Fa{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Es,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(il)),this.expandByPoint(Es.copy(e.center).sub(il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new j,rl=new j,Lo=new j,Li=new j,sl=new j,Ro=new j,ol=new j;class lh{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.direction).multiplyScalar(t).add(this.origin),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rl.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(rl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Lo),s=Li.dot(this.direction),l=-Li.dot(Lo),c=Li.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-s,h=a*s-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,m=f*(f+a*h+2*s)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+s)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(a*r+s)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Lo).multiplyScalar(h).add(rl),m}intersectSphere(e,t){di.subVectors(e.center,this.origin);const n=di.dot(this.direction),i=di.dot(di)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,i,r){sl.subVectors(t,e),Ro.subVectors(n,e),ol.crossVectors(sl,Ro);let a=this.direction.dot(ol),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=s*this.direction.dot(Ro.crossVectors(Li,Ro));if(l<0)return null;const c=s*this.direction.dot(sl.cross(Li));if(c<0||l+c>a)return null;const u=-s*Li.dot(ol);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,c,u,f,h,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ur.setFromMatrixColumn(e,0).length(),r=1/Ur.setFromMatrixColumn(e,1).length(),a=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*f,g=s*u,d=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-d*c,t[9]=-s*l,t[2]=d-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h+d*s,t[4]=g*s-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-s,t[2]=m*s-g,t[6]=d+h*s,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h-d*s,t[4]=-a*f,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*u,t[9]=d-h*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=s*u,d=s*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=s*l,d=s*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=a*l,m=a*c,g=s*l,d=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=s*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kp,e,Jp)}lookAt(e,t,n){const i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ri.crossVectors(n,vn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ri.crossVectors(n,vn)),Ri.normalize(),Io.crossVectors(vn,Ri),i[0]=Ri.x,i[4]=Io.x,i[8]=vn.x,i[1]=Ri.y,i[5]=Io.y,i[9]=vn.y,i[2]=Ri.z,i[6]=Io.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],b=n[3],v=n[7],M=n[11],y=n[15],A=i[0],C=i[4],x=i[8],T=i[12],D=i[1],k=i[5],z=i[9],I=i[13],R=i[2],W=i[6],J=i[10],q=i[14],H=i[3],te=i[7],P=i[11],B=i[15];return r[0]=a*A+s*D+l*R+c*H,r[4]=a*C+s*k+l*W+c*te,r[8]=a*x+s*z+l*J+c*P,r[12]=a*T+s*I+l*q+c*B,r[1]=u*A+f*D+h*R+m*H,r[5]=u*C+f*k+h*W+m*te,r[9]=u*x+f*z+h*J+m*P,r[13]=u*T+f*I+h*q+m*B,r[2]=g*A+d*D+p*R+_*H,r[6]=g*C+d*k+p*W+_*te,r[10]=g*x+d*z+p*J+_*P,r[14]=g*T+d*I+p*q+_*B,r[3]=b*A+v*D+M*R+y*H,r[7]=b*C+v*k+M*W+y*te,r[11]=b*x+v*z+M*J+y*P,r[15]=b*T+v*I+M*q+y*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+r*l*f-i*c*f-r*s*h+n*c*h+i*s*m-n*l*m)+d*(+t*l*m-t*c*h+r*a*h-i*a*m+i*c*u-r*l*u)+p*(+t*c*f-t*s*m-r*a*f+n*a*m+r*s*u-n*c*u)+_*(-i*s*u-t*l*f+t*s*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],b=f*p*c-d*h*c+d*l*m-s*p*m-f*l*_+s*h*_,v=g*h*c-u*p*c-g*l*m+a*p*m+u*l*_-a*h*_,M=u*d*c-g*f*c+g*s*m-a*d*m-u*s*_+a*f*_,y=g*f*l-u*d*l-g*s*h+a*d*h+u*s*p-a*f*p,A=t*b+n*v+i*M+r*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=b*C,e[1]=(d*h*r-f*p*r-d*i*m+n*p*m+f*i*_-n*h*_)*C,e[2]=(s*p*r-d*l*r+d*i*c-n*p*c-s*i*_+n*l*_)*C,e[3]=(f*l*r-s*h*r-f*i*c+n*h*c+s*i*m-n*l*m)*C,e[4]=v*C,e[5]=(u*p*r-g*h*r+g*i*m-t*p*m-u*i*_+t*h*_)*C,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*_-t*l*_)*C,e[7]=(a*h*r-u*l*r+u*i*c-t*h*c-a*i*m+t*l*m)*C,e[8]=M*C,e[9]=(g*f*r-u*d*r-g*n*m+t*d*m+u*n*_-t*f*_)*C,e[10]=(a*d*r-g*s*r+g*n*c-t*d*c-a*n*_+t*s*_)*C,e[11]=(u*s*r-a*f*r-u*n*c+t*f*c+a*n*m-t*s*m)*C,e[12]=y*C,e[13]=(u*d*i-g*f*i+g*n*h-t*d*h-u*n*p+t*f*p)*C,e[14]=(g*s*i-a*d*i-g*n*l+t*d*l+a*n*p-t*s*p)*C,e[15]=(a*f*i-u*s*i+u*n*l-t*f*l-a*n*h+t*s*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,c=r+r,u=a+a,f=s+s,h=r*c,m=r*u,g=r*f,d=a*u,p=a*f,_=s*f,b=l*c,v=l*u,M=l*f,y=n.x,A=n.y,C=n.z;return i[0]=(1-(d+_))*y,i[1]=(m+M)*y,i[2]=(g-v)*y,i[3]=0,i[4]=(m-M)*A,i[5]=(1-(h+_))*A,i[6]=(p+b)*A,i[7]=0,i[8]=(g+v)*C,i[9]=(p-b)*C,i[10]=(1-(h+d))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ur.set(i[0],i[1],i[2]).length();const a=Ur.set(i[4],i[5],i[6]).length(),s=Ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Yn.copy(this);const c=1/r,u=1/a,f=1/s;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=f,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),f=(t+e)*l,h=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-f,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ur=new j,Yn=new Nt,Kp=new j(0,0,0),Jp=new j(1,1,1),Ri=new j,Io=new j,vn=new j,Eu=new Nt,Cu=new vo;class Mo{constructor(e=0,t=0,n=0,i=Mo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(wn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Mo.DefaultOrder="XYZ";Mo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qp=0;const Au=new j,kr=new vo,pi=new Nt,Fo=new j,Cs=new j,em=new j,tm=new vo,Pu=new j(1,0,0),Du=new j(0,1,0),Lu=new j(0,0,1),nm={type:"added"},Ru={type:"removed"};class fn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DefaultUp.clone();const e=new j,t=new Mo,n=new vo,i=new j(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new An}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=fn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=fn.DefaultMatrixWorldAutoUpdate,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Du,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,t){return Au.copy(e).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Du,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fo.copy(e):Fo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Cs,Fo,this.up):pi.lookAt(Fo,Cs,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),kr.setFromRotationMatrix(pi),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ru)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ru)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}fn.DefaultUp=new j(0,1,0);fn.DefaultMatrixAutoUpdate=!0;fn.DefaultMatrixWorldAutoUpdate=!0;const $n=new j,mi=new j,al=new j,gi=new j,Br=new j,Gr=new j,Iu=new j,ll=new j,cl=new j,ul=new j;class yi{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$n.subVectors(i,t),mi.subVectors(n,t),al.subVectors(e,t);const a=$n.dot($n),s=$n.dot(mi),l=$n.dot(al),c=mi.dot(mi),u=mi.dot(al),f=a*c-s*s;if(f===0)return r.set(-2,-1,-1);const h=1/f,m=(c*l-s*u)*h,g=(a*u-s*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi),gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,gi),l.set(0,0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(s,gi.z),l}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),mi.subVectors(e,t),$n.cross(mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),$n.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return yi.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Br.subVectors(i,n),Gr.subVectors(r,n),ll.subVectors(e,n);const l=Br.dot(ll),c=Gr.dot(ll);if(l<=0&&c<=0)return t.copy(n);cl.subVectors(e,i);const u=Br.dot(cl),f=Gr.dot(cl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Br,a);ul.subVectors(e,r);const m=Br.dot(ul),g=Gr.dot(ul);if(g>=0&&m<=g)return t.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Gr,s);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Iu.subVectors(r,i),s=(f-u)/(f-u+(m-g)),t.copy(i).addScaledVector(Iu,s);const _=1/(p+d+h);return a=d*_,s=h*_,t.copy(n).addScaledVector(Br,a).addScaledVector(Gr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let im=0;class So extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=rs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Jf,this.blendDst=Qf,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==wr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uh extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new j,Oo=new pt;class Qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class fh extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hh extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gr extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rm=0;const zn=new Nt,fl=new fn,Vr=new j,yn=new yo,As=new yo,Ft=new j;class Ci extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ih(e)?hh:fh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new An().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];As.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(yn.min,As.min),yn.expandByPoint(Ft),Ft.addVectors(yn.max,As.max),yn.expandByPoint(Ft)):(yn.expandByPoint(As.min),yn.expandByPoint(As.max))}yn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Ft.fromBufferAttribute(s,c),l&&(Vr.fromBufferAttribute(e,c),Ft.add(Vr)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<s;D++)c[D]=new j,u[D]=new j;const f=new j,h=new j,m=new j,g=new pt,d=new pt,p=new pt,_=new j,b=new j;function v(D,k,z){f.fromArray(i,D*3),h.fromArray(i,k*3),m.fromArray(i,z*3),g.fromArray(a,D*2),d.fromArray(a,k*2),p.fromArray(a,z*2),h.sub(f),m.sub(f),d.sub(g),p.sub(g);const I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(I),b.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),c[D].add(_),c[k].add(_),c[z].add(_),u[D].add(b),u[k].add(b),u[z].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,k=M.length;D<k;++D){const z=M[D],I=z.start,R=z.count;for(let W=I,J=I+R;W<J;W+=3)v(n[W+0],n[W+1],n[W+2])}const y=new j,A=new j,C=new j,x=new j;function T(D){C.fromArray(r,D*3),x.copy(C);const k=c[D];y.copy(k),y.sub(C.multiplyScalar(C.dot(k))).normalize(),A.crossVectors(x,k);const I=A.dot(u[D])<0?-1:1;l[D*4]=y.x,l[D*4+1]=y.y,l[D*4+2]=y.z,l[D*4+3]=I}for(let D=0,k=M.length;D<k;++D){const z=M[D],I=z.start,R=z.count;for(let W=I,J=I+R;W<J;W+=3)T(n[W+0]),T(n[W+1]),T(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new j,r=new j,a=new j,s=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){s.isInterleavedBufferAttribute?m=l[d]*s.data.stride+s.offset:m=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new Qn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ci,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fu=new Nt,Wr=new lh,hl=new Fa,Ps=new j,Ds=new j,Ls=new j,dl=new j,zo=new j,No=new pt,Uo=new pt,ko=new pt,pl=new j,Bo=new j;class zi extends fn{constructor(e=new Ci,t=new uh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],f=r[l];u!==0&&(dl.fromBufferAttribute(f,e),a?zo.addScaledVector(dl,u):zo.addScaledVector(dl.sub(t),u))}t.add(zo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(r),e.ray.intersectsSphere(hl)===!1)||(Fu.copy(r).invert(),Wr.copy(e.ray).applyMatrix4(Fu),n.boundingBox!==null&&Wr.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const d=f[m],p=i[d.materialIndex],_=Math.max(d.start,h.start),b=Math.min(s.count,Math.min(d.start+d.count,h.start+h.count));for(let v=_,M=b;v<M;v+=3){const y=s.getX(v),A=s.getX(v+1),C=s.getX(v+2);a=Go(this,p,e,Wr,c,u,y,A,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(s.count,h.start+h.count);for(let d=m,p=g;d<p;d+=3){const _=s.getX(d),b=s.getX(d+1),v=s.getX(d+2);a=Go(this,i,e,Wr,c,u,_,b,v),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const d=f[m],p=i[d.materialIndex],_=Math.max(d.start,h.start),b=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let v=_,M=b;v<M;v+=3){const y=v,A=v+1,C=v+2;a=Go(this,p,e,Wr,c,u,y,A,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=m,p=g;d<p;d+=3){const _=d,b=d+1,v=d+2;a=Go(this,i,e,Wr,c,u,_,b,v),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function sm(o,e,t,n,i,r,a,s){let l;if(e.side===Hn?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side===wr,s),l===null)return null;Bo.copy(s),Bo.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Bo);return c<t.near||c>t.far?null:{distance:c,point:Bo.clone(),object:o}}function Go(o,e,t,n,i,r,a,s,l){o.getVertexPosition(a,Ps),o.getVertexPosition(s,Ds),o.getVertexPosition(l,Ls);const c=sm(o,e,t,n,Ps,Ds,Ls,pl);if(c){i&&(No.fromBufferAttribute(i,a),Uo.fromBufferAttribute(i,s),ko.fromBufferAttribute(i,l),c.uv=yi.getUV(pl,Ps,Ds,Ls,No,Uo,ko,new pt)),r&&(No.fromBufferAttribute(r,a),Uo.fromBufferAttribute(r,s),ko.fromBufferAttribute(r,l),c.uv2=yi.getUV(pl,Ps,Ds,Ls,No,Uo,ko,new pt));const u={a,b:s,c:l,normal:new j,materialIndex:0};yi.getNormal(Ps,Ds,Ls,u.normal),c.face=u}return c}class bo extends Ci{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gr(c,3)),this.setAttribute("normal",new gr(u,3)),this.setAttribute("uv",new gr(f,2));function g(d,p,_,b,v,M,y,A,C,x,T){const D=M/C,k=y/x,z=M/2,I=y/2,R=A/2,W=C+1,J=x+1;let q=0,H=0;const te=new j;for(let P=0;P<J;P++){const B=P*k-I;for(let $=0;$<W;$++){const oe=$*D-z;te[d]=oe*b,te[p]=B*v,te[_]=R,c.push(te.x,te.y,te.z),te[d]=0,te[p]=0,te[_]=A>0?1:-1,u.push(te.x,te.y,te.z),f.push($/C),f.push(1-P/x),q+=1}}for(let P=0;P<x;P++)for(let B=0;B<C;B++){const $=h+B+W*P,oe=h+B+W*(P+1),ie=h+(B+1)+W*(P+1),fe=h+(B+1)+W*P;l.push($,oe,fe),l.push(oe,ie,fe),H+=6}s.addGroup(m,H,T),m+=H,h+=q}}static fromJSON(e){return new bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function en(o){const e={};for(let t=0;t<o.length;t++){const n=ms(o[t]);for(const i in n)e[i]=n[i]}return e}function om(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function dh(o){return o.getRenderTarget()===null&&o.outputEncoding===mt?ti:oo}const am={clone:ms,merge:en};var lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lm,this.fragmentShader=cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ph extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kn extends ph{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bu*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($a*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hr=-90,Xr=1;class um extends fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new kn(Hr,Xr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new kn(Hr,Xr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new kn(Hr,Xr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new kn(Hr,Xr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new kn(Hr,Xr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new kn(Hr,Xr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=bi,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class mh extends Ln{constructor(e,t,n,i,r,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:hs,super(e,t,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fm extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bo(5,5,5),r=new Ar({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Wi});r.uniforms.tEquirect.value=t;const a=new zi(i,r),s=t.minFilter;return t.minFilter===ro&&(t.minFilter=Un),new um(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ml=new j,hm=new j,dm=new An;class ir{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ml.subVectors(n,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ml),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dm.getNormalMatrix(e),i=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Fa,Vo=new j;class gh{constructor(e=new ir,t=new ir,n=new ir,i=new ir,r=new ir,a=new ir){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],b=n[14],v=n[15];return t[0].setComponents(s-i,f-l,d-h,v-p).normalize(),t[1].setComponents(s+i,f+l,d+h,v+p).normalize(),t[2].setComponents(s+r,f+c,d+m,v+_).normalize(),t[3].setComponents(s-r,f-c,d-m,v-_).normalize(),t[4].setComponents(s-a,f-u,d-g,v-b).normalize(),t[5].setComponents(s+a,f+u,d+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vo.x=i.normal.x>0?e.max.x:e.min.x,Vo.y=i.normal.y>0?e.max.y:e.min.y,Vo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _h(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function pm(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,m=u.updateRange;o.bindBuffer(f,c),m.count===-1?o.bufferSubData(f,0,h):(t?o.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):o.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:s,update:l}}class _c extends Ci{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,f=e/s,h=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const b=_*h-a;for(let v=0;v<c;v++){const M=v*f-r;g.push(M,-b,0),d.push(0,0,1),p.push(v/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<s;b++){const v=b+c*_,M=b+c*(_+1),y=b+1+c*(_+1),A=b+1+c*_;m.push(v,M,A),m.push(M,y,A)}this.setIndex(m),this.setAttribute("position",new gr(g,3)),this.setAttribute("normal",new gr(d,3)),this.setAttribute("uv",new gr(p,2))}static fromJSON(e){return new _c(e.width,e.height,e.widthSegments,e.heightSegments)}}var mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm="vec3 transformed = vec3( position );",Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,wm=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fm=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,Om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,zm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,rg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ug=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,fg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tg=`#ifdef USE_MORPHNORMALS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Cg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Pg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,jg=`float getShadowMask() {
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,e_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,s_=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,o_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,a_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,l_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,c_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,u_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,f_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,h_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,v_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,y_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,M_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,S_=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,T_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,D_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,R_=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,O_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,z_=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,U_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,B_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,X_=`uniform float rotation;
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
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qe={alphamap_fragment:mm,alphamap_pars_fragment:gm,alphatest_fragment:_m,alphatest_pars_fragment:xm,aomap_fragment:vm,aomap_pars_fragment:ym,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:bm,iridescence_fragment:wm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Cm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Pm,color_fragment:Dm,color_pars_fragment:Lm,color_pars_vertex:Rm,color_vertex:Im,common:Fm,cube_uv_reflection_fragment:Om,defaultnormal_vertex:zm,displacementmap_pars_vertex:Nm,displacementmap_vertex:Um,emissivemap_fragment:km,emissivemap_pars_fragment:Bm,encodings_fragment:Gm,encodings_pars_fragment:Vm,envmap_fragment:Wm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Xm,envmap_pars_vertex:qm,envmap_physical_pars_fragment:rg,envmap_vertex:Ym,fog_vertex:$m,fog_pars_vertex:jm,fog_fragment:Zm,fog_pars_fragment:Km,gradientmap_pars_fragment:Jm,lightmap_fragment:Qm,lightmap_pars_fragment:eg,lights_lambert_fragment:tg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:sg,lights_toon_pars_fragment:og,lights_phong_fragment:ag,lights_phong_pars_fragment:lg,lights_physical_fragment:cg,lights_physical_pars_fragment:ug,lights_fragment_begin:fg,lights_fragment_maps:hg,lights_fragment_end:dg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:_g,map_fragment:xg,map_pars_fragment:vg,map_particle_fragment:yg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:bg,morphcolor_vertex:wg,morphnormal_vertex:Tg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Cg,normal_fragment_begin:Ag,normal_fragment_maps:Pg,normal_pars_fragment:Dg,normal_pars_vertex:Lg,normal_vertex:Rg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:zg,iridescence_pars_fragment:Ng,output_fragment:Ug,packing:kg,premultiplied_alpha_fragment:Bg,project_vertex:Gg,dithering_fragment:Vg,dithering_pars_fragment:Wg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:Yg,shadowmap_vertex:$g,shadowmask_pars_fragment:jg,skinbase_vertex:Zg,skinning_pars_vertex:Kg,skinning_vertex:Jg,skinnormal_vertex:Qg,specularmap_fragment:e_,specularmap_pars_fragment:t_,tonemapping_fragment:n_,tonemapping_pars_fragment:i_,transmission_fragment:r_,transmission_pars_fragment:s_,uv_pars_fragment:o_,uv_pars_vertex:a_,uv_vertex:l_,uv2_pars_fragment:c_,uv2_pars_vertex:u_,uv2_vertex:f_,worldpos_vertex:h_,background_vert:d_,background_frag:p_,backgroundCube_vert:m_,backgroundCube_frag:g_,cube_vert:__,cube_frag:x_,depth_vert:v_,depth_frag:y_,distanceRGBA_vert:M_,distanceRGBA_frag:S_,equirect_vert:b_,equirect_frag:w_,linedashed_vert:T_,linedashed_frag:E_,meshbasic_vert:C_,meshbasic_frag:A_,meshlambert_vert:P_,meshlambert_frag:D_,meshmatcap_vert:L_,meshmatcap_frag:R_,meshnormal_vert:I_,meshnormal_frag:F_,meshphong_vert:O_,meshphong_frag:z_,meshphysical_vert:N_,meshphysical_frag:U_,meshtoon_vert:k_,meshtoon_frag:B_,points_vert:G_,points_frag:V_,shadow_vert:W_,shadow_frag:H_,sprite_vert:X_,sprite_frag:q_},pe={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new An},uv2Transform:{value:new An},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new An}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new An}}},ri={basic:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new dt(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:en([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:en([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new dt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:en([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:en([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:en([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:en([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new An},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:en([pe.common,pe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:en([pe.lights,pe.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ri.physical={uniforms:en([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new pt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Wo={r:0,b:0,g:0};function Y_(o,e,t,n,i,r,a){const s=new dt(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function g(p,_){let b=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const M=o.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?d(s,l):v&&v.isColor&&(d(v,1),b=!0),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ia)?(u===void 0&&(u=new zi(new bo(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:ms(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==mt,(f!==v||h!==v.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new zi(new _c(2,2),new Ar({name:"BackgroundMaterial",uniforms:ms(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,_){p.getRGB(Wo,dh(o)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,_,a)}return{getClearColor:function(){return s},setClearColor:function(p,_=1){s.set(p),l=_,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(s,l)},render:g}}function $_(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function f(R,W,J,q,H){let te=!1;if(a){const P=d(q,J,W);c!==P&&(c=P,m(c.object)),te=_(R,q,J,H),te&&b(R,q,J,H)}else{const P=W.wireframe===!0;(c.geometry!==q.id||c.program!==J.id||c.wireframe!==P)&&(c.geometry=q.id,c.program=J.id,c.wireframe=P,te=!0)}H!==null&&t.update(H,34963),(te||u)&&(u=!1,x(R,W,J,q),H!==null&&o.bindBuffer(34963,t.get(H).buffer))}function h(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function d(R,W,J){const q=J.wireframe===!0;let H=s[R.id];H===void 0&&(H={},s[R.id]=H);let te=H[W.id];te===void 0&&(te={},H[W.id]=te);let P=te[q];return P===void 0&&(P=p(h()),te[q]=P),P}function p(R){const W=[],J=[],q=[];for(let H=0;H<i;H++)W[H]=0,J[H]=0,q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:J,attributeDivisors:q,object:R,attributes:{},index:null}}function _(R,W,J,q){const H=c.attributes,te=W.attributes;let P=0;const B=J.getAttributes();for(const $ in B)if(B[$].location>=0){const ie=H[$];let fe=te[$];if(fe===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),ie===void 0||ie.attribute!==fe||fe&&ie.data!==fe.data)return!0;P++}return c.attributesNum!==P||c.index!==q}function b(R,W,J,q){const H={},te=W.attributes;let P=0;const B=J.getAttributes();for(const $ in B)if(B[$].location>=0){let ie=te[$];ie===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const fe={};fe.attribute=ie,ie&&ie.data&&(fe.data=ie.data),H[$]=fe,P++}c.attributes=H,c.attributesNum=P,c.index=q}function v(){const R=c.newAttributes;for(let W=0,J=R.length;W<J;W++)R[W]=0}function M(R){y(R,0)}function y(R,W){const J=c.newAttributes,q=c.enabledAttributes,H=c.attributeDivisors;J[R]=1,q[R]===0&&(o.enableVertexAttribArray(R),q[R]=1),H[R]!==W&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,W),H[R]=W)}function A(){const R=c.newAttributes,W=c.enabledAttributes;for(let J=0,q=W.length;J<q;J++)W[J]!==R[J]&&(o.disableVertexAttribArray(J),W[J]=0)}function C(R,W,J,q,H,te){n.isWebGL2===!0&&(J===5124||J===5125)?o.vertexAttribIPointer(R,W,J,H,te):o.vertexAttribPointer(R,W,J,q,H,te)}function x(R,W,J,q){if(n.isWebGL2===!1&&(R.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=q.attributes,te=J.getAttributes(),P=W.defaultAttributeValues;for(const B in te){const $=te[B];if($.location>=0){let oe=H[B];if(oe===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const ie=oe.normalized,fe=oe.itemSize,Z=t.get(oe);if(Z===void 0)continue;const Le=Z.buffer,me=Z.type,Ce=Z.bytesPerElement;if(oe.isInterleavedBufferAttribute){const xe=oe.data,ze=xe.stride,De=oe.offset;if(xe.isInstancedInterleavedBuffer){for(let he=0;he<$.locationSize;he++)y($.location+he,xe.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let he=0;he<$.locationSize;he++)M($.location+he);o.bindBuffer(34962,Le);for(let he=0;he<$.locationSize;he++)C($.location+he,fe/$.locationSize,me,ie,ze*Ce,(De+fe/$.locationSize*he)*Ce)}else{if(oe.isInstancedBufferAttribute){for(let xe=0;xe<$.locationSize;xe++)y($.location+xe,oe.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let xe=0;xe<$.locationSize;xe++)M($.location+xe);o.bindBuffer(34962,Le);for(let xe=0;xe<$.locationSize;xe++)C($.location+xe,fe/$.locationSize,me,ie,fe*Ce,fe/$.locationSize*xe*Ce)}}else if(P!==void 0){const ie=P[B];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv($.location,ie);break;case 3:o.vertexAttrib3fv($.location,ie);break;case 4:o.vertexAttrib4fv($.location,ie);break;default:o.vertexAttrib1fv($.location,ie)}}}}A()}function T(){z();for(const R in s){const W=s[R];for(const J in W){const q=W[J];for(const H in q)g(q[H].object),delete q[H];delete W[J]}delete s[R]}}function D(R){if(s[R.id]===void 0)return;const W=s[R.id];for(const J in W){const q=W[J];for(const H in q)g(q[H].object),delete q[H];delete W[J]}delete s[R.id]}function k(R){for(const W in s){const J=s[W];if(J[R.id]===void 0)continue;const q=J[R.id];for(const H in q)g(q[H].object),delete q[H];delete J[R.id]}}function z(){I(),u=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:M,disableUnusedAttributes:A}}function j_(o,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,m;if(i)h=o,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=s,this.renderInstances=l}function Z_(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=o.getParameter(34930),h=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),b=o.getParameter(36349),v=h>0,M=a||e.has("OES_texture_float"),y=v&&M,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:A}}function K_(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ir,s=new An,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||n!==0||i;return i=h,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,_=o.get(f);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const b=r?0:n,v=b*4;let M=_.clippingState||null;l.value=M,M=u(g,h,v,m);for(let y=0;y!==v;++y)M[y]=t[y];_.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,b=h.matrixWorldInverse;s.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let v=0,M=m;v!==d;++v,M+=4)a.copy(f[v]).applyMatrix4(b,s),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function J_(o){let e=new WeakMap;function t(a,s){return s===zl?a.mapping=hs:s===Nl&&(a.mapping=ds),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===zl||s===Nl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fm(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Q_ extends ph{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const es=4,Ou=[.125,.215,.35,.446,.526,.582],cr=20,gl=new Q_,zu=new dt;let _l=null;const rr=(1+Math.sqrt(5))/2,Yr=1/rr,Nu=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,rr,Yr),new j(0,rr,-Yr),new j(Yr,0,rr),new j(-Yr,0,rr),new j(rr,Yr,0),new j(-rr,Yr,0)];class Uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_l=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l),e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:so,format:Jn,encoding:Er,depthBuffer:!1},i=ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=t0(r,e,t)}return i}_compileMaterial(e){const t=new zi(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,n,i){const s=new kn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(zu),u.toneMapping=bi,u.autoClear=!1;const m=new uh({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),g=new zi(new bo,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(zu),d=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):b===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const v=this._cubeSize;Ho(i,b*v,_>2?v:0,v,v),u.setRenderTarget(i),d&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===hs||e.mapping===ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new zi(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;Ho(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,gl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Nu[(i-1)%Nu.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zi(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cr-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):cr;p>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${cr}`);const _=[];let b=0;for(let C=0;C<cr;++C){const x=C/d,T=Math.exp(-x*x/2);_.push(T),C===0?b+=T:C<p&&(b+=2*T)}for(let C=0;C<_.length;C++)_[C]=_[C]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const M=this._sizeLods[i],y=3*M*(i>v-es?i-v+es:0),A=4*(this._cubeSize-M);Ho(t,y,A,3*M,2*M),l.setRenderTarget(t),l.render(f,gl)}}function e0(o){const e=[],t=[],n=[];let i=o;const r=o-es+1+Ou.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-es?l=Ou[a-o+es-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,d=3,p=2,_=1,b=new Float32Array(d*g*m),v=new Float32Array(p*g*m),M=new Float32Array(_*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,x=A>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];b.set(T,d*g*A),v.set(h,p*g*A);const D=[A,A,A,A,A,A];M.set(D,_*g*A)}const y=new Ci;y.setAttribute("position",new Qn(b,d)),y.setAttribute("uv",new Qn(v,p)),y.setAttribute("faceIndex",new Qn(M,_)),e.push(y),i>es&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ku(o,e,t){const n=new Cr(o,e,t);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function t0(o,e,t){const n=new Float32Array(cr),i=new j(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Bu(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Gu(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function n0(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===zl||l===Nl,u=l===hs||l===ds;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new Uu(o)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Uu(o));const h=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",r),h.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function i0(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function r0(o,e,t,n){const i={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let d=0;if(m!==null){const b=m.array;d=m.version;for(let v=0,M=b.length;v<M;v+=3){const y=b[v+0],A=b[v+1],C=b[v+2];h.push(y,A,A,C,C,y)}}else{const b=g.array;d=g.version;for(let v=0,M=b.length/3-1;v<M;v+=3){const y=v+0,A=v+1,C=v+2;h.push(y,A,A,C,C,y)}}const p=new(ih(h)?hh:fh)(h,1);p.version=d;const _=r.get(f);_&&e.remove(_),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function s0(o,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}let s,l;function c(h){s=h.type,l=h.bytesPerElement}function u(h,m){o.drawElements(r,m,s,h*l),t.update(m,r,1)}function f(h,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,h*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function o0(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function a0(o,e){return o[0]-e[0]}function l0(o,e){return Math.abs(e[1])-Math.abs(o[1])}function c0(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Bt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let J=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",J)};var g=J;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let D=0;M===!0&&(D=1),y===!0&&(D=2),A===!0&&(D=3);let k=u.attributes.position.count*D,z=1;k>e.maxTextureSize&&(z=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const I=new Float32Array(k*z*4*p),R=new ah(I,k,z,p);R.type=fr,R.needsUpdate=!0;const W=D*4;for(let q=0;q<p;q++){const H=C[q],te=x[q],P=T[q],B=k*z*4*q;for(let $=0;$<H.count;$++){const oe=$*W;M===!0&&(a.fromBufferAttribute(H,$),I[B+oe+0]=a.x,I[B+oe+1]=a.y,I[B+oe+2]=a.z,I[B+oe+3]=0),y===!0&&(a.fromBufferAttribute(te,$),I[B+oe+4]=a.x,I[B+oe+5]=a.y,I[B+oe+6]=a.z,I[B+oe+7]=0),A===!0&&(a.fromBufferAttribute(P,$),I[B+oe+8]=a.x,I[B+oe+9]=a.y,I[B+oe+10]=a.z,I[B+oe+11]=P.itemSize===4?a.w:1)}}_={count:p,texture:R,size:new pt(k,z)},r.set(u,_),u.addEventListener("dispose",J)}let b=0;for(let M=0;M<m.length;M++)b+=m[M];const v=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(o,"morphTargetBaseInfluence",v),h.getUniforms().setValue(o,"morphTargetInfluences",m),h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let y=0;y<d;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<d;y++){const A=p[y];A[0]=y,A[1]=m[y]}p.sort(l0);for(let y=0;y<8;y++)y<d&&p[y][1]?(s[y][0]=p[y][0],s[y][1]=p[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(a0);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const A=s[y],C=A[0],x=A[1];C!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+y)!==_[C]&&u.setAttribute("morphTarget"+y,_[C]),b&&u.getAttribute("morphNormal"+y)!==b[C]&&u.setAttribute("morphNormal"+y,b[C]),i[y]=x,v+=x):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),b&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const M=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(o,"morphTargetBaseInfluence",M),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function u0(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const xh=new Ln,vh=new ah,yh=new jp,Mh=new mh,Vu=[],Wu=[],Hu=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);function ws(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=Vu[i];if(r===void 0&&(r=new Float32Array(i),Vu[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function Rt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function It(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Oa(o,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function f0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function h0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;o.uniform2fv(this.addr,e),It(t,e)}}function d0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;o.uniform3fv(this.addr,e),It(t,e)}}function p0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;o.uniform4fv(this.addr,e),It(t,e)}}function m0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;qu.set(n),o.uniformMatrix2fv(this.addr,!1,qu),It(t,n)}}function g0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;Xu.set(n),o.uniformMatrix3fv(this.addr,!1,Xu),It(t,n)}}function _0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;Hu.set(n),o.uniformMatrix4fv(this.addr,!1,Hu),It(t,n)}}function x0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function v0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;o.uniform2iv(this.addr,e),It(t,e)}}function y0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;o.uniform3iv(this.addr,e),It(t,e)}}function M0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;o.uniform4iv(this.addr,e),It(t,e)}}function S0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function b0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;o.uniform2uiv(this.addr,e),It(t,e)}}function w0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;o.uniform3uiv(this.addr,e),It(t,e)}}function T0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;o.uniform4uiv(this.addr,e),It(t,e)}}function E0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||xh,i)}function C0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yh,i)}function A0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mh,i)}function P0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vh,i)}function D0(o){switch(o){case 5126:return f0;case 35664:return h0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return b0;case 36295:return w0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return P0}}function L0(o,e){o.uniform1fv(this.addr,e)}function R0(o,e){const t=ws(e,this.size,2);o.uniform2fv(this.addr,t)}function I0(o,e){const t=ws(e,this.size,3);o.uniform3fv(this.addr,t)}function F0(o,e){const t=ws(e,this.size,4);o.uniform4fv(this.addr,t)}function O0(o,e){const t=ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function z0(o,e){const t=ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function N0(o,e){const t=ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function U0(o,e){o.uniform1iv(this.addr,e)}function k0(o,e){o.uniform2iv(this.addr,e)}function B0(o,e){o.uniform3iv(this.addr,e)}function G0(o,e){o.uniform4iv(this.addr,e)}function V0(o,e){o.uniform1uiv(this.addr,e)}function W0(o,e){o.uniform2uiv(this.addr,e)}function H0(o,e){o.uniform3uiv(this.addr,e)}function X0(o,e){o.uniform4uiv(this.addr,e)}function q0(o,e,t){const n=this.cache,i=e.length,r=Oa(t,i);Rt(n,r)||(o.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||xh,r[a])}function Y0(o,e,t){const n=this.cache,i=e.length,r=Oa(t,i);Rt(n,r)||(o.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yh,r[a])}function $0(o,e,t){const n=this.cache,i=e.length,r=Oa(t,i);Rt(n,r)||(o.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Mh,r[a])}function j0(o,e,t){const n=this.cache,i=e.length,r=Oa(t,i);Rt(n,r)||(o.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vh,r[a])}function Z0(o){switch(o){case 5126:return L0;case 35664:return R0;case 35665:return I0;case 35666:return F0;case 35674:return O0;case 35675:return z0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return k0;case 35668:case 35672:return B0;case 35669:case 35673:return G0;case 5125:return V0;case 36294:return W0;case 36295:return H0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return j0}}class K0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=D0(t.type)}}class J0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Z0(t.type)}}class Q0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function Yu(o,e){o.seq.push(e),o.map[e.id]=e}function ex(o,e,t){const n=o.name,i=n.length;for(xl.lastIndex=0;;){const r=xl.exec(n),a=xl.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){Yu(t,c===void 0?new K0(s,o,e):new J0(s,o,e));break}else{let f=t.map[s];f===void 0&&(f=new Q0(s),Yu(t,f)),t=f}}}class ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ex(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function $u(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let tx=0;function nx(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function ix(o){switch(o){case Er:return["Linear","( value )"];case mt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function ju(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+nx(o.getShaderSource(e),a)}else return i}function rx(o,e){const t=ix(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function sx(o,e){let t;switch(e){case Mp:t="Linear";break;case Sp:t="Reinhard";break;case bp:t="OptimizedCineon";break;case wp:t="ACESFilmic";break;case Tp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ox(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function ax(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lx(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function zs(o){return o!==""}function Zu(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(o){return o.replace(cx,ux)}function ux(o,e){const t=qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Vl(t)}const fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(o){return o.replace(fx,hx)}function hx(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qu(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dx(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Kf?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Qd?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Os&&(e="SHADOWMAP_TYPE_VSM"),e}function px(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case hs:case ds:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mx(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function gx(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case eh:e="ENVMAP_BLENDING_MULTIPLY";break;case vp:e="ENVMAP_BLENDING_MIX";break;case yp:e="ENVMAP_BLENDING_ADD";break}return e}function _x(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xx(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=dx(t),c=px(t),u=mx(t),f=gx(t),h=_x(t),m=t.isWebGL2?"":ox(t),g=ax(r),d=i.createProgram();let p,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(zs).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(zs).join(`
`),_.length>0&&(_+=`
`)):(p=[Qu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),_=[m,Qu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?qe.tonemapping_pars_fragment:"",t.toneMapping!==bi?sx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,rx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=Vl(a),a=Zu(a,t),a=Ku(a,t),s=Vl(s),s=Zu(s,t),s=Ku(s,t),a=Ju(a),s=Ju(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=b+p+a,M=b+_+s,y=$u(i,35633,v),A=$u(i,35632,M);if(i.attachShader(d,y),i.attachShader(d,A),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const T=i.getProgramInfoLog(d).trim(),D=i.getShaderInfoLog(y).trim(),k=i.getShaderInfoLog(A).trim();let z=!0,I=!0;if(i.getProgramParameter(d,35714)===!1){z=!1;const R=ju(i,y,"vertex"),W=ju(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+R+`
`+W)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||k==="")&&(I=!1);I&&(this.diagnostics={runnable:z,programLog:T,vertexShader:{log:D,prefix:p},fragmentShader:{log:k,prefix:_}})}i.deleteShader(y),i.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new ua(i,d)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=lx(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=tx++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=A,this}let vx=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mx(e),t.set(e,n)),n}}class Mx{constructor(e){this.id=vx++,this.code=e,this.usedTimes=0}}function Sx(o,e,t,n,i,r,a){const s=new ch,l=new yx,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,T,D,k,z){const I=k.fog,R=z.geometry,W=x.isMeshStandardMaterial?k.environment:null,J=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),q=J&&J.mapping===Ia?J.image.height:null,H=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const te=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,P=te!==void 0?te.length:0;let B=0;R.morphAttributes.position!==void 0&&(B=1),R.morphAttributes.normal!==void 0&&(B=2),R.morphAttributes.color!==void 0&&(B=3);let $,oe,ie,fe;if(H){const ze=ri[H];$=ze.vertexShader,oe=ze.fragmentShader}else $=x.vertexShader,oe=x.fragmentShader,l.update(x),ie=l.getVertexShaderID(x),fe=l.getFragmentShaderID(x);const Z=o.getRenderTarget(),Le=x.alphaTest>0,me=x.clearcoat>0,Ce=x.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:x.type,vertexShader:$,fragmentShader:oe,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Z===null?o.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:Er,map:!!x.map,matcap:!!x.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:q,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Xp,tangentSpaceNormalMap:x.normalMapType===Hp,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===mt,clearcoat:me,clearcoatMap:me&&!!x.clearcoatMap,clearcoatRoughnessMap:me&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!x.clearcoatNormalMap,iridescence:Ce,iridescenceMap:Ce&&!!x.iridescenceMap,iridescenceThicknessMap:Ce&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===rs,alphaMap:!!x.alphaMap,alphaTest:Le,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:B,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:bi,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gc,flipSided:x.side===Hn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(_(T,x),b(T,x),T.push(o.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function _(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.map&&s.enable(4),T.matcap&&s.enable(5),T.envMap&&s.enable(6),T.lightMap&&s.enable(7),T.aoMap&&s.enable(8),T.emissiveMap&&s.enable(9),T.bumpMap&&s.enable(10),T.normalMap&&s.enable(11),T.objectSpaceNormalMap&&s.enable(12),T.tangentSpaceNormalMap&&s.enable(13),T.clearcoat&&s.enable(14),T.clearcoatMap&&s.enable(15),T.clearcoatRoughnessMap&&s.enable(16),T.clearcoatNormalMap&&s.enable(17),T.iridescence&&s.enable(18),T.iridescenceMap&&s.enable(19),T.iridescenceThicknessMap&&s.enable(20),T.displacementMap&&s.enable(21),T.specularMap&&s.enable(22),T.roughnessMap&&s.enable(23),T.metalnessMap&&s.enable(24),T.gradientMap&&s.enable(25),T.alphaMap&&s.enable(26),T.alphaTest&&s.enable(27),T.vertexColors&&s.enable(28),T.vertexAlphas&&s.enable(29),T.vertexUvs&&s.enable(30),T.vertexTangents&&s.enable(31),T.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.physicallyCorrectLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.specularIntensityMap&&s.enable(15),T.specularColorMap&&s.enable(16),T.transmission&&s.enable(17),T.transmissionMap&&s.enable(18),T.thicknessMap&&s.enable(19),T.sheen&&s.enable(20),T.sheenColorMap&&s.enable(21),T.sheenRoughnessMap&&s.enable(22),T.decodeVideoTexture&&s.enable(23),T.opaque&&s.enable(24),x.push(s.mask)}function v(x){const T=g[x.type];let D;if(T){const k=ri[T];D=am.clone(k.uniforms)}else D=x.uniforms;return D}function M(x,T){let D;for(let k=0,z=c.length;k<z;k++){const I=c[k];if(I.cacheKey===T){D=I,++D.usedTimes;break}}return D===void 0&&(D=new xx(o,T,x,r),c.push(D)),D}function y(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:C}}function bx(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function wx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ef(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function tf(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,m,g,d,p){let _=o[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:d,group:p},o[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=p),e++,_}function s(f,h,m,g,d,p){const _=a(f,h,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(f,h,m,g,d,p){const _=a(f,h,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||wx),n.length>1&&n.sort(h||ef),i.length>1&&i.sort(h||ef)}function u(){for(let f=e,h=o.length;f<h;f++){const m=o[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function Tx(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new tf,o.set(n,[a])):i>=r.length?(a=new tf,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function Ex(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new dt};break;case"SpotLight":t={position:new j,direction:new j,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=t,t}}}function Cx(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Ax=0;function Px(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Dx(o,e){const t=new Ex,n=Cx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,a=new Nt,s=new Nt;function l(u,f){let h=0,m=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let d=0,p=0,_=0,b=0,v=0,M=0,y=0,A=0,C=0,x=0;u.sort(Px);const T=f!==!0?Math.PI:1;for(let k=0,z=u.length;k<z;k++){const I=u[k],R=I.color,W=I.intensity,J=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=R.r*W*T,m+=R.g*W*T,g+=R.b*W*T;else if(I.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],W);else if(I.isDirectionalLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const te=I.shadow,P=n.get(I);P.shadowBias=te.bias,P.shadowNormalBias=te.normalBias,P.shadowRadius=te.radius,P.shadowMapSize=te.mapSize,i.directionalShadow[d]=P,i.directionalShadowMap[d]=q,i.directionalShadowMatrix[d]=I.shadow.matrix,M++}i.directional[d]=H,d++}else if(I.isSpotLight){const H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(R).multiplyScalar(W*T),H.distance=J,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[_]=H;const te=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,te.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[_]=te.matrix,I.castShadow){const P=n.get(I);P.shadowBias=te.bias,P.shadowNormalBias=te.normalBias,P.shadowRadius=te.radius,P.shadowMapSize=te.mapSize,i.spotShadow[_]=P,i.spotShadowMap[_]=q,A++}_++}else if(I.isRectAreaLight){const H=t.get(I);H.color.copy(R).multiplyScalar(W),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=H,b++}else if(I.isPointLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*T),H.distance=I.distance,H.decay=I.decay,I.castShadow){const te=I.shadow,P=n.get(I);P.shadowBias=te.bias,P.shadowNormalBias=te.normalBias,P.shadowRadius=te.radius,P.shadowMapSize=te.mapSize,P.shadowCameraNear=te.camera.near,P.shadowCameraFar=te.camera.far,i.pointShadow[p]=P,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=I.shadow.matrix,y++}i.point[p]=H,p++}else if(I.isHemisphereLight){const H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(W*T),H.groundColor.copy(I.groundColor).multiplyScalar(W*T),i.hemi[v]=H,v++}}b>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==v||D.numDirectionalShadows!==M||D.numPointShadows!==y||D.numSpotShadows!==A||D.numSpotMaps!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=b,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,D.directionalLength=d,D.pointLength=p,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=v,D.numDirectionalShadows=M,D.numPointShadows=y,D.numSpotShadows=A,D.numSpotMaps=C,i.version=Ax++)}function c(u,f){let h=0,m=0,g=0,d=0,p=0;const _=f.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const M=u[b];if(M.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),h++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),s.identity(),a.copy(M.matrixWorld),a.premultiply(_),s.extractRotation(a),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),d++}else if(M.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function nf(o,e){const t=new Dx(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function s(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function Lx(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new nf(o,e),t.set(r,[l])):a>=s.length?(l=new nf(o,e),s.push(l)):l=s[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Rx extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ix extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new j,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ox=`uniform sampler2D shadow_pass;
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
}`;function zx(o,e,t){let n=new gh;const i=new pt,r=new pt,a=new Bt,s=new Rx({depthPacking:Wp}),l=new Ix,c={},u=t.maxTextureSize,f={0:Hn,1:wr,2:gc},h=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Fx,fragmentShader:Ox}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ci;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new zi(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kf,this.render=function(M,y,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const C=o.getRenderTarget(),x=o.getActiveCubeFace(),T=o.getActiveMipmapLevel(),D=o.state;D.setBlending(Wi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let k=0,z=M.length;k<z;k++){const I=M[k],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const W=R.getFrameExtents();if(i.multiply(W),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,R.mapSize.y=r.y)),R.map===null){const q=this.type!==Os?{minFilter:on,magFilter:on}:{};R.map=new Cr(i.x,i.y,q),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const J=R.getViewportCount();for(let q=0;q<J;q++){const H=R.getViewport(q);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),D.viewport(a),R.updateMatrices(I,q),n=R.getFrustum(),v(y,A,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===Os&&_(R,A),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,T)};function _(M,y){const A=e.update(d);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Cr(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(y,null,A,h,d,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(y,null,A,m,d,null)}function b(M,y,A,C,x,T){let D=null;const k=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(k!==void 0)D=k;else if(D=A.isPointLight===!0?l:s,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const z=D.uuid,I=y.uuid;let R=c[z];R===void 0&&(R={},c[z]=R);let W=R[I];W===void 0&&(W=D.clone(),R[I]=W),D=W}return D.visible=y.visible,D.wireframe=y.wireframe,T===Os?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:f[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=C,D.farDistance=x),D}function v(M,y,A,C,x){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===Os)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const k=e.update(M),z=M.material;if(Array.isArray(z)){const I=k.groups;for(let R=0,W=I.length;R<W;R++){const J=I[R],q=z[J.materialIndex];if(q&&q.visible){const H=b(M,q,C,A.near,A.far,x);o.renderBufferDirect(A,null,k,H,M,J)}}}else if(z.visible){const I=b(M,z,C,A.near,A.far,x);o.renderBufferDirect(A,null,k,I,M,null)}}const D=M.children;for(let k=0,z=D.length;k<z;k++)v(D[k],y,A,C,x)}}function Nx(o,e,t){const n=t.isWebGL2;function i(){let L=!1;const K=new Bt;let se=null;const ue=new Bt(0,0,0,0);return{setMask:function(de){se!==de&&!L&&(o.colorMask(de,de,de,de),se=de)},setLocked:function(de){L=de},setClear:function(de,Ge,ot,Qe,At){At===!0&&(de*=Qe,Ge*=Qe,ot*=Qe),K.set(de,Ge,ot,Qe),ue.equals(K)===!1&&(o.clearColor(de,Ge,ot,Qe),ue.copy(K))},reset:function(){L=!1,se=null,ue.set(-1,0,0,0)}}}function r(){let L=!1,K=null,se=null,ue=null;return{setTest:function(de){de?Le(2929):me(2929)},setMask:function(de){K!==de&&!L&&(o.depthMask(de),K=de)},setFunc:function(de){if(se!==de){switch(de){case hp:o.depthFunc(512);break;case dp:o.depthFunc(519);break;case pp:o.depthFunc(513);break;case Ol:o.depthFunc(515);break;case mp:o.depthFunc(514);break;case gp:o.depthFunc(518);break;case _p:o.depthFunc(516);break;case xp:o.depthFunc(517);break;default:o.depthFunc(515)}se=de}},setLocked:function(de){L=de},setClear:function(de){ue!==de&&(o.clearDepth(de),ue=de)},reset:function(){L=!1,K=null,se=null,ue=null}}}function a(){let L=!1,K=null,se=null,ue=null,de=null,Ge=null,ot=null,Qe=null,At=null;return{setTest:function(ve){L||(ve?Le(2960):me(2960))},setMask:function(ve){K!==ve&&!L&&(o.stencilMask(ve),K=ve)},setFunc:function(ve,Ae,Ve){(se!==ve||ue!==Ae||de!==Ve)&&(o.stencilFunc(ve,Ae,Ve),se=ve,ue=Ae,de=Ve)},setOp:function(ve,Ae,Ve){(Ge!==ve||ot!==Ae||Qe!==Ve)&&(o.stencilOp(ve,Ae,Ve),Ge=ve,ot=Ae,Qe=Ve)},setLocked:function(ve){L=ve},setClear:function(ve){At!==ve&&(o.clearStencil(ve),At=ve)},reset:function(){L=!1,K=null,se=null,ue=null,de=null,Ge=null,ot=null,Qe=null,At=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,d=[],p=null,_=!1,b=null,v=null,M=null,y=null,A=null,C=null,x=null,T=!1,D=null,k=null,z=null,I=null,R=null;const W=o.getParameter(35661);let J=!1,q=0;const H=o.getParameter(7938);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=q>=2);let te=null,P={};const B=o.getParameter(3088),$=o.getParameter(2978),oe=new Bt().fromArray(B),ie=new Bt().fromArray($);function fe(L,K,se){const ue=new Uint8Array(4),de=o.createTexture();o.bindTexture(L,de),o.texParameteri(L,10241,9728),o.texParameteri(L,10240,9728);for(let Ge=0;Ge<se;Ge++)o.texImage2D(K+Ge,0,6408,1,1,0,6408,5121,ue);return de}const Z={};Z[3553]=fe(3553,3553,1),Z[34067]=fe(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(2929),l.setFunc(Ol),rt(!1),G(Yc),Le(2884),Xe(Wi);function Le(L){h[L]!==!0&&(o.enable(L),h[L]=!0)}function me(L){h[L]!==!1&&(o.disable(L),h[L]=!1)}function Ce(L,K){return m[L]!==K?(o.bindFramebuffer(L,K),m[L]=K,n&&(L===36009&&(m[36160]=K),L===36160&&(m[36009]=K)),!0):!1}function xe(L,K){let se=d,ue=!1;if(L)if(se=g.get(K),se===void 0&&(se=[],g.set(K,se)),L.isWebGLMultipleRenderTargets){const de=L.texture;if(se.length!==de.length||se[0]!==36064){for(let Ge=0,ot=de.length;Ge<ot;Ge++)se[Ge]=36064+Ge;se.length=de.length,ue=!0}}else se[0]!==36064&&(se[0]=36064,ue=!0);else se[0]!==1029&&(se[0]=1029,ue=!0);ue&&(t.isWebGL2?o.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function ze(L){return p!==L?(o.useProgram(L),p=L,!0):!1}const De={[Kr]:32774,[tp]:32778,[np]:32779};if(n)De[Kc]=32775,De[Jc]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(De[Kc]=L.MIN_EXT,De[Jc]=L.MAX_EXT)}const he={[ip]:0,[rp]:1,[sp]:768,[Jf]:770,[fp]:776,[cp]:774,[ap]:772,[op]:769,[Qf]:771,[up]:775,[lp]:773};function Xe(L,K,se,ue,de,Ge,ot,Qe){if(L===Wi){_===!0&&(me(3042),_=!1);return}if(_===!1&&(Le(3042),_=!0),L!==ep){if(L!==b||Qe!==T){if((v!==Kr||A!==Kr)&&(o.blendEquation(32774),v=Kr,A=Kr),Qe)switch(L){case rs:o.blendFuncSeparate(1,771,1,771);break;case $c:o.blendFunc(1,1);break;case jc:o.blendFuncSeparate(0,769,0,1);break;case Zc:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case rs:o.blendFuncSeparate(770,771,1,771);break;case $c:o.blendFunc(770,1);break;case jc:o.blendFuncSeparate(0,769,0,1);break;case Zc:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,y=null,C=null,x=null,b=L,T=Qe}return}de=de||K,Ge=Ge||se,ot=ot||ue,(K!==v||de!==A)&&(o.blendEquationSeparate(De[K],De[de]),v=K,A=de),(se!==M||ue!==y||Ge!==C||ot!==x)&&(o.blendFuncSeparate(he[se],he[ue],he[Ge],he[ot]),M=se,y=ue,C=Ge,x=ot),b=L,T=!1}function it(L,K){L.side===gc?me(2884):Le(2884);let se=L.side===Hn;K&&(se=!se),rt(se),L.blending===rs&&L.transparent===!1?Xe(Wi):Xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),s.setMask(L.colorWrite);const ue=L.stencilWrite;c.setTest(ue),ue&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Le(32926):me(32926)}function rt(L){D!==L&&(L?o.frontFace(2304):o.frontFace(2305),D=L)}function G(L){L!==Kd?(Le(2884),L!==k&&(L===Yc?o.cullFace(1029):L===Jd?o.cullFace(1028):o.cullFace(1032))):me(2884),k=L}function tt(L){L!==z&&(J&&o.lineWidth(L),z=L)}function ee(L,K,se){L?(Le(32823),(I!==K||R!==se)&&(o.polygonOffset(K,se),I=K,R=se)):me(32823)}function N(L){L?Le(3089):me(3089)}function ae(L){L===void 0&&(L=33984+W-1),te!==L&&(o.activeTexture(L),te=L)}function w(L,K,se){se===void 0&&(te===null?se=33984+W-1:se=te);let ue=P[se];ue===void 0&&(ue={type:void 0,texture:void 0},P[se]=ue),(ue.type!==L||ue.texture!==K)&&(te!==se&&(o.activeTexture(se),te=se),o.bindTexture(L,K||Z[L]),ue.type=L,ue.texture=K)}function S(){const L=P[te];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function U(){try{o.compressedTexImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{o.compressedTexImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{o.texSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{o.texSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{o.texStorage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{o.texStorage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{o.texImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{o.texImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(L){oe.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function we(L){ie.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),ie.copy(L))}function We(L,K){let se=f.get(K);se===void 0&&(se=new WeakMap,f.set(K,se));let ue=se.get(L);ue===void 0&&(ue=o.getUniformBlockIndex(K,L.name),se.set(L,ue))}function Je(L,K){const ue=f.get(K).get(L);u.get(K)!==ue&&(o.uniformBlockBinding(K,ue,L.__bindingPointIndex),u.set(K,ue))}function st(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},te=null,P={},m={},g=new WeakMap,d=[],p=null,_=!1,b=null,v=null,M=null,y=null,A=null,C=null,x=null,T=!1,D=null,k=null,z=null,I=null,R=null,oe.set(0,0,o.canvas.width,o.canvas.height),ie.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Le,disable:me,bindFramebuffer:Ce,drawBuffers:xe,useProgram:ze,setBlending:Xe,setMaterial:it,setFlipSided:rt,setCullFace:G,setLineWidth:tt,setPolygonOffset:ee,setScissorTest:N,activeTexture:ae,bindTexture:w,unbindTexture:S,compressedTexImage2D:U,compressedTexImage3D:Q,texImage2D:ne,texImage3D:be,updateUBOMapping:We,uniformBlockBinding:Je,texStorage2D:V,texStorage3D:Se,texSubImage2D:le,texSubImage3D:re,compressedTexSubImage2D:Me,compressedTexSubImage3D:ce,scissor:Ee,viewport:we,reset:st}}function Ux(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,S){return _?new OffscreenCanvas(w,S):ya("canvas")}function v(w,S,U,Q){let le=1;if((w.width>Q||w.height>Q)&&(le=Q/Math.max(w.width,w.height)),le<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const re=S?Gl:Math.floor,Me=re(le*w.width),ce=re(le*w.height);d===void 0&&(d=b(Me,ce));const V=U?b(Me,ce):d;return V.width=Me,V.height=ce,V.getContext("2d").drawImage(w,0,0,Me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Me+"x"+ce+")."),V}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function M(w){return wu(w.width)&&wu(w.height)}function y(w){return s?!1:w.wrapS!==Kn||w.wrapT!==Kn||w.minFilter!==on&&w.minFilter!==Un}function A(w,S){return w.generateMipmaps&&S&&w.minFilter!==on&&w.minFilter!==Un}function C(w){o.generateMipmap(w)}function x(w,S,U,Q,le=!1){if(s===!1)return S;if(w!==null){if(o[w]!==void 0)return o[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=S;return S===6403&&(U===5126&&(re=33326),U===5131&&(re=33325),U===5121&&(re=33321)),S===33319&&(U===5126&&(re=33328),U===5131&&(re=33327),U===5121&&(re=33323)),S===6408&&(U===5126&&(re=34836),U===5131&&(re=34842),U===5121&&(re=Q===mt&&le===!1?35907:32856),U===32819&&(re=32854),U===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function T(w,S,U){return A(w,U)===!0||w.isFramebufferTexture&&w.minFilter!==on&&w.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function D(w){return w===on||w===Qc||w===Va?9728:9729}function k(w){const S=w.target;S.removeEventListener("dispose",k),I(S),S.isVideoTexture&&g.delete(S)}function z(w){const S=w.target;S.removeEventListener("dispose",z),W(S)}function I(w){const S=n.get(w);if(S.__webglInit===void 0)return;const U=w.source,Q=p.get(U);if(Q){const le=Q[S.__cacheKey];le.usedTimes--,le.usedTimes===0&&R(w),Object.keys(Q).length===0&&p.delete(U)}n.remove(w)}function R(w){const S=n.get(w);o.deleteTexture(S.__webglTexture);const U=w.source,Q=p.get(U);delete Q[S.__cacheKey],a.memory.textures--}function W(w){const S=w.texture,U=n.get(w),Q=n.get(S);if(Q.__webglTexture!==void 0&&(o.deleteTexture(Q.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)o.deleteFramebuffer(U.__webglFramebuffer[le]),U.__webglDepthbuffer&&o.deleteRenderbuffer(U.__webglDepthbuffer[le]);else{if(o.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&o.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&o.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let le=0;le<U.__webglColorRenderbuffer.length;le++)U.__webglColorRenderbuffer[le]&&o.deleteRenderbuffer(U.__webglColorRenderbuffer[le]);U.__webglDepthRenderbuffer&&o.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let le=0,re=S.length;le<re;le++){const Me=n.get(S[le]);Me.__webglTexture&&(o.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(S[le])}n.remove(S),n.remove(w)}let J=0;function q(){J=0}function H(){const w=J;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),J+=1,w}function te(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.encoding),S.join()}function P(w,S){const U=n.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(U,w,S);return}}t.bindTexture(3553,U.__webglTexture,33984+S)}function B(w,S){const U=n.get(w);if(w.version>0&&U.__version!==w.version){me(U,w,S);return}t.bindTexture(35866,U.__webglTexture,33984+S)}function $(w,S){const U=n.get(w);if(w.version>0&&U.__version!==w.version){me(U,w,S);return}t.bindTexture(32879,U.__webglTexture,33984+S)}function oe(w,S){const U=n.get(w);if(w.version>0&&U.__version!==w.version){Ce(U,w,S);return}t.bindTexture(34067,U.__webglTexture,33984+S)}const ie={[Ul]:10497,[Kn]:33071,[kl]:33648},fe={[on]:9728,[Qc]:9984,[Va]:9986,[Un]:9729,[Ep]:9985,[ro]:9987};function Z(w,S,U){if(U?(o.texParameteri(w,10242,ie[S.wrapS]),o.texParameteri(w,10243,ie[S.wrapT]),(w===32879||w===35866)&&o.texParameteri(w,32882,ie[S.wrapR]),o.texParameteri(w,10240,fe[S.magFilter]),o.texParameteri(w,10241,fe[S.minFilter])):(o.texParameteri(w,10242,33071),o.texParameteri(w,10243,33071),(w===32879||w===35866)&&o.texParameteri(w,32882,33071),(S.wrapS!==Kn||S.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(w,10240,D(S.magFilter)),o.texParameteri(w,10241,D(S.minFilter)),S.minFilter!==on&&S.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===on||S.minFilter!==Va&&S.minFilter!==ro||S.type===fr&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===so&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Le(w,S){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",k));const Q=S.source;let le=p.get(Q);le===void 0&&(le={},p.set(Q,le));const re=te(S);if(re!==w.__cacheKey){le[re]===void 0&&(le[re]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,U=!0),le[re].usedTimes++;const Me=le[w.__cacheKey];Me!==void 0&&(le[w.__cacheKey].usedTimes--,Me.usedTimes===0&&R(S)),w.__cacheKey=re,w.__webglTexture=le[re].texture}return U}function me(w,S,U){let Q=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=35866),S.isData3DTexture&&(Q=32879);const le=Le(w,S),re=S.source;t.bindTexture(Q,w.__webglTexture,33984+U);const Me=n.get(re);if(re.version!==Me.__version||le===!0){t.activeTexture(33984+U),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const ce=y(S)&&M(S.image)===!1;let V=v(S.image,ce,!1,u);V=ae(S,V);const Se=M(V)||s,ne=r.convert(S.format,S.encoding);let be=r.convert(S.type),Ee=x(S.internalFormat,ne,be,S.encoding,S.isVideoTexture);Z(Q,S,Se);let we;const We=S.mipmaps,Je=s&&S.isVideoTexture!==!0,st=Me.__version===void 0||le===!0,L=T(S,V,Se);if(S.isDepthTexture)Ee=6402,s?S.type===fr?Ee=36012:S.type===ur?Ee=33190:S.type===ss?Ee=35056:Ee=33189:S.type===fr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===pr&&Ee===6402&&S.type!==nh&&S.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ur,be=r.convert(S.type)),S.format===ps&&Ee===6402&&(Ee=34041,S.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ss,be=r.convert(S.type))),st&&(Je?t.texStorage2D(3553,1,Ee,V.width,V.height):t.texImage2D(3553,0,Ee,V.width,V.height,0,ne,be,null));else if(S.isDataTexture)if(We.length>0&&Se){Je&&st&&t.texStorage2D(3553,L,Ee,We[0].width,We[0].height);for(let K=0,se=We.length;K<se;K++)we=We[K],Je?t.texSubImage2D(3553,K,0,0,we.width,we.height,ne,be,we.data):t.texImage2D(3553,K,Ee,we.width,we.height,0,ne,be,we.data);S.generateMipmaps=!1}else Je?(st&&t.texStorage2D(3553,L,Ee,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,ne,be,V.data)):t.texImage2D(3553,0,Ee,V.width,V.height,0,ne,be,V.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Je&&st&&t.texStorage3D(35866,L,Ee,We[0].width,We[0].height,V.depth);for(let K=0,se=We.length;K<se;K++)we=We[K],S.format!==Jn?ne!==null?Je?t.compressedTexSubImage3D(35866,K,0,0,0,we.width,we.height,V.depth,ne,we.data,0,0):t.compressedTexImage3D(35866,K,Ee,we.width,we.height,V.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(35866,K,0,0,0,we.width,we.height,V.depth,ne,be,we.data):t.texImage3D(35866,K,Ee,we.width,we.height,V.depth,0,ne,be,we.data)}else{Je&&st&&t.texStorage2D(3553,L,Ee,We[0].width,We[0].height);for(let K=0,se=We.length;K<se;K++)we=We[K],S.format!==Jn?ne!==null?Je?t.compressedTexSubImage2D(3553,K,0,0,we.width,we.height,ne,we.data):t.compressedTexImage2D(3553,K,Ee,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(3553,K,0,0,we.width,we.height,ne,be,we.data):t.texImage2D(3553,K,Ee,we.width,we.height,0,ne,be,we.data)}else if(S.isDataArrayTexture)Je?(st&&t.texStorage3D(35866,L,Ee,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,ne,be,V.data)):t.texImage3D(35866,0,Ee,V.width,V.height,V.depth,0,ne,be,V.data);else if(S.isData3DTexture)Je?(st&&t.texStorage3D(32879,L,Ee,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,ne,be,V.data)):t.texImage3D(32879,0,Ee,V.width,V.height,V.depth,0,ne,be,V.data);else if(S.isFramebufferTexture){if(st)if(Je)t.texStorage2D(3553,L,Ee,V.width,V.height);else{let K=V.width,se=V.height;for(let ue=0;ue<L;ue++)t.texImage2D(3553,ue,Ee,K,se,0,ne,be,null),K>>=1,se>>=1}}else if(We.length>0&&Se){Je&&st&&t.texStorage2D(3553,L,Ee,We[0].width,We[0].height);for(let K=0,se=We.length;K<se;K++)we=We[K],Je?t.texSubImage2D(3553,K,0,0,ne,be,we):t.texImage2D(3553,K,Ee,ne,be,we);S.generateMipmaps=!1}else Je?(st&&t.texStorage2D(3553,L,Ee,V.width,V.height),t.texSubImage2D(3553,0,0,0,ne,be,V)):t.texImage2D(3553,0,Ee,ne,be,V);A(S,Se)&&C(Q),Me.__version=re.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Ce(w,S,U){if(S.image.length!==6)return;const Q=Le(w,S),le=S.source;t.bindTexture(34067,w.__webglTexture,33984+U);const re=n.get(le);if(le.version!==re.__version||Q===!0){t.activeTexture(33984+U),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,V=[];for(let K=0;K<6;K++)!Me&&!ce?V[K]=v(S.image[K],!1,!0,c):V[K]=ce?S.image[K].image:S.image[K],V[K]=ae(S,V[K]);const Se=V[0],ne=M(Se)||s,be=r.convert(S.format,S.encoding),Ee=r.convert(S.type),we=x(S.internalFormat,be,Ee,S.encoding),We=s&&S.isVideoTexture!==!0,Je=re.__version===void 0||Q===!0;let st=T(S,Se,ne);Z(34067,S,ne);let L;if(Me){We&&Je&&t.texStorage2D(34067,st,we,Se.width,Se.height);for(let K=0;K<6;K++){L=V[K].mipmaps;for(let se=0;se<L.length;se++){const ue=L[se];S.format!==Jn?be!==null?We?t.compressedTexSubImage2D(34069+K,se,0,0,ue.width,ue.height,be,ue.data):t.compressedTexImage2D(34069+K,se,we,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(34069+K,se,0,0,ue.width,ue.height,be,Ee,ue.data):t.texImage2D(34069+K,se,we,ue.width,ue.height,0,be,Ee,ue.data)}}}else{L=S.mipmaps,We&&Je&&(L.length>0&&st++,t.texStorage2D(34067,st,we,V[0].width,V[0].height));for(let K=0;K<6;K++)if(ce){We?t.texSubImage2D(34069+K,0,0,0,V[K].width,V[K].height,be,Ee,V[K].data):t.texImage2D(34069+K,0,we,V[K].width,V[K].height,0,be,Ee,V[K].data);for(let se=0;se<L.length;se++){const de=L[se].image[K].image;We?t.texSubImage2D(34069+K,se+1,0,0,de.width,de.height,be,Ee,de.data):t.texImage2D(34069+K,se+1,we,de.width,de.height,0,be,Ee,de.data)}}else{We?t.texSubImage2D(34069+K,0,0,0,be,Ee,V[K]):t.texImage2D(34069+K,0,we,be,Ee,V[K]);for(let se=0;se<L.length;se++){const ue=L[se];We?t.texSubImage2D(34069+K,se+1,0,0,be,Ee,ue.image[K]):t.texImage2D(34069+K,se+1,we,be,Ee,ue.image[K])}}}A(S,ne)&&C(34067),re.__version=le.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function xe(w,S,U,Q,le){const re=r.convert(U.format,U.encoding),Me=r.convert(U.type),ce=x(U.internalFormat,re,Me,U.encoding);n.get(S).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,ce,S.width,S.height,S.depth,0,re,Me,null):t.texImage2D(le,0,ce,S.width,S.height,0,re,Me,null)),t.bindFramebuffer(36160,w),ee(S)?h.framebufferTexture2DMultisampleEXT(36160,Q,le,n.get(U).__webglTexture,0,tt(S)):(le===3553||le>=34069&&le<=34074)&&o.framebufferTexture2D(36160,Q,le,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(w,S,U){if(o.bindRenderbuffer(36161,w),S.depthBuffer&&!S.stencilBuffer){let Q=33189;if(U||ee(S)){const le=S.depthTexture;le&&le.isDepthTexture&&(le.type===fr?Q=36012:le.type===ur&&(Q=33190));const re=tt(S);ee(S)?h.renderbufferStorageMultisampleEXT(36161,re,Q,S.width,S.height):o.renderbufferStorageMultisample(36161,re,Q,S.width,S.height)}else o.renderbufferStorage(36161,Q,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,w)}else if(S.depthBuffer&&S.stencilBuffer){const Q=tt(S);U&&ee(S)===!1?o.renderbufferStorageMultisample(36161,Q,35056,S.width,S.height):ee(S)?h.renderbufferStorageMultisampleEXT(36161,Q,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,w)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let le=0;le<Q.length;le++){const re=Q[le],Me=r.convert(re.format,re.encoding),ce=r.convert(re.type),V=x(re.internalFormat,Me,ce,re.encoding),Se=tt(S);U&&ee(S)===!1?o.renderbufferStorageMultisample(36161,Se,V,S.width,S.height):ee(S)?h.renderbufferStorageMultisampleEXT(36161,Se,V,S.width,S.height):o.renderbufferStorage(36161,V,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function De(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);const Q=n.get(S.depthTexture).__webglTexture,le=tt(S);if(S.depthTexture.format===pr)ee(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,le):o.framebufferTexture2D(36160,36096,3553,Q,0);else if(S.depthTexture.format===ps)ee(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,le):o.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function he(w){const S=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");De(S.__webglFramebuffer,w)}else if(U){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=o.createRenderbuffer(),ze(S.__webglDepthbuffer[Q],w,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),ze(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Xe(w,S,U){const Q=n.get(w);S!==void 0&&xe(Q.__webglFramebuffer,w,w.texture,36064,3553),U!==void 0&&he(w)}function it(w){const S=w.texture,U=n.get(w),Q=n.get(S);w.addEventListener("dispose",z),w.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=S.version,a.memory.textures++);const le=w.isWebGLCubeRenderTarget===!0,re=w.isWebGLMultipleRenderTargets===!0,Me=M(w)||s;if(le){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)U.__webglFramebuffer[ce]=o.createFramebuffer()}else{if(U.__webglFramebuffer=o.createFramebuffer(),re)if(i.drawBuffers){const ce=w.texture;for(let V=0,Se=ce.length;V<Se;V++){const ne=n.get(ce[V]);ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&w.samples>0&&ee(w)===!1){const ce=re?S:[S];U.__webglMultisampledFramebuffer=o.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let V=0;V<ce.length;V++){const Se=ce[V];U.__webglColorRenderbuffer[V]=o.createRenderbuffer(),o.bindRenderbuffer(36161,U.__webglColorRenderbuffer[V]);const ne=r.convert(Se.format,Se.encoding),be=r.convert(Se.type),Ee=x(Se.internalFormat,ne,be,Se.encoding,w.isXRRenderTarget===!0),we=tt(w);o.renderbufferStorageMultisample(36161,we,Ee,w.width,w.height),o.framebufferRenderbuffer(36160,36064+V,36161,U.__webglColorRenderbuffer[V])}o.bindRenderbuffer(36161,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=o.createRenderbuffer(),ze(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,Q.__webglTexture),Z(34067,S,Me);for(let ce=0;ce<6;ce++)xe(U.__webglFramebuffer[ce],w,S,36064,34069+ce);A(S,Me)&&C(34067),t.unbindTexture()}else if(re){const ce=w.texture;for(let V=0,Se=ce.length;V<Se;V++){const ne=ce[V],be=n.get(ne);t.bindTexture(3553,be.__webglTexture),Z(3553,ne,Me),xe(U.__webglFramebuffer,w,ne,36064+V,3553),A(ne,Me)&&C(3553)}t.unbindTexture()}else{let ce=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(s?ce=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,Q.__webglTexture),Z(ce,S,Me),xe(U.__webglFramebuffer,w,S,36064,ce),A(S,Me)&&C(ce),t.unbindTexture()}w.depthBuffer&&he(w)}function rt(w){const S=M(w)||s,U=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0,le=U.length;Q<le;Q++){const re=U[Q];if(A(re,S)){const Me=w.isWebGLCubeRenderTarget?34067:3553,ce=n.get(re).__webglTexture;t.bindTexture(Me,ce),C(Me),t.unbindTexture()}}}function G(w){if(s&&w.samples>0&&ee(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],U=w.width,Q=w.height;let le=16384;const re=[],Me=w.stencilBuffer?33306:36096,ce=n.get(w),V=w.isWebGLMultipleRenderTargets===!0;if(V)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,ce.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ce.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){re.push(36064+Se),w.depthBuffer&&re.push(Me);const ne=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ne===!1&&(w.depthBuffer&&(le|=256),w.stencilBuffer&&(le|=1024)),V&&o.framebufferRenderbuffer(36008,36064,36161,ce.__webglColorRenderbuffer[Se]),ne===!0&&(o.invalidateFramebuffer(36008,[Me]),o.invalidateFramebuffer(36009,[Me])),V){const be=n.get(S[Se]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,be,0)}o.blitFramebuffer(0,0,U,Q,0,0,U,Q,le,9728),m&&o.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Se,36161,ce.__webglColorRenderbuffer[Se]);const ne=n.get(S[Se]).__webglTexture;t.bindFramebuffer(36160,ce.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Se,3553,ne,0)}t.bindFramebuffer(36009,ce.__webglMultisampledFramebuffer)}}function tt(w){return Math.min(f,w.samples)}function ee(w){const S=n.get(w);return s&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function N(w){const S=a.render.frame;g.get(w)!==S&&(g.set(w,S),w.update())}function ae(w,S){const U=w.encoding,Q=w.format,le=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Bl||U!==Er&&(U===mt?s===!1?e.has("EXT_sRGB")===!0&&Q===Jn?(w.format=Bl,w.minFilter=Un,w.generateMipmaps=!1):S=sh.sRGBToLinear(S):(Q!==Jn||le!==Tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),S}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.setTexture2D=P,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=oe,this.rebindTextures=Xe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ee}function kx(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===Tr)return 5121;if(r===Dp)return 32819;if(r===Lp)return 32820;if(r===Cp)return 5120;if(r===Ap)return 5122;if(r===nh)return 5123;if(r===Pp)return 5124;if(r===ur)return 5125;if(r===fr)return 5126;if(r===so)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Rp)return 6406;if(r===Jn)return 6408;if(r===Fp)return 6409;if(r===Op)return 6410;if(r===pr)return 6402;if(r===ps)return 34041;if(r===Ip)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Bl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===zp)return 6403;if(r===Np)return 36244;if(r===Up)return 33319;if(r===kp)return 33320;if(r===Bp)return 36249;if(r===Wa||r===Ha||r===Xa||r===qa)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eu||r===tu||r===nu||r===iu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===eu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===iu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gp)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ru||r===su)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===ru)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===su)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ou||r===au||r===lu||r===cu||r===uu||r===fu||r===hu||r===du||r===pu||r===mu||r===gu||r===_u||r===xu||r===vu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===ou)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===au)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===du)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_u)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===yu)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ss?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Bx extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xo extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gx={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),_=this._getHandJoint(c,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Vx extends Ln{constructor(e,t,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:pr,u!==pr&&u!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pr&&(n=ur),n===void 0&&u===ps&&(n=ss),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1}}class Wx extends bs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],b=[],v=new Set,M=new Map,y=new kn;y.layers.enable(1),y.viewport=new Bt;const A=new kn;A.layers.enable(2),A.viewport=new Bt;const C=[y,A],x=new Bx;x.layers.enable(1),x.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let $=_[B];return $===void 0&&($=new vl,_[B]=$),$.getTargetRaySpace()},this.getControllerGrip=function(B){let $=_[B];return $===void 0&&($=new vl,_[B]=$),$.getGripSpace()},this.getHand=function(B){let $=_[B];return $===void 0&&($=new vl,_[B]=$),$.getHandSpace()};function k(B){const $=b.indexOf(B.inputSource);if($===-1)return;const oe=_[$];oe!==void 0&&oe.dispatchEvent({type:B.type,data:B.inputSource})}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",I);for(let B=0;B<_.length;B++){const $=b[B];$!==null&&(b[B]=null,_[B].disconnect($))}T=null,D=null,e.setRenderTarget(d),h=null,f=null,u=null,i=null,p=null,P.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:h}),p=new Cr(h.framebufferWidth,h.framebufferHeight,{format:Jn,type:Tr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let $=null,oe=null,ie=null;g.depth&&(ie=g.stencil?35056:33190,$=g.stencil?ps:pr,oe=g.stencil?ss:ur);const fe={colorFormat:32856,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(fe),i.updateRenderState({layers:[f]}),p=new Cr(f.textureWidth,f.textureHeight,{format:Jn,type:Tr,depthTexture:new Vx(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Z=e.properties.get(p);Z.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),P.setContext(i),P.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(B){for(let $=0;$<B.removed.length;$++){const oe=B.removed[$],ie=b.indexOf(oe);ie>=0&&(b[ie]=null,_[ie].disconnect(oe))}for(let $=0;$<B.added.length;$++){const oe=B.added[$];let ie=b.indexOf(oe);if(ie===-1){for(let Z=0;Z<_.length;Z++)if(Z>=b.length){b.push(oe),ie=Z;break}else if(b[Z]===null){b[Z]=oe,ie=Z;break}if(ie===-1)break}const fe=_[ie];fe&&fe.connect(oe)}}const R=new j,W=new j;function J(B,$,oe){R.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(oe.matrixWorld);const ie=R.distanceTo(W),fe=$.projectionMatrix.elements,Z=oe.projectionMatrix.elements,Le=fe[14]/(fe[10]-1),me=fe[14]/(fe[10]+1),Ce=(fe[9]+1)/fe[5],xe=(fe[9]-1)/fe[5],ze=(fe[8]-1)/fe[0],De=(Z[8]+1)/Z[0],he=Le*ze,Xe=Le*De,it=ie/(-ze+De),rt=it*-ze;$.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(rt),B.translateZ(it),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const G=Le+it,tt=me+it,ee=he-rt,N=Xe+(ie-rt),ae=Ce*me/tt*G,w=xe*me/tt*G;B.projectionMatrix.makePerspective(ee,N,ae,w,G,tt)}function q(B,$){$===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices($.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;x.near=A.near=y.near=B.near,x.far=A.far=y.far=B.far,(T!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,D=x.far);const $=B.parent,oe=x.cameras;q(x,$);for(let fe=0;fe<oe.length;fe++)q(oe[fe],$);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),B.matrix.copy(x.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const ie=B.children;for(let fe=0,Z=ie.length;fe<Z;fe++)ie[fe].updateMatrixWorld(!0);oe.length===2?J(x,y,A):x.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){f!==null&&(f.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)},this.getPlanes=function(){return v};let H=null;function te(B,$){if(c=$.getViewerPose(l||a),m=$,c!==null){const oe=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let ie=!1;oe.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let fe=0;fe<oe.length;fe++){const Z=oe[fe];let Le=null;if(h!==null)Le=h.getViewport(Z);else{const Ce=u.getViewSubImage(f,Z);Le=Ce.viewport,fe===0&&(e.setRenderTargetTextures(p,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(p))}let me=C[fe];me===void 0&&(me=new kn,me.layers.enable(fe),me.viewport=new Bt,C[fe]=me),me.matrix.fromArray(Z.transform.matrix),me.projectionMatrix.fromArray(Z.projectionMatrix),me.viewport.set(Le.x,Le.y,Le.width,Le.height),fe===0&&x.matrix.copy(me.matrix),ie===!0&&x.cameras.push(me)}}for(let oe=0;oe<_.length;oe++){const ie=b[oe],fe=_[oe];ie!==null&&fe!==void 0&&fe.update(ie,$,l||a)}if(H&&H(B,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let oe=null;for(const ie of v)$.detectedPlanes.has(ie)||(oe===null&&(oe=[]),oe.push(ie));if(oe!==null)for(const ie of oe)v.delete(ie),M.delete(ie),n.dispatchEvent({type:"planeremoved",data:ie});for(const ie of $.detectedPlanes)if(!v.has(ie))v.add(ie),M.set(ie,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ie});else{const fe=M.get(ie);ie.lastChangedTime>fe&&(M.set(ie,ie.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ie}))}}m=null}const P=new _h;P.setAnimationLoop(te),this.setAnimationLoop=function(B){H=B},this.dispose=function(){}}}function Hx(o,e){function t(d,p){p.color.getRGB(d.fogColor.value,dh(o)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,v)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,_,b):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Hn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Hn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const M=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,b){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=b*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Hn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Xx(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(b,v){const M=v.program;n.uniformBlockBinding(b,M)}function c(b,v){let M=i[b.id];M===void 0&&(g(b),M=u(b),i[b.id]=M,b.addEventListener("dispose",p));const y=v.program;n.updateUBOMapping(b,y);const A=e.render.frame;r[b.id]!==A&&(h(b),r[b.id]=A)}function u(b){const v=f();b.__bindingPointIndex=v;const M=o.createBuffer(),y=b.__size,A=b.usage;return o.bindBuffer(35345,M),o.bufferData(35345,y,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,M),M}function f(){for(let b=0;b<s;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const v=i[b.id],M=b.uniforms,y=b.__cache;o.bindBuffer(35345,v);for(let A=0,C=M.length;A<C;A++){const x=M[A];if(m(x,A,y)===!0){const T=x.__offset,D=Array.isArray(x.value)?x.value:[x.value];let k=0;for(let z=0;z<D.length;z++){const I=D[z],R=d(I);typeof I=="number"?(x.__data[0]=I,o.bufferSubData(35345,T+k,x.__data)):I.isMatrix3?(x.__data[0]=I.elements[0],x.__data[1]=I.elements[1],x.__data[2]=I.elements[2],x.__data[3]=I.elements[0],x.__data[4]=I.elements[3],x.__data[5]=I.elements[4],x.__data[6]=I.elements[5],x.__data[7]=I.elements[0],x.__data[8]=I.elements[6],x.__data[9]=I.elements[7],x.__data[10]=I.elements[8],x.__data[11]=I.elements[0]):(I.toArray(x.__data,k),k+=R.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,T,x.__data)}}o.bindBuffer(35345,null)}function m(b,v,M){const y=b.value;if(M[v]===void 0){if(typeof y=="number")M[v]=y;else{const A=Array.isArray(y)?y:[y],C=[];for(let x=0;x<A.length;x++)C.push(A[x].clone());M[v]=C}return!0}else if(typeof y=="number"){if(M[v]!==y)return M[v]=y,!0}else{const A=Array.isArray(M[v])?M[v]:[M[v]],C=Array.isArray(y)?y:[y];for(let x=0;x<A.length;x++){const T=A[x];if(T.equals(C[x])===!1)return T.copy(C[x]),!0}}return!1}function g(b){const v=b.uniforms;let M=0;const y=16;let A=0;for(let C=0,x=v.length;C<x;C++){const T=v[C],D={boundary:0,storage:0},k=Array.isArray(T.value)?T.value:[T.value];for(let z=0,I=k.length;z<I;z++){const R=k[z],W=d(R);D.boundary+=W.boundary,D.storage+=W.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,C>0){A=M%y;const z=y-A;A!==0&&z-D.boundary<0&&(M+=y-A,T.__offset=M)}M+=D.storage}return A=M%y,A>0&&(M+=y-A),b.__size=M,b.__cache={},this}function d(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){const v=b.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function _(){for(const b in i)o.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function qx(){const o=ya("canvas");return o.style.display="block",o}function Sh(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:qx(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Er,this.physicallyCorrectLights=!1,this.toneMapping=bi,this.toneMappingExposure=1;const d=this;let p=!1,_=0,b=0,v=null,M=-1,y=null;const A=new Bt,C=new Bt;let x=null,T=e.width,D=e.height,k=1,z=null,I=null;const R=new Bt(0,0,T,D),W=new Bt(0,0,T,D);let J=!1;const q=new gh;let H=!1,te=!1,P=null;const B=new Nt,$=new pt,oe=new j,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return v===null?k:1}let Z=t;function Le(E,F){for(let X=0;X<E.length;X++){const O=E[X],Y=e.getContext(O,F);if(Y!==null)return Y}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mc}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",We,!1),Z===null){const F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),Z=Le(F,E),Z===null)throw Le(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let me,Ce,xe,ze,De,he,Xe,it,rt,G,tt,ee,N,ae,w,S,U,Q,le,re,Me,ce,V,Se;function ne(){me=new i0(Z),Ce=new Z_(Z,me,o),me.init(Ce),ce=new kx(Z,me,Ce),xe=new Nx(Z,me,Ce),ze=new o0,De=new bx,he=new Ux(Z,me,xe,De,Ce,ce,ze),Xe=new J_(d),it=new n0(d),rt=new pm(Z,Ce),V=new $_(Z,me,rt,Ce),G=new r0(Z,rt,ze,V),tt=new u0(Z,G,rt,ze),le=new c0(Z,Ce,he),S=new K_(De),ee=new Sx(d,Xe,it,me,Ce,V,S),N=new Hx(d,De),ae=new Tx,w=new Lx(me,Ce),Q=new Y_(d,Xe,it,xe,tt,u,a),U=new zx(d,tt,Ce),Se=new Xx(Z,ze,Ce,xe),re=new j_(Z,me,ze,Ce),Me=new s0(Z,me,ze,Ce),ze.programs=ee.programs,d.capabilities=Ce,d.extensions=me,d.properties=De,d.renderLists=ae,d.shadowMap=U,d.state=xe,d.info=ze}ne();const be=new Wx(d,Z);this.xr=be,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const E=me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(T,D,!1))},this.getSize=function(E){return E.set(T,D)},this.setSize=function(E,F,X){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,D=F,e.width=Math.floor(E*k),e.height=Math.floor(F*k),X!==!1&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(T*k,D*k).floor()},this.setDrawingBufferSize=function(E,F,X){T=E,D=F,k=X,e.width=Math.floor(E*X),e.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,F,X,O){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,F,X,O),xe.viewport(A.copy(R).multiplyScalar(k).floor())},this.getScissor=function(E){return E.copy(W)},this.setScissor=function(E,F,X,O){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,F,X,O),xe.scissor(C.copy(W).multiplyScalar(k).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(E){xe.setScissorTest(J=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){I=E},this.getClearColor=function(E){return E.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(E=!0,F=!0,X=!0){let O=0;E&&(O|=16384),F&&(O|=256),X&&(O|=1024),Z.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",We,!1),ae.dispose(),w.dispose(),De.dispose(),Xe.dispose(),it.dispose(),tt.dispose(),V.dispose(),Se.dispose(),ee.dispose(),be.dispose(),be.removeEventListener("sessionstart",ue),be.removeEventListener("sessionend",de),P&&(P.dispose(),P=null),Ge.stop()};function Ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=ze.autoReset,F=U.enabled,X=U.autoUpdate,O=U.needsUpdate,Y=U.type;ne(),ze.autoReset=E,U.enabled=F,U.autoUpdate=X,U.needsUpdate=O,U.type=Y}function We(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Je(E){const F=E.target;F.removeEventListener("dispose",Je),st(F)}function st(E){L(E),De.remove(E)}function L(E){const F=De.get(E).programs;F!==void 0&&(F.forEach(function(X){ee.releaseProgram(X)}),E.isShaderMaterial&&ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,O,Y,_e){F===null&&(F=ie);const ye=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=Ue(E,F,X,O,Y);xe.setMaterial(O,ye);let Pe=X.index,Ne=1;O.wireframe===!0&&(Pe=G.getWireframeAttribute(X),Ne=2);const Be=X.drawRange,Fe=X.attributes.position;let je=Be.start*Ne,at=(Be.start+Be.count)*Ne;_e!==null&&(je=Math.max(je,_e.start*Ne),at=Math.min(at,(_e.start+_e.count)*Ne)),Pe!==null?(je=Math.max(je,0),at=Math.min(at,Pe.count)):Fe!=null&&(je=Math.max(je,0),at=Math.min(at,Fe.count));const kt=at-je;if(kt<0||kt===1/0)return;V.setup(Y,O,Oe,X,Pe);let On,et=re;if(Pe!==null&&(On=rt.get(Pe),et=Me,et.setIndex(On)),Y.isMesh)O.wireframe===!0?(xe.setLineWidth(O.wireframeLinewidth*fe()),et.setMode(1)):et.setMode(4);else if(Y.isLine){let Ie=O.linewidth;Ie===void 0&&(Ie=1),xe.setLineWidth(Ie*fe()),Y.isLineSegments?et.setMode(1):Y.isLineLoop?et.setMode(2):et.setMode(3)}else Y.isPoints?et.setMode(0):Y.isSprite&&et.setMode(4);if(Y.isInstancedMesh)et.renderInstances(je,kt,Y.count);else if(X.isInstancedBufferGeometry){const Ie=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,cn=Math.min(X.instanceCount,Ie);et.renderInstances(je,kt,cn)}else et.render(je,kt)},this.compile=function(E,F){function X(O,Y,_e){O.transparent===!0&&O.side===To?(O.side=Hn,O.needsUpdate=!0,Ve(O,Y,_e),O.side=wr,O.needsUpdate=!0,Ve(O,Y,_e),O.side=To):Ve(O,Y,_e)}h=w.get(E),h.init(),g.push(h),E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights(d.physicallyCorrectLights),E.traverse(function(O){const Y=O.material;if(Y)if(Array.isArray(Y))for(let _e=0;_e<Y.length;_e++){const ye=Y[_e];X(ye,E,O)}else X(Y,E,O)}),g.pop(),h=null};let K=null;function se(E){K&&K(E)}function ue(){Ge.stop()}function de(){Ge.start()}const Ge=new _h;Ge.setAnimationLoop(se),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(E){K=E,be.setAnimationLoop(E),E===null?Ge.stop():Ge.start()},be.addEventListener("sessionstart",ue),be.addEventListener("sessionend",de),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(F),F=be.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,F,v),h=w.get(E,g.length),h.init(),g.push(h),B.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(B),te=this.localClippingEnabled,H=S.init(this.clippingPlanes,te,F),f=ae.get(E,m.length),f.init(),m.push(f),ot(E,F,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(z,I),H===!0&&S.beginShadows();const X=h.state.shadowsArray;if(U.render(X,E,F),H===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(f,E),h.setupLights(d.physicallyCorrectLights),F.isArrayCamera){const O=F.cameras;for(let Y=0,_e=O.length;Y<_e;Y++){const ye=O[Y];Qe(f,E,ye,ye.viewport)}}else Qe(f,E,F);v!==null&&(he.updateMultisampleRenderTarget(v),he.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(d,E,F),V.resetDefaultState(),M=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function ot(E,F,X,O){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){O&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(B);const ye=tt.update(E),Oe=E.material;Oe.visible&&f.push(E,ye,Oe,X,oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ze.render.frame&&(E.skeleton.update(),E.skeleton.frame=ze.render.frame),!E.frustumCulled||q.intersectsObject(E))){O&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(B);const ye=tt.update(E),Oe=E.material;if(Array.isArray(Oe)){const Pe=ye.groups;for(let Ne=0,Be=Pe.length;Ne<Be;Ne++){const Fe=Pe[Ne],je=Oe[Fe.materialIndex];je&&je.visible&&f.push(E,ye,je,X,oe.z,Fe)}}else Oe.visible&&f.push(E,ye,Oe,X,oe.z,null)}}const _e=E.children;for(let ye=0,Oe=_e.length;ye<Oe;ye++)ot(_e[ye],F,X,O)}function Qe(E,F,X,O){const Y=E.opaque,_e=E.transmissive,ye=E.transparent;h.setupLightsView(X),_e.length>0&&At(Y,F,X),O&&xe.viewport(A.copy(O)),Y.length>0&&ve(Y,F,X),_e.length>0&&ve(_e,F,X),ye.length>0&&ve(ye,F,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function At(E,F,X){const O=Ce.isWebGL2;P===null&&(P=new Cr(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?so:Tr,minFilter:ro,samples:O&&r===!0?4:0})),d.getDrawingBufferSize($),O?P.setSize($.x,$.y):P.setSize(Gl($.x),Gl($.y));const Y=d.getRenderTarget();d.setRenderTarget(P),d.clear();const _e=d.toneMapping;d.toneMapping=bi,ve(E,F,X),d.toneMapping=_e,he.updateMultisampleRenderTarget(P),he.updateRenderTargetMipmap(P),d.setRenderTarget(Y)}function ve(E,F,X){const O=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,_e=E.length;Y<_e;Y++){const ye=E[Y],Oe=ye.object,Pe=ye.geometry,Ne=O===null?ye.material:O,Be=ye.group;Oe.layers.test(X.layers)&&Ae(Oe,F,X,Pe,Ne,Be)}}function Ae(E,F,X,O,Y,_e){E.onBeforeRender(d,F,X,O,Y,_e),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(d,F,X,O,E,_e),Y.transparent===!0&&Y.side===To?(Y.side=Hn,Y.needsUpdate=!0,d.renderBufferDirect(X,F,O,Y,E,_e),Y.side=wr,Y.needsUpdate=!0,d.renderBufferDirect(X,F,O,Y,E,_e),Y.side=To):d.renderBufferDirect(X,F,O,Y,E,_e),E.onAfterRender(d,F,X,O,Y,_e)}function Ve(E,F,X){F.isScene!==!0&&(F=ie);const O=De.get(E),Y=h.state.lights,_e=h.state.shadowsArray,ye=Y.state.version,Oe=ee.getParameters(E,Y.state,_e,F,X),Pe=ee.getProgramCacheKey(Oe);let Ne=O.programs;O.environment=E.isMeshStandardMaterial?F.environment:null,O.fog=F.fog,O.envMap=(E.isMeshStandardMaterial?it:Xe).get(E.envMap||O.environment),Ne===void 0&&(E.addEventListener("dispose",Je),Ne=new Map,O.programs=Ne);let Be=Ne.get(Pe);if(Be!==void 0){if(O.currentProgram===Be&&O.lightsStateVersion===ye)return ge(E,Oe),Be}else Oe.uniforms=ee.getUniforms(E),E.onBuild(X,Oe,d),E.onBeforeCompile(Oe,d),Be=ee.acquireProgram(Oe,Pe),Ne.set(Pe,Be),O.uniforms=Oe.uniforms;const Fe=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=S.uniform),ge(E,Oe),O.needsLights=ke(E),O.lightsStateVersion=ye,O.needsLights&&(Fe.ambientLightColor.value=Y.state.ambient,Fe.lightProbe.value=Y.state.probe,Fe.directionalLights.value=Y.state.directional,Fe.directionalLightShadows.value=Y.state.directionalShadow,Fe.spotLights.value=Y.state.spot,Fe.spotLightShadows.value=Y.state.spotShadow,Fe.rectAreaLights.value=Y.state.rectArea,Fe.ltc_1.value=Y.state.rectAreaLTC1,Fe.ltc_2.value=Y.state.rectAreaLTC2,Fe.pointLights.value=Y.state.point,Fe.pointLightShadows.value=Y.state.pointShadow,Fe.hemisphereLights.value=Y.state.hemi,Fe.directionalShadowMap.value=Y.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Fe.spotShadowMap.value=Y.state.spotShadowMap,Fe.spotLightMatrix.value=Y.state.spotLightMatrix,Fe.spotLightMap.value=Y.state.spotLightMap,Fe.pointShadowMap.value=Y.state.pointShadowMap,Fe.pointShadowMatrix.value=Y.state.pointShadowMatrix);const je=Be.getUniforms(),at=ua.seqWithValue(je.seq,Fe);return O.currentProgram=Be,O.uniformsList=at,Be}function ge(E,F){const X=De.get(E);X.outputEncoding=F.outputEncoding,X.instancing=F.instancing,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Ue(E,F,X,O,Y){F.isScene!==!0&&(F=ie),he.resetTextureUnits();const _e=F.fog,ye=O.isMeshStandardMaterial?F.environment:null,Oe=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Er,Pe=(O.isMeshStandardMaterial?it:Xe).get(O.envMap||ye),Ne=O.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!O.normalMap&&!!X.attributes.tangent,Fe=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,at=!!X.morphAttributes.color,kt=O.toneMapped?d.toneMapping:bi,On=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,et=On!==void 0?On.length:0,Ie=De.get(O),cn=h.state.lights;if(H===!0&&(te===!0||E!==y)){const _n=E===y&&O.id===M;S.setState(O,E,_n)}let yt=!1;O.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==cn.state.version||Ie.outputEncoding!==Oe||Y.isInstancedMesh&&Ie.instancing===!1||!Y.isInstancedMesh&&Ie.instancing===!0||Y.isSkinnedMesh&&Ie.skinning===!1||!Y.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Pe||O.fog===!0&&Ie.fog!==_e||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==S.numPlanes||Ie.numIntersection!==S.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==Be||Ie.morphTargets!==Fe||Ie.morphNormals!==je||Ie.morphColors!==at||Ie.toneMapping!==kt||Ce.isWebGL2===!0&&Ie.morphTargetsCount!==et)&&(yt=!0):(yt=!0,Ie.__version=O.version);let ei=Ie.currentProgram;yt===!0&&(ei=Ve(O,F,Y));let Ai=!1,Wt=!1,fi=!1;const wt=ei.getUniforms(),Ht=Ie.uniforms;if(xe.useProgram(ei.program)&&(Ai=!0,Wt=!0,fi=!0),O.id!==M&&(M=O.id,Wt=!0),Ai||y!==E){if(wt.setValue(Z,"projectionMatrix",E.projectionMatrix),Ce.logarithmicDepthBuffer&&wt.setValue(Z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),y!==E&&(y=E,Wt=!0,fi=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const _n=wt.map.cameraPosition;_n!==void 0&&_n.setValue(Z,oe.setFromMatrixPosition(E.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&wt.setValue(Z,"isOrthographic",E.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Y.isSkinnedMesh)&&wt.setValue(Z,"viewMatrix",E.matrixWorldInverse)}if(Y.isSkinnedMesh){wt.setOptional(Z,Y,"bindMatrix"),wt.setOptional(Z,Y,"bindMatrixInverse");const _n=Y.skeleton;_n&&(Ce.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),wt.setValue(Z,"boneTexture",_n.boneTexture,he),wt.setValue(Z,"boneTextureSize",_n.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ba=X.morphAttributes;if((Ba.position!==void 0||Ba.normal!==void 0||Ba.color!==void 0&&Ce.isWebGL2===!0)&&le.update(Y,X,O,ei),(Wt||Ie.receiveShadow!==Y.receiveShadow)&&(Ie.receiveShadow=Y.receiveShadow,wt.setValue(Z,"receiveShadow",Y.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ht.envMap.value=Pe,Ht.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Wt&&(wt.setValue(Z,"toneMappingExposure",d.toneMappingExposure),Ie.needsLights&&Re(Ht,fi),_e&&O.fog===!0&&N.refreshFogUniforms(Ht,_e),N.refreshMaterialUniforms(Ht,O,k,D,P),ua.upload(Z,Ie.uniformsList,Ht,he)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ua.upload(Z,Ie.uniformsList,Ht,he),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&wt.setValue(Z,"center",Y.center),wt.setValue(Z,"modelViewMatrix",Y.modelViewMatrix),wt.setValue(Z,"normalMatrix",Y.normalMatrix),wt.setValue(Z,"modelMatrix",Y.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const _n=O.uniformsGroups;for(let Ga=0,Zd=_n.length;Ga<Zd;Ga++)if(Ce.isWebGL2){const qc=_n[Ga];Se.update(qc,ei),Se.bind(qc,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function Re(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function ke(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,F,X){De.get(E.texture).__webglTexture=F,De.get(E.depthTexture).__webglTexture=X;const O=De.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=X===void 0,O.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){const X=De.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,X=0){v=E,_=F,b=X;let O=!0,Y=null,_e=!1,ye=!1;if(E){const Pe=De.get(E);Pe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),O=!1):Pe.__webglFramebuffer===void 0?he.setupRenderTarget(E):Pe.__hasExternalTextures&&he.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Be=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Y=Be[F],_e=!0):Ce.isWebGL2&&E.samples>0&&he.useMultisampledRTT(E)===!1?Y=De.get(E).__webglMultisampledFramebuffer:Y=Be,A.copy(E.viewport),C.copy(E.scissor),x=E.scissorTest}else A.copy(R).multiplyScalar(k).floor(),C.copy(W).multiplyScalar(k).floor(),x=J;if(xe.bindFramebuffer(36160,Y)&&Ce.drawBuffers&&O&&xe.drawBuffers(E,Y),xe.viewport(A),xe.scissor(C),xe.setScissorTest(x),_e){const Pe=De.get(E.texture);Z.framebufferTexture2D(36160,36064,34069+F,Pe.__webglTexture,X)}else if(ye){const Pe=De.get(E.texture),Ne=F||0;Z.framebufferTextureLayer(36160,36064,Pe.__webglTexture,X||0,Ne)}M=-1},this.readRenderTargetPixels=function(E,F,X,O,Y,_e,ye){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Oe=Oe[ye]),Oe){xe.bindFramebuffer(36160,Oe);try{const Pe=E.texture,Ne=Pe.format,Be=Pe.type;if(Ne!==Jn&&ce.convert(Ne)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Be===so&&(me.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&me.has("EXT_color_buffer_float"));if(Be!==Tr&&ce.convert(Be)!==Z.getParameter(35738)&&!(Be===fr&&(Ce.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-O&&X>=0&&X<=E.height-Y&&Z.readPixels(F,X,O,Y,ce.convert(Ne),ce.convert(Be),_e)}finally{const Pe=v!==null?De.get(v).__webglFramebuffer:null;xe.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(E,F,X=0){const O=Math.pow(2,-X),Y=Math.floor(F.image.width*O),_e=Math.floor(F.image.height*O);he.setTexture2D(F,0),Z.copyTexSubImage2D(3553,X,0,0,E.x,E.y,Y,_e),xe.unbindTexture()},this.copyTextureToTexture=function(E,F,X,O=0){const Y=F.image.width,_e=F.image.height,ye=ce.convert(X.format),Oe=ce.convert(X.type);he.setTexture2D(X,0),Z.pixelStorei(37440,X.flipY),Z.pixelStorei(37441,X.premultiplyAlpha),Z.pixelStorei(3317,X.unpackAlignment),F.isDataTexture?Z.texSubImage2D(3553,O,E.x,E.y,Y,_e,ye,Oe,F.image.data):F.isCompressedTexture?Z.compressedTexSubImage2D(3553,O,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,ye,F.mipmaps[0].data):Z.texSubImage2D(3553,O,E.x,E.y,ye,Oe,F.image),O===0&&X.generateMipmaps&&Z.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(E,F,X,O,Y=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=E.max.x-E.min.x+1,ye=E.max.y-E.min.y+1,Oe=E.max.z-E.min.z+1,Pe=ce.convert(O.format),Ne=ce.convert(O.type);let Be;if(O.isData3DTexture)he.setTexture3D(O,0),Be=32879;else if(O.isDataArrayTexture)he.setTexture2DArray(O,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,O.flipY),Z.pixelStorei(37441,O.premultiplyAlpha),Z.pixelStorei(3317,O.unpackAlignment);const Fe=Z.getParameter(3314),je=Z.getParameter(32878),at=Z.getParameter(3316),kt=Z.getParameter(3315),On=Z.getParameter(32877),et=X.isCompressedTexture?X.mipmaps[0]:X.image;Z.pixelStorei(3314,et.width),Z.pixelStorei(32878,et.height),Z.pixelStorei(3316,E.min.x),Z.pixelStorei(3315,E.min.y),Z.pixelStorei(32877,E.min.z),X.isDataTexture||X.isData3DTexture?Z.texSubImage3D(Be,Y,F.x,F.y,F.z,_e,ye,Oe,Pe,Ne,et.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Be,Y,F.x,F.y,F.z,_e,ye,Oe,Pe,et.data)):Z.texSubImage3D(Be,Y,F.x,F.y,F.z,_e,ye,Oe,Pe,Ne,et),Z.pixelStorei(3314,Fe),Z.pixelStorei(32878,je),Z.pixelStorei(3316,at),Z.pixelStorei(3315,kt),Z.pixelStorei(32877,On),Y===0&&O.generateMipmaps&&Z.generateMipmap(Be),xe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?he.setTextureCube(E,0):E.isData3DTexture?he.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?he.setTexture2DArray(E,0):he.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){_=0,b=0,v=null,xe.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Yx extends Sh{}Yx.prototype.isWebGL1Renderer=!0;class $x extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class bh extends So{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rf=new Nt,Wl=new lh,qo=new Fa,Yo=new j;class jx extends fn{constructor(e=new Ci,t=new bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(i),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;rf.copy(i).invert(),Wl.copy(e.ray).applyMatrix4(rf);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,d=m;g<d;g++){const p=c.getX(g);Yo.fromBufferAttribute(f,p),sf(Yo,p,l,i,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=h,d=m;g<d;g++)Yo.fromBufferAttribute(f,g),sf(Yo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function sf(o,e,t,n,i,r,a){const s=Wl.distanceSqToPoint(o);if(s<t){const l=new j;Wl.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}class Zx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=of();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function of(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);function xi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function wh(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.14.1
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gs={duration:.5,overwrite:!1,delay:0},vc,Vt,gt,Vn=1e8,ft=1/Vn,Hl=Math.PI*2,Kx=Hl/4,Jx=0,Th=Math.sqrt,Qx=Math.cos,ev=Math.sin,Ut=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Ti=function(e){return typeof e=="number"},yc=function(e){return typeof e>"u"},ui=function(e){return typeof e=="object"},hn=function(e){return e!==!1},Mc=function(){return typeof window<"u"},$o=function(e){return Mt(e)||Ut(e)},Eh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zt=Array.isArray,tv=/random\([^)]+\)/g,nv=/,\s*/g,af=/(?:-?\.?\d|\.)+/gi,Ch=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ah=/[+-]=-?[.\d]+/,iv=/[^,'"\[\]\s]+/gi,rv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,ni,Xl,Sc,In={},Ma={},Ph,Dh=function(e){return(Ma=_s(e,In))&&gn},bc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ao=function(e,t){return!t&&console.warn(e)},Lh=function(e,t){return e&&(In[e]=t)&&Ma&&(Ma[e]=t)||In},lo=function(){return 0},sv={suppressEvents:!0,isStart:!0,kill:!1},fa={suppressEvents:!0,kill:!1},ov={suppressEvents:!0},wc={},Hi=[],ql={},Rh,bn={},Ml={},lf=30,ha=[],Tc="",Ec=function(e){var t=e[0],n,i;if(ui(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ha.length;i--&&!ha[i].targetTest(t););n=ha[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new nd(e[i],n)))||e.splice(i,1);return e},_r=function(e){return e._gsap||Ec(Wn(e))[0]._gsap},Ih=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():yc(n)&&e.getAttribute&&e.getAttribute(t)||n},dn=function(e,t){return(e=e.split(",")).forEach(t)||e},St=function(e){return Math.round(e*1e5)/1e5||0},_t=function(e){return Math.round(e*1e7)/1e7||0},os=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},av=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Sa=function(){var e=Hi.length,t=Hi.slice(0),n,i;for(ql={},Hi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Cc=function(e){return!!(e._initted||e._startAt||e.add)},Fh=function(e,t,n,i){Hi.length&&!Vt&&Sa(),e.render(t,n,i||!!(Vt&&t<0&&Cc(e))),Hi.length&&!Vt&&Sa()},Oh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(iv).length<2?t:Ut(e)?e.trim():e},zh=function(e){return e},Fn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},_s=function(e,t){for(var n in t)e[n]=t[n];return e},cf=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ui(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},ba=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Xs=function(e){var t=e.parent||xt,n=e.keyframes?lv(Zt(e.keyframes)):Fn;if(hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Nh=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},za=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Yi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},uv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yl=function(e,t,n,i){return e._startAt&&(Vt?e._startAt.revert(fa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},fv=function o(e){return!e||e._ts&&o(e.parent)},uf=function(e){return e._repeat?xs(e._tTime,e=e.duration()+e._rDelay)*e:0},xs=function(e,t){var n=Math.floor(e=_t(e/t));return e&&n===e?n-1:n},wa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Na=function(e){return e._end=_t(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},Ua=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Na(e),n._dirty||xr(n,e)),e},Uh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=wa(e.rawTime(),t),(!t._dur||wo(0,t.totalDuration(),n)-t._tTime>ft)&&t.render(n,!0)),xr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ft}},oi=function(e,t,n,i){return t.parent&&Yi(t),t._start=_t((Ti(n)?n:n||e!==xt?Nn(e,n,t):e._time)+t._delay),t._end=_t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Nh(e,t,"_first","_last",e._sort?"_start":0),$l(t)||(e._recent=t),i||Uh(e,t),e._ts<0&&Ua(e,e._tTime),e},kh=function(e,t){return(In.ScrollTrigger||bc("scrollTrigger",t))&&In.ScrollTrigger.create(t,e)},Bh=function(e,t,n,i,r){if(Pc(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rh!==En.frame)return Hi.push(e),e._lazy=[r,i],1},hv=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},$l=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dv=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&hv(e)&&!(!e._initted&&$l(e))||(e._ts<0||e._dp._ts<0)&&!$l(e))?0:1,s=e._rDelay,l=0,c,u,f;if(s&&e._repeat&&(l=wo(0,e._tDur,t),u=xs(l,s),e._yoyo&&u&1&&(a=1-a),u!==xs(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Vt||i||e._zTime===ft||!t&&e._zTime){if(!e._initted&&Bh(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?ft:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Yl(e,t,n,!0),e._onUpdate&&!n&&Pn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Yi(e,1),!n&&!Vt&&(Pn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},pv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},vs=function(e,t,n,i){var r=e._repeat,a=_t(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:_t(a*(r+1)+e._rDelay*r):a,s>0&&!i&&Ua(e,e._tTime=e._tDur*s),e.parent&&Na(e),n||xr(e.parent,e),e},ff=function(e){return e instanceof an?xr(e):vs(e,e._dur)},mv={_start:0,endTime:lo,totalDuration:lo},Nn=function o(e,t,n){var i=e.labels,r=e._recent||mv,a=e.duration()>=Vn?r.endTime(!1):e._dur,s,l,c;return Ut(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(Zt(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},qs=function(e,t,n){var i=Ti(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=hn(l.vars.inherit)&&l.parent;a.immediateRender=hn(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Ct(t[0],a,t[r+1])},Ki=function(e,t){return e||e===0?t(e):t},wo=function(e,t,n){return n<e?e:n>t?t:n},$t=function(e,t){return!Ut(e)||!(t=rv.exec(e))?"":t[1]},gv=function(e,t,n){return Ki(n,function(i){return wo(e,t,i)})},jl=[].slice,Gh=function(e,t){return e&&ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ui(e[0]))&&!e.nodeType&&e!==ni},_v=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Ut(i)&&!t||Gh(i,1)?(r=n).push.apply(r,Wn(i)):n.push(i)})||n},Wn=function(e,t,n){return gt&&!t&&gt.selector?gt.selector(e):Ut(e)&&!n&&(Xl||!ys())?jl.call((t||Sc).querySelectorAll(e),0):Zt(e)?_v(e,n):Gh(e)?jl.call(e,0):e?[e]:[]},Zl=function(e){return e=Wn(e)[0]||ao("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Wn(t,n.querySelectorAll?n:n===e?ao("Invalid scope")||Sc.createElement("div"):e)}},Vh=function(e){return e.sort(function(){return .5-Math.random()})},Wh=function(e){if(Mt(e))return e;var t=ui(e)?e:{each:e},n=vr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,f=i;return Ut(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],f=i[1]),function(h,m,g){var d=(g||t).length,p=a[d],_,b,v,M,y,A,C,x,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,Vn])[1],!T){for(C=-Vn;C<(C=g[T++].getBoundingClientRect().left)&&T<d;);T<d&&T--}for(p=a[d]=[],_=l?Math.min(T,d)*u-.5:i%T,b=T===Vn?0:l?d*f/T-.5:i/T|0,C=0,x=Vn,A=0;A<d;A++)v=A%T-_,M=b-(A/T|0),p[A]=y=c?Math.abs(c==="y"?M:v):Th(v*v+M*M),y>C&&(C=y),y<x&&(x=y);i==="random"&&Vh(p),p.max=C-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(T>d?d-1:c?c==="y"?d/T:T:Math.max(T,d/T))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=$t(t.amount||t.each)||0,n=n&&d<0?Qh(n):n}return d=(p[h]-p.min)/p.max||0,_t(p.b+(n?n(d):d)*p.v)+p.u}},Kl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=_t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ti(n)?0:$t(n))}},Hh=function(e,t){var n=Zt(e),i,r;return!n&&ui(e)&&(i=n=e.radius||Vn,e.values?(e=Wn(e.values),(r=!Ti(e[0]))&&(i*=i)):e=Kl(e.increment)),Ki(t,n?Mt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Vn,u=0,f=e.length,h,m;f--;)r?(h=e[f].x-s,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-s),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,r||u===a||Ti(a)?u:u+$t(a)}:Kl(e))},Xh=function(e,t,n,i){return Ki(Zt(e)?!t:n===!0?!!(n=0):!i,function(){return Zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},xv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},vv=function(e,t){return function(n){return e(parseFloat(n))+(t||$t(n))}},yv=function(e,t,n){return Yh(e,t,0,1,n)},qh=function(e,t,n){return Ki(n,function(i){return e[~~t(i)]})},Mv=function o(e,t,n){var i=t-e;return Zt(e)?qh(e,o(0,e.length),t):Ki(n,function(r){return(i+(r-e)%i)%i+e})},Sv=function o(e,t,n){var i=t-e,r=i*2;return Zt(e)?qh(e,o(0,e.length-1),t):Ki(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},co=function(e){return e.replace(tv,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(nv);return Xh(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Yh=function(e,t,n,i,r){var a=t-e,s=i-n;return Ki(r,function(l){return n+((l-e)/a*s||0)})},bv=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=Ut(e),s={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Zt(e)&&!Zt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(o(e[c-1],e[c]));f--,r=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else i||(e=_s(Zt(e)?[]:{},e));if(!u){for(l in t)Ac.call(s,e,l,"get",t[l]);r=function(g){return Rc(g,s)||(a?e.p:e)}}}return Ki(n,r)},hf=function(e,t,n){var i=e.labels,r=Vn,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Pn=function(e,t,n){var i=e.vars,r=i[t],a=gt,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Hi.length&&Sa(),s&&(gt=s),u=l?r.apply(c,l):r.call(c),gt=a,u},Ns=function(e){return Yi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&Pn(e,"onInterrupt"),e},ns,$h=[],jh=function(e){if(e)if(e=!e.name&&e.default||e,Mc()||e.headless){var t=e.name,n=Mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:lo,render:Rc,add:Ac,kill:kv,modifier:Uv,rawVars:0},a={targetTest:0,get:0,getSetter:Lc,aliases:{},register:0};if(ys(),e!==i){if(bn[t])return;Fn(i,Fn(ba(e,r),a)),_s(i.prototype,_s(r,ba(e,a))),bn[i.prop=t]=i,e.targetTest&&(ha.push(i),wc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Lh(t,i),e.register&&e.register(gn,i,pn)}else $h.push(e)},ut=255,Us={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},Sl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},Zh=function(e,t,n){var i=e?Ti(e)?[e>>16,e>>8&ut,e&ut]:0:Us.black,r,a,s,l,c,u,f,h,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Us[e])i=Us[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ut,i&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(af),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Sl(l+1/3,r,a),i[1]=Sl(l,r,a),i[2]=Sl(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Ch),n&&i.length<4&&(i[3]=1),i}else i=e.match(af)||Us.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/ut,a=i[1]/ut,s=i[2]/ut,f=Math.max(r,a,s),h=Math.min(r,a,s),u=(f+h)/2,f===h?l=c=0:(m=f-h,c=u>.5?m/(2-f-h):m/(f+h),l=f===r?(a-s)/m+(a<s?6:0):f===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Kh=function(e){var t=[],n=[],i=-1;return e.split(Xi).forEach(function(r){var a=r.match(ts)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},df=function(e,t,n){var i="",r=(e+i).match(Xi),a=t?"hsla(":"rgba(",s=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=Zh(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Kh(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Xi,"1").split(ts),f=c.length-1;s<f;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Xi),f=c.length-1;s<f;s++)i+=c[s]+r[s];return i+c[f]},Xi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Us)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),wv=/hsl[a]?\(/,Jh=function(e){var t=e.join(" "),n;if(Xi.lastIndex=0,Xi.test(t))return n=wv.test(t),e[1]=df(e[1],n),e[0]=df(e[0],n,Kh(e[1])),!0},uo,En=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,f,h,m,g=function d(p){var _=o()-i,b=p===!0,v,M,y,A;if((_>e||_<0)&&(n+=_-t),i+=_,y=i-n,v=y-a,(v>0||b)&&(A=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,a+=v+(v>=r?4:r-v),M=1),b||(l=c(d)),M)for(m=0;m<s.length;m++)s[m](y,h,A,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Ph&&(!Xl&&Mc()&&(ni=Xl=window,Sc=ni.document||{},In.gsap=gn,(ni.gsapVersions||(ni.gsapVersions=[])).push(gn.version),Dh(Ma||ni.GreenSockGlobals||!ni.gsap&&ni||{}),$h.forEach(jh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},uo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),uo=0,c=lo},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),a=f.time*1e3+r},add:function(p,_,b){var v=_?function(M,y,A,C){p(M,y,A,C),f.remove(v)}:p;return f.remove(p),s[b?"unshift":"push"](v),ys(),v},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},f}(),ys=function(){return!uo&&En.wake()},nt={},Tv=/^[\d.\-M][\d.\-,\s]/,Ev=/["']/g,Cv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(Ev,"").trim():+c,i=l.substr(s+1).trim();return t},Av=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Pv=function(e){var t=(e+"").split("("),n=nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Cv(t[1])]:Av(e).split(",").map(Oh)):nt._CE&&Tv.test(e)?nt._CE("",e):n},Qh=function(e){return function(t){return 1-e(1-t)}},ed=function o(e,t){for(var n=e._first,i;n;)n instanceof an?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},vr=function(e,t){return e&&(Mt(e)?e:nt[e]||Pv(e))||t},Ir=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return dn(e,function(s){nt[s]=In[s]=r,nt[a=s.toLowerCase()]=n;for(var l in r)nt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=nt[s+"."+l]=r[l]}),r},td=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},bl=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Hl*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*ev((u-a)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:td(s);return r=Hl/r,l.config=function(c,u){return o(e,c,u)},l},wl=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:td(n);return i.config=function(r){return o(e,r)},i};dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Ir(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});nt.Linear.easeNone=nt.none=nt.Linear.easeIn;Ir("Elastic",bl("in"),bl("out"),bl());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};Ir("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ir("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ir("Circ",function(o){return-(Th(1-o*o)-1)});Ir("Sine",function(o){return o===1?1:-Qx(o*Kx)+1});Ir("Back",wl("in"),wl("out"),wl());nt.SteppedEase=nt.steps=In.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ft;return function(s){return((i*wo(0,a,s)|0)+r)*n}}};gs.ease=nt["quad.out"];dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Tc+=o+","+o+"Params,"});var nd=function(e,t){this.id=Jx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ih,this.set=t?t.getSetter:Lc},fo=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,vs(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),uo||En.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ys(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ua(this,n),!r._dp||r.parent||Uh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ft||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+uf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+uf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?xs(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ft?0:this._rts,this.totalTime(wo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Na(this),uv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=_t(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&oi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ov);var i=Vt;return Vt=n,Cc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ff(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ff(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Nn(this,n),hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,hn(i)),this._dur||(this._zTime=-ft),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ft)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var s=Mt(n)?n:zh,l=function(){var u=i.then;i.then=null,r&&r(),Mt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=u),a(s),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ns(this)},o}();Fn(fo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var an=function(o){wh(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=hn(n.sortChildren),xt&&oi(n.parent||xt,xi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&kh(xi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return qs(0,arguments,this),this},t.from=function(i,r,a){return qs(1,arguments,this),this},t.fromTo=function(i,r,a,s){return qs(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Xs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ct(i,r,Nn(this,a),1),this},t.call=function(i,r,a){return oi(this,Ct.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ct(i,a,Nn(this,l)),this},t.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,Xs(a).immediateRender=hn(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},t.staggerFromTo=function(i,r,a,s,l,c,u,f){return s.startAt=a,Xs(s).immediateRender=hn(s.immediateRender),this.staggerTo(i,r,s,l,c,u,f)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:_t(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,m,g,d,p,_,b,v,M,y,A,C;if(this!==xt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),h=u,M=this._start,v=this._ts,_=!v,f&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(h=_t(u%p),u===l?(d=this._repeat,h=c):(y=_t(u/p),d=~~y,d&&d===y&&(h=c,d--),h>c&&(h=c)),y=xs(this._tTime,p),!s&&this._tTime&&y!==d&&this._tTime-y*p-this._dur<=0&&(y=d),A&&d&1&&(h=c-h,C=1),d!==y&&!this._lock){var x=A&&y&1,T=x===(A&&d&1);if(d<y&&(x=!x),s=x?0:u%c?c:u,this._lock=1,this.render(s||(C?0:_t(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,y=d),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;ed(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=pv(this,_t(s),_t(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&u&&c&&!r&&!y&&(Pn(this,"onStart"),this._tTime!==u))return this;if(h>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,r,a),h!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-ft);break}}m=g}else{m=this._last;for(var D=i<0?i:h;m;){if(g=m._prev,(m._act||D<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,r,a||Vt&&Cc(m)),h!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=D?-ft:ft);break}}m=g}}if(b&&!r&&(this.pause(),b.render(h>=s?0:-ft)._zTime=h>=s?1:-1,this._ts))return this._start=M,Na(this),this.render(i,r,a);this._onUpdate&&!r&&Pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yi(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Pn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Ti(r)||(r=Nn(this,r,i)),!(i instanceof fo)){if(Zt(i))return i.forEach(function(s){return a.add(s,r)}),this;if(Ut(i))return this.addLabel(i,r);if(Mt(i))i=Ct.delayedCall(0,i);else return this}return this!==i?oi(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Vn);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Ct?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Ut(i)?this.removeLabel(i):Mt(i)?this.killTweensOf(i):(i.parent===this&&za(this,i),i===this._recent&&(this._recent=this._last),xr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_t(En.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Nn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=Ct.delayedCall(0,r||lo,a);return s.data="isPause",this._hasPause=1,oi(this,s,Nn(this,i))},t.removePause=function(i){var r=this._first;for(i=Nn(this,i);r;)r._start===i&&r.data==="isPause"&&Yi(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Ni!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=Wn(i),l=this._first,c=Ti(r),u;l;)l instanceof Ct?av(l._targets,s)&&(c?(!Ni||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=Nn(a,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,m,g=Ct.to(a,Fn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||ft,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&vs(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,f||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Fn({startAt:{time:Nn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),hf(this,Nn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),hf(this,Nn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var s=this._first,l=this.labels,c;for(i=_t(i);s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return xr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xr(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=Vn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,oi(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=_t(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;vs(a,a===xt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(xt._ts&&(Fh(xt,wa(i,xt)),Rh=En.frame),En.frame>=lf){lf+=Rn.autoSleep||120;var r=xt._first;if((!r||!r._ts)&&Rn.autoSleep&&En._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||En.sleep()}}},e}(fo);Fn(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var Dv=function(e,t,n,i,r,a,s){var l=new pn(this._pt,e,t,0,1,ld,null,r),c=0,u=0,f,h,m,g,d,p,_,b;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=co(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),h=n.match(yl)||[];f=yl.exec(i);)g=f[0],d=i.substring(c,f.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?os(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=yl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Ah.test(i)||_)&&(l.e=0),this._pt=l,l},Ac=function(e,t,n,i,r,a,s,l,c,u){Mt(i)&&(i=i(r||0,e,a));var f=e[t],h=n!=="get"?n:Mt(f)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=Mt(f)?c?Ov:od:Dc,g;if(Ut(i)&&(~i.indexOf("random(")&&(i=co(i)),i.charAt(1)==="="&&(g=os(h,i)+($t(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Jl)return!isNaN(h*i)&&i!==""?(g=new pn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?Nv:ad,0,m),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!f&&!(t in e)&&bc(t,i),Dv.call(this,e,t,h,i,m,l||Rn.stringFilter,c))},Lv=function(e,t,n,i,r){if(Mt(e)&&(e=Ys(e,r,t,n,i)),!ui(e)||e.style&&e.nodeType||Zt(e)||Eh(e))return Ut(e)?Ys(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=Ys(e[s],r,t,n,i);return a},id=function(e,t,n,i,r,a){var s,l,c,u;if(bn[e]&&(s=new bn[e]).init(r,s.rawVars?t[e]:Lv(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new pn(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==ns))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Ni,Jl,Pc=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,m=i.autoRevert,g=e._dur,d=e._startAt,p=e._targets,_=e.parent,b=_&&_.data==="nested"?_.vars.targets:p,v=e._overwrite==="auto"&&!vc,M=e.timeline,y,A,C,x,T,D,k,z,I,R,W,J,q;if(M&&(!h||!r)&&(r="none"),e._ease=vr(r,gs.ease),e._yEase=f?Qh(vr(f===!0?r:f,gs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!M&&!!i.runBackwards,!M||h&&!i.stagger){if(z=p[0]?_r(p[0]).harness:0,J=z&&i[z.prop],y=ba(i,wc),d&&(d._zTime<0&&d.progress(1),t<0&&u&&s&&!m?d.render(-1,!0):d.revert(u&&g?fa:sv),d._lazy=0),a){if(Yi(e._startAt=Ct.set(p,Fn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!d&&hn(l),startAt:null,delay:0,onUpdate:c&&function(){return Pn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!s&&!m)&&e._startAt.revert(fa),s&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!d){if(t&&(s=!1),C=Fn({overwrite:!1,data:"isFromStart",lazy:s&&!d&&hn(l),immediateRender:s,stagger:0,parent:_},y),J&&(C[z.prop]=J),Yi(e._startAt=Ct.set(p,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(fa):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&hn(l)||l&&!g,A=0;A<p.length;A++){if(T=p[A],k=T._gsap||Ec(p)[A]._gsap,e._ptLookup[A]=R={},ql[k.id]&&Hi.length&&Sa(),W=b===p?A:b.indexOf(T),z&&(I=new z).init(T,J||y,e,W,b)!==!1&&(e._pt=x=new pn(e._pt,T,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){R[H]=x}),I.priority&&(D=1)),!z||J)for(C in y)bn[C]&&(I=id(C,y,e,W,T,b))?I.priority&&(D=1):R[C]=x=Ac.call(e,T,C,"get",y[C],W,b,0,i.stringFilter);e._op&&e._op[A]&&e.kill(T,e._op[A]),v&&e._pt&&(Ni=e,xt.killTweensOf(T,R,e.globalTime(t)),q=!e.parent,Ni=0),e._pt&&l&&(ql[k.id]=1)}D&&cd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,h&&t<=0&&M.render(Vn,!0,!0)},Rv=function(e,t,n,i,r,a,s,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,m;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,m=e._targets.length;m--;){if(u=h[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Jl=1,e.vars[t]="+=0",Pc(e,s),Jl=0,l?ao(t+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)f=c[m],u=f._pt||f,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=St(n)+$t(f.e)),f.b&&(f.b=u.s+$t(f.b))},Iv=function(e,t){var n=e[0]?_r(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=_s({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},Fv=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(Zt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},Ys=function(e,t,n,i,r){return Mt(e)?e.call(t,n,i,r):Ut(e)&&~e.indexOf("random(")?co(e):e},rd=Tc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",sd={};dn(rd+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return sd[o]=1});var Ct=function(o){wh(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:Xs(i))||this;var l=s.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,b=i.parent||xt,v=(Zt(n)||Eh(n)?Ti(n[0]):"length"in i)?[n]:Wn(n),M,y,A,C,x,T,D,k;if(s._targets=v.length?Ec(v):ao("GSAP target "+n+" not found. https://gsap.com",!Rn.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||h||$o(c)||$o(u)){if(i=s.vars,M=s.timeline=new an({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:v}),M.kill(),M.parent=M._dp=xi(s),M._start=0,h||$o(c)||$o(u)){if(C=v.length,D=h&&Wh(h),ui(h))for(x in h)~rd.indexOf(x)&&(k||(k={}),k[x]=h[x]);for(y=0;y<C;y++)A=ba(i,sd),A.stagger=0,_&&(A.yoyoEase=_),k&&_s(A,k),T=v[y],A.duration=+Ys(c,xi(s),y,T,v),A.delay=(+Ys(u,xi(s),y,T,v)||0)-s._delay,!h&&C===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),M.to(T,A,D?D(y,T,v):0),M._ease=nt.none;M.duration()?c=u=0:s.timeline=0}else if(g){Xs(Fn(M.vars.defaults,{ease:"none"})),M._ease=vr(g.ease||i.ease||"none");var z=0,I,R,W;if(Zt(g))g.forEach(function(J){return M.to(v,J,">")}),M.duration();else{A={};for(x in g)x==="ease"||x==="easeEach"||Fv(x,g[x],A,g.easeEach);for(x in A)for(I=A[x].sort(function(J,q){return J.t-q.t}),z=0,y=0;y<I.length;y++)R=I[y],W={ease:R.e,duration:(R.t-(y?I[y-1].t:0))/100*c},W[x]=R.v,M.to(v,W,z),z+=W.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||s.duration(c=M.duration())}else s.timeline=0;return m===!0&&!vc&&(Ni=xi(s),xt.killTweensOf(v),Ni=0),oi(b,xi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(f||!c&&!g&&s._start===_t(b._time)&&hn(f)&&fv(xi(s))&&b.data!=="nested")&&(s._tTime=-ft,s.render(Math.max(0,-u)||0)),p&&kh(xi(s),p),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-ft&&!u?l:i<ft?0:i,h,m,g,d,p,_,b,v,M;if(!c)dv(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,v=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(h=_t(f%d),f===l?(g=this._repeat,h=c):(p=_t(f/d),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),_=this._yoyo&&g&1,_&&(M=this._yEase,h=c-h),p=xs(this._tTime,d),h===s&&!a&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(v&&this._yEase&&ed(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&h!==d&&this._initted&&(this._lock=a=1,this.render(_t(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Bh(this,u?i:h,a,r,f))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(M||this._ease)(h/c),this._from&&(this.ratio=b=1-b),!s&&f&&!r&&!p&&(Pn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;v&&v.render(i<0?i:v._dur*v._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Yl(this,i,r,a),Pn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Pn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Yl(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Yi(this,1),!r&&!(u&&!s)&&(f||s||_)&&(Pn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s,l){uo||En.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Pc(this,c),u=this._ease(c/this._dur),Rv(this,i,r,a,s,u,c,l)?this.resetTo(i,r,a,s,1):(Ua(this,0),this.parent||Nh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ns(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ni&&Ni.vars.overwrite!==!0)._first||Ns(this),this.parent&&a!==this.timeline.totalDuration()&&vs(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Wn(i):s,c=this._ptLookup,u=this._pt,f,h,m,g,d,p,_;if((!r||r==="all")&&cv(s,l))return r==="all"&&(this._pt=0),Ns(this);for(f=this._op=this._op||[],r!=="all"&&(Ut(r)&&(d={},dn(r,function(b){return d[b]=1}),r=d),r=Iv(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){h=c[_],r==="all"?(f[_]=r,g=h,m={}):(m=f[_]=f[_]||{},g=r);for(d in g)p=h&&h[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&za(this,p,"_pt"),delete h[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Ns(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return qs(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return qs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return xt.killTweensOf(i,r,a)},e}(fo);Fn(Ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});dn("staggerTo,staggerFrom,staggerFromTo",function(o){Ct[o]=function(){var e=new an,t=jl.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Dc=function(e,t,n){return e[t]=n},od=function(e,t,n){return e[t](n)},Ov=function(e,t,n,i){return e[t](i.fp,n)},zv=function(e,t,n){return e.setAttribute(t,n)},Lc=function(e,t){return Mt(e[t])?od:yc(e[t])&&e.setAttribute?zv:Dc},ad=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Nv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ld=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Rc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Uv=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},kv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?za(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Bv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},cd=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},pn=function(){function o(t,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||ad,this.d=l||this,this.set=c||Dc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Bv,this.m=n,this.mt=r,this.tween=i},o}();dn(Tc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return wc[o]=1});In.TweenMax=In.TweenLite=Ct;In.TimelineLite=In.TimelineMax=an;xt=new an({sortChildren:!1,defaults:gs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=Jh;var yr=[],da={},Gv=[],pf=0,Vv=0,Tl=function(e){return(da[e]||Gv).map(function(t){return t()})},Ql=function(){var e=Date.now(),t=[];e-pf>2&&(Tl("matchMediaInit"),yr.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=ni.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Tl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),pf=e,Tl("matchMedia"))},ud=function(){function o(t,n){this.selector=n&&Zl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Vv++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){Mt(n)&&(r=i,i=n,n=Mt);var a=this,s=function(){var c=gt,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Zl(r)),gt=a,f=i.apply(a,arguments),Mt(f)&&a._r.push(f),gt=c,a.selector=u,a.isReverted=!1,f};return a.last=s,n===Mt?s(a,function(l){return a.add(null,l)}):n?a[n]=s:s},e.ignore=function(n){var i=gt;gt=null,n(this),gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Ct&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var s=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return s.splice(s.indexOf(u),1)}));for(s.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof an?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ct)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var a=yr.length;a--;)yr[a].id===this.id&&yr.splice(a,1)},e.revert=function(n){this.kill(n||{})},o}(),Wv=function(){function o(t){this.contexts=[],this.scope=t,gt&&gt.data.push(this)}var e=o.prototype;return e.add=function(n,i,r){ui(n)||(n={matches:n});var a=new ud(0,r||this.scope),s=a.conditions={},l,c,u;gt&&!a.selector&&(a.selector=gt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ni.matchMedia(n[c]),l&&(yr.indexOf(a)<0&&yr.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ql):l.addEventListener("change",Ql)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Ta={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return jh(i)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ut(e)&&(e=Wn(e)[0]);var r=_r(e||{}).get,a=n?zh:Oh;return n==="native"&&(n=""),e&&(t?a((bn[t]&&bn[t].get||r)(e,t,n,i)):function(s,l,c){return a((bn[s]&&bn[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=Wn(e),e.length>1){var i=e.map(function(u){return gn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var a=bn[t],s=_r(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;ns._pt=0,f.init(e,n?u+n:u,ns,0,[e]),f.render(1,f),ns._pt&&Rc(1,ns)}:s.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=gn.to(e,Fn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vr(e.ease,gs.ease)),cf(gs,e||{})},config:function(e){return cf(Rn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!bn[s]&&!In[s]&&ao(t+" effect requires "+s+" plugin.")}),Ml[t]=function(s,l,c){return n(Wn(s),Fn(l||{},r),c)},a&&(an.prototype[t]=function(s,l,c){return this.add(Ml[t](s,ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){nt[e]=vr(t)},parseEase:function(e,t){return arguments.length?vr(e,t):nt},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new an(e),i,r;for(n.smoothChildTiming=hn(e.smoothChildTiming),xt.remove(n),n._dp=0,n._time=n._tTime=xt._time,i=xt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ct&&i.vars.onComplete===i._targets[0]))&&oi(n,i,i._start-i._delay),i=r;return oi(xt,n,0),n},context:function(e,t){return e?new ud(e,t):gt},matchMedia:function(e){return new Wv(e)},matchMediaRefresh:function(){return yr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ql()},addEventListener:function(e,t){var n=da[e]||(da[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=da[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Mv,wrapYoyo:Sv,distribute:Wh,random:Xh,snap:Hh,normalize:yv,getUnit:$t,clamp:gv,splitColor:Zh,toArray:Wn,selector:Zl,mapRange:Yh,pipe:xv,unitize:vv,interpolate:bv,shuffle:Vh},install:Dh,effects:Ml,ticker:En,updateRoot:an.updateRoot,plugins:bn,globalTimeline:xt,core:{PropTween:pn,globals:Lh,Tween:Ct,Timeline:an,Animation:fo,getCache:_r,_removeLinkedListItem:za,reverting:function(){return Vt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return vc=e}}};dn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ta[o]=Ct[o]});En.add(an.updateRoot);ns=Ta.to({},{duration:0});var Hv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Xv=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Hv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},El=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(Ut(r)&&(l={},dn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Xv(s,r)}}}},gn=Ta.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},El("roundProps",Kl),El("modifiers"),El("snap",Hh))||Ta;Ct.version=an.version=gn.version="3.14.1";Ph=1;Mc()&&ys();nt.Power0;nt.Power1;nt.Power2;nt.Power3;nt.Power4;nt.Linear;nt.Quad;nt.Cubic;nt.Quart;nt.Quint;nt.Strong;nt.Elastic;nt.Back;nt.SteppedEase;nt.Bounce;nt.Sine;nt.Expo;nt.Circ;/*!
 * CSSPlugin 3.14.1
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mf,Ui,as,Ic,hr,gf,Fc,qv=function(){return typeof window<"u"},Ei={},sr=180/Math.PI,ls=Math.PI/180,$r=Math.atan2,_f=1e8,Oc=/([A-Z])/g,Yv=/(left|right|width|margin|padding|x)/i,$v=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ec=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Kv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},fd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Qv=function(e,t,n){return e.style[t]=n},ey=function(e,t,n){return e.style.setProperty(t,n)},ty=function(e,t,n){return e._gsap[t]=n},ny=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},iy=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},ry=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},vt="transform",mn=vt+"Origin",sy=function o(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Ei&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=vi(i,s)}):this.tfm[e]=a.x?a[e]:vi(i,e),e===mn&&(this.tfm.zOrigin=a.zOrigin);else return ai.transform.split(",").forEach(function(s){return o.call(n,s,t)});if(this.props.indexOf(vt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(mn,t,"")),e=vt}(r||t)&&this.props.push(e,t,r[e])},dd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},oy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Oc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Fc(),(!r||!r.isStart)&&!n[vt]&&(dd(n),i.zOrigin&&n[mn]&&(n[mn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},pd=function(e,t){var n={target:e,props:[],revert:oy,save:sy};return e._gsap||gn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},md,tc=function(e,t){var n=Ui.createElementNS?Ui.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ui.createElement(e);return n&&n.style?n:Ui.createElement(e)},Dn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Oc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Ms(t)||t,1)||""},xf="O,Moz,ms,Ms,Webkit".split(","),Ms=function(e,t,n){var i=t||hr,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(xf[a]+e in r););return a<0?null:(a===3?"ms":a>=0?xf[a]:"")+e},nc=function(){qv()&&window.document&&(mf=window,Ui=mf.document,as=Ui.documentElement,hr=tc("div")||{style:{}},tc("div"),vt=Ms(vt),mn=vt+"Origin",hr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",md=!!Ms("perspective"),Fc=gn.core.reverting,Ic=1)},vf=function(e){var t=e.ownerSVGElement,n=tc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),as.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),as.removeChild(n),r},yf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},gd=function(e){var t,n;try{t=e.getBBox()}catch{t=vf(e),n=1}return t&&(t.width||t.height)||n||(t=vf(e)),t&&!t.width&&!t.x&&!t.y?{x:+yf(e,["x","cx","x1"])||0,y:+yf(e,["y","cy","y1"])||0,width:0,height:0}:t},_d=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gd(e))},$i=function(e,t){if(t){var n=e.style,i;t in Ei&&t!==mn&&(t=vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Oc,"-$1").toLowerCase())):n.removeAttribute(t)}},ki=function(e,t,n,i,r,a){var s=new pn(e._pt,t,n,0,1,a?hd:fd);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Mf={deg:1,rad:1,turn:1},ay={grid:1,flex:1},ji=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=hr.style,l=Yv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",m=i==="%",g,d,p,_;if(i===a||!r||Mf[i]||Mf[a])return r;if(a!=="px"&&!h&&(r=o(e,t,n,"px")),_=e.getCTM&&_d(e),(m||a==="%")&&(Ei[t]||~t.indexOf("adius")))return g=_?e.getBBox()[l?"width":"height"]:e[u],St(m?r/g*f:r/100*g);if(s[l?"width":"height"]=f+(h?a:i),d=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Ui||!d.appendChild)&&(d=Ui.body),p=d._gsap,p&&m&&p.width&&l&&p.time===En.time&&!p.uncache)return St(r/p.width*f);if(m&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=f+i,g=e[u],b?e.style[t]=b:$i(e,t)}else(m||a==="%")&&!ay[Dn(d,"display")]&&(s.position=Dn(e,"position")),d===e&&(s.position="static"),d.appendChild(hr),g=hr[u],d.removeChild(hr),s.position="absolute";return l&&m&&(p=_r(d),p.time=En.time,p.width=d[u]),St(h?g*r/f:g&&r?f/g*r:0)},vi=function(e,t,n,i){var r;return Ic||nc(),t in ai&&t!=="transform"&&(t=ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ei[t]&&t!=="transform"?(r=po(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ca(Dn(e,mn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ea[t]&&Ea[t](e,t,n)||Dn(e,t)||Ih(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ji(e,t,r,n)+n:r},ly=function(e,t,n,i){if(!n||n==="none"){var r=Ms(t,e,1),a=r&&Dn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Dn(e,"borderTopColor"))}var s=new pn(this._pt,e.style,t,0,1,ld),l=0,c=0,u,f,h,m,g,d,p,_,b,v,M,y;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Dn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(d=e.style[t],e.style[t]=i,i=Dn(e,t)||i,d?e.style[t]=d:$i(e,t)),u=[n,i],Jh(u),n=u[0],i=u[1],h=n.match(ts)||[],y=i.match(ts)||[],y.length){for(;f=ts.exec(i);)p=f[0],b=i.substring(l,f.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(d=h[c++]||"")&&(m=parseFloat(d)||0,M=d.substr((m+"").length),p.charAt(1)==="="&&(p=os(m,p)+M),_=parseFloat(p),v=p.substr((_+"").length),l=ts.lastIndex-v.length,v||(v=v||Rn.units[t]||M,l===i.length&&(i+=v,s.e+=v)),M!==v&&(m=ji(e,t,d,v)||0),s._pt={_next:s._pt,p:b||c===1?b:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?hd:fd;return Ah.test(i)&&(s.e=0),this._pt=s,s},Sf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Sf[n]||n,t[1]=Sf[i]||i,t.join(" ")},uy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Ei[s]&&(l=1,s=s==="transformOrigin"?mn:vt),$i(n,s);l&&($i(n,vt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",po(n,1),a.uncache=1,dd(i)))}},Ea={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new pn(e._pt,t,n,0,0,uy);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},ho=[1,0,0,1,0,0],xd={},vd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bf=function(e){var t=Dn(e,vt);return vd(t)?ho:t.substr(7).match(Ch).map(St)},zc=function(e,t){var n=e._gsap||_r(e),i=e.style,r=bf(e),a,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ho:r):(r===ho&&!e.offsetParent&&e!==as&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,s=e.nextElementSibling,as.appendChild(e)),r=bf(e),l?i.display=l:$i(e,"display"),c&&(s?a.insertBefore(e,s):a?a.appendChild(e):as.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ic=function(e,t,n,i,r,a){var s=e._gsap,l=r||zc(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,f=s.xOffset||0,h=s.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],b=l[5],v=t.split(" "),M=parseFloat(v[0])||0,y=parseFloat(v[1])||0,A,C,x,T;n?l!==ho&&(C=m*p-g*d)&&(x=M*(p/C)+y*(-d/C)+(d*b-p*_)/C,T=M*(-g/C)+y*(m/C)-(m*b-g*_)/C,M=x,y=T):(A=gd(e),M=A.x+(~v[0].indexOf("%")?M/100*A.width:M),y=A.y+(~(v[1]||v[0]).indexOf("%")?y/100*A.height:y)),i||i!==!1&&s.smooth?(_=M-c,b=y-u,s.xOffset=f+(_*m+b*d)-_,s.yOffset=h+(_*g+b*p)-b):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=y,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[mn]="0px 0px",a&&(ki(a,s,"xOrigin",c,M),ki(a,s,"yOrigin",u,y),ki(a,s,"xOffset",f,s.xOffset),ki(a,s,"yOffset",h,s.yOffset)),e.setAttribute("data-svg-origin",M+" "+y)},po=function(e,t){var n=e._gsap||new nd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),c=Dn(e,mn)||"0",u,f,h,m,g,d,p,_,b,v,M,y,A,C,x,T,D,k,z,I,R,W,J,q,H,te,P,B,$,oe,ie,fe;return u=f=h=d=p=_=b=v=M=0,m=g=1,n.svg=!!(e.getCTM&&_d(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),i.scale=i.rotate=i.translate="none"),C=zc(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),ic(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,C)),y=n.xOrigin||0,A=n.yOrigin||0,C!==ho&&(k=C[0],z=C[1],I=C[2],R=C[3],u=W=C[4],f=J=C[5],C.length===6?(m=Math.sqrt(k*k+z*z),g=Math.sqrt(R*R+I*I),d=k||z?$r(z,k)*sr:0,b=I||R?$r(I,R)*sr+d:0,b&&(g*=Math.abs(Math.cos(b*ls))),n.svg&&(u-=y-(y*k+A*I),f-=A-(y*z+A*R))):(fe=C[6],oe=C[7],P=C[8],B=C[9],$=C[10],ie=C[11],u=C[12],f=C[13],h=C[14],x=$r(fe,$),p=x*sr,x&&(T=Math.cos(-x),D=Math.sin(-x),q=W*T+P*D,H=J*T+B*D,te=fe*T+$*D,P=W*-D+P*T,B=J*-D+B*T,$=fe*-D+$*T,ie=oe*-D+ie*T,W=q,J=H,fe=te),x=$r(-I,$),_=x*sr,x&&(T=Math.cos(-x),D=Math.sin(-x),q=k*T-P*D,H=z*T-B*D,te=I*T-$*D,ie=R*D+ie*T,k=q,z=H,I=te),x=$r(z,k),d=x*sr,x&&(T=Math.cos(x),D=Math.sin(x),q=k*T+z*D,H=W*T+J*D,z=z*T-k*D,J=J*T-W*D,k=q,W=H),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=St(Math.sqrt(k*k+z*z+I*I)),g=St(Math.sqrt(J*J+fe*fe)),x=$r(W,J),b=Math.abs(x)>2e-4?x*sr:0,M=ie?1/(ie<0?-ie:ie):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!vd(Dn(e,vt)),q&&e.setAttribute("transform",q))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(m*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=St(m),n.scaleY=St(g),n.rotation=St(d)+s,n.rotationX=St(p)+s,n.rotationY=St(_)+s,n.skewX=b+s,n.skewY=v+s,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[mn]=Ca(c)),n.xOffset=n.yOffset=0,n.force3D=Rn.force3D,n.renderTransform=n.svg?hy:md?yd:fy,n.uncache=0,n},Ca=function(e){return(e=e.split(" "))[0]+" "+e[1]},Cl=function(e,t,n){var i=$t(t);return St(parseFloat(t)+parseFloat(ji(e,"x",n+"px",i)))+i},fy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,yd(e,t)},tr="0deg",Rs="0px",nr=") ",yd=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,b=n.target,v=n.zOrigin,M="",y=_==="auto"&&e&&e!==1||_===!0;if(v&&(f!==tr||u!==tr)){var A=parseFloat(u)*ls,C=Math.sin(A),x=Math.cos(A),T;A=parseFloat(f)*ls,T=Math.cos(A),a=Cl(b,a,C*T*-v),s=Cl(b,s,-Math.sin(A)*-v),l=Cl(b,l,x*T*-v+v)}p!==Rs&&(M+="perspective("+p+nr),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(y||a!==Rs||s!==Rs||l!==Rs)&&(M+=l!==Rs||y?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+nr),c!==tr&&(M+="rotate("+c+nr),u!==tr&&(M+="rotateY("+u+nr),f!==tr&&(M+="rotateX("+f+nr),(h!==tr||m!==tr)&&(M+="skew("+h+", "+m+nr),(g!==1||d!==1)&&(M+="scale("+g+", "+d+nr),b.style[vt]=M||"translate(0, 0)"},hy=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,b=n.forceCSS,v=parseFloat(a),M=parseFloat(s),y,A,C,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ls,c*=ls,y=Math.cos(l)*f,A=Math.sin(l)*f,C=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=ls,T=Math.tan(c-u),T=Math.sqrt(1+T*T),C*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),y*=T,A*=T)),y=St(y),A=St(A),C=St(C),x=St(x)):(y=f,x=h,A=C=0),(v&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(v=ji(m,"x",a,"px"),M=ji(m,"y",s,"px")),(g||d||p||_)&&(v=St(v+g-(g*y+d*C)+p),M=St(M+d-(g*A+d*x)+_)),(i||r)&&(T=m.getBBox(),v=St(v+i/100*T.width),M=St(M+r/100*T.height)),T="matrix("+y+","+A+","+C+","+x+","+v+","+M+")",m.setAttribute("transform",T),b&&(m.style[vt]=T)},dy=function(e,t,n,i,r){var a=360,s=Ut(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?sr:1),c=l-i,u=i+c+"deg",f,h;return s&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*_f)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*_f)%a-~~(c/a)*a)),e._pt=h=new pn(e._pt,t,n,i,c,jv),h.e=u,h.u="deg",e._props.push(n),h},wf=function(e,t){for(var n in t)e[n]=t[n];return e},py=function(e,t,n){var i=wf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,f,h,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[vt]=t,s=po(n,1),$i(n,vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[vt],a[vt]=t,s=po(n,1),a[vt]=c);for(l in Ei)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=$t(c),g=$t(u),f=m!==g?ji(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new pn(e._pt,s,l,f,h-f,ec),e._pt.u=g||0,e._props.push(l));wf(s,i)};dn("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});Ea[e>1?"border"+o:o]=function(s,l,c,u,f){var h,m;if(arguments.length<4)return h=a.map(function(g){return vi(s,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=h[d]=h[d]||h[(d-1)/2|0]}),s.init(l,m,f)}});var Md={name:"css",register:nc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,c,u,f,h,m,g,d,p,_,b,v,M,y,A,C,x,T;Ic||nc(),this.styles=this.styles||pd(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(bn[d]&&id(d,t,n,i,e,r)))){if(m=typeof u,g=Ea[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=co(u)),g)g(this,e,d,u,n)&&(C=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Xi.lastIndex=0,Xi.test(c)||(p=$t(c),_=$t(u),_?p!==_&&(c=ji(e,d,c,_)+_):p&&(u+=p)),this.add(s,"setProperty",c,u,i,r,0,0,d),a.push(d),x.push(d,0,s[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],Ut(c)&&~c.indexOf("random(")&&(c=co(c)),$t(c+"")||c==="auto"||(c+=Rn.units[d]||$t(vi(e,d))||""),(c+"").charAt(1)==="="&&(c=vi(e,d))):c=vi(e,d),h=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),f=parseFloat(u),d in ai&&(d==="autoAlpha"&&(h===1&&vi(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,s.visibility),ki(this,s,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=ai[d],~d.indexOf(",")&&(d=d.split(",")[0]))),v=d in Ei,v){if(this.styles.save(d),T=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=Dn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=u,u=Dn(e,"perspective"),D?e.style.perspective=D:$i(e,"perspective")}f=parseFloat(u)}if(M||(y=e._gsap,y.renderTransform&&!t.parseTransform||po(e,t.parseTransform),A=t.smoothOrigin!==!1&&y.smooth,M=this._pt=new pn(this._pt,s,vt,0,1,y.renderTransform,y,0,-1),M.dep=1),d==="scale")this._pt=new pn(this._pt,y,"scaleY",y.scaleY,(b?os(y.scaleY,b+f):f)-y.scaleY||0,ec),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(mn,0,s[mn]),u=cy(u),y.svg?ic(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==y.zOrigin&&ki(this,y,"zOrigin",y.zOrigin,_),ki(this,s,d,Ca(c),Ca(u)));continue}else if(d==="svgOrigin"){ic(e,u,1,A,0,this);continue}else if(d in xd){dy(this,y,d,h,b?os(h,b+u):u);continue}else if(d==="smoothOrigin"){ki(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){py(this,u,e);continue}}else d in s||(d=Ms(d)||d);if(v||(f||f===0)&&(h||h===0)&&!$v.test(u)&&d in s)p=(c+"").substr((h+"").length),f||(f=0),_=$t(u)||(d in Rn.units?Rn.units[d]:p),p!==_&&(h=ji(e,d,c,_)),this._pt=new pn(this._pt,v?y:s,d,h,(b?os(h,b+f):f)-h,!v&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?Jv:ec),this._pt.u=_||0,v&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=Kv):p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Zv);else if(d in s)ly.call(this,e,d,c,b?b+u:u);else if(d in e)this.add(e,d,c||e[d],b?b+u:u,i,r);else if(d!=="parseTransform"){bc(d,u);continue}v||(d in s?x.push(d,0,s[d]):typeof e[d]=="function"?x.push(d,2,e[d]()):x.push(d,1,c||e[d])),a.push(d)}}C&&cd(this)},render:function(e,t){if(t.tween._time||!Fc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vi,aliases:ai,getSetter:function(e,t,n){var i=ai[t];return i&&i.indexOf(",")<0&&(t=i),t in Ei&&t!==mn&&(e._gsap.x||vi(e,"x"))?n&&gf===n?t==="scale"?ny:ty:(gf=n||{})&&(t==="scale"?iy:ry):e.style&&!yc(e.style[t])?Qv:~t.indexOf("-")?ey:Lc(e,t)},core:{_removeProperty:$i,_getMatrix:zc}};gn.utils.checkPrefix=Ms;gn.core.getStyleSaver=pd;(function(o,e,t,n){var i=dn(o+","+e+","+t,function(r){Ei[r]=1});dn(e,function(r){Rn.units[r]="deg",xd[r]=1}),ai[i[13]]=o+","+e,dn(n,function(r){var a=r.split(":");ai[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Rn.units[o]="px"});gn.registerPlugin(Md);var Bi=gn.registerPlugin(Md)||gn;Bi.core.Tween;function Tf(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function my(o,e,t){return e&&Tf(o.prototype,e),t&&Tf(o,t),o}/*!
 * Observer 3.14.1
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gt,pa,Cn,Gi,Vi,cs,Sd,or,$s,bd,Si,jn,wd,Td=function(){return Gt||typeof window<"u"&&(Gt=window.gsap)&&Gt.registerPlugin&&Gt},Ed=1,is=[],Ke=[],ci=[],js=Date.now,rc=function(e,t){return t},gy=function(){var e=$s.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ke),i.push.apply(i,ci),Ke=n,ci=i,rc=function(a,s){return t[a](s)}},qi=function(e,t){return~ci.indexOf(e)&&ci[ci.indexOf(e)+1][t]},Zs=function(e){return!!~bd.indexOf(e)},Qt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},jo="scrollLeft",Zo="scrollTop",sc=function(){return Si&&Si.isPressed||Ke.cache++},Aa=function(e,t){var n=function i(r){if(r||r===0){Ed&&(Cn.history.scrollRestoration="manual");var a=Si&&Si.isPressed;r=i.v=Math.round(r)||(Si&&Si.iOS?1:0),e(r),i.cacheID=Ke.cache,a&&rc("ss",r)}else(t||Ke.cache!==i.cacheID||rc("ref"))&&(i.cacheID=Ke.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},ln={s:jo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Aa(function(o){return arguments.length?Cn.scrollTo(o,Lt.sc()):Cn.pageXOffset||Gi[jo]||Vi[jo]||cs[jo]||0})},Lt={s:Zo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ln,sc:Aa(function(o){return arguments.length?Cn.scrollTo(ln.sc(),o):Cn.pageYOffset||Gi[Zo]||Vi[Zo]||cs[Zo]||0})},un=function(e,t){return(t&&t._ctx&&t._ctx.selector||Gt.utils.toArray)(e)[0]||(typeof e=="string"&&Gt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},_y=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Zi=function(e,t){var n=t.s,i=t.sc;Zs(e)&&(e=Gi.scrollingElement||Vi);var r=Ke.indexOf(e),a=i===Lt.sc?1:2;!~r&&(r=Ke.push(e)-1),Ke[r+a]||Qt(e,"scroll",sc);var s=Ke[r+a],l=s||(Ke[r+a]=Aa(qi(e,n),!0)||(Zs(e)?i:Aa(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,s||(l.smooth=Gt.getProperty(e,"scrollBehavior")==="smooth"),l},oc=function(e,t,n){var i=e,r=e,a=js(),s=a,l=t||50,c=Math.max(500,l*3),u=function(g,d){var p=js();d||p-a>l?(r=i,i=g,s=a,a=p):n?i+=g:i=r+(g-r)/(p-s)*(a-s)},f=function(){r=i=n?0:i,s=a=0},h=function(g){var d=s,p=r,_=js();return(g||g===0)&&g!==i&&u(g),a===s||_-s>c?0:(i+(n?p:-p))/((n?_:a)-d)*1e3};return{update:u,reset:f,getVelocity:h}},Is=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ef=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Cd=function(){$s=Gt.core.globals().ScrollTrigger,$s&&$s.core&&gy()},Ad=function(e){return Gt=e||Td(),!pa&&Gt&&typeof document<"u"&&document.body&&(Cn=window,Gi=document,Vi=Gi.documentElement,cs=Gi.body,bd=[Cn,Gi,Vi,cs],Gt.utils.clamp,wd=Gt.core.context||function(){},or="onpointerenter"in cs?"pointer":"mouse",Sd=bt.isTouch=Cn.matchMedia&&Cn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Cn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,jn=bt.eventTypes=("ontouchstart"in Vi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Vi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ed=0},500),Cd(),pa=1),pa};ln.op=Lt;Ke.cache=0;var bt=function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){pa||Ad(Gt)||console.warn("Please gsap.registerPlugin(Observer)"),$s||Cd();var i=n.tolerance,r=n.dragMinimum,a=n.type,s=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,m=n.ignore,g=n.wheelSpeed,d=n.event,p=n.onDragStart,_=n.onDragEnd,b=n.onDrag,v=n.onPress,M=n.onRelease,y=n.onRight,A=n.onLeft,C=n.onUp,x=n.onDown,T=n.onChangeX,D=n.onChangeY,k=n.onChange,z=n.onToggleX,I=n.onToggleY,R=n.onHover,W=n.onHoverEnd,J=n.onMove,q=n.ignoreCheck,H=n.isNormalizer,te=n.onGestureStart,P=n.onGestureEnd,B=n.onWheel,$=n.onEnable,oe=n.onDisable,ie=n.onClick,fe=n.scrollSpeed,Z=n.capture,Le=n.allowClicks,me=n.lockAxis,Ce=n.onLockAxis;this.target=s=un(s)||Vi,this.vars=n,m&&(m=Gt.utils.toArray(m)),i=i||1e-9,r=r||0,g=g||1,fe=fe||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Cn.getComputedStyle(cs).lineHeight)||22);var xe,ze,De,he,Xe,it,rt,G=this,tt=0,ee=0,N=n.passive||!u&&n.passive!==!1,ae=Zi(s,ln),w=Zi(s,Lt),S=ae(),U=w(),Q=~a.indexOf("touch")&&!~a.indexOf("pointer")&&jn[0]==="pointerdown",le=Zs(s),re=s.ownerDocument||Gi,Me=[0,0,0],ce=[0,0,0],V=0,Se=function(){return V=js()},ne=function(Ae,Ve){return(G.event=Ae)&&m&&_y(Ae.target,m)||Ve&&Q&&Ae.pointerType!=="touch"||q&&q(Ae,Ve)},be=function(){G._vx.reset(),G._vy.reset(),ze.pause(),f&&f(G)},Ee=function(){var Ae=G.deltaX=Ef(Me),Ve=G.deltaY=Ef(ce),ge=Math.abs(Ae)>=i,Ue=Math.abs(Ve)>=i;k&&(ge||Ue)&&k(G,Ae,Ve,Me,ce),ge&&(y&&G.deltaX>0&&y(G),A&&G.deltaX<0&&A(G),T&&T(G),z&&G.deltaX<0!=tt<0&&z(G),tt=G.deltaX,Me[0]=Me[1]=Me[2]=0),Ue&&(x&&G.deltaY>0&&x(G),C&&G.deltaY<0&&C(G),D&&D(G),I&&G.deltaY<0!=ee<0&&I(G),ee=G.deltaY,ce[0]=ce[1]=ce[2]=0),(he||De)&&(J&&J(G),De&&(p&&De===1&&p(G),b&&b(G),De=0),he=!1),it&&!(it=!1)&&Ce&&Ce(G),Xe&&(B(G),Xe=!1),xe=0},we=function(Ae,Ve,ge){Me[ge]+=Ae,ce[ge]+=Ve,G._vx.update(Ae),G._vy.update(Ve),c?xe||(xe=requestAnimationFrame(Ee)):Ee()},We=function(Ae,Ve){me&&!rt&&(G.axis=rt=Math.abs(Ae)>Math.abs(Ve)?"x":"y",it=!0),rt!=="y"&&(Me[2]+=Ae,G._vx.update(Ae,!0)),rt!=="x"&&(ce[2]+=Ve,G._vy.update(Ve,!0)),c?xe||(xe=requestAnimationFrame(Ee)):Ee()},Je=function(Ae){if(!ne(Ae,1)){Ae=Is(Ae,u);var Ve=Ae.clientX,ge=Ae.clientY,Ue=Ve-G.x,Re=ge-G.y,ke=G.isDragging;G.x=Ve,G.y=ge,(ke||(Ue||Re)&&(Math.abs(G.startX-Ve)>=r||Math.abs(G.startY-ge)>=r))&&(De||(De=ke?2:1),ke||(G.isDragging=!0),We(Ue,Re))}},st=G.onPress=function(ve){ne(ve,1)||ve&&ve.button||(G.axis=rt=null,ze.pause(),G.isPressed=!0,ve=Is(ve),tt=ee=0,G.startX=G.x=ve.clientX,G.startY=G.y=ve.clientY,G._vx.reset(),G._vy.reset(),Qt(H?s:re,jn[1],Je,N,!0),G.deltaX=G.deltaY=0,v&&v(G))},L=G.onRelease=function(ve){if(!ne(ve,1)){Jt(H?s:re,jn[1],Je,!0);var Ae=!isNaN(G.y-G.startY),Ve=G.isDragging,ge=Ve&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ue=Is(ve);!ge&&Ae&&(G._vx.reset(),G._vy.reset(),u&&Le&&Gt.delayedCall(.08,function(){if(js()-V>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(re.createEvent){var Re=re.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,Cn,1,Ue.screenX,Ue.screenY,Ue.clientX,Ue.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Re)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&Ve&&!H&&ze.restart(!0),De&&Ee(),_&&Ve&&_(G),M&&M(G,ge)}},K=function(Ae){return Ae.touches&&Ae.touches.length>1&&(G.isGesturing=!0)&&te(Ae,G.isDragging)},se=function(){return(G.isGesturing=!1)||P(G)},ue=function(Ae){if(!ne(Ae)){var Ve=ae(),ge=w();we((Ve-S)*fe,(ge-U)*fe,1),S=Ve,U=ge,f&&ze.restart(!0)}},de=function(Ae){if(!ne(Ae)){Ae=Is(Ae,u),B&&(Xe=!0);var Ve=(Ae.deltaMode===1?l:Ae.deltaMode===2?Cn.innerHeight:1)*g;we(Ae.deltaX*Ve,Ae.deltaY*Ve,0),f&&!H&&ze.restart(!0)}},Ge=function(Ae){if(!ne(Ae)){var Ve=Ae.clientX,ge=Ae.clientY,Ue=Ve-G.x,Re=ge-G.y;G.x=Ve,G.y=ge,he=!0,f&&ze.restart(!0),(Ue||Re)&&We(Ue,Re)}},ot=function(Ae){G.event=Ae,R(G)},Qe=function(Ae){G.event=Ae,W(G)},At=function(Ae){return ne(Ae)||Is(Ae,u)&&ie(G)};ze=G._dc=Gt.delayedCall(h||.25,be).pause(),G.deltaX=G.deltaY=0,G._vx=oc(0,50,!0),G._vy=oc(0,50,!0),G.scrollX=ae,G.scrollY=w,G.isDragging=G.isGesturing=G.isPressed=!1,wd(this),G.enable=function(ve){return G.isEnabled||(Qt(le?re:s,"scroll",sc),a.indexOf("scroll")>=0&&Qt(le?re:s,"scroll",ue,N,Z),a.indexOf("wheel")>=0&&Qt(s,"wheel",de,N,Z),(a.indexOf("touch")>=0&&Sd||a.indexOf("pointer")>=0)&&(Qt(s,jn[0],st,N,Z),Qt(re,jn[2],L),Qt(re,jn[3],L),Le&&Qt(s,"click",Se,!0,!0),ie&&Qt(s,"click",At),te&&Qt(re,"gesturestart",K),P&&Qt(re,"gestureend",se),R&&Qt(s,or+"enter",ot),W&&Qt(s,or+"leave",Qe),J&&Qt(s,or+"move",Ge)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=he=De=!1,G._vx.reset(),G._vy.reset(),S=ae(),U=w(),ve&&ve.type&&st(ve),$&&$(G)),G},G.disable=function(){G.isEnabled&&(is.filter(function(ve){return ve!==G&&Zs(ve.target)}).length||Jt(le?re:s,"scroll",sc),G.isPressed&&(G._vx.reset(),G._vy.reset(),Jt(H?s:re,jn[1],Je,!0)),Jt(le?re:s,"scroll",ue,Z),Jt(s,"wheel",de,Z),Jt(s,jn[0],st,Z),Jt(re,jn[2],L),Jt(re,jn[3],L),Jt(s,"click",Se,!0),Jt(s,"click",At),Jt(re,"gesturestart",K),Jt(re,"gestureend",se),Jt(s,or+"enter",ot),Jt(s,or+"leave",Qe),Jt(s,or+"move",Ge),G.isEnabled=G.isPressed=G.isDragging=!1,oe&&oe(G))},G.kill=G.revert=function(){G.disable();var ve=is.indexOf(G);ve>=0&&is.splice(ve,1),Si===G&&(Si=0)},is.push(G),H&&Zs(s)&&(Si=G),G.enable(d)},my(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();bt.version="3.14.1";bt.create=function(o){return new bt(o)};bt.register=Ad;bt.getAll=function(){return is.slice()};bt.getById=function(o){return is.filter(function(e){return e.vars.id===o})[0]};Td()&&Gt.registerPlugin(bt);/*!
 * ScrollTrigger 3.14.1
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Te,Jr,Ze,ht,Tn,ct,Nc,Pa,mo,Ks,ks,Ko,qt,ka,ac,rn,Cf,Af,Qr,Pd,Al,Dd,nn,lc,Ld,Rd,Fi,cc,Uc,us,kc,Js,uc,Pl,Jo=1,Yt=Date.now,Dl=Yt(),Xn=0,Bs=0,Pf=function(e,t,n){var i=Sn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Df=function(e,t){return t&&(!Sn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},xy=function o(){return Bs&&requestAnimationFrame(o)},Lf=function(){return ka=1},Rf=function(){return ka=0},ii=function(e){return e},Gs=function(e){return Math.round(e*1e5)/1e5||0},Id=function(){return typeof window<"u"},Fd=function(){return Te||Id()&&(Te=window.gsap)&&Te.registerPlugin&&Te},Pr=function(e){return!!~Nc.indexOf(e)},Od=function(e){return(e==="Height"?kc:Ze["inner"+e])||Tn["client"+e]||ct["client"+e]},zd=function(e){return qi(e,"getBoundingClientRect")||(Pr(e)?function(){return va.width=Ze.innerWidth,va.height=kc,va}:function(){return Mi(e)})},vy=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=qi(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Od(r):e["client"+r])||0}},yy=function(e,t){return!t||~ci.indexOf(e)?zd(e):function(){return va}},li=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=qi(e,n))?a()-zd(e)()[r]:Pr(e)?(Tn[n]||ct[n])-Od(i):e[n]-e["offset"+i])},Qo=function(e,t){for(var n=0;n<Qr.length;n+=3)(!t||~t.indexOf(Qr[n+1]))&&e(Qr[n],Qr[n+1],Qr[n+2])},Sn=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},Vs=function(e){return typeof e=="number"},ar=function(e){return typeof e=="object"},Fs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ll=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},jr=Math.abs,Nd="left",Ud="top",Bc="right",Gc="bottom",Mr="width",Sr="height",Qs="Right",eo="Left",to="Top",no="Bottom",Et="padding",Bn="margin",Ss="Width",Vc="Height",Dt="px",Gn=function(e){return Ze.getComputedStyle(e)},My=function(e){var t=Gn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},If=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Mi=function(e,t){var n=t&&Gn(e)[ac]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Da=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},kd=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Sy=function(e){return function(t){return Te.utils.snap(kd(e),t)}},Wc=function(e){var t=Te.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var s;if(!r)return t(i);if(r>0){for(i-=a,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=a;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var s=t(i);return!r||Math.abs(s-i)<a||s-i<0==r<0?s:t(r<0?i-e:i+e)}},by=function(e){return function(t,n){return Wc(kd(e))(t,n.direction)}},ea=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},zt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Ot=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ta=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ff={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},na={toggleActions:"play",anticipatePin:0},La={top:0,left:0,center:.5,bottom:1,right:1},ma=function(e,t){if(Sn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in La?La[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ia=function(e,t,n,i,r,a,s,l){var c=r.startColor,u=r.endColor,f=r.fontSize,h=r.indent,m=r.fontWeight,g=ht.createElement("div"),d=Pr(n)||qi(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=d?ct:n,b=e.indexOf("start")!==-1,v=b?c:u,M="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&d?"fixed;":"absolute;"),(p||l||!d)&&(M+=(i===Lt?Bc:Gc)+":"+(a+parseFloat(h))+"px;"),s&&(M+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],ga(g,0,i,b),g},ga=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+Ss]=1,r["border"+s+Ss]=0,r[n.p]=t+"px",Te.set(e,r)},Ye=[],fc={},go,Of=function(){return Yt()-Xn>34&&(go||(go=requestAnimationFrame(wi)))},Zr=function(){(!nn||!nn.isPressed||nn.startX>ct.clientWidth)&&(Ke.cache++,nn?go||(go=requestAnimationFrame(wi)):wi(),Xn||Lr("scrollStart"),Xn=Yt())},Rl=function(){Rd=Ze.innerWidth,Ld=Ze.innerHeight},Ws=function(e){Ke.cache++,(e===!0||!qt&&!Dd&&!ht.fullscreenElement&&!ht.webkitFullscreenElement&&(!lc||Rd!==Ze.innerWidth||Math.abs(Ze.innerHeight-Ld)>Ze.innerHeight*.25))&&Pa.restart(!0)},Dr={},wy=[],Bd=function o(){return Ot($e,"scrollEnd",o)||dr(!0)},Lr=function(e){return Dr[e]&&Dr[e].map(function(t){return t()})||wy},Mn=[],Gd=function(e){for(var t=0;t<Mn.length;t+=5)(!e||Mn[t+4]&&Mn[t+4].query===e)&&(Mn[t].style.cssText=Mn[t+1],Mn[t].getBBox&&Mn[t].setAttribute("transform",Mn[t+2]||""),Mn[t+3].uncache=1)},Vd=function(){return Ke.forEach(function(e){return jt(e)&&++e.cacheID&&(e.rec=e())})},Hc=function(e,t){var n;for(rn=0;rn<Ye.length;rn++)n=Ye[rn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Js=!0,t&&Gd(t),t||Lr("revert")},Wd=function(e,t){Ke.cache++,(t||!sn)&&Ke.forEach(function(n){return jt(n)&&n.cacheID++&&(n.rec=0)}),Sn(e)&&(Ze.history.scrollRestoration=Uc=e)},sn,br=0,zf,Ty=function(){if(zf!==br){var e=zf=br;requestAnimationFrame(function(){return e===br&&dr(!0)})}},Hd=function(){ct.appendChild(us),kc=!nn&&us.offsetHeight||Ze.innerHeight,ct.removeChild(us)},Nf=function(e){return mo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},dr=function(e,t){if(Tn=ht.documentElement,ct=ht.body,Nc=[Ze,ht,Tn,ct],Xn&&!e&&!Js){zt($e,"scrollEnd",Bd);return}Hd(),sn=$e.isRefreshing=!0,Js||Vd();var n=Lr("refreshInit");Pd&&$e.sort(),t||Hc(),Ke.forEach(function(i){jt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ye.slice(0).forEach(function(i){return i.refresh()}),Js=!1,Ye.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),uc=1,Nf(!0),Ye.forEach(function(i){var r=li(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,s=i._startClamp&&i.start>=r;(a||s)&&i.setPositions(s?r-1:i.start,a?Math.max(s?r:i.start+1,r):i.end,!0)}),Nf(!1),uc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ke.forEach(function(i){jt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Wd(Uc,1),Pa.pause(),br++,sn=2,wi(2),Ye.forEach(function(i){return jt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),sn=$e.isRefreshing=!1,Lr("refresh")},hc=0,_a=1,io,wi=function(e){if(e===2||!sn&&!Js){$e.isUpdating=!0,io&&io.update(0);var t=Ye.length,n=Yt(),i=n-Dl>=50,r=t&&Ye[0].scroll();if(_a=hc>r?-1:1,sn||(hc=r),i&&(Xn&&!ka&&n-Xn>200&&(Xn=0,Lr("scrollEnd")),ks=Dl,Dl=n),_a<0){for(rn=t;rn-- >0;)Ye[rn]&&Ye[rn].update(0,i);_a=1}else for(rn=0;rn<t;rn++)Ye[rn]&&Ye[rn].update(0,i);$e.isUpdating=!1}go=0},dc=[Nd,Ud,Gc,Bc,Bn+no,Bn+Qs,Bn+to,Bn+eo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xa=dc.concat([Mr,Sr,"boxSizing","max"+Ss,"max"+Vc,"position",Bn,Et,Et+to,Et+Qs,Et+no,Et+eo]),Ey=function(e,t,n){fs(n);var i=e._gsap;if(i.spacerIsNative)fs(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Il=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=dc.length,a=t.style,s=e.style,l;r--;)l=dc[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),s[Gc]=s[Bc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Mr]=Da(e,ln)+Dt,a[Sr]=Da(e,Lt)+Dt,a[Et]=s[Bn]=s[Ud]=s[Nd]="0",fs(i),s[Mr]=s["max"+Ss]=n[Mr],s[Sr]=s["max"+Vc]=n[Sr],s[Et]=n[Et],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Cy=/([A-Z])/g,fs=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(Cy,"-$1").toLowerCase())}},ra=function(e){for(var t=xa.length,n=e.style,i=[],r=0;r<t;r++)i.push(xa[r],n[xa[r]]);return i.t=e,i},Ay=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,s;a<r;a+=2)s=e[a],i.push(s,s in t?t[s]:e[a+1]);return i.t=e.t,i},va={left:0,top:0},Uf=function(e,t,n,i,r,a,s,l,c,u,f,h,m,g){jt(e)&&(e=e(l)),Sn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?ma("0"+e.substr(3),n):0));var d=m?m.time():0,p,_,b;if(m&&m.seek(0),isNaN(e)||(e=+e),Vs(e))m&&(e=Te.utils.mapRange(m.scrollTrigger.start,m.scrollTrigger.end,0,h,e)),s&&ga(s,n,i,!0);else{jt(t)&&(t=t(l));var v=(e||"0").split(" "),M,y,A,C;b=un(t,l)||ct,M=Mi(b)||{},(!M||!M.left&&!M.top)&&Gn(b).display==="none"&&(C=b.style.display,b.style.display="block",M=Mi(b),C?b.style.display=C:b.style.removeProperty("display")),y=ma(v[0],M[i.d]),A=ma(v[1]||"0",n),e=M[i.p]-c[i.p]-u+y+r-A,s&&ga(s,A,i,n-A<20||s._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var x=e+n,T=a._isStart;p="scroll"+i.d2,ga(a,x,i,T&&x>20||!T&&(f?Math.max(ct[p],Tn[p]):a.parentNode[p])<=x+1),f&&(c=Mi(s),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Dt))}return m&&b&&(p=Mi(b),m.seek(h),_=Mi(b),m._caScrollDist=p[i.p]-_[i.p],e=e/m._caScrollDist*h),m&&m.seek(d),m?e:Math.round(e)},Py=/(webkit|moz|length|cssText|inset)/i,kf=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,s;if(t===ct){e._stOrig=r.cssText,s=Gn(e);for(a in s)!+a&&!Py.test(a)&&s[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=s[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},Xd=function(e,t,n){var i=t,r=i;return function(a){var s=Math.round(e());return s!==i&&s!==r&&Math.abs(s-i)>3&&Math.abs(s-r)>3&&(a=s,n&&n()),r=i,i=Math.round(a),i}},sa=function(e,t,n){var i={};i[t.p]="+="+n,Te.set(e,i)},Bf=function(e,t){var n=Zi(e,t),i="_scroll"+t.p2,r=function a(s,l,c,u,f){var h=a.tween,m=l.onComplete,g={};c=c||n();var d=Xd(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||s-c,h&&h.kill(),l[i]=s,l.inherit=!1,l.modifiers=g,g[i]=function(){return d(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){Ke.cache++,a.tween&&wi()},l.onComplete=function(){a.tween=0,m&&m.call(h)},h=a.tween=Te.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},zt(e,"wheel",n.wheelHandler),$e.isTouch&&zt(e,"touchmove",n.wheelHandler),r},$e=function(){function o(t,n){Jr||o.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),cc(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Bs){this.update=this.refresh=this.kill=ii;return}n=If(Sn(n)||Vs(n)||n.nodeType?{trigger:n}:n,na);var r=n,a=r.onUpdate,s=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,f=r.scrub,h=r.trigger,m=r.pin,g=r.pinSpacing,d=r.invalidateOnRefresh,p=r.anticipatePin,_=r.onScrubComplete,b=r.onSnapComplete,v=r.once,M=r.snap,y=r.pinReparent,A=r.pinSpacer,C=r.containerAnimation,x=r.fastScrollEnd,T=r.preventOverlaps,D=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ln:Lt,k=!f&&f!==0,z=un(n.scroller||Ze),I=Te.core.getCache(z),R=Pr(z),W=("pinType"in n?n.pinType:qi(z,"pinType")||R&&"fixed")==="fixed",J=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=k&&n.toggleActions.split(" "),H="markers"in n?n.markers:na.markers,te=R?0:parseFloat(Gn(z)["border"+D.p2+Ss])||0,P=this,B=n.onRefreshInit&&function(){return n.onRefreshInit(P)},$=vy(z,R,D),oe=yy(z,R),ie=0,fe=0,Z=0,Le=Zi(z,D),me,Ce,xe,ze,De,he,Xe,it,rt,G,tt,ee,N,ae,w,S,U,Q,le,re,Me,ce,V,Se,ne,be,Ee,we,We,Je,st,L,K,se,ue,de,Ge,ot,Qe;if(P._startClamp=P._endClamp=!1,P._dir=D,p*=45,P.scroller=z,P.scroll=C?C.time.bind(C):Le,ze=Le(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Pd=1,n.refreshPriority===-9999&&(io=P)),I.tweenScroll=I.tweenScroll||{top:Bf(z,Lt),left:Bf(z,ln)},P.tweenTo=me=I.tweenScroll[D.p],P.scrubDuration=function(ge){K=Vs(ge)&&ge,K?L?L.duration(ge):L=Te.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return _&&_(P)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),Je=0,l||(l=i.vars.id)),M&&((!ar(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in ct.style&&Te.set(R?[ct,Tn]:z,{scrollBehavior:"auto"}),Ke.forEach(function(ge){return jt(ge)&&ge.target===(R?ht.scrollingElement||Tn:z)&&(ge.smooth=!1)}),xe=jt(M.snapTo)?M.snapTo:M.snapTo==="labels"?Sy(i):M.snapTo==="labelsDirectional"?by(i):M.directional!==!1?function(ge,Ue){return Wc(M.snapTo)(ge,Yt()-fe<500?0:Ue.direction)}:Te.utils.snap(M.snapTo),se=M.duration||{min:.1,max:2},se=ar(se)?Ks(se.min,se.max):Ks(se,se),ue=Te.delayedCall(M.delay||K/2||.1,function(){var ge=Le(),Ue=Yt()-fe<500,Re=me.tween;if((Ue||Math.abs(P.getVelocity())<10)&&!Re&&!ka&&ie!==ge){var ke=(ge-he)/ae,E=i&&!k?i.totalProgress():ke,F=Ue?0:(E-st)/(Yt()-ks)*1e3||0,X=Te.utils.clamp(-ke,1-ke,jr(F/2)*F/.185),O=ke+(M.inertia===!1?0:X),Y,_e,ye=M,Oe=ye.onStart,Pe=ye.onInterrupt,Ne=ye.onComplete;if(Y=xe(O,P),Vs(Y)||(Y=O),_e=Math.max(0,Math.round(he+Y*ae)),ge<=Xe&&ge>=he&&_e!==ge){if(Re&&!Re._initted&&Re.data<=jr(_e-ge))return;M.inertia===!1&&(X=Y-ke),me(_e,{duration:se(jr(Math.max(jr(O-E),jr(Y-E))*.185/F/.05||0)),ease:M.ease||"power3",data:jr(_e-ge),onInterrupt:function(){return ue.restart(!0)&&Pe&&Pe(P)},onComplete:function(){P.update(),ie=Le(),i&&!k&&(L?L.resetTo("totalProgress",Y,i._tTime/i._tDur):i.progress(Y)),Je=st=i&&!k?i.totalProgress():P.progress,b&&b(P),Ne&&Ne(P)}},ge,X*ae,_e-ge-X*ae),Oe&&Oe(P,me.tween)}}else P.isActive&&ie!==ge&&ue.restart(!0)}).pause()),l&&(fc[l]=P),h=P.trigger=un(h||m!==!0&&m),Qe=h&&h._gsap&&h._gsap.stRevert,Qe&&(Qe=Qe(P)),m=m===!0?h:un(m),Sn(s)&&(s={targets:h,className:s}),m&&(g===!1||g===Bn||(g=!g&&m.parentNode&&m.parentNode.style&&Gn(m.parentNode).display==="flex"?!1:Et),P.pin=m,Ce=Te.core.getCache(m),Ce.spacer?w=Ce.pinState:(A&&(A=un(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ce.spacerIsNative=!!A,A&&(Ce.spacerState=ra(A))),Ce.spacer=Q=A||ht.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Ce.pinState=w=ra(m)),n.force3D!==!1&&Te.set(m,{force3D:!0}),P.spacer=Q=Ce.spacer,We=Gn(m),Se=We[g+D.os2],re=Te.getProperty(m),Me=Te.quickSetter(m,D.a,Dt),Il(m,Q,We),U=ra(m)),H){ee=ar(H)?If(H,Ff):Ff,G=ia("scroller-start",l,z,D,ee,0),tt=ia("scroller-end",l,z,D,ee,0,G),le=G["offset"+D.op.d2];var At=un(qi(z,"content")||z);it=this.markerStart=ia("start",l,At,D,ee,le,0,C),rt=this.markerEnd=ia("end",l,At,D,ee,le,0,C),C&&(ot=Te.quickSetter([it,rt],D.a,Dt)),!W&&!(ci.length&&qi(z,"fixedMarkers")===!0)&&(My(R?ct:z),Te.set([G,tt],{force3D:!0}),be=Te.quickSetter(G,D.a,Dt),we=Te.quickSetter(tt,D.a,Dt))}if(C){var ve=C.vars.onUpdate,Ae=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){P.update(0,0,1),ve&&ve.apply(C,Ae||[])})}if(P.previous=function(){return Ye[Ye.indexOf(P)-1]},P.next=function(){return Ye[Ye.indexOf(P)+1]},P.revert=function(ge,Ue){if(!Ue)return P.kill(!0);var Re=ge!==!1||!P.enabled,ke=qt;Re!==P.isReverted&&(Re&&(de=Math.max(Le(),P.scroll.rec||0),Z=P.progress,Ge=i&&i.progress()),it&&[it,rt,G,tt].forEach(function(E){return E.style.display=Re?"none":"block"}),Re&&(qt=P,P.update(Re)),m&&(!y||!P.isActive)&&(Re?Ey(m,Q,w):Il(m,Q,Gn(m),ne)),Re||P.update(Re),qt=ke,P.isReverted=Re)},P.refresh=function(ge,Ue,Re,ke){if(!((qt||!P.enabled)&&!Ue)){if(m&&ge&&Xn){zt(o,"scrollEnd",Bd);return}!sn&&B&&B(P),qt=P,me.tween&&!Re&&(me.tween.kill(),me.tween=0),L&&L.pause(),d&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ht){return Ht.vars.immediateRender&&Ht.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var E=$(),F=oe(),X=C?C.duration():li(z,D),O=ae<=.01||!ae,Y=0,_e=ke||0,ye=ar(Re)?Re.end:n.end,Oe=n.endTrigger||h,Pe=ar(Re)?Re.start:n.start||(n.start===0||!h?0:m?"0 0":"0 100%"),Ne=P.pinnedContainer=n.pinnedContainer&&un(n.pinnedContainer,P),Be=h&&Math.max(0,Ye.indexOf(P))||0,Fe=Be,je,at,kt,On,et,Ie,cn,yt,ei,Ai,Wt,fi,wt;for(H&&ar(Re)&&(fi=Te.getProperty(G,D.p),wt=Te.getProperty(tt,D.p));Fe-- >0;)Ie=Ye[Fe],Ie.end||Ie.refresh(0,1)||(qt=P),cn=Ie.pin,cn&&(cn===h||cn===m||cn===Ne)&&!Ie.isReverted&&(Ai||(Ai=[]),Ai.unshift(Ie),Ie.revert(!0,!0)),Ie!==Ye[Fe]&&(Be--,Fe--);for(jt(Pe)&&(Pe=Pe(P)),Pe=Pf(Pe,"start",P),he=Uf(Pe,h,E,D,Le(),it,G,P,F,te,W,X,C,P._startClamp&&"_startClamp")||(m?-.001:0),jt(ye)&&(ye=ye(P)),Sn(ye)&&!ye.indexOf("+=")&&(~ye.indexOf(" ")?ye=(Sn(Pe)?Pe.split(" ")[0]:"")+ye:(Y=ma(ye.substr(2),E),ye=Sn(Pe)?Pe:(C?Te.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,he):he)+Y,Oe=h)),ye=Pf(ye,"end",P),Xe=Math.max(he,Uf(ye||(Oe?"100% 0":X),Oe,E,D,Le()+Y,rt,tt,P,F,te,W,X,C,P._endClamp&&"_endClamp"))||-.001,Y=0,Fe=Be;Fe--;)Ie=Ye[Fe]||{},cn=Ie.pin,cn&&Ie.start-Ie._pinPush<=he&&!C&&Ie.end>0&&(je=Ie.end-(P._startClamp?Math.max(0,Ie.start):Ie.start),(cn===h&&Ie.start-Ie._pinPush<he||cn===Ne)&&isNaN(Pe)&&(Y+=je*(1-Ie.progress)),cn===m&&(_e+=je));if(he+=Y,Xe+=Y,P._startClamp&&(P._startClamp+=Y),P._endClamp&&!sn&&(P._endClamp=Xe||-.001,Xe=Math.min(Xe,li(z,D))),ae=Xe-he||(he-=.01)&&.001,O&&(Z=Te.utils.clamp(0,1,Te.utils.normalize(he,Xe,de))),P._pinPush=_e,it&&Y&&(je={},je[D.a]="+="+Y,Ne&&(je[D.p]="-="+Le()),Te.set([it,rt],je)),m&&!(uc&&P.end>=li(z,D)))je=Gn(m),On=D===Lt,kt=Le(),ce=parseFloat(re(D.a))+_e,!X&&Xe>1&&(Wt=(R?ht.scrollingElement||Tn:z).style,Wt={style:Wt,value:Wt["overflow"+D.a.toUpperCase()]},R&&Gn(ct)["overflow"+D.a.toUpperCase()]!=="scroll"&&(Wt.style["overflow"+D.a.toUpperCase()]="scroll")),Il(m,Q,je),U=ra(m),at=Mi(m,!0),yt=W&&Zi(z,On?ln:Lt)(),g?(ne=[g+D.os2,ae+_e+Dt],ne.t=Q,Fe=g===Et?Da(m,D)+ae+_e:0,Fe&&(ne.push(D.d,Fe+Dt),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=Fe+Dt)),fs(ne),Ne&&Ye.forEach(function(Ht){Ht.pin===Ne&&Ht.vars.pinSpacing!==!1&&(Ht._subPinOffset=!0)}),W&&Le(de)):(Fe=Da(m,D),Fe&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=Fe+Dt)),W&&(et={top:at.top+(On?kt-he:yt)+Dt,left:at.left+(On?yt:kt-he)+Dt,boxSizing:"border-box",position:"fixed"},et[Mr]=et["max"+Ss]=Math.ceil(at.width)+Dt,et[Sr]=et["max"+Vc]=Math.ceil(at.height)+Dt,et[Bn]=et[Bn+to]=et[Bn+Qs]=et[Bn+no]=et[Bn+eo]="0",et[Et]=je[Et],et[Et+to]=je[Et+to],et[Et+Qs]=je[Et+Qs],et[Et+no]=je[Et+no],et[Et+eo]=je[Et+eo],S=Ay(w,et,y),sn&&Le(0)),i?(ei=i._initted,Al(1),i.render(i.duration(),!0,!0),V=re(D.a)-ce+ae+_e,Ee=Math.abs(ae-V)>1,W&&Ee&&S.splice(S.length-2,2),i.render(0,!0,!0),ei||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Al(0)):V=ae,Wt&&(Wt.value?Wt.style["overflow"+D.a.toUpperCase()]=Wt.value:Wt.style.removeProperty("overflow-"+D.a));else if(h&&Le()&&!C)for(at=h.parentNode;at&&at!==ct;)at._pinOffset&&(he-=at._pinOffset,Xe-=at._pinOffset),at=at.parentNode;Ai&&Ai.forEach(function(Ht){return Ht.revert(!1,!0)}),P.start=he,P.end=Xe,ze=De=sn?de:Le(),!C&&!sn&&(ze<de&&Le(de),P.scroll.rec=0),P.revert(!1,!0),fe=Yt(),ue&&(ie=-1,ue.restart(!0)),qt=0,i&&k&&(i._initted||Ge)&&i.progress()!==Ge&&i.progress(Ge||0,!0).render(i.time(),!0,!0),(O||Z!==P.progress||C||d||i&&!i._initted)&&(i&&!k&&(i._initted||Z||i.vars.immediateRender!==!1)&&i.totalProgress(C&&he<-.001&&!Z?Te.utils.normalize(he,Xe,0):Z,!0),P.progress=O||(ze-he)/ae===Z?0:Z),m&&g&&(Q._pinOffset=Math.round(P.progress*V)),L&&L.invalidate(),isNaN(fi)||(fi-=Te.getProperty(G,D.p),wt-=Te.getProperty(tt,D.p),sa(G,D,fi),sa(it,D,fi-(ke||0)),sa(tt,D,wt),sa(rt,D,wt-(ke||0))),O&&!sn&&P.update(),u&&!sn&&!N&&(N=!0,u(P),N=!1)}},P.getVelocity=function(){return(Le()-De)/(Yt()-ks)*1e3||0},P.endAnimation=function(){Fs(P.callbackAnimation),i&&(L?L.progress(1):i.paused()?k||Fs(i,P.direction<0,1):Fs(i,i.reversed()))},P.labelToScroll=function(ge){return i&&i.labels&&(he||P.refresh()||he)+i.labels[ge]/i.duration()*ae||0},P.getTrailing=function(ge){var Ue=Ye.indexOf(P),Re=P.direction>0?Ye.slice(0,Ue).reverse():Ye.slice(Ue+1);return(Sn(ge)?Re.filter(function(ke){return ke.vars.preventOverlaps===ge}):Re).filter(function(ke){return P.direction>0?ke.end<=he:ke.start>=Xe})},P.update=function(ge,Ue,Re){if(!(C&&!Re&&!ge)){var ke=sn===!0?de:P.scroll(),E=ge?0:(ke-he)/ae,F=E<0?0:E>1?1:E||0,X=P.progress,O,Y,_e,ye,Oe,Pe,Ne,Be;if(Ue&&(De=ze,ze=C?Le():ke,M&&(st=Je,Je=i&&!k?i.totalProgress():F)),p&&m&&!qt&&!Jo&&Xn&&(!F&&he<ke+(ke-De)/(Yt()-ks)*p?F=1e-4:F===1&&Xe>ke+(ke-De)/(Yt()-ks)*p&&(F=.9999)),F!==X&&P.enabled){if(O=P.isActive=!!F&&F<1,Y=!!X&&X<1,Pe=O!==Y,Oe=Pe||!!F!=!!X,P.direction=F>X?1:-1,P.progress=F,Oe&&!qt&&(_e=F&&!X?0:F===1?1:X===1?2:3,k&&(ye=!Pe&&q[_e+1]!=="none"&&q[_e+1]||q[_e],Be=i&&(ye==="complete"||ye==="reset"||ye in i))),T&&(Pe||Be)&&(Be||f||!i)&&(jt(T)?T(P):P.getTrailing(T).forEach(function(kt){return kt.endAnimation()})),k||(L&&!qt&&!Jo?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",F,i._tTime/i._tDur):(L.vars.totalProgress=F,L.invalidate().restart())):i&&i.totalProgress(F,!!(qt&&(fe||ge)))),m){if(ge&&g&&(Q.style[g+D.os2]=Se),!W)Me(Gs(ce+V*F));else if(Oe){if(Ne=!ge&&F>X&&Xe+1>ke&&ke+1>=li(z,D),y)if(!ge&&(O||Ne)){var Fe=Mi(m,!0),je=ke-he;kf(m,ct,Fe.top+(D===Lt?je:0)+Dt,Fe.left+(D===Lt?0:je)+Dt)}else kf(m,Q);fs(O||Ne?S:U),Ee&&F<1&&O||Me(ce+(F===1&&!Ne?V:0))}}M&&!me.tween&&!qt&&!Jo&&ue.restart(!0),s&&(Pe||v&&F&&(F<1||!Pl))&&mo(s.targets).forEach(function(kt){return kt.classList[O||v?"add":"remove"](s.className)}),a&&!k&&!ge&&a(P),Oe&&!qt?(k&&(Be&&(ye==="complete"?i.pause().totalProgress(1):ye==="reset"?i.restart(!0).pause():ye==="restart"?i.restart(!0):i[ye]()),a&&a(P)),(Pe||!Pl)&&(c&&Pe&&Ll(P,c),J[_e]&&Ll(P,J[_e]),v&&(F===1?P.kill(!1,1):J[_e]=0),Pe||(_e=F===1?1:3,J[_e]&&Ll(P,J[_e]))),x&&!O&&Math.abs(P.getVelocity())>(Vs(x)?x:2500)&&(Fs(P.callbackAnimation),L?L.progress(1):Fs(i,ye==="reverse"?1:!F,1))):k&&a&&!qt&&a(P)}if(we){var at=C?ke/C.duration()*(C._caScrollDist||0):ke;be(at+(G._isFlipped?1:0)),we(at)}ot&&ot(-ke/C.duration()*(C._caScrollDist||0))}},P.enable=function(ge,Ue){P.enabled||(P.enabled=!0,zt(z,"resize",Ws),R||zt(z,"scroll",Zr),B&&zt(o,"refreshInit",B),ge!==!1&&(P.progress=Z=0,ze=De=ie=Le()),Ue!==!1&&P.refresh())},P.getTween=function(ge){return ge&&me?me.tween:L},P.setPositions=function(ge,Ue,Re,ke){if(C){var E=C.scrollTrigger,F=C.duration(),X=E.end-E.start;ge=E.start+X*ge/F,Ue=E.start+X*Ue/F}P.refresh(!1,!1,{start:Df(ge,Re&&!!P._startClamp),end:Df(Ue,Re&&!!P._endClamp)},ke),P.update()},P.adjustPinSpacing=function(ge){if(ne&&ge){var Ue=ne.indexOf(D.d)+1;ne[Ue]=parseFloat(ne[Ue])+ge+Dt,ne[1]=parseFloat(ne[1])+ge+Dt,fs(ne)}},P.disable=function(ge,Ue){if(ge!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ue||L&&L.pause(),de=0,Ce&&(Ce.uncache=1),B&&Ot(o,"refreshInit",B),ue&&(ue.pause(),me.tween&&me.tween.kill()&&(me.tween=0)),!R)){for(var Re=Ye.length;Re--;)if(Ye[Re].scroller===z&&Ye[Re]!==P)return;Ot(z,"resize",Ws),R||Ot(z,"scroll",Zr)}},P.kill=function(ge,Ue){P.disable(ge,Ue),L&&!Ue&&L.kill(),l&&delete fc[l];var Re=Ye.indexOf(P);Re>=0&&Ye.splice(Re,1),Re===rn&&_a>0&&rn--,Re=0,Ye.forEach(function(ke){return ke.scroller===P.scroller&&(Re=1)}),Re||sn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,ge&&i.revert({kill:!1}),Ue||i.kill()),it&&[it,rt,G,tt].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),io===P&&(io=0),m&&(Ce&&(Ce.uncache=1),Re=0,Ye.forEach(function(ke){return ke.pin===m&&Re++}),Re||(Ce.spacer=0)),n.onKill&&n.onKill(P)},Ye.push(P),P.enable(!1,!1),Qe&&Qe(P),i&&i.add&&!ae){var Ve=P.update;P.update=function(){P.update=Ve,Ke.cache++,he||Xe||P.refresh()},Te.delayedCall(.01,P.update),ae=.01,he=Xe=0}else P.refresh();m&&Ty()},o.register=function(n){return Jr||(Te=n||Fd(),Id()&&window.document&&o.enable(),Jr=Bs),Jr},o.defaults=function(n){if(n)for(var i in n)na[i]=n[i];return na},o.disable=function(n,i){Bs=0,Ye.forEach(function(a){return a[i?"kill":"disable"](n)}),Ot(Ze,"wheel",Zr),Ot(ht,"scroll",Zr),clearInterval(Ko),Ot(ht,"touchcancel",ii),Ot(ct,"touchstart",ii),ea(Ot,ht,"pointerdown,touchstart,mousedown",Lf),ea(Ot,ht,"pointerup,touchend,mouseup",Rf),Pa.kill(),Qo(Ot);for(var r=0;r<Ke.length;r+=3)ta(Ot,Ke[r],Ke[r+1]),ta(Ot,Ke[r],Ke[r+2])},o.enable=function(){if(Ze=window,ht=document,Tn=ht.documentElement,ct=ht.body,Te&&(mo=Te.utils.toArray,Ks=Te.utils.clamp,cc=Te.core.context||ii,Al=Te.core.suppressOverwrites||ii,Uc=Ze.history.scrollRestoration||"auto",hc=Ze.pageYOffset||0,Te.core.globals("ScrollTrigger",o),ct)){Bs=1,us=document.createElement("div"),us.style.height="100vh",us.style.position="absolute",Hd(),xy(),bt.register(Te),o.isTouch=bt.isTouch,Fi=bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lc=bt.isTouch===1,zt(Ze,"wheel",Zr),Nc=[Ze,ht,Tn,ct],Te.matchMedia?(o.matchMedia=function(c){var u=Te.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Te.addEventListener("matchMediaInit",function(){Vd(),Hc()}),Te.addEventListener("matchMediaRevert",function(){return Gd()}),Te.addEventListener("matchMedia",function(){dr(0,1),Lr("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return Rl(),Rl})):console.warn("Requires GSAP 3.11.0 or later"),Rl(),zt(ht,"scroll",Zr);var n=ct.hasAttribute("style"),i=ct.style,r=i.borderTopStyle,a=Te.core.Animation.prototype,s,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",s=Mi(ct),Lt.m=Math.round(s.top+Lt.sc())||0,ln.m=Math.round(s.left+ln.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(ct.setAttribute("style",""),ct.removeAttribute("style")),Ko=setInterval(Of,250),Te.delayedCall(.5,function(){return Jo=0}),zt(ht,"touchcancel",ii),zt(ct,"touchstart",ii),ea(zt,ht,"pointerdown,touchstart,mousedown",Lf),ea(zt,ht,"pointerup,touchend,mouseup",Rf),ac=Te.utils.checkPrefix("transform"),xa.push(ac),Jr=Yt(),Pa=Te.delayedCall(.2,dr).pause(),Qr=[ht,"visibilitychange",function(){var c=Ze.innerWidth,u=Ze.innerHeight;ht.hidden?(Cf=c,Af=u):(Cf!==c||Af!==u)&&Ws()},ht,"DOMContentLoaded",dr,Ze,"load",dr,Ze,"resize",Ws],Qo(zt),Ye.forEach(function(c){return c.enable(0,1)}),l=0;l<Ke.length;l+=3)ta(Ot,Ke[l],Ke[l+1]),ta(Ot,Ke[l],Ke[l+2])}},o.config=function(n){"limitCallbacks"in n&&(Pl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ko)||(Ko=i)&&setInterval(Of,i),"ignoreMobileResize"in n&&(lc=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Qo(Ot)||Qo(zt,n.autoRefreshEvents||"none"),Dd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,i){var r=un(n),a=Ke.indexOf(r),s=Pr(r);~a&&Ke.splice(a,s?6:2),i&&(s?ci.unshift(Ze,i,ct,i,Tn,i):ci.unshift(r,i))},o.clearMatchMedia=function(n){Ye.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},o.isInViewport=function(n,i,r){var a=(Sn(n)?un(n):n).getBoundingClientRect(),s=a[r?Mr:Sr]*i||0;return r?a.right-s>0&&a.left+s<Ze.innerWidth:a.bottom-s>0&&a.top+s<Ze.innerHeight},o.positionInViewport=function(n,i,r){Sn(n)&&(n=un(n));var a=n.getBoundingClientRect(),s=a[r?Mr:Sr],l=i==null?s/2:i in La?La[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return r?(a.left+l)/Ze.innerWidth:(a.top+l)/Ze.innerHeight},o.killAll=function(n){if(Ye.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Dr.killAll||[];Dr={},i.forEach(function(r){return r()})}},o}();$e.version="3.14.1";$e.saveStyles=function(o){return o?mo(o).forEach(function(e){if(e&&e.style){var t=Mn.indexOf(e);t>=0&&Mn.splice(t,5),Mn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),cc())}}):Mn};$e.revert=function(o,e){return Hc(!o,e)};$e.create=function(o,e){return new $e(o,e)};$e.refresh=function(o){return o?Ws(!0):(Jr||$e.register())&&dr(!0)};$e.update=function(o){return++Ke.cache&&wi(o===!0?2:0)};$e.clearScrollMemory=Wd;$e.maxScroll=function(o,e){return li(o,e?ln:Lt)};$e.getScrollFunc=function(o,e){return Zi(un(o),e?ln:Lt)};$e.getById=function(o){return fc[o]};$e.getAll=function(){return Ye.filter(function(o){return o.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!Xn};$e.snapDirectional=Wc;$e.addEventListener=function(o,e){var t=Dr[o]||(Dr[o]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(o,e){var t=Dr[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};$e.batch=function(o,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var f=[],h=[],m=Te.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||m.restart(!0),f.push(g.trigger),h.push(g),r<=f.length&&m.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&jt(e[s])&&s!=="onRefreshInit"?a(s,e[s]):e[s];return jt(r)&&(r=r(),zt($e,"refresh",function(){return r=e.batchMax()})),mo(o).forEach(function(l){var c={};for(s in n)c[s]=n[s];c.trigger=l,t.push($e.create(c))}),t};var Gf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Fl=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(bt.isTouch?" pinch-zoom":""):"none",e===Tn&&o(ct,t)},oa={auto:1,scroll:1},Dy=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||Te.core.getCache(r),s=Yt(),l;if(!a._isScrollT||s-a._isScrollT>2e3){for(;r&&r!==ct&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(oa[(l=Gn(r)).overflowY]||oa[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!Pr(r)&&(oa[(l=Gn(r)).overflowY]||oa[l.overflowX]),a._isScrollT=s}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},qd=function(e,t,n,i){return bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Dy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&zt(ht,bt.eventTypes[0],Wf,!1,!0)},onDisable:function(){return Ot(ht,bt.eventTypes[0],Wf,!0)}})},Ly=/(input|label|select|textarea)/i,Vf,Wf=function(e){var t=Ly.test(e.target.tagName);(t||Vf)&&(e._gsapAllow=!0,Vf=t)},Ry=function(e){ar(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,s,l,c=un(e.target)||Tn,u=Te.core.globals().ScrollSmoother,f=u&&u.get(),h=Fi&&(e.content&&un(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),m=Zi(c,Lt),g=Zi(c,ln),d=1,p=(bt.isTouch&&Ze.visualViewport?Ze.visualViewport.scale*Ze.visualViewport.width:Ze.outerWidth)/Ze.innerWidth,_=0,b=jt(i)?function(){return i(s)}:function(){return i||2.8},v,M,y=qd(c,e.type,!0,r),A=function(){return M=!1},C=ii,x=ii,T=function(){l=li(c,Lt),x=Ks(Fi?1:0,l),n&&(C=Ks(0,li(c,ln))),v=br},D=function(){h._gsap.y=Gs(parseFloat(h._gsap.y)+m.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",m.offset=m.cacheID=0},k=function(){if(M){requestAnimationFrame(A);var H=Gs(s.deltaY/2),te=x(m.v-H);if(h&&te!==m.v+m.offset){m.offset=te-m.v;var P=Gs((parseFloat(h&&h._gsap.y)||0)-m.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",m.cacheID=Ke.cache,wi()}return!0}m.offset&&D(),M=!0},z,I,R,W,J=function(){T(),z.isActive()&&z.vars.scrollY>l&&(m()>l?z.progress(1)&&m(l):z.resetTo("scrollY",l))};return h&&Te.set(h,{y:"+=0"}),e.ignoreCheck=function(q){return Fi&&q.type==="touchmove"&&k()||d>1.05&&q.type!=="touchstart"||s.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){M=!1;var q=d;d=Gs((Ze.visualViewport&&Ze.visualViewport.scale||1)/p),z.pause(),q!==d&&Fl(c,d>1.01?!0:n?!1:"x"),I=g(),R=m(),T(),v=br},e.onRelease=e.onGestureStart=function(q,H){if(m.offset&&D(),!H)W.restart(!0);else{Ke.cache++;var te=b(),P,B;n&&(P=g(),B=P+te*.05*-q.velocityX/.227,te*=Gf(g,P,B,li(c,ln)),z.vars.scrollX=C(B)),P=m(),B=P+te*.05*-q.velocityY/.227,te*=Gf(m,P,B,li(c,Lt)),z.vars.scrollY=x(B),z.invalidate().duration(te).play(.01),(Fi&&z.vars.scrollY>=l||P>=l-1)&&Te.to({},{onUpdate:J,duration:te})}a&&a(q)},e.onWheel=function(){z._ts&&z.pause(),Yt()-_>1e3&&(v=0,_=Yt())},e.onChange=function(q,H,te,P,B){if(br!==v&&T(),H&&n&&g(C(P[2]===H?I+(q.startX-q.x):g()+H-P[1])),te){m.offset&&D();var $=B[2]===te,oe=$?R+q.startY-q.y:m()+te-B[1],ie=x(oe);$&&oe!==ie&&(R+=ie-oe),m(ie)}(te||H)&&wi()},e.onEnable=function(){Fl(c,n?!1:"x"),$e.addEventListener("refresh",J),zt(Ze,"resize",J),m.smooth&&(m.target.style.scrollBehavior="auto",m.smooth=g.smooth=!1),y.enable()},e.onDisable=function(){Fl(c,!0),Ot(Ze,"resize",J),$e.removeEventListener("refresh",J),y.kill()},e.lockAxis=e.lockAxis!==!1,s=new bt(e),s.iOS=Fi,Fi&&!m()&&m(1),Fi&&Te.ticker.add(ii),W=s._dc,z=Te.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Xd(m,m(),function(){return z.pause()})},onUpdate:wi,onComplete:W.vars.onComplete}),s};$e.sort=function(o){if(jt(o))return Ye.sort(o);var e=Ze.pageYOffset||0;return $e.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Ze.innerHeight}),Ye.sort(o||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$e.observe=function(o){return new bt(o)};$e.normalizeScroll=function(o){if(typeof o>"u")return nn;if(o===!0&&nn)return nn.enable();if(o===!1){nn&&nn.kill(),nn=o;return}var e=o instanceof bt?o:Ry(o);return nn&&nn.target===e.target&&nn.kill(),Pr(e.target)&&(nn=e),e};$e.core={_getVelocityProp:oc,_inputObserver:qd,_scrollers:Ke,_proxies:ci,bridge:{ss:function(){Xn||Lr("scrollStart"),Xn=Yt()},ref:function(){return qt}}};Fd()&&Te.registerPlugin($e);function Hf(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function Iy(o,e,t){return e&&Hf(o.prototype,e),t&&Hf(o,t),o}/*!
 * ScrollSmoother 3.14.1
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var lt,aa,tn,Oi,Hs,_i,lr,Xf,He,si,la,qf,Yf,$f,jf,Yd=function(){return typeof window<"u"},$d=function(){return lt||Yd()&&(lt=window.gsap)&&lt.registerPlugin&&lt},Fy=function(e){return Math.round(e*1e5)/1e5||0},Ii=function(e){return He.maxScroll(e||tn)},Oy=function(e,t){var n=e.parentNode||Hs,i=e.getBoundingClientRect(),r=n.getBoundingClientRect(),a=r.top-i.top,s=r.bottom-i.bottom,l=(Math.abs(a)>Math.abs(s)?a:s)/(1-t),c=-l*t,u,f;return l>0&&(u=r.height/(tn.innerHeight+r.height),f=u===.5?r.height*2:Math.min(r.height,Math.abs(-l*u/(2*u-1)))*2*(t||1),c+=t?-f*t:-f/2,l+=f),{change:l,offset:c}},zy=function(e){var t=Oi.querySelector(".ScrollSmoother-wrapper");return t||(t=Oi.createElement("div"),t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},Rr=function(){function o(e){var t=this;aa||o.register(lt)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},si&&si.kill(),si=this,$f(this);var n=e,i=n.smoothTouch,r=n.onUpdate,a=n.onStop,s=n.smooth,l=n.onFocusIn,c=n.normalizeScroll,u=n.wholePixels,f,h,m,g,d,p,_,b,v,M,y,A,C,x,T=this,D=e.effectsPrefix||"",k=He.getScrollFunc(tn),z=He.isTouch===1?i===!0?.8:parseFloat(i)||0:s===0||s===!1?0:parseFloat(s)||.8,I=z&&+e.speed||1,R=0,W=0,J=1,q=qf(0),H=function(){return q.update(-R)},te={y:0},P=function(){return f.style.overflow="visible"},B,$=function(N){N.update();var ae=N.getTween();ae&&(ae.pause(),ae._time=ae._dur,ae._tTime=ae._tDur),B=!1,N.animation.progress(N.progress,!0)},oe=function(N,ae){(N!==R&&!M||ae)&&(u&&(N=Math.round(N)),z&&(f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px"),W=N-R,R=N,He.isUpdating||o.isRefreshing||He.update())},ie=function(N){return arguments.length?(N<0&&(N=0),te.y=-N,B=!0,M?R=-N:oe(-N),He.isRefreshing?g.update():k(N/I),this):-R},fe=typeof ResizeObserver<"u"&&e.autoResize!==!1&&new ResizeObserver(function(){if(!He.isRefreshing){var ee=Ii(h)*I;ee<-R&&ie(ee),jf.restart(!0)}}),Z,Le=function(N){h.scrollTop=0,!(N.target.contains&&N.target.contains(h)||l&&l(t,N)===!1)&&(He.isInViewport(N.target)||N.target===Z||t.scrollTo(N.target,!1,"center center"),Z=N.target)},me=function(N,ae){if(N<ae.start)return N;var w=isNaN(ae.ratio)?1:ae.ratio,S=ae.end-ae.start,U=N-ae.start,Q=ae.offset||0,le=ae.pins||[],re=le.offset||0,Me=ae._startClamp&&ae.start<=0||ae.pins&&ae.pins.offset?0:ae._endClamp&&ae.end===Ii()?1:.5;return le.forEach(function(ce){S-=ce.distance,ce.nativeStart<=N&&(U-=ce.distance)}),re&&(U*=(S-re/w)/S),N+(U-Q*Me)/w-U},Ce=function ee(N,ae,w){w||(N.pins.length=N.pins.offset=0);var S=N.pins,U=N.markers,Q,le,re,Me,ce,V,Se,ne;for(Se=0;Se<ae.length;Se++)if(ne=ae[Se],N.trigger&&ne.trigger&&N!==ne&&(ne.trigger===N.trigger||ne.pinnedContainer===N.trigger||N.trigger.contains(ne.trigger))&&(ce=ne._startNative||ne._startClamp||ne.start,V=ne._endNative||ne._endClamp||ne.end,re=me(ce,N),Me=ne.pin&&V>0?re+(V-ce):me(V,N),ne.setPositions(re,Me,!0,(ne._startClamp?Math.max(0,re):re)-ce),ne.markerStart&&U.push(lt.quickSetter([ne.markerStart,ne.markerEnd],"y","px")),ne.pin&&ne.end>0&&!w)){if(Q=ne.end-ne.start,le=N._startClamp&&ne.start<0,le){if(N.start>0){N.setPositions(0,N.end+(N._startNative-N.start),!0),ee(N,ae);return}Q+=ne.start,S.offset=-ne.start}S.push({start:ne.start,nativeStart:ce,end:ne.end,distance:Q,trig:ne}),N.setPositions(N.start,N.end+(le?-ne.start:Q),!0)}},xe=function(N,ae){d.forEach(function(w){return Ce(w,N,ae)})},ze=function(){Hs=Oi.documentElement,_i=Oi.body,P(),requestAnimationFrame(P),d&&(He.getAll().forEach(function(N){N._startNative=N.start,N._endNative=N.end}),d.forEach(function(N){var ae=N._startClamp||N.start,w=N.autoSpeed?Math.min(Ii(),N.end):ae+Math.abs((N.end-ae)/N.ratio),S=w-N.end;if(ae-=S/2,w-=S/2,ae>w){var U=ae;ae=w,w=U}N._startClamp&&ae<0?(w=N.ratio<0?Ii():N.end/N.ratio,S=w-N.end,ae=0):(N.ratio<0||N._endClamp&&w>=Ii())&&(w=Ii(),ae=N.ratio<0||N.ratio>1?0:w-(w-N.start)/N.ratio,S=(w-ae)*N.ratio-(N.end-N.start)),N.offset=S||1e-4,N.pins.length=N.pins.offset=0,N.setPositions(ae,w,!0)}),xe(He.sort())),q.reset()},De=function(){return He.addEventListener("refresh",ze)},he=function(){return d&&d.forEach(function(N){return N.vars.onRefresh(N)})},Xe=function(){return d&&d.forEach(function(N){return N.vars.onRefreshInit(N)}),he},it=function(N,ae,w,S){return function(){var U=typeof ae=="function"?ae(w,S):ae;U||U===0||(U=S.getAttribute("data-"+D+N)||(N==="speed"?1:0)),S.setAttribute("data-"+D+N,U);var Q=(U+"").substr(0,6)==="clamp(";return{clamp:Q,value:Q?U.substr(6,U.length-7):U}}},rt=function(N,ae,w,S,U){U=(typeof U=="function"?U(S,N):U)||0;var Q=it("speed",ae,S,N),le=it("lag",w,S,N),re=lt.getProperty(N,"y"),Me=N._gsap,ce,V,Se,ne,be,Ee,we=[],We=function(){ae=Q(),w=parseFloat(le().value),ce=parseFloat(ae.value)||1,Se=ae.value==="auto",be=Se||V&&V._startClamp&&V.start<=0||we.offset?0:V&&V._endClamp&&V.end===Ii()?1:.5,ne&&ne.kill(),ne=w&&lt.to(N,{ease:la,overwrite:!1,y:"+=0",duration:w}),V&&(V.ratio=ce,V.autoSpeed=Se)},Je=function(){Me.y=re+"px",Me.renderTransform(1),We()},st=[],L=0,K=function(ue){if(Se){Je();var de=Oy(N,Xf(0,1,-ue.start/(ue.end-ue.start)));L=de.change,Ee=de.offset}else Ee=we.offset||0,L=(ue.end-ue.start-Ee)*(1-ce);we.forEach(function(Ge){return L-=Ge.distance*(1-ce)}),ue.offset=L||.001,ue.vars.onUpdate(ue),ne&&ne.progress(1)};return We(),(ce!==1||Se||ne)&&(V=He.create({trigger:Se?N.parentNode:N,start:function(){return ae.clamp?"clamp(top bottom+="+U+")":"top bottom+="+U},end:function(){return ae.value<0?"max":ae.clamp?"clamp(bottom top-="+U+")":"bottom top-="+U},scroller:h,scrub:!0,refreshPriority:-999,onRefreshInit:Je,onRefresh:K,onKill:function(ue){var de=d.indexOf(ue);de>=0&&d.splice(de,1),Je()},onUpdate:function(ue){var de=re+L*(ue.progress-be),Ge=we.length,ot=0,Qe,At,ve;if(ue.offset){if(Ge){for(At=-R,ve=ue.end;Ge--;){if(Qe=we[Ge],Qe.trig.isActive||At>=Qe.start&&At<=Qe.end){ne&&(Qe.trig.progress+=Qe.trig.direction<0?.001:-.001,Qe.trig.update(0,0,1),ne.resetTo("y",parseFloat(Me.y),-W,!0),J&&ne.progress(1));return}At>Qe.end&&(ot+=Qe.distance),ve-=Qe.distance}de=re+ot+L*((lt.utils.clamp(ue.start,ue.end,At)-ue.start-ot)/(ve-ue.start)-be)}st.length&&!Se&&st.forEach(function(Ae){return Ae(de-ot)}),de=Fy(de+Ee),ne?(ne.resetTo("y",de,-W,!0),J&&ne.progress(1)):(Me.y=de+"px",Me.renderTransform(1))}}}),K(V),lt.core.getCache(V.trigger).stRevert=Xe,V.startY=re,V.pins=we,V.markers=st,V.ratio=ce,V.autoSpeed=Se,N.style.willChange="transform"),V};De(),He.addEventListener("killAll",De),lt.delayedCall(.5,function(){return J=0}),this.scrollTop=ie,this.scrollTo=function(ee,N,ae){var w=lt.utils.clamp(0,Ii(),isNaN(ee)?t.offset(ee,ae,!!N&&!M):+ee);N?M?lt.to(t,{duration:z,scrollTop:w,overwrite:"auto",ease:la}):k(w):ie(w)},this.offset=function(ee,N,ae){ee=lr(ee)[0];var w=ee.style.cssText,S=He.create({trigger:ee,start:N||"top top"}),U;return d&&(J?He.refresh():xe([S],!0)),U=S.start/(ae?I:1),S.kill(!1),ee.style.cssText=w,lt.core.getCache(ee).uncache=1,U};function G(){return m=f.clientHeight,f.style.overflow="visible",_i.style.height=tn.innerHeight+(m-tn.innerHeight)/I+"px",m-tn.innerHeight}this.content=function(ee){if(arguments.length){var N=lr(ee||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||_i.children[0];return N!==f&&(f=N,v=f.getAttribute("style")||"",fe&&fe.observe(f),lt.set(f,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),z||lt.set(f,{clearProps:"transform"})),this}return f},this.wrapper=function(ee){return arguments.length?(h=lr(ee||"#smooth-wrapper")[0]||zy(f),b=h.getAttribute("style")||"",G(),lt.set(h,z?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):h},this.effects=function(ee,N){var ae;if(d||(d=[]),!ee)return d.slice(0);ee=lr(ee),ee.forEach(function(ce){for(var V=d.length;V--;)d[V].trigger===ce&&d[V].kill()}),N=N||{};var w=N,S=w.speed,U=w.lag,Q=w.effectsPadding,le=[],re,Me;for(re=0;re<ee.length;re++)Me=rt(ee[re],S,U,re,Q),Me&&le.push(Me);return(ae=d).push.apply(ae,le),N.refresh!==!1&&He.refresh(),le},this.sections=function(ee,N){var ae;if(p||(p=[]),!ee)return p.slice(0);var w=lr(ee).map(function(S){return He.create({trigger:S,start:"top 120%",end:"bottom -20%",onToggle:function(Q){S.style.opacity=Q.isActive?"1":"0",S.style.pointerEvents=Q.isActive?"all":"none"}})});return N&&N.add?(ae=p).push.apply(ae,w):p=w.slice(0),w},this.content(e.content),this.wrapper(e.wrapper),this.render=function(ee){return oe(ee||ee===0?ee:R)},this.getVelocity=function(){return q.getVelocity(-R)},He.scrollerProxy(h,{scrollTop:ie,scrollHeight:function(){return G()&&_i.scrollHeight},fixedMarkers:e.fixedMarkers!==!1&&!!z,content:f,getBoundingClientRect:function(){return{top:0,left:0,width:tn.innerWidth,height:tn.innerHeight}}}),He.defaults({scroller:h});var tt=He.getAll().filter(function(ee){return ee.scroller===tn||ee.scroller===h});tt.forEach(function(ee){return ee.revert(!0,!0)}),g=He.create({animation:lt.fromTo(te,{y:function(){return x=0,0}},{y:function(){return x=1,-G()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(x){var N=B;N&&($(g),te.y=R),oe(te.y,N),H(),r&&!M&&r(T)}}}),onRefreshInit:function(N){if(!o.isRefreshing){if(o.isRefreshing=!0,d){var ae=He.getAll().filter(function(S){return!!S.pin});d.forEach(function(S){S.vars.pinnedContainer||ae.forEach(function(U){if(U.pin.contains(S.trigger)){var Q=S.vars;Q.pinnedContainer=U.pin,S.vars=null,S.init(Q,S.animation)}})})}var w=N.getTween();C=w&&w._end>w._dp._time,A=R,te.y=0,z&&(He.isTouch===1&&(h.style.position="absolute"),h.scrollTop=0,He.isTouch===1&&(h.style.position="fixed"))}},onRefresh:function(N){N.animation.invalidate(),te.y=0,N.setPositions(N.start,G()/I),C||$(N),te.y=-k()*I,oe(te.y),J||(C&&(B=!1),N.animation.progress(lt.utils.clamp(0,1,A/I/-N.end))),C&&(N.progress-=.001,N.update()),o.isRefreshing=!1},id:"ScrollSmoother",scroller:tn,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return G()/I},onScrubComplete:function(){q.reset(),a&&a(t)},scrub:z||!0}),this.smooth=function(ee){return arguments.length&&(z=ee||0,I=z&&+e.speed||1,g.scrubDuration(ee)),g.getTween()?g.getTween().duration():0},g.getTween()&&(g.getTween().vars.ease=e.ease||la),this.scrollTrigger=g,e.effects&&this.effects(e.effects===!0?"[data-"+D+"speed], [data-"+D+"lag]":e.effects,{effectsPadding:e.effectsPadding,refresh:!1}),e.sections&&this.sections(e.sections===!0?"[data-section]":e.sections),tt.forEach(function(ee){ee.vars.scroller=h,ee.revert(!1,!0),ee.init(ee.vars,ee.animation)}),this.paused=function(ee,N){return arguments.length?(!!M!==ee&&(ee?(g.getTween()&&g.getTween().pause(),k(-R/I),q.reset(),y=He.normalizeScroll(),y&&y.disable(),M=He.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return ie(-R)}}),M.nested=Yf(Hs,"wheel,touch,scroll",!0,N!==!1)):(M.nested.kill(),M.kill(),M=0,y&&y.enable(),g.progress=(-R/I-g.start)/(g.end-g.start),$(g))),this):!!M},this.kill=this.revert=function(){t.paused(!1),$(g),g.kill();for(var ee=(d||[]).concat(p||[]),N=ee.length;N--;)ee[N].kill();He.scrollerProxy(h),He.removeEventListener("killAll",De),He.removeEventListener("refresh",ze),h.style.cssText=b,f.style.cssText=v;var ae=He.defaults({});ae&&ae.scroller===h&&He.defaults({scroller:tn}),t.normalizer&&He.normalizeScroll(!1),clearInterval(_),si=null,fe&&fe.disconnect(),_i.style.removeProperty("height"),tn.removeEventListener("focusin",Le)},this.refresh=function(ee,N){return g.refresh(ee,N)},c&&(this.normalizer=He.normalizeScroll(c===!0?{debounce:!0,content:!z&&f}:c)),He.config(e),"scrollBehavior"in tn.getComputedStyle(_i)&&lt.set([_i,Hs],{scrollBehavior:"auto"}),tn.addEventListener("focusin",Le),_=setInterval(H,250),Oi.readyState==="loading"||requestAnimationFrame(function(){return He.refresh()})}return o.register=function(t){return aa||(lt=t||$d(),Yd()&&window.document&&(tn=window,Oi=document,Hs=Oi.documentElement,_i=Oi.body),lt&&(lr=lt.utils.toArray,Xf=lt.utils.clamp,la=lt.parseEase("expo"),$f=lt.core.context||function(){},He=lt.core.globals().ScrollTrigger,lt.core.globals("ScrollSmoother",o),_i&&He&&(jf=lt.delayedCall(.2,function(){return He.isRefreshing||si&&si.refresh()}).pause(),qf=He.core._getVelocityProp,Yf=He.core._inputObserver,o.refresh=He.refresh,aa=1))),aa},Iy(o,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),o}();Rr.version="3.14.1";Rr.create=function(o){return si&&o&&si.content()===lr(o.content)[0]?si:new Rr(o)};Rr.get=function(){return si};$d()&&lt.registerPlugin(Rr);const Xc=new $x;Xc.background=new dt(2238513);const Ny=document.querySelector("#webgl"),Ra=new kn(75,window.innerWidth/window.innerHeight,.1,100);Ra.position.set(0,0,5);const _o=new Sh({canvas:Ny,antialias:!0,alpha:!0});_o.setSize(window.innerWidth,window.innerHeight);_o.setPixelRatio(Math.min(window.devicePixelRatio,2));let Zf;window.addEventListener("resize",()=>{clearTimeout(Zf),Zf=setTimeout(()=>{Ra.aspect=window.innerWidth/window.innerHeight,Ra.updateProjectionMatrix(),_o.setSize(window.innerWidth,window.innerHeight),_o.setPixelRatio(Math.min(window.devicePixelRatio,2)),$e.refresh()},250)});function Uy(){return window.innerWidth<=450?{r:1.5,pCount:1600,xPPosition:-5}:{r:2,pCount:2e3,xPPosition:-2}}function ky(o){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=i=>t(i),n.src=o})}function By(o){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=o.width,e.height=o.height,t.drawImage(o,0,0);const i=t.getImageData(0,0,e.width,e.height).data,r=[],a=3,s=-.5,l=0,c=6;for(let u=0;u<e.height;u+=c)for(let f=0;f<e.width;f+=c){const h=(u*e.width+f)*4;if(i[h+3]>0){const g=f/e.width*a-a/2+s,d=-(u/e.height*a-a/2)+l;r.push({x:g+3,y:d,z:0})}}return r}const Zn={sphereProgress:0,phoneProgress:0};Bi.registerPlugin($e,Rr);Rr.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:2,effects:!0,normalizeScroll:!0,ignoreMobileResize:!0,smoothTouch:.1});ky("/threejs-particle-animation/phone.png").then(o=>{const e=Uy(),t=new Ci,n=e.pCount,i=44469,r=new Float32Array(n*3),a=By(o),s=[],l=[],c=[];for(let _=0;_<n;_++){const b=_*3,v=e.r,M=Math.random()*Math.PI*2,y=Math.acos(Math.random()*2-1),A=v*Math.sin(y)*Math.cos(M),C=v*Math.sin(y)*Math.sin(M),x=v*Math.cos(y);s.push(A,C,x);const T=(Math.random()-.5)*15,D=(Math.random()-.5)*15,k=(Math.random()-.5)*15;l.push(T,D,k);const z=a[_%a.length];z?c.push(z.x,z.y,z.z):c.push(3,0,0),r[b]=T,r[b+1]=D,r[b+2]=k}t.setAttribute("position",new Qn(r,3));const u=new bh({size:.03,sizeAttenuation:!0,color:i});window.particels=new jx(t,u),Xc.add(window.particels);function f(){const _=t.attributes.position.array;for(let b=0;b<n;b++){const v=b*3;let M=l[v]+(s[v]-l[v])*Zn.sphereProgress,y=l[v+1]+(s[v+1]-l[v+1])*Zn.sphereProgress,A=l[v+2]+(s[v+2]-l[v+2])*Zn.sphereProgress;Zn.phoneProgress>0&&(M=M+(c[v]-M)*Zn.phoneProgress,y=y+(c[v+1]-y)*Zn.phoneProgress,A=A+(c[v+2]-A)*Zn.phoneProgress),_[v]=M,_[v+1]=y,_[v+2]=A}t.attributes.position.needsUpdate=!0}window.morphToSphere=function(){Bi.to(Zn,{sphereProgress:1,duration:2.5,ease:"power3.inOut",onUpdate:f})};const h=new dt(16724787),m=2;Bi.timeline({scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}}).to(window.particels.scale,{x:m,y:m,z:m,ease:"power1.inOut"},0).to(u.color,{r:h.r,g:h.g,b:h.b,ease:"none"},0).to(Zn,{sphereProgress:0,onUpdate:f,ease:"none"},.1),document.querySelectorAll(".reveal-container").forEach(_=>{const b=_.querySelector(".reveal-text"),v=_.querySelector(".reveal-black");Bi.timeline({scrollTrigger:{trigger:_,start:"top 80%",end:"bottom 25%",toggleActions:"play none none reverse"}}).fromTo(v,{width:"0%",left:"0%"},{width:"100%",duration:.4,ease:"power2.inOut"}).set(b,{opacity:1}).to(v,{width:"0%",left:"100%",duration:.4,ease:"power2.inOut"})}),Bi.timeline({scrollTrigger:{trigger:".conect",start:"top center",end:"center center",scrub:1}}).to(window.particels.position,{x:e.xPPosition,duration:1.2,ease:"power2.inOut"}).to(window.particels.rotation,{y:-.02,duration:1,ease:"power2.inOut"},">").to(Zn,{phoneProgress:1,onUpdate:f,ease:"power2.inOut",duration:1.5},">").to("section.conect div span",{opacity:1,duration:1,ease:"power1.inOut"}),$e.refresh()}).catch(o=>console.error("Image Load Error:",o));const pc=document.querySelectorAll(".loader svg path");pc.forEach(o=>{const e=o.getTotalLength();o.style.strokeDasharray=e,o.style.strokeDashoffset=e});const Gy=Bi.timeline();Gy.to(pc,{strokeDashoffset:0,duration:2,ease:"power2.inOut",stagger:.1}).to(pc,{fillOpacity:1,stroke:"transparent",duration:1,ease:"power2.in"},"-=0.5").to(".loader",{opacity:0,duration:1,display:"none",ease:"power2.inOut",onComplete:()=>{setTimeout(()=>{window.morphToSphere&&window.morphToSphere(),Vy()},80)}},"+=0.5");function Vy(){Bi.fromTo(".hero h1 , .hero span",{scale:.5,y:50,filter:"blur(10px)"},{scale:1,opacity:1,y:0,filter:"blur(0px)",duration:2,ease:"power3.out",delay:1.8,stagger:.2})}const Wy=new Zx;function jd(){requestAnimationFrame(jd),Wy.getElapsedTime(),Zn.phoneProgress<.1&&window.particels&&(window.particels.rotation.y+=.002),_o.render(Xc,Ra)}jd();
