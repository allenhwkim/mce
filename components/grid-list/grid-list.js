import {addStyleSheet} from '../util.js';

(function() {
  var thisScript = document.currentScript;

  class GridList extends HTMLElement {
    constructor() {
      super();
      this._init();
    }

    _init() {
      addStyleSheet('a-grid-list', '../components/grid-list/grid-list.css'); //id, url
    }
  }
  
  customElements.define('a-grid-list', GridList);
})();