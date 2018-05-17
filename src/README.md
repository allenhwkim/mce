## Help for Programming

### How To Fire a Custom Event

```
<div id="foo" on-foo="alert(event)">Div</div>

<script>
  import {parseAttributes} from '../utils/index.js';

  let el = document.querySelector('#foo');
  let parsedAttrs = parseAttributes(el.attributes);
  for(let eventName in parsedAttrs.events) {
    el.addEventListener(eventName, parsedAttrs.events[eventName]);
  }

  let customEvent = new CustomEvent('foo', {});
  el.dispatchEvent(customEvent);
</script>
```