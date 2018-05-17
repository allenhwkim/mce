import {toCamelCase, str2Val} from './index.js';
//
// Collection of attribute related functions
//

/**
 * Observe attribute change and execute the given callback
 * @example
 *   observeAttrChange(el, (attr, val) => {
 *     if (attr === 'foo') {
 *       console.log('attribute', attr, 'is changed to', val);
 *     }
 *   }); 
 */
export function observeAttrChange(el, callback) {
  var observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes') {
        let newVal = mutation.target.getAttribute(mutation.attributeName);
        callback(mutation.attributeName, newVal);
      }
    });
  });
  observer.observe(el, {attributes: true});
  return observer;
}

/**
 * returns options and events from attributes
 */
export function parseAttributes(attributes,  eventsRE = /^on-/) {
  let options = {}, events = {};

  Array.from(attributes).forEach( function(attr) {
    if (attr.name.match(eventsRE)) {
      let eventName = toCamelCase(attr.name.replace(/^on-/,''));
      events[eventName] = function(event) {
        let func = new Function('event', attr.value);
        return func(event);
      };
    } else {
      let optionName = toCamelCase(attr.name);
      options[optionName] = str2Val(attr.value);
    }
  });

  return {options, events};
}

