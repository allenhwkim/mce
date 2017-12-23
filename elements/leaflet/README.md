# Leaflet Map

Leaflet map implementation in the simplest and the most convenient way.

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
```
<script defer src="https://unpkg.com/@custom-element/leaflet"></script>
```

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/Zhmm59u81X4/0.jpg)](https://www.youtube.com/watch?v=Zhmm59u81X4)

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