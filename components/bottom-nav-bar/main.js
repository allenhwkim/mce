import '../ce-polyfill.js';
import {addStyleSheet} from '../util.js';

( function() {
  class BottomNavBar extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this);
    }
  }
  
  customElements.define('a-bottom-nav-bar', BottomNavBar);
})();
