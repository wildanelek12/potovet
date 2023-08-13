exports.id = 2093;
exports.ids = [2093];
exports.modules = {

/***/ 3599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ DatePickerComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2205);
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_2__);



function DatePickerComponent({ asSingle, value, onChange }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "capitalize font-semibold",
                    children: "Time Elapsed"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "border-2 border-[C6C6C6] rounded-lg ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_2___default()), {
                        inputClassName: "focus:outline-none focus:ring-0 focus:ring-offset-0 p-2",
                        asSingle: asSingle,
                        primaryColor: "teal",
                        value: value ?? "",
                        onChange: (newValue)=>{
                            onChange(newValue);
                        },
                        showShortcuts: true
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 4640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_drag_drop_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6565);




function FileInput({ label, className, onChange, value, types, multiple, preview, previewClassName, previewInitial, labelClassName, fileOrFiles }) {
    const [previews, setPreviews] = useState([]);
    useEffect(()=>{
        if (preview) {
            const temp = value.map((v)=>URL.createObjectURL(v));
            setPreviews(temp);
            return ()=>{
                temp.forEach((v)=>{
                    URL.revokeObjectURL(v);
                });
            };
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        value
    ]);
    const handleChange = (file)=>{
        if (multiple) {
            if (file.length > 0) {
                onChange([
                    ...file
                ]);
            }
        } else {
            onChange([
                file
            ]);
        }
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: "grid gap-1",
        children: [
            label && /*#__PURE__*/ _jsx("label", {
                className: [
                    "capitalize",
                    labelClassName
                ].join(" ") + " font-semibold",
                children: label
            }),
            previews.length == 0 && previewInitial?.length > 0 && /*#__PURE__*/ _jsx("div", {
                className: [
                    "grid gap-4 w-full grid-cols-1 h-56",
                    previewClassName
                ].join(" "),
                children: previewInitial.map((v, i)=>{
                    if (v) {
                        return /*#__PURE__*/ _jsx("div", {
                            className: "relative grid items-center justify-center",
                            children: /*#__PURE__*/ _jsx(Image, {
                                src: `/${v}`,
                                alt: `image-preview-${i}`,
                                layout: "fill",
                                objectFit: "cover",
                                className: "rounded-lg",
                                priority: true
                            })
                        }, i);
                    }
                })
            }),
            previews.length > 0 && /*#__PURE__*/ _jsx("div", {
                className: [
                    "grid gap-4 w-full grid-cols-1",
                    previewClassName
                ].join(" "),
                children: previews.map((v, i)=>/*#__PURE__*/ _jsx("div", {
                        className: "relative grid items-center justify-center h-56",
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: v,
                            alt: `image-preview-${i}`,
                            layout: "fill",
                            objectFit: "cover",
                            className: "rounded-lg",
                            priority: true
                        })
                    }, i))
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "w-full overflow-hidden",
                children: /*#__PURE__*/ _jsx(FileUploader, {
                    multiple: multiple,
                    handleChange: handleChange,
                    types: types,
                    fileOrFiles: fileOrFiles,
                    children: /*#__PURE__*/ _jsx("div", {
                        className: [
                            "flex gap-4 justify-between items-center border-2 border-[C6C6C6] rounded-md",
                            className
                        ].join(" "),
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center w-full gap-4 p-3",
                            children: [
                                /*#__PURE__*/ _jsx("button", {
                                    className: "px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out border border-gray-300 rounded-md select-none hover:text-secondary-orange hover:border-secondary-orange focus:outline-none",
                                    children: "Upload"
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    className: "select-none text-[#7D7D7D] truncate",
                                    children: value.length > 0 ? value.map((v)=>v.name).join(", ") : "No file chosen"
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 8544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);


function Input({ id, label, type, onChange, value, placeholder, beforeElement, afterElement, className, inputClassName, labelClassName, disabled }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid gap-1 font-work-sans",
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: [
                    "capitalize",
                    labelClassName
                ].join(" ") + "font-semibold",
                htmlFor: id,
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: [
                    "flex gap-4 justify-between items-center border-2 border-[C6C6C6] p-3 rounded-md bg-white",
                    className
                ].join(" "),
                children: [
                    beforeElement && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "select-none",
                        children: beforeElement
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: id,
                        type: type,
                        className: [
                            "w-full bg-white focus:outline-none",
                            inputClassName
                        ].join(" "),
                        onChange: (e)=>onChange(e.target.value),
                        value: value ?? "",
                        placeholder: placeholder,
                        autoComplete: "off",
                        disabled: disabled
                    }),
                    afterElement && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "select-none",
                        children: afterElement
                    }),
                    value ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__/* .BsCheckCircleFill */ .N9r, {
                        color: "#64CCC5"
                    }) : ""
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ RichTextEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const editorConfiguration = {
    toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "|",
        "link",
        "|",
        "outdent",
        "indent",
        "|",
        "bulletedList",
        "numberedList",
        "|",
        "insertTable",
        "|",
        "uploadImage",
        "blockQuote",
        "|",
        "undo",
        "redo"
    ]
};
function RichTextEditor({ value, onChange, label, isTextArea }) {
    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [rendered, setRendered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { CKEditor, Editor } = {
        CKEditor: (__webpack_require__(2838).CKEditor),
        Editor: __webpack_require__(9001)
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        editorRef.current = {
            CKEditor,
            Editor
        };
        setRendered(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function handleChange(editor) {
        var data = editor.getData();
        var replaced_text = data.replace(/(<([^>]+)>)/gi, "");
        const count = replaced_text.length;
        setCount(count);
        if (count > 500) {
            var old_data = value;
            console.log("here");
            editor.setData(old_data);
            return old_data;
        } else {
            console.log("else");
            return editor.getData();
        }
    }
    // useEffect(() => {
    //   var text = value;
    //   const count = text.replace(/(<([^>]+)>)/gi, "").length;
    //   console.log(text.replace(/(<([^>]+)>)/gi, ""));
    //   setCount(count);
    // }, [value]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid",
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "capitalize font-semibold",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-1 h-fit",
                children: rendered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CKEditor, {
                    editor: Editor,
                    data: value,
                    config: !isTextArea && editorConfiguration,
                    onChange: (_, editor)=>onChange(handleChange(editor))
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "font-normal text-xs",
                children: [
                    count,
                    " / 500 Character"
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProjectOverview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_private_Parts_FileInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4640);
/* harmony import */ var _app_private_Parts_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8544);
/* harmony import */ var _app_private_Parts_RichTextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4830);
/* harmony import */ var _app_private_Parts_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2707);
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2205);
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _recoil_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4905);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5291);
/* harmony import */ var _app_private_Parts_DatePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3599);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5834);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* __next_internal_client_entry_do_not_use__ default auto */ 










function ProjectOverview() {
    const optionCategories = [
        {
            id: 1,
            name: "Academic",
            unavailable: false
        },
        {
            id: 2,
            name: "Professional",
            unavailable: false
        },
        {
            id: 2,
            name: "Research",
            unavailable: false
        },
        {
            id: 2,
            name: "Informal Trainings",
            unavailable: false
        }
    ];
    //const [projectName, setProjectName] = useRecoilState(atomProjectName);
    const [project, setProject] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__/* .useRecoilState */ .FV)(_recoil_atom__WEBPACK_IMPORTED_MODULE_6__/* .atomFormProject */ .Cp);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid gap-4 ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_private_Parts_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    id: "project-name",
                    label: "Name",
                    type: "text",
                    value: project.name_project,
                    onChange: (e)=>setProject({
                            ...project,
                            name_project: e
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_private_Parts_Select__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    options: optionCategories,
                    defaultValue: optionCategories[0],
                    selected: project.categories,
                    onChange: (e)=>setProject({
                            ...project,
                            categories: e
                        }),
                    label: "Project Categories"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_private_Parts_DatePicker__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    asSingle: false,
                    value: project.time_elapsed,
                    onChange: (newValue)=>setProject({
                            ...project,
                            time_elapsed: newValue
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_private_Parts_RichTextEditor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    label: "Description",
                    value: project.description,
                    onChange: (e)=>setProject({
                            ...project,
                            description: e
                        })
                })
            ]
        })
    });
}


/***/ }),

/***/ 5834:
/***/ (() => {



/***/ })

};
;