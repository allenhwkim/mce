import {observeAttrChange} from '../util.js';
import {util} from './util.js';

class LeafletMap extends HTMLElement{
  connectedCallback() {
    this.map;
    this.options = {center: [51.505, -0.09], zoom: 13};        // default options
    this.events = {};
    this.childObjects = {};

    // initiazlie separately when `no-init` is given
    (this.getAttribute('no-init') === null) && this.initialize();
  }

  initialize(){
    if (this.map) { // already initialized
      return false;
    }
    this.loadLibrary()
      .then(L => { // set options and events
        let attrOptions = util.attrs2Options(this.attributes);
        this.options = Object.assign(this.options, attrOptions);
        this.events = util.attrs2Events(this.attributes);
      })
      .then(_ => util.resolveLatLng(this.options.center))
      .then(latlng => {
        this.options.center = latlng;
        this.map = new L.map(this, this.options)
      })
      .then(_ => this.setChildObjects())   // read children elements and set default layer
      .then(childObjects => {
        observeAttrChange(this, this.onAttrChange.bind(this));
        if (!this.childObjects.aTileLayer) { // if no tilelayer given, set default one
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
        }
        this.setEvents();
      })
  }

  setChildObjects(map) {
    return new Promise(resolve =>  {
      setTimeout(_ => { // children are not immediatly visible
        let childrenEls = Array.from(this.querySelectorAll('*'));
        childrenEls.forEach(child => {
          let groupName = util.toCamelCase(child.tagName.toLowerCase());
          this.childObjects[groupName] = this.childObjects[groupName] || [];
          this.childObjects[groupName].push(child.mapObject);
        })
        resolve(this.childObjects);
      });
    })
  }

  setEvents() {
    for(let eventName in this.events) {
      this.map.on(eventName, this.events[eventName]);
    }
  }

  // run setXXX if defined when attribute value changes
  onAttrChange(name, val) {
    util.handleAttrChange(name, val, this.map, {
      center: val => {
        if (typeof val === 'string') {
          util.resolveLatLng(val).then(latlng => {
            this.map.setView(latlng, this.map.getZoom())
          });
        } else {
          this.map.setView(val, this.map.getZoom())
        }
      }
    });
  }

  loadLibrary(){
    if (!document.querySelector('link.a-map.leaflet')) {
      let el = document.createElement('link');
      el.setAttribute('class', 'a-map leaflet');
      el.setAttribute('rel', 'stylesheet');
      el.setAttribute('href', 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.css');
      document.querySelector('head').appendChild(el);
    }

    if (!document.querySelector('script.a-map.leaflet')) {
      let el = document.createElement('script');
      el.setAttribute('class', 'a-map leaflet');
      el.setAttribute('src', 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.js');
      document.querySelector('head').appendChild(el);
    }

    return util.waitUntil(_ => window.L); // this returns a promisse
  }

}

customElements.define('a-map', LeafletMap);
