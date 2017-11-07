import {addStyleSheet} from '../util.js';

// dependant on an-icon
( function() {
  var thisScript = document.currentScript;

  class NavItem extends HTMLElement {
    connectedCallback() {
      if (this.innerHTML) {
        this.innerHTML=`<span class='text'>${this.innerHTML}</span>`;
      }
      addStyleSheet(this); //id, url

      this.addEventListener('click', this.setActiveItem.bind(this));
      this.icon = this.getAttribute('icon');
      this.shortcut = this.getAttribute('shortcut');
      if (this.icon) {
        let isMDIcon = this.icon.match(/^[a-z_]+$/);
        this.iconEl = document.createElement('an-icon');
        if (isMDIcon) {
          this.iconEl.innerHTML = this.icon;
        } else {
          this.iconEl.insertAdjacentHTML('beforeend', '<img src="'+this.icon+'" />')
        }
        this.insertBefore(this.iconEl, this.firstChild)
      }
      if (this.shortcut) {
        this.shortcutEl = document.createElement('div');
        this.shortcutEl.classList.add('shortcut');
        this.shortcutEl.innerHTML = this.shortcut;
        this.appendChild(this.shortcutEl);
      }
    }

    setActiveItem(event) {
      Array.from(this.parentElement.querySelectorAll('a-nav-item')).forEach(el => el.removeAttribute('active'));
      this.setAttribute('active', '');
    }
  }
  
  customElements.define('a-nav-item', NavItem);
})();
