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

/***/ "./components/sections/hero.tsx":
/*!**************************************!*\
  !*** ./components/sections/hero.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/sanity-client */ \"./lib/sanity-client.ts\");\n\n\n\n\nfunction Hero(param) {\n    var data = param.data;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex justify-center text-center px-global-sm h-screen sm:h-[400px] border-b border-neutral-800\",\n                children: data.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    layout: \"fill\",\n                    objectFit: \"cover\",\n                    height: 680,\n                    alt: \"Cover Image for \".concat(data.headline),\n                    src: (0,_lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__.imageBuilder)(data.image).height(680).url()\n                }, void 0, false, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sections/hero.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sections/hero.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-[320px] mx-5 bg-white backdrop-blur-sm drop-shadow border border-white border-opacity-20 py-4 px-6 rounded-2xl overflow-clip\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-5xl font-bold drop-shadow\",\n                        children: data.headline && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                            value: data.headline\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sections/hero.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sections/hero.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-3xl drop-shadow\",\n                        children: data.subHeadline && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                            value: data.subHeadline\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sections/hero.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sections/hero.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sections/hero.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sections/hero.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n}\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL2hlcm8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2tEO0FBQ3BCO0FBQ3dCO1NBTTdDRyxJQUFJLENBQUMsS0FBZSxFQUFFLENBQUM7UUFBaEJDLElBQUksR0FBTixLQUFlLENBQWJBLElBQUk7SUFDbEIsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RBLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUF5RzswQkFDckhGLElBQUksQ0FBQ0csS0FBSyxnRkFDUk4sbURBQUs7b0JBQ0pPLE1BQU0sRUFBQyxDQUFNO29CQUNiQyxTQUFTLEVBQUMsQ0FBTztvQkFDakJDLE1BQU0sRUFBRSxHQUFHO29CQUNYQyxHQUFHLEVBQUcsQ0FBZ0Isa0JBQWdCLE9BQWRQLElBQUksQ0FBQ1EsUUFBUTtvQkFDckNDLEdBQUcsRUFBRVgsZ0VBQVksQ0FBQ0UsSUFBSSxDQUFDRyxLQUFLLEVBQUVHLE1BQU0sQ0FBQyxHQUFHLEVBQUVJLEdBQUc7Ozs7Ozs7Ozs7O3dGQUlsRFQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTJJOztnR0FDdkpELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFnQztrQ0FDNUNGLElBQUksQ0FBQ1EsUUFBUSxnRkFDWFosNkRBQVk7NEJBQUNlLEtBQUssRUFBRVgsSUFBSSxDQUFDUSxRQUFROzs7Ozs7Ozs7OztnR0FHckNQLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFzQjtrQ0FDbENGLElBQUksQ0FBRVksV0FBVyxnRkFDZmhCLDZEQUFZOzRCQUFDZSxLQUFLLEVBQUVYLElBQUksQ0FBQ1ksV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakQsQ0FBQztLQTVCUWIsSUFBSTtBQThCYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyby50c3g/YzE2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJvR3JvcSB9IGZyb20gJy4uLy4uL2xpYi9zYW5pdHktcXVlcmllcyc7XG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IGltYWdlQnVpbGRlciB9IGZyb20gJy4uLy4uL2xpYi9zYW5pdHktY2xpZW50JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogSGVyb0dyb3E7XG59XG5cbmZ1bmN0aW9uIEhlcm8oeyBkYXRhIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBweC1nbG9iYWwtc20gaC1zY3JlZW4gc206aC1bNDAwcHhdIGJvcmRlci1iIGJvcmRlci1uZXV0cmFsLTgwMFwiPlxuICAgICAgICB7ZGF0YS5pbWFnZSAmJiBcbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgaGVpZ2h0PXs2ODB9XG4gICAgICAgICAgICBhbHQ9e2BDb3ZlciBJbWFnZSBmb3IgJHtkYXRhLmhlYWRsaW5lfWB9XG4gICAgICAgICAgICBzcmM9e2ltYWdlQnVpbGRlcihkYXRhLmltYWdlKS5oZWlnaHQoNjgwKS51cmwoKX1cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVszMjBweF0gbXgtNSBiZy13aGl0ZSBiYWNrZHJvcC1ibHVyLXNtIGRyb3Atc2hhZG93IGJvcmRlciBib3JkZXItd2hpdGUgYm9yZGVyLW9wYWNpdHktMjAgcHktNCBweC02IHJvdW5kZWQtMnhsIG92ZXJmbG93LWNsaXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtNXhsIGZvbnQtYm9sZCBkcm9wLXNoYWRvdyc+XG4gICAgICAgICAge2RhdGEuaGVhZGxpbmUgJiZcbiAgICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e2RhdGEuaGVhZGxpbmV9PjwvUG9ydGFibGVUZXh0PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTN4bCBkcm9wLXNoYWRvdyc+XG4gICAgICAgICAge2RhdGEuIHN1YkhlYWRsaW5lICYmXG4gICAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtkYXRhLnN1YkhlYWRsaW5lfT48L1BvcnRhYmxlVGV4dD5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXSwibmFtZXMiOlsiUG9ydGFibGVUZXh0IiwiSW1hZ2UiLCJpbWFnZUJ1aWxkZXIiLCJIZXJvIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImltYWdlIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaGVpZ2h0IiwiYWx0IiwiaGVhZGxpbmUiLCJzcmMiLCJ1cmwiLCJ2YWx1ZSIsInN1YkhlYWRsaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sections/hero.tsx\n");

/***/ })

});