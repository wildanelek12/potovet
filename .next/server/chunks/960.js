exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 9542:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,e){ true?module.exports=e(__webpack_require__(8038)):0}(self,(t=>(()=>{var e={703:(t,e,r)=>{"use strict";var o=r(414);function n(){}function i(){}i.resetWarningCache=n,t.exports=function(){function t(t,e,r,n,i,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},697:(t,e,r)=>{t.exports=r(703)()},414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:e=>{"use strict";e.exports=t}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";o.r(n),o.d(n,{CKEditor:()=>to,CKEditorContext:()=>Xr});var t=o(787),e=o.n(t),r=o(697),i=o.n(r);const s=new Array(256).fill("").map(((t,e)=>("0"+e.toString(16)).slice(-2)));class a{constructor(t){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit="number"==typeof t.crashNumberLimit?t.crashNumberLimit:3,this._minimumNonErrorTimePeriod="number"==typeof t.minimumNonErrorTimePeriod?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const e="error"in t?t.error:t.reason;e instanceof Error&&this._handleError(e,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter((t=>t!==e))}_fire(t,...e){const r=this._listeners[t]||[];for(const t of r)t.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e instanceof ErrorEvent?e.filename:void 0,lineno:e instanceof ErrorEvent?e.lineno:void 0,colno:e instanceof ErrorEvent?e.colno:void 0,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&void 0!==t.context&&null!==t.context&&"ready"===this.state&&this._isErrorComingFromThisItem(t)}_shouldRestart(){if(this.crashes.length<=this._crashNumberLimit)return!0;return(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function c(t,e=new Set){const r=[t],o=new Set;let n=0;for(;r.length>n;){const t=r[n++];if(!o.has(t)&&u(t)&&!e.has(t))if(o.add(t),Symbol.iterator in t)try{for(const e of t)r.push(e)}catch(t){}else for(const e in t)"defaultValue"!==e&&r.push(t[e])}return o}function u(t){const e=Object.prototype.toString.call(t),r=typeof t;return!("number"===r||"boolean"===r||"string"===r||"symbol"===r||"function"===r||"[object Date]"===e||"[object RegExp]"===e||"[object Module]"===e||null==t||t._watchdogExcluded||t instanceof EventTarget||t instanceof Event)}function h(t,e,r=new Set){if(t===e&&("object"==typeof(o=t)&&null!==o))return!0;var o;const n=c(t,r),i=c(e,r);for(const t of n)if(i.has(t))return!0;return!1}const d=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};const l="object"==typeof global&&global&&global.Object===Object&&global;var f="object"==typeof self&&self&&self.Object===Object&&self;const p=l||f||Function("return this")();const _=function(){return p.Date.now()};var y=/\s/;const g=function(t){for(var e=t.length;e--&&y.test(t.charAt(e)););return e};var b=/^\s+/;const v=function(t){return t?t.slice(0,g(t)+1).replace(b,""):t};const m=p.Symbol;var j=Object.prototype,w=j.hasOwnProperty,x=j.toString,E=m?m.toStringTag:void 0;const O=function(t){var e=w.call(t,E),r=t[E];try{t[E]=void 0;var o=!0}catch(t){}var n=x.call(t);return o&&(e?t[E]=r:delete t[E]),n};var C=Object.prototype.toString;const P=function(t){return C.call(t)};var A=m?m.toStringTag:void 0;const T=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":A&&A in Object(t)?O(t):P(t)};const S=function(t){return null!=t&&"object"==typeof t};const W=function(t){return"symbol"==typeof t||S(t)&&"[object Symbol]"==T(t)};var R=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,D=/^0o[0-7]+$/i,z=parseInt;const M=function(t){if("number"==typeof t)return t;if(W(t))return NaN;if(d(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=d(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=v(t);var r=I.test(t);return r||D.test(t)?z(t.slice(2),r?2:8):R.test(t)?NaN:+t};var U=Math.max,N=Math.min;const F=function(t,e,r){var o,n,i,s,a,c,u=0,h=!1,l=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var r=o,i=n;return o=n=void 0,u=e,s=t.apply(i,r)}function y(t){var r=t-c;return void 0===c||r>=e||r<0||l&&t-u>=i}function g(){var t=_();if(y(t))return b(t);a=setTimeout(g,function(t){var r=e-(t-c);return l?N(r,i-(t-u)):r}(t))}function b(t){return a=void 0,f&&o?p(t):(o=n=void 0,s)}function v(){var t=_(),r=y(t);if(o=arguments,n=this,c=t,r){if(void 0===a)return function(t){return u=t,a=setTimeout(g,e),h?p(t):s}(c);if(l)return clearTimeout(a),a=setTimeout(g,e),p(c)}return void 0===a&&(a=setTimeout(g,e)),s}return e=M(e)||0,d(r)&&(h=!!r.leading,i=(l="maxWait"in r)?U(M(r.maxWait)||0,e):i,f="trailing"in r?!!r.trailing:f),v.cancel=function(){void 0!==a&&clearTimeout(a),u=0,o=c=n=a=void 0},v.flush=function(){return void 0===a?s:b(_())},v};const q=function(t,e,r){var o=!0,n=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return d(r)&&(o="leading"in r?!!r.leading:o,n="trailing"in r?!!r.trailing:n),F(t,e,{leading:o,maxWait:e,trailing:n})};const L=function(){this.__data__=[],this.size=0};const k=function(t,e){return t===e||t!=t&&e!=e};const B=function(t,e){for(var r=t.length;r--;)if(k(t[r][0],e))return r;return-1};var $=Array.prototype.splice;const H=function(t){var e=this.__data__,r=B(e,t);return!(r<0)&&(r==e.length-1?e.pop():$.call(e,r,1),--this.size,!0)};const V=function(t){var e=this.__data__,r=B(e,t);return r<0?void 0:e[r][1]};const K=function(t){return B(this.__data__,t)>-1};const Q=function(t,e){var r=this.__data__,o=B(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};function G(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}G.prototype.clear=L,G.prototype.delete=H,G.prototype.get=V,G.prototype.has=K,G.prototype.set=Q;const Y=G;const J=function(){this.__data__=new Y,this.size=0};const X=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};const Z=function(t){return this.__data__.get(t)};const tt=function(t){return this.__data__.has(t)};const et=function(t){if(!d(t))return!1;var e=T(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};const rt=p["__core-js_shared__"];var ot=function(){var t=/[^.]+$/.exec(rt&&rt.keys&&rt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const nt=function(t){return!!ot&&ot in t};var it=Function.prototype.toString;const st=function(t){if(null!=t){try{return it.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var at=/^\[object .+?Constructor\]$/,ct=Function.prototype,ut=Object.prototype,ht=ct.toString,dt=ut.hasOwnProperty,lt=RegExp("^"+ht.call(dt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const ft=function(t){return!(!d(t)||nt(t))&&(et(t)?lt:at).test(st(t))};const pt=function(t,e){return null==t?void 0:t[e]};const _t=function(t,e){var r=pt(t,e);return ft(r)?r:void 0};const yt=_t(p,"Map");const gt=_t(Object,"create");const bt=function(){this.__data__=gt?gt(null):{},this.size=0};const vt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var mt=Object.prototype.hasOwnProperty;const jt=function(t){var e=this.__data__;if(gt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return mt.call(e,t)?e[t]:void 0};var wt=Object.prototype.hasOwnProperty;const xt=function(t){var e=this.__data__;return gt?void 0!==e[t]:wt.call(e,t)};const Et=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function Ot(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}Ot.prototype.clear=bt,Ot.prototype.delete=vt,Ot.prototype.get=jt,Ot.prototype.has=xt,Ot.prototype.set=Et;const Ct=Ot;const Pt=function(){this.size=0,this.__data__={hash:new Ct,map:new(yt||Y),string:new Ct}};const At=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const Tt=function(t,e){var r=t.__data__;return At(e)?r["string"==typeof e?"string":"hash"]:r.map};const St=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e};const Wt=function(t){return Tt(this,t).get(t)};const Rt=function(t){return Tt(this,t).has(t)};const It=function(t,e){var r=Tt(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this};function Dt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}Dt.prototype.clear=Pt,Dt.prototype.delete=St,Dt.prototype.get=Wt,Dt.prototype.has=Rt,Dt.prototype.set=It;const zt=Dt;const Mt=function(t,e){var r=this.__data__;if(r instanceof Y){var o=r.__data__;if(!yt||o.length<199)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new zt(o)}return r.set(t,e),this.size=r.size,this};function Ut(t){var e=this.__data__=new Y(t);this.size=e.size}Ut.prototype.clear=J,Ut.prototype.delete=X,Ut.prototype.get=Z,Ut.prototype.has=tt,Ut.prototype.set=Mt;const Nt=Ut;const Ft=function(t,e){for(var r=-1,o=null==t?0:t.length;++r<o&&!1!==e(t[r],r,t););return t};const qt=function(){try{var t=_t(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();const Lt=function(t,e,r){"__proto__"==e&&qt?qt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r};var kt=Object.prototype.hasOwnProperty;const Bt=function(t,e,r){var o=t[e];kt.call(t,e)&&k(o,r)&&(void 0!==r||e in t)||Lt(t,e,r)};const $t=function(t,e,r,o){var n=!r;r||(r={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=o?o(r[a],t[a],a,r,t):void 0;void 0===c&&(c=t[a]),n?Lt(r,a,c):Bt(r,a,c)}return r};const Ht=function(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o};const Vt=function(t){return S(t)&&"[object Arguments]"==T(t)};var Kt=Object.prototype,Qt=Kt.hasOwnProperty,Gt=Kt.propertyIsEnumerable;const Yt=Vt(function(){return arguments}())?Vt:function(t){return S(t)&&Qt.call(t,"callee")&&!Gt.call(t,"callee")};const Jt=Array.isArray;const Xt=function(){return!1};var Zt= true&&exports&&!exports.nodeType&&exports,te=Zt&&"object"=="object"&&module&&!module.nodeType&&module,ee=te&&te.exports===Zt?p.Buffer:void 0;const re=(ee?ee.isBuffer:void 0)||Xt;var oe=/^(?:0|[1-9]\d*)$/;const ne=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&oe.test(t))&&t>-1&&t%1==0&&t<e};const ie=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var se={};se["[object Float32Array]"]=se["[object Float64Array]"]=se["[object Int8Array]"]=se["[object Int16Array]"]=se["[object Int32Array]"]=se["[object Uint8Array]"]=se["[object Uint8ClampedArray]"]=se["[object Uint16Array]"]=se["[object Uint32Array]"]=!0,se["[object Arguments]"]=se["[object Array]"]=se["[object ArrayBuffer]"]=se["[object Boolean]"]=se["[object DataView]"]=se["[object Date]"]=se["[object Error]"]=se["[object Function]"]=se["[object Map]"]=se["[object Number]"]=se["[object Object]"]=se["[object RegExp]"]=se["[object Set]"]=se["[object String]"]=se["[object WeakMap]"]=!1;const ae=function(t){return S(t)&&ie(t.length)&&!!se[T(t)]};const ce=function(t){return function(e){return t(e)}};var ue= true&&exports&&!exports.nodeType&&exports,he=ue&&"object"=="object"&&module&&!module.nodeType&&module,de=he&&he.exports===ue&&l.process;const le=function(){try{var t=he&&he.require&&he.require("util").types;return t||de&&de.binding&&de.binding("util")}catch(t){}}();var fe=le&&le.isTypedArray;const pe=fe?ce(fe):ae;var _e=Object.prototype.hasOwnProperty;const ye=function(t,e){var r=Jt(t),o=!r&&Yt(t),n=!r&&!o&&re(t),i=!r&&!o&&!n&&pe(t),s=r||o||n||i,a=s?Ht(t.length,String):[],c=a.length;for(var u in t)!e&&!_e.call(t,u)||s&&("length"==u||n&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||ne(u,c))||a.push(u);return a};var ge=Object.prototype;const be=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ge)};const ve=function(t,e){return function(r){return t(e(r))}};const me=ve(Object.keys,Object);var je=Object.prototype.hasOwnProperty;const we=function(t){if(!be(t))return me(t);var e=[];for(var r in Object(t))je.call(t,r)&&"constructor"!=r&&e.push(r);return e};const xe=function(t){return null!=t&&ie(t.length)&&!et(t)};const Ee=function(t){return xe(t)?ye(t):we(t)};const Oe=function(t,e){return t&&$t(e,Ee(e),t)};const Ce=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e};var Pe=Object.prototype.hasOwnProperty;const Ae=function(t){if(!d(t))return Ce(t);var e=be(t),r=[];for(var o in t)("constructor"!=o||!e&&Pe.call(t,o))&&r.push(o);return r};const Te=function(t){return xe(t)?ye(t,!0):Ae(t)};const Se=function(t,e){return t&&$t(e,Te(e),t)};var We= true&&exports&&!exports.nodeType&&exports,Re=We&&"object"=="object"&&module&&!module.nodeType&&module,Ie=Re&&Re.exports===We?p.Buffer:void 0,De=Ie?Ie.allocUnsafe:void 0;const ze=function(t,e){if(e)return t.slice();var r=t.length,o=De?De(r):new t.constructor(r);return t.copy(o),o};const Me=function(t,e){var r=-1,o=t.length;for(e||(e=Array(o));++r<o;)e[r]=t[r];return e};const Ue=function(t,e){for(var r=-1,o=null==t?0:t.length,n=0,i=[];++r<o;){var s=t[r];e(s,r,t)&&(i[n++]=s)}return i};const Ne=function(){return[]};var Fe=Object.prototype.propertyIsEnumerable,qe=Object.getOwnPropertySymbols;const Le=qe?function(t){return null==t?[]:(t=Object(t),Ue(qe(t),(function(e){return Fe.call(t,e)})))}:Ne;const ke=function(t,e){return $t(t,Le(t),e)};const Be=function(t,e){for(var r=-1,o=e.length,n=t.length;++r<o;)t[n+r]=e[r];return t};const $e=ve(Object.getPrototypeOf,Object);const He=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Be(e,Le(t)),t=$e(t);return e}:Ne;const Ve=function(t,e){return $t(t,He(t),e)};const Ke=function(t,e,r){var o=e(t);return Jt(t)?o:Be(o,r(t))};const Qe=function(t){return Ke(t,Ee,Le)};const Ge=function(t){return Ke(t,Te,He)};const Ye=_t(p,"DataView");const Je=_t(p,"Promise");const Xe=_t(p,"Set");const Ze=_t(p,"WeakMap");var tr="[object Map]",er="[object Promise]",rr="[object Set]",or="[object WeakMap]",nr="[object DataView]",ir=st(Ye),sr=st(yt),ar=st(Je),cr=st(Xe),ur=st(Ze),hr=T;(Ye&&hr(new Ye(new ArrayBuffer(1)))!=nr||yt&&hr(new yt)!=tr||Je&&hr(Je.resolve())!=er||Xe&&hr(new Xe)!=rr||Ze&&hr(new Ze)!=or)&&(hr=function(t){var e=T(t),r="[object Object]"==e?t.constructor:void 0,o=r?st(r):"";if(o)switch(o){case ir:return nr;case sr:return tr;case ar:return er;case cr:return rr;case ur:return or}return e});const dr=hr;var lr=Object.prototype.hasOwnProperty;const fr=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&lr.call(t,"index")&&(r.index=t.index,r.input=t.input),r};const pr=p.Uint8Array;const _r=function(t){var e=new t.constructor(t.byteLength);return new pr(e).set(new pr(t)),e};const yr=function(t,e){var r=e?_r(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)};var gr=/\w*$/;const br=function(t){var e=new t.constructor(t.source,gr.exec(t));return e.lastIndex=t.lastIndex,e};var vr=m?m.prototype:void 0,mr=vr?vr.valueOf:void 0;const jr=function(t){return mr?Object(mr.call(t)):{}};const wr=function(t,e){var r=e?_r(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};const xr=function(t,e,r){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return _r(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return yr(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return wr(t,r);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return br(t);case"[object Symbol]":return jr(t)}};var Er=Object.create;const Or=function(){function t(){}return function(e){if(!d(e))return{};if(Er)return Er(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const Cr=function(t){return"function"!=typeof t.constructor||be(t)?{}:Or($e(t))};const Pr=function(t){return S(t)&&"[object Map]"==dr(t)};var Ar=le&&le.isMap;const Tr=Ar?ce(Ar):Pr;const Sr=function(t){return S(t)&&"[object Set]"==dr(t)};var Wr=le&&le.isSet;const Rr=Wr?ce(Wr):Sr;var Ir="[object Arguments]",Dr="[object Function]",zr="[object Object]",Mr={};Mr[Ir]=Mr["[object Array]"]=Mr["[object ArrayBuffer]"]=Mr["[object DataView]"]=Mr["[object Boolean]"]=Mr["[object Date]"]=Mr["[object Float32Array]"]=Mr["[object Float64Array]"]=Mr["[object Int8Array]"]=Mr["[object Int16Array]"]=Mr["[object Int32Array]"]=Mr["[object Map]"]=Mr["[object Number]"]=Mr[zr]=Mr["[object RegExp]"]=Mr["[object Set]"]=Mr["[object String]"]=Mr["[object Symbol]"]=Mr["[object Uint8Array]"]=Mr["[object Uint8ClampedArray]"]=Mr["[object Uint16Array]"]=Mr["[object Uint32Array]"]=!0,Mr["[object Error]"]=Mr[Dr]=Mr["[object WeakMap]"]=!1;const Ur=function t(e,r,o,n,i,s){var a,c=1&r,u=2&r,h=4&r;if(o&&(a=i?o(e,n,i,s):o(e)),void 0!==a)return a;if(!d(e))return e;var l=Jt(e);if(l){if(a=fr(e),!c)return Me(e,a)}else{var f=dr(e),p=f==Dr||"[object GeneratorFunction]"==f;if(re(e))return ze(e,c);if(f==zr||f==Ir||p&&!i){if(a=u||p?{}:Cr(e),!c)return u?Ve(e,Se(a,e)):ke(e,Oe(a,e))}else{if(!Mr[f])return i?e:{};a=xr(e,f,c)}}s||(s=new Nt);var _=s.get(e);if(_)return _;s.set(e,a),Rr(e)?e.forEach((function(n){a.add(t(n,r,o,n,e,s))})):Tr(e)&&e.forEach((function(n,i){a.set(i,t(n,r,o,i,e,s))}));var y=l?void 0:(h?u?Ge:Qe:u?Te:Ee)(e);return Ft(y||e,(function(n,i){y&&(n=e[i=n]),Bt(a,i,t(n,r,o,i,e,s))})),a};const Nr=function(t,e){return Ur(t,5,e="function"==typeof e?e:void 0)};var Fr=Function.prototype,qr=Object.prototype,Lr=Fr.toString,kr=qr.hasOwnProperty,Br=Lr.call(Object);const $r=function(t){if(!S(t)||"[object Object]"!=T(t))return!1;var e=$e(t);if(null===e)return!0;var r=kr.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&Lr.call(r)==Br};const Hr=function(t){return S(t)&&1===t.nodeType&&!$r(t)};class Vr extends a{constructor(t,e={}){super(e),this._editor=null,this._throttledSave=q(this._save.bind(this),"number"==typeof e.saveInterval?e.saveInterval:5e3),t&&(this._creator=(e,r)=>t.create(e,r)),this._destructor=t=>t.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}_restart(){return Promise.resolve().then((()=>(this.state="initializing",this._fire("stateChange"),this._destroy()))).catch((t=>{console.error("An error happened during the editor destroying.",t)})).then((()=>{if("string"==typeof this._elementOrData)return this.create(this._data,this._config,this._config.context);{const t=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,t,t.context)}})).then((()=>{this._fire("restart")}))}create(t=this._elementOrData,e=this._config,r){return Promise.resolve().then((()=>(super._startErrorHandling(),this._elementOrData=t,this._config=this._cloneEditorConfiguration(e)||{},this._config.context=r,this._creator(t,this._config)))).then((t=>{this._editor=t,t.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=t.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")}))}destroy(){return Promise.resolve().then((()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())))}_destroy(){return Promise.resolve().then((()=>{this._stopErrorHandling(),this._throttledSave.flush();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)}))}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=t}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t={};for(const e of this._editor.model.document.getRootNames())t[e]=this._editor.data.get({rootName:e});return t}_isErrorComingFromThisItem(t){return h(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return Nr(t,((t,e)=>Hr(t)||"context"===e?t:void 0))}}const Kr=Symbol("MainQueueId");class Qr extends a{constructor(t,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Gr,this._watchdogConfig=e,this._creator=e=>t.create(e),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty((()=>{"initializing"===this.state&&(this.state="ready",this._fire("stateChange"))}))}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}get context(){return this._context}create(t={}){return this._actionQueues.enqueue(Kr,(()=>(this._contextConfig=t,this._create())))}getItem(t){return this._getWatchdog(t)._item}getItemState(t){return this._getWatchdog(t).state}add(t){const e=Yr(t);return Promise.all(e.map((t=>this._actionQueues.enqueue(t.id,(()=>{if("destroyed"===this.state)throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let e;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if("editor"===t.type)return e=new Vr(null,this._watchdogConfig),e.setCreator(t.creator),e._setExcludedProperties(this._contextProps),t.destructor&&e.setDestructor(t.destructor),this._watchdogs.set(t.id,e),e.on("error",((r,{error:o,causesRestart:n})=>{this._fire("itemError",{itemId:t.id,error:o}),n&&this._actionQueues.enqueue(t.id,(()=>new Promise((r=>{const o=()=>{e.off("restart",o),this._fire("itemRestart",{itemId:t.id}),r()};e.on("restart",o)}))))})),e.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))))}remove(t){const e=Yr(t);return Promise.all(e.map((t=>this._actionQueues.enqueue(t,(()=>{const e=this._getWatchdog(t);return this._watchdogs.delete(t),e.destroy()})))))}destroy(){return this._actionQueues.enqueue(Kr,(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())))}_restart(){return this._actionQueues.enqueue(Kr,(()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch((t=>{console.error("An error happened during destroying the context or items.",t)})).then((()=>this._create())).then((()=>this._fire("restart"))))))}_create(){return Promise.resolve().then((()=>(this._startErrorHandling(),this._creator(this._contextConfig)))).then((t=>(this._context=t,this._contextProps=c(this._context),Promise.all(Array.from(this._watchdogs.values()).map((t=>(t._setExcludedProperties(this._contextProps),t.create(void 0,void 0,this._context))))))))}_destroy(){return Promise.resolve().then((()=>{this._stopErrorHandling();const t=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map((t=>t.destroy()))).then((()=>this._destructor(t)))}))}_getWatchdog(t){const e=this._watchdogs.get(t);if(!e)throw new Error(`Item with the given id was not registered: ${t}.`);return e}_isErrorComingFromThisItem(t){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(t))return!1;return h(this._context,t.context)}}class Gr{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const r=t===Kr;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const o=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Kr),this._queues.get(t)])).then(e),n=o.catch((()=>{}));return this._queues.set(t,n),o.finally((()=>{this._activeActions--,this._queues.get(t)===n&&0===this._activeActions&&this._onEmptyCallbacks.forEach((t=>t()))}))}}function Yr(t){return Array.isArray(t)?t:[t]}const Jr=e().createContext("contextWatchdog");class Xr extends e().Component{constructor(t,e){super(t,e),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(t){return this._shouldComponentUpdate(t)}async _shouldComponentUpdate(t){return t.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(t.config)),t.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(t.config),!0):this.props.children!==t.children}render(){return e().createElement(Jr.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(t){this.contextWatchdog=new Qr(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",((t,e)=>{this.props.onError(e.error,{phase:"runtime",willContextRestart:e.causesRestart})})),this.contextWatchdog.on("stateChange",(()=>{"ready"===this.contextWatchdog.state&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)})),await this.contextWatchdog.create(t).catch((t=>{this.props.onError(t,{phase:"initialization",willContextRestart:!1})}))}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Xr.defaultProps={isLayoutReady:!0,onError:(t,e)=>console.error(t,e)},Xr.propTypes={id:i().string,isLayoutReady:i().bool,context:i().func,watchdogConfig:i().object,config:i().object,onReady:i().func,onError:i().func};const Zr="Lock from React integration (@ckeditor/ckeditor5-react)";class to extends e().Component{constructor(t){super(t),this.editorDestructionInProgress=null,this.domContainer=e().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:r}=window;if(r){const[t]=r.split(".").map(Number);t<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(t){return!!this.editor&&(t.id!==this.props.id||(this._shouldUpdateEditor(t)&&this.editor.data.set(t.data),"disabled"in t&&(t.disabled?this.editor.enableReadOnlyMode(Zr):this.editor.disableReadOnlyMode(Zr)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return e().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof Qr?this.watchdog=new eo(this.context):this.watchdog=new to._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator(((t,e)=>this._createEditor(t,e))),this.watchdog.on("error",((t,{error:e,causesRestart:r})=>{(this.props.onError||console.error)(e,{phase:"runtime",willEditorRestart:r})})),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch((t=>{(this.props.onError||console.error)(t,{phase:"initialization",willEditorRestart:!1})})))}_createEditor(t,e){return this.props.editor.create(t,e).then((t=>{"disabled"in this.props&&this.props.disabled&&t.enableReadOnlyMode(Zr);const e=t.model.document,r=t.editing.view.document;return e.on("change:data",(e=>{this.props.onChange&&this.props.onChange(e,t)})),r.on("focus",(e=>{this.props.onFocus&&this.props.onFocus(e,t)})),r.on("blur",(e=>{this.props.onBlur&&this.props.onBlur(e,t)})),setTimeout((()=>{this.props.onReady&&this.props.onReady(t)})),t}))}async _destroyEditor(){this.editorDestructionInProgress=new Promise((t=>{setTimeout((()=>{this.watchdog?this.watchdog.destroy().then((()=>{this.watchdog=null,t()})):t()}))}))}_shouldUpdateEditor(t){return this.props.data!==t.data&&this.editor.data.get()!==t.data}_getConfig(){const t=this.props.config||{};return this.props.data&&t.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...t,initialData:t.initialData||this.props.data||""}}}to.contextType=Jr,to.propTypes={editor:i().func.isRequired,data:i().string,config:i().object,watchdogConfig:i().object,onChange:i().func,onReady:i().func,onFocus:i().func,onBlur:i().func,onError:i().func,disabled:i().bool,id:i().any},to._EditorWatchdog=Vr;class eo{constructor(t){this._contextWatchdog=t,this._id=function(){const t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+s[t>>0&255]+s[t>>8&255]+s[t>>16&255]+s[t>>24&255]+s[e>>0&255]+s[e>>8&255]+s[e>>16&255]+s[e>>24&255]+s[r>>0&255]+s[r>>8&255]+s[r>>16&255]+s[r>>24&255]+s[o>>0&255]+s[o>>8&255]+s[o>>16&255]+s[o>>24&255]}()}setCreator(t){this._creator=t}create(t,e){return this._contextWatchdog.add({sourceElementOrData:t,config:e,creator:this._creator,id:this._id,type:"editor"})}on(t,e){this._contextWatchdog.on("itemError",((t,{itemId:r,error:o})=>{r===this._id&&e(null,{error:o,causesRestart:void 0})}))}destroy(){return"ready"===this._contextWatchdog.state?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}})(),n})()));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8921:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(8281);
} else {}


/***/ }),

/***/ 8281:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function stylis_min(W) {
  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length, m = d.length;
    switch (m) {
     case 0:
     case 1:
      var b = 0;
      for (d = 0 === m ? "" : d[0] + " "; b < a; ++b) c[b] = Z(d, c[b], e).trim();
      break;

     default:
      var v = b = 0;
      for (c = []; b < a; ++b) for (var n = 0; n < m; ++n) c[v++] = Z(d[n] + " ", h[b], e).trim();
    }
    return c;
  }
  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    switch (33 > h && (h = (c = c.trim()).charCodeAt(0)), h) {
     case 38:
      return c.replace(F, "$1" + d.trim());

     case 58:
      return d.trim() + c.replace(F, "$1" + d.trim());

     default:
      if (0 < 1 * e && 0 < c.indexOf("\f")) return c.replace(F, (58 === d.charCodeAt(0) ? "" : "$1") + d.trim());
    }
    return d + c;
  }
  function P(d, c, e, h) {
    var a = d + ";", m = 2 * c + 3 * e + 4 * h;
    if (944 === m) {
      d = a.indexOf(":", 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      return b = a.substring(0, d).trim() + b + ";", 1 === w || 2 === w && L(b, 1) ? "-webkit-" + b + b : b;
    }
    if (0 === w || 2 === w && !L(a, 1)) return a;
    switch (m) {
     case 1015:
      return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;

     case 951:
      return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;

     case 963:
      return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;

     case 1009:
      if (100 !== a.charCodeAt(4)) break;

     case 969:
     case 942:
      return "-webkit-" + a + a;

     case 978:
      return "-webkit-" + a + "-moz-" + a + a;

     case 1019:
     case 983:
      return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;

     case 883:
      if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
      if (0 < a.indexOf("image-set(", 11)) return a.replace(ja, "$1-webkit-$2") + a;
      break;

     case 932:
      if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
       case 103:
        return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;

       case 115:
        return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;

       case 98:
        return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
      }
      return "-webkit-" + a + "-ms-" + a + a;

     case 964:
      return "-webkit-" + a + "-ms-flex-" + a + a;

     case 1023:
      if (99 !== a.charCodeAt(8)) break;
      return "-webkit-box-pack" + (b = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + a + "-ms-flex-pack" + b + a;

     case 1005:
      return ka.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;

     case 1e3:
      switch (c = (b = a.substring(13).trim()).indexOf("-") + 1, b.charCodeAt(0) + b.charCodeAt(c)) {
       case 226:
        b = a.replace(G, "tb");
        break;

       case 232:
        b = a.replace(G, "tb-rl");
        break;

       case 220:
        b = a.replace(G, "lr");
        break;

       default:
        return a;
      }
      return "-webkit-" + a + "-ms-" + b + a;

     case 1017:
      if (-1 === a.indexOf("sticky", 9)) break;

     case 975:
      switch (c = (a = d).length - 10, m = (b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | b.charCodeAt(7))) {
       case 203:
        if (111 > b.charCodeAt(8)) break;

       case 115:
        a = a.replace(b, "-webkit-" + b) + ";" + a;
        break;

       case 207:
       case 102:
        a = a.replace(b, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a.replace(b, "-webkit-" + b) + ";" + a.replace(b, "-ms-" + b + "box") + ";" + a;
      }
      return a + ";";

     case 938:
      if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
       case 105:
        return b = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b + "-ms-flex-" + b + a;

       case 115:
        return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;

       default:
        return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
      }
      break;

     case 973:
     case 989:
      if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

     case 931:
     case 953:
      if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(":") + 1)).charCodeAt(0) ? P(d.replace("stretch", "fill-available"), c, e, h).replace(":fill-available", ":stretch") : a.replace(b, "-webkit-" + b) + a.replace(b, "-moz-" + b.replace("fill-", "")) + a;
      break;

     case 962:
      if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10)) return a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a;
    }
    return a;
  }
  function L(d, c) {
    var e = d.indexOf(1 === c ? ":" : "{"), h = d.substring(0, 3 !== c ? e : 10);
    return e = d.substring(e + 1, d.length - 1), R(2 !== c ? h : h.replace(na, "$1"), e, c);
  }
  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ";" ? e.replace(oa, " or ($1)").substring(4) : "(" + c + ")";
  }
  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var w, g = 0, x = c; g < A; ++g) switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
     case void 0:
     case !1:
     case !0:
     case null:
      break;

     default:
      x = w;
    }
    if (x !== c) return x;
  }
  function U(d) {
    return void 0 !== (d = d.prefix) && (R = null, d ? "function" != typeof d ? w = 1 : (w = 2, 
    R = d) : w = 0), U;
  }
  function B(d, c) {
    var e = d;
    if (33 > e.charCodeAt(0) && (e = e.trim()), e = [ e ], 0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && "string" == typeof h && (c = h);
    }
    var a = function M(d, c, e, h, a) {
      for (var q, g, k, y, C, m = 0, b = 0, v = 0, n = 0, x = 0, K = 0, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, f = "", p = "", F = "", G = ""; l < B; ) {
        if (g = e.charCodeAt(l), l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), 
        n = v = m = 0, B++, J++), 0 === b + n + v + m) {
          if (l === J && (0 < r && (f = f.replace(N, "")), 0 < f.trim().length)) {
            switch (g) {
             case 32:
             case 9:
             case 59:
             case 13:
             case 10:
              break;

             default:
              f += e.charAt(l);
            }
            g = 59;
          }
          switch (g) {
           case 123:
            for (q = (f = f.trim()).charCodeAt(0), k = 1, t = ++l; l < B; ) {
              switch (g = e.charCodeAt(l)) {
               case 123:
                k++;
                break;

               case 125:
                k--;
                break;

               case 47:
                switch (g = e.charCodeAt(l + 1)) {
                 case 42:
                 case 47:
                  a: {
                    for (u = l + 1; u < J; ++u) switch (e.charCodeAt(u)) {
                     case 47:
                      if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                        l = u + 1;
                        break a;
                      }
                      break;

                     case 10:
                      if (47 === g) {
                        l = u + 1;
                        break a;
                      }
                    }
                    l = u;
                  }
                }
                break;

               case 91:
                g++;

               case 40:
                g++;

               case 34:
               case 39:
                for (;l++ < J && e.charCodeAt(l) !== g; ) ;
              }
              if (0 === k) break;
              l++;
            }
            switch (k = e.substring(t, l), 0 === q && (q = (f = f.replace(ca, "").trim()).charCodeAt(0)), 
            q) {
             case 64:
              switch (0 < r && (f = f.replace(N, "")), g = f.charCodeAt(1)) {
               case 100:
               case 109:
               case 115:
               case 45:
                r = c;
                break;

               default:
                r = O;
              }
              if (t = (k = M(c, r, k, g, a + 1)).length, 0 < A && (C = H(3, k, r = X(O, f, I), c, D, z, t, g, a, h), 
              f = r.join(""), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = "")), 
              0 < t) switch (g) {
               case 115:
                f = f.replace(da, ea);

               case 100:
               case 109:
               case 45:
                k = f + "{" + k + "}";
                break;

               case 107:
                k = (f = f.replace(fa, "$1 $2")) + "{" + k + "}", k = 1 === w || 2 === w && L("@" + k, 3) ? "@-webkit-" + k + "@" + k : "@" + k;
                break;

               default:
                k = f + k, 112 === h && (p += k, k = "");
              } else k = "";
              break;

             default:
              k = M(c, X(c, f, I), k, h, a + 1);
            }
            F += k, k = I = r = u = q = 0, f = "", g = e.charCodeAt(++l);
            break;

           case 125:
           case 59:
            if (1 < (t = (f = (0 < r ? f.replace(N, "") : f).trim()).length)) switch (0 === u && (q = f.charCodeAt(0), 
            45 === q || 96 < q && 123 > q) && (t = (f = f.replace(" ", ":")).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = "\0\0"), 
            q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
             case 0:
              break;

             case 64:
              if (105 === g || 99 === g) {
                G += f + e.charAt(l);
                break;
              }

             default:
              58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0, f = "", g = e.charCodeAt(++l);
          }
        }
        switch (g) {
         case 13:
         case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += "\0"), 
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h), z = 1, D++;
          break;

         case 59:
         case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

         default:
          switch (z++, y = e.charAt(l), g) {
           case 9:
           case 32:
            if (0 === n + m + b) switch (x) {
             case 44:
             case 58:
             case 9:
             case 32:
              y = "";
              break;

             default:
              32 !== g && (y = " ");
            }
            break;

           case 0:
            y = "\\0";
            break;

           case 12:
            y = "\\f";
            break;

           case 11:
            y = "\\v";
            break;

           case 38:
            0 === n + b + m && (r = I = 1, y = "\f" + y);
            break;

           case 108:
            if (0 === n + b + m + E && 0 < u) switch (l - u) {
             case 2:
              112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

             case 8:
              111 === K && (E = K);
            }
            break;

           case 58:
            0 === n + b + m && (u = l);
            break;

           case 44:
            0 === b + v + n + m && (r = 1, y += "\r");
            break;

           case 34:
           case 39:
            0 === b && (n = n === g ? 0 : 0 === n ? g : n);
            break;

           case 91:
            0 === n + b + v && m++;
            break;

           case 93:
            0 === n + b + v && m--;
            break;

           case 41:
            0 === n + b + m && v--;
            break;

           case 40:
            if (0 === n + b + m) {
              if (0 === q) switch (2 * x + 3 * K) {
               case 533:
                break;

               default:
                q = 1;
              }
              v++;
            }
            break;

           case 64:
            0 === b + v + n + m + u + k && (k = 1);
            break;

           case 42:
           case 47:
            if (!(0 < n + m + v)) switch (b) {
             case 0:
              switch (2 * g + 3 * e.charCodeAt(l + 1)) {
               case 235:
                b = 47;
                break;

               case 220:
                t = l, b = 42;
              }
              break;

             case 42:
              47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), 
              y = "", b = 0);
            }
          }
          0 === b && (f += y);
        }
        K = x, x = g, l++;
      }
      if (0 < (t = p.length)) {
        if (r = c, 0 < A && void 0 !== (C = H(2, p, r, d, D, z, t, h, a, h)) && 0 === (p = C).length) return G + p + F;
        if (p = r.join(",") + "{" + p + "}", 0 != w * E) {
          switch (2 !== w || L(p, 2) || (E = 0), E) {
           case 111:
            p = p.replace(ha, ":-moz-$1") + p;
            break;

           case 112:
            p = p.replace(Q, "::-webkit-input-$1") + p.replace(Q, "::-moz-$1") + p.replace(Q, ":-ms-input-$1") + p;
          }
          E = 0;
        }
      }
      return G + p + F;
    }(O, e, c, 0, 0);
    return 0 < A && (void 0 !== (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0)) && (a = h)), 
    "", E = 0, z = D = 1, a;
  }
  var ca = /^\0+/g, N = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q = /::(place)/g, ha = /:(read-only)/g, G = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z = 1, D = 1, E = 0, w = 1, O = [], S = [], A = 0, R = null, Y = 0;
  return B.use = function T(d) {
    switch (d) {
     case void 0:
     case null:
      A = S.length = 0;
      break;

     default:
      if ("function" == typeof d) S[A++] = d; else if ("object" == typeof d) for (var c = 0, e = d.length; c < e; ++c) T(d[c]); else Y = 0 | !!d;
    }
    return T;
  }, B.set = U, void 0 !== W && U(W), B;
}

