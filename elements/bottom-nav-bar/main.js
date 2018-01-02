import '../mce-polyfill.js';
import '../nav-item/main.js';
import {addStyleSheet, windowResizeHandler} from '../mce-util.js';

( function() {
  /**
   * Bottom Nav Bar
   * https://material.io/guidelines/components/bottom-navigation.html#bottom-navigation-specs
   * 
   * ## Example
   * ```
   * <a-bottom-nav-bar>
   *   <a-nav-item icon="favorite">Favourite</a-nav-item>
   *   <a-nav-item icon="search" class="disabled">Disabled</a-nav-item>
   *   <a-nav-item icon="alarm">Alarm</a-nav-item>
   *   <a-nav-item icon="music_note">Music</a-nav-item>
   * </a-bottom-nav-bar>
   * ```
   *
   * ### `a-bottom-nav-bar` style classes
   *  |name|value|description|
   *  |---|---|---|
   *  |fixed| | if defined, the nav bar is positioned at the bottom the viewport 
   */
  class BottomNavBar extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this);
      if (window.ce && window.ce.resizeHandler) {} else {
        window.ce = {resizeHandler: windowResizeHandler};
        window.addEventListener('resize', window.ce.resizeHandler);
      }
    }
  }
  
  customElements.define('a-bottom-nav-bar', BottomNavBar);
})();
