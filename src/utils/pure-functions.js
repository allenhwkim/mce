/** returns camelCased string value */
export function toCamelCase(str) {
  return str.replace(/-([mce-z])/gi, function(g) { return g[1].toUpperCase(); });
}

/**
 * Returns Javascript value from string value
 * '1' -> 1
 * '-0.999' -> -0.999
 * '1,2' -> [1,2]
 * '[[1,2],[3.4]]' -> [[1,2],[3.4]]
 * 'foo.bar' -> 123
 * 'foo["bar"]' -> 123
 */
export function str2Val(str, scope=window) {

  // return JSON-like string value from the given string {a: 1} -> {"a": 1};
  function __jsonize(str) {
    try {
      JSON.parse(expr); // if va json, it will raise an exception
      return str;
    } catch(e) {
      return str.
        replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
          function(_, $1) { return '"' + $1 + '":'; }
        ).replace(/'([^']+)'/g,   // replacing single quote to double quote
          function(_, $1) { return '"' + $1 + '"'; }
        );
    }
  }

  // retruns the revalue from string variable expression
  // e.g.,  getScopeObj('foo.bar["x"].y'); //returns window.foo.bar.x.y value
  function __getScopedObj(str, scope) {
    let obj=scope, arr;
    arr = str.split(/[\[\]\.]/) // split by [,],.
      .filter(el => el)         // filter out empty one
      .map(el => el.replace(/^['"]+|['"]+$/g, '')); // remove string quotation
    if (arr.length > 1 && arr[0] !== str) {
      arr.forEach(el => obj = obj[el])
      return obj;
    } else {
      return str;
    }
  }

  // Normalize string value
  let expr = str;
  if (str.match(/^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/)) {
    expr = '[' + str + ']';
  }
  expr = __jsonize(expr);

  // Return value
  try { // if JSON parsable, return object
    return JSON.parse(expr);
  } catch(e) {
    try { // if variable, return variable value. e.g. 'foo.bar', foo['bar'];
      expr = __getScopedObj(expr, scope);
      return expr;
    } catch(e) {
      return expr; // return as it is e.g. 'hello'
    }
  }
}

/**
 * call obj.setXXX method with the given value
*/
export function callSetMethod(obj, key, val) { // name, val, excludes, applyTo, attrs
  objApplyFunc = objApplyFunc || function() {
    let funcName = toCamelCase('set-' + key);
    let funcParam = str2Val(val);
    obj[funcName] && obj[funcName](funcParam);
  };
}

