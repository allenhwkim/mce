# Search

[Material Design Spec](https://material.io/guidelines/patterns/search.html#search-in-app-search)
Search allows users to locate app content quickly.
## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
```
<script defer src="https://unpkg.com/@custom-element/search"></script>
```

### For npm users
```
$ npm install @custom-element/list --save-dev

import '@custom-element/list'; // import and use it
```
## Example
```
<a-search on-search="alert('You are searching...'+keyword)"></a-search>
```