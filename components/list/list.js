import {addStyleSheet} from '../util.js';

(function() {
  var thisScript = document.currentScript;

  class List extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this, '../components/list/list.css'); //id, url
    }
  }
  
  customElements.define('a-list', List);
})();