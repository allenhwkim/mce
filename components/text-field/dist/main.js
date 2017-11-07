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
/**
 *  https://material.io/guidelines/components/text-fields.html#text-fields-principles
 *
 *  TODO: list attribute and <datalist> support for autocomplete
 * 
 *  root level status
 *    disabled / empty / invalid / active / dirty
 *
 *   attributes
 *     * disabled
 *     * icon="favorite"
 *     * label="this is label"
 *     * length-error="invalid text length"
 *     * maxlength -> word-counter
 *     * minlength -> word-counter
 *     * optional="(optional)"
 *     * pattern-error="invalid text pattern"
 *     * pattern=""
 *     * placeholder="this is hint text"
 *     * prefix="$"
 *     * readonly
 *     * required="this field is required"
 *     * suffix="dollars"
 *
 *  Example
 *
 * <a-text-field disabled
 *   icon="favorite"
 *   helper-text="this is helper text"
 *   label="this is label"
 *   maxlength -> word-counter
 *   minlength -> word-counter
 *   minlength-error="invalid text min. length"
 *   maxlength-error="invalid text max. length"
 *   optional="(optional)"
 *   pattern-error="invalid text pattern"
 *   pattern=""
 *   placeholder="this is hint text"
 *   prefix="$"
 *   readonly
 *   required="this field is required"
 *   suffix="dollars"></a-text-field>
 */



// dependenant on an-icon
( function() {
  var thisScript = document.currentScript;

  class TextField extends HTMLElement {
    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url

      this.id = 'a-text-field-'+Math.round(Math.random()*Math.pow(10,9));
      this._buildHTML();

      this.inputEl = this.querySelector('#'+this.id);
      this._addEventListeners();
    }

    get disabled() {
      return this.getAttribute('disabled') !== '';
    }

    set disabled(disabled) {
      disabled ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
    }

    get errorMessages() {
      let errorMessages = this.__cachedErrorMessages || {
        rangeUnderflow: this.getAttribute('min-error') || 'invalid min. value',
        rangeOverflow: this.getAttribute('max-error') || 'invalid max. value',
        stepMismatch: this.getAttribute('step-error') || 'invalid value(step)',
        tooShort:  this.getAttribute('minlength-error') || 'invalid min. length',
        tooLong: this.getAttribute('maxlength-error') || 'invalid max. length',
        patternMismatch: this.getAttribute('pattern-error') || 'invalid input text',
        valueMissing: this.getAttribute('required-error') || 'this field is requierd',
        typeMismatch: this.getAttribute('type-error') ||
          'invalid input for type, '+this.getAttribute('type'),
        customError: this.getAttribute('custom-error') || 'invaid input(custom error)',
        invalidError: this.getAttribute('invalid-error') || 'invaid input'
      }
      this.__cachedErrorMessages = errorMessages;
      return errorMessages;
    }

    _buildHTML() {
      let icon = this.getAttribute('icon') || '';
      let type = this.getAttribute('type') || 'text';
      let hintText = this.getAttribute('placeholder') || '';
      let helpetText = this.getAttribute('helper-text') || '';
      let label = this.getAttribute('label') || '';
      let prefix = this.getAttribute('prefix') || '';
      let suffix = this.getAttribute('suffix') || '';
      let optionalText = this.getAttribute('optional') || '';
      let helperText = this.getAttribute('helper-text') || '';
      let requiredText = this.getAttribute('required') !== null ? ' *' : '';

      let attrs = [];
      for (let i=0; i<this.attributes.length; i++) {
        let attr = this.attributes[i];
        (!attr.name.match(/-/)) && attrs.push(`${attr.name}="${attr.value}"`);
      }
      let attributes = attrs.join(' ');

      let html = `
        <an-icon class="icon">${icon}</an-icon>
        <div class="container">
          <label for="${this.id}" style="">${label}${optionalText}${requiredText}</label>
          <div class="input-wrapper">
            <div class="prefix">${prefix}</div>
            <input class="input" type="${type}" id="${this.id}" ${attributes} />
            <div class="suffix">${suffix}</div>
          </div>
          <hr />
          <div class="helper-text">${helperText}</div>
          <div class="error-messages"></div>
        </div>
      `;
      this.insertAdjacentHTML('beforeend', html);
    }

    _getErrors() {
      let errors = {};
      for (var key in this.inputEl.validity) {
        if (key !== 'valid' && this.inputEl.validity[key]) {
          errors[key] = this.errorMessages[key];
        }
      }
      if (this.getAttribute('maxlength')) {
        let tooLong = this.inputEl.value.length > parseInt(this.getAttribute('maxLength'));
        tooLong && (errors.tooLong = this.errorMessages.tooLong);
      }
      return errors;
    }

    _addEventListeners() {
      let setStatus = () => {
        let empty  = !this.inputEl.value;
        let error = Object.values(this._getErrors())[0];
        let errMsgEl = this.querySelector('.error-messages');
        let dirty = this.getAttribute('dirty') !== null;

        empty ? this.setAttribute('empty', '')   : this.removeAttribute('empty');
        if (dirty && error) {
          this.setAttribute('invalid', ''); 
          errMsgEl.innerHTML = error;
        } else {
          this.removeAttribute('invalid')
        }
      }

      setStatus();

      this.addEventListener('click', event => {
        this.setAttribute('active', '');
        this.inputEl.focus();
      });

      this.inputEl.addEventListener('blur', event => {
        this.removeAttribute('active');
      });

      this.inputEl.addEventListener('change', event => {
        this.setAttribute('dirty', '');
        setStatus();
      });
    }
  }
  
  customElements.define('a-text-field', TextField);
})();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addStyleSheet;
/* unused harmony export observeAttrChange */
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