(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[118],{1295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},unstable_getImgProps:function(){return u}});let r=n(1024),o=n(2301),i=n(7873),a=n(3222),l=r._(n(5033)),u=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},s=a.Image},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},7437:function(e,t,n){"use strict";e.exports=n(622)},6691:function(e,t,n){e.exports=n(1295)},1172:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function u(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var n,o=e.attr,i=e.size,u=e.title,s=l(e,["attr","size","title"]),c=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}},6439:function(e,t,n){"use strict";n.d(t,{R:function(){return Q}});var r,o,i,a,l=n(2265),u=n(2769),s=n(5606),c=n(2600),d=n(3759);function f(e,t){let[n,r]=(0,l.useState)(e),o=(0,d.E)(e);return(0,c.e)(()=>r(o.current),[o,r,...t]),n}var p=n(6618),v=n(1931),b=n(597),g=n(5390),x=n(3850),m=n(3891),h=n(5863),y=n(5410),O=n(5306),R=n(8076),S=n(583),T=n(8227);function I(e,t){return e?e+"["+t+"]":t}var L=n(4851),w=n(2950),E=n(3995),P=n(9426),D=((r=D||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),C=((o=C||{})[o.Single=0]="Single",o[o.Multi=1]="Multi",o),z=((i=z||{})[i.Pointer=0]="Pointer",i[i.Other=1]="Other",i),k=((a=k||{})[a.OpenListbox=0]="OpenListbox",a[a.CloseListbox=1]="CloseListbox",a[a.GoToOption=2]="GoToOption",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterOption=5]="RegisterOption",a[a.UnregisterOption=6]="UnregisterOption",a[a.RegisterLabel=7]="RegisterLabel",a);function F(e,t=e=>e){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,y.z2)(t(e.options.slice()),e=>e.dataRef.current.domRef.current),o=n?r.indexOf(n):null;return -1===o&&(o=null),{options:r,activeOptionIndex:o}}let M={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(e=>n(e.dataRef.current.value));return -1!==r&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=F(e),o=(0,m.d)(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))}),i=o?e.options.indexOf(o):-1;return -1===i||i===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:i,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=F(e,e=>[...e,n]);return null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,t)=>{let n=F(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},_=(0,l.createContext)(null);function A(e){let t=(0,l.useContext)(_);if(null===t){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}_.displayName="ListboxActionsContext";let N=(0,l.createContext)(null);function j(e){let t=(0,l.useContext)(N);if(null===t){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,j),t}return t}function V(e,t){return(0,b.E)(t.type,M,e,t)}N.displayName="ListboxDataContext";let B=l.Fragment,U=v.AN.RenderStrategy|v.AN.Static,Q=Object.assign((0,v.yV)(function(e,t){let{value:n,defaultValue:r,form:o,name:i,onChange:a,by:s=(e,t)=>e===t,disabled:d=!1,horizontal:f=!1,multiple:g=!1,...x}=e,h=f?"horizontal":"vertical",R=(0,p.T)(t),[L=g?[]:void 0,E]=function(e,t,n){let[r,o]=(0,l.useState)(n),i=void 0!==e,a=(0,l.useRef)(i),u=(0,l.useRef)(!1),s=(0,l.useRef)(!1);return!i||a.current||u.current?i||!a.current||s.current||(s.current=!0,a.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,a.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[i?e:r,(0,w.z)(e=>(i||o(e),null==t?void 0:t(e)))]}(n,a,r),[P,D]=(0,l.useReducer)(V,{dataRef:(0,l.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),C=(0,l.useRef)({static:!1,hold:!1}),z=(0,l.useRef)(null),k=(0,l.useRef)(null),F=(0,l.useRef)(null),M=(0,w.z)("string"==typeof s?(e,t)=>(null==e?void 0:e[s])===(null==t?void 0:t[s]):s),A=(0,l.useCallback)(e=>(0,b.E)(j.mode,{1:()=>L.some(t=>M(t,e)),0:()=>M(L,e)}),[L]),j=(0,l.useMemo)(()=>({...P,value:L,disabled:d,mode:g?1:0,orientation:h,compare:M,isSelected:A,optionsPropsRef:C,labelRef:z,buttonRef:k,optionsRef:F}),[L,d,g,P]);(0,c.e)(()=>{P.dataRef.current=j},[j]),(0,S.O)([j.buttonRef,j.optionsRef],(e,t)=>{var n;D({type:1}),(0,y.sP)(t,y.tJ.Loose)||(e.preventDefault(),null==(n=j.buttonRef.current)||n.focus())},0===j.listboxState);let U=(0,l.useMemo)(()=>({open:0===j.listboxState,disabled:d,value:L}),[j,d,L]),Q=(0,w.z)(e=>{let t=j.options.find(t=>t.id===e);t&&K(t.dataRef.current.value)}),$=(0,w.z)(()=>{if(null!==j.activeOptionIndex){let{dataRef:e,id:t}=j.options[j.activeOptionIndex];K(e.current.value),D({type:2,focus:m.T.Specific,id:t})}}),Y=(0,w.z)(()=>D({type:0})),G=(0,w.z)(()=>D({type:1})),H=(0,w.z)((e,t,n)=>e===m.T.Specific?D({type:2,focus:m.T.Specific,id:t,trigger:n}):D({type:2,focus:e,trigger:n})),W=(0,w.z)((e,t)=>(D({type:5,id:e,dataRef:t}),()=>D({type:6,id:e}))),Z=(0,w.z)(e=>(D({type:7,id:e}),()=>D({type:7,id:null}))),K=(0,w.z)(e=>(0,b.E)(j.mode,{0:()=>null==E?void 0:E(e),1(){let t=j.value.slice(),n=t.findIndex(t=>M(t,e));return -1===n?t.push(e):t.splice(n,1),null==E?void 0:E(t)}})),q=(0,w.z)(e=>D({type:3,value:e})),J=(0,w.z)(()=>D({type:4})),X=(0,l.useMemo)(()=>({onChange:K,registerOption:W,registerLabel:Z,goToOption:H,closeListbox:G,openListbox:Y,selectActiveOption:$,selectOption:Q,search:q,clearSearch:J}),[]),ee=(0,l.useRef)(null),et=(0,u.G)();return(0,l.useEffect)(()=>{ee.current&&void 0!==r&&et.addEventListener(ee.current,"reset",()=>{K(r)})},[ee,K]),l.createElement(_.Provider,{value:X},l.createElement(N.Provider,{value:j},l.createElement(O.up,{value:(0,b.E)(j.listboxState,{0:O.ZM.Open,1:O.ZM.Closed})},null!=i&&null!=L&&(function e(t={},n=null,r=[]){for(let[o,i]of Object.entries(t))!function t(n,r,o){if(Array.isArray(o))for(let[e,i]of o.entries())t(n,I(r,e.toString()),i);else o instanceof Date?n.push([r,o.toISOString()]):"boolean"==typeof o?n.push([r,o?"1":"0"]):"string"==typeof o?n.push([r,o]):"number"==typeof o?n.push([r,`${o}`]):null==o?n.push([r,""]):e(o,r,n)}(r,I(n,o),i);return r})({[i]:L}).map(([e,t],n)=>l.createElement(T._,{features:T.A.Hidden,ref:0===n?e=>{var t;ee.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,v.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:o,name:e,value:t})})),(0,v.sY)({ourProps:{ref:R},theirProps:x,slot:U,defaultTag:B,name:"Listbox"}))))}),{Button:(0,v.yV)(function(e,t){var n;let r=(0,s.M)(),{id:o=`headlessui-listbox-button-${r}`,...i}=e,a=j("Listbox.Button"),c=A("Listbox.Button"),d=(0,p.T)(a.buttonRef,t),b=(0,u.G)(),g=(0,w.z)(e=>{switch(e.key){case x.R.Space:case x.R.Enter:case x.R.ArrowDown:e.preventDefault(),c.openListbox(),b.nextFrame(()=>{a.value||c.goToOption(m.T.First)});break;case x.R.ArrowUp:e.preventDefault(),c.openListbox(),b.nextFrame(()=>{a.value||c.goToOption(m.T.Last)})}}),y=(0,w.z)(e=>{e.key===x.R.Space&&e.preventDefault()}),O=(0,w.z)(e=>{if((0,h.P)(e.currentTarget))return e.preventDefault();0===a.listboxState?(c.closeListbox(),b.nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(e.preventDefault(),c.openListbox())}),S=f(()=>{if(a.labelId)return[a.labelId,o].join(" ")},[a.labelId,o]),T=(0,l.useMemo)(()=>({open:0===a.listboxState,disabled:a.disabled,value:a.value}),[a]),I={ref:d,id:o,type:(0,R.f)(e,a.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(n=a.optionsRef.current)?void 0:n.id,"aria-expanded":0===a.listboxState,"aria-labelledby":S,disabled:a.disabled,onKeyDown:g,onKeyUp:y,onClick:O};return(0,v.sY)({ourProps:I,theirProps:i,slot:T,defaultTag:"button",name:"Listbox.Button"})}),Label:(0,v.yV)(function(e,t){let n=(0,s.M)(),{id:r=`headlessui-listbox-label-${n}`,...o}=e,i=j("Listbox.Label"),a=A("Listbox.Label"),u=(0,p.T)(i.labelRef,t);(0,c.e)(()=>a.registerLabel(r),[r]);let d=(0,w.z)(()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}),f=(0,l.useMemo)(()=>({open:0===i.listboxState,disabled:i.disabled}),[i]);return(0,v.sY)({ourProps:{ref:u,id:r,onClick:d},theirProps:o,slot:f,defaultTag:"label",name:"Listbox.Label"})}),Options:(0,v.yV)(function(e,t){var n;let r=(0,s.M)(),{id:o=`headlessui-listbox-options-${r}`,...i}=e,a=j("Listbox.Options"),c=A("Listbox.Options"),d=(0,p.T)(a.optionsRef,t),h=(0,u.G)(),y=(0,u.G)(),R=(0,O.oJ)(),S=null!==R?(R&O.ZM.Open)===O.ZM.Open:0===a.listboxState;(0,l.useEffect)(()=>{var e;let t=a.optionsRef.current;t&&0===a.listboxState&&t!==(null==(e=(0,L.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})},[a.listboxState,a.optionsRef]);let T=(0,w.z)(e=>{switch(y.dispose(),e.key){case x.R.Space:if(""!==a.searchQuery)return e.preventDefault(),e.stopPropagation(),c.search(e.key);case x.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==a.activeOptionIndex){let{dataRef:e}=a.options[a.activeOptionIndex];c.onChange(e.current.value)}0===a.mode&&(c.closeListbox(),(0,g.k)().nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case(0,b.E)(a.orientation,{vertical:x.R.ArrowDown,horizontal:x.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),c.goToOption(m.T.Next);case(0,b.E)(a.orientation,{vertical:x.R.ArrowUp,horizontal:x.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),c.goToOption(m.T.Previous);case x.R.Home:case x.R.PageUp:return e.preventDefault(),e.stopPropagation(),c.goToOption(m.T.First);case x.R.End:case x.R.PageDown:return e.preventDefault(),e.stopPropagation(),c.goToOption(m.T.Last);case x.R.Escape:return e.preventDefault(),e.stopPropagation(),c.closeListbox(),h.nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})});case x.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(c.search(e.key),y.setTimeout(()=>c.clearSearch(),350))}}),I=f(()=>{var e,t,n;return null!=(n=null==(e=a.labelRef.current)?void 0:e.id)?n:null==(t=a.buttonRef.current)?void 0:t.id},[a.labelRef.current,a.buttonRef.current]),E=(0,l.useMemo)(()=>({open:0===a.listboxState}),[a]),P={"aria-activedescendant":null===a.activeOptionIndex||null==(n=a.options[a.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===a.mode||void 0,"aria-labelledby":I,"aria-orientation":a.orientation,id:o,onKeyDown:T,role:"listbox",tabIndex:0,ref:d};return(0,v.sY)({ourProps:P,theirProps:i,slot:E,defaultTag:"ul",features:U,visible:S,name:"Listbox.Options"})}),Option:(0,v.yV)(function(e,t){let n=(0,s.M)(),{id:r=`headlessui-listbox-option-${n}`,disabled:o=!1,value:i,...a}=e,u=j("Listbox.Option"),f=A("Listbox.Option"),b=null!==u.activeOptionIndex&&u.options[u.activeOptionIndex].id===r,x=u.isSelected(i),h=(0,l.useRef)(null),y=(0,P.x)(h),O=(0,d.E)({disabled:o,value:i,domRef:h,get textValue(){return y()}}),R=(0,p.T)(t,h);(0,c.e)(()=>{if(0!==u.listboxState||!b||0===u.activationTrigger)return;let e=(0,g.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=h.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[h,b,u.listboxState,u.activationTrigger,u.activeOptionIndex]),(0,c.e)(()=>f.registerOption(r,O),[O,r]);let S=(0,w.z)(e=>{if(o)return e.preventDefault();f.onChange(i),0===u.mode&&(f.closeListbox(),(0,g.k)().nextFrame(()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))}),T=(0,w.z)(()=>{if(o)return f.goToOption(m.T.Nothing);f.goToOption(m.T.Specific,r)}),I=(0,E.g)(),L=(0,w.z)(e=>I.update(e)),D=(0,w.z)(e=>{I.wasMoved(e)&&(o||b||f.goToOption(m.T.Specific,r,0))}),C=(0,w.z)(e=>{I.wasMoved(e)&&(o||b&&f.goToOption(m.T.Nothing))}),z=(0,l.useMemo)(()=>({active:b,selected:x,disabled:o}),[b,x,o]);return(0,v.sY)({ourProps:{id:r,ref:R,role:"option",tabIndex:!0===o?void 0:-1,"aria-disabled":!0===o||void 0,"aria-selected":x,disabled:void 0,onClick:S,onFocus:T,onPointerEnter:L,onMouseEnter:L,onPointerMove:D,onMouseMove:D,onPointerLeave:C,onMouseLeave:C},theirProps:a,slot:z,defaultTag:"li",name:"Listbox.Option"})})})},8076:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n(2265),o=n(2600);function i(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function a(e,t){let[n,a]=(0,r.useState)(()=>i(e));return(0,o.e)(()=>{a(i(e))},[e.type,e.as]),(0,o.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")},[n,t]),n}},9426:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(2265);let o=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function i(e){var t,n;let r=null!=(t=e.innerText)?t:"",i=e.cloneNode(!0);if(!(i instanceof HTMLElement))return r;let a=!1;for(let e of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),a=!0;let l=a?null!=(n=i.innerText)?n:"":r;return o.test(l)&&(l=l.replace(o,"")),l}var a=n(2950);function l(e){let t=(0,r.useRef)(""),n=(0,r.useRef)("");return(0,a.z)(()=>{let r=e.current;if(!r)return"";let o=r.innerText;if(t.current===o)return n.current;let a=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let e=n.split(" ").map(e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():i(t).trim()}return null}).filter(Boolean);if(e.length>0)return e.join(", ")}return i(e).trim()})(r).trim().toLowerCase();return t.current=o,n.current=a,a})}},3995:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(2265);function o(e){return[e.screenX,e.screenY]}function i(){let e=(0,r.useRef)([-1,-1]);return{wasMoved(t){let n=o(t);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(t){e.current=o(t)}}}},8227:function(e,t,n){"use strict";n.d(t,{A:function(){return i},_:function(){return a}});var r,o=n(1931),i=((r=i||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let a=(0,o.yV)(function(e,t){let{features:n=1,...r}=e,i={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:i,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},3891:function(e,t,n){"use strict";n.d(t,{T:function(){return o},d:function(){return i}});var r,o=((r=o||{})[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r);function i(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=n.slice().reverse().findIndex((e,n,r)=>(-1===o||!(r.length-n-1>=o))&&!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 2:return n.findIndex((e,n)=>!(n<=o)&&!t.resolveDisabled(e));case 3:{let e=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===i?r:i}},1712:function(e,t,n){"use strict";var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",clipRule:"evenodd"}))});t.Z=o}}]);