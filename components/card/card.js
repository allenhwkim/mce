import {addStyleSheet} from '../util.js';

(function() {
  var thisScript = document.currentScript;

  class Card extends HTMLElement {
    constructor() {
      super();
      this._init();
    }

    _init() {
      addStyleSheet(this, '../components/card/card.css'); //id, url
    }
  }
  
  customElements.define('a-card', Card);
})();