import {addStyleSheet} from '../util.js';

( function() {
  //https://material.io/guidelines/layout/structure.html#structure-app-bar
  class AppBar extends HTMLElement {
    constructor() {
      super();
      this._init();
    }
    
    _init() {
      addStyleSheet('ce-app-bar-style', '../components/app-bar/app-bar.css');
    }
  }
  
  customElements.define('an-app-bar', AppBar);
})();