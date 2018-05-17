import {observeAttrChange, setTabbable} from '../utils/index.js';

( function() {
  var iconSVG = `
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path class="checked"   d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      <path class="unchecked" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>`;

  /**
   * Checkboxes allow the selection of multiple options from a set.
   *
   * [Material Design Spec](https://material.io/guidelines/components/selection-controls.html#)
   * 
   * ### example
   * ```
   * <div>
   *   <mce-checkbox id="checkbox1"></mce-checkbox>
   *   <label for="checkbox1">Unchecked</label>
   *   <mce-checkbox id="checkbox2" checked=""></mce-checkbox>
   *   <label for="checkbox2">Checked</label>
   *   <mce-checkbox id="checkbox3" disabled=""></mce-checkbox>
   *   <label for="checkbox3">Disabled</label>
   *   <mce-checkbox id="checkbox4" checked="" disabled=""></mce-checkbox>
   *   <label for="checkbox4">Disabled</label>
   * </div> 
   * ```
   *
   * <p data-height="400" data-theme-id="32189" data-slug-hash="BJmaeb" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
   *
   * ### `mce-checkbox` atttibutes
   *  It accepts all `input` checkbox attributes. E.g., id, name, value, disaled, or checked
   * 
   */
  class Checkbox extends HTMLElement {
    connectedCallback() {
      this.inputAttrs = ['id', 'name', 'value', 'disabled', 'checked'];
      this.inputEl = this._addRealInput();
      observeAttrChange(this, (attr, val) => {
        val === null ? this.inputEl.removeAttribute(attr) : this.inputEl.setAttribute(attr, val);
      });
      if(this.getAttribute('disabled') !== null) {
        setTabbable(this, _ => this.inputEl.click());
      }  
    }

    _addRealInput() {
      let inputEl = document.createElement('input');
      inputEl.setAttribute("type", "checkbox");
      inputEl.setAttribute("tabindex", "-1");
      Array.from(this.attributes).forEach( attr => {
        if (this.inputAttrs.includes(attr.name) && attr.value !== null) {
         inputEl.setAttribute(attr.name, attr.value);
         (attr.name === 'id') && this.setAttribute('id', 'mce-checkbox-'+attr.value);
        }
      })
      this.appendChild(inputEl);
      this.insertAdjacentHTML('beforeend', iconSVG)
      return inputEl;
    }

  }
  
  customElements.define('mce-checkbox', Checkbox); //name, class
})();
