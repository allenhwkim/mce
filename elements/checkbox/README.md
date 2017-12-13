# Checkbox

[Material Design Spec](https://material.io/guidelines/components/selection-controls.html#)

Checkboxes allow the selection of multiple options from a set.

## Installation
------------

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
```
<script defer src="https://unpkg.com/@custom-element/checkbox"></script>
```

### npm users only
```
$ npm install @custom-element/checkbox

import '@custom-element/checkbox'; // import and use it
```

## Examples
```
<div>
  <a-checkbox id="checkbox1"></a-checkbox>
  <label for="checkbox1">Unchecked</label>
  <a-checkbox id="checkbox2" checked=""></a-checkbox>
  <label for="checkbox2">Checked</label>
  <a-checkbox id="checkbox3" disabled=""></a-checkbox>
  <label for="checkbox3">Disabled</label>
  <a-checkbox id="checkbox4" checked="" disabled=""></a-checkbox>
  <label for="checkbox4">Disabled</label>
</div>
```