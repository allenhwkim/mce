<a name="Menu"></a>

## Menu
[Material Design Spec.](https://material.io/guidelines/components/menus.html#menus-specs)
Menus display a list of choices on a transient sheet of material. 

### example
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

### `a-button` Style Classes
 |name||description|
 |---|---|
 |visible|Indicates menu is visible or not

### `a-button` Child Element Attributes 
 |name|value|description|
 |---|---|---|
 |position| string| Indicates the position of menu. Value is one of bottom-right, bottom-left, top-left, or top-right
 
### `a-button` Child Element Style Classes
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

