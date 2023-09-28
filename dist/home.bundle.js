/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pizza-main.jpg */ "./src/images/pizza-main.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Caveat&family=Delicious+Handrawn&family=Oswald&family=Roboto&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Oswald&family=Roboto&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Fjalla+One&family=Oswald&family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
    display: flex;
    flex: auto;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    min-width: 570px;
}

.header {
    display: flex;
    height: 7rem;
    justify-content: space-between;
    padding-left: 5rem;
    align-items: center;
    font-family: 'Croissant One', cursive;
    font-size: 32px;
    color: aliceblue;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    border-bottom: 1px rgb(139, 139, 139) solid;
}

.tab-container {
    display: flex; 
    flex-wrap: nowrap; 
    height: 100%;
    padding-right: 1rem;
}

.tab {
    outline: none;
    background: none;
    color: aliceblue;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    border: none;
    margin: 0rem 1rem;
    cursor: pointer;
}

.main {
}

.footer {
    display: flex;
    height: 3rem;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: aliceblue;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    border-top: 1px rgb(139, 139, 139) solid;
}

.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    margin-bottom: 15.5rem;
}

.menu {
    background-color: rgb(0, 0, 0, 0.75);
}

.menuContainer {
    display: grid;
    margin: 2rem 7rem;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
}

.pizzaContainer {
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 0.2fr;
    max-width: 30rem;
    min-width: 30rem;
    color: aliceblue;
    border-radius: 1rem;
    text-align: center;
    width: fit-content;
}

@media (max-width: 1200px) {
    .menuContainer {
        grid-template-columns: 1fr; /* Switch to one column on smaller screens */
        margin: 0;
    }
}

.pizzaImg {
    justify-self: center;
    align-self: center;
    height: 11rem;
    grid-row: 1 / 4;
    grid-column: 1;
}

.pizzaName {
    font-family: 'Fjalla One';
    color: rgb(228, 228, 228);
    font-size: 26px;
    align-self: center;
}

.pizzaDescription {
    font-family: 'Roboto', sans-serif;
    color: rgb(201, 201, 201);
    margin-top: -0.3rem;
}

.pizzaOrderBtn {
    font-family: 'Roboto', sans-serif;
    color: aliceblue;
    grid-column: 2 / 3;
    background: none;
    background-color: rgb(82, 81, 81);
    width: 5rem;
    border: 1px solid rgb(255, 255, 255);
    justify-self: right;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 16px;
    margin-top: -1.5rem;
}

.slogan {
    font-family: 'Fjalla One', sans-serif;
    text-align: center;
    color: aliceblue;
    text-shadow: 50%;
    font-size: 64px;
}

.orderNowBtn {
    font-family: 'Roboto', sans-serif;
    border: 1px solid white;
    font-size: 24px;
    border-radius: 1rem;
    padding: 1rem;
    color: aliceblue;
    background: linear-gradient(to right, rgb(58, 58, 58, 0.9), rgb(82, 82, 82, 0.9));
    cursor: pointer;
}

/* About Section */

.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.75);
    padding: 3rem;
    border-radius: 1rem;
    padding-bottom: 9.5rem;
}

.info-heading {
    font-family: 'Croissant One', cursive;
    font-size: 44px;
    color: rgb(217, 227, 235);
    margin-top: -0.8rem;
}

