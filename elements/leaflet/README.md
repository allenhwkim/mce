# Leaflet Map

Leaflet map implementation in the simplest and the most convenient way.

![gif1](https://j.gifs.com/Xo7NyA.gif)

![gif2](https://j.gifs.com/qYVyG2.gif)

![gif3](https://j.gifs.com/9QpVqZ.gif)

[Documentation](DOC-GENERATED.md)

Examples
* [Leaflet Map Plunker Example](http://plnkr.co/edit/lMCcT6?p=preview)
* [Marker Plunker Example](http://plnkr.co/edit/lMCcT6?p=preview)
* [Popup Plunker Example](http://plnkr.co/edit/mSqlnl?p=preview)

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
```
<script defer src="https://unpkg.com/@custom-element/leaflet"></script>
```
### For npm users
```
$ npm install @custom-element/leaflet

import '@custom-element/leaflet'; // import and use it
```

## Example
```
<a-leaflet center="Brampton, Canada">
  <a-marker latlng="Brampton, Canada" on-click="openPopup"></a-marker>
</a-leaflet>
```