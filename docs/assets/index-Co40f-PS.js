(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ur(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const z={},gt=[],Le=()=>{},Ys=()=>!1,mn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fr=e=>e.startsWith("onUpdate:"),ie=Object.assign,dr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Xs=Object.prototype.hasOwnProperty,N=(e,t)=>Xs.call(e,t),A=Array.isArray,mt=e=>vn(e)==="[object Map]",Oi=e=>vn(e)==="[object Set]",$=e=>typeof e=="function",Q=e=>typeof e=="string",Qe=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Pi=e=>(G(e)||$(e))&&$(e.then)&&$(e.catch),Ti=Object.prototype.toString,vn=e=>Ti.call(e),Zs=e=>vn(e).slice(8,-1),Mi=e=>vn(e)==="[object Object]",pr=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,It=ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qs=/-(\w)/g,Xe=bn(e=>e.replace(Qs,(t,n)=>n?n.toUpperCase():"")),eo=/\B([A-Z])/g,dt=bn(e=>e.replace(eo,"-$1").toLowerCase()),Ii=bn(e=>e.charAt(0).toUpperCase()+e.slice(1)),jn=bn(e=>e?`on${Ii(e)}`:""),Ge=(e,t)=>!Object.is(e,t),$n=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ai=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},to=e=>{const t=parseFloat(e);return isNaN(t)?e:t},no=e=>{const t=Q(e)?Number(e):NaN;return isNaN(t)?e:t};let $r;const yn=()=>$r||($r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hr(e){if(A(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Q(r)?oo(r):hr(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(Q(e)||G(e))return e}const ro=/;(?![^(]*\))/g,io=/:([^]+)/,so=/\/\*[^]*?\*\//g;function oo(e){const t={};return e.replace(so,"").split(ro).forEach(n=>{if(n){const r=n.split(io);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function gr(e){let t="";if(Q(e))t=e;else if(A(e))for(let n=0;n<e.length;n++){const r=gr(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const lo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",co=ur(lo);function Ei(e){return!!e||e===""}const ji=e=>!!(e&&e.__v_isRef===!0),vt=e=>Q(e)?e:e==null?"":A(e)||G(e)&&(e.toString===Ti||!$(e.toString))?ji(e)?vt(e.value):JSON.stringify(e,$i,2):String(e),$i=(e,t)=>ji(t)?$i(e,t.value):mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[Fn(r,s)+" =>"]=i,n),{})}:Oi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Fn(n))}:Qe(t)?Fn(t):G(t)&&!A(t)&&!Mi(t)?String(t):t,Fn=(e,t="")=>{var n;return Qe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class ao{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function uo(){return Se}let k;const Rn=new WeakSet;class Fi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rn.has(this)&&(Rn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Li(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fr(this),Di(this);const t=k,n=Te;k=this,Te=!0;try{return this.fn()}finally{Ni(this),k=t,Te=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)br(t);this.deps=this.depsTail=void 0,Fr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jn(this)&&this.run()}get dirty(){return Jn(this)}}let Ri=0,At,Et;function Li(e,t=!1){if(e.flags|=8,t){e.next=Et,Et=e;return}e.next=At,At=e}function mr(){Ri++}function vr(){if(--Ri>0)return;if(Et){let t=Et;for(Et=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;At;){let t=At;for(At=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Di(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ni(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),br(r),fo(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function Jn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Hi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Hi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Rt))return;e.globalVersion=Rt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Jn(e)){e.flags&=-3;return}const n=k,r=Te;k=e,Te=!0;try{Di(e);const i=e.fn(e._value);(t.version===0||Ge(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{k=n,Te=r,Ni(e),e.flags&=-3}}function br(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)br(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function fo(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Te=!0;const Bi=[];function et(){Bi.push(Te),Te=!1}function tt(){const e=Bi.pop();Te=e===void 0?!0:e}function Fr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=k;k=void 0;try{t()}finally{k=n}}}let Rt=0;class po{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!k||!Te||k===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==k)n=this.activeLink=new po(k,this),k.deps?(n.prevDep=k.depsTail,k.depsTail.nextDep=n,k.depsTail=n):k.deps=k.depsTail=n,Vi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=k.depsTail,n.nextDep=void 0,k.depsTail.nextDep=n,k.depsTail=n,k.deps===n&&(k.deps=r)}return n}trigger(t){this.version++,Rt++,this.notify(t)}notify(t){mr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vr()}}}function Vi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Vi(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Yn=new WeakMap,ut=Symbol(""),Xn=Symbol(""),Lt=Symbol("");function ce(e,t,n){if(Te&&k){let r=Yn.get(e);r||Yn.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new yr),i.map=r,i.key=n),i.track()}}function Ve(e,t,n,r,i,s){const o=Yn.get(e);if(!o){Rt++;return}const l=c=>{c&&c.trigger()};if(mr(),t==="clear")o.forEach(l);else{const c=A(e),d=c&&pr(n);if(c&&n==="length"){const u=Number(r);o.forEach((p,m)=>{(m==="length"||m===Lt||!Qe(m)&&m>=u)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),d&&l(o.get(Lt)),t){case"add":c?d&&l(o.get("length")):(l(o.get(ut)),mt(e)&&l(o.get(Xn)));break;case"delete":c||(l(o.get(ut)),mt(e)&&l(o.get(Xn)));break;case"set":mt(e)&&l(o.get(ut));break}}vr()}function pt(e){const t=D(e);return t===e?t:(ce(t,"iterate",Lt),Pe(e)?t:t.map(ae))}function _n(e){return ce(e=D(e),"iterate",Lt),e}const ho={__proto__:null,[Symbol.iterator](){return Ln(this,Symbol.iterator,ae)},concat(...e){return pt(this).concat(...e.map(t=>A(t)?pt(t):t))},entries(){return Ln(this,"entries",e=>(e[1]=ae(e[1]),e))},every(e,t){return Ne(this,"every",e,t,void 0,arguments)},filter(e,t){return Ne(this,"filter",e,t,n=>n.map(ae),arguments)},find(e,t){return Ne(this,"find",e,t,ae,arguments)},findIndex(e,t){return Ne(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ne(this,"findLast",e,t,ae,arguments)},findLastIndex(e,t){return Ne(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ne(this,"forEach",e,t,void 0,arguments)},includes(...e){return Dn(this,"includes",e)},indexOf(...e){return Dn(this,"indexOf",e)},join(e){return pt(this).join(e)},lastIndexOf(...e){return Dn(this,"lastIndexOf",e)},map(e,t){return Ne(this,"map",e,t,void 0,arguments)},pop(){return xt(this,"pop")},push(...e){return xt(this,"push",e)},reduce(e,...t){return Rr(this,"reduce",e,t)},reduceRight(e,...t){return Rr(this,"reduceRight",e,t)},shift(){return xt(this,"shift")},some(e,t){return Ne(this,"some",e,t,void 0,arguments)},splice(...e){return xt(this,"splice",e)},toReversed(){return pt(this).toReversed()},toSorted(e){return pt(this).toSorted(e)},toSpliced(...e){return pt(this).toSpliced(...e)},unshift(...e){return xt(this,"unshift",e)},values(){return Ln(this,"values",ae)}};function Ln(e,t,n){const r=_n(e),i=r[t]();return r!==e&&!Pe(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const go=Array.prototype;function Ne(e,t,n,r,i,s){const o=_n(e),l=o!==e&&!Pe(e),c=o[t];if(c!==go[t]){const p=c.apply(e,s);return l?ae(p):p}let d=n;o!==e&&(l?d=function(p,m){return n.call(this,ae(p),m,e)}:n.length>2&&(d=function(p,m){return n.call(this,p,m,e)}));const u=c.call(o,d,r);return l&&i?i(u):u}function Rr(e,t,n,r){const i=_n(e);let s=n;return i!==e&&(Pe(e)?n.length>3&&(s=function(o,l,c){return n.call(this,o,l,c,e)}):s=function(o,l,c){return n.call(this,o,ae(l),c,e)}),i[t](s,...r)}function Dn(e,t,n){const r=D(e);ce(r,"iterate",Lt);const i=r[t](...n);return(i===-1||i===!1)&&wr(n[0])?(n[0]=D(n[0]),r[t](...n)):i}function xt(e,t,n=[]){et(),mr();const r=D(e)[t].apply(e,n);return vr(),tt(),r}const mo=ur("__proto__,__v_isRef,__isVue"),Ui=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Qe));function vo(e){Qe(e)||(e=String(e));const t=D(this);return ce(t,"has",e),t.hasOwnProperty(e)}class zi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?To:ki:s?Ki:qi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=A(t);if(!i){let c;if(o&&(c=ho[n]))return c;if(n==="hasOwnProperty")return vo}const l=Reflect.get(t,n,fe(t)?t:r);return(Qe(n)?Ui.has(n):mo(n))||(i||ce(t,"get",n),s)?l:fe(l)?o&&pr(n)?l:l.value:G(l)?i?Gi(l):Sr(l):l}}class Wi extends zi{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const c=ft(s);if(!Pe(r)&&!ft(r)&&(s=D(s),r=D(r)),!A(t)&&fe(s)&&!fe(r))return c?!1:(s.value=r,!0)}const o=A(t)&&pr(n)?Number(n)<t.length:N(t,n),l=Reflect.set(t,n,r,fe(t)?t:i);return t===D(i)&&(o?Ge(r,s)&&Ve(t,"set",n,r):Ve(t,"add",n,r)),l}deleteProperty(t,n){const r=N(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Ve(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Qe(n)||!Ui.has(n))&&ce(t,"has",n),r}ownKeys(t){return ce(t,"iterate",A(t)?"length":ut),Reflect.ownKeys(t)}}class bo extends zi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const yo=new Wi,_o=new bo,So=new Wi(!0);const Zn=e=>e,Jt=e=>Reflect.getPrototypeOf(e);function Co(e,t,n){return function(...r){const i=this.__v_raw,s=D(i),o=mt(s),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,d=i[e](...r),u=n?Zn:t?Qn:ae;return!t&&ce(s,"iterate",c?Xn:ut),{next(){const{value:p,done:m}=d.next();return m?{value:p,done:m}:{value:l?[u(p[0]),u(p[1])]:u(p),done:m}},[Symbol.iterator](){return this}}}}function Yt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wo(e,t){const n={get(i){const s=this.__v_raw,o=D(s),l=D(i);e||(Ge(i,l)&&ce(o,"get",i),ce(o,"get",l));const{has:c}=Jt(o),d=t?Zn:e?Qn:ae;if(c.call(o,i))return d(s.get(i));if(c.call(o,l))return d(s.get(l));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!e&&ce(D(i),"iterate",ut),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=D(s),l=D(i);return e||(Ge(i,l)&&ce(o,"has",i),ce(o,"has",l)),i===l?s.has(i):s.has(i)||s.has(l)},forEach(i,s){const o=this,l=o.__v_raw,c=D(l),d=t?Zn:e?Qn:ae;return!e&&ce(c,"iterate",ut),l.forEach((u,p)=>i.call(s,d(u),d(p),o))}};return ie(n,e?{add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear")}:{add(i){!t&&!Pe(i)&&!ft(i)&&(i=D(i));const s=D(this);return Jt(s).has.call(s,i)||(s.add(i),Ve(s,"add",i,i)),this},set(i,s){!t&&!Pe(s)&&!ft(s)&&(s=D(s));const o=D(this),{has:l,get:c}=Jt(o);let d=l.call(o,i);d||(i=D(i),d=l.call(o,i));const u=c.call(o,i);return o.set(i,s),d?Ge(s,u)&&Ve(o,"set",i,s):Ve(o,"add",i,s),this},delete(i){const s=D(this),{has:o,get:l}=Jt(s);let c=o.call(s,i);c||(i=D(i),c=o.call(s,i)),l&&l.call(s,i);const d=s.delete(i);return c&&Ve(s,"delete",i,void 0),d},clear(){const i=D(this),s=i.size!==0,o=i.clear();return s&&Ve(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Co(i,e,t)}),n}function _r(e,t){const n=wo(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(N(n,i)&&i in r?n:r,i,s)}const xo={get:_r(!1,!1)},Oo={get:_r(!1,!0)},Po={get:_r(!0,!1)};const qi=new WeakMap,Ki=new WeakMap,ki=new WeakMap,To=new WeakMap;function Mo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Io(e){return e.__v_skip||!Object.isExtensible(e)?0:Mo(Zs(e))}function Sr(e){return ft(e)?e:Cr(e,!1,yo,xo,qi)}function Ao(e){return Cr(e,!1,So,Oo,Ki)}function Gi(e){return Cr(e,!0,_o,Po,ki)}function Cr(e,t,n,r,i){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Io(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return i.set(e,l),l}function bt(e){return ft(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function ft(e){return!!(e&&e.__v_isReadonly)}function Pe(e){return!!(e&&e.__v_isShallow)}function wr(e){return e?!!e.__v_raw:!1}function D(e){const t=e&&e.__v_raw;return t?D(t):e}function Eo(e){return!N(e,"__v_skip")&&Object.isExtensible(e)&&Ai(e,"__v_skip",!0),e}const ae=e=>G(e)?Sr(e):e,Qn=e=>G(e)?Gi(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function Ji(e){return Yi(e,!1)}function Sn(e){return Yi(e,!0)}function Yi(e,t){return fe(e)?e:new jo(e,t)}class jo{constructor(t,n){this.dep=new yr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:D(t),this._value=n?t:ae(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Pe(t)||ft(t);t=r?t:D(t),Ge(t,n)&&(this._rawValue=t,this._value=r?t:ae(t),this.dep.trigger())}}function Xi(e){return fe(e)?e.value:e}const $o={get:(e,t,n)=>t==="__v_raw"?e:Xi(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Zi(e){return bt(e)?e:new Proxy(e,$o)}class Fo{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new yr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&k!==this)return Li(this,!0),!0}get value(){const t=this.dep.track();return Hi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ro(e,t,n=!1){let r,i;return $(e)?r=e:(r=e.get,i=e.set),new Fo(r,i,n)}const Xt={},on=new WeakMap;let ct;function Lo(e,t=!1,n=ct){if(n){let r=on.get(n);r||on.set(n,r=[]),r.push(e)}}function Do(e,t,n=z){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:l,call:c}=n,d=P=>i?P:Pe(P)||i===!1||i===0?Ue(P,1):Ue(P);let u,p,m,C,I=!1,E=!1;if(fe(e)?(p=()=>e.value,I=Pe(e)):bt(e)?(p=()=>d(e),I=!0):A(e)?(E=!0,I=e.some(P=>bt(P)||Pe(P)),p=()=>e.map(P=>{if(fe(P))return P.value;if(bt(P))return d(P);if($(P))return c?c(P,2):P()})):$(e)?t?p=c?()=>c(e,2):e:p=()=>{if(m){et();try{m()}finally{tt()}}const P=ct;ct=u;try{return c?c(e,3,[C]):e(C)}finally{ct=P}}:p=Le,t&&i){const P=p,W=i===!0?1/0:i;p=()=>Ue(P(),W)}const Y=uo(),L=()=>{u.stop(),Y&&Y.active&&dr(Y.effects,u)};if(s&&t){const P=t;t=(...W)=>{P(...W),L()}}let H=E?new Array(e.length).fill(Xt):Xt;const B=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(t){const W=u.run();if(i||I||(E?W.some((te,de)=>Ge(te,H[de])):Ge(W,H))){m&&m();const te=ct;ct=u;try{const de=[W,H===Xt?void 0:E&&H[0]===Xt?[]:H,C];c?c(t,3,de):t(...de),H=W}finally{ct=te}}}else u.run()};return l&&l(B),u=new Fi(p),u.scheduler=o?()=>o(B,!1):B,C=P=>Lo(P,!1,u),m=u.onStop=()=>{const P=on.get(u);if(P){if(c)c(P,4);else for(const W of P)W();on.delete(u)}},t?r?B(!0):H=u.run():o?o(B.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function Ue(e,t=1/0,n){if(t<=0||!G(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,fe(e))Ue(e.value,t,n);else if(A(e))for(let r=0;r<e.length;r++)Ue(e[r],t,n);else if(Oi(e)||mt(e))e.forEach(r=>{Ue(r,t,n)});else if(Mi(e)){for(const r in e)Ue(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ue(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zt(e,t,n,r){try{return r?e(...r):e()}catch(i){Cn(i,t,n)}}function Me(e,t,n,r){if($(e)){const i=zt(e,t,n,r);return i&&Pi(i)&&i.catch(s=>{Cn(s,t,n)}),i}if(A(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Me(e[s],t,n,r));return i}}function Cn(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||z;if(t){let l=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,c,d)===!1)return}l=l.parent}if(s){et(),zt(s,null,10,[e,c,d]),tt();return}}No(e,n,i,r,o)}function No(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const he=[];let Fe=-1;const yt=[];let qe=null,ht=0;const Qi=Promise.resolve();let ln=null;function xr(e){const t=ln||Qi;return e?t.then(this?e.bind(this):e):t}function Ho(e){let t=Fe+1,n=he.length;for(;t<n;){const r=t+n>>>1,i=he[r],s=Dt(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function Or(e){if(!(e.flags&1)){const t=Dt(e),n=he[he.length-1];!n||!(e.flags&2)&&t>=Dt(n)?he.push(e):he.splice(Ho(t),0,e),e.flags|=1,es()}}function es(){ln||(ln=Qi.then(ns))}function Bo(e){A(e)?yt.push(...e):qe&&e.id===-1?qe.splice(ht+1,0,e):e.flags&1||(yt.push(e),e.flags|=1),es()}function Lr(e,t,n=Fe+1){for(;n<he.length;n++){const r=he[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;he.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ts(e){if(yt.length){const t=[...new Set(yt)].sort((n,r)=>Dt(n)-Dt(r));if(yt.length=0,qe){qe.push(...t);return}for(qe=t,ht=0;ht<qe.length;ht++){const n=qe[ht];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qe=null,ht=0}}const Dt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ns(e){try{for(Fe=0;Fe<he.length;Fe++){const t=he[Fe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),zt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Fe<he.length;Fe++){const t=he[Fe];t&&(t.flags&=-2)}Fe=-1,he.length=0,ts(),ln=null,(he.length||yt.length)&&ns()}}let we=null,rs=null;function cn(e){const t=we;return we=e,rs=e&&e.type.__scopeId||null,t}function is(e,t=we,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&kr(-1);const s=cn(t);let o;try{o=e(...i)}finally{cn(s),r._d&&kr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Dr(e,t){if(we===null)return e;const n=In(we),r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,l,c=z]=t[i];s&&($(s)&&(s={mounted:s,updated:s}),s.deep&&Ue(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return e}function it(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let c=l.dir[r];c&&(et(),Me(c,n,8,[e.el,l,e,t]),tt())}}const Vo=Symbol("_vte"),ss=e=>e.__isTeleport,Ke=Symbol("_leaveCb"),Zt=Symbol("_enterCb");function Uo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pn(()=>{e.isMounted=!0}),ps(()=>{e.isUnmounting=!0}),e}const Oe=[Function,Array],os={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Oe,onEnter:Oe,onAfterEnter:Oe,onEnterCancelled:Oe,onBeforeLeave:Oe,onLeave:Oe,onAfterLeave:Oe,onLeaveCancelled:Oe,onBeforeAppear:Oe,onAppear:Oe,onAfterAppear:Oe,onAppearCancelled:Oe},ls=e=>{const t=e.subTree;return t.component?ls(t.component):t},zo={name:"BaseTransition",props:os,setup(e,{slots:t}){const n=Bl(),r=Uo();return()=>{const i=t.default&&us(t.default(),!0);if(!i||!i.length)return;const s=cs(i),o=D(e),{mode:l}=o;if(r.isLeaving)return Nn(s);const c=Nr(s);if(!c)return Nn(s);let d=er(c,o,r,n,p=>d=p);c.type!==ve&&Nt(c,d);let u=n.subTree&&Nr(n.subTree);if(u&&u.type!==ve&&!at(c,u)&&ls(n).type!==ve){let p=er(u,o,r,n);if(Nt(u,p),l==="out-in"&&c.type!==ve)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,u=void 0},Nn(s);l==="in-out"&&c.type!==ve?p.delayLeave=(m,C,I)=>{const E=as(r,u);E[String(u.key)]=u,m[Ke]=()=>{C(),m[Ke]=void 0,delete d.delayedLeave,u=void 0},d.delayedLeave=()=>{I(),delete d.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function cs(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ve){t=n;break}}return t}const Wo=zo;function as(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function er(e,t,n,r,i){const{appear:s,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:m,onLeave:C,onAfterLeave:I,onLeaveCancelled:E,onBeforeAppear:Y,onAppear:L,onAfterAppear:H,onAppearCancelled:B}=t,P=String(e.key),W=as(n,e),te=(F,U)=>{F&&Me(F,r,9,U)},de=(F,U)=>{const X=U[1];te(F,U),A(F)?F.every(O=>O.length<=1)&&X():F.length<=1&&X()},ge={mode:o,persisted:l,beforeEnter(F){let U=c;if(!n.isMounted)if(s)U=Y||c;else return;F[Ke]&&F[Ke](!0);const X=W[P];X&&at(e,X)&&X.el[Ke]&&X.el[Ke](),te(U,[F])},enter(F){let U=d,X=u,O=p;if(!n.isMounted)if(s)U=L||d,X=H||u,O=B||p;else return;let J=!1;const oe=F[Zt]=De=>{J||(J=!0,De?te(O,[F]):te(X,[F]),ge.delayedLeave&&ge.delayedLeave(),F[Zt]=void 0)};U?de(U,[F,oe]):oe()},leave(F,U){const X=String(e.key);if(F[Zt]&&F[Zt](!0),n.isUnmounting)return U();te(m,[F]);let O=!1;const J=F[Ke]=oe=>{O||(O=!0,U(),oe?te(E,[F]):te(I,[F]),F[Ke]=void 0,W[X]===e&&delete W[X])};W[X]=e,C?de(C,[F,J]):J()},clone(F){const U=er(F,t,n,r,i);return i&&i(U),U}};return ge}function Nn(e){if(xn(e))return e=Ze(e),e.children=null,e}function Nr(e){if(!xn(e))return ss(e.type)&&e.children?cs(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&$(n.default))return n.default()}}function Nt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Nt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function us(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Ce?(o.patchFlag&128&&i++,r=r.concat(us(o.children,t,l))):(t||o.type!==ve)&&r.push(l!=null?Ze(o,{key:l}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function wn(e,t){return $(e)?ie({name:e.name},t,{setup:e}):e}function fs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function an(e,t,n,r,i=!1){if(A(e)){e.forEach((I,E)=>an(I,t&&(A(t)?t[E]:t),n,r,i));return}if(jt(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&an(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?In(r.component):r.el,o=i?null:s,{i:l,r:c}=e,d=t&&t.r,u=l.refs===z?l.refs={}:l.refs,p=l.setupState,m=D(p),C=p===z?()=>!1:I=>N(m,I);if(d!=null&&d!==c&&(Q(d)?(u[d]=null,C(d)&&(p[d]=null)):fe(d)&&(d.value=null)),$(c))zt(c,l,12,[o,u]);else{const I=Q(c),E=fe(c);if(I||E){const Y=()=>{if(e.f){const L=I?C(c)?p[c]:u[c]:c.value;i?A(L)&&dr(L,s):A(L)?L.includes(s)||L.push(s):I?(u[c]=[s],C(c)&&(p[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else I?(u[c]=o,C(c)&&(p[c]=o)):E&&(c.value=o,e.k&&(u[e.k]=o))};o?(Y.id=-1,_e(Y,n)):Y()}}}yn().requestIdleCallback;yn().cancelIdleCallback;const jt=e=>!!e.type.__asyncLoader,xn=e=>e.type.__isKeepAlive;function qo(e,t){ds(e,"a",t)}function Ko(e,t){ds(e,"da",t)}function ds(e,t,n=ue){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(On(t,r,n),n){let i=n.parent;for(;i&&i.parent;)xn(i.parent.vnode)&&ko(r,t,n,i),i=i.parent}}function ko(e,t,n,r){const i=On(t,e,r,!0);Pr(()=>{dr(r[t],i)},n)}function On(e,t,n=ue,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{et();const l=Wt(n),c=Me(t,n,e,o);return l(),tt(),c});return r?i.unshift(s):i.push(s),s}}const ze=e=>(t,n=ue)=>{(!Bt||e==="sp")&&On(e,(...r)=>t(...r),n)},Go=ze("bm"),Pn=ze("m"),Jo=ze("bu"),Yo=ze("u"),ps=ze("bum"),Pr=ze("um"),Xo=ze("sp"),Zo=ze("rtg"),Qo=ze("rtc");function el(e,t=ue){On("ec",e,t)}const tl=Symbol.for("v-ndc");function tr(e,t,n,r){let i;const s=n,o=A(e);if(o||Q(e)){const l=o&&bt(e);let c=!1;l&&(c=!Pe(e),e=_n(e)),i=new Array(e.length);for(let d=0,u=e.length;d<u;d++)i[d]=t(c?ae(e[d]):e[d],d,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,s)}else if(G(e))if(e[Symbol.iterator])i=Array.from(e,(l,c)=>t(l,c,void 0,s));else{const l=Object.keys(e);i=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const u=l[c];i[c]=t(e[u],u,c,s)}}else i=[];return i}const nr=e=>e?Fs(e)?In(e):nr(e.parent):null,$t=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nr(e.parent),$root:e=>nr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>gs(e),$forceUpdate:e=>e.f||(e.f=()=>{Or(e.update)}),$nextTick:e=>e.n||(e.n=xr.bind(e.proxy)),$watch:e=>wl.bind(e)}),Hn=(e,t)=>e!==z&&!e.__isScriptSetup&&N(e,t),nl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:c}=e;let d;if(t[0]!=="$"){const C=o[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Hn(r,t))return o[t]=1,r[t];if(i!==z&&N(i,t))return o[t]=2,i[t];if((d=e.propsOptions[0])&&N(d,t))return o[t]=3,s[t];if(n!==z&&N(n,t))return o[t]=4,n[t];rr&&(o[t]=0)}}const u=$t[t];let p,m;if(u)return t==="$attrs"&&ce(e.attrs,"get",""),u(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==z&&N(n,t))return o[t]=4,n[t];if(m=c.config.globalProperties,N(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Hn(i,t)?(i[t]=n,!0):r!==z&&N(r,t)?(r[t]=n,!0):N(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let l;return!!n[o]||e!==z&&N(e,o)||Hn(t,o)||(l=s[0])&&N(l,o)||N(r,o)||N($t,o)||N(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:N(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Hr(e){return A(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let rr=!0;function rl(e){const t=gs(e),n=e.proxy,r=e.ctx;rr=!1,t.beforeCreate&&Br(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:l,provide:c,inject:d,created:u,beforeMount:p,mounted:m,beforeUpdate:C,updated:I,activated:E,deactivated:Y,beforeDestroy:L,beforeUnmount:H,destroyed:B,unmounted:P,render:W,renderTracked:te,renderTriggered:de,errorCaptured:ge,serverPrefetch:F,expose:U,inheritAttrs:X,components:O,directives:J,filters:oe}=t;if(d&&il(d,r,null),o)for(const Z in o){const q=o[Z];$(q)&&(r[Z]=q.bind(n))}if(i){const Z=i.call(n,n);G(Z)&&(e.data=Sr(Z))}if(rr=!0,s)for(const Z in s){const q=s[Z],nt=$(q)?q.bind(n,n):$(q.get)?q.get.bind(n,n):Le,kt=!$(q)&&$(q.set)?q.set.bind(n):Le,rt=pn({get:nt,set:kt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ie=>rt.value=Ie})}if(l)for(const Z in l)hs(l[Z],r,n,Z);if(c){const Z=$(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(q=>{ul(q,Z[q])})}u&&Br(u,e,"c");function ne(Z,q){A(q)?q.forEach(nt=>Z(nt.bind(n))):q&&Z(q.bind(n))}if(ne(Go,p),ne(Pn,m),ne(Jo,C),ne(Yo,I),ne(qo,E),ne(Ko,Y),ne(el,ge),ne(Qo,te),ne(Zo,de),ne(ps,H),ne(Pr,P),ne(Xo,F),A(U))if(U.length){const Z=e.exposed||(e.exposed={});U.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:nt=>n[q]=nt})})}else e.exposed||(e.exposed={});W&&e.render===Le&&(e.render=W),X!=null&&(e.inheritAttrs=X),O&&(e.components=O),J&&(e.directives=J),F&&fs(e)}function il(e,t,n=Le){A(e)&&(e=ir(e));for(const r in e){const i=e[r];let s;G(i)?"default"in i?s=en(i.from||r,i.default,!0):s=en(i.from||r):s=en(i),fe(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function Br(e,t,n){Me(A(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function hs(e,t,n,r){let i=r.includes(".")?Is(n,r):()=>n[r];if(Q(e)){const s=t[e];$(s)&&Je(i,s)}else if($(e))Je(i,e.bind(n));else if(G(e))if(A(e))e.forEach(s=>hs(s,t,n,r));else{const s=$(e.handler)?e.handler.bind(n):t[e.handler];$(s)&&Je(i,s,e)}}function gs(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,l=s.get(t);let c;return l?c=l:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(d=>un(c,d,o,!0)),un(c,t,o)),G(t)&&s.set(t,c),c}function un(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&un(e,s,n,!0),i&&i.forEach(o=>un(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=sl[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const sl={data:Vr,props:Ur,emits:Ur,methods:Tt,computed:Tt,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:Tt,directives:Tt,watch:ll,provide:Vr,inject:ol};function Vr(e,t){return t?e?function(){return ie($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function ol(e,t){return Tt(ir(e),ir(t))}function ir(e){if(A(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function Tt(e,t){return e?ie(Object.create(null),e,t):t}function Ur(e,t){return e?A(e)&&A(t)?[...new Set([...e,...t])]:ie(Object.create(null),Hr(e),Hr(t??{})):t}function ll(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=pe(e[r],t[r]);return n}function ms(){return{app:null,config:{isNativeTag:Ys,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cl=0;function al(e,t){return function(r,i=null){$(r)||(r=ie({},r)),i!=null&&!G(i)&&(i=null);const s=ms(),o=new WeakSet,l=[];let c=!1;const d=s.app={_uid:cl++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Kl,get config(){return s.config},set config(u){},use(u,...p){return o.has(u)||(u&&$(u.install)?(o.add(u),u.install(d,...p)):$(u)&&(o.add(u),u(d,...p))),d},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),d},component(u,p){return p?(s.components[u]=p,d):s.components[u]},directive(u,p){return p?(s.directives[u]=p,d):s.directives[u]},mount(u,p,m){if(!c){const C=d._ceVNode||ee(r,i);return C.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),e(C,u,m),c=!0,d._container=u,u.__vue_app__=d,In(C.component)}},onUnmount(u){l.push(u)},unmount(){c&&(Me(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,p){return s.provides[u]=p,d},runWithContext(u){const p=_t;_t=d;try{return u()}finally{_t=p}}};return d}}let _t=null;function ul(e,t){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[e]=t}}function en(e,t,n=!1){const r=ue||we;if(r||_t){const i=_t?_t._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&$(t)?t.call(r&&r.proxy):t}}const vs={},bs=()=>Object.create(vs),ys=e=>Object.getPrototypeOf(e)===vs;function fl(e,t,n,r=!1){const i={},s=bs();e.propsDefaults=Object.create(null),_s(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Ao(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function dl(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,l=D(i),[c]=e.propsOptions;let d=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let m=u[p];if(Tn(e.emitsOptions,m))continue;const C=t[m];if(c)if(N(s,m))C!==s[m]&&(s[m]=C,d=!0);else{const I=Xe(m);i[I]=sr(c,l,I,C,e,!1)}else C!==s[m]&&(s[m]=C,d=!0)}}}else{_s(e,t,i,s)&&(d=!0);let u;for(const p in l)(!t||!N(t,p)&&((u=dt(p))===p||!N(t,u)))&&(c?n&&(n[p]!==void 0||n[u]!==void 0)&&(i[p]=sr(c,l,p,void 0,e,!0)):delete i[p]);if(s!==l)for(const p in s)(!t||!N(t,p))&&(delete s[p],d=!0)}d&&Ve(e.attrs,"set","")}function _s(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,l;if(t)for(let c in t){if(It(c))continue;const d=t[c];let u;i&&N(i,u=Xe(c))?!s||!s.includes(u)?n[u]=d:(l||(l={}))[u]=d:Tn(e.emitsOptions,c)||(!(c in r)||d!==r[c])&&(r[c]=d,o=!0)}if(s){const c=D(n),d=l||z;for(let u=0;u<s.length;u++){const p=s[u];n[p]=sr(i,c,p,d[p],e,!N(d,p))}}return o}function sr(e,t,n,r,i,s){const o=e[n];if(o!=null){const l=N(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&$(c)){const{propsDefaults:d}=i;if(n in d)r=d[n];else{const u=Wt(i);r=d[n]=c.call(null,t),u()}}else r=c;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===dt(n))&&(r=!0))}return r}const pl=new WeakMap;function Ss(e,t,n=!1){const r=n?pl:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},l=[];let c=!1;if(!$(e)){const u=p=>{c=!0;const[m,C]=Ss(p,t,!0);ie(o,m),C&&l.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return G(e)&&r.set(e,gt),gt;if(A(s))for(let u=0;u<s.length;u++){const p=Xe(s[u]);zr(p)&&(o[p]=z)}else if(s)for(const u in s){const p=Xe(u);if(zr(p)){const m=s[u],C=o[p]=A(m)||$(m)?{type:m}:ie({},m),I=C.type;let E=!1,Y=!0;if(A(I))for(let L=0;L<I.length;++L){const H=I[L],B=$(H)&&H.name;if(B==="Boolean"){E=!0;break}else B==="String"&&(Y=!1)}else E=$(I)&&I.name==="Boolean";C[0]=E,C[1]=Y,(E||N(C,"default"))&&l.push(p)}}const d=[o,l];return G(e)&&r.set(e,d),d}function zr(e){return e[0]!=="$"&&!It(e)}const Cs=e=>e[0]==="_"||e==="$stable",Tr=e=>A(e)?e.map(Re):[Re(e)],hl=(e,t,n)=>{if(t._n)return t;const r=is((...i)=>Tr(t(...i)),n);return r._c=!1,r},ws=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Cs(i))continue;const s=e[i];if($(s))t[i]=hl(i,s,r);else if(s!=null){const o=Tr(s);t[i]=()=>o}}},xs=(e,t)=>{const n=Tr(t);e.slots.default=()=>n},Os=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},gl=(e,t,n)=>{const r=e.slots=bs();if(e.vnode.shapeFlag&32){const i=t._;i?(Os(r,t,n),n&&Ai(r,"_",i,!0)):ws(t,r)}else t&&xs(e,t)},ml=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=z;if(r.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:Os(i,t,n):(s=!t.$stable,ws(t,i)),o=t}else t&&(xs(e,t),o={default:1});if(s)for(const l in i)!Cs(l)&&o[l]==null&&delete i[l]},_e=Al;function vl(e){return bl(e)}function bl(e,t){const n=yn();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:c,setText:d,setElementText:u,parentNode:p,nextSibling:m,setScopeId:C=Le,insertStaticContent:I}=e,E=(a,f,h,b=null,g=null,v=null,w=void 0,S=null,_=!!f.dynamicChildren)=>{if(a===f)return;a&&!at(a,f)&&(b=Gt(a),Ie(a,g,v,!0),a=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null);const{type:y,ref:M,shapeFlag:x}=f;switch(y){case Mn:Y(a,f,h,b);break;case ve:L(a,f,h,b);break;case Vn:a==null&&H(f,h,b,w);break;case Ce:O(a,f,h,b,g,v,w,S,_);break;default:x&1?W(a,f,h,b,g,v,w,S,_):x&6?J(a,f,h,b,g,v,w,S,_):(x&64||x&128)&&y.process(a,f,h,b,g,v,w,S,_,Ct)}M!=null&&g&&an(M,a&&a.ref,v,f||a,!f)},Y=(a,f,h,b)=>{if(a==null)r(f.el=l(f.children),h,b);else{const g=f.el=a.el;f.children!==a.children&&d(g,f.children)}},L=(a,f,h,b)=>{a==null?r(f.el=c(f.children||""),h,b):f.el=a.el},H=(a,f,h,b)=>{[a.el,a.anchor]=I(a.children,f,h,b,a.el,a.anchor)},B=({el:a,anchor:f},h,b)=>{let g;for(;a&&a!==f;)g=m(a),r(a,h,b),a=g;r(f,h,b)},P=({el:a,anchor:f})=>{let h;for(;a&&a!==f;)h=m(a),i(a),a=h;i(f)},W=(a,f,h,b,g,v,w,S,_)=>{f.type==="svg"?w="svg":f.type==="math"&&(w="mathml"),a==null?te(f,h,b,g,v,w,S,_):F(a,f,g,v,w,S,_)},te=(a,f,h,b,g,v,w,S)=>{let _,y;const{props:M,shapeFlag:x,transition:T,dirs:j}=a;if(_=a.el=o(a.type,v,M&&M.is,M),x&8?u(_,a.children):x&16&&ge(a.children,_,null,b,g,Bn(a,v),w,S),j&&it(a,null,b,"created"),de(_,a,a.scopeId,w,b),M){for(const K in M)K!=="value"&&!It(K)&&s(_,K,null,M[K],v,b);"value"in M&&s(_,"value",null,M.value,v),(y=M.onVnodeBeforeMount)&&$e(y,b,a)}j&&it(a,null,b,"beforeMount");const R=yl(g,T);R&&T.beforeEnter(_),r(_,f,h),((y=M&&M.onVnodeMounted)||R||j)&&_e(()=>{y&&$e(y,b,a),R&&T.enter(_),j&&it(a,null,b,"mounted")},g)},de=(a,f,h,b,g)=>{if(h&&C(a,h),b)for(let v=0;v<b.length;v++)C(a,b[v]);if(g){let v=g.subTree;if(f===v||Es(v.type)&&(v.ssContent===f||v.ssFallback===f)){const w=g.vnode;de(a,w,w.scopeId,w.slotScopeIds,g.parent)}}},ge=(a,f,h,b,g,v,w,S,_=0)=>{for(let y=_;y<a.length;y++){const M=a[y]=S?ke(a[y]):Re(a[y]);E(null,M,f,h,b,g,v,w,S)}},F=(a,f,h,b,g,v,w)=>{const S=f.el=a.el;let{patchFlag:_,dynamicChildren:y,dirs:M}=f;_|=a.patchFlag&16;const x=a.props||z,T=f.props||z;let j;if(h&&st(h,!1),(j=T.onVnodeBeforeUpdate)&&$e(j,h,f,a),M&&it(f,a,h,"beforeUpdate"),h&&st(h,!0),(x.innerHTML&&T.innerHTML==null||x.textContent&&T.textContent==null)&&u(S,""),y?U(a.dynamicChildren,y,S,h,b,Bn(f,g),v):w||q(a,f,S,null,h,b,Bn(f,g),v,!1),_>0){if(_&16)X(S,x,T,h,g);else if(_&2&&x.class!==T.class&&s(S,"class",null,T.class,g),_&4&&s(S,"style",x.style,T.style,g),_&8){const R=f.dynamicProps;for(let K=0;K<R.length;K++){const V=R[K],be=x[V],me=T[V];(me!==be||V==="value")&&s(S,V,be,me,g,h)}}_&1&&a.children!==f.children&&u(S,f.children)}else!w&&y==null&&X(S,x,T,h,g);((j=T.onVnodeUpdated)||M)&&_e(()=>{j&&$e(j,h,f,a),M&&it(f,a,h,"updated")},b)},U=(a,f,h,b,g,v,w)=>{for(let S=0;S<f.length;S++){const _=a[S],y=f[S],M=_.el&&(_.type===Ce||!at(_,y)||_.shapeFlag&70)?p(_.el):h;E(_,y,M,null,b,g,v,w,!0)}},X=(a,f,h,b,g)=>{if(f!==h){if(f!==z)for(const v in f)!It(v)&&!(v in h)&&s(a,v,f[v],null,g,b);for(const v in h){if(It(v))continue;const w=h[v],S=f[v];w!==S&&v!=="value"&&s(a,v,S,w,g,b)}"value"in h&&s(a,"value",f.value,h.value,g)}},O=(a,f,h,b,g,v,w,S,_)=>{const y=f.el=a?a.el:l(""),M=f.anchor=a?a.anchor:l("");let{patchFlag:x,dynamicChildren:T,slotScopeIds:j}=f;j&&(S=S?S.concat(j):j),a==null?(r(y,h,b),r(M,h,b),ge(f.children||[],h,M,g,v,w,S,_)):x>0&&x&64&&T&&a.dynamicChildren?(U(a.dynamicChildren,T,h,g,v,w,S),(f.key!=null||g&&f===g.subTree)&&Ps(a,f,!0)):q(a,f,h,M,g,v,w,S,_)},J=(a,f,h,b,g,v,w,S,_)=>{f.slotScopeIds=S,a==null?f.shapeFlag&512?g.ctx.activate(f,h,b,w,_):oe(f,h,b,g,v,w,_):De(a,f,_)},oe=(a,f,h,b,g,v,w)=>{const S=a.component=Hl(a,b,g);if(xn(a)&&(S.ctx.renderer=Ct),Vl(S,!1,w),S.asyncDep){if(g&&g.registerDep(S,ne,w),!a.el){const _=S.subTree=ee(ve);L(null,_,f,h)}}else ne(S,a,f,h,g,v,w)},De=(a,f,h)=>{const b=f.component=a.component;if(Ml(a,f,h))if(b.asyncDep&&!b.asyncResolved){Z(b,f,h);return}else b.next=f,b.update();else f.el=a.el,b.vnode=f},ne=(a,f,h,b,g,v,w)=>{const S=()=>{if(a.isMounted){let{next:x,bu:T,u:j,parent:R,vnode:K}=a;{const Ee=Ts(a);if(Ee){x&&(x.el=K.el,Z(a,x,w)),Ee.asyncDep.then(()=>{a.isUnmounted||S()});return}}let V=x,be;st(a,!1),x?(x.el=K.el,Z(a,x,w)):x=K,T&&$n(T),(be=x.props&&x.props.onVnodeBeforeUpdate)&&$e(be,R,x,K),st(a,!0);const me=qr(a),Ae=a.subTree;a.subTree=me,E(Ae,me,p(Ae.el),Gt(Ae),a,g,v),x.el=me.el,V===null&&Il(a,me.el),j&&_e(j,g),(be=x.props&&x.props.onVnodeUpdated)&&_e(()=>$e(be,R,x,K),g)}else{let x;const{el:T,props:j}=f,{bm:R,m:K,parent:V,root:be,type:me}=a,Ae=jt(f);st(a,!1),R&&$n(R),!Ae&&(x=j&&j.onVnodeBeforeMount)&&$e(x,V,f),st(a,!0);{be.ce&&be.ce._injectChildStyle(me);const Ee=a.subTree=qr(a);E(null,Ee,h,b,a,g,v),f.el=Ee.el}if(K&&_e(K,g),!Ae&&(x=j&&j.onVnodeMounted)){const Ee=f;_e(()=>$e(x,V,Ee),g)}(f.shapeFlag&256||V&&jt(V.vnode)&&V.vnode.shapeFlag&256)&&a.a&&_e(a.a,g),a.isMounted=!0,f=h=b=null}};a.scope.on();const _=a.effect=new Fi(S);a.scope.off();const y=a.update=_.run.bind(_),M=a.job=_.runIfDirty.bind(_);M.i=a,M.id=a.uid,_.scheduler=()=>Or(M),st(a,!0),y()},Z=(a,f,h)=>{f.component=a;const b=a.vnode.props;a.vnode=f,a.next=null,dl(a,f.props,b,h),ml(a,f.children,h),et(),Lr(a),tt()},q=(a,f,h,b,g,v,w,S,_=!1)=>{const y=a&&a.children,M=a?a.shapeFlag:0,x=f.children,{patchFlag:T,shapeFlag:j}=f;if(T>0){if(T&128){kt(y,x,h,b,g,v,w,S,_);return}else if(T&256){nt(y,x,h,b,g,v,w,S,_);return}}j&8?(M&16&&St(y,g,v),x!==y&&u(h,x)):M&16?j&16?kt(y,x,h,b,g,v,w,S,_):St(y,g,v,!0):(M&8&&u(h,""),j&16&&ge(x,h,b,g,v,w,S,_))},nt=(a,f,h,b,g,v,w,S,_)=>{a=a||gt,f=f||gt;const y=a.length,M=f.length,x=Math.min(y,M);let T;for(T=0;T<x;T++){const j=f[T]=_?ke(f[T]):Re(f[T]);E(a[T],j,h,null,g,v,w,S,_)}y>M?St(a,g,v,!0,!1,x):ge(f,h,b,g,v,w,S,_,x)},kt=(a,f,h,b,g,v,w,S,_)=>{let y=0;const M=f.length;let x=a.length-1,T=M-1;for(;y<=x&&y<=T;){const j=a[y],R=f[y]=_?ke(f[y]):Re(f[y]);if(at(j,R))E(j,R,h,null,g,v,w,S,_);else break;y++}for(;y<=x&&y<=T;){const j=a[x],R=f[T]=_?ke(f[T]):Re(f[T]);if(at(j,R))E(j,R,h,null,g,v,w,S,_);else break;x--,T--}if(y>x){if(y<=T){const j=T+1,R=j<M?f[j].el:b;for(;y<=T;)E(null,f[y]=_?ke(f[y]):Re(f[y]),h,R,g,v,w,S,_),y++}}else if(y>T)for(;y<=x;)Ie(a[y],g,v,!0),y++;else{const j=y,R=y,K=new Map;for(y=R;y<=T;y++){const ye=f[y]=_?ke(f[y]):Re(f[y]);ye.key!=null&&K.set(ye.key,y)}let V,be=0;const me=T-R+1;let Ae=!1,Ee=0;const wt=new Array(me);for(y=0;y<me;y++)wt[y]=0;for(y=j;y<=x;y++){const ye=a[y];if(be>=me){Ie(ye,g,v,!0);continue}let je;if(ye.key!=null)je=K.get(ye.key);else for(V=R;V<=T;V++)if(wt[V-R]===0&&at(ye,f[V])){je=V;break}je===void 0?Ie(ye,g,v,!0):(wt[je-R]=y+1,je>=Ee?Ee=je:Ae=!0,E(ye,f[je],h,null,g,v,w,S,_),be++)}const Er=Ae?_l(wt):gt;for(V=Er.length-1,y=me-1;y>=0;y--){const ye=R+y,je=f[ye],jr=ye+1<M?f[ye+1].el:b;wt[y]===0?E(null,je,h,jr,g,v,w,S,_):Ae&&(V<0||y!==Er[V]?rt(je,h,jr,2):V--)}}},rt=(a,f,h,b,g=null)=>{const{el:v,type:w,transition:S,children:_,shapeFlag:y}=a;if(y&6){rt(a.component.subTree,f,h,b);return}if(y&128){a.suspense.move(f,h,b);return}if(y&64){w.move(a,f,h,Ct);return}if(w===Ce){r(v,f,h);for(let x=0;x<_.length;x++)rt(_[x],f,h,b);r(a.anchor,f,h);return}if(w===Vn){B(a,f,h);return}if(b!==2&&y&1&&S)if(b===0)S.beforeEnter(v),r(v,f,h),_e(()=>S.enter(v),g);else{const{leave:x,delayLeave:T,afterLeave:j}=S,R=()=>r(v,f,h),K=()=>{x(v,()=>{R(),j&&j()})};T?T(v,R,K):K()}else r(v,f,h)},Ie=(a,f,h,b=!1,g=!1)=>{const{type:v,props:w,ref:S,children:_,dynamicChildren:y,shapeFlag:M,patchFlag:x,dirs:T,cacheIndex:j}=a;if(x===-2&&(g=!1),S!=null&&an(S,null,h,a,!0),j!=null&&(f.renderCache[j]=void 0),M&256){f.ctx.deactivate(a);return}const R=M&1&&T,K=!jt(a);let V;if(K&&(V=w&&w.onVnodeBeforeUnmount)&&$e(V,f,a),M&6)Js(a.component,h,b);else{if(M&128){a.suspense.unmount(h,b);return}R&&it(a,null,f,"beforeUnmount"),M&64?a.type.remove(a,f,h,Ct,b):y&&!y.hasOnce&&(v!==Ce||x>0&&x&64)?St(y,f,h,!1,!0):(v===Ce&&x&384||!g&&M&16)&&St(_,f,h),b&&Ir(a)}(K&&(V=w&&w.onVnodeUnmounted)||R)&&_e(()=>{V&&$e(V,f,a),R&&it(a,null,f,"unmounted")},h)},Ir=a=>{const{type:f,el:h,anchor:b,transition:g}=a;if(f===Ce){Gs(h,b);return}if(f===Vn){P(a);return}const v=()=>{i(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(a.shapeFlag&1&&g&&!g.persisted){const{leave:w,delayLeave:S}=g,_=()=>w(h,v);S?S(a.el,v,_):_()}else v()},Gs=(a,f)=>{let h;for(;a!==f;)h=m(a),i(a),a=h;i(f)},Js=(a,f,h)=>{const{bum:b,scope:g,job:v,subTree:w,um:S,m:_,a:y}=a;Wr(_),Wr(y),b&&$n(b),g.stop(),v&&(v.flags|=8,Ie(w,a,f,h)),S&&_e(S,f),_e(()=>{a.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},St=(a,f,h,b=!1,g=!1,v=0)=>{for(let w=v;w<a.length;w++)Ie(a[w],f,h,b,g)},Gt=a=>{if(a.shapeFlag&6)return Gt(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const f=m(a.anchor||a.el),h=f&&f[Vo];return h?m(h):f};let En=!1;const Ar=(a,f,h)=>{a==null?f._vnode&&Ie(f._vnode,null,null,!0):E(f._vnode||null,a,f,null,null,null,h),f._vnode=a,En||(En=!0,Lr(),ts(),En=!1)},Ct={p:E,um:Ie,m:rt,r:Ir,mt:oe,mc:ge,pc:q,pbc:U,n:Gt,o:e};return{render:Ar,hydrate:void 0,createApp:al(Ar)}}function Bn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function st({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function yl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ps(e,t,n=!1){const r=e.children,i=t.children;if(A(r)&&A(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=ke(i[s]),l.el=o.el),!n&&l.patchFlag!==-2&&Ps(o,l)),l.type===Mn&&(l.el=o.el)}}function _l(e){const t=e.slice(),n=[0];let r,i,s,o,l;const c=e.length;for(r=0;r<c;r++){const d=e[r];if(d!==0){if(i=n[n.length-1],e[i]<d){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)l=s+o>>1,e[n[l]]<d?s=l+1:o=l;d<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function Ts(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ts(t)}function Wr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Sl=Symbol.for("v-scx"),Cl=()=>en(Sl);function Je(e,t,n){return Ms(e,t,n)}function Ms(e,t,n=z){const{immediate:r,deep:i,flush:s,once:o}=n,l=ie({},n),c=t&&r||!t&&s!=="post";let d;if(Bt){if(s==="sync"){const C=Cl();d=C.__watcherHandles||(C.__watcherHandles=[])}else if(!c){const C=()=>{};return C.stop=Le,C.resume=Le,C.pause=Le,C}}const u=ue;l.call=(C,I,E)=>Me(C,u,I,E);let p=!1;s==="post"?l.scheduler=C=>{_e(C,u&&u.suspense)}:s!=="sync"&&(p=!0,l.scheduler=(C,I)=>{I?C():Or(C)}),l.augmentJob=C=>{t&&(C.flags|=4),p&&(C.flags|=2,u&&(C.id=u.uid,C.i=u))};const m=Do(e,t,l);return Bt&&(d?d.push(m):c&&m()),m}function wl(e,t,n){const r=this.proxy,i=Q(e)?e.includes(".")?Is(r,e):()=>r[e]:e.bind(r,r);let s;$(t)?s=t:(s=t.handler,n=t);const o=Wt(this),l=Ms(i,s.bind(r),n);return o(),l}function Is(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const xl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Xe(t)}Modifiers`]||e[`${dt(t)}Modifiers`];function Ol(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||z;let i=n;const s=t.startsWith("update:"),o=s&&xl(r,t.slice(7));o&&(o.trim&&(i=n.map(u=>Q(u)?u.trim():u)),o.number&&(i=n.map(to)));let l,c=r[l=jn(t)]||r[l=jn(Xe(t))];!c&&s&&(c=r[l=jn(dt(t))]),c&&Me(c,e,6,i);const d=r[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Me(d,e,6,i)}}function As(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},l=!1;if(!$(e)){const c=d=>{const u=As(d,t,!0);u&&(l=!0,ie(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!l?(G(e)&&r.set(e,null),null):(A(s)?s.forEach(c=>o[c]=null):ie(o,s),G(e)&&r.set(e,o),o)}function Tn(e,t){return!e||!mn(t)?!1:(t=t.slice(2).replace(/Once$/,""),N(e,t[0].toLowerCase()+t.slice(1))||N(e,dt(t))||N(e,t))}function qr(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:d,renderCache:u,props:p,data:m,setupState:C,ctx:I,inheritAttrs:E}=e,Y=cn(e);let L,H;try{if(n.shapeFlag&4){const P=i||r,W=P;L=Re(d.call(W,P,u,p,C,m,I)),H=l}else{const P=t;L=Re(P.length>1?P(p,{attrs:l,slots:o,emit:c}):P(p,null)),H=t.props?l:Pl(l)}}catch(P){Ft.length=0,Cn(P,e,1),L=ee(ve)}let B=L;if(H&&E!==!1){const P=Object.keys(H),{shapeFlag:W}=B;P.length&&W&7&&(s&&P.some(fr)&&(H=Tl(H,s)),B=Ze(B,H,!1,!0))}return n.dirs&&(B=Ze(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Nt(B,n.transition),L=B,cn(Y),L}const Pl=e=>{let t;for(const n in e)(n==="class"||n==="style"||mn(n))&&((t||(t={}))[n]=e[n]);return t},Tl=(e,t)=>{const n={};for(const r in e)(!fr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ml(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:l,patchFlag:c}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Kr(r,o,d):!!o;if(c&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const m=u[p];if(o[m]!==r[m]&&!Tn(d,m))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Kr(r,o,d):!0:!!o;return!1}function Kr(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Tn(n,s))return!0}return!1}function Il({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Es=e=>e.__isSuspense;function Al(e,t){t&&t.pendingBranch?A(e)?t.effects.push(...e):t.effects.push(e):Bo(e)}const Ce=Symbol.for("v-fgt"),Mn=Symbol.for("v-txt"),ve=Symbol.for("v-cmt"),Vn=Symbol.for("v-stc"),Ft=[];let xe=null;function re(e=!1){Ft.push(xe=e?null:[])}function El(){Ft.pop(),xe=Ft[Ft.length-1]||null}let Ht=1;function kr(e,t=!1){Ht+=e,e<0&&xe&&t&&(xe.hasOnce=!0)}function js(e){return e.dynamicChildren=Ht>0?xe||gt:null,El(),Ht>0&&xe&&xe.push(e),e}function se(e,t,n,r,i,s){return js(le(e,t,n,r,i,s,!0))}function jl(e,t,n,r,i){return js(ee(e,t,n,r,i,!0))}function fn(e){return e?e.__v_isVNode===!0:!1}function at(e,t){return e.type===t.type&&e.key===t.key}const $s=({key:e})=>e??null,tn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||fe(e)||$(e)?{i:we,r:e,k:t,f:!!n}:e:null);function le(e,t=null,n=null,r=0,i=null,s=e===Ce?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$s(t),ref:t&&tn(t),scopeId:rs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:we};return l?(Mr(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Q(n)?8:16),Ht>0&&!o&&xe&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&xe.push(c),c}const ee=$l;function $l(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===tl)&&(e=ve),fn(e)){const l=Ze(e,t,!0);return n&&Mr(l,n),Ht>0&&!s&&xe&&(l.shapeFlag&6?xe[xe.indexOf(e)]=l:xe.push(l)),l.patchFlag=-2,l}if(ql(e)&&(e=e.__vccOpts),t){t=Fl(t);let{class:l,style:c}=t;l&&!Q(l)&&(t.class=gr(l)),G(c)&&(wr(c)&&!A(c)&&(c=ie({},c)),t.style=hr(c))}const o=Q(e)?1:Es(e)?128:ss(e)?64:G(e)?4:$(e)?2:0;return le(e,t,n,r,i,o,s,!0)}function Fl(e){return e?wr(e)||ys(e)?ie({},e):e:null}function Ze(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:l,transition:c}=e,d=t?Ll(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&$s(d),ref:t&&t.ref?n&&s?A(s)?s.concat(tn(t)):[s,tn(t)]:tn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ze(e.ssContent),ssFallback:e.ssFallback&&Ze(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Nt(u,c.clone(u)),u}function Rl(e=" ",t=0){return ee(Mn,null,e,t)}function nn(e="",t=!1){return t?(re(),jl(ve,null,e)):ee(ve,null,e)}function Re(e){return e==null||typeof e=="boolean"?ee(ve):A(e)?ee(Ce,null,e.slice()):fn(e)?ke(e):ee(Mn,null,String(e))}function ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ze(e)}function Mr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(A(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Mr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!ys(t)?t._ctx=we:i===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[Rl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ll(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=gr([t.class,r.class]));else if(i==="style")t.style=hr([t.style,r.style]);else if(mn(i)){const s=t[i],o=r[i];o&&s!==o&&!(A(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function $e(e,t,n,r=null){Me(e,t,7,[n,r])}const Dl=ms();let Nl=0;function Hl(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Dl,s={uid:Nl++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ao(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ss(r,i),emitsOptions:As(r,i),emit:null,emitted:null,propsDefaults:z,inheritAttrs:r.inheritAttrs,ctx:z,data:z,props:z,attrs:z,slots:z,refs:z,setupState:z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ol.bind(null,s),e.ce&&e.ce(s),s}let ue=null;const Bl=()=>ue||we;let dn,or;{const e=yn(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};dn=t("__VUE_INSTANCE_SETTERS__",n=>ue=n),or=t("__VUE_SSR_SETTERS__",n=>Bt=n)}const Wt=e=>{const t=ue;return dn(e),e.scope.on(),()=>{e.scope.off(),dn(t)}},Gr=()=>{ue&&ue.scope.off(),dn(null)};function Fs(e){return e.vnode.shapeFlag&4}let Bt=!1;function Vl(e,t=!1,n=!1){t&&or(t);const{props:r,children:i}=e.vnode,s=Fs(e);fl(e,r,s,t),gl(e,i,n);const o=s?Ul(e,t):void 0;return t&&or(!1),o}function Ul(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,nl);const{setup:r}=n;if(r){et();const i=e.setupContext=r.length>1?Wl(e):null,s=Wt(e),o=zt(r,e,0,[e.props,i]),l=Pi(o);if(tt(),s(),(l||e.sp)&&!jt(e)&&fs(e),l){if(o.then(Gr,Gr),t)return o.then(c=>{Jr(e,c)}).catch(c=>{Cn(c,e,0)});e.asyncDep=o}else Jr(e,o)}else Rs(e)}function Jr(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Zi(t)),Rs(e)}function Rs(e,t,n){const r=e.type;e.render||(e.render=r.render||Le);{const i=Wt(e);et();try{rl(e)}finally{tt(),i()}}}const zl={get(e,t){return ce(e,"get",""),e[t]}};function Wl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,zl),slots:e.slots,emit:e.emit,expose:t}}function In(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Zi(Eo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}})):e.proxy}function ql(e){return $(e)&&"__vccOpts"in e}const pn=(e,t)=>Ro(e,t,Bt);function rn(e,t,n){const r=arguments.length;return r===2?G(t)&&!A(t)?fn(t)?ee(e,null,[t]):ee(e,t):ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fn(n)&&(n=[n]),ee(e,t,n))}const Kl="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lr;const Yr=typeof window<"u"&&window.trustedTypes;if(Yr)try{lr=Yr.createPolicy("vue",{createHTML:e=>e})}catch{}const Ls=lr?e=>lr.createHTML(e):e=>e,kl="http://www.w3.org/2000/svg",Gl="http://www.w3.org/1998/Math/MathML",Be=typeof document<"u"?document:null,Xr=Be&&Be.createElement("template"),Jl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?Be.createElementNS(kl,e):t==="mathml"?Be.createElementNS(Gl,e):n?Be.createElement(e,{is:n}):Be.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Be.createTextNode(e),createComment:e=>Be.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Be.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Xr.innerHTML=Ls(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Xr.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},We="transition",Ot="animation",Vt=Symbol("_vtc"),Ds={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Yl=ie({},os,Ds),Xl=e=>(e.displayName="Transition",e.props=Yl,e),Zl=Xl((e,{slots:t})=>rn(Wo,Ql(e),t)),ot=(e,t=[])=>{A(e)?e.forEach(n=>n(...t)):e&&e(...t)},Zr=e=>e?A(e)?e.some(t=>t.length>1):e.length>1:!1;function Ql(e){const t={};for(const O in e)O in Ds||(t[O]=e[O]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:d=o,appearToClass:u=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:C=`${n}-leave-to`}=e,I=ec(i),E=I&&I[0],Y=I&&I[1],{onBeforeEnter:L,onEnter:H,onEnterCancelled:B,onLeave:P,onLeaveCancelled:W,onBeforeAppear:te=L,onAppear:de=H,onAppearCancelled:ge=B}=t,F=(O,J,oe,De)=>{O._enterCancelled=De,lt(O,J?u:l),lt(O,J?d:o),oe&&oe()},U=(O,J)=>{O._isLeaving=!1,lt(O,p),lt(O,C),lt(O,m),J&&J()},X=O=>(J,oe)=>{const De=O?de:H,ne=()=>F(J,O,oe);ot(De,[J,ne]),Qr(()=>{lt(J,O?c:s),He(J,O?u:l),Zr(De)||ei(J,r,E,ne)})};return ie(t,{onBeforeEnter(O){ot(L,[O]),He(O,s),He(O,o)},onBeforeAppear(O){ot(te,[O]),He(O,c),He(O,d)},onEnter:X(!1),onAppear:X(!0),onLeave(O,J){O._isLeaving=!0;const oe=()=>U(O,J);He(O,p),O._enterCancelled?(He(O,m),ri()):(ri(),He(O,m)),Qr(()=>{O._isLeaving&&(lt(O,p),He(O,C),Zr(P)||ei(O,r,Y,oe))}),ot(P,[O,oe])},onEnterCancelled(O){F(O,!1,void 0,!0),ot(B,[O])},onAppearCancelled(O){F(O,!0,void 0,!0),ot(ge,[O])},onLeaveCancelled(O){U(O),ot(W,[O])}})}function ec(e){if(e==null)return null;if(G(e))return[Un(e.enter),Un(e.leave)];{const t=Un(e);return[t,t]}}function Un(e){return no(e)}function He(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Vt]||(e[Vt]=new Set)).add(t)}function lt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Vt];n&&(n.delete(t),n.size||(e[Vt]=void 0))}function Qr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let tc=0;function ei(e,t,n,r){const i=e._endId=++tc,s=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:l,propCount:c}=nc(e,t);if(!o)return r();const d=o+"end";let u=0;const p=()=>{e.removeEventListener(d,m),s()},m=C=>{C.target===e&&++u>=c&&p()};setTimeout(()=>{u<c&&p()},l+1),e.addEventListener(d,m)}function nc(e,t){const n=window.getComputedStyle(e),r=I=>(n[I]||"").split(", "),i=r(`${We}Delay`),s=r(`${We}Duration`),o=ti(i,s),l=r(`${Ot}Delay`),c=r(`${Ot}Duration`),d=ti(l,c);let u=null,p=0,m=0;t===We?o>0&&(u=We,p=o,m=s.length):t===Ot?d>0&&(u=Ot,p=d,m=c.length):(p=Math.max(o,d),u=p>0?o>d?We:Ot:null,m=u?u===We?s.length:c.length:0);const C=u===We&&/\b(transform|all)(,|$)/.test(r(`${We}Property`).toString());return{type:u,timeout:p,propCount:m,hasTransform:C}}function ti(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ni(n)+ni(e[r])))}function ni(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ri(){return document.body.offsetHeight}function rc(e,t,n){const r=e[Vt];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const hn=Symbol("_vod"),Ns=Symbol("_vsh"),ii={beforeMount(e,{value:t},{transition:n}){e[hn]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Pt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Pt(e,!0),r.enter(e)):r.leave(e,()=>{Pt(e,!1)}):Pt(e,t))},beforeUnmount(e,{value:t}){Pt(e,t)}};function Pt(e,t){e.style.display=t?e[hn]:"none",e[Ns]=!t}const ic=Symbol(""),sc=/(^|;)\s*display\s*:/;function oc(e,t,n){const r=e.style,i=Q(n);let s=!1;if(n&&!i){if(t)if(Q(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&sn(r,l,"")}else for(const o in t)n[o]==null&&sn(r,o,"");for(const o in n)o==="display"&&(s=!0),sn(r,o,n[o])}else if(i){if(t!==n){const o=r[ic];o&&(n+=";"+o),r.cssText=n,s=sc.test(n)}}else t&&e.removeAttribute("style");hn in e&&(e[hn]=s?r.display:"",e[Ns]&&(r.display="none"))}const si=/\s*!important$/;function sn(e,t,n){if(A(n))n.forEach(r=>sn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=lc(e,t);si.test(n)?e.setProperty(dt(r),n.replace(si,""),"important"):e[r]=n}}const oi=["Webkit","Moz","ms"],zn={};function lc(e,t){const n=zn[t];if(n)return n;let r=Xe(t);if(r!=="filter"&&r in e)return zn[t]=r;r=Ii(r);for(let i=0;i<oi.length;i++){const s=oi[i]+r;if(s in e)return zn[t]=s}return t}const li="http://www.w3.org/1999/xlink";function ci(e,t,n,r,i,s=co(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(li,t.slice(6,t.length)):e.setAttributeNS(li,t,n):n==null||s&&!Ei(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Qe(n)?String(n):n)}function ai(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ls(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ei(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function cc(e,t,n,r){e.addEventListener(t,n,r)}function ac(e,t,n,r){e.removeEventListener(t,n,r)}const ui=Symbol("_vei");function uc(e,t,n,r,i=null){const s=e[ui]||(e[ui]={}),o=s[t];if(r&&o)o.value=r;else{const[l,c]=fc(t);if(r){const d=s[t]=hc(r,i);cc(e,l,d,c)}else o&&(ac(e,l,o,c),s[t]=void 0)}}const fi=/(?:Once|Passive|Capture)$/;function fc(e){let t;if(fi.test(e)){t={};let r;for(;r=e.match(fi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):dt(e.slice(2)),t]}let Wn=0;const dc=Promise.resolve(),pc=()=>Wn||(dc.then(()=>Wn=0),Wn=Date.now());function hc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(gc(r,n.value),t,5,[r])};return n.value=e,n.attached=pc(),n}function gc(e,t){if(A(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const di=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,mc=(e,t,n,r,i,s)=>{const o=i==="svg";t==="class"?rc(e,r,o):t==="style"?oc(e,n,r):mn(t)?fr(t)||uc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):vc(e,t,r,o))?(ai(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ci(e,t,r,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Q(r))?ai(e,Xe(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ci(e,t,r,o))};function vc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&di(t)&&$(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return di(t)&&Q(n)?!1:t in e}const bc=ie({patchProp:mc},Jl);let pi;function yc(){return pi||(pi=vl(bc))}const _c=(...e)=>{const t=yc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Cc(r);if(!i)return;const s=t._component;!$(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Sc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Sc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Cc(e){return Q(e)?document.querySelector(e):e}function wc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hi(Object(n),!0).forEach(function(r){wc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xc(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Oc(e,t){if(e==null)return{};var n=xc(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Pc(e,t){return Tc(e)||Mc(e,t)||Ic(e,t)||Ac()}function Tc(e){if(Array.isArray(e))return e}function Mc(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,i=!1,s=void 0;try{for(var o=e[Symbol.iterator](),l;!(r=(l=o.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}}function Ic(e,t){if(e){if(typeof e=="string")return mi(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mi(e,t)}}function mi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ac(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ec(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vi(Object(n),!0).forEach(function(r){Ec(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function Mt(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function gn(e){return{}.toString.call(e).includes("Object")}function $c(e){return!Object.keys(e).length}function Ut(e){return typeof e=="function"}function Fc(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Rc(e,t){return gn(t)||Ye("changeType"),Object.keys(t).some(function(n){return!Fc(e,n)})&&Ye("changeField"),t}function Lc(e){Ut(e)||Ye("selectorType")}function Dc(e){Ut(e)||gn(e)||Ye("handlerType"),gn(e)&&Object.values(e).some(function(t){return!Ut(t)})&&Ye("handlersType")}function Nc(e){e||Ye("initialIsRequired"),gn(e)||Ye("initialType"),$c(e)&&Ye("initialContent")}function Hc(e,t){throw new Error(e[t]||e.default)}var Bc={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ye=Mt(Hc)(Bc),Qt={changes:Rc,selector:Lc,handler:Dc,initial:Nc};function Vc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Qt.initial(e),Qt.handler(t);var n={current:e},r=Mt(Wc)(n,t),i=Mt(zc)(n),s=Mt(Qt.changes)(e),o=Mt(Uc)(n);function l(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return Qt.selector(d),d(n.current)}function c(d){jc(r,i,s,o)(d)}return[l,c]}function Uc(e,t){return Ut(t)?t(e.current):t}function zc(e,t){return e.current=bi(bi({},e.current),t),t}function Wc(e,t,n){return Ut(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var qc={create:Vc},Kc={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function kc(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Gc(e){return{}.toString.call(e).includes("Object")}function Jc(e){return e||yi("configIsRequired"),Gc(e)||yi("configType"),e.urls?(Yc(),{paths:{vs:e.urls.monacoBase}}):e}function Yc(){console.warn(Hs.deprecation)}function Xc(e,t){throw new Error(e[t]||e.default)}var Hs={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},yi=kc(Xc)(Hs),Zc={config:Jc},Qc=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,o){return o(s)},i)}};function Bs(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Bs(e[n],t[n]))}),gi(gi({},e),t)}var ea={type:"cancelation",msg:"operation is manually canceled"};function qn(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(ea):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var ta=qc.create({config:Kc,isInitialized:!1,resolve:null,reject:null,monaco:null}),Vs=Pc(ta,2),qt=Vs[0],An=Vs[1];function na(e){var t=Zc.config(e),n=t.monaco,r=Oc(t,["monaco"]);An(function(i){return{config:Bs(i.config,r),monaco:n}})}function ra(){var e=qt(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(An({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),qn(Kn);if(window.monaco&&window.monaco.editor)return Us(window.monaco),e.resolve(window.monaco),qn(Kn);Qc(ia,oa)(la)}return qn(Kn)}function ia(e){return document.body.appendChild(e)}function sa(e){var t=document.createElement("script");return e&&(t.src=e),t}function oa(e){var t=qt(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=sa("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function la(){var e=qt(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){Us(n),e.resolve(n)},function(n){e.reject(n)})}function Us(e){qt().monaco||An({monaco:e})}function ca(){return qt(function(e){var t=e.monaco;return t})}var Kn=new Promise(function(e,t){return An({resolve:e,reject:t})}),cr={config:na,init:ra,__getMonacoInstance:ca},aa=Object.defineProperty,ua=Object.defineProperties,fa=Object.getOwnPropertyDescriptors,_i=Object.getOwnPropertySymbols,da=Object.prototype.hasOwnProperty,pa=Object.prototype.propertyIsEnumerable,Si=(e,t,n)=>t in e?aa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kn=(e,t)=>{for(var n in t||(t={}))da.call(t,n)&&Si(e,n,t[n]);if(_i)for(var n of _i(t))pa.call(t,n)&&Si(e,n,t[n]);return e},ha=(e,t)=>ua(e,fa(t));const Gn={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function ga(e,t){const n=pn(()=>{const{width:i,height:s}=e;return ha(kn({},Gn.wrapper),{width:i,height:s})}),r=pn(()=>kn(kn({},Gn.fullWidth),!t.value&&Gn.hide));return{wrapperStyle:n,containerStyle:r}}function ma(){const e=Sn(cr.__getMonacoInstance()),t=Ji(!1);let n;return Pn(()=>{e.value||(n=cr.init(),n.then(i=>e.value=i).catch(i=>{(i==null?void 0:i.type)!=="cancelation"&&(t.value=!0,console.error("Monaco initialization error:",i))}))}),{monacoRef:e,unload:()=>n==null?void 0:n.cancel(),isLoadFailed:t}}function Ci(e){return typeof e=="function"?e():e}function ar(e){return e===void 0}function zs(e,t,n,r){return va(e,r)||ba(e,t,n,r)}function va(e,t){return e.editor.getModel(Ws(e,t))}function ba(e,t,n,r){return e.editor.createModel(t,n,r?Ws(e,r):void 0)}function Ws(e,t){return e.Uri.parse(t)}var ya=Object.defineProperty,wi=Object.getOwnPropertySymbols,_a=Object.prototype.hasOwnProperty,Sa=Object.prototype.propertyIsEnumerable,xi=(e,t,n)=>t in e?ya(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ca=(e,t)=>{for(var n in t||(t={}))_a.call(t,n)&&xi(e,n,t[n]);if(wi)for(var n of wi(t))Sa.call(t,n)&&xi(e,n,t[n]);return e};const wa={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var qs=wn({name:"VueMonacoEditor",model:{prop:"value",event:"update:value"},props:{defaultValue:String,defaultPath:String,defaultLanguage:String,value:String,language:String,path:String,theme:{type:String,default:"vs"},line:Number,options:{type:Object,default:()=>({})},overrideServices:{type:Object,default:()=>({})},saveViewState:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},emits:["update:value","beforeMount","mount","change","validate"],setup(e,t){const n=new Map,r=Sn(null),{monacoRef:i,unload:s,isLoadFailed:o}=ma(),{editorRef:l}=xa(t,e,i,r),{disposeValidator:c}=Oa(t,e,i,l),d=pn(()=>!!i.value&&!!l.value),{wrapperStyle:u,containerStyle:p}=ga(e,d);return Pr(()=>{var m,C;(m=c.value)==null||m.call(c),l.value?((C=l.value.getModel())==null||C.dispose(),l.value.dispose()):s()}),Je([()=>e.path,()=>e.value,()=>e.language,()=>e.line],([m,C,I,E],[Y,L,H,B])=>{if(d.value){if(m!==Y){const P=zs(i.value,C||e.defaultValue||"",I||e.defaultLanguage||"",m||e.defaultPath||"");e.saveViewState&&n.set(Y,l.value.saveViewState()),l.value.setModel(P),e.saveViewState&&l.value.restoreViewState(n.get(m)),ar(E)||l.value.revealLine(E);return}l.value.getValue()!==C&&l.value.setValue(C),I!==H&&i.value.editor.setModelLanguage(l.value.getModel(),I),!ar(E)&&E!==B&&l.value.revealLine(E)}}),Je(()=>e.options,m=>l.value&&l.value.updateOptions(m),{deep:!0}),Je(()=>e.theme,m=>i.value&&i.value.editor.setTheme(m)),{containerRef:r,isEditorReady:d,isLoadFailed:o,wrapperStyle:u,containerStyle:p}},render(){const{$slots:e,isEditorReady:t,isLoadFailed:n,wrapperStyle:r,containerStyle:i,className:s}=this;return rn("div",{style:r},[!t&&rn("div",{style:wa},n?e.failure?Ci(e.failure):"load failed":e.default?Ci(e.default):"loading..."),rn("div",{ref:"containerRef",key:"monaco_editor_container",style:i,class:s})])}});function xa({emit:e},t,n,r){const i=Sn(null);Pn(()=>{const o=Je(n,()=>{r.value&&n.value&&(xr(()=>o()),s())},{immediate:!0})});function s(){var o;if(!r.value||!n.value||i.value)return;e("beforeMount",n.value);const l=t.path||t.defaultPath,c=zs(n.value,t.value||t.defaultValue||"",t.language||t.defaultLanguage||"",l||"");i.value=n.value.editor.create(r.value,Ca({model:c,theme:t.theme,automaticLayout:!0,autoIndent:"brackets",formatOnPaste:!0,formatOnType:!0},t.options),t.overrideServices),(o=i.value)==null||o.onDidChangeModelContent(d=>{const u=i.value.getValue();u!==t.value&&(e("update:value",u),e("change",u,d))}),i.value&&!ar(t.line)&&i.value.revealLine(t.line),e("mount",i.value,n.value)}return{editorRef:i}}function Oa({emit:e},t,n,r){const i=Ji(null),s=Je([n,r],()=>{if(n.value&&r.value){xr(()=>s());const o=n.value.editor.onDidChangeMarkers(l=>{var c,d;const u=(d=(c=r.value)==null?void 0:c.getModel())==null?void 0:d.uri;if(u&&l.find(m=>m.path===u.path)){const m=n.value.editor.getModelMarkers({resource:u});e("validate",m)}});i.value=()=>o==null?void 0:o.dispose()}});return{disposeValidator:i}}const Pa={class:"pattern-card"},Ta=["title"],Ma={key:0,class:"pattern-card-description"},Ia={key:1,class:"pattern-code-block"},Aa={key:2,class:"pattern-notes"},Ea={class:"pattern-notes-list"},ja={components:{VueMonacoEditor:qs},props:{selectedSubItem:{type:Object,default:null},codeTheme:{type:String,default:"vs"}},computed:{mutableValue:{get(){return this.selectedSubItem.code},set(){}}},data(){return{}}},$a=wn({...ja,__name:"PatternCard",setup(e){const t={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0,minimap:{enabled:!1}},n=Sn(),r=()=>{const o=window.matchMedia("(prefers-color-scheme: dark)").matches?"vs-dark":"vs";n.value._themeService.setTheme(o)};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",r);const i=s=>{n.value=s,r()};return(s,o)=>(re(),se("div",Pa,[le("h2",{title:e.selectedSubItem.en_title,class:"pattern-card-title"},vt(e.selectedSubItem.title),9,Ta),e.selectedSubItem.description?(re(),se("p",Ma,vt(e.selectedSubItem.description),1)):nn("",!0),e.selectedSubItem.code?(re(),se("div",Ia,[ee(Xi(qs),{value:s.mutableValue,"onUpdate:value":o[0]||(o[0]=l=>s.mutableValue=l),language:"typescript",height:"100%",options:t,onMount:i,class:"pattern-card-editor"},null,8,["value"])])):nn("",!0),e.selectedSubItem.notes.length>0?(re(),se("div",Aa,[o[1]||(o[1]=le("h3",{class:"pattern-notes-title"},"Применение:",-1)),le("ul",Ea,[(re(!0),se(Ce,null,tr(e.selectedSubItem.notes,(l,c)=>(re(),se("li",{key:c},vt(l),1))),128))])])):nn("",!0)]))}}),Kt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Fa=Kt($a,[["__scopeId","data-v-582c2c3e"]]),Ra={props:{selectedItem:{type:String,default:null}}},La={class:"control-container"};function Da(e,t,n,r,i,s){return re(),se("div",La)}const Na=Kt(Ra,[["render",Da],["__scopeId","data-v-bfcdd136"]]),Ha={class:"pattern-card-viewer"},Ba={key:0},Va={key:1,class:"pattern-card-viewer-help"},Ua={props:{selectedSubItem:{type:Object,default:null}}},za=wn({...Ua,__name:"PatternCardViewer",setup(e){return(t,n)=>(re(),se("div",Ha,[e.selectedSubItem?(re(),se("div",Ba,[ee(Fa,{"selected-sub-item":e.selectedSubItem},null,8,["selected-sub-item"]),ee(Na)])):(re(),se("div",Va,n[0]||(n[0]=[le("p",null,"Выберите пункт меню слева",-1)])))]))}}),Ks=Kt(za,[["__scopeId","data-v-8c19c745"]]),Wa=[{title:"Порождающие паттерны",en_title:"Creational Patterns",subitems:[{title:"Абстрактная фабрика",en_title:"Abstract Factory",description:"Создает семейства связанных объектов без указания их конкретных классов.",code:`interface Button {
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
}`,notes:["Подходит: Для выполнения операций над сложными структурами объектов","Не подходит: Когда структура объектов часто меняется"]}]}],qa={emits:["subitem-selected"],data(){return{menuItems:Wa,isMenuVisible:!0,isMinimized:!0}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize(),this.toggleSubitems(0)},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{handleItem(e){this.isMenuVisible=!1,this.$emit("subitem-selected",e)},toggleMenu(){this.isMenuVisible=!0},handleResize(){this.isMinimized=window.innerWidth<=1024},toggleSubitems(e){const t=this.menuItems[e];t&&(t.showSubitems=!t.showSubitems)}}},Ka={class:"pattern-menu"},ka={class:"pattern-menu-container"},Ga=["title","onClick"],Ja={key:0},Ya=["onClick","title"];function Xa(e,t,n,r,i,s){return re(),se("div",Ka,[Dr(le("div",null,[le("button",{onClick:t[0]||(t[0]=(...o)=>s.toggleMenu&&s.toggleMenu(...o)),class:"pattern-menu-burger"},t[1]||(t[1]=[le("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[le("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})],-1)]))],512),[[ii,!i.isMenuVisible&&i.isMinimized]]),Dr(le("div",ka,[t[2]||(t[2]=le("h3",null,"Паттерны проектирования",-1)),t[3]||(t[3]=le("h4",null,"TypeScript",-1)),le("ul",null,[(re(!0),se(Ce,null,tr(i.menuItems,(o,l)=>(re(),se("li",{class:"pattern-menu-list-item",key:l},[le("p",{title:o.en_title,class:"pattern-menu-list-item-title",onClick:c=>s.toggleSubitems(l)},vt(o.title),9,Ga),ee(Zl,{name:"slide"},{default:is(()=>[o.showSubitems?(re(),se("ul",Ja,[(re(!0),se(Ce,null,tr(o.subitems,(c,d)=>(re(),se("li",{class:"pattern-menu-sublist-item",key:d},[le("p",{onClick:u=>s.handleItem(c),title:c.en_title,class:"pattern-menu-sublist-item-title"},vt(c.title),9,Ya)]))),128))])):nn("",!0)]),_:2},1024)]))),128))])],512),[[ii,i.isMenuVisible||!i.isMinimized]])])}const ks=Kt(qa,[["render",Xa],["__scopeId","data-v-c954b37a"]]),Za={class:"container"},Qa={components:{PatternCardViewer:Ks,PatternMenu:ks},data(){return{selectedSubItem:null}},methods:{handleSubItemSelected(e){this.selectedSubItem=e}}},eu=wn({...Qa,__name:"App",setup(e){return(t,n)=>(re(),se("main",Za,[ee(ks,{onSubitemSelected:t.handleSubItemSelected},null,8,["onSubitemSelected"]),ee(Ks,{"selected-sub-item":t.selectedSubItem},null,8,["selected-sub-item"])]))}}),tu=Kt(eu,[["__scopeId","data-v-97ee43d9"]]);_c(tu).mount("#app");cr.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}});