Object.defineProperty(exports, "__esModule", ({
  value: !0
})), exports["default"] = stylis_min;


/***/ }),

/***/ 2477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(7028);
} else {}


/***/ }),

/***/ 7028:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: !0
}));

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

exports["default"] = unitlessKeys;


/***/ }),

/***/ 3598:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ 3302:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0});var n,e=__webpack_require__(6786),t=__webpack_require__(3103),r=(n=t)&&"object"==typeof n&&"default"in n?n.default:n,i=__webpack_require__(8038),o=function(){return o=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},o.apply(this,arguments)};function a(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var s,l,d,p,c,u=t.css(s||(s=a(["\n  display: flex;\n  align-items: center;\n  min-width: 322px;\n  max-width: 508px;\n  height: 48px;\n  border: dashed 2px ",";\n  padding: 8px 16px 8px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  flex-grow: 0;\n\n  &.is-disabled {\n    border: dashed 2px ",";\n    cursor: no-drop;\n    svg {\n      fill: ",";\n      color: ",";\n      path {\n        fill: ",";\n        color: ",";\n      }\n    }\n  }\n"],["\n  display: flex;\n  align-items: center;\n  min-width: 322px;\n  max-width: 508px;\n  height: 48px;\n  border: dashed 2px ",";\n  padding: 8px 16px 8px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  flex-grow: 0;\n\n  &.is-disabled {\n    border: dashed 2px ",";\n    cursor: no-drop;\n    svg {\n      fill: ",";\n      color: ",";\n      path {\n        fill: ",";\n        color: ",";\n      }\n    }\n  }\n"])),"#0658c2","#666","#666","#666","#666","#666"),f=r.label(l||(l=a(["\n  position: relative;\n  ",";\n  &:focus-within {\n    outline: 2px solid black;\n  }\n  & > input {\n    display: block;\n    opacity: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n"],["\n  position: relative;\n  ",";\n  &:focus-within {\n    outline: 2px solid black;\n  }\n  & > input {\n    display: block;\n    opacity: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n"])),(function(n){return n.overRide?"":u})),v=r.div(d||(d=a(["\n  border: dashed 2px ",";\n  border-radius: 5px;\n  background-color: ",";\n  opacity: 0.5;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  & > span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n"],["\n  border: dashed 2px ",";\n  border-radius: 5px;\n  background-color: ",";\n  opacity: 0.5;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  & > span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n"])),"#666","#999"),x=r.div(p||(p=a(["\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  & > span {\n    font-size: 12px;\n    color: ",";\n  }\n  .file-types {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 100px;\n  }\n"],["\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  & > span {\n    font-size: 12px;\n    color: ",";\n  }\n  .file-types {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 100px;\n  }\n"])),(function(n){return n.error?"red":"#666"})),h=r.span(c||(c=a(["\n  font-size: 14px;\n  color: ",";\n  span {\n    text-decoration: underline;\n  }\n"],["\n  font-size: 14px;\n  color: ",";\n  span {\n    text-decoration: underline;\n  }\n"])),"#666"),g=function(n){return n/1e3/1e3},b=function(n){return void 0===n?"":n.map((function(n){return".".concat(n.toLowerCase())})).join(",")};function m(n){var t=n.types,r=n.minSize,i=n.maxSize;if(t){var a=t.toString(),s="";return i&&(s+="size >= ".concat(i,", ")),r&&(s+="size <= ".concat(r,", ")),e.jsx("span",o({title:"".concat(s,"types: ").concat(a),className:"file-types"},{children:a}),void 0)}return null}function y(){return e.jsxs("svg",o({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[e.jsx("path",{d:"M5.33317 6.66667H22.6665V16H25.3332V6.66667C25.3332 5.196 24.1372 4 22.6665 4H5.33317C3.8625 4 2.6665 5.196 2.6665 6.66667V22.6667C2.6665 24.1373 3.8625 25.3333 5.33317 25.3333H15.9998V22.6667H5.33317V6.66667Z",fill:"#0658C2"},void 0),e.jsx("path",{d:"M10.6665 14.6667L6.6665 20H21.3332L15.9998 12L11.9998 17.3333L10.6665 14.6667Z",fill:"#0658C2"},void 0),e.jsx("path",{d:"M25.3332 18.6667H22.6665V22.6667H18.6665V25.3333H22.6665V29.3333H25.3332V25.3333H29.3332V22.6667H25.3332V18.6667Z",fill:"#0658C2"},void 0)]}),void 0)}var w=0;var j=function(n,t,r,i,o){return r?e.jsx("span",{children:"File type/size error, Hovered on types!"},void 0):e.jsx(h,{children:i?e.jsx("span",{children:"Upload disabled"},void 0):n||t?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Uploaded Successfully!"},void 0)," Upload another?"]},void 0):e.jsx(e.Fragment,{children:o?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:o.split(" ")[0]},void 0)," ",o.substr(o.indexOf(" ")+1)]},void 0):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Upload"},void 0)," or drop a file right here"]},void 0)},void 0)},void 0)};exports.b=function(n){var t=n.name,r=n.hoverTitle,a=n.types,s=n.handleChange,l=n.classes,d=n.children,p=n.maxSize,c=n.minSize,u=n.fileOrFiles,h=n.onSizeError,C=n.onTypeError,z=n.onSelect,k=n.onDrop,L=n.disabled,S=n.label,E=n.multiple,H=n.required,F=n.onDraggingStateChange,V=n.dropMessageStyle,D=i.useRef(null),P=i.useRef(null),O=i.useState(!1),R=O[0],q=O[1],M=i.useState(null),T=M[0],U=M[1],Z=i.useState(!1),N=Z[0],X=Z[1],Y=function(n){return a&&!function(n,e){var t=n.name.split(".").pop();return e.map((function(n){return n.toLowerCase()})).includes(t.toLowerCase())}(n,a)?(X(!0),C&&C("File type is not supported"),!1):p&&g(n.size)>p?(X(!0),h&&h("File size is too big"),!1):!(c&&g(n.size)<c)||(X(!0),h&&h("File size is too small"),!1)},_=function(n){var e=!1;if(n){if(n instanceof File)e=!Y(n);else for(var t=0;t<n.length;t++){var r=n[t];e=!Y(r)||e}return!e&&(s&&s(n),U(n),q(!0),X(!1),!0)}return!1},B=function(n){var e=n.labelRef,t=n.inputRef,r=n.multiple,o=n.handleChanges,a=n.onDrop,s=i.useState(!1),l=s[0],d=s[1],p=i.useCallback((function(){t.current.click()}),[t]),c=i.useCallback((function(n){n.preventDefault(),n.stopPropagation(),w++,n.dataTransfer.items&&0!==n.dataTransfer.items.length&&d(!0)}),[]),u=i.useCallback((function(n){n.preventDefault(),n.stopPropagation(),--w>0||d(!1)}),[]),f=i.useCallback((function(n){n.preventDefault(),n.stopPropagation()}),[]),v=i.useCallback((function(n){n.preventDefault(),n.stopPropagation(),d(!1),w=0;var e=n.dataTransfer.files;if(e&&e.length>0){var t=r?e:e[0],i=o(t);a&&i&&a(t)}}),[o]);return i.useEffect((function(){var n=e.current;return n.addEventListener("click",p),n.addEventListener("dragenter",c),n.addEventListener("dragleave",u),n.addEventListener("dragover",f),n.addEventListener("drop",v),function(){n.removeEventListener("click",p),n.removeEventListener("dragenter",c),n.removeEventListener("dragleave",u),n.removeEventListener("dragover",f),n.removeEventListener("drop",v)}}),[p,c,u,f,v,e]),l}({labelRef:D,inputRef:P,multiple:E,handleChanges:_,onDrop:k});return i.useEffect((function(){null==F||F(B)}),[B]),i.useEffect((function(){u?(q(!0),U(u)):(P.current&&(P.current.value=""),q(!1),U(null))}),[u]),e.jsxs(f,o({overRide:d,className:"".concat(l||""," ").concat(L?"is-disabled":""),ref:D,htmlFor:t,onClick:function(n){n.preventDefault(),n.stopPropagation()}},{children:[e.jsx("input",{onClick:function(n){n.stopPropagation(),P&&P.current&&P.current.click()},onChange:function(n){var e=n.target.files,t=E?e:e[0],r=_(t);z&&r&&z(t)},accept:b(a),ref:P,type:"file",name:t,disabled:L,multiple:E,required:H},void 0),B&&e.jsx(v,o({style:V},{children:e.jsx("span",{children:r||"Drop Here"},void 0)}),void 0),!d&&e.jsxs(e.Fragment,{children:[e.jsx(y,{},void 0),e.jsxs(x,o({error:N},{children:[j(T,R,N,L,S),e.jsx(m,{types:a,minSize:c,maxSize:p},void 0)]}),void 0)]},void 0),d]}),void 0)};


/***/ }),

/***/ 5588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var require$$0 = __webpack_require__(3598);
var React = __webpack_require__(8038);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _mergeNamespaces(n, m) {
    m.forEach(function (e) {
        e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
            if (k !== 'default' && !(k in n)) {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    });
    return Object.freeze(n);
}

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const COLORS = [
    "blue",
    "orange",
    "yellow",
    "red",
    "purple",
    "amber",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose"
];
const DEFAULT_COLOR = "blue";
const LANGUAGE = "en";
const DATE_FORMAT = "YYYY-MM-DD";
const START_WEEK = "sun";
const DAYS = [0, 1, 2, 3, 4, 5, 6];
const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const CALENDAR_SIZE = 42;
// Beware, these maps of colors cannot be replaced with functions using string interpolation such as `bg-${color}-100`
// as described in Tailwind documentation https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const BG_COLOR = {
    100: {
        blue: "bg-blue-100",
        orange: "bg-orange-100",
        yellow: "bg-yellow-100",
        red: "bg-red-100",
        purple: "bg-purple-100",
        amber: "bg-amber-100",
        lime: "bg-lime-100",
        green: "bg-green-100",
        emerald: "bg-emerald-100",
        teal: "bg-teal-100",
        cyan: "bg-cyan-100",
        sky: "bg-sky-100",
        indigo: "bg-indigo-100",
        violet: "bg-violet-100",
        fuchsia: "bg-fuchsia-100",
        pink: "bg-pink-100",
        rose: "bg-rose-100"
    },
    200: {
        blue: "bg-blue-200",
        orange: "bg-orange-200",
        yellow: "bg-yellow-200",
        red: "bg-red-200",
        purple: "bg-purple-200",
        amber: "bg-amber-200",
        lime: "bg-lime-200",
        green: "bg-green-200",
        emerald: "bg-emerald-200",
        teal: "bg-teal-200",
        cyan: "bg-cyan-200",
        sky: "bg-sky-200",
        indigo: "bg-indigo-200",
        violet: "bg-violet-200",
        fuchsia: "bg-fuchsia-200",
        pink: "bg-pink-200",
        rose: "bg-rose-200"
    },
    500: {
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        red: "bg-red-500",
        purple: "bg-purple-500",
        amber: "bg-amber-500",
        lime: "bg-lime-500",
        green: "bg-green-500",
        emerald: "bg-emerald-500",
        teal: "bg-teal-500",
        cyan: "bg-cyan-500",
        sky: "bg-sky-500",
        indigo: "bg-indigo-500",
        violet: "bg-violet-500",
        fuchsia: "bg-fuchsia-500",
        pink: "bg-pink-500",
        rose: "bg-rose-500"
    },
    hover: {
        blue: "hover:bg-blue-600",
        orange: "hover:bg-orange-600",
        yellow: "hover:bg-yellow-600",
        red: "hover:bg-red-600",
        purple: "hover:bg-purple-600",
        amber: "hover:bg-amber-600",
        lime: "hover:bg-lime-600",
        green: "hover:bg-green-600",
        emerald: "hover:bg-emerald-600",
        teal: "hover:bg-teal-600",
        cyan: "hover:bg-cyan-600",
        sky: "hover:bg-sky-600",
        indigo: "hover:bg-indigo-600",
        violet: "hover:bg-violet-600",
        fuchsia: "hover:bg-fuchsia-600",
        pink: "hover:bg-pink-600",
        rose: "hover:bg-rose-600"
    }
};
const TEXT_COLOR = {
    500: {
        blue: "text-blue-500",
        orange: "text-orange-500",
        yellow: "text-yellow-500",
        red: "text-red-500",
        purple: "text-purple-500",
        amber: "text-amber-500",
        lime: "text-lime-500",
        green: "text-green-500",
        emerald: "text-emerald-500",
        teal: "text-teal-500",
        cyan: "text-cyan-500",
        sky: "text-sky-500",
        indigo: "text-indigo-500",
        violet: "text-violet-500",
        fuchsia: "text-fuchsia-500",
        pink: "text-pink-500",
        rose: "text-rose-500"
    },
    600: {
        blue: "text-blue-600 dark:text-blue-400 dark:hover:text-blue-400",
        orange: "text-orange-600 dark:text-orange-400 dark:hover:text-orange-400",
        yellow: "text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-400",
        red: "text-red-600 dark:text-red-400 dark:hover:text-red-400",
        purple: "text-purple-600 dark:text-purple-400 dark:hover:text-purple-400",
        amber: "text-amber-600 dark:text-amber-400 dark:hover:text-amber-400",
        lime: "text-lime-600 dark:text-lime-400 dark:hover:text-lime-400",
        green: "text-green-600 dark:text-green-400 dark:hover:text-green-400",
        emerald: "text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-400",
        teal: "text-teal-600 dark:text-teal-400 dark:hover:text-teal-400",
        cyan: "text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-400",
        sky: "text-sky-600 dark:text-sky-400 dark:hover:text-sky-400",
        indigo: "text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-400",
        violet: "text-violet-600 dark:text-violet-400 dark:hover:text-violet-400",
        fuchsia: "text-fuchsia-600 dark:text-fuchsia-400 dark:hover:text-fuchsia-400",
        pink: "text-pink-600 dark:text-pink-400 dark:hover:text-pink-400",
        rose: "text-rose-600 dark:text-rose-400 dark:hover:text-rose-400"
    },
    hover: {
        blue: "hover:text-blue-700",
        orange: "hover:text-orange-700",
        yellow: "hover:text-yellow-700",
        red: "hover:text-red-700",
        purple: "hover:text-purple-700",
        amber: "hover:text-amber-700",
        lime: "hover:text-lime-700",
        green: "hover:text-green-700",
        emerald: "hover:text-emerald-700",
        teal: "hover:text-teal-700",
        cyan: "hover:text-cyan-700",
        sky: "hover:text-sky-700",
        indigo: "hover:text-indigo-700",
        violet: "hover:text-violet-700",
        fuchsia: "hover:text-fuchsia-700",
        pink: "hover:text-pink-700",
        rose: "hover:text-rose-700"
    }
};
const BORDER_COLOR = {
    500: {
        blue: "border-blue-500",
        orange: "border-orange-500",
        yellow: "border-yellow-500",
        red: "border-red-500",
        purple: "border-purple-500",
        amber: "border-amber-500",
        lime: "border-lime-500",
        green: "border-green-500",
        emerald: "border-emerald-500",
        teal: "border-teal-500",
        cyan: "border-cyan-500",
        sky: "border-sky-500",
        indigo: "border-indigo-500",
        violet: "border-violet-500",
        fuchsia: "border-fuchsia-500",
        pink: "border-pink-500",
        rose: "border-rose-500"
    },
    focus: {
        blue: "focus:border-blue-500",
        orange: "focus:border-orange-500",
        yellow: "focus:border-yellow-500",
        red: "focus:border-red-500",
        purple: "focus:border-purple-500",
        amber: "focus:border-amber-500",
        lime: "focus:border-lime-500",
        green: "focus:border-green-500",
        emerald: "focus:border-emerald-500",
        teal: "focus:border-teal-500",
        cyan: "focus:border-cyan-500",
        sky: "focus:border-sky-500",
        indigo: "focus:border-indigo-500",
        violet: "focus:border-violet-500",
        fuchsia: "focus:border-fuchsia-500",
        pink: "focus:border-pink-500",
        rose: "focus:border-rose-500"
    }
};
const RING_COLOR = {
    focus: {
        blue: "focus:ring-blue-500",
        orange: "focus:ring-orange-500",
        yellow: "focus:ring-yellow-500",
        red: "focus:ring-red-500",
        purple: "focus:ring-purple-500",
        amber: "focus:ring-amber-500",
        lime: "focus:ring-lime-500",
        green: "focus:ring-green-500",
        emerald: "focus:ring-emerald-500",
        teal: "focus:ring-teal-500",
        cyan: "focus:ring-cyan-500",
        sky: "focus:ring-sky-500",
        indigo: "focus:ring-indigo-500",
        violet: "focus:ring-violet-500",
        fuchsia: "focus:ring-fuchsia-500",
        pink: "focus:ring-pink-500",
        rose: "focus:ring-rose-500"
    },
    "second-focus": {
        blue: "focus:ring-blue-500/20",
        orange: "focus:ring-orange-500/20",
        yellow: "focus:ring-yellow-500/20",
        red: "focus:ring-red-500/20",
        purple: "focus:ring-purple-500/20",
        amber: "focus:ring-amber-500/20",
        lime: "focus:ring-lime-500/20",
        green: "focus:ring-green-500/20",
        emerald: "focus:ring-emerald-500/20",
        teal: "focus:ring-teal-500/20",
        cyan: "focus:ring-cyan-500/20",
        sky: "focus:ring-sky-500/20",
        indigo: "focus:ring-indigo-500/20",
        violet: "focus:ring-violet-500/20",
        fuchsia: "focus:ring-fuchsia-500/20",
        pink: "focus:ring-pink-500/20",
        rose: "focus:ring-rose-500/20"
    }
};
const BUTTON_COLOR = {
    focus: {
        blue: "focus:ring-blue-500/50 focus:bg-blue-100/50",
        orange: "focus:ring-orange-500/50 focus:bg-orange-100/50",
        yellow: "focus:ring-yellow-500/50 focus:bg-yellow-100/50",
        red: "focus:ring-red-500/50 focus:bg-red-100/50",
        purple: "focus:ring-purple-500/50 focus:bg-purple-100/50",
        amber: "focus:ring-amber-500/50 focus:bg-amber-100/50",
        lime: "focus:ring-lime-500/50 focus:bg-lime-100/50",
        green: "focus:ring-green-500/50 focus:bg-green-100/50",
        emerald: "focus:ring-emerald-500/50 focus:bg-emerald-100/50",
        teal: "focus:ring-teal-500/50 focus:bg-teal-100/50",
        cyan: "focus:ring-cyan-500/50 focus:bg-cyan-100/50",
        sky: "focus:ring-sky-500/50 focus:bg-sky-100/50",
        indigo: "focus:ring-indigo-500/50 focus:bg-indigo-100/50",
        violet: "focus:ring-violet-500/50 focus:bg-violet-100/50",
        fuchsia: "focus:ring-fuchsia-500/50 focus:bg-fuchsia-100/50",
        pink: "focus:ring-pink-500/50 focus:bg-pink-100/50",
        rose: "focus:ring-rose-500/50 focus:bg-rose-100/50"
    }
};

