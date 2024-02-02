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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CodeBracketIcon,EyeIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CodeBracketIcon,EyeIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProjectCard = (param)=>{\n    let { imgUrl, title, description, gitUrl, hashtag } = param;\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const openModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const closeModal = ()=>{\n        setIsModalOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border border-[#ADB7BE] rounded-xl overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-52 md:h-72 rounded-t-xl relative group\",\n                style: {\n                    background: \"url(\".concat(imgUrl, \")\"),\n                    backgroundSize: \"contain\",\n                    backgroundRepeat: \"no-repeat\",\n                    backgroundPosition: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openModal,\n                            className: \"h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: gitUrl,\n                            className: \"h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl font-semibold mb-2\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#ADB7BE] mb-2\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: [\n                            \"#\",\n                            hashtag\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-8 rounded-xl\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"This is a modal. You can put your content here.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: closeModal,\n                            children: \"Close Modal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/app/components/ProjectCard.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectCard, \"mLsII5HRP5G63IA/8vjZ5YHXWr8=\");\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDK0I7QUFDMUM7QUFFN0IsTUFBTUssY0FBYztRQUFDLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFOztJQUNsRSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVksWUFBWTtRQUNoQkQsZUFBZTtJQUNqQjtJQUVBLE1BQU1FLGFBQWE7UUFDakJGLGVBQWU7SUFDakI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUNDQyxXQUFVO2dCQUNWQyxPQUFPO29CQUFFQyxZQUFZLE9BQWMsT0FBUFosUUFBTztvQkFBSWEsZ0JBQWdCO29CQUFXQyxrQkFBa0I7b0JBQWFDLG9CQUFvQjtnQkFBUzswQkFFOUgsNEVBQUNOO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ007NEJBQU9DLFNBQVNWOzRCQUFXRyxXQUFVO3NDQUNwQyw0RUFBQ2QsaUhBQWVBO2dDQUFDYyxXQUFVOzs7Ozs7Ozs7OztzQ0FFN0IsOERBQUNaLGlEQUFJQTs0QkFDSG9CLE1BQU1mOzRCQUNOTyxXQUFVO3NDQUVWLDRFQUFDYixpSEFBT0E7Z0NBQUNhLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXpCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNTO3dCQUFHVCxXQUFVO2tDQUE4QlQ7Ozs7OztrQ0FDNUMsOERBQUNtQjt3QkFBRVYsV0FBVTtrQ0FBdUJSOzs7Ozs7a0NBQ3BDLDhEQUFDa0I7d0JBQUVWLFdBQVU7OzRCQUFHOzRCQUFFTjs7Ozs7Ozs7Ozs7OztZQUduQkMsNkJBQ0MsOERBQUNJO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNVO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNKOzRCQUFPQyxTQUFTVDtzQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekM7R0E5Q01UO0tBQUFBO0FBZ0ROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzeD83YjFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29kZUJyYWNrZXRJY29uLCBFeWVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7IGltZ1VybCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBnaXRVcmwsIGhhc2h0YWcgfSkgPT4ge1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItWyNBREI3QkVdIHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImgtNTIgbWQ6aC03MiByb3VuZGVkLXQteGwgcmVsYXRpdmUgZ3JvdXBcIlxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgdXJsKCR7aW1nVXJsfSlgLCBiYWNrZ3JvdW5kU2l6ZTogXCJjb250YWluXCIsIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIiB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGJnLVsjMTgxODE4XSBiZy1vcGFjaXR5LTAgaGlkZGVuIGdyb3VwLWhvdmVyOmZsZXggZ3JvdXAtaG92ZXI6Ymctb3BhY2l0eS04MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9IGNsYXNzTmFtZT1cImgtMTQgdy0xNCBtci0yIGJvcmRlci0yIHJlbGF0aXZlIHJvdW5kZWQtZnVsbCBib3JkZXItWyNBREI3QkVdIGhvdmVyOmJvcmRlci13aGl0ZSBncm91cC9saW5rXCI+XG4gICAgICAgICAgICA8Q29kZUJyYWNrZXRJY29uIGNsYXNzTmFtZT1cImgtMTAgdy0xMCB0ZXh0LVsjQURCN0JFXSBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgIGN1cnNvci1wb2ludGVyIGdyb3VwLWhvdmVyL2xpbms6dGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e2dpdFVybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTQgdy0xNCBib3JkZXItMiByZWxhdGl2ZSByb3VuZGVkLWZ1bGwgYm9yZGVyLVsjQURCN0JFXSBob3Zlcjpib3JkZXItd2hpdGUgZ3JvdXAvbGlua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEV5ZUljb24gY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHRleHQtWyNBREI3QkVdIGFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiAgY3Vyc29yLXBvaW50ZXIgZ3JvdXAtaG92ZXIvbGluazp0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcm91bmRlZC1iLXhsIG10LTMgYmctWyMxODE4MThdIHB5LTYgcHgtNFwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTJcIj57dGl0bGV9PC9oNT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0FEQjdCRV0gbWItMlwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPiN7aGFzaHRhZ308L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2lzTW9kYWxPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTcwIHotNTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgICB7LyogWW91ciBtb2RhbCBjb250ZW50IGhlcmUgKi99XG4gICAgICAgICAgICA8cD5UaGlzIGlzIGEgbW9kYWwuIFlvdSBjYW4gcHV0IHlvdXIgY29udGVudCBoZXJlLjwvcD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VNb2RhbH0+Q2xvc2UgTW9kYWw8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvZGVCcmFja2V0SWNvbiIsIkV5ZUljb24iLCJMaW5rIiwiUHJvamVjdENhcmQiLCJpbWdVcmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2l0VXJsIiwiaGFzaHRhZyIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiLCJoNSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ProjectCard.jsx\n"));

/***/ })

});