# Chip

[Material Design Spec](https://material.io/guidelines/components/chips.html#chips-specs)

Chips represent complex entities in small blocks, such as a contact.

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.

```
<script defer src="https://unpkg.com/@custom-element/chip"></script>
```

### For npm users
```
$ npm install @custom-element/chip

import '@custom-element/chip'; // import and use it
```

Examples
--------

```
<div>
  <a-chip text="AMZ Bank"></a-chip>
  <a-chip avatar="ali.connors.jpg" text="AMZ Bank"></a-chip>
  <a-chip text="AMZ Bank" removable=""></a-chip>
  <a-chip avatar="A" text="AMZ Bank" removable="" on-remove="alert('chip removal')"></a-chip>
</div>
```