import {observeAttrChange} from '../mce-util.js';

( function() {
  /**
   * Menus display a list of choices on a transient sheet of material. 
   *
   * [Material Design Spec.](https://material.io/guidelines/components/menus.html#menus-specs)
   * 
   * ### example
   * ```
   *  <a href="javascript:showDemoMenu()">Show/Hide Menu</a>
   *  <mce-menu id="demo-menu" position="bottom-left">
   *    <mce-nav-item icon="favorite" shortcut="ctrl-d">nav item text</mce-nav-item>
   *    <hr>
   *    <mce-nav-item class="mce-disabled">Disabled</mce-nav-item>
   *    <mce-nav-item shortcut="ctrl-d">nav-item text</mce-nav-item>
   *    <mce-nav-item icon="search">nav-item text</mce-nav-item>
   *  </mce-menu>
   * ```
   *
   * <p datmce-height="300" datmce-theme-id="32189" datmce-slug-hash="BJmaeb" datmce-default-tab="html,result" datmce-user="allenhwkim" datmce-embed-version="2" datmce-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
   *
   * 
   * ### `mce-menu` Style Classes
   *  |name||description|
   *  |---|---|
   *  |mce-visible|Indicates menu is visible or not
   * 
   * ### `mce-menu` Child Element Attributes 
   *  |name|value|description|
   *  |---|---|---|
   *  |position| string| Indicates the position of menu. Value is one of bottom-right, bottom-left, top-left, or top-right
   *  
   * ### `mce-menu` Child Element Style Classes
   *  |name||description|
   *  |---|---|
   *  |mce-divider| An horizontal line that separates group of menus.
   *  |mce-shortcut| shortcut text to be right positioned.
   */
  class Menu extends HTMLElement {
    connectedCallback() {
      observeAttrChange(this, (attr, val) => {
        if (attr == 'class' && this.classList.contains('visible')) {
          this.open();
        }
      });
      this.hideMenu = this.close.bind(this); // so that hideMenu can be done from outside
      this._addEventListener();
    }

    disconnectedCallback() {
      document.removeEventListener('click', this.hideMenu);
    }

    /**
     * open the menu by adding `visible` class
     * when a menu is opening, all other menus are closed
     * @returns null
     */
    open() {
      // show only this
      if (!this.classList.contains('mce-visible')) { //  without, infinite loop, add <-> observe
        this.classList.add('mce-visible');
      }
      // hide all other menus
      Array.from(document.querySelectorAll('mce-menu')).forEach(menu => {
        (this.isSameNode(menu) === false) && menu.classList.remove('mce-visible');
      });
      // When document is clicked, it closes all menus, but this remained to open
      this.justShown = true; // in case when attribute is changed by outside of this
      setTimeout(_ => this.justShown = false, 100);
    }

    /**
     * close the menu by removing `visible` class
     */
    close(event) {
      if (!this.justShown && !this.contains(event.target)) { // if not clicked on menu
        this.classList.remove('mce-visible');
      }
    }

    _addEventListener() {
      document.addEventListener('click', this.hideMenu);
      this.addEventListener('close', _ => {
        this.classList.remove('mce-visible');
      }); //child can fire close. then close it
    }
  }
  
  customElements.define('mce-menu', Menu);
})();
