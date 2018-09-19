<a name="ExpansionPanel"></a>

## ExpansionPanel
Expansion panels contain creation flows and allow lightweight editing of an element.

[Material Design Spec.](https://material.io/guidelines/components/expansion-panels.html#expansion-panels-specs)

### example
```
 <mce-expansion-panel>
   <div class="mce-title">
     <h1>Trip name</h1>
     <div>Carribean Cruise</div>
   </div>
   <div class="mce-text">
     Text: 14sp Left and right padding: 16dp Top padding: 16dp or 24dp (when a primary title is present) Bottom padding: 16dp (if there are additional actions or supporting text) or 24dp (if there are no actions or supporting text)
   </div>
 </mce-expansion-panel>
```

<iframe height='265' scrolling='no' title='RxxrRJ' src='//codepen.io/allenhwkim/embed/RxxrRJ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/RxxrRJ/'>RxxrRJ</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### `mce-expansion-panel` elememe style classes
 |name|description|
 |---|---|
 |mce-expanded|  Indicates that the expansion-panel is expanded. Without this, it's collapsed.


### Child element of `mce-expansion-panel` style classes
 |name|description|
 |---|---|
 |mce-title|  container class of title section. This is visible when it is collapsed.
 |mce-text|  container class of text section. This is collapsed when not expanded.
 |mce-actions|  container class of actions section. This is collapsed when not expanded.

