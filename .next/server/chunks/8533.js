exports.id = 8533;
exports.ids = [8533];
exports.modules = {

/***/ 2033:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8693))

/***/ }),

/***/ 6645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Card({ children, className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: [
            "bg-white rounded-2xl shadow-[0_1.4px_4px_0_rgba(0,0,0,0.08)] border-[1px] border-[#E3E8F2]",
            className
        ].join(" "),
        children: children
    });
}


/***/ }),

/***/ 8693:
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
// EXTERNAL MODULE: ./redux/provider/index.js + 3 modules
var provider = __webpack_require__(5091);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/Button/index.js
var Button = __webpack_require__(2589);
;// CONCATENATED MODULE: ./app/(private)/Parts/Navbar/Parts/LogoutButton/index.js



function LogoutButton({ className }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
            type: "button",
            className: [
                "!p-0",
                className
            ].join(" "),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between gap-6 px-2 py-1 border rounded-full border-[#E3E8F2] text-primary-black",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",
                        alt: "photo-profile",
                        quality: 60,
                        width: 32,
                        height: 32,
                        className: "object-cover rounded-full min-w-8 max-h-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "capitalize select-none text-primary-black ",
                        children: "Ario Bayu" ?? 0
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: "rotate-180",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "#000000",
                        "stroke-width": "2.25",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M5.25 15.375L12 8.625L18.75 15.375"
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 202 modules
var motion = __webpack_require__(8000);
;// CONCATENATED MODULE: ./app/(private)/Parts/Navbar/Parts/MenuToggle/index.js


const Path = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.path, {
        fill: "transparent",
        strokeWidth: "3",
        stroke: "#000000",
        strokeLinecap: "round",
        ...props
    });
const MenuToggle = ({ toggle, isOpen, className })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: toggle,
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "23",
            height: "23",
            viewBox: "0 0 23 23",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Path, {
                    variants: {
                        closed: {
                            d: "M 2 2.5 L 20 2.5"
                        },
                        open: {
                            d: "M 3 16.5 L 17 2.5"
                        }
                    },
                    animate: isOpen ? "open" : "closed"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Path, {
                    d: "M 2 9.423 L 20 9.423",
                    variants: {
                        closed: {
                            opacity: 1
                        },
                        open: {
                            opacity: 0
                        }
                    },
                    animate: isOpen ? "open" : "closed",
                    transition: {
                        duration: 0.1
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Path, {
                    variants: {
                        closed: {
                            d: "M 2 16.346 L 20 16.346"
                        },
                        open: {
                            d: "M 3 2.5 L 17 16.346"
                        }
                    },
                    animate: isOpen ? "open" : "closed"
                })
            ]
        })
    });

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./redux/reducers/sidebarSlice.js
var sidebarSlice = __webpack_require__(4014);
;// CONCATENATED MODULE: ./app/(private)/Parts/Navbar/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Navbar() {
    const dispatch = (0,lib.useDispatch)();
    const { isOpen } = (0,lib.useSelector)((state)=>state.sidebar);
    const handleOnClick = ()=>{
        dispatch((0,sidebarSlice/* toggleSidebar */.GB)());
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "h-[4rem] top-0 z-20 shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "fixed h-[4rem] w-full flex gap-2 lg:gap-0 bg-white border-b-[#E3E8F2] border-b-[1px] px-4 lg:px-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center flex-1 gap-2 lg:gap-16 lg:pr-16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "font-bold text-primary text-lg",
                            children: "POTOVET"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center gap-8 ml-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center justify-between w-full h-full gap-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(LogoutButton, {
                                    className: "hidden lg:block"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MenuToggle, {
                                    toggle: handleOnClick,
                                    isOpen: isOpen,
                                    className: "lg:hidden focus-visible:outline-none"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./app/(private)/Parts/Card/index.js
var Card = __webpack_require__(6645);
;// CONCATENATED MODULE: ./app/(private)/Parts/Sidebar/Parts/Item/index.js






function Item({ id, label, href }) {
    const pathname = (0,navigation.usePathname)();
    const [active, setActive] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setActive(pathname?.slice(1)?.split("/")[1] === id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname?.slice(1).split("/")[1]
    ]);
    const content = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: [
            "relative flex flex-row justify-items-center items-center py-4 px-10 gap-3 select-none cursor-pointer"
        ].join(" "),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: [
                    "capitalize z-10 text-xs transition-all",
                    active ? "font-semibold" : "font-normal"
                ].join(" "),
                children: [
                    label,
                    active ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-2 bg-green-400 text-white text-xs font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-green dark:text-green-300",
                        children: "1"
                    }) : ""
                ]
            }),
            active && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                className: [
                    "absolute flex items-center justify-center w-full h-full right-0"
                ].join(" "),
                children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                    className: "bg-[#E3E8F2] mx-6 w-full h-full border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)] rounded-xl"
                })
            })
        ]
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: href && !active ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            children: content
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: content
        })
    });
}

