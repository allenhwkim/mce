import {windowResizeHandler} from '../utils/index.js';

/**
 * The app bar is a special kind of toolbar that’s used for branding, navigation, search, and actions.
 *
 * [Material Design Spec](https://material-components.github.io/material-components-web-catalog/#/component/top-app-bar)
 * 
 * ### example
 * ```
 * <mce-app-bar app-title="app-bar" class="mce-light">
 *   <div class="mce-nav-icon">
 *     <mce-icon>menu</mce-icon>
 *   </div>
 *   <span class="mce-title">App Bar Light</span>
 *   <div class="mce-icons">
 *     <mce-icon>favorite</mce-icon>
 *     <mce-icon>search</mce-icon>
 *     <mce-icon>more_vert</mce-icon>
 *   </div>
 * </mce-app-bar>
 * ```
 *
 * <iframe height='265' scrolling='no' title='mce an-app-bar' src='//codepen.io/allenhwkim/embed/EobYmr/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/EobYmr/'>mce an-app-bar</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-app-bar` style classes
 *  |name|value|description|
 *  |---|---|---|
 *  |mce-light| | if defined, light background with dark icons and text
 * 
 * 
 * ### Child element of `mce-app-bar` style classes
 *  |name|value|description|
 *  |---|---|---|
 *  |mce-nav-icon| | the container class of left-side navigation icon(s)
 *  |mce-icons| | the container class of right-side icons
 *  |mce-title| | the container class of title, which is positioned after navigation icons
 *
 */
export class AppBar extends HTMLElement {
  connectedCallback() {
    if (window.ce && window.ce.resizeHandler) {} else {
      window.ce = {resizeHandler: windowResizeHandler};
      window.addEventListener('resize', window.ce.resizeHandler);
      window.addEventListener('load', window.ce.resizeHandler);
    }
    this._addFiller();
  }

  /**
   * sets the title of app bar
   * @param {string} title title for the app bar
   */
  setTitle(title) {
    this.querySelector('.mce-title').innerHTML = title;
  }

  _addFiller() {
    let el = document.createElement('div');
    el.classList.add('mce-app-bar-filler');
    this.parentElement.insertBefore(el, this.nextSibling);
  }
}

customElements.define('mce-app-bar', AppBar);
