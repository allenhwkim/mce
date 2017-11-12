import '../ce-polyfill.js';
import '../icon/main.js';
import {addStyleSheet, observeAttrChange} from '../util.js';

( function() {
  const HTML = `
    <label for="__ID__">
      <an-icon>search</i>
    </label>
    <span class="input-wrapper">
      <input id="__ID__" autocomplete="off" placeholder="Search">
      <an-icon class="clear">clear</i>
    </span>
  `;

  class Search extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this); //id, url
      this.regroupedOnce = false;
      this._regroupElements();
      this._addEventListeners();
    }

    search(event) {
      let inputWrapper = this.querySelector('.input-wrapper');
      let inputEl = this.querySelector('input');

      if (inputWrapper.classList.contains('visible')) {
        let customEvent = new CustomEvent('search', event);
        this.dispatchEvent(customEvent);
      } else {
        inputWrapper.classList.add('visible');
        setTimeout(_ => inputEl.focus());
      }
    }

    close() {
      let inputWrapper = this.querySelector('.input-wrapper');
      let inputEl = this.querySelector('input');

      inputEl.value = '';
      inputWrapper.classList.remove('visible');
    }

    _regroupElements() {
      if (!this.regroupedOnce) {
        let id = 'a-search-' + Math.round(Math.random()*Math.pow(10,9));
        this.innerHTML = HTML.replace('__ID__', id);
      }
      this.regroupedOnce = true;
    }

    _addEventListeners() {
      let searchIcon = this.querySelector('label');
      let clearIcon = this.querySelector('.clear');
      let inputEl = this.querySelector('input');
      let inputWrapper = this.querySelector('.input-wrapper');

      // when search icon is clicked, show input field
      searchIcon.addEventListener('mousedown', _ => this.search());
      // when input is not focused, hide input field
      inputEl.addEventListener('blur', _ => this.close());

      // when clear is pressed, clear input field
      clearIcon.addEventListener('mousedown', function(event) {
        inputEl.focus();
        inputEl.value='';
        event.preventDefault();
      });

      inputEl.addEventListener('keydown', event => {
        (event.keyCode === 13) && this._performSearch();
      })

      // execute custom search function
      this.addEventListener('search', _ => this._performSearch());
    }

    _performSearch() {
      let inputEl = this.querySelector('input');
      if (inputEl.value) {
        let onSearch = this.getAttribute('on-search');
        let func = new Function('keyword', onSearch);
        func(inputEl.value);
      }
    }

  }
  
  customElements.define('a-search', Search);
})();