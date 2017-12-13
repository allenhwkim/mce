# Expansion Panel
[Material Design Spec.](https://material.io/guidelines/components/expansion-panels.html#expansion-panels-specs)
Expansion panels contain creation flows and allow lightweight editing of an element.

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
<script defer src="https://unpkg.com/@custom-element/expansion-panel"></script>

### For npm users
```
$ npm install @custom-element/app-bar

import '@custom-element/app-bar'; // import and use it
```

## Example
```
  <an-expansion-panel>
    <div class="title">
      <h1>Trip name</h1>
      <div>Carribean Cruise</div>
    </div>
    <div class="text">
      Text: 14sp Left and right padding: 16dp Top padding: 16dp or 24dp (when a primary title is present) Bottom padding: 16dp (if there are additional actions or supporting text) or 24dp (if there are no actions or supporting text)
    </div>
  </an-expansion-panel>
``` 