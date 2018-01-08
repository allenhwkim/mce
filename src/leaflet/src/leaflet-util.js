import {getScopedObj} from '../../mce-util.js';

export let util = {
  attrs2Options,
  attrs2Events,
  geocode,
  toCamelCase,
  waitUntil,
  resolveLatLng,
  handleAttrChange
}


function isLatLng(latlng) {
  return (Array.isArray(latlng) && latlng.length === 2 && isFinite(latlng[0]) && isFinite(latlng[1]))
    || (latlng.lat && latlng.lng);
}

function attrs2Options(attributes) {
  let options = {}, optionName, optionValue;
  Array.from(attributes).forEach( function(attr) {
    if (!attr.name.match(/^on-/)) {
      optionName = toCamelCase(attr.name);
      optionValue = str2Expr(attr.value);
      options[optionName] = optionValue;
    }
  })
  return options;
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

function geocode(address) {
  let url = 'http://nominatim.openstreetmap.org/?format=json'+
    '&addressdetails=1&q='+address+'&format=json&limit=1'; 
  return fetch(url).then( function(response) {
    return response.json();
  })
}

function toCamelCase(str) {
  return str.replace(/-([mce-z])/gi, function(g) {
    return g[1].toUpperCase();
  });
}

function waitUntil(condition) {
  if (typeof condition !== 'function') {
    console.error('Invalid condition for waitUntil. It must be a function', condition);
    throw "invalid condition";
  }
  return new Promise(function(resolve, reject) {
    (function __wait(timeElapsed=0, timeout=5000) {
      let result = condition();
      if (result) {
        return resolve(result);
      } else if (timeElapsed > timeout)  {
        return reject('timeout');
      }
      setTimeout(function() {
        __wait(timeElapsed+100, timeout);
      }, 100);
    })();
  });
}

function resolveLatLng(latlng) {
  return new Promise( function(resolve, reject) {
    if (typeof latlng === 'string') { // we need to resolve it to lat/lng
      geocode(latlng).then( function(json) {
        if (json[0]) {
          resolve([json[0].lat, json[0].lon]);
        } else {
          reject(`Invalid address, "${latlng}"`);
        }
      })
    } else if (isLatLng(latlng)) {
      resolve(latlng);
    } else {
      console.error('Invalid latlng', latlng);
      throw "Invalid latlng";
    }
  });
}

function handleAttrChange(attrName, attrVal, obj, attrs) { // name, val, excludes, applyTo, attrs
  let excludes = ['class', 'tabindex', 'style'];
  let toProcess = excludes.indexOf(attrName) === -1;

  if (!toProcess) {
    return null;
  }

  let funcName, funcParam;
  funcName = toCamelCase('set-' + attrName);
  funcParam = str2Expr(attrVal);

  if (attrs[attrName]) { // it's custom defined, so run that one.
    attrs[attrName](funcParam);
  } else {
    if (obj[funcName]) { // only if setXXX is defined
      funcParam = str2Expr(attrVal);
      obj[funcName](funcParam);
    }
    else {
      console.error('Detected attribute change', attrName,' but cannot find', funcName, 'on', obj);
    }
  }
}

// '1' -> 1
// '-0.999' -> -0.999
// '1,2' -> [1,2]
// '[[1,2],[3.4]]' -> [[1,2],[3.4]]
function str2Expr(str) {
  let re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; // lat,lng
  let json;

  str = str.match(re) ? `[${str}]` : str;
  try {
    JSON.parse(str); // if invalid json, it will raise an exception
    json = str;
  } catch(e) {
    json = str
      .replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
        function(_, $1) { return '"' + $1 + '":'; }
      )
      .replace(/'([^']+)'/g,   // replacing single quote to double quote
        function(_, $1) { return '"' + $1 + '"'; }
      )
  }

  try {
    return JSON.parse(json);
  } catch(e) {
    return json; // return as it is e.g. 'hello'
  }
}

