(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const L={},tt=[],Oe=()=>{},ws=()=>!1,tn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),kn=e=>e.startsWith("onUpdate:"),ne=Object.assign,Yn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xs=Object.prototype.hasOwnProperty,F=(e,t)=>xs.call(e,t),T=Array.isArray,nt=e=>nn(e)==="[object Map]",si=e=>nn(e)==="[object Set]",E=e=>typeof e=="function",K=e=>typeof e=="string",Ve=e=>typeof e=="symbol",W=e=>e!==null&&typeof e=="object",oi=e=>(W(e)||E(e))&&E(e.then)&&E(e.catch),li=Object.prototype.toString,nn=e=>li.call(e),Cs=e=>nn(e).slice(8,-1),ci=e=>nn(e)==="[object Object]",Xn=e=>K(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bt=Jn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Os=/-(\w)/g,Ne=rn(e=>e.replace(Os,(t,n)=>n?n.toUpperCase():"")),Ps=/\B([A-Z])/g,Ze=rn(e=>e.replace(Ps,"-$1").toLowerCase()),ai=rn(e=>e.charAt(0).toUpperCase()+e.slice(1)),bn=rn(e=>e?`on${ai(e)}`:""),De=(e,t)=>!Object.is(e,t),vn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ui=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Ms=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let _r;const sn=()=>_r||(_r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zn(e){if(T(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=K(r)?As(r):Zn(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(K(e)||W(e))return e}const Is=/;(?![^(]*\))/g,Ts=/:([^]+)/,Es=/\/\*[^]*?\*\//g;function As(e){const t={};return e.replace(Es,"").split(Is).forEach(n=>{if(n){const r=n.split(Ts);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Qn(e){let t="";if(K(e))t=e;else if(T(e))for(let n=0;n<e.length;n++){const r=Qn(e[n]);r&&(t+=r+" ")}else if(W(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const js="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$s=Jn(js);function fi(e){return!!e||e===""}const di=e=>!!(e&&e.__v_isRef===!0),rt=e=>K(e)?e:e==null?"":T(e)||W(e)&&(e.toString===li||!E(e.toString))?di(e)?rt(e.value):JSON.stringify(e,pi,2):String(e),pi=(e,t)=>di(t)?pi(e,t.value):nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[yn(r,s)+" =>"]=i,n),{})}:si(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>yn(n))}:Ve(t)?yn(t):W(t)&&!T(t)&&!ci(t)?String(t):t,yn=(e,t="")=>{var n;return Ve(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fe;class Rs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=fe,!t&&fe&&(this.index=(fe.scopes||(fe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=fe;try{return fe=this,t()}finally{fe=n}}}on(){fe=this}off(){fe=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Fs(){return fe}let B;const _n=new WeakSet;class hi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fe&&fe.active&&fe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_n.has(this)&&(_n.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sr(this),bi(this);const t=B,n=me;B=this,me=!0;try{return this.fn()}finally{vi(this),B=t,me=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)nr(t);this.deps=this.depsTail=void 0,Sr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_n.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rn(this)&&this.run()}get dirty(){return Rn(this)}}let gi=0,vt,yt;function mi(e,t=!1){if(e.flags|=8,t){e.next=yt,yt=e;return}e.next=vt,vt=e}function er(){gi++}function tr(){if(--gi>0)return;if(yt){let t=yt;for(yt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;vt;){let t=vt;for(vt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function bi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function vi(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),nr(r),Ds(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function Rn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(yi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function yi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===xt))return;e.globalVersion=xt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Rn(e)){e.flags&=-3;return}const n=B,r=me;B=e,me=!0;try{bi(e);const i=e.fn(e._value);(t.version===0||De(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{B=n,me=r,vi(e),e.flags&=-3}}function nr(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)nr(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ds(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let me=!0;const _i=[];function Be(){_i.push(me),me=!1}function Ue(){const e=_i.pop();me=e===void 0?!0:e}function Sr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=B;B=void 0;try{t()}finally{B=n}}}let xt=0;class Hs{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!B||!me||B===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==B)n=this.activeLink=new Hs(B,this),B.deps?(n.prevDep=B.depsTail,B.depsTail.nextDep=n,B.depsTail=n):B.deps=B.depsTail=n,Si(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=B.depsTail,n.nextDep=void 0,B.depsTail.nextDep=n,B.depsTail=n,B.deps===n&&(B.deps=r)}return n}trigger(t){this.version++,xt++,this.notify(t)}notify(t){er();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{tr()}}}function Si(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Si(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Fn=new WeakMap,ke=Symbol(""),Dn=Symbol(""),Ct=Symbol("");function Z(e,t,n){if(me&&B){let r=Fn.get(e);r||Fn.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new rr),i.map=r,i.key=n),i.track()}}function Te(e,t,n,r,i,s){const o=Fn.get(e);if(!o){xt++;return}const l=a=>{a&&a.trigger()};if(er(),t==="clear")o.forEach(l);else{const a=T(e),d=a&&Xn(n);if(a&&n==="length"){const f=Number(r);o.forEach((h,_)=>{(_==="length"||_===Ct||!Ve(_)&&_>=f)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),d&&l(o.get(Ct)),t){case"add":a?d&&l(o.get("length")):(l(o.get(ke)),nt(e)&&l(o.get(Dn)));break;case"delete":a||(l(o.get(ke)),nt(e)&&l(o.get(Dn)));break;case"set":nt(e)&&l(o.get(ke));break}}tr()}function Qe(e){const t=R(e);return t===e?t:(Z(t,"iterate",Ct),ge(e)?t:t.map(Q))}function on(e){return Z(e=R(e),"iterate",Ct),e}const Ls={__proto__:null,[Symbol.iterator](){return Sn(this,Symbol.iterator,Q)},concat(...e){return Qe(this).concat(...e.map(t=>T(t)?Qe(t):t))},entries(){return Sn(this,"entries",e=>(e[1]=Q(e[1]),e))},every(e,t){return Me(this,"every",e,t,void 0,arguments)},filter(e,t){return Me(this,"filter",e,t,n=>n.map(Q),arguments)},find(e,t){return Me(this,"find",e,t,Q,arguments)},findIndex(e,t){return Me(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Me(this,"findLast",e,t,Q,arguments)},findLastIndex(e,t){return Me(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Me(this,"forEach",e,t,void 0,arguments)},includes(...e){return wn(this,"includes",e)},indexOf(...e){return wn(this,"indexOf",e)},join(e){return Qe(this).join(e)},lastIndexOf(...e){return wn(this,"lastIndexOf",e)},map(e,t){return Me(this,"map",e,t,void 0,arguments)},pop(){return dt(this,"pop")},push(...e){return dt(this,"push",e)},reduce(e,...t){return wr(this,"reduce",e,t)},reduceRight(e,...t){return wr(this,"reduceRight",e,t)},shift(){return dt(this,"shift")},some(e,t){return Me(this,"some",e,t,void 0,arguments)},splice(...e){return dt(this,"splice",e)},toReversed(){return Qe(this).toReversed()},toSorted(e){return Qe(this).toSorted(e)},toSpliced(...e){return Qe(this).toSpliced(...e)},unshift(...e){return dt(this,"unshift",e)},values(){return Sn(this,"values",Q)}};function Sn(e,t,n){const r=on(e),i=r[t]();return r!==e&&!ge(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const Ns=Array.prototype;function Me(e,t,n,r,i,s){const o=on(e),l=o!==e&&!ge(e),a=o[t];if(a!==Ns[t]){const h=a.apply(e,s);return l?Q(h):h}let d=n;o!==e&&(l?d=function(h,_){return n.call(this,Q(h),_,e)}:n.length>2&&(d=function(h,_){return n.call(this,h,_,e)}));const f=a.call(o,d,r);return l&&i?i(f):f}function wr(e,t,n,r){const i=on(e);let s=n;return i!==e&&(ge(e)?n.length>3&&(s=function(o,l,a){return n.call(this,o,l,a,e)}):s=function(o,l,a){return n.call(this,o,Q(l),a,e)}),i[t](s,...r)}function wn(e,t,n){const r=R(e);Z(r,"iterate",Ct);const i=r[t](...n);return(i===-1||i===!1)&&lr(n[0])?(n[0]=R(n[0]),r[t](...n)):i}function dt(e,t,n=[]){Be(),er();const r=R(e)[t].apply(e,n);return tr(),Ue(),r}const Vs=Jn("__proto__,__v_isRef,__isVue"),wi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ve));function Bs(e){Ve(e)||(e=String(e));const t=R(this);return Z(t,"has",e),t.hasOwnProperty(e)}class xi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Xs:Mi:s?Pi:Oi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=T(t);if(!i){let a;if(o&&(a=Ls[n]))return a;if(n==="hasOwnProperty")return Bs}const l=Reflect.get(t,n,te(t)?t:r);return(Ve(n)?wi.has(n):Vs(n))||(i||Z(t,"get",n),s)?l:te(l)?o&&Xn(n)?l:l.value:W(l)?i?Ii(l):sr(l):l}}class Ci extends xi{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const a=Ye(s);if(!ge(r)&&!Ye(r)&&(s=R(s),r=R(r)),!T(t)&&te(s)&&!te(r))return a?!1:(s.value=r,!0)}const o=T(t)&&Xn(n)?Number(n)<t.length:F(t,n),l=Reflect.set(t,n,r,te(t)?t:i);return t===R(i)&&(o?De(r,s)&&Te(t,"set",n,r):Te(t,"add",n,r)),l}deleteProperty(t,n){const r=F(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Te(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Ve(n)||!wi.has(n))&&Z(t,"has",n),r}ownKeys(t){return Z(t,"iterate",T(t)?"length":ke),Reflect.ownKeys(t)}}class Us extends xi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const zs=new Ci,Ws=new Us,qs=new Ci(!0);const Hn=e=>e,Lt=e=>Reflect.getPrototypeOf(e);function Ks(e,t,n){return function(...r){const i=this.__v_raw,s=R(i),o=nt(s),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,d=i[e](...r),f=n?Hn:t?Ln:Q;return!t&&Z(s,"iterate",a?Dn:ke),{next(){const{value:h,done:_}=d.next();return _?{value:h,done:_}:{value:l?[f(h[0]),f(h[1])]:f(h),done:_}},[Symbol.iterator](){return this}}}}function Nt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Gs(e,t){const n={get(i){const s=this.__v_raw,o=R(s),l=R(i);e||(De(i,l)&&Z(o,"get",i),Z(o,"get",l));const{has:a}=Lt(o),d=t?Hn:e?Ln:Q;if(a.call(o,i))return d(s.get(i));if(a.call(o,l))return d(s.get(l));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!e&&Z(R(i),"iterate",ke),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=R(s),l=R(i);return e||(De(i,l)&&Z(o,"has",i),Z(o,"has",l)),i===l?s.has(i):s.has(i)||s.has(l)},forEach(i,s){const o=this,l=o.__v_raw,a=R(l),d=t?Hn:e?Ln:Q;return!e&&Z(a,"iterate",ke),l.forEach((f,h)=>i.call(s,d(f),d(h),o))}};return ne(n,e?{add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear")}:{add(i){!t&&!ge(i)&&!Ye(i)&&(i=R(i));const s=R(this);return Lt(s).has.call(s,i)||(s.add(i),Te(s,"add",i,i)),this},set(i,s){!t&&!ge(s)&&!Ye(s)&&(s=R(s));const o=R(this),{has:l,get:a}=Lt(o);let d=l.call(o,i);d||(i=R(i),d=l.call(o,i));const f=a.call(o,i);return o.set(i,s),d?De(s,f)&&Te(o,"set",i,s):Te(o,"add",i,s),this},delete(i){const s=R(this),{has:o,get:l}=Lt(s);let a=o.call(s,i);a||(i=R(i),a=o.call(s,i)),l&&l.call(s,i);const d=s.delete(i);return a&&Te(s,"delete",i,void 0),d},clear(){const i=R(this),s=i.size!==0,o=i.clear();return s&&Te(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Ks(i,e,t)}),n}function ir(e,t){const n=Gs(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(F(n,i)&&i in r?n:r,i,s)}const Js={get:ir(!1,!1)},ks={get:ir(!1,!0)},Ys={get:ir(!0,!1)};const Oi=new WeakMap,Pi=new WeakMap,Mi=new WeakMap,Xs=new WeakMap;function Zs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qs(e){return e.__v_skip||!Object.isExtensible(e)?0:Zs(Cs(e))}function sr(e){return Ye(e)?e:or(e,!1,zs,Js,Oi)}function eo(e){return or(e,!1,qs,ks,Pi)}function Ii(e){return or(e,!0,Ws,Ys,Mi)}function or(e,t,n,r,i){if(!W(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Qs(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return i.set(e,l),l}function it(e){return Ye(e)?it(e.__v_raw):!!(e&&e.__v_isReactive)}function Ye(e){return!!(e&&e.__v_isReadonly)}function ge(e){return!!(e&&e.__v_isShallow)}function lr(e){return e?!!e.__v_raw:!1}function R(e){const t=e&&e.__v_raw;return t?R(t):e}function to(e){return!F(e,"__v_skip")&&Object.isExtensible(e)&&ui(e,"__v_skip",!0),e}const Q=e=>W(e)?sr(e):e,Ln=e=>W(e)?Ii(e):e;function te(e){return e?e.__v_isRef===!0:!1}function Ti(e){return Ei(e,!1)}function ln(e){return Ei(e,!0)}function Ei(e,t){return te(e)?e:new no(e,t)}class no{constructor(t,n){this.dep=new rr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:R(t),this._value=n?t:Q(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||ge(t)||Ye(t);t=r?t:R(t),De(t,n)&&(this._rawValue=t,this._value=r?t:Q(t),this.dep.trigger())}}function Ai(e){return te(e)?e.value:e}const ro={get:(e,t,n)=>t==="__v_raw"?e:Ai(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return te(i)&&!te(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ji(e){return it(e)?e:new Proxy(e,ro)}class io{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new rr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&B!==this)return mi(this,!0),!0}get value(){const t=this.dep.track();return yi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function so(e,t,n=!1){let r,i;return E(e)?r=e:(r=e.get,i=e.set),new io(r,i,n)}const Vt={},qt=new WeakMap;let Je;function oo(e,t=!1,n=Je){if(n){let r=qt.get(n);r||qt.set(n,r=[]),r.push(e)}}function lo(e,t,n=L){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:l,call:a}=n,d=M=>i?M:ge(M)||i===!1||i===0?Ee(M,1):Ee(M);let f,h,_,C,j=!1,A=!1;if(te(e)?(h=()=>e.value,j=ge(e)):it(e)?(h=()=>d(e),j=!0):T(e)?(A=!0,j=e.some(M=>it(M)||ge(M)),h=()=>e.map(M=>{if(te(M))return M.value;if(it(M))return d(M);if(E(M))return a?a(M,2):M()})):E(e)?t?h=a?()=>a(e,2):e:h=()=>{if(_){Be();try{_()}finally{Ue()}}const M=Je;Je=f;try{return a?a(e,3,[C]):e(C)}finally{Je=M}}:h=Oe,t&&i){const M=h,J=i===!0?1/0:i;h=()=>Ee(M(),J)}const G=Fs(),H=()=>{f.stop(),G&&G.active&&Yn(G.effects,f)};if(s&&t){const M=t;t=(...J)=>{M(...J),H()}}let U=A?new Array(e.length).fill(Vt):Vt;const z=M=>{if(!(!(f.flags&1)||!f.dirty&&!M))if(t){const J=f.run();if(i||j||(A?J.some((je,be)=>De(je,U[be])):De(J,U))){_&&_();const je=Je;Je=f;try{const be=[J,U===Vt?void 0:A&&U[0]===Vt?[]:U,C];a?a(t,3,be):t(...be),U=J}finally{Je=je}}}else f.run()};return l&&l(z),f=new hi(h),f.scheduler=o?()=>o(z,!1):z,C=M=>oo(M,!1,f),_=f.onStop=()=>{const M=qt.get(f);if(M){if(a)a(M,4);else for(const J of M)J();qt.delete(f)}},t?r?z(!0):U=f.run():o?o(z.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function Ee(e,t=1/0,n){if(t<=0||!W(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,te(e))Ee(e.value,t,n);else if(T(e))for(let r=0;r<e.length;r++)Ee(e[r],t,n);else if(si(e)||nt(e))e.forEach(r=>{Ee(r,t,n)});else if(ci(e)){for(const r in e)Ee(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ee(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tt(e,t,n,r){try{return r?e(...r):e()}catch(i){cn(i,t,n)}}function Pe(e,t,n,r){if(E(e)){const i=Tt(e,t,n,r);return i&&oi(i)&&i.catch(s=>{cn(s,t,n)}),i}if(T(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Pe(e[s],t,n,r));return i}}function cn(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||L;if(t){let l=t.parent;const a=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,a,d)===!1)return}l=l.parent}if(s){Be(),Tt(s,null,10,[e,a,d]),Ue();return}}co(e,n,i,r,o)}function co(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const se=[];let xe=-1;const st=[];let Re=null,et=0;const $i=Promise.resolve();let Kt=null;function cr(e){const t=Kt||$i;return e?t.then(this?e.bind(this):e):t}function ao(e){let t=xe+1,n=se.length;for(;t<n;){const r=t+n>>>1,i=se[r],s=Ot(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function ar(e){if(!(e.flags&1)){const t=Ot(e),n=se[se.length-1];!n||!(e.flags&2)&&t>=Ot(n)?se.push(e):se.splice(ao(t),0,e),e.flags|=1,Ri()}}function Ri(){Kt||(Kt=$i.then(Di))}function uo(e){T(e)?st.push(...e):Re&&e.id===-1?Re.splice(et+1,0,e):e.flags&1||(st.push(e),e.flags|=1),Ri()}function xr(e,t,n=xe+1){for(;n<se.length;n++){const r=se[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;se.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Fi(e){if(st.length){const t=[...new Set(st)].sort((n,r)=>Ot(n)-Ot(r));if(st.length=0,Re){Re.push(...t);return}for(Re=t,et=0;et<Re.length;et++){const n=Re[et];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Re=null,et=0}}const Ot=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Di(e){try{for(xe=0;xe<se.length;xe++){const t=se[xe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Tt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;xe<se.length;xe++){const t=se[xe];t&&(t.flags&=-2)}xe=-1,se.length=0,Fi(),Kt=null,(se.length||st.length)&&Di()}}let he=null,Hi=null;function Gt(e){const t=he;return he=e,Hi=e&&e.type.__scopeId||null,t}function fo(e,t=he,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&$r(-1);const s=Gt(t);let o;try{o=e(...i)}finally{Gt(s),r._d&&$r(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Cr(e,t){if(he===null)return e;const n=pn(he),r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,l,a=L]=t[i];s&&(E(s)&&(s={mounted:s,updated:s}),s.deep&&Ee(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return e}function Ke(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let a=l.dir[r];a&&(Be(),Pe(a,n,8,[e.el,l,e,t]),Ue())}}const po=Symbol("_vte"),ho=e=>e.__isTeleport;function ur(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ur(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function an(e,t){return E(e)?ne({name:e.name},t,{setup:e}):e}function Li(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Jt(e,t,n,r,i=!1){if(T(e)){e.forEach((j,A)=>Jt(j,t&&(T(t)?t[A]:t),n,r,i));return}if(_t(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Jt(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?pn(r.component):r.el,o=i?null:s,{i:l,r:a}=e,d=t&&t.r,f=l.refs===L?l.refs={}:l.refs,h=l.setupState,_=R(h),C=h===L?()=>!1:j=>F(_,j);if(d!=null&&d!==a&&(K(d)?(f[d]=null,C(d)&&(h[d]=null)):te(d)&&(d.value=null)),E(a))Tt(a,l,12,[o,f]);else{const j=K(a),A=te(a);if(j||A){const G=()=>{if(e.f){const H=j?C(a)?h[a]:f[a]:a.value;i?T(H)&&Yn(H,s):T(H)?H.includes(s)||H.push(s):j?(f[a]=[s],C(a)&&(h[a]=f[a])):(a.value=[s],e.k&&(f[e.k]=a.value))}else j?(f[a]=o,C(a)&&(h[a]=o)):A&&(a.value=o,e.k&&(f[e.k]=o))};o?(G.id=-1,ue(G,n)):G()}}}sn().requestIdleCallback;sn().cancelIdleCallback;const _t=e=>!!e.type.__asyncLoader,Ni=e=>e.type.__isKeepAlive;function go(e,t){Vi(e,"a",t)}function mo(e,t){Vi(e,"da",t)}function Vi(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(un(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ni(i.parent.vnode)&&bo(r,t,n,i),i=i.parent}}function bo(e,t,n,r){const i=un(t,e,r,!0);dr(()=>{Yn(r[t],i)},n)}function un(e,t,n=oe,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{Be();const l=Et(n),a=Pe(t,n,e,o);return l(),Ue(),a});return r?i.unshift(s):i.push(s),s}}const Ae=e=>(t,n=oe)=>{(!Mt||e==="sp")&&un(e,(...r)=>t(...r),n)},vo=Ae("bm"),fr=Ae("m"),yo=Ae("bu"),_o=Ae("u"),So=Ae("bum"),dr=Ae("um"),wo=Ae("sp"),xo=Ae("rtg"),Co=Ae("rtc");function Oo(e,t=oe){un("ec",e,t)}const Po=Symbol.for("v-ndc");function Nn(e,t,n,r){let i;const s=n,o=T(e);if(o||K(e)){const l=o&&it(e);let a=!1;l&&(a=!ge(e),e=on(e)),i=new Array(e.length);for(let d=0,f=e.length;d<f;d++)i[d]=t(a?Q(e[d]):e[d],d,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,s)}else if(W(e))if(e[Symbol.iterator])i=Array.from(e,(l,a)=>t(l,a,void 0,s));else{const l=Object.keys(e);i=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const f=l[a];i[a]=t(e[f],f,a,s)}}else i=[];return i}const Vn=e=>e?ls(e)?pn(e):Vn(e.parent):null,St=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vn(e.parent),$root:e=>Vn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ui(e),$forceUpdate:e=>e.f||(e.f=()=>{ar(e.update)}),$nextTick:e=>e.n||(e.n=cr.bind(e.proxy)),$watch:e=>Jo.bind(e)}),xn=(e,t)=>e!==L&&!e.__isScriptSetup&&F(e,t),Mo={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:a}=e;let d;if(t[0]!=="$"){const C=o[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(xn(r,t))return o[t]=1,r[t];if(i!==L&&F(i,t))return o[t]=2,i[t];if((d=e.propsOptions[0])&&F(d,t))return o[t]=3,s[t];if(n!==L&&F(n,t))return o[t]=4,n[t];Bn&&(o[t]=0)}}const f=St[t];let h,_;if(f)return t==="$attrs"&&Z(e.attrs,"get",""),f(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==L&&F(n,t))return o[t]=4,n[t];if(_=a.config.globalProperties,F(_,t))return _[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return xn(i,t)?(i[t]=n,!0):r!==L&&F(r,t)?(r[t]=n,!0):F(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let l;return!!n[o]||e!==L&&F(e,o)||xn(t,o)||(l=s[0])&&F(l,o)||F(r,o)||F(St,o)||F(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:F(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Or(e){return T(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Bn=!0;function Io(e){const t=Ui(e),n=e.proxy,r=e.ctx;Bn=!1,t.beforeCreate&&Pr(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:l,provide:a,inject:d,created:f,beforeMount:h,mounted:_,beforeUpdate:C,updated:j,activated:A,deactivated:G,beforeDestroy:H,beforeUnmount:U,destroyed:z,unmounted:M,render:J,renderTracked:je,renderTriggered:be,errorCaptured:$e,serverPrefetch:$t,expose:ze,inheritAttrs:ct,components:Rt,directives:Ft,filters:gn}=t;if(d&&To(d,r,null),o)for(const q in o){const N=o[q];E(N)&&(r[q]=N.bind(n))}if(i){const q=i.call(n,n);W(q)&&(e.data=sr(q))}if(Bn=!0,s)for(const q in s){const N=s[q],We=E(N)?N.bind(n,n):E(N.get)?N.get.bind(n,n):Oe,Dt=!E(N)&&E(N.set)?N.set.bind(n):Oe,qe=Zt({get:We,set:Dt});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>qe.value,set:ve=>qe.value=ve})}if(l)for(const q in l)Bi(l[q],r,n,q);if(a){const q=E(a)?a.call(n):a;Reflect.ownKeys(q).forEach(N=>{Fo(N,q[N])})}f&&Pr(f,e,"c");function re(q,N){T(N)?N.forEach(We=>q(We.bind(n))):N&&q(N.bind(n))}if(re(vo,h),re(fr,_),re(yo,C),re(_o,j),re(go,A),re(mo,G),re(Oo,$e),re(Co,je),re(xo,be),re(So,U),re(dr,M),re(wo,$t),T(ze))if(ze.length){const q=e.exposed||(e.exposed={});ze.forEach(N=>{Object.defineProperty(q,N,{get:()=>n[N],set:We=>n[N]=We})})}else e.exposed||(e.exposed={});J&&e.render===Oe&&(e.render=J),ct!=null&&(e.inheritAttrs=ct),Rt&&(e.components=Rt),Ft&&(e.directives=Ft),$t&&Li(e)}function To(e,t,n=Oe){T(e)&&(e=Un(e));for(const r in e){const i=e[r];let s;W(i)?"default"in i?s=Ut(i.from||r,i.default,!0):s=Ut(i.from||r):s=Ut(i),te(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function Pr(e,t,n){Pe(T(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Bi(e,t,n,r){let i=r.includes(".")?ns(n,r):()=>n[r];if(K(e)){const s=t[e];E(s)&&He(i,s)}else if(E(e))He(i,e.bind(n));else if(W(e))if(T(e))e.forEach(s=>Bi(s,t,n,r));else{const s=E(e.handler)?e.handler.bind(n):t[e.handler];E(s)&&He(i,s,e)}}function Ui(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,l=s.get(t);let a;return l?a=l:!i.length&&!n&&!r?a=t:(a={},i.length&&i.forEach(d=>kt(a,d,o,!0)),kt(a,t,o)),W(t)&&s.set(t,a),a}function kt(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&kt(e,s,n,!0),i&&i.forEach(o=>kt(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=Eo[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Eo={data:Mr,props:Ir,emits:Ir,methods:gt,computed:gt,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:gt,directives:gt,watch:jo,provide:Mr,inject:Ao};function Mr(e,t){return t?e?function(){return ne(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function Ao(e,t){return gt(Un(e),Un(t))}function Un(e){if(T(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ie(e,t){return e?[...new Set([].concat(e,t))]:t}function gt(e,t){return e?ne(Object.create(null),e,t):t}function Ir(e,t){return e?T(e)&&T(t)?[...new Set([...e,...t])]:ne(Object.create(null),Or(e),Or(t??{})):t}function jo(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=ie(e[r],t[r]);return n}function zi(){return{app:null,config:{isNativeTag:ws,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $o=0;function Ro(e,t){return function(r,i=null){E(r)||(r=ne({},r)),i!=null&&!W(i)&&(i=null);const s=zi(),o=new WeakSet,l=[];let a=!1;const d=s.app={_uid:$o++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:ml,get config(){return s.config},set config(f){},use(f,...h){return o.has(f)||(f&&E(f.install)?(o.add(f),f.install(d,...h)):E(f)&&(o.add(f),f(d,...h))),d},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),d},component(f,h){return h?(s.components[f]=h,d):s.components[f]},directive(f,h){return h?(s.directives[f]=h,d):s.directives[f]},mount(f,h,_){if(!a){const C=d._ceVNode||k(r,i);return C.appContext=s,_===!0?_="svg":_===!1&&(_=void 0),e(C,f,_),a=!0,d._container=f,f.__vue_app__=d,pn(C.component)}},onUnmount(f){l.push(f)},unmount(){a&&(Pe(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,h){return s.provides[f]=h,d},runWithContext(f){const h=ot;ot=d;try{return f()}finally{ot=h}}};return d}}let ot=null;function Fo(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function Ut(e,t,n=!1){const r=oe||he;if(r||ot){const i=ot?ot._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&E(t)?t.call(r&&r.proxy):t}}const Wi={},qi=()=>Object.create(Wi),Ki=e=>Object.getPrototypeOf(e)===Wi;function Do(e,t,n,r=!1){const i={},s=qi();e.propsDefaults=Object.create(null),Gi(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:eo(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Ho(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,l=R(i),[a]=e.propsOptions;let d=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let _=f[h];if(fn(e.emitsOptions,_))continue;const C=t[_];if(a)if(F(s,_))C!==s[_]&&(s[_]=C,d=!0);else{const j=Ne(_);i[j]=zn(a,l,j,C,e,!1)}else C!==s[_]&&(s[_]=C,d=!0)}}}else{Gi(e,t,i,s)&&(d=!0);let f;for(const h in l)(!t||!F(t,h)&&((f=Ze(h))===h||!F(t,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(i[h]=zn(a,l,h,void 0,e,!0)):delete i[h]);if(s!==l)for(const h in s)(!t||!F(t,h))&&(delete s[h],d=!0)}d&&Te(e.attrs,"set","")}function Gi(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(bt(a))continue;const d=t[a];let f;i&&F(i,f=Ne(a))?!s||!s.includes(f)?n[f]=d:(l||(l={}))[f]=d:fn(e.emitsOptions,a)||(!(a in r)||d!==r[a])&&(r[a]=d,o=!0)}if(s){const a=R(n),d=l||L;for(let f=0;f<s.length;f++){const h=s[f];n[h]=zn(i,a,h,d[h],e,!F(d,h))}}return o}function zn(e,t,n,r,i,s){const o=e[n];if(o!=null){const l=F(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&E(a)){const{propsDefaults:d}=i;if(n in d)r=d[n];else{const f=Et(i);r=d[n]=a.call(null,t),f()}}else r=a;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===Ze(n))&&(r=!0))}return r}const Lo=new WeakMap;function Ji(e,t,n=!1){const r=n?Lo:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},l=[];let a=!1;if(!E(e)){const f=h=>{a=!0;const[_,C]=Ji(h,t,!0);ne(o,_),C&&l.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!a)return W(e)&&r.set(e,tt),tt;if(T(s))for(let f=0;f<s.length;f++){const h=Ne(s[f]);Tr(h)&&(o[h]=L)}else if(s)for(const f in s){const h=Ne(f);if(Tr(h)){const _=s[f],C=o[h]=T(_)||E(_)?{type:_}:ne({},_),j=C.type;let A=!1,G=!0;if(T(j))for(let H=0;H<j.length;++H){const U=j[H],z=E(U)&&U.name;if(z==="Boolean"){A=!0;break}else z==="String"&&(G=!1)}else A=E(j)&&j.name==="Boolean";C[0]=A,C[1]=G,(A||F(C,"default"))&&l.push(h)}}const d=[o,l];return W(e)&&r.set(e,d),d}function Tr(e){return e[0]!=="$"&&!bt(e)}const ki=e=>e[0]==="_"||e==="$stable",pr=e=>T(e)?e.map(Ce):[Ce(e)],No=(e,t,n)=>{if(t._n)return t;const r=fo((...i)=>pr(t(...i)),n);return r._c=!1,r},Yi=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ki(i))continue;const s=e[i];if(E(s))t[i]=No(i,s,r);else if(s!=null){const o=pr(s);t[i]=()=>o}}},Xi=(e,t)=>{const n=pr(t);e.slots.default=()=>n},Zi=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},Vo=(e,t,n)=>{const r=e.slots=qi();if(e.vnode.shapeFlag&32){const i=t._;i?(Zi(r,t,n),n&&ui(r,"_",i,!0)):Yi(t,r)}else t&&Xi(e,t)},Bo=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=L;if(r.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:Zi(i,t,n):(s=!t.$stable,Yi(t,i)),o=t}else t&&(Xi(e,t),o={default:1});if(s)for(const l in i)!ki(l)&&o[l]==null&&delete i[l]},ue=tl;function Uo(e){return zo(e)}function zo(e,t){const n=sn();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:a,setText:d,setElementText:f,parentNode:h,nextSibling:_,setScopeId:C=Oe,insertStaticContent:j}=e,A=(c,u,p,b=null,g=null,m=null,w=void 0,S=null,y=!!u.dynamicChildren)=>{if(c===u)return;c&&!pt(c,u)&&(b=Ht(c),ve(c,g,m,!0),c=null),u.patchFlag===-2&&(y=!1,u.dynamicChildren=null);const{type:v,ref:P,shapeFlag:x}=u;switch(v){case dn:G(c,u,p,b);break;case Xe:H(c,u,p,b);break;case On:c==null&&U(u,p,b,w);break;case pe:Rt(c,u,p,b,g,m,w,S,y);break;default:x&1?J(c,u,p,b,g,m,w,S,y):x&6?Ft(c,u,p,b,g,m,w,S,y):(x&64||x&128)&&v.process(c,u,p,b,g,m,w,S,y,ut)}P!=null&&g&&Jt(P,c&&c.ref,m,u||c,!u)},G=(c,u,p,b)=>{if(c==null)r(u.el=l(u.children),p,b);else{const g=u.el=c.el;u.children!==c.children&&d(g,u.children)}},H=(c,u,p,b)=>{c==null?r(u.el=a(u.children||""),p,b):u.el=c.el},U=(c,u,p,b)=>{[c.el,c.anchor]=j(c.children,u,p,b,c.el,c.anchor)},z=({el:c,anchor:u},p,b)=>{let g;for(;c&&c!==u;)g=_(c),r(c,p,b),c=g;r(u,p,b)},M=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=_(c),i(c),c=p;i(u)},J=(c,u,p,b,g,m,w,S,y)=>{u.type==="svg"?w="svg":u.type==="math"&&(w="mathml"),c==null?je(u,p,b,g,m,w,S,y):$t(c,u,g,m,w,S,y)},je=(c,u,p,b,g,m,w,S)=>{let y,v;const{props:P,shapeFlag:x,transition:O,dirs:I}=c;if(y=c.el=o(c.type,m,P&&P.is,P),x&8?f(y,c.children):x&16&&$e(c.children,y,null,b,g,Cn(c,m),w,S),I&&Ke(c,null,b,"created"),be(y,c,c.scopeId,w,b),P){for(const V in P)V!=="value"&&!bt(V)&&s(y,V,null,P[V],m,b);"value"in P&&s(y,"value",null,P.value,m),(v=P.onVnodeBeforeMount)&&we(v,b,c)}I&&Ke(c,null,b,"beforeMount");const $=Wo(g,O);$&&O.beforeEnter(y),r(y,u,p),((v=P&&P.onVnodeMounted)||$||I)&&ue(()=>{v&&we(v,b,c),$&&O.enter(y),I&&Ke(c,null,b,"mounted")},g)},be=(c,u,p,b,g)=>{if(p&&C(c,p),b)for(let m=0;m<b.length;m++)C(c,b[m]);if(g){let m=g.subTree;if(u===m||is(m.type)&&(m.ssContent===u||m.ssFallback===u)){const w=g.vnode;be(c,w,w.scopeId,w.slotScopeIds,g.parent)}}},$e=(c,u,p,b,g,m,w,S,y=0)=>{for(let v=y;v<c.length;v++){const P=c[v]=S?Fe(c[v]):Ce(c[v]);A(null,P,u,p,b,g,m,w,S)}},$t=(c,u,p,b,g,m,w)=>{const S=u.el=c.el;let{patchFlag:y,dynamicChildren:v,dirs:P}=u;y|=c.patchFlag&16;const x=c.props||L,O=u.props||L;let I;if(p&&Ge(p,!1),(I=O.onVnodeBeforeUpdate)&&we(I,p,u,c),P&&Ke(u,c,p,"beforeUpdate"),p&&Ge(p,!0),(x.innerHTML&&O.innerHTML==null||x.textContent&&O.textContent==null)&&f(S,""),v?ze(c.dynamicChildren,v,S,p,b,Cn(u,g),m):w||N(c,u,S,null,p,b,Cn(u,g),m,!1),y>0){if(y&16)ct(S,x,O,p,g);else if(y&2&&x.class!==O.class&&s(S,"class",null,O.class,g),y&4&&s(S,"style",x.style,O.style,g),y&8){const $=u.dynamicProps;for(let V=0;V<$.length;V++){const D=$[V],ce=x[D],le=O[D];(le!==ce||D==="value")&&s(S,D,ce,le,g,p)}}y&1&&c.children!==u.children&&f(S,u.children)}else!w&&v==null&&ct(S,x,O,p,g);((I=O.onVnodeUpdated)||P)&&ue(()=>{I&&we(I,p,u,c),P&&Ke(u,c,p,"updated")},b)},ze=(c,u,p,b,g,m,w)=>{for(let S=0;S<u.length;S++){const y=c[S],v=u[S],P=y.el&&(y.type===pe||!pt(y,v)||y.shapeFlag&70)?h(y.el):p;A(y,v,P,null,b,g,m,w,!0)}},ct=(c,u,p,b,g)=>{if(u!==p){if(u!==L)for(const m in u)!bt(m)&&!(m in p)&&s(c,m,u[m],null,g,b);for(const m in p){if(bt(m))continue;const w=p[m],S=u[m];w!==S&&m!=="value"&&s(c,m,S,w,g,b)}"value"in p&&s(c,"value",u.value,p.value,g)}},Rt=(c,u,p,b,g,m,w,S,y)=>{const v=u.el=c?c.el:l(""),P=u.anchor=c?c.anchor:l("");let{patchFlag:x,dynamicChildren:O,slotScopeIds:I}=u;I&&(S=S?S.concat(I):I),c==null?(r(v,p,b),r(P,p,b),$e(u.children||[],p,P,g,m,w,S,y)):x>0&&x&64&&O&&c.dynamicChildren?(ze(c.dynamicChildren,O,p,g,m,w,S),(u.key!=null||g&&u===g.subTree)&&Qi(c,u,!0)):N(c,u,p,P,g,m,w,S,y)},Ft=(c,u,p,b,g,m,w,S,y)=>{u.slotScopeIds=S,c==null?u.shapeFlag&512?g.ctx.activate(u,p,b,w,y):gn(u,p,b,g,m,w,y):gr(c,u,y)},gn=(c,u,p,b,g,m,w)=>{const S=c.component=ul(c,b,g);if(Ni(c)&&(S.ctx.renderer=ut),fl(S,!1,w),S.asyncDep){if(g&&g.registerDep(S,re,w),!c.el){const y=S.subTree=k(Xe);H(null,y,u,p)}}else re(S,c,u,p,g,m,w)},gr=(c,u,p)=>{const b=u.component=c.component;if(Qo(c,u,p))if(b.asyncDep&&!b.asyncResolved){q(b,u,p);return}else b.next=u,b.update();else u.el=c.el,b.vnode=u},re=(c,u,p,b,g,m,w)=>{const S=()=>{if(c.isMounted){let{next:x,bu:O,u:I,parent:$,vnode:V}=c;{const _e=es(c);if(_e){x&&(x.el=V.el,q(c,x,w)),_e.asyncDep.then(()=>{c.isUnmounted||S()});return}}let D=x,ce;Ge(c,!1),x?(x.el=V.el,q(c,x,w)):x=V,O&&vn(O),(ce=x.props&&x.props.onVnodeBeforeUpdate)&&we(ce,$,x,V),Ge(c,!0);const le=Ar(c),ye=c.subTree;c.subTree=le,A(ye,le,h(ye.el),Ht(ye),c,g,m),x.el=le.el,D===null&&el(c,le.el),I&&ue(I,g),(ce=x.props&&x.props.onVnodeUpdated)&&ue(()=>we(ce,$,x,V),g)}else{let x;const{el:O,props:I}=u,{bm:$,m:V,parent:D,root:ce,type:le}=c,ye=_t(u);Ge(c,!1),$&&vn($),!ye&&(x=I&&I.onVnodeBeforeMount)&&we(x,D,u),Ge(c,!0);{ce.ce&&ce.ce._injectChildStyle(le);const _e=c.subTree=Ar(c);A(null,_e,p,b,c,g,m),u.el=_e.el}if(V&&ue(V,g),!ye&&(x=I&&I.onVnodeMounted)){const _e=u;ue(()=>we(x,D,_e),g)}(u.shapeFlag&256||D&&_t(D.vnode)&&D.vnode.shapeFlag&256)&&c.a&&ue(c.a,g),c.isMounted=!0,u=p=b=null}};c.scope.on();const y=c.effect=new hi(S);c.scope.off();const v=c.update=y.run.bind(y),P=c.job=y.runIfDirty.bind(y);P.i=c,P.id=c.uid,y.scheduler=()=>ar(P),Ge(c,!0),v()},q=(c,u,p)=>{u.component=c;const b=c.vnode.props;c.vnode=u,c.next=null,Ho(c,u.props,b,p),Bo(c,u.children,p),Be(),xr(c),Ue()},N=(c,u,p,b,g,m,w,S,y=!1)=>{const v=c&&c.children,P=c?c.shapeFlag:0,x=u.children,{patchFlag:O,shapeFlag:I}=u;if(O>0){if(O&128){Dt(v,x,p,b,g,m,w,S,y);return}else if(O&256){We(v,x,p,b,g,m,w,S,y);return}}I&8?(P&16&&at(v,g,m),x!==v&&f(p,x)):P&16?I&16?Dt(v,x,p,b,g,m,w,S,y):at(v,g,m,!0):(P&8&&f(p,""),I&16&&$e(x,p,b,g,m,w,S,y))},We=(c,u,p,b,g,m,w,S,y)=>{c=c||tt,u=u||tt;const v=c.length,P=u.length,x=Math.min(v,P);let O;for(O=0;O<x;O++){const I=u[O]=y?Fe(u[O]):Ce(u[O]);A(c[O],I,p,null,g,m,w,S,y)}v>P?at(c,g,m,!0,!1,x):$e(u,p,b,g,m,w,S,y,x)},Dt=(c,u,p,b,g,m,w,S,y)=>{let v=0;const P=u.length;let x=c.length-1,O=P-1;for(;v<=x&&v<=O;){const I=c[v],$=u[v]=y?Fe(u[v]):Ce(u[v]);if(pt(I,$))A(I,$,p,null,g,m,w,S,y);else break;v++}for(;v<=x&&v<=O;){const I=c[x],$=u[O]=y?Fe(u[O]):Ce(u[O]);if(pt(I,$))A(I,$,p,null,g,m,w,S,y);else break;x--,O--}if(v>x){if(v<=O){const I=O+1,$=I<P?u[I].el:b;for(;v<=O;)A(null,u[v]=y?Fe(u[v]):Ce(u[v]),p,$,g,m,w,S,y),v++}}else if(v>O)for(;v<=x;)ve(c[v],g,m,!0),v++;else{const I=v,$=v,V=new Map;for(v=$;v<=O;v++){const ae=u[v]=y?Fe(u[v]):Ce(u[v]);ae.key!=null&&V.set(ae.key,v)}let D,ce=0;const le=O-$+1;let ye=!1,_e=0;const ft=new Array(le);for(v=0;v<le;v++)ft[v]=0;for(v=I;v<=x;v++){const ae=c[v];if(ce>=le){ve(ae,g,m,!0);continue}let Se;if(ae.key!=null)Se=V.get(ae.key);else for(D=$;D<=O;D++)if(ft[D-$]===0&&pt(ae,u[D])){Se=D;break}Se===void 0?ve(ae,g,m,!0):(ft[Se-$]=v+1,Se>=_e?_e=Se:ye=!0,A(ae,u[Se],p,null,g,m,w,S,y),ce++)}const vr=ye?qo(ft):tt;for(D=vr.length-1,v=le-1;v>=0;v--){const ae=$+v,Se=u[ae],yr=ae+1<P?u[ae+1].el:b;ft[v]===0?A(null,Se,p,yr,g,m,w,S,y):ye&&(D<0||v!==vr[D]?qe(Se,p,yr,2):D--)}}},qe=(c,u,p,b,g=null)=>{const{el:m,type:w,transition:S,children:y,shapeFlag:v}=c;if(v&6){qe(c.component.subTree,u,p,b);return}if(v&128){c.suspense.move(u,p,b);return}if(v&64){w.move(c,u,p,ut);return}if(w===pe){r(m,u,p);for(let x=0;x<y.length;x++)qe(y[x],u,p,b);r(c.anchor,u,p);return}if(w===On){z(c,u,p);return}if(b!==2&&v&1&&S)if(b===0)S.beforeEnter(m),r(m,u,p),ue(()=>S.enter(m),g);else{const{leave:x,delayLeave:O,afterLeave:I}=S,$=()=>r(m,u,p),V=()=>{x(m,()=>{$(),I&&I()})};O?O(m,$,V):V()}else r(m,u,p)},ve=(c,u,p,b=!1,g=!1)=>{const{type:m,props:w,ref:S,children:y,dynamicChildren:v,shapeFlag:P,patchFlag:x,dirs:O,cacheIndex:I}=c;if(x===-2&&(g=!1),S!=null&&Jt(S,null,p,c,!0),I!=null&&(u.renderCache[I]=void 0),P&256){u.ctx.deactivate(c);return}const $=P&1&&O,V=!_t(c);let D;if(V&&(D=w&&w.onVnodeBeforeUnmount)&&we(D,u,c),P&6)Ss(c.component,p,b);else{if(P&128){c.suspense.unmount(p,b);return}$&&Ke(c,null,u,"beforeUnmount"),P&64?c.type.remove(c,u,p,ut,b):v&&!v.hasOnce&&(m!==pe||x>0&&x&64)?at(v,u,p,!1,!0):(m===pe&&x&384||!g&&P&16)&&at(y,u,p),b&&mr(c)}(V&&(D=w&&w.onVnodeUnmounted)||$)&&ue(()=>{D&&we(D,u,c),$&&Ke(c,null,u,"unmounted")},p)},mr=c=>{const{type:u,el:p,anchor:b,transition:g}=c;if(u===pe){_s(p,b);return}if(u===On){M(c);return}const m=()=>{i(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:w,delayLeave:S}=g,y=()=>w(p,m);S?S(c.el,m,y):y()}else m()},_s=(c,u)=>{let p;for(;c!==u;)p=_(c),i(c),c=p;i(u)},Ss=(c,u,p)=>{const{bum:b,scope:g,job:m,subTree:w,um:S,m:y,a:v}=c;Er(y),Er(v),b&&vn(b),g.stop(),m&&(m.flags|=8,ve(w,c,u,p)),S&&ue(S,u),ue(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},at=(c,u,p,b=!1,g=!1,m=0)=>{for(let w=m;w<c.length;w++)ve(c[w],u,p,b,g)},Ht=c=>{if(c.shapeFlag&6)return Ht(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=_(c.anchor||c.el),p=u&&u[po];return p?_(p):u};let mn=!1;const br=(c,u,p)=>{c==null?u._vnode&&ve(u._vnode,null,null,!0):A(u._vnode||null,c,u,null,null,null,p),u._vnode=c,mn||(mn=!0,xr(),Fi(),mn=!1)},ut={p:A,um:ve,m:qe,r:mr,mt:gn,mc:$e,pc:N,pbc:ze,n:Ht,o:e};return{render:br,hydrate:void 0,createApp:Ro(br)}}function Cn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ge({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Wo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Qi(e,t,n=!1){const r=e.children,i=t.children;if(T(r)&&T(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=Fe(i[s]),l.el=o.el),!n&&l.patchFlag!==-2&&Qi(o,l)),l.type===dn&&(l.el=o.el)}}function qo(e){const t=e.slice(),n=[0];let r,i,s,o,l;const a=e.length;for(r=0;r<a;r++){const d=e[r];if(d!==0){if(i=n[n.length-1],e[i]<d){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)l=s+o>>1,e[n[l]]<d?s=l+1:o=l;d<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function es(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:es(t)}function Er(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ko=Symbol.for("v-scx"),Go=()=>Ut(Ko);function He(e,t,n){return ts(e,t,n)}function ts(e,t,n=L){const{immediate:r,deep:i,flush:s,once:o}=n,l=ne({},n),a=t&&r||!t&&s!=="post";let d;if(Mt){if(s==="sync"){const C=Go();d=C.__watcherHandles||(C.__watcherHandles=[])}else if(!a){const C=()=>{};return C.stop=Oe,C.resume=Oe,C.pause=Oe,C}}const f=oe;l.call=(C,j,A)=>Pe(C,f,j,A);let h=!1;s==="post"?l.scheduler=C=>{ue(C,f&&f.suspense)}:s!=="sync"&&(h=!0,l.scheduler=(C,j)=>{j?C():ar(C)}),l.augmentJob=C=>{t&&(C.flags|=4),h&&(C.flags|=2,f&&(C.id=f.uid,C.i=f))};const _=lo(e,t,l);return Mt&&(d?d.push(_):a&&_()),_}function Jo(e,t,n){const r=this.proxy,i=K(e)?e.includes(".")?ns(r,e):()=>r[e]:e.bind(r,r);let s;E(t)?s=t:(s=t.handler,n=t);const o=Et(this),l=ts(i,s.bind(r),n);return o(),l}function ns(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const ko=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ne(t)}Modifiers`]||e[`${Ze(t)}Modifiers`];function Yo(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||L;let i=n;const s=t.startsWith("update:"),o=s&&ko(r,t.slice(7));o&&(o.trim&&(i=n.map(f=>K(f)?f.trim():f)),o.number&&(i=n.map(Ms)));let l,a=r[l=bn(t)]||r[l=bn(Ne(t))];!a&&s&&(a=r[l=bn(Ze(t))]),a&&Pe(a,e,6,i);const d=r[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Pe(d,e,6,i)}}function rs(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},l=!1;if(!E(e)){const a=d=>{const f=rs(d,t,!0);f&&(l=!0,ne(o,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!l?(W(e)&&r.set(e,null),null):(T(s)?s.forEach(a=>o[a]=null):ne(o,s),W(e)&&r.set(e,o),o)}function fn(e,t){return!e||!tn(t)?!1:(t=t.slice(2).replace(/Once$/,""),F(e,t[0].toLowerCase()+t.slice(1))||F(e,Ze(t))||F(e,t))}function Ar(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:l,emit:a,render:d,renderCache:f,props:h,data:_,setupState:C,ctx:j,inheritAttrs:A}=e,G=Gt(e);let H,U;try{if(n.shapeFlag&4){const M=i||r,J=M;H=Ce(d.call(J,M,f,h,C,_,j)),U=l}else{const M=t;H=Ce(M.length>1?M(h,{attrs:l,slots:o,emit:a}):M(h,null)),U=t.props?l:Xo(l)}}catch(M){wt.length=0,cn(M,e,1),H=k(Xe)}let z=H;if(U&&A!==!1){const M=Object.keys(U),{shapeFlag:J}=z;M.length&&J&7&&(s&&M.some(kn)&&(U=Zo(U,s)),z=lt(z,U,!1,!0))}return n.dirs&&(z=lt(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&ur(z,n.transition),H=z,Gt(G),H}const Xo=e=>{let t;for(const n in e)(n==="class"||n==="style"||tn(n))&&((t||(t={}))[n]=e[n]);return t},Zo=(e,t)=>{const n={};for(const r in e)(!kn(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Qo(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:l,patchFlag:a}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?jr(r,o,d):!!o;if(a&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const _=f[h];if(o[_]!==r[_]&&!fn(d,_))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?jr(r,o,d):!0:!!o;return!1}function jr(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!fn(n,s))return!0}return!1}function el({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const is=e=>e.__isSuspense;function tl(e,t){t&&t.pendingBranch?T(e)?t.effects.push(...e):t.effects.push(e):uo(e)}const pe=Symbol.for("v-fgt"),dn=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),On=Symbol.for("v-stc"),wt=[];let de=null;function X(e=!1){wt.push(de=e?null:[])}function nl(){wt.pop(),de=wt[wt.length-1]||null}let Pt=1;function $r(e,t=!1){Pt+=e,e<0&&de&&t&&(de.hasOnce=!0)}function ss(e){return e.dynamicChildren=Pt>0?de||tt:null,nl(),Pt>0&&de&&de.push(e),e}function ee(e,t,n,r,i,s){return ss(Y(e,t,n,r,i,s,!0))}function rl(e,t,n,r,i){return ss(k(e,t,n,r,i,!0))}function Yt(e){return e?e.__v_isVNode===!0:!1}function pt(e,t){return e.type===t.type&&e.key===t.key}const os=({key:e})=>e??null,zt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?K(e)||te(e)||E(e)?{i:he,r:e,k:t,f:!!n}:e:null);function Y(e,t=null,n=null,r=0,i=null,s=e===pe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&os(t),ref:t&&zt(t),scopeId:Hi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:he};return l?(hr(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=K(n)?8:16),Pt>0&&!o&&de&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&de.push(a),a}const k=il;function il(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Po)&&(e=Xe),Yt(e)){const l=lt(e,t,!0);return n&&hr(l,n),Pt>0&&!s&&de&&(l.shapeFlag&6?de[de.indexOf(e)]=l:de.push(l)),l.patchFlag=-2,l}if(gl(e)&&(e=e.__vccOpts),t){t=sl(t);let{class:l,style:a}=t;l&&!K(l)&&(t.class=Qn(l)),W(a)&&(lr(a)&&!T(a)&&(a=ne({},a)),t.style=Zn(a))}const o=K(e)?1:is(e)?128:ho(e)?64:W(e)?4:E(e)?2:0;return Y(e,t,n,r,i,o,s,!0)}function sl(e){return e?lr(e)||Ki(e)?ne({},e):e:null}function lt(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:l,transition:a}=e,d=t?ll(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&os(d),ref:t&&t.ref?n&&s?T(s)?s.concat(zt(t)):[s,zt(t)]:zt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lt(e.ssContent),ssFallback:e.ssFallback&&lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&ur(f,a.clone(f)),f}function ol(e=" ",t=0){return k(dn,null,e,t)}function Pn(e="",t=!1){return t?(X(),rl(Xe,null,e)):k(Xe,null,e)}function Ce(e){return e==null||typeof e=="boolean"?k(Xe):T(e)?k(pe,null,e.slice()):Yt(e)?Fe(e):k(dn,null,String(e))}function Fe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:lt(e)}function hr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(T(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),hr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Ki(t)?t._ctx=he:i===3&&he&&(he.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else E(t)?(t={default:t,_ctx:he},n=32):(t=String(t),r&64?(n=16,t=[ol(t)]):n=8);e.children=t,e.shapeFlag|=n}function ll(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Qn([t.class,r.class]));else if(i==="style")t.style=Zn([t.style,r.style]);else if(tn(i)){const s=t[i],o=r[i];o&&s!==o&&!(T(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function we(e,t,n,r=null){Pe(e,t,7,[n,r])}const cl=zi();let al=0;function ul(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||cl,s={uid:al++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ji(r,i),emitsOptions:rs(r,i),emit:null,emitted:null,propsDefaults:L,inheritAttrs:r.inheritAttrs,ctx:L,data:L,props:L,attrs:L,slots:L,refs:L,setupState:L,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Yo.bind(null,s),e.ce&&e.ce(s),s}let oe=null,Xt,Wn;{const e=sn(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Xt=t("__VUE_INSTANCE_SETTERS__",n=>oe=n),Wn=t("__VUE_SSR_SETTERS__",n=>Mt=n)}const Et=e=>{const t=oe;return Xt(e),e.scope.on(),()=>{e.scope.off(),Xt(t)}},Rr=()=>{oe&&oe.scope.off(),Xt(null)};function ls(e){return e.vnode.shapeFlag&4}let Mt=!1;function fl(e,t=!1,n=!1){t&&Wn(t);const{props:r,children:i}=e.vnode,s=ls(e);Do(e,r,s,t),Vo(e,i,n);const o=s?dl(e,t):void 0;return t&&Wn(!1),o}function dl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Mo);const{setup:r}=n;if(r){Be();const i=e.setupContext=r.length>1?hl(e):null,s=Et(e),o=Tt(r,e,0,[e.props,i]),l=oi(o);if(Ue(),s(),(l||e.sp)&&!_t(e)&&Li(e),l){if(o.then(Rr,Rr),t)return o.then(a=>{Fr(e,a)}).catch(a=>{cn(a,e,0)});e.asyncDep=o}else Fr(e,o)}else cs(e)}function Fr(e,t,n){E(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:W(t)&&(e.setupState=ji(t)),cs(e)}function cs(e,t,n){const r=e.type;e.render||(e.render=r.render||Oe);{const i=Et(e);Be();try{Io(e)}finally{Ue(),i()}}}const pl={get(e,t){return Z(e,"get",""),e[t]}};function hl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,pl),slots:e.slots,emit:e.emit,expose:t}}function pn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ji(to(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in St)return St[n](e)},has(t,n){return n in t||n in St}})):e.proxy}function gl(e){return E(e)&&"__vccOpts"in e}const Zt=(e,t)=>so(e,t,Mt);function Mn(e,t,n){const r=arguments.length;return r===2?W(t)&&!T(t)?Yt(t)?k(e,null,[t]):k(e,t):k(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yt(n)&&(n=[n]),k(e,t,n))}const ml="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qn;const Dr=typeof window<"u"&&window.trustedTypes;if(Dr)try{qn=Dr.createPolicy("vue",{createHTML:e=>e})}catch{}const as=qn?e=>qn.createHTML(e):e=>e,bl="http://www.w3.org/2000/svg",vl="http://www.w3.org/1998/Math/MathML",Ie=typeof document<"u"?document:null,Hr=Ie&&Ie.createElement("template"),yl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?Ie.createElementNS(bl,e):t==="mathml"?Ie.createElementNS(vl,e):n?Ie.createElement(e,{is:n}):Ie.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Ie.createTextNode(e),createComment:e=>Ie.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ie.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Hr.innerHTML=as(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Hr.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},_l=Symbol("_vtc");function Sl(e,t,n){const r=e[_l];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Qt=Symbol("_vod"),us=Symbol("_vsh"),Lr={beforeMount(e,{value:t},{transition:n}){e[Qt]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ht(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ht(e,!0),r.enter(e)):r.leave(e,()=>{ht(e,!1)}):ht(e,t))},beforeUnmount(e,{value:t}){ht(e,t)}};function ht(e,t){e.style.display=t?e[Qt]:"none",e[us]=!t}const wl=Symbol(""),xl=/(^|;)\s*display\s*:/;function Cl(e,t,n){const r=e.style,i=K(n);let s=!1;if(n&&!i){if(t)if(K(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Wt(r,l,"")}else for(const o in t)n[o]==null&&Wt(r,o,"");for(const o in n)o==="display"&&(s=!0),Wt(r,o,n[o])}else if(i){if(t!==n){const o=r[wl];o&&(n+=";"+o),r.cssText=n,s=xl.test(n)}}else t&&e.removeAttribute("style");Qt in e&&(e[Qt]=s?r.display:"",e[us]&&(r.display="none"))}const Nr=/\s*!important$/;function Wt(e,t,n){if(T(n))n.forEach(r=>Wt(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ol(e,t);Nr.test(n)?e.setProperty(Ze(r),n.replace(Nr,""),"important"):e[r]=n}}const Vr=["Webkit","Moz","ms"],In={};function Ol(e,t){const n=In[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return In[t]=r;r=ai(r);for(let i=0;i<Vr.length;i++){const s=Vr[i]+r;if(s in e)return In[t]=s}return t}const Br="http://www.w3.org/1999/xlink";function Ur(e,t,n,r,i,s=$s(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Br,t.slice(6,t.length)):e.setAttributeNS(Br,t,n):n==null||s&&!fi(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ve(n)?String(n):n)}function zr(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?as(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=fi(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Pl(e,t,n,r){e.addEventListener(t,n,r)}function Ml(e,t,n,r){e.removeEventListener(t,n,r)}const Wr=Symbol("_vei");function Il(e,t,n,r,i=null){const s=e[Wr]||(e[Wr]={}),o=s[t];if(r&&o)o.value=r;else{const[l,a]=Tl(t);if(r){const d=s[t]=jl(r,i);Pl(e,l,d,a)}else o&&(Ml(e,l,o,a),s[t]=void 0)}}const qr=/(?:Once|Passive|Capture)$/;function Tl(e){let t;if(qr.test(e)){t={};let r;for(;r=e.match(qr);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ze(e.slice(2)),t]}let Tn=0;const El=Promise.resolve(),Al=()=>Tn||(El.then(()=>Tn=0),Tn=Date.now());function jl(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe($l(r,n.value),t,5,[r])};return n.value=e,n.attached=Al(),n}function $l(e,t){if(T(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Kr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Rl=(e,t,n,r,i,s)=>{const o=i==="svg";t==="class"?Sl(e,r,o):t==="style"?Cl(e,n,r):tn(t)?kn(t)||Il(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fl(e,t,r,o))?(zr(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ur(e,t,r,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!K(r))?zr(e,Ne(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ur(e,t,r,o))};function Fl(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Kr(t)&&E(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Kr(t)&&K(n)?!1:t in e}const Dl=ne({patchProp:Rl},yl);let Gr;function Hl(){return Gr||(Gr=Uo(Dl))}const Ll=(...e)=>{const t=Hl().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Vl(r);if(!i)return;const s=t._component;!E(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Nl(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Nl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Vl(e){return K(e)?document.querySelector(e):e}function Bl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function kr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jr(Object(n),!0).forEach(function(r){Bl(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ul(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zl(e,t){if(e==null)return{};var n=Ul(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wl(e,t){return ql(e)||Kl(e,t)||Gl(e,t)||Jl()}function ql(e){if(Array.isArray(e))return e}function Kl(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,i=!1,s=void 0;try{for(var o=e[Symbol.iterator](),l;!(r=(l=o.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(a){i=!0,s=a}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}}function Gl(e,t){if(e){if(typeof e=="string")return Yr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yr(e,t)}}function Yr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Jl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Zr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xr(Object(n),!0).forEach(function(r){kl(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function mt(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];return t.apply(n,[].concat(i,l))}}}function en(e){return{}.toString.call(e).includes("Object")}function Xl(e){return!Object.keys(e).length}function It(e){return typeof e=="function"}function Zl(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ql(e,t){return en(t)||Le("changeType"),Object.keys(t).some(function(n){return!Zl(e,n)})&&Le("changeField"),t}function ec(e){It(e)||Le("selectorType")}function tc(e){It(e)||en(e)||Le("handlerType"),en(e)&&Object.values(e).some(function(t){return!It(t)})&&Le("handlersType")}function nc(e){e||Le("initialIsRequired"),en(e)||Le("initialType"),Xl(e)&&Le("initialContent")}function rc(e,t){throw new Error(e[t]||e.default)}var ic={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Le=mt(rc)(ic),Bt={changes:Ql,selector:ec,handler:tc,initial:nc};function sc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Bt.initial(e),Bt.handler(t);var n={current:e},r=mt(cc)(n,t),i=mt(lc)(n),s=mt(Bt.changes)(e),o=mt(oc)(n);function l(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(f){return f};return Bt.selector(d),d(n.current)}function a(d){Yl(r,i,s,o)(d)}return[l,a]}function oc(e,t){return It(t)?t(e.current):t}function lc(e,t){return e.current=Zr(Zr({},e.current),t),t}function cc(e,t,n){return It(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var ac={create:sc},uc={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function fc(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];return t.apply(n,[].concat(i,l))}}}function dc(e){return{}.toString.call(e).includes("Object")}function pc(e){return e||Qr("configIsRequired"),dc(e)||Qr("configType"),e.urls?(hc(),{paths:{vs:e.urls.monacoBase}}):e}function hc(){console.warn(fs.deprecation)}function gc(e,t){throw new Error(e[t]||e.default)}var fs={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Qr=fc(gc)(fs),mc={config:pc},bc=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,o){return o(s)},i)}};function ds(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],ds(e[n],t[n]))}),kr(kr({},e),t)}var vc={type:"cancelation",msg:"operation is manually canceled"};function En(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(vc):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var yc=ac.create({config:uc,isInitialized:!1,resolve:null,reject:null,monaco:null}),ps=Wl(yc,2),At=ps[0],hn=ps[1];function _c(e){var t=mc.config(e),n=t.monaco,r=zl(t,["monaco"]);hn(function(i){return{config:ds(i.config,r),monaco:n}})}function Sc(){var e=At(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(hn({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),En(An);if(window.monaco&&window.monaco.editor)return hs(window.monaco),e.resolve(window.monaco),En(An);bc(wc,Cc)(Oc)}return En(An)}function wc(e){return document.body.appendChild(e)}function xc(e){var t=document.createElement("script");return e&&(t.src=e),t}function Cc(e){var t=At(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=xc("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Oc(){var e=At(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){hs(n),e.resolve(n)},function(n){e.reject(n)})}function hs(e){At().monaco||hn({monaco:e})}function Pc(){return At(function(e){var t=e.monaco;return t})}var An=new Promise(function(e,t){return hn({resolve:e,reject:t})}),Kn={config:_c,init:Sc,__getMonacoInstance:Pc},Mc=Object.defineProperty,Ic=Object.defineProperties,Tc=Object.getOwnPropertyDescriptors,ei=Object.getOwnPropertySymbols,Ec=Object.prototype.hasOwnProperty,Ac=Object.prototype.propertyIsEnumerable,ti=(e,t,n)=>t in e?Mc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,jn=(e,t)=>{for(var n in t||(t={}))Ec.call(t,n)&&ti(e,n,t[n]);if(ei)for(var n of ei(t))Ac.call(t,n)&&ti(e,n,t[n]);return e},jc=(e,t)=>Ic(e,Tc(t));const $n={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function $c(e,t){const n=Zt(()=>{const{width:i,height:s}=e;return jc(jn({},$n.wrapper),{width:i,height:s})}),r=Zt(()=>jn(jn({},$n.fullWidth),!t.value&&$n.hide));return{wrapperStyle:n,containerStyle:r}}function Rc(){const e=ln(Kn.__getMonacoInstance()),t=Ti(!1);let n;return fr(()=>{e.value||(n=Kn.init(),n.then(i=>e.value=i).catch(i=>{(i==null?void 0:i.type)!=="cancelation"&&(t.value=!0,console.error("Monaco initialization error:",i))}))}),{monacoRef:e,unload:()=>n==null?void 0:n.cancel(),isLoadFailed:t}}function ni(e){return typeof e=="function"?e():e}function Gn(e){return e===void 0}function gs(e,t,n,r){return Fc(e,r)||Dc(e,t,n,r)}function Fc(e,t){return e.editor.getModel(ms(e,t))}function Dc(e,t,n,r){return e.editor.createModel(t,n,r?ms(e,r):void 0)}function ms(e,t){return e.Uri.parse(t)}var Hc=Object.defineProperty,ri=Object.getOwnPropertySymbols,Lc=Object.prototype.hasOwnProperty,Nc=Object.prototype.propertyIsEnumerable,ii=(e,t,n)=>t in e?Hc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vc=(e,t)=>{for(var n in t||(t={}))Lc.call(t,n)&&ii(e,n,t[n]);if(ri)for(var n of ri(t))Nc.call(t,n)&&ii(e,n,t[n]);return e};const Bc={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var bs=an({name:"VueMonacoEditor",model:{prop:"value",event:"update:value"},props:{defaultValue:String,defaultPath:String,defaultLanguage:String,value:String,language:String,path:String,theme:{type:String,default:"vs"},line:Number,options:{type:Object,default:()=>({})},overrideServices:{type:Object,default:()=>({})},saveViewState:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},emits:["update:value","beforeMount","mount","change","validate"],setup(e,t){const n=new Map,r=ln(null),{monacoRef:i,unload:s,isLoadFailed:o}=Rc(),{editorRef:l}=Uc(t,e,i,r),{disposeValidator:a}=zc(t,e,i,l),d=Zt(()=>!!i.value&&!!l.value),{wrapperStyle:f,containerStyle:h}=$c(e,d);return dr(()=>{var _,C;(_=a.value)==null||_.call(a),l.value?((C=l.value.getModel())==null||C.dispose(),l.value.dispose()):s()}),He([()=>e.path,()=>e.value,()=>e.language,()=>e.line],([_,C,j,A],[G,H,U,z])=>{if(d.value){if(_!==G){const M=gs(i.value,C||e.defaultValue||"",j||e.defaultLanguage||"",_||e.defaultPath||"");e.saveViewState&&n.set(G,l.value.saveViewState()),l.value.setModel(M),e.saveViewState&&l.value.restoreViewState(n.get(_)),Gn(A)||l.value.revealLine(A);return}l.value.getValue()!==C&&l.value.setValue(C),j!==U&&i.value.editor.setModelLanguage(l.value.getModel(),j),!Gn(A)&&A!==z&&l.value.revealLine(A)}}),He(()=>e.options,_=>l.value&&l.value.updateOptions(_),{deep:!0}),He(()=>e.theme,_=>i.value&&i.value.editor.setTheme(_)),{containerRef:r,isEditorReady:d,isLoadFailed:o,wrapperStyle:f,containerStyle:h}},render(){const{$slots:e,isEditorReady:t,isLoadFailed:n,wrapperStyle:r,containerStyle:i,className:s}=this;return Mn("div",{style:r},[!t&&Mn("div",{style:Bc},n?e.failure?ni(e.failure):"load failed":e.default?ni(e.default):"loading..."),Mn("div",{ref:"containerRef",key:"monaco_editor_container",style:i,class:s})])}});function Uc({emit:e},t,n,r){const i=ln(null);fr(()=>{const o=He(n,()=>{r.value&&n.value&&(cr(()=>o()),s())},{immediate:!0})});function s(){var o;if(!r.value||!n.value||i.value)return;e("beforeMount",n.value);const l=t.path||t.defaultPath,a=gs(n.value,t.value||t.defaultValue||"",t.language||t.defaultLanguage||"",l||"");i.value=n.value.editor.create(r.value,Vc({model:a,theme:t.theme,automaticLayout:!0,autoIndent:"brackets",formatOnPaste:!0,formatOnType:!0},t.options),t.overrideServices),(o=i.value)==null||o.onDidChangeModelContent(d=>{const f=i.value.getValue();f!==t.value&&(e("update:value",f),e("change",f,d))}),i.value&&!Gn(t.line)&&i.value.revealLine(t.line),e("mount",i.value,n.value)}return{editorRef:i}}function zc({emit:e},t,n,r){const i=Ti(null),s=He([n,r],()=>{if(n.value&&r.value){cr(()=>s());const o=n.value.editor.onDidChangeMarkers(l=>{var a,d;const f=(d=(a=r.value)==null?void 0:a.getModel())==null?void 0:d.uri;if(f&&l.find(_=>_.path===f.path)){const _=n.value.editor.getModelMarkers({resource:f});e("validate",_)}});i.value=()=>o==null?void 0:o.dispose()}});return{disposeValidator:i}}const Wc={class:"pattern-card"},qc=["title"],Kc={key:0,class:"pattern-card-description"},Gc={key:1,class:"pattern-code-block"},Jc={key:2,class:"pattern-notes"},kc={class:"pattern-notes-list"},Yc={components:{VueMonacoEditor:bs},props:{selectedSubItem:{type:Object,default:null},codeTheme:{type:String,default:"vs"}},computed:{mutableValue:{get(){return this.selectedSubItem.code},set(){}}},data(){return{}}},Xc=an({...Yc,__name:"PatternCard",setup(e){const t={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0,minimap:{enabled:!1}},n=ln(),r=()=>{const o=window.matchMedia("(prefers-color-scheme: dark)").matches?"vs-dark":"vs";n.value._themeService.setTheme(o)};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",r);const i=s=>{n.value=s,r()};return(s,o)=>(X(),ee("div",Wc,[Y("h2",{title:e.selectedSubItem.en_title,class:"pattern-card-title"},rt(e.selectedSubItem.title),9,qc),e.selectedSubItem.description?(X(),ee("p",Kc,rt(e.selectedSubItem.description),1)):Pn("",!0),e.selectedSubItem.code?(X(),ee("div",Gc,[k(Ai(bs),{value:s.mutableValue,"onUpdate:value":o[0]||(o[0]=l=>s.mutableValue=l),language:"typescript",height:"100%",options:t,onMount:i,class:"pattern-card-editor"},null,8,["value"])])):Pn("",!0),e.selectedSubItem.notes.length>0?(X(),ee("div",Jc,[o[1]||(o[1]=Y("h3",{class:"pattern-notes-title"},"Применение:",-1)),Y("ul",kc,[(X(!0),ee(pe,null,Nn(e.selectedSubItem.notes,(l,a)=>(X(),ee("li",{key:a},rt(l),1))),128))])])):Pn("",!0)]))}}),jt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Zc=jt(Xc,[["__scopeId","data-v-daa0f4ee"]]),Qc={props:{selectedItem:{type:String,default:null}}},ea={class:"control-container"};function ta(e,t,n,r,i,s){return X(),ee("div",ea)}const na=jt(Qc,[["render",ta],["__scopeId","data-v-bfcdd136"]]),ra={class:"pattern-card-viewer"},ia={key:0},sa={key:1,class:"pattern-card-viewer-help"},oa={props:{selectedSubItem:{type:Object,default:null}}},la=an({...oa,__name:"PatternCardViewer",setup(e){return(t,n)=>(X(),ee("div",ra,[e.selectedSubItem?(X(),ee("div",ia,[k(Zc,{"selected-sub-item":e.selectedSubItem},null,8,["selected-sub-item"]),k(na)])):(X(),ee("div",sa,n[0]||(n[0]=[Y("p",null,"Выберите пункт меню слева",-1)])))]))}}),vs=jt(la,[["__scopeId","data-v-f304b232"]]),ca=[{title:"Порождающие паттерны",en_title:"Creational Patterns",subitems:[{title:"Абстрактная фабрика",en_title:"Abstract Factory",description:"Создает семейства связанных объектов без указания их конкретных классов.",code:`interface Button {
    render(): void;
}

class WinButton implements Button {
    render() { console.log("Windows button"); }
}

class MacButton implements Button {
    render() { console.log("Mac button"); }
}

interface GUIFactory {
    createButton(): Button;
}

class WinFactory implements GUIFactory {
    createButton(): Button { return new WinButton(); }
}

class MacFactory implements GUIFactory {
    createButton(): Button { return new MacButton(); }
}`,notes:["Подходит: Когда система должна быть независимой от процесса создания объектов","Не подходит: Для простых приложений с одним типом объектов"]},{title:"Строитель",en_title:"Builder",description:"Позволяет создавать сложные объекты пошагово.",code:`class Pizza {
    constructor(public size: number, public cheese: boolean, public pepperoni: boolean) {}
}

class PizzaBuilder {
    private size: number;
    private cheese = false;
    private pepperoni = false;

    constructor(size: number) { this.size = size; }

    addCheese(): PizzaBuilder { this.cheese = true; return this; }
    addPepperoni(): PizzaBuilder { this.pepperoni = true; return this; }

    build(): Pizza {
        return new Pizza(this.size, this.cheese, this.pepperoni);
    }
}

const pizza = new PizzaBuilder(12).addCheese().addPepperoni().build();`,notes:["Подходит: Для создания объектов со множеством параметров","Не подходит: Для простых объектов с фиксированной структурой"]},{title:"Фабричный метод",en_title:"Factory Method",description:"Определяет интерфейс для создания объекта, но оставляет подклассам решение о том, какой класс инстанцировать.",code:`abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return \`Creator: \${product.operation()}\`;
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return 'Result of ConcreteProduct1';
    }
}`,notes:["Подходит: Когда классу заранее неизвестно, объекты каких классов ему нужно создавать","Не подходит: Когда создаваемые продукты просты и не требуют сложной логики создания"]},{title:"Прототип",en_title:"Prototype",description:"Позволяет копировать объекты без привязки к их конкретным классам.",code:`interface Prototype {
    clone(): Prototype;
}

class ConcretePrototype implements Prototype {
    public field: any;

    constructor(prototype?: ConcretePrototype) {
        if (prototype) {
            this.field = prototype.field;
        }
    }

    public clone(): Prototype {
        return new ConcretePrototype(this);
    }
}`,notes:["Подходит: Когда нужно избежать сложной инициализации объектов","Не подходит: Когда копирование объектов проще сделать вручную"]},{title:"Одиночка",en_title:"Singleton",description:"Гарантирует, что у класса есть только один экземпляр.",code:`class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}`,notes:["Подходит: Для глобального доступа к ресурсам (логгеры, конфиги)","Не подходит: Когда затрудняет тестирование или нарушает принцип единственной ответственности"]}]},{title:"Структурные паттерны",en_title:"Structural Patterns",subitems:[{title:"Адаптер",en_title:"Adapter",description:"Позволяет работать с несовместимыми интерфейсами.",code:`interface LightningPhone {
    useLightning(): void;
}

class iPhone implements LightningPhone {
    useLightning() { console.log("Using lightning"); }
}

class MicroUSBPhone {
    useMicroUSB() { console.log("Using micro USB"); }
}

class LightningToMicroUSBAdapter implements LightningPhone {
    constructor(private microUSBPhone: MicroUSBPhone) {}

    useLightning() {
        console.log("Converting lightning to micro USB");
        this.microUSBPhone.useMicroUSB();
    }
}`,notes:["Подходит: Для интеграции старого кода с новым","Не подходит: Когда можно изменить исходный интерфейс"]},{title:"Декоратор",en_title:"Decorator",description:"Динамически добавляет объекту новые обязанности.",code:`interface Coffee {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffee {
    cost() { return 10; }
    description() { return "Simple coffee"; }
}

class MilkDecorator implements Coffee {
    constructor(private coffee: Coffee) {}

    cost() { return this.coffee.cost() + 2; }
    description() { return \`\${this.coffee.description()}, milk\`; }
}

let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);`,notes:["Подходит: Для добавления функциональности без изменения классов","Не подходит: Когда можно использовать простые подклассы"]},{title:"Мост",en_title:"Bridge",description:"Разделяет абстракцию и реализацию, позволяя им изменяться независимо.",code:`interface Implementation {
    operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation {
    operationImplementation(): string {
        return 'ConcreteImplementationA';
    }
}

class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public operation(): string {
        return this.implementation.operationImplementation();
    }
}`,notes:["Подходит: Для разделения монолитных классов","Не подходит: Для простых классов с одной реализацией"]},{title:"Компоновщик",en_title:"Composite",description:"Группирует объекты в древовидные структуры для работы с ними как с единым объектом.",code:`interface Component {
    operation(): string;
}

class Leaf implements Component {
    public operation(): string {
        return 'Leaf';
    }
}

class Composite implements Component {
    private children: Component[] = [];

    public add(component: Component): void {
        this.children.push(component);
    }

    public operation(): string {
        return \`Branch(\${this.children.map(child => child.operation()).join('+')})\`;
    }
}`,notes:["Подходит: Для представления иерархий часть-целое","Не подходит: Когда различия между компонентами слишком велики"]},{title:"Фасад",en_title:"Facade",description:"Предоставляет упрощенный интерфейс к сложной системе классов.",code:`class Subsystem1 {
    public operation1(): string {
        return 'Subsystem1: Ready!';
    }
}

class Facade {
    protected subsystem1: Subsystem1;

    constructor(subsystem1?: Subsystem1) {
        this.subsystem1 = subsystem1 || new Subsystem1();
    }

    public operation(): string {
        return this.subsystem1.operation1();
    }
}`,notes:["Подходит: Для упрощения работы со сложными системами","Не подходит: Когда нужен полный контроль над системой"]},{title:"Приспособленец",en_title:"Flyweight",description:"Эффективно поддерживает множество мелких объектов.",code:`class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState: any): void {
        console.log(\`Shared: \${JSON.stringify(this.sharedState)}, Unique: \${JSON.stringify(uniqueState)}\`);
    }
}

class FlyweightFactory {
    private flyweights: {[key: string]: Flyweight} = {};

    public getFlyweight(sharedState: any): Flyweight {
        const key = JSON.stringify(sharedState);
        if (!(key in this.flyweights)) {
            this.flyweights[key] = new Flyweight(sharedState);
        }
        return this.flyweights[key];
    }
}`,notes:["Подходит: Для оптимизации работы с большим количеством объектов","Не подходит: Когда объекты сильно различаются"]},{title:"Заместитель",en_title:"Proxy",description:"Предоставляет суррогат или заместитель для другого объекта.",code:`interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request.');
    }
}

class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access');
        return true;
    }
}`,notes:["Подходит: Для ленивой инициализации, контроля доступа, кеширования","Не подходит: Когда можно напрямую работать с объектом"]}]},{title:"Поведенческие паттерны",en_title:"Behavioral Patterns",subitems:[{title:"Наблюдатель",en_title:"Observer",description:'Определяет зависимость "один-ко-многим" между объектами.',code:`interface Observer {
    update(data: any): void;
}

class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    notifyObservers(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class ConcreteObserver implements Observer {
    update(data: any) {
        console.log(\`Received data: \${data}\`);
    }
}

const subject = new Subject();
subject.addObserver(new ConcreteObserver());
subject.notifyObservers("Hello!");`,notes:["Подходит: Для событийных систем, MVC","Не подходит: Когда порядок уведомлений критичен (может привести к цикличности)"]},{title:"Стратегия",en_title:"Strategy",description:"Определяет семейство алгоритмов, инкапсулирует каждый из них и делает их взаимозаменяемыми.",code:`interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number) {
        console.log(\`Paid \${amount} via credit card\`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number) {
        console.log(\`Paid \${amount} via PayPal\`);
    }
}

class ShoppingCart {
    constructor(private paymentStrategy: PaymentStrategy) {}

    checkout(amount: number) {
        this.paymentStrategy.pay(amount);
    }
}

const cart = new ShoppingCart(new PayPalPayment());
cart.checkout(100);`,notes:["Подходит: Когда нужно выбирать алгоритм во время выполнения","Не подходит: Для простых случаев с одним алгоритмом"]},{title:"Цепочка обязанностей",en_title:"Chain of Responsibility",description:"Передает запрос по цепочке обработчиков.",code:`interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class ConcreteHandler1 extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === '1') {
            return \`Handler1: processed \${request}\`;
        }
        return super.handle(request);
    }
}`,notes:["Подходит: Для обработки запросов разными способами","Не подходит: Когда обработчик всегда один"]},{title:"Итератор",en_title:"Iterator",description:"Предоставляет способ последовательного доступа к элементам составного объекта.",code:`interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
}

class ConcreteIterator implements Iterator<string> {
    private collection: string[] = [];
    private position: number = 0;

    constructor(collection: string[]) {
        this.collection = collection;
    }

    public next(): string {
        return this.collection[this.position++];
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}`,notes:["Подходит: Для обхода сложных структур данных","Не подходит: Для простых массивов"]},{title:"Хранитель",en_title:"Memento",description:"Позволяет сохранять и восстанавливать состояние объекта.",code:`class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public save(): Memento {
        return new ConcreteMemento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
    }
}

interface Memento {
    getState(): string;
    getDate(): string;
}

class ConcreteMemento implements Memento {
    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString();
    }

    public getState(): string {
        return this.state;
    }
}`,notes:["Подходит: Для реализации отмены операций","Не подходит: Когда объекты часто меняют состояние"]},{title:"Состояние",en_title:"State",description:"Позволяет объекту изменять свое поведение при изменении состояния.",code:`interface State {
    handle(context: Context): void;
}

class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    public setState(state: State): void {
        this.state = state;
    }

    public request(): void {
        this.state.handle(this);
    }
}

class ConcreteStateA implements State {
    public handle(context: Context): void {
        console.log('State A handling');
        context.setState(new ConcreteStateB());
    }
}`,notes:["Подходит: Для объектов с изменяющимся поведением","Не подходит: Когда состояния мало отличаются"]},{title:"Шаблонный метод",en_title:"Template Method",description:"Определяет скелет алгоритма, перекладывая ответственность за некоторые шаги на подклассы.",code:`abstract class AbstractClass {
    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperations1();
        this.baseOperation2();
        this.hook1();
    }

    protected baseOperation1(): void {
        console.log('AbstractClass: baseOperation1');
    }

    protected abstract requiredOperations1(): void;

    protected baseOperation2(): void {
        console.log('AbstractClass: baseOperation2');
    }

    protected hook1(): void {}
}

class ConcreteClass1 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass1: requiredOperation1');
    }
}`,notes:["Подходит: Для алгоритмов с общими шагами","Не подходит: Когда каждый алгоритм уникален"]},{title:"Команда",en_title:"Command",description:"Инкапсулирует запрос как объект.",code:`interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(\`SimpleCommand: \${this.payload}\`);
    }
}

class Invoker {
    private onStart: Command | null = null;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public doSomethingImportant(): void {
        if (this.onStart) {
            this.onStart.execute();
        }
    }
}`,notes:["Подходит: Для реализации отмены операций, очередей команд","Не подходит: Для простых операций"]},{title:"Посредник",en_title:"Mediator",description:"Определяет объект, инкапсулирующий способ взаимодействия объектов.",code:`interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private component1: Component1;
    private component2: Component2;

    constructor(c1: Component1, c2: Component2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            this.component2.doC();
        }
    }
}

class BaseComponent {
    protected mediator: Mediator | null = null;

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}`,notes:["Подходит: Для уменьшения связанности компонентов","Не подходит: Когда компоненты редко взаимодействуют"]},{title:"Посетитель",en_title:"Visitor",description:"Описывает операцию, выполняемую с каждым объектом из некоторой структуры.",code:`interface Component {
    accept(visitor: Visitor): void;
}

class ConcreteComponentA implements Component {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }

    public exclusiveMethodOfConcreteComponentA(): string {
        return 'A';
    }
}

interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void;
}

class ConcreteVisitor1 implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(\`\${element.exclusiveMethodOfConcreteComponentA()} + Visitor1\`);
    }
}`,notes:["Подходит: Для выполнения операций над сложными структурами объектов","Не подходит: Когда структура объектов часто меняется"]}]}],aa={emits:["subitem-selected"],data(){return{menuItems:ca,isMenuVisible:!0,isMinimized:!0}},mounted(){window.addEventListener("resize",this.handleResize)},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{handleItem(e){this.isMenuVisible=!1,this.$emit("subitem-selected",e)},toggleMenu(){this.isMenuVisible=!0},handleResize(){this.isMinimized=window.innerWidth<=1024}}},ua={class:"pattern-menu"},fa={class:"pattern-menu-container"},da=["title"],pa=["onClick","title"];function ha(e,t,n,r,i,s){return X(),ee("div",ua,[Cr(Y("div",null,[Y("button",{onClick:t[0]||(t[0]=(...o)=>s.toggleMenu&&s.toggleMenu(...o)),class:"pattern-menu-burger"},t[1]||(t[1]=[Y("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[Y("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})],-1)]))],512),[[Lr,!i.isMenuVisible&&i.isMinimized]]),Cr(Y("div",fa,[t[2]||(t[2]=Y("h3",null,"Паттерны проектирования",-1)),t[3]||(t[3]=Y("h4",null,"TypeScript",-1)),Y("ul",null,[(X(!0),ee(pe,null,Nn(i.menuItems,(o,l)=>(X(),ee("li",{class:"pattern-menu-list-item",key:l},[Y("p",{title:o.en_title,class:"pattern-menu-list-item-title"},rt(o.title),9,da),Y("ul",null,[(X(!0),ee(pe,null,Nn(o.subitems,(a,d)=>(X(),ee("li",{class:"pattern-menu-sublist-item",key:d},[Y("p",{onClick:f=>s.handleItem(a),title:a.en_title,class:"pattern-menu-sublist-item-title"},rt(a.title),9,pa)]))),128))])]))),128))])],512),[[Lr,i.isMenuVisible||!i.isMinimized]])])}const ys=jt(aa,[["render",ha],["__scopeId","data-v-2ae18a9a"]]),ga={class:"container"},ma={components:{PatternCardViewer:vs,PatternMenu:ys},data(){return{selectedSubItem:null}},methods:{handleSubItemSelected(e){this.selectedSubItem=e}}},ba=an({...ma,__name:"App",setup(e){return(t,n)=>(X(),ee("main",ga,[k(ys,{onSubitemSelected:t.handleSubItemSelected},null,8,["onSubitemSelected"]),k(vs,{"selected-sub-item":t.selectedSubItem},null,8,["selected-sub-item"])]))}}),va=jt(ba,[["__scopeId","data-v-97ee43d9"]]);Ll(va).mount("#app");Kn.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}});
