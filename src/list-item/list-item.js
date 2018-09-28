import {str2Val} from '../utils/index.js';
import {createCustomEvent} from '../create-custom-event.js';

/**
 * List item responds to tab, keydown, keyup(ENTER, ESC), and cick
 *
 * ## Examples
 *
 * ```
 * <mce-list>
 *  <mce-list-item item="my.obj[1]"></mce-list-item>
 * </mce-list>
 * ```
 *
 * <iframe height='265' scrolling='no' title='MrrKoy' src='//codepen.io/allenhwkim/embed/MrrKoy/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/MrrKoy/'>MrrKoy</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-list-item` attributes 
 *  |name|value   |description                             |
 *  |----|--------|----------------------------------------|
 *  |item| object | The object that will be assigned to this list-item, so when it is selected, this item will be fired as an event
 * 
 */
export class ListItem extends HTMLElement {
  connectedCallback() {
    this.item = null; 
    this.parentListEl = null;
    this.initialize();
  }

  initialize() {
    this.setAttribute('tabindex', '0');
    this.item = this.textContent;
    if (this.getAttribute('item')) { // we don't know when the value is assigned
      setTimeout(_ => { this.item = str2Val(this.getAttribute('item')); });
    }
    this.parentListEl = this.closest('mce-list, .mce-list');
    this.addEventListener('keydown', this.__keydownHandler.bind(this));
    this.addEventListener('keyup', this.__keyupHandler.bind(this));
    this.addEventListener('click', this.__clickHandler.bind(this));
    this.addEventListener('focus', this.__focusHandler.bind(this));
    this.addEventListener('blur', this.__blurHandler.bind(this));
  }

  __keydownHandler(event) {
    const keyCode = event.which || event.keyCode;
    const listItems = this.parentListEl.querySelectorAll('mce-list-item');
    const listItemNdx = Array.from(listItems).indexOf(this);
    const nextListItem = listItems[listItemNdx + 1] || listItems[0];
    const prevListItem = listItems[listItemNdx - 1] || listItems[listItems.length - 1];

    switch (keyCode) {
      case 37: case 38: // up arrow, left arrow
        prevListItem.focus();
        break;
      case 39: case 40: // down arrow, right arrow
        nextListItem.focus();
        break;
      default:
        break;
    }
  }

  __keyupHandler(event) {
    let customEvent;
    switch (event.key) {
      case 'Enter':
      case 'Escape':
        const eventName = event.key == 'Enter' ? 'selected' : 'escaped';
        customEvent = createCustomEvent(eventName, {bubbles: true, detail: this.item});
        this.parentListEl.dispatchEvent(customEvent);
        this.parentListEl.focus();
        break;
      default:
        break;
    }
  }

  __clickHandler(event) {
    let customEvent = createCustomEvent('selected', {detail: this.item});
    this.parentListEl.dispatchEvent(customEvent);
  }

  __focusHandler(event) {
    this.parentListEl.setFocused && this.parentListEl.setFocused('listItem', true);
  }

  __blurHandler(event) {
    this.parentListEl.setFocused && this.parentListEl.setFocused('listItem', false);
  }

}

customElements.define('mce-list-item', ListItem);
