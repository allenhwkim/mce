import {windowResizeHandler} from '../mce-util.js';

( function() {
  /**
   * The app bar is a special kind of toolbar that’s used for branding, navigation, search, and actions.
   *
   * [Material Design Spec](https://material.io/guidelines/layout/structure.html#structure-app-bar)
   * 
   * ### example
   * ```
   * <an-app-bar app-title="app-bar" class="light">
   *   <div class="nav-icon">
   *     <i class="material-icons icon">menu</i>
   *   </div>
   *   <span class="title">App Bar Light</span>
   *   <div class="icons">
   *     <i class="material-icons icon">favorite</i>
   *     <i class="material-icons icon">search</i>
   *     <i class="material-icons icon">more_vert</i>
   *   </div>
   * </an-app-bar>
   * ```
   * <p data-height="300" data-theme-id="32189" data-slug-hash="EobYmr" data-default-tab="html,result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
   *
   * ### `an-app-bar` style classes
   *  |name|value|description|
   *  |---|---|---|
   *  |light| | if defined, light background with dark icons and text
   * 
   * 
   * ### Child element of `an-app-bar` style classes
   *  |name|value|description|
   *  |---|---|---|
   *  |nav-icon| | the container class of left-side navigation icon(s)
   *  |icons| | the container class of right-side icons
   *  |title| | the container class of title, which is positioned after navigation icons
   *
   */
  class AppBar extends HTMLElement {
    connectedCallback() {
      if (window.ce && window.ce.resizeHandler) {} else {
        window.ce = {resizeHandler: windowResizeHandler};
        window.addEventListener('resize', window.ce.resizeHandler);
      }
      this._addFiller();
    }

    /**
     * sets the title of app bar
     * @param {string} title title for the app bar
     */
    setTitle(title) {
      this.querySelector('.title').innerHTML = title;
    }

    _addFiller() {
      let el = document.createElement('div');
      el.classList.add('an-app-bar-filler');
      this.parentElement.insertBefore(el, this.nextSibling);
    }
  }
  
  window.customElements.define('an-app-bar', AppBar);
})();
