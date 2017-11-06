import {addStyleSheet} from '../util.js';

( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar
  class AppBar extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this, '../components/app-bar/app-bar.css');
    }
  }
  
  window.customElements.define('an-app-bar', AppBar);
})();
