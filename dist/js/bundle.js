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

/***/ "./src/js/API/Covid.js":
/*!*****************************!*\
  !*** ./src/js/API/Covid.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Covid {
  constructor({ error, data }) {
    this.error = error;
    this.data = data;
  }

  set() {
    const death = document.querySelector('.death .info');

    const container = document.createElement('div');
    container.innerHTML = `
      <div class="global-deaths">
        <h4>Global Deaths</h4>
        <h1>${this.data.Global.TotalDeaths}</h1>
      </div>
      <div class="countries-deaths">
        ${this.data.Countries.map((node) => `
            <div class="country">
              <h3>${node.TotalDeaths} deaths</h3>
              <h4>${node.Country}</h4>
            </div>
          `).join(' ')}
      </div>
    `;

    death.appendChild(container);
  }

  error() {
    const death = document.querySelector('.death');

    const container = document.createElement('div');
    container.innerHTML = `error get data: ${this.error}`;

    death.append(container);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Covid);


/***/ }),

/***/ "./src/js/API/covid.summary.js":
/*!*************************************!*\
  !*** ./src/js/API/covid.summary.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Covid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Covid */ "./src/js/API/Covid.js");


async function covidSummary() {
  const url = 'https://api.covid19api.com/summary';
  try {
    const response = await fetch(url);
    const content = await response.json();
    const summary = new _Covid__WEBPACK_IMPORTED_MODULE_0__.default({
      error: null,
      data: content,
    });
    summary.set();
  } catch (error) {
    const summary = new _Covid__WEBPACK_IMPORTED_MODULE_0__.default({
      error,
      data: null,
    });
    summary.error();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (covidSummary);


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
/* harmony import */ var _full_width__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-width */ "./src/js/full-width.js");



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
    }).then(() => (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filterCountries)())
    .then(() => (0,_full_width__WEBPACK_IMPORTED_MODULE_1__.fullWidth)());
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
      const name = country.querySelector('.name').textContent.toLowerCase();
      const hasLetters = (name.indexOf(value.toLowerCase()) > -1);
      country.style.display = hasLetters ? 'flex' : 'none';
    });
  };
  input.addEventListener('input', updateValue);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterCountries);


/***/ }),

/***/ "./src/js/full-width.js":
/*!******************************!*\
  !*** ./src/js/full-width.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fullWidth": () => /* binding */ fullWidth,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const fullWidth = () => {
  const openButton = document.querySelectorAll('.open__button');
  const allBlocks = document.querySelectorAll('.block');
  const mainContainer = document.querySelector('.container__info');

  openButton.forEach((button) => {
    button.addEventListener('click', ({ target }) => {
      const parent = target.parentNode.parentNode;
      const parentClass = (parent.className).replace(/block/g, '').replace(/\s/, '');
      allBlocks.forEach((block) => {
        const hasClass = block.classList.contains(parentClass);
        if (!hasClass) block.classList.toggle('none');
      });
      mainContainer.classList.toggle('one-column');
      console.log(parentClass);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fullWidth);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cases */ "./src/js/cases.js");
/* harmony import */ var _API_covid_summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API/covid.summary */ "./src/js/API/covid.summary.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./src/js/nav.js");




(0,_cases__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_API_covid_summary__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_nav__WEBPACK_IMPORTED_MODULE_2__.toggleClassesNavigation)();


/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleClassesNavigation": () => /* binding */ toggleClassesNavigation,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const toggleClassesNavigation = () => {
  const navList = document.querySelector('.navigation__list_wrapper');
  const navButton = document.querySelector('.navigation_button');

  navButton.addEventListener('click', () => {
    navButton.classList.toggle('change');
    navList.classList.toggle('active');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleClassesNavigation);


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