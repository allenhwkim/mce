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

<iframe height='265' scrolling='no' title='jYYWPg' src='//codepen.io/allenhwkim/embed/jYYWPg/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/jYYWPg/'>jYYWPg</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### `mce-chip` atttibutes
 |name|value|description|
 |---|---|---|
 |avatar| image url| An avatar text or image url for contact information that users have for people may be represented in a compact way using contact chips. The chips
 |text| string | Main text of the chip
 |removable| | if defined, it addes delete icon to the chip.
 |on-remove| Javascrip function| A javascript code to be executed when chip is removed.

