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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/sanity-client */ \"./lib/sanity-client.ts\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SideNav(param) {\n    var siteSettings = param.siteSettings, navItems = param.navItems;\n    var _this = this;\n    _s();\n    console.log(navItems);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), navItemHover = ref[0], setNavItemHover = ref[1];\n    var onMouseEnter = function() {\n        setNavItemHover(true);\n    };\n    var onMouseLeave = function() {\n        setNavItemHover(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[350px] bg-slate-900\",\n        children: [\n            siteSettings.icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    height: 160,\n                    width: 300,\n                    src: (0,_lib_sanity_client__WEBPACK_IMPORTED_MODULE_3__.imageBuilder)(siteSettings.icon).height(680).url()\n                }, void 0, false, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            navItems && navItems.map(function(navItem) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mt-10 cursor-pointer px-6 py-3 \\n          \".concat(navItemHover ? 'bg-black bg-opacity-20' : '', \"\\n        \"),\n                    onMouseEnter: onMouseEnter,\n                    onMouseLeave: onMouseLeave,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(navItemHover ? 'text-primary-500' : '')\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pl-4\",\n                            children: navItem.title\n                        }, void 0, false, {\n                            fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/timothydenning/code/lostcreekgwmd-next/components/sideNav.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n}\n_s(SideNav, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = SideNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideNav);\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGVOYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUVGO0FBQ3FCOztTQU8xQ0csT0FBTyxDQUFDLEtBQWlDLEVBQUUsQ0FBQztRQUFsQ0MsWUFBWSxHQUFkLEtBQWlDLENBQS9CQSxZQUFZLEVBQUVDLFFBQVEsR0FBeEIsS0FBaUMsQ0FBakJBLFFBQVE7OztJQUN2Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVE7SUFDcEIsR0FBSyxDQUFtQ0wsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBL0NRLFlBQVksR0FBcUJSLEdBQWUsS0FBbENTLGVBQWUsR0FBSVQsR0FBZTtJQUV2RCxHQUFLLENBQUNVLFlBQVksR0FBRyxRQUN2QixHQUQ2QixDQUFDO1FBQzFCRCxlQUFlLENBQUMsSUFBSTtJQUN0QixDQUFDO0lBQ0QsR0FBSyxDQUFDRSxZQUFZLEdBQUcsUUFDdkIsR0FENkIsQ0FBQztRQUMxQkYsZUFBZSxDQUFDLEtBQUs7SUFDdkIsQ0FBQztJQUVELE1BQU0sNkVBQ0hHLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXdCOztZQUN0Q1QsWUFBWSxDQUFDVSxJQUFJLGdGQUNmRixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBSztzR0FDakJaLG1EQUFLO29CQUNKYyxNQUFNLEVBQUUsR0FBRztvQkFDWEMsS0FBSyxFQUFFLEdBQUc7b0JBQ1ZDLEdBQUcsRUFBRWYsZ0VBQVksQ0FBQ0UsWUFBWSxDQUFDVSxJQUFJLEVBQUVDLE1BQU0sQ0FBQyxHQUFHLEVBQUVHLEdBQUc7Ozs7Ozs7Ozs7O1lBSXpEYixRQUFRLElBQUlBLFFBQVEsQ0FBQ2MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLE9BQU87OEJBQy9CLE1BQ04sQ0FBQyw4REFETVIsQ0FBRztvQkFDRkMsU0FBUyxFQUNOLENBQ0Qsa0RBQStDLE1BQ2pELENBRElMLFlBQVksR0FBRyxDQUF3QiwwQkFBRyxDQUFFLEdBQUMsQ0FDakQ7b0JBQ0FFLFlBQVksRUFBRUEsWUFBWTtvQkFDMUJDLFlBQVksRUFBRUEsWUFBWTs7b0dBQ3pCQyxDQUFHOzRCQUFDQyxTQUFTLEVBQUcsR0FBeUMsT0FBdkNMLFlBQVksR0FBRyxDQUFrQixvQkFBRyxDQUFFOzs7Ozs7b0dBQ3hESSxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBTTtzQ0FBRU8sT0FBTyxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDLENBQUM7R0FwQ1FsQixPQUFPO0tBQVBBLE9BQU87QUFzQ2hCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlTmF2LnRzeD9hMDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29uUGlja2VyR3JvcSwgTmF2SXRlbUdyb3EsIFNpdGVTZXR0aW5nc0dyb3EgfSBmcm9tIFwiLi4vbGliL3Nhbml0eS1xdWVyaWVzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBpbWFnZUJ1aWxkZXIgfSBmcm9tICcuLi9saWIvc2FuaXR5LWNsaWVudCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNpdGVTZXR0aW5nczogU2l0ZVNldHRpbmdzR3JvcTtcbiAgbmF2SXRlbXM6IE5hdkl0ZW1Hcm9xW107XG59XG5cbmZ1bmN0aW9uIFNpZGVOYXYoeyBzaXRlU2V0dGluZ3MsIG5hdkl0ZW1zIH06IFByb3BzKSB7XG4gIGNvbnNvbGUubG9nKG5hdkl0ZW1zKTtcbiAgY29uc3QgW25hdkl0ZW1Ib3Zlciwgc2V0TmF2SXRlbUhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgc2V0TmF2SXRlbUhvdmVyKHRydWUpO1xuICB9XG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXROYXZJdGVtSG92ZXIoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bMzUwcHhdIGJnLXNsYXRlLTkwMCc+XG4gICAge3NpdGVTZXR0aW5ncy5pY29uICYmIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J20tNSc+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGhlaWdodD17MTYwfVxuICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgc3JjPXtpbWFnZUJ1aWxkZXIoc2l0ZVNldHRpbmdzLmljb24pLmhlaWdodCg2ODApLnVybCgpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIHtuYXZJdGVtcyAmJiBuYXZJdGVtcy5tYXAobmF2SXRlbSA9PlxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBgZmxleCBtdC0xMCBjdXJzb3ItcG9pbnRlciBweC02IHB5LTMgXG4gICAgICAgICAgJHtuYXZJdGVtSG92ZXIgPyAnYmctYmxhY2sgYmctb3BhY2l0eS0yMCcgOiAnJ31cbiAgICAgICAgYH0gICAgICAgIFxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlcn0gXG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake25hdkl0ZW1Ib3ZlciA/ICd0ZXh0LXByaW1hcnktNTAwJyA6ICcnfWB9Pnt9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNFwiPntuYXZJdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZU5hdjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltYWdlIiwiaW1hZ2VCdWlsZGVyIiwiU2lkZU5hdiIsInNpdGVTZXR0aW5ncyIsIm5hdkl0ZW1zIiwiY29uc29sZSIsImxvZyIsIm5hdkl0ZW1Ib3ZlciIsInNldE5hdkl0ZW1Ib3ZlciIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImRpdiIsImNsYXNzTmFtZSIsImljb24iLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsInVybCIsIm1hcCIsIm5hdkl0ZW0iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sideNav.tsx\n");

/***/ })

});