webpackHotUpdate("static/development/pages/smartbrain.js",{

/***/ "./src/pages/smartbrain.js":
/*!*********************************!*\
  !*** ./src/pages/smartbrain.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
var _jsxFileName = "/Users/fa0s/Desktop/Projects/portfolio-v3/src/pages/smartbrain.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function About() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-col md:flex-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "md:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, [{
    project: "SmartBrain",
    body: "SmartBrain is a full stack application where users can submit images of faces to Clarifai's machine learning API which will then draw a border around the detected face. The server handles authentication, authorization, includes encryption along with querying a PostgreSQL databse using async/await and promises.",
    demo: "Live Demo",
    demoinfo: "Use demo@demo.com/demo to avoid creating account!",
    demolink: "http://smartbrain-face-reg.herokuapp.com/"
  }].map(function (section) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
      className: "font-extrabold mb-3 text-xl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, section.project), __jsx("p", {
      className: "mb-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, section.body), __jsx("p", {
      className: "font-extrabold mb-3 text-xl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, section.demo), __jsx("p", {
      className: "mb-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, section.demoinfo));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=smartbrain.js.6953857185cd24d9b82a.hot-update.js.map