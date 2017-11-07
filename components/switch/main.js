import {addStyleSheet, observeAttrChange} from '../util.js';

( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar

  class Switch extends HTMLElement {
    
    connectedCallback() {
      this.inputAttrs = ['id', 'name', 'value', 'disabled', 'checked'];
      addStyleSheet(this); //id, url
      this.inputEl = this._addRealInput();
      observeAttrChange(this, (attr, val) => {
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
