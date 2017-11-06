import {addStyleSheet} from '../util.js';

( function() {
  var thisScript = document.currentScript;

  class Icon extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this, '../components/icon/icon.css'); //id, url
      let img = this.getAttribute('img');
      if (img) {
        this.style.backgroundImage = `url(${img})`;
        this.innerHTML = 'favorite';
      }
    }
  }

  customElements.define('an-icon', Icon);
})();
