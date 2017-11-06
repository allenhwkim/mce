import {addStyleSheet, observeAttrChange} from '../util.js';

( function() {
  var thisScript = document.currentScript;

  class NavDrawer extends HTMLElement {
    show() {
      this.setAttribute('visible', '');
    }
    hide() {
      this.removeAttribute('visible');
    }

    connectedCallback() {
      addStyleSheet(this, '../components/nav-drawer/nav-drawer.css'); //id, url
      observeAttrChange(this, (attr, val) => {
        if (attr === 'visible') {
          document.body.style.overflow = val !== null ? 'hidden' : '';
        }
      });
      this._regroupElements();
    }

    _regroupElements() {
      let pageBlockerEl, contentsEl;
      pageBlockerEl = document.createElement('div');
      pageBlockerEl.setAttribute('class', 'page-blocker');
      pageBlockerEl.addEventListener('click', () => this.hide());
      this.appendChild(pageBlockerEl);

      contentsEl = document.createElement('div');
      contentsEl.setAttribute('class', 'contents');
      this.appendChild(contentsEl);

      Array.from(this.children).forEach(el => {
        if (!el.isSameNode(contentsEl) && !el.isSameNode(pageBlockerEl)) {
          contentsEl.appendChild(el)
        }
      });
    }

  }
  
  customElements.define('a-nav-drawer', NavDrawer);
})();