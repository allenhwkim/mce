import '../ce-polyfill.js';
import {addStyleSheet, observeAttrChange} from '../util.js';

// TODO: MutationObserver for all attributes
( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar
  class Button extends HTMLElement {
    
    connectedCallback() {
      this.buttonAttrs = ['name', 'value', 'disabled'];
      addStyleSheet(this); //id, url
      this.buttonEl = this._addRealButton();
      observeAttrChange(this, (attr, val) => {
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