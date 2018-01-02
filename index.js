import '../ce-polyfill.js';
import '../app-bar/main.js';
import '../bottom-nav-bar/main.js';
import '../button/main.js';
import '../card/main.js';
import '../checkbox/main.js';
import '../chip/main.js';
import '../dialog/main.js';
import '../expansion-panel/main.js';
import '../grid-list/main.js';
import '../icon/main.js';
import '../list/main.js';
import '../menu/main.js';
import '../nav-drawer/main.js';
import '../nav-item/main.js';
import '../radio-button/main.js';
import '../refresh-indicator/main.js';
import '../search/main.js';
import '../switch/main.js';
import '../tabs/main.js';
import '../text-field/main.js';
import '../tooltip/main.js';

import '../leaflet/src/leaflet.js';
import '../leaflet/src/marker.js';
import '../router/src/router.js';
import '../router/src/route.js';

(function() {
  // add css only if css not already added
  if (!document.querySelector('link[href$="ce-core.css"]')) {
    var cssUrl = 'https://unpkg.com/@custom-element/core/dist/ce-core.css';
    let linkEl = document.createElement('link');
    linkEl.setAttribute('rel', "stylesheet");
    linkEl.setAttribute('href', cssUrl);
    document.head.appendChild(linkEl);
  }
})();
