<a name="Menu"></a>

## Menu
Menus display a list of choices on a transient sheet of material. 

[Material Design Spec.](https://material.io/guidelines/components/menus.html#menus-specs)

### example
```
 <a href="javascript:showDemoMenu()">Show/Hide Menu</a>
 <mce-menu id="demo-menu" position="bottom-left">
   <mce-nav-item icon="favorite" shortcut="ctrl-d">nav item text</mce-nav-item>
   <hr>
   <mce-nav-item class="disabled">Disabled</mce-nav-item>
   <mce-nav-item shortcut="ctrl-d">nav-item text</mce-nav-item>
   <mce-nav-item icon="search">nav-item text</mce-nav-item>
 </mce-menu>
```

<p datmce-height="300" datmce-theme-id="32189" datmce-slug-hash="BJmaeb" datmce-default-tab="html,result" datmce-user="allenhwkim" datmce-embed-version="2" datmce-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


### `mce-button` Style Classes
 |name||description|
 |---|---|
 |visible|Indicates menu is visible or not

### `mce-button` Child Element Attributes 
 |name|value|description|
 |---|---|---|
 |position| string| Indicates the position of menu. Value is one of bottom-right, bottom-left, top-left, or top-right
 
### `mce-button` Child Element Style Classes
 |name||description|
 |---|---|
 |divider| An horizontal line that separates group of menus.


* [Menu](#Menu)
    * [.open()](#Menu+open) ⇒
    * [.close()](#Menu+close)

<a name="Menu+open"></a>

### menu.open() ⇒
open the menu by adding `visible` class
when a menu is opening, all other menus are closed

**Returns**: null  
<a name="Menu+close"></a>

### menu.close()
close the menu by removing `visible` class

