import {addStyleSheet} from '../util.js';

(function() {
  var thisScript = document.currentScript;

  class GridList extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this);
    }
  }
  
  customElements.define('a-grid-list', GridList);
})();
