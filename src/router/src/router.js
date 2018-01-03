import '../../mce-polyfill.js';
import './route.js';
import {getScopedObj} from '../../mce-util.js';
import {defaultLoadingHTML} from './default-loading-html.js';

( function() {
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
   * ### `a-router` atttibutes
   *  |name          |value     |description                                                  |
   *  |--------------|----------|-------------------------------------------------------------|
   *  |base-path     | url path | Optional. default '/', base path of this router. All route path will be prefixed with this base path.
   *  |import        | url      | **required**, url of partial html
   *  |no-cache      | boolean  | Optional,Indicates that the route view template is not cached.
   *  |resolve-func  | function | Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<a-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`
   *  |on-route-start| function | Optional, injector function to be executed before route starts.
   *  |on-route-end  | function | Optional, injector function to be executed after route ends.
   *  |on-http-start | function | Optional, injector function to be executed before all http requests calls. This can change http request. It must return `fetch` [call option](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)
   *  |on-http-end   | function | Optional, injector function to be executed after all http responses. This can change http response. It must return a Promise
   *
   * #### `resolve-func` example
   * ```
   *    &lt;a-router resolve-func="routerResolve()">....&lt;/a-router>
   *    &lt;script>
   *      function routerResolve(route) {
   *        console.log('executing router-resolve');
   *        return new Promise(function(resolve, reject) {
   *          setTimeout(function() { resolve({data: 'router'}); }, 1000);
   *        });
   *      },
   *    &lt;/script>
   * ```
   * #### `on-http-start` example
   * ```
   *    &lt;a-router resolve-func="onHttpStart">....&lt;/a-router>
   *    &lt;script>
   *      function onHttpStart(route) {
   *        console.log('executing on-http-start');
   *        return {method: 'GET'}; // must return httpOptions
   *      },
   *    &lt;/script>
   * ```
   * #### `on-http-end` example
   * ```
   *    &lt;a-router on-http-end="onHttpEnd">....&lt;/a-router>
   *    &lt;script>
   *      function onHttpEnd(response) { 
   *        console.log('executing on-http-end');
   *        return response.text(); // must return a promise
   *      }
   *    &lt;/script>
   * ```
   * #### `on-route-start` example
   * ```
   *   &lt;a-router on-route-start="onRouteStart">....&lt;/a-router>
   *   &lt;script>
   *     function onRouteStart(route) { 
   *       console.log('executing on-route-start');
   *       return route;
   *     }
   *   &lt;/script>
   * ```
   * #### `on-route-end` example
   * ```
   *    &lt;a-router on-route-end="onRouteEnd">....&lt;/a-router>
   *    &lt;script>
   *      function onRouteEnd(route) { 
   *        console.log('executing on-route-end');
   *        return route;
   *      }
   *    &lt;/script>
   * ```
   */
  class Router extends HTMLElement {
    connectedCallback() {
      this.basePath = this.getAttribute('base-path') || '';
      this.debug = this.getAttribute('debug') === 'true';
      this.currentRoute;

      this.resolveFunc;  // common resolve function route as parameter, and returning a Promise
      this.onHttpStart;  // a callback function, route as parameter, and returning a Promise
      this.onHttpEnd;    // a callvack funciton, route as parameter, returning a Promise

      this.routes;       // collection of <a-route> children
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
      let resolveFunc  = this.getAttribute('resolve-func');
      let onHttpStart  = this.getAttribute('on-http-start');
      let onHttpEnd    = this.getAttribute('on-http-end');
      let onRouteStart = this.getAttribute('on-route-start');
      let onRouteEnd   = this.getAttribute('on-route-end');
      this.resolveFunc  = resolveFunc && this._getPromiseFunc('route', resolveFunc);
      this.onHttpStart  = onHttpStart && this._getPromiseFunc('route', onHttpStart);
      this.onHttpEnd    = onHttpEnd && this._getPromiseFunc('response', onHttpEnd);
      this.onRouteStart = onRouteStart && this._getPromiseFunc('route', onRouteStart);
      this.onRouteEnd   = onRouteEnd && this._getPromiseFunc('route', onRouteEnd);

      this.routes = Array.from(this.querySelectorAll('a-route'));
      this.routes.forEach(route => {
        (route.getAttribute('default') !== null) && (this.defaultRoute = route);
      });

      this.targetEl     = this._addTargetEl();
      this.loadingEl    = this._addLoadingEl();
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
        this.insertAdjacentHTML('beforeend', defaultLoadingHTML);
        loadingEl = this.querySelector('div.loading');
      }
      return loadingEl;
    }

    _addTargetEl() {
      this.insertAdjacentHTML('beforeend', '<div class="router-target"></div>');
      return this.querySelector('div.router-target');
    }

    /* returns a function which accepts paramName and returns a promise */
    _getPromiseFunc(paramName, funcStr) {
      if (paramName === 'response') {
        funcStr = `let res = ${funcStr};\n return res || response.text();`;
      } else {
        funcStr = `return ${funcStr}`;
      }
      return function(param) {
        let func = new Function(paramName, funcStr);
        return Promise.resolve(func(param));
      }
    }
  }
  customElements.define('a-router', Router); //name, class

})();
