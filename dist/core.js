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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addStyleSheet;
/* harmony export (immutable) */ __webpack_exports__["c"] = observeAttrChange;
/* harmony export (immutable) */ __webpack_exports__["b"] = animate;
function addStyleSheet(el, url) {
  let id = el.constructor.name.replace(/[A-Z]/g, function(char, index) {
    return (index !== 0 ? '-' : '') + char.toLowerCase();
  });
  url = url || `https://unpkg.com/@custom-elements/${id}/dist/style.css`;

  if (!document.querySelector(`link.ce-core, link.${id}`)) {
    let linkEl = document.createElement('link');
    linkEl.setAttribute('class', id);
    linkEl.setAttribute('rel', "stylesheet");
    linkEl.setAttribute('href', url);
    el.appendChild(linkEl);  //caution, style will be broken if the element is removed
    //document.head.appendChild(linkEl); 
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
    

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Custom Element Polyfill
 * It's Allen's customElemnts polyfill for better performance
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ce_polyfill_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ce_polyfill_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ce_polyfill_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_bar_main_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_main_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radio_button_main_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbox_main_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__switch_main_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bottom_nav_bar_main_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_main_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chip_main_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_drawer_main_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_main_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nav_item_main_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dialog_main_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__refresh_indicator_main_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tabs_main_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__text_field_main_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tooltip_main_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__icon_main_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__expansion_panel_main_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__grid_list_main_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__list_main_js__ = __webpack_require__(22);






















(function() {
  var cssUrl = 'https://unpkg.com/@custom-elements/core/dist/core.css';

  if (!document.querySelector(`link.ce-core`)) {
    let linkEl = document.createElement('link');
    linkEl.setAttribute('class', 'ce-core');
    linkEl.setAttribute('rel', "stylesheet");
    linkEl.setAttribute('href', cssUrl);
    document.head.appendChild(linkEl); 
  }
})();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ce_polyfill_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ce_polyfill_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ce_polyfill_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(0);



( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar
  class AppBar extends HTMLElement {
    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* addStyleSheet */])(this);
    }
  }
  
  window.customElements.define('an-app-bar', AppBar);
})();


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


