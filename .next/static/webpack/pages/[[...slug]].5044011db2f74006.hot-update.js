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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/sanity-client */ \"./lib/sanity-client.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(param) {\n    var siteSettings = param.siteSettings, navItems = param.navItems, children = param.children;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), navItemHover = ref[0], setNavItemHover = ref[1];\n    var onMouseEnter = function() {\n        setNavItemHover(true);\n    };\n    var onMouseLeave = function() {\n        setNavItemHover(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[350px] bg-slate-800\",\n                children: [\n                    siteSettings.icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            height: 160,\n                            width: 300,\n                            src: (0,_lib_sanity_client__WEBPACK_IMPORTED_MODULE_2__.imageBuilder)(siteSettings.icon).height(680).url()\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    navItems && navItems.map(function(navItem) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mt-10 cursor-pointer px-6 py-3 \".concat(navItemHover ? 'bg-black bg-opacity-20' : ''),\n                            onMouseEnter: onMouseEnter,\n                            onMouseLeave: onMouseLeave,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pr-4\",\n                                    children: navItem.icon\n                                }, void 0, false, {\n                                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: navItem.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                className: \"w-full min-h-screen\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/layout.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this));\n};\n_s(Layout, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRThCO0FBQ3FCO0FBQ25COztBQVFqQixRQUFRLENBQUNHLE1BQU0sQ0FBQyxLQUEyQyxFQUFFLENBQUM7UUFBNUNDLFlBQVksR0FBZCxLQUEyQyxDQUF6Q0EsWUFBWSxFQUFFQyxRQUFRLEdBQXhCLEtBQTJDLENBQTNCQSxRQUFRLEVBQUVDLFFBQVEsR0FBbEMsS0FBMkMsQ0FBakJBLFFBQVE7OztJQUMvRCxHQUFLLENBQW1DSixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEvQ0ssWUFBWSxHQUFxQkwsR0FBZSxLQUFsQ00sZUFBZSxHQUFJTixHQUFlO0lBRXZELEdBQUssQ0FBQ08sWUFBWSxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7UUFDMUJELGVBQWUsQ0FBQyxJQUFJO0lBQ3RCLENBQUM7SUFDRCxHQUFLLENBQUNFLFlBQVksR0FBRyxRQUN2QixHQUQ2QixDQUFDO1FBQzFCRixlQUFlLENBQUMsS0FBSztJQUN2QixDQUFDO0lBRUQsTUFBTSw2RUFDSEcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBTTs7d0ZBQ2xCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBd0I7O29CQUN0Q1IsWUFBWSxDQUFDUyxJQUFJLGdGQUNmRixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBSzs4R0FDakJaLG1EQUFLOzRCQUNKYyxNQUFNLEVBQUUsR0FBRzs0QkFDWEMsS0FBSyxFQUFFLEdBQUc7NEJBQ1ZDLEdBQUcsRUFBRWYsZ0VBQVksQ0FBQ0csWUFBWSxDQUFDUyxJQUFJLEVBQUVDLE1BQU0sQ0FBQyxHQUFHLEVBQUVHLEdBQUc7Ozs7Ozs7Ozs7O29CQUl6RFosUUFBUSxJQUFJQSxRQUFRLENBQUNhLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxPQUFPO3NDQUMvQixNQUNSLENBQUMsOERBRFFSLENBQUc7NEJBQ0ZDLFNBQVMsRUFBRyxDQUFvQyxzQ0FBK0MsT0FBN0NMLFlBQVksR0FBRyxDQUF3QiwwQkFBRyxDQUFFOzRCQUM5RkUsWUFBWSxFQUFFQSxZQUFZOzRCQUMxQkMsWUFBWSxFQUFFQSxZQUFZOzs0R0FDekJDLENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUFNOzhDQUFFTyxPQUFPLENBQUNOLElBQUk7Ozs7Ozs0R0FDbENGLENBQUc7OENBQUVRLE9BQU8sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJdEJULENBQUc7Z0JBQUNVLEVBQUUsRUFBQyxDQUFNO2dCQUFDVCxTQUFTLEVBQUMsQ0FBcUI7MEJBQzNDTixRQUFROzs7Ozs7Ozs7Ozs7QUFJakIsQ0FBQztHQXJDdUJILE1BQU07S0FBTkEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC50c3g/YWYyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZJdGVtR3JvcSwgU2l0ZVNldHRpbmdzR3JvcSB9IGZyb20gJy4uL2xpYi9zYW5pdHktcXVlcmllcyc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICcuL3Rvb2xiYXInO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgaW1hZ2VCdWlsZGVyIH0gZnJvbSAnLi4vbGliL3Nhbml0eS1jbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNpdGVTZXR0aW5nczogU2l0ZVNldHRpbmdzR3JvcTtcbiAgbmF2SXRlbXM6IE5hdkl0ZW1Hcm9xW107XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudFtdIHwgSlNYLkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IHNpdGVTZXR0aW5ncywgbmF2SXRlbXMsIGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIGNvbnN0IFtuYXZJdGVtSG92ZXIsIHNldE5hdkl0ZW1Ib3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25Nb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHNldE5hdkl0ZW1Ib3Zlcih0cnVlKTtcbiAgfVxuICBjb25zdCBvbk1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0TmF2SXRlbUhvdmVyKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bMzUwcHhdIGJnLXNsYXRlLTgwMCc+XG4gICAgICB7c2l0ZVNldHRpbmdzLmljb24gJiYgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLTUnPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgaGVpZ2h0PXsxNjB9XG4gICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgc3JjPXtpbWFnZUJ1aWxkZXIoc2l0ZVNldHRpbmdzLmljb24pLmhlaWdodCg2ODApLnVybCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAge25hdkl0ZW1zICYmIG5hdkl0ZW1zLm1hcChuYXZJdGVtID0+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBtdC0xMCBjdXJzb3ItcG9pbnRlciBweC02IHB5LTMgJHtuYXZJdGVtSG92ZXIgPyAnYmctYmxhY2sgYmctb3BhY2l0eS0yMCcgOiAnJ31gfSAgICAgICAgXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9IFxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHItNCc+e25hdkl0ZW0uaWNvbn08L2Rpdj5cbiAgICAgICAgICA8ZGl2PntuYXZJdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLXNjcmVlblwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlQnVpbGRlciIsInVzZVN0YXRlIiwiTGF5b3V0Iiwic2l0ZVNldHRpbmdzIiwibmF2SXRlbXMiLCJjaGlsZHJlbiIsIm5hdkl0ZW1Ib3ZlciIsInNldE5hdkl0ZW1Ib3ZlciIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImRpdiIsImNsYXNzTmFtZSIsImljb24iLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsInVybCIsIm1hcCIsIm5hdkl0ZW0iLCJ0aXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ })

});