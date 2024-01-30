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

/***/ "(app-pages-browser)/./src/app/components/ProjectsSection.jsx":
/*!************************************************!*\
  !*** ./src/app/components/ProjectsSection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"PortFolio\",\n        description: \"포트폴리오\",\n        image: \"/images/projects/portfolio.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        hashtag: \"Web\",\n        gitUrl: \"https://github.com/seungho3623/NodeProject/tree/main/PortFolio\"\n    },\n    {\n        id: 2,\n        title: \"OOTD\",\n        description: \"지역 날씨. 스타일별 오늘의 옷차림 추천\",\n        image: \"/images/projects/ootd.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        hashtag: \"Web\",\n        gitUrl: \"https://github.com/seungho3623/OOTD\"\n    },\n    {\n        id: 3,\n        title: \"인하마블\",\n        description: \"PyGame을 사용한 인하대학교 부르마블\",\n        image: \"/images/projects/inhamarble.png\",\n        tag: [\n            \"All\",\n            \"Mobile\"\n        ],\n        hashtag: \"Moblie\",\n        gitUrl: \"https://github.com/seungho3623/InhaMarble\"\n    },\n    {\n        id: 4,\n        title: \"게시판\",\n        description: \"Spring Boot를 사용한 게시판 프로젝트\",\n        image: \"/images/projects/board.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        hashtag: \"Web\",\n        gitUrl: \"https://github.com/seungho3623/BoardProject/tree/main\"\n    },\n    {\n        id: 4,\n        title: \"게시판\",\n        description: \"Spring Boot를 사용한 게시판 프로젝트\",\n        image: \"/images/projects/board.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        hashtag: \"Web\",\n        gitUrl: \"https://github.com/seungho3623/BoardProject/tree/main\"\n    },\n    {\n        id: 4,\n        title: \"게시판\",\n        description: \"Spring Boot를 사용한 게시판 프로젝트\",\n        image: \"/images/projects/board.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        hashtag: \"Web\",\n        gitUrl: \"https://github.com/seungho3623/BoardProject/tree/main\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center text-4xl font-bold px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-500 to-white hover:bg-slate-800 text-white mt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Embedded\",\n                        isSelected: tag === \"Embedded\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            hashtag: project.hashtag\n                        }, project.id, false, {\n                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFNBQVM7UUFDVEMsUUFBUTtJQUNWO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxTQUFTO1FBQ1RDLFFBQVE7SUFDVjtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBUztRQUN0QkMsU0FBUztRQUNUQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFNBQVM7UUFDVEMsUUFBUTtJQUNWO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxTQUFTO1FBQ1RDLFFBQVE7SUFDVjtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsU0FBUztRQUNUQyxRQUFRO0lBQ1Y7Q0FDRDtBQUVELE1BQU1DLGtCQUFrQjs7SUFDdEIsTUFBTSxDQUFDSCxLQUFLSSxPQUFPLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1nQixNQUFNZiw2Q0FBTUEsQ0FBQztJQUNuQixNQUFNZ0IsV0FBV1osd0RBQVNBLENBQUNXLEtBQUs7UUFBRUUsTUFBTTtJQUFLO0lBRTdDLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkwsT0FBT0s7SUFDVDtJQUVBLE1BQU1DLG1CQUFtQmYsYUFBYWdCLE1BQU0sQ0FBQyxDQUFDQyxVQUM1Q0EsUUFBUVosR0FBRyxDQUFDYSxRQUFRLENBQUNiO0lBR3ZCLE1BQU1jLGVBQWU7UUFDbkJDLFNBQVM7WUFBRUMsR0FBRztZQUFJQyxTQUFTO1FBQUU7UUFDN0JDLFNBQVM7WUFBRUYsR0FBRztZQUFHQyxTQUFTO1FBQUU7SUFDOUI7SUFFQSxxQkFDRSw4REFBQ0U7UUFBUXZCLElBQUc7OzBCQUNWLDhEQUFDd0I7Ozs7OzBCQUNELDhEQUFDQTs7Ozs7MEJBQ0QsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFDWiw0RUFBQ0U7d0JBQUtGLFdBQVU7a0NBQStEOzs7Ozs7Ozs7Ozs7Ozs7OzBCQU1uRiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDOUIsbURBQVVBO3dCQUNUaUMsU0FBU2pCO3dCQUNUa0IsTUFBSzt3QkFDTEMsWUFBWTNCLFFBQVE7Ozs7OztrQ0FFdEIsOERBQUNSLG1EQUFVQTt3QkFDVGlDLFNBQVNqQjt3QkFDVGtCLE1BQUs7d0JBQ0xDLFlBQVkzQixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1RpQyxTQUFTakI7d0JBQ1RrQixNQUFLO3dCQUNMQyxZQUFZM0IsUUFBUTs7Ozs7O2tDQUV0Qiw4REFBQ1IsbURBQVVBO3dCQUNUaUMsU0FBU2pCO3dCQUNUa0IsTUFBSzt3QkFDTEMsWUFBWTNCLFFBQVE7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUM0QjtnQkFBR3ZCLEtBQUtBO2dCQUFLaUIsV0FBVTswQkFDckJaLGlCQUFpQm1CLEdBQUcsQ0FBQyxDQUFDakIsU0FBU2tCLHNCQUM5Qiw4REFBQ3JDLGlEQUFNQSxDQUFDc0MsRUFBRTt3QkFFUkMsVUFBVWxCO3dCQUNWQyxTQUFRO3dCQUNSRyxTQUFTWixXQUFXLFlBQVk7d0JBQ2hDMkIsWUFBWTs0QkFBRUMsVUFBVTs0QkFBS0MsT0FBT0wsUUFBUTt3QkFBSTtrQ0FFbEQsNEVBQUN2QyxvREFBV0E7NEJBRVJNLE9BQU9lLFFBQVFmLEtBQUs7NEJBQ3BCQyxhQUFhYyxRQUFRZCxXQUFXOzRCQUNoQ3NDLFFBQVF4QixRQUFRYixLQUFLOzRCQUNyQkcsUUFBUVUsUUFBUVYsTUFBTTs0QkFDdEJELFNBQVNXLFFBQVFYLE9BQU87MkJBTG5CVyxRQUFRaEIsRUFBRTs7Ozs7dUJBUFprQzs7Ozs7Ozs7Ozs7Ozs7OztBQW1CakI7R0ExRU0zQjs7UUFHYVQsb0RBQVNBOzs7S0FIdEJTO0FBNEVOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4PzM3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgUHJvamVjdFRhZyBmcm9tIFwiLi9Qcm9qZWN0VGFnXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUluVmlldyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIlBvcnRGb2xpb1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIu2PrO2KuO2PtOumrOyYpFwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvcG9ydGZvbGlvLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGhhc2h0YWc6IFwiV2ViXCIsXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZXVuZ2hvMzYyMy9Ob2RlUHJvamVjdC90cmVlL21haW4vUG9ydEZvbGlvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJPT1REXCIsXG4gICAgZGVzY3JpcHRpb246IFwi7KeA7JetIOuCoOyUqC4g7Iqk7YOA7J2867OEIOyYpOuKmOydmCDsmLfssKjrprwg7LaU7LKcXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9vb3RkLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGhhc2h0YWc6IFwiV2ViXCIsXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZXVuZ2hvMzYyMy9PT1REXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCLsnbjtlZjrp4jruJRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQeUdhbWXsnYQg7IKs7Jqp7ZWcIOyduO2VmOuMgO2Vmeq1kCDrtoDrpbTrp4jruJRcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzL2luaGFtYXJibGUucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJNb2JpbGVcIl0sXG4gICAgaGFzaHRhZzogXCJNb2JsaWVcIixcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NldW5naG8zNjIzL0luaGFNYXJibGVcIixcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiBcIuqyjOyLnO2MkFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNwcmluZyBCb29066W8IOyCrOyaqe2VnCDqsozsi5ztjJAg7ZSE66Gc7KCd7Yq4XCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9ib2FyZC5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBoYXNodGFnOiBcIldlYlwiLFxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20vc2V1bmdobzM2MjMvQm9hcmRQcm9qZWN0L3RyZWUvbWFpblwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6IFwi6rKM7Iuc7YyQXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3ByaW5nIEJvb3Trpbwg7IKs7Jqp7ZWcIOqyjOyLnO2MkCDtlITroZzsoJ3tirhcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzL2JvYXJkLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGhhc2h0YWc6IFwiV2ViXCIsXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZXVuZ2hvMzYyMy9Cb2FyZFByb2plY3QvdHJlZS9tYWluXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCLqsozsi5ztjJBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTcHJpbmcgQm9vdOulvCDsgqzsmqntlZwg6rKM7Iuc7YyQIO2UhOuhnOygne2KuFwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvYm9hcmQucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgaGFzaHRhZzogXCJXZWJcIixcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NldW5naG8zNjIzL0JvYXJkUHJvamVjdC90cmVlL21haW5cIixcbiAgfSxcbl07XG5cbmNvbnN0IFByb2plY3RzU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZiwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVRhZ0NoYW5nZSA9IChuZXdUYWcpID0+IHtcbiAgICBzZXRUYWcobmV3VGFnKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHNEYXRhLmZpbHRlcigocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LnRhZy5pbmNsdWRlcyh0YWcpXG4gICk7XG5cbiAgY29uc3QgY2FyZFZhcmlhbnRzID0ge1xuICAgIGluaXRpYWw6IHsgeTogNTAsIG9wYWNpdHk6IDAgfSxcbiAgICBhbmltYXRlOiB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCBweC0xIHB5LTEgdy1mdWxsIHNtOnctZml0IHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudC10by1iciBmcm9tLXNsYXRlLTUwMCB0by13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDAgdGV4dC13aGl0ZSBtdC0zXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgYmctWyMxMjEyMTJdIGhvdmVyOmJnLXNsYXRlLTgwMCByb3VuZGVkLWZ1bGwgcHgtNSBweS0yXCI+XG4gICAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgcHktNlwiPlxuICAgICAgICA8UHJvamVjdFRhZ1xuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiQWxsXCJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiQWxsXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJFbWJlZGRlZFwiXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIkVtYmVkZGVkXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJXZWJcIlxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJXZWJcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2plY3RUYWdcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XG4gICAgICAgICAgbmFtZT1cIk1vYmlsZVwiXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIk1vYmlsZVwifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTggbWQ6Z2FwLTEyXCI+XG4gICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bW90aW9uLmxpXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgdmFyaWFudHM9e2NhcmRWYXJpYW50c31cbiAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICAgIGFuaW1hdGU9e2lzSW5WaWV3ID8gXCJhbmltYXRlXCIgOiBcImluaXRpYWxcIn1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgZGVsYXk6IGluZGV4ICogMC40IH19XG4gICAgICAgICAgPlxuICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgaW1nVXJsPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICBnaXRVcmw9e3Byb2plY3QuZ2l0VXJsfVxuICAgICAgICAgICAgICBoYXNodGFnPXtwcm9qZWN0Lmhhc2h0YWd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiUHJvamVjdENhcmQiLCJQcm9qZWN0VGFnIiwibW90aW9uIiwidXNlSW5WaWV3IiwicHJvamVjdHNEYXRhIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWciLCJoYXNodGFnIiwiZ2l0VXJsIiwiUHJvamVjdHNTZWN0aW9uIiwic2V0VGFnIiwicmVmIiwiaXNJblZpZXciLCJvbmNlIiwiaGFuZGxlVGFnQ2hhbmdlIiwibmV3VGFnIiwiZmlsdGVyZWRQcm9qZWN0cyIsImZpbHRlciIsInByb2plY3QiLCJpbmNsdWRlcyIsImNhcmRWYXJpYW50cyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJzZWN0aW9uIiwiYnIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInNwYW4iLCJvbkNsaWNrIiwibmFtZSIsImlzU2VsZWN0ZWQiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiaW1nVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});