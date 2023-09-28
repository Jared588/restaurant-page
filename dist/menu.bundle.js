/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/pizzas/pizza1.png":
/*!**************************************!*\
  !*** ./src/images/pizzas/pizza1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "585b9b2824d010a0cfc9.png";

/***/ }),

/***/ "./src/images/pizzas/pizza2.png":
/*!**************************************!*\
  !*** ./src/images/pizzas/pizza2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fc3e720b5f4607ea88d.png";

/***/ }),

/***/ "./src/images/pizzas/pizza3.png":
/*!**************************************!*\
  !*** ./src/images/pizzas/pizza3.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2592ec6ac3637aa65d97.png";

/***/ }),

/***/ "./src/images/pizzas/pizza4.png":
/*!**************************************!*\
  !*** ./src/images/pizzas/pizza4.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e094235ad784d982709.png";

/***/ }),

/***/ "./src/images/pizzas/pizza5.png":
/*!**************************************!*\
  !*** ./src/images/pizzas/pizza5.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7455b4732d1fa8a50926.png";

/***/ }),

/***/ "./src/images/pizzas/pizza6.png":
/*!**************************************!*\
  !*** ./src/images/pizzas/pizza6.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc09ce83a0cc1b6b64ce.png";

/***/ }),

/***/ "./src/images/pizzas/pizza7.png":
/*!**************************************!*\
  !*** ./src/images/pizzas/pizza7.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f66ca12609840669f16d.png";

/***/ }),

/***/ "./src/images/pizzas/pizza8.png":
/*!**************************************!*\
  !*** ./src/images/pizzas/pizza8.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f6e0935860830fdecf2.png";

/***/ }),

