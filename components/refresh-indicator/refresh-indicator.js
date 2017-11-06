import {addStyleSheet} from '../util.js';

(function() {
  var SVG = `
  <svg viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="11"></circle>
    <polygon points="21.75,16 32.25,16 27,21.25"></polygon>
  </svg>`;

  class RefreshIndicator extends HTMLElement {
    constructor() {
      super();
      this._init();
    }

    _init() {
      addStyleSheet(this, '../components/refresh-indicator/refresh-indicator.css'); //id, url
      this.insertAdjacentHTML('beforeend', SVG);
    }

  }
  
  customElements.define('a-refresh-indicator', RefreshIndicator);
})();