// TODO: MutationObserver for all attributes
( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar
  class Button extends HTMLElement {
    
    connectedCallback() {
      this.buttonAttrs = ['name', 'value', 'disabled'];
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
      this.buttonEl = this._addRealButton();
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* observeAttrChange */])(this, (attr, val) => {
        this.buttonAttrs.includes(attr) && this.buttonEl.setAttribute(attr, val);
      });
    }

    _addRealButton() {
      let buttonEl = document.createElement('button');
      Array.from(this.attributes).forEach(attr => {
        this.buttonAttrs.includes(attr.name) && buttonEl.setAttribute(attr.name, attr.value);
      })
      this.appendChild(buttonEl);
      return buttonEl;
    }

  }
  
  customElements.define('a-button', Button); //name, class
})();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar

  var iconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path class="checked" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      <path class="unchecked" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>`;

  class RadioButton extends HTMLElement {
    connectedCallback() {
      this.inputAttrs = ['id', 'name', 'value', 'disabled', 'checked'];
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
      this.inputEl = this._addRealInput();
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* observeAttrChange */])(this, (attr, val) => {
        val === null ? this.inputEl.removeAttribute(attr) : this.inputEl.setAttribute(attr, val);
      });
    }

    _addRealInput() {
      let inputEl = document.createElement('input');
      inputEl.setAttribute("type", "radio");
      Array.from(this.attributes).forEach( attr => {
        if (this.inputAttrs.includes(attr.name) && attr.value !== null) {
         inputEl.setAttribute(attr.name, attr.value);
         (attr.name === 'id') && this.setAttribute('id', 'a-radio-button-'+attr.value);
        }
      })
      this.appendChild(inputEl);
      this.insertAdjacentHTML('beforeend', iconSVG)
      return inputEl;
    }

  }
  
  customElements.define('a-radio-button', RadioButton); //name, class
})();


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


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
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* observeAttrChange */])(this, (attr, val) => {
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar

  class Switch extends HTMLElement {
    
    connectedCallback() {
      this.inputAttrs = ['id', 'name', 'value', 'disabled', 'checked'];
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
      this.inputEl = this._addRealInput();
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* observeAttrChange */])(this, (attr, val) => {
        val === null ? this.inputEl.removeAttribute(attr) : this.inputEl.setAttribute(attr, val);
      });
    }

    _addRealInput() {
      let inputEl = document.createElement('input');
      inputEl.setAttribute("type", "checkbox");
      Array.from(this.attributes).forEach( attr => {
        if (this.inputAttrs.includes(attr.name) && attr.value !== null) {
         inputEl.setAttribute(attr.name, attr.value);
         (attr.name === 'id') && this.setAttribute('id', 'a-switch-'+attr.value);
        }
      })
      this.appendChild(inputEl);
      return inputEl;
    }

  }
  
  customElements.define('a-switch', Switch); //name, class
})();


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


( function() {
  class BottomNavBar extends HTMLElement {
    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this);
    }
  }
  
  customElements.define('a-bottom-nav-bar', BottomNavBar);
})();


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


(function() {

  class Card extends HTMLElement {
    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
    }
  }
  
  customElements.define('a-card', Card);
})();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


// dependant on an-icon
( function() {

  class Chip extends HTMLElement {

    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
      this._buildHTML();
    }

    _buildHTML() {
      let avatar = this.getAttribute('avatar');
      let text = this.getAttribute('text');
      let removable = this.getAttribute('removable');
      let onRemove = this.getAttribute('on-remove');

      if (avatar) {
        this.insertAdjacentHTML('beforeend', `<div class="avatar">${avatar}</div>`);
      }
      if (text) {
        this.insertAdjacentHTML('beforeend', `<div class="text">${text}</div>`);
      }
      if (removable !== null) {
        let removeEl = document.createElement('an-icon');
        removeEl.classList.add('delete');
        removeEl.innerHTML = 'clear';

        removeEl.addEventListener('click', event => {
          let customEvent = new CustomEvent('remove', event);
          this.dispatchEvent(customEvent);
        })

        this.appendChild(removeEl);

        this.addEventListener('remove', function(event) {
          let func = new Function(onRemove);
          func();
          this.remove();
        });
      }
    }

  }
  
  customElements.define('a-chip', Chip);
})();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


( function() {
  class NavDrawer extends HTMLElement {
    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* observeAttrChange */])(this, (attr, val) => {
        if (attr === 'class') {
          // if drawer shown, disable body scroll
          document.body.style.overflow = this.classList.contains('visible') ? 'hidden' : '';
        }
      });
      this._regroupElements();
    }

    open() {
      this.classList.add('visible');
    }

    close() {
      this.classList.remove('visible');
    }

    _regroupElements() {
      let pageBlockerEl, contentsEl;
      pageBlockerEl = document.createElement('div');
      pageBlockerEl.setAttribute('class', 'page-blocker');
      pageBlockerEl.addEventListener('click', () => this.close());
      this.appendChild(pageBlockerEl);

      contentsEl = document.createElement('div');
      contentsEl.setAttribute('class', 'contents');
      this.appendChild(contentsEl);

      Array.from(this.children).forEach(el => {
        if (!el.isSameNode(contentsEl) && !el.isSameNode(pageBlockerEl)) {
          contentsEl.appendChild(el)
        }
      });
    }

  }
  
  customElements.define('a-nav-drawer', NavDrawer);
})();


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
// ref. 
//   * https://material.io/guidelines/components/menus.html#menus-specs
//   * https://material.io/components/web/catalog/menus/

// observable attribute
//  * visible

// Requirements
//   # observable attribute
//     . visible
//   # styling
//     . z-index: 8
//     . shadow: 1
//     . padding: 8px 0px
//   # positionalble: bottom-right, top-right,bottom-left(default), top-left
//   # one DOM, one menu display
//   # hide DOM, when DOM element clicked
//   # TODO: multi-level meu
//   # TODO: respond to menu item changed

// Bug: 
//   # css animation is not right



( function() {
  class Menu extends HTMLElement {
    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* observeAttrChange */])(this, (attr, val) => {
        if (attr == 'class' && this.classList.contains('visible')) {
          this.open();
        }
      });
      this.hideMenu = this.close.bind(this); // so that hideMenu can be done from outside
      document.addEventListener('click', this.hideMenu);
    }

    disconnectedCallback() {
      document.removeEventListener('click', this.hideMenu);
    }

    open() {
      // show only this
      if (!this.classList.contains('visible')) { //  without, infinite loop, add <-> observe
        this.classList.add('visible');
      }
      // hide all other menus
      Array.from(document.querySelectorAll('a-menu')).forEach(menu => {
        (this.isSameNode(menu) === false) && menu.classList.remove('visible');
      });
      // When document is clicked, it closes all menus, but this remained to open
      this.justShown = true; // in case when attribute is changed by outside of this
      setTimeout(_ => this.justShown = false, 100);
    }

    close() {
      if (!this.justShown && !this.contains(event.target)) {
        this.classList.remove('visible');
      }
    }
  }
  
  customElements.define('a-menu', Menu);
})();


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


// dependant on an-icon
( function() {
  class NavItem extends HTMLElement {
    connectedCallback() {
      if (this.innerHTML) {
        this.innerHTML=`<span class='text'>${this.innerHTML}</span>`;
      }
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url

      this.addEventListener('click', this.setActiveItem.bind(this));
      this.icon = this.getAttribute('icon');
      this.shortcut = this.getAttribute('shortcut');
      if (this.icon) {
        let isMDIcon = this.icon.match(/^[a-z_]+$/);
        this.iconEl = document.createElement('an-icon');
        if (isMDIcon) {
          this.iconEl.innerHTML = this.icon;
        } else {
          this.iconEl.insertAdjacentHTML('beforeend', '<img src="'+this.icon+'" />')
        }
        this.insertBefore(this.iconEl, this.firstChild)
      }
      if (this.shortcut) {
        this.shortcutEl = document.createElement('div');
        this.shortcutEl.classList.add('shortcut');
        this.shortcutEl.innerHTML = this.shortcut;
        this.appendChild(this.shortcutEl);
      }
    }

    setActiveItem(event) {
      Array.from(this.parentElement.querySelectorAll('a-nav-item')).forEach(function(el) {
        el.classList.remove('active');
      }); 
      this.classList.add('active');
    }
  }
  
  customElements.define('a-nav-item', NavItem);
})();


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


//dependant on a-button
( function() {

  class Dialog extends HTMLElement {
    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
      this._regroupElements();
    }
    
    open(data) {
      //replace title, content, actions with data given
      data && this._updateContent(data);

      // move to document-level for z-indexing to work
      this.originalPos = {parent: this.parentElement, nextSibling: this.nextElementSibling};
      document.body.appendChild(this);
      document.body.style.overflow = 'hidden';
      this.classList.add('visible');
    }

    close() {
      // move back to the original position
      this.originalPos.parent.insertBefore(this, this.originalPos.nextSibling);
      document.body.style.overflow = '';
      this.classList.remove('visible');
    }
 
    _regroupElements() {
      let pageBlockerEl, containerEl;
      pageBlockerEl = document.createElement('div');
      pageBlockerEl.setAttribute('class', 'page-blocker');
      pageBlockerEl.addEventListener('click', () => {
        this.close();
      });
      this.appendChild(pageBlockerEl);

      containerEl = document.createElement('div');
      containerEl.setAttribute('class', 'container');
      this.appendChild(containerEl);

      Array.from(this.children).forEach(el => {
        if (el.tagName !== 'STYLE' && !el.isSameNode(containerEl) && !el.isSameNode(pageBlockerEl)) {
          containerEl.appendChild(el)
        }
      });
    }

    _updateContent(data) {
      let titleEl, contentEl, actionsEl;
      let appendEl = className  => {
        let el = document.createElement('div');
        el.classList.add(className);
        this.appendChild(el);
        return el;
      }
      if (data.title !== undefined) {
        titleEl = this.querySelector('.title') || appendEl('title');
        titleEl.innerHTML = data.title;
      }
      if (data.contents !== undefined) {
        contentEl = this.querySelector('.content') || appendEl('content');
        contentEl.innerHTML = data.contents;
      }
      if (data.actions !== undefined) {
        actionsEl = this.querySelector('.actions') || appendEl('actions');
        actionsEl.innerHTML = '';
        for (var key in data.actions) {
          let buttonEl = document.createElement('a-button');
          buttonEl.innerHTML = key;
          buttonEl.addEventListener('click', _ => {
            data.actions[key]();
            this.close();
          });
          actionsEl.appendChild(buttonEl);
        }
      }
    }
  }
  
  customElements.define('a-dialog', Dialog);
})();

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


(function() {
  var SVG = `
  <svg viewBox="0 0 32 32" width="32" height="32">
    <circle cx="16" cy="16" r="11"></circle>
    <polygon points="21.75,16 32.25,16 27,21.25"></polygon>
  </svg>`;

  class RefreshIndicator extends HTMLElement {

    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
      this.insertAdjacentHTML('beforeend', SVG);
    }

  }
  
  customElements.define('a-refresh-indicator', RefreshIndicator);
})();


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


( function() {
  class Tabs extends HTMLElement {

    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url

      this.indicatorEl = this._addIndicatorEl();
      this._registerNavItemClick();
      setTimeout(this._animateIndicator.bind(this), 100);
    }

    _addIndicatorEl() {
      let el = document.createElement('div');
      let thisWidth  = this.getBoundingClientRect().width;
      let left = (
          (this.querySelector('a-nav-item[active]') || this).getBoundingClientRect().left
          - this.getBoundingClientRect().left
        ) / thisWidth;

      el.classList.add('indicator');
      el.style.left = left*100 + '%';
      this.appendChild(el);
      return el;
    }

    _registerNavItemClick() {
      Array.from(this.querySelectorAll('a-nav-item')).forEach(navItem => {
        navItem.addEventListener('click', this._animateIndicator.bind(this));
      })
    }

    /**
     * animate the indicator below the active tab
     */
    _animateIndicator() {
      let indicatorEl = this.indicatorEl;
      let numTab = this.querySelectorAll('a-nav-item').length;
      let thisWidth  = this.getBoundingClientRect().width;
      let indicatorLeftFrom = parseFloat(indicatorEl.style.left||0);
      let indicatorLeftTo = (
          (this.querySelector('a-nav-item.active') || this).getBoundingClientRect().left
          - this.getBoundingClientRect().left
        ) / thisWidth;
      let move = indicatorLeftTo*100 - indicatorLeftFrom;

      indicatorEl.style.width = parseFloat(100/numTab) + '%';

      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* animate */])({
        duration: 450,
        timing: function(timeFraction) {
          return 1 - Math.sin(Math.acos(timeFraction));
        },
        draw: function(progress) {
          indicatorEl.style.left = indicatorLeftFrom + (progress*move) + '%';
        }
      });
    }
  
  }
  
  customElements.define('a-tabs', Tabs);
})();


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
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

        empty ? this.classList.add('empty') : this.classList.remove('empty');
        if (dirty && error) {
          this.classList.add('invalid'); 
          errMsgEl.innerHTML = error;
        } else {
          this.classList.remove('invalid')
        }
      }

      setStatus();

      this.addEventListener('click', event => {
        this.classList.add('active');
        this.inputEl.focus();
      });

      this.inputEl.addEventListener('blur', event => {
        this.classList.remove('active');
      });

      this.inputEl.addEventListener('change', event => {
        this.classList.remove('dirty');
        setStatus();
      });
    }
  }
  
  customElements.define('a-text-field', TextField);
})();


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


( function() {

  class Tooltip extends HTMLElement {
    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
      this._addEventListeners();
    }

    _addEventListeners() {
      this.parentElement.addEventListener('mouseenter', event => {
        this.originalPos = { 
          parent: event.target,
          nextSibling: this.nextSiblingNode
        };
        this._showTooltip();
      });
      this.parentElement.addEventListener('mouseleave', _ => {
        this.classList.remove('visible');
        this.originalPos.parent.insertBefore(this, this.originalPos.nextSibling);
      });
    }

    _showTooltip() {
      let parentBCR = this.originalPos.parent.getBoundingClientRect(); // relative to viewport
      let body = document.body;
      let docEl = document.documentElement;

      let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

      let clientTop = docEl.clientTop || body.clientTop || 0;
      let clientLeft = docEl.clientLeft || body.clientLeft || 0;

      let docPosTop = Math.round(parentBCR.top +  scrollTop - clientTop);
      let docPosLeft = Math.round(parentBCR.left + scrollLeft - clientLeft);

      let top = docPosTop + parentBCR.height + 24;

      this.style.top = top + 'px';
      this.style.left = '';
      this.style.right = '';

      document.body.appendChild(this);
      setTimeout(_ => {
        let thisBCR = this.getBoundingClientRect(); // it needs time to calc this properly
        let left = docPosLeft + (parentBCR.width / 2) - (thisBCR.width / 2);

        if (left < 8) {
          this.style.left = '8px';
        } else if (left + thisBCR.width > document.body.clientWidth) {
          this.style.right = '8px';
        } else {
          this.style.left = left + 'px';
        }

        this.classList.add('visible')
      }, 100);
    }
  }

  customElements.define('a-tooltip', Tooltip);
})();


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


( function() {
  class Icon extends HTMLElement {
    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
      let img = this.getAttribute('img');
      if (img) {
        this.style.backgroundImage = `url(${img})`;
        this.innerHTML = 'favorite';
      }
    }
  }

  customElements.define('an-icon', Icon);
})();


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


( function() {
  class ExpansionPanel extends HTMLElement {
    connectedCallback() {
      let titleEl = this.querySelector('.title');

      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this);
      titleEl.addEventListener('click', this._showThisPanelOnly.bind(this));
    }

    _showThisPanelOnly(event) {
      Array.from(document.querySelectorAll('an-expansion-panel')).forEach(panelEl => {
        this.classList.add('expanded');
        !panelEl.isSameNode(this) && panelEl.classList.remove('expanded');
      })
    }
  }
  
  customElements.define('an-expansion-panel', ExpansionPanel);
})();

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


(function() {
  class GridList extends HTMLElement {
    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this);
    }
  }
  
  customElements.define('a-grid-list', GridList);
})();


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


(function() {
  class List extends HTMLElement {
    connectedCallback() {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* addStyleSheet */])(this); //id, url
    }
  }
  
  customElements.define('a-list', List);
})();


/***/ })
/******/ ]);