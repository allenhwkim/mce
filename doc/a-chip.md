<a name="Chip"></a>

## Chip
Chip
[Material Design Spec](https://material.io/guidelines/components/chips.html#chips-specs)
Chips represent complex entities in small blocks, such as a contact.
### Examples
```
<div>
  <a-chip text="AMZ Bank"></a-chip>
  <a-chip avatar="ali.connors.jpg" text="AMZ Bank"></a-chip>
  <a-chip text="AMZ Bank" removable=""></a-chip>
  <a-chip avatar="A" text="AMZ Bank" removable="" on-remove="alert('chip removal')"></a-chip>
</div>
```

### `a-chip` atttibutes
 |name|value|description|
 |---|---|---|
 |avatar| image url| An avatar text or image url for contact information that users have for people may be represented in a compact way using contact chips. The chips
 |text| string | Main text of the chip
 |removable| | if defined, it addes delete icon to the chip.
 |on-remove| Javascrip function| A javascript code to be executed when chip is removed.

**Kind**: global class  
