/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51Q29udGFpbmVyXCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgICAvLyBDcmVhdGUgcGl6emFDb250YWluZXIsIHBpenphSW1nLCBwaXp6YU5hbWUsIGFuZCBwaXp6YURlc2NyaXB0aW9uIGVsZW1lbnRzIGluc2lkZSB0aGUgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiBjcmVhdGVQaXp6YUVsZW1lbnQoaW1hZ2VTcmMsIHBpenphTmFtZVRleHQsIHBpenphRGVzY3JpcHRpb25UZXh0KSB7XG4gICAgICAgIGNvbnN0IHBpenphQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBpenphQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwaXp6YUNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBwaXp6YUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwaXp6YUltZy5jbGFzc0xpc3QuYWRkKFwicGl6emFJbWdcIik7XG4gICAgICAgIHBpenphSW1nLnNyYyA9IGltYWdlU3JjOyAvLyBTZXQgdGhlIGltYWdlIHNvdXJjZVxuXG4gICAgICAgIGNvbnN0IHBpenphTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHBpenphTmFtZS5jbGFzc0xpc3QuYWRkKFwicGl6emFOYW1lXCIpO1xuICAgICAgICBwaXp6YU5hbWUuaW5uZXJIVE1MID0gcGl6emFOYW1lVGV4dDtcblxuICAgICAgICBjb25zdCBwaXp6YURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwaXp6YURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwaXp6YURlc2NyaXB0aW9uXCIpO1xuICAgICAgICBwaXp6YURlc2NyaXB0aW9uLmlubmVySFRNTCA9IHBpenphRGVzY3JpcHRpb25UZXh0O1xuXG4gICAgICAgIGNvbnN0IHBpenphT3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcGl6emFPcmRlckJ0bi5jbGFzc0xpc3QuYWRkKFwicGl6emFPcmRlckJ0blwiKTtcbiAgICAgICAgcGl6emFPcmRlckJ0bi5pbm5lckhUTUwgPSBcIk9yZGVyXCJcblxuICAgICAgICBhcHBlbmRDb250YWluZXIocGl6emFDb250YWluZXIsIHBpenphSW1nLCBwaXp6YU5hbWUsIHBpenphRGVzY3JpcHRpb24sIHBpenphT3JkZXJCdG4pO1xuICAgIH1cblxuICAgIC8vIE1hcmdoZXJpdGFcbiAgICBjcmVhdGVQaXp6YUVsZW1lbnQoJy4uL3NyYy9pbWFnZXMvcGl6emFzL3BpenphMS5wbmcnLCBcIk1hcmdoZXJpdGFcIiwgXCJQbGFpbiBUb21hdG8gQmFzZSB3aXRoIE1vemFyZWxsYSBDaGVlc2VcIik7XG5cbiAgICAvLyBUb21hdG8gJiBNdXNocm9vbVxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emEyLnBuZycsIFwiVG9tYXRvICYgTXVzaHJvb21cIiwgXCJUb21hdG8sIE9saXZlcyBhbmQgU2xpY2VkIFRvbWF0b2VzXCIpO1xuXG4gICAgLy8gUGVwcGVyb25pXG4gICAgY3JlYXRlUGl6emFFbGVtZW50KCcuLi9zcmMvaW1hZ2VzL3Bpenphcy9waXp6YTMucG5nJywgXCJQZXBwZXJvbmlcIiwgXCJDbGFzc2ljIFBlcHBlcm9uaSB3aXRoIE1vemFyZWxsYSBDaGVlc2VcIik7XG5cbiAgICAvLyBNZWF0IFN1cHJlbWVcbiAgICBjcmVhdGVQaXp6YUVsZW1lbnQoJy4uL3NyYy9pbWFnZXMvcGl6emFzL3BpenphNC5wbmcnLCBcIkItVC1PXCIsIFwiQmFjb24sIFRvbWF0byBhbmQgT2xpdmVzXCIpO1xuXG4gICAgLy8gSGF3YWFpblxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE1LnBuZycsIFwiSGF3YWlpYW5cIiwgXCJZZXMsIFBpbmVhcHBsZSBCZWxvbmdzIG9uIFBpenphXCIpO1xuXG4gICAgLy8gU2VhZm9vZFxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE2LnBuZycsIFwiU2VhZm9vZFwiLCBcIkFycnIsIGEgUGlyYXRlcyBUcmVhdCBmb3IgTWUhXCIpO1xuXG4gICAgLy8gVmVnZXRhcmlhblxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE3LnBuZycsIFwiVmVnZXRhcmlhblwiLCBcIlJlZCBPbmlvbnMsIFNsaWNlZCBUb21hdG9lcywgT2xpdmVzLCBhbmQgQnJvY2NvbGlcIik7XG5cbiAgICAvLyBNZWRpdGVycmFuZWFuXG4gICAgY3JlYXRlUGl6emFFbGVtZW50KCcuLi9zcmMvaW1hZ2VzL3Bpenphcy9waXp6YTgucG5nJywgXCJNZWRpdGVycmFuZWFuXCIsIFwiU2FsdHkgZmV0YSwgUGVwcGVyeSBiYXNpbCwgQnJpbnkgS2FsYW1hdGEgb2xpdmVzLCBhbmQgVGFuZ3kgc3VuZHJpZWQgdG9tYXRvZXNcIik7XG4gICAgXG4gICAgLy8gTWV4aWNhblxuICAgIGNyZWF0ZVBpenphRWxlbWVudCgnLi4vc3JjL2ltYWdlcy9waXp6YXMvcGl6emE5LnBuZycsIFwiTWV4aWNhblwiLCBcIlNhbGFtaSBhbmQgUmVkIEhvdCBDaGlsbGkgUGVwcGVycyEg8J+OtVwiKTtcblxuICAgIFxuICAgIGZ1bmN0aW9uIGFwcGVuZENvbnRhaW5lcihjb250YWluZXIsIGltZywgbmFtZSwgZGVzY3JpcHRpb24sIGJ1dHRvbikge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=