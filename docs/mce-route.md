<a name="Route"></a>

## Route
Child element of a router,`<mce-router>`

 
### Example
 ```
 <mce-router>
    <mce-route path="/path1" import="path1.html">
      <mce-router>    <!-- knows that parent path is /path1 -->
        <mce-route path="/foo" import="foo.html" ></mce-route> <!-- responds to /path1/foo -->
        <mce-route path="/bar" import="bar.html"></mce-route> <!-- responds to /path1/bar -->
      </mce-router>
    </mce-route>
 </mce-router>
 ```

 <iframe frameborder="no" width="100%" height="300" src="https://embed.plnkr.co/FOLOB9?show=preview"></iframe>
 <iframe frameborder="no" width="100%" height="300" src="https://embed.plnkr.co/iyCwi9?show=preview"></iframe>

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
     Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<mce-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`

<a name="Route+activate"></a>

### route.activate()
activate this route for the parent router. The activation sequence is;

1. resolve router function which is given from `mce-router[resolve-func]` 
2. resolve route function which is given from `mce-route[resolve-func]` 
3. run route start callback if given from `mce-route[on-route-start]` 
4. determine html contents
  4.1 if html contents is cached, contents is cached one.
  4.2 if not cached, run http start callback if given from `mce-router[on-http-start]` 
  4.3 fetch html contents, then run http end callback if given from `mce-router[on-http-end]` 
5. show slide-in animation and replace contents
6. run route end callback if given from `mce-router[on-route-end]`

