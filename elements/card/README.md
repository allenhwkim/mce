Card
====

[Material Design Spec](https://material.io/guidelines/components/cards.html#cards-content-blocks)

A card is a sheet of material that serves as an entry point to more detailed information.

Installation
------------

### Browser
Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
```
<script defer src="https://unpkg.com/@custom-element/card"></script>
```

### npm
```
$ npm install @custom-element/card

import '@custom-element/card'; // import and use it
```

Examples
--------
```
<a-card>
  <div class="title">
    <h1>Title Goes Here</h1>
    <div class="subtitle">Subtitle here</div>
  </div>
  <div class="text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
  <div class="actions">
    <a href="javascript:void(0)">ACTION 1</a>
    <a href="javascript:void(0)">ACTION 2</a>
  </div>
</a-card>
```

