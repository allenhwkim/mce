// dependant on an-icon
( function() {

 /**
  * Chip
  * [Material Design Spec](https://material.io/guidelines/components/chips.html#chips-specs)
  * Chips represent complex entities in small blocks, such as a contact.
  * ### Examples
  * ```
  * <div>
  *   <a-chip text="AMZ Bank"></a-chip>
  *   <a-chip avatar="ali.connors.jpg" text="AMZ Bank"></a-chip>
  *   <a-chip text="AMZ Bank" removable=""></a-chip>
  *   <a-chip avatar="A" text="AMZ Bank" removable="" on-remove="alert('chip removal')"></a-chip>
  * </div>
  * ```
  *
  * ### `a-chip` atttibutes
  *  |name|value|description|
  *  |---|---|---|
  *  |avatar| image url| An avatar text or image url for contact information that users have for people may be represented in a compact way using contact chips. The chips
  *  |text| string | Main text of the chip
  *  |removable| | if defined, it addes delete icon to the chip.
  *  |on-remove| Javascrip function| A javascript code to be executed when chip is removed.
  */ 
  class Chip extends HTMLElement {

    connectedCallback() {
      this._buildHTML();
    }

    _buildHTML() {
      let avatar = this.getAttribute('avatar');
      let text = this.getAttribute('text');
      let removable = this.getAttribute('removable');
      let onRemove = this.getAttribute('on-remove');

      if (avatar) {
        if (avatar.match(/\.(png|jpg|gif|svg)$/)) {
          this.insertAdjacentHTML('beforeend', `<div class="avatar" style="background-image:url(${avatar})"></div>`);
        } else {
          this.insertAdjacentHTML('beforeend', `<div class="avatar">${avatar}</div>`);
        }
      }

      if (text) {
        this.insertAdjacentHTML('beforeend', `<div class="text">${text}</div>`);
      }

      if (removable !== null) {
        let removeEl = document.createElement('an-icon');
        removeEl.setAttribute('tabindex', '0');
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
