# List

Material Design Spec.
Lists present multiple line items vertically as a single continuous element.

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
```
<script defer src="https://unpkg.com/@custom-element/list"></script>
```

### For npm users
```
$ npm install @custom-element/list --save-dev

import '@custom-element/list'; // import and use it
```

## Examples
```
<a-list>
  <ol>
    <li>
      <div class="icon">
        <an-icon class="circle">folder</an-icon>
      </div>
      <span>Directory</span>
      <an-icon>info</an-icon>
    </li>
    <li>
      <div class="icon">
        <an-icon class="circle">hotel</an-icon>
      </div>
      <span>Hotel</span>
      <an-icon>info</an-icon>
    </li>
  </ol>
</a-list>
```