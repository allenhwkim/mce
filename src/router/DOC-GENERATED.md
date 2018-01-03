## Classes

<dl>
<dt><a href="#Route">Route</a></dt>
<dd></dd>
<dt><a href="#Router">Router</a></dt>
<dd></dd>
</dl>

<a name="Route"></a>

## Route
**Kind**: global class  

* [Route](#Route)
    * [new Route()](#new_Route_new)
    * [.activate()](#Route+activate)

<a name="new_Route_new"></a>

### new Route()
Child element of a router,`<a-router>`

 ### Attributes
   * `path`
     _required_,  path to respond
   * `import`
     _required_,  url to load
   * `no-cache`
     Optional,Indicates that the route view template is not cached.
   * `resolve-func`
    Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<a-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`
   * `on-route-start`
     Optional, injector function to be executed before route starts.
   * `on-route-end`
     Optional, injector function to be executed after route ends.
 
 ### Properties
   * `path`, attribute value.
   * `cachedTemplate`, template HTML cached
   * `noCache`, attribute value
   * `import`, attribute value
   * `resolveFunc`, attribute value

### Usage
 ```
 <a-router>
    <a-route path="/path1" import="path1.html">
      <a-router>    <!-- knows that parent path is /path1 -->
        <a-route path="/foo" import="foo.html" ></a-route> <!-- responds to /path1/foo -->
        <a-route path="/bar" import="bar.html"></a-route> <!-- responds to /path1/bar -->
      </a-router>
    </a-route>
 </a-router>
 ```

<a name="Route+activate"></a>

### route.activate()
activate this route for the parent router. The activation sequence is;

1. resolve router function which is given from `a-router[resolve-func]` 
2. resolve route function which is given from `a-route[resolve-func]` 
3. run route start callback if given from `a-route[on-route-start]` 
4. determine html contents
  4.1 if html contents is cached, contents is cached one.
  4.2 if not cached, run http start callback if given from `a-router[on-http-start]` 
  4.3 fetch html contents, then run http end callback if given from `a-router[on-http-end]` 
5. show slide-in animation and replace contents
6. run route end callback if given from `a-router[on-route-end]`

**Kind**: instance method of [<code>Route</code>](#Route)  
<a name="Router"></a>

## Router
**Kind**: global class  
<a name="new_Router_new"></a>

### new Router()
`a-router` is an element that responds to url hash change.
a-router watches the url hash changes, find a proper route, and load html.
On the other hand, a-route(without r) does fetch, template caching, transition, and replacing, and throws error if erroneous
A router has div.router-html to show the path-related contents.

### example
```
<a-router>
  <a-route path="page1" import="page1.html" no-cache=""></a-route>
  <a-route path="page2" import="page2.html"></a-route>
  <a-route path="not-found" import="not-found.html"></a-route>
  <a-route path="" redirect="page1"></a-route>
</a-router>
``` 

### `a-router` atttibutes
 |name          |value     |description                                                  |
 |--------------|----------|-------------------------------------------------------------|
 |base-path     | url path | Optional. default '/', base path of this router. All route path will be prefixed with this base path.
 |import        | url      | **required**, url of partial html
 |no-cache      | boolean  | Optional,Indicates that the route view template is not cached.
 |resolve-func  | function | Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<a-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`
 |on-route-start| function | Optional, injector function to be executed before route starts.
 |on-route-end  | function | Optional, injector function to be executed after route ends.
 |on-http-start | function | Optional, injector function to be executed before all http requests calls. This can change http request. It must return `fetch` [call option](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)
 |on-http-end   | function | Optional, injector function to be executed after all http responses. This can change http response. It must return a Promise

#### `resolve-func` example
```
   &lt;a-router resolve-func="routerResolve()">....&lt;/a-router>
   &lt;script>
     function routerResolve(route) {
       console.log('executing router-resolve');
       return new Promise(function(resolve, reject) {
         setTimeout(function() { resolve({data: 'router'}); }, 1000);
       });
     },
   &lt;/script>
```
#### `on-http-start` example
```
   &lt;a-router resolve-func="onHttpStart">....&lt;/a-router>
   &lt;script>
     function onHttpStart(route) {
       console.log('executing on-http-start');
       return {method: 'GET'}; // must return httpOptions
     },
   &lt;/script>
```
#### `on-http-end` example
```
   &lt;a-router on-http-end="onHttpEnd">....&lt;/a-router>
   &lt;script>
     function onHttpEnd(response) { 
       console.log('executing on-http-end');
       return response.text(); // must return a promise
     }
   &lt;/script>
```
#### `on-route-start` example
```
  &lt;a-router on-route-start="onRouteStart">....&lt;/a-router>
  &lt;script>
    function onRouteStart(route) { 
      console.log('executing on-route-start');
      return route;
    }
  &lt;/script>
```
#### `on-route-end` example
```
   &lt;a-router on-route-end="onRouteEnd">....&lt;/a-router>
   &lt;script>
     function onRouteEnd(route) { 
       console.log('executing on-route-end');
       return route;
     }
   &lt;/script>
```

