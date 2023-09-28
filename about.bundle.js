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
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICAgIC8vIE1haW5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGluZyBmb3IgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb25cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2luZm8taGVhZGluZycpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXNcIjsgLy8gVXNlIHRleHRDb250ZW50IHRvIHNldCB0ZXh0XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIC8vIENyZWF0ZSBhIGNvbnRhaW5lciBmb3IgY29udGFjdCBpbmZvcm1hdGlvblxuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRhaW5lclwiKTtcblxuICAgIC8vIENyZWF0ZSBwYXJhZ3JhcGhzIGZvciBjb250YWN0IGluZm9ybWF0aW9uXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwi8J+TjSAxMjMgUGFyYWRpc2UgU3RyZWV0XCI7IC8vIFVzZSB0ZXh0Q29udGVudCB0byBzZXQgdGV4dFxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gICAgY29uc3QgdGltZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGltZXMuY2xhc3NMaXN0LmFkZCgndGltZXMnKTtcbiAgICB0aW1lcy50ZXh0Q29udGVudCA9IFwi8J+VkiBNb24tVGh1cnM6IDhhbS04cG0sIEZyaS1TdW46IDhhbS0xMXBtXCI7IC8vIFVzZSB0ZXh0Q29udGVudCB0byBzZXQgdGV4dFxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZXMpO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgncGhvbmUtbnVtYmVyJyk7XG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBcIuKYju+4jyAoMjIyKS04ODggNTU1NVwiOyAvLyBVc2UgdGV4dENvbnRlbnQgdG8gc2V0IHRleHRcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcblxuICAgIC8vIENyZWF0ZSBhIGhlYWRpbmcgZm9yIHRoZSBjb250YWN0IGZvcm1cbiAgICBjb25zdCBtZXNzYWdlVXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG1lc3NhZ2VVcy5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLXVzJyk7XG4gICAgbWVzc2FnZVVzLnRleHRDb250ZW50ID0gXCJNZXNzYWdlIHVzXCI7IC8vIFVzZSB0ZXh0Q29udGVudCB0byBzZXQgdGV4dFxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZVVzKTtcblxuICAgIC8vIENyZWF0ZSBhIGZvcm0gZm9yIGNvbnRhY3RpbmdcbiAgICBjb25zdCBlbWFpbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZW1haWxGb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9ybScpO1xuXG4gICAgLy8gQ3JlYXRlIGlucHV0IGZpZWxkcyBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBmdWxsTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmdWxsTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICBmdWxsTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRnVsbCBOYW1lJyk7IC8vIFVzZSBzZXRBdHRyaWJ1dGUgdG8gc2V0IHBsYWNlaG9sZGVyXG4gICAgZW1haWxGb3JtLmFwcGVuZENoaWxkKGZ1bGxOYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZW1haWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VtYWlsJyk7IC8vIFVzZSBzZXRBdHRyaWJ1dGUgdG8gc2V0IHBsYWNlaG9sZGVyXG4gICAgZW1haWxGb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuXG4gICAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBtZXNzYWdlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1R5cGUgeW91ciBtZXNzYWdlLi4uJyk7IC8vIFVzZSBzZXRBdHRyaWJ1dGUgdG8gc2V0IHBsYWNlaG9sZGVyXG4gICAgZW1haWxGb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG5cbiAgICAvLyBDcmVhdGUgYSBzdWJtaXQgYnV0dG9uXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiOyAvLyBVc2UgdGV4dENvbnRlbnQgdG8gc2V0IHRleHRcbiAgICBlbWFpbEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vIEFkZCB0aGUgZm9ybSB0byB0aGUgY29udGFpbmVyXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbEZvcm0pO1xuXG4gICAgLy8gQWRkIHRoZSBpbmZvIGNvbnRhaW5lciB0byB0aGUgbWFpbiBlbGVtZW50XG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=