import {addStyleSheet} from '../util.js';

( function() {
  var thisScript = document.currentScript;

  class BottomNavBar extends HTMLElement {
    constructor() {
      super();
      this._init();
    }

    _init() {
      addStyleSheet('a-bottom-nav-bar', '../components/bottom-nav-bar/bottom-nav-bar.css'); //id, url
    }
  }
  
  customElements.define('a-bottom-nav-bar', BottomNavBar);
})();