"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/AddProductButton.tsx":
/*!*****************************************!*\
  !*** ./components/AddProductButton.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_serverActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/serverActions */ \"(app-client)/./actions/serverActions.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AddProductButton() {\n    _s();\n    const [isPending, startTrasition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useTransition)();\n    const formData = new FormData();\n    formData.append(\"product\", \"Macbook Pro\");\n    formData.append(\"price\", \"1300\");\n    return(//plug the forData to addProduct as it needs data\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>startTrasition(()=>(0,_actions_serverActions__WEBPACK_IMPORTED_MODULE_2__.addProduct)(formData)),\n        className: \"fixed bottom-10 right-10 border bg\",\n        children: \"Add Product\"\n    }, void 0, false, {\n        fileName: \"/Users/humaidiridwan/Doshotz/Dev/Learning-Playground/ResfulAPI-Mock/components/AddProductButton.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this));\n}\n_s(AddProductButton, \"WTzRDURkj2puvTNflsAaV9Eg1SQ=\", false, function() {\n    return [\n        react__WEBPACK_IMPORTED_MODULE_1__.useTransition\n    ];\n});\n_c = AddProductButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddProductButton);\nvar _c;\n$RefreshReg$(_c, \"AddProductButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9BZGRQcm9kdWN0QnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRXFDO0FBQ2dCO0FBRXJELFNBQVNFOztJQUNQLE1BQU0sQ0FBQ0MsV0FBV0MsZUFBZSxHQUFHSixvREFBYUE7SUFFakQsTUFBTUssV0FBVyxJQUFJQztJQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFdBQVc7SUFDM0JGLFNBQVNFLE1BQU0sQ0FBQyxTQUFTO0lBRXpCLE9BQ0UsaURBQWlEO2tCQUNqRCw4REFBQ0M7UUFBT0MsU0FBUyxJQUFNTCxlQUFlLElBQU1ILGtFQUFVQSxDQUFDSTtRQUN2REssV0FBVTtrQkFBcUM7Ozs7OztBQUluRDtHQWRTUjs7UUFDNkJGLGdEQUFhQTs7O0tBRDFDRTtBQWdCVCwrREFBZUEsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRkUHJvZHVjdEJ1dHRvbi50c3g/OWQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYWRkUHJvZHVjdCB9IGZyb20gJy4uL2FjdGlvbnMvc2VydmVyQWN0aW9ucydcblxuZnVuY3Rpb24gQWRkUHJvZHVjdEJ1dHRvbigpIHtcbiAgY29uc3QgW2lzUGVuZGluZywgc3RhcnRUcmFzaXRpb25dID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3QnLCAnTWFjYm9vayBQcm8nKVxuICBmb3JtRGF0YS5hcHBlbmQoJ3ByaWNlJywgJzEzMDAnKVxuXG4gIHJldHVybiAoXG4gICAgLy9wbHVnIHRoZSBmb3JEYXRhIHRvIGFkZFByb2R1Y3QgYXMgaXQgbmVlZHMgZGF0YVxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc3RhcnRUcmFzaXRpb24oKCkgPT4gYWRkUHJvZHVjdChmb3JtRGF0YSkpfVxuICAgIGNsYXNzTmFtZT0nZml4ZWQgYm90dG9tLTEwIHJpZ2h0LTEwIGJvcmRlciBiZyc+XG4gICAgICBBZGQgUHJvZHVjdFxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFByb2R1Y3RCdXR0b25cbiJdLCJuYW1lcyI6WyJ1c2VUcmFuc2l0aW9uIiwiYWRkUHJvZHVjdCIsIkFkZFByb2R1Y3RCdXR0b24iLCJpc1BlbmRpbmciLCJzdGFydFRyYXNpdGlvbiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/AddProductButton.tsx\n"));

/***/ })

});