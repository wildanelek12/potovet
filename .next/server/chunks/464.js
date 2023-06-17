"use strict";
exports.id = 464;
exports.ids = [464];
exports.modules = {

/***/ 6464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* binding */ atomFormProject),
/* harmony export */   "Ud": () => (/* binding */ showYearContent),
/* harmony export */   "f3": () => (/* binding */ showModalInterest),
/* harmony export */   "g": () => (/* binding */ showModalEducation),
/* harmony export */   "kp": () => (/* binding */ showProjectContent),
/* harmony export */   "o7": () => (/* binding */ showModalSocialMedia),
/* harmony export */   "qm": () => (/* binding */ showMonthContent),
/* harmony export */   "sD": () => (/* binding */ showModalWork),
/* harmony export */   "uv": () => (/* binding */ showModalSkill)
/* harmony export */ });
/* unused harmony exports atomProjectName, atomProjectImage, atomDescProblemStatement */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6779);

const showModalSkill = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "showModalSkill",
    default: false
});
const showModalWork = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "showModalWork",
    default: false
});
const showModalEducation = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "showModalEducation",
    default: false
});
const showModalInterest = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "showModalInterest",
    default: false
});
const showModalSocialMedia = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "showModalSocialMedia",
    default: false
});
const showYearContent = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "showYearContent",
    default: true
});
const showMonthContent = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "showMonthContent",
    default: false
});
const showProjectContent = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "showProjectContent",
    default: false
});
const atomProjectName = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "atomProjectName",
    default: ""
});
const atomProjectImage = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "atomProjectImage",
    default: []
});
const atomDescProblemStatement = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "atomDescProblemStatement",
    default: ""
});
const atomFormProject = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "atomFormProject",
    default: {
        name_project: "",
        categories: {
            id: 1,
            name: "Academic",
            unavailable: false
        },
        time_elapsed: "",
        project_image: [],
        description: "",
        method: "",
        research_results: "",
        wireframing: "",
        prototype: "",
        prototype_url: "",
        lesson_learn: "",
        challenging_impact: ""
    }
});


/***/ })

};
;