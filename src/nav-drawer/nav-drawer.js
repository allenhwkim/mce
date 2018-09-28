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
 * <iframe height='265' scrolling='no' title='jYYWLE' src='//codepen.io/allenhwkim/embed/jYYWLE/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/jYYWLE/'>jYYWLE</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * 
 * ### `mce-nav-drawer` Style Classes
 *  |name||description|
 *  |---|---|
 *  |mce-visible| indicates nav drawer is open state
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
      
      const func = window.innerWidth >= 1024 ? 'add' : 'remove';
      document.body.classList[func]('mce-desktop');
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
