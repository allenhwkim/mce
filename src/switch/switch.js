import {observeAttrChange, setTabbable} from '../utils/index.js';

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
 * <iframe height='265' scrolling='no' title='LeeGzQ' src='//codepen.io/allenhwkim/embed/LeeGzQ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/LeeGzQ/'>LeeGzQ</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-switch` Attributes 
 * It accepts all `input` checkbox attributes. E.g., id, name, value, disaled, or checked
 */
export class Switch extends HTMLElement {
  
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
    });
    inputEl.addEventListener('click', _ => {
      inputEl.checked ? this.setAttribute('checked', '') : this.removeAttribute('checked');
    });
    this.appendChild(inputEl);
    return inputEl;
  }

}

customElements.define('mce-switch', Switch);
