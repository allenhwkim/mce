<a name="LeafletMarker"></a>

## LeafletMarker
<a name="new_LeafletMarker_new"></a>

### new LeafletMarker()
leaflet marker element, `mce-marker`

### example
```
<mce-leaflet center="[50.5, 30.5]">
  <mce-marker lat-lng="[50.5, 30.5]"></marker>
</mce-leaflet>
```

### `mce-marker` Attributes 
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

