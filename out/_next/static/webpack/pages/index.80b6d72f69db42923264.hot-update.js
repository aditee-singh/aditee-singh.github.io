/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero/HeroStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Hero/HeroStyles.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LeftSection\": function() { return /* binding */ LeftSection; },\n/* harmony export */   \"CVLink\": function() { return /* binding */ CVLink; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar LeftSection = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"HeroStyles__LeftSection\",\n  componentId: \"pbjia3-0\"\n})([\"width:100%;@media \", \"{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media \", \"{width:100%;display:flex;flex-direction:column;margin:0 auto;}\"], function (props) {\n  return props.theme.breakpoints.sm;\n}, function (props) {\n  return props.theme.breakpoints.md;\n});\nvar CVLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({\n  displayName: \"HeroStyles__CVLink\",\n  componentId: \"pbjia3-1\"\n})([\"width:200px;height:50px;background:linear-gradient(135deg,#6e8efb,#a777e3);padding-top:2rem;padding-bottom:2rem;padding-left:7rem;padding-right:7rem;border-radius:50px;font-size:2.2rem;color:white;@media \", \"{width:80%;text-slign:center;}\"], function (props) {\n  return props.theme.breakpoints.sm;\n}); // export const CVLink = styled.a`\n// \tposition: relative;\n// \tdisplay: inline-block;\n// \tpadding: 1.2em 2em;\n// \ttext-decoration: none;\n// \ttext-align: center;\n// \tcursor: pointer;\n// \tuser-select: none;\n// \tcolor: white;\n// \t&::before {\n// \t\tcontent: 'GET CV';\n// \t\tposition: absolute;\n// \t\ttop: 0;\n// \t\tleft: 0;\n// \t\tbottom: 0;\n// \t\tright: 0;\n// \t\tbackground: linear-gradient(135deg, #6e8efb, #a777e3);\n// \t\tborder-radius: 4px;\n// \t\ttransition: box-shadow .5s ease, transform .2s ease; \n// \t\twill-change: transform;\n// \t\tbox-shadow: 0 2px 5px rgba(0, 0, 0, .2);\n// \t\ttransform:\n// \t\t\ttranslateY(var(--ty, 0))\n// \t\t\trotateX(var(--rx, 0))\n// \t\t\trotateY(var(--ry, 0))\n// \t\t\ttranslateZ(var(--tz, -12px));\n// \t}\n// \t&:hover::before {\n// \t\tbox-shadow: 0 5px 15px rgba(0, 0, 0, .3);\n// \t}\n// \t&::after {\n// \t\tposition: relative;\n// \t\tdisplay: inline-block;\n// \t\tcontent: attr(data-title);\n// \t\ttransition: transform .2s ease; \n// \t\tfont-weight: bold;\n// \t\tletter-spacing: .01em;\n// \t\twill-change: transform;\n// \t\ttransform:\n// \t\t\ttranslateY(var(--ty, 0))\n// \t\t\trotateX(var(--rx, 0))\n// \t\t\trotateY(var(--ry, 0));\n// \t}\n// }\n// body {\n// \tdisplay: flex;\n// \talign-items: center;\n// \tjustify-content: center;\n// \theight: 100vh;\n// \ttransform-style: preserve-3d;\n// \ttransform: perspective(800px);\n// `\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvU3R5bGVzLmpzPzNlNTUiXSwibmFtZXMiOlsiTGVmdFNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIm1kIiwiQ1ZMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxXQUFXLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFLQUViLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUZhLEVBU2IsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBVGEsQ0FBakI7QUFrQkEsSUFBTUMsTUFBTSxHQUFHTixtRUFBSDtBQUFBO0FBQUE7QUFBQSx1UEFXUixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FYUSxDQUFaLEMsQ0FpQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZXJvL0hlcm9TdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IExlZnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENWTGluayA9IHN0eWxlZC5hYFxuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZlOGVmYiwgI2E3NzdlMyk7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiA3cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiA3cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LXNsaWduOiBjZW50ZXI7XG4gIH1cbmBcblxuLy8gZXhwb3J0IGNvbnN0IENWTGluayA9IHN0eWxlZC5hYFxuLy8gXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vIFx0cGFkZGluZzogMS4yZW0gMmVtO1xuLy8gXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyBcdHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIFx0Y3Vyc29yOiBwb2ludGVyO1xuLy8gXHR1c2VyLXNlbGVjdDogbm9uZTtcbi8vIFx0Y29sb3I6IHdoaXRlO1xuXHRcbi8vIFx0Jjo6YmVmb3JlIHtcbi8vIFx0XHRjb250ZW50OiAnR0VUIENWJztcbi8vIFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyBcdFx0dG9wOiAwO1xuLy8gXHRcdGxlZnQ6IDA7XG4vLyBcdFx0Ym90dG9tOiAwO1xuLy8gXHRcdHJpZ2h0OiAwO1xuLy8gXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZThlZmIsICNhNzc3ZTMpO1xuLy8gXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcbi8vIFx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC41cyBlYXNlLCB0cmFuc2Zvcm0gLjJzIGVhc2U7IFxuLy8gXHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4vLyBcdFx0Ym94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuLy8gXHRcdHRyYW5zZm9ybTpcbi8vIFx0XHRcdHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKVxuLy8gXHRcdFx0cm90YXRlWCh2YXIoLS1yeCwgMCkpXG4vLyBcdFx0XHRyb3RhdGVZKHZhcigtLXJ5LCAwKSlcbi8vIFx0XHRcdHRyYW5zbGF0ZVoodmFyKC0tdHosIC0xMnB4KSk7XG4vLyBcdH1cblx0XG4vLyBcdCY6aG92ZXI6OmJlZm9yZSB7XG4vLyBcdFx0Ym94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIC4zKTtcbi8vIFx0fVxuXHRcbi8vIFx0Jjo6YWZ0ZXIge1xuLy8gXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vIFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyBcdFx0Y29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbi8vIFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7IFxuLy8gXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gXHRcdGxldHRlci1zcGFjaW5nOiAuMDFlbTtcbi8vIFx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuLy8gXHRcdHRyYW5zZm9ybTpcbi8vIFx0XHRcdHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKVxuLy8gXHRcdFx0cm90YXRlWCh2YXIoLS1yeCwgMCkpXG4vLyBcdFx0XHRyb3RhdGVZKHZhcigtLXJ5LCAwKSk7XG4vLyBcdH1cbi8vIH1cblxuLy8gYm9keSB7XG4vLyBcdGRpc3BsYXk6IGZsZXg7XG4vLyBcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyBcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gXHRoZWlnaHQ6IDEwMHZoO1xuLy8gXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuLy8gXHR0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KTtcbi8vIGBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Hero/HeroStyles.js\n");

/***/ })

});