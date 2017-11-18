import '../ce-polyfill.js';
import '../icon/main.js';
import {addStyleSheet, observeAttrChange} from '../util.js';

( function() {
  const HTML = `
    <label for="__ID__" tabindex="0">
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
      searchIcon.addEventListener('mouseup', this._showInputField.bind(this));
      searchIcon.addEventListener('touchend', this._showInputField.bind(this));

      searchIcon.addEventListener('keydown', _ => {
        (event.key === ' ' || event.key === 'Enter') && inputWrapper.classList.toggle('visible');
      });

      // when input is not focused, hide input field
      inputEl.addEventListener('blur', _ => this.close());
      inputEl.addEventListener('keydown', event => {
        (event.key === 'Enter') && this._executeOnSearch();
      })

      // when clear is pressed, clear input field
      clearIcon.addEventListener('mouseup', this._clearInputField.bind(this));
      clearIcon.addEventListener('touchend',this._clearInputField.bind(this));

      // execute custom search function
      this.addEventListener('search', _ => this._executeOnSearch());
    }

    _showInputField(event) {
      let inputEl = this.querySelector('input');
      let inputWrapper = this.querySelector('.input-wrapper');

      if (inputWrapper.classList.contains('visible') && inputEl.value) {
        let customEvent = new CustomEvent('search', event);
        this.dispatchEvent(customEvent);
      } else {
        inputWrapper.classList.toggle('visible');
        setTimeout(_ => inputEl.focus());
      }
    }

    _clearInputField(event) {
      let inputEl = this.querySelector('input');
      inputEl.focus();
      inputEl.value='';
      event.preventDefault();
    }

    _executeOnSearch() {
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