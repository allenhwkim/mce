import '../ce-polyfill.js';
import '../nav-item/main.js';
import {addStyleSheet, observeAttrChange} from '../util.js';

( function() {
  class NavDrawer extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this); //id, url
      observeAttrChange(this, (attr, val) => {
        if (attr === 'class') {
          // if drawer shown, disable body scroll
          document.body.style.overflow = this.classList.contains('visible') ? 'hidden' : '';
        }
      });
      this.regroupedOnce = false;
      this._regroupElements();
    }

    open() {
      this.classList.add('visible');
    }

    close() {
      this.classList.remove('visible');
    }

    _regroupElements() {
      if (!this.regroupedOnce) {
        let pageBlockerEl, contentsEl;
        pageBlockerEl = document.createElement('div');
        pageBlockerEl.setAttribute('class', 'page-blocker');
        pageBlockerEl.addEventListener('click', () => this.close());
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
      this.regroupedOnce = true;
    }

  }
  
  customElements.define('a-nav-drawer', NavDrawer);
})();
