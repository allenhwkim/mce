import {observeAttrChange} from '../mce-util.js';

( function() {
  const HTML = `
    <label for="__ID__" tabindex="0">
      <mce-icon>search</i>
    </label>
    <span class="mce-input-wrapper">
      <input id="__ID__" autocomplete="off" placeholder="Search">
      <mce-icon class="mce-clear">clear</i>
    </span>
  `;

  /**
   * Search allows users to locate app content quickly.
   *
   * [Material Design Spec](https://material.io/guidelines/patterns/search.html#search-in-app-search)
   *
   * ### example
   * ```
   * <mce-search on-search="alert('You are searching...'+keyword)"></mce-search>
   * ```
   *
   * <p datmce-height="300" datmce-theme-id="32189" datmce-slug-hash="BJmaeb" datmce-default-tab="html,result" datmce-user="allenhwkim" datmce-embed-version="2" datmce-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
   *
   * 
   * ### `mce-button` Attributes 
   *  |name|value|description|
   *  |---|---|---|
   *  |on-search|function| A Javascript code to execute for search with the keyword. e.g. `alert(keyword)`
   * 
   */

  class Search extends HTMLElement {
    connectedCallback() {
      this.regroupedOnce = false;
      this._regroupElements();
      this._addEventListeners();
    }

   close() {
      let inputWrapper = this.querySelector('.mce-input-wrapper');
      let inputEl = this.querySelector('input');

      inputEl.value = '';
      inputWrapper.classList.remove('mce-visible');
    }

    _regroupElements() {
      if (!this.regroupedOnce) {
        let id = 'mce-search-' + Math.round(Math.random()*Math.pow(10,9));
        this.innerHTML = HTML.replace('__ID__', id);
      }
      this.regroupedOnce = true;
    }

    _addEventListeners() {
      let searchIcon = this.querySelector('label');
      let clearIcon = this.querySelector('.mce-clear');
      let inputEl = this.querySelector('input');
      let inputWrapper = this.querySelector('.mce-input-wrapper');

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
      let inputWrapper = this.querySelector('.mce-input-wrapper');

      if (inputWrapper.classList.contains('mce-visible') && inputEl.value) {
        let customEvent = new CustomEvent('search', event);
        this.dispatchEvent(customEvent);
      } else {
        inputWrapper.classList.toggle('mce-visible');
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
  
  customElements.define('mce-search', Search);
})();
