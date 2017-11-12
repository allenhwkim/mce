import '../ce-polyfill.js';
import '../icon/main.js';
import {addStyleSheet} from '../util.js';

// dependant on an-icon
( function() {
  class NavItem extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this); //id, url
      this.regroupedOnce = false;
      this._regroupElements();
    }

    setActiveItem(event) {
      Array.from(this.parentElement.querySelectorAll('a-nav-item')).forEach(function(el) {
        el.classList.remove('active');
      }); 
      this.classList.add('active');
    }

    _regroupElements() {
      if (!this.regroupedOnce) {
        if (!this.querySelector('span.text')) {
          this.innerHTML = `<span class="text">${this.innerHTML}</span>`;
        }
        this.addEventListener('click', this.setActiveItem.bind(this));
        this.icon = this.getAttribute('icon');
        this.shortcut = this.getAttribute('shortcut');
        if (this.icon && !this.querySelector('an-icon')) {
          let isMDIcon = this.icon.match(/^[a-z_]+$/);
          this.iconEl = document.createElement('an-icon');
          if (isMDIcon) {
            this.iconEl.innerHTML = this.icon;
          } else {
            this.iconEl.insertAdjacentHTML('beforeend', '<img src="'+this.icon+'" />')
          }
          this.insertBefore(this.iconEl, this.firstChild)
        }
        if (this.shortcut && !this.querySelector('an-icon')) {
          this.shortcutEl = document.createElement('div');
          this.shortcutEl.classList.add('shortcut');
          this.shortcutEl.innerHTML = this.shortcut;
          this.appendChild(this.shortcutEl);
        }
      }
      this.regroupedOnce = true;
    }
  }
  
  customElements.define('a-nav-item', NavItem);
})();
