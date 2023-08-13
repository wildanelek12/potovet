"use strict";
exports.id = 9576;
exports.ids = [9576];
exports.modules = {

/***/ 9576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function TextArea({ id, inputClassName, onChange, value, placeholder, disabled, label, labelClassName, beforeElement, className, afterElement, rows, maxlength }) {
    const [textLength, setTextLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value ? value.length : 0);
    const handleInputChange = (newValue)=>{
        onChange(newValue);
        setTextLength(newValue.length);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid w-full gap-1 text-sm",
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: [
                    "capitalize",
                    labelClassName
                ].join(" "),
                htmlFor: id,
                style: {
                    fontWeight: 500
                },
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: [
                    "flex gap-4 justify-between items-center border-2 border-[C6C6C6] rounded-md bg-white",
                    className
                ].join(" "),
                children: [
                    beforeElement && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "select-none",
                        children: beforeElement
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        id: id,
                        className: [
                            "w-full bg-white outline-none border-none rounded-md",
                            inputClassName
                        ].join(" "),
                        style: {
                            boxShadow: "none",
                            fontSize: "14px"
                        },
                        onChange: (e)=>handleInputChange(e.target.value),
                        value: value ?? "",
                        placeholder: placeholder,
                        rows: rows,
                        maxLength: maxlength,
                        disabled: disabled
                    }),
                    afterElement && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "select-none",
                        children: afterElement
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-gray-500 text-xs mt-1",
                children: [
                    "Length: ",
                    textLength,
                    "/",
                    maxlength
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);


/***/ })

};
;