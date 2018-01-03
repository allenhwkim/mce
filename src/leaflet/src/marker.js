import {observeAttrChange} from '../../mce-util.js';
import {util} from './leaflet-util.js';

/**
 * @description
 * leaflet marker element, `a-marker`
 * 
 * ### example
 * ```
 * <a-leaflet center="[50.5, 30.5]">
 *   <a-marker lat-lng="[50.5, 30.5]"></marker>
 * </a-leaflet>
 * ```
 * 
 * ### `a-marker` Attributes 
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
class LeafletMarker extends HTMLElement {
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
    this._map = this._map || this.closest('a-leaflet').map;
    return this._map;
  }

  initialize(map){
    if (!map) return;
    let attrOptions = util.attrs2Options(this.attributes);

    this.options = Object.assign(this.options, attrOptions);
    this.events = util.attrs2Events(this.attributes);
    util.resolveLatLng(this.options.latlng)
      .then(latlng => {
        this.mapObj = new L.marker(latlng, this.options);    // set options
        this.mapObj.customElement = this;
        for(let eventName in this.events) {                  // set events
          this.mapObj.on(eventName, this.events[eventName]);
        }

        this.mapObj.addTo(map);                              // add to map
        observeAttrChange(this, this.onAttrChange.bind(this));
      })
  }

  // run setXXX if defined when attribute value changes
  onAttrChange(name, val) {
    util.handleAttrChange(name, val, this.map, {
      'latlng': val => {
        util.resolveLatLng(val).then(latlng => this.mapObj.setLatLng(latlng));
      }
    });
  }

}

customElements.define('a-marker', LeafletMarker);
