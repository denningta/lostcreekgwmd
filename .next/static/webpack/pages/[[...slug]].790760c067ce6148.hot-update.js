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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/sanity-client */ \"./lib/sanity-client.ts\");\n/* harmony import */ var _navItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navItem */ \"./components/navItem.tsx\");\n\n\n\n\nfunction SideNav(param) {\n    var siteSettings = param.siteSettings, navItems = param.navItems;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[400px] bg-sidenav-600\",\n        children: [\n            siteSettings.icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    height: 160,\n                    width: 300,\n                    src: (0,_lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__.imageBuilder)(siteSettings.icon).height(680).url()\n                }, void 0, false, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            navItems && navItems.map(function(navItem) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    navItem: navItem\n                }, navItem.title, false, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this));\n}\n_c = SideNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideNav);\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGVOYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRThCO0FBQ3FCO0FBQ3BCO1NBT3RCRyxPQUFPLENBQUMsS0FBaUMsRUFBRSxDQUFDO1FBQWxDQyxZQUFZLEdBQWQsS0FBaUMsQ0FBL0JBLFlBQVksRUFBRUMsUUFBUSxHQUF4QixLQUFpQyxDQUFqQkEsUUFBUTs7SUFFdkMsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBMEI7O1lBQ3hDSCxZQUFZLENBQUNJLElBQUksZ0ZBQ2ZGLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFLO3NHQUNqQlAsbURBQUs7b0JBQ0pTLE1BQU0sRUFBRSxHQUFHO29CQUNYQyxLQUFLLEVBQUUsR0FBRztvQkFDVkMsR0FBRyxFQUFFVixnRUFBWSxDQUFDRyxZQUFZLENBQUNJLElBQUksRUFBRUMsTUFBTSxDQUFDLEdBQUcsRUFBRUcsR0FBRzs7Ozs7Ozs7Ozs7WUFJekRQLFFBQVEsSUFBSUEsUUFBUSxDQUFDUSxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsT0FBTzs4QkFDL0IsTUFBTSwrREFBTFosZ0RBQU87b0JBQUNZLE9BQU8sRUFBRUEsT0FBTzttQkFBT0EsT0FBTyxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7QUFJbkQsQ0FBQztLQWxCUVosT0FBTztBQW9CaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGVOYXYudHN4P2EwMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEljb25QaWNrZXJHcm9xLCBOYXZJdGVtR3JvcSwgU2l0ZVNldHRpbmdzR3JvcSB9IGZyb20gXCIuLi9saWIvc2FuaXR5LXF1ZXJpZXNcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IGltYWdlQnVpbGRlciB9IGZyb20gJy4uL2xpYi9zYW5pdHktY2xpZW50JztcbmltcG9ydCBOYXZJdGVtIGZyb20gXCIuL25hdkl0ZW1cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2l0ZVNldHRpbmdzOiBTaXRlU2V0dGluZ3NHcm9xO1xuICBuYXZJdGVtczogTmF2SXRlbUdyb3FbXTtcbn1cblxuZnVuY3Rpb24gU2lkZU5hdih7IHNpdGVTZXR0aW5ncywgbmF2SXRlbXMgfTogUHJvcHMpIHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs0MDBweF0gYmctc2lkZW5hdi02MDAnPlxuICAgIHtzaXRlU2V0dGluZ3MuaWNvbiAmJiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLTUnPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgIHNyYz17aW1hZ2VCdWlsZGVyKHNpdGVTZXR0aW5ncy5pY29uKS5oZWlnaHQoNjgwKS51cmwoKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICB7bmF2SXRlbXMgJiYgbmF2SXRlbXMubWFwKG5hdkl0ZW0gPT5cbiAgICAgIDxOYXZJdGVtIG5hdkl0ZW09e25hdkl0ZW19IGtleT17bmF2SXRlbS50aXRsZX0+PC9OYXZJdGVtPlxuICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXY7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJpbWFnZUJ1aWxkZXIiLCJOYXZJdGVtIiwiU2lkZU5hdiIsInNpdGVTZXR0aW5ncyIsIm5hdkl0ZW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWNvbiIsImhlaWdodCIsIndpZHRoIiwic3JjIiwidXJsIiwibWFwIiwibmF2SXRlbSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sideNav.tsx\n");

/***/ })

});