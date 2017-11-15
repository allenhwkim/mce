import '../ce-polyfill.js';
import {addStyleSheet, animate, setTabbable} from '../util.js';

( function() {
  class Tabs extends HTMLElement {

    connectedCallback() {
      addStyleSheet(this); //id, url

      this.indicatorEl = this._addIndicatorEl();
      this._addEventListener();
      setTimeout(this._selectActiveTab.bind(this), 100);
    }

    get activeTab() {
      return this.querySelector('a-nav-item.active') || this.querySelector('a-nav-item:first-child');
    }

    _addIndicatorEl() {
      let el = document.createElement('div');
      let thisBCR  = this.getBoundingClientRect();
      let activeTabBCR = this.activeTab.getBoundingClientRect();

      el.classList.add('indicator');
      el.style.left = (activeTabBCR.left - thisBCR.left) / thisBCR.Width*100 + '%';
      this.appendChild(el);
      return el;
    }

    /**
     * animate the indicator below the active tab
     */
    _selectActiveTab() {
      let indicatorEl = this.indicatorEl;
      let numTab = this.querySelectorAll('a-nav-item').length;
      let activeTab = this.activeTab;

      Array.from(this.querySelectorAll('a-nav-item')).forEach(navItem => {
        navItem.setAttribute('tabindex', navItem.isSameNode(activeTab) ? 0 : -1);
      });
      activeTab.focus();

      setTimeout(_ => { // wait for a-nav-item.active changes
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
      Array.from(this.querySelectorAll('a-nav-item')).forEach( navItem => {
        //when clicked, open the tab
        navItem.addEventListener('click', this._selectActiveTab.bind(this));
        // listen to keyboard up,down,next,right,space and enter
        navItem.addEventListener('keydown', event => {
          //with arrow keys, move tab
          let tabMoveIndex = 
            (event.key === "ArrowRight" || event.key === "ArrowUp") ? 1 :
            (event.key === "ArrowLeft" || event.key === "ArrowDown") ? -1 : 0;
          let tabToMove, activeTabIndex = 0;
          let activeTab = this.activeTab;
          let navItems = this.querySelectorAll('a-nav-item');

          for(var i = 0; i < navItems.length; i++) {
            navItems[i].isSameNode(activeTab) && (activeTabIndex = i);
          }

          tabToMove = navItems[(activeTabIndex + tabMoveIndex + navItems.length) % navItems.length];
          tabToMove && !tabToMove.isSameNode(activeTab) && tabToMove.click();

          //with space or enter, open tab
          (event.key === "Enter") && navItem.click();
        });
      })
    }
  
  }
  
  customElements.define('a-tabs', Tabs);
})();
