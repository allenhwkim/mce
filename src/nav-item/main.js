// dependant on an-icon
( function() {
  class NavItem extends HTMLElement {
    connectedCallback() {
      this.regroupedOnce = false;
      this.clickListener = this.setActiveItem.bind(this);
      this._regroupElements();
    }

    disconnectedCallback() {
      this.removeEventListener('click', this.clickListener);
    }

    setActiveItem(event) {
      Array.from(this.parentElement.querySelectorAll('a-nav-item')).forEach(function(el) {
        el.classList.remove('active');
      }); 
      this.classList.add('active');

      let href = this.getAttribute('href');
      if (href) {
        window.location.href = href; //with href, go to the given url, 
        //with href, close it if the container is a-nav-drawer or a-menu
        let customEvent = new CustomEvent('close', event);
        this.dispatchEvent(customEvent);
        event.preventDefault();
      }
    }

    _regroupElements() {
      if (!this.regroupedOnce) {
        if (!this.querySelector('span.text')) {
          this.innerHTML = `<span class="text">${this.innerHTML}</span>`;
        }
        this.addEventListener('click', this.clickListener);
        this.icon = this.getAttribute('icon');
        this.shortcut = this.getAttribute('shortcut');
        if (this.icon && !this.querySelector('an-icon')) {
          let isFAIcon = this.icon.match(/^fa-[a-z\-]+$/);
          let isMDIcon = this.icon.match(/^[a-z_]+$/);

          this.iconEl = document.createElement('an-icon');
          if (isMDIcon) {
            this.iconEl.innerHTML = this.icon;
          } else if (isFAIcon) {
            this.iconEl.insertAdjacentHTML('beforeend', `<i class="fa ${this.icon}"></i>`)
          } else {
            this.iconEl.insertAdjacentHTML('beforeend', `<img src="${this.icon}" />`)
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
