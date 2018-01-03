import './src/mce-polyfill.js';
import './src/app-bar/main.js';
import './src/bottom-nav-bar/main.js';
import './src/button/main.js';
import './src/card/main.js';
import './src/checkbox/main.js';
import './src/chip/main.js';
import './src/dialog/main.js';
import './src/expansion-panel/main.js';
import './src/grid-list/main.js';
import './src/icon/main.js';
import './src/list/main.js';
import './src/menu/main.js';
import './src/nav-drawer/main.js';
import './src/nav-item/main.js';
import './src/radio-button/main.js';
import './src/refresh-indicator/main.js';
import './src/search/main.js';
import './src/switch/main.js';
import './src/tabs/main.js';
import './src/text-field/main.js';
import './src/tooltip/main.js';

import './src/leaflet/src/leaflet.js';
import './src/leaflet/src/marker.js';
import './src/router/src/router.js';
import './src/router/src/route.js';

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
