/**
 * a-router watches the url changes, find a proper route, and allow the route do the proper action.
 * 
 * - monitors url change
 * - find a route
 * - then ask route do the action
 * - and handles error
 *
 * On the other hand, a-route(without r) does fetch, template caching, transition, and replacing, and throws error if erroneous
 * A router has div.router-html to show the path-related contents.
 */

import '../ce-polyfill.js';
import './route.js';
import {getScopedObj, observeAttrChange} from '../util.js';

( function() {
  var loadingHTML = `
    <style>
      @keyframes ce-rotate{
        from{transform:rotate(0)}
        to{transform:rotate(359deg)}
      }
      a-router {
        display: block; 
        overflow: hidden;
      }
      a-router > .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        position:absolute; top: 0; left: 0; 
        width:100%; height: 100%; 
        min-height: 64px;
        background-color: rgba(255,255,255,0.2); 
      }
      a-router > .loading > svg {
        animation: ce-rotate 1.4s infinite linear;
        vertical-align: middle;
      }
      a-router > .loading > svg circle {
        stroke-dasharray: 44.2336, 200;
        stroke-dashoffset: -15;
        stroke: var(--theme-color-700, #616161);
        stroke-linecap: round;
        opacity: 1;
        stroke-width: 3;
        fill: none;
      }
      a-router > .loading > svg polygon {
        fill: var(--theme-color-700, #616161);
        transform: rotate(314deg);
        transform-origin: 16px 16px 0px;
        opacity: 1;
      }
      a-router > .router-target {
        opacity: 0;
        margin-left: 100%;
      }
      a-router > .router-target.slide-in {
        opacity: 1;
        margin-left: 0%;
        transition: all 0.5s;
      }
    </style>
    <div class="loading">
      <svg xmlns="http://www.w3.org/2000/svg: viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="11"></circle>
        <polygon points="21.75,16 32.25,16 27,21.25"></polygon>
      </svg>
    </div>`;

  //https://material.io/guidelines/layout/structure.html#structure-app-bar
  class Router extends HTMLElement {
    connectedCallback() {
      this.basePath = this.getAttribute('base-path') || '/';
      this.debug = this.getAttribute('debug') === 'true';

      let aPromise = _ => Promise.resolve();
      this.resolveFunc = aPromise;  // common resolve function route as parameter, and returning a Promise
      this.onHttpStart = aPromise ; // a callback function, route as parameter, and returning a Promise
      this.onHttpEnd   = aPromise;  // a callvack funciton, route as parameter, returning a Promise

      this.routes;      // collection of <a-route> children
      this.popStateHandler = this._popStateHandler.bind(this); // saving it to be used by add/remove

      this.style.position = 'relative'; //required to show loaing overlay
      this._setProperties();
      window.addEventListener('popstate', this.popStateHandler);
      this.popStateHandler();

      observeAttrChange(this, (attr, val) => {
        (attr === 'debug') && (this.debug = (val === 'true'));
      });
    }

    disconnectedCallback() {
      window.removeEventListener('popstate', this.popStateHandler);
    }

    showLoadingEl(show) {
      this.loadingEl.style.display = show ? 'flex' : 'none';
    }

    _getUrlMatchingRoute(path) {
      let matchingRoute;

      path = path || this._getRouterPath();
      path = path.replace(/[\/]{2,}/g, '/');

      for(var i=0; i<this.routes.length; i++) {
        let route = this.routes[i];
        let reStr = (this.basePath + '/' + route.path).replace(/[\/]{2,}/g, '/');
        let re = new RegExp('^' + reStr + '$', 'i');
        this.debug && console.log('path', path, 're', re);

        if (path.match(re)) {
          matchingRoute = route;
          break;
        }
      }
      return matchingRoute;
    }

    _popStateHandler(event) {
      let route = this._getUrlMatchingRoute();

      if (route && route.redirect) {
        route = this._getUrlMatchingRoute(route.redirect);
        this._redirectTo(route.path);
      } else if (route) {
        route.activate();
      } else { // not-found
        this.debug && console.log(`route not found for '${this._getRouterPath()}', redirecting to 'not-found'`);
        route = this._getUrlMatchingRoute(this.basePath + '/not-found');
        if (route) {
          this._redirectTo(route.path);
        } else {
          this.debug && console.error(`route not found for 'not-found`);
        }
      }
    }

    _redirectTo(path) {
      let url = this.basePath+path;
      let route = this._getUrlMatchingRoute(url);
      route ? route.activate() : console.error('route not found for', url);
    }

    _setProperties() {
      let resolveFunc = this.getAttribute('resolve-func');
      let onHttpStart = this.getAttribute('on-http-start');
      let onHttpEnd   = this.getAttribute('on-http-end');

      this.routes = Array.from(this.querySelectorAll('a-route'));
      this.resolveFunc = getScopedObj(window, resolveFunc);
      this.onHttpSatrt = getScopedObj(window, onHttpStart);
      this.onHttpEnd   = getScopedObj(window, onHttpEnd);
      this.targetEl    = this._addTargetEl();
      this.loadingEl   = this._addLoadingEl();
    }

    _getRouterPath(href) {
      href = href || window.location.href;

      let parsed = new URL(href.replace(/[\/]{2,}/g, '/'));
      if (parsed.hash) {
        parsed = new URL(parsed.hash.replace('#', ''), window.location.origin);
      } 
      return parsed.pathname;
    }

    _addLoadingEl() {
      let loadingEl = this.querySelector('.loading');
      if (!loadingEl) {
        this.insertAdjacentHTML('beforeend', loadingHTML);
        loadingEl = this.querySelector('div.loading');
      }
      return loadingEl;
    }

    _addTargetEl() {
      this.insertAdjacentHTML('beforeend', '<div class="router-target"></div>');
      return this.querySelector('div.router-target');
    }
  }
  customElements.define('a-router', Router); //name, class

})();
