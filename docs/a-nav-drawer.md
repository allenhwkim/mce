<a name="NavDrawer"></a>

## NavDrawer
The navigation drawer slides in from the left and contains the navigation destinations for your app.
The nav drawer spans the height of the screen, with everything behind it visible but darkened by a scrim. 
When nav drawer opens, the document does not scroll any more. When it's closed, scrolling is enabled again.

[Material Design Spec.](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs)

### example
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

<p data-height="300" data-theme-id="32189" data-slug-hash="BJmaeb" data-default-tab="html,result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


### `a-button` Style Classes
 |name||description|
 |---|---|
 |visible| indicates nav drawer is open state

### `a-button` Child Element Style Classes
 |name||description|
 |---|---|
 |divider| An horizontal line that separates group of navigable items.


* [NavDrawer](#NavDrawer)
    * [.open()](#NavDrawer+open)
    * [.close()](#NavDrawer+close)

<a name="NavDrawer+open"></a>

### navDrawer.open()
open the nav drawer by adding `visible` class

<a name="NavDrawer+close"></a>

### navDrawer.close()
close the nav drawer by removing `visible` class

