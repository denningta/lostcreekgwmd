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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/sanity-client */ \"./lib/sanity-client.ts\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SideNav(param) {\n    var siteSettings = param.siteSettings, navItems = param.navItems;\n    var _this = this;\n    _s();\n    console.log(navItems);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), navItemHover = ref[0], setNavItemHover = ref[1];\n    var onMouseEnter = function() {\n        setNavItemHover(true);\n    };\n    var onMouseLeave = function() {\n        setNavItemHover(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[350px] bg-slate-900\",\n        children: [\n            siteSettings.icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    height: 160,\n                    width: 300,\n                    src: (0,_lib_sanity_client__WEBPACK_IMPORTED_MODULE_3__.imageBuilder)(siteSettings.icon).height(680).url()\n                }, void 0, false, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            navItems && navItems.map(function(navItem) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mt-10 cursor-pointer px-6 py-3 \\n          \".concat(navItemHover ? 'bg-black bg-opacity-20' : '', \"\\n        \"),\n                    onMouseEnter: onMouseEnter,\n                    onMouseLeave: onMouseLeave,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(navItemHover ? 'text-primary-500' : '')\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pl-4\",\n                            children: navItem.title\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, navItem.title, true, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n}\n_s(SideNav, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = SideNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideNav);\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGVOYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUVGO0FBQ3FCOztTQU8xQ0csT0FBTyxDQUFDLEtBQWlDLEVBQUUsQ0FBQztRQUFsQ0MsWUFBWSxHQUFkLEtBQWlDLENBQS9CQSxZQUFZLEVBQUVDLFFBQVEsR0FBeEIsS0FBaUMsQ0FBakJBLFFBQVE7OztJQUN2Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVE7SUFDcEIsR0FBSyxDQUFtQ0wsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBL0NRLFlBQVksR0FBcUJSLEdBQWUsS0FBbENTLGVBQWUsR0FBSVQsR0FBZTtJQUV2RCxHQUFLLENBQUNVLFlBQVksR0FBRyxRQUN2QixHQUQ2QixDQUFDO1FBQzFCRCxlQUFlLENBQUMsSUFBSTtJQUN0QixDQUFDO0lBQ0QsR0FBSyxDQUFDRSxZQUFZLEdBQUcsUUFDdkIsR0FENkIsQ0FBQztRQUMxQkYsZUFBZSxDQUFDLEtBQUs7SUFDdkIsQ0FBQztJQUVELE1BQU0sNkVBQ0hHLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXdCOztZQUN0Q1QsWUFBWSxDQUFDVSxJQUFJLGdGQUNmRixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBSztzR0FDakJaLG1EQUFLO29CQUNKYyxNQUFNLEVBQUUsR0FBRztvQkFDWEMsS0FBSyxFQUFFLEdBQUc7b0JBQ1ZDLEdBQUcsRUFBRWYsZ0VBQVksQ0FBQ0UsWUFBWSxDQUFDVSxJQUFJLEVBQUVDLE1BQU0sQ0FBQyxHQUFHLEVBQUVHLEdBQUc7Ozs7Ozs7Ozs7O1lBSXpEYixRQUFRLElBQUlBLFFBQVEsQ0FBQ2MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLE9BQU87OEJBQy9CLE1BQ04sQ0FBQyw4REFETVIsQ0FBRztvQkFFRkMsU0FBUyxFQUNOLENBQ0Qsa0RBQStDLE1BQ2pELENBRElMLFlBQVksR0FBRyxDQUF3QiwwQkFBRyxDQUFFLEdBQUMsQ0FDakQ7b0JBQ0FFLFlBQVksRUFBRUEsWUFBWTtvQkFDMUJDLFlBQVksRUFBRUEsWUFBWTs7b0dBQ3pCQyxDQUFHOzRCQUFDQyxTQUFTLEVBQUcsR0FBeUMsT0FBdkNMLFlBQVksR0FBRyxDQUFrQixvQkFBRyxDQUFFOzs7Ozs7b0dBQ3hESSxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBTTtzQ0FBRU8sT0FBTyxDQUFDQyxLQUFLOzs7Ozs7O21CQVIvQkQsT0FBTyxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7QUFhMUIsQ0FBQztHQXJDUWxCLE9BQU87S0FBUEEsT0FBTztBQXVDaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGVOYXYudHN4P2EwMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEljb25QaWNrZXJHcm9xLCBOYXZJdGVtR3JvcSwgU2l0ZVNldHRpbmdzR3JvcSB9IGZyb20gXCIuLi9saWIvc2FuaXR5LXF1ZXJpZXNcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IGltYWdlQnVpbGRlciB9IGZyb20gJy4uL2xpYi9zYW5pdHktY2xpZW50JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2l0ZVNldHRpbmdzOiBTaXRlU2V0dGluZ3NHcm9xO1xuICBuYXZJdGVtczogTmF2SXRlbUdyb3FbXTtcbn1cblxuZnVuY3Rpb24gU2lkZU5hdih7IHNpdGVTZXR0aW5ncywgbmF2SXRlbXMgfTogUHJvcHMpIHtcbiAgY29uc29sZS5sb2cobmF2SXRlbXMpO1xuICBjb25zdCBbbmF2SXRlbUhvdmVyLCBzZXROYXZJdGVtSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBzZXROYXZJdGVtSG92ZXIodHJ1ZSk7XG4gIH1cbiAgY29uc3Qgb25Nb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHNldE5hdkl0ZW1Ib3ZlcihmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LVszNTBweF0gYmctc2xhdGUtOTAwJz5cbiAgICB7c2l0ZVNldHRpbmdzLmljb24gJiYgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbS01Jz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgaGVpZ2h0PXsxNjB9XG4gICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICBzcmM9e2ltYWdlQnVpbGRlcihzaXRlU2V0dGluZ3MuaWNvbikuaGVpZ2h0KDY4MCkudXJsKCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAge25hdkl0ZW1zICYmIG5hdkl0ZW1zLm1hcChuYXZJdGVtID0+XG4gICAgICA8ZGl2IFxuICAgICAgICBrZXk9e25hdkl0ZW0udGl0bGV9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgYGZsZXggbXQtMTAgY3Vyc29yLXBvaW50ZXIgcHgtNiBweS0zIFxuICAgICAgICAgICR7bmF2SXRlbUhvdmVyID8gJ2JnLWJsYWNrIGJnLW9wYWNpdHktMjAnIDogJyd9XG4gICAgICAgIGB9ICAgICAgICBcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9IFxuICAgICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtuYXZJdGVtSG92ZXIgPyAndGV4dC1wcmltYXJ5LTUwMCcgOiAnJ31gfT57fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTRcIj57bmF2SXRlbS50aXRsZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXY7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsImltYWdlQnVpbGRlciIsIlNpZGVOYXYiLCJzaXRlU2V0dGluZ3MiLCJuYXZJdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJuYXZJdGVtSG92ZXIiLCJzZXROYXZJdGVtSG92ZXIiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJpY29uIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJ1cmwiLCJtYXAiLCJuYXZJdGVtIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sideNav.tsx\n");

/***/ })

});