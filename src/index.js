import './mce-polyfill.js';
import './app-bar/app-bar.js';
import './bottom-nav-bar/bottom-nav-bar.js';
import './button/button.js';
import './card/card.js';
import './checkbox/checkbox.js';
import './chip/chip.js';
import './dialog/dialog.js';
import './expansion-panel/expansion-panel.js';
import './grid-list/grid-list.js';
import './icon/icon.js';
import './list/list.js';
import './menu/menu.js';
import './nav-drawer/nav-drawer.js';
import './nav-item/nav-item.js';
import './radio-button/radio-button.js';
import './refresh-indicator/refresh-indicator.js';
import './search/search.js';
import './switch/switch.js';
import './tabs/tabs.js';
import './text-field/text-field.js';
import './tooltip/tooltip.js';
import './snackbar/snackbar.js';

import './leaflet/leaflet.js';
import './leaflet/marker.js';
import './router/router.js';
import './router/route.js';

import './blocker/blocker.js';
import './inview/inview.js';
import './list-item/list-item.js';

(function() {
  let cssIncluded = window.debug ||
    document.querySelector('link[href$="mce.min.css"]') ||
    document.querySelector('link[id="mce-css"]');

  if (!cssIncluded) {
    var cssUrl = 'https://unpkg.com/mce/dist/mce.min.css';
    let linkEl = document.createElement('link');
    linkEl.setAttribute('rel', "stylesheet");
    linkEl.setAttribute('href', cssUrl);
    document.head.appendChild(linkEl);
  }
})();