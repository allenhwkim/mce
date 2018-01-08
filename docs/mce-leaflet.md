<a name="LeafletMap"></a>

## LeafletMap
<a name="new_LeafletMap_new"></a>

### new LeafletMap()
leaflet map element, `mce-leaflet`

### example
```
<mce-leaflet center="Brampton, Canada"></mce-leaflet>
```

<p data-height="300" data-theme-id="32189" data-slug-hash="OzzMbd" data-default-tab="html,result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


### `mce-leaflet` Attributes 
any options defined in leaflet, http://leafletjs.com/reference-1.2.0.html#map-option
As an example, for center and zoom 

 |name|value|description|
 |---|---|---|
 |center|Array or String| Initial geographic center of the map. [lat, lng], or an address. e.g. [0,0], "Brampton, Canada"
 |zoom|number| initial map zoom level e.g. 13
 |...|...| [more](http://leafletjs.com/reference-1.2.0.html#map-option)

any events defined in leaflet with `on-` prefixed; http://leafletjs.com/reference-1.2.0.html#map-event
As an example, for click event, 

 |name|value|description|
 |---|---|---|
 |on-click|function reference| e.g. on-click="myClickHandler"
 |...|...| [more](http://leafletjs.com/reference-1.2.0.html#map-event)

