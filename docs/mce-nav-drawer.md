<a name="NavDrawer"></a>

## NavDrawer
The navigation drawer slides in from the left and contains the navigation destinations for your app.
The nav drawer spans the height of the screen, with everything behind it visible but darkened by a scrim. 
When nav drawer opens, the document does not scroll any more. When it's closed, scrolling is enabled again.

[Material Design Spec.](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs)

### example
```
  <a href="javascript:document.getElementById('#drawer').open()">Show Navigation Drawer</a>
  <mce-nav-drawer id="drawer">
    <mce-nav-item icon="favorite">Favourite</mce-nav-item>
    <mce-nav-item icon="search" class="mce-disabled">Disabled</mce-nav-item>
    <mce-nav-item>Alarm</mce-nav-item>
    <hr>
    <mce-nav-item icon="music_note">Music</mce-nav-item>
  </mce-nav-drawer>
``` 

<p datmce-height="300" datmce-theme-id="32189" datmce-slug-hash="BJmaeb" datmce-default-tab="html,result" datmce-user="allenhwkim" datmce-embed-version="2" datmce-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


### `mce-nav-drawer` Style Classes
 |name||description|
 |---|---|
 |visible| indicates nav drawer is open state

### `mce-nav-drawer` Child Element Style Classes
 |name||description|
 |---|---|
 |mce-divider| An horizontal line that separates group of navigable items.


* [NavDrawer](#NavDrawer)
    * [.open()](#NavDrawer+open)
    * [.close()](#NavDrawer+close)

<a name="NavDrawer+open"></a>

### navDrawer.open()
open the nav drawer by adding `visible` class

<a name="NavDrawer+close"></a>

### navDrawer.close()
close the nav drawer by removing `visible` class

