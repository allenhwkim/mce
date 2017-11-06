import {addStyleSheet, animate} from '../util.js';

( function() {
  var thisScript = document.currentScript;

  class Tabs extends HTMLElement {
    constructor() {
      super();
      this._init();
    }

    _init() {
      addStyleSheet('a-tabs', '../components/tabs/tabs.css'); //id, url

      this.indicatorEl = this._addIndicatorEl();
      this._registerNavItemClick();
      this._animateIndicator();
    }

    _addIndicatorEl() {
      let el = document.createElement('div');
      let thisWidth  = this.getBoundingClientRect().width;
      let left = (
          (this.querySelector('a-nav-item[active]') || this).getBoundingClientRect().left
          - this.getBoundingClientRect().left
        ) / thisWidth;

      el.classList.add('indicator');
      el.style.left = left*100 + '%';
      this.appendChild(el);
      return el;
    }

    _registerNavItemClick() {
      Array.from(this.querySelectorAll('a-nav-item')).forEach(navItem => {
        navItem.addEventListener('click', this._animateIndicator.bind(this));
      })
    }

    /**
     * animate the indicator below the active tab
     */
    _animateIndicator() {
      let indicatorEl = this.indicatorEl;
      let numTab = this.querySelectorAll('a-nav-item').length;
      let thisWidth  = this.getBoundingClientRect().width;
      let indicatorLeftFrom = parseFloat(indicatorEl.style.left);
      let indicatorLeftTo = (
          (this.querySelector('a-nav-item[active]') || this).getBoundingClientRect().left
          - this.getBoundingClientRect().left
        ) / thisWidth;
      let move = indicatorLeftTo*100 - indicatorLeftFrom;

      indicatorEl.style.width = parseFloat(100/numTab) + '%';

      animate({
        duration: 450,
        timing: function(timeFraction) {
          return 1 - Math.sin(Math.acos(timeFraction));
        },
        draw: function(progress) {
          indicatorEl.style.left = indicatorLeftFrom + (progress*move) + '%';
        }
      });
    }
  
  }
  
  customElements.define('a-tabs', Tabs);
})();
