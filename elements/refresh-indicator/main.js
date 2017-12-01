import '../ce-polyfill.js';
import {addStyleSheet} from '../util.js';

(function() {
  var SVG = `
  <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 32 32" width="32" height="32">
    <circle cx="16" cy="16" r="11"></circle>
    <polygon points="21.75,16 32.25,16 27,21.25"></polygon>
  </svg>`;

  class RefreshIndicator extends HTMLElement {

    connectedCallback() {
      addStyleSheet(this); //id, url
      this.insertAdjacentHTML('beforeend', SVG);
    }

  }
  
  customElements.define('a-refresh-indicator', RefreshIndicator);
})();
