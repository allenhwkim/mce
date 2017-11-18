/**
 * <a-router>
 * attributes
 *   resolve-func="function"
 * callbacks
 *   on-fetch-start="function"
 *   on-fetch-end="function"
 *
 * router(ends with r) 
 *   - monitors url change
 *   - and find a route
 *   - then ask route do the action 
 *   - and handles error
 * 
 * route(without r) does fetch, template caching, transition, and replacing, and throws error if errorneous
 */
import '../ce-polyfill.js';

function parseUrl(location) {
  var anchor = document.createElement('a');a
  anchor.href = location;
  let url = {};
  url.path = anchor.pathname;
  if (url.path.charAt(0) !== '/') {
    url.path = '/' + url.path;
  }
  url.hash = anchor.hash;
  url.search = anchor.search;
  return url
}

( function() {

  //https://material.io/guidelines/layout/structure.html#structure-app-bar
  class Router extends HTMLElement {
    connectedCallback() {
      this.basePath;    // basePath of this router, all children routes url is prefixed with this
      this.routes;      // all children routes for this router(ends with R)
      this.route404;    // 404 route
      this.callbacks;   // callback functions on each step
      this.resolveFunc; // common resolve function returning a Promise
      this.routeHandler = this._popStateHandler.bind(this);
      this._addEventListener();
    }

    disconnectedCallback() {
      window.removeEventListener('popstate', this.routeHandler);
    }

    _addEventListener() {
      window.addEventListener('popstate', this.routeHandler);
    }

    _getUrlMatchingRoute(locationHref) {
      let url = parseUrl(locationHref);
      url = parseUrl(url.hash.replace('#', ''));
      let route = this.routes.filter(route => route.url.match(url))[0];
      return route;
    }

    _popStateHandler(locationHref) {
      let route; 

      locationHref = locationHref || window.location.href;
      route = getRoute(locationHref);
      if (route) {
        route.run();
      } else if (locationHref !== this.route404.url) { // to prevent loop
        window.location.href = this.route404.url;
      } else {
        throw 'Invalid route for ' + locationHref;
      }
    }

  }
  customElements.define('a-router', Router); //name, class
})();
