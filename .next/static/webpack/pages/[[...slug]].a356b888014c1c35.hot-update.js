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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavItem(param) {\n    var navItem = param.navItem, _className = param.className, className = _className === void 0 ? '' : _className;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), navItemHover = ref[0], setNavItemHover = ref[1];\n    var onMouseEnter = function() {\n        setNavItemHover(true);\n    };\n    var onMouseLeave = function() {\n        setNavItemHover(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: navItem.route === 'root' ? '/' : \"/\".concat(navItem.route),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex cursor-pointer py-3 px-6 font-thin \".concat(navItemHover ? 'bg-black bg-opacity-20 text-white' : 'text-gray-300'),\n            onMouseEnter: onMouseEnter,\n            onMouseLeave: onMouseLeave,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mr-4 w-[35px] \".concat(navItemHover ? 'text-primary-500' : 'text-gray-300'),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center w-full h-full text-xl\",\n                        children: [\n                            navItem.title === 'Home' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdHome, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 43\n                            }, this),\n                            navItem.title === 'Groundwater 101' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdSchool, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 54\n                            }, this),\n                            navItem.title === 'Legal and Administrative' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiScales3Fill, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 63\n                            }, this),\n                            navItem.title === 'Water Testing' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiTestTube, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 52\n                            }, this),\n                            navItem.title === 'External Resources' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaExternalLinkSquareAlt, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 57\n                            }, this),\n                            navItem.title === 'Submit a Request' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsChatSquareQuoteFill, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 55\n                            }, this),\n                            navItem.title === 'Contact Us' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsQuestionCircleFill, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 49\n                            }, this),\n                            navItem.title === 'Report Violation' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdReportProblem, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 55\n                            }, this),\n                            navItem.title === 'Well Reporting' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChartBar, {}, void 0, false, {\n                                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 53\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                navItem.title\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, navItem.title, false, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n}\n_s(NavItem, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NavItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavItem);\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdkl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSTtBQUVrQztBQUNwQjtBQUNIO0FBQ3lCO0FBQ1E7O1NBT25FVyxPQUFPLENBQUMsS0FBa0MsRUFBRSxDQUFDO1FBQW5DQyxPQUFPLEdBQVQsS0FBa0MsQ0FBaENBLE9BQU8sZUFBVCxLQUFrQyxDQUF2QkMsU0FBUyxFQUFUQSxTQUFTLDJCQUFHLENBQUU7O0lBQ3hDLEdBQUssQ0FBbUNaLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQS9DYSxZQUFZLEdBQXFCYixHQUFlLEtBQWxDYyxlQUFlLEdBQUlkLEdBQWU7SUFDdkQsR0FBSyxDQUFDZSxZQUFZLEdBQUcsUUFDdkIsR0FENkIsQ0FBQztRQUMxQkQsZUFBZSxDQUFDLElBQUk7SUFDdEIsQ0FBQztJQUNELEdBQUssQ0FBQ0UsWUFBWSxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7UUFDMUJGLGVBQWUsQ0FBQyxLQUFLO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLDZFQUNIZixrREFBSTtRQUVIa0IsSUFBSSxFQUFFTixPQUFPLENBQUNPLEtBQUssS0FBSyxDQUFNLFFBQUcsQ0FBRyxLQUFJLENBQUMsR0FBZ0IsT0FBZFAsT0FBTyxDQUFDTyxLQUFLOzhGQUV2REMsQ0FBRztZQUNGUCxTQUFTLEVBQUcsQ0FBd0MsMENBQXVFLE9BQXJFQyxZQUFZLEdBQUcsQ0FBbUMscUNBQUcsQ0FBZTtZQUMxSEUsWUFBWSxFQUFFQSxZQUFZO1lBQzFCQyxZQUFZLEVBQUVBLFlBQVk7OzRGQUV6QkcsQ0FBRztvQkFBQ1AsU0FBUyxFQUFHLENBQWMsZ0JBQXNELE9BQXBEQyxZQUFZLEdBQUcsQ0FBa0Isb0JBQUcsQ0FBZTswR0FDakZNLENBQUc7d0JBQUNQLFNBQVMsRUFBQyxDQUF3RDs7NEJBQ3BFRCxPQUFPLENBQUNTLEtBQUssS0FBSyxDQUFNLHFGQUFNbkIsa0RBQU07Ozs7OzRCQUNwQ1UsT0FBTyxDQUFDUyxLQUFLLEtBQUssQ0FBaUIsZ0dBQU1qQixvREFBUTs7Ozs7NEJBQ2pEUSxPQUFPLENBQUNTLEtBQUssS0FBSyxDQUEwQix5R0FBTWhCLHlEQUFhOzs7Ozs0QkFDL0RPLE9BQU8sQ0FBQ1MsS0FBSyxLQUFLLENBQWUsOEZBQU1mLHNEQUFVOzs7Ozs0QkFDakRNLE9BQU8sQ0FBQ1MsS0FBSyxLQUFLLENBQW9CLG1HQUFNYixtRUFBdUI7Ozs7OzRCQUNuRUksT0FBTyxDQUFDUyxLQUFLLEtBQUssQ0FBa0IsaUdBQU1aLGlFQUFxQjs7Ozs7NEJBQy9ERyxPQUFPLENBQUNTLEtBQUssS0FBSyxDQUFZLDJGQUFNWCxnRUFBb0I7Ozs7OzRCQUN4REUsT0FBTyxDQUFDUyxLQUFLLEtBQUssQ0FBa0IsaUdBQU1sQiwyREFBZTs7Ozs7NEJBQ3pEUyxPQUFPLENBQUNTLEtBQUssS0FBSyxDQUFnQiwrRkFBTWQsc0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR3RESyxPQUFPLENBQUNTLEtBQUs7Ozs7Ozs7T0FyQlhULE9BQU8sQ0FBQ1MsS0FBSzs7Ozs7QUF5QnhCLENBQUM7R0FwQ1FWLE9BQU87S0FBUEEsT0FBTztBQXNDaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdkl0ZW0udHN4P2VmOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2SXRlbUdyb3EgfSBmcm9tICcuLi9saWIvc2FuaXR5LXF1ZXJpZXMnO1xuaW1wb3J0IHsgTWRIb21lLCBNZFJlcG9ydFByb2JsZW0sIE1kU2Nob29sIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHsgUmlTY2FsZXMzRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcbmltcG9ydCB7IEJpVGVzdFR1YmUgfSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XG5pbXBvcnQgeyBGYUNoYXJ0QmFyLCBGYUV4dGVybmFsTGlua1NxdWFyZUFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IEJzQ2hhdFNxdWFyZVF1b3RlRmlsbCwgQnNRdWVzdGlvbkNpcmNsZUZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hdkl0ZW06IE5hdkl0ZW1Hcm9xO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIE5hdkl0ZW0oeyBuYXZJdGVtLCBjbGFzc05hbWUgPSAnJyB9OiBQcm9wcykge1xuICBjb25zdCBbbmF2SXRlbUhvdmVyLCBzZXROYXZJdGVtSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgc2V0TmF2SXRlbUhvdmVyKHRydWUpO1xuICB9XG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXROYXZJdGVtSG92ZXIoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAga2V5PXtuYXZJdGVtLnRpdGxlfVxuICAgICAgaHJlZj17bmF2SXRlbS5yb3V0ZSA9PT0gJ3Jvb3QnID8gJy8nIDogYC8ke25hdkl0ZW0ucm91dGV9YH1cbiAgICA+XG4gICAgICA8ZGl2IFxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGN1cnNvci1wb2ludGVyIHB5LTMgcHgtNiBmb250LXRoaW4gJHtuYXZJdGVtSG92ZXIgPyAnYmctYmxhY2sgYmctb3BhY2l0eS0yMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LWdyYXktMzAwJ31gfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbXItNCB3LVszNXB4XSAke25hdkl0ZW1Ib3ZlciA/ICd0ZXh0LXByaW1hcnktNTAwJyA6ICd0ZXh0LWdyYXktMzAwJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtZnVsbCB0ZXh0LXhsJz5cbiAgICAgICAgICAgIHtuYXZJdGVtLnRpdGxlID09PSAnSG9tZScgJiYgKDxNZEhvbWUgLz4pfVxuICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdHcm91bmR3YXRlciAxMDEnICYmICg8TWRTY2hvb2wgLz4pfVxuICAgICAgICAgICAge25hdkl0ZW0udGl0bGUgPT09ICdMZWdhbCBhbmQgQWRtaW5pc3RyYXRpdmUnICYmICg8UmlTY2FsZXMzRmlsbCAvPil9XG4gICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ1dhdGVyIFRlc3RpbmcnICYmICg8QmlUZXN0VHViZSAvPil9XG4gICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ0V4dGVybmFsIFJlc291cmNlcycgJiYgKDxGYUV4dGVybmFsTGlua1NxdWFyZUFsdCAvPil9XG4gICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ1N1Ym1pdCBhIFJlcXVlc3QnICYmICg8QnNDaGF0U3F1YXJlUXVvdGVGaWxsIC8+KX1cbiAgICAgICAgICAgIHtuYXZJdGVtLnRpdGxlID09PSAnQ29udGFjdCBVcycgJiYgKDxCc1F1ZXN0aW9uQ2lyY2xlRmlsbCAvPil9XG4gICAgICAgICAgICB7bmF2SXRlbS50aXRsZSA9PT0gJ1JlcG9ydCBWaW9sYXRpb24nICYmICg8TWRSZXBvcnRQcm9ibGVtIC8+KX1cbiAgICAgICAgICAgIHtuYXZJdGVtLnRpdGxlID09PSAnV2VsbCBSZXBvcnRpbmcnICYmICg8RmFDaGFydEJhciAvPil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bmF2SXRlbS50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJNZEhvbWUiLCJNZFJlcG9ydFByb2JsZW0iLCJNZFNjaG9vbCIsIlJpU2NhbGVzM0ZpbGwiLCJCaVRlc3RUdWJlIiwiRmFDaGFydEJhciIsIkZhRXh0ZXJuYWxMaW5rU3F1YXJlQWx0IiwiQnNDaGF0U3F1YXJlUXVvdGVGaWxsIiwiQnNRdWVzdGlvbkNpcmNsZUZpbGwiLCJOYXZJdGVtIiwibmF2SXRlbSIsImNsYXNzTmFtZSIsIm5hdkl0ZW1Ib3ZlciIsInNldE5hdkl0ZW1Ib3ZlciIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImhyZWYiLCJyb3V0ZSIsImRpdiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navItem.tsx\n");

/***/ })

});