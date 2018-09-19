import {observeAttrChange, setTabbable} from '../utils/index.js';

/**
 * Buttons communicate the action that will occur when the user touches them.
 * 
 * [Material Design Spec](https://material.io/guidelines/components/buttons.html#buttons-style)
 * 
 * ### example
 * ```
 * <div>
 *   <mce-button>
 *     <mce-icon>search</mce-icon> Normal </mce-button>
 *   <mce-button class="mce-dark">
 *     <mce-icon>search</mce-icon> Normal </mce-button>
 *   <mce-button disabled="">
 *     <mce-icon>search</mce-icon> disabled </mce-button>
 *   <mce-button disabled="" class="mce-dark">
 *     <mce-icon>search</mce-icon> disabled </mce-button>
 * </div>
 * ```
 *
 * <iframe height='265' scrolling='no' title='mce button' src='//codepen.io/allenhwkim/embed/aEVoYg/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/aEVoYg/'>mce button</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 * 
 * ### `mce-button` attributes 
 *  |name|value|description|
 *  |---|---|---|
 *  |nam| | name of button
 *  |value| | button value
 *  |disabled| | if defined, a button is disabled
 * 
 * ### `mce-button` style classes
 *  |name|value|description|
 *  |---|---|---|
 *  |mce-dark| | A button with dark background color and light text
 *  |mce-raised| | if defined, light background with dark icons and text 
 *  |mce-fab| | if defined, A floating action buttoin; a circular button with shadow effect
 *  |mce-mini| | if defined, A 40 pixel x 40 pixel
 */
export class Button extends HTMLElement {
  
  connectedCallback() {
    this.buttonAttrs = ['name', 'value', 'disabled'];
    setTimeout(this._addRealButton.bind(this));
  }

  set disabled(bool) {
    bool ? this.setAttribute('disabled','') : this.removeAttribute('disabled');
  }

  _addRealButton() {
    let buttonEl = document.createElement('button');
    buttonEl.setAttribute('tabindex', '-1');
    Array.from(this.attributes).forEach(attr => {
      this.buttonAttrs.includes(attr.name) && buttonEl.setAttribute(attr.name, attr.value);
    });

    observeAttrChange(this, (attr, val) => {
      this.buttonAttrs.includes(attr) && buttonEl.setAttribute(attr, val);
    });
    
    if (!this.classList.contains('mce-disabled')) {
      setTabbable(this, _ => buttonEl.click());  // set tabindex and click/ENTER function
    } 
    this.appendChild(buttonEl);
  }

}
  
customElements.define('mce-button', Button);
