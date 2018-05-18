import {observeAttrChange, setTabbable} from '../utils/index.js';

( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar

  var iconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path class="mce-checked" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      <path class="mce-unchecked" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>`;

  /**
   * Radio buttons allow the selection of a single option from a set.
   *
   * [Material Design Spec](https://material.io/guidelines/components/selection-controls.html#)
   * 
   * ### example
   * ```
   * <mce-radio-button name="radio1" id="radio1"></mce-radio-button>
   * <label for="radio1">Unchecked</label>
   * ```
   *
   * <p data-height="300" data-theme-id="32189" data-slug-hash="yppeoe" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
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
      !this.classList.contains('mce-disabled') && setTabbable(this, _ => this.inputEl.click());
    }

    _addRealInput() {
      let inputEl = document.createElement('input');
      inputEl.setAttribute("type", "radio");
      Array.from(this.attributes).forEach( attr => {
        if (this.inputAttrs.includes(attr.name) && attr.value !== null) {
         inputEl.setAttribute(attr.name, attr.value);
         (attr.name === 'id') && this.setAttribute('id', 'mce-radio-button-'+attr.value);
        }
      });
      this.appendChild(inputEl);
      this.insertAdjacentHTML('beforeend', iconSVG);
      return inputEl;
    }

  }
  
  customElements.define('mce-radio-button', RadioButton); //name, class
})();
