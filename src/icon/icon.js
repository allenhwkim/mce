/**
 * Material icons use geometric shapes to visually represent core ideas, capabilities, or topics. System icons represent a command, file, device, directory, or common actions.
 *
 * [Material Design Spec.](https://material.io/guidelines/style/icons.html#)
 *
 * ### example
 * ```
 *   <mce-icon class="mce-small">face</mce-icon>
 *   <mce-icon>face</mce-icon>
 *   <mce-icon class="mce-big">face</mce-icon>
 *   <mce-icon class="mce-double">face</mce-icon>
 *   <mce-icon class="mce-double">fmce-envelope</mce-icon> <!-- for Font-Awesome icon -->
 *   <mce-icon class="mce-double" img="ali.connors.jpg"></mce-icon>
 * ```
 *
 * <p data-height="600" data-theme-id="32189" data-slug-hash="MrrKbK" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
cript async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
 *
 *
 * ### `mce-icon` element atttibutes
 *  |name|value|description|
 *  |---|---|---|
 *  |img| image url | Show an image instead of font icon. e.g. img="ali.conors.jpg"
 * 
 * ### `mce-icon` element style classes
 *  |name|description|
 *  |---|---|
 *  |mce-small | A smaller icon. 18px
 *  |mce-big | Bigger icon. 36px
 *  |mce-double | Double-sized icon. 48px
 *  |mce-circle | An icon in a circle
 *  |mce-square | An icon in a square
 *  |mce-dark-bg | An icon in dark background
 *  |mce-reactive | An icon respond to click and showing a ripple effect
 *  |mce-disabled | A greyed out without responsiveness
 */
export class Icon extends HTMLElement {
  connectedCallback() {
    setTimeout(_ => {
      this._setImageIcon(); // if img attribute given, set image icon
      this.clickListener = this._onClick.bind(this);
      this._addEventListener();
    });
  }

  disconnectedCallback() {
    this.removeEventListener('mouseup', this.clickListener);
    this.removeEventListener('touchend', this.clickListener);
  }

  _onClick(event) {
    let href = this.getAttribute('href');
    if (href) {
      window.location.href = href; //with href, go to the given url, 
    }
  }

  _addEventListener() {
    this.addEventListener('mouseup',  this.clickListener);
    this.addEventListener('touchend',  this.clickListener);
  }

  _setImageIcon() {
    let iconText = this.innerHTML;
    let isFAIcon = iconText.match(/^fa-[a-z\-]+$/);
    let isMDIcon = iconText.match(/^[a-z_]+$/);
    let imgSrc = this.getAttribute('img');

    if (isMDIcon) {
      this.innerHTML = `<i class="material-icons">${iconText}</i>`;
    } else if (isFAIcon) {
      this.innerHTML = `<i class="fa ${iconText}"></i>`;
    } else if (imgSrc) {
      this.innerHTML = '<i>photo</i>';
      this.style.backgroundImage = `url(${imgSrc})`;
    }
  }
}

customElements.define('mce-icon', Icon);
