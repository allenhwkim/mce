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

<p datmce-height="300" datmce-theme-id="32189" datmce-slug-hash="BJmaeb" datmce-default-tab="html,result" datmce-user="allenhwkim" datmce-embed-version="2" datmce-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

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

