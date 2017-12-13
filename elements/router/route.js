import '../ce-polyfill.js';
import {getScopedObj, setInnerHTML} from '../util.js';

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
   *    * `no-cache`
   *      Optional,Indicates that the route view template is not cached.
   *    * `resolve-func`
   *     Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<a-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`
   *    * `on-route-start`
   *      Optional, injector function to be executed before route starts.
   *    * `on-route-end`
   *      Optional, injector function to be executed after route ends.
   *  
   *  ### Properties
   *    * `path`, attribute value.
   *    * `cachedTemplate`, template HTML cached
   *    * `noCache`, attribute value
   *    * `import`, attribute value
   *    * `resolveFunc`, attribute value
   *    * `onRouteStart`, attribute value
   *    * `onRouteEnd`, attribute value
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
      this.redirect = this.getAttribute('redirect');
      this.noCache = (this.getAttribute('no-cache') !== null);
      this.cachedTemplate = null;
      this.resolveFunc = getScopedObj(window, this.getAttribute('resolve-func'));
      this.onRouteStart =getScopedObj(window, this.getAttribute('on-route-start'));
      this.onRouteEnd = getScopedObj(window, this.getAttribute('on-route-end'));
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
      let onRouteStartFn = this.onRouteStart || aPromise;
      let onRouteEndFn = this.onRouteEnd || aPromise;

      this.state = window.history.stae;

      this.router.showLoadingEl(true);

      routerResolveFn(this)    // resolve router resolveFunc
      .then(routerData => {
        this.router.data = routerData;
        return routeResolveFn(this); // resolve route resolveFunc
      }).then(routeData => {
        this.data = routeData;
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
        return onRouteEndFn(this);
      }).catch(error => {
        this.router.debug && console.error('routing-error', error);
        this.router.showLoadingEl(false);
      })
    }

  }
  customElements.define('a-route', Route); //name, class

})();