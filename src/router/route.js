import '../mce-polyfill.js';
import {setInnerHTML} from '../utils/index.js';

/**
 *  Child element of a router,`<mce-router>`
 *
 *  
 * ### Example
 *  ```
 *  <mce-router>
 *     <mce-route path="/path1" import="path1.html">
 *       <mce-router>    <!-- knows that parent path is /path1 -->
 *         <mce-route path="/foo" import="foo.html" ></mce-route> <!-- responds to /path1/foo -->
 *         <mce-route path="/bar" import="bar.html"></mce-route> <!-- responds to /path1/bar -->
 *       </mce-router>
 *     </mce-route>
 *  </mce-router>
 *  ```
 *
 *  <iframe frameborder="no" width="100%" height="300" src="https://embed.plnkr.co/FOLOB9?show=preview"></iframe>
 *  <iframe frameborder="no" width="100%" height="300" src="https://embed.plnkr.co/iyCwi9?show=preview"></iframe>
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
 *      Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<mce-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`
 */
export class Route extends HTMLElement {
  connectedCallback() {
    // add this to the parent route
    this.router = this.closest('mce-router');
    this.path = this.getAttribute('path');
    this.name = this.getAttribute('name') || (this.path && this.path.replace('/', ' '));
    this.redirect = this.getAttribute('redirect');
    this.noCache = (this.getAttribute('no-cache') !== null);
    this.cachedTemplate = null;
    this.resolveFunc = this.getAttribute('resolve-func') && 
      this._getPromiseFunc('route', this.getAttribute('resolve-func'));

    if (!this.path && !(this.import || this.redirect)) {
      throw "Invalid attributes for mce-route, required path and import";
    }
  }

  get import() {
    let url, attrFn, attr = this.getAttribute('import');
    if (attr && attr.match(/\(.*\)/)) {
      attrFn = new Function('return ' +attr);
      url = attrFn();
    } else {
      url = attr;
    }
    return url;
  }

  /**
   * activate this route for the parent router. The activation sequence is;
   * 
   * 1. resolve router function which is given from `mce-router[resolve-func]` 
   * 2. resolve route function which is given from `mce-route[resolve-func]` 
   * 3. run route start callback if given from `mce-route[on-route-start]` 
   * 4. determine html contents
   *   4.1 if html contents is cached, contents is cached one.
   *   4.2 if not cached, run http start callback if given from `mce-router[on-http-start]` 
   *   4.3 fetch html contents, then run http end callback if given from `mce-router[on-http-end]` 
   * 5. show slide-in animation and replace contents
   * 6. run route end callback if given from `mce-router[on-route-end]` 
   */
  activate() {
    let aPromise = _ => Promise.resolve();
    let routerResolveFn = this.router.resolveFunc || aPromise;
    let routeResolveFn = this.resolveFunc || aPromise;
    let onRouteStartFn = this.router.onRouteStart || aPromise;
    let onRouteEndFn = this.router.onRouteEnd || aPromise;

    this.state = window.history.stae;

    this.router.showLoadingEl(true);

    function buildImportUrl(importURL, matches) {
      let url = importURL;
      if (matches.length > 1) {
        for(var i=1; i<matches.length; i++) {
          url = url.replace(/:[a-zA-Z_]+/, matches[i]);
        }
      }
      return url;
    }

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
        if (this.import) { // only run fetch when import Url is given
          let url = buildImportUrl(this.import, this.matches), options;
          if (this.router.onHttpStart) {
            let cbResp = this.router.onHttpStart(this); //callback response
            url = cbResp.url || url;
            options = cbResp.options || {};
          }
          return fetch(url, options)
            .then(response => {
              if (!response.ok) {
                throw Error(`url: ${url}, status: ${response.statusText}`);
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
        // this.router.targetEl.classList.remove('mce-slide-in');
        setTimeout(_ => {
          // this.router.targetEl.innerHTML = html; 
          setInnerHTML(this.router.targetEl, html); // replace html and run <script> in html
          // this.router.targetEl.classList.add('mce-slide-in');
        }, 50);
      }
      this.router.showLoadingEl(false);
      this.router.currentRoute = this;
      return onRouteEndFn(this);
    }).catch(error => {
      this.router.debug && console.error('routing-error', error);
      this.router.showLoadingEl(false);
      throw error;
    });
  }

  /* returns a function which accepts paramName and returns a promise */
  _getPromiseFunc(paramName, funcStr) {
    return function(param) {
      let func = new Function(paramName, `return ${funcStr}`);
      return Promise.resolve(func(param));
    };
  }
}

customElements.define('mce-route', Route);
