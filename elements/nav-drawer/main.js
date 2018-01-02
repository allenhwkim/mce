import '../ce-polyfill.js';
import '../nav-item/main.js';
import {addStyleSheet, observeAttrChange, windowResizeHandler} from '../util.js';

( function() {
  /**
   * [Material Design Spec.](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs)
   * The navigation drawer slides in from the left and contains the navigation destinations for your app.
   * The nav drawer spans the height of the screen, with everything behind it visible but darkened by a scrim. 
   * When nav drawer opens, the document does not scroll any more. When it's closed, scrolling is enabled again.
   * 
   * ### example
   * ```
   *   <a href="javascript:document.getElementById('#drawer').open()">Show Navigation Drawer</a>
   *   <a-nav-drawer id="drawer">
   *     <a-nav-item icon="favorite">Favourite</a-nav-item>
   *     <a-nav-item icon="search" class="disabled">Disabled</a-nav-item>
   *     <a-nav-item>Alarm</a-nav-item>
   *     <hr>
   *     <a-nav-item icon="music_note">Music</a-nav-item>
   *   </a-nav-drawer>
   * ``` 
   * 
   * ### `a-button` Style Classes
   *  |name||description|
   *  |---|---|
   *  |visible| indicates nav drawer is open state
   * 
   * ### `a-button` Child Element Style Classes
   *  |name||description|
   *  |---|---|
   *  |divider| An horizontal line that separates group of navigable items.
   */
  class NavDrawer extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this); //id, url
      observeAttrChange(this, (attr, val) => {
        if (attr === 'class') {
          // if drawer shown, disable body scroll
          document.body.style.overflow = this.classList.contains('visible') ? 'hidden' : '';
        }
      });
      this.regroupedOnce = false;
      this._regroupElements();
      if (window.ce && window.ce.resizeHandler) {} else {
        window.ce = {resizeHandler: windowResizeHandler};
        window.addEventListener('resize', window.ce.resizeHandler);
      }
    }

    /**
     * open the nav drawer by adding `visible` class
     */
    open() {
      this.classList.add('visible');
    }

    /**
     * close the nav drawer by removing `visible` class
     */
    close() {
      this.classList.remove('visible');
    }

    _regroupElements() {
      if (!this.regroupedOnce) {
        let pageBlockerEl, contentsEl;
        pageBlockerEl = document.createElement('div');
        pageBlockerEl.setAttribute('class', 'page-blocker');
        pageBlockerEl.addEventListener('click', () => this.close());
        this.appendChild(pageBlockerEl);

        contentsEl = document.createElement('div');
        contentsEl.setAttribute('class', 'contents');
        this.appendChild(contentsEl);

        Array.from(this.children).forEach(el => {
          if (!el.isSameNode(contentsEl) && !el.isSameNode(pageBlockerEl)) {
            contentsEl.appendChild(el)
          }
        });
        this.addEventListener('close', _ => this.close()); //child can fire close. then close it
      }
      this.regroupedOnce = true;
    }

  }
  
  customElements.define('a-nav-drawer', NavDrawer);
})();
