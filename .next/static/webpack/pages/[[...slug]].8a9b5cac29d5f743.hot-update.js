"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/navItem.tsx":
/*!********************************!*\
  !*** ./components/navItem.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavItem(param) {\n    var navItem = param.navItem, _className = param.className, className = _className === void 0 ? '' : _className;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), navItemHover = ref[0], setNavItemHover = ref[1];\n    var onMouseEnter = function() {\n        setNavItemHover(true);\n    };\n    var onMouseLeave = function() {\n        setNavItemHover(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: navItem.route === 'root' ? '/' : \"/\".concat(navItem.route),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex cursor-pointer py-3 px-6 \".concat(navItemHover ? 'bg-black bg-opacity-20 text-white' : 'text-gray-300'),\n            onMouseEnter: onMouseEnter,\n            onMouseLeave: onMouseLeave,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mr-4 w-[35px] \".concat(navItemHover ? 'text-primary-500' : 'text-slate-600'),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center w-full h-full text-xl\",\n                        children: [\n                            navItem.title === 'Home' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdHome, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 43\n                            }, this),\n                            navItem.title === 'Groundwater 101' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdSchool, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 54\n                            }, this),\n                            navItem.title === 'Legal and Administrative' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiScales3Fill, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 63\n                            }, this),\n                            navItem.title === 'Water Testing' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiTestTube, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 52\n                            }, this),\n                            navItem.title === 'External Resources' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaExternalLinkSquareAlt, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 57\n                            }, this),\n                            navItem.title === 'Submit a Request' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsChatSquareQuoteFill, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 55\n                            }, this),\n                            navItem.title === 'Contact Us' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsQuestionCircleFill, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 49\n                            }, this),\n                            navItem.title === 'Report Violation' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdReportProblem, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 55\n                            }, this),\n                            navItem.title === 'Well Reporting' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChartBar, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 53\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: navItem.title\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        navItem.subNavItems && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChevronRight, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 18\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, navItem.title, false, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n}\n_s(NavItem, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NavItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavItem);\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdkl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSTtBQUVrQztBQUNwQjtBQUNIO0FBQ3lDO0FBQ1I7O1NBT25FWSxPQUFPLENBQUMsS0FBa0MsRUFBRSxDQUFDO1FBQW5DQyxPQUFPLEdBQVQsS0FBa0MsQ0FBaENBLE9BQU8sZUFBVCxLQUFrQyxDQUF2QkMsU0FBUyxFQUFUQSxTQUFTLDJCQUFHLENBQUU7O0lBQ3hDLEdBQUssQ0FBbUNiLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQS9DYyxZQUFZLEdBQXFCZCxHQUFlLEtBQWxDZSxlQUFlLEdBQUlmLEdBQWU7SUFDdkQsR0FBSyxDQUFDZ0IsWUFBWSxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7UUFDMUJELGVBQWUsQ0FBQyxJQUFJO0lBQ3RCLENBQUM7SUFDRCxHQUFLLENBQUNFLFlBQVksR0FBRyxRQUN2QixHQUQ2QixDQUFDO1FBQzFCRixlQUFlLENBQUMsS0FBSztJQUN2QixDQUFDO0lBRUQsTUFBTSw2RUFDSGhCLGtEQUFJO1FBRUhtQixJQUFJLEVBQUVOLE9BQU8sQ0FBQ08sS0FBSyxLQUFLLENBQU0sUUFBRyxDQUFHLEtBQUksQ0FBQyxHQUFnQixPQUFkUCxPQUFPLENBQUNPLEtBQUs7OEZBRXZEQyxDQUFHO1lBQ0ZQLFNBQVMsRUFBRyxDQUE4QixnQ0FBdUUsT0FBckVDLFlBQVksR0FBRyxDQUFtQyxxQ0FBRyxDQUFlO1lBQ2hIRSxZQUFZLEVBQUVBLFlBQVk7WUFDMUJDLFlBQVksRUFBRUEsWUFBWTs7NEZBRXpCRyxDQUFHO29CQUFDUCxTQUFTLEVBQUcsQ0FBYyxnQkFBdUQsT0FBckRDLFlBQVksR0FBRyxDQUFrQixvQkFBRyxDQUFnQjswR0FDbEZNLENBQUc7d0JBQUNQLFNBQVMsRUFBQyxDQUF3RDs7NEJBQ3BFRCxPQUFPLENBQUNTLEtBQUssS0FBSyxDQUFNLHFGQUFNcEIsa0RBQU07Ozs7OzRCQUNwQ1csT0FBTyxDQUFDUyxLQUFLLEtBQUssQ0FBaUIsZ0dBQU1sQixvREFBUTs7Ozs7NEJBQ2pEUyxPQUFPLENBQUNTLEtBQUssS0FBSyxDQUEwQix5R0FBTWpCLHlEQUFhOzs7Ozs0QkFDL0RRLE9BQU8sQ0FBQ1MsS0FBSyxLQUFLLENBQWUsOEZBQU1oQixzREFBVTs7Ozs7NEJBQ2pETyxPQUFPLENBQUNTLEtBQUssS0FBSyxDQUFvQixtR0FBTWQsbUVBQXVCOzs7Ozs0QkFDbkVLLE9BQU8sQ0FBQ1MsS0FBSyxLQUFLLENBQWtCLGlHQUFNWixpRUFBcUI7Ozs7OzRCQUMvREcsT0FBTyxDQUFDUyxLQUFLLEtBQUssQ0FBWSwyRkFBTVgsZ0VBQW9COzs7Ozs0QkFDeERFLE9BQU8sQ0FBQ1MsS0FBSyxLQUFLLENBQWtCLGlHQUFNbkIsMkRBQWU7Ozs7OzRCQUN6RFUsT0FBTyxDQUFDUyxLQUFLLEtBQUssQ0FBZ0IsK0ZBQU1mLHNEQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzRGQUd0RGMsQ0FBRztvQkFBQ1AsU0FBUyxFQUFDLENBQU07O29HQUNsQk8sQ0FBRztzQ0FBRVIsT0FBTyxDQUFDUyxLQUFLOzs7Ozs7d0JBQ2xCVCxPQUFPLENBQUNVLFdBQVcsZ0ZBQ2pCRixDQUFHO2tIQUFFWiwwREFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXhCckJJLE9BQU8sQ0FBQ1MsS0FBSzs7Ozs7QUE4QnhCLENBQUM7R0F6Q1FWLE9BQU87S0FBUEEsT0FBTztBQTJDaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdkl0ZW0udHN4P2VmOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2SXRlbUdyb3EgfSBmcm9tICcuLi9saWIvc2FuaXR5LXF1ZXJpZXMnO1xuaW1wb3J0IHsgTWRIb21lLCBNZFJlcG9ydFByb2JsZW0sIE1kU2Nob29sIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHsgUmlTY2FsZXMzRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcbmltcG9ydCB7IEJpVGVzdFR1YmUgfSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XG5pbXBvcnQgeyBGYUNoYXJ0QmFyLCBGYUV4dGVybmFsTGlua1NxdWFyZUFsdCwgRmFDaGV2cm9uUmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBCc0NoYXRTcXVhcmVRdW90ZUZpbGwsIEJzUXVlc3Rpb25DaXJjbGVGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYXZJdGVtOiBOYXZJdGVtR3JvcTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBOYXZJdGVtKHsgbmF2SXRlbSwgY2xhc3NOYW1lID0gJycgfTogUHJvcHMpIHtcbiAgY29uc3QgW25hdkl0ZW1Ib3Zlciwgc2V0TmF2SXRlbUhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb25Nb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHNldE5hdkl0ZW1Ib3Zlcih0cnVlKTtcbiAgfVxuICBjb25zdCBvbk1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0TmF2SXRlbUhvdmVyKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGtleT17bmF2SXRlbS50aXRsZX1cbiAgICAgIGhyZWY9e25hdkl0ZW0ucm91dGUgPT09ICdyb290JyA/ICcvJyA6IGAvJHtuYXZJdGVtLnJvdXRlfWB9XG4gICAgPlxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBjdXJzb3ItcG9pbnRlciBweS0zIHB4LTYgJHtuYXZJdGVtSG92ZXIgPyAnYmctYmxhY2sgYmctb3BhY2l0eS0yMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LWdyYXktMzAwJ31gfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbXItNCB3LVszNXB4XSAke25hdkl0ZW1Ib3ZlciA/ICd0ZXh0LXByaW1hcnktNTAwJyA6ICd0ZXh0LXNsYXRlLTYwMCd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLWZ1bGwgdGV4dC14bCc+XG4gICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ0hvbWUnICYmICg8TWRIb21lIC8+KX1cbiAgICAgICAgICAgIHtuYXZJdGVtLnRpdGxlID09PSAnR3JvdW5kd2F0ZXIgMTAxJyAmJiAoPE1kU2Nob29sIC8+KX1cbiAgICAgICAgICAgIHtuYXZJdGVtLnRpdGxlID09PSAnTGVnYWwgYW5kIEFkbWluaXN0cmF0aXZlJyAmJiAoPFJpU2NhbGVzM0ZpbGwgLz4pfVxuICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdXYXRlciBUZXN0aW5nJyAmJiAoPEJpVGVzdFR1YmUgLz4pfVxuICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdFeHRlcm5hbCBSZXNvdXJjZXMnICYmICg8RmFFeHRlcm5hbExpbmtTcXVhcmVBbHQgLz4pfVxuICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdTdWJtaXQgYSBSZXF1ZXN0JyAmJiAoPEJzQ2hhdFNxdWFyZVF1b3RlRmlsbCAvPil9XG4gICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ0NvbnRhY3QgVXMnICYmICg8QnNRdWVzdGlvbkNpcmNsZUZpbGwgLz4pfVxuICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdSZXBvcnQgVmlvbGF0aW9uJyAmJiAoPE1kUmVwb3J0UHJvYmxlbSAvPil9XG4gICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ1dlbGwgUmVwb3J0aW5nJyAmJiAoPEZhQ2hhcnRCYXIgLz4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgIDxkaXY+e25hdkl0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAge25hdkl0ZW0uc3ViTmF2SXRlbXMgJiYgXG4gICAgICAgICAgICA8ZGl2PjxGYUNoZXZyb25SaWdodCAvPjwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW07XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiTWRIb21lIiwiTWRSZXBvcnRQcm9ibGVtIiwiTWRTY2hvb2wiLCJSaVNjYWxlczNGaWxsIiwiQmlUZXN0VHViZSIsIkZhQ2hhcnRCYXIiLCJGYUV4dGVybmFsTGlua1NxdWFyZUFsdCIsIkZhQ2hldnJvblJpZ2h0IiwiQnNDaGF0U3F1YXJlUXVvdGVGaWxsIiwiQnNRdWVzdGlvbkNpcmNsZUZpbGwiLCJOYXZJdGVtIiwibmF2SXRlbSIsImNsYXNzTmFtZSIsIm5hdkl0ZW1Ib3ZlciIsInNldE5hdkl0ZW1Ib3ZlciIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImhyZWYiLCJyb3V0ZSIsImRpdiIsInRpdGxlIiwic3ViTmF2SXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navItem.tsx\n");

/***/ })

});