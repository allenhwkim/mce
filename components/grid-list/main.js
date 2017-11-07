import {addStyleSheet} from '../util.js';

(function() {
  class GridList extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this);
    }
  }
  
  customElements.define('a-grid-list', GridList);
})();
