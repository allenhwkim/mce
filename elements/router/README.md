# `a-router`

`a-router` responds to URL change and change its contents

To reinstante, `a-router` watches the url changes, find a proper route, and allow the route do the proper action.

 . monitors url change
 . find a `a-route`
 . then, ask `a-route` do the action

## Features

  * Nested routing
  * Cacheable pages.
  * Resolvable data before route
  * Loading page
  * Slide-In page transition
  * and, callbacks

    * on-route-start
    * on-http-start
    * on-http-enc
    * on-route-end

A router has div.router-target to show the path-related HTML contents.

## `a-router` attributes

  *  `base-path`
    Optional. default '/', base path of this router. All route path will be prefixed with this base path.
  *  `debug`
    Optional. if true, there will be a debug message. This attribute is monitored.
  *  `resolve-func`
    Optional, router level resolve function. e.g. security check, configuration, etc
  *  `on-http-start`
    Optional, injector function to be executed before all http requests calls. This can change http request.
  *  `on-http-end`
    Optional, injector function to be executed after all http responses. This can change http response.

## `a-route` attributes

  * `path`
    _required_,  path to respond
  * `import`
    url to load, `import` or `redirect` is requird.
  * `redirect`
    path to redirect. `import` or `redirect` is requird.
  * `template-cached`
    Optional, true or false,  default true. Indicates that the route view template is cached or not.
     if true, `<a-route>` will have `<template>` as its child after first remote call.
  * `resolve-func`
   Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<a-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`
  * `on-route-start`
    Optional, injector function to be executed before route starts.
  * `on-route-end`
    Optional, injector function to be executed after route ends.

