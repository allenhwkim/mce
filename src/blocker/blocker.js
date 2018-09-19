/**
 * An element that covers the another element.
 * Useful to show that the block is loading
 *
 * ### example
 * ```
 * <div>
 *   <mce-blocker>
 *     <mce-refresh-indicator mce-no-border mce-loading></mce-refresh-indicator>
 *   </mce-blocker>
 * </div>
 * ```
 *
 * <iframe height='265' scrolling='no' title='GyBeMz' src='//codepen.io/allenhwkim/embed/GyBeMz/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/GyBeMz/'>GyBeMz</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-blocker` classes
 *  |name|description|
 *  |---|---|
 *  |mce-visible| if given, the blocker is displayed
 *
 */
export class Blocker extends HTMLElement {
  connectedCallback() {
    this.classList.contains('mce-visible') && this.open();
  }

  open() {
    //works as a blocker
    let elStyle = window.getComputedStyle(this.parentElement);
    let position = elStyle.getPropertyValue("position");
    let notPositioned = ['static'].includes(position); // static, relative, fixed, absolute, sticky
    let css = {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.2)',
      top: notPositioned ? this.parentElement.offsetTop + 'px' : '0px',
      left: notPositioned ? this.parentElement.offsetLeft + 'px' : '0px',
      width: this.parentElement.offsetWidth + 'px',
      height: this.parentElement.offsetHeight + 'px',
      borderRadius: elStyle.borderRadius
    };

    Object.assign(this.style, css);
    this.classList.add('mce-visible');
  }

  close() {
    this.classList.remove('mce-visible');
  }
}

customElements.define('mce-blocker', Blocker);
