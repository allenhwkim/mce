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
 * <iframe height='265' scrolling='no' title='MrrKoy' src='//codepen.io/allenhwkim/embed/MrrKoy/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/MrrKoy/'>MrrKoy</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
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

