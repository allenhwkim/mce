# `mce-router`

`mce-router` responds to URL change and change its contents

To reinstante, `mce-router` watches the url changes, find a proper route, and allow the route do the proper action.

 . monitors url change
 . find a `mce-route`
 . then, ask `mce-route` do the action
 
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
  <mce-router>
    <mce-route path="page1" import="page1.html" no-cache=""></mce-route>
    <mce-route path="page2" import="page2.html"></mce-route>
    <mce-route path="not-found" import="not-found.html"></mce-route>
    <mce-route path="" redirect="page1"></mce-route>
  </mce-router>
```
