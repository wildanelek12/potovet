exports.id = 8305;
exports.ids = [8305];
exports.modules = {

/***/ 965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_font_google_target_css_path_constants_fonts_index_js_import_Montserrat_arguments_subsets_latin_variable_font_montserrat_variableName_MontserratFont___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5940);
/* harmony import */ var next_font_google_target_css_path_constants_fonts_index_js_import_Montserrat_arguments_subsets_latin_variable_font_montserrat_variableName_MontserratFont___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_constants_fonts_index_js_import_Montserrat_arguments_subsets_latin_variable_font_montserrat_variableName_MontserratFont___WEBPACK_IMPORTED_MODULE_0__);

const Fonts = {
    className: [
        (next_font_google_target_css_path_constants_fonts_index_js_import_Montserrat_arguments_subsets_latin_variable_font_montserrat_variableName_MontserratFont___WEBPACK_IMPORTED_MODULE_0___default().variable)
    ].join(" ")
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fonts);


/***/ }),

/***/ 5091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Provider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(1388);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/query/rtk-query.cjs.production.min.js
var rtk_query_cjs_production_min = __webpack_require__(1011);
// EXTERNAL MODULE: ./redux/reducers/sidebarSlice.js
var sidebarSlice = __webpack_require__(4014);
// EXTERNAL MODULE: ./redux/services/authApi.js
var authApi = __webpack_require__(4103);
;// CONCATENATED MODULE: ./redux/reducers/index.js



const reducers = (0,redux_toolkit_cjs_production_min.combineReducers)({
    sidebar: sidebarSlice/* default */.ZP,
    [authApi/* authApi */.iJ.reducerPath]: authApi/* authApi */.iJ.reducer
});

// EXTERNAL MODULE: ./redux/services/baseApi.js + 1 modules
var baseApi = __webpack_require__(7429);
;// CONCATENATED MODULE: ./redux/middlewares/index.js

const middleware = [
    baseApi/* baseApi */.u.middleware
];

;// CONCATENATED MODULE: ./redux/store/index.js




const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: reducers,
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware({
            serializableCheck: false
        }).concat(...middleware);
    },
    devTools: process.env.APP_ENV !== "production"
});
(0,rtk_query_cjs_production_min.setupListeners)(store.dispatch);

;// CONCATENATED MODULE: ./redux/provider/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Provider({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store,
        children: children
    });
}


/***/ }),

/***/ 4014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GB: () => (/* binding */ toggleSidebar),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports sidebarSlice, openSubItem, closeSubItem */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    id: "",
    isOpen: false
};
const sidebarSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "sidebar",
    initialState,
    reducers: {
        openSubItem: (state, action)=>{
            state.id = action.payload.id;
        },
        closeSubItem: (state)=>{
            state.id = "";
        },
        toggleSidebar: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
});
const { openSubItem, closeSubItem, toggleSidebar } = sidebarSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarSlice.reducer);


/***/ }),

/***/ 4103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YA: () => (/* binding */ useLoginMutation),
/* harmony export */   _y: () => (/* binding */ useLogoutMutation),
/* harmony export */   iJ: () => (/* binding */ authApi),
/* harmony export */   l4: () => (/* binding */ useRegisterMutation)
/* harmony export */ });
/* harmony import */ var _baseApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7429);

const authApi = _baseApi__WEBPACK_IMPORTED_MODULE_0__/* .baseApi */ .u.injectEndpoints({
    endpoints: (builder)=>({
            login: builder.mutation({
                query: ({ data })=>({
                        url: "/api/login",
                        method: "POST",
                        data
                    })
            }),
            register: builder.mutation({
                query: ({ data })=>({
                        url: "/api/register",
                        method: "POST",
                        data
                    })
            }),
            logout: builder.mutation({
                query: ()=>({
                        url: "/api/logout",
                        method: "POST"
                    }),
                invalidatesTags: [
                    "Profile"
                ]
            })
        })
});
const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi;


/***/ }),

/***/ 7429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ baseApi)
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(3258);
// EXTERNAL MODULE: ./utils/SweetAlert/index.js
var SweetAlert = __webpack_require__(5389);
;// CONCATENATED MODULE: ./utils/Axios/index.js
/** @format */ 

const axiosBaseQuery = ({ baseUrl } = {
    baseUrl: ""
})=>async ({ url, method, data, params, headers })=>{
        const token = localStorage.getItem("token");
        try {
            const isVisible = SweetAlert/* Toast */.F.isVisible();
            if (!isVisible) {
                SweetAlert/* ToastLoading */.j.fire({
                    title: "Loading...",
                    didOpen: ()=>{
                        SweetAlert/* ToastLoading */.j.showLoading();
                    }
                });
            }
            const res = await (0,axios/* default */.Z)({
                url: baseUrl + url,
                method,
                data,
                params,
                headers: {
                    Authorization: token && "Bearer " + token,
                    ...headers
                }
            });
            if (!isVisible) {
                SweetAlert/* ToastLoading */.j.close();
            }
            return {
                data: res.data
            };
        } catch (err) {
            SweetAlert/* Toast */.F.fire({
                icon: "error",
                title: err?.response.data.message
            });
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message
                }
            };
        }
    };

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.cjs.production.min.js
var rtk_query_react_cjs_production_min = __webpack_require__(3298);
;// CONCATENATED MODULE: ./redux/services/baseApi.js
/** @format */ 

const baseApi = (0,rtk_query_react_cjs_production_min.createApi)({
    reducerPath: "baseApi",
    baseQuery: axiosBaseQuery(),
    tagTypes: [
        "Profile"
    ],
    endpoints: ()=>({})
});


/***/ }),

/***/ 5389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ Toast),
/* harmony export */   j: () => (/* binding */ ToastLoading)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9322);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast)=>{
        toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
        toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
    }
});
const ToastLoading = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false
});


/***/ }),

/***/ 4047:
/***/ (() => {



/***/ })

};
;