import './mce-polyfill.js';
import './app-bar/main.js';
import './bottom-nav-bar/main.js';
import './button/main.js';
import './card/main.js';
import './checkbox/main.js';
import './chip/main.js';
import './dialog/main.js';
import './expansion-panel/main.js';
import './grid-list/main.js';
import './icon/main.js';
import './list/main.js';
import './menu/main.js';
import './nav-drawer/main.js';
import './nav-item/main.js';
import './radio-button/main.js';
import './refresh-indicator/main.js';
import './search/main.js';
import './switch/main.js';
import './tabs/main.js';
import './text-field/main.js';
import './tooltip/main.js';

import './leaflet/src/leaflet.js';
import './leaflet/src/marker.js';
import './router/src/router.js';
import './router/src/route.js';

import './blocker/main.js';

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
