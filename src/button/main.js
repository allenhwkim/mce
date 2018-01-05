import {observeAttrChange, setTabbable} from '../mce-util.js';

( function() {
  /**
   * Buttons communicate the action that will occur when the user touches them.
   * 
   * [Material Design Spec](https://material.io/guidelines/components/buttons.html#buttons-style)
   * 
   * ### example
   * ```
   * <div>
   *   <a-button>
   *     <an-icon>search</an-icon> Normal </a-button>
   *   <a-button class="dark">
   *     <an-icon>search</an-icon> Normal </a-button>
   *   <a-button disabled="">
   *     <an-icon>search</an-icon> disabled </a-button>
   *   <a-button disabled="" class="dark">
   *     <an-icon>search</an-icon> disabled </a-button>
   * </div>
   * ```
   * <p data-height="300" data-theme-id="32189" data-slug-hash="aEVoYg" data-default-tab="html,result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>`
   * 
   * ### `a-button` attributes 
   *  |name|value|description|
   *  |---|---|---|
   *  |nam| | name of button
   *  |value| | button value
   *  |disabled| | if defined, a button is disabled
   * 
   * ### `a-button` style classes
   *  |name|value|description|
   *  |---|---|---|
   *  |dark| | A button with dark background color and light text
   *  |raised| | if defined, light background with dark icons and text 
   *  |fab| | if defined, A floating action buttoin; a circular button with shadow effect
   *  |mini| | if defined, A 40 pixel x 40 pixel
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
      
      if (!this.classList.contains('disabled')) {
        setTabbable(this, _ => buttonEl.click());  // set tabindex and click/ENTER function
      } 
      this.appendChild(buttonEl);
    }

  }
  
  customElements.define('a-button', Button); //name, class
})();
