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

import '../ce-polyfill.js';
import '../nav-item/main.js';
import {addStyleSheet, observeAttrChange} from '../util.js';

( function() {
  class Menu extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this); //id, url
      observeAttrChange(this, (attr, val) => {
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
