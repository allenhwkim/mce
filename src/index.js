import 'whatwg-fetch';
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

// include css if not already there with "*mce.mincss" or id="mce-css"
(function() {
  let cssIncluded = window.debug ||
    document.querySelector('link[href$="mce.min.css"]') || document.querySelector('link[id="mce-css"]');

  if (!cssIncluded) {
    let mdIconEl = document.createElement('link');
    mdIconEl.setAttribute('rel', 'stylesheet');
    mdIconEl.setAttribute('auto-added-by-mce', '');
    mdIconEl.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    document.head.appendChild(mdIconEl);

    let mceCssEl = document.createElement('link');
    mceCssEl.setAttribute('rel', 'stylesheet');
    mceCssEl.setAttribute('auto-added-by-mce', '');
    mceCssEl.setAttribute('href', 'https://unpkg.com/mce/dist/mce.min.css');
    document.head.appendChild(mceCssEl);

    let mceThemeEl = document.createElement('link');
    mceThemeEl.setAttribute('rel', 'stylesheet');
    mceThemeEl.setAttribute('auto-added-by-mce', '');
    mceThemeEl.setAttribute('href', 'https://unpkg.com/mce/dist/themes/blue.css');
    document.head.appendChild(mceThemeEl);
  }
})();
