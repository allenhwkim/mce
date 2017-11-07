import {addStyleSheet} from '../util.js';

( function() {
  class ExpansionPanel extends HTMLElement {
    connectedCallback() {
      let titleEl = this.querySelector('.title');

      addStyleSheet(this);
      titleEl.addEventListener('click', this._showThisPanelOnly.bind(this));
    }

    _showThisPanelOnly(event) {
      Array.from(document.querySelectorAll('an-expansion-panel')).forEach(panelEl => {
        this.classList.add('expanded');
        !panelEl.isSameNode(this) && panelEl.classList.remove('expanded');
      })
    }
  }
  
  customElements.define('an-expansion-panel', ExpansionPanel);
})();