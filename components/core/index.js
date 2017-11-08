import '../ce-polyfill.js';
import '../app-bar/main.js';
import '../button/main.js';
import '../radio-button/main.js';
import '../checkbox/main.js';
import '../switch/main.js';
import '../bottom-nav-bar/main.js';
import '../card/main.js';
import '../chip/main.js';
import '../nav-drawer/main.js';
import '../menu/main.js';
import '../nav-item/main.js';
import '../dialog/main.js';
import '../refresh-indicator/main.js';
import '../tabs/main.js';
import '../text-field/main.js';
import '../tooltip/main.js';
import '../icon/main.js';
import '../expansion-panel/main.js';
import '../grid-list/main.js';
import '../list/main.js';

(function() {
  if (!document.querySelector('link[href$="ce-core.css"]')) { // if css not already added
    var cssUrl = 'https://unpkg.com/@custom-elements/core/dist/ce-core.css';
    let linkEl = document.createElement('link');
    linkEl.setAttribute('rel', "stylesheet");
    linkEl.setAttribute('href', cssUrl);
    document.head.appendChild(linkEl);
  }
})();
