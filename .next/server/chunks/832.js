exports.id = 832;
exports.ids = [832];
exports.modules = {

/***/ 8411:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9797, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3852))

/***/ }),

/***/ 3853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);

function Card({ children , className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: [
            "bg-white rounded-2xl shadow-[0_1.4px_4px_0_rgba(0,0,0,0.08)] border-[1px] border-[#E3E8F2]",
            className
        ].join(" "),
        children: children
    });
}


/***/ }),

/***/ 6875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("C:\\Users\\wildan\\Documents\\Web Project\\lioke-rebrand\\app\\(private)\\Parts\\Chart\\index.js");


/***/ }),

/***/ 5456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TopItemCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5468);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(634);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



function TopItemCard({ src , name , rank  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-row items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "basis-2/6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: src,
                        className: "w-full h-20 object-fill",
                        width: 120,
                        height: 120
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "ml-4 font-normal text-sm basis-3/6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: name
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "basis-1/6/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        class: "bg-blue-100 text-blue-800 text-lg font-bold mr-2 p-3 rounded-3xl dark:bg-blue-900 dark:text-blue-300",
                        children: rank
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 3852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chart": () => (/* binding */ Chart),
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "options": () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1522);




chart_js__WEBPACK_IMPORTED_MODULE_2__/* .Chart.register */ .kL.register(chart_js__WEBPACK_IMPORTED_MODULE_2__/* .CategoryScale */ .uw, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .LinearScale */ .f$, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .PointElement */ .od, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .LineElement */ .jn, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .Filler */ .Gu, chart_js__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De);
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },
        title: {
            display: true,
            text: "Chart.js Line Chart"
        }
    }
};
const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
];
const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: "Dataset 2",
            data: labels.map(()=>Math.floor(Math.random() * (10000 - 1 + 1) + 1)),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)"
        }
    ]
};
function Chart() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__/* .Line */ .x1, {
        options: options,
        data: data
    });
}


/***/ })

};
;