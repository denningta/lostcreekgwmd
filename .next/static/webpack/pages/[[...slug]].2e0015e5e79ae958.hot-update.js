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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavItem(param) {\n    var navItem = param.navItem, _className = param.className, className = _className === void 0 ? '' : _className;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), navItemHover = ref[0], setNavItemHover = ref[1];\n    var onMouseEnter = function() {\n        setNavItemHover(true);\n    };\n    var onMouseLeave = function() {\n        setNavItemHover(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: navItem.route === 'root' ? '/' : \"/\".concat(navItem.route),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center cursor-pointer py-4 px-6 transition ease-in-out \".concat(navItemHover ? 'bg-black bg-opacity-20 text-white' : 'text-gray-300'),\n                    onMouseEnter: onMouseEnter,\n                    onMouseLeave: onMouseLeave,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-4 w-[35px] transition ease-in-out \".concat(navItemHover ? 'text-primary-500' : 'text-sidenav-300'),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center items-center w-full h-full text-xl\",\n                                children: [\n                                    navItem.title === 'Home' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdHome, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 45\n                                    }, this),\n                                    navItem.title === 'Groundwater 101' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdSchool, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 56\n                                    }, this),\n                                    navItem.title === 'Legal and Administrative' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiScales3Fill, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 65\n                                    }, this),\n                                    navItem.title === 'Water Testing' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiTestTube, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 54\n                                    }, this),\n                                    navItem.title === 'External Resources' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaExternalLinkSquareAlt, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 59\n                                    }, this),\n                                    navItem.title === 'Submit a Request' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsChatSquareQuoteFill, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 57\n                                    }, this),\n                                    navItem.title === 'Contact Us' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsQuestionCircleFill, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 51\n                                    }, this),\n                                    navItem.title === 'Report Violation' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdReportProblem, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 57\n                                    }, this),\n                                    navItem.title === 'Well Reporting' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChartBar, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 55\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grow\",\n                            children: navItem.title\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        navItem.subNavItems && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"transition ease-in-out \".concat(navItemHover ? 'text-white' : 'text-sidenav-300'),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChevronRight, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                navItem.subNavItems && navItemHover && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"items-center cursor-pointer py-4 pl-10 pr-6 transition ease-in-out \".concat(navItemHover ? 'bg-black bg-opacity-20 text-white' : 'text-gray-300'),\n                    onMouseEnter: onMouseEnter,\n                    onMouseLeave: onMouseLeave,\n                    children: navItem.subNavItems.map(function(subNavItem) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: subNavItem.title\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, navItem.title, false, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n}\n_s(NavItem, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NavItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavItem);\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7O09BcEN6QlQsT0FBTyxDQUFDUyxLQUFLOzs7OztBQTJDeEIsQ0FBQztHQXREUVYsT0FBTztLQUFQQSxPQUFPO0FBd0RoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2SXRlbS50c3g/ZWY5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZJdGVtR3JvcSB9IGZyb20gJy4uL2xpYi9zYW5pdHktcXVlcmllcyc7XG5pbXBvcnQgeyBNZEhvbWUsIE1kUmVwb3J0UHJvYmxlbSwgTWRTY2hvb2wgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgeyBSaVNjYWxlczNGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xuaW1wb3J0IHsgQmlUZXN0VHViZSB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcbmltcG9ydCB7IEZhQ2hhcnRCYXIsIEZhRXh0ZXJuYWxMaW5rU3F1YXJlQWx0LCBGYUNoZXZyb25SaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IEJzQ2hhdFNxdWFyZVF1b3RlRmlsbCwgQnNRdWVzdGlvbkNpcmNsZUZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hdkl0ZW06IE5hdkl0ZW1Hcm9xO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIE5hdkl0ZW0oeyBuYXZJdGVtLCBjbGFzc05hbWUgPSAnJyB9OiBQcm9wcykge1xuICBjb25zdCBbbmF2SXRlbUhvdmVyLCBzZXROYXZJdGVtSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgc2V0TmF2SXRlbUhvdmVyKHRydWUpO1xuICB9XG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXROYXZJdGVtSG92ZXIoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAga2V5PXtuYXZJdGVtLnRpdGxlfVxuICAgICAgaHJlZj17bmF2SXRlbS5yb3V0ZSA9PT0gJ3Jvb3QnID8gJy8nIDogYC8ke25hdkl0ZW0ucm91dGV9YH1cbiAgICA+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgcHktNCBweC02IHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgJHtuYXZJdGVtSG92ZXIgPyAnYmctYmxhY2sgYmctb3BhY2l0eS0yMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LWdyYXktMzAwJ31gfVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btci00IHctWzM1cHhdIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgJHtuYXZJdGVtSG92ZXIgPyAndGV4dC1wcmltYXJ5LTUwMCcgOiAndGV4dC1zaWRlbmF2LTMwMCd9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtZnVsbCB0ZXh0LXhsJz5cbiAgICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdIb21lJyAmJiAoPE1kSG9tZSAvPil9XG4gICAgICAgICAgICAgIHtuYXZJdGVtLnRpdGxlID09PSAnR3JvdW5kd2F0ZXIgMTAxJyAmJiAoPE1kU2Nob29sIC8+KX1cbiAgICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdMZWdhbCBhbmQgQWRtaW5pc3RyYXRpdmUnICYmICg8UmlTY2FsZXMzRmlsbCAvPil9XG4gICAgICAgICAgICAgIHtuYXZJdGVtLnRpdGxlID09PSAnV2F0ZXIgVGVzdGluZycgJiYgKDxCaVRlc3RUdWJlIC8+KX1cbiAgICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdFeHRlcm5hbCBSZXNvdXJjZXMnICYmICg8RmFFeHRlcm5hbExpbmtTcXVhcmVBbHQgLz4pfVxuICAgICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ1N1Ym1pdCBhIFJlcXVlc3QnICYmICg8QnNDaGF0U3F1YXJlUXVvdGVGaWxsIC8+KX1cbiAgICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdDb250YWN0IFVzJyAmJiAoPEJzUXVlc3Rpb25DaXJjbGVGaWxsIC8+KX1cbiAgICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdSZXBvcnQgVmlvbGF0aW9uJyAmJiAoPE1kUmVwb3J0UHJvYmxlbSAvPil9XG4gICAgICAgICAgICAgIHtuYXZJdGVtLnRpdGxlID09PSAnV2VsbCBSZXBvcnRpbmcnICYmICg8RmFDaGFydEJhciAvPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dcIj57bmF2SXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICB7bmF2SXRlbS5zdWJOYXZJdGVtcyAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0cmFuc2l0aW9uIGVhc2UtaW4tb3V0ICR7bmF2SXRlbUhvdmVyID8gJ3RleHQtd2hpdGUnIDogJ3RleHQtc2lkZW5hdi0zMDAnfWB9PlxuICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtuYXZJdGVtLnN1Yk5hdkl0ZW1zICYmIG5hdkl0ZW1Ib3ZlciAmJiBcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHB5LTQgcGwtMTAgcHItNiB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0ICR7bmF2SXRlbUhvdmVyID8gJ2JnLWJsYWNrIGJnLW9wYWNpdHktMjAgdGV4dC13aGl0ZScgOiAndGV4dC1ncmF5LTMwMCd9YH1cbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlcn1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmF2SXRlbS5zdWJOYXZJdGVtcy5tYXAoc3ViTmF2SXRlbSA9PiBcbiAgICAgICAgICAgICAgPGRpdj57c3ViTmF2SXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJNZEhvbWUiLCJNZFJlcG9ydFByb2JsZW0iLCJNZFNjaG9vbCIsIlJpU2NhbGVzM0ZpbGwiLCJCaVRlc3RUdWJlIiwiRmFDaGFydEJhciIsIkZhRXh0ZXJuYWxMaW5rU3F1YXJlQWx0IiwiRmFDaGV2cm9uUmlnaHQiLCJCc0NoYXRTcXVhcmVRdW90ZUZpbGwiLCJCc1F1ZXN0aW9uQ2lyY2xlRmlsbCIsIk5hdkl0ZW0iLCJuYXZJdGVtIiwiY2xhc3NOYW1lIiwibmF2SXRlbUhvdmVyIiwic2V0TmF2SXRlbUhvdmVyIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaHJlZiIsInJvdXRlIiwiZGl2IiwidGl0bGUiLCJzdWJOYXZJdGVtcyIsIm1hcCIsInN1Yk5hdkl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navItem.tsx\n");

/***/ })

});