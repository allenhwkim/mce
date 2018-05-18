import {observeAttrChange, parseAttributes, callSetMethod} from '../utils/index.js';
import {resolveLatLng} from './leaflet-util.js';

/**
 * @description
 * leaflet marker element, `mce-marker`
 * 
 * ### example
 * ```
 * <mce-leaflet center="[50.5, 30.5]">
 *   <mce-marker lat-lng="[50.5, 30.5]"></marker>
 * </mce-leaflet>
 * ```
 *
 * <p data-height="600" data-theme-id="32189" data-slug-hash="XVVXRp" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
 *
 * Popup Example
 * 
 * <p data-height="600" data-theme-id="32189" data-slug-hash="mppVmz" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
 * 
 * ### `mce-marker` Attributes 
 * any marker options defined in leaflet, http://leafletjs.com/reference-1.2.0.html#marker-option
 * As an example, for draggable 
 *
 *  |name|value|description|
 *  |---|---|---|
 *  |draggable|Boolean| Whether the marker is draggable with mouse/touch or not.
 *  |...|...| [more](http://leafletjs.com/reference-1.2.0.html#marker-option)
 * 
 * any events defined in marker with `on-` prefixed; http://leafletjs.com/reference-1.2.0.html#marker-event
 * As an example, for move event, 
 *
 *  |name|value|description|
 *  |---|---|---|
 *  |on-move|function reference| e.g. on-move="myMoveHandler"
 *  |...|...| [more](http://leafletjs.com/reference-1.2.0.html#marker-event)
 */
export class LeafletMarker extends HTMLElement {
  connectedCallback() {
    this._map;
    this.mapObj;                                     // marker
    this.options = {latlng: [51.505, -0.09]};        // default options
    this.events = {};
    this.initialize(this.map);
  }

  disconnectedCallback() {
    this.map.removeLayer(this.mapObj);
  }

  get map() {
    this._map = this._map || this.closest('mce-leaflet').map;
    return this._map;
  }

  initialize(map){
    if (!map) return;
    let attrParsed = parseAttributes(this.attributes);

    this.options = Object.assign(this.options, attrParsed.options);
    this.events = attrParsed.events;
    resolveLatLng(this.options.latlng)
      .then(latlng => {
        this.mapObj = new L.marker(latlng, this.options);    // set options
        this.mapObj.customElement = this;
        for(let eventName in this.events) {                  // set events
          this.mapObj.on(eventName, this.events[eventName]);
        }

        this.mapObj.addTo(map);                              // add to map
        observeAttrChange(this, this.onAttrChange.bind(this));
      });
  }

  // run setXXX if defined when attribute value changes
  onAttrChange(name, val) {
    if (name === 'latlng') {
      resolveLatLng(val).then(latlng => this.mapObj.setLatLng(latlng));
    } else if (!['class', 'tabindex', 'style'].includes(name)) {
      callSetMethod(this.map, name, val);
    }
  }

}
