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

<p data-height="300" data-theme-id="32189" data-slug-hash="XVVXRp" data-default-tab="html,result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Popup Example

<p data-height="300" data-theme-id="32189" data-slug-hash="mppVmz" data-default-tab="html,result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

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

