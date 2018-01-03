<a name="AppBar"></a>

## AppBar
App Bar
https://material.io/guidelines/layout/structure.html#structure-app-bar

<iframe src="https://embed.plnkr.co/DiFMep?show=preview"></iframe>

### example
```
<an-app-bar app-title="app-bar" class="light">
  <div class="nav-icon">
    <i class="material-icons icon">menu</i>
  </div>
  <span class="title">App Bar Light</span>
  <div class="icons">
    <i class="material-icons icon">favorite</i>
    <i class="material-icons icon">search</i>
    <i class="material-icons icon">more_vert</i>
  </div>
</an-app-bar>
```

### `an-app-bar` style classes
 |name|value|description|
 |---|---|---|
 |fixed| | if defined, the app-bar is fixed positioned on the top of the viewport
 |light| | if defined, light background with dark icons and text


### Child element of `an-app-bar` style classes
 |name|value|description|
 |---|---|---|
 |nav-icon| | the container class of left-side navigation icon(s)
 |icons| | the container class of right-side icons
 |title| | the container class of title, which is positioned after navigation icons

**Kind**: global class  
