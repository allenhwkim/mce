import {observeAttrChange, windowResizeHandler} from '../utils/index.js';

/**
 * The navigation drawer slides in from the left and contains the navigation destinations for your app.
 * The nav drawer spans the height of the screen, with everything behind it visible but darkened by a scrim. 
 * When nav drawer opens, the document does not scroll any more. When it's closed, scrolling is enabled again.
 * 
 * [Material Design Spec.](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs)
 *
 * ### example
 * ```
 *   <a href="javascript:document.getElementById('#drawer').open()">Show Navigation Drawer</a>
 *   <mce-nav-drawer id="drawer">
 *     <mce-nav-item icon="favorite">Favourite</mce-nav-item>
 *     <mce-nav-item icon="search" class="mce-disabled">Disabled</mce-nav-item>
 *     <mce-nav-item>Alarm</mce-nav-item>
 *     <hr>
 *     <mce-nav-item icon="music_note">Music</mce-nav-item>
 *   </mce-nav-drawer>
 * ``` 
 *
 * <p data-height="300" data-theme-id="32189" data-slug-hash="jYYWLE" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
cript async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
 *
 * 
 * ### `mce-nav-drawer` Style Classes
 *  |name||description|
 *  |---|---|
 *  |visible| indicates nav drawer is open state
 * 
 * ### `mce-nav-drawer` Child Element Style Classes
 *  |name||description|
 *  |---|---|
 *  |mce-divider| An horizontal line that separates group of navigable items.
 */
export class NavDrawer extends HTMLElement {
  connectedCallback() {
    observeAttrChange(this, (attr, val) => {
      if (attr === 'class') {
        // if drawer shown, disable body scroll
        document.body.style.overflow = this.classList.contains('mce-visible') ? 'hidden' : '';
      }
    });
    if (window.ce && window.ce.resizeHandler) {} else {
      window.ce = {resizeHandler: windowResizeHandler};
      window.addEventListener('resize', window.ce.resizeHandler);
      window.addEventListener('load', window.ce.resizeHandler);
    }
    setTimeout(_ => {
      this.regroupedOnce = false;
      this._regroupElements();
    });
  }

  /**
   * open the nav drawer by adding `visible` class
   */
  open() {
    this.classList.add('mce-visible');
  }

  /**
   * close the nav drawer by removing `visible` class
   */
  close() {
    this.classList.remove('mce-visible');
  }

  _regroupElements() {
    if (!this.regroupedOnce) {
      let pageBlockerEl, contentsEl;
      pageBlockerEl = document.createElement('div');
      pageBlockerEl.classList.add('mce-page-blocker');
      pageBlockerEl.addEventListener('click', () => this.close());
      this.appendChild(pageBlockerEl);

      contentsEl = document.createElement('div');
      contentsEl.classList.add('mce-contents');
      this.appendChild(contentsEl);

      Array.from(this.children).forEach(el => {
        if (!el.isSameNode(contentsEl) && !el.isSameNode(pageBlockerEl)) {
          contentsEl.appendChild(el);
        }
      });
      this.addEventListener('close', _ => this.close()); //child can fire close. then close it
    }
    this.regroupedOnce = true;
  }

}

customElements.define('mce-nav-drawer', NavDrawer);
