import '../ce-polyfill.js';
import {addStyleSheet} from '../util.js';

( function() {
  class Icon extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this); //id, url
      let img = this.getAttribute('img');
      if (img) {
        this.style.backgroundImage = `url(${img})`;
        this.innerHTML = 'favorite';
      }
    }
  }

  customElements.define('an-icon', Icon);
})();
