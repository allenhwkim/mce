<a name="AppBar"></a>

## AppBar
The app bar is a special kind of toolbar that’s used for branding, navigation, search, and actions.

[Material Design Spec](https://material.io/guidelines/layout/structure.html#structure-app-bar)

### example
```
<mce-app-bar app-title="app-bar" class="light">
  <div class="nav-icon">
    <i class="material-icons icon">menu</i>
  </div>
  <span class="title">App Bar Light</span>
  <div class="icons">
    <i class="material-icons icon">favorite</i>
    <i class="material-icons icon">search</i>
    <i class="material-icons icon">more_vert</i>
  </div>
</mce-app-bar>
```

<p data-height="300" data-theme-id="32189" data-slug-hash="EobYmr" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### `mce-app-bar` style classes
 |name|value|description|
 |---|---|---|
 |light| | if defined, light background with dark icons and text


### Child element of `mce-app-bar` style classes
 |name|value|description|
 |---|---|---|
 |nav-icon| | the container class of left-side navigation icon(s)
 |icons| | the container class of right-side icons
 |title| | the container class of title, which is positioned after navigation icons

<a name="AppBar+setTitle"></a>

### appBar.setTitle(title)
sets the title of app bar


| Param | Type | Description |
| --- | --- | --- |
| title | string | title for the app bar |

