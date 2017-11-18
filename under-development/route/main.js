/**
 *  <a-route>
 *   attributes
 *     template-cached="true/false"
 *   callbacks
 *     resolve-func="function"
 *     on-start="function"
 *     on-end="function"
 *
 * each route will hold its template, which will be used for cache
 *  <template></template>
 *
 * <a-router>
 *   <a-route path="/path1">
 *     <template>
 *       <a-router>                        <!-- knows that parent path is /path1 -->
 *         <a-route path="/foo"></a-route> <!-- responds to /path1/foo -->
 *         <a-route path="/bar"></a-route> <!-- responds to /path1/bar -->
 *       </a-router>
 *     </template>
 *   </a-route>
 *   <a-route path="/path2">
 *     <template>
 *       <a-router>                        <!-- knows that parent path is /path2 -->
 *         <a-route path="/foo"></a-route> <!-- responds to /path2/foo -->
 *         <a-route path="/bar"></a-route> <!-- responds to /path2/bar -->
 *       </a-router>
 *     </template>
 *   </a-route>
 * </a-router>
 * 
 * router(ends with r) monitors url change, find a route, ask route do the action, and handles error
 * 
 * route(without r) does 
 *   - fetch
 *   - template caching 
 *   - replacing contents from template
 *   - and, throws error if errorneous
 */

import '../ce-polyfill.js';

function fireCustomEvent(name, event) {
  let customEvent = new CustomEvent('remove', event);
  return this.dispatchEvent(customEvent);
}

(function() {

  //https://material.io/guidelines/layout/structure.html#structure-app-bar
  class Route extends HTMLElement {
    connectedCallback() {
      // add this to the parent route
    }

    run(router) {
      this._runResolveFunc() // run Router resolveFunc / this resolveFunc if defined
      .then(result => this._runRouteStart(result))
      .then(result => this._runRouteFetchStart(result))
      .then(result => this._runRouteFetchEnd(result))
      .then(result => this._runRouteEnd(result))
      .catch(error => throw error);
    }

    _runResolveFunc() {
    }

    _runRouteStart(data) {
      fireCustomEvent('route-start', data)
    }

    _runRouteFetchStart(data) {
      fireCustomEvent('route-fetch-start', data)
    }

    _runRouteFetchEnd(data) {
      fireCustomEvent('route-fetch-end', data)
    }

    _runRouteEnd(data) {
      fireCustomEvent('route-end', data)
    }

  }
  customElements.define('a-router', Router); //name, class

})();


