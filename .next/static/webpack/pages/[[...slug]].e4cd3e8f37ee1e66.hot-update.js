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

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/sanity-client */ \"./lib/sanity-client.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(param) {\n    var siteSettings = param.siteSettings, navItems = param.navItems, children = param.children;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), navItemHover = ref[0], setNavItemHover = ref[1];\n    var onMouseEnter = function() {\n        setNavItemHover(true);\n    };\n    var onMouseLeave = function() {\n        setNavItemHover(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[350px] bg-slate-800\",\n                children: [\n                    siteSettings.icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            height: 160,\n                            width: 300,\n                            src: (0,_lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__.imageBuilder)(siteSettings.icon).height(680).url()\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    navItems && navItems.map(function(navItem) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mt-10 cursor-pointer px-6 py-3 \\n            \".concat(navItemHover ? 'bg-black bg-opacity-20' : '', \"\\n          \"),\n                            onMouseEnter: onMouseEnter,\n                            onMouseLeave: onMouseLeave,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\".concat(navItemHover ? 'text-green-800' : ''),\n                                    children: navItem.icon\n                                }, void 0, false, {\n                                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pl-4\",\n                                    children: navItem.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"w-full min-h-screen\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this));\n};\n_s(Layout, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRThCO0FBQ3FCO0FBQ25COztBQVFqQixRQUFRLENBQUNHLE1BQU0sQ0FBQyxLQUEyQyxFQUFFLENBQUM7UUFBNUNDLFlBQVksR0FBZCxLQUEyQyxDQUF6Q0EsWUFBWSxFQUFFQyxRQUFRLEdBQXhCLEtBQTJDLENBQTNCQSxRQUFRLEVBQUVDLFFBQVEsR0FBbEMsS0FBMkMsQ0FBakJBLFFBQVE7OztJQUMvRCxHQUFLLENBQW1DSixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEvQ0ssWUFBWSxHQUFxQkwsR0FBZSxLQUFsQ00sZUFBZSxHQUFJTixHQUFlO0lBRXZELEdBQUssQ0FBQ08sWUFBWSxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7UUFDMUJELGVBQWUsQ0FBQyxJQUFJO0lBQ3RCLENBQUM7SUFDRCxHQUFLLENBQUNFLFlBQVksR0FBRyxRQUN2QixHQUQ2QixDQUFDO1FBQzFCRixlQUFlLENBQUMsS0FBSztJQUN2QixDQUFDO0lBRUQsTUFBTSw2RUFDSEcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBTTs7d0ZBQ2xCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBd0I7O29CQUN0Q1IsWUFBWSxDQUFDUyxJQUFJLGdGQUNmRixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBSzs4R0FDakJaLG1EQUFLOzRCQUNKYyxNQUFNLEVBQUUsR0FBRzs0QkFDWEMsS0FBSyxFQUFFLEdBQUc7NEJBQ1ZDLEdBQUcsRUFBRWYsZ0VBQVksQ0FBQ0csWUFBWSxDQUFDUyxJQUFJLEVBQUVDLE1BQU0sQ0FBQyxHQUFHLEVBQUVHLEdBQUc7Ozs7Ozs7Ozs7O29CQUl6RFosUUFBUSxJQUFJQSxRQUFRLENBQUNhLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxPQUFPO3NDQUMvQixNQUNSLENBQUMsOERBRFFSLENBQUc7NEJBQ0ZDLFNBQVMsRUFDTixDQUNELG9EQUErQyxNQUNqRCxDQURJTCxZQUFZLEdBQUcsQ0FBd0IsMEJBQUcsQ0FBRSxHQUFDLENBQ2pEOzRCQUNBRSxZQUFZLEVBQUVBLFlBQVk7NEJBQzFCQyxZQUFZLEVBQUVBLFlBQVk7OzRHQUN6QkMsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFHLEdBQXVDLE9BQXJDTCxZQUFZLEdBQUcsQ0FBZ0Isa0JBQUcsQ0FBRTs4Q0FBS1ksT0FBTyxDQUFDTixJQUFJOzs7Ozs7NEdBQ3ZFRixDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBTTs4Q0FBRU8sT0FBTyxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUl2Q1QsQ0FBRztnQkFBQ1UsRUFBRSxFQUFDLENBQU07Z0JBQUNULFNBQVMsRUFBQyxDQUFxQjswQkFDM0NOLFFBQVE7Ozs7Ozs7Ozs7OztBQUlqQixDQUFDO0dBeEN1QkgsTUFBTTtLQUFOQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LnRzeD9hZjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdkl0ZW1Hcm9xLCBTaXRlU2V0dGluZ3NHcm9xIH0gZnJvbSAnLi4vbGliL3Nhbml0eS1xdWVyaWVzJztcbmltcG9ydCBUb29sYmFyIGZyb20gJy4vdG9vbGJhcic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBpbWFnZUJ1aWxkZXIgfSBmcm9tICcuLi9saWIvc2FuaXR5LWNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2l0ZVNldHRpbmdzOiBTaXRlU2V0dGluZ3NHcm9xO1xuICBuYXZJdGVtczogTmF2SXRlbUdyb3FbXTtcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50W10gfCBKU1guRWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgc2l0ZVNldHRpbmdzLCBuYXZJdGVtcywgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgY29uc3QgW25hdkl0ZW1Ib3Zlciwgc2V0TmF2SXRlbUhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgc2V0TmF2SXRlbUhvdmVyKHRydWUpO1xuICB9XG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXROYXZJdGVtSG92ZXIoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVszNTBweF0gYmctc2xhdGUtODAwJz5cbiAgICAgIHtzaXRlU2V0dGluZ3MuaWNvbiAmJiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tNSc+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICBzcmM9e2ltYWdlQnVpbGRlcihzaXRlU2V0dGluZ3MuaWNvbikuaGVpZ2h0KDY4MCkudXJsKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICB7bmF2SXRlbXMgJiYgbmF2SXRlbXMubWFwKG5hdkl0ZW0gPT5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYGZsZXggbXQtMTAgY3Vyc29yLXBvaW50ZXIgcHgtNiBweS0zIFxuICAgICAgICAgICAgJHtuYXZJdGVtSG92ZXIgPyAnYmctYmxhY2sgYmctb3BhY2l0eS0yMCcgOiAnJ31cbiAgICAgICAgICBgfSAgICAgICAgXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9IFxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bmF2SXRlbUhvdmVyID8gJ3RleHQtZ3JlZW4tODAwJyA6ICcnfWB9PntuYXZJdGVtLmljb259PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00XCI+e25hdkl0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtc2NyZWVuXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiaW1hZ2VCdWlsZGVyIiwidXNlU3RhdGUiLCJMYXlvdXQiLCJzaXRlU2V0dGluZ3MiLCJuYXZJdGVtcyIsImNoaWxkcmVuIiwibmF2SXRlbUhvdmVyIiwic2V0TmF2SXRlbUhvdmVyIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWNvbiIsImhlaWdodCIsIndpZHRoIiwic3JjIiwidXJsIiwibWFwIiwibmF2SXRlbSIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ })

});