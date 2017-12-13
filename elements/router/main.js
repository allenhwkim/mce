import '../ce-polyfill.js';
import './route.js';
import {getScopedObj} from '../util.js';

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
        background-color: rgba(255,255,255,0.5); 
      }
      a-router > .loading > svg {
        animation: ce-rotate 1.4s infinite linear;
        vertical-align: middle;
      }
      a-router > .loading > svg circle {
        stroke-dasharray: 44.2336, 200;
        stroke-dashoffset: -15;
        stroke: var(--theme-color-500, #9e9e9e);
        stroke-linecap: round;
        opacity: 1;
        stroke-width: 3;
        fill: none;
      }
      a-router > .loading > svg polygon {
        fill: var(--theme-color-500, #9e9e9e);
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
        transition: all 0.25s;
      }
    </style>
    <div class="loading">
      <svg xmlns="http://www.w3.org/2000/svg: viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="11"></circle>
        <polygon points="21.75,16 32.25,16 27,21.25"></polygon>
      </svg>
    </div>`;

  /**
   * @description
   * `a-router` is an element that responds to url hash change.
   * a-router watches the url hash changes, find a proper route, and load html.
   * On the other hand, a-route(without r) does fetch, template caching, transition, and replacing, and throws error if erroneous
   * A router has div.router-html to show the path-related contents.
   * 
   * ### example
   * ```
   * <a-router>
   *   <a-route path="page1" import="page1.html" no-cache=""></a-route>
   *   <a-route path="page2" import="page2.html"></a-route>
   *   <a-route path="not-found" import="not-found.html"></a-route>
   *   <a-route path="" redirect="page1"></a-route>
   * </a-router>
   * ```
   * 
   * ### `a-router` Attributes 
   * <table><tr><th>name<th>value<th>description
   *  <tr><td>base-path<td>url path value<td>
   *    Optional. default '/', base path of this router. All route path will be prefixed with this base path.
   *  <tr><td>resolve-func<td>function<td>
   *    Optional, router level resolve function. e.g. security check, configuration, etc. Must return a promise
   *    Example
   *    <pre>
   *      &lt;a-router resolve-func="routerResolve">....&lt;/a-router>
   *      &lt;script>
   *        function routerResolve(route) {
   *          console.log('executing router-resolve');
   *          return new Promise(function(resolve, reject) {
   *            setTimeout(function() { resolve({data: 'router'}); }, 1000);
   *          });
   *        },
   *      &lt;/script>
   *    </pre>
   *  <tr><td>on-http-start<td>function<td>
   *    Optional, injector function to be executed before all http requests calls. This can change http request.
   *    It must return `fetch` [call option](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)
   *    Example
   *    <pre>
   *      &lt;a-router resolve-func="onHttpStart">....&lt;/a-router>
   *      &lt;script>
   *        function onHttpStart(route) {
   *          console.log('executing on-http-start');
   *          return {method: 'GET'}; // must return httpOptions
   *        },
   *      &lt;/script>
   *    </pre>
   *  <tr><td>on-http-end<td>function<td>
   *     Optional, injector function to be executed after all http responses. This can change http response. It must return a Promise
   * 
   *     Example
   *     <pre>
   *       &lt;a-router on-http-end="onHttpEnd">....&lt;/a-router>
   *       &lt;script>
   *         function onHttpEnd(response) { 
   *           console.log('executing on-http-end');
   *           return response.text(); // must return a promise
   *         }
   *       &lt;/script>
   *     </pre>
   * </table>
   */
  class Router extends HTMLElement {
    connectedCallback() {
      this.basePath = this.getAttribute('base-path') || '';
      this.debug = this.getAttribute('debug') === 'true';

      this.resolveFunc;  // common resolve function route as parameter, and returning a Promise
      this.onHttpStart; // a callback function, route as parameter, and returning a Promise
      this.onHttpEnd;  // a callvack funciton, route as parameter, returning a Promise

      this.routes;      // collection of <a-route> children
      this.defaultRoute;
      this.popStateHandler = this._popStateHandler.bind(this); // saving it to be used by add/remove

      this.style.position = 'relative'; //required to show loaing overlay
      this._setProperties();
      window.addEventListener('popstate', this.popStateHandler);
      this.popStateHandler();
    }

    disconnectedCallback() {
      window.removeEventListener('popstate', this.popStateHandler);
    }

    showLoadingEl(show) {
      this.loadingEl.style.display = show ? 'flex' : 'none';
    }

    get notFoundRoute() {
      this._notFoundRoute = this._notFoundRoute ||
        this._getUrlMatchingRoute(this.basePath + '/not-found') ||
        this._getUrlMatchingRoute(this.basePath + 'not-found');
      return this._notFoundRoute;
    }

    _getUrlMatchingRoute(path) {
      let matchingRoute;

      path = path || this._getRouterPath();
      path = path.replace(/[\/]{2,}/g, '/');

      for(var i=0; i<this.routes.length; i++) {
        let route = this.routes[i];
        let reStr = (this.basePath + route.path).replace(/[\/]{2,}/g, '/');
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
        this.debug && console.log(
          `route not found for '${this._getRouterPath()}', redirecting to 'not-found'`);
        if (this.defaultRoute) {
          this.defaultRoute.activate();
        } else if (this.notFoundRoute) {
          this._redirectTo(this.notFoundRoute.path);
        } else {
          this.debug && console.error(`route not found for '/not-found' or 'not-found'`);
        }
      }
    }

    _redirectTo(path) {
      let url = this.basePath + path;
      let route = this._getUrlMatchingRoute(url);
      route ? route.activate() : console.error('route not found for', url);
    }

    _setProperties() {
      let aPromise = _ => Promise.resolve();
      let resolveFunc = this.getAttribute('resolve-func');
      let onHttpStart = this.getAttribute('on-http-start');
      let onHttpEnd   = this.getAttribute('on-http-end');

      this.routes = Array.from(this.querySelectorAll('a-route'));
      this.routes.forEach(route => {
        (route.getAttribute('default') !== null) && (this.defaultRoute = route);
      });
      this.resolveFunc = getScopedObj(window, resolveFunc);
      this.onHttpStart = getScopedObj(window, onHttpStart);
      this.onHttpEnd   = getScopedObj(window, onHttpEnd);
      this.targetEl    = this._addTargetEl();
      this.loadingEl   = this._addLoadingEl();
    }

    _getRouterPath(href) {
      href = href || window.location.href;

      let parsed = new URL(href.replace(/[\/]{2,}/g, '/')), routerPath;

      if (parsed.hash) {
        if (this.basePath === '' && !parsed.hash.match(/\//)) { // pure hash reference
          routerPath = parsed.hash.replace('#', '');
        } else {
          parsed = new URL(parsed.hash.replace('#', ''), window.location.origin);
          routerPath = parsed.pathname;
        } 
      } else {
        routerPath = '';
      }

      return routerPath;
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
