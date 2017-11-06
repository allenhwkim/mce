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

import {addStyleSheet, observeAttrChange} from '../util.js';

( function() {
  var thisScript = document.currentScript;

  class Menu extends HTMLElement {
    constructor() {
      super();
      this._init();
    }

    _init() {
      addStyleSheet(this, '../components/menu/menu.css'); //id, url
      observeAttrChange(this, (attr, val) => this._attrChanged(attr, val));
      this.hideMenu = this._hideMenu.bind(this); // so that hideMenu can be done from outside
    }

    connectedCallback() {
      document.addEventListener('click', this.hideMenu);
    }

    disconnectedCallback() {
      document.removeEventListener('click', this.hideMenu);
    }

    _attrChanged(attr, newVal) {
      if (attr == 'visible' && newVal === '') {
        Array.from(document.querySelectorAll('a-menu')).forEach(menu => {
          (this.isSameNode(menu) === false) && menu.removeAttribute('visible');
        });
        this.justShown = true; // in case when attribute is changed by outside of this
        setTimeout(_ => this.justShown = false, 100);
      }
    }

    _hideMenu(event) {
      if (!this.justShown && !this.contains(event.target)) {
        this.removeAttribute('visible');
      }
    }
  }
  
  customElements.define('a-menu', Menu);
})();