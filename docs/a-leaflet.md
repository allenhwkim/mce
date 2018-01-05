<a name="LeafletMap"></a>

## LeafletMap
<a name="new_LeafletMap_new"></a>

### new LeafletMap()
leaflet map element, `a-leaflet`

### example
```
<a-leaflet center="Brampton, Canada"></a-leaflet>
```

### `a-leaflet` Attributes 
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

