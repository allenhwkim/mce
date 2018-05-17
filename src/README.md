
### How To Fire a Custom Event

```
<div id="foo" on-foo="alert(event)">Div</div>
<button onclick="fireFoo(event)">Fire</div>

<script>
function fireFoo(event) {
  let el = document.querySelector('#foo');
  let customEvent = new CustomEvent('foo', event);
  el.dispatchEvent(customEvent);
  event.preventDefault();
  console.log('xxxxxxxxxxxxxx');
}

function toCamelCase(str) {
  return str.replace(/-([mce-z])/gi, function(g) {
    return g[1].toUpperCase();
  });
}

function attrs2Events(attributes) {
  let events = {}, eventName, eventValue;
  Array.from(attributes).forEach( function(attr) {
    if (attr.name.match(/^on-/)) {
      eventName = toCamelCase(attr.name.replace(/^on-/,''));
      // eventValue = getScopedObj(window, attr.value);
      events[eventName] = function(event) {
        let func = new Function('event', attr.value);
        return func(event);
      };
    }
  })
  return events;
}

let el = document.querySelector('#foo'); 
let events = attrs2Events(el.attributes);

for(let eventName in events) {
  el.addEventListener(eventName, events[eventName]);
}
</script>
```