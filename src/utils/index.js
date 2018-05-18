export {
  observeAttrChange,      // (el, callback),  Observe attribute change and execute the given callback 
  parseAttributes         // (attributes), returns options and events from attributes
} from './attribute-related.js';

export {
  setTabbable,            // (el, fn), set element tabbable with tabindex, and run fn when click/ENTER
  setInnerHTML            // (el, html), set innerHTML of the elemen
} from './element-related.js';

export {
  toCamelCase,            // (str) -> camelCased
  str2Val,                // (str) -> value
  callSetMethod,          // (obj, key, value), call obj.setXXX(val)
} from './pure-functions.js';

export {
  waitUntil,              // (condition), return promise when the condition meets
  windowResizeHandler,    // (), set `body` class `mce-desktop' when window is resized
  animate                // ({duration, draw, timing}), call requestAnimationFrame with param
} from './window-related.js';
