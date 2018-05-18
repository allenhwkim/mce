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
 * <p data-height="300" data-theme-id="32189" data-slug-hash="GyBeMz" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce an-app-bar" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/EobYmr/">mce an-app-bar</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
cript async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
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
