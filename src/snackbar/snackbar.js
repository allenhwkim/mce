import {observeAttrChange} from '../utils/index.js';

/**
 * Snackbars contain a single line of text directly related to the operation performed. 
 * They may contain a text action, but no icons.
 *
 * [Material Design Spec](https://material.io/guidelines/components/snackbars-toasts.html#snackbars-toasts-specs)
 *
 * ### example
 * ```
 * <mce-snackbar>Message has been processed.</mce-snackbar>
 * ```
 *
 * <p data-height="300" data-theme-id="32189" data-slug-hash="PEJKKo" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
cript async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
 *
 * ### `mce-snackbar` attributes
 *  |name|value|description|
 *  |---|---|--|
 *  |bottom|number|distance from bottom in pixel. e.g. 30|
 * 
 * ### `mce-snackbar` classes 
 *  |name|description|
 *  |---|---|
 *  |mce-visible| show this snackbar|
 * 
 */

export class Snackbar extends HTMLElement {
  connectedCallback() {
    this.bottom = this.getAttribute('bottom') || '56';
    this.open();
  }

  set message(msg) {
    if (this.querySelector('.text')) {
      this.querySelector('.text').innerHTML = msg;
    } else {
      this.innerHTML = msg;
    }
  }

  /**
   * show mce-snackbar by adding `mce-visible` class
   * @param {string} msg message to show
   * @returns {void}
   */
  open(msg) {
    msg && (this.message = msg);
    this.style.bottom  = this.bottom + 'px';
    this.classList.add('mce-visible');
    setTimeout(_ => {
      this.classList.remove('mce-visible');
    }, 3000);
  } 

  /**
   * close mce-snackbar by removing `mce-visible` class
   * @returns {void}
   */
  close() {
    this.classList.remove('mce-visible');
  }

}

