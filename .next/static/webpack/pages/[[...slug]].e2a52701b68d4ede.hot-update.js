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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavItem(param) {\n    var navItem = param.navItem, _className = param.className, className = _className === void 0 ? '' : _className;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), navItemHover = ref[0], setNavItemHover = ref[1];\n    var onMouseEnter = function() {\n        setNavItemHover(true);\n    };\n    var onMouseLeave = function() {\n        setNavItemHover(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: navItem.route === 'root' ? '/' : \"/\".concat(navItem.route),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center cursor-pointer py-4 px-6 transition ease-in-out \".concat(navItemHover ? 'bg-black bg-opacity-20 text-white' : 'text-gray-300'),\n                    onMouseEnter: onMouseEnter,\n                    onMouseLeave: onMouseLeave,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-4 w-[35px] transition ease-in-out \".concat(navItemHover ? 'text-primary-500' : 'text-sidenav-300'),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center items-center w-full h-full text-xl\",\n                                children: [\n                                    navItem.title === 'Home' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdHome, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 45\n                                    }, this),\n                                    navItem.title === 'Groundwater 101' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdSchool, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 56\n                                    }, this),\n                                    navItem.title === 'Legal and Administrative' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiScales3Fill, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 65\n                                    }, this),\n                                    navItem.title === 'Water Testing' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiTestTube, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 54\n                                    }, this),\n                                    navItem.title === 'External Resources' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaExternalLinkSquareAlt, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 59\n                                    }, this),\n                                    navItem.title === 'Submit a Request' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsChatSquareQuoteFill, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 57\n                                    }, this),\n                                    navItem.title === 'Contact Us' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsQuestionCircleFill, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 51\n                                    }, this),\n                                    navItem.title === 'Report Violation' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdReportProblem, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 57\n                                    }, this),\n                                    navItem.title === 'Well Reporting' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChartBar, {}, void 0, false, {\n                                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 55\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grow\",\n                            children: navItem.title\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        navItem.subNavItems && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"transition ease-in-out \".concat(navItemHover ? 'text-white' : 'text-sidenav-300'),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChevronRight, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                navItem.subNavItems && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onMouseEnter: onMouseEnter,\n                    onMouseLeave: onMouseLeave,\n                    children: navItem.subNavItems.map(function(subNavItem) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pl-12 pr-6 py-4\",\n                            children: subNavItem.title\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, navItem.title, false, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n}\n_s(NavItem, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NavItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavItem);\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0tBQVBBLE9BQU87QUFvRGhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZJdGVtLnRzeD9lZjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkl0ZW1Hcm9xIH0gZnJvbSAnLi4vbGliL3Nhbml0eS1xdWVyaWVzJztcbmltcG9ydCB7IE1kSG9tZSwgTWRSZXBvcnRQcm9ibGVtLCBNZFNjaG9vbCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7IFJpU2NhbGVzM0ZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XG5pbXBvcnQgeyBCaVRlc3RUdWJlIH0gZnJvbSAncmVhY3QtaWNvbnMvYmknO1xuaW1wb3J0IHsgRmFDaGFydEJhciwgRmFFeHRlcm5hbExpbmtTcXVhcmVBbHQsIEZhQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgQnNDaGF0U3F1YXJlUXVvdGVGaWxsLCBCc1F1ZXN0aW9uQ2lyY2xlRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmF2SXRlbTogTmF2SXRlbUdyb3E7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gTmF2SXRlbSh7IG5hdkl0ZW0sIGNsYXNzTmFtZSA9ICcnIH06IFByb3BzKSB7XG4gIGNvbnN0IFtuYXZJdGVtSG92ZXIsIHNldE5hdkl0ZW1Ib3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBzZXROYXZJdGVtSG92ZXIodHJ1ZSk7XG4gIH1cbiAgY29uc3Qgb25Nb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHNldE5hdkl0ZW1Ib3ZlcihmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBrZXk9e25hdkl0ZW0udGl0bGV9XG4gICAgICBocmVmPXtuYXZJdGVtLnJvdXRlID09PSAncm9vdCcgPyAnLycgOiBgLyR7bmF2SXRlbS5yb3V0ZX1gfVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBweS00IHB4LTYgdHJhbnNpdGlvbiBlYXNlLWluLW91dCAke25hdkl0ZW1Ib3ZlciA/ICdiZy1ibGFjayBiZy1vcGFjaXR5LTIwIHRleHQtd2hpdGUnIDogJ3RleHQtZ3JheS0zMDAnfWB9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1yLTQgdy1bMzVweF0gdHJhbnNpdGlvbiBlYXNlLWluLW91dCAke25hdkl0ZW1Ib3ZlciA/ICd0ZXh0LXByaW1hcnktNTAwJyA6ICd0ZXh0LXNpZGVuYXYtMzAwJ31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1mdWxsIHRleHQteGwnPlxuICAgICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ0hvbWUnICYmICg8TWRIb21lIC8+KX1cbiAgICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdHcm91bmR3YXRlciAxMDEnICYmICg8TWRTY2hvb2wgLz4pfVxuICAgICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ0xlZ2FsIGFuZCBBZG1pbmlzdHJhdGl2ZScgJiYgKDxSaVNjYWxlczNGaWxsIC8+KX1cbiAgICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdXYXRlciBUZXN0aW5nJyAmJiAoPEJpVGVzdFR1YmUgLz4pfVxuICAgICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ0V4dGVybmFsIFJlc291cmNlcycgJiYgKDxGYUV4dGVybmFsTGlua1NxdWFyZUFsdCAvPil9XG4gICAgICAgICAgICAgIHtuYXZJdGVtLnRpdGxlID09PSAnU3VibWl0IGEgUmVxdWVzdCcgJiYgKDxCc0NoYXRTcXVhcmVRdW90ZUZpbGwgLz4pfVxuICAgICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ0NvbnRhY3QgVXMnICYmICg8QnNRdWVzdGlvbkNpcmNsZUZpbGwgLz4pfVxuICAgICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ1JlcG9ydCBWaW9sYXRpb24nICYmICg8TWRSZXBvcnRQcm9ibGVtIC8+KX1cbiAgICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdXZWxsIFJlcG9ydGluZycgJiYgKDxGYUNoYXJ0QmFyIC8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3Jvd1wiPntuYXZJdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIHtuYXZJdGVtLnN1Yk5hdkl0ZW1zICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgJHtuYXZJdGVtSG92ZXIgPyAndGV4dC13aGl0ZScgOiAndGV4dC1zaWRlbmF2LTMwMCd9YH0+XG4gICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge25hdkl0ZW0uc3ViTmF2SXRlbXMgJiYgXG4gICAgICAgICAgPGRpdiBvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxuICAgICAgICAgICAge25hdkl0ZW0uc3ViTmF2SXRlbXMubWFwKHN1Yk5hdkl0ZW0gPT4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbC0xMiBwci02IHB5LTQnPntzdWJOYXZJdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZJdGVtO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIk1kSG9tZSIsIk1kUmVwb3J0UHJvYmxlbSIsIk1kU2Nob29sIiwiUmlTY2FsZXMzRmlsbCIsIkJpVGVzdFR1YmUiLCJGYUNoYXJ0QmFyIiwiRmFFeHRlcm5hbExpbmtTcXVhcmVBbHQiLCJGYUNoZXZyb25SaWdodCIsIkJzQ2hhdFNxdWFyZVF1b3RlRmlsbCIsIkJzUXVlc3Rpb25DaXJjbGVGaWxsIiwiTmF2SXRlbSIsIm5hdkl0ZW0iLCJjbGFzc05hbWUiLCJuYXZJdGVtSG92ZXIiLCJzZXROYXZJdGVtSG92ZXIiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJocmVmIiwicm91dGUiLCJkaXYiLCJ0aXRsZSIsInN1Yk5hdkl0ZW1zIiwibWFwIiwic3ViTmF2SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navItem.tsx\n");

/***/ })

});