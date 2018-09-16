import {parseAttributes} from '../utils/index.js';

/**
 * Lists present multiple line items vertically as a single continuous element.
 *
 * [Material Design Spec.](https://material.io/guidelines/components/lists.html#lists-actions)
 * 
 * ## Examples
 *
 * ```
 * <mce-list>
 *   <ol>
 *     <li>
 *       <div class="mce-icon">
 *         <mce-icon class="mce-circle">folder</mce-icon>
 *       </div>
 *       <span>Directory</span>
 *       <mce-icon>info</mce-icon>
 *     </li>
 *     <li>
 *       <div class="mce-icon">
 *         <mce-icon class="mce-circle">hotel</mce-icon>
 *       </div>
 *       <span>Hotel</span>
 *       <mce-icon>info</mce-icon>
 *     </li>
 *   </ol>
 * </mce-list>
 * ```
 *
 * <p data-height="600" data-theme-id="32189" data-slug-hash="MrrKoy" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
cript async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
 *
 * 
`
 */
export class List extends HTMLElement {
  connectedCallback() {
    this._focused = {};
    this._focusTimer;
    this.events = {};
    this.initialize();
  }

  initialize() {
    let parsedAttrs = parseAttributes(this.attributes);
    this.events = parsedAttrs.events;
    
    for(let eventName in this.events) {
      this.addEventListener(eventName, this.events[eventName]);
    }
  }

  setFocused(elType, focused) {
    if (focused) {
      clearTimeout(this._focusTimer);
      this._focused = {input: false, listItem: false};
      this._focused[elType] = true;
    } else { // set blur in a delayed manner;3
      this._focusTimer = setTimeout(_ => {
        this._focused[elType] = false;
      }, 100);
    }
  }
}

customElements.define('mce-list', List);

