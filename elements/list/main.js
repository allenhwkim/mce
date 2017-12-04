import '../ce-polyfill.js';
import '../icon/main.js';
import {addStyleSheet} from '../util.js';

(function() {
  class List extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this); //id, url
    }
  }
  
  customElements.define('a-list', List);
})();