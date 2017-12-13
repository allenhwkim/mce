# Icon

[Material Design Spec.](https://material.io/guidelines/style/icons.html#)
Material icons use geometric shapes to visually represent core ideas, capabilities, or topics. System icons represent a command, file, device, directory, or common actions.

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
```
<script defer src="https://unpkg.com/@custom-element/icon"></script>
```

### For npm users
```
$ npm install @custom-element/icon

import '@custom-element/icon'; // import and use it
```

## Example
```
  <an-icon class="small">face</an-icon>
  <an-icon>face</an-icon>
  <an-icon class="big">face</an-icon>
  <an-icon class="double">face</an-icon>
  <an-icon class="double" img="ali.connors.jpg"></an-icon>
```