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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/sanity-client */ \"./lib/sanity-client.ts\");\n\n\n\nfunction Layout(param) {\n    var siteSettings = param.siteSettings, navItems = param.navItems, children = param.children;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[300px] bg-slate-800 p-4\",\n                children: [\n                    siteSettings.icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        height: 160,\n                        width: 300,\n                        src: (0,_lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__.imageBuilder)(siteSettings.icon).height(680).url()\n                    }, void 0, false, {\n                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    navItems && navItems.map(function(navItem) {\n                        return navItem.title;\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"w-full min-h-screen\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU4QjtBQUNxQjtBQVFwQyxRQUFRLENBQUNFLE1BQU0sQ0FBQyxLQUEyQyxFQUFFLENBQUM7UUFBNUNDLFlBQVksR0FBZCxLQUEyQyxDQUF6Q0EsWUFBWSxFQUFFQyxRQUFRLEdBQXhCLEtBQTJDLENBQTNCQSxRQUFRLEVBQUVDLFFBQVEsR0FBbEMsS0FBMkMsQ0FBakJBLFFBQVE7SUFDL0QsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBTTs7d0ZBQ2xCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBNEI7O29CQUMxQ0osWUFBWSxDQUFDSyxJQUFJLGdGQUNmUixtREFBSzt3QkFDSlMsTUFBTSxFQUFFLEdBQUc7d0JBQ1hDLEtBQUssRUFBRSxHQUFHO3dCQUNWQyxHQUFHLEVBQUVWLGdFQUFZLENBQUNFLFlBQVksQ0FBQ0ssSUFBSSxFQUFFQyxNQUFNLENBQUMsR0FBRyxFQUFFRyxHQUFHOzs7Ozs7b0JBR3ZEUixRQUFRLElBQUlBLFFBQVEsQ0FBQ1MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLE9BQU87d0JBQy9CQSxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsS0FBSzs7Ozs7Ozs7d0ZBR2RULENBQUc7Z0JBQUNVLEVBQUUsRUFBQyxDQUFNO2dCQUFDVCxTQUFTLEVBQUMsQ0FBcUI7MEJBQzNDRixRQUFROzs7Ozs7Ozs7Ozs7QUFJakIsQ0FBQztLQXBCdUJILE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4P2FmMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2SXRlbUdyb3EsIFNpdGVTZXR0aW5nc0dyb3EgfSBmcm9tICcuLi9saWIvc2FuaXR5LXF1ZXJpZXMnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnLi90b29sYmFyJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IGltYWdlQnVpbGRlciB9IGZyb20gJy4uL2xpYi9zYW5pdHktY2xpZW50JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2l0ZVNldHRpbmdzOiBTaXRlU2V0dGluZ3NHcm9xO1xuICBuYXZJdGVtczogTmF2SXRlbUdyb3FbXTtcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50W10gfCBKU1guRWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgc2l0ZVNldHRpbmdzLCBuYXZJdGVtcywgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVszMDBweF0gYmctc2xhdGUtODAwIHAtNCc+XG4gICAgICB7c2l0ZVNldHRpbmdzLmljb24gJiYgXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGhlaWdodD17MTYwfVxuICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgc3JjPXtpbWFnZUJ1aWxkZXIoc2l0ZVNldHRpbmdzLmljb24pLmhlaWdodCg2ODApLnVybCgpfVxuICAgICAgICAvPlxuICAgICAgfVxuICAgICAge25hdkl0ZW1zICYmIG5hdkl0ZW1zLm1hcChuYXZJdGVtID0+XG4gICAgICAgIG5hdkl0ZW0udGl0bGVcbiAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLXNjcmVlblwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlQnVpbGRlciIsIkxheW91dCIsInNpdGVTZXR0aW5ncyIsIm5hdkl0ZW1zIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpY29uIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJ1cmwiLCJtYXAiLCJuYXZJdGVtIiwidGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ })

});