# `a-router`

`a-router` responds to URL change and change its contents

To reinstante, `a-router` watches the url changes, find a proper route, and allow the route do the proper action.

 . monitors url change
 . find a `a-route`
 . then, ask `a-route` do the action
 
 [demo](https://custom-element.github.io/#router)

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

## Example
```
  <a-router>
    <a-route path="page1" import="page1.html" no-cache=""></a-route>
    <a-route path="page2" import="page2.html"></a-route>
    <a-route path="not-found" import="not-found.html"></a-route>
    <a-route path="" redirect="page1"></a-route>
  </a-router>
```
