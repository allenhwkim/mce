# App Bar

[Material Design Spec](https://material.io/guidelines/components/bottom-navigation.html#bottom-navigation-specs)

Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.

## Installation

### Browser
Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.

```
<script defer src="https://unpkg.com/@custom-element/app-bar"></script>
```

### npm
```
$ npm install @custom-element/app-bar

import '@custom-element/app-bar'; // import and use it
```

## Examples

```
<an-app-bar app-title="app-bar">
  <div class="nav-icon">
    <i class="material-icons icon">menu</i>
  </div>
  <h1 class="title">App Bar</h1>
  <div class="icons">
    <i class="material-icons icon">favorite</i>
    <i class="material-icons icon">search</i>
    <i class="material-icons icon">more_vert</i>
  </div>
</an-app-bar>
```
