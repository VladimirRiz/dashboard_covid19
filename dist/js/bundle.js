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
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./src/js/filter.js");


function cases() {
  const casesInfo = document.querySelector('.cases__info');
  const getCountry = fetch('https://api.covid19api.com/summary');
  getCountry.then((response) => response.json())
    .then(({ Countries }) => {
      const arr = [...Countries];
      arr.sort((a, b) => ((a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1));
      arr.forEach((x) => {
        casesInfo.insertAdjacentHTML('beforeend', `<div class="country"><p class="number">${x.TotalConfirmed}</p><p class="name">${x.Country}</p></div>`);
      });
    }).then(() => (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filterCountries)());
}


/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterCountries": () => /* binding */ filterCountries,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const filterCountries = () => {
  const input = document.querySelector('.filter__cases');
  const countries = document.querySelectorAll('.country');

  const updateValue = ({ target }) => {
    const { value } = target;
    countries.forEach((country) => {
      const name = country.querySelector('.name').textContent;
      if (name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        country.style.display = 'flex';
      } else country.style.display = 'none';
    });
  };
  input.addEventListener('input', updateValue);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterCountries);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cases */ "./src/js/cases.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/js/nav.js");



(0,_cases__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_nav__WEBPACK_IMPORTED_MODULE_1__.toggleClassesNavigation)();


/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleClassesNavigation": () => /* binding */ toggleClassesNavigation
/* harmony export */ });
const toggleClassesNavigation = () => {
    const navList = document.querySelector('.navigation__list_wrapper');
    const navButton = document.querySelector('.navigation_button');
    
    navButton.addEventListener('click', () => {
        navButton.classList.toggle('change');
        navList.classList.toggle('active');
    })
};

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