const DatepickerContext = React.createContext({
    input: undefined,
    primaryColor: "blue",
    configs: undefined,
    calendarContainer: null,
    arrowContainer: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    hideDatepicker: () => { },
    period: { start: null, end: null },
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changePeriod: period => { },
    dayHover: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changeDayHover: (day) => { },
    inputText: "",
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changeInputText: text => { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    updateFirstDate: date => { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changeDatepickerValue: (
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    value, 
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    e
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    ) => { },
    showFooter: false,
    value: null,
    i18n: LANGUAGE,
    disabled: false,
    inputClassName: "",
    containerClassName: "",
    toggleClassName: "",
    readOnly: false,
    displayFormat: DATE_FORMAT,
    minDate: null,
    maxDate: null,
    disabledDates: null,
    inputId: undefined,
    inputName: undefined,
    startWeekOn: START_WEEK,
    toggleIcon: undefined,
    classNames: undefined,
    popoverDirection: undefined
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var customParseFormat$1 = {exports: {}};

customParseFormat$1.exports;

(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return (e=+e)+(e>68?1900:2e3)};var a=function(e){return function(t){this[e]=+t;}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e);}],h=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1);}],a:[i,function(e){this.afternoon=u(e,!0);}],S:[/\d/,function(e){this.milliseconds=100*+e;}],SS:[n,function(e){this.milliseconds=10*+e;}],SSS:[/\d{3}/,function(e){this.milliseconds=+e;}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r);}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(e){var t=h("months"),n=(h("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[i,function(e){var t=h("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t;}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=s(e);}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=s.length,f=0;f<a;f+=1){var h=s[f],u=d[h],c=u&&u[0],l=u&&u[1];s[f]=l?{regex:c,parser:l}:h.replace(/^\[|\]$/g,"");}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else {var o=i.regex,f=i.parser,h=e.slice(r),u=o.exec(h)[0];f.call(t,u),e=e.replace(u,"");}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon;}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,s=e.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],h=!0===s[3],u=f||h,d=s[2];h&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=c(t)(e),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,h=r.seconds,u=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=h||0,g=u||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(e){return new Date("")}}(t,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),o={};}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""));}else i.call(this,e);};}})); 
} (customParseFormat$1, customParseFormat$1.exports));

var customParseFormatExports = customParseFormat$1.exports;
var customParseFormat = /*@__PURE__*/getDefaultExportFromCjs(customParseFormatExports);

var weekday$1 = {exports: {}};

weekday$1.exports;

(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e,t){t.prototype.weekday=function(e){var t=this.$locale().weekStart||0,i=this.$W,n=(i<t?i+7:i)-t;return this.$utils().u(e)?n:this.subtract(n,"day").add(e,"day")};}})); 
} (weekday$1, weekday$1.exports));

var weekdayExports = weekday$1.exports;
var weekday = /*@__PURE__*/getDefaultExportFromCjs(weekdayExports);

require$$0__default["default"].extend(weekday);
require$$0__default["default"].extend(customParseFormat);
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function generateArrayNumber(start = 0, end = 0) {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
function shortString(value, limit = 3) {
    return value.slice(0, limit);
}
function ucFirst(value) {
    return `${value[0].toUpperCase()}${value.slice(1, value.length)}`;
}
function formatDate(date, format = DATE_FORMAT) {
    return date.format(format);
}
function parseFormattedDate(date, format = DATE_FORMAT) {
    return require$$0__default["default"](date, format);
}
function getFirstDayInMonth(date) {
    return {
        ddd: formatDate(require$$0__default["default"](date).startOf("month"), "ddd"),
        basic: formatDate(require$$0__default["default"](date).startOf("month")),
        object: require$$0__default["default"](date).startOf("month")
    };
}
function getDaysInMonth(date) {
    if (!isNaN(require$$0__default["default"](date).daysInMonth())) {
        return [...generateArrayNumber(1, require$$0__default["default"](date).daysInMonth())];
    }
    return [];
}
function nextMonth(date) {
    return date
        .date(1)
        .hour(0)
        .minute(0)
        .second(0)
        .month(date.month() + 1);
}
function previousMonth(date) {
    return date
        .date(1)
        .hour(0)
        .minute(0)
        .second(0)
        .month(date.month() - 1);
}
function getFirstElementsInArray(array = [], size = 0) {
    return array.slice(0, size);
}
function getLastElementsInArray(array = [], size = 0) {
    const result = [];
    if (Array.isArray(array) && size > 0) {
        if (size >= array.length) {
            return array;
        }
        let y = array.length - 1;
        for (let i = 0; i < size; i++) {
            result.push(array[y]);
            y--;
        }
    }
    return result.reverse();
}
function getNumberOfDay(dayString, startWeekOn) {
    let number = 0;
    let startDateModifier = 0;
    if (startWeekOn) {
        switch (startWeekOn) {
            case "mon":
                startDateModifier = 6;
                break;
            case "tue":
                startDateModifier = 5;
                break;
            case "wed":
                startDateModifier = 4;
                break;
            case "thu":
                startDateModifier = 3;
                break;
            case "fri":
                startDateModifier = 2;
                break;
            case "sat":
                startDateModifier = 1;
                break;
            case "sun":
                startDateModifier = 0;
                break;
        }
    }
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].forEach((item, index) => {
        if (item.includes(dayString)) {
            number = (index + startDateModifier) % 7;
        }
    });
    return number;
}
function getLastDaysInMonth(date, size = 0) {
    return getLastElementsInArray(getDaysInMonth(date), size);
}
function getFirstDaysInMonth(date, size = 0) {
    return getFirstElementsInArray(getDaysInMonth(date), size);
}
function loadLanguageModule(language = LANGUAGE) {
    switch (language) {
        case "af":
            Promise.resolve().then(function () { return af$1; });
            break;
        case "am":
            Promise.resolve().then(function () { return am$1; });
            break;
        case "ar-dz":
            Promise.resolve().then(function () { return arDz$1; });
            break;
        case "ar-iq":
            Promise.resolve().then(function () { return arIq$1; });
            break;
        case "ar-kw":
            Promise.resolve().then(function () { return arKw$1; });
            break;
        case "ar-ly":
            Promise.resolve().then(function () { return arLy$1; });
            break;
        case "ar-ma":
            Promise.resolve().then(function () { return arMa$1; });
            break;
        case "ar-sa":
            Promise.resolve().then(function () { return arSa$1; });
            break;
        case "ar-tn":
            Promise.resolve().then(function () { return arTn$1; });
            break;
        case "ar":
            Promise.resolve().then(function () { return ar$1; });
            break;
        case "az":
            Promise.resolve().then(function () { return az$1; });
            break;
        case "bg":
            Promise.resolve().then(function () { return bg$1; });
            break;
        case "bi":
            Promise.resolve().then(function () { return bi$1; });
            break;
        case "bm":
            Promise.resolve().then(function () { return bm$1; });
            break;
        case "bn-bd":
            Promise.resolve().then(function () { return bnBd$1; });
            break;
        case "bn":
            Promise.resolve().then(function () { return bn$1; });
            break;
        case "bo":
            Promise.resolve().then(function () { return bo$1; });
            break;
        case "br":
            Promise.resolve().then(function () { return br$1; });
            break;
        case "ca":
            Promise.resolve().then(function () { return ca$1; });
            break;
        case "cs":
            Promise.resolve().then(function () { return cs$1; });
            break;
        case "cv":
            Promise.resolve().then(function () { return cv$1; });
            break;
        case "cy":
            Promise.resolve().then(function () { return cy$1; });
            break;
        case "da":
            Promise.resolve().then(function () { return da$1; });
            break;
        case "de-at":
            Promise.resolve().then(function () { return deAt$1; });
            break;
        case "de-ch":
            Promise.resolve().then(function () { return deCh$1; });
            break;
        case "de":
            Promise.resolve().then(function () { return de$1; });
            break;
        case "dv":
            Promise.resolve().then(function () { return dv$1; });
            break;
        case "el":
            Promise.resolve().then(function () { return el$1; });
            break;
        case "en-au":
            Promise.resolve().then(function () { return enAu$1; });
            break;
        case "en-gb":
            Promise.resolve().then(function () { return enGb$1; });
            break;
        case "en-ie":
            Promise.resolve().then(function () { return enIe$1; });
            break;
        case "en-il":
            Promise.resolve().then(function () { return enIl$1; });
            break;
        case "en-in":
            Promise.resolve().then(function () { return enIn$1; });
            break;
        case "en-nz":
            Promise.resolve().then(function () { return enNz$1; });
            break;
        case "en-sg":
            Promise.resolve().then(function () { return enSg$1; });
            break;
        case "en-tt":
            Promise.resolve().then(function () { return enTt$1; });
            break;
        case "en":
            Promise.resolve().then(function () { return en$1; });
            break;
        case "eo":
            Promise.resolve().then(function () { return eo$1; });
            break;
        case "es-do":
            Promise.resolve().then(function () { return esDo$1; });
            break;
        case "es-mx":
            Promise.resolve().then(function () { return esMx$1; });
            break;
        case "es-pr":
            Promise.resolve().then(function () { return esPr$1; });
            break;
        case "es-us":
            Promise.resolve().then(function () { return esUs$1; });
            break;
        case "es":
            Promise.resolve().then(function () { return es$1; });
            break;
        case "et":
            Promise.resolve().then(function () { return et$1; });
            break;
        case "eu":
            Promise.resolve().then(function () { return eu$1; });
            break;
        case "fa":
            Promise.resolve().then(function () { return fa$1; });
            break;
        case "fi":
            Promise.resolve().then(function () { return fi$1; });
            break;
        case "fo":
            Promise.resolve().then(function () { return fo$1; });
            break;
        case "fr-ch":
            Promise.resolve().then(function () { return frCh$1; });
            break;
        case "fr":
            Promise.resolve().then(function () { return fr$1; });
            break;
        case "fy":
            Promise.resolve().then(function () { return fy$1; });
            break;
        case "ga":
            Promise.resolve().then(function () { return ga$1; });
            break;
        case "gd":
            Promise.resolve().then(function () { return gd$1; });
            break;
        case "gl":
            Promise.resolve().then(function () { return gl$1; });
            break;
        case "gom-latn":
            Promise.resolve().then(function () { return gomLatn$1; });
            break;
        case "gu":
            Promise.resolve().then(function () { return gu$1; });
            break;
        case "he":
            Promise.resolve().then(function () { return he$1; });
            break;
        case "hi":
            Promise.resolve().then(function () { return hi$1; });
            break;
        case "hr":
            Promise.resolve().then(function () { return hr$1; });
            break;
        case "ht":
            Promise.resolve().then(function () { return ht$1; });
            break;
        case "hu":
            Promise.resolve().then(function () { return hu$1; });
            break;
        case "hy-am":
            Promise.resolve().then(function () { return hyAm$1; });
            break;
        case "id":
            Promise.resolve().then(function () { return id$1; });
            break;
        case "is":
            Promise.resolve().then(function () { return is$1; });
            break;
        case "it-ch":
            Promise.resolve().then(function () { return itCh$1; });
            break;
        case "it":
            Promise.resolve().then(function () { return it$1; });
            break;
        case "ja":
            Promise.resolve().then(function () { return ja$1; });
            break;
        case "jv":
            Promise.resolve().then(function () { return jv$1; });
            break;
        case "ka":
            Promise.resolve().then(function () { return ka$1; });
            break;
        case "kk":
            Promise.resolve().then(function () { return kk$1; });
            break;
        case "ko":
            Promise.resolve().then(function () { return ko$1; });
            break;
        case "ku":
            Promise.resolve().then(function () { return ku$1; });
            break;
        case "ky":
            Promise.resolve().then(function () { return ky$1; });
            break;
        case "lb":
            Promise.resolve().then(function () { return lb$1; });
            break;
        case "lo":
            Promise.resolve().then(function () { return lo$1; });
            break;
        case "lt":
            Promise.resolve().then(function () { return lt$1; });
            break;
        case "lv":
            Promise.resolve().then(function () { return lv$1; });
            break;
        case "me":
            Promise.resolve().then(function () { return me$1; });
            break;
        case "mi":
            Promise.resolve().then(function () { return mi$1; });
            break;
        case "mk":
            Promise.resolve().then(function () { return mk$1; });
            break;
        case "ml":
            Promise.resolve().then(function () { return ml$1; });
            break;
        case "mn":
            Promise.resolve().then(function () { return mn$1; });
            break;
        case "ms-my":
            Promise.resolve().then(function () { return msMy$1; });
            break;
        case "ms":
            Promise.resolve().then(function () { return ms$1; });
            break;
        case "mt":
            Promise.resolve().then(function () { return mt$1; });
            break;
        case "my":
            Promise.resolve().then(function () { return my$1; });
            break;
        case "nb":
            Promise.resolve().then(function () { return nb$1; });
            break;
        case "ne":
            Promise.resolve().then(function () { return ne$1; });
            break;
        case "nl-be":
            Promise.resolve().then(function () { return nlBe$1; });
            break;
        case "nl":
            Promise.resolve().then(function () { return nl$1; });
            break;
        case "nn":
            Promise.resolve().then(function () { return nn$1; });
            break;
        case "oc-lnc":
            Promise.resolve().then(function () { return ocLnc$1; });
            break;
        case "pa-in":
            Promise.resolve().then(function () { return paIn$1; });
            break;
        case "pl":
            Promise.resolve().then(function () { return pl$1; });
            break;
        case "pt-br":
            Promise.resolve().then(function () { return ptBr$1; });
            break;
        case "pt":
            Promise.resolve().then(function () { return pt$1; });
            break;
        case "rn":
            Promise.resolve().then(function () { return rn$1; });
            break;
        case "ro":
            Promise.resolve().then(function () { return ro$1; });
            break;
        case "ru":
            Promise.resolve().then(function () { return ru$1; });
            break;
        case "rw":
            Promise.resolve().then(function () { return rw$1; });
            break;
        case "sd":
            Promise.resolve().then(function () { return sd$1; });
            break;
        case "se":
            Promise.resolve().then(function () { return se$1; });
            break;
        case "si":
            Promise.resolve().then(function () { return si$1; });
            break;
        case "sk":
            Promise.resolve().then(function () { return sk$1; });
            break;
        case "sl":
            Promise.resolve().then(function () { return sl$1; });
            break;
        case "sq":
            Promise.resolve().then(function () { return sq$1; });
            break;
        case "sr":
            Promise.resolve().then(function () { return sr$1; });
            break;
        case "sr-cyrl":
            Promise.resolve().then(function () { return srCyrl$1; });
            break;
        case "ss":
            Promise.resolve().then(function () { return ss$1; });
            break;
        case "sv-fi":
            Promise.resolve().then(function () { return svFi$1; });
            break;
        case "sv":
            Promise.resolve().then(function () { return sv$1; });
            break;
        case "sw":
            Promise.resolve().then(function () { return sw$1; });
            break;
        case "ta":
            Promise.resolve().then(function () { return ta$1; });
            break;
        case "te":
            Promise.resolve().then(function () { return te$1; });
            break;
        case "tg":
            Promise.resolve().then(function () { return tg$1; });
            break;
        case "th":
            Promise.resolve().then(function () { return th$1; });
            break;
        case "tk":
            Promise.resolve().then(function () { return tk$1; });
            break;
        case "tl-ph":
            Promise.resolve().then(function () { return tlPh$1; });
            break;
        case "tlh":
            Promise.resolve().then(function () { return tlh$1; });
            break;
        case "tr":
            Promise.resolve().then(function () { return tr$1; });
            break;
        case "tzl":
            Promise.resolve().then(function () { return tzl$1; });
            break;
        case "tzm-latn":
            Promise.resolve().then(function () { return tzmLatn$1; });
            break;
        case "tzm":
            Promise.resolve().then(function () { return tzm$1; });
            break;
        case "ug-cn":
            Promise.resolve().then(function () { return ugCn$1; });
            break;
        case "uk":
            Promise.resolve().then(function () { return uk$1; });
            break;
        case "ur":
            Promise.resolve().then(function () { return ur$1; });
            break;
        case "uz-latn":
            Promise.resolve().then(function () { return uzLatn$1; });
            break;
        case "uz":
            Promise.resolve().then(function () { return uz$1; });
            break;
        case "vi":
            Promise.resolve().then(function () { return vi$1; });
            break;
        case "x-pseudo":
            Promise.resolve().then(function () { return xPseudo$1; });
            break;
        case "yo":
            Promise.resolve().then(function () { return yo$1; });
            break;
        case "zh-cn":
            Promise.resolve().then(function () { return zhCn$1; });
            break;
        case "zh-hk":
            Promise.resolve().then(function () { return zhHk$1; });
            break;
        case "zh-tw":
            Promise.resolve().then(function () { return zhTw$1; });
            break;
        case "zh":
            Promise.resolve().then(function () { return zh$1; });
            break;
        default:
            Promise.resolve().then(function () { return en$1; });
            break;
    }
}
function dateIsValid(date) {
    return date instanceof Date && !isNaN(date.getTime());
}

