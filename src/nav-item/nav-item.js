export class NavItem extends HTMLElement {
  connectedCallback() {
    this.regroupedOnce = false;
    setTimeout(this._regroupElements.bind(this));
  }

  setActiveItem(event) {
    Array.from(this.parentElement.querySelectorAll('mce-nav-item')).forEach(function(el) {
      el.classList.remove('mce-active');
    }); 
    this.classList.add('mce-active');

    let href = this.getAttribute('href');
    if (href) {
      window.location.href = href; //with href, go to the given url, 
      //with href, close it if the container is mce-nav-drawer or mce-menu
      let customEvent = new CustomEvent('close', event);
      this.dispatchEvent(customEvent);
      event.preventDefault();
    }
  }

  _regroupElements() {
    if (!this.regroupedOnce) {
      if (!this.querySelector('span.text')) {
        this.innerHTML = `<span class="mce-text">${this.innerHTML}</span>`;
      }
      this.addEventListener('click', this.setActiveItem.bind(this));
      this.icon = this.getAttribute('icon');
      this.shortcut = this.getAttribute('shortcut');
      if (this.icon && !this.querySelector('mce-icon')) {
        let isFAIcon = this.icon.match(/^fa-[a-z\-]+$/);
        let isMDIcon = this.icon.match(/^[a-z_]+$/);

        this.iconEl = document.createElement('mce-icon');
        if (isMDIcon) {
          this.iconEl.innerHTML = this.icon;
        } else if (isFAIcon) {
          this.iconEl.insertAdjacentHTML('beforeend', `<i class="fa ${this.icon}"></i>`);
        } else {
          this.iconEl.insertAdjacentHTML('beforeend', `<img src="${this.icon}" />`);
        }
        this.insertBefore(this.iconEl, this.firstChild);
      }
      if (this.shortcut && !this.querySelector('mce-icon')) {
        this.shortcutEl = document.createElement('div');
        this.shortcutEl.classList.add('mce-shortcut');
        this.shortcutEl.innerHTML = this.shortcut;
        this.appendChild(this.shortcutEl);
      }
    }
    this.regroupedOnce = true;
  }
}

