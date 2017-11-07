import {addStyleSheet} from '../util.js';

// dependant on an-icon
( function() {

  class Chip extends HTMLElement {

    connectedCallback() {
      addStyleSheet(this); //id, url
      this._buildHTML();
    }

    _buildHTML() {
      let avatar = this.getAttribute('avatar');
      let text = this.getAttribute('text');
      let removable = this.getAttribute('removable');
      let onRemove = this.getAttribute('on-remove');

      if (avatar) {
        this.insertAdjacentHTML('beforeend', `<div class="avatar">${avatar}</div>`);
      }
      if (text) {
        this.insertAdjacentHTML('beforeend', `<div class="text">${text}</div>`);
      }
      if (removable !== null) {
        let removeEl = document.createElement('an-icon');
        removeEl.classList.add('delete');
        removeEl.innerHTML = 'clear';

        removeEl.addEventListener('click', event => {
          let customEvent = new CustomEvent('remove', event);
          this.dispatchEvent(customEvent);
        })

        this.appendChild(removeEl);

        this.addEventListener('remove', function(event) {
          let func = new Function(onRemove);
          func();
          this.remove();
        });
      }
    }

  }
  
  customElements.define('a-chip', Chip);
})();