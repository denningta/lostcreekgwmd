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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dynamic_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-icon */ \"./components/dynamic-icon.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavItem(param) {\n    var navItem = param.navItem, _className = param.className, className = _className === void 0 ? '' : _className;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), navItemHover = ref[0], setNavItemHover = ref[1];\n    var onMouseEnter = function() {\n        setNavItemHover(true);\n    };\n    var onMouseLeave = function() {\n        setNavItemHover(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: navItem.route === 'root' ? '/' : \"/\".concat(navItem.route),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex cursor-pointer py-3 px-6 \".concat(navItemHover ? 'bg-black bg-opacity-20 text-white' : 'text-gray-300'),\n            onMouseEnter: onMouseEnter,\n            onMouseLeave: onMouseLeave,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mr-4 w-[35px]\",\n                    children: navItem.icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dynamic_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        icon: navItem.icon\n                    }, void 0, false, {\n                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                navItem.title\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, navItem.title, false, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/navItem.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n}\n_s(NavItem, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NavItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavItem);\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdkl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QjtBQUNJO0FBRVE7O1NBUy9CRyxPQUFPLENBQUMsS0FBa0MsRUFBRSxDQUFDO1FBQW5DQyxPQUFPLEdBQVQsS0FBa0MsQ0FBaENBLE9BQU8sZUFBVCxLQUFrQyxDQUF2QkMsU0FBUyxFQUFUQSxTQUFTLDJCQUFHLENBQUU7O0lBQ3hDLEdBQUssQ0FBbUNKLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQS9DSyxZQUFZLEdBQXFCTCxHQUFlLEtBQWxDTSxlQUFlLEdBQUlOLEdBQWU7SUFDdkQsR0FBSyxDQUFDTyxZQUFZLEdBQUcsUUFDdkIsR0FENkIsQ0FBQztRQUMxQkQsZUFBZSxDQUFDLElBQUk7SUFDdEIsQ0FBQztJQUNELEdBQUssQ0FBQ0UsWUFBWSxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7UUFDMUJGLGVBQWUsQ0FBQyxLQUFLO0lBQ3ZCLENBQUM7SUFJRCxNQUFNLDZFQUNIUCxrREFBSTtRQUVIVSxJQUFJLEVBQUVOLE9BQU8sQ0FBQ08sS0FBSyxLQUFLLENBQU0sUUFBRyxDQUFHLEtBQUksQ0FBQyxHQUFnQixPQUFkUCxPQUFPLENBQUNPLEtBQUs7OEZBRXZEQyxDQUFHO1lBQ0ZQLFNBQVMsRUFBRyxDQUE4QixnQ0FBdUUsT0FBckVDLFlBQVksR0FBRyxDQUFtQyxxQ0FBRyxDQUFlO1lBQ2hIRSxZQUFZLEVBQUVBLFlBQVk7WUFDMUJDLFlBQVksRUFBRUEsWUFBWTs7NEZBRXpCRyxDQUFHO29CQUFDUCxTQUFTLEVBQUMsQ0FBZTs4QkFDM0JELE9BQU8sQ0FBQ1MsSUFBSSxnRkFFUlgscURBQVc7d0JBQUNXLElBQUksRUFBRVQsT0FBTyxDQUFDUyxJQUFJOzs7Ozs7Ozs7OztnQkFHcENULE9BQU8sQ0FBQ1UsS0FBSzs7Ozs7OztPQWRYVixPQUFPLENBQUNVLEtBQUs7Ozs7O0FBa0J4QixDQUFDO0dBL0JRWCxPQUFPO0tBQVBBLE9BQU87QUFpQ2hCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZJdGVtLnRzeD9lZjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkl0ZW1Hcm9xIH0gZnJvbSAnLi4vbGliL3Nhbml0eS1xdWVyaWVzJztcbmltcG9ydCBEeW5hbWljSWNvbiBmcm9tICcuL2R5bmFtaWMtaWNvbic7XG5pbXBvcnQgRmFJY29ucyBmcm9tICdyZWFjdC1pY29ucy9mYS9pbmRleCc7XG5pbXBvcnQgTWRJY29ucyBmcm9tICdyZWFjdC1pY29ucy9tZC9pbmRleCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hdkl0ZW06IE5hdkl0ZW1Hcm9xO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIE5hdkl0ZW0oeyBuYXZJdGVtLCBjbGFzc05hbWUgPSAnJyB9OiBQcm9wcykge1xuICBjb25zdCBbbmF2SXRlbUhvdmVyLCBzZXROYXZJdGVtSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgc2V0TmF2SXRlbUhvdmVyKHRydWUpO1xuICB9XG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXROYXZJdGVtSG92ZXIoZmFsc2UpO1xuICB9XG5cblxuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGtleT17bmF2SXRlbS50aXRsZX1cbiAgICAgIGhyZWY9e25hdkl0ZW0ucm91dGUgPT09ICdyb290JyA/ICcvJyA6IGAvJHtuYXZJdGVtLnJvdXRlfWB9XG4gICAgPlxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBjdXJzb3ItcG9pbnRlciBweS0zIHB4LTYgJHtuYXZJdGVtSG92ZXIgPyAnYmctYmxhY2sgYmctb3BhY2l0eS0yMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LWdyYXktMzAwJ31gfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci00IHctWzM1cHhdJz5cbiAgICAgICAgICB7bmF2SXRlbS5pY29uICYmIFxuXG4gICAgICAgICAgICAgIDxEeW5hbWljSWNvbiBpY29uPXtuYXZJdGVtLmljb259PjwvRHluYW1pY0ljb24+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bmF2SXRlbS50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJEeW5hbWljSWNvbiIsIk5hdkl0ZW0iLCJuYXZJdGVtIiwiY2xhc3NOYW1lIiwibmF2SXRlbUhvdmVyIiwic2V0TmF2SXRlbUhvdmVyIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaHJlZiIsInJvdXRlIiwiZGl2IiwiaWNvbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navItem.tsx\n");

/***/ })

});