import {addStyleSheet} from '../util.js';

(function() {

  class Card extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this); //id, url
    }
  }
  
  customElements.define('a-card', Card);
})();