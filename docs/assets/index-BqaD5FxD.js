(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const V={},tt=[],Ce=()=>{},vi=()=>!1,Qt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),zn=e=>e.startsWith("onUpdate:"),te=Object.assign,Gn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yi=Object.prototype.hasOwnProperty,F=(e,t)=>yi.call(e,t),T=Array.isArray,nt=e=>en(e)==="[object Map]",ns=e=>en(e)==="[object Set]",A=e=>typeof e=="function",z=e=>typeof e=="string",Be=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",rs=e=>(q(e)||A(e))&&A(e.then)&&A(e.catch),ss=Object.prototype.toString,en=e=>ss.call(e),_i=e=>en(e).slice(8,-1),is=e=>en(e)==="[object Object]",Jn=e=>z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mt=Kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Si=/-(\w)/g,Ne=tn(e=>e.replace(Si,(t,n)=>n?n.toUpperCase():"")),wi=/\B([A-Z])/g,Ze=tn(e=>e.replace(wi,"-$1").toLowerCase()),os=tn(e=>e.charAt(0).toUpperCase()+e.slice(1)),hn=tn(e=>e?`on${os(e)}`:""),De=(e,t)=>!Object.is(e,t),gn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ls=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},xi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let vr;const nn=()=>vr||(vr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yn(e){if(T(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=z(r)?Ii(r):Yn(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(z(e)||q(e))return e}const Oi=/;(?![^(]*\))/g,Ci=/:([^]+)/,Pi=/\/\*[^]*?\*\//g;function Ii(e){const t={};return e.replace(Pi,"").split(Oi).forEach(n=>{if(n){const r=n.split(Ci);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function kn(e){let t="";if(z(e))t=e;else if(T(e))for(let n=0;n<e.length;n++){const r=kn(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Mi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ti=Kn(Mi);function cs(e){return!!e||e===""}const as=e=>!!(e&&e.__v_isRef===!0),rt=e=>z(e)?e:e==null?"":T(e)||q(e)&&(e.toString===ss||!A(e.toString))?as(e)?rt(e.value):JSON.stringify(e,us,2):String(e),us=(e,t)=>as(t)?us(e,t.value):nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[mn(r,i)+" =>"]=s,n),{})}:ns(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>mn(n))}:Be(t)?mn(t):q(t)&&!T(t)&&!is(t)?String(t):t,mn=(e,t="")=>{var n;return Be(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class Ai{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ei(){return ue}let B;const bn=new WeakSet;class fs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bn.has(this)&&(bn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ps(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yr(this),hs(this);const t=B,n=ge;B=this,ge=!0;try{return this.fn()}finally{gs(this),B=t,ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Qn(t);this.deps=this.depsTail=void 0,yr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){En(this)&&this.run()}get dirty(){return En(this)}}let ds=0,bt,vt;function ps(e,t=!1){if(e.flags|=8,t){e.next=vt,vt=e;return}e.next=bt,bt=e}function Xn(){ds++}function Zn(){if(--ds>0)return;if(vt){let t=vt;for(vt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;bt;){let t=bt;for(bt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function hs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function gs(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Qn(r),ji(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function En(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ms(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ms(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===wt))return;e.globalVersion=wt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!En(e)){e.flags&=-3;return}const n=B,r=ge;B=e,ge=!0;try{hs(e);const s=e.fn(e._value);(t.version===0||De(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{B=n,ge=r,gs(e),e.flags&=-3}}function Qn(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Qn(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ji(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ge=!0;const bs=[];function Ve(){bs.push(ge),ge=!1}function Ue(){const e=bs.pop();ge=e===void 0?!0:e}function yr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=B;B=void 0;try{t()}finally{B=n}}}let wt=0;class $i{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class er{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!B||!ge||B===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==B)n=this.activeLink=new $i(B,this),B.deps?(n.prevDep=B.depsTail,B.depsTail.nextDep=n,B.depsTail=n):B.deps=B.depsTail=n,vs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=B.depsTail,n.nextDep=void 0,B.depsTail.nextDep=n,B.depsTail=n,B.deps===n&&(B.deps=r)}return n}trigger(t){this.version++,wt++,this.notify(t)}notify(t){Xn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zn()}}}function vs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)vs(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const jn=new WeakMap,Ye=Symbol(""),$n=Symbol(""),xt=Symbol("");function X(e,t,n){if(ge&&B){let r=jn.get(e);r||jn.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new er),s.map=r,s.key=n),s.track()}}function Te(e,t,n,r,s,i){const o=jn.get(e);if(!o){wt++;return}const l=a=>{a&&a.trigger()};if(Xn(),t==="clear")o.forEach(l);else{const a=T(e),d=a&&Jn(n);if(a&&n==="length"){const f=Number(r);o.forEach((h,_)=>{(_==="length"||_===xt||!Be(_)&&_>=f)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),d&&l(o.get(xt)),t){case"add":a?d&&l(o.get("length")):(l(o.get(Ye)),nt(e)&&l(o.get($n)));break;case"delete":a||(l(o.get(Ye)),nt(e)&&l(o.get($n)));break;case"set":nt(e)&&l(o.get(Ye));break}}Zn()}function Qe(e){const t=R(e);return t===e?t:(X(t,"iterate",xt),he(e)?t:t.map(Z))}function rn(e){return X(e=R(e),"iterate",xt),e}const Ri={__proto__:null,[Symbol.iterator](){return vn(this,Symbol.iterator,Z)},concat(...e){return Qe(this).concat(...e.map(t=>T(t)?Qe(t):t))},entries(){return vn(this,"entries",e=>(e[1]=Z(e[1]),e))},every(e,t){return Ie(this,"every",e,t,void 0,arguments)},filter(e,t){return Ie(this,"filter",e,t,n=>n.map(Z),arguments)},find(e,t){return Ie(this,"find",e,t,Z,arguments)},findIndex(e,t){return Ie(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ie(this,"findLast",e,t,Z,arguments)},findLastIndex(e,t){return Ie(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ie(this,"forEach",e,t,void 0,arguments)},includes(...e){return yn(this,"includes",e)},indexOf(...e){return yn(this,"indexOf",e)},join(e){return Qe(this).join(e)},lastIndexOf(...e){return yn(this,"lastIndexOf",e)},map(e,t){return Ie(this,"map",e,t,void 0,arguments)},pop(){return dt(this,"pop")},push(...e){return dt(this,"push",e)},reduce(e,...t){return _r(this,"reduce",e,t)},reduceRight(e,...t){return _r(this,"reduceRight",e,t)},shift(){return dt(this,"shift")},some(e,t){return Ie(this,"some",e,t,void 0,arguments)},splice(...e){return dt(this,"splice",e)},toReversed(){return Qe(this).toReversed()},toSorted(e){return Qe(this).toSorted(e)},toSpliced(...e){return Qe(this).toSpliced(...e)},unshift(...e){return dt(this,"unshift",e)},values(){return vn(this,"values",Z)}};function vn(e,t,n){const r=rn(e),s=r[t]();return r!==e&&!he(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Fi=Array.prototype;function Ie(e,t,n,r,s,i){const o=rn(e),l=o!==e&&!he(e),a=o[t];if(a!==Fi[t]){const h=a.apply(e,i);return l?Z(h):h}let d=n;o!==e&&(l?d=function(h,_){return n.call(this,Z(h),_,e)}:n.length>2&&(d=function(h,_){return n.call(this,h,_,e)}));const f=a.call(o,d,r);return l&&s?s(f):f}function _r(e,t,n,r){const s=rn(e);let i=n;return s!==e&&(he(e)?n.length>3&&(i=function(o,l,a){return n.call(this,o,l,a,e)}):i=function(o,l,a){return n.call(this,o,Z(l),a,e)}),s[t](i,...r)}function yn(e,t,n){const r=R(e);X(r,"iterate",xt);const s=r[t](...n);return(s===-1||s===!1)&&sr(n[0])?(n[0]=R(n[0]),r[t](...n)):s}function dt(e,t,n=[]){Ve(),Xn();const r=R(e)[t].apply(e,n);return Zn(),Ue(),r}const Di=Kn("__proto__,__v_isRef,__isVue"),ys=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Be));function Hi(e){Be(e)||(e=String(e));const t=R(this);return X(t,"has",e),t.hasOwnProperty(e)}class _s{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Gi:Os:i?xs:ws).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=T(t);if(!s){let a;if(o&&(a=Ri[n]))return a;if(n==="hasOwnProperty")return Hi}const l=Reflect.get(t,n,ee(t)?t:r);return(Be(n)?ys.has(n):Di(n))||(s||X(t,"get",n),i)?l:ee(l)?o&&Jn(n)?l:l.value:q(l)?s?Cs(l):nr(l):l}}class Ss extends _s{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const a=ke(i);if(!he(r)&&!ke(r)&&(i=R(i),r=R(r)),!T(t)&&ee(i)&&!ee(r))return a?!1:(i.value=r,!0)}const o=T(t)&&Jn(n)?Number(n)<t.length:F(t,n),l=Reflect.set(t,n,r,ee(t)?t:s);return t===R(s)&&(o?De(r,i)&&Te(t,"set",n,r):Te(t,"add",n,r)),l}deleteProperty(t,n){const r=F(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Te(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Be(n)||!ys.has(n))&&X(t,"has",n),r}ownKeys(t){return X(t,"iterate",T(t)?"length":Ye),Reflect.ownKeys(t)}}class Li extends _s{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ni=new Ss,Bi=new Li,Vi=new Ss(!0);const Rn=e=>e,Ht=e=>Reflect.getPrototypeOf(e);function Ui(e,t,n){return function(...r){const s=this.__v_raw,i=R(s),o=nt(i),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,d=s[e](...r),f=n?Rn:t?Fn:Z;return!t&&X(i,"iterate",a?$n:Ye),{next(){const{value:h,done:_}=d.next();return _?{value:h,done:_}:{value:l?[f(h[0]),f(h[1])]:f(h),done:_}},[Symbol.iterator](){return this}}}}function Lt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Wi(e,t){const n={get(s){const i=this.__v_raw,o=R(i),l=R(s);e||(De(s,l)&&X(o,"get",s),X(o,"get",l));const{has:a}=Ht(o),d=t?Rn:e?Fn:Z;if(a.call(o,s))return d(i.get(s));if(a.call(o,l))return d(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&X(R(s),"iterate",Ye),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=R(i),l=R(s);return e||(De(s,l)&&X(o,"has",s),X(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,a=R(l),d=t?Rn:e?Fn:Z;return!e&&X(a,"iterate",Ye),l.forEach((f,h)=>s.call(i,d(f),d(h),o))}};return te(n,e?{add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear")}:{add(s){!t&&!he(s)&&!ke(s)&&(s=R(s));const i=R(this);return Ht(i).has.call(i,s)||(i.add(s),Te(i,"add",s,s)),this},set(s,i){!t&&!he(i)&&!ke(i)&&(i=R(i));const o=R(this),{has:l,get:a}=Ht(o);let d=l.call(o,s);d||(s=R(s),d=l.call(o,s));const f=a.call(o,s);return o.set(s,i),d?De(i,f)&&Te(o,"set",s,i):Te(o,"add",s,i),this},delete(s){const i=R(this),{has:o,get:l}=Ht(i);let a=o.call(i,s);a||(s=R(s),a=o.call(i,s)),l&&l.call(i,s);const d=i.delete(s);return a&&Te(i,"delete",s,void 0),d},clear(){const s=R(this),i=s.size!==0,o=s.clear();return i&&Te(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ui(s,e,t)}),n}function tr(e,t){const n=Wi(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(F(n,s)&&s in r?n:r,s,i)}const qi={get:tr(!1,!1)},Ki={get:tr(!1,!0)},zi={get:tr(!0,!1)};const ws=new WeakMap,xs=new WeakMap,Os=new WeakMap,Gi=new WeakMap;function Ji(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yi(e){return e.__v_skip||!Object.isExtensible(e)?0:Ji(_i(e))}function nr(e){return ke(e)?e:rr(e,!1,Ni,qi,ws)}function ki(e){return rr(e,!1,Vi,Ki,xs)}function Cs(e){return rr(e,!0,Bi,zi,Os)}function rr(e,t,n,r,s){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Yi(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return s.set(e,l),l}function st(e){return ke(e)?st(e.__v_raw):!!(e&&e.__v_isReactive)}function ke(e){return!!(e&&e.__v_isReadonly)}function he(e){return!!(e&&e.__v_isShallow)}function sr(e){return e?!!e.__v_raw:!1}function R(e){const t=e&&e.__v_raw;return t?R(t):e}function Xi(e){return!F(e,"__v_skip")&&Object.isExtensible(e)&&ls(e,"__v_skip",!0),e}const Z=e=>q(e)?nr(e):e,Fn=e=>q(e)?Cs(e):e;function ee(e){return e?e.__v_isRef===!0:!1}function Ps(e){return Is(e,!1)}function sn(e){return Is(e,!0)}function Is(e,t){return ee(e)?e:new Zi(e,t)}class Zi{constructor(t,n){this.dep=new er,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:R(t),this._value=n?t:Z(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||he(t)||ke(t);t=r?t:R(t),De(t,n)&&(this._rawValue=t,this._value=r?t:Z(t),this.dep.trigger())}}function Ms(e){return ee(e)?e.value:e}const Qi={get:(e,t,n)=>t==="__v_raw"?e:Ms(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ee(s)&&!ee(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Ts(e){return st(e)?e:new Proxy(e,Qi)}class eo{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new er(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&B!==this)return ps(this,!0),!0}get value(){const t=this.dep.track();return ms(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function to(e,t,n=!1){let r,s;return A(e)?r=e:(r=e.get,s=e.set),new eo(r,s,n)}const Nt={},qt=new WeakMap;let Je;function no(e,t=!1,n=Je){if(n){let r=qt.get(n);r||qt.set(n,r=[]),r.push(e)}}function ro(e,t,n=V){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:a}=n,d=I=>s?I:he(I)||s===!1||s===0?Fe(I,1):Fe(I);let f,h,_,O,j=!1,E=!1;if(ee(e)?(h=()=>e.value,j=he(e)):st(e)?(h=()=>d(e),j=!0):T(e)?(E=!0,j=e.some(I=>st(I)||he(I)),h=()=>e.map(I=>{if(ee(I))return I.value;if(st(I))return d(I);if(A(I))return a?a(I,2):I()})):A(e)?t?h=a?()=>a(e,2):e:h=()=>{if(_){Ve();try{_()}finally{Ue()}}const I=Je;Je=f;try{return a?a(e,3,[O]):e(O)}finally{Je=I}}:h=Ce,t&&s){const I=h,J=s===!0?1/0:s;h=()=>Fe(I(),J)}const G=Ei(),H=()=>{f.stop(),G&&G.active&&Gn(G.effects,f)};if(i&&t){const I=t;t=(...J)=>{I(...J),H()}}let U=E?new Array(e.length).fill(Nt):Nt;const W=I=>{if(!(!(f.flags&1)||!f.dirty&&!I))if(t){const J=f.run();if(s||j||(E?J.some((Ee,me)=>De(Ee,U[me])):De(J,U))){_&&_();const Ee=Je;Je=f;try{const me=[J,U===Nt?void 0:E&&U[0]===Nt?[]:U,O];a?a(t,3,me):t(...me),U=J}finally{Je=Ee}}}else f.run()};return l&&l(W),f=new fs(h),f.scheduler=o?()=>o(W,!1):W,O=I=>no(I,!1,f),_=f.onStop=()=>{const I=qt.get(f);if(I){if(a)a(I,4);else for(const J of I)J();qt.delete(f)}},t?r?W(!0):U=f.run():o?o(W.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function Fe(e,t=1/0,n){if(t<=0||!q(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ee(e))Fe(e.value,t,n);else if(T(e))for(let r=0;r<e.length;r++)Fe(e[r],t,n);else if(ns(e)||nt(e))e.forEach(r=>{Fe(r,t,n)});else if(is(e)){for(const r in e)Fe(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Fe(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mt(e,t,n,r){try{return r?e(...r):e()}catch(s){on(s,t,n)}}function Pe(e,t,n,r){if(A(e)){const s=Mt(e,t,n,r);return s&&rs(s)&&s.catch(i=>{on(i,t,n)}),s}if(T(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Pe(e[i],t,n,r));return s}}function on(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||V;if(t){let l=t.parent;const a=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,a,d)===!1)return}l=l.parent}if(i){Ve(),Mt(i,null,10,[e,a,d]),Ue();return}}so(e,n,s,r,o)}function so(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const se=[];let we=-1;const it=[];let $e=null,et=0;const As=Promise.resolve();let Kt=null;function ir(e){const t=Kt||As;return e?t.then(this?e.bind(this):e):t}function io(e){let t=we+1,n=se.length;for(;t<n;){const r=t+n>>>1,s=se[r],i=Ot(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function or(e){if(!(e.flags&1)){const t=Ot(e),n=se[se.length-1];!n||!(e.flags&2)&&t>=Ot(n)?se.push(e):se.splice(io(t),0,e),e.flags|=1,Es()}}function Es(){Kt||(Kt=As.then($s))}function oo(e){T(e)?it.push(...e):$e&&e.id===-1?$e.splice(et+1,0,e):e.flags&1||(it.push(e),e.flags|=1),Es()}function Sr(e,t,n=we+1){for(;n<se.length;n++){const r=se[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;se.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function js(e){if(it.length){const t=[...new Set(it)].sort((n,r)=>Ot(n)-Ot(r));if(it.length=0,$e){$e.push(...t);return}for($e=t,et=0;et<$e.length;et++){const n=$e[et];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$e=null,et=0}}const Ot=e=>e.id==null?e.flags&2?-1:1/0:e.id;function $s(e){try{for(we=0;we<se.length;we++){const t=se[we];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;we<se.length;we++){const t=se[we];t&&(t.flags&=-2)}we=-1,se.length=0,js(),Kt=null,(se.length||it.length)&&$s()}}let Oe=null,Rs=null;function zt(e){const t=Oe;return Oe=e,Rs=e&&e.type.__scopeId||null,t}function lo(e,t=Oe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Ar(-1);const i=zt(t);let o;try{o=e(...s)}finally{zt(i),r._d&&Ar(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ze(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let a=l.dir[r];a&&(Ve(),Pe(a,n,8,[e.el,l,e,t]),Ue())}}const co=Symbol("_vte"),ao=e=>e.__isTeleport;function lr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,lr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ln(e,t){return A(e)?te({name:e.name},t,{setup:e}):e}function Fs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Gt(e,t,n,r,s=!1){if(T(e)){e.forEach((j,E)=>Gt(j,t&&(T(t)?t[E]:t),n,r,s));return}if(yt(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gt(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?dr(r.component):r.el,o=s?null:i,{i:l,r:a}=e,d=t&&t.r,f=l.refs===V?l.refs={}:l.refs,h=l.setupState,_=R(h),O=h===V?()=>!1:j=>F(_,j);if(d!=null&&d!==a&&(z(d)?(f[d]=null,O(d)&&(h[d]=null)):ee(d)&&(d.value=null)),A(a))Mt(a,l,12,[o,f]);else{const j=z(a),E=ee(a);if(j||E){const G=()=>{if(e.f){const H=j?O(a)?h[a]:f[a]:a.value;s?T(H)&&Gn(H,i):T(H)?H.includes(i)||H.push(i):j?(f[a]=[i],O(a)&&(h[a]=f[a])):(a.value=[i],e.k&&(f[e.k]=a.value))}else j?(f[a]=o,O(a)&&(h[a]=o)):E&&(a.value=o,e.k&&(f[e.k]=o))};o?(G.id=-1,ae(G,n)):G()}}}nn().requestIdleCallback;nn().cancelIdleCallback;const yt=e=>!!e.type.__asyncLoader,Ds=e=>e.type.__isKeepAlive;function uo(e,t){Hs(e,"a",t)}function fo(e,t){Hs(e,"da",t)}function Hs(e,t,n=ie){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(cn(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Ds(s.parent.vnode)&&po(r,t,n,s),s=s.parent}}function po(e,t,n,r){const s=cn(t,e,r,!0);ar(()=>{Gn(r[t],s)},n)}function cn(e,t,n=ie,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Ve();const l=Tt(n),a=Pe(t,n,e,o);return l(),Ue(),a});return r?s.unshift(i):s.push(i),i}}const Ae=e=>(t,n=ie)=>{(!Pt||e==="sp")&&cn(e,(...r)=>t(...r),n)},ho=Ae("bm"),cr=Ae("m"),go=Ae("bu"),mo=Ae("u"),bo=Ae("bum"),ar=Ae("um"),vo=Ae("sp"),yo=Ae("rtg"),_o=Ae("rtc");function So(e,t=ie){cn("ec",e,t)}const wo=Symbol.for("v-ndc");function Dn(e,t,n,r){let s;const i=n,o=T(e);if(o||z(e)){const l=o&&st(e);let a=!1;l&&(a=!he(e),e=rn(e)),s=new Array(e.length);for(let d=0,f=e.length;d<f;d++)s[d]=t(a?Z(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(q(e))if(e[Symbol.iterator])s=Array.from(e,(l,a)=>t(l,a,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const f=l[a];s[a]=t(e[f],f,a,i)}}else s=[];return s}const Hn=e=>e?si(e)?dr(e):Hn(e.parent):null,_t=te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hn(e.parent),$root:e=>Hn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ns(e),$forceUpdate:e=>e.f||(e.f=()=>{or(e.update)}),$nextTick:e=>e.n||(e.n=ir.bind(e.proxy)),$watch:e=>qo.bind(e)}),_n=(e,t)=>e!==V&&!e.__isScriptSetup&&F(e,t),xo={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:a}=e;let d;if(t[0]!=="$"){const O=o[t];if(O!==void 0)switch(O){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(_n(r,t))return o[t]=1,r[t];if(s!==V&&F(s,t))return o[t]=2,s[t];if((d=e.propsOptions[0])&&F(d,t))return o[t]=3,i[t];if(n!==V&&F(n,t))return o[t]=4,n[t];Ln&&(o[t]=0)}}const f=_t[t];let h,_;if(f)return t==="$attrs"&&X(e.attrs,"get",""),f(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==V&&F(n,t))return o[t]=4,n[t];if(_=a.config.globalProperties,F(_,t))return _[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return _n(s,t)?(s[t]=n,!0):r!==V&&F(r,t)?(r[t]=n,!0):F(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||e!==V&&F(e,o)||_n(t,o)||(l=i[0])&&F(l,o)||F(r,o)||F(_t,o)||F(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:F(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function wr(e){return T(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ln=!0;function Oo(e){const t=Ns(e),n=e.proxy,r=e.ctx;Ln=!1,t.beforeCreate&&xr(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:l,provide:a,inject:d,created:f,beforeMount:h,mounted:_,beforeUpdate:O,updated:j,activated:E,deactivated:G,beforeDestroy:H,beforeUnmount:U,destroyed:W,unmounted:I,render:J,renderTracked:Ee,renderTriggered:me,errorCaptured:je,serverPrefetch:jt,expose:We,inheritAttrs:ct,components:$t,directives:Rt,filters:dn}=t;if(d&&Co(d,r,null),o)for(const K in o){const L=o[K];A(L)&&(r[K]=L.bind(n))}if(s){const K=s.call(n,n);q(K)&&(e.data=nr(K))}if(Ln=!0,i)for(const K in i){const L=i[K],qe=A(L)?L.bind(n,n):A(L.get)?L.get.bind(n,n):Ce,Ft=!A(L)&&A(L.set)?L.set.bind(n):Ce,Ke=Xt({get:qe,set:Ft});Object.defineProperty(r,K,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:be=>Ke.value=be})}if(l)for(const K in l)Ls(l[K],r,n,K);if(a){const K=A(a)?a.call(n):a;Reflect.ownKeys(K).forEach(L=>{Eo(L,K[L])})}f&&xr(f,e,"c");function ne(K,L){T(L)?L.forEach(qe=>K(qe.bind(n))):L&&K(L.bind(n))}if(ne(ho,h),ne(cr,_),ne(go,O),ne(mo,j),ne(uo,E),ne(fo,G),ne(So,je),ne(_o,Ee),ne(yo,me),ne(bo,U),ne(ar,I),ne(vo,jt),T(We))if(We.length){const K=e.exposed||(e.exposed={});We.forEach(L=>{Object.defineProperty(K,L,{get:()=>n[L],set:qe=>n[L]=qe})})}else e.exposed||(e.exposed={});J&&e.render===Ce&&(e.render=J),ct!=null&&(e.inheritAttrs=ct),$t&&(e.components=$t),Rt&&(e.directives=Rt),jt&&Fs(e)}function Co(e,t,n=Ce){T(e)&&(e=Nn(e));for(const r in e){const s=e[r];let i;q(s)?"default"in s?i=Vt(s.from||r,s.default,!0):i=Vt(s.from||r):i=Vt(s),ee(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function xr(e,t,n){Pe(T(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ls(e,t,n,r){let s=r.includes(".")?Qs(n,r):()=>n[r];if(z(e)){const i=t[e];A(i)&&He(s,i)}else if(A(e))He(s,e.bind(n));else if(q(e))if(T(e))e.forEach(i=>Ls(i,t,n,r));else{const i=A(e.handler)?e.handler.bind(n):t[e.handler];A(i)&&He(s,i,e)}}function Ns(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let a;return l?a=l:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(d=>Jt(a,d,o,!0)),Jt(a,t,o)),q(t)&&i.set(t,a),a}function Jt(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Jt(e,i,n,!0),s&&s.forEach(o=>Jt(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=Po[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Po={data:Or,props:Cr,emits:Cr,methods:ht,computed:ht,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:ht,directives:ht,watch:Mo,provide:Or,inject:Io};function Or(e,t){return t?e?function(){return te(A(e)?e.call(this,this):e,A(t)?t.call(this,this):t)}:t:e}function Io(e,t){return ht(Nn(e),Nn(t))}function Nn(e){if(T(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function re(e,t){return e?[...new Set([].concat(e,t))]:t}function ht(e,t){return e?te(Object.create(null),e,t):t}function Cr(e,t){return e?T(e)&&T(t)?[...new Set([...e,...t])]:te(Object.create(null),wr(e),wr(t??{})):t}function Mo(e,t){if(!e)return t;if(!t)return e;const n=te(Object.create(null),e);for(const r in t)n[r]=re(e[r],t[r]);return n}function Bs(){return{app:null,config:{isNativeTag:vi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let To=0;function Ao(e,t){return function(r,s=null){A(r)||(r=te({},r)),s!=null&&!q(s)&&(s=null);const i=Bs(),o=new WeakSet,l=[];let a=!1;const d=i.app={_uid:To++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:dl,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&A(f.install)?(o.add(f),f.install(d,...h)):A(f)&&(o.add(f),f(d,...h))),d},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),d},component(f,h){return h?(i.components[f]=h,d):i.components[f]},directive(f,h){return h?(i.directives[f]=h,d):i.directives[f]},mount(f,h,_){if(!a){const O=d._ceVNode||Y(r,s);return O.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),e(O,f,_),a=!0,d._container=f,f.__vue_app__=d,dr(O.component)}},onUnmount(f){l.push(f)},unmount(){a&&(Pe(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,h){return i.provides[f]=h,d},runWithContext(f){const h=ot;ot=d;try{return f()}finally{ot=h}}};return d}}let ot=null;function Eo(e,t){if(ie){let n=ie.provides;const r=ie.parent&&ie.parent.provides;r===n&&(n=ie.provides=Object.create(r)),n[e]=t}}function Vt(e,t,n=!1){const r=ie||Oe;if(r||ot){const s=ot?ot._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&A(t)?t.call(r&&r.proxy):t}}const Vs={},Us=()=>Object.create(Vs),Ws=e=>Object.getPrototypeOf(e)===Vs;function jo(e,t,n,r=!1){const s={},i=Us();e.propsDefaults=Object.create(null),qs(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:ki(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function $o(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,l=R(s),[a]=e.propsOptions;let d=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let _=f[h];if(an(e.emitsOptions,_))continue;const O=t[_];if(a)if(F(i,_))O!==i[_]&&(i[_]=O,d=!0);else{const j=Ne(_);s[j]=Bn(a,l,j,O,e,!1)}else O!==i[_]&&(i[_]=O,d=!0)}}}else{qs(e,t,s,i)&&(d=!0);let f;for(const h in l)(!t||!F(t,h)&&((f=Ze(h))===h||!F(t,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Bn(a,l,h,void 0,e,!0)):delete s[h]);if(i!==l)for(const h in i)(!t||!F(t,h))&&(delete i[h],d=!0)}d&&Te(e.attrs,"set","")}function qs(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(mt(a))continue;const d=t[a];let f;s&&F(s,f=Ne(a))?!i||!i.includes(f)?n[f]=d:(l||(l={}))[f]=d:an(e.emitsOptions,a)||(!(a in r)||d!==r[a])&&(r[a]=d,o=!0)}if(i){const a=R(n),d=l||V;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Bn(s,a,h,d[h],e,!F(d,h))}}return o}function Bn(e,t,n,r,s,i){const o=e[n];if(o!=null){const l=F(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&A(a)){const{propsDefaults:d}=s;if(n in d)r=d[n];else{const f=Tt(s);r=d[n]=a.call(null,t),f()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Ze(n))&&(r=!0))}return r}const Ro=new WeakMap;function Ks(e,t,n=!1){const r=n?Ro:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},l=[];let a=!1;if(!A(e)){const f=h=>{a=!0;const[_,O]=Ks(h,t,!0);te(o,_),O&&l.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!a)return q(e)&&r.set(e,tt),tt;if(T(i))for(let f=0;f<i.length;f++){const h=Ne(i[f]);Pr(h)&&(o[h]=V)}else if(i)for(const f in i){const h=Ne(f);if(Pr(h)){const _=i[f],O=o[h]=T(_)||A(_)?{type:_}:te({},_),j=O.type;let E=!1,G=!0;if(T(j))for(let H=0;H<j.length;++H){const U=j[H],W=A(U)&&U.name;if(W==="Boolean"){E=!0;break}else W==="String"&&(G=!1)}else E=A(j)&&j.name==="Boolean";O[0]=E,O[1]=G,(E||F(O,"default"))&&l.push(h)}}const d=[o,l];return q(e)&&r.set(e,d),d}function Pr(e){return e[0]!=="$"&&!mt(e)}const zs=e=>e[0]==="_"||e==="$stable",ur=e=>T(e)?e.map(xe):[xe(e)],Fo=(e,t,n)=>{if(t._n)return t;const r=lo((...s)=>ur(t(...s)),n);return r._c=!1,r},Gs=(e,t,n)=>{const r=e._ctx;for(const s in e){if(zs(s))continue;const i=e[s];if(A(i))t[s]=Fo(s,i,r);else if(i!=null){const o=ur(i);t[s]=()=>o}}},Js=(e,t)=>{const n=ur(t);e.slots.default=()=>n},Ys=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},Do=(e,t,n)=>{const r=e.slots=Us();if(e.vnode.shapeFlag&32){const s=t._;s?(Ys(r,t,n),n&&ls(r,"_",s,!0)):Gs(t,r)}else t&&Js(e,t)},Ho=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=V;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Ys(s,t,n):(i=!t.$stable,Gs(t,s)),o=t}else t&&(Js(e,t),o={default:1});if(i)for(const l in s)!zs(l)&&o[l]==null&&delete s[l]},ae=Xo;function Lo(e){return No(e)}function No(e,t){const n=nn();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:a,setText:d,setElementText:f,parentNode:h,nextSibling:_,setScopeId:O=Ce,insertStaticContent:j}=e,E=(c,u,p,b=null,g=null,m=null,w=void 0,S=null,y=!!u.dynamicChildren)=>{if(c===u)return;c&&!pt(c,u)&&(b=Dt(c),be(c,g,m,!0),c=null),u.patchFlag===-2&&(y=!1,u.dynamicChildren=null);const{type:v,ref:P,shapeFlag:x}=u;switch(v){case un:G(c,u,p,b);break;case Xe:H(c,u,p,b);break;case wn:c==null&&U(u,p,b,w);break;case pe:$t(c,u,p,b,g,m,w,S,y);break;default:x&1?J(c,u,p,b,g,m,w,S,y):x&6?Rt(c,u,p,b,g,m,w,S,y):(x&64||x&128)&&v.process(c,u,p,b,g,m,w,S,y,ut)}P!=null&&g&&Gt(P,c&&c.ref,m,u||c,!u)},G=(c,u,p,b)=>{if(c==null)r(u.el=l(u.children),p,b);else{const g=u.el=c.el;u.children!==c.children&&d(g,u.children)}},H=(c,u,p,b)=>{c==null?r(u.el=a(u.children||""),p,b):u.el=c.el},U=(c,u,p,b)=>{[c.el,c.anchor]=j(c.children,u,p,b,c.el,c.anchor)},W=({el:c,anchor:u},p,b)=>{let g;for(;c&&c!==u;)g=_(c),r(c,p,b),c=g;r(u,p,b)},I=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=_(c),s(c),c=p;s(u)},J=(c,u,p,b,g,m,w,S,y)=>{u.type==="svg"?w="svg":u.type==="math"&&(w="mathml"),c==null?Ee(u,p,b,g,m,w,S,y):jt(c,u,g,m,w,S,y)},Ee=(c,u,p,b,g,m,w,S)=>{let y,v;const{props:P,shapeFlag:x,transition:C,dirs:M}=c;if(y=c.el=o(c.type,m,P&&P.is,P),x&8?f(y,c.children):x&16&&je(c.children,y,null,b,g,Sn(c,m),w,S),M&&ze(c,null,b,"created"),me(y,c,c.scopeId,w,b),P){for(const N in P)N!=="value"&&!mt(N)&&i(y,N,null,P[N],m,b);"value"in P&&i(y,"value",null,P.value,m),(v=P.onVnodeBeforeMount)&&Se(v,b,c)}M&&ze(c,null,b,"beforeMount");const $=Bo(g,C);$&&C.beforeEnter(y),r(y,u,p),((v=P&&P.onVnodeMounted)||$||M)&&ae(()=>{v&&Se(v,b,c),$&&C.enter(y),M&&ze(c,null,b,"mounted")},g)},me=(c,u,p,b,g)=>{if(p&&O(c,p),b)for(let m=0;m<b.length;m++)O(c,b[m]);if(g){let m=g.subTree;if(u===m||ti(m.type)&&(m.ssContent===u||m.ssFallback===u)){const w=g.vnode;me(c,w,w.scopeId,w.slotScopeIds,g.parent)}}},je=(c,u,p,b,g,m,w,S,y=0)=>{for(let v=y;v<c.length;v++){const P=c[v]=S?Re(c[v]):xe(c[v]);E(null,P,u,p,b,g,m,w,S)}},jt=(c,u,p,b,g,m,w)=>{const S=u.el=c.el;let{patchFlag:y,dynamicChildren:v,dirs:P}=u;y|=c.patchFlag&16;const x=c.props||V,C=u.props||V;let M;if(p&&Ge(p,!1),(M=C.onVnodeBeforeUpdate)&&Se(M,p,u,c),P&&ze(u,c,p,"beforeUpdate"),p&&Ge(p,!0),(x.innerHTML&&C.innerHTML==null||x.textContent&&C.textContent==null)&&f(S,""),v?We(c.dynamicChildren,v,S,p,b,Sn(u,g),m):w||L(c,u,S,null,p,b,Sn(u,g),m,!1),y>0){if(y&16)ct(S,x,C,p,g);else if(y&2&&x.class!==C.class&&i(S,"class",null,C.class,g),y&4&&i(S,"style",x.style,C.style,g),y&8){const $=u.dynamicProps;for(let N=0;N<$.length;N++){const D=$[N],le=x[D],oe=C[D];(oe!==le||D==="value")&&i(S,D,le,oe,g,p)}}y&1&&c.children!==u.children&&f(S,u.children)}else!w&&v==null&&ct(S,x,C,p,g);((M=C.onVnodeUpdated)||P)&&ae(()=>{M&&Se(M,p,u,c),P&&ze(u,c,p,"updated")},b)},We=(c,u,p,b,g,m,w)=>{for(let S=0;S<u.length;S++){const y=c[S],v=u[S],P=y.el&&(y.type===pe||!pt(y,v)||y.shapeFlag&70)?h(y.el):p;E(y,v,P,null,b,g,m,w,!0)}},ct=(c,u,p,b,g)=>{if(u!==p){if(u!==V)for(const m in u)!mt(m)&&!(m in p)&&i(c,m,u[m],null,g,b);for(const m in p){if(mt(m))continue;const w=p[m],S=u[m];w!==S&&m!=="value"&&i(c,m,S,w,g,b)}"value"in p&&i(c,"value",u.value,p.value,g)}},$t=(c,u,p,b,g,m,w,S,y)=>{const v=u.el=c?c.el:l(""),P=u.anchor=c?c.anchor:l("");let{patchFlag:x,dynamicChildren:C,slotScopeIds:M}=u;M&&(S=S?S.concat(M):M),c==null?(r(v,p,b),r(P,p,b),je(u.children||[],p,P,g,m,w,S,y)):x>0&&x&64&&C&&c.dynamicChildren?(We(c.dynamicChildren,C,p,g,m,w,S),(u.key!=null||g&&u===g.subTree)&&ks(c,u,!0)):L(c,u,p,P,g,m,w,S,y)},Rt=(c,u,p,b,g,m,w,S,y)=>{u.slotScopeIds=S,c==null?u.shapeFlag&512?g.ctx.activate(u,p,b,w,y):dn(u,p,b,g,m,w,y):pr(c,u,y)},dn=(c,u,p,b,g,m,w)=>{const S=c.component=ol(c,b,g);if(Ds(c)&&(S.ctx.renderer=ut),ll(S,!1,w),S.asyncDep){if(g&&g.registerDep(S,ne,w),!c.el){const y=S.subTree=Y(Xe);H(null,y,u,p)}}else ne(S,c,u,p,g,m,w)},pr=(c,u,p)=>{const b=u.component=c.component;if(Yo(c,u,p))if(b.asyncDep&&!b.asyncResolved){K(b,u,p);return}else b.next=u,b.update();else u.el=c.el,b.vnode=u},ne=(c,u,p,b,g,m,w)=>{const S=()=>{if(c.isMounted){let{next:x,bu:C,u:M,parent:$,vnode:N}=c;{const ye=Xs(c);if(ye){x&&(x.el=N.el,K(c,x,w)),ye.asyncDep.then(()=>{c.isUnmounted||S()});return}}let D=x,le;Ge(c,!1),x?(x.el=N.el,K(c,x,w)):x=N,C&&gn(C),(le=x.props&&x.props.onVnodeBeforeUpdate)&&Se(le,$,x,N),Ge(c,!0);const oe=Mr(c),ve=c.subTree;c.subTree=oe,E(ve,oe,h(ve.el),Dt(ve),c,g,m),x.el=oe.el,D===null&&ko(c,oe.el),M&&ae(M,g),(le=x.props&&x.props.onVnodeUpdated)&&ae(()=>Se(le,$,x,N),g)}else{let x;const{el:C,props:M}=u,{bm:$,m:N,parent:D,root:le,type:oe}=c,ve=yt(u);Ge(c,!1),$&&gn($),!ve&&(x=M&&M.onVnodeBeforeMount)&&Se(x,D,u),Ge(c,!0);{le.ce&&le.ce._injectChildStyle(oe);const ye=c.subTree=Mr(c);E(null,ye,p,b,c,g,m),u.el=ye.el}if(N&&ae(N,g),!ve&&(x=M&&M.onVnodeMounted)){const ye=u;ae(()=>Se(x,D,ye),g)}(u.shapeFlag&256||D&&yt(D.vnode)&&D.vnode.shapeFlag&256)&&c.a&&ae(c.a,g),c.isMounted=!0,u=p=b=null}};c.scope.on();const y=c.effect=new fs(S);c.scope.off();const v=c.update=y.run.bind(y),P=c.job=y.runIfDirty.bind(y);P.i=c,P.id=c.uid,y.scheduler=()=>or(P),Ge(c,!0),v()},K=(c,u,p)=>{u.component=c;const b=c.vnode.props;c.vnode=u,c.next=null,$o(c,u.props,b,p),Ho(c,u.children,p),Ve(),Sr(c),Ue()},L=(c,u,p,b,g,m,w,S,y=!1)=>{const v=c&&c.children,P=c?c.shapeFlag:0,x=u.children,{patchFlag:C,shapeFlag:M}=u;if(C>0){if(C&128){Ft(v,x,p,b,g,m,w,S,y);return}else if(C&256){qe(v,x,p,b,g,m,w,S,y);return}}M&8?(P&16&&at(v,g,m),x!==v&&f(p,x)):P&16?M&16?Ft(v,x,p,b,g,m,w,S,y):at(v,g,m,!0):(P&8&&f(p,""),M&16&&je(x,p,b,g,m,w,S,y))},qe=(c,u,p,b,g,m,w,S,y)=>{c=c||tt,u=u||tt;const v=c.length,P=u.length,x=Math.min(v,P);let C;for(C=0;C<x;C++){const M=u[C]=y?Re(u[C]):xe(u[C]);E(c[C],M,p,null,g,m,w,S,y)}v>P?at(c,g,m,!0,!1,x):je(u,p,b,g,m,w,S,y,x)},Ft=(c,u,p,b,g,m,w,S,y)=>{let v=0;const P=u.length;let x=c.length-1,C=P-1;for(;v<=x&&v<=C;){const M=c[v],$=u[v]=y?Re(u[v]):xe(u[v]);if(pt(M,$))E(M,$,p,null,g,m,w,S,y);else break;v++}for(;v<=x&&v<=C;){const M=c[x],$=u[C]=y?Re(u[C]):xe(u[C]);if(pt(M,$))E(M,$,p,null,g,m,w,S,y);else break;x--,C--}if(v>x){if(v<=C){const M=C+1,$=M<P?u[M].el:b;for(;v<=C;)E(null,u[v]=y?Re(u[v]):xe(u[v]),p,$,g,m,w,S,y),v++}}else if(v>C)for(;v<=x;)be(c[v],g,m,!0),v++;else{const M=v,$=v,N=new Map;for(v=$;v<=C;v++){const ce=u[v]=y?Re(u[v]):xe(u[v]);ce.key!=null&&N.set(ce.key,v)}let D,le=0;const oe=C-$+1;let ve=!1,ye=0;const ft=new Array(oe);for(v=0;v<oe;v++)ft[v]=0;for(v=M;v<=x;v++){const ce=c[v];if(le>=oe){be(ce,g,m,!0);continue}let _e;if(ce.key!=null)_e=N.get(ce.key);else for(D=$;D<=C;D++)if(ft[D-$]===0&&pt(ce,u[D])){_e=D;break}_e===void 0?be(ce,g,m,!0):(ft[_e-$]=v+1,_e>=ye?ye=_e:ve=!0,E(ce,u[_e],p,null,g,m,w,S,y),le++)}const mr=ve?Vo(ft):tt;for(D=mr.length-1,v=oe-1;v>=0;v--){const ce=$+v,_e=u[ce],br=ce+1<P?u[ce+1].el:b;ft[v]===0?E(null,_e,p,br,g,m,w,S,y):ve&&(D<0||v!==mr[D]?Ke(_e,p,br,2):D--)}}},Ke=(c,u,p,b,g=null)=>{const{el:m,type:w,transition:S,children:y,shapeFlag:v}=c;if(v&6){Ke(c.component.subTree,u,p,b);return}if(v&128){c.suspense.move(u,p,b);return}if(v&64){w.move(c,u,p,ut);return}if(w===pe){r(m,u,p);for(let x=0;x<y.length;x++)Ke(y[x],u,p,b);r(c.anchor,u,p);return}if(w===wn){W(c,u,p);return}if(b!==2&&v&1&&S)if(b===0)S.beforeEnter(m),r(m,u,p),ae(()=>S.enter(m),g);else{const{leave:x,delayLeave:C,afterLeave:M}=S,$=()=>r(m,u,p),N=()=>{x(m,()=>{$(),M&&M()})};C?C(m,$,N):N()}else r(m,u,p)},be=(c,u,p,b=!1,g=!1)=>{const{type:m,props:w,ref:S,children:y,dynamicChildren:v,shapeFlag:P,patchFlag:x,dirs:C,cacheIndex:M}=c;if(x===-2&&(g=!1),S!=null&&Gt(S,null,p,c,!0),M!=null&&(u.renderCache[M]=void 0),P&256){u.ctx.deactivate(c);return}const $=P&1&&C,N=!yt(c);let D;if(N&&(D=w&&w.onVnodeBeforeUnmount)&&Se(D,u,c),P&6)bi(c.component,p,b);else{if(P&128){c.suspense.unmount(p,b);return}$&&ze(c,null,u,"beforeUnmount"),P&64?c.type.remove(c,u,p,ut,b):v&&!v.hasOnce&&(m!==pe||x>0&&x&64)?at(v,u,p,!1,!0):(m===pe&&x&384||!g&&P&16)&&at(y,u,p),b&&hr(c)}(N&&(D=w&&w.onVnodeUnmounted)||$)&&ae(()=>{D&&Se(D,u,c),$&&ze(c,null,u,"unmounted")},p)},hr=c=>{const{type:u,el:p,anchor:b,transition:g}=c;if(u===pe){mi(p,b);return}if(u===wn){I(c);return}const m=()=>{s(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:w,delayLeave:S}=g,y=()=>w(p,m);S?S(c.el,m,y):y()}else m()},mi=(c,u)=>{let p;for(;c!==u;)p=_(c),s(c),c=p;s(u)},bi=(c,u,p)=>{const{bum:b,scope:g,job:m,subTree:w,um:S,m:y,a:v}=c;Ir(y),Ir(v),b&&gn(b),g.stop(),m&&(m.flags|=8,be(w,c,u,p)),S&&ae(S,u),ae(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},at=(c,u,p,b=!1,g=!1,m=0)=>{for(let w=m;w<c.length;w++)be(c[w],u,p,b,g)},Dt=c=>{if(c.shapeFlag&6)return Dt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=_(c.anchor||c.el),p=u&&u[co];return p?_(p):u};let pn=!1;const gr=(c,u,p)=>{c==null?u._vnode&&be(u._vnode,null,null,!0):E(u._vnode||null,c,u,null,null,null,p),u._vnode=c,pn||(pn=!0,Sr(),js(),pn=!1)},ut={p:E,um:be,m:Ke,r:hr,mt:dn,mc:je,pc:L,pbc:We,n:Dt,o:e};return{render:gr,hydrate:void 0,createApp:Ao(gr)}}function Sn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ge({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Bo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ks(e,t,n=!1){const r=e.children,s=t.children;if(T(r)&&T(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Re(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&ks(o,l)),l.type===un&&(l.el=o.el)}}function Vo(e){const t=e.slice(),n=[0];let r,s,i,o,l;const a=e.length;for(r=0;r<a;r++){const d=e[r];if(d!==0){if(s=n[n.length-1],e[s]<d){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<d?i=l+1:o=l;d<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Xs(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Xs(t)}function Ir(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Uo=Symbol.for("v-scx"),Wo=()=>Vt(Uo);function He(e,t,n){return Zs(e,t,n)}function Zs(e,t,n=V){const{immediate:r,deep:s,flush:i,once:o}=n,l=te({},n),a=t&&r||!t&&i!=="post";let d;if(Pt){if(i==="sync"){const O=Wo();d=O.__watcherHandles||(O.__watcherHandles=[])}else if(!a){const O=()=>{};return O.stop=Ce,O.resume=Ce,O.pause=Ce,O}}const f=ie;l.call=(O,j,E)=>Pe(O,f,j,E);let h=!1;i==="post"?l.scheduler=O=>{ae(O,f&&f.suspense)}:i!=="sync"&&(h=!0,l.scheduler=(O,j)=>{j?O():or(O)}),l.augmentJob=O=>{t&&(O.flags|=4),h&&(O.flags|=2,f&&(O.id=f.uid,O.i=f))};const _=ro(e,t,l);return Pt&&(d?d.push(_):a&&_()),_}function qo(e,t,n){const r=this.proxy,s=z(e)?e.includes(".")?Qs(r,e):()=>r[e]:e.bind(r,r);let i;A(t)?i=t:(i=t.handler,n=t);const o=Tt(this),l=Zs(s,i.bind(r),n);return o(),l}function Qs(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ko=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ne(t)}Modifiers`]||e[`${Ze(t)}Modifiers`];function zo(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let s=n;const i=t.startsWith("update:"),o=i&&Ko(r,t.slice(7));o&&(o.trim&&(s=n.map(f=>z(f)?f.trim():f)),o.number&&(s=n.map(xi)));let l,a=r[l=hn(t)]||r[l=hn(Ne(t))];!a&&i&&(a=r[l=hn(Ze(t))]),a&&Pe(a,e,6,s);const d=r[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Pe(d,e,6,s)}}function ei(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},l=!1;if(!A(e)){const a=d=>{const f=ei(d,t,!0);f&&(l=!0,te(o,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(q(e)&&r.set(e,null),null):(T(i)?i.forEach(a=>o[a]=null):te(o,i),q(e)&&r.set(e,o),o)}function an(e,t){return!e||!Qt(t)?!1:(t=t.slice(2).replace(/Once$/,""),F(e,t[0].toLowerCase()+t.slice(1))||F(e,Ze(t))||F(e,t))}function Mr(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:a,render:d,renderCache:f,props:h,data:_,setupState:O,ctx:j,inheritAttrs:E}=e,G=zt(e);let H,U;try{if(n.shapeFlag&4){const I=s||r,J=I;H=xe(d.call(J,I,f,h,O,_,j)),U=l}else{const I=t;H=xe(I.length>1?I(h,{attrs:l,slots:o,emit:a}):I(h,null)),U=t.props?l:Go(l)}}catch(I){St.length=0,on(I,e,1),H=Y(Xe)}let W=H;if(U&&E!==!1){const I=Object.keys(U),{shapeFlag:J}=W;I.length&&J&7&&(i&&I.some(zn)&&(U=Jo(U,i)),W=lt(W,U,!1,!0))}return n.dirs&&(W=lt(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&lr(W,n.transition),H=W,zt(G),H}const Go=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qt(n))&&((t||(t={}))[n]=e[n]);return t},Jo=(e,t)=>{const n={};for(const r in e)(!zn(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Yo(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:l,patchFlag:a}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Tr(r,o,d):!!o;if(a&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const _=f[h];if(o[_]!==r[_]&&!an(d,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Tr(r,o,d):!0:!!o;return!1}function Tr(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!an(n,i))return!0}return!1}function ko({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const ti=e=>e.__isSuspense;function Xo(e,t){t&&t.pendingBranch?T(e)?t.effects.push(...e):t.effects.push(e):oo(e)}const pe=Symbol.for("v-fgt"),un=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),wn=Symbol.for("v-stc"),St=[];let de=null;function k(e=!1){St.push(de=e?null:[])}function Zo(){St.pop(),de=St[St.length-1]||null}let Ct=1;function Ar(e,t=!1){Ct+=e,e<0&&de&&t&&(de.hasOnce=!0)}function ni(e){return e.dynamicChildren=Ct>0?de||tt:null,Zo(),Ct>0&&de&&de.push(e),e}function Q(e,t,n,r,s,i){return ni(fe(e,t,n,r,s,i,!0))}function Qo(e,t,n,r,s){return ni(Y(e,t,n,r,s,!0))}function Yt(e){return e?e.__v_isVNode===!0:!1}function pt(e,t){return e.type===t.type&&e.key===t.key}const ri=({key:e})=>e??null,Ut=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?z(e)||ee(e)||A(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function fe(e,t=null,n=null,r=0,s=null,i=e===pe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ri(t),ref:t&&Ut(t),scopeId:Rs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Oe};return l?(fr(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=z(n)?8:16),Ct>0&&!o&&de&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&de.push(a),a}const Y=el;function el(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===wo)&&(e=Xe),Yt(e)){const l=lt(e,t,!0);return n&&fr(l,n),Ct>0&&!i&&de&&(l.shapeFlag&6?de[de.indexOf(e)]=l:de.push(l)),l.patchFlag=-2,l}if(fl(e)&&(e=e.__vccOpts),t){t=tl(t);let{class:l,style:a}=t;l&&!z(l)&&(t.class=kn(l)),q(a)&&(sr(a)&&!T(a)&&(a=te({},a)),t.style=Yn(a))}const o=z(e)?1:ti(e)?128:ao(e)?64:q(e)?4:A(e)?2:0;return fe(e,t,n,r,s,o,i,!0)}function tl(e){return e?sr(e)||Ws(e)?te({},e):e:null}function lt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:a}=e,d=t?rl(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&ri(d),ref:t&&t.ref?n&&i?T(i)?i.concat(Ut(t)):[i,Ut(t)]:Ut(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lt(e.ssContent),ssFallback:e.ssFallback&&lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&lr(f,a.clone(f)),f}function nl(e=" ",t=0){return Y(un,null,e,t)}function xn(e="",t=!1){return t?(k(),Qo(Xe,null,e)):Y(Xe,null,e)}function xe(e){return e==null||typeof e=="boolean"?Y(Xe):T(e)?Y(pe,null,e.slice()):Yt(e)?Re(e):Y(un,null,String(e))}function Re(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:lt(e)}function fr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(T(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),fr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Ws(t)?t._ctx=Oe:s===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else A(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),r&64?(n=16,t=[nl(t)]):n=8);e.children=t,e.shapeFlag|=n}function rl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=kn([t.class,r.class]));else if(s==="style")t.style=Yn([t.style,r.style]);else if(Qt(s)){const i=t[s],o=r[s];o&&i!==o&&!(T(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Se(e,t,n,r=null){Pe(e,t,7,[n,r])}const sl=Bs();let il=0;function ol(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||sl,i={uid:il++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ai(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ks(r,s),emitsOptions:ei(r,s),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=zo.bind(null,i),e.ce&&e.ce(i),i}let ie=null,kt,Vn;{const e=nn(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};kt=t("__VUE_INSTANCE_SETTERS__",n=>ie=n),Vn=t("__VUE_SSR_SETTERS__",n=>Pt=n)}const Tt=e=>{const t=ie;return kt(e),e.scope.on(),()=>{e.scope.off(),kt(t)}},Er=()=>{ie&&ie.scope.off(),kt(null)};function si(e){return e.vnode.shapeFlag&4}let Pt=!1;function ll(e,t=!1,n=!1){t&&Vn(t);const{props:r,children:s}=e.vnode,i=si(e);jo(e,r,i,t),Do(e,s,n);const o=i?cl(e,t):void 0;return t&&Vn(!1),o}function cl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,xo);const{setup:r}=n;if(r){Ve();const s=e.setupContext=r.length>1?ul(e):null,i=Tt(e),o=Mt(r,e,0,[e.props,s]),l=rs(o);if(Ue(),i(),(l||e.sp)&&!yt(e)&&Fs(e),l){if(o.then(Er,Er),t)return o.then(a=>{jr(e,a)}).catch(a=>{on(a,e,0)});e.asyncDep=o}else jr(e,o)}else ii(e)}function jr(e,t,n){A(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=Ts(t)),ii(e)}function ii(e,t,n){const r=e.type;e.render||(e.render=r.render||Ce);{const s=Tt(e);Ve();try{Oo(e)}finally{Ue(),s()}}}const al={get(e,t){return X(e,"get",""),e[t]}};function ul(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,al),slots:e.slots,emit:e.emit,expose:t}}function dr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ts(Xi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _t)return _t[n](e)},has(t,n){return n in t||n in _t}})):e.proxy}function fl(e){return A(e)&&"__vccOpts"in e}const Xt=(e,t)=>to(e,t,Pt);function On(e,t,n){const r=arguments.length;return r===2?q(t)&&!T(t)?Yt(t)?Y(e,null,[t]):Y(e,t):Y(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yt(n)&&(n=[n]),Y(e,t,n))}const dl="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Un;const $r=typeof window<"u"&&window.trustedTypes;if($r)try{Un=$r.createPolicy("vue",{createHTML:e=>e})}catch{}const oi=Un?e=>Un.createHTML(e):e=>e,pl="http://www.w3.org/2000/svg",hl="http://www.w3.org/1998/Math/MathML",Me=typeof document<"u"?document:null,Rr=Me&&Me.createElement("template"),gl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Me.createElementNS(pl,e):t==="mathml"?Me.createElementNS(hl,e):n?Me.createElement(e,{is:n}):Me.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Me.createTextNode(e),createComment:e=>Me.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Me.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Rr.innerHTML=oi(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Rr.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ml=Symbol("_vtc");function bl(e,t,n){const r=e[ml];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Fr=Symbol("_vod"),vl=Symbol("_vsh"),yl=Symbol(""),_l=/(^|;)\s*display\s*:/;function Sl(e,t,n){const r=e.style,s=z(n);let i=!1;if(n&&!s){if(t)if(z(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Wt(r,l,"")}else for(const o in t)n[o]==null&&Wt(r,o,"");for(const o in n)o==="display"&&(i=!0),Wt(r,o,n[o])}else if(s){if(t!==n){const o=r[yl];o&&(n+=";"+o),r.cssText=n,i=_l.test(n)}}else t&&e.removeAttribute("style");Fr in e&&(e[Fr]=i?r.display:"",e[vl]&&(r.display="none"))}const Dr=/\s*!important$/;function Wt(e,t,n){if(T(n))n.forEach(r=>Wt(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=wl(e,t);Dr.test(n)?e.setProperty(Ze(r),n.replace(Dr,""),"important"):e[r]=n}}const Hr=["Webkit","Moz","ms"],Cn={};function wl(e,t){const n=Cn[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return Cn[t]=r;r=os(r);for(let s=0;s<Hr.length;s++){const i=Hr[s]+r;if(i in e)return Cn[t]=i}return t}const Lr="http://www.w3.org/1999/xlink";function Nr(e,t,n,r,s,i=Ti(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Lr,t.slice(6,t.length)):e.setAttributeNS(Lr,t,n):n==null||i&&!cs(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Be(n)?String(n):n)}function Br(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?oi(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=cs(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function xl(e,t,n,r){e.addEventListener(t,n,r)}function Ol(e,t,n,r){e.removeEventListener(t,n,r)}const Vr=Symbol("_vei");function Cl(e,t,n,r,s=null){const i=e[Vr]||(e[Vr]={}),o=i[t];if(r&&o)o.value=r;else{const[l,a]=Pl(t);if(r){const d=i[t]=Tl(r,s);xl(e,l,d,a)}else o&&(Ol(e,l,o,a),i[t]=void 0)}}const Ur=/(?:Once|Passive|Capture)$/;function Pl(e){let t;if(Ur.test(e)){t={};let r;for(;r=e.match(Ur);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ze(e.slice(2)),t]}let Pn=0;const Il=Promise.resolve(),Ml=()=>Pn||(Il.then(()=>Pn=0),Pn=Date.now());function Tl(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Al(r,n.value),t,5,[r])};return n.value=e,n.attached=Ml(),n}function Al(e,t){if(T(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Wr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,El=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?bl(e,r,o):t==="style"?Sl(e,n,r):Qt(t)?zn(t)||Cl(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jl(e,t,r,o))?(Br(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Nr(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!z(r))?Br(e,Ne(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Nr(e,t,r,o))};function jl(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Wr(t)&&A(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wr(t)&&z(n)?!1:t in e}const $l=te({patchProp:El},gl);let qr;function Rl(){return qr||(qr=Lo($l))}const Fl=(...e)=>{const t=Rl().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Hl(r);if(!s)return;const i=t._component;!A(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Dl(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Dl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Hl(e){return z(e)?document.querySelector(e):e}function Ll(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function zr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kr(Object(n),!0).forEach(function(r){Ll(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Nl(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function Bl(e,t){if(e==null)return{};var n=Nl(e,t),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Vl(e,t){return Ul(e)||Wl(e,t)||ql(e,t)||Kl()}function Ul(e){if(Array.isArray(e))return e}function Wl(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,s=!1,i=void 0;try{for(var o=e[Symbol.iterator](),l;!(r=(l=o.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(a){s=!0,i=a}finally{try{!r&&o.return!=null&&o.return()}finally{if(s)throw i}}return n}}function ql(e,t){if(e){if(typeof e=="string")return Gr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gr(e,t)}}function Gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Kl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Yr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jr(Object(n),!0).forEach(function(r){zl(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(s,i){return i(s)},r)}}function gt(e){return function t(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return s.length>=e.length?e.apply(this,s):function(){for(var o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];return t.apply(n,[].concat(s,l))}}}function Zt(e){return{}.toString.call(e).includes("Object")}function Jl(e){return!Object.keys(e).length}function It(e){return typeof e=="function"}function Yl(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function kl(e,t){return Zt(t)||Le("changeType"),Object.keys(t).some(function(n){return!Yl(e,n)})&&Le("changeField"),t}function Xl(e){It(e)||Le("selectorType")}function Zl(e){It(e)||Zt(e)||Le("handlerType"),Zt(e)&&Object.values(e).some(function(t){return!It(t)})&&Le("handlersType")}function Ql(e){e||Le("initialIsRequired"),Zt(e)||Le("initialType"),Jl(e)&&Le("initialContent")}function ec(e,t){throw new Error(e[t]||e.default)}var tc={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Le=gt(ec)(tc),Bt={changes:kl,selector:Xl,handler:Zl,initial:Ql};function nc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Bt.initial(e),Bt.handler(t);var n={current:e},r=gt(ic)(n,t),s=gt(sc)(n),i=gt(Bt.changes)(e),o=gt(rc)(n);function l(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(f){return f};return Bt.selector(d),d(n.current)}function a(d){Gl(r,s,i,o)(d)}return[l,a]}function rc(e,t){return It(t)?t(e.current):t}function sc(e,t){return e.current=Yr(Yr({},e.current),t),t}function ic(e,t,n){return It(t)?t(e.current):Object.keys(n).forEach(function(r){var s;return(s=t[r])===null||s===void 0?void 0:s.call(t,e.current[r])}),n}var oc={create:nc},lc={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function cc(e){return function t(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return s.length>=e.length?e.apply(this,s):function(){for(var o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];return t.apply(n,[].concat(s,l))}}}function ac(e){return{}.toString.call(e).includes("Object")}function uc(e){return e||kr("configIsRequired"),ac(e)||kr("configType"),e.urls?(fc(),{paths:{vs:e.urls.monacoBase}}):e}function fc(){console.warn(li.deprecation)}function dc(e,t){throw new Error(e[t]||e.default)}var li={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},kr=cc(dc)(li),pc={config:uc},hc=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(s){return n.reduceRight(function(i,o){return o(i)},s)}};function ci(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],ci(e[n],t[n]))}),zr(zr({},e),t)}var gc={type:"cancelation",msg:"operation is manually canceled"};function In(e){var t=!1,n=new Promise(function(r,s){e.then(function(i){return t?s(gc):r(i)}),e.catch(s)});return n.cancel=function(){return t=!0},n}var mc=oc.create({config:lc,isInitialized:!1,resolve:null,reject:null,monaco:null}),ai=Vl(mc,2),At=ai[0],fn=ai[1];function bc(e){var t=pc.config(e),n=t.monaco,r=Bl(t,["monaco"]);fn(function(s){return{config:ci(s.config,r),monaco:n}})}function vc(){var e=At(function(t){var n=t.monaco,r=t.isInitialized,s=t.resolve;return{monaco:n,isInitialized:r,resolve:s}});if(!e.isInitialized){if(fn({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),In(Mn);if(window.monaco&&window.monaco.editor)return ui(window.monaco),e.resolve(window.monaco),In(Mn);hc(yc,Sc)(wc)}return In(Mn)}function yc(e){return document.body.appendChild(e)}function _c(e){var t=document.createElement("script");return e&&(t.src=e),t}function Sc(e){var t=At(function(r){var s=r.config,i=r.reject;return{config:s,reject:i}}),n=_c("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function wc(){var e=At(function(n){var r=n.config,s=n.resolve,i=n.reject;return{config:r,resolve:s,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){ui(n),e.resolve(n)},function(n){e.reject(n)})}function ui(e){At().monaco||fn({monaco:e})}function xc(){return At(function(e){var t=e.monaco;return t})}var Mn=new Promise(function(e,t){return fn({resolve:e,reject:t})}),Wn={config:bc,init:vc,__getMonacoInstance:xc},Oc=Object.defineProperty,Cc=Object.defineProperties,Pc=Object.getOwnPropertyDescriptors,Xr=Object.getOwnPropertySymbols,Ic=Object.prototype.hasOwnProperty,Mc=Object.prototype.propertyIsEnumerable,Zr=(e,t,n)=>t in e?Oc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Tn=(e,t)=>{for(var n in t||(t={}))Ic.call(t,n)&&Zr(e,n,t[n]);if(Xr)for(var n of Xr(t))Mc.call(t,n)&&Zr(e,n,t[n]);return e},Tc=(e,t)=>Cc(e,Pc(t));const An={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function Ac(e,t){const n=Xt(()=>{const{width:s,height:i}=e;return Tc(Tn({},An.wrapper),{width:s,height:i})}),r=Xt(()=>Tn(Tn({},An.fullWidth),!t.value&&An.hide));return{wrapperStyle:n,containerStyle:r}}function Ec(){const e=sn(Wn.__getMonacoInstance()),t=Ps(!1);let n;return cr(()=>{e.value||(n=Wn.init(),n.then(s=>e.value=s).catch(s=>{(s==null?void 0:s.type)!=="cancelation"&&(t.value=!0,console.error("Monaco initialization error:",s))}))}),{monacoRef:e,unload:()=>n==null?void 0:n.cancel(),isLoadFailed:t}}function Qr(e){return typeof e=="function"?e():e}function qn(e){return e===void 0}function fi(e,t,n,r){return jc(e,r)||$c(e,t,n,r)}function jc(e,t){return e.editor.getModel(di(e,t))}function $c(e,t,n,r){return e.editor.createModel(t,n,r?di(e,r):void 0)}function di(e,t){return e.Uri.parse(t)}var Rc=Object.defineProperty,es=Object.getOwnPropertySymbols,Fc=Object.prototype.hasOwnProperty,Dc=Object.prototype.propertyIsEnumerable,ts=(e,t,n)=>t in e?Rc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hc=(e,t)=>{for(var n in t||(t={}))Fc.call(t,n)&&ts(e,n,t[n]);if(es)for(var n of es(t))Dc.call(t,n)&&ts(e,n,t[n]);return e};const Lc={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var pi=ln({name:"VueMonacoEditor",model:{prop:"value",event:"update:value"},props:{defaultValue:String,defaultPath:String,defaultLanguage:String,value:String,language:String,path:String,theme:{type:String,default:"vs"},line:Number,options:{type:Object,default:()=>({})},overrideServices:{type:Object,default:()=>({})},saveViewState:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},emits:["update:value","beforeMount","mount","change","validate"],setup(e,t){const n=new Map,r=sn(null),{monacoRef:s,unload:i,isLoadFailed:o}=Ec(),{editorRef:l}=Nc(t,e,s,r),{disposeValidator:a}=Bc(t,e,s,l),d=Xt(()=>!!s.value&&!!l.value),{wrapperStyle:f,containerStyle:h}=Ac(e,d);return ar(()=>{var _,O;(_=a.value)==null||_.call(a),l.value?((O=l.value.getModel())==null||O.dispose(),l.value.dispose()):i()}),He([()=>e.path,()=>e.value,()=>e.language,()=>e.line],([_,O,j,E],[G,H,U,W])=>{if(d.value){if(_!==G){const I=fi(s.value,O||e.defaultValue||"",j||e.defaultLanguage||"",_||e.defaultPath||"");e.saveViewState&&n.set(G,l.value.saveViewState()),l.value.setModel(I),e.saveViewState&&l.value.restoreViewState(n.get(_)),qn(E)||l.value.revealLine(E);return}l.value.getValue()!==O&&l.value.setValue(O),j!==U&&s.value.editor.setModelLanguage(l.value.getModel(),j),!qn(E)&&E!==W&&l.value.revealLine(E)}}),He(()=>e.options,_=>l.value&&l.value.updateOptions(_),{deep:!0}),He(()=>e.theme,_=>s.value&&s.value.editor.setTheme(_)),{containerRef:r,isEditorReady:d,isLoadFailed:o,wrapperStyle:f,containerStyle:h}},render(){const{$slots:e,isEditorReady:t,isLoadFailed:n,wrapperStyle:r,containerStyle:s,className:i}=this;return On("div",{style:r},[!t&&On("div",{style:Lc},n?e.failure?Qr(e.failure):"load failed":e.default?Qr(e.default):"loading..."),On("div",{ref:"containerRef",key:"monaco_editor_container",style:s,class:i})])}});function Nc({emit:e},t,n,r){const s=sn(null);cr(()=>{const o=He(n,()=>{r.value&&n.value&&(ir(()=>o()),i())},{immediate:!0})});function i(){var o;if(!r.value||!n.value||s.value)return;e("beforeMount",n.value);const l=t.path||t.defaultPath,a=fi(n.value,t.value||t.defaultValue||"",t.language||t.defaultLanguage||"",l||"");s.value=n.value.editor.create(r.value,Hc({model:a,theme:t.theme,automaticLayout:!0,autoIndent:"brackets",formatOnPaste:!0,formatOnType:!0},t.options),t.overrideServices),(o=s.value)==null||o.onDidChangeModelContent(d=>{const f=s.value.getValue();f!==t.value&&(e("update:value",f),e("change",f,d))}),s.value&&!qn(t.line)&&s.value.revealLine(t.line),e("mount",s.value,n.value)}return{editorRef:s}}function Bc({emit:e},t,n,r){const s=Ps(null),i=He([n,r],()=>{if(n.value&&r.value){ir(()=>i());const o=n.value.editor.onDidChangeMarkers(l=>{var a,d;const f=(d=(a=r.value)==null?void 0:a.getModel())==null?void 0:d.uri;if(f&&l.find(_=>_.path===f.path)){const _=n.value.editor.getModelMarkers({resource:f});e("validate",_)}});s.value=()=>o==null?void 0:o.dispose()}});return{disposeValidator:s}}const Vc={class:"pattern-card"},Uc=["title"],Wc={key:0,class:"pattern-card-description"},qc={key:1,class:"pattern-code-block"},Kc={key:2,class:"pattern-notes"},zc={class:"pattern-notes-list"},Gc={components:{VueMonacoEditor:pi},props:{selectedSubItem:{type:Object,default:null},codeTheme:{type:String,default:"vs"}},computed:{mutableValue:{get(){return this.selectedSubItem.code},set(){}}},data(){return{}}},Jc=ln({...Gc,__name:"PatternCard",setup(e){const t={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0,minimap:{enabled:!1}},n=sn(),r=()=>{const o=window.matchMedia("(prefers-color-scheme: dark)").matches?"vs-dark":"vs";n.value._themeService.setTheme(o)};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",r);const s=i=>{n.value=i,r()};return(i,o)=>(k(),Q("div",Vc,[fe("h2",{title:e.selectedSubItem.en_title,class:"pattern-card-title"},rt(e.selectedSubItem.title),9,Uc),e.selectedSubItem.description?(k(),Q("p",Wc,rt(e.selectedSubItem.description),1)):xn("",!0),e.selectedSubItem.code?(k(),Q("div",qc,[Y(Ms(pi),{value:i.mutableValue,"onUpdate:value":o[0]||(o[0]=l=>i.mutableValue=l),theme:e.codeTheme,language:"typescript",height:"540px",options:t,onMount:s},null,8,["value","theme"])])):xn("",!0),e.selectedSubItem.notes.length>0?(k(),Q("div",Kc,[o[1]||(o[1]=fe("h3",{class:"pattern-notes-title"},"Применение:",-1)),fe("ul",zc,[(k(!0),Q(pe,null,Dn(e.selectedSubItem.notes,(l,a)=>(k(),Q("li",{key:a},rt(l),1))),128))])])):xn("",!0)]))}}),Et=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Yc=Et(Jc,[["__scopeId","data-v-6a9b110b"]]),kc={props:{selectedItem:{type:String,default:null}}},Xc={class:"control-container"};function Zc(e,t,n,r,s,i){return k(),Q("div",Xc)}const Qc=Et(kc,[["render",Zc],["__scopeId","data-v-bfcdd136"]]),ea={class:"pattern-card-viewer"},ta={key:0},na={key:1,class:"pattern-card-viewer-help"},ra={props:{selectedSubItem:{type:Object,default:null}}},sa=ln({...ra,__name:"PatternCardViewer",setup(e){return(t,n)=>(k(),Q("div",ea,[e.selectedSubItem?(k(),Q("div",ta,[Y(Yc,{"selected-sub-item":e.selectedSubItem},null,8,["selected-sub-item"]),Y(Qc)])):(k(),Q("div",na,n[0]||(n[0]=[fe("p",null,"Выберите пункт меню слева",-1)])))]))}}),hi=Et(sa,[["__scopeId","data-v-1dae6636"]]),ia=[{title:"Порождающие паттерны",en_title:"Creational Patterns",subitems:[{title:"Абстрактная фабрика",en_title:"Abstract Factory",description:"Создает семейства связанных объектов без указания их конкретных классов.",code:`interface Button {
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
}`,notes:["Подходит: Для выполнения операций над сложными структурами объектов","Не подходит: Когда структура объектов часто меняется"]}]}],oa={data(){return{menuItems:ia}}},la={class:"pattern-menu"},ca={class:"pattern-menu-container"},aa=["title"],ua=["onClick","title"];function fa(e,t,n,r,s,i){return k(),Q("div",la,[fe("div",ca,[t[0]||(t[0]=fe("h3",null,"Паттерны проектирования",-1)),t[1]||(t[1]=fe("h4",null,"TypeScript",-1)),fe("ul",null,[(k(!0),Q(pe,null,Dn(s.menuItems,(o,l)=>(k(),Q("li",{class:"pattern-menu-list-item",key:l},[fe("p",{title:o.en_title,class:"pattern-menu-list-item-title"},rt(o.title),9,aa),fe("ul",null,[(k(!0),Q(pe,null,Dn(o.subitems,(a,d)=>(k(),Q("li",{class:"pattern-menu-sublist-item",key:d},[fe("p",{onClick:f=>e.$emit("subitem-selected",a),title:a.en_title,class:"pattern-menu-sublist-item-title"},rt(a.title),9,ua)]))),128))])]))),128))])])])}const gi=Et(oa,[["render",fa],["__scopeId","data-v-bef3d40d"]]),da={class:"container"},pa={components:{PatternCardViewer:hi,PatternMenu:gi},data(){return{selectedSubItem:null}},methods:{handleSubItemSelected(e){this.selectedSubItem=e}}},ha=ln({...pa,__name:"App",setup(e){return(t,n)=>(k(),Q("main",da,[Y(gi,{onSubitemSelected:t.handleSubItemSelected},null,8,["onSubitemSelected"]),Y(hi,{"selected-sub-item":t.selectedSubItem},null,8,["selected-sub-item"])]))}}),ga=Et(ha,[["__scopeId","data-v-97ee43d9"]]);Fl(ga).mount("#app");Wn.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}});