/***/ "./src/images/pizzas/pizza9.png":
/*!**************************************!*\
  !*** ./src/images/pizzas/pizza9.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8b3ad00be8201ebb6b5.png";

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _images_pizzas_pizza1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizzas/pizza1.png */ "./src/images/pizzas/pizza1.png");
/* harmony import */ var _images_pizzas_pizza2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizzas/pizza2.png */ "./src/images/pizzas/pizza2.png");
/* harmony import */ var _images_pizzas_pizza3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pizzas/pizza3.png */ "./src/images/pizzas/pizza3.png");
/* harmony import */ var _images_pizzas_pizza4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pizzas/pizza4.png */ "./src/images/pizzas/pizza4.png");
/* harmony import */ var _images_pizzas_pizza5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pizzas/pizza5.png */ "./src/images/pizzas/pizza5.png");
/* harmony import */ var _images_pizzas_pizza6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pizzas/pizza6.png */ "./src/images/pizzas/pizza6.png");
/* harmony import */ var _images_pizzas_pizza7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/pizzas/pizza7.png */ "./src/images/pizzas/pizza7.png");
/* harmony import */ var _images_pizzas_pizza8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/pizzas/pizza8.png */ "./src/images/pizzas/pizza8.png");
/* harmony import */ var _images_pizzas_pizza9_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/pizzas/pizza9.png */ "./src/images/pizzas/pizza9.png");










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
    createPizzaElement(_images_pizzas_pizza1_png__WEBPACK_IMPORTED_MODULE_0__, "Margherita", "Plain Tomato Base with Mozarella Cheese");

    // Tomato & Mushroom
    createPizzaElement(_images_pizzas_pizza2_png__WEBPACK_IMPORTED_MODULE_1__, "Tomato & Mushroom", "Tomato, Olives and Sliced Tomatoes");

    // Pepperoni
    createPizzaElement(_images_pizzas_pizza3_png__WEBPACK_IMPORTED_MODULE_2__, "Pepperoni", "Classic Pepperoni with Mozarella Cheese");

    // Meat Supreme
    createPizzaElement(_images_pizzas_pizza4_png__WEBPACK_IMPORTED_MODULE_3__, "B-T-O", "Bacon, Tomato and Olives");

    // Hawaain
    createPizzaElement(_images_pizzas_pizza5_png__WEBPACK_IMPORTED_MODULE_4__, "Hawaiian", "Yes, Pineapple Belongs on Pizza");

    // Seafood
    createPizzaElement(_images_pizzas_pizza6_png__WEBPACK_IMPORTED_MODULE_5__, "Seafood", "Arrr, a Pirates Treat for Me!");

    // Vegetarian
    createPizzaElement(_images_pizzas_pizza7_png__WEBPACK_IMPORTED_MODULE_6__, "Vegetarian", "Red Onions, Sliced Tomatoes, Olives, and Broccoli");

    // Mediterranean
    createPizzaElement(_images_pizzas_pizza8_png__WEBPACK_IMPORTED_MODULE_7__, "Mediterranean", "Salty feta, Peppery basil, Briny Kalamata olives, and Tangy sundried tomatoes");
    
    // Mexican
    createPizzaElement(_images_pizzas_pizza9_png__WEBPACK_IMPORTED_MODULE_8__, "Mexican", "Salami and Red Hot Chilli Peppers! 🎵");

    
    function appendContainer(container, img, name, description, button) {
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(button);
        menuContainer.appendChild(container);
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJnRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWpDO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixzREFBTTs7QUFFN0I7QUFDQSx1QkFBdUIsc0RBQU07O0FBRTdCO0FBQ0EsdUJBQXVCLHNEQUFNOztBQUU3QjtBQUNBLHVCQUF1QixzREFBTTs7QUFFN0I7QUFDQSx1QkFBdUIsc0RBQU07O0FBRTdCO0FBQ0EsdUJBQXVCLHNEQUFNOztBQUU3QjtBQUNBLHVCQUF1QixzREFBTTs7QUFFN0I7QUFDQSx1QkFBdUIsc0RBQU07QUFDN0I7QUFDQTtBQUNBLHVCQUF1QixzREFBTTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBwaXp6YTEgZnJvbSAnLi9pbWFnZXMvcGl6emFzL3BpenphMS5wbmcnO1xuaW1wb3J0IHBpenphMiBmcm9tICcuL2ltYWdlcy9waXp6YXMvcGl6emEyLnBuZyc7XG5pbXBvcnQgcGl6emEzIGZyb20gJy4vaW1hZ2VzL3Bpenphcy9waXp6YTMucG5nJztcbmltcG9ydCBwaXp6YTQgZnJvbSAnLi9pbWFnZXMvcGl6emFzL3BpenphNC5wbmcnO1xuaW1wb3J0IHBpenphNSBmcm9tICcuL2ltYWdlcy9waXp6YXMvcGl6emE1LnBuZyc7XG5pbXBvcnQgcGl6emE2IGZyb20gJy4vaW1hZ2VzL3Bpenphcy9waXp6YTYucG5nJztcbmltcG9ydCBwaXp6YTcgZnJvbSAnLi9pbWFnZXMvcGl6emFzL3BpenphNy5wbmcnO1xuaW1wb3J0IHBpenphOCBmcm9tICcuL2ltYWdlcy9waXp6YXMvcGl6emE4LnBuZyc7XG5pbXBvcnQgcGl6emE5IGZyb20gJy4vaW1hZ2VzL3Bpenphcy9waXp6YTkucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRhaW5lclwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gICAgLy8gQ3JlYXRlIHBpenphQ29udGFpbmVyLCBwaXp6YUltZywgcGl6emFOYW1lLCBhbmQgcGl6emFEZXNjcmlwdGlvbiBlbGVtZW50cyBpbnNpZGUgdGhlIGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gY3JlYXRlUGl6emFFbGVtZW50KGltYWdlU3JjLCBwaXp6YU5hbWVUZXh0LCBwaXp6YURlc2NyaXB0aW9uVGV4dCkge1xuICAgICAgICBjb25zdCBwaXp6YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwaXp6YUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGl6emFDb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgcGl6emFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcGl6emFJbWcuY2xhc3NMaXN0LmFkZChcInBpenphSW1nXCIpO1xuICAgICAgICBwaXp6YUltZy5zcmMgPSBpbWFnZVNyYzsgLy8gU2V0IHRoZSBpbWFnZSBzb3VyY2VcblxuICAgICAgICBjb25zdCBwaXp6YU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwaXp6YU5hbWUuY2xhc3NMaXN0LmFkZChcInBpenphTmFtZVwiKTtcbiAgICAgICAgcGl6emFOYW1lLmlubmVySFRNTCA9IHBpenphTmFtZVRleHQ7XG5cbiAgICAgICAgY29uc3QgcGl6emFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGl6emFEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicGl6emFEZXNjcmlwdGlvblwiKTtcbiAgICAgICAgcGl6emFEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwaXp6YURlc2NyaXB0aW9uVGV4dDtcblxuICAgICAgICBjb25zdCBwaXp6YU9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHBpenphT3JkZXJCdG4uY2xhc3NMaXN0LmFkZChcInBpenphT3JkZXJCdG5cIik7XG4gICAgICAgIHBpenphT3JkZXJCdG4uaW5uZXJIVE1MID0gXCJPcmRlclwiXG5cbiAgICAgICAgYXBwZW5kQ29udGFpbmVyKHBpenphQ29udGFpbmVyLCBwaXp6YUltZywgcGl6emFOYW1lLCBwaXp6YURlc2NyaXB0aW9uLCBwaXp6YU9yZGVyQnRuKTtcbiAgICB9XG5cbiAgICAvLyBNYXJnaGVyaXRhXG4gICAgY3JlYXRlUGl6emFFbGVtZW50KHBpenphMSwgXCJNYXJnaGVyaXRhXCIsIFwiUGxhaW4gVG9tYXRvIEJhc2Ugd2l0aCBNb3phcmVsbGEgQ2hlZXNlXCIpO1xuXG4gICAgLy8gVG9tYXRvICYgTXVzaHJvb21cbiAgICBjcmVhdGVQaXp6YUVsZW1lbnQocGl6emEyLCBcIlRvbWF0byAmIE11c2hyb29tXCIsIFwiVG9tYXRvLCBPbGl2ZXMgYW5kIFNsaWNlZCBUb21hdG9lc1wiKTtcblxuICAgIC8vIFBlcHBlcm9uaVxuICAgIGNyZWF0ZVBpenphRWxlbWVudChwaXp6YTMsIFwiUGVwcGVyb25pXCIsIFwiQ2xhc3NpYyBQZXBwZXJvbmkgd2l0aCBNb3phcmVsbGEgQ2hlZXNlXCIpO1xuXG4gICAgLy8gTWVhdCBTdXByZW1lXG4gICAgY3JlYXRlUGl6emFFbGVtZW50KHBpenphNCwgXCJCLVQtT1wiLCBcIkJhY29uLCBUb21hdG8gYW5kIE9saXZlc1wiKTtcblxuICAgIC8vIEhhd2FhaW5cbiAgICBjcmVhdGVQaXp6YUVsZW1lbnQocGl6emE1LCBcIkhhd2FpaWFuXCIsIFwiWWVzLCBQaW5lYXBwbGUgQmVsb25ncyBvbiBQaXp6YVwiKTtcblxuICAgIC8vIFNlYWZvb2RcbiAgICBjcmVhdGVQaXp6YUVsZW1lbnQocGl6emE2LCBcIlNlYWZvb2RcIiwgXCJBcnJyLCBhIFBpcmF0ZXMgVHJlYXQgZm9yIE1lIVwiKTtcblxuICAgIC8vIFZlZ2V0YXJpYW5cbiAgICBjcmVhdGVQaXp6YUVsZW1lbnQocGl6emE3LCBcIlZlZ2V0YXJpYW5cIiwgXCJSZWQgT25pb25zLCBTbGljZWQgVG9tYXRvZXMsIE9saXZlcywgYW5kIEJyb2Njb2xpXCIpO1xuXG4gICAgLy8gTWVkaXRlcnJhbmVhblxuICAgIGNyZWF0ZVBpenphRWxlbWVudChwaXp6YTgsIFwiTWVkaXRlcnJhbmVhblwiLCBcIlNhbHR5IGZldGEsIFBlcHBlcnkgYmFzaWwsIEJyaW55IEthbGFtYXRhIG9saXZlcywgYW5kIFRhbmd5IHN1bmRyaWVkIHRvbWF0b2VzXCIpO1xuICAgIFxuICAgIC8vIE1leGljYW5cbiAgICBjcmVhdGVQaXp6YUVsZW1lbnQocGl6emE5LCBcIk1leGljYW5cIiwgXCJTYWxhbWkgYW5kIFJlZCBIb3QgQ2hpbGxpIFBlcHBlcnMhIPCfjrVcIik7XG5cbiAgICBcbiAgICBmdW5jdGlvbiBhcHBlbmRDb250YWluZXIoY29udGFpbmVyLCBpbWcsIG5hbWUsIGRlc2NyaXB0aW9uLCBidXR0b24pIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9