## Menu

[Material Design Spec.](https://material.io/guidelines/components/menus.html#menus-specs)
Menus display a list of choices on a transient sheet of material. 

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
```
<script defer src="https://unpkg.com/@custom-element/menu"></script>
```

### For npm users
```
$ npm install @custom-element/menu --save-dev

import '@custom-element/menu'; // import and use it
```

## Examples
```
  <a href="javascript:showDemoMenu()">Show/Hide Menu</a>
  <a-menu id="demo-menu" position="bottom-left">
    <a-nav-item icon="favorite" shortcut="ctrl-d">nav item text</a-nav-item>
    <hr>
    <a-nav-item class="disabled">Disabled</a-nav-item>
    <a-nav-item shortcut="ctrl-d">nav-item text</a-nav-item>
    <a-nav-item icon="search">nav-item text</a-nav-item>
  </a-menu>
```
