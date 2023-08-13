exports.id = 5071;
exports.ids = [5071];
exports.modules = {

/***/ 2698:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8071))

/***/ }),

/***/ 8071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(4047);
// EXTERNAL MODULE: ./constants/fonts/index.js
var fonts = __webpack_require__(965);
// EXTERNAL MODULE: ./node_modules/recoil/cjs/index.js
var cjs = __webpack_require__(5291);
// EXTERNAL MODULE: ./redux/provider/index.js + 3 modules
var provider = __webpack_require__(5091);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./redux/services/authApi.js
var authApi = __webpack_require__(4103);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/menu/menu.js + 1 modules
var menu = __webpack_require__(4266);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 4 modules
var transition = __webpack_require__(2596);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/20/solid/esm/ChevronDoubleDownIcon.js
var ChevronDoubleDownIcon = __webpack_require__(599);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./redux/services/profileApi.js
var profileApi = __webpack_require__(8013);
;// CONCATENATED MODULE: ./app/(public)/components/Navbar/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








function Navbar() {
    const router = (0,navigation.useRouter)();
    const [rendered, setRendered] = (0,react_.useState)(false);
    const [token, setToken] = (0,react_.useState)(null);
    const { data: user } = (0,profileApi/* useGetProfileQuery */.Mx)(undefined, {
        skip: !token
    });
    const [logout] = (0,authApi/* useLogoutMutation */._y)();
    const handleOnclickLogout = ()=>{
        logout().then(({ data, error })=>{
            if (!error) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                router.push("/login");
            }
        });
    };
    (0,react_.useEffect)(()=>{
        const token = localStorage.getItem("token");
        setToken(token);
        setRendered(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "py-6 px-16 shadow-md flex items-center bg-white text-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "mr-8 text-2xl font-bold text-primary",
                    children: "POTOVET"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-row flex-1 space-x-12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/project",
                        className: "text-base font-medium text-[#6E6F70]",
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/project",
                        className: "text-base font-medium text-[#6E6F70]",
                        children: "Pricing"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/project",
                        className: "text-base font-medium text-[#6E6F70]",
                        children: "About"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-row items-center space-x-3",
                children: rendered ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: token ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v, {
                        as: "div",
                        className: "relative inline-block text-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v.Button, {
                                    className: "inline-flex items-center justify-center w-full px-2 py-2 text-sm font-medium text-white rounded-md bg-secondary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "w-6 h-6 mx-2 rounded-full",
                                            src: "https://picsum.photos/id/231/400/400",
                                            alt: "Picture of the author",
                                            width: 32,
                                            height: 32
                                        }),
                                        user?.data?.name ?? "-",
                                        /*#__PURE__*/ jsx_runtime_.jsx(ChevronDoubleDownIcon/* default */.Z, {
                                            className: "w-5 h-5 ml-2 -mr-1 text-white hover:text-violet-100",
                                            "aria-hidden": "true"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                                as: react_.Fragment,
                                enter: "transition ease-out duration-100",
                                enterFrom: "transform opacity-0 scale-95",
                                enterTo: "transform opacity-100 scale-100",
                                leave: "transition ease-in duration-75",
                                leaveFrom: "transform opacity-100 scale-100",
                                leaveTo: "transform opacity-0 scale-95",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v.Items, {
                                    className: "absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "px-1 py-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/clientzone",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Item, {
                                                    children: ({ active })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                            children: "Clientzone"
                                                        })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "px-1 py-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/project",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Item, {
                                                    children: ({ active })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                            children: "Gallery"
                                                        })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "px-1 py-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/profile",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Item, {
                                                    children: ({ active })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                            children: "Profile"
                                                        })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "px-1 py-1",
                                            onClick: handleOnclickLogout,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Item, {
                                                children: ({ active })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                        children: "Logout"
                                                    })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/login",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 ",
                            children: "Login"
                        })
                    })
                }) : null
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/(public)/layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: [
                    fonts/* default */.Z.className,
                    "font-montserrat"
                ].join(" "),
                children: /*#__PURE__*/ jsx_runtime_.jsx(provider/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs/* RecoilRoot */.Wh, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                            children
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 8013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mx: () => (/* binding */ useGetProfileQuery),
/* harmony export */   TG: () => (/* binding */ useUpdateProfileMutation)
/* harmony export */ });
/* unused harmony export profileApi */
/* harmony import */ var _baseApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7429);

const profileApi = _baseApi__WEBPACK_IMPORTED_MODULE_0__/* .baseApi */ .u.injectEndpoints({
    endpoints: (builder)=>({
            getProfile: builder.query({
                query: ()=>({
                        url: "/api/profile",
                        method: "GET"
                    }),
                providesTags: [
                    "Profile"
                ]
            }),
            updateProfile: builder.mutation({
                query: ({ data })=>({
                        url: "/api/profile",
                        method: "POST",
                        data
                    }),
                invalidatesTags: [
                    "Profile"
                ]
            })
        })
});
const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;


/***/ }),

/***/ 4644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\wildan\Documents\Web Project\lioke-rebrand\app\(public)\layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;