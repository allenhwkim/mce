import './mce-polyfill.js';
import {AppBar} from './app-bar/app-bar.js';
import {BottomNavBar} from './bottom-nav-bar/bottom-nav-bar.js';
import {Button} from './button/button.js';
import {Card} from './card/card.js';
import {Checkbox} from './checkbox/checkbox.js';
import {Chip} from './chip/chip.js';
import {Dialog} from './dialog/dialog.js';
import {ExpansionPanel} from './expansion-panel/expansion-panel.js';
import {GridList} from './grid-list/grid-list.js';
import {Icon} from './icon/icon.js';
import {List} from './list/list.js';
import {Menu} from './menu/menu.js';
import {NavDrawer} from './nav-drawer/nav-drawer.js';
import {NavItem} from './nav-item/nav-item.js';
import {RadioButton} from './radio-button/radio-button.js';
import {RefreshIndicator} from './refresh-indicator/refresh-indicator.js';
import {Search} from './search/search.js';
import {Snackbar} from './snackbar/snackbar.js';
import {Switch} from './switch/switch.js';
import {Tabs} from './tabs/tabs.js';
import {TextField} from './text-field/text-field.js';
import {Tooltip} from './tooltip/tooltip.js';

import {LeafletMap} from './leaflet/leaflet.js';
import {LeafletMarker} from './leaflet/marker.js';
import {Router} from './router/router.js';
import {Route} from './router/route.js';

import {Blocker} from './blocker/blocker.js';
import {Inview} from './inview/inview.js';
import {ListItem} from './list-item/list-item.js';

customElements.define('mce-app-bar', AppBar);
customElements.define('mce-bottom-nav-bar', BottomNavBar);
customElements.define('mce-button', Button);
customElements.define('mce-card', Card);
customElements.define('mce-checkbox', Checkbox);
customElements.define('mce-chip', Chip);
customElements.define('mce-dialog', Dialog);
customElements.define('mce-expansion-panel', ExpansionPanel);
customElements.define('mce-grid-list', GridList);
customElements.define('mce-icon', Icon);
customElements.define('mce-list', List);
customElements.define('mce-menu', Menu);
customElements.define('mce-nav-drawer', NavDrawer);
customElements.define('mce-nav-item', NavItem);
customElements.define('mce-radio-button', RadioButton);
customElements.define('mce-refresh-indicator', RefreshIndicator);
customElements.define('mce-search', Search);
customElements.define('mce-snackbar', Snackbar);
customElements.define('mce-switch', Switch);
customElements.define('mce-tabs', Tabs);
customElements.define('mce-text-field', TextField);
customElements.define('mce-tooltip', Tooltip);

customElements.define('mce-blocker', Blocker);
customElements.define('mce-inview', Inview);
customElements.define('mce-list-item', ListItem);
customElements.define('mce-marker', LeafletMarker);
customElements.define('mce-leaflet', LeafletMap);
customElements.define('mce-route', Route);
customElements.define('mce-router', Router); 

// include css if not already there with "*mce.mincss" or id="mce-css"
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
