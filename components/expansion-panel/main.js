import '../ce-polyfill.js';
import {addStyleSheet} from '../util.js';

( function() {
  class ExpansionPanel extends HTMLElement {
    connectedCallback() {
      let titleEl = this.querySelector('.title');

      addStyleSheet(this);
      titleEl.addEventListener('click', _ => {
        Array.from(document.querySelectorAll('an-expansion-panel')).forEach(panelEl => {
          if (panelEl.isSameNode(this)) {
            panelEl.classList.toggle('expanded');
          } else {
            panelEl.classList.remove('expanded');
          }
        })
      });
    }

    _showThisPanelOnly(event) {
    }
  }
  
  customElements.define('an-expansion-panel', ExpansionPanel);
})();
