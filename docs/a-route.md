<a name="Route"></a>

## Route

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
   * `name`
     Optional, name of this route. Default. the name of path
   * `no-cache`
     Optional,Indicates that the route view template is not cached.
   * `resolve-func`
     Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<a-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`
 
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

