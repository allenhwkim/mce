# Navigation Drawer

[Material Design Spec.](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs)
The navigation drawer slides in from the left and contains the navigation destinations for your app. The nav drawer spans the height of the screen, with everything behind it visible but darkened by a scrim. When nav drawer opens, the document does not scroll any more. When it's closed, scrolling is enabled again.

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
```
<script defer src="https://unpkg.com/@custom-element/nav-drawer"></script>
```

### For npm users
```
$ npm install @custom-element/nav-drawer --save-dev

import '@custom-element/nav-drawer'; // import and use it
```

## Examples

```
  <a href="javascript:document.getElementById('#drawer').open()">Show Navigation Drawer</a>
  <a-nav-drawer id="drawer">
    <a-nav-item icon="favorite">Favourite</a-nav-item>
    <a-nav-item icon="search" class="disabled">Disabled</a-nav-item>
    <a-nav-item>Alarm</a-nav-item>
    <hr>
    <a-nav-item icon="music_note">Music</a-nav-item>
  </a-nav-drawer>
```
