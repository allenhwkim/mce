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
import '../route/main.js';
import {getScopedObj} from '../util.js';

( function() {
  var loadingHTML = `
    <style>
      @keyframes ce-rotate{from{transform:rotate(0)}to{transform:rotate(359deg)}}
      a-router {display: block;}
      a-router .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        position:absolute; top: 0; left: 0; width:100%; height: 100%; 
        background-color: rgba(0,0,0,0.2); 
      }
      a-router .loading svg {animation: ce-rotate 1.4s infinite linear; vertical-align: middle;}
      a-router .loading svg circle {
        stroke-dasharray: 44.2336, 200;
        stroke-dashoffset: -15;
        stroke: var(--theme-color-0, #ffffff);
        stroke-linecap: round;
        opacity: 1;
        stroke-width: 3;
        fill: none;
      }
      a-router .loading svg polygon {
        fill: var(--theme-color-0, #ffffff);
        transform: rotate(314deg);
        transform-origin: 16px 16px 0px;
        opacity: 1;
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
      this.basePath = this.getAttribute('base-path') || '';

      let aPromise = _ => Promise.resolve();
      this.resolveFunc = aPromise;  // common resolve function route as parameter, and returning a Promise
      this.onHttpStart = aPromise ; // a callback function, route as parameter, and returning a Promise
      this.onHttpEnd   = aPromise;  // a callvack funciton, route as parameter, returning a Promise

      this.routes;      // collection of <a-route> children
      this.popStateHandler = this._popStateHandler.bind(this); // saving it to be used by add/remove

      this.style.position = 'relative'; //required to show loaing overlay
      this._addEventListener();
      this._setProperties();
      this.popStateHandler();
    }

    disconnectedCallback() {
      window.removeEventListener('popstate', this.popStateHandler);
    }

    showLoadingEl(show) {
      this.loadingEl.style.display = show ? 'flex' : 'none';
    }

    _addEventListener() {
      window.addEventListener('popstate', this.popStateHandler);
    }

    _getUrlMatchingRoute(path) {
      path = path || this._getRouterPath();
      let matchingRoute;

      for(var i=0; i<this.routes.length; i++) {
        let route = this.routes[i];
        let reStr = (this.basePath + '/' + route.path).replace(/\/\//g, '/');
        let re = new RegExp('^' + reStr + '$', 'i');

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
        console.error(`route not found for '${this._getRouterPath()}', redirecting to 'not-found'`);
        route = this._getUrlMatchingRoute('/not-found');
        if (route) {
          this._redirectTo(route.path);
        } else {
          console.error(`route not found for 'not-found`);
        }
      }
    }

    _redirectTo(redirectPath) {
      let redirectUrl = '#'+this.basePath+redirectPath;
      window.location.href = redirectUrl;
    }

    _setProperties() {
      let resolveFunc = this.getAttribute('resolv-func');
      let onHttpStart = this.getAttribute('on-http-start');
      let onHttpEnd   = this.getAttribute('on-http-end');
      let targetId    = this.getAttribute('target');

      this.routes = Array.from(this.querySelectorAll('a-route'));
      this.resolveFunc = getScopedObj(window, resolveFunc);
      this.onHttpEnd   = getScopedObj(window, onHttpEnd);
      this.onHttpEnd   = getScopedObj(window, onHttpEnd);
      this.targetEl    = this._addTargetEl();
      this.loadingEl   = this._addLoadingEl();
    }

    _getRouterPath() {
      let url   = new URL(window.location.href);
      return url.hash ? new URL(url.hash.replace('#', ''), window.location.origin).pathname : ''; 
    }

    _addLoadingEl() {
      let loadingEl = this.querySelector('.loading');
      if (!loadingEl) {
        this.insertAdjacentHTML('beforeend', loadingHTML);
        loadingEl = document.querySelector('div.loading');
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
