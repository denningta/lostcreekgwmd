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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/sanity-client */ \"./lib/sanity-client.ts\");\n\n\n\nfunction Layout(param) {\n    var siteSettings = param.siteSettings, navItems = param.navItems, children = param.children;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[350px] bg-slate-800 p-4\",\n                children: [\n                    siteSettings.icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        height: 160,\n                        width: 300,\n                        src: (0,_lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__.imageBuilder)(siteSettings.icon).height(680).url()\n                    }, void 0, false, {\n                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    navItems && navItems.map(function(navItem) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mt-10 hover: bg-black cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pr-4\",\n                                    children: navItem.icon\n                                }, void 0, false, {\n                                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: navItem.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"w-full min-h-screen\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU4QjtBQUNxQjtBQVFwQyxRQUFRLENBQUNFLE1BQU0sQ0FBQyxLQUEyQyxFQUFFLENBQUM7UUFBNUNDLFlBQVksR0FBZCxLQUEyQyxDQUF6Q0EsWUFBWSxFQUFFQyxRQUFRLEdBQXhCLEtBQTJDLENBQTNCQSxRQUFRLEVBQUVDLFFBQVEsR0FBbEMsS0FBMkMsQ0FBakJBLFFBQVE7O0lBQy9ELE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQU07O3dGQUNsQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTRCOztvQkFDMUNKLFlBQVksQ0FBQ0ssSUFBSSxnRkFDZlIsbURBQUs7d0JBQ0pTLE1BQU0sRUFBRSxHQUFHO3dCQUNYQyxLQUFLLEVBQUUsR0FBRzt3QkFDVkMsR0FBRyxFQUFFVixnRUFBWSxDQUFDRSxZQUFZLENBQUNLLElBQUksRUFBRUMsTUFBTSxDQUFDLEdBQUcsRUFBRUcsR0FBRzs7Ozs7O29CQUd2RFIsUUFBUSxJQUFJQSxRQUFRLENBQUNTLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxPQUFPO3NDQUMvQixNQUFNLCtEQUFMUixDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBMkM7OzRHQUN2REQsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQU07OENBQUVPLE9BQU8sQ0FBQ04sSUFBSTs7Ozs7OzRHQUNsQ0YsQ0FBRzs4Q0FBRVEsT0FBTyxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUl0QlQsQ0FBRztnQkFBQ1UsRUFBRSxFQUFDLENBQU07Z0JBQUNULFNBQVMsRUFBQyxDQUFxQjswQkFDM0NGLFFBQVE7Ozs7Ozs7Ozs7OztBQUlqQixDQUFDO0tBdkJ1QkgsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC50c3g/YWYyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZJdGVtR3JvcSwgU2l0ZVNldHRpbmdzR3JvcSB9IGZyb20gJy4uL2xpYi9zYW5pdHktcXVlcmllcyc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICcuL3Rvb2xiYXInO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgaW1hZ2VCdWlsZGVyIH0gZnJvbSAnLi4vbGliL3Nhbml0eS1jbGllbnQnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaXRlU2V0dGluZ3M6IFNpdGVTZXR0aW5nc0dyb3E7XG4gIG5hdkl0ZW1zOiBOYXZJdGVtR3JvcVtdO1xuICBjaGlsZHJlbjogSlNYLkVsZW1lbnRbXSB8IEpTWC5FbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBzaXRlU2V0dGluZ3MsIG5hdkl0ZW1zLCBjaGlsZHJlbiB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzM1MHB4XSBiZy1zbGF0ZS04MDAgcC00Jz5cbiAgICAgIHtzaXRlU2V0dGluZ3MuaWNvbiAmJiBcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgaGVpZ2h0PXsxNjB9XG4gICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICBzcmM9e2ltYWdlQnVpbGRlcihzaXRlU2V0dGluZ3MuaWNvbikuaGVpZ2h0KDY4MCkudXJsKCl9XG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICB7bmF2SXRlbXMgJiYgbmF2SXRlbXMubWFwKG5hdkl0ZW0gPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbXQtMTAgaG92ZXI6IGJnLWJsYWNrIGN1cnNvci1wb2ludGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHItNCc+e25hdkl0ZW0uaWNvbn08L2Rpdj5cbiAgICAgICAgICA8ZGl2PntuYXZJdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLXNjcmVlblwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlQnVpbGRlciIsIkxheW91dCIsInNpdGVTZXR0aW5ncyIsIm5hdkl0ZW1zIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpY29uIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJ1cmwiLCJtYXAiLCJuYXZJdGVtIiwidGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ })

});