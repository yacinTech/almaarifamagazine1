"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./lib/gtag.ts":
/*!*********************!*\
  !*** ./lib/gtag.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GA_MEASUREMENT_ID: () => (/* binding */ GA_MEASUREMENT_ID),\n/* harmony export */   pageview: () => (/* binding */ pageview)\n/* harmony export */ });\n// lib/gtag.ts\nconst GA_MEASUREMENT_ID = 'G-DL40NN5MDP'; // ضع ID الخاص بك هنا\n// إرسال صفحة مشاهدة\nconst pageview = (url)=>{\n    window.gtag('config', GA_MEASUREMENT_ID, {\n        page_path: url\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9ndGFnLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsY0FBYztBQUNQLE1BQU1BLG9CQUFvQixlQUFlLENBQUMscUJBQXFCO0FBRXRFLG9CQUFvQjtBQUNiLE1BQU1DLFdBQVcsQ0FBQ0M7SUFDdkJDLE9BQU9DLElBQUksQ0FBQyxVQUFVSixtQkFBbUI7UUFDdkNLLFdBQVdIO0lBQ2I7QUFDRixFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEVsIE1hYXRhb3VpIFlhc3NpbmVcXE9uZURyaXZlXFxEZXNrdG9wXFxuZXdtYWdhXFxsaWJcXGd0YWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgZ3RhZzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIGxpYi9ndGFnLnRzXHJcbmV4cG9ydCBjb25zdCBHQV9NRUFTVVJFTUVOVF9JRCA9ICdHLURMNDBOTjVNRFAnOyAvLyDYtti5IElEINin2YTYrtin2LUg2KjZgyDZh9mG2KdcclxuXHJcbi8vINil2LHYs9in2YQg2LXZgdit2Kkg2YXYtNin2YfYr9ipXHJcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gIHdpbmRvdy5ndGFnKCdjb25maWcnLCBHQV9NRUFTVVJFTUVOVF9JRCwge1xyXG4gICAgcGFnZV9wYXRoOiB1cmwsXHJcbiAgfSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJHQV9NRUFTVVJFTUVOVF9JRCIsInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/gtag.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"(pages-dir-node)/./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gtag */ \"(pages-dir-node)/./lib/gtag.ts\");\n// pages/_app.tsx\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            const handleRouteChange = {\n                \"MyApp.useEffect.handleRouteChange\": (url)=>{\n                    _lib_gtag__WEBPACK_IMPORTED_MODULE_4__.pageview(url);\n                }\n            }[\"MyApp.useEffect.handleRouteChange\"];\n            router.events.on('routeChangeComplete', handleRouteChange);\n            return ({\n                \"MyApp.useEffect\": ()=>{\n                    router.events.off('routeChangeComplete', handleRouteChange);\n                }\n            })[\"MyApp.useEffect\"];\n        }\n    }[\"MyApp.useEffect\"], [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                id: \"gtm-script\",\n                strategy: \"afterInteractive\",\n                dangerouslySetInnerHTML: {\n                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-WDJF95QL');`\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\El Maataoui Yassine\\\\OneDrive\\\\Desktop\\\\newmaga\\\\pages\\\\_app.tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                strategy: \"afterInteractive\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${_lib_gtag__WEBPACK_IMPORTED_MODULE_4__.GA_MEASUREMENT_ID}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\El Maataoui Yassine\\\\OneDrive\\\\Desktop\\\\newmaga\\\\pages\\\\_app.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                id: \"gtag-init\",\n                strategy: \"afterInteractive\",\n                dangerouslySetInnerHTML: {\n                    __html: `\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${_lib_gtag__WEBPACK_IMPORTED_MODULE_4__.GA_MEASUREMENT_ID}', {\n              page_path: window.location.pathname,\n            });\n          `\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\El Maataoui Yassine\\\\OneDrive\\\\Desktop\\\\newmaga\\\\pages\\\\_app.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\El Maataoui Yassine\\\\OneDrive\\\\Desktop\\\\newmaga\\\\pages\\\\_app.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUI7O0FBRWlCO0FBQ007QUFDUDtBQUNHO0FBRXJCLFNBQVNJLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDOUQsTUFBTUMsU0FBU04sc0RBQVNBO0lBRXhCRCxnREFBU0E7MkJBQUM7WUFDUixNQUFNUTtxREFBb0IsQ0FBQ0M7b0JBQ3pCTiwrQ0FBYSxDQUFDTTtnQkFDaEI7O1lBRUFGLE9BQU9JLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1Qko7WUFDeEM7bUNBQU87b0JBQ0xELE9BQU9JLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHVCQUF1Qkw7Z0JBQzNDOztRQUNGOzBCQUFHO1FBQUNELE9BQU9JLE1BQU07S0FBQztJQUVsQixxQkFDRTs7MEJBQ0EsOERBQUNULG9EQUFNQTtnQkFDUFksSUFBRztnQkFDSEMsVUFBUztnQkFDVEMseUJBQXlCO29CQUN2QkMsUUFBUSxDQUFDOzs7O2tFQUltRCxDQUFDO2dCQUMvRDs7Ozs7OzBCQU1FLDhEQUFDZixvREFBTUE7Z0JBQ0xhLFVBQVM7Z0JBQ1RHLEtBQUssQ0FBQyw0Q0FBNEMsRUFBRWYsd0RBQXNCLEVBQUU7Ozs7OzswQkFFOUUsOERBQUNELG9EQUFNQTtnQkFDTFksSUFBRztnQkFDSEMsVUFBUztnQkFDVEMseUJBQXlCO29CQUN2QkMsUUFBUSxDQUFDOzs7OzRCQUlTLEVBQUVkLHdEQUFzQixDQUFDOzs7VUFHM0MsQ0FBQztnQkFDSDs7Ozs7OzBCQUVGLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxFbCBNYWF0YW91aSBZYXNzaW5lXFxPbmVEcml2ZVxcRGVza3RvcFxcbmV3bWFnYVxccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL19hcHAudHN4XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCc7XHJcbmltcG9ydCAqIGFzIGd0YWcgZnJvbSAnLi4vbGliL2d0YWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgZ3RhZy5wYWdldmlldyh1cmwpO1xyXG4gICAgfTtcclxuXHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPFNjcmlwdFxyXG4gICAgaWQ9XCJndG0tc2NyaXB0XCJcclxuICAgIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiXHJcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICBfX2h0bWw6IGAoZnVuY3Rpb24odyxkLHMsbCxpKXt3W2xdPXdbbF18fFtdO3dbbF0ucHVzaCh7J2d0bS5zdGFydCc6XHJcbiAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSxldmVudDonZ3RtLmpzJ30pO3ZhciBmPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0sXHJcbiAgICAgICAgICBqPWQuY3JlYXRlRWxlbWVudChzKSxkbD1sIT0nZGF0YUxheWVyJz8nJmw9JytsOicnO2ouYXN5bmM9dHJ1ZTtqLnNyYz1cclxuICAgICAgICAgICdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JytpK2RsO2YucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaixmKTtcclxuICAgICAgICAgIH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnZGF0YUxheWVyJywnR1RNLVdESkY5NVFMJyk7YCxcclxuICAgIH19XHJcbiAgLz5cclxuXHJcblxyXG5cclxuICAgICAgey8qINiq2K3ZhdmK2YQg2LPZg9ix2KjYqiBHQSAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiXHJcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke2d0YWcuR0FfTUVBU1VSRU1FTlRfSUR9YH1cclxuICAgICAgLz5cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIGlkPVwiZ3RhZy1pbml0XCJcclxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cclxuICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJyR7Z3RhZy5HQV9NRUFTVVJFTUVOVF9JRH0nLCB7XHJcbiAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYCxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJTY3JpcHQiLCJndGFnIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInBhZ2V2aWV3IiwiZXZlbnRzIiwib24iLCJvZmYiLCJpZCIsInN0cmF0ZWd5IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJzcmMiLCJHQV9NRUFTVVJFTUVOVF9JRCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();