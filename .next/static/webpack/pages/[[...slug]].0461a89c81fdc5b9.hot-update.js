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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/sanity-client */ \"./lib/sanity-client.ts\");\n\n\n\nfunction Layout(param) {\n    var siteSettings = param.siteSettings, navItems = param.navItems, children = param.children;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[350px] bg-slate-800\",\n                children: [\n                    siteSettings.icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            height: 160,\n                            width: 300,\n                            src: (0,_lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__.imageBuilder)(siteSettings.icon).height(680).url()\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    navItems && navItems.map(function(navItem) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mt-10 hover:bg-black hover:bg-opacity-20 cursor-pointer px-6 py-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pr-4\",\n                                    children: navItem.icon\n                                }, void 0, false, {\n                                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: navItem.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"w-full min-h-screen\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU4QjtBQUNxQjtBQVFwQyxRQUFRLENBQUNFLE1BQU0sQ0FBQyxLQUEyQyxFQUFFLENBQUM7UUFBNUNDLFlBQVksR0FBZCxLQUEyQyxDQUF6Q0EsWUFBWSxFQUFFQyxRQUFRLEdBQXhCLEtBQTJDLENBQTNCQSxRQUFRLEVBQUVDLFFBQVEsR0FBbEMsS0FBMkMsQ0FBakJBLFFBQVE7O0lBQy9ELE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQU07O3dGQUNsQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXdCOztvQkFDdENKLFlBQVksQ0FBQ0ssSUFBSSxnRkFDZkYsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQUs7OEdBQ2pCUCxtREFBSzs0QkFDSlMsTUFBTSxFQUFFLEdBQUc7NEJBQ1hDLEtBQUssRUFBRSxHQUFHOzRCQUNWQyxHQUFHLEVBQUVWLGdFQUFZLENBQUNFLFlBQVksQ0FBQ0ssSUFBSSxFQUFFQyxNQUFNLENBQUMsR0FBRyxFQUFFRyxHQUFHOzs7Ozs7Ozs7OztvQkFJekRSLFFBQVEsSUFBSUEsUUFBUSxDQUFDUyxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsT0FBTztzQ0FDL0IsTUFBTSwrREFBTFIsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQXdFOzs0R0FDcEZELENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUFNOzhDQUFFTyxPQUFPLENBQUNOLElBQUk7Ozs7Ozs0R0FDbENGLENBQUc7OENBQUVRLE9BQU8sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJdEJULENBQUc7Z0JBQUNVLEVBQUUsRUFBQyxDQUFNO2dCQUFDVCxTQUFTLEVBQUMsQ0FBcUI7MEJBQzNDRixRQUFROzs7Ozs7Ozs7Ozs7QUFJakIsQ0FBQztLQXpCdUJILE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4P2FmMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2SXRlbUdyb3EsIFNpdGVTZXR0aW5nc0dyb3EgfSBmcm9tICcuLi9saWIvc2FuaXR5LXF1ZXJpZXMnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnLi90b29sYmFyJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IGltYWdlQnVpbGRlciB9IGZyb20gJy4uL2xpYi9zYW5pdHktY2xpZW50JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2l0ZVNldHRpbmdzOiBTaXRlU2V0dGluZ3NHcm9xO1xuICBuYXZJdGVtczogTmF2SXRlbUdyb3FbXTtcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50W10gfCBKU1guRWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgc2l0ZVNldHRpbmdzLCBuYXZJdGVtcywgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVszNTBweF0gYmctc2xhdGUtODAwJz5cbiAgICAgIHtzaXRlU2V0dGluZ3MuaWNvbiAmJiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tNCc+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICBzcmM9e2ltYWdlQnVpbGRlcihzaXRlU2V0dGluZ3MuaWNvbikuaGVpZ2h0KDY4MCkudXJsKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICB7bmF2SXRlbXMgJiYgbmF2SXRlbXMubWFwKG5hdkl0ZW0gPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbXQtMTAgaG92ZXI6YmctYmxhY2sgaG92ZXI6Ymctb3BhY2l0eS0yMCBjdXJzb3ItcG9pbnRlciBweC02IHB5LTMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwci00Jz57bmF2SXRlbS5pY29ufTwvZGl2PlxuICAgICAgICAgIDxkaXY+e25hdkl0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtc2NyZWVuXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiaW1hZ2VCdWlsZGVyIiwiTGF5b3V0Iiwic2l0ZVNldHRpbmdzIiwibmF2SXRlbXMiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSIsImljb24iLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsInVybCIsIm1hcCIsIm5hdkl0ZW0iLCJ0aXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ })

});