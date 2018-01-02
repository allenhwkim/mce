import '../mce-polyfill.js';
import {addStyleSheet, windowResizeHandler} from '../mce-util.js';

( function() {
  /**
   * App Bar
   * https://material.io/guidelines/layout/structure.html#structure-app-bar
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
   *
   * ### `an-app-bar` style classes
   *  |name|value|description|
   *  |---|---|---|
   *  |fixed| | if defined, the app-bar is fixed positioned on the top of the viewport
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
      addStyleSheet(this);
      if (window.ce && window.ce.resizeHandler) {} else {
        window.ce = {resizeHandler: windowResizeHandler};
        window.addEventListener('resize', window.ce.resizeHandler);
      }
      this._addFiller();
    }

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
