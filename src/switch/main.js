import {observeAttrChange, setTabbable} from '../mce-util.js';

( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar

  /**
   * Switches allow a selection to be turned on or off.
   *
   * [Material Design Spec](https://material.io/guidelines/components/selection-controls.html#)
   *
   * ## Examples
   * ```
   * <mce-switch id="checkbox21"></mce-switch> <label for="checkbox21">Unchecked</label>
   * ```
   *
   * <p datmce-height="300" datmce-theme-id="32189" datmce-slug-hash="BJmaeb" datmce-default-tab="html,result" datmce-user="allenhwkim" datmce-embed-version="2" datmce-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
   *
   * ### `mce-switch` Attributes 
   * It accepts all `input` checkbox attributes. E.g., id, name, value, disaled, or checked
   */
  class Switch extends HTMLElement {
    
    connectedCallback() {
      this.inputAttrs = ['id', 'name', 'value', 'disabled', 'checked'];
      this.inputEl = this._addRealInput();
      observeAttrChange(this, (attr, val) => {
        val === null ? this.inputEl.removeAttribute(attr) : this.inputEl.setAttribute(attr, val);
      });
      setTabbable(this, _ => this.inputEl.click());
    }

    _addRealInput() {
      let inputEl = document.createElement('input');
      inputEl.setAttribute("type", "checkbox");
      Array.from(this.attributes).forEach( attr => {
        if (this.inputAttrs.includes(attr.name) && attr.value !== null) {
         inputEl.setAttribute(attr.name, attr.value);
         (attr.name === 'id') && this.setAttribute('id', 'mce-switch-'+attr.value);
        }
      })
      inputEl.addEventListener('click', _ => {
        inputEl.checked ? this.setAttribute('checked', '') : this.removeAttribute('checked');
      });
      this.appendChild(inputEl);
      return inputEl;
    }

  }
  
  customElements.define('mce-switch', Switch); //name, class
})();
