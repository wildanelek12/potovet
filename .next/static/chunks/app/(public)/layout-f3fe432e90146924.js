(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[288],{5588:function(e,t,r){let n=r(5784),i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z",clipRule:"evenodd"}))});e.exports=i},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},144:function(e,t,r){Promise.resolve().then(r.bind(r,6080))},9617:function(){},6080:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return G}});var n,i,a,o=r(1844),s=r(5235),u=r.n(s);r(9617);var l=r(4666),c=r(4480),d=r(1664),f=r.n(d),m=r(5675),p=r.n(m),v=r(5784),h=r(2984),x=r(2351),y=r(9362),g=r(4192),b=r(6723),I=r(3784),w=r(9946),R=r(1363),T=r(1497),N=r(4103),j=r(4575),E=r(9650),M=r(5466),S=r(6567),P=r(4157),_=r(1074),k=r(3781),F=r(476),D=((n=D||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),C=((i=C||{})[i.Pointer=0]="Pointer",i[i.Other=1]="Other",i),L=((a=L||{})[a.OpenMenu=0]="OpenMenu",a[a.CloseMenu=1]="CloseMenu",a[a.GoToItem=2]="GoToItem",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterItem=5]="RegisterItem",a[a.UnregisterItem=6]="UnregisterItem",a);function O(e,t=e=>e){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,j.z2)(t(e.items.slice()),e=>e.dataRef.current.domRef.current),i=r?n.indexOf(r):null;return -1===i&&(i=null),{items:n,activeItemIndex:i}}let z={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var r;let n=O(e),i=(0,T.d)(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:i,activationTrigger:null!=(r=t.trigger)?r:1}},3:(e,t)=>{let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),i=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled}),a=i?e.items.indexOf(i):-1;return -1===a||a===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:a,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let r=O(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...r}},6:(e,t)=>{let r=O(e,e=>{let r=e.findIndex(e=>e.id===t.id);return -1!==r&&e.splice(r,1),e});return{...e,...r,activationTrigger:1}}},A=(0,v.createContext)(null);function Q(e){let t=(0,v.useContext)(A);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Q),t}return t}function U(e,t){return(0,h.E)(t.type,z,e,t)}A.displayName="MenuContext";let V=v.Fragment,B=x.AN.RenderStrategy|x.AN.Static,K=v.Fragment,Z=Object.assign((0,x.yV)(function(e,t){let r=(0,v.useReducer)(U,{menuState:1,buttonRef:(0,v.createRef)(),itemsRef:(0,v.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:n,itemsRef:i,buttonRef:a},o]=r,s=(0,I.T)(t);(0,E.O)([a,i],(e,t)=>{var r;o({type:1}),(0,j.sP)(t,j.tJ.Loose)||(e.preventDefault(),null==(r=a.current)||r.focus())},0===n);let u=(0,k.z)(()=>{o({type:1})}),l=(0,v.useMemo)(()=>({open:0===n,close:u}),[n,u]);return v.createElement(A.Provider,{value:r},v.createElement(S.up,{value:(0,h.E)(n,{0:S.ZM.Open,1:S.ZM.Closed})},(0,x.sY)({ourProps:{ref:s},theirProps:e,slot:l,defaultTag:V,name:"Menu"})))}),{Button:(0,x.yV)(function(e,t){var r;let n=(0,w.M)(),{id:i=`headlessui-menu-button-${n}`,...a}=e,[o,s]=Q("Menu.Button"),u=(0,I.T)(o.buttonRef,t),l=(0,g.G)(),c=(0,k.z)(e=>{switch(e.key){case R.R.Space:case R.R.Enter:case R.R.ArrowDown:e.preventDefault(),e.stopPropagation(),s({type:0}),l.nextFrame(()=>s({type:2,focus:T.T.First}));break;case R.R.ArrowUp:e.preventDefault(),e.stopPropagation(),s({type:0}),l.nextFrame(()=>s({type:2,focus:T.T.Last}))}}),d=(0,k.z)(e=>{e.key===R.R.Space&&e.preventDefault()}),f=(0,k.z)(t=>{if((0,N.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===o.menuState?(s({type:1}),l.nextFrame(()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),s({type:0})))}),m=(0,v.useMemo)(()=>({open:0===o.menuState}),[o]),p={ref:u,id:i,type:(0,P.f)(e,o.buttonRef),"aria-haspopup":"menu","aria-controls":null==(r=o.itemsRef.current)?void 0:r.id,"aria-expanded":e.disabled?void 0:0===o.menuState,onKeyDown:c,onKeyUp:d,onClick:f};return(0,x.sY)({ourProps:p,theirProps:a,slot:m,defaultTag:"button",name:"Menu.Button"})}),Items:(0,x.yV)(function(e,t){var r,n;let i=(0,w.M)(),{id:a=`headlessui-menu-items-${i}`,...o}=e,[s,u]=Q("Menu.Items"),l=(0,I.T)(s.itemsRef,t),c=(0,_.i)(s.itemsRef),d=(0,g.G)(),f=(0,S.oJ)(),m=null!==f?(f&S.ZM.Open)===S.ZM.Open:0===s.menuState;(0,v.useEffect)(()=>{let e=s.itemsRef.current;e&&0===s.menuState&&e!==(null==c?void 0:c.activeElement)&&e.focus({preventScroll:!0})},[s.menuState,s.itemsRef,c]),function({container:e,accept:t,walk:r,enabled:n=!0}){let i=(0,v.useRef)(t),a=(0,v.useRef)(r);(0,v.useEffect)(()=>{i.current=t,a.current=r},[t,r]),(0,b.e)(()=>{if(!e||!n)return;let t=(0,M.r)(e);if(!t)return;let r=i.current,o=a.current,s=Object.assign(e=>r(e),{acceptNode:r}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);for(;u.nextNode();)o(u.currentNode)},[e,n,i,a])}({container:s.itemsRef.current,enabled:0===s.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let p=(0,k.z)(e=>{var t,r;switch(d.dispose(),e.key){case R.R.Space:if(""!==s.searchQuery)return e.preventDefault(),e.stopPropagation(),u({type:3,value:e.key});case R.R.Enter:if(e.preventDefault(),e.stopPropagation(),u({type:1}),null!==s.activeItemIndex){let{dataRef:e}=s.items[s.activeItemIndex];null==(r=null==(t=e.current)?void 0:t.domRef.current)||r.click()}(0,j.wI)(s.buttonRef.current);break;case R.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),u({type:2,focus:T.T.Next});case R.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),u({type:2,focus:T.T.Previous});case R.R.Home:case R.R.PageUp:return e.preventDefault(),e.stopPropagation(),u({type:2,focus:T.T.First});case R.R.End:case R.R.PageDown:return e.preventDefault(),e.stopPropagation(),u({type:2,focus:T.T.Last});case R.R.Escape:e.preventDefault(),e.stopPropagation(),u({type:1}),(0,y.k)().nextFrame(()=>{var e;return null==(e=s.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case R.R.Tab:e.preventDefault(),e.stopPropagation(),u({type:1}),(0,y.k)().nextFrame(()=>{(0,j.EO)(s.buttonRef.current,e.shiftKey?j.TO.Previous:j.TO.Next)});break;default:1===e.key.length&&(u({type:3,value:e.key}),d.setTimeout(()=>u({type:4}),350))}}),h=(0,k.z)(e=>{e.key===R.R.Space&&e.preventDefault()}),N=(0,v.useMemo)(()=>({open:0===s.menuState}),[s]),E={"aria-activedescendant":null===s.activeItemIndex||null==(r=s.items[s.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(n=s.buttonRef.current)?void 0:n.id,id:a,onKeyDown:p,onKeyUp:h,role:"menu",tabIndex:0,ref:l};return(0,x.sY)({ourProps:E,theirProps:o,slot:N,defaultTag:"div",features:B,visible:m,name:"Menu.Items"})}),Item:(0,x.yV)(function(e,t){let r=(0,w.M)(),{id:n=`headlessui-menu-item-${r}`,disabled:i=!1,...a}=e,[o,s]=Q("Menu.Item"),u=null!==o.activeItemIndex&&o.items[o.activeItemIndex].id===n,l=(0,v.useRef)(null),c=(0,I.T)(t,l);(0,b.e)(()=>{if(0!==o.menuState||!u||0===o.activationTrigger)return;let e=(0,y.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=l.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[l,u,o.menuState,o.activationTrigger,o.activeItemIndex]);let d=(0,v.useRef)({disabled:i,domRef:l});(0,b.e)(()=>{d.current.disabled=i},[d,i]),(0,b.e)(()=>{var e,t;d.current.textValue=null==(t=null==(e=l.current)?void 0:e.textContent)?void 0:t.toLowerCase()},[d,l]),(0,b.e)(()=>(s({type:5,id:n,dataRef:d}),()=>s({type:6,id:n})),[d,n]);let f=(0,k.z)(()=>{s({type:1})}),m=(0,k.z)(e=>{if(i)return e.preventDefault();s({type:1}),(0,j.wI)(o.buttonRef.current)}),p=(0,k.z)(()=>{if(i)return s({type:2,focus:T.T.Nothing});s({type:2,focus:T.T.Specific,id:n})}),h=(0,F.g)(),g=(0,k.z)(e=>h.update(e)),R=(0,k.z)(e=>{h.wasMoved(e)&&(i||u||s({type:2,focus:T.T.Specific,id:n,trigger:0}))}),N=(0,k.z)(e=>{h.wasMoved(e)&&(i||u&&s({type:2,focus:T.T.Nothing}))}),E=(0,v.useMemo)(()=>({active:u,disabled:i,close:f}),[u,i,f]);return(0,x.sY)({ourProps:{id:n,ref:c,role:"menuitem",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,disabled:void 0,onClick:m,onFocus:p,onPointerEnter:g,onMouseEnter:g,onPointerMove:R,onMouseMove:R,onPointerLeave:N,onMouseLeave:N},theirProps:a,slot:E,defaultTag:K,name:"Menu.Item"})})});var W=r(4080),Y=r(5588);function G(e){let{children:t}=e;return(0,o.jsxs)("html",{lang:"en",children:[(0,o.jsx)("head",{}),(0,o.jsxs)("body",{className:[l.Z.className,"font-montserrat"].join(" "),children:[(0,o.jsxs)("nav",{className:"".concat(u().variable," font-sans py-6 px-16 shadow-md flex items-center bg-white text-white"),children:[(0,o.jsx)(f(),{href:"/",children:(0,o.jsx)(p(),{src:"/logo.svg",width:1200,height:1200,className:"w-32 object-contain self-center mr-8"})}),(0,o.jsxs)("div",{className:"flex-1 flex-row space-x-12",children:[(0,o.jsx)(f(),{href:"/project ",className:"text-base font-medium text-[#6E6F70]",children:"Home"}),(0,o.jsx)(f(),{href:"/project",className:"text-base font-medium text-[#6E6F70]",children:"Pricing"}),(0,o.jsx)(f(),{href:"/project",className:"text-base font-medium text-[#6E6F70]",children:"About"})]}),(0,o.jsx)("div",{className:"flex flex-row space-x-3",children:(0,o.jsxs)(Z,{as:"div",className:"relative inline-block text-left",children:[(0,o.jsx)("div",{children:(0,o.jsxs)(Z.Button,{className:"inline-flex w-full justify-center items-center rounded-md bg-secondary px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",children:[(0,o.jsx)(p(),{className:"rounded-full w-6 h-6 mx-2",src:"https://picsum.photos/id/237/400/400",alt:"Picture of the author",width:32,height:32}),"Wildan Romiza",(0,o.jsx)(Y,{className:"ml-2 -mr-1 h-5 w-5 text-white hover:text-violet-100","aria-hidden":"true"})]})}),(0,o.jsx)(W.u,{as:v.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,o.jsxs)(Z.Items,{className:"absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,o.jsx)("div",{className:"px-1 py-1",children:(0,o.jsx)(f(),{href:"/clientzone",children:(0,o.jsx)(Z.Item,{children:e=>{let{active:t}=e;return(0,o.jsx)("button",{className:"".concat(t?"bg-violet-500 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 text-sm"),children:"Clientzone"})}})})}),(0,o.jsx)("div",{className:"px-1 py-1",children:(0,o.jsx)(f(),{href:"/project",children:(0,o.jsx)(Z.Item,{children:e=>{let{active:t}=e;return(0,o.jsx)("button",{className:"".concat(t?"bg-violet-500 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 text-sm"),children:"Profil"})}})})}),(0,o.jsx)("div",{className:"px-1 py-1",children:(0,o.jsx)(f(),{href:"/clientzone/dashboard",children:(0,o.jsx)(Z.Item,{children:e=>{let{active:t}=e;return(0,o.jsx)("button",{className:"".concat(t?"bg-violet-500 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 text-sm"),children:"Logout"})}})})})]})})]})})]}),(0,o.jsx)("div",{children:(0,o.jsx)(c.Wh,{children:t})})]})]})}},4666:function(e,t,r){"use strict";var n=r(2085),i=r.n(n);let a={className:[i().variable].join(" ")};t.Z=a},5235:function(e){e.exports={style:{fontFamily:"'__Montserrat_0ca6c2', '__Montserrat_Fallback_0ca6c2'",fontStyle:"normal"},className:"__className_0ca6c2",variable:"__variable_0ca6c2"}},2085:function(e){e.exports={style:{fontFamily:"'__Montserrat_ff3523', '__Montserrat_Fallback_ff3523'",fontStyle:"normal"},className:"__className_ff3523",variable:"__variable_ff3523"}},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u=[],l=!1,c=-1;function d(){l&&n&&(l=!1,n.length?u=n.concat(u):c=-1,u.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new m(e,t)),1!==u.length||l||s(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}},o=!0;try{t[e](a,a.exports,n),o=!1}finally{o&&delete r[e]}return a.exports}n.ab="//";var i=n(229);e.exports=i}()},1664:function(e,t,r){e.exports=r(4090)},1074:function(e,t,r){"use strict";r.d(t,{i:function(){return a}});var n=r(5784),i=r(5466);function a(...e){return(0,n.useMemo)(()=>(0,i.r)(...e),[...e])}},4157:function(e,t,r){"use strict";r.d(t,{f:function(){return o}});var n=r(5784),i=r(6723);function a(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";if("string"==typeof r&&"button"===r.toLowerCase())return"button"}function o(e,t){let[r,o]=(0,n.useState)(()=>a(e));return(0,i.e)(()=>{o(a(e))},[e.type,e.as]),(0,i.e)(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")},[r,t]),r}},476:function(e,t,r){"use strict";r.d(t,{g:function(){return a}});var n=r(5784);function i(e){return[e.screenX,e.screenY]}function a(){let e=(0,n.useRef)([-1,-1]);return{wasMoved(t){let r=i(t);return(e.current[0]!==r[0]||e.current[1]!==r[1])&&(e.current=r,!0)},update(t){e.current=i(t)}}}},1497:function(e,t,r){"use strict";r.d(t,{T:function(){return i},d:function(){return a}});var n,i=((n=i||{})[n.First=0]="First",n[n.Previous=1]="Previous",n[n.Next=2]="Next",n[n.Last=3]="Last",n[n.Specific=4]="Specific",n[n.Nothing=5]="Nothing",n);function a(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),i=null!=n?n:-1,a=(()=>{switch(e.focus){case 0:return r.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=r.slice().reverse().findIndex((e,r,n)=>(-1===i||!(n.length-r-1>=i))&&!t.resolveDisabled(e));return -1===e?e:r.length-1-e}case 2:return r.findIndex((e,r)=>!(r<=i)&&!t.resolveDisabled(e));case 3:{let e=r.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:r.length-1-e}case 4:return r.findIndex(r=>t.resolveId(r)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===a?n:a}}},function(e){e.O(0,[107,30,90,35,703,17,744],function(){return e(e.s=144)}),_N_E=e.O()}]);