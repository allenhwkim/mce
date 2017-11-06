import {addStyleSheet} from '../util.js';

( function() {
  class ExpansionPanel extends HTMLElement {
    constructor() {
      super();
      this._init();
    }

    _init() {
      let titleEl = this.querySelector('.title');

      addStyleSheet(this, '../components/expansion-panel/expansion-panel.css'); //id, url
      titleEl.addEventListener('click', this._showThisPanelOnly.bind(this));
    }

    _showThisPanelOnly(event) {
      Array.from(document.querySelectorAll('an-expansion-panel')).forEach(panelEl => {
        this.removeAttribute('collapsed');
        !panelEl.isSameNode(this) && panelEl.setAttribute('collapsed','');
      })
    }

  }
  
  customElements.define('an-expansion-panel', ExpansionPanel);
})();