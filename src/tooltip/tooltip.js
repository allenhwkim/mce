// FYI, http://plnkr.co/edit/I9mfBNIKJtALHwKmS0CH?p=preview. ARIA tooltip approach.

/**
 * Tooltips are text labels that appear when the user hovers over, focuses on, or touches an element.
 * 
 * [Material Design Spec](https://material.io/guidelines/components/tooltips.html)
 *
 * ###  Example
 * ```
 * <mce-button class="mce-raised">
 *   <mce-tooltip>This is a tooltip for a button</mce-tooltip>
 *   Mouse
 * </mce-button>
 * <mce-button class="mce-raised" style="float: right">
 *   <mce-tooltip>This is a tooltip for a button</mce-tooltip>
 *   Tooltip
 * </mce-button>
 * ```
 *
 * <iframe height='265' scrolling='no' title='ZvvQap' src='//codepen.io/allenhwkim/embed/ZvvQap/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/ZvvQap/'>ZvvQap</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 */
export class Tooltip extends HTMLElement {
  connectedCallback() {
    this._addEventListeners();
  }

  _addEventListeners() {
    this.parentElement.addEventListener('mouseenter', event => {
      this.originalPos = { 
        parent: event.target,
        nextSibling: this.nextSiblingNode
      };
      this._showTooltip();
    });
    this.parentElement.addEventListener('mouseleave', _ => {
      this.classList.remove('mce-visible');
      this.originalPos.parent.insertBefore(this, this.originalPos.nextSibling);
    });
  }

  _showTooltip() {
    let parentBCR = this.originalPos.parent.getBoundingClientRect(); // relative to viewport
    let body = document.body;
    let docEl = document.documentElement;

    let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    let clientTop = docEl.clientTop || body.clientTop || 0;
    let clientLeft = docEl.clientLeft || body.clientLeft || 0;

    let docPosTop = Math.round(parentBCR.top +  scrollTop - clientTop);
    let docPosLeft = Math.round(parentBCR.left + scrollLeft - clientLeft);

    let top = docPosTop + parentBCR.height + 24;

    this.style.top = top + 'px';
    this.style.left = '';
    this.style.right = '';

    document.body.appendChild(this);
    setTimeout(_ => {
      let thisBCR = this.getBoundingClientRect(); // it needs time to calc this properly
      let left = docPosLeft + (parentBCR.width / 2) - (thisBCR.width / 2);

      if (left < 8) {
        this.style.left = '8px';
      } else if (left + thisBCR.width > document.body.clientWidth) {
        this.style.right = '8px';
      } else {
        this.style.left = left + 'px';
      }

      this.classList.add('mce-visible');
    }, 100);
  }
}

customElements.define('mce-tooltip', Tooltip);
