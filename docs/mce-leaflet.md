<a name="LeafletMap"></a>

## LeafletMap
<a name="new_LeafletMap_new"></a>

### new exports.LeafletMap()
leaflet map element, `mce-leaflet`

### example
```
<mce-leaflet center="Brampton, Canada"></mce-leaflet>
```

<iframe height='265' scrolling='no' title='OzzMbd' src='//codepen.io/allenhwkim/embed/OzzMbd/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/OzzMbd/'>OzzMbd</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


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

