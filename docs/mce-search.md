<a name="Search"></a>

## Search
Search allows users to locate app content quickly.

[Material Design Spec](https://material.io/guidelines/patterns/search.html#search-in-app-search)

### example
```
<mce-search on-search="alert('You are searching...'+keyword)"></mce-search>
```

<p data-height="300" data-theme-id="32189" data-slug-hash="GyyovP" data-default-tab="html,result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


### `mce-button` Attributes 
 |name|value|description|
 |---|---|---|
 |on-search|function| A Javascript code to execute for search with the keyword. e.g. `alert(keyword)`

