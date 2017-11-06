import {addStyleSheet} from '../util.js';

(function() {
  var thisScript = document.currentScript;

  class GridList extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this, '../components/grid-list/grid-list.css'); //id, url
    }
  }
  
  customElements.define('a-grid-list', GridList);
})();