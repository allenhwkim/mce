# Button

[Material Design Spec](https://material.io/guidelines/components/buttons.html#buttons-style)

Buttons communicate the action that will occur when the user touches them.

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.

### Browser
```
<script defer src="https://unpkg.com/@custom-element/button"></script>
```

### npm
```
$ npm install @custom-element/button

import '@custom-element/button'; // import and use it
```

Examples
--------
```
<div>
  <a-button>
    <an-icon>search</an-icon> Normal </a-button>
  <a-button class="dark">
    <an-icon>search</an-icon> Normal </a-button>
  <a-button disabled="">
    <an-icon>search</an-icon> disabled </a-button>
  <a-button disabled="" class="dark">
    <an-icon>search</an-icon> disabled </a-button>
</div
```