import '../ce-polyfill.js';
import {addStyleSheet, observeAttrChange, setTabbable} from '../util.js';

( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar
  class Button extends HTMLElement {
    
    connectedCallback() {
      this.buttonAttrs = ['name', 'value', 'disabled'];
      this.buttonEl = this._addRealButton();
      observeAttrChange(this, (attr, val) => {
        this.buttonAttrs.includes(attr) && this.buttonEl.setAttribute(attr, val);
      });
      addStyleSheet(this); //id, url
      !this.classList.contains('disabled') && 
        setTabbable(this, _ => this.buttonEl.click());  // set tabindex and click/ENTER function
    }

    _addRealButton() {
      let buttonEl = document.createElement('button');
      buttonEl.setAttribute('tabindex', '-1');
      Array.from(this.attributes).forEach(attr => {
        this.buttonAttrs.includes(attr.name) && buttonEl.setAttribute(attr.name, attr.value);
      })
      this.appendChild(buttonEl);
      return buttonEl;
    }

  }
  
  customElements.define('a-button', Button); //name, class
})();