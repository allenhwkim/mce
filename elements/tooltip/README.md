# Tooltip

[Material Design Spec](https://material.io/guidelines/components/tooltips.html#tooltips-tooltips-mobile)
Tooltips are text labels that appear when the user hovers over, focuses on, or touches an element.

## Installation

Just add the following script(< 2kb gzipped/polyfill in it) to your website. It will add CSS only once if required.
```
<script defer src="https://unpkg.com/@custom-element/tooltip"></script>
```

### For npm users
```
$ npm install @custom-element/tooltip --save-dev

import '@custom-element/tooltip'; // import and use it
```

## Example
```
  <a-button class="raised">
    <a-tooltip>This is a tooltip for a button</a-tooltip>
    Mouse
  </a-button> 
```