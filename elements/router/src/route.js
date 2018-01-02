import '../../ce-polyfill.js';
import {getScopedObj, setInnerHTML} from '../../util.js';

(function() {
  /**
   * @description
   *  Child element of a router,`<a-router>`
   *
   *  ### Attributes
   *    * `path`
   *      _required_,  path to respond
   *    * `import`
   *      _required_,  url to load
   *    * `name`
   *      Optional, name of this route. Default. the name of path
   *    * `no-cache`
   *      Optional,Indicates that the route view template is not cached.
   *    * `resolve-func`
   *      Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<a-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`
   *  
   * ### Usage
   *  ```
   *  <a-router>
   *     <a-route path="/path1" import="path1.html">
   *       <a-router>    <!-- knows that parent path is /path1 -->
   *         <a-route path="/foo" import="foo.html" ></a-route> <!-- responds to /path1/foo -->
   *         <a-route path="/bar" import="bar.html"></a-route> <!-- responds to /path1/bar -->
   *       </a-router>
   *     </a-route>
   *  </a-router>
   *  ```
   */
  class Route extends HTMLElement {
    connectedCallback() {
      // add this to the parent route
      this.router = this.closest('a-router');
      this.path = this.getAttribute('path');
      this.name = this.getAttribute('name') || (this.path && this.path.replace('/', ' '));
      this.redirect = this.getAttribute('redirect');
      this.noCache = (this.getAttribute('no-cache') !== null);
      this.cachedTemplate = null;
      this.resolveFunc = this.getAttribute('resolve-func') && 
        this._getPromiseFunc('route', this.getAttribute('resolve-func'));

      if (!this.path && !(this.import || this.redirect)) {
        throw "Invalid attributes for a-route, required path and import"
      }
    }

    get import() {
      let url, attrFn, attr = this.getAttribute('import');
      if (attr) {
        if (attr.match(/\.html$/)) {
          url = attr;
        } else {
          attrFn = new Function('return ' +attr);
          url = attrFn();
          //console.log('attrFn', attrFn, 'attr', attr, 'url', url);
        }
      }
      return url;
    }

    /**
     * activate this route for the parent router. The activation sequence is;
     * 
     * 1. resolve router function which is given from `a-router[resolve-func]` 
     * 2. resolve route function which is given from `a-route[resolve-func]` 
     * 3. run route start callback if given from `a-route[on-route-start]` 
     * 4. determine html contents
     *   4.1 if html contents is cached, contents is cached one.
     *   4.2 if not cached, run http start callback if given from `a-router[on-http-start]` 
     *   4.3 fetch html contents, then run http end callback if given from `a-router[on-http-end]` 
     * 5. show slide-in animation and replace contents
     * 6. run route end callback if given from `a-router[on-route-end]` 
     */
    activate() {
      let aPromise = _ => Promise.resolve();
      let routerResolveFn = this.router.resolveFunc || aPromise;
      let routeResolveFn = this.resolveFunc || aPromise;
      let onRouteStartFn = this.router.onRouteStart || aPromise;
      let onRouteEndFn = this.router.onRouteEnd || aPromise;

      this.state = window.history.stae;

      this.router.showLoadingEl(true);

      routerResolveFn(this)    // resolve router resolveFunc
      .then(routerData => {
        routerData && (this.router.data = routerData);
        return routeResolveFn(this); // resolve route resolveFunc
      }).then(routeData => {
        routeData && (this.data = routeData);
        return onRouteStartFn(this); // run onRouteStart 
      }).then(result => {
        if (this.cachedTemplate) {
          return this.cachedTemplate;
        } else {  // fetch if not cached                       
          let importUrl = this.import;
          if (importUrl) { // only run fetch when import Url is given
            let options = this.router.onHttpStart && this.router.onHttpStart(this);
            return fetch(importUrl, options || {})
              .then(response => {
                if (!response.ok) {
                  throw Error(`url: ${importUrl}, status: ${response.statusText}`);
                }
                if (this.router.onHttpEnd) {
                  return this.router.onHttpEnd(response);
                } else {
                  return response.text();
                }
              });
          } else {
            return null;
          }
        }
      }).then(html => {
        if (html) { // only replace HTML when it is fetched or cached properly
          !this.noCache && (this.cachedTemplate = html);
          // Transtion effect. slide in from left
          this.router.targetEl.classList.remove('slide-in');
          setTimeout(_ => {
            // this.router.targetEl.innerHTML = html; 
            setInnerHTML(this.router.targetEl, html); // replace html and run <script> in html
            this.router.targetEl.classList.add('slide-in');
          }, 50);
        }
        this.router.showLoadingEl(false);
        this.router.currentRoute = this;
        return onRouteEndFn(this);
      }).catch(error => {
        this.router.debug && console.error('routing-error', error);
        this.router.showLoadingEl(false);
      })
    }

    /* returns a function which accepts paramName and returns a promise */
    _getPromiseFunc(paramName, funcStr) {
      return function(param) {
        let func = new Function(paramName, `return ${funcStr}`);
        return Promise.resolve(func(param));
      }
    }
  }
  customElements.define('a-route', Route); //name, class

})();