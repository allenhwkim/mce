## Classes

<dl>
<dt><a href="#LeafletMap">LeafletMap</a></dt>
<dd></dd>
<dt><a href="#LeafletMarker">LeafletMarker</a></dt>
<dd></dd>
</dl>

<a name="LeafletMap"></a>

## LeafletMap
**Kind**: global class  
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

<a name="LeafletMarker"></a>

## LeafletMarker
**Kind**: global class  
<a name="new_LeafletMarker_new"></a>

### new LeafletMarker()
leaflet marker element, `a-marker`

### example
```
<a-leaflet center="[50.5, 30.5]">
  <a-marker lat-lng="[50.5, 30.5]"></marker>
</a-leaflet>
```

### `a-marker` Attributes 
any marker options defined in leaflet, http://leafletjs.com/reference-1.2.0.html#marker-option
As an example, for draggable 

 |name|value|description|
 |---|---|---|
 |draggable|Boolean| Whether the marker is draggable with mouse/touch or not.
 |...|...| [more](http://leafletjs.com/reference-1.2.0.html#marker-option)

any events defined in marker with `on-` prefixed; http://leafletjs.com/reference-1.2.0.html#marker-event
As an example, for move event, 

 |name|value|description|
 |---|---|---|
 |on-move|function reference| e.g. on-move="myMoveHandler"
 |...|...| [more](http://leafletjs.com/reference-1.2.0.html#marker-event)

