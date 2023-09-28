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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAIA;IACI,aAAa;IACb,UAAU;IACV,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,8GAAqG;IACrG,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,qCAAqC;IACrC,eAAe;IACf,gBAAgB;IAChB,mEAAmE;IACnE,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,iCAAiC;IACjC,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;AACA;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iCAAiC;IACjC,gBAAgB;IAChB,mEAAmE;IACnE,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,qCAAqC;IACrC,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;IACjC,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI;QACI,0BAA0B,EAAE,4CAA4C;QACxE,SAAS;IACb;AACJ;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;IACjC,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,iCAAiC;IACjC,WAAW;IACX,oCAAoC;IACpC,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,uBAAuB;IACvB,eAAe;IACf,mBAAmB;IACnB,aAAa;IACb,gBAAgB;IAChB,iFAAiF;IACjF,eAAe;AACnB;;AAEA,kBAAkB;;AAElB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,eAAe;IACf,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,uCAAuC;IACvC,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,6BAA6B;IAC7B,iCAAiC;IACjC,YAAY;IACZ,6BAA6B;IAC7B,aAAa,EAAE,6CAA6C;IAC5D,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,qCAAqC;IACrC,8BAA8B;IAC9B,eAAe;IACf,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Delicious+Handrawn&family=Oswald&family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Oswald&family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Fjalla+One&family=Oswald&family=Roboto&display=swap');\n\nhtml, body {\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('./images/pizza-main.jpg');\n    min-width: 570px;\n}\n\n.header {\n    display: flex;\n    height: 7rem;\n    justify-content: space-between;\n    padding-left: 5rem;\n    align-items: center;\n    font-family: 'Croissant One', cursive;\n    font-size: 32px;\n    color: aliceblue;\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n    border-bottom: 1px rgb(139, 139, 139) solid;\n}\n\n.tab-container {\n    display: flex; \n    flex-wrap: nowrap; \n    height: 100%;\n    padding-right: 1rem;\n}\n\n.tab {\n    outline: none;\n    background: none;\n    color: aliceblue;\n    height: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    border: none;\n    margin: 0rem 1rem;\n    cursor: pointer;\n}\n\n.main {\n}\n\n.footer {\n    display: flex;\n    height: 3rem;\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n    font-family: 'Roboto', sans-serif;\n    color: aliceblue;\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n    border-top: 1px rgb(139, 139, 139) solid;\n}\n\n.home {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 10rem;\n    margin-bottom: 15.5rem;\n}\n\n.menu {\n    background-color: rgb(0, 0, 0, 0.75);\n}\n\n.menuContainer {\n    display: grid;\n    margin: 2rem 7rem;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n}\n\n.pizzaContainer {\n    padding: 3rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 0.2fr;\n    max-width: 30rem;\n    min-width: 30rem;\n    color: aliceblue;\n    border-radius: 1rem;\n    text-align: center;\n    width: fit-content;\n}\n\n@media (max-width: 1200px) {\n    .menuContainer {\n        grid-template-columns: 1fr; /* Switch to one column on smaller screens */\n        margin: 0;\n    }\n}\n\n.pizzaImg {\n    justify-self: center;\n    align-self: center;\n    height: 11rem;\n    grid-row: 1 / 4;\n    grid-column: 1;\n}\n\n.pizzaName {\n    font-family: 'Fjalla One';\n    color: rgb(228, 228, 228);\n    font-size: 26px;\n    align-self: center;\n}\n\n.pizzaDescription {\n    font-family: 'Roboto', sans-serif;\n    color: rgb(201, 201, 201);\n    margin-top: -0.3rem;\n}\n\n.pizzaOrderBtn {\n    font-family: 'Roboto', sans-serif;\n    color: aliceblue;\n    grid-column: 2 / 3;\n    background: none;\n    background-color: rgb(82, 81, 81);\n    width: 5rem;\n    border: 1px solid rgb(255, 255, 255);\n    justify-self: right;\n    border-radius: 1rem;\n    cursor: pointer;\n    font-size: 16px;\n    margin-top: -1.5rem;\n}\n\n.slogan {\n    font-family: 'Fjalla One', sans-serif;\n    text-align: center;\n    color: aliceblue;\n    text-shadow: 50%;\n    font-size: 64px;\n}\n\n.orderNowBtn {\n    font-family: 'Roboto', sans-serif;\n    border: 1px solid white;\n    font-size: 24px;\n    border-radius: 1rem;\n    padding: 1rem;\n    color: aliceblue;\n    background: linear-gradient(to right, rgb(58, 58, 58, 0.9), rgb(82, 82, 82, 0.9));\n    cursor: pointer;\n}\n\n/* About Section */\n\n.about {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(0, 0, 0, 0.75);\n    padding: 3rem;\n    border-radius: 1rem;\n    padding-bottom: 9.5rem;\n}\n\n.info-heading {\n    font-family: 'Croissant One', cursive;\n    font-size: 44px;\n    color: rgb(217, 227, 235);\n    margin-top: -0.8rem;\n}\n\n.info-container {\n    color: aliceblue;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(54, 54, 54, 0.5);\n    width: fit-content;\n    border-radius: 1rem;\n    padding: 1rem;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.form-input {\n    background-color: transparent;\n    font-family: 'Roboto', sans-serif;\n    border: none;\n    border-bottom: 1px grey solid;\n    padding: 10px; /* Add padding for better visual appearance */\n    width: 100%;\n    resize: none;\n}\n\n.message-us {\n    font-family: 'Croissant One', cursive;\n    border-bottom: 1px white solid;\n    font-size: 22px;\n    margin-top: 3rem;\n    color: rgb(201, 201, 201);\n}\n\n.submit-button {\n    color: aliceblue;\n    background: none;\n    border: 1px white solid;\n    border-radius: 1rem;\n    width: 5rem;\n    padding: 0.4rem 0rem;\n    margin-top: 1rem;\n    align-self: center;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
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
(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BpenphLW1haW4uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQmZmFtaWx5PURlbGljaW91cytIYW5kcmF3biZmYW1pbHk9T3N3YWxkJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0JmZhbWlseT1Dcm9pc3NhbnQrT25lJmZhbWlseT1EZWxpY2lvdXMrSGFuZHJhd24mZmFtaWx5PU9zd2FsZCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhdmVhdCZmYW1pbHk9Q3JvaXNzYW50K09uZSZmYW1pbHk9RGVsaWNpb3VzK0hhbmRyYXduJmZhbWlseT1GamFsbGErT25lJmZhbWlseT1Pc3dhbGQmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IGF1dG87XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjY1KSwgcmdiYSgwLCAwLCAwLCAwLjY1KSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBtaW4td2lkdGg6IDU3MHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogN3JlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdDcm9pc3NhbnQgT25lJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCByZ2IoMTM5LCAxMzksIDEzOSkgc29saWQ7XG59XG5cbi50YWItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDsgXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi50YWIge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDByZW0gMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluIHtcbn1cblxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKTtcbiAgICBib3JkZXItdG9wOiAxcHggcmdiKDEzOSwgMTM5LCAxMzkpIHNvbGlkO1xufVxuXG4uaG9tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTUuNXJlbTtcbn1cblxuLm1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjc1KTtcbn1cblxuLm1lbnVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWFyZ2luOiAycmVtIDdyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waXp6YUNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMC4yZnI7XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLm1lbnVDb250YWluZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgLyogU3dpdGNoIHRvIG9uZSBjb2x1bW4gb24gc21hbGxlciBzY3JlZW5zICovXG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbi5waXp6YUltZyB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogMTFyZW07XG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xuICAgIGdyaWQtY29sdW1uOiAxO1xufVxuXG4ucGl6emFOYW1lIHtcbiAgICBmb250LWZhbWlseTogJ0ZqYWxsYSBPbmUnO1xuICAgIGNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnBpenphRGVzY3JpcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xuICAgIG1hcmdpbi10b3A6IC0wLjNyZW07XG59XG5cbi5waXp6YU9yZGVyQnRuIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgxLCA4MSk7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XG59XG5cbi5zbG9nYW4ge1xuICAgIGZvbnQtZmFtaWx5OiAnRmphbGxhIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgdGV4dC1zaGFkb3c6IDUwJTtcbiAgICBmb250LXNpemU6IDY0cHg7XG59XG5cbi5vcmRlck5vd0J0biB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig1OCwgNTgsIDU4LCAwLjkpLCByZ2IoODIsIDgyLCA4MiwgMC45KSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBBYm91dCBTZWN0aW9uICovXG5cbi5hYm91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNzUpO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOS41cmVtO1xufVxuXG4uaW5mby1oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogJ0Nyb2lzc2FudCBPbmUnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICBjb2xvcjogcmdiKDIxNywgMjI3LCAyMzUpO1xuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XG59XG5cbi5pbmZvLWNvbnRhaW5lciB7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NCwgNTQsIDU0LCAwLjUpO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jb250YWN0LWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0taW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGdyZXkgc29saWQ7XG4gICAgcGFkZGluZzogMTBweDsgLyogQWRkIHBhZGRpbmcgZm9yIGJldHRlciB2aXN1YWwgYXBwZWFyYW5jZSAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLm1lc3NhZ2UtdXMge1xuICAgIGZvbnQtZmFtaWx5OiAnQ3JvaXNzYW50IE9uZScsIGN1cnNpdmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHdoaXRlIHNvbGlkO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIGNvbG9yOiByZ2IoMjAxLCAyMDEsIDIwMSk7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMHJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsOEdBQXFHO0lBQ3JHLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUVBQW1FO0lBQ25FLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLG1FQUFtRTtJQUNuRSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCLEVBQUUsNENBQTRDO1FBQ3hFLFNBQVM7SUFDYjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpRkFBaUY7SUFDakYsZUFBZTtBQUNuQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixhQUFhLEVBQUUsNkNBQTZDO0lBQzVELFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQmZmFtaWx5PURlbGljaW91cytIYW5kcmF3biZmYW1pbHk9T3N3YWxkJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0JmZhbWlseT1Dcm9pc3NhbnQrT25lJmZhbWlseT1EZWxpY2lvdXMrSGFuZHJhd24mZmFtaWx5PU9zd2FsZCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhdmVhdCZmYW1pbHk9Q3JvaXNzYW50K09uZSZmYW1pbHk9RGVsaWNpb3VzK0hhbmRyYXduJmZhbWlseT1GamFsbGErT25lJmZhbWlseT1Pc3dhbGQmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5cXG5odG1sLCBib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjY1KSwgcmdiYSgwLCAwLCAwLCAwLjY1KSksIHVybCgnLi9pbWFnZXMvcGl6emEtbWFpbi5qcGcnKTtcXG4gICAgbWluLXdpZHRoOiA1NzBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogN3JlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3JvaXNzYW50IE9uZScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYigxMzksIDEzOSwgMTM5KSBzb2xpZDtcXG59XFxuXFxuLnRhYi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC13cmFwOiBub3dyYXA7IFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YWIge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbjogMHJlbSAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpO1xcbiAgICBib3JkZXItdG9wOiAxcHggcmdiKDEzOSwgMTM5LCAxMzkpIHNvbGlkO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTUuNXJlbTtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43NSk7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiAycmVtIDdyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBpenphQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMC4yZnI7XFxuICAgIG1heC13aWR0aDogMzByZW07XFxuICAgIG1pbi13aWR0aDogMzByZW07XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5tZW51Q29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBTd2l0Y2ggdG8gb25lIGNvbHVtbiBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbn1cXG5cXG4ucGl6emFJbWcge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDExcmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG4ucGl6emFOYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6ICdGamFsbGEgT25lJztcXG4gICAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5waXp6YURlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xcbiAgICBtYXJnaW4tdG9wOiAtMC4zcmVtO1xcbn1cXG5cXG4ucGl6emFPcmRlckJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgxLCA4MSk7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMS41cmVtO1xcbn1cXG5cXG4uc2xvZ2FuIHtcXG4gICAgZm9udC1mYW1pbHk6ICdGamFsbGEgT25lJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICB0ZXh0LXNoYWRvdzogNTAlO1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxufVxcblxcbi5vcmRlck5vd0J0biB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoNTgsIDU4LCA1OCwgMC45KSwgcmdiKDgyLCA4MiwgODIsIDAuOSkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEFib3V0IFNlY3Rpb24gKi9cXG5cXG4uYWJvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNzUpO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOS41cmVtO1xcbn1cXG5cXG4uaW5mby1oZWFkaW5nIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDcm9pc3NhbnQgT25lJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiA0NHB4O1xcbiAgICBjb2xvcjogcmdiKDIxNywgMjI3LCAyMzUpO1xcbiAgICBtYXJnaW4tdG9wOiAtMC44cmVtO1xcbn1cXG5cXG4uaW5mby1jb250YWluZXIge1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU0LCA1NCwgNTQsIDAuNSk7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGdyZXkgc29saWQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBiZXR0ZXIgdmlzdWFsIGFwcGVhcmFuY2UgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLm1lc3NhZ2UtdXMge1xcbiAgICBmb250LWZhbWlseTogJ0Nyb2lzc2FudCBPbmUnLCBjdXJzaXZlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggd2hpdGUgc29saWQ7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICAgIC8vIE1haW5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGluZyBmb3IgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb25cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2luZm8taGVhZGluZycpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXNcIjsgLy8gVXNlIHRleHRDb250ZW50IHRvIHNldCB0ZXh0XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIC8vIENyZWF0ZSBhIGNvbnRhaW5lciBmb3IgY29udGFjdCBpbmZvcm1hdGlvblxuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRhaW5lclwiKTtcblxuICAgIC8vIENyZWF0ZSBwYXJhZ3JhcGhzIGZvciBjb250YWN0IGluZm9ybWF0aW9uXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwi8J+TjSAxMjMgUGFyYWRpc2UgU3RyZWV0XCI7IC8vIFVzZSB0ZXh0Q29udGVudCB0byBzZXQgdGV4dFxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gICAgY29uc3QgdGltZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGltZXMuY2xhc3NMaXN0LmFkZCgndGltZXMnKTtcbiAgICB0aW1lcy50ZXh0Q29udGVudCA9IFwi8J+VkiBNb24tVGh1cnM6IDhhbS04cG0sIEZyaS1TdW46IDhhbS0xMXBtXCI7IC8vIFVzZSB0ZXh0Q29udGVudCB0byBzZXQgdGV4dFxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZXMpO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgncGhvbmUtbnVtYmVyJyk7XG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBcIuKYju+4jyAoMjIyKS04ODggNTU1NVwiOyAvLyBVc2UgdGV4dENvbnRlbnQgdG8gc2V0IHRleHRcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcblxuICAgIC8vIENyZWF0ZSBhIGhlYWRpbmcgZm9yIHRoZSBjb250YWN0IGZvcm1cbiAgICBjb25zdCBtZXNzYWdlVXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG1lc3NhZ2VVcy5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLXVzJyk7XG4gICAgbWVzc2FnZVVzLnRleHRDb250ZW50ID0gXCJNZXNzYWdlIHVzXCI7IC8vIFVzZSB0ZXh0Q29udGVudCB0byBzZXQgdGV4dFxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZVVzKTtcblxuICAgIC8vIENyZWF0ZSBhIGZvcm0gZm9yIGNvbnRhY3RpbmdcbiAgICBjb25zdCBlbWFpbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZW1haWxGb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9ybScpO1xuXG4gICAgLy8gQ3JlYXRlIGlucHV0IGZpZWxkcyBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBmdWxsTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmdWxsTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICBmdWxsTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRnVsbCBOYW1lJyk7IC8vIFVzZSBzZXRBdHRyaWJ1dGUgdG8gc2V0IHBsYWNlaG9sZGVyXG4gICAgZW1haWxGb3JtLmFwcGVuZENoaWxkKGZ1bGxOYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZW1haWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VtYWlsJyk7IC8vIFVzZSBzZXRBdHRyaWJ1dGUgdG8gc2V0IHBsYWNlaG9sZGVyXG4gICAgZW1haWxGb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuXG4gICAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBtZXNzYWdlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1R5cGUgeW91ciBtZXNzYWdlLi4uJyk7IC8vIFVzZSBzZXRBdHRyaWJ1dGUgdG8gc2V0IHBsYWNlaG9sZGVyXG4gICAgZW1haWxGb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG5cbiAgICAvLyBDcmVhdGUgYSBzdWJtaXQgYnV0dG9uXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiOyAvLyBVc2UgdGV4dENvbnRlbnQgdG8gc2V0IHRleHRcbiAgICBlbWFpbEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vIEFkZCB0aGUgZm9ybSB0byB0aGUgY29udGFpbmVyXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbEZvcm0pO1xuXG4gICAgLy8gQWRkIHRoZSBpbmZvIGNvbnRhaW5lciB0byB0aGUgbWFpbiBlbGVtZW50XG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcbn0iLCJpbXBvcnQgeyBzd2l0Y2hUYWIgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICAgIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzbG9nYW4uY2xhc3NMaXN0LmFkZChcInNsb2dhblwiKTtcbiAgICBzbG9nYW4uaW5uZXJIVE1MID0gXCJEZWxpY2lvdXMgU2xpY2VzLCBNZW1vcmFibGUgQml0ZXMgPGJyPiBZb3VyIFBpenphIFBhcmFkaXNlIEF3YWl0cyFcIjtcblxuICAgIGNvbnN0IG9yZGVyTm93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIG9yZGVyTm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3dpdGNoVGFiKFwibWVudVwiKSk7XG4gICAgb3JkZXJOb3dCdG4uY2xhc3NMaXN0LmFkZChcIm9yZGVyTm93QnRuXCIpO1xuICAgIG9yZGVyTm93QnRuLmlubmVySFRNTCA9IFwiT3JkZXIgTm93XCJcbiAgICBcbiAgICBtYWluLmFwcGVuZENoaWxkKHNsb2dhbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChvcmRlck5vd0J0bik7XG59IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9hYm91dCc7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgY2xlYXIoKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGFiSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhYkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hUYWIoXCJob21lXCIpKTtcbiAgICBjb25zdCB0YWJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFiTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFRhYihcIm1lbnVcIikpO1xuICAgIGNvbnN0IHRhYkFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFiQWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hUYWIoXCJhYm91dFwiKSk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIFxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFiLWNvbnRhaW5lclwiKVxuICAgIHRhYkhvbWUuY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICB0YWJNZW51LmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gICAgdGFiQWJvdXQuY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gICAgLy8gSGVhZGVyXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IFwiUGl6emEgUGFyYWRpc2VcIjtcblxuICAgIC8vIFRhYnNcbiAgICB0YWJIb21lLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICAgIHRhYk1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgdGFiQWJvdXQuaW5uZXJIVE1MID0gXCJBYm91dFwiO1xuXG4gICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYkhvbWUpO1xuICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJNZW51KTtcbiAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiQWJvdXQpO1xuXG4gICAgLy8gRm9vdGVyXG4gICAgZm9vdGVyLmlubmVySFRNTCA9IFwiQ29weXJpZ2h0IEAgSmFyZWQgUHJpY2VcIjtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFiQ29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRhYihwYWdlKSB7XG4gICAgaW5pdGlhbGl6ZSgpO1xuICAgIGlmIChwYWdlID09PSBcImhvbWVcIikge1xuICAgICAgICBIb21lKCk7XG4gICAgfVxuICAgIGlmIChwYWdlID09PSBcIm1lbnVcIikge1xuICAgICAgICBNZW51KCk7XG4gICAgfVxuICAgIGlmIChwYWdlID09PSBcImFib3V0XCIpIHtcbiAgICAgICAgQWJvdXQoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG59XG5cbi8vIERlZmF1bHRcbmluaXRpYWxpemUoKTtcbkhvbWUoKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51Q29udGFpbmVyXCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgICAvLyBDcmVhdGUgcGl6emFDb250YWluZXIsIHBpenphSW1nLCBwaXp6YU5hbWUsIGFuZCBwaXp6YURlc2NyaXB0aW9uIGVsZW1lbnRzIGluc2lkZSB0aGUgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiBjcmVhdGVQaXp6YUVsZW1lbnQoaW1hZ2VTcmMsIHBpenphTmFtZVRleHQsIHBpenphRGVzY3JpcHRpb25UZXh0KSB7XG4gICAgICAgIGNvbnN0IHBpenphQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBpenphQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwaXp6YUNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBwaXp6YUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwaXp6YUltZy5jbGFzc0xpc3QuYWRkKFwicGl6emFJbWdcIik7XG4gICAgICAgIHBpenphSW1nLnNyYyA9IGltYWdlU3JjOyAvLyBTZXQgdGhlIGltYWdlIHNvdXJjZVxuXG4gICAgICAgIGNvbnN0IHBpenphTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHBpenphTmFtZS5jbGFzc0xpc3QuYWRkKFwicGl6emFOYW1lXCIpO1xuICAgICAgICBwaXp6YU5hbWUuaW5uZXJIVE1MID0gcGl6emFOYW1lVGV4dDtcblxuICAgICAgICBjb25zdCBwaXp6YURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwaXp6YURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwaXp6YURlc2NyaXB0aW9uXCIpO1xuICAgICAgICBwaXp6YURlc2NyaXB0aW9uLmlubmVySFRNTCA9IHBpenphRGVzY3JpcHRpb25UZXh0O1xuXG4gICAgICAgIGNvbnN0IHBpenphT3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcGl6emFPcmRlckJ0bi5jbGFzc0xpc3QuYWRkKFwicGl6emFPcmRlckJ0blwiKTtcbiAgICAgICAgcGl6emFPcmRlckJ0bi5pbm5lckhUTUwgPSBcIk9yZGVyXCJcblxuICAgICAgICBhcHBlbmRDb250YWluZXIocGl6emFDb250YWluZXIsIHBpenphSW1nLCBwaXp6YU5hbWUsIHBpenphRGVzY3JpcHRpb24sIHBpenphT3JkZXJCdG4pO1xuICAgIH1cblxuICAgIC8vIE1hcmdoZXJpdGFcbiAgICBjcmVhdGVQaXp6YUVsZW1lbnQoJy4uL3NyYy9pbWFnZXMvcGl6emFzL3BpenphMS5wbmcnLCBcIk1hcmdoZXJpdGFcIiwgXCJQbGFpbiBUb21hdG8gQmFzZSB3aXRoIE1vemFyZWxsYSBDaGVlc2VcIik7XG5cbiAgICAvLyBUb21hdG8gJiBNdXNocm9vbVxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emEyLnBuZycsIFwiVG9tYXRvICYgTXVzaHJvb21cIiwgXCJUb21hdG8sIE9saXZlcyBhbmQgU2xpY2VkIFRvbWF0b2VzXCIpO1xuXG4gICAgLy8gUGVwcGVyb25pXG4gICAgY3JlYXRlUGl6emFFbGVtZW50KCcuLi9zcmMvaW1hZ2VzL3Bpenphcy9waXp6YTMucG5nJywgXCJQZXBwZXJvbmlcIiwgXCJDbGFzc2ljIFBlcHBlcm9uaSB3aXRoIE1vemFyZWxsYSBDaGVlc2VcIik7XG5cbiAgICAvLyBNZWF0IFN1cHJlbWVcbiAgICBjcmVhdGVQaXp6YUVsZW1lbnQoJy4uL3NyYy9pbWFnZXMvcGl6emFzL3BpenphNC5wbmcnLCBcIkItVC1PXCIsIFwiQmFjb24sIFRvbWF0byBhbmQgT2xpdmVzXCIpO1xuXG4gICAgLy8gSGF3YWFpblxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE1LnBuZycsIFwiSGF3YWlpYW5cIiwgXCJZZXMsIFBpbmVhcHBsZSBCZWxvbmdzIG9uIFBpenphXCIpO1xuXG4gICAgLy8gU2VhZm9vZFxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE2LnBuZycsIFwiU2VhZm9vZFwiLCBcIkFycnIsIGEgUGlyYXRlcyBUcmVhdCBmb3IgTWUhXCIpO1xuXG4gICAgLy8gVmVnZXRhcmlhblxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE3LnBuZycsIFwiVmVnZXRhcmlhblwiLCBcIlJlZCBPbmlvbnMsIFNsaWNlZCBUb21hdG9lcywgT2xpdmVzLCBhbmQgQnJvY2NvbGlcIik7XG5cbiAgICAvLyBNZWRpdGVycmFuZWFuXG4gICAgY3JlYXRlUGl6emFFbGVtZW50KCcuLi9zcmMvaW1hZ2VzL3Bpenphcy9waXp6YTgucG5nJywgXCJNZWRpdGVycmFuZWFuXCIsIFwiU2FsdHkgZmV0YSwgUGVwcGVyeSBiYXNpbCwgQnJpbnkgS2FsYW1hdGEgb2xpdmVzLCBhbmQgVGFuZ3kgc3VuZHJpZWQgdG9tYXRvZXNcIik7XG4gICAgXG4gICAgLy8gTWV4aWNhblxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE5LnBuZycsIFwiTWV4aWNhblwiLCBcIlNhbGFtaSBhbmQgUmVkIEhvdCBDaGlsbGkgUGVwcGVycyEg8J+OtVwiKTtcblxuICAgIFxuICAgIGZ1bmN0aW9uIGFwcGVuZENvbnRhaW5lcihjb250YWluZXIsIGltZywgbmFtZSwgZGVzY3JpcHRpb24sIGJ1dHRvbikge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==