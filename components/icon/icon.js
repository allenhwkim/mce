import {addStyleSheet} from '../util.js';

( function() {
  var thisScript = document.currentScript;

  class Icon extends HTMLElement {
    constructor() {
      super();
      this._init();
    }

    _init() {
      addStyleSheet('an-icon', '../components/icon/icon.css'); //id, url
    }

    connectedCallback() {
      let img = this.getAttribute('img');
      if (img) {
        this.style.backgroundImage = `url(${img})`;
        this.innerHTML = 'favorite';
      }
    }
  }

  customElements.define('an-icon', Icon);
})();
