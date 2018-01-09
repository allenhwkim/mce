<a name="Chip"></a>

## Chip
Chips represent complex entities in small blocks, such as a contact.

[Material Design Spec](https://material.io/guidelines/components/chips.html#chips-specs)

### Examples
```
<div>
  <mce-chip text="AMZ Bank"></mce-chip>
  <mce-chip avatar="ali.connors.jpg" text="AMZ Bank"></mce-chip>
  <mce-chip text="AMZ Bank" removable=""></mce-chip>
  <mce-chip avatar="A" text="AMZ Bank" removable="" on-remove="alert('chip removal')"></mce-chip>
</div>
```

<p data-height="300" data-theme-id="32189" data-slug-hash="BJmaeb" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


### `mce-chip` atttibutes
 |name|value|description|
 |---|---|---|
 |avatar| image url| An avatar text or image url for contact information that users have for people may be represented in a compact way using contact chips. The chips
 |text| string | Main text of the chip
 |removable| | if defined, it addes delete icon to the chip.
 |on-remove| Javascrip function| A javascript code to be executed when chip is removed.