;// CONCATENATED MODULE: ./app/(private)/Parts/Sidebar/Parts/Divider/index.js

function Divider({ className }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: [
            "mx-8 h-[1px] bg-[#E3E8F2] my-3",
            className
        ].join(" ")
    });
}

;// CONCATENATED MODULE: ./app/(private)/Parts/Sidebar/Parts/Wrapper/index.js





const Wrapper = ({ children })=>{
    const { isOpen } = (0,lib.useSelector)((state)=>state.sidebar);
    const sidebar = {
        open: {
            right: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        closed: {
            right: "-100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.aside, {
        variants: sidebar,
        initial: isOpen ? "open" : "closed",
        animate: isOpen ? "open" : "closed",
        className: "lg:min-w-[14rem] lg:w-[14rem] w-full h-full lg:static fixed z-50",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex flex-col w-[inherit] lg:fixed lg:left-0 h-full bg-white overflow-hidden shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-full overflow-auto scrollbar-hide",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col gap-4 pt-4 pb-24 lg:pt-5 lg:pb-28",
                    children: children
                })
            })
        })
    });
};
Wrapper.Item = Item;
Wrapper.Divider = Divider;
/* harmony default export */ const Parts_Wrapper = (Wrapper);

;// CONCATENATED MODULE: ./app/(private)/Parts/Sidebar/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Sidebar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Parts_Wrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Parts_Wrapper.Item, {
                id: "portofolios-insight",
                label: "Portofolios Insight",
                href: "/clientzone/dashboard"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parts_Wrapper.Item, {
                id: "add-project",
                label: "Portofolios",
                href: "/clientzone/add-project"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parts_Wrapper.Item, {
                id: "project-list",
                label: "Portofolio Journey",
                href: "/clientzone/project-list"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parts_Wrapper.Item, {
                id: "my-library",
                label: "My Library",
                href: "/clientzone/my-library"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/recoil/cjs/index.js
var cjs = __webpack_require__(5291);
;// CONCATENATED MODULE: ./app/(private)/layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 






function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: [
                    fonts/* default */.Z.className,
                    "font-montserrat bg-[#F7F8F9]"
                ].join(" "),
                children: /*#__PURE__*/ jsx_runtime_.jsx(provider/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col min-h-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-1 h-full",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                        className: "order-first w-full lg:order-last",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-full p-4 mr-auto 2xl:container lg:px-10 lg:py-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid h-full grid-cols-12 gap-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(cjs/* RecoilRoot */.Wh, {
                                                    children: children
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 2589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function Button({ className, type, children, label, onClick, disabled }) {
    const clickHandle = ()=>{
        if (!disabled) {
            if (onClick) {
                onClick();
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: type,
        onClick: clickHandle,
        className: [
            "flex flex-row justify-center items-center gap-2 p-2 cursor-pointer select-none focus-visible:outline-none disabled:cursor-default rounded-lg",
            className
        ].join(" "),
        disabled: disabled,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "capitalize text-inherit",
                children: label
            }),
            children
        ]
    });
}


/***/ }),

/***/ 278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\wildan\Documents\Web Project\lioke-rebrand\app\(private)\layout.js`)

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