const DateIcon = ({ className = "w-6 h-6" }) => {
    return (React__default["default"].createElement("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React__default["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" })));
};
const CloseIcon = ({ className = "w-6 h-6" }) => {
    return (React__default["default"].createElement("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React__default["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })));
};
const ChevronLeftIcon = ({ className = "w-6 h-6" }) => {
    return (React__default["default"].createElement("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React__default["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" })));
};
const DoubleChevronLeftIcon = ({ className = "w-6 h-6" }) => {
    return (React__default["default"].createElement("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React__default["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" })));
};
const ChevronRightIcon = ({ className = "w-6 h-6" }) => {
    return (React__default["default"].createElement("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React__default["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" })));
};
const DoubleChevronRightIcon = ({ className = "w-6 h-6" }) => {
    return (React__default["default"].createElement("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React__default["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" })));
};
// eslint-disable-next-line react/display-name,@typescript-eslint/ban-types
const Arrow = React__default["default"].forwardRef((props, ref) => {
    return (React__default["default"].createElement("div", { ref: ref, className: "absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600" }));
});
const SecondaryButton = ({ children, onClick, disabled = false }) => {
    // Contexts
    const { primaryColor } = React.useContext(DatepickerContext);
    // Functions
    const getClassName = React.useCallback(() => {
        const ringColor = RING_COLOR.focus[primaryColor];
        return `w-full transition-all duration-300 bg-white dark:text-gray-700 font-medium border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 hover:bg-gray-50 ${ringColor}`;
    }, [primaryColor]);
    return (React__default["default"].createElement("button", { type: "button", className: getClassName(), onClick: onClick, disabled: disabled }, children));
};
const PrimaryButton = ({ children, onClick, disabled = false }) => {
    // Contexts
    const { primaryColor } = React.useContext(DatepickerContext);
    const bgColor = BG_COLOR["500"][primaryColor];
    const borderColor = BORDER_COLOR["500"][primaryColor];
    const bgColorHover = BG_COLOR.hover[primaryColor];
    const ringColor = RING_COLOR.focus[primaryColor];
    // Functions
    const getClassName = React.useCallback(() => {
        return `w-full transition-all duration-300 ${bgColor} ${borderColor} text-white font-medium border px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 ${bgColorHover} ${ringColor} ${disabled ? " cursor-no-drop" : ""}`;
    }, [bgColor, bgColorHover, borderColor, disabled, ringColor]);
    return (React__default["default"].createElement("button", { type: "button", className: getClassName(), onClick: onClick, disabled: disabled }, children));
};
const RoundedButton = ({ children, onClick, disabled, roundedFull = false, padding = "py-[0.55rem]" }) => {
    // Contexts
    const { primaryColor } = React.useContext(DatepickerContext);
    // Functions
    const getClassName = React.useCallback(() => {
        const darkClass = "dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10";
        const defaultClass = !roundedFull
            ? `w-full tracking-wide ${darkClass} transition-all duration-300 px-3 ${padding} uppercase hover:bg-gray-100 rounded-md focus:ring-1`
            : `${darkClass} transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1`;
        const buttonFocusColor = BUTTON_COLOR.focus[primaryColor];
        const disabledClass = disabled ? "line-through" : "";
        return `${defaultClass} ${buttonFocusColor} ${disabledClass}`;
    }, [disabled, padding, primaryColor, roundedFull]);
    return (React__default["default"].createElement("button", { type: "button", className: getClassName(), onClick: onClick, disabled: disabled }, children));
};
const VerticalDash = () => {
    // Contexts
    const { primaryColor } = React.useContext(DatepickerContext);
    const bgColor = BG_COLOR["500"][primaryColor];
    return React__default["default"].createElement("div", { className: `bg-blue-500 h-7 w-1 rounded-full hidden md:block ${bgColor}` });
};

var isBetween$1 = {exports: {}};

isBetween$1.exports;

(function (module, exports) {
	!function(e,i){module.exports=i();}(commonjsGlobal,(function(){return function(e,i,t){i.prototype.isBetween=function(e,i,s,f){var n=t(e),o=t(i),r="("===(f=f||"()")[0],u=")"===f[1];return (r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))};}})); 
} (isBetween$1, isBetween$1.exports));

var isBetweenExports = isBetween$1.exports;
var isBetween = /*@__PURE__*/getDefaultExportFromCjs(isBetweenExports);

require$$0__default["default"].extend(isBetween);
const Days = ({ calendarData, onClickPreviousDays, onClickDay, onClickNextDays }) => {
    // Contexts
    const { primaryColor, period, changePeriod, dayHover, changeDayHover, minDate, maxDate, disabledDates } = React.useContext(DatepickerContext);
    // Functions
    const currentDateClass = React.useCallback((item) => {
        const itemDate = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${item >= 10 ? item : "0" + item}`;
        if (formatDate(require$$0__default["default"]()) === formatDate(require$$0__default["default"](itemDate)))
            return TEXT_COLOR["500"][primaryColor];
        return "";
    }, [calendarData.date, primaryColor]);
    const activeDateData = React.useCallback((day) => {
        const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${day}`;
        let className = "";
        if (require$$0__default["default"](fullDay).isSame(period.start) && require$$0__default["default"](fullDay).isSame(period.end)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium rounded-full`;
        }
        else if (require$$0__default["default"](fullDay).isSame(period.start)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium ${require$$0__default["default"](fullDay).isSame(dayHover) && !period.end
                ? "rounded-full"
                : "rounded-l-full"}`;
        }
        else if (require$$0__default["default"](fullDay).isSame(period.end)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium ${require$$0__default["default"](fullDay).isSame(dayHover) && !period.start
                ? "rounded-full"
                : "rounded-r-full"}`;
        }
        return {
            active: require$$0__default["default"](fullDay).isSame(period.start) || require$$0__default["default"](fullDay).isSame(period.end),
            className: className
        };
    }, [calendarData.date, dayHover, period.end, period.start, primaryColor]);
    const hoverClassByDay = React.useCallback((day) => {
        let className = currentDateClass(day);
        const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${day >= 10 ? day : "0" + day}`;
        if (period.start && period.end) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (require$$0__default["default"](fullDay).isBetween(period.start, period.end, "day", "[)")) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(day)} dark:bg-white/10`;
            }
        }
        if (!dayHover) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return className;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (period.start && require$$0__default["default"](fullDay).isBetween(period.start, dayHover, "day", "[)")) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            className = ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(day)} dark:bg-white/10`;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (period.end && require$$0__default["default"](fullDay).isBetween(dayHover, period.end, "day", "[)")) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            className = ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(day)} dark:bg-white/10`;
        }
        if (dayHover === fullDay) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const bgColor = BG_COLOR["500"][primaryColor];
            className = ` transition-all duration-500 text-white font-medium ${bgColor} ${period.start ? "rounded-r-full" : "rounded-l-full"}`;
        }
        return className;
    }, [calendarData.date, currentDateClass, dayHover, period.end, period.start, primaryColor]);
    const isDateTooEarly = React.useCallback((day, type) => {
        if (!minDate) {
            return false;
        }
        const object = {
            previous: previousMonth(calendarData.date),
            current: calendarData.date,
            next: nextMonth(calendarData.date)
        };
        const newDate = object[type];
        const formattedDate = `${newDate.year()}-${newDate.month() + 1}-${day >= 10 ? day : "0" + day}`;
        return require$$0__default["default"](formattedDate).isSame(require$$0__default["default"](minDate))
            ? false
            : require$$0__default["default"](formattedDate).isBefore(require$$0__default["default"](minDate));
    }, [calendarData.date, minDate]);
    const isDateTooLate = React.useCallback((day, type) => {
        if (!maxDate) {
            return false;
        }
        const object = {
            previous: previousMonth(calendarData.date),
            current: calendarData.date,
            next: nextMonth(calendarData.date)
        };
        const newDate = object[type];
        const formattedDate = `${newDate.year()}-${newDate.month() + 1}-${day >= 10 ? day : "0" + day}`;
        return require$$0__default["default"](formattedDate).isSame(maxDate)
            ? false
            : require$$0__default["default"](formattedDate).isAfter(require$$0__default["default"](maxDate));
    }, [calendarData.date, maxDate]);
    const isDateDisabled = React.useCallback((day, type) => {
        if (isDateTooEarly(day, type) || isDateTooLate(day, type)) {
            return true;
        }
        const object = {
            previous: previousMonth(calendarData.date),
            current: calendarData.date,
            next: nextMonth(calendarData.date)
        };
        const newDate = object[type];
        const formattedDate = `${newDate.year()}-${newDate.month() + 1}-${day >= 10 ? day : "0" + day}`;
        if (!disabledDates || (Array.isArray(disabledDates) && !disabledDates.length)) {
            return false;
        }
        let matchingCount = 0;
        disabledDates?.forEach(dateRange => {
            if (require$$0__default["default"](formattedDate).isAfter(dateRange.startDate) &&
                require$$0__default["default"](formattedDate).isBefore(dateRange.endDate)) {
                matchingCount++;
            }
            if (require$$0__default["default"](formattedDate).isSame(dateRange.startDate) ||
                require$$0__default["default"](formattedDate).isSame(dateRange.endDate)) {
                matchingCount++;
            }
        });
        return matchingCount > 0;
    }, [calendarData.date, isDateTooEarly, isDateTooLate, disabledDates]);
    const buttonClass = React.useCallback((day, type) => {
        const baseClass = "flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10";
        return classNames(baseClass, !activeDateData(day).active ? hoverClassByDay(day) : activeDateData(day).className, isDateDisabled(day, type) && "line-through");
    }, [activeDateData, hoverClassByDay, isDateDisabled]);
    const checkIfHoverPeriodContainsDisabledPeriod = React.useCallback((hoverPeriod) => {
        if (!Array.isArray(disabledDates)) {
            return false;
        }
        for (let i = 0; i < disabledDates.length; i++) {
            if (require$$0__default["default"](hoverPeriod.start).isBefore(disabledDates[i].startDate) &&
                require$$0__default["default"](hoverPeriod.end).isAfter(disabledDates[i].endDate)) {
                return true;
            }
        }
        return false;
    }, [disabledDates]);
    const getMetaData = React.useCallback(() => {
        return {
            previous: previousMonth(calendarData.date),
            current: calendarData.date,
            next: nextMonth(calendarData.date)
        };
    }, [calendarData.date]);
    const hoverDay = React.useCallback((day, type) => {
        const object = getMetaData();
        const newDate = object[type];
        const newHover = `${newDate.year()}-${newDate.month() + 1}-${day >= 10 ? day : "0" + day}`;
        if (period.start && !period.end) {
            const hoverPeriod = { ...period, end: newHover };
            if (require$$0__default["default"](newHover).isBefore(require$$0__default["default"](period.start))) {
                hoverPeriod.start = newHover;
                hoverPeriod.end = period.start;
                if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                    changePeriod({
                        start: null,
                        end: period.start
                    });
                }
            }
            if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                changeDayHover(newHover);
            }
        }
        if (!period.start && period.end) {
            const hoverPeriod = { ...period, start: newHover };
            if (require$$0__default["default"](newHover).isAfter(require$$0__default["default"](period.end))) {
                hoverPeriod.start = period.end;
                hoverPeriod.end = newHover;
                if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                    changePeriod({
                        start: period.end,
                        end: null
                    });
                }
            }
            if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                changeDayHover(newHover);
            }
        }
    }, [
        changeDayHover,
        changePeriod,
        checkIfHoverPeriodContainsDisabledPeriod,
        getMetaData,
        period
    ]);
    const handleClickDay = React.useCallback((day, type) => {
        function continueClick() {
            if (type === "previous") {
                onClickPreviousDays(day);
            }
            if (type === "current") {
                onClickDay(day);
            }
            if (type === "next") {
                onClickNextDays(day);
            }
        }
        if (disabledDates?.length) {
            const object = getMetaData();
            const newDate = object[type];
            const clickDay = `${newDate.year()}-${newDate.month() + 1}-${day >= 10 ? day : "0" + day}`;
            if (period.start && !period.end) {
                require$$0__default["default"](clickDay).isSame(dayHover) && continueClick();
            }
            else if (!period.start && period.end) {
                require$$0__default["default"](clickDay).isSame(dayHover) && continueClick();
            }
            else {
                continueClick();
            }
        }
        else {
            continueClick();
        }
    }, [
        dayHover,
        disabledDates?.length,
        getMetaData,
        onClickDay,
        onClickNextDays,
        onClickPreviousDays,
        period.end,
        period.start
    ]);
    return (React__default["default"].createElement("div", { className: "grid grid-cols-7 gap-y-0.5 my-1" },
        calendarData.days.previous.map((item, index) => (React__default["default"].createElement("button", { type: "button", key: index, disabled: isDateDisabled(item, "previous"), className: "flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10", onClick: () => handleClickDay(item, "previous"), onMouseOver: () => {
                hoverDay(item, "previous");
            } }, item))),
        calendarData.days.current.map((item, index) => (React__default["default"].createElement("button", { type: "button", key: index, disabled: isDateDisabled(item, "current"), className: `${buttonClass(item, "current")}`, onClick: () => handleClickDay(item, "current"), onMouseOver: () => {
                hoverDay(item, "current");
            } }, item))),
        calendarData.days.next.map((item, index) => (React__default["default"].createElement("button", { type: "button", key: index, disabled: isDateDisabled(item, "next"), className: "flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10", onClick: () => handleClickDay(item, "next"), onMouseOver: () => {
                hoverDay(item, "next");
            } }, item)))));
};

const Months = ({ clickMonth }) => {
    const { i18n } = React.useContext(DatepickerContext);
    loadLanguageModule(i18n);
    return (React__default["default"].createElement("div", { className: "w-full grid grid-cols-2 gap-2 mt-2" }, MONTHS.map(item => (React__default["default"].createElement(RoundedButton, { key: item, padding: "py-3", onClick: () => {
            clickMonth(item);
        } },
        React__default["default"].createElement(React__default["default"].Fragment, null, require$$0__default["default"](`2022-${item}-01`).locale(i18n).format("MMM")))))));
};

const Week = () => {
    const { i18n, startWeekOn } = React.useContext(DatepickerContext);
    loadLanguageModule(i18n);
    const startDateModifier = React.useMemo(() => {
        if (startWeekOn) {
            switch (startWeekOn) {
                case "mon":
                    return 1;
                case "tue":
                    return 2;
                case "wed":
                    return 3;
                case "thu":
                    return 4;
                case "fri":
                    return 5;
                case "sat":
                    return 6;
                case "sun":
                    return 0;
                default:
                    return 0;
            }
        }
        return 0;
    }, [startWeekOn]);
    return (React__default["default"].createElement("div", { className: "grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2" }, DAYS.map(item => (React__default["default"].createElement("div", { key: item, className: "tracking-wide text-gray-500 text-center" }, ucFirst(shortString(require$$0__default["default"](`2022-11-${6 + (item + startDateModifier)}`)
        .locale(i18n)
        .format("ddd"))))))));
};

const Years = ({ year, minYear, maxYear, clickYear }) => {
    return (React__default["default"].createElement("div", { className: "w-full grid grid-cols-2 gap-2 mt-2" }, generateArrayNumber(year, year + 11).map((item, index) => (React__default["default"].createElement(RoundedButton, { key: index, padding: "py-3", onClick: () => {
            clickYear(item);
        }, disabled: (maxYear !== null && item > maxYear) || (minYear !== null && item < minYear) },
        React__default["default"].createElement(React__default["default"].Fragment, null, item))))));
};

const Calendar = ({ date, minDate, maxDate, onClickPrevious, onClickNext, changeMonth, changeYear }) => {
    // Contexts
    const { period, changePeriod, changeDayHover, showFooter, changeDatepickerValue, hideDatepicker, asSingle, i18n, startWeekOn, input } = React.useContext(DatepickerContext);
    loadLanguageModule(i18n);
    // States
    const [showMonths, setShowMonths] = React.useState(false);
    const [showYears, setShowYears] = React.useState(false);
    const [year, setYear] = React.useState(date.year());
    // Functions
    const previous = React.useCallback(() => {
        return getLastDaysInMonth(previousMonth(date), getNumberOfDay(getFirstDayInMonth(date).ddd, startWeekOn));
    }, [date, startWeekOn]);
    const current = React.useCallback(() => {
        return getDaysInMonth(formatDate(date));
    }, [date]);
    const next = React.useCallback(() => {
        return getFirstDaysInMonth(previousMonth(date), CALENDAR_SIZE - (previous().length + current().length));
    }, [current, date, previous]);
    const hideMonths = React.useCallback(() => {
        showMonths && setShowMonths(false);
    }, [showMonths]);
    const hideYears = React.useCallback(() => {
        showYears && setShowYears(false);
    }, [showYears]);
    const clickMonth = React.useCallback((month) => {
        setTimeout(() => {
            changeMonth(month);
            setShowMonths(!showMonths);
        }, 250);
    }, [changeMonth, showMonths]);
    const clickYear = React.useCallback((year) => {
        setTimeout(() => {
            changeYear(year);
            setShowYears(!showYears);
        }, 250);
    }, [changeYear, showYears]);
    const clickDay = React.useCallback((day, month = date.month() + 1, year = date.year()) => {
        const fullDay = `${year}-${month}-${day}`;
        let newStart;
        let newEnd = null;
        function chosePeriod(start, end) {
            const ipt = input?.current;
            changeDatepickerValue({
                startDate: require$$0__default["default"](start).format("YYYY-MM-DD"),
                endDate: require$$0__default["default"](end).format("YYYY-MM-DD")
            }, ipt);
            hideDatepicker();
        }
        if (period.start && period.end) {
            if (changeDayHover) {
                changeDayHover(null);
            }
            changePeriod({
                start: null,
                end: null
            });
        }
        if ((!period.start && !period.end) || (period.start && period.end)) {
            if (!period.start && !period.end) {
                changeDayHover(fullDay);
            }
            newStart = fullDay;
            if (asSingle) {
                newEnd = fullDay;
                chosePeriod(fullDay, fullDay);
            }
        }
        else {
            if (period.start && !period.end) {
                // start not null
                // end null
                const condition = require$$0__default["default"](fullDay).isSame(require$$0__default["default"](period.start)) ||
                    require$$0__default["default"](fullDay).isAfter(require$$0__default["default"](period.start));
                newStart = condition ? period.start : fullDay;
                newEnd = condition ? fullDay : period.start;
            }
            else {
                // Start null
                // End not null
                const condition = require$$0__default["default"](fullDay).isSame(require$$0__default["default"](period.end)) ||
                    require$$0__default["default"](fullDay).isBefore(require$$0__default["default"](period.end));
                newStart = condition ? fullDay : period.start;
                newEnd = condition ? period.end : fullDay;
            }
            if (!showFooter) {
                if (newStart && newEnd) {
                    chosePeriod(newStart, newEnd);
                }
            }
        }
        if (!(newEnd && newStart) || showFooter) {
            changePeriod({
                start: newStart,
                end: newEnd
            });
        }
    }, [
        asSingle,
        changeDatepickerValue,
        changeDayHover,
        changePeriod,
        date,
        hideDatepicker,
        period.end,
        period.start,
        showFooter,
        input
    ]);
    const clickPreviousDays = React.useCallback((day) => {
        const newDate = previousMonth(date);
        clickDay(day, newDate.month() + 1, newDate.year());
        onClickPrevious();
    }, [clickDay, date, onClickPrevious]);
    const clickNextDays = React.useCallback((day) => {
        const newDate = nextMonth(date);
        clickDay(day, newDate.month() + 1, newDate.year());
        onClickNext();
    }, [clickDay, date, onClickNext]);
    // UseEffects & UseLayoutEffect
    React.useEffect(() => {
        setYear(date.year());
    }, [date]);
    // Variables
    const calendarData = React.useMemo(() => {
        return {
            date: date,
            days: {
                previous: previous(),
                current: current(),
                next: next()
            }
        };
    }, [current, date, next, previous]);
    const minYear = React__default["default"].useMemo(() => (minDate && require$$0__default["default"](minDate).isValid() ? require$$0__default["default"](minDate).year() : null), [minDate]);
    const maxYear = React__default["default"].useMemo(() => (maxDate && require$$0__default["default"](maxDate).isValid() ? require$$0__default["default"](maxDate).year() : null), [maxDate]);
    return (React__default["default"].createElement("div", { className: "w-full md:w-[297px] md:min-w-[297px]" },
        React__default["default"].createElement("div", { className: "flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5" },
            !showMonths && !showYears && (React__default["default"].createElement("div", { className: "flex-none" },
                React__default["default"].createElement(RoundedButton, { roundedFull: true, onClick: onClickPrevious },
                    React__default["default"].createElement(ChevronLeftIcon, { className: "h-5 w-5" })))),
            showYears && (React__default["default"].createElement("div", { className: "flex-none" },
                React__default["default"].createElement(RoundedButton, { roundedFull: true, onClick: () => {
                        setYear(year - 12);
                    } },
                    React__default["default"].createElement(DoubleChevronLeftIcon, { className: "h-5 w-5" })))),
            React__default["default"].createElement("div", { className: "flex flex-1 items-center space-x-1.5" },
                React__default["default"].createElement("div", { className: "w-1/2" },
                    React__default["default"].createElement(RoundedButton, { onClick: () => {
                            setShowMonths(!showMonths);
                            hideYears();
                        } },
                        React__default["default"].createElement(React__default["default"].Fragment, null, calendarData.date.locale(i18n).format("MMM")))),
                React__default["default"].createElement("div", { className: "w-1/2" },
                    React__default["default"].createElement(RoundedButton, { onClick: () => {
                            setShowYears(!showYears);
                            hideMonths();
                        } },
                        React__default["default"].createElement(React__default["default"].Fragment, null, calendarData.date.year())))),
            showYears && (React__default["default"].createElement("div", { className: "flex-none" },
                React__default["default"].createElement(RoundedButton, { roundedFull: true, onClick: () => {
                        setYear(year + 12);
                    } },
                    React__default["default"].createElement(DoubleChevronRightIcon, { className: "h-5 w-5" })))),
            !showMonths && !showYears && (React__default["default"].createElement("div", { className: "flex-none" },
                React__default["default"].createElement(RoundedButton, { roundedFull: true, onClick: onClickNext },
                    React__default["default"].createElement(ChevronRightIcon, { className: "h-5 w-5" }))))),
        React__default["default"].createElement("div", { className: "px-0.5 sm:px-2 mt-0.5 min-h-[285px]" },
            showMonths && React__default["default"].createElement(Months, { clickMonth: clickMonth }),
            showYears && (React__default["default"].createElement(Years, { year: year, minYear: minYear, maxYear: maxYear, clickYear: clickYear })),
            !showMonths && !showYears && (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement(Week, null),
                React__default["default"].createElement(Days, { calendarData: calendarData, onClickPreviousDays: clickPreviousDays, onClickDay: clickDay, onClickNextDays: clickNextDays }))))));
};

const Footer = () => {
    // Contexts
    const { hideDatepicker, period, changeDatepickerValue, configs, classNames } = React.useContext(DatepickerContext);
    // Functions
    const getClassName = React.useCallback(() => {
        if (typeof classNames !== "undefined" && typeof classNames?.footer === "function") {
            return classNames.footer();
        }
        return "flex items-center justify-end pb-2.5 pt-3 border-t border-gray-300 dark:border-gray-700";
    }, [classNames]);
    return (React__default["default"].createElement("div", { className: getClassName() },
        React__default["default"].createElement("div", { className: "w-full md:w-auto flex items-center justify-center space-x-3" },
            React__default["default"].createElement(SecondaryButton, { onClick: () => {
                    hideDatepicker();
                } },
                React__default["default"].createElement(React__default["default"].Fragment, null, configs?.footer?.cancel ? configs.footer.cancel : "Cancel")),
            React__default["default"].createElement(PrimaryButton, { onClick: () => {
                    if (period.start && period.end) {
                        changeDatepickerValue({
                            startDate: require$$0__default["default"](period.start).format(DATE_FORMAT),
                            endDate: require$$0__default["default"](period.end).format(DATE_FORMAT)
                        });
                        hideDatepicker();
                    }
                }, disabled: !(period.start && period.end) },
                React__default["default"].createElement(React__default["default"].Fragment, null, configs?.footer?.apply ? configs.footer.apply : "Apply")))));
};

const ToggleButton = (e) => {
    return e.isEmpty ? React__default["default"].createElement(DateIcon, { className: "h-5 w-5" }) : React__default["default"].createElement(CloseIcon, { className: "h-5 w-5" });
};

const Input = (e) => {
    // Context
    const { primaryColor, period, dayHover, changeDayHover, calendarContainer, arrowContainer, inputText, changeInputText, hideDatepicker, changeDatepickerValue, asSingle, placeholder, separator, disabled, inputClassName, toggleClassName, toggleIcon, readOnly, displayFormat, inputId, inputName, classNames, popoverDirection } = React.useContext(DatepickerContext);
    // UseRefs
    const buttonRef = React.useRef(null);
    const inputRef = React.useRef(null);
    // Functions
    const getClassName = React.useCallback(() => {
        const input = inputRef.current;
        if (input && typeof classNames !== "undefined" && typeof classNames?.input === "function") {
            return classNames.input(input);
        }
        const border = BORDER_COLOR.focus[primaryColor];
        const ring = RING_COLOR["second-focus"][primaryColor];
        const defaultInputClassName = `relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed ${border} ${ring}`;
        return typeof inputClassName === "function"
            ? inputClassName(defaultInputClassName)
            : typeof inputClassName === "string" && inputClassName !== ""
                ? inputClassName
                : defaultInputClassName;
    }, [inputRef, classNames, primaryColor, inputClassName]);
    const handleInputChange = React.useCallback((e) => {
        const inputValue = e.target.value;
        const start = parseFormattedDate(inputValue.slice(0, 10), displayFormat).format(DATE_FORMAT);
        const end = asSingle
            ? start
            : parseFormattedDate(inputValue.slice(11, inputValue.length), displayFormat).format(DATE_FORMAT);
        const input = inputRef?.current;
        if (start.length === 10 &&
            end.length === 10 &&
            dateIsValid(new Date(start)) &&
            dateIsValid(new Date(end)) &&
            (require$$0__default["default"](start).isBefore(end) || asSingle)) {
            changeDatepickerValue({
                startDate: start,
                endDate: end
            }, e.target);
            if (!asSingle)
                changeDayHover(require$$0__default["default"](end).add(-1, "day").format(DATE_FORMAT));
            else
                changeDayHover(start);
            hideDatepicker();
            if (input) {
                input.blur();
            }
        }
        changeInputText(e.target.value);
    }, [
        changeDatepickerValue,
        changeDayHover,
        changeInputText,
        hideDatepicker,
        displayFormat,
        asSingle
    ]);
    const renderToggleIcon = React.useCallback((isEmpty) => {
        return typeof toggleIcon === "undefined" ? (React__default["default"].createElement(ToggleButton, { isEmpty: isEmpty })) : (toggleIcon(isEmpty));
    }, [toggleIcon]);
    const getToggleClassName = React.useCallback(() => {
        const button = buttonRef.current;
        if (button &&
            typeof classNames !== "undefined" &&
            typeof classNames?.toggleButton === "function") {
            return classNames.toggleButton(button);
        }
        const defaultToggleClassName = "absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed";
        return typeof toggleClassName === "function"
            ? toggleClassName(defaultToggleClassName)
            : typeof toggleClassName === "string" && toggleClassName !== ""
                ? toggleClassName
                : defaultToggleClassName;
    }, [toggleClassName, buttonRef, classNames]);
    // UseEffects && UseLayoutEffect
    React.useEffect(() => {
        if (inputRef && e.setContextRef && typeof e.setContextRef === "function") {
            e.setContextRef(inputRef);
        }
    }, [e, inputRef]);
    React.useEffect(() => {
        const button = buttonRef?.current;
        function focusInput(e) {
            e.stopPropagation();
            const input = inputRef.current;
            if (input) {
                input.focus();
                if (inputText) {
                    changeInputText("");
                    if (dayHover) {
                        changeDayHover(null);
                    }
                    if (period.start && period.end) {
                        changeDatepickerValue({
                            startDate: null,
                            endDate: null
                        }, input);
                    }
                }
            }
        }
        if (button) {
            button.addEventListener("click", focusInput);
        }
        return () => {
            if (button) {
                button.removeEventListener("click", focusInput);
            }
        };
    }, [
        changeDatepickerValue,
        changeDayHover,
        changeInputText,
        dayHover,
        inputText,
        period.end,
        period.start,
        inputRef
    ]);
    React.useEffect(() => {
        const div = calendarContainer?.current;
        const input = inputRef.current;
        const arrow = arrowContainer?.current;
        function showCalendarContainer() {
            if (arrow && div && div.classList.contains("hidden")) {
                div.classList.remove("hidden");
                div.classList.add("block");
                // window.innerWidth === 767
                const popoverOnUp = popoverDirection == "up";
                const popoverOnDown = popoverDirection === "down";
                if (popoverOnUp ||
                    (window.innerWidth > 767 &&
                        window.screen.height - 100 < div.getBoundingClientRect().bottom &&
                        !popoverOnDown)) {
                    div.classList.add("bottom-full");
                    div.classList.add("mb-2.5");
                    div.classList.remove("mt-2.5");
                    arrow.classList.add("-bottom-2");
                    arrow.classList.add("border-r");
                    arrow.classList.add("border-b");
                    arrow.classList.remove("border-l");
                    arrow.classList.remove("border-t");
                }
                setTimeout(() => {
                    div.classList.remove("translate-y-4");
                    div.classList.remove("opacity-0");
                    div.classList.add("translate-y-0");
                    div.classList.add("opacity-1");
                }, 1);
            }
        }
        if (div && input) {
            input.addEventListener("focus", showCalendarContainer);
        }
        return () => {
            if (input) {
                input.removeEventListener("focus", showCalendarContainer);
            }
        };
    }, [calendarContainer, arrowContainer, popoverDirection]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("input", { ref: inputRef, type: "text", className: getClassName(), disabled: disabled, readOnly: readOnly, placeholder: placeholder
                ? placeholder
                : `${displayFormat}${asSingle ? "" : ` ${separator} ${displayFormat}`}`, value: inputText, id: inputId, name: inputName, autoComplete: "off", role: "presentation", onChange: handleInputChange }),
        React__default["default"].createElement("button", { type: "button", ref: buttonRef, disabled: disabled, className: getToggleClassName() }, renderToggleIcon(inputText == null || !inputText?.length))));
};

const DEFAULT_SHORTCUTS = {
    today: {
        text: "Today",
        period: {
            start: formatDate(require$$0__default["default"]()),
            end: formatDate(require$$0__default["default"]())
        }
    },
    yesterday: {
        text: "Yesterday",
        period: {
            start: formatDate(require$$0__default["default"]().subtract(1, "d")),
            end: formatDate(require$$0__default["default"]().subtract(1, "d"))
        }
    },
    past: [
        {
            daysNumber: 7,
            text: "Last 7 days",
            period: {
                start: formatDate(require$$0__default["default"]().subtract(7, "d")),
                end: formatDate(require$$0__default["default"]())
            }
        },
        {
            daysNumber: 30,
            text: "Last 30 days",
            period: {
                start: formatDate(require$$0__default["default"]().subtract(30, "d")),
                end: formatDate(require$$0__default["default"]())
            }
        }
    ],
    currentMonth: {
        text: "This month",
        period: {
            start: formatDate(require$$0__default["default"]().startOf("month")),
            end: formatDate(require$$0__default["default"]().endOf("month"))
        }
    },
    pastMonth: {
        text: "Last month",
        period: {
            start: formatDate(previousMonth(require$$0__default["default"]()).startOf("month")),
            end: formatDate(previousMonth(require$$0__default["default"]()).endOf("month"))
        }
    }
};

// eslint-disable-next-line react/display-name
const ItemTemplate = React__default["default"].memo((props) => {
    const { primaryColor, period, changePeriod, changeInputText, updateFirstDate, dayHover, changeDayHover, hideDatepicker, changeDatepickerValue } = React.useContext(DatepickerContext);
    // Functions
    const getClassName = React.useCallback(() => {
        const textColor = TEXT_COLOR["600"][primaryColor];
        const textColorHover = TEXT_COLOR.hover[primaryColor];
        return `whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer ${textColor} ${textColorHover}`;
    }, [primaryColor]);
    const chosePeriod = React.useCallback((item) => {
        if (dayHover) {
            changeDayHover(null);
        }
        if (period.start || period.end) {
            changePeriod({
                start: null,
                end: null
            });
        }
        changeInputText(`${item.start} ~ ${item.end}`);
        changePeriod(item);
        changeDatepickerValue({
            startDate: item.start,
            endDate: item.end
        });
        updateFirstDate(require$$0__default["default"](item.start));
        hideDatepicker();
    }, [
        changeDatepickerValue,
        changeDayHover,
        changeInputText,
        changePeriod,
        dayHover,
        hideDatepicker,
        period.end,
        period.start,
        updateFirstDate
    ]);
    const children = props?.children;
    return (React__default["default"].createElement("li", { className: getClassName(), onClick: () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            chosePeriod(props?.item.period);
        } }, children));
});
const Shortcuts = () => {
    // Contexts
    const { configs } = React.useContext(DatepickerContext);
    const callPastFunction = React.useCallback((data, numberValue) => {
        return typeof data === "function" ? data(numberValue) : null;
    }, []);
    const shortcutOptions = React.useMemo(() => {
        let options;
        if (configs?.shortcuts && configs?.shortcuts) {
            const formatConfig = Object.keys(configs.shortcuts).map(item => {
                if (Object.keys(DEFAULT_SHORTCUTS).includes(item)) {
                    return [item, DEFAULT_SHORTCUTS[item]];
                }
                else {
                    // using | makes this fail in typecheck as [string] is no longer recognised?
                    if (configs.shortcuts && configs?.shortcuts[item]) {
                        const customConfig = configs?.shortcuts[item];
                        const text = customConfig?.text;
                        const start = require$$0__default["default"](customConfig?.period?.start);
                        const end = require$$0__default["default"](customConfig?.period?.end);
                        if (text &&
                            start.isValid() &&
                            end.isValid() &&
                            (start.isBefore(end) || start.isSame(end))) {
                            return [
                                item,
                                {
                                    text,
                                    period: {
                                        start: start.format(DATE_FORMAT),
                                        end: end.format(DATE_FORMAT)
                                    }
                                }
                            ];
                        }
                        else {
                            return undefined;
                        }
                    }
                    return undefined;
                }
            });
            options = formatConfig?.filter(item => !!item);
        }
        else {
            options = Object.entries(DEFAULT_SHORTCUTS);
        }
        return options;
    }, [configs]);
    const printItemText = React.useCallback((item) => {
        return item?.text ?? null;
    }, []);
    return shortcutOptions?.length ? (React__default["default"].createElement("div", { className: "md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1" },
        React__default["default"].createElement("ul", { className: "w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0" }, shortcutOptions?.map(([key, item], index) => Array.isArray(item) ? (item.map((item, index) => (React__default["default"].createElement(ItemTemplate, { key: index, item: item },
            React__default["default"].createElement(React__default["default"].Fragment, null, key === "past" &&
                configs?.shortcuts &&
                key in configs.shortcuts &&
                item.daysNumber
                ? callPastFunction(configs.shortcuts[key], item.daysNumber)
                : item.text))))) : (React__default["default"].createElement(ItemTemplate, { key: index, item: item },
            React__default["default"].createElement(React__default["default"].Fragment, null, configs?.shortcuts && key in configs.shortcuts
                ? typeof configs.shortcuts[key] === "object"
                    ? printItemText(item)
                    : configs.shortcuts[key]
                : printItemText(item)))))))) : null;
};

function useOnClickOutside(ref, handler) {
    React.useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

const Datepicker = ({ primaryColor = "blue", value = null, onChange, useRange = true, showFooter = false, showShortcuts = false, configs = undefined, asSingle = false, placeholder = null, separator = "~", startFrom = null, i18n = LANGUAGE, disabled = false, inputClassName = null, containerClassName = null, toggleClassName = null, toggleIcon = undefined, displayFormat = DATE_FORMAT, readOnly = false, minDate = null, maxDate = null, disabledDates = null, inputId, inputName, startWeekOn = "sun", classNames = undefined, popoverDirection = undefined }) => {
    // Ref
    const containerRef = React.useRef(null);
    const calendarContainerRef = React.useRef(null);
    const arrowRef = React.useRef(null);
    // State
    const [firstDate, setFirstDate] = React.useState(startFrom && require$$0__default["default"](startFrom).isValid() ? require$$0__default["default"](startFrom) : require$$0__default["default"]());
    const [secondDate, setSecondDate] = React.useState(nextMonth(firstDate));
    const [period, setPeriod] = React.useState({
        start: null,
        end: null
    });
    const [dayHover, setDayHover] = React.useState(null);
    const [inputText, setInputText] = React.useState("");
    const [inputRef, setInputRef] = React.useState(React__default["default"].createRef());
    // Custom Hooks use
    useOnClickOutside(containerRef, () => {
        const container = containerRef.current;
        if (container) {
            hideDatepicker();
        }
    });
    // Functions
    const hideDatepicker = React.useCallback(() => {
        const div = calendarContainerRef.current;
        const arrow = arrowRef.current;
        if (arrow && div && div.classList.contains("block")) {
            div.classList.remove("block");
            div.classList.remove("translate-y-0");
            div.classList.remove("opacity-1");
            div.classList.add("translate-y-4");
            div.classList.add("opacity-0");
            setTimeout(() => {
                div.classList.remove("bottom-full");
                div.classList.add("hidden");
                div.classList.add("mb-2.5");
                div.classList.add("mt-2.5");
                arrow.classList.remove("-bottom-2");
                arrow.classList.remove("border-r");
                arrow.classList.remove("border-b");
                arrow.classList.add("border-l");
                arrow.classList.add("border-t");
            }, 300);
        }
    }, []);
    /* Start First */
    const firstGotoDate = React.useCallback((date) => {
        const newDate = require$$0__default["default"](formatDate(date));
        const reformatDate = require$$0__default["default"](formatDate(secondDate));
        if (newDate.isSame(reformatDate) || newDate.isAfter(reformatDate)) {
            setSecondDate(nextMonth(date));
        }
        setFirstDate(date);
    }, [secondDate]);
    const previousMonthFirst = React.useCallback(() => {
        setFirstDate(previousMonth(firstDate));
    }, [firstDate]);
    const nextMonthFirst = React.useCallback(() => {
        firstGotoDate(nextMonth(firstDate));
    }, [firstDate, firstGotoDate]);
    const changeFirstMonth = React.useCallback((month) => {
        firstGotoDate(require$$0__default["default"](`${firstDate.year()}-${month < 10 ? "0" : ""}${month}-01`));
    }, [firstDate, firstGotoDate]);
    const changeFirstYear = React.useCallback((year) => {
        firstGotoDate(require$$0__default["default"](`${year}-${firstDate.month() + 1}-01`));
    }, [firstDate, firstGotoDate]);
    /* End First */
    /* Start Second */
    const secondGotoDate = React.useCallback((date) => {
        const newDate = require$$0__default["default"](formatDate(date, displayFormat));
        const reformatDate = require$$0__default["default"](formatDate(firstDate, displayFormat));
        if (newDate.isSame(reformatDate) || newDate.isBefore(reformatDate)) {
            setFirstDate(previousMonth(date));
        }
        setSecondDate(date);
    }, [firstDate, displayFormat]);
    const previousMonthSecond = React.useCallback(() => {
        secondGotoDate(previousMonth(secondDate));
    }, [secondDate, secondGotoDate]);
    const nextMonthSecond = React.useCallback(() => {
        setSecondDate(nextMonth(secondDate));
    }, [secondDate]);
    const changeSecondMonth = React.useCallback((month) => {
        secondGotoDate(require$$0__default["default"](`${secondDate.year()}-${month < 10 ? "0" : ""}${month}-01`));
    }, [secondDate, secondGotoDate]);
    const changeSecondYear = React.useCallback((year) => {
        secondGotoDate(require$$0__default["default"](`${year}-${secondDate.month() + 1}-01`));
    }, [secondDate, secondGotoDate]);
    /* End Second */
    // UseEffects & UseLayoutEffect
    React.useEffect(() => {
        const container = containerRef.current;
        const calendarContainer = calendarContainerRef.current;
        const arrow = arrowRef.current;
        if (container && calendarContainer && arrow) {
            const detail = container.getBoundingClientRect();
            const screenCenter = window.innerWidth / 2;
            const containerCenter = (detail.right - detail.x) / 2 + detail.x;
            if (containerCenter > screenCenter) {
                arrow.classList.add("right-0");
                arrow.classList.add("mr-3.5");
                calendarContainer.classList.add("right-0");
            }
        }
    }, []);
    React.useEffect(() => {
        if (value && value.startDate && value.endDate) {
            const startDate = require$$0__default["default"](value.startDate);
            const endDate = require$$0__default["default"](value.endDate);
            const validDate = startDate.isValid() && endDate.isValid();
            const condition = validDate && (startDate.isSame(endDate) || startDate.isBefore(endDate));
            if (condition) {
                setPeriod({
                    start: formatDate(startDate),
                    end: formatDate(endDate)
                });
                setInputText(`${formatDate(startDate, displayFormat)}${asSingle ? "" : ` ${separator} ${formatDate(endDate, displayFormat)}`}`);
            }
        }
        if (value && value.startDate === null && value.endDate === null) {
            setPeriod({
                start: null,
                end: null
            });
            setInputText("");
        }
    }, [asSingle, value, displayFormat, separator]);
    React.useEffect(() => {
        if (startFrom && require$$0__default["default"](startFrom).isValid()) {
            if (value?.startDate != null) {
                setFirstDate(require$$0__default["default"](value.startDate));
                setSecondDate(nextMonth(require$$0__default["default"](value.startDate)));
            }
            else {
                setFirstDate(require$$0__default["default"](startFrom));
                setSecondDate(nextMonth(require$$0__default["default"](startFrom)));
            }
        }
    }, [startFrom, value]);
    // Variables
    const colorPrimary = React.useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            return primaryColor;
        }
        return DEFAULT_COLOR;
    }, [primaryColor]);
    const contextValues = React.useMemo(() => {
        return {
            asSingle,
            primaryColor: colorPrimary,
            configs,
            calendarContainer: calendarContainerRef,
            arrowContainer: arrowRef,
            hideDatepicker,
            period,
            changePeriod: (newPeriod) => setPeriod(newPeriod),
            dayHover,
            changeDayHover: (newDay) => setDayHover(newDay),
            inputText,
            changeInputText: (newText) => setInputText(newText),
            updateFirstDate: (newDate) => firstGotoDate(newDate),
            changeDatepickerValue: onChange,
            showFooter,
            placeholder,
            separator,
            i18n,
            value,
            disabled,
            inputClassName,
            containerClassName,
            toggleClassName,
            toggleIcon,
            readOnly,
            displayFormat,
            minDate,
            maxDate,
            disabledDates,
            inputId,
            inputName,
            startWeekOn,
            classNames,
            onChange,
            input: inputRef,
            popoverDirection
        };
    }, [
        asSingle,
        colorPrimary,
        configs,
        hideDatepicker,
        period,
        dayHover,
        inputText,
        onChange,
        showFooter,
        placeholder,
        separator,
        i18n,
        value,
        disabled,
        inputClassName,
        containerClassName,
        toggleClassName,
        toggleIcon,
        readOnly,
        displayFormat,
        firstGotoDate,
        minDate,
        maxDate,
        disabledDates,
        inputId,
        inputName,
        startWeekOn,
        classNames,
        inputRef,
        popoverDirection
    ]);
    const containerClassNameOverload = React.useMemo(() => {
        const defaultContainerClassName = "relative w-full text-gray-700";
        return typeof containerClassName === "function"
            ? containerClassName(defaultContainerClassName)
            : typeof containerClassName === "string" && containerClassName !== ""
                ? containerClassName
                : defaultContainerClassName;
    }, [containerClassName]);
    return (React__default["default"].createElement(DatepickerContext.Provider, { value: contextValues },
        React__default["default"].createElement("div", { className: containerClassNameOverload, ref: containerRef },
            React__default["default"].createElement(Input, { setContextRef: setInputRef }),
            React__default["default"].createElement("div", { className: "transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden", ref: calendarContainerRef },
                React__default["default"].createElement(Arrow, { ref: arrowRef }),
                React__default["default"].createElement("div", { className: "mt-2.5 shadow-sm border border-gray-300 px-1 py-0.5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg" },
                    React__default["default"].createElement("div", { className: "flex flex-col lg:flex-row py-2" },
                        showShortcuts && React__default["default"].createElement(Shortcuts, null),
                        React__default["default"].createElement("div", { className: `flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5 ${showShortcuts ? "md:pl-2" : "md:pl-1"} pr-2 lg:pr-1` },
                            React__default["default"].createElement(Calendar, { date: firstDate, onClickPrevious: previousMonthFirst, onClickNext: nextMonthFirst, changeMonth: changeFirstMonth, changeYear: changeFirstYear, minDate: minDate, maxDate: maxDate }),
                            useRange && (React__default["default"].createElement(React__default["default"].Fragment, null,
                                React__default["default"].createElement("div", { className: "flex items-center" },
                                    React__default["default"].createElement(VerticalDash, null)),
                                React__default["default"].createElement(Calendar, { date: secondDate, onClickPrevious: previousMonthSecond, onClickNext: nextMonthSecond, changeMonth: changeSecondMonth, changeYear: changeSecondYear, minDate: minDate, maxDate: maxDate }))))),
                    showFooter && React__default["default"].createElement(Footer, null))))));
};

var af$2 = {exports: {}};

af$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(e),t={name:"af",weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),weekStart:1,weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"}};return n.default.locale(t,null,!0),t})); 
} (af$2, af$2.exports));

var afExports = af$2.exports;
var af = /*@__PURE__*/getDefaultExportFromCjs(afExports);

var af$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': af
}, [afExports]);

var am$2 = {exports: {}};

am$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"am",weekdays:"እሑድ_ሰኞ_ማክሰኞ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"),weekdaysShort:"እሑድ_ሰኞ_ማክሰ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"),weekdaysMin:"እሑ_ሰኞ_ማክ_ረቡ_ሐሙ_አር_ቅዳ".split("_"),months:"ጃንዋሪ_ፌብሯሪ_ማርች_ኤፕሪል_ሜይ_ጁን_ጁላይ_ኦገስት_ሴፕቴምበር_ኦክቶበር_ኖቬምበር_ዲሴምበር".split("_"),monthsShort:"ጃንዋ_ፌብሯ_ማርች_ኤፕሪ_ሜይ_ጁን_ጁላይ_ኦገስ_ሴፕቴ_ኦክቶ_ኖቬም_ዲሴም".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"በ%s",past:"%s በፊት",s:"ጥቂት ሰከንዶች",m:"አንድ ደቂቃ",mm:"%d ደቂቃዎች",h:"አንድ ሰዓት",hh:"%d ሰዓታት",d:"አንድ ቀን",dd:"%d ቀናት",M:"አንድ ወር",MM:"%d ወራት",y:"አንድ ዓመት",yy:"%d ዓመታት"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM D ፣ YYYY",LLL:"MMMM D ፣ YYYY HH:mm",LLLL:"dddd ፣ MMMM D ፣ YYYY HH:mm"},ordinal:function(e){return e+"ኛ"}};return t.default.locale(d,null,!0),d})); 
} (am$2, am$2.exports));

var amExports = am$2.exports;
var am = /*@__PURE__*/getDefaultExportFromCjs(amExports);

var am$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': am
}, [amExports]);

var arDz$2 = {exports: {}};

arDz$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"ar-dz",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdaysMin:"أح_إث_ثلا_أر_خم_جم_سب".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiem:function(_){return _>12?"م":"ص"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"}};return t.default.locale(d,null,!0),d})); 
} (arDz$2, arDz$2.exports));

var arDzExports = arDz$2.exports;
var arDz = /*@__PURE__*/getDefaultExportFromCjs(arDzExports);

var arDz$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': arDz
}, [arDzExports]);

var arIq$2 = {exports: {}};

arIq$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"ar-iq",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),months:"كانون الثاني_شباط_آذار_نيسان_أيار_حزيران_تموز_آب_أيلول_تشرين الأول_ تشرين الثاني_كانون الأول".split("_"),weekStart:1,weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),monthsShort:"كانون الثاني_شباط_آذار_نيسان_أيار_حزيران_تموز_آب_أيلول_تشرين الأول_ تشرين الثاني_كانون الأول".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiem:function(e){return e>12?"م":"ص"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"}};return t.default.locale(d,null,!0),d})); 
} (arIq$2, arIq$2.exports));

var arIqExports = arIq$2.exports;
var arIq = /*@__PURE__*/getDefaultExportFromCjs(arIqExports);

var arIq$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': arIq
}, [arIqExports]);

var arKw$2 = {exports: {}};

arKw$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"ar-kw",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiem:function(_){return _>12?"م":"ص"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"}};return t.default.locale(d,null,!0),d})); 
} (arKw$2, arKw$2.exports));

var arKwExports = arKw$2.exports;
var arKw = /*@__PURE__*/getDefaultExportFromCjs(arKwExports);

var arKw$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': arKw
}, [arKwExports]);

var arLy$2 = {exports: {}};

arLy$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),n={name:"ar-ly",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekStart:6,weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),ordinal:function(_){return _},meridiem:function(_){return _>12?"م":"ص"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};return t.default.locale(n,null,!0),n})); 
} (arLy$2, arLy$2.exports));

var arLyExports = arLy$2.exports;
var arLy = /*@__PURE__*/getDefaultExportFromCjs(arLyExports);

var arLy$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': arLy
}, [arLyExports]);

var arMa$2 = {exports: {}};

arMa$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"ar-ma",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekStart:6,weekdaysShort:"احد_إثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiem:function(e){return e>12?"م":"ص"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"}};return t.default.locale(d,null,!0),d})); 
} (arMa$2, arMa$2.exports));

var arMaExports = arMa$2.exports;
var arMa = /*@__PURE__*/getDefaultExportFromCjs(arMaExports);

var arMa$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': arMa
}, [arMaExports]);

var arSa$2 = {exports: {}};

arSa$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"ar-sa",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiem:function(_){return _>12?"م":"ص"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"}};return t.default.locale(d,null,!0),d})); 
} (arSa$2, arSa$2.exports));

var arSaExports = arSa$2.exports;
var arSa = /*@__PURE__*/getDefaultExportFromCjs(arSaExports);

var arSa$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': arSa
}, [arSaExports]);

var arTn$2 = {exports: {}};

arTn$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"ar-tn",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekStart:1,weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiem:function(e){return e>12?"م":"ص"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"}};return t.default.locale(d,null,!0),d})); 
} (arTn$2, arTn$2.exports));

var arTnExports = arTn$2.exports;
var arTn = /*@__PURE__*/getDefaultExportFromCjs(arTnExports);

var arTn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': arTn
}, [arTnExports]);

var ar$2 = {exports: {}};

ar$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),r="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),_={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},d={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},o={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:r,monthsShort:r,weekStart:6,relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(e){return d[e]})).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,(function(e){return _[e]})).replace(/,/g,"،")},ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};return n.default.locale(o,null,!0),o})); 
} (ar$2, ar$2.exports));

var arExports = ar$2.exports;
var ar = /*@__PURE__*/getDefaultExportFromCjs(arExports);

var ar$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ar
}, [arExports]);

var az$2 = {exports: {}};

az$2.exports;

(function (module, exports) {
	!function(a,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(a){function e(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var _=e(a),t={name:"az",weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"bir neçə saniyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},ordinal:function(a){return a}};return _.default.locale(t,null,!0),t})); 
} (az$2, az$2.exports));

var azExports = az$2.exports;
var az = /*@__PURE__*/getDefaultExportFromCjs(azExports);

var az$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': az
}, [azExports]);

var bg$2 = {exports: {}};

bg$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"bg",weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekStart:1,ordinal:function(e){var _=e%100;if(_>10&&_<20)return e+"-ти";var t=e%10;return 1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"}};return t.default.locale(d,null,!0),d})); 
} (bg$2, bg$2.exports));

var bgExports = bg$2.exports;
var bg = /*@__PURE__*/getDefaultExportFromCjs(bgExports);

var bg$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': bg
}, [bgExports]);

var bi$2 = {exports: {}};

bi$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(e),_={name:"bi",weekdays:"Sande_Mande_Tusde_Wenesde_Tosde_Fraede_Sarade".split("_"),months:"Januari_Februari_Maj_Eprel_Mei_Jun_Julae_Okis_Septemba_Oktoba_Novemba_Disemba".split("_"),weekStart:1,weekdaysShort:"San_Man_Tus_Wen_Tos_Frae_Sar".split("_"),monthsShort:"Jan_Feb_Maj_Epr_Mai_Jun_Jul_Oki_Sep_Okt_Nov_Dis".split("_"),weekdaysMin:"San_Ma_Tu_We_To_Fr_Sar".split("_"),ordinal:function(e){return e},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"lo %s",past:"%s bifo",s:"sam seken",m:"wan minit",mm:"%d minit",h:"wan haoa",hh:"%d haoa",d:"wan dei",dd:"%d dei",M:"wan manis",MM:"%d manis",y:"wan yia",yy:"%d yia"}};return n.default.locale(_,null,!0),_})); 
} (bi$2, bi$2.exports));

var biExports = bi$2.exports;
var bi = /*@__PURE__*/getDefaultExportFromCjs(biExports);

var bi$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': bi
}, [biExports]);

var bm$2 = {exports: {}};

bm$2.exports;

(function (module, exports) {
	!function(a,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(a){function e(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var l=e(a),t={name:"bm",weekdays:"Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),weekStart:1,weekdaysShort:"Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),monthsShort:"Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"},relativeTime:{future:"%s kɔnɔ",past:"a bɛ %s bɔ",s:"sanga dama dama",m:"miniti kelen",mm:"miniti %d",h:"lɛrɛ kelen",hh:"lɛrɛ %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"}};return l.default.locale(t,null,!0),t})); 
} (bm$2, bm$2.exports));

var bmExports = bm$2.exports;
var bm = /*@__PURE__*/getDefaultExportFromCjs(bmExports);

var bm$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': bm
}, [bmExports]);

var bnBd$2 = {exports: {}};

bnBd$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _=t(e),n={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},d={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},r={name:"bn-bd",weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),months:"জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),monthsShort:"জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),weekStart:0,preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,(function(e){return d[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return n[e]}))},ordinal:function(e){var t=["ই","লা","রা","ঠা","শে"],_=e%100;return "["+e+(t[(_-20)%10]||t[_]||t[0])+"]"},formats:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY খ্রিস্টাব্দ",LL:"D MMMM YYYY খ্রিস্টাব্দ",LLL:"D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়",LLLL:"dddd, D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়"},meridiem:function(e){return e<4?"রাত":e<6?"ভোর":e<12?"সকাল":e<15?"দুপুর":e<18?"বিকাল":e<20?"সন্ধ্যা":"রাত"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"}};return _.default.locale(r,null,!0),r})); 
} (bnBd$2, bnBd$2.exports));

var bnBdExports = bnBd$2.exports;
var bnBd = /*@__PURE__*/getDefaultExportFromCjs(bnBdExports);

var bnBd$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': bnBd
}, [bnBdExports]);

var bn$2 = {exports: {}};

bn$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),n={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},d={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},o={name:"bn",weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),months:"জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),monthsShort:"জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,(function(e){return d[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return n[e]}))},ordinal:function(e){return e},formats:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"}};return t.default.locale(o,null,!0),o})); 
} (bn$2, bn$2.exports));

var bnExports = bn$2.exports;
var bn = /*@__PURE__*/getDefaultExportFromCjs(bnExports);

var bn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': bn
}, [bnExports]);

var bo$2 = {exports: {}};

bo$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"bo",weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་དང་པོ_ཟླ་གཉིས་པ_ཟླ་གསུམ་པ_ཟླ་བཞི་པ_ཟླ་ལྔ་པ_ཟླ་དྲུག་པ_ཟླ་བདུན་པ_ཟླ་བརྒྱད་པ_ཟླ་དགུ་པ_ཟླ་བཅུ་པ_ཟླ་བཅུ་གཅིག་པ_ཟླ་བཅུ་གཉིས་པ".split("_"),ordinal:function(_){return _},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},relativeTime:{future:"%s ལ་",past:"%s སྔོན་ལ་",s:"ཏོག་ཙམ་",m:"སྐར་མ་གཅིག་",mm:"སྐར་མ་ %d",h:"ཆུ་ཚོད་གཅིག་",hh:"ཆུ་ཚོད་ %d",d:"ཉིན་གཅིག་",dd:"ཉིན་ %d",M:"ཟླ་བ་གཅིག་",MM:"ཟླ་བ་ %d",y:"ལོ་གཅིག་",yy:"ལོ་ %d"}};return t.default.locale(d,null,!0),d})); 
} (bo$2, bo$2.exports));

var boExports = bo$2.exports;
var bo = /*@__PURE__*/getDefaultExportFromCjs(boExports);

var bo$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': bo
}, [boExports]);

var br$2 = {exports: {}};

br$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=n(e);function r(e){return e>9?r(e%10):e}function t(e,n,u){return e+" "+function(e,n){return 2===n?function(e){return {m:"v",b:"v",d:"z"}[e.charAt(0)]+e.substring(1)}(e):e}({mm:"munutenn",MM:"miz",dd:"devezh"}[u],e)}var o={name:"br",weekdays:"Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),months:"Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),weekStart:1,weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),monthsShort:"Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},relativeTime:{future:"a-benn %s",past:"%s ʼzo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:t,h:"un eur",hh:"%d eur",d:"un devezh",dd:t,M:"ur miz",MM:t,y:"ur bloaz",yy:function(e){switch(r(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}},meridiem:function(e){return e<12?"a.m.":"g.m."}};return u.default.locale(o,null,!0),o})); 
} (br$2, br$2.exports));

var brExports = br$2.exports;
var br = /*@__PURE__*/getDefaultExportFromCjs(brExports);

var br$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': br
}, [brExports]);

var ca$2 = {exports: {}};

ca$2.exports;

(function (module, exports) {
	!function(e,s){module.exports=s(require$$0__default["default"]);}(commonjsGlobal,(function(e){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=s(e),_={name:"ca",weekdays:"Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"),weekdaysShort:"Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),months:"Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"),monthsShort:"Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",ll:"D MMM YYYY",lll:"D MMM YYYY, H:mm",llll:"ddd D MMM YYYY, H:mm"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinal:function(e){return ""+e+(1===e||3===e?"r":2===e?"n":4===e?"t":"è")}};return t.default.locale(_,null,!0),_})); 
} (ca$2, ca$2.exports));

var caExports = ca$2.exports;
var ca = /*@__PURE__*/getDefaultExportFromCjs(caExports);

var ca$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ca
}, [caExports]);

var cs$2 = {exports: {}};

cs$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e);function s(e){return e>1&&e<5&&1!=~~(e/10)}function r(e,n,t,r){var d=e+" ";switch(t){case"s":return n||r?"pár sekund":"pár sekundami";case"m":return n?"minuta":r?"minutu":"minutou";case"mm":return n||r?d+(s(e)?"minuty":"minut"):d+"minutami";case"h":return n?"hodina":r?"hodinu":"hodinou";case"hh":return n||r?d+(s(e)?"hodiny":"hodin"):d+"hodinami";case"d":return n||r?"den":"dnem";case"dd":return n||r?d+(s(e)?"dny":"dní"):d+"dny";case"M":return n||r?"měsíc":"měsícem";case"MM":return n||r?d+(s(e)?"měsíce":"měsíců"):d+"měsíci";case"y":return n||r?"rok":"rokem";case"yy":return n||r?d+(s(e)?"roky":"let"):d+"lety"}}var d={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r}};return t.default.locale(d,null,!0),d})); 
} (cs$2, cs$2.exports));

var csExports = cs$2.exports;
var cs = /*@__PURE__*/getDefaultExportFromCjs(csExports);

var cs$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': cs
}, [csExports]);

var cv$2 = {exports: {}};

cv$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),n={name:"cv",weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),weekStart:1,weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"}};return t.default.locale(n,null,!0),n})); 
} (cv$2, cv$2.exports));

var cvExports = cv$2.exports;
var cv = /*@__PURE__*/getDefaultExportFromCjs(cvExports);

var cv$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': cv
}, [cvExports]);

var cy$2 = {exports: {}};

cy$2.exports;

(function (module, exports) {
	!function(d,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(d){function e(d){return d&&"object"==typeof d&&"default"in d?d:{default:d}}var _=e(d),a={name:"cy",weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),weekStart:1,weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),ordinal:function(d){return d},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"}};return _.default.locale(a,null,!0),a})); 
} (cy$2, cy$2.exports));

var cyExports = cy$2.exports;
var cy = /*@__PURE__*/getDefaultExportFromCjs(cyExports);

var cy$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': cy
}, [cyExports]);

var da$2 = {exports: {}};

da$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=t(e),n={name:"da",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn._man._tirs._ons._tors._fre._lør.".split("_"),weekdaysMin:"sø._ma._ti._on._to._fr._lø.".split("_"),months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"),weekStart:1,ordinal:function(e){return e+"."},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"}};return d.default.locale(n,null,!0),n})); 
} (da$2, da$2.exports));

var daExports = da$2.exports;
var da = /*@__PURE__*/getDefaultExportFromCjs(daExports);

var da$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': da
}, [daExports]);

var deAt$2 = {exports: {}};

deAt$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e),i={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(e,n,t){var a=i[t];return Array.isArray(a)&&(a=a[n?0:1]),a.replace("%d",e)}var r={name:"de-at",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),ordinal:function(e){return e+"."},weekStart:1,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return t.default.locale(r,null,!0),r})); 
} (deAt$2, deAt$2.exports));

var deAtExports = deAt$2.exports;
var deAt = /*@__PURE__*/getDefaultExportFromCjs(deAtExports);

var deAt$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': deAt
}, [deAtExports]);

var deCh$2 = {exports: {}};

deCh$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e),a={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(e,n,t){var i=a[t];return Array.isArray(i)&&(i=i[n?0:1]),i.replace("%d",e)}var r={name:"de-ch",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),ordinal:function(e){return e+"."},weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return t.default.locale(r,null,!0),r})); 
} (deCh$2, deCh$2.exports));

var deChExports = deCh$2.exports;
var deCh = /*@__PURE__*/getDefaultExportFromCjs(deChExports);

var deCh$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': deCh
}, [deChExports]);

var de$2 = {exports: {}};

de$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e),a={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(e,n,t){var i=a[t];return Array.isArray(i)&&(i=i[n?0:1]),i.replace("%d",e)}var r={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return t.default.locale(r,null,!0),r})); 
} (de$2, de$2.exports));

var deExports = de$2.exports;
var de = /*@__PURE__*/getDefaultExportFromCjs(deExports);

var de$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': de
}, [deExports]);

var dv$2 = {exports: {}};

dv$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"dv",weekdays:"އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"),months:"ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"),weekStart:7,weekdaysShort:"އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"),monthsShort:"ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"),weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"}};return t.default.locale(d,null,!0),d})); 
} (dv$2, dv$2.exports));

var dvExports = dv$2.exports;
var dv = /*@__PURE__*/getDefaultExportFromCjs(dvExports);

var dv$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': dv
}, [dvExports]);

var el$2 = {exports: {}};

el$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"el",weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),months:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"),ordinal:function(e){return e},weekStart:1,relativeTime:{future:"σε %s",past:"πριν %s",s:"μερικά δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένα μήνα",MM:"%d μήνες",y:"ένα χρόνο",yy:"%d χρόνια"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"}};return t.default.locale(d,null,!0),d})); 
} (el$2, el$2.exports));

var elExports = el$2.exports;
var el = /*@__PURE__*/getDefaultExportFromCjs(elExports);

var el$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': el
}, [elExports]);

var enAu$2 = {exports: {}};

enAu$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),_={name:"en-au",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekStart:1,weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return t.default.locale(_,null,!0),_})); 
} (enAu$2, enAu$2.exports));

var enAuExports = enAu$2.exports;
var enAu = /*@__PURE__*/getDefaultExportFromCjs(enAuExports);

var enAu$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': enAu
}, [enAuExports]);

var enGb$2 = {exports: {}};

enGb$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),_={name:"en-gb",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(e){var a=["th","st","nd","rd"],t=e%100;return "["+e+(a[(t-20)%10]||a[t]||a[0])+"]"}};return t.default.locale(_,null,!0),_})); 
} (enGb$2, enGb$2.exports));

var enGbExports = enGb$2.exports;
var enGb = /*@__PURE__*/getDefaultExportFromCjs(enGbExports);

var enGb$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': enGb
}, [enGbExports]);

var enIe$2 = {exports: {}};

enIe$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),_={name:"en-ie",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekStart:1,weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return t.default.locale(_,null,!0),_})); 
} (enIe$2, enIe$2.exports));

var enIeExports = enIe$2.exports;
var enIe = /*@__PURE__*/getDefaultExportFromCjs(enIeExports);

var enIe$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': enIe
}, [enIeExports]);

var enIl$2 = {exports: {}};

enIl$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _=a(e),t={name:"en-il",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return _.default.locale(t,null,!0),t})); 
} (enIl$2, enIl$2.exports));

var enIlExports = enIl$2.exports;
var enIl = /*@__PURE__*/getDefaultExportFromCjs(enIlExports);

var enIl$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': enIl
}, [enIlExports]);

var enIn$2 = {exports: {}};

enIn$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),n={name:"en-in",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(e){var a=["th","st","nd","rd"],t=e%100;return "["+e+(a[(t-20)%10]||a[t]||a[0])+"]"}};return t.default.locale(n,null,!0),n})); 
} (enIn$2, enIn$2.exports));

var enInExports = enIn$2.exports;
var enIn = /*@__PURE__*/getDefaultExportFromCjs(enInExports);

var enIn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': enIn
}, [enInExports]);

var enNz$2 = {exports: {}};

enNz$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),n={name:"en-nz",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekStart:1,weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(e){var a=["th","st","nd","rd"],t=e%100;return "["+e+(a[(t-20)%10]||a[t]||a[0])+"]"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return t.default.locale(n,null,!0),n})); 
} (enNz$2, enNz$2.exports));

var enNzExports = enNz$2.exports;
var enNz = /*@__PURE__*/getDefaultExportFromCjs(enNzExports);

var enNz$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': enNz
}, [enNzExports]);

var enSg$2 = {exports: {}};

enSg$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),_={name:"en-sg",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekStart:1,weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return t.default.locale(_,null,!0),_})); 
} (enSg$2, enSg$2.exports));

var enSgExports = enSg$2.exports;
var enSg = /*@__PURE__*/getDefaultExportFromCjs(enSgExports);

var enSg$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': enSg
}, [enSgExports]);

var enTt$2 = {exports: {}};

enTt$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),_={name:"en-tt",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return "["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}};return a.default.locale(_,null,!0),_})); 
} (enTt$2, enTt$2.exports));

var enTtExports = enTt$2.exports;
var enTt = /*@__PURE__*/getDefaultExportFromCjs(enTtExports);

var enTt$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': enTt
}, [enTtExports]);

var en$2 = {exports: {}};

en$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n();}(commonjsGlobal,(function(){return {name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var n=["th","st","nd","rd"],t=e%100;return "["+e+(n[(t-20)%10]||n[t]||n[0])+"]"}}})); 
} (en$2, en$2.exports));

var enExports = en$2.exports;
var en = /*@__PURE__*/getDefaultExportFromCjs(enExports);

var en$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': en
}, [enExports]);

var eo$2 = {exports: {}};

eo$2.exports;

(function (module, exports) {
	!function(e,o){module.exports=o(require$$0__default["default"]);}(commonjsGlobal,(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e),t={name:"eo",weekdays:"dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),weekStart:1,weekdaysShort:"dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdaysMin:"di_lu_ma_me_ĵa_ve_sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-a de] MMMM, YYYY",LLL:"D[-a de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-a de] MMMM, YYYY HH:mm"},relativeTime:{future:"post %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"}};return a.default.locale(t,null,!0),t})); 
} (eo$2, eo$2.exports));

var eoExports = eo$2.exports;
var eo = /*@__PURE__*/getDefaultExportFromCjs(eoExports);

var eo$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': eo
}, [eoExports]);

var esDo$2 = {exports: {}};

esDo$2.exports;

(function (module, exports) {
	!function(e,o){module.exports=o(require$$0__default["default"]);}(commonjsGlobal,(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(e),d={name:"es-do",weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekStart:1,relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"}};return s.default.locale(d,null,!0),d})); 
} (esDo$2, esDo$2.exports));

var esDoExports = esDo$2.exports;
var esDo = /*@__PURE__*/getDefaultExportFromCjs(esDoExports);

var esDo$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': esDo
}, [esDoExports]);

var esMx$2 = {exports: {}};

esMx$2.exports;

(function (module, exports) {
	!function(e,o){module.exports=o(require$$0__default["default"]);}(commonjsGlobal,(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(e),d={name:"es-mx",weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"}};return s.default.locale(d,null,!0),d})); 
} (esMx$2, esMx$2.exports));

var esMxExports = esMx$2.exports;
var esMx = /*@__PURE__*/getDefaultExportFromCjs(esMxExports);

var esMx$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': esMx
}, [esMxExports]);

var esPr$2 = {exports: {}};

esPr$2.exports;

(function (module, exports) {
	!function(e,o){module.exports=o(require$$0__default["default"]);}(commonjsGlobal,(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(e),d={name:"es-pr",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return s.default.locale(d,null,!0),d})); 
} (esPr$2, esPr$2.exports));

var esPrExports = esPr$2.exports;
var esPr = /*@__PURE__*/getDefaultExportFromCjs(esPrExports);

var esPr$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': esPr
}, [esPrExports]);

var esUs$2 = {exports: {}};

esUs$2.exports;

(function (module, exports) {
	!function(e,s){module.exports=s(require$$0__default["default"]);}(commonjsGlobal,(function(e){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=s(e),d={name:"es-us",weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"}};return o.default.locale(d,null,!0),d})); 
} (esUs$2, esUs$2.exports));

var esUsExports = esUs$2.exports;
var esUs = /*@__PURE__*/getDefaultExportFromCjs(esUsExports);

var esUs$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': esUs
}, [esUsExports]);

var es$2 = {exports: {}};

es$2.exports;

(function (module, exports) {
	!function(e,o){module.exports=o(require$$0__default["default"]);}(commonjsGlobal,(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(e),d={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return s.default.locale(d,null,!0),d})); 
} (es$2, es$2.exports));

var esExports = es$2.exports;
var es = /*@__PURE__*/getDefaultExportFromCjs(esExports);

var es$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': es
}, [esExports]);

var et$2 = {exports: {}};

et$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e);function u(e,a,t,u){var s={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:["%d minuti","%d minutit"],h:["ühe tunni","tund aega","üks tund"],hh:["%d tunni","%d tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:["%d kuu","%d kuud"],y:["ühe aasta","aasta","üks aasta"],yy:["%d aasta","%d aastat"]};return a?(s[t][2]?s[t][2]:s[t][1]).replace("%d",e):(u?s[t][0]:s[t][1]).replace("%d",e)}var s={name:"et",weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),ordinal:function(e){return e+"."},weekStart:1,relativeTime:{future:"%s pärast",past:"%s tagasi",s:u,m:u,mm:u,h:u,hh:u,d:u,dd:"%d päeva",M:u,MM:u,y:u,yy:u},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"}};return t.default.locale(s,null,!0),s})); 
} (et$2, et$2.exports));

var etExports = et$2.exports;
var et = /*@__PURE__*/getDefaultExportFromCjs(etExports);

var et$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': et
}, [etExports]);

var eu$2 = {exports: {}};

eu$2.exports;

(function (module, exports) {
	!function(a,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(a){function e(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var t=e(a),l={name:"eu",weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),weekStart:1,weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"}};return t.default.locale(l,null,!0),l})); 
} (eu$2, eu$2.exports));

var euExports = eu$2.exports;
var eu = /*@__PURE__*/getDefaultExportFromCjs(euExports);

var eu$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': eu
}, [euExports]);

var fa$2 = {exports: {}};

fa$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"fa",weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌_دو_سه‌_چه_پن_جم_شن".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekStart:6,months:"فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_"),monthsShort:"فرو_ارد_خرد_تیر_مرد_شهر_مهر_آبا_آذر_دی_بهم_اسف".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"در %s",past:"%s قبل",s:"چند ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"}};return t.default.locale(d,null,!0),d})); 
} (fa$2, fa$2.exports));

var faExports = fa$2.exports;
var fa = /*@__PURE__*/getDefaultExportFromCjs(faExports);

var fa$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': fa
}, [faExports]);

var fi$2 = {exports: {}};

fi$2.exports;

(function (module, exports) {
	!function(u,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(u){function e(u){return u&&"object"==typeof u&&"default"in u?u:{default:u}}var t=e(u);function n(u,e,t,n){var i={s:"muutama sekunti",m:"minuutti",mm:"%d minuuttia",h:"tunti",hh:"%d tuntia",d:"päivä",dd:"%d päivää",M:"kuukausi",MM:"%d kuukautta",y:"vuosi",yy:"%d vuotta",numbers:"nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")},a={s:"muutaman sekunnin",m:"minuutin",mm:"%d minuutin",h:"tunnin",hh:"%d tunnin",d:"päivän",dd:"%d päivän",M:"kuukauden",MM:"%d kuukauden",y:"vuoden",yy:"%d vuoden",numbers:"nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")},s=n&&!e?a:i,_=s[t];return u<10?_.replace("%d",s.numbers[u]):_.replace("%d",u)}var i={name:"fi",weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,relativeTime:{future:"%s päästä",past:"%s sitten",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM[ta] YYYY",LLL:"D. MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, D. MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"D. MMM YYYY",lll:"D. MMM YYYY, [klo] HH.mm",llll:"ddd, D. MMM YYYY, [klo] HH.mm"}};return t.default.locale(i,null,!0),i})); 
} (fi$2, fi$2.exports));

var fiExports = fi$2.exports;
var fi = /*@__PURE__*/getDefaultExportFromCjs(fiExports);

var fi$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': fi
}, [fiExports]);

var fo$2 = {exports: {}};

fo$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),r={name:"fo",weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),weekStart:1,weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minuttur",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaður",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"}};return a.default.locale(r,null,!0),r})); 
} (fo$2, fo$2.exports));

var foExports = fo$2.exports;
var fo = /*@__PURE__*/getDefaultExportFromCjs(foExports);

var fo$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': fo
}, [foExports]);

var frCh$2 = {exports: {}};

frCh$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),_={name:"fr-ch",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),weekStart:1,weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"}};return i.default.locale(_,null,!0),_})); 
} (frCh$2, frCh$2.exports));

var frChExports = frCh$2.exports;
var frCh = /*@__PURE__*/getDefaultExportFromCjs(frChExports);

var frCh$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': frCh
}, [frChExports]);

var fr$2 = {exports: {}};

fr$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e),i={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(e){return ""+e+(1===e?"er":"")}};return t.default.locale(i,null,!0),i})); 
} (fr$2, fr$2.exports));

var frExports = fr$2.exports;
var fr = /*@__PURE__*/getDefaultExportFromCjs(frExports);

var fr$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': fr
}, [frExports]);

var fy$2 = {exports: {}};

fy$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),t={name:"fy",weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:"jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),weekStart:1,weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"}};return i.default.locale(t,null,!0),t})); 
} (fy$2, fy$2.exports));

var fyExports = fy$2.exports;
var fy = /*@__PURE__*/getDefaultExportFromCjs(fyExports);

var fy$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': fy
}, [fyExports]);

var ga$2 = {exports: {}};

ga$2.exports;

(function (module, exports) {
	!function(a,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(a){function e(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var i=e(a),n={name:"ga",weekdays:"Dé Domhnaigh_Dé Luain_Dé Máirt_Dé Céadaoin_Déardaoin_Dé hAoine_Dé Satharn".split("_"),months:"Eanáir_Feabhra_Márta_Aibreán_Bealtaine_Méitheamh_Iúil_Lúnasa_Meán Fómhair_Deaireadh Fómhair_Samhain_Nollaig".split("_"),weekStart:1,weekdaysShort:"Dom_Lua_Mái_Céa_Déa_hAo_Sat".split("_"),monthsShort:"Eaná_Feab_Márt_Aibr_Beal_Méit_Iúil_Lúna_Meán_Deai_Samh_Noll".split("_"),weekdaysMin:"Do_Lu_Má_Ce_Dé_hA_Sa".split("_"),ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"i %s",past:"%s ó shin",s:"cúpla soicind",m:"nóiméad",mm:"%d nóiméad",h:"uair an chloig",hh:"%d uair an chloig",d:"lá",dd:"%d lá",M:"mí",MM:"%d mí",y:"bliain",yy:"%d bliain"}};return i.default.locale(n,null,!0),n})); 
} (ga$2, ga$2.exports));

var gaExports = ga$2.exports;
var ga = /*@__PURE__*/getDefaultExportFromCjs(gaExports);

var ga$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ga
}, [gaExports]);

var gd$2 = {exports: {}};

gd$2.exports;

(function (module, exports) {
	!function(a,i){module.exports=i(require$$0__default["default"]);}(commonjsGlobal,(function(a){function i(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var n=i(a),e={name:"gd",weekdays:"Didòmhnaich_Diluain_Dimàirt_Diciadain_Diardaoin_Dihaoine_Disathairne".split("_"),months:"Am Faoilleach_An Gearran_Am Màrt_An Giblean_An Cèitean_An t-Ògmhios_An t-Iuchar_An Lùnastal_An t-Sultain_An Dàmhair_An t-Samhain_An Dùbhlachd".split("_"),weekStart:1,weekdaysShort:"Did_Dil_Dim_Dic_Dia_Dih_Dis".split("_"),monthsShort:"Faoi_Gear_Màrt_Gibl_Cèit_Ògmh_Iuch_Lùn_Sult_Dàmh_Samh_Dùbh".split("_"),weekdaysMin:"Dò_Lu_Mà_Ci_Ar_Ha_Sa".split("_"),ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"}};return n.default.locale(e,null,!0),e})); 
} (gd$2, gd$2.exports));

var gdExports = gd$2.exports;
var gd = /*@__PURE__*/getDefaultExportFromCjs(gdExports);

var gd$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': gd
}, [gdExports]);

var gl$2 = {exports: {}};

gl$2.exports;

(function (module, exports) {
	!function(e,o){module.exports=o(require$$0__default["default"]);}(commonjsGlobal,(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(e),d={name:"gl",weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),weekStart:1,weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),ordinal:function(e){return e+"º"},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"fai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"}};return s.default.locale(d,null,!0),d})); 
} (gl$2, gl$2.exports));

var glExports = gl$2.exports;
var gl = /*@__PURE__*/getDefaultExportFromCjs(glExports);

var gl$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': gl
}, [glExports]);

var gomLatn$2 = {exports: {}};

gomLatn$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),_={name:"gom-latn",weekdays:"Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),months:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),weekStart:1,weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),ordinal:function(e){return e},formats:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"}};return a.default.locale(_,null,!0),_})); 
} (gomLatn$2, gomLatn$2.exports));

var gomLatnExports = gomLatn$2.exports;
var gomLatn = /*@__PURE__*/getDefaultExportFromCjs(gomLatnExports);

var gomLatn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': gomLatn
}, [gomLatnExports]);

var gu$2 = {exports: {}};

gu$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"gu",weekdays:"રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),months:"જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),weekdaysShort:"રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),monthsShort:"જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),weekdaysMin:"ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),ordinal:function(_){return _},formats:{LT:"A h:mm વાગ્યે",LTS:"A h:mm:ss વાગ્યે",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm વાગ્યે",LLLL:"dddd, D MMMM YYYY, A h:mm વાગ્યે"},relativeTime:{future:"%s મા",past:"%s પેહલા",s:"અમુક પળો",m:"એક મિનિટ",mm:"%d મિનિટ",h:"એક કલાક",hh:"%d કલાક",d:"એક દિવસ",dd:"%d દિવસ",M:"એક મહિનો",MM:"%d મહિનો",y:"એક વર્ષ",yy:"%d વર્ષ"}};return t.default.locale(d,null,!0),d})); 
} (gu$2, gu$2.exports));

var guExports = gu$2.exports;
var gu = /*@__PURE__*/getDefaultExportFromCjs(guExports);

var gu$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': gu
}, [guExports]);

var he$2 = {exports: {}};

he$2.exports;

(function (module, exports) {
	!function(Y,M){module.exports=M(require$$0__default["default"]);}(commonjsGlobal,(function(Y){function M(Y){return Y&&"object"==typeof Y&&"default"in Y?Y:{default:Y}}var d=M(Y),e={s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:"%d שעות",hh2:"שעתיים",d:"יום",dd:"%d ימים",dd2:"יומיים",M:"חודש",MM:"%d חודשים",MM2:"חודשיים",y:"שנה",yy:"%d שנים",yy2:"שנתיים"};function _(Y,M,d){return (e[d+(2===Y?"2":"")]||e[d]).replace("%d",Y)}var l={name:"he",weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"),months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"),relativeTime:{future:"בעוד %s",past:"לפני %s",s:_,m:_,mm:_,h:_,hh:_,d:_,dd:_,M:_,MM:_,y:_,yy:_},ordinal:function(Y){return Y},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"}};return d.default.locale(l,null,!0),l})); 
} (he$2, he$2.exports));

var heExports = he$2.exports;
var he = /*@__PURE__*/getDefaultExportFromCjs(heExports);

var he$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': he
}, [heExports]);

var hi$2 = {exports: {}};

hi$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"hi",weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),ordinal:function(_){return _},formats:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"}};return t.default.locale(d,null,!0),d})); 
} (hi$2, hi$2.exports));

var hiExports = hi$2.exports;
var hi = /*@__PURE__*/getDefaultExportFromCjs(hiExports);

var hi$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': hi
}, [hiExports]);

var hr$2 = {exports: {}};

hr$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),s="siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),n="siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),_=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/,o=function(e,a){return _.test(a)?s[e.month()]:n[e.month()]};o.s=n,o.f=s;var i={name:"hr",weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:o,monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},relativeTime:{future:"za %s",past:"prije %s",s:"sekunda",m:"minuta",mm:"%d minuta",h:"sat",hh:"%d sati",d:"dan",dd:"%d dana",M:"mjesec",MM:"%d mjeseci",y:"godina",yy:"%d godine"},ordinal:function(e){return e+"."}};return t.default.locale(i,null,!0),i})); 
} (hr$2, hr$2.exports));

var hrExports = hr$2.exports;
var hr = /*@__PURE__*/getDefaultExportFromCjs(hrExports);

var hr$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': hr
}, [hrExports]);

var ht$2 = {exports: {}};

ht$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=n(e),a={name:"ht",weekdays:"dimanch_lendi_madi_mèkredi_jedi_vandredi_samdi".split("_"),months:"janvye_fevriye_mas_avril_me_jen_jiyè_out_septanm_oktòb_novanm_desanm".split("_"),weekdaysShort:"dim._len._mad._mèk._jed._van._sam.".split("_"),monthsShort:"jan._fev._mas_avr._me_jen_jiyè._out_sept._okt._nov._des.".split("_"),weekdaysMin:"di_le_ma_mè_je_va_sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"nan %s",past:"sa gen %s",s:"kèk segond",m:"yon minit",mm:"%d minit",h:"inèdtan",hh:"%d zè",d:"yon jou",dd:"%d jou",M:"yon mwa",MM:"%d mwa",y:"yon ane",yy:"%d ane"}};return d.default.locale(a,null,!0),a})); 
} (ht$2, ht$2.exports));

var htExports = ht$2.exports;
var ht = /*@__PURE__*/getDefaultExportFromCjs(htExports);

var ht$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ht
}, [htExports]);

var hu$2 = {exports: {}};

hu$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e),r={name:"hu",weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),ordinal:function(e){return e+"."},weekStart:1,relativeTime:{future:"%s múlva",past:"%s",s:function(e,n,t,r){return "néhány másodperc"+(r||n?"":"e")},m:function(e,n,t,r){return "egy perc"+(r||n?"":"e")},mm:function(e,n,t,r){return e+" perc"+(r||n?"":"e")},h:function(e,n,t,r){return "egy "+(r||n?"óra":"órája")},hh:function(e,n,t,r){return e+" "+(r||n?"óra":"órája")},d:function(e,n,t,r){return "egy "+(r||n?"nap":"napja")},dd:function(e,n,t,r){return e+" "+(r||n?"nap":"napja")},M:function(e,n,t,r){return "egy "+(r||n?"hónap":"hónapja")},MM:function(e,n,t,r){return e+" "+(r||n?"hónap":"hónapja")},y:function(e,n,t,r){return "egy "+(r||n?"év":"éve")},yy:function(e,n,t,r){return e+" "+(r||n?"év":"éve")}},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"}};return t.default.locale(r,null,!0),r})); 
} (hu$2, hu$2.exports));

var huExports = hu$2.exports;
var hu = /*@__PURE__*/getDefaultExportFromCjs(huExports);

var hu$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': hu
}, [huExports]);

var hyAm$2 = {exports: {}};

hyAm$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"hy-am",weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),months:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),weekStart:1,weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"}};return t.default.locale(d,null,!0),d})); 
} (hyAm$2, hyAm$2.exports));

var hyAmExports = hyAm$2.exports;
var hyAm = /*@__PURE__*/getDefaultExportFromCjs(hyAmExports);

var hyAm$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': hyAm
}, [hyAmExports]);

var id$2 = {exports: {}};

id$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),_={name:"id",weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(e){return e+"."}};return t.default.locale(_,null,!0),_})); 
} (id$2, id$2.exports));

var idExports = id$2.exports;
var id = /*@__PURE__*/getDefaultExportFromCjs(idExports);

var id$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': id
}, [idExports]);

var is$2 = {exports: {}};

is$2.exports;

(function (module, exports) {
	!function(u,r){module.exports=r(require$$0__default["default"]);}(commonjsGlobal,(function(u){function r(u){return u&&"object"==typeof u&&"default"in u?u:{default:u}}var n=r(u),e={s:["nokkrar sekúndur","nokkrar sekúndur","nokkrum sekúndum"],m:["mínúta","mínútu","mínútu"],mm:["mínútur","mínútur","mínútum"],h:["klukkustund","klukkustund","klukkustund"],hh:["klukkustundir","klukkustundir","klukkustundum"],d:["dagur","dag","degi"],dd:["dagar","daga","dögum"],M:["mánuður","mánuð","mánuði"],MM:["mánuðir","mánuði","mánuðum"],y:["ár","ár","ári"],yy:["ár","ár","árum"]};function t(u,r,n,t){var a=function(u,r,n,t){var a=t?0:n?1:2,d=2===u.length&&r%10==1?u[0]:u,m=e[d][a];return 1===u.length?m:"%d "+m}(n,u,t,r);return a.replace("%d",u)}var a={name:"is",weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),weekStart:1,weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),ordinal:function(u){return u},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t}};return n.default.locale(a,null,!0),a})); 
} (is$2, is$2.exports));

var isExports = is$2.exports;
var is = /*@__PURE__*/getDefaultExportFromCjs(isExports);

var is$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': is
}, [isExports]);

var itCh$2 = {exports: {}};

itCh$2.exports;

(function (module, exports) {
	!function(e,o){module.exports=o(require$$0__default["default"]);}(commonjsGlobal,(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e),t={name:"it-ch",weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),weekStart:1,weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"tra %s",past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"}};return n.default.locale(t,null,!0),t})); 
} (itCh$2, itCh$2.exports));

var itChExports = itCh$2.exports;
var itCh = /*@__PURE__*/getDefaultExportFromCjs(itChExports);

var itCh$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': itCh
}, [itChExports]);

var it$2 = {exports: {}};

it$2.exports;

(function (module, exports) {
	!function(e,o){module.exports=o(require$$0__default["default"]);}(commonjsGlobal,(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=o(e),n={name:"it",weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),weekStart:1,monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"tra %s",past:"%s fa",s:"qualche secondo",m:"un minuto",mm:"%d minuti",h:"un' ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinal:function(e){return e+"º"}};return t.default.locale(n,null,!0),n})); 
} (it$2, it$2.exports));

var itExports = it$2.exports;
var it = /*@__PURE__*/getDefaultExportFromCjs(itExports);

var it$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': it
}, [itExports]);

var ja$2 = {exports: {}};

ja$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return t.default.locale(d,null,!0),d})); 
} (ja$2, ja$2.exports));

var jaExports = ja$2.exports;
var ja = /*@__PURE__*/getDefaultExportFromCjs(jaExports);

var ja$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ja
}, [jaExports]);

var jv$2 = {exports: {}};

jv$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e),_={name:"jv",weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),weekStart:1,weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),ordinal:function(e){return e},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"}};return t.default.locale(_,null,!0),_})); 
} (jv$2, jv$2.exports));

var jvExports = jv$2.exports;
var jv = /*@__PURE__*/getDefaultExportFromCjs(jvExports);

var jv$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': jv
}, [jvExports]);

var ka$2 = {exports: {}};

ka$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"ka",weekdays:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),months:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekStart:1,formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"%s შემდეგ",past:"%s წინ",s:"წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათის",d:"დღეს",dd:"%d დღის განმავლობაში",M:"თვის",MM:"%d თვის",y:"წელი",yy:"%d წლის"},ordinal:function(_){return _}};return t.default.locale(d,null,!0),d})); 
} (ka$2, ka$2.exports));

var kaExports = ka$2.exports;
var ka = /*@__PURE__*/getDefaultExportFromCjs(kaExports);

var ka$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ka
}, [kaExports]);

var kk$2 = {exports: {}};

kk$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"kk",weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekStart:1,relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return t.default.locale(d,null,!0),d})); 
} (kk$2, kk$2.exports));

var kkExports = kk$2.exports;
var kk = /*@__PURE__*/getDefaultExportFromCjs(kkExports);

var kk$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': kk
}, [kkExports]);

var ko$2 = {exports: {}};

ko$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=_(e),t={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(e){return e},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(e){return e<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return d.default.locale(t,null,!0),t})); 
} (ko$2, ko$2.exports));

var koExports = ko$2.exports;
var ko = /*@__PURE__*/getDefaultExportFromCjs(koExports);

var ko$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ko
}, [koExports]);

var ku$2 = {exports: {}};

ku$2.exports;

(function (module, exports) {
	!function(e,t){t(exports,require$$0__default["default"]);}(commonjsGlobal,(function(e,t){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(t),d={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},o={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},u=["کانوونی دووەم","شوبات","ئادار","نیسان","ئایار","حوزەیران","تەممووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانوونی یەکەم"],i={name:"ku",months:u,monthsShort:u,weekdays:"یەکشەممە_دووشەممە_سێشەممە_چوارشەممە_پێنجشەممە_هەینی_شەممە".split("_"),weekdaysShort:"یەکشەم_دووشەم_سێشەم_چوارشەم_پێنجشەم_هەینی_شەممە".split("_"),weekStart:6,weekdaysMin:"ی_د_س_چ_پ_هـ_ش".split("_"),preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(e){return o[e]})).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,(function(e){return d[e]})).replace(/,/g,"،")},ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiem:function(e){return e<12?"پ.ن":"د.ن"},relativeTime:{future:"لە %s",past:"لەمەوپێش %s",s:"چەند چرکەیەک",m:"یەک خولەک",mm:"%d خولەک",h:"یەک کاتژمێر",hh:"%d کاتژمێر",d:"یەک ڕۆژ",dd:"%d ڕۆژ",M:"یەک مانگ",MM:"%d مانگ",y:"یەک ساڵ",yy:"%d ساڵ"}};r.default.locale(i,null,!0),e.default=i,e.englishToArabicNumbersMap=d,Object.defineProperty(e,"__esModule",{value:!0});})); 
} (ku$2, ku$2.exports));

var kuExports = ku$2.exports;
var ku = /*@__PURE__*/getDefaultExportFromCjs(kuExports);

var ku$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ku
}, [kuExports]);

var ky$2 = {exports: {}};

ky$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"ky",weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),weekStart:1,weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"}};return t.default.locale(d,null,!0),d})); 
} (ky$2, ky$2.exports));

var kyExports = ky$2.exports;
var ky = /*@__PURE__*/getDefaultExportFromCjs(kyExports);

var ky$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ky
}, [kyExports]);

var lb$2 = {exports: {}};

lb$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),n={name:"lb",weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),weekStart:1,weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),ordinal:function(e){return e},formats:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"}};return t.default.locale(n,null,!0),n})); 
} (lb$2, lb$2.exports));

var lbExports = lb$2.exports;
var lb = /*@__PURE__*/getDefaultExportFromCjs(lbExports);

var lb$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': lb
}, [lbExports]);

var lo$2 = {exports: {}};

lo$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"lo",weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"}};return t.default.locale(d,null,!0),d})); 
} (lo$2, lo$2.exports));

var loExports = lo$2.exports;
var lo = /*@__PURE__*/getDefaultExportFromCjs(loExports);

var lo$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': lo
}, [loExports]);

var lt$2 = {exports: {}};

lt$2.exports;

(function (module, exports) {
	!function(e,s){module.exports=s(require$$0__default["default"]);}(commonjsGlobal,(function(e){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=s(e),d="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,M=function(e,s){return l.test(s)?d[e.month()]:a[e.month()]};M.s=a,M.f=d;var t={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:M,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(e){return e+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return i.default.locale(t,null,!0),t})); 
} (lt$2, lt$2.exports));

var ltExports = lt$2.exports;
var lt = /*@__PURE__*/getDefaultExportFromCjs(ltExports);

var lt$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': lt
}, [ltExports]);

var lv$2 = {exports: {}};

lv$2.exports;

(function (module, exports) {
	!function(e,s){module.exports=s(require$$0__default["default"]);}(commonjsGlobal,(function(e){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=s(e),d={name:"lv",weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),weekStart:1,weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},relativeTime:{future:"pēc %s",past:"pirms %s",s:"dažām sekundēm",m:"minūtes",mm:"%d minūtēm",h:"stundas",hh:"%d stundām",d:"dienas",dd:"%d dienām",M:"mēneša",MM:"%d mēnešiem",y:"gada",yy:"%d gadiem"}};return t.default.locale(d,null,!0),d})); 
} (lv$2, lv$2.exports));

var lvExports = lv$2.exports;
var lv = /*@__PURE__*/getDefaultExportFromCjs(lvExports);

var lv$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': lv
}, [lvExports]);

var me$2 = {exports: {}};

me$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _=t(e),a={name:"me",weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),weekStart:1,weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),ordinal:function(e){return e},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"}};return _.default.locale(a,null,!0),a})); 
} (me$2, me$2.exports));

var meExports = me$2.exports;
var me = /*@__PURE__*/getDefaultExportFromCjs(meExports);

var me$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': me
}, [meExports]);

var mi$2 = {exports: {}};

mi$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(e),t={name:"mi",weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),weekStart:1,weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"}};return i.default.locale(t,null,!0),t})); 
} (mi$2, mi$2.exports));

var miExports = mi$2.exports;
var mi = /*@__PURE__*/getDefaultExportFromCjs(miExports);

var mi$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': mi
}, [miExports]);

var mk$2 = {exports: {}};

mk$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"mk",weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),weekStart:1,weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),ordinal:function(e){return e},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"}};return t.default.locale(d,null,!0),d})); 
} (mk$2, mk$2.exports));

var mkExports = mk$2.exports;
var mk = /*@__PURE__*/getDefaultExportFromCjs(mkExports);

var mk$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': mk
}, [mkExports]);

var ml$2 = {exports: {}};

ml$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"ml",weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),ordinal:function(_){return _},formats:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"}};return t.default.locale(d,null,!0),d})); 
} (ml$2, ml$2.exports));

var mlExports = ml$2.exports;
var ml = /*@__PURE__*/getDefaultExportFromCjs(mlExports);

var ml$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ml
}, [mlExports]);

var mn$2 = {exports: {}};

mn$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"mn",weekdays:"Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),months:"Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),weekdaysShort:"Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),monthsShort:"1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),weekdaysMin:"Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY оны MMMMын D",LLL:"YYYY оны MMMMын D HH:mm",LLLL:"dddd, YYYY оны MMMMын D HH:mm"},relativeTime:{future:"%s",past:"%s",s:"саяхан",m:"м",mm:"%dм",h:"1ц",hh:"%dц",d:"1ө",dd:"%dө",M:"1с",MM:"%dс",y:"1ж",yy:"%dж"}};return t.default.locale(d,null,!0),d})); 
} (mn$2, mn$2.exports));

var mnExports = mn$2.exports;
var mn = /*@__PURE__*/getDefaultExportFromCjs(mnExports);

var mn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': mn
}, [mnExports]);

var msMy$2 = {exports: {}};

msMy$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),_={name:"ms-my",weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),weekStart:1,weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),ordinal:function(e){return e},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"}};return t.default.locale(_,null,!0),_})); 
} (msMy$2, msMy$2.exports));

var msMyExports = msMy$2.exports;
var msMy = /*@__PURE__*/getDefaultExportFromCjs(msMyExports);

var msMy$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': msMy
}, [msMyExports]);

var ms$2 = {exports: {}};

ms$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),s={name:"ms",weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH.mm",LLLL:"dddd, D MMMM YYYY HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(e){return e+"."}};return t.default.locale(s,null,!0),s})); 
} (ms$2, ms$2.exports));

var msExports = ms$2.exports;
var ms = /*@__PURE__*/getDefaultExportFromCjs(msExports);

var ms$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ms
}, [msExports]);

var mt$2 = {exports: {}};

mt$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),i={name:"mt",weekdays:"Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),months:"Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),weekStart:1,weekdaysShort:"Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),monthsShort:"Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),weekdaysMin:"Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"f’ %s",past:"%s ilu",s:"ftit sekondi",m:"minuta",mm:"%d minuti",h:"siegħa",hh:"%d siegħat",d:"ġurnata",dd:"%d ġranet",M:"xahar",MM:"%d xhur",y:"sena",yy:"%d sni"}};return a.default.locale(i,null,!0),i})); 
} (mt$2, mt$2.exports));

var mtExports = mt$2.exports;
var mt = /*@__PURE__*/getDefaultExportFromCjs(mtExports);

var mt$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': mt
}, [mtExports]);

var my$2 = {exports: {}};

my$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"my",weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),weekStart:1,weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"}};return t.default.locale(d,null,!0),d})); 
} (my$2, my$2.exports));

var myExports = my$2.exports;
var my = /*@__PURE__*/getDefaultExportFromCjs(myExports);

var my$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': my
}, [myExports]);

var nb$2 = {exports: {}};

nb$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return n.default.locale(a,null,!0),a})); 
} (nb$2, nb$2.exports));

var nbExports = nb$2.exports;
var nb = /*@__PURE__*/getDefaultExportFromCjs(nbExports);

var nb$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': nb
}, [nbExports]);

var ne$2 = {exports: {}};

ne$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"ne",weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मे_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),relativeTime:{future:"%s पछि",past:"%s अघि",s:"सेकेन्ड",m:"एक मिनेट",mm:"%d मिनेट",h:"घन्टा",hh:"%d घन्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक वर्ष",yy:"%d वर्ष"},ordinal:function(e){return (""+e).replace(/\d/g,(function(e){return "०१२३४५६७८९"[e]}))},formats:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"}};return t.default.locale(d,null,!0),d})); 
} (ne$2, ne$2.exports));

var neExports = ne$2.exports;
var ne = /*@__PURE__*/getDefaultExportFromCjs(neExports);

var ne$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ne
}, [neExports]);

var nlBe$2 = {exports: {}};

nlBe$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(e),d={name:"nl-be",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),weekStart:1,weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"}};return n.default.locale(d,null,!0),d})); 
} (nlBe$2, nlBe$2.exports));

var nlBeExports = nlBe$2.exports;
var nlBe = /*@__PURE__*/getDefaultExportFromCjs(nlBeExports);

var nlBe$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': nlBe
}, [nlBeExports]);

var nl$2 = {exports: {}};

nl$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=a(e),n={name:"nl",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),ordinal:function(e){return "["+e+(1===e||8===e||e>=20?"ste":"de")+"]"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"een minuut",mm:"%d minuten",h:"een uur",hh:"%d uur",d:"een dag",dd:"%d dagen",M:"een maand",MM:"%d maanden",y:"een jaar",yy:"%d jaar"}};return d.default.locale(n,null,!0),n})); 
} (nl$2, nl$2.exports));

var nlExports = nl$2.exports;
var nl = /*@__PURE__*/getDefaultExportFromCjs(nlExports);

var nl$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': nl
}, [nlExports]);

var nn$2 = {exports: {}};

nn$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"nn",weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_la".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),ordinal:function(e){return e+"."},weekStart:1,relativeTime:{future:"om %s",past:"for %s sidan",s:"nokre sekund",m:"eitt minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månadar",y:"eitt år",yy:"%d år"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"}};return n.default.locale(a,null,!0),a})); 
} (nn$2, nn$2.exports));

var nnExports = nn$2.exports;
var nn = /*@__PURE__*/getDefaultExportFromCjs(nnExports);

var nn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': nn
}, [nnExports]);

var ocLnc$2 = {exports: {}};

ocLnc$2.exports;

(function (module, exports) {
	!function(e,d){module.exports=d(require$$0__default["default"]);}(commonjsGlobal,(function(e){function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=d(e),s={name:"oc-lnc",weekdays:"dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),weekdaysShort:"Dg_Dl_Dm_Dc_Dj_Dv_Ds".split("_"),weekdaysMin:"dg_dl_dm_dc_dj_dv_ds".split("_"),months:"genièr_febrièr_març_abrial_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),monthsShort:"gen_feb_març_abr_mai_junh_julh_ago_set_oct_nov_dec".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",LLL:"D MMMM [de] YYYY [a] H:mm",LLLL:"dddd D MMMM [de] YYYY [a] H:mm"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"unas segondas",m:"una minuta",mm:"%d minutas",h:"una ora",hh:"%d oras",d:"un jorn",dd:"%d jorns",M:"un mes",MM:"%d meses",y:"un an",yy:"%d ans"},ordinal:function(e){return e+"º"}};return n.default.locale(s,null,!0),s})); 
} (ocLnc$2, ocLnc$2.exports));

var ocLncExports = ocLnc$2.exports;
var ocLnc = /*@__PURE__*/getDefaultExportFromCjs(ocLncExports);

var ocLnc$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ocLnc
}, [ocLncExports]);

var paIn$2 = {exports: {}};

paIn$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"pa-in",weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),ordinal:function(_){return _},formats:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"}};return t.default.locale(d,null,!0),d})); 
} (paIn$2, paIn$2.exports));

var paInExports = paIn$2.exports;
var paIn = /*@__PURE__*/getDefaultExportFromCjs(paInExports);

var paIn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': paIn
}, [paInExports]);

var pl$2 = {exports: {}};

pl$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=t(e);function a(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function n(e,t,i){var n=e+" ";switch(i){case"m":return t?"minuta":"minutę";case"mm":return n+(a(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return n+(a(e)?"godziny":"godzin");case"MM":return n+(a(e)?"miesiące":"miesięcy");case"yy":return n+(a(e)?"lata":"lat")}}var r="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),_="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),s=/D MMMM/,d=function(e,t){return s.test(t)?r[e.month()]:_[e.month()]};d.s=_,d.f=r;var o={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:n,mm:n,h:n,hh:n,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:n,y:"rok",yy:n},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return i.default.locale(o,null,!0),o})); 
} (pl$2, pl$2.exports));

var plExports = pl$2.exports;
var pl = /*@__PURE__*/getDefaultExportFromCjs(plExports);

var pl$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': pl
}, [plExports]);

var ptBr$2 = {exports: {}};

ptBr$2.exports;

(function (module, exports) {
	!function(e,o){module.exports=o(require$$0__default["default"]);}(commonjsGlobal,(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e),s={name:"pt-br",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"º"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return a.default.locale(s,null,!0),s})); 
} (ptBr$2, ptBr$2.exports));

var ptBrExports = ptBr$2.exports;
var ptBr = /*@__PURE__*/getDefaultExportFromCjs(ptBrExports);

var ptBr$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ptBr
}, [ptBrExports]);

var pt$2 = {exports: {}};

pt$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=a(e),t={name:"pt",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sab".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"º"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"alguns segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return o.default.locale(t,null,!0),t})); 
} (pt$2, pt$2.exports));

var ptExports = pt$2.exports;
var pt = /*@__PURE__*/getDefaultExportFromCjs(ptExports);

var pt$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': pt
}, [ptExports]);

var rn$2 = {exports: {}};

rn$2.exports;

(function (module, exports) {
	!function(a,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(a){function e(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var t=e(a),u={name:"rn",weekdays:"Ku wa Mungu_Ku wa Mbere_Ku wa Kabiri_Ku wa Gatatu_Ku wa Kane_Ku wa Gatanu_Ku wa Gatandatu".split("_"),weekdaysShort:"Kngu_Kmbr_Kbri_Ktat_Kkan_Ktan_Kdat".split("_"),weekdaysMin:"K7_K1_K2_K3_K4_K5_K6".split("_"),months:"Nzero_Ruhuhuma_Ntwarante_Ndamukiza_Rusama_Ruhenshi_Mukakaro_Myandagaro_Nyakanga_Gitugutu_Munyonyo_Kigarama".split("_"),monthsShort:"Nzer_Ruhuh_Ntwar_Ndam_Rus_Ruhen_Muk_Myand_Nyak_Git_Muny_Kig".split("_"),weekStart:1,ordinal:function(a){return a},relativeTime:{future:"mu %s",past:"%s",s:"amasegonda",m:"Umunota",mm:"%d iminota",h:"isaha",hh:"%d amasaha",d:"Umunsi",dd:"%d iminsi",M:"ukwezi",MM:"%d amezi",y:"umwaka",yy:"%d imyaka"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return t.default.locale(u,null,!0),u})); 
} (rn$2, rn$2.exports));

var rnExports = rn$2.exports;
var rn = /*@__PURE__*/getDefaultExportFromCjs(rnExports);

var rn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': rn
}, [rnExports]);

var ro$2 = {exports: {}};

ro$2.exports;

(function (module, exports) {
	!function(e,i){module.exports=i(require$$0__default["default"]);}(commonjsGlobal,(function(e){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=i(e),_={name:"ro",weekdays:"Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),months:"Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),monthsShort:"Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"peste %s",past:"acum %s",s:"câteva secunde",m:"un minut",mm:"%d minute",h:"o oră",hh:"%d ore",d:"o zi",dd:"%d zile",M:"o lună",MM:"%d luni",y:"un an",yy:"%d ani"},ordinal:function(e){return e}};return t.default.locale(_,null,!0),_})); 
} (ro$2, ro$2.exports));

var roExports = ro$2.exports;
var ro = /*@__PURE__*/getDefaultExportFromCjs(roExports);

var ro$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ro
}, [roExports]);

var ru$2 = {exports: {}};

ru$2.exports;

(function (module, exports) {
	!function(_,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(_){function t(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var e=t(_),n="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),s="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),r="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),o="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),i=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function d(_,t,e){var n,s;return "m"===e?t?"минута":"минуту":_+" "+(n=+_,s={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[e].split("_"),n%10==1&&n%100!=11?s[0]:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?s[1]:s[2])}var u=function(_,t){return i.test(t)?n[_.month()]:s[_.month()]};u.s=s,u.f=n;var a=function(_,t){return i.test(t)?r[_.month()]:o[_.month()]};a.s=o,a.f=r;var m={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:u,monthsShort:a,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:d,mm:d,h:"час",hh:d,d:"день",dd:d,M:"месяц",MM:d,y:"год",yy:d},ordinal:function(_){return _},meridiem:function(_){return _<4?"ночи":_<12?"утра":_<17?"дня":"вечера"}};return e.default.locale(m,null,!0),m})); 
} (ru$2, ru$2.exports));

var ruExports = ru$2.exports;
var ru = /*@__PURE__*/getDefaultExportFromCjs(ruExports);

var ru$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ru
}, [ruExports]);

var rw$2 = {exports: {}};

rw$2.exports;

(function (module, exports) {
	!function(a,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(a){function e(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var u=e(a),t={name:"rw",weekdays:"Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split("_"),months:"Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split("_"),relativeTime:{future:"mu %s",past:"%s",s:"amasegonda",m:"Umunota",mm:"%d iminota",h:"isaha",hh:"%d amasaha",d:"Umunsi",dd:"%d iminsi",M:"ukwezi",MM:"%d amezi",y:"umwaka",yy:"%d imyaka"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(a){return a}};return u.default.locale(t,null,!0),t})); 
} (rw$2, rw$2.exports));

var rwExports = rw$2.exports;
var rw = /*@__PURE__*/getDefaultExportFromCjs(rwExports);

var rw$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': rw
}, [rwExports]);

var sd$2 = {exports: {}};

sd$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"sd",weekdays:"آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"),months:"جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"),weekStart:1,weekdaysShort:"آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"),monthsShort:"جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"),weekdaysMin:"آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},relativeTime:{future:"%s پوء",past:"%s اڳ",s:"چند سيڪنڊ",m:"هڪ منٽ",mm:"%d منٽ",h:"هڪ ڪلاڪ",hh:"%d ڪلاڪ",d:"هڪ ڏينهن",dd:"%d ڏينهن",M:"هڪ مهينو",MM:"%d مهينا",y:"هڪ سال",yy:"%d سال"}};return t.default.locale(d,null,!0),d})); 
} (sd$2, sd$2.exports));

var sdExports = sd$2.exports;
var sd = /*@__PURE__*/getDefaultExportFromCjs(sdExports);

var sd$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': sd
}, [sdExports]);

var se$2 = {exports: {}};

se$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(e),t={name:"se",weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),weekStart:1,weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"}};return n.default.locale(t,null,!0),t})); 
} (se$2, se$2.exports));

var seExports = se$2.exports;
var se = /*@__PURE__*/getDefaultExportFromCjs(seExports);

var se$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': se
}, [seExports]);

var si$2 = {exports: {}};

si$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"si",weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),months:"දුරුතු_නවම්_මැදින්_බක්_වෙසක්_පොසොන්_ඇසළ_නිකිණි_බිනර_වප්_ඉල්_උඳුවප්".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),monthsShort:"දුරු_නව_මැදි_බක්_වෙස_පොසො_ඇස_නිකි_බින_වප්_ඉල්_උඳු".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),ordinal:function(_){return _},formats:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",m:"විනාඩිය",mm:"විනාඩි %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"}};return t.default.locale(d,null,!0),d})); 
} (si$2, si$2.exports));

var siExports = si$2.exports;
var si = /*@__PURE__*/getDefaultExportFromCjs(siExports);

var si$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': si
}, [siExports]);

var sk$2 = {exports: {}};

sk$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function r(e){return e>1&&e<5&&1!=~~(e/10)}function o(e,t,n,o){var a=e+" ";switch(n){case"s":return t||o?"pár sekúnd":"pár sekundami";case"m":return t?"minúta":o?"minútu":"minútou";case"mm":return t||o?a+(r(e)?"minúty":"minút"):a+"minútami";case"h":return t?"hodina":o?"hodinu":"hodinou";case"hh":return t||o?a+(r(e)?"hodiny":"hodín"):a+"hodinami";case"d":return t||o?"deň":"dňom";case"dd":return t||o?a+(r(e)?"dni":"dní"):a+"dňami";case"M":return t||o?"mesiac":"mesiacom";case"MM":return t||o?a+(r(e)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":return t||o?"rok":"rokom";case"yy":return t||o?a+(r(e)?"roky":"rokov"):a+"rokmi"}}var a={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:o,m:o,mm:o,h:o,hh:o,d:o,dd:o,M:o,MM:o,y:o,yy:o}};return n.default.locale(a,null,!0),a})); 
} (sk$2, sk$2.exports));

var skExports = sk$2.exports;
var sk = /*@__PURE__*/getDefaultExportFromCjs(skExports);

var sk$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': sk
}, [skExports]);

var sl$2 = {exports: {}};

sl$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _=t(e),n={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},relativeTime:{future:"čez %s",past:"pred %s",s:"nekaj sekund",m:"minuta",mm:"%d minut",h:"ura",hh:"%d ur",d:"dan",dd:"%d dni",M:"mesec",MM:"%d mesecev",y:"leto",yy:"%d let"}};return _.default.locale(n,null,!0),n})); 
} (sl$2, sl$2.exports));

var slExports = sl$2.exports;
var sl = /*@__PURE__*/getDefaultExportFromCjs(slExports);

var sl$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': sl
}, [slExports]);

var sq$2 = {exports: {}};

sq$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _=t(e),n={name:"sq",weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),weekStart:1,weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"}};return _.default.locale(n,null,!0),n})); 
} (sq$2, sq$2.exports));

var sqExports = sq$2.exports;
var sq = /*@__PURE__*/getDefaultExportFromCjs(sqExports);

var sq$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': sq
}, [sqExports]);

var sr$2 = {exports: {}};

sr$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),r={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function(e,t){return e%10>=1&&e%10<=4&&(e%100<10||e%100>=20)?e%10==1?t[0]:t[1]:t[2]},relativeTimeFormatter:function(e,t,a,d){var n=r.words[a];if(1===a.length)return "y"===a&&t?"jedna godina":d||t?n[0]:n[1];var i=r.correctGrammarCase(e,n);return "yy"===a&&t&&"%d godinu"===i?e+" godina":i.replace("%d",e)}},d={name:"sr",weekdays:"Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:"Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),monthsShort:"Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),weekStart:1,relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:r.relativeTimeFormatter,mm:r.relativeTimeFormatter,h:r.relativeTimeFormatter,hh:r.relativeTimeFormatter,d:r.relativeTimeFormatter,dd:r.relativeTimeFormatter,M:r.relativeTimeFormatter,MM:r.relativeTimeFormatter,y:r.relativeTimeFormatter,yy:r.relativeTimeFormatter},ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};return a.default.locale(d,null,!0),d})); 
} (sr$2, sr$2.exports));

var srExports = sr$2.exports;
var sr = /*@__PURE__*/getDefaultExportFromCjs(srExports);

var sr$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': sr
}, [srExports]);

var srCyrl$2 = {exports: {}};

srCyrl$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e),a={words:{m:["један минут","једног минута"],mm:["%d минут","%d минута","%d минута"],h:["један сат","једног сата"],hh:["%d сат","%d сата","%d сати"],d:["један дан","једног дана"],dd:["%d дан","%d дана","%d дана"],M:["један месец","једног месеца"],MM:["%d месец","%d месеца","%d месеци"],y:["једну годину","једне године"],yy:["%d годину","%d године","%d година"]},correctGrammarCase:function(e,t){return e%10>=1&&e%10<=4&&(e%100<10||e%100>=20)?e%10==1?t[0]:t[1]:t[2]},relativeTimeFormatter:function(e,t,r,d){var i=a.words[r];if(1===r.length)return "y"===r&&t?"једна година":d||t?i[0]:i[1];var m=a.correctGrammarCase(e,i);return "yy"===r&&t&&"%d годину"===m?e+" година":m.replace("%d",e)}},d={name:"sr-cyrl",weekdays:"Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота".split("_"),weekdaysShort:"Нед._Пон._Уто._Сре._Чет._Пет._Суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),months:"Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар".split("_"),monthsShort:"Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:a.relativeTimeFormatter,mm:a.relativeTimeFormatter,h:a.relativeTimeFormatter,hh:a.relativeTimeFormatter,d:a.relativeTimeFormatter,dd:a.relativeTimeFormatter,M:a.relativeTimeFormatter,MM:a.relativeTimeFormatter,y:a.relativeTimeFormatter,yy:a.relativeTimeFormatter},ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};return r.default.locale(d,null,!0),d})); 
} (srCyrl$2, srCyrl$2.exports));

var srCyrlExports = srCyrl$2.exports;
var srCyrl = /*@__PURE__*/getDefaultExportFromCjs(srCyrlExports);

var srCyrl$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': srCyrl
}, [srCyrlExports]);

var ss$2 = {exports: {}};

ss$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e),i={name:"ss",weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),weekStart:1,weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),ordinal:function(e){return e},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"}};return a.default.locale(i,null,!0),i})); 
} (ss$2, ss$2.exports));

var ssExports = ss$2.exports;
var ss = /*@__PURE__*/getDefaultExportFromCjs(ssExports);

var ss$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ss
}, [ssExports]);

var svFi$2 = {exports: {}};

svFi$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),d={name:"sv-fi",weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){var t=e%10;return "["+e+(1===t||2===t?"a":"e")+"]"},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY, [kl.] HH.mm",LLLL:"dddd, D. MMMM YYYY, [kl.] HH.mm",l:"D.M.YYYY",ll:"D. MMM YYYY",lll:"D. MMM YYYY, [kl.] HH.mm",llll:"ddd, D. MMM YYYY, [kl.] HH.mm"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"}};return a.default.locale(d,null,!0),d})); 
} (svFi$2, svFi$2.exports));

var svFiExports = svFi$2.exports;
var svFi = /*@__PURE__*/getDefaultExportFromCjs(svFiExports);

var svFi$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': svFi
}, [svFiExports]);

var sv$2 = {exports: {}};

sv$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),d={name:"sv",weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){var t=e%10;return "["+e+(1===t||2===t?"a":"e")+"]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"}};return a.default.locale(d,null,!0),d})); 
} (sv$2, sv$2.exports));

var svExports = sv$2.exports;
var sv = /*@__PURE__*/getDefaultExportFromCjs(svExports);

var sv$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': sv
}, [svExports]);

var sw$2 = {exports: {}};

sw$2.exports;

(function (module, exports) {
	!function(a,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(a){function e(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var i=e(a),t={name:"sw",weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekStart:1,ordinal:function(a){return a},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return i.default.locale(t,null,!0),t})); 
} (sw$2, sw$2.exports));

var swExports = sw$2.exports;
var sw = /*@__PURE__*/getDefaultExportFromCjs(swExports);

var sw$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': sw
}, [swExports]);

var ta$2 = {exports: {}};

ta$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"ta",weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"}};return t.default.locale(d,null,!0),d})); 
} (ta$2, ta$2.exports));

var taExports = ta$2.exports;
var ta = /*@__PURE__*/getDefaultExportFromCjs(taExports);

var ta$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ta
}, [taExports]);

var te$2 = {exports: {}};

te$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"te",weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),ordinal:function(_){return _},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"}};return t.default.locale(d,null,!0),d})); 
} (te$2, te$2.exports));

var teExports = te$2.exports;
var te = /*@__PURE__*/getDefaultExportFromCjs(teExports);

var te$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': te
}, [teExports]);

var tg$2 = {exports: {}};

tg$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"tg",weekdays:"якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),weekStart:1,weekdaysShort:"яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdaysMin:"яш_дш_сш_чш_пш_ҷм_шб".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"баъди %s",past:"%s пеш",s:"якчанд сония",m:"як дақиқа",mm:"%d дақиқа",h:"як соат",hh:"%d соат",d:"як рӯз",dd:"%d рӯз",M:"як моҳ",MM:"%d моҳ",y:"як сол",yy:"%d сол"}};return t.default.locale(d,null,!0),d})); 
} (tg$2, tg$2.exports));

var tgExports = tg$2.exports;
var tg = /*@__PURE__*/getDefaultExportFromCjs(tgExports);

var tg$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': tg
}, [tgExports]);

var th$2 = {exports: {}};

th$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"th",weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"},ordinal:function(_){return _+"."}};return t.default.locale(d,null,!0),d})); 
} (th$2, th$2.exports));

var thExports = th$2.exports;
var th = /*@__PURE__*/getDefaultExportFromCjs(thExports);

var th$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': th
}, [thExports]);

var tk$2 = {exports: {}};

tk$2.exports;

(function (module, exports) {
	!function(e,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e),_={name:"tk",weekdays:"Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),weekdaysShort:"Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),weekdaysMin:"Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),months:"Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),monthsShort:"Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"%s soň",past:"%s öň",s:"birnäçe sekunt",m:"bir minut",mm:"%d minut",h:"bir sagat",hh:"%d sagat",d:"bir gün",dd:"%d gün",M:"bir aý",MM:"%d aý",y:"bir ýyl",yy:"%d ýyl"},ordinal:function(e){return e+"."}};return t.default.locale(_,null,!0),_})); 
} (tk$2, tk$2.exports));

var tkExports = tk$2.exports;
var tk = /*@__PURE__*/getDefaultExportFromCjs(tkExports);

var tk$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': tk
}, [tkExports]);

var tlPh$2 = {exports: {}};

tlPh$2.exports;

(function (module, exports) {
	!function(e,a){module.exports=a(require$$0__default["default"]);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(e),t={name:"tl-ph",weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),weekStart:1,weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"}};return n.default.locale(t,null,!0),t})); 
} (tlPh$2, tlPh$2.exports));

var tlPhExports = tlPh$2.exports;
var tlPh = /*@__PURE__*/getDefaultExportFromCjs(tlPhExports);

var tlPh$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': tlPh
}, [tlPhExports]);

var tlh$2 = {exports: {}};

tlh$2.exports;

(function (module, exports) {
	!function(a,j){module.exports=j(require$$0__default["default"]);}(commonjsGlobal,(function(a){function j(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var t=j(a),e={name:"tlh",weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),weekStart:1,weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return t.default.locale(e,null,!0),e})); 
} (tlh$2, tlh$2.exports));

var tlhExports = tlh$2.exports;
var tlh = /*@__PURE__*/getDefaultExportFromCjs(tlhExports);

var tlh$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': tlh
}, [tlhExports]);

var tr$2 = {exports: {}};

tr$2.exports;

(function (module, exports) {
	!function(a,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(a){function e(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var t=e(a),_={name:"tr",weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function(a){return a+"."}};return t.default.locale(_,null,!0),_})); 
} (tr$2, tr$2.exports));

var trExports = tr$2.exports;
var tr = /*@__PURE__*/getDefaultExportFromCjs(trExports);

var tr$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': tr
}, [trExports]);

var tzl$2 = {exports: {}};

tzl$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),a={name:"tzl",weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),weekStart:1,weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),ordinal:function(e){return e},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"}};return t.default.locale(a,null,!0),a})); 
} (tzl$2, tzl$2.exports));

var tzlExports = tzl$2.exports;
var tzl = /*@__PURE__*/getDefaultExportFromCjs(tzlExports);

var tzl$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': tzl
}, [tzlExports]);

var tzmLatn$2 = {exports: {}};

tzmLatn$2.exports;

(function (module, exports) {
	!function(a,s){module.exports=s(require$$0__default["default"]);}(commonjsGlobal,(function(a){function s(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var n=s(a),i={name:"tzm-latn",weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekStart:6,weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"}};return n.default.locale(i,null,!0),i})); 
} (tzmLatn$2, tzmLatn$2.exports));

var tzmLatnExports = tzmLatn$2.exports;
var tzmLatn = /*@__PURE__*/getDefaultExportFromCjs(tzmLatnExports);

var tzmLatn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': tzmLatn
}, [tzmLatnExports]);

var tzm$2 = {exports: {}};

tzm$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"tzm",weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekStart:6,weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"}};return t.default.locale(d,null,!0),d})); 
} (tzm$2, tzm$2.exports));

var tzmExports = tzm$2.exports;
var tzm = /*@__PURE__*/getDefaultExportFromCjs(tzmExports);

var tzm$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': tzm
}, [tzmExports]);

var ugCn$2 = {exports: {}};

ugCn$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"ug-cn",weekdays:"يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),months:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),weekStart:1,weekdaysShort:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),monthsShort:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),weekdaysMin:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY-يىلىM-ئاينىڭD-كۈنى",LLL:"YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",LLLL:"dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"},relativeTime:{future:"%s كېيىن",past:"%s بۇرۇن",s:"نەچچە سېكونت",m:"بىر مىنۇت",mm:"%d مىنۇت",h:"بىر سائەت",hh:"%d سائەت",d:"بىر كۈن",dd:"%d كۈن",M:"بىر ئاي",MM:"%d ئاي",y:"بىر يىل",yy:"%d يىل"}};return t.default.locale(d,null,!0),d})); 
} (ugCn$2, ugCn$2.exports));

var ugCnExports = ugCn$2.exports;
var ugCn = /*@__PURE__*/getDefaultExportFromCjs(ugCnExports);

var ugCn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ugCn
}, [ugCnExports]);

var uk$2 = {exports: {}};

uk$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),s="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),n="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),o=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function d(_,e,t){var s,n;return "m"===t?e?"хвилина":"хвилину":"h"===t?e?"година":"годину":_+" "+(s=+_,n={ss:e?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:e?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:e?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[t].split("_"),s%10==1&&s%100!=11?n[0]:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?n[1]:n[2])}var i=function(_,e){return o.test(e)?s[_.month()]:n[_.month()]};i.s=n,i.f=s;var r={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:i,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:d,mm:d,h:d,hh:d,d:"день",dd:d,M:"місяць",MM:d,y:"рік",yy:d},ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};return t.default.locale(r,null,!0),r})); 
} (uk$2, uk$2.exports));

var ukExports = uk$2.exports;
var uk = /*@__PURE__*/getDefaultExportFromCjs(ukExports);

var uk$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': uk
}, [ukExports]);

var ur$2 = {exports: {}};

ur$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"ur",weekdays:"اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),months:"جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"),weekStart:1,weekdaysShort:"اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),monthsShort:"جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"),weekdaysMin:"اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},relativeTime:{future:"%s بعد",past:"%s قبل",s:"چند سیکنڈ",m:"ایک منٹ",mm:"%d منٹ",h:"ایک گھنٹہ",hh:"%d گھنٹے",d:"ایک دن",dd:"%d دن",M:"ایک ماہ",MM:"%d ماہ",y:"ایک سال",yy:"%d سال"}};return t.default.locale(d,null,!0),d})); 
} (ur$2, ur$2.exports));

var urExports = ur$2.exports;
var ur = /*@__PURE__*/getDefaultExportFromCjs(urExports);

var ur$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': ur
}, [urExports]);

var uzLatn$2 = {exports: {}};

uzLatn$2.exports;

(function (module, exports) {
	!function(a,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(a){function e(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var n=e(a),_={name:"uz-latn",weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),weekStart:1,weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"}};return n.default.locale(_,null,!0),_})); 
} (uzLatn$2, uzLatn$2.exports));

var uzLatnExports = uzLatn$2.exports;
var uzLatn = /*@__PURE__*/getDefaultExportFromCjs(uzLatnExports);

var uzLatn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': uzLatn
}, [uzLatnExports]);

var uz$2 = {exports: {}};

uz$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"uz",weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),weekStart:1,weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"}};return t.default.locale(d,null,!0),d})); 
} (uz$2, uz$2.exports));

var uzExports = uz$2.exports;
var uz = /*@__PURE__*/getDefaultExportFromCjs(uzExports);

var uz$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': uz
}, [uzExports]);

var vi$2 = {exports: {}};

vi$2.exports;

(function (module, exports) {
	!function(t,n){module.exports=n(require$$0__default["default"]);}(commonjsGlobal,(function(t){function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var h=n(t),_={name:"vi",weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),weekStart:1,weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"}};return h.default.locale(_,null,!0),_})); 
} (vi$2, vi$2.exports));

var viExports = vi$2.exports;
var vi = /*@__PURE__*/getDefaultExportFromCjs(viExports);

var vi$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': vi
}, [viExports]);

var xPseudo$2 = {exports: {}};

xPseudo$2.exports;

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0__default["default"]);}(commonjsGlobal,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _=t(e),d={name:"x-pseudo",weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),weekStart:1,weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"}};return _.default.locale(d,null,!0),d})); 
} (xPseudo$2, xPseudo$2.exports));

var xPseudoExports = xPseudo$2.exports;
var xPseudo = /*@__PURE__*/getDefaultExportFromCjs(xPseudoExports);

var xPseudo$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': xPseudo
}, [xPseudoExports]);

var yo$2 = {exports: {}};

yo$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),a={name:"yo",weekdays:"Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),months:"Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),weekStart:1,weekdaysShort:"Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),monthsShort:"Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),weekdaysMin:"Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),ordinal:function(e){return e},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"ní %s",past:"%s kọjá",s:"ìsẹjú aayá die",m:"ìsẹjú kan",mm:"ìsẹjú %d",h:"wákati kan",hh:"wákati %d",d:"ọjọ́ kan",dd:"ọjọ́ %d",M:"osù kan",MM:"osù %d",y:"ọdún kan",yy:"ọdún %d"}};return t.default.locale(a,null,!0),a})); 
} (yo$2, yo$2.exports));

var yoExports = yo$2.exports;
var yo = /*@__PURE__*/getDefaultExportFromCjs(yoExports);

var yo$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': yo
}, [yoExports]);

var zhCn$2 = {exports: {}};

zhCn$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,_){return "W"===_?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,_){var t=100*e+_;return t<600?"凌晨":t<900?"早上":t<1100?"上午":t<1300?"中午":t<1800?"下午":"晚上"}};return t.default.locale(d,null,!0),d})); 
} (zhCn$2, zhCn$2.exports));

var zhCnExports = zhCn$2.exports;
var zhCn = /*@__PURE__*/getDefaultExportFromCjs(zhCnExports);

var zhCn$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': zhCn
}, [zhCnExports]);

var zhHk$2 = {exports: {}};

zhHk$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"zh-hk",months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),ordinal:function(_,e){return "W"===e?_+"週":_+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"一分鐘",mm:"%d 分鐘",h:"一小時",hh:"%d 小時",d:"一天",dd:"%d 天",M:"一個月",MM:"%d 個月",y:"一年",yy:"%d 年"}};return t.default.locale(d,null,!0),d})); 
} (zhHk$2, zhHk$2.exports));

var zhHkExports = zhHk$2.exports;
var zhHk = /*@__PURE__*/getDefaultExportFromCjs(zhHkExports);

var zhHk$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': zhHk
}, [zhHkExports]);

var zhTw$2 = {exports: {}};

zhTw$2.exports;

(function (module, exports) {
	!function(_,e){module.exports=e(require$$0__default["default"]);}(commonjsGlobal,(function(_){function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(_,e){return "W"===e?_+"週":_+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"},meridiem:function(_,e){var t=100*_+e;return t<600?"凌晨":t<900?"早上":t<1100?"上午":t<1300?"中午":t<1800?"下午":"晚上"}};return t.default.locale(d,null,!0),d})); 
} (zhTw$2, zhTw$2.exports));

var zhTwExports = zhTw$2.exports;
var zhTw = /*@__PURE__*/getDefaultExportFromCjs(zhTwExports);

var zhTw$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': zhTw
}, [zhTwExports]);

var zh$2 = {exports: {}};

zh$2.exports;

(function (module, exports) {
	!function(e,_){module.exports=_(require$$0__default["default"]);}(commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"zh",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,_){return "W"===_?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s后",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,_){var t=100*e+_;return t<600?"凌晨":t<900?"早上":t<1100?"上午":t<1300?"中午":t<1800?"下午":"晚上"}};return t.default.locale(d,null,!0),d})); 
} (zh$2, zh$2.exports));

var zhExports = zh$2.exports;
var zh = /*@__PURE__*/getDefaultExportFromCjs(zhExports);

var zh$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': zh
}, [zhExports]);

module.exports = Datepicker;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ 9438:
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 3103:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports, "__esModule", ({value:!0}));var t=__webpack_require__(717),n=__webpack_require__(8038),r=e(n),o=e(__webpack_require__(9438)),s=e(__webpack_require__(8921)),i=e(__webpack_require__(2477)),a=e(__webpack_require__(9847)),c=e(__webpack_require__(1054));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},d=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!t.typeOf(e)},h=Object.freeze([]),p=Object.freeze({});function f(e){return"function"==typeof e}function m(e){return false||e.displayName||e.name||"Component"}function y(e){return e&&"string"==typeof e.styledComponentId}var v="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",g="undefined"!=typeof window&&"HTMLElement"in window,S=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&(void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="production")),w={},E= false?0:{};function b(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function _(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw true?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):0}var N=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&_(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),C=new Map,A=new Map,I=1,P=function(e){if(C.has(e))return C.get(e);for(;A.has(I);)I++;var t=I++;return false&&0,C.set(e,t),A.set(t,e),t},O=function(e){return A.get(e)},x=function(e,t){t>=I&&(I=t+1),C.set(e,t),A.set(t,e)},R="style["+v+'][data-styled-version="5.3.9"]',D=new RegExp("^"+v+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),T=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},j=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(D);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(x(u,c),T(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},k=function(){return true?__webpack_require__.nc:0},V=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(v))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(v,"active"),r.setAttribute("data-styled-version","5.3.9");var i=k();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},M=function(){function e(e){var t=this.element=V(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}_(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),z=function(){function e(e){var t=this.element=V(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),B=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),q=g,G={isServer:!g,useCSSOMInjection:!S},L=function(){function e(e,t,n){void 0===e&&(e=p),void 0===t&&(t={}),this.options=u({},G,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&g&&q&&(q=!1,function(e){for(var t=document.querySelectorAll(R),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(v)&&(j(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return P(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(u({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new B(o):r?new M(o):new z(o),new N(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(P(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(P(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(P(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=O(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=v+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),F=/(a)(d)/gi,Y=function(e){return String.fromCharCode(e+(e>25?39:97))};function H(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Y(t%52)+n;return(Y(t%52)+n).replace(F,"$1-$2")}var $=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},W=function(e){return $(5381,e)};function U(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(f(n)&&!y(n))return!1}return!0}var J=W("5.3.9"),X=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= true&&(void 0===n||n.isStatic)&&U(e),this.componentId=t,this.baseHash=$(J,t),this.baseStyle=n,L.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=me(this.rules,e,t,n).join(""),i=H($(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=$(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, false&&(0);else if(h){var p=me(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=$(u,f+d),l+=f}}if(l){var m=H(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),Z=/^\s*\/\/.*$/gm,K=[":","[",".","#"];function Q(e){var t,n,r,o,i=void 0===e?p:e,a=i.options,c=void 0===a?p:a,u=i.plugins,l=void 0===u?h:u,d=new s(c),f=[],m=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){f.push(e)})),y=function(e,r,s){return 0===r&&-1!==K.indexOf(s[n.length])||s.match(o)?e:"."+t};function v(e,s,i,a){void 0===a&&(a="&");var c=e.replace(Z,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(i||!s?"":s,u)}return d.use([].concat(l,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,y))},m,function(e){if(-2===e){var t=f;return f=[],t}}])),v.hash=l.length?l.reduce((function(e,t){return t.name||_(15),$(e,t.name)}),5381).toString():"",v}var ee=r.createContext(),te=ee.Consumer,ne=r.createContext(),re=(ne.Consumer,new L),oe=Q();function se(){return n.useContext(ee)||re}function ie(){return n.useContext(ne)||oe}function ae(e){var t=n.useState(e.stylisPlugins),s=t[0],i=t[1],a=se(),c=n.useMemo((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),u=n.useMemo((function(){return Q({options:{prefix:!e.disableVendorPrefixes},plugins:s})}),[e.disableVendorPrefixes,s]);return n.useEffect((function(){o(s,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),r.createElement(ee.Provider,{value:c},r.createElement(ne.Provider,{value:u}, false?0:e.children))}var ce=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=oe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return _(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=oe),this.name+e.hash},e}(),ue=/([A-Z])/,le=/([A-Z])/g,de=/^ms-/,he=function(e){return"-"+e.toLowerCase()};function pe(e){return ue.test(e)?e.replace(le,he).replace(de,"-ms-"):e}var fe=function(e){return null==e||!1===e||""===e};function me(e,n,r,o){if(Array.isArray(e)){for(var s,a=[],c=0,u=e.length;c<u;c+=1)""!==(s=me(e[c],n,r,o))&&(Array.isArray(s)?a.push.apply(a,s):a.push(s));return a}if(fe(e))return"";if(y(e))return"."+e.styledComponentId;if(f(e)){if("function"!=typeof(h=e)||h.prototype&&h.prototype.isReactComponent||!n)return e;var l=e(n);return false&&0,me(l,n,r,o)}var h;return e instanceof ce?r?(e.inject(r,o),e.getName(o)):e:d(e)?function e(t,n){var r,o,s=[];for(var a in t)t.hasOwnProperty(a)&&!fe(t[a])&&(Array.isArray(t[a])&&t[a].isCss||f(t[a])?s.push(pe(a)+":",t[a],";"):d(t[a])?s.push.apply(s,e(t[a],a)):s.push(pe(a)+": "+(r=a,null==(o=t[a])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in i?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var ye=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ve(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return f(e)||d(e)?ye(me(l(h,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:ye(me(l(e,n)))}var ge=/invalid hook call/i,Se=new Set,we=function(e,t){if(false){ var s, r, o; }},Ee=function(e,t,n){return void 0===n&&(n=p),e.theme!==n.theme&&e.theme||t||n.theme},be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_e=/(^-|-$)/g;function Ne(e){return e.replace(be,"-").replace(_e,"")}var Ce=function(e){return H(W(e)>>>0)};function Ae(e){return"string"==typeof e&&( true||0)}var Ie=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Pe=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Oe(e,t,n){var r=e[n];Ie(t)&&Ie(r)?xe(r,t):e[n]=t}function xe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ie(i))for(var a in i)Pe(a)&&Oe(e,i[a],a)}return e}var Re=r.createContext(),De=Re.Consumer,Te={};function je(e,t,o){var s=y(e),i=!Ae(e),l=t.attrs,d=void 0===l?h:l,v=t.componentId,g=void 0===v?function(e,t){var n="string"!=typeof e?"sc":Ne(e);Te[n]=(Te[n]||0)+1;var r=n+"-"+Ce("5.3.9"+n+Te[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):v,S=t.displayName,w=void 0===S?function(e){return Ae(e)?"styled."+e:"Styled("+m(e)+")"}(e):S,E=t.displayName&&t.componentId?Ne(t.displayName)+"-"+t.componentId:t.componentId||g,b=s&&e.attrs?Array.prototype.concat(e.attrs,d).filter(Boolean):d,_=t.shouldForwardProp;s&&e.shouldForwardProp&&(_=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var N,C=new X(o,E,s?e.componentStyle:void 0),A=C.isStatic&&0===d.length,I=function(e,t){return function(e,t,r,o){var s=e.attrs,i=e.componentStyle,c=e.defaultProps,l=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,m=e.target; false&&0;var y=function(e,t,n){void 0===e&&(e=p);var r=u({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in f(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Ee(t,n.useContext(Re),c)||p,t,s),v=y[0],g=y[1],S=function(e,t,r,o){var s=se(),i=ie(),a=t?e.generateAndInjectStyles(p,s,i):e.generateAndInjectStyles(r,s,i);return false&&0, false&&0,a}(i,o,v, false?0:void 0),w=r,E=g.$as||t.$as||g.as||t.as||m,b=Ae(E),_=g!==t?u({},t,{},g):t,N={};for(var C in _)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?N.as=_[C]:(d?d(C,a,E):!b||a(C))&&(N[C]=_[C]));return t.style&&g.style!==t.style&&(N.style=u({},t.style,{},g.style)),N.className=Array.prototype.concat(l,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),N.ref=w,n.createElement(E,N)}(N,e,t,A)};return I.displayName=w,(N=r.forwardRef(I)).attrs=b,N.componentStyle=C,N.displayName=w,N.shouldForwardProp=_,N.foldedComponentIds=s?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):h,N.styledComponentId=E,N.target=s?e.target:e,N.withComponent=function(e){var n=t.componentId,r=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=n&&n+"-"+(Ae(e)?e:Ne(m(e)));return je(e,u({},r,{attrs:b,componentId:s}),o)},Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=s?xe({},e.defaultProps,t):t}}), false&&(0),Object.defineProperty(N,"toString",{value:function(){return"."+N.styledComponentId}}),i&&c(N,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),N}var ke=function(e){return function e(n,r,o){if(void 0===o&&(o=p),!t.isValidElementType(r))return _(1,String(r));var s=function(){return n(r,o,ve.apply(void 0,arguments))};return s.withConfig=function(t){return e(n,r,u({},o,{},t))},s.attrs=function(t){return e(n,r,u({},o,{attrs:Array.prototype.concat(o.attrs,t).filter(Boolean)}))},s}(je,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){ke[e]=ke(e)}));var Ve=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=U(e),L.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(me(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&L.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}(),Me=/^\s*<\/[a-z]/i,ze=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=k();return"<style "+[n&&'nonce="'+n+'"',v+'="true"','data-styled-version="5.3.9"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?_(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return _(2);var n=((t={})[v]="",t["data-styled-version"]="5.3.9",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=k();return o&&(n.nonce=o),[r.createElement("style",u({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new L({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?_(2):r.createElement(ae,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){if(g)return _(3);if(this.sealed)return _(2);this.seal();var t=__webpack_require__(2781),n=(t.Readable,t.Transform),r=e,o=this.instance,s=this._emitSheetCSS,i=new n({transform:function(e,t,n){var r=e.toString(),i=s();if(o.clearTag(),Me.test(r)){var a=r.indexOf(">")+1,c=r.slice(0,a),u=r.slice(a);this.push(c+i+u)}else this.push(i+r);n()}});return r.on("error",(function(e){i.emit("error",e)})),r.pipe(i)},e}(),Be={StyleSheet:L,masterSheet:re}; false&&0, false&&(0),exports.ServerStyleSheet=ze,exports.StyleSheetConsumer=te,exports.StyleSheetContext=ee,exports.StyleSheetManager=ae,exports.ThemeConsumer=De,exports.ThemeContext=Re,exports.ThemeProvider=function(e){var t=n.useContext(Re),o=n.useMemo((function(){return function(e,t){if(!e)return _(14);if(f(e)){var n=e(t);return true?n:0}return Array.isArray(e)||"object"!=typeof e?_(8):t?u({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?r.createElement(Re.Provider,{value:o},e.children):null},exports.__PRIVATE__=Be,exports.createGlobalStyle=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),s=1;s<t;s++)o[s-1]=arguments[s];var i=ve.apply(void 0,[e].concat(o)),a="sc-global-"+Ce(JSON.stringify(i)),c=new Ve(i,a);function l(e){var t=se(),o=ie(),s=n.useContext(Re),c=n.useRef(t.allocateGSInstance(a)).current;return false&&0, false&&0,t.server&&d(c,e,t,s,o),null}function d(e,t,n,r,o){if(c.isStatic)c.renderStyles(e,w,n,o);else{var s=u({},t,{theme:Ee(t,r,l.defaultProps)});c.renderStyles(e,s,n,o)}}return false&&0,r.memo(l)},exports.css=ve,exports["default"]=ke,exports.isStyledComponent=y,exports.keyframes=function(e){ false&&0;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=ve.apply(void 0,[e].concat(n)).join(""),s=Ce(o);return new ce(s,o)},exports.useTheme=function(){return n.useContext(Re)},exports.version="5.3.9",exports.withTheme=function(e){var t=r.forwardRef((function(t,o){var s=n.useContext(Re),i=e.defaultProps,a=Ee(t,s,i);return false&&0,r.createElement(e,u({},t,{theme:a,ref:o}))}));return c(t,e),t.displayName="WithTheme("+m(e)+")",t};
//# sourceMappingURL=styled-components.cjs.js.map


/***/ }),

/***/ 9847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ emotion_is_prop_valid_esm)
});

;// CONCATENATED MODULE: ./node_modules/styled-components/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const emotion_memoize_esm = (memoize);

;// CONCATENATED MODULE: ./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */emotion_memoize_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const emotion_is_prop_valid_esm = (isPropValid);


/***/ })

};
;