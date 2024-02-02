"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/ProjectCard.jsx":
/*!****************************************!*\
  !*** ./app/components/ProjectCard.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CodeBracketIcon,EyeIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CodeBracketIcon,EyeIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProjectCard = (param)=>{\n    let { imgUrl, title, description, date, gitUrl, tag, result, mainWork } = param;\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const openModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const closeModal = ()=>{\n        setIsModalOpen(false);\n    };\n    const handleOutsideClick = (event)=>{\n        if (modalRef.current && !modalRef.current.contains(event.target)) {\n            closeModal();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border border-[#ADB7BE] rounded-xl overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-52 md:h-72 rounded-t-xl relative group\",\n                style: {\n                    background: \"url(\".concat(imgUrl, \")\"),\n                    backgroundSize: \"contain\",\n                    backgroundRepeat: \"no-repeat\",\n                    backgroundPosition: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openModal,\n                            className: \"h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: gitUrl,\n                            className: \"h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl font-semibold mb-2\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#ADB7BE] mb-2\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap gap-2\",\n                        children: tag.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-gray-600 text-white px-2 py-1 rounded-md\",\n                                children: tag\n                            }, index, false, {\n                                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    \"      \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50\",\n                onClick: handleOutsideClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: modalRef,\n                    className: \"text-black bg-white p-8 rounded-xl\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-2\",\n                                    children: \"프로젝트명\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-4\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-semibold mb-2\",\n                                    children: \"설명\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-4\",\n                                    children: description\n                                }, void 0, false, {\n                                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-semibold mb-2\",\n                                    children: \"기간\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-4\",\n                                    children: date\n                                }, void 0, false, {\n                                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-semibold mb-2\",\n                                    children: \"주요업무\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"list-disc ml-8 mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: \"요구사항정의 및 관련 커뮤니케이션 실무\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: \"화면설계서를 토대로 요구사항확인\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: \"외주업체(디자인, 퍼블리싱, 개발) 일정관리 : 내부용 WBS 작성\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: \"디버깅 진행 후 오류사항 정리 후 전달\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-semibold mb-2\",\n                                    children: \"주요성과\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: result\n                                }, void 0, false, {\n                                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: closeModal,\n                                className: \"mt-8 px-6 py-3 bg-gray-400 text-gray-800 rounded-md\",\n                                children: \"종료\"\n                            }, void 0, false, {\n                                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectCard, \"xRTsu1Cld+PB7kRSbYjPuI6Rt1s=\");\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0Q7QUFDdUI7QUFDMUM7QUFFN0IsTUFBTU0sY0FBYztRQUFDLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFOztJQUN0RixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTWdCLFdBQVdmLDZDQUFNQTtJQUV2QixNQUFNZ0IsWUFBWTtRQUNoQkYsZUFBZTtJQUNqQjtJQUVBLE1BQU1HLGFBQWE7UUFDakJILGVBQWU7SUFDakI7SUFFQSxNQUFNSSxxQkFBcUIsQ0FBQ0M7UUFDMUIsSUFBSUosU0FBU0ssT0FBTyxJQUFJLENBQUNMLFNBQVNLLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixNQUFNRyxNQUFNLEdBQUc7WUFDaEVMO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQUVDLFlBQVksT0FBYyxPQUFQckIsUUFBTztvQkFBSXNCLGdCQUFnQjtvQkFBV0Msa0JBQWtCO29CQUFhQyxvQkFBb0I7Z0JBQVM7MEJBRTlILDRFQUFDTjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUFPQyxTQUFTZjs0QkFBV1EsV0FBVTtzQ0FDcEMsNEVBQUN2QixpSEFBZUE7Z0NBQUN1QixXQUFVOzs7Ozs7Ozs7OztzQ0FFN0IsOERBQUNyQixpREFBSUE7NEJBQ0g2QixNQUFNdkI7NEJBQ05lLFdBQVU7c0NBRVYsNEVBQUN0QixpSEFBT0E7Z0NBQUNzQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl6Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDUzt3QkFBR1QsV0FBVTtrQ0FBOEJsQjs7Ozs7O2tDQUM1Qyw4REFBQzRCO3dCQUFFVixXQUFVO2tDQUF1QmpCOzs7Ozs7a0NBQ3BDLDhEQUFDZ0I7d0JBQUlDLFdBQVU7a0NBQ1pkLElBQUl5QixHQUFHLENBQUMsQ0FBQ3pCLEtBQUswQixzQkFDYiw4REFBQ0M7Z0NBQWlCYixXQUFVOzBDQUErQ2Q7K0JBQWhFMEI7Ozs7Ozs7Ozs7b0JBRVQ7Ozs7Ozs7WUFFUHZCLDZCQUNDLDhEQUFDVTtnQkFBSUMsV0FBVTtnQkFBZ0dPLFNBQVNiOzBCQUN0SCw0RUFBQ0s7b0JBQUllLEtBQUt2QjtvQkFBVVMsV0FBVTs7c0NBQzVCLDhEQUFDRDs7OENBQ0MsOERBQUNnQjtvQ0FBR2YsV0FBVTs4Q0FBNkI7Ozs7Ozs4Q0FDM0MsOERBQUNVO29DQUFFVixXQUFVOzhDQUFRbEI7Ozs7Ozs4Q0FDckIsOERBQUNrQztvQ0FBR2hCLFdBQVU7OENBQTZCOzs7Ozs7OENBQzNDLDhEQUFDVTtvQ0FBRVYsV0FBVTs4Q0FBUWpCOzs7Ozs7OENBQ3JCLDhEQUFDaUM7b0NBQUdoQixXQUFVOzhDQUE2Qjs7Ozs7OzhDQUMzQyw4REFBQ1U7b0NBQUVWLFdBQVU7OENBQVFoQjs7Ozs7OzhDQUNyQiw4REFBQ2dDO29DQUFHaEIsV0FBVTs4Q0FBNkI7Ozs7Ozs4Q0FDM0MsOERBQUNpQjtvQ0FBR2pCLFdBQVU7O3NEQUNaLDhEQUFDa0I7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7c0RBQUc7Ozs7Ozs7Ozs7Ozs4Q0FFTiw4REFBQ0Y7b0NBQUdoQixXQUFVOzhDQUE2Qjs7Ozs7OzhDQUMzQyw4REFBQ1U7OENBQUd2Qjs7Ozs7Ozs7Ozs7O3NDQUVOLDhEQUFDWTs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ007Z0NBQU9DLFNBQVNkO2dDQUFZTyxXQUFVOzBDQUFzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zRztHQXpFTXBCO0tBQUFBO0FBMkVOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzeD83YjFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb2RlQnJhY2tldEljb24sIEV5ZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFByb2plY3RDYXJkID0gKHsgaW1nVXJsLCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIGdpdFVybCwgdGFnLCByZXN1bHQsIG1haW5Xb3JrIH0pID0+IHtcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU91dHNpZGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChtb2RhbFJlZi5jdXJyZW50ICYmICFtb2RhbFJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItWyNBREI3QkVdIHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImgtNTIgbWQ6aC03MiByb3VuZGVkLXQteGwgcmVsYXRpdmUgZ3JvdXBcIlxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgdXJsKCR7aW1nVXJsfSlgLCBiYWNrZ3JvdW5kU2l6ZTogXCJjb250YWluXCIsIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIiB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGJnLVsjMTgxODE4XSBiZy1vcGFjaXR5LTAgaGlkZGVuIGdyb3VwLWhvdmVyOmZsZXggZ3JvdXAtaG92ZXI6Ymctb3BhY2l0eS04MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9IGNsYXNzTmFtZT1cImgtMTQgdy0xNCBtci0yIGJvcmRlci0yIHJlbGF0aXZlIHJvdW5kZWQtZnVsbCBib3JkZXItWyNBREI3QkVdIGhvdmVyOmJvcmRlci13aGl0ZSBncm91cC9saW5rXCI+XG4gICAgICAgICAgICA8Q29kZUJyYWNrZXRJY29uIGNsYXNzTmFtZT1cImgtMTAgdy0xMCB0ZXh0LVsjQURCN0JFXSBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgIGN1cnNvci1wb2ludGVyIGdyb3VwLWhvdmVyL2xpbms6dGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e2dpdFVybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTQgdy0xNCBib3JkZXItMiByZWxhdGl2ZSByb3VuZGVkLWZ1bGwgYm9yZGVyLVsjQURCN0JFXSBob3Zlcjpib3JkZXItd2hpdGUgZ3JvdXAvbGlua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEV5ZUljb24gY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHRleHQtWyNBREI3QkVdIGFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiAgY3Vyc29yLXBvaW50ZXIgZ3JvdXAtaG92ZXIvbGluazp0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcm91bmRlZC1iLXhsIG10LTMgYmctWyMxODE4MThdIHB5LTYgcHgtNFwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTJcIj57dGl0bGV9PC9oNT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0FEQjdCRV0gbWItMlwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICB7dGFnLm1hcCgodGFnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctZ3JheS02MDAgdGV4dC13aGl0ZSBweC0yIHB5LTEgcm91bmRlZC1tZFwiPnt0YWd9PC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj4gICAgICA8L2Rpdj5cblxuICAgICAge2lzTW9kYWxPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTcwIHotNTBcIiBvbkNsaWNrPXtoYW5kbGVPdXRzaWRlQ2xpY2t9PlxuICAgICAgICAgIDxkaXYgcmVmPXttb2RhbFJlZn0gY2xhc3NOYW1lPVwidGV4dC1ibGFjayBiZy13aGl0ZSBwLTggcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+7ZSE66Gc7KCd7Yq466qFPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPnt0aXRsZX08L3A+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPuyEpOuqhTwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj7quLDqsIQ8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+e2RhdGV9PC9wPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj7so7zsmpTsl4XrrLQ8L2gzPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIG1sLTggbWItNFwiPlxuICAgICAgICAgICAgICAgIDxsaT7smpTqtazsgqztla3soJXsnZgg67CPIOq0gOugqCDsu6TrrqTri4jsvIDsnbTshZgg7Iuk66y0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+7ZmU66m07ISk6rOE7ISc66W8IO2GoOuMgOuhnCDsmpTqtazsgqztla3tmZXsnbg8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7smbjso7zsl4XssrQo65SU7J6Q7J24LCDtjbzruJTrpqzsi7EsIOqwnOuwnCkg7J287KCV6rSA66asIDog64K067aA7JqpIFdCUyDsnpHshLE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7rlJTrsoTquYUg7KeE7ZaJIO2bhCDsmKTrpZjsgqztla0g7KCV66asIO2bhCDsoITri6w8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj7so7zsmpTshLHqs7w8L2gzPlxuICAgICAgICAgICAgICA8cD57cmVzdWx0fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VNb2RhbH0gY2xhc3NOYW1lPVwibXQtOCBweC02IHB5LTMgYmctZ3JheS00MDAgdGV4dC1ncmF5LTgwMCByb3VuZGVkLW1kXCI+7KKF66OMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkNvZGVCcmFja2V0SWNvbiIsIkV5ZUljb24iLCJMaW5rIiwiUHJvamVjdENhcmQiLCJpbWdVcmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImdpdFVybCIsInRhZyIsInJlc3VsdCIsIm1haW5Xb3JrIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsIm1vZGFsUmVmIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImhhbmRsZU91dHNpZGVDbGljayIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiLCJoNSIsInAiLCJtYXAiLCJpbmRleCIsInNwYW4iLCJyZWYiLCJoMiIsImgzIiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ProjectCard.jsx\n"));

/***/ })

});