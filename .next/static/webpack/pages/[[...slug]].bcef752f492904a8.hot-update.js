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

/***/ "./components/sideNav.tsx":
/*!********************************!*\
  !*** ./components/sideNav.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/sanity-client */ \"./lib/sanity-client.ts\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SideNav(param) {\n    var siteSettings = param.siteSettings, navItems = param.navItems;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), navItemHover = ref[0], setNavItemHover = ref[1];\n    var onMouseEnter = function() {\n        setNavItemHover(true);\n    };\n    var onMouseLeave = function() {\n        setNavItemHover(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[350px] bg-slate-900\",\n        children: [\n            siteSettings.icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    height: 160,\n                    width: 300,\n                    src: (0,_lib_sanity_client__WEBPACK_IMPORTED_MODULE_3__.imageBuilder)(siteSettings.icon).height(680).url()\n                }, void 0, false, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            navItems && navItems.map(function(navItem) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mt-10 cursor-pointer px-6 py-3 \\n          \".concat(navItemHover ? 'bg-black bg-opacity-20' : '', \"\\n        \"),\n                    onMouseEnter: onMouseEnter,\n                    onMouseLeave: onMouseLeave,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(navItemHover ? 'text-primary-500' : ''),\n                            children: JSON.stringify(navItem.icon)\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pl-4\",\n                            children: navItem.title\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n}\n_s(SideNav, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = SideNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideNav);\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGVOYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUVGO0FBQ3FCOztTQVMxQ0csT0FBTyxDQUFDLEtBQWlDLEVBQUUsQ0FBQztRQUFsQ0MsWUFBWSxHQUFkLEtBQWlDLENBQS9CQSxZQUFZLEVBQUVDLFFBQVEsR0FBeEIsS0FBaUMsQ0FBakJBLFFBQVE7OztJQUN2QyxHQUFLLENBQW1DTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEvQ00sWUFBWSxHQUFxQk4sR0FBZSxLQUFsQ08sZUFBZSxHQUFJUCxHQUFlO0lBRXZELEdBQUssQ0FBQ1EsWUFBWSxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7UUFDMUJELGVBQWUsQ0FBQyxJQUFJO0lBQ3RCLENBQUM7SUFDRCxHQUFLLENBQUNFLFlBQVksR0FBRyxRQUN2QixHQUQ2QixDQUFDO1FBQzFCRixlQUFlLENBQUMsS0FBSztJQUN2QixDQUFDO0lBR0QsTUFBTSw2RUFDSEcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBd0I7O1lBQ3RDUCxZQUFZLENBQUNRLElBQUksZ0ZBQ2ZGLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFLO3NHQUNqQlYsbURBQUs7b0JBQ0pZLE1BQU0sRUFBRSxHQUFHO29CQUNYQyxLQUFLLEVBQUUsR0FBRztvQkFDVkMsR0FBRyxFQUFFYixnRUFBWSxDQUFDRSxZQUFZLENBQUNRLElBQUksRUFBRUMsTUFBTSxDQUFDLEdBQUcsRUFBRUcsR0FBRzs7Ozs7Ozs7Ozs7WUFJekRYLFFBQVEsSUFBSUEsUUFBUSxDQUFDWSxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsT0FBTzs4QkFDL0IsTUFDTixDQUFDLDhEQURNUixDQUFHO29CQUNGQyxTQUFTLEVBQ04sQ0FDRCxrREFBK0MsTUFDakQsQ0FESUwsWUFBWSxHQUFHLENBQXdCLDBCQUFHLENBQUUsR0FBQyxDQUNqRDtvQkFDQUUsWUFBWSxFQUFFQSxZQUFZO29CQUMxQkMsWUFBWSxFQUFFQSxZQUFZOztvR0FDekJDLENBQUc7NEJBQUNDLFNBQVMsRUFBRyxHQUF5QyxPQUF2Q0wsWUFBWSxHQUFHLENBQWtCLG9CQUFHLENBQUU7c0NBQUthLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixPQUFPLENBQUNOLElBQUk7Ozs7OztvR0FDeEZGLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFNO3NDQUFFTyxPQUFPLENBQUNHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUMsQ0FBQztHQXBDUWxCLE9BQU87S0FBUEEsT0FBTztBQXNDaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGVOYXYudHN4P2EwMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkl0ZW1Hcm9xLCBTaXRlU2V0dGluZ3NHcm9xIH0gZnJvbSBcIi4uL2xpYi9zYW5pdHktcXVlcmllc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgaW1hZ2VCdWlsZGVyIH0gZnJvbSAnLi4vbGliL3Nhbml0eS1jbGllbnQnO1xuaW1wb3J0IE1kSWNvbnMgZnJvbSAncmVhY3QtaWNvbnMnO1xuaW1wb3J0IEZhSWNvbnMgZnJvbSAncmVhY3QtaWNvbnMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaXRlU2V0dGluZ3M6IFNpdGVTZXR0aW5nc0dyb3E7XG4gIG5hdkl0ZW1zOiBOYXZJdGVtR3JvcVtdO1xufVxuXG5mdW5jdGlvbiBTaWRlTmF2KHsgc2l0ZVNldHRpbmdzLCBuYXZJdGVtcyB9OiBQcm9wcykge1xuICBjb25zdCBbbmF2SXRlbUhvdmVyLCBzZXROYXZJdGVtSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBzZXROYXZJdGVtSG92ZXIodHJ1ZSk7XG4gIH1cbiAgY29uc3Qgb25Nb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHNldE5hdkl0ZW1Ib3ZlcihmYWxzZSk7XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctWzM1MHB4XSBiZy1zbGF0ZS05MDAnPlxuICAgIHtzaXRlU2V0dGluZ3MuaWNvbiAmJiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLTUnPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgIHNyYz17aW1hZ2VCdWlsZGVyKHNpdGVTZXR0aW5ncy5pY29uKS5oZWlnaHQoNjgwKS51cmwoKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICB7bmF2SXRlbXMgJiYgbmF2SXRlbXMubWFwKG5hdkl0ZW0gPT5cbiAgICAgIDxkaXYgXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgYGZsZXggbXQtMTAgY3Vyc29yLXBvaW50ZXIgcHgtNiBweS0zIFxuICAgICAgICAgICR7bmF2SXRlbUhvdmVyID8gJ2JnLWJsYWNrIGJnLW9wYWNpdHktMjAnIDogJyd9XG4gICAgICAgIGB9ICAgICAgICBcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9IFxuICAgICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtuYXZJdGVtSG92ZXIgPyAndGV4dC1wcmltYXJ5LTUwMCcgOiAnJ31gfT57SlNPTi5zdHJpbmdpZnkobmF2SXRlbS5pY29uKX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00XCI+e25hdkl0ZW0udGl0bGV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlTmF2O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJpbWFnZUJ1aWxkZXIiLCJTaWRlTmF2Iiwic2l0ZVNldHRpbmdzIiwibmF2SXRlbXMiLCJuYXZJdGVtSG92ZXIiLCJzZXROYXZJdGVtSG92ZXIiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJpY29uIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJ1cmwiLCJtYXAiLCJuYXZJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sideNav.tsx\n");

/***/ })

});