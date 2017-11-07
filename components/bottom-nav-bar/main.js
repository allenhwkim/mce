import {addStyleSheet} from '../util.js';

( function() {
  var thisScript = document.currentScript;

  class BottomNavBar extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this);
    }
  }
  
  customElements.define('a-bottom-nav-bar', BottomNavBar);
})();
