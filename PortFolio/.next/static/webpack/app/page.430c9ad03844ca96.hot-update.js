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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"PortFolio\",\n        description: \"포트폴리오\",\n        image: \"/images/projects/portfolio.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        hashtag: \"Web\",\n        gitUrl: \"https://github.com/seungho3623/NodeProject/tree/main/PortFolio\"\n    },\n    {\n        id: 2,\n        title: \"OOTD\",\n        description: \"지역 날씨. 스타일별 오늘의 옷차림 추천\",\n        image: \"/images/projects/ootd.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        hashtag: \"Web\",\n        gitUrl: \"https://github.com/seungho3623/OOTD\"\n    },\n    {\n        id: 3,\n        title: \"인하마블\",\n        description: \"PyGame을 사용한 인하대학교 부르마블\",\n        image: \"/images/projects/inhamarble.png\",\n        tag: [\n            \"All\",\n            \"Mobile\"\n        ],\n        hashtag: \"Moblie\",\n        gitUrl: \"https://github.com/seungho3623/InhaMarble\"\n    },\n    {\n        id: 4,\n        title: \"Node.js 게시판\",\n        description: \"지역 날씨. 스타일별 오늘의 옷차림 추천\",\n        image: \"/images/projects/inhaboard.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        hashtag: \"Web\",\n        gitUrl: \"https://github.com/seungho3623/OOTD\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center text-4xl font-bold px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-500 to-white hover:bg-slate-800 text-white mt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Embedded\",\n                        isSelected: tag === \"Embedded\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            hashtag: project.hashtag\n                        }, project.id, false, {\n                            fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songseungho/Desktop/NodeProject/PortFolio/src/app/components/ProjectsSection.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFNBQVM7UUFDVEMsUUFBUTtJQUNWO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxTQUFTO1FBQ1RDLFFBQVE7SUFDVjtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBUztRQUN0QkMsU0FBUztRQUNUQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFNBQVM7UUFDVEMsUUFBUTtJQUNWO0NBQ0Q7QUFFRCxNQUFNQyxrQkFBa0I7O0lBQ3RCLE1BQU0sQ0FBQ0gsS0FBS0ksT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNZ0IsTUFBTWYsNkNBQU1BLENBQUM7SUFDbkIsTUFBTWdCLFdBQVdaLHdEQUFTQSxDQUFDVyxLQUFLO1FBQUVFLE1BQU07SUFBSztJQUU3QyxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkJMLE9BQU9LO0lBQ1Q7SUFFQSxNQUFNQyxtQkFBbUJmLGFBQWFnQixNQUFNLENBQUMsQ0FBQ0MsVUFDNUNBLFFBQVFaLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDYjtJQUd2QixNQUFNYyxlQUFlO1FBQ25CQyxTQUFTO1lBQUVDLEdBQUc7WUFBSUMsU0FBUztRQUFFO1FBQzdCQyxTQUFTO1lBQUVGLEdBQUc7WUFBR0MsU0FBUztRQUFFO0lBQzlCO0lBRUEscUJBQ0UsOERBQUNFO1FBQVF2QixJQUFHOzswQkFDViw4REFBQ3dCOzs7OzswQkFDRCw4REFBQ0E7Ozs7OzBCQUNELDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQ1osNEVBQUNFO3dCQUFLRixXQUFVO2tDQUErRDs7Ozs7Ozs7Ozs7Ozs7OzswQkFNbkYsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQzlCLG1EQUFVQTt3QkFDVGlDLFNBQVNqQjt3QkFDVGtCLE1BQUs7d0JBQ0xDLFlBQVkzQixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1RpQyxTQUFTakI7d0JBQ1RrQixNQUFLO3dCQUNMQyxZQUFZM0IsUUFBUTs7Ozs7O2tDQUV0Qiw4REFBQ1IsbURBQVVBO3dCQUNUaUMsU0FBU2pCO3dCQUNUa0IsTUFBSzt3QkFDTEMsWUFBWTNCLFFBQVE7Ozs7OztrQ0FFdEIsOERBQUNSLG1EQUFVQTt3QkFDVGlDLFNBQVNqQjt3QkFDVGtCLE1BQUs7d0JBQ0xDLFlBQVkzQixRQUFROzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDNEI7Z0JBQUd2QixLQUFLQTtnQkFBS2lCLFdBQVU7MEJBQ3JCWixpQkFBaUJtQixHQUFHLENBQUMsQ0FBQ2pCLFNBQVNrQixzQkFDOUIsOERBQUNyQyxpREFBTUEsQ0FBQ3NDLEVBQUU7d0JBRVJDLFVBQVVsQjt3QkFDVkMsU0FBUTt3QkFDUkcsU0FBU1osV0FBVyxZQUFZO3dCQUNoQzJCLFlBQVk7NEJBQUVDLFVBQVU7NEJBQUtDLE9BQU9MLFFBQVE7d0JBQUk7a0NBRWxELDRFQUFDdkMsb0RBQVdBOzRCQUVSTSxPQUFPZSxRQUFRZixLQUFLOzRCQUNwQkMsYUFBYWMsUUFBUWQsV0FBVzs0QkFDaENzQyxRQUFReEIsUUFBUWIsS0FBSzs0QkFDckJHLFFBQVFVLFFBQVFWLE1BQU07NEJBQ3RCRCxTQUFTVyxRQUFRWCxPQUFPOzJCQUxuQlcsUUFBUWhCLEVBQUU7Ozs7O3VCQVBaa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQmpCO0dBMUVNM0I7O1FBR2FULG9EQUFTQTs7O0tBSHRCUztBQTRFTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeD8zNzBlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi9Qcm9qZWN0Q2FyZFwiO1xuaW1wb3J0IFByb2plY3RUYWcgZnJvbSBcIi4vUHJvamVjdFRhZ1wiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VJblZpZXcgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBwcm9qZWN0c0RhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogXCJQb3J0Rm9saW9cIixcbiAgICBkZXNjcmlwdGlvbjogXCLtj6ztirjtj7TrpqzsmKRcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzL3BvcnRmb2xpby5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBoYXNodGFnOiBcIldlYlwiLFxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20vc2V1bmdobzM2MjMvTm9kZVByb2plY3QvdHJlZS9tYWluL1BvcnRGb2xpb1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiT09URFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIuyngOyXrSDrgqDslKguIOyKpO2DgOydvOuzhCDsmKTripjsnZgg7Ji37LCo66a8IOy2lOyynFwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvb290ZC5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBoYXNodGFnOiBcIldlYlwiLFxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20vc2V1bmdobzM2MjMvT09URFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwi7J247ZWY66eI67iUXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHlHYW1l7J2EIOyCrOyaqe2VnCDsnbjtlZjrjIDtlZnqtZAg67aA66W066eI67iUXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9pbmhhbWFyYmxlLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiTW9iaWxlXCJdLFxuICAgIGhhc2h0YWc6IFwiTW9ibGllXCIsXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZXVuZ2hvMzYyMy9JbmhhTWFyYmxlXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCJOb2RlLmpzIOqyjOyLnO2MkFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIuyngOyXrSDrgqDslKguIOyKpO2DgOydvOuzhCDsmKTripjsnZgg7Ji37LCo66a8IOy2lOyynFwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvaW5oYWJvYXJkLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGhhc2h0YWc6IFwiV2ViXCIsXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZXVuZ2hvMzYyMy9PT1REXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBQcm9qZWN0c1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIkFsbFwiKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYsIHsgb25jZTogdHJ1ZSB9KTtcblxuICBjb25zdCBoYW5kbGVUYWdDaGFuZ2UgPSAobmV3VGFnKSA9PiB7XG4gICAgc2V0VGFnKG5ld1RhZyk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzRGF0YS5maWx0ZXIoKHByb2plY3QpID0+XG4gICAgcHJvamVjdC50YWcuaW5jbHVkZXModGFnKVxuICApO1xuXG4gIGNvbnN0IGNhcmRWYXJpYW50cyA9IHtcbiAgICBpbml0aWFsOiB7IHk6IDUwLCBvcGFjaXR5OiAwIH0sXG4gICAgYW5pbWF0ZTogeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzXCI+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgcHgtMSBweS0xIHctZnVsbCBzbTp3LWZpdCByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1zbGF0ZS01MDAgdG8td2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwIHRleHQtd2hpdGUgbXQtM1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGJnLVsjMTIxMjEyXSBob3ZlcjpiZy1zbGF0ZS04MDAgcm91bmRlZC1mdWxsIHB4LTUgcHktMlwiPlxuICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHB5LTZcIj5cbiAgICAgICAgPFByb2plY3RUYWdcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XG4gICAgICAgICAgbmFtZT1cIkFsbFwiXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIkFsbFwifVxuICAgICAgICAvPlxuICAgICAgICA8UHJvamVjdFRhZ1xuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiRW1iZWRkZWRcIlxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJFbWJlZGRlZFwifVxuICAgICAgICAvPlxuICAgICAgICA8UHJvamVjdFRhZ1xuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiV2ViXCJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiV2ViXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJNb2JpbGVcIlxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJNb2JpbGVcIn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIHJlZj17cmVmfSBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04IG1kOmdhcC0xMlwiPlxuICAgICAgICB7ZmlsdGVyZWRQcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHZhcmlhbnRzPXtjYXJkVmFyaWFudHN9XG4gICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgICBhbmltYXRlPXtpc0luVmlldyA/IFwiYW5pbWF0ZVwiIDogXCJpbml0aWFsXCJ9XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMsIGRlbGF5OiBpbmRleCAqIDAuNCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGltZ1VybD17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgZ2l0VXJsPXtwcm9qZWN0LmdpdFVybH1cbiAgICAgICAgICAgICAgaGFzaHRhZz17cHJvamVjdC5oYXNodGFnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlByb2plY3RDYXJkIiwiUHJvamVjdFRhZyIsIm1vdGlvbiIsInVzZUluVmlldyIsInByb2plY3RzRGF0YSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGFnIiwiaGFzaHRhZyIsImdpdFVybCIsIlByb2plY3RzU2VjdGlvbiIsInNldFRhZyIsInJlZiIsImlzSW5WaWV3Iiwib25jZSIsImhhbmRsZVRhZ0NoYW5nZSIsIm5ld1RhZyIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiaW5jbHVkZXMiLCJjYXJkVmFyaWFudHMiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwic2VjdGlvbiIsImJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzcGFuIiwib25DbGljayIsIm5hbWUiLCJpc1NlbGVjdGVkIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImltZ1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});