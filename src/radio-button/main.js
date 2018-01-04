import {observeAttrChange, setTabbable} from '../mce-util.js';

( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar

  var iconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path class="checked" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      <path class="unchecked" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>`;

  /**
   * [Material Design Spec](https://material.io/guidelines/components/selection-controls.html#)
   * Radio buttons allow the selection of a single option from a set.
   * 
   * ### example
   * ```
   * <a-radio-button name="radio1" id="radio1"></a-radio-button>
   * <label for="radio1">Unchecked</label>
   * ```
   * 
   * ### `radio-button` Attributes 
   * It accepts all `input` checkbox attributes. E.g., id, name, value, disaled, or checked
   */
  class RadioButton extends HTMLElement {
    connectedCallback() {
      this.inputAttrs = ['id', 'name', 'value', 'disabled', 'checked'];
      this.inputEl = this._addRealInput();
      observeAttrChange(this, (attr, val) => {
        val === null ? this.inputEl.removeAttribute(attr) : this.inputEl.setAttribute(attr, val);
      });
      !this.classList.contains('disabled') && setTabbable(this, _ => this.inputEl.click());
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
