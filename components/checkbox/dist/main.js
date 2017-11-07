/**
 * Custom Element Polyfill
 * It's Allen's customElemnts polyfill since Allen does not use any shadowDOM at the moment
 */
(function(){
  let __customElements = {};

  let applyCustomElement = function(el, klass) {
    if (el.tagName.match(/-/)) {
      // el.__proto__ = klass.prototype;
      Object.setPrototypeOf(el, klass.prototype);
      el._init && el._init();
      setTimeout(function(){
        el.connectedCallback && el.connectedCallback();
      })
    }
  };

  let CustomElements = { // polyfill of window.customElements. I only need .define
    define: function(name, klass) {
      __customElements[name] = klass;
      //this is called after window.onload
      Array.from(document.querySelectorAll(name)).forEach(function(el) {
        applyCustomElement(el, __customElements[name]);
      });
    }
  }

  let observer = new MutationObserver(function(mutationRecords) {
    mutationRecords.forEach(function(mutationRecord) {
      if (mutationRecord.type == 'childList') { // e.g. attribures, characterData
        Array.from(mutationRecord.removedNodes).forEach(function(node) {
          let nodeName = node.nodeName.toLowerCase();
          let klass = __customElements[nodeName];
          if (klass) { // Ha, this is a customElement
            applyCustomElement(node, klass);
          }
        });
        Array.from(mutationRecord.addedNodes).forEach(function(node) {
          node.disconnectedCallback && node.disconnectedCallback();
        });
      }
    })
  });

  if (!window.customElements) {
    window.customElements = CustomElements;
    window.addEventListener('load', function() {
      observer.observe(document.body, {childList: true});
    });
  }

  if (!Object.values) {
    Object.values = function(obj) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    }
  };
})();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(1);


( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar

  var iconSVG = `
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path class="checked"   d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      <path class="unchecked" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>`;

  class Checkbox extends HTMLElement {
    connectedCallback() {
      this.inputAttrs = ['id', 'name', 'value', 'disabled', 'checked'];
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); 
      this.inputEl = this._addRealInput();
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* observeAttrChange */])(this, (attr, val) => {
        val === null ? this.inputEl.removeAttribute(attr) : this.inputEl.setAttribute(attr, val);
      });
    }

    _addRealInput() {
      let inputEl = document.createElement('input');
      inputEl.setAttribute("type", "checkbox");
      Array.from(this.attributes).forEach( attr => {
        if (this.inputAttrs.includes(attr.name) && attr.value !== null) {
         inputEl.setAttribute(attr.name, attr.value);
         (attr.name === 'id') && this.setAttribute('id', 'a-checkbox-'+attr.value);
        }
      })
      this.appendChild(inputEl);
      this.insertAdjacentHTML('beforeend', iconSVG)
      return inputEl;
    }

  }
  
  customElements.define('a-checkbox', Checkbox); //name, class
})();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addStyleSheet;
/* harmony export (immutable) */ __webpack_exports__["b"] = observeAttrChange;
/* unused harmony export animate */
function addStyleSheet(el, url) {
  let id = el.constructor.name.replace(/[A-Z]/g, function(char, index) {
    return (index !== 0 ? '-' : '') + char.toLowerCase();
  });
  url = url || `https://unpkg.com/@custom-elements/${id}/dist/style.css`;

  if (!document.querySelector(`#ce-core-style, link.${id}`)) {
    let linkEl = document.createElement('link');
    linkEl.setAttribute('class', id);
    linkEl.setAttribute('rel', "stylesheet");
    linkEl.setAttribute('href', url);
    el.appendChild(linkEl); 
    // document.head.appendChild(linkEl); 
  }
}

function observeAttrChange(el, callback) {
  var observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes') {
        let newVal = mutation.target.getAttribute(mutation.attributeName);
        callback(mutation.attributeName, newVal);
      }
    });
  });
  observer.observe(el, {attributes: true});
  return observer;
}

/**
 * common function for Javascript animation
 */
function animate({duration, draw, timing}) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction)

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
    

/***/ })
/******/ ]);