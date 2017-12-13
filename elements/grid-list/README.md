# Grid List

[Material Design Spec.](https://material.io/guidelines/components/grid-lists.html#grid-lists-specs)
Grid lists are an alternative to standard list views.

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
```
<script defer src="https://unpkg.com/@custom-element/grid-list"></script>
```

### For npm users
```
$ npm install @custom-element/app-bar

import '@custom-element/app-bar'; // import and use it
```

## Example
```
<a-grid-list>
  <div>
    <img src="nature2.jpg">
    <div class="text-with-icon">
      <h1>Single Line</h1>
    </div>
  </div>
  <div>
    <img src="nature2.jpg">
    <div class="text-with-icon">
      <h1>Single Line</h1>
    </div>
  </div>
</a-grid-list>
```