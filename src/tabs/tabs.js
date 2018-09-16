import {animate, setTabbable} from '../utils/index.js';

/**
 * Tabs make it easy to explore and switch between different views.
 *
 * [Material Design Spec](https://material.io/guidelines/components/tabs.html#tabs-specs)
 * 
 * ### Example
 *
 * ```
 * <mce-tabs>
 *   <mce-nav-item icon="favorite"></mce-nav-item>
 *   <mce-nav-item icon="search" class="mce-active"></mce-nav-item>
 *   <mce-nav-item icon="alarm"></mce-nav-item>
 * </mce-tabs>
 * ```
 *
 * <p data-height="600" data-theme-id="32189" data-slug-hash="VyyeMd" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
cript async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
 *
 * ### `mce-tabs` Style Classes
 *  |name||description|
 *  |---|---|
 *  |mce-active| indicates currently active tab with indicator
 * 
 */

export class Tabs extends HTMLElement {

  connectedCallback() {
    setTimeout(_ => {
      this.indicatorEl = this._addIndicatorEl();
      this._addEventListener();
      setTimeout(this._selectActiveTab.bind(this), 100);
    });
  }

  getActiveTab(event) {
    let activeTab;
    if (event) { // if clicked or tapped
      activeTab = event.target.closest('mce-nav-item');
    } else {
      activeTab = this.querySelector('mce-nav-item.mce-active');
      activeTab = activeTab || this.querySelector('mce-nav-item:first-child');
    }
    return activeTab;
  }

  _addIndicatorEl() {
    let el = document.createElement('div');
    let thisBCR  = this.getBoundingClientRect();
    let activeTabBCR = this.getActiveTab().getBoundingClientRect();

    el.classList.add('mce-indicator');
    el.style.left = (activeTabBCR.left - thisBCR.left) / thisBCR.Width*100 + '%';
    this.appendChild(el);
    return el;
  }

  /**
   * animate the indicator below the active tab
   */
  _selectActiveTab(event) {
    let indicatorEl = this.indicatorEl;
    let numTab = this.querySelectorAll('mce-nav-item').length;
    let activeTab = this.getActiveTab(event);
    // console.log('activeTab', activeTab, event && event.target);

    Array.from(this.querySelectorAll('mce-nav-item')).forEach(navItem => {
      navItem.setAttribute('tabindex', navItem.isSameNode(activeTab) ? 0 : -1);
    });
    // activeTab.focus();

    setTimeout(_ => { // wait for mce-nav-item.active changes
      let thisBCR = this.getBoundingClientRect();
      let activeTabBCR = activeTab.getBoundingClientRect();

      let indicatorFromPct = parseFloat(indicatorEl.style.left || 0);
      let indicatorToPct = (activeTabBCR.left - thisBCR.left) / thisBCR.width;
      let move = indicatorToPct * 100 - indicatorFromPct;

      indicatorEl.style.width = parseFloat(100/numTab) + '%';

      animate({
        duration: 450,
        timing: function(timeFraction) {
          return 1 - Math.sin(Math.acos(timeFraction));
        },
        draw: function(progress) {
          indicatorEl.style.left = indicatorFromPct + (progress*move) + '%';
        }
      });
    });
  }

  _addEventListener() {
    // for each tab, set click and keydown event listeners
    Array.from(this.querySelectorAll('mce-nav-item')).forEach( navItem => {
      //when clicked, open the tab
      navItem.addEventListener('click', this._selectActiveTab.bind(this));
      // listen to keyboard up,down,next,right,space and enter
      navItem.addEventListener('keydown', event => {
        //with arrow keys, move tab
        let tabMoveIndex = 
          (event.key === "ArrowRight" || event.key === "ArrowUp") ? 1 :
          (event.key === "ArrowLeft" || event.key === "ArrowDown") ? -1 : 0;
        let tabToMove, activeTabIndex = 0;
        let activeTab = this.getActiveTab(event);
        let navItems = this.querySelectorAll('mce-nav-item');

        for(var i = 0; i < navItems.length; i++) {
          navItems[i].isSameNode(activeTab) && (activeTabIndex = i);
        }

        tabToMove = navItems[(activeTabIndex + tabMoveIndex + navItems.length) % navItems.length];
        tabToMove && !tabToMove.isSameNode(activeTab) && tabToMove.click();

        //with space or enter, open tab
        (event.key === "Enter") && navItem.click();
      });
    });
  }

}

customElements.define('mce-tabs', Tabs);
