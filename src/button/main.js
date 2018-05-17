import {observeAttrChange, setTabbable} from '../utils/index.js';

( function() {
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
   * <p data-height="600" data-theme-id="32189" data-slug-hash="aEVoYg" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>`
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
  class Button extends HTMLElement {
    
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
      })

      observeAttrChange(this, (attr, val) => {
        this.buttonAttrs.includes(attr) && buttonEl.setAttribute(attr, val);
      });
      
      if (!this.classList.contains('mce-disabled')) {
        setTabbable(this, _ => buttonEl.click());  // set tabindex and click/ENTER function
      } 
      this.appendChild(buttonEl);
    }

  }
  
  customElements.define('mce-button', Button); //name, class
})();
