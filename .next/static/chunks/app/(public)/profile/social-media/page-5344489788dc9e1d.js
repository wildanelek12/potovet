(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[601],{5726:function(e,t,n){Promise.resolve().then(n.bind(n,8087))},756:function(e,t,n){"use strict";var i=n(7437);t.Z=function(e){let{type:t,className:n,label:r,onClick:s,disabled:a}=e;return(0,i.jsx)("button",{type:t,onClick:()=>{!a&&s&&s()},className:["text-white select-none text-center bg-primary disabled:bg-primary/50 hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 transition-all",n].join(" "),disabled:a,children:r})}},1696:function(e,t,n){"use strict";var i=n(7437);t.Z=function(e){let{id:t,type:n,inputClassName:r,onChange:s,value:a,placeholder:o,disabled:l,label:u,labelClassName:d,beforeElement:c,className:f,afterElement:p}=e;return(0,i.jsxs)("div",{className:"grid w-full gap-1 text-sm",children:[u&&(0,i.jsx)("label",{className:["capitalize",d].join(" "),htmlFor:t,style:{fontWeight:500},children:u}),(0,i.jsxs)("div",{className:["flex gap-4 justify-between items-center border-2 border-[C6C6C6] rounded-md bg-white",f].join(" "),children:[c&&(0,i.jsx)("span",{className:"select-none",children:c}),(0,i.jsx)("input",{id:t,type:n,className:["w-full bg-white outline-none border-none rounded-md",r].join(" "),style:{boxShadow:"none",fontSize:"14px"},onChange:e=>s(e.target.value),value:null!=a?a:"",placeholder:o,autoComplete:"off",disabled:l}),p&&(0,i.jsx)("span",{className:"select-none",children:p})]})]})}},8087:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(7437),r=n(9425),s=n(2265),a=n(1696),o=n(756),l=n(5905);function u(){let[e,t]=(0,s.useState)(""),[n,u]=(0,s.useState)(""),[d,c]=(0,s.useState)(""),{data:f}=(0,r.Mx)(),[p,{isLoading:m}]=(0,r.TG)();return(0,s.useEffect)(()=>{var e;if(null==f?void 0:null===(e=f.data)||void 0===e?void 0:e.detail_user){let{instagram:e,linkedin:n,facebook:i}=f.data.detail_user;t(e),u(n),c(i)}},[f]),(0,i.jsxs)("div",{className:"grid gap-6",children:[(0,i.jsxs)("div",{className:"grid gap-2",children:[(0,i.jsx)("div",{className:"flex items-center justify-between bg-primary",style:{borderTopLeftRadius:"0.5rem",borderTopRightRadius:"0.5rem"},children:(0,i.jsx)("p",{className:"px-3 py-3 text-white",style:{fontWeight:500},children:"Social Media"})}),(0,i.jsx)(a.Z,{id:"instagram",label:"Instagram",type:"text",onChange:t,value:e}),(0,i.jsx)(a.Z,{id:"linkedin",label:"Linkedin",type:"text",onChange:u,value:n}),(0,i.jsx)(a.Z,{id:"facebook",label:"Facebook",type:"text",onChange:c,value:d})]}),(0,i.jsx)(o.Z,{onClick:()=>{m||p({data:{instagram:e,linkedin:n,facebook:d}}).then(e=>{let{data:t}=e;t&&l.F.fire({icon:"success",title:null==t?void 0:t.message})})},label:"Simpan",className:"px-8 mx-auto w-fit",disabled:m})]})}},2378:function(e,t,n){"use strict";n.d(t,{u:function(){return a}});var i=n(9222),r=n(5905),s=n(519);let a=(0,s.LC)({reducerPath:"baseApi",baseQuery:function(){let{baseUrl:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{baseUrl:""};return async t=>{let{url:n,method:s,data:a,params:o,headers:l}=t,u=localStorage.getItem("token");try{let t=r.F.isVisible();t||r.j.fire({title:"Loading...",didOpen:()=>{r.j.showLoading()}});let d=await (0,i.Z)({url:e+n,method:s,data:a,params:o,headers:{Authorization:u&&"Bearer "+u,...l}});return t||r.j.close(),{data:d.data}}catch(e){var d,c;return r.F.fire({icon:"error",title:null==e?void 0:e.response.data.message}),{error:{status:null===(d=e.response)||void 0===d?void 0:d.status,data:(null===(c=e.response)||void 0===c?void 0:c.data)||e.message}}}}}(),tagTypes:["Profile"],endpoints:()=>({})})},9425:function(e,t,n){"use strict";n.d(t,{Mx:function(){return s},TG:function(){return a}});var i=n(2378);let r=i.u.injectEndpoints({endpoints:e=>({getProfile:e.query({query:()=>({url:"/api/profile",method:"GET"}),providesTags:["Profile"]}),updateProfile:e.mutation({query:e=>{let{data:t}=e;return{url:"/api/profile",method:"POST",data:t}},invalidatesTags:["Profile"]})})}),{useGetProfileQuery:s,useUpdateProfileMutation:a}=r},5905:function(e,t,n){"use strict";n.d(t,{F:function(){return s},j:function(){return a}});var i=n(6820),r=n.n(i);let s=r().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",r().stopTimer),e.addEventListener("mouseleave",r().resumeTimer)}}),a=r().mixin({toast:!0,position:"top-end",showConfirmButton:!1})}},function(e){e.O(0,[351,971,596,744],function(){return e(e.s=5726)}),_N_E=e.O()}]);