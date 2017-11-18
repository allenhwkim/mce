import '../ce-polyfill.js';
import {addStyleSheet, setTabbable} from '../util.js';

( function() {
  class Icon extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this); //id, url
      this._setImageIcon(); // if img attribute given, set image icon
      this.clickListener = this._onClick.bind(this);
      this._addEventListener();
    }

    disconnectedCallback() {
      this.removeEventListener('mouseup', this.clickListener);
      this.removeEventListener('touchend', this.clickListener);
    }

    _onClick(event) {
      let href = this.getAttribute('href');
      if (href) {
        window.location.href = href; //with href, go to the given url, 
      }
    }

    _addEventListener() {
      this.addEventListener('mouseup',  this.clickListener);
      this.addEventListener('touchend',  this.clickListener);
    }

    _setImageIcon() {
      let img = this.getAttribute('img');
      if (img) {
        this.style.backgroundImage = `url(${img})`;
        this.innerHTML = 'favorite';
      }
    }
  }

  customElements.define('an-icon', Icon);
})();

