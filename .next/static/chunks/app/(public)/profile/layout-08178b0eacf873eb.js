(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{1212:function(e,t,r){Promise.resolve().then(r.bind(r,8939))},8939:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var i=r(7437),n=r(9425),o=r(6691),s=r.n(o),a=r(1396),l=r.n(a),u=r(4033);function d(e){var t;let{children:r}=e,o=(0,u.usePathname)(),{data:a}=(0,n.Mx)();return(0,i.jsxs)("div",{className:"grid w-1/2 gap-8 mx-auto mt-20",children:[(0,i.jsxs)("div",{className:"flex w-full gap-8",children:[(0,i.jsx)("div",{className:"flex items-center justify-center basis-1/3",children:(0,i.jsx)("div",{className:"relative w-32 h-32 overflow-hidden rounded-full",children:(0,i.jsx)(s(),{src:"https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",alt:"",className:"absolute object-cover",sizes:"100%",fill:!0})})}),(0,i.jsxs)("div",{className:"flex flex-col justify-center basis-2/3",children:[(0,i.jsx)("p",{className:"text-xl font-bold tracking-wide text-black",children:null==a?void 0:null===(t=a.data)||void 0===t?void 0:t.name}),(0,i.jsx)("p",{className:"text-sm font-normal tracking-wide text-black",children:"Set up your POTOVET Account"})]})]}),(0,i.jsxs)("div",{className:"flex w-full gap-8",children:[(0,i.jsx)("div",{className:"basis-1/3",children:(0,i.jsxs)("div",{className:"grid gap-2",children:[(0,i.jsx)(l(),{href:"/profile",className:["block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ","/profile"===o?"bg-primary text-white":"hover:bg-neutral-100 hover:text-neutral-500"].join(" "),children:"User Profile"}),(0,i.jsx)(l(),{href:"/profile/skills",className:["block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ","/profile/skills"===o?"bg-primary text-white":"hover:bg-neutral-100 hover:text-neutral-500"].join(" "),children:"Skills"}),(0,i.jsx)(l(),{href:"/profile/work-experiences",className:["block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ","/profile/work-experiences"===o?"bg-primary text-white":"hover:bg-neutral-100 hover:text-neutral-500"].join(" "),children:"Work Experiences"}),(0,i.jsx)(l(),{href:"/profile/educations",className:["block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ","/profile/educations"===o?"bg-primary text-white":"hover:bg-neutral-100 hover:text-neutral-500"].join(" "),children:"Educations"}),(0,i.jsx)(l(),{href:"/profile/interests",className:["block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ","/profile/interests"===o?"bg-primary text-white":"hover:bg-neutral-100 hover:text-neutral-500"].join(" "),children:"Interests"}),(0,i.jsx)(l(),{href:"/profile/social-media",className:["block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ","/profile/social-media"===o?"bg-primary text-white":"hover:bg-neutral-100 hover:text-neutral-500"].join(" "),children:"Social Media"})]})}),(0,i.jsx)("div",{className:"basis-2/3",children:r})]})]})}},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},unstable_getImgProps:function(){return l}});let i=r(1024),n=r(2301),o=r(7873),s=r(3222),a=i._(r(5033)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=s.Image},2378:function(e,t,r){"use strict";r.d(t,{u:function(){return s}});var i=r(9222),n=r(5905),o=r(519);let s=(0,o.LC)({reducerPath:"baseApi",baseQuery:function(){let{baseUrl:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{baseUrl:""};return async t=>{let{url:r,method:o,data:s,params:a,headers:l}=t,u=localStorage.getItem("token");try{let t=n.F.isVisible();t||n.j.fire({title:"Loading...",didOpen:()=>{n.j.showLoading()}});let d=await (0,i.Z)({url:e+r,method:o,data:s,params:a,headers:{Authorization:u&&"Bearer "+u,...l}});return t||n.j.close(),{data:d.data}}catch(e){var d,c;return n.F.fire({icon:"error",title:null==e?void 0:e.response.data.message}),{error:{status:null===(d=e.response)||void 0===d?void 0:d.status,data:(null===(c=e.response)||void 0===c?void 0:c.data)||e.message}}}}}(),tagTypes:["Profile"],endpoints:()=>({})})},9425:function(e,t,r){"use strict";r.d(t,{Mx:function(){return o},TG:function(){return s}});var i=r(2378);let n=i.u.injectEndpoints({endpoints:e=>({getProfile:e.query({query:()=>({url:"/api/profile",method:"GET"}),providesTags:["Profile"]}),updateProfile:e.mutation({query:e=>{let{data:t}=e;return{url:"/api/profile",method:"POST",data:t}},invalidatesTags:["Profile"]})})}),{useGetProfileQuery:o,useUpdateProfileMutation:s}=n},5905:function(e,t,r){"use strict";r.d(t,{F:function(){return o},j:function(){return s}});var i=r(6820),n=r.n(i);let o=n().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",n().stopTimer),e.addEventListener("mouseleave",n().resumeTimer)}}),s=n().mixin({toast:!0,position:"top-end",showConfirmButton:!1})},6691:function(e,t,r){e.exports=r(1295)},1396:function(e,t,r){e.exports=r(6685)},4033:function(e,t,r){e.exports=r(8165)}},function(e){e.O(0,[351,222,685,971,596,744],function(){return e(e.s=1212)}),_N_E=e.O()}]);