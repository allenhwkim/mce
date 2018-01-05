<a name="Chip"></a>

## Chip
Chips represent complex entities in small blocks, such as a contact.

[Material Design Spec](https://material.io/guidelines/components/chips.html#chips-specs)

### Examples
```
<div>
  <a-chip text="AMZ Bank"></a-chip>
  <a-chip avatar="ali.connors.jpg" text="AMZ Bank"></a-chip>
  <a-chip text="AMZ Bank" removable=""></a-chip>
  <a-chip avatar="A" text="AMZ Bank" removable="" on-remove="alert('chip removal')"></a-chip>
</div>
```

<p data-height="300" data-theme-id="32189" data-slug-hash="BJmaeb" data-default-tab="html,result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


### `a-chip` atttibutes
 |name|value|description|
 |---|---|---|
 |avatar| image url| An avatar text or image url for contact information that users have for people may be represented in a compact way using contact chips. The chips
 |text| string | Main text of the chip
 |removable| | if defined, it addes delete icon to the chip.
 |on-remove| Javascrip function| A javascript code to be executed when chip is removed.