.info-container {
    color: aliceblue;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(54, 54, 54, 0.5);
    width: fit-content;
    border-radius: 1rem;
    padding: 1rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.form-input {
    background-color: transparent;
    font-family: 'Roboto', sans-serif;
    border: none;
    border-bottom: 1px grey solid;
    padding: 10px; /* Add padding for better visual appearance */
    width: 100%;
    resize: none;
}

.message-us {
    font-family: 'Croissant One', cursive;
    border-bottom: 1px white solid;
    font-size: 22px;
    margin-top: 3rem;
    color: rgb(201, 201, 201);
}

.submit-button {
    color: aliceblue;
    background: none;
    border: 1px white solid;
    border-radius: 1rem;
    width: 5rem;
    padding: 0.4rem 0rem;
    margin-top: 1rem;
    align-self: center;
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Delicious+Handrawn&family=Oswald&family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Oswald&family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Fjalla+One&family=Oswald&family=Roboto&display=swap');\n\nhtml, body {\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('./images/pizza-main.jpg');\n    min-width: 570px;\n}\n\n.header {\n    display: flex;\n    height: 7rem;\n    justify-content: space-between;\n    padding-left: 5rem;\n    align-items: center;\n    font-family: 'Croissant One', cursive;\n    font-size: 32px;\n    color: aliceblue;\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n    border-bottom: 1px rgb(139, 139, 139) solid;\n}\n\n.tab-container {\n    display: flex; \n    flex-wrap: nowrap; \n    height: 100%;\n    padding-right: 1rem;\n}\n\n.tab {\n    outline: none;\n    background: none;\n    color: aliceblue;\n    height: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    border: none;\n    margin: 0rem 1rem;\n    cursor: pointer;\n}\n\n.main {\n}\n\n.footer {\n    display: flex;\n    height: 3rem;\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n    font-family: 'Roboto', sans-serif;\n    color: aliceblue;\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n    border-top: 1px rgb(139, 139, 139) solid;\n}\n\n.home {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 10rem;\n    margin-bottom: 15.5rem;\n}\n\n.menu {\n    background-color: rgb(0, 0, 0, 0.75);\n}\n\n.menuContainer {\n    display: grid;\n    margin: 2rem 7rem;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n}\n\n.pizzaContainer {\n    padding: 3rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 0.2fr;\n    max-width: 30rem;\n    min-width: 30rem;\n    color: aliceblue;\n    border-radius: 1rem;\n    text-align: center;\n    width: fit-content;\n}\n\n@media (max-width: 1200px) {\n    .menuContainer {\n        grid-template-columns: 1fr; /* Switch to one column on smaller screens */\n        margin: 0;\n    }\n}\n\n.pizzaImg {\n    justify-self: center;\n    align-self: center;\n    height: 11rem;\n    grid-row: 1 / 4;\n    grid-column: 1;\n}\n\n.pizzaName {\n    font-family: 'Fjalla One';\n    color: rgb(228, 228, 228);\n    font-size: 26px;\n    align-self: center;\n}\n\n.pizzaDescription {\n    font-family: 'Roboto', sans-serif;\n    color: rgb(201, 201, 201);\n    margin-top: -0.3rem;\n}\n\n.pizzaOrderBtn {\n    font-family: 'Roboto', sans-serif;\n    color: aliceblue;\n    grid-column: 2 / 3;\n    background: none;\n    background-color: rgb(82, 81, 81);\n    width: 5rem;\n    border: 1px solid rgb(255, 255, 255);\n    justify-self: right;\n    border-radius: 1rem;\n    cursor: pointer;\n    font-size: 16px;\n    margin-top: -1.5rem;\n}\n\n.slogan {\n    font-family: 'Fjalla One', sans-serif;\n    text-align: center;\n    color: aliceblue;\n    text-shadow: 50%;\n    font-size: 64px;\n}\n\n.orderNowBtn {\n    font-family: 'Roboto', sans-serif;\n    border: 1px solid white;\n    font-size: 24px;\n    border-radius: 1rem;\n    padding: 1rem;\n    color: aliceblue;\n    background: linear-gradient(to right, rgb(58, 58, 58, 0.9), rgb(82, 82, 82, 0.9));\n    cursor: pointer;\n}\n\n/* About Section */\n\n.about {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(0, 0, 0, 0.75);\n    padding: 3rem;\n    border-radius: 1rem;\n    padding-bottom: 9.5rem;\n}\n\n.info-heading {\n    font-family: 'Croissant One', cursive;\n    font-size: 44px;\n    color: rgb(217, 227, 235);\n    margin-top: -0.8rem;\n}\n\n.info-container {\n    color: aliceblue;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(54, 54, 54, 0.5);\n    width: fit-content;\n    border-radius: 1rem;\n    padding: 1rem;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.form-input {\n    background-color: transparent;\n    font-family: 'Roboto', sans-serif;\n    border: none;\n    border-bottom: 1px grey solid;\n    padding: 10px; /* Add padding for better visual appearance */\n    width: 100%;\n    resize: none;\n}\n\n.message-us {\n    font-family: 'Croissant One', cursive;\n    border-bottom: 1px white solid;\n    font-size: 22px;\n    margin-top: 3rem;\n    color: rgb(201, 201, 201);\n}\n\n.submit-button {\n    color: aliceblue;\n    background: none;\n    border: 1px white solid;\n    border-radius: 1rem;\n    width: 5rem;\n    padding: 0.4rem 0rem;\n    margin-top: 1rem;\n    align-self: center;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
function About() {
    // Main
    const main = document.querySelector(".main");
    main.classList.add("about");

    // Create a heading for the contact information
    const heading = document.createElement('h3');
    heading.classList.add('info-heading');
    heading.textContent = "Contact us"; // Use textContent to set text
    main.appendChild(heading);

    // Create a container for contact information
    const infoContainer = document.createElement('div');
    infoContainer.classList.add("info-container");

    // Create paragraphs for contact information
    const location = document.createElement('p');
    location.classList.add('location');
    location.textContent = "📍 123 Paradise Street"; // Use textContent to set text
    infoContainer.appendChild(location);

    const times = document.createElement('p');
    times.classList.add('times');
    times.textContent = "🕒 Mon-Thurs: 8am-8pm, Fri-Sun: 8am-11pm"; // Use textContent to set text
    infoContainer.appendChild(times);

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('phone-number');
    phoneNumber.textContent = "☎️ (222)-888 5555"; // Use textContent to set text
    infoContainer.appendChild(phoneNumber);

    // Create a heading for the contact form
    const messageUs = document.createElement('h4');
    messageUs.classList.add('message-us');
    messageUs.textContent = "Message us"; // Use textContent to set text
    infoContainer.appendChild(messageUs);

    // Create a form for contacting
    const emailForm = document.createElement('form');
    emailForm.classList.add('contact-form');

    // Create input fields for the form
    const fullNameInput = document.createElement('input');
    fullNameInput.classList.add('form-input');
    fullNameInput.setAttribute('placeholder', 'Full Name'); // Use setAttribute to set placeholder
    emailForm.appendChild(fullNameInput);

    const emailInput = document.createElement('input');
    emailInput.classList.add('form-input');
    emailInput.setAttribute('placeholder', 'Email'); // Use setAttribute to set placeholder
    emailForm.appendChild(emailInput);

    const messageInput = document.createElement('textarea');
    messageInput.classList.add('form-input');
    messageInput.setAttribute('placeholder', 'Type your message...'); // Use setAttribute to set placeholder
    emailForm.appendChild(messageInput);

    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.textContent = "Submit"; // Use textContent to set text
    emailForm.appendChild(submitButton);

    // Add the form to the container
    infoContainer.appendChild(emailForm);

    // Add the info container to the main element
    main.appendChild(infoContainer);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function Home() {
    const main = document.querySelector(".main");
    main.classList.add("home");

    const slogan = document.createElement('p');
    slogan.classList.add("slogan");
    slogan.innerHTML = "Delicious Slices, Memorable Bites <br> Your Pizza Paradise Awaits!";

    const orderNowBtn = document.createElement('button'); 
    orderNowBtn.addEventListener('click', () => (0,___WEBPACK_IMPORTED_MODULE_0__.switchTab)("menu"));
    orderNowBtn.classList.add("orderNowBtn");
    orderNowBtn.innerHTML = "Order Now"
    
    main.appendChild(slogan);
    main.appendChild(orderNowBtn);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switchTab: () => (/* binding */ switchTab)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");





function initialize() {
    clear();

    const header = document.createElement('header');
    const tabContainer = document.createElement('div');

    const tabHome = document.createElement('button');
    tabHome.addEventListener('click', () => switchTab("home"));
    const tabMenu = document.createElement('button');
    tabMenu.addEventListener('click', () => switchTab("menu"));
    const tabAbout = document.createElement('button');
    tabAbout.addEventListener('click', () => switchTab("about"));

    const main = document.createElement('div'); 
    const footer = document.createElement('footer');
    
    header.classList.add("header");
    tabContainer.classList.add("tab-container")
    tabHome.classList.add("tab");
    tabMenu.classList.add("tab");
    tabAbout.classList.add("tab");
    main.classList.add("main");
    footer.classList.add("footer");

    // Header
    header.innerHTML = "Pizza Paradise";

    // Tabs
    tabHome.innerHTML = "Home";
    tabMenu.innerHTML = "Menu";
    tabAbout.innerHTML = "About";

    tabContainer.appendChild(tabHome);
    tabContainer.appendChild(tabMenu);
    tabContainer.appendChild(tabAbout);

    // Footer
    footer.innerHTML = "Copyright @ Jared Price";

    document.body.appendChild(header);
    header.appendChild(tabContainer);
    document.body.appendChild(main);
    document.body.appendChild(footer);
}

function switchTab(page) {
    initialize();
    if (page === "home") {
        (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
    if (page === "menu") {
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
    if (page === "about") {
        (0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
}

function clear() {
    document.body.innerHTML = '';
}

// Default
initialize();
(0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
function Menu() {
    const main = document.querySelector(".main");
    main.classList.add("menu");

    const menuContainer = document.createElement('div');
    menuContainer.classList.add("menuContainer");
    main.appendChild(menuContainer);

    // Create pizzaContainer, pizzaImg, pizzaName, and pizzaDescription elements inside the function
    function createPizzaElement(imageSrc, pizzaNameText, pizzaDescriptionText) {
        const pizzaContainer = document.createElement('div');
        pizzaContainer.classList.add("pizzaContainer");

        const pizzaImg = document.createElement('img');
        pizzaImg.classList.add("pizzaImg");
        pizzaImg.src = imageSrc; // Set the image source

        const pizzaName = document.createElement('h3');
        pizzaName.classList.add("pizzaName");
        pizzaName.innerHTML = pizzaNameText;

        const pizzaDescription = document.createElement('p');
        pizzaDescription.classList.add("pizzaDescription");
        pizzaDescription.innerHTML = pizzaDescriptionText;

        const pizzaOrderBtn = document.createElement('button');
        pizzaOrderBtn.classList.add("pizzaOrderBtn");
        pizzaOrderBtn.innerHTML = "Order"

        appendContainer(pizzaContainer, pizzaImg, pizzaName, pizzaDescription, pizzaOrderBtn);
    }

    // Margherita
    createPizzaElement('../src/images/pizzas/pizza1.png', "Margherita", "Plain Tomato Base with Mozarella Cheese");

    // Tomato & Mushroom
    createPizzaElement('../src/images/pizzas/pizza2.png', "Tomato & Mushroom", "Tomato, Olives and Sliced Tomatoes");

    // Pepperoni
    createPizzaElement('../src/images/pizzas/pizza3.png', "Pepperoni", "Classic Pepperoni with Mozarella Cheese");

    // Meat Supreme
    createPizzaElement('../src/images/pizzas/pizza4.png', "B-T-O", "Bacon, Tomato and Olives");

    // Hawaain
    createPizzaElement('../src/images/pizzas/pizza5.png', "Hawaiian", "Yes, Pineapple Belongs on Pizza");

    // Seafood
    createPizzaElement('../src/images/pizzas/pizza6.png', "Seafood", "Arrr, a Pirates Treat for Me!");

    // Vegetarian
    createPizzaElement('../src/images/pizzas/pizza7.png', "Vegetarian", "Red Onions, Sliced Tomatoes, Olives, and Broccoli");

    // Mediterranean
    createPizzaElement('../src/images/pizzas/pizza8.png', "Mediterranean", "Salty feta, Peppery basil, Briny Kalamata olives, and Tangy sundried tomatoes");
    
    // Mexican
    createPizzaElement('../src/images/pizzas/pizza9.png', "Mexican", "Salami and Red Hot Chilli Peppers! 🎵");

    
    function appendContainer(container, img, name, description, button) {
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(button);
        menuContainer.appendChild(container);
    }
}

/***/ }),

/***/ "./src/images/pizza-main.jpg":
/*!***********************************!*\
  !*** ./src/images/pizza-main.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91fb797bc550d9899bb5.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"home": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwwS0FBMEs7QUFDMUssK0xBQStMO0FBQy9MLGlOQUFpTjtBQUNqTix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLG1DQUFtQztBQUNwSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssd0JBQXdCLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksdUJBQXVCLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyw0SkFBNEoseUpBQXlKLDJLQUEySyxnQkFBZ0Isb0JBQW9CLGlCQUFpQiw2QkFBNkIsZ0JBQWdCLGlCQUFpQiw0R0FBNEcsdUJBQXVCLEdBQUcsYUFBYSxvQkFBb0IsbUJBQW1CLHFDQUFxQyx5QkFBeUIsMEJBQTBCLDRDQUE0QyxzQkFBc0IsdUJBQXVCLDBFQUEwRSxrREFBa0QsR0FBRyxvQkFBb0IscUJBQXFCLHlCQUF5QixtQkFBbUIsMEJBQTBCLEdBQUcsVUFBVSxvQkFBb0IsdUJBQXVCLHVCQUF1QixtQkFBbUIsd0NBQXdDLHNCQUFzQixtQkFBbUIsd0JBQXdCLHNCQUFzQixHQUFHLFdBQVcsR0FBRyxhQUFhLG9CQUFvQixtQkFBbUIsOEJBQThCLDBCQUEwQixzQkFBc0Isd0NBQXdDLHVCQUF1QiwwRUFBMEUsK0NBQStDLEdBQUcsV0FBVyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsd0JBQXdCLDZCQUE2QixHQUFHLFdBQVcsMkNBQTJDLEdBQUcsb0JBQW9CLG9CQUFvQix3QkFBd0IsNENBQTRDLDRCQUE0QixHQUFHLHFCQUFxQixvQkFBb0Isb0JBQW9CLHFDQUFxQyx3Q0FBd0MsdUJBQXVCLHVCQUF1Qix1QkFBdUIsMEJBQTBCLHlCQUF5Qix5QkFBeUIsR0FBRyxnQ0FBZ0Msc0JBQXNCLHNDQUFzQyxpRUFBaUUsT0FBTyxHQUFHLGVBQWUsMkJBQTJCLHlCQUF5QixvQkFBb0Isc0JBQXNCLHFCQUFxQixHQUFHLGdCQUFnQixnQ0FBZ0MsZ0NBQWdDLHNCQUFzQix5QkFBeUIsR0FBRyx1QkFBdUIsd0NBQXdDLGdDQUFnQywwQkFBMEIsR0FBRyxvQkFBb0Isd0NBQXdDLHVCQUF1Qix5QkFBeUIsdUJBQXVCLHdDQUF3QyxrQkFBa0IsMkNBQTJDLDBCQUEwQiwwQkFBMEIsc0JBQXNCLHNCQUFzQiwwQkFBMEIsR0FBRyxhQUFhLDRDQUE0Qyx5QkFBeUIsdUJBQXVCLHVCQUF1QixzQkFBc0IsR0FBRyxrQkFBa0Isd0NBQXdDLDhCQUE4QixzQkFBc0IsMEJBQTBCLG9CQUFvQix1QkFBdUIsd0ZBQXdGLHNCQUFzQixHQUFHLG1DQUFtQyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsMkNBQTJDLG9CQUFvQiwwQkFBMEIsNkJBQTZCLEdBQUcsbUJBQW1CLDRDQUE0QyxzQkFBc0IsZ0NBQWdDLDBCQUEwQixHQUFHLHFCQUFxQix1QkFBdUIsd0NBQXdDLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQiw4Q0FBOEMseUJBQXlCLDBCQUEwQixvQkFBb0IsR0FBRyxtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsR0FBRyxpQkFBaUIsb0NBQW9DLHdDQUF3QyxtQkFBbUIsb0NBQW9DLHFCQUFxQixnRUFBZ0UsbUJBQW1CLEdBQUcsaUJBQWlCLDRDQUE0QyxxQ0FBcUMsc0JBQXNCLHVCQUF1QixnQ0FBZ0MsR0FBRyxvQkFBb0IsdUJBQXVCLHVCQUF1Qiw4QkFBOEIsMEJBQTBCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLHlCQUF5QixzQkFBc0IsR0FBRyxtQkFBbUI7QUFDMXZPO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDeE8xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRThCOztBQUVmO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsNENBQVM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnNCO0FBQ0k7QUFDQTtBQUNFOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxRQUFRLGlEQUFJO0FBQ1o7QUFDQTtBQUNBLFFBQVEsaURBQUk7QUFDWjtBQUNBO0FBQ0EsUUFBUSxrREFBSztBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBSzs7Ozs7Ozs7Ozs7Ozs7QUNyRVU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcGl6emEtbWFpbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhdmVhdCZmYW1pbHk9RGVsaWNpb3VzK0hhbmRyYXduJmZhbWlseT1Pc3dhbGQmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQmZmFtaWx5PUNyb2lzc2FudCtPbmUmZmFtaWx5PURlbGljaW91cytIYW5kcmF3biZmYW1pbHk9T3N3YWxkJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0JmZhbWlseT1Dcm9pc3NhbnQrT25lJmZhbWlseT1EZWxpY2lvdXMrSGFuZHJhd24mZmFtaWx5PUZqYWxsYStPbmUmZmFtaWx5PU9zd2FsZCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNjUpLCByZ2JhKDAsIDAsIDAsIDAuNjUpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIG1pbi13aWR0aDogNTcwcHg7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA3cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0Nyb2lzc2FudCBPbmUnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYigxMzksIDEzOSwgMTM5KSBzb2xpZDtcbn1cblxuLnRhYi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtd3JhcDogbm93cmFwOyBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLnRhYiB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMHJlbSAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW4ge1xufVxuXG4uZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpO1xuICAgIGJvcmRlci10b3A6IDFweCByZ2IoMTM5LCAxMzksIDEzOSkgc29saWQ7XG59XG5cbi5ob21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNS41cmVtO1xufVxuXG4ubWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4ubWVudUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW46IDJyZW0gN3JlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnBpenphQ29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAwLjJmcjtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIG1pbi13aWR0aDogMzByZW07XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAubWVudUNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBTd2l0Y2ggdG8gb25lIGNvbHVtbiBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuLnBpenphSW1nIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMXJlbTtcbiAgICBncmlkLXJvdzogMSAvIDQ7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG59XG5cbi5waXp6YU5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiAnRmphbGxhIE9uZSc7XG4gICAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ucGl6emFEZXNjcmlwdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZ2IoMjAxLCAyMDEsIDIwMSk7XG4gICAgbWFyZ2luLXRvcDogLTAuM3JlbTtcbn1cblxuLnBpenphT3JkZXJCdG4ge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODEsIDgxKTtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbTtcbn1cblxuLnNsb2dhbiB7XG4gICAgZm9udC1mYW1pbHk6ICdGamFsbGEgT25lJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICB0ZXh0LXNoYWRvdzogNTAlO1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLm9yZGVyTm93QnRuIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDU4LCA1OCwgNTgsIDAuOSksIHJnYig4MiwgODIsIDgyLCAwLjkpKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEFib3V0IFNlY3Rpb24gKi9cblxuLmFib3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43NSk7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA5LjVyZW07XG59XG5cbi5pbmZvLWhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiAnQ3JvaXNzYW50IE9uZScsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA0NHB4O1xuICAgIGNvbG9yOiByZ2IoMjE3LCAyMjcsIDIzNSk7XG4gICAgbWFyZ2luLXRvcDogLTAuOHJlbTtcbn1cblxuLmluZm8tY29udGFpbmVyIHtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU0LCA1NCwgNTQsIDAuNSk7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLmNvbnRhY3QtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZ3JleSBzb2xpZDtcbiAgICBwYWRkaW5nOiAxMHB4OyAvKiBBZGQgcGFkZGluZyBmb3IgYmV0dGVyIHZpc3VhbCBhcHBlYXJhbmNlICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4ubWVzc2FnZS11cyB7XG4gICAgZm9udC1mYW1pbHk6ICdDcm9pc3NhbnQgT25lJywgY3Vyc2l2ZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggd2hpdGUgc29saWQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIHBhZGRpbmc6IDAuNHJlbSAwcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDViw4R0FBcUc7SUFDckcsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtRUFBbUU7SUFDbkUsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsbUVBQW1FO0lBQ25FLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEIsRUFBRSw0Q0FBNEM7UUFDeEUsU0FBUztJQUNiO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlGQUFpRjtJQUNqRixlQUFlO0FBQ25COztBQUVBLGtCQUFrQjs7QUFFbEI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGFBQWEsRUFBRSw2Q0FBNkM7SUFDNUQsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhdmVhdCZmYW1pbHk9RGVsaWNpb3VzK0hhbmRyYXduJmZhbWlseT1Pc3dhbGQmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQmZmFtaWx5PUNyb2lzc2FudCtPbmUmZmFtaWx5PURlbGljaW91cytIYW5kcmF3biZmYW1pbHk9T3N3YWxkJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0JmZhbWlseT1Dcm9pc3NhbnQrT25lJmZhbWlseT1EZWxpY2lvdXMrSGFuZHJhd24mZmFtaWx5PUZqYWxsYStPbmUmZmFtaWx5PU9zd2FsZCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwsIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNjUpLCByZ2JhKDAsIDAsIDAsIDAuNjUpKSwgdXJsKCcuL2ltYWdlcy9waXp6YS1tYWluLmpwZycpO1xcbiAgICBtaW4td2lkdGg6IDU3MHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdDcm9pc3NhbnQgT25lJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggcmdiKDEzOSwgMTM5LCAxMzkpIHNvbGlkO1xcbn1cXG5cXG4udGFiLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDsgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRhYiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiAwcmVtIDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSk7XFxuICAgIGJvcmRlci10b3A6IDFweCByZ2IoMTM5LCAxMzksIDEzOSkgc29saWQ7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNS41cmVtO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuLm1lbnVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW46IDJyZW0gN3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGl6emFDb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAwLjJmcjtcXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gICAgbWluLXdpZHRoOiAzMHJlbTtcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLm1lbnVDb250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IC8qIFN3aXRjaCB0byBvbmUgY29sdW1uIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxufVxcblxcbi5waXp6YUltZyB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTFyZW07XFxuICAgIGdyaWQtcm93OiAxIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxufVxcblxcbi5waXp6YU5hbWUge1xcbiAgICBmb250LWZhbWlseTogJ0ZqYWxsYSBPbmUnO1xcbiAgICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnBpenphRGVzY3JpcHRpb24ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoMjAxLCAyMDEsIDIwMSk7XFxuICAgIG1hcmdpbi10b3A6IC0wLjNyZW07XFxufVxcblxcbi5waXp6YU9yZGVyQnRuIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODEsIDgxKTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XFxufVxcblxcbi5zbG9nYW4ge1xcbiAgICBmb250LWZhbWlseTogJ0ZqYWxsYSBPbmUnLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIHRleHQtc2hhZG93OiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG59XFxuXFxuLm9yZGVyTm93QnRuIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig1OCwgNTgsIDU4LCAwLjkpLCByZ2IoODIsIDgyLCA4MiwgMC45KSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQWJvdXQgU2VjdGlvbiAqL1xcblxcbi5hYm91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43NSk7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiA5LjVyZW07XFxufVxcblxcbi5pbmZvLWhlYWRpbmcge1xcbiAgICBmb250LWZhbWlseTogJ0Nyb2lzc2FudCBPbmUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDQ0cHg7XFxuICAgIGNvbG9yOiByZ2IoMjE3LCAyMjcsIDIzNSk7XFxuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDU0LCA1NCwgMC41KTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZ3JleSBzb2xpZDtcXG4gICAgcGFkZGluZzogMTBweDsgLyogQWRkIHBhZGRpbmcgZm9yIGJldHRlciB2aXN1YWwgYXBwZWFyYW5jZSAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ubWVzc2FnZS11cyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3JvaXNzYW50IE9uZScsIGN1cnNpdmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCB3aGl0ZSBzb2xpZDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBjb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgcGFkZGluZzogMC40cmVtIDByZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gICAgLy8gTWFpblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG5cbiAgICAvLyBDcmVhdGUgYSBoZWFkaW5nIGZvciB0aGUgY29udGFjdCBpbmZvcm1hdGlvblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaW5mby1oZWFkaW5nJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1c1wiOyAvLyBVc2UgdGV4dENvbnRlbnQgdG8gc2V0IHRleHRcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIGZvciBjb250YWN0IGluZm9ybWF0aW9uXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImluZm8tY29udGFpbmVyXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHBhcmFncmFwaHMgZm9yIGNvbnRhY3QgaW5mb3JtYXRpb25cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gXCLwn5ONIDEyMyBQYXJhZGlzZSBTdHJlZXRcIjsgLy8gVXNlIHRleHRDb250ZW50IHRvIHNldCB0ZXh0XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbiAgICBjb25zdCB0aW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aW1lcy5jbGFzc0xpc3QuYWRkKCd0aW1lcycpO1xuICAgIHRpbWVzLnRleHRDb250ZW50ID0gXCLwn5WSIE1vbi1UaHVyczogOGFtLThwbSwgRnJpLVN1bjogOGFtLTExcG1cIjsgLy8gVXNlIHRleHRDb250ZW50IHRvIHNldCB0ZXh0XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lcyk7XG5cbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdwaG9uZS1udW1iZXInKTtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IFwi4piO77iPICgyMjIpLTg4OCA1NTU1XCI7IC8vIFVzZSB0ZXh0Q29udGVudCB0byBzZXQgdGV4dFxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGluZyBmb3IgdGhlIGNvbnRhY3QgZm9ybVxuICAgIGNvbnN0IG1lc3NhZ2VVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgbWVzc2FnZVVzLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtdXMnKTtcbiAgICBtZXNzYWdlVXMudGV4dENvbnRlbnQgPSBcIk1lc3NhZ2UgdXNcIjsgLy8gVXNlIHRleHRDb250ZW50IHRvIHNldCB0ZXh0XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlVXMpO1xuXG4gICAgLy8gQ3JlYXRlIGEgZm9ybSBmb3IgY29udGFjdGluZ1xuICAgIGNvbnN0IGVtYWlsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBlbWFpbEZvcm0uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1mb3JtJyk7XG5cbiAgICAvLyBDcmVhdGUgaW5wdXQgZmllbGRzIGZvciB0aGUgZm9ybVxuICAgIGNvbnN0IGZ1bGxOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZ1bGxOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIGZ1bGxOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdGdWxsIE5hbWUnKTsgLy8gVXNlIHNldEF0dHJpYnV0ZSB0byBzZXQgcGxhY2Vob2xkZXJcbiAgICBlbWFpbEZvcm0uYXBwZW5kQ2hpbGQoZnVsbE5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlbWFpbElucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW1haWwnKTsgLy8gVXNlIHNldEF0dHJpYnV0ZSB0byBzZXQgcGxhY2Vob2xkZXJcbiAgICBlbWFpbEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG5cbiAgICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIG1lc3NhZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVHlwZSB5b3VyIG1lc3NhZ2UuLi4nKTsgLy8gVXNlIHNldEF0dHJpYnV0ZSB0byBzZXQgcGxhY2Vob2xkZXJcbiAgICBlbWFpbEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcblxuICAgIC8vIENyZWF0ZSBhIHN1Ym1pdCBidXR0b25cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7IC8vIFVzZSB0ZXh0Q29udGVudCB0byBzZXQgdGV4dFxuICAgIGVtYWlsRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgLy8gQWRkIHRoZSBmb3JtIHRvIHRoZSBjb250YWluZXJcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsRm9ybSk7XG5cbiAgICAvLyBBZGQgdGhlIGluZm8gY29udGFpbmVyIHRvIHRoZSBtYWluIGVsZW1lbnRcbiAgICBtYWluLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xufSIsImltcG9ydCB7IHN3aXRjaFRhYiB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG4gICAgY29uc3Qgc2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNsb2dhbi5jbGFzc0xpc3QuYWRkKFwic2xvZ2FuXCIpO1xuICAgIHNsb2dhbi5pbm5lckhUTUwgPSBcIkRlbGljaW91cyBTbGljZXMsIE1lbW9yYWJsZSBCaXRlcyA8YnI+IFlvdXIgUGl6emEgUGFyYWRpc2UgQXdhaXRzIVwiO1xuXG4gICAgY29uc3Qgb3JkZXJOb3dCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgb3JkZXJOb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hUYWIoXCJtZW51XCIpKTtcbiAgICBvcmRlck5vd0J0bi5jbGFzc0xpc3QuYWRkKFwib3JkZXJOb3dCdG5cIik7XG4gICAgb3JkZXJOb3dCdG4uaW5uZXJIVE1MID0gXCJPcmRlciBOb3dcIlxuICAgIFxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2xvZ2FuKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG9yZGVyTm93QnRuKTtcbn0iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBBYm91dCBmcm9tICcuL2Fib3V0JztcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBjbGVhcigpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0YWJIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFiSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFRhYihcImhvbWVcIikpO1xuICAgIGNvbnN0IHRhYk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YWJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3dpdGNoVGFiKFwibWVudVwiKSk7XG4gICAgY29uc3QgdGFiQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YWJBYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFRhYihcImFib3V0XCIpKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgdGFiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YWItY29udGFpbmVyXCIpXG4gICAgdGFiSG9tZS5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xuICAgIHRhYk1lbnUuY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICB0YWJBYm91dC5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgICAvLyBIZWFkZXJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gXCJQaXp6YSBQYXJhZGlzZVwiO1xuXG4gICAgLy8gVGFic1xuICAgIHRhYkhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gICAgdGFiTWVudS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgICB0YWJBYm91dC5pbm5lckhUTUwgPSBcIkFib3V0XCI7XG5cbiAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiSG9tZSk7XG4gICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYk1lbnUpO1xuICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJBYm91dCk7XG5cbiAgICAvLyBGb290ZXJcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gXCJDb3B5cmlnaHQgQCBKYXJlZCBQcmljZVwiO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoVGFiKHBhZ2UpIHtcbiAgICBpbml0aWFsaXplKCk7XG4gICAgaWYgKHBhZ2UgPT09IFwiaG9tZVwiKSB7XG4gICAgICAgIEhvbWUoKTtcbiAgICB9XG4gICAgaWYgKHBhZ2UgPT09IFwibWVudVwiKSB7XG4gICAgICAgIE1lbnUoKTtcbiAgICB9XG4gICAgaWYgKHBhZ2UgPT09IFwiYWJvdXRcIikge1xuICAgICAgICBBYm91dCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbn1cblxuLy8gRGVmYXVsdFxuaW5pdGlhbGl6ZSgpO1xuQWJvdXQoKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51Q29udGFpbmVyXCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgICAvLyBDcmVhdGUgcGl6emFDb250YWluZXIsIHBpenphSW1nLCBwaXp6YU5hbWUsIGFuZCBwaXp6YURlc2NyaXB0aW9uIGVsZW1lbnRzIGluc2lkZSB0aGUgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiBjcmVhdGVQaXp6YUVsZW1lbnQoaW1hZ2VTcmMsIHBpenphTmFtZVRleHQsIHBpenphRGVzY3JpcHRpb25UZXh0KSB7XG4gICAgICAgIGNvbnN0IHBpenphQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBpenphQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwaXp6YUNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBwaXp6YUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwaXp6YUltZy5jbGFzc0xpc3QuYWRkKFwicGl6emFJbWdcIik7XG4gICAgICAgIHBpenphSW1nLnNyYyA9IGltYWdlU3JjOyAvLyBTZXQgdGhlIGltYWdlIHNvdXJjZVxuXG4gICAgICAgIGNvbnN0IHBpenphTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHBpenphTmFtZS5jbGFzc0xpc3QuYWRkKFwicGl6emFOYW1lXCIpO1xuICAgICAgICBwaXp6YU5hbWUuaW5uZXJIVE1MID0gcGl6emFOYW1lVGV4dDtcblxuICAgICAgICBjb25zdCBwaXp6YURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwaXp6YURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwaXp6YURlc2NyaXB0aW9uXCIpO1xuICAgICAgICBwaXp6YURlc2NyaXB0aW9uLmlubmVySFRNTCA9IHBpenphRGVzY3JpcHRpb25UZXh0O1xuXG4gICAgICAgIGNvbnN0IHBpenphT3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcGl6emFPcmRlckJ0bi5jbGFzc0xpc3QuYWRkKFwicGl6emFPcmRlckJ0blwiKTtcbiAgICAgICAgcGl6emFPcmRlckJ0bi5pbm5lckhUTUwgPSBcIk9yZGVyXCJcblxuICAgICAgICBhcHBlbmRDb250YWluZXIocGl6emFDb250YWluZXIsIHBpenphSW1nLCBwaXp6YU5hbWUsIHBpenphRGVzY3JpcHRpb24sIHBpenphT3JkZXJCdG4pO1xuICAgIH1cblxuICAgIC8vIE1hcmdoZXJpdGFcbiAgICBjcmVhdGVQaXp6YUVsZW1lbnQoJy4uL3NyYy9pbWFnZXMvcGl6emFzL3BpenphMS5wbmcnLCBcIk1hcmdoZXJpdGFcIiwgXCJQbGFpbiBUb21hdG8gQmFzZSB3aXRoIE1vemFyZWxsYSBDaGVlc2VcIik7XG5cbiAgICAvLyBUb21hdG8gJiBNdXNocm9vbVxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emEyLnBuZycsIFwiVG9tYXRvICYgTXVzaHJvb21cIiwgXCJUb21hdG8sIE9saXZlcyBhbmQgU2xpY2VkIFRvbWF0b2VzXCIpO1xuXG4gICAgLy8gUGVwcGVyb25pXG4gICAgY3JlYXRlUGl6emFFbGVtZW50KCcuLi9zcmMvaW1hZ2VzL3Bpenphcy9waXp6YTMucG5nJywgXCJQZXBwZXJvbmlcIiwgXCJDbGFzc2ljIFBlcHBlcm9uaSB3aXRoIE1vemFyZWxsYSBDaGVlc2VcIik7XG5cbiAgICAvLyBNZWF0IFN1cHJlbWVcbiAgICBjcmVhdGVQaXp6YUVsZW1lbnQoJy4uL3NyYy9pbWFnZXMvcGl6emFzL3BpenphNC5wbmcnLCBcIkItVC1PXCIsIFwiQmFjb24sIFRvbWF0byBhbmQgT2xpdmVzXCIpO1xuXG4gICAgLy8gSGF3YWFpblxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE1LnBuZycsIFwiSGF3YWlpYW5cIiwgXCJZZXMsIFBpbmVhcHBsZSBCZWxvbmdzIG9uIFBpenphXCIpO1xuXG4gICAgLy8gU2VhZm9vZFxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE2LnBuZycsIFwiU2VhZm9vZFwiLCBcIkFycnIsIGEgUGlyYXRlcyBUcmVhdCBmb3IgTWUhXCIpO1xuXG4gICAgLy8gVmVnZXRhcmlhblxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE3LnBuZycsIFwiVmVnZXRhcmlhblwiLCBcIlJlZCBPbmlvbnMsIFNsaWNlZCBUb21hdG9lcywgT2xpdmVzLCBhbmQgQnJvY2NvbGlcIik7XG5cbiAgICAvLyBNZWRpdGVycmFuZWFuXG4gICAgY3JlYXRlUGl6emFFbGVtZW50KCcuLi9zcmMvaW1hZ2VzL3Bpenphcy9waXp6YTgucG5nJywgXCJNZWRpdGVycmFuZWFuXCIsIFwiU2FsdHkgZmV0YSwgUGVwcGVyeSBiYXNpbCwgQnJpbnkgS2FsYW1hdGEgb2xpdmVzLCBhbmQgVGFuZ3kgc3VuZHJpZWQgdG9tYXRvZXNcIik7XG4gICAgXG4gICAgLy8gTWV4aWNhblxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE5LnBuZycsIFwiTWV4aWNhblwiLCBcIlNhbGFtaSBhbmQgUmVkIEhvdCBDaGlsbGkgUGVwcGVycyEg8J+OtVwiKTtcblxuICAgIFxuICAgIGZ1bmN0aW9uIGFwcGVuZENvbnRhaW5lcihjb250YWluZXIsIGltZywgbmFtZSwgZGVzY3JpcHRpb24sIGJ1dHRvbikge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJob21lXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2hvbWUuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=