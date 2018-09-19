import {observeAttrChange, parseAttributes, callSetMethod, waitUntil} from '../utils/index.js';
import {resolveLatLng} from './leaflet-util.js';

/**
 * @description
 * leaflet map element, `mce-leaflet`
 * 
 * ### example
 * ```
 * <mce-leaflet center="Brampton, Canada"></mce-leaflet>
 * ```
 *
 * <iframe height='265' scrolling='no' title='OzzMbd' src='//codepen.io/allenhwkim/embed/OzzMbd/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/OzzMbd/'>OzzMbd</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * 
 * ### `mce-leaflet` Attributes 
 * any options defined in leaflet, http://leafletjs.com/reference-1.2.0.html#map-option
 * As an example, for center and zoom 
 *
 *  |name|value|description|
 *  |---|---|---|
 *  |center|Array or String| Initial geographic center of the map. [lat, lng], or an address. e.g. [0,0], "Brampton, Canada"
 *  |zoom|number| initial map zoom level e.g. 13
 *  |...|...| [more](http://leafletjs.com/reference-1.2.0.html#map-option)
 * 
 * any events defined in leaflet with `on-` prefixed; http://leafletjs.com/reference-1.2.0.html#map-event
 * As an example, for click event, 
 *
 *  |name|value|description|
 *  |---|---|---|
 *  |on-click|function reference| e.g. on-click="myClickHandler"
 *  |...|...| [more](http://leafletjs.com/reference-1.2.0.html#map-event)
 */
export class LeafletMap extends HTMLElement{
  connectedCallback() {
    this.map;
    this.options = {center: [51.505, -0.09], zoom: 13};        // default options
    this.events = {};

    // initiazlie separately when `lazy-init` is given
    (this.getAttribute('lazy-init') === null) && this.initialize();
  }

  initialize(){
    if (this.map) { // already initialized
      return false;
    }
    this.loadLibrary()
      .then(L => { // set options and events
        let parsedAttrs = parseAttributes(this.attributes);
        this.options = Object.assign(this.options, parsedAttrs.options);
        this.events = parsedAttrs.events;
      })
      .then(_ => resolveLatLng(this.options.center))
      .then(latlng => {
        this.options.center = latlng;

        let mapOptions = Object.assign({}, this.options);
        delete mapOptions.zoom;
        delete mapOptions.center;
        this.map = new L.map(this, mapOptions);
        this.setEvents(); // load event must fire when set view
        this.map.setView(latlng, this.options.zoom);
      })
      .then(_ => {
        observeAttrChange(this, this.onAttrChange.bind(this));
        setTimeout(_ => { // children are not immediatly visible
          let childEls = Array.from(this.querySelectorAll('*')).filter(el => el.tagName.match(/-/));
          childEls.forEach(child => child.initialize(this.map));
          if (!this.querySelector('mce-tile-layer')) {
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
          }
        });
      });
  }

  setEvents() {
    for(let eventName in this.events) {
      window.debug && console.log('this.events[eventName]', eventName, this.events[eventName]);
      this.map.on(eventName, this.events[eventName]);
    }
  }

  // run setXXX if defined when attribute value changes
  onAttrChange(name, val) {
    if (name === 'center') {
      if (typeof val === 'string') {
        resolveLatLng(val).then(latlng => {
          this.map.setView(latlng, this.map.getZoom());
        });
      } else {
        this.map.setView(val, this.map.getZoom());
      }
    } else if (!['class', 'tabindex', 'style'].includes(name)) {
      callSetMethod(this.map, name, val);
    };
  }

  loadLibrary(){
    if (!document.querySelector('link.mce-map.leaflet')) {
      let el = document.createElement('link');
      el.setAttribute('class', 'mce-map leaflet');
      el.setAttribute('rel', 'stylesheet');
      el.setAttribute('href', 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.css');
      document.querySelector('head').appendChild(el);
    }

    if (!document.querySelector('script.mce-map.leaflet')) {
      let el = document.createElement('script');
      el.setAttribute('class', 'mce-map leaflet');
      el.setAttribute('src', 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.js');
      document.querySelector('head').appendChild(el);
    }

    return waitUntil(_ => window.L); // this returns a promisse
  }

}

customElements.define('mce-leaflet', LeafletMap);

