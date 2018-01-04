import {observeAttrChange, setTabbable} from '../mce-util.js';

( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar

  var iconSVG = `
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path class="checked"   d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      <path class="unchecked" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>`;

  /**
   * Checkbox
   * [Material Design Spec](https://material.io/guidelines/components/selection-controls.html#)
   * Checkboxes allow the selection of multiple options from a set.
   * 
   * ### example
   * ```
   * <div>
   *   <a-checkbox id="checkbox1"></a-checkbox>
   *   <label for="checkbox1">Unchecked</label>
   *   <a-checkbox id="checkbox2" checked=""></a-checkbox>
   *   <label for="checkbox2">Checked</label>
   *   <a-checkbox id="checkbox3" disabled=""></a-checkbox>
   *   <label for="checkbox3">Disabled</label>
   *   <a-checkbox id="checkbox4" checked="" disabled=""></a-checkbox>
   *   <label for="checkbox4">Disabled</label>
   * </div> 
   * ```
   *
   * ### `a-checkbox` atttibutes
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
      !this.classList.contains('disabled') && setTabbable(this, _ => this.inputEl.click())
    }

    _addRealInput() {
      let inputEl = document.createElement('input');
      inputEl.setAttribute("type", "checkbox");
      inputEl.setAttribute("tabindex", "-1");
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
