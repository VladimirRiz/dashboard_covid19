/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/cases.js":
/*!*************************!*\
  !*** ./src/js/cases.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ cases
/* harmony export */ });
// async function getUser(name) {
//   const country = name.toLowerCase().replace(/ /g, '-');
//   const response = await fetch(`https://api.covid19api.com/total/country/${country}/status/confirmed`);
//   const data = await response.json();
//   return data;
// }

function cases() {
  const casesInfo = document.querySelector('.cases__info');
  const getCountry = fetch('https://api.covid19api.com/summary');
  getCountry.then((response) => response.json())
    .then(({ Countries }) => {
      const arr = [...Countries];
      arr.sort((a, b) => ((a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1));
      console.log(arr);
      arr.forEach((x) => {
        casesInfo.insertAdjacentHTML('beforeend', `<div class="country"><p class="number">${x.TotalConfirmed}</p><p class="name">${x.Country}</p></div>`);
      });
    });
}

// Call the API
// fetch('https://jsonplaceholder.typicode.com/posts/5').then(function (response) {
// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		return Promise.reject(response);
// 	}
// }).then(function (data) {

// 	// Store the post data to a variable
// 	post = data;

// 	// Fetch another API
// 	return fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);

// }).then(function (response) {
// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		return Promise.reject(response);
// 	}
// }).then(function (userData) {
// 	console.log(post, userData);
// }).catch(function (error) {
// 	console.warn(error);
// });


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cases */ "./src/js/cases.js");


(0,_cases__WEBPACK_IMPORTED_MODULE_0__.default)();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/scss/style.scss");
/******/ })()
;
//# sourceMappingURL=bundle.js.map