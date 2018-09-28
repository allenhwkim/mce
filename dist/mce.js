(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/es6/array.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/array.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Array;


/***/ }),

/***/ "./node_modules/core-js/fn/reflect/construct.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/reflect/construct.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect.construct;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./src/app-bar/app-bar.js":
/*!********************************!*\
  !*** ./src/app-bar/app-bar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * The app bar is a special kind of toolbar that’s used for branding, navigation, search, and actions.
 *
 * [Material Design Spec](https://material-components.github.io/material-components-web-catalog/#/component/top-app-bar)
 * 
 * ### example
 * ```
 * <mce-app-bar app-title="app-bar" class="mce-light">
 *   <div class="mce-nav-icon">
 *     <mce-icon>menu</mce-icon>
 *   </div>
 *   <span class="mce-title">App Bar Light</span>
 *   <div class="mce-icons">
 *     <mce-icon>favorite</mce-icon>
 *     <mce-icon>search</mce-icon>
 *     <mce-icon>more_vert</mce-icon>
 *   </div>
 * </mce-app-bar>
 * ```
 *
 * <iframe height='265' scrolling='no' title='mce an-app-bar' src='//codepen.io/allenhwkim/embed/EobYmr/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/EobYmr/'>mce an-app-bar</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-app-bar` style classes
 *  |name|value|description|
 *  |---|---|---|
 *  |mce-light| | if defined, light background with dark icons and text
 * 
 * 
 * ### Child element of `mce-app-bar` style classes
 *  |name|value|description|
 *  |---|---|---|
 *  |mce-nav-icon| | the container class of left-side navigation icon(s)
 *  |mce-icons| | the container class of right-side icons
 *  |mce-title| | the container class of title, which is positioned after navigation icons
 *
 */
var AppBar = exports.AppBar = function (_CustomElement2) {
  _inherits(AppBar, _CustomElement2);

  function AppBar() {
    _classCallCheck(this, AppBar);

    return _possibleConstructorReturn(this, (AppBar.__proto__ || Object.getPrototypeOf(AppBar)).apply(this, arguments));
  }

  _createClass(AppBar, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (window.ce && window.ce.resizeHandler) {} else {
        window.ce = { resizeHandler: _index.windowResizeHandler };
        window.addEventListener('resize', window.ce.resizeHandler);
        window.addEventListener('load', window.ce.resizeHandler);
      }
      this._addFiller();
    }

    /**
     * sets the title of app bar
     * @param {string} title title for the app bar
     */

  }, {
    key: 'setTitle',
    value: function setTitle(title) {
      this.querySelector('.mce-title').innerHTML = title;
    }
  }, {
    key: '_addFiller',
    value: function _addFiller() {
      var el = document.createElement('div');
      el.classList.add('mce-app-bar-filler');
      this.parentElement.insertBefore(el, this.nextSibling);
    }
  }]);

  return AppBar;
}(_CustomElement);

customElements.define('mce-app-bar', AppBar);

/***/ }),

/***/ "./src/blocker/blocker.js":
/*!********************************!*\
  !*** ./src/blocker/blocker.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * An element that covers the another element.
 * Useful to show that the block is loading
 *
 * ### example
 * ```
 * <div>
 *   <mce-blocker>
 *     <mce-refresh-indicator mce-no-border mce-loading></mce-refresh-indicator>
 *   </mce-blocker>
 * </div>
 * ```
 *
 * <iframe height='265' scrolling='no' title='GyBeMz' src='//codepen.io/allenhwkim/embed/GyBeMz/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/GyBeMz/'>GyBeMz</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-blocker` classes
 *  |name|description|
 *  |---|---|
 *  |mce-visible| if given, the blocker is displayed
 *
 */
var Blocker = exports.Blocker = function (_CustomElement2) {
  _inherits(Blocker, _CustomElement2);

  function Blocker() {
    _classCallCheck(this, Blocker);

    return _possibleConstructorReturn(this, (Blocker.__proto__ || Object.getPrototypeOf(Blocker)).apply(this, arguments));
  }

  _createClass(Blocker, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.classList.contains('mce-visible') && this.open();
    }
  }, {
    key: 'open',
    value: function open() {
      //works as a blocker
      var elStyle = window.getComputedStyle(this.parentElement);
      var position = elStyle.getPropertyValue("position");
      var notPositioned = ['static'].includes(position); // static, relative, fixed, absolute, sticky
      var css = {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.2)',
        top: notPositioned ? this.parentElement.offsetTop + 'px' : '0px',
        left: notPositioned ? this.parentElement.offsetLeft + 'px' : '0px',
        width: this.parentElement.offsetWidth + 'px',
        height: this.parentElement.offsetHeight + 'px',
        borderRadius: elStyle.borderRadius
      };

      Object.assign(this.style, css);
      this.classList.add('mce-visible');
    }
  }, {
    key: 'close',
    value: function close() {
      this.classList.remove('mce-visible');
    }
  }]);

  return Blocker;
}(_CustomElement);

customElements.define('mce-blocker', Blocker);

/***/ }),

/***/ "./src/bottom-nav-bar/bottom-nav-bar.js":
/*!**********************************************!*\
  !*** ./src/bottom-nav-bar/bottom-nav-bar.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomNavBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.
 *
 * [Material Design Spec.](https://material.io/guidelines/components/bottom-navigation.html#bottom-navigation-specs)
 * 
 * ## Example
 * ```
 * <mce-bottom-nav-bar>
 *   <mce-nav-item icon="favorite">Favourite</mce-nav-item>
 *   <mce-nav-item icon="search" class="mce-disabled">Disabled</mce-nav-item>
 *   <mce-nav-item icon="alarm">Alarm</mce-nav-item>
 *   <mce-nav-item icon="music_note">Music</mce-nav-item>
 * </mce-bottom-nav-bar>
 * ```   
 * 
 * <iframe height='265' scrolling='no' title='mce a-bottom-bar' src='//codepen.io/allenhwkim/embed/aEVowx/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/aEVowx/'>mce a-bottom-bar</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-bottom-nav-bar` style classes
 *  |name|description|
 *  |---|---|
 *  |mce-dark-bg| dark background bottom bar
 */
var BottomNavBar = exports.BottomNavBar = function (_CustomElement2) {
  _inherits(BottomNavBar, _CustomElement2);

  function BottomNavBar() {
    _classCallCheck(this, BottomNavBar);

    return _possibleConstructorReturn(this, (BottomNavBar.__proto__ || Object.getPrototypeOf(BottomNavBar)).apply(this, arguments));
  }

  _createClass(BottomNavBar, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (window.ce && window.ce.resizeHandler) {} else {
        window.ce = { resizeHandler: _index.windowResizeHandler };
        window.addEventListener('resize', window.ce.resizeHandler);
        window.addEventListener('load', window.ce.resizeHandler);
      }
    }
  }]);

  return BottomNavBar;
}(_CustomElement);

customElements.define('mce-bottom-nav-bar', BottomNavBar);

/***/ }),

/***/ "./src/button/button.js":
/*!******************************!*\
  !*** ./src/button/button.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Buttons communicate the action that will occur when the user touches them.
 * 
 * [Material Design Spec](https://material.io/guidelines/components/buttons.html#buttons-style)
 * 
 * ### example
 * ```
 * <div>
 *   <mce-button>
 *     <mce-icon>search</mce-icon> Normal </mce-button>
 *   <mce-button class="mce-dark">
 *     <mce-icon>search</mce-icon> Normal </mce-button>
 *   <mce-button disabled="">
 *     <mce-icon>search</mce-icon> disabled </mce-button>
 *   <mce-button disabled="" class="mce-dark">
 *     <mce-icon>search</mce-icon> disabled </mce-button>
 * </div>
 * ```
 *
 * <iframe height='265' scrolling='no' title='mce button' src='//codepen.io/allenhwkim/embed/aEVoYg/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/aEVoYg/'>mce button</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 * 
 * ### `mce-button` attributes 
 *  |name|value|description|
 *  |---|---|---|
 *  |nam| | name of button
 *  |value| | button value
 *  |disabled| | if defined, a button is disabled
 * 
 * ### `mce-button` style classes
 *  |name|value|description|
 *  |---|---|---|
 *  |mce-dark| | A button with dark background color and light text
 *  |mce-raised| | if defined, light background with dark icons and text 
 *  |mce-fab| | if defined, A floating action buttoin; a circular button with shadow effect
 *  |mce-mini| | if defined, A 40 pixel x 40 pixel
 */
var Button = exports.Button = function (_CustomElement2) {
  _inherits(Button, _CustomElement2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.buttonAttrs = ['name', 'value', 'disabled'];
      setTimeout(this._addRealButton.bind(this));
    }
  }, {
    key: '_addRealButton',
    value: function _addRealButton() {
      var _this2 = this;

      var buttonEl = document.createElement('button');
      buttonEl.setAttribute('tabindex', '-1');
      Array.from(this.attributes).forEach(function (attr) {
        _this2.buttonAttrs.includes(attr.name) && buttonEl.setAttribute(attr.name, attr.value);
      });

      (0, _index.observeAttrChange)(this, function (attr, val) {
        _this2.buttonAttrs.includes(attr) && buttonEl.setAttribute(attr, val);
      });

      if (!this.classList.contains('mce-disabled')) {
        (0, _index.setTabbable)(this, function (_) {
          return buttonEl.click();
        }); // set tabindex and click/ENTER function
      }
      this.appendChild(buttonEl);
    }
  }, {
    key: 'disabled',
    set: function set(bool) {
      bool ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
    }
  }]);

  return Button;
}(_CustomElement);

customElements.define('mce-button', Button);

/***/ }),

/***/ "./src/card/card.js":
/*!**************************!*\
  !*** ./src/card/card.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * A card is a sheet of material that serves as an entry point to more detailed information. 
 *
 * [Material Design Spec](https://material.io/guidelines/components/cards.html#cards-content-blocks)
 * 
 * ### example
 * ```
 * <mce-card>
 *   <div class="mce-title">
 *     <h1>Title Goes Here</h1>
 *     <div class="mce-subtitle">Subtitle here</div>
 *   </div>
 *   <div class="mce-text">
 *     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
 *     in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 *   </div>
 *   <div class="mce-actions">
 *     <a href="javascript:void(0)">ACTION 1</a>
 *     <a href="javascript:void(0)">ACTION 2</a>
 *   </div>
 * </mce-card>
 * ```
 * 
 * <iframe height='265' scrolling='no' title='mce card' src='//codepen.io/allenhwkim/embed/ZvaEez/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/ZvaEez/'>mce card</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 *
 * ### `mce-card` elememe style classes
 *  |name|description|
 *  |---|---|
 *  |mce-picked-up| A raised card. Click a card on this document to see the effect. 
 * 
 * 
 * ### Child element of `mce-card` style classes
 *  |name|description|
 *  |---|---|
 *  |mce-title| Showing a raised card. click a card on this document to see the effect.
 *  |mce-subtitle| Card subtitle with the font size of 14px
 *  |mce-subtitle| Card subtitle with the font size of 14px
 *  |mce-media| An image or video with 16x9 aspect ratio
 *  |mce-actions| Action buttons section with icon, button or a link 
 *  |mce-text| Action buttons section with icon, button or a link
 */
var Card = exports.Card = function (_CustomElement2) {
  _inherits(Card, _CustomElement2);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'connectedCallback',
    value: function connectedCallback() {}
  }]);

  return Card;
}(_CustomElement);

customElements.define('mce-card', Card);

/***/ }),

/***/ "./src/checkbox/checkbox.js":
/*!**********************************!*\
  !*** ./src/checkbox/checkbox.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);


var iconSVG = '\n  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path class="checked"   d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>\n    <path class="unchecked" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n  </svg>';

/**
 * Checkboxes allow the selection of multiple options from a set.
 *
 * [Material Design Spec](https://material.io/guidelines/components/selection-controls.html#)
 * 
 * ### example
 * ```
 * <div>
 *   <mce-checkbox id="checkbox1"></mce-checkbox>
 *   <label for="checkbox1">Unchecked</label>
 *   <mce-checkbox id="checkbox2" checked=""></mce-checkbox>
 *   <label for="checkbox2">Checked</label>
 *   <mce-checkbox id="checkbox3" disabled=""></mce-checkbox>
 *   <label for="checkbox3">Disabled</label>
 *   <mce-checkbox id="checkbox4" checked="" disabled=""></mce-checkbox>
 *   <label for="checkbox4">Disabled</label>
 * </div> 
 * ```
 *
 * <iframe height='265' scrolling='no' title='mce a-checkbox' src='//codepen.io/allenhwkim/embed/BJmaeb/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/BJmaeb/'>mce a-checkbox</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-checkbox` atttibutes
 *  It accepts all `input` checkbox attributes. E.g., id, name, value, disaled, or checked
 * 
 */

var Checkbox = exports.Checkbox = function (_CustomElement2) {
  _inherits(Checkbox, _CustomElement2);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      this.inputAttrs = ['id', 'name', 'value', 'disabled', 'checked'];
      this.inputEl = this._addRealInput();
      (0, _index.observeAttrChange)(this, function (attr, val) {
        val === null ? _this2.inputEl.removeAttribute(attr) : _this2.inputEl.setAttribute(attr, val);
      });
      if (this.getAttribute('disabled') !== null) {
        (0, _index.setTabbable)(this, function (_) {
          return _this2.inputEl.click();
        });
      }
    }
  }, {
    key: '_addRealInput',
    value: function _addRealInput() {
      var _this3 = this;

      var inputEl = document.createElement('input');
      inputEl.setAttribute("type", "checkbox");
      inputEl.setAttribute("tabindex", "-1");
      Array.from(this.attributes).forEach(function (attr) {
        if (_this3.inputAttrs.includes(attr.name) && attr.value !== null) {
          inputEl.setAttribute(attr.name, attr.value);
          attr.name === 'id' && _this3.setAttribute('id', 'mce-checkbox-' + attr.value);
        }
      });
      this.appendChild(inputEl);
      this.insertAdjacentHTML('beforeend', iconSVG);
      return inputEl;
    }
  }]);

  return Checkbox;
}(_CustomElement);

customElements.define('mce-checkbox', Checkbox);

/***/ }),

/***/ "./src/chip/chip.js":
/*!**************************!*\
  !*** ./src/chip/chip.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Chips represent complex entities in small blocks, such as a contact.
 *
 * [Material Design Spec](https://material.io/guidelines/components/chips.html#chips-specs)
 *
 * ### Examples
 * ```
 * <div>
 *   <mce-chip text="AMZ Bank"></mce-chip>
 *   <mce-chip avatar="ali.connors.jpg" text="AMZ Bank"></mce-chip>
 *   <mce-chip text="AMZ Bank" removable=""></mce-chip>
 *   <mce-chip avatar="A" text="AMZ Bank" removable="" on-remove="alert('chip removal')"></mce-chip>
 * </div>
 * ```
 *
 * <iframe height='265' scrolling='no' title='jYYWPg' src='//codepen.io/allenhwkim/embed/jYYWPg/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/jYYWPg/'>jYYWPg</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 *
 * ### `mce-chip` atttibutes
 *  |name|value|description|
 *  |---|---|---|
 *  |avatar| image url| An avatar text or image url for contact information that users have for people may be represented in a compact way using contact chips. The chips
 *  |text| string | Main text of the chip
 *  |removable| | if defined, it addes delete icon to the chip.
 *  |on-remove| Javascrip function| A javascript code to be executed when chip is removed.
 */
var Chip = exports.Chip = function (_CustomElement2) {
  _inherits(Chip, _CustomElement2);

  function Chip() {
    _classCallCheck(this, Chip);

    return _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).apply(this, arguments));
  }

  _createClass(Chip, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._buildHTML();
    }
  }, {
    key: '_buildHTML',
    value: function _buildHTML() {
      var _this2 = this;

      var avatar = this.getAttribute('avatar');
      var text = this.getAttribute('text');
      var removable = this.getAttribute('removable');
      var onRemove = this.getAttribute('on-remove');

      if (avatar) {
        if (avatar.match(/\.(png|jpg|gif|svg)$/)) {
          this.insertAdjacentHTML('beforeend', '<div class="mce-avatar" style="background-image:url(' + avatar + ')"></div>');
        } else {
          this.insertAdjacentHTML('beforeend', '<div class="mce-avatar">' + avatar + '</div>');
        }
      }

      if (text) {
        this.insertAdjacentHTML('beforeend', '<div class="mce-text">' + text + '</div>');
      }

      if (removable !== null) {
        var removeEl = document.createElement('mce-icon');
        removeEl.setAttribute('tabindex', '0');
        removeEl.classList.add('mce-delete');
        removeEl.innerHTML = 'clear';

        removeEl.addEventListener('click', function (event) {
          var customEvent = new CustomEvent('remove', event);
          _this2.dispatchEvent(customEvent);
        });

        this.appendChild(removeEl);

        this.addEventListener('remove', function (event) {
          var func = new Function(onRemove);
          func();
          this.remove();
        });
      }
    }
  }]);

  return Chip;
}(_CustomElement);

customElements.define('mce-chip', Chip);

/***/ }),

/***/ "./src/dialog/dialog.js":
/*!******************************!*\
  !*** ./src/dialog/dialog.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Dialogs contain text and UI controls. They retain focus until dismissed or a required action has been taken. Use dialogs sparingly because they are interruptive.
 *
 * [Material Design Spec.](https://material.io/guidelines/components/dialogs.html#dialogs-specs)
 * 
 * ### example
 * ```
 * <div>
 *   <mce-button class="mce-raised" onclick="openDialog('dialog-1')">Open A Dialog</mce-button>
 *   <mce-dialog id="dialog-1">
 *     <h3 class="mce-title">Title</h3>
 *     <div class="mce-content">
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
 *       in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 *     </div>
 *     <hr class="mce-divider">
 *     <div class="mce-actions">
 *       <mce-button onclick="closeDialog('dialog-1')">cancel</mce-button>
 *       <mce-button onclick="closeDialog('dialog-1')">OK</mce-button>
 *     </div>
 *   </mce-dialog>
 * </div>
 * ```
 *
 * <iframe height='265' scrolling='no' title='rppxOe' src='//codepen.io/allenhwkim/embed/rppxOe/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/rppxOe/'>rppxOe</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 *
 * ### `mce-dialog` elememe style classes
 *  |name|description|
 *  |---|---|
 *  |mce-visible|Indicates that the dialog is an open status
 * 
 * 
 * ### Child element of `mce-dialog` style classes
 *  |name|description|
 *  |---|---|
 *  |mce-divider| Draw a line
 *  |mce-title| Title section of the dialog
 *  |mce-content| Content section of the dialog
 *  |mce-actions| The container of action buttons
 * 
 */
var Dialog = exports.Dialog = function (_CustomElement2) {
  _inherits(Dialog, _CustomElement2);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      this.displayLevel = this.getAttribute('display-level') || 'root';
      this._regroupedOnce = this._regroupedOnce || false;
      setTimeout(function (_) {
        !_this2._regroupedOnce && _this2._regroupElements();
        _this2._regroupedOnce = true;
        if (_this2.displayLevel === 'root' && !_this2.parentElement.isSameNode(document.body)) {
          //document-level dialog
          document.body.appendChild(_this2);
          _this2.querySelector('.mce-page-blocker').style.position = 'fixed';
          _this2.querySelector('.mce-container').style.position = 'fixed';
        }
      });
    }

    /**
     * Opens te dialog with the given data
     *
     * @param {Object} data, options for this dialog
     *   title: Title of this dialog  
     *   content:  Contents of this dialog as in string format.  
     *   actions: Buttons for this dialog with callback function
     * @example 
     *   document.getElementById('my-dialog').open({
     *     title: 'Custim Title', 
     *     contents:'This is custom contents',
     *     actions: {'Custom Button': () => alert('My Button is clicked.')}
     *   });
     * @returns void
     */

  }, {
    key: 'open',
    value: function open(data) {
      //replace title, content, actions with data given
      data && this._updateContent(data);
      this.displayLevel === 'root' && (document.body.style.overflow = 'hidden');
      this.classList.add('mce-visible');
    }

    /**
     * Closes the dialog
     */

  }, {
    key: 'close',
    value: function close() {
      this.displayLevel === 'root' && (document.body.style.overflow = '');
      this.classList.remove('mce-visible');
    }
  }, {
    key: '_regroupElements',
    value: function _regroupElements() {
      var _this3 = this;

      var pageBlockerEl = void 0,
          containerEl = void 0;
      pageBlockerEl = document.createElement('div');
      pageBlockerEl.classList.add('mce-page-blocker');
      pageBlockerEl.addEventListener('click', function () {
        _this3.close();
      });
      this.appendChild(pageBlockerEl);

      containerEl = document.createElement('div');
      containerEl.classList.add('mce-container');
      this.appendChild(containerEl);

      Array.from(this.children).forEach(function (el) {
        if (!el.isSameNode(containerEl) && !el.isSameNode(pageBlockerEl)) {
          containerEl.appendChild(el);
        }
      });
    }
  }, {
    key: '_updateContent',
    value: function _updateContent(data) {
      var _this4 = this;

      var titleEl = void 0,
          contentEl = void 0,
          actionsEl = void 0;
      var appendEl = function appendEl(className) {
        var el = document.createElement('div');
        el.classList.add(className);
        _this4.appendChild(el);
        return el;
      };
      if (data.title !== undefined) {
        titleEl = this.querySelector('.mce-title') || appendEl('mce-title');
        titleEl.innerHTML = data.title;
      }
      if (data.contents !== undefined) {
        contentEl = this.querySelector('.mce-content') || appendEl('mce-content');
        contentEl.innerHTML = data.contents;
      }
      if (data.actions !== undefined) {
        actionsEl = this.querySelector('.mce-actions') || appendEl('mce-actions');
        actionsEl.innerHTML = '';
        for (var key in data.actions) {
          var buttonEl = document.createElement('mce-button');
          buttonEl.innerHTML = key;
          buttonEl.addEventListener('click', function (_) {
            data.actions[key]();
            _this4.close();
          });
          actionsEl.appendChild(buttonEl);
        }
      }
    }
  }]);

  return Dialog;
}(_CustomElement);

customElements.define('mce-dialog', Dialog);

/***/ }),

/***/ "./src/expansion-panel/expansion-panel.js":
/*!************************************************!*\
  !*** ./src/expansion-panel/expansion-panel.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Expansion panels contain creation flows and allow lightweight editing of an element.
 *
 * [Material Design Spec.](https://material.io/guidelines/components/expansion-panels.html#expansion-panels-specs)
 *
 * ### example
 * ```
 *  <mce-expansion-panel>
 *    <div class="mce-title">
 *      <h1>Trip name</h1>
 *      <div>Carribean Cruise</div>
 *    </div>
 *    <div class="mce-text">
 *      Text: 14sp Left and right padding: 16dp Top padding: 16dp or 24dp (when a primary title is present) Bottom padding: 16dp (if there are additional actions or supporting text) or 24dp (if there are no actions or supporting text)
 *    </div>
 *  </mce-expansion-panel>
 * ```
 *
 * <iframe height='265' scrolling='no' title='RxxrRJ' src='//codepen.io/allenhwkim/embed/RxxrRJ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/RxxrRJ/'>RxxrRJ</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 *
 * ### `mce-expansion-panel` elememe style classes
 *  |name|description|
 *  |---|---|
 *  |mce-expanded|  Indicates that the expansion-panel is expanded. Without this, it's collapsed.
 * 
 * 
 * ### Child element of `mce-expansion-panel` style classes
 *  |name|description|
 *  |---|---|
 *  |mce-title|  container class of title section. This is visible when it is collapsed.
 *  |mce-text|  container class of text section. This is collapsed when not expanded.
 *  |mce-actions|  container class of actions section. This is collapsed when not expanded.
 * 
 */
var ExpansionPanel = exports.ExpansionPanel = function (_CustomElement2) {
  _inherits(ExpansionPanel, _CustomElement2);

  function ExpansionPanel() {
    _classCallCheck(this, ExpansionPanel);

    return _possibleConstructorReturn(this, (ExpansionPanel.__proto__ || Object.getPrototypeOf(ExpansionPanel)).apply(this, arguments));
  }

  _createClass(ExpansionPanel, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      setTimeout(function (_) {
        //this.querySelector takes time
        var titleEl = _this2.querySelector('.mce-title');
        titleEl && titleEl.addEventListener('click', _this2._showThisPanelOnly.bind(_this2));
      });
    }
  }, {
    key: '_showThisPanelOnly',
    value: function _showThisPanelOnly(event) {
      var _this3 = this;

      Array.from(document.querySelectorAll('mce-expansion-panel')).forEach(function (panelEl) {
        if (panelEl.isSameNode(_this3)) {
          panelEl.classList.toggle('mce-expanded');
        } else {
          panelEl.classList.remove('mce-expanded');
        }
      });
    }
  }]);

  return ExpansionPanel;
}(_CustomElement);

customElements.define('mce-expansion-panel', ExpansionPanel);

/***/ }),

/***/ "./src/grid-list/grid-list.js":
/*!************************************!*\
  !*** ./src/grid-list/grid-list.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Grid lists are an alternative to standard list views.
 *
 * [Material Design Spec.](https://material.io/guidelines/components/grid-lists.html#grid-lists-specs)
 *
 * ### Example
 * ```
 * <mce-grid-list>
 *   <div>
 *     <img src="nature2.jpg">
 *     <div class="mce-text-with-icon">
 *       <h1>Single Line</h1>
 *     </div>
 *   </div>
 *   <div>
 *     <img src="nature2.jpg">
 *     <div class="mce-text-with-icon">
 *       <h1>Single Line</h1>
 *     </div>
 *   </div>
 * </mce-grid-list>
 * ```
 *
 * <iframe height='265' scrolling='no' title='baaEeJ' src='//codepen.io/allenhwkim/embed/baaEeJ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/baaEeJ/'>baaEeJ</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### Child element of `mce-grid-list` style classes
 *  |name|description|
 *  |---|---|
 *  |mce-text-with-icon| A shady bottom section with text and an icon
 *  |mce-text| Text within text-with-icon section 
 * 
 */
var GridList = exports.GridList = function (_CustomElement2) {
  _inherits(GridList, _CustomElement2);

  function GridList() {
    _classCallCheck(this, GridList);

    return _possibleConstructorReturn(this, (GridList.__proto__ || Object.getPrototypeOf(GridList)).apply(this, arguments));
  }

  _createClass(GridList, [{
    key: 'connectedCallback',
    value: function connectedCallback() {}
  }]);

  return GridList;
}(_CustomElement);

customElements.define('mce-grid-list', GridList);

/***/ }),

/***/ "./src/icon/icon.js":
/*!**************************!*\
  !*** ./src/icon/icon.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Material icons use geometric shapes to visually represent core ideas, capabilities, or topics. System icons represent a command, file, device, directory, or common actions.
 *
 * [Material Design Spec.](https://material.io/guidelines/style/icons.html#)
 *
 * ### example
 * ```
 *   <mce-icon class="mce-small">face</mce-icon>
 *   <mce-icon>face</mce-icon>
 *   <mce-icon class="mce-big">face</mce-icon>
 *   <mce-icon class="mce-double">face</mce-icon>
 *   <mce-icon class="mce-double">fmce-envelope</mce-icon> <!-- for Font-Awesome icon -->
 *   <mce-icon class="mce-double" img="ali.connors.jpg"></mce-icon>
 * ```
 *
 * <iframe height='265' scrolling='no' title='MrrKbK' src='//codepen.io/allenhwkim/embed/MrrKbK/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/MrrKbK/'>MrrKbK</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 *
 * ### `mce-icon` element atttibutes
 *  |name|value|description|
 *  |---|---|---|
 *  |img| image url | Show an image instead of font icon. e.g. img="ali.conors.jpg"
 * 
 * ### `mce-icon` element style classes
 *  |name|description|
 *  |---|---|
 *  |mce-small | A smaller icon. 18px
 *  |mce-big | Bigger icon. 36px
 *  |mce-double | Double-sized icon. 48px
 *  |mce-circle | An icon in a circle
 *  |mce-square | An icon in a square
 *  |mce-dark-bg | An icon in dark background
 *  |mce-reactive | An icon respond to click and showing a ripple effect
 *  |mce-disabled | A greyed out without responsiveness
 */
var Icon = exports.Icon = function (_CustomElement2) {
  _inherits(Icon, _CustomElement2);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      setTimeout(function (_) {
        _this2._setImageIcon(); // if img attribute given, set image icon
        _this2.clickListener = _this2._onClick.bind(_this2);
        _this2._addEventListener();
      });
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.removeEventListener('mouseup', this.clickListener);
      this.removeEventListener('touchend', this.clickListener);
    }
  }, {
    key: '_onClick',
    value: function _onClick(event) {
      var href = this.getAttribute('href');
      if (href) {
        window.location.href = href; //with href, go to the given url, 
      }
    }
  }, {
    key: '_addEventListener',
    value: function _addEventListener() {
      this.addEventListener('mouseup', this.clickListener);
      this.addEventListener('touchend', this.clickListener);
    }
  }, {
    key: '_setImageIcon',
    value: function _setImageIcon() {
      var iconText = this.innerHTML;
      var isFAIcon = iconText.match(/^fa-[a-z\-]+$/);
      var isMDIcon = iconText.match(/^[a-z_]+$/);
      var imgSrc = this.getAttribute('img');

      if (isMDIcon) {
        this.innerHTML = '<i class="material-icons">' + iconText + '</i>';
      } else if (isFAIcon) {
        this.innerHTML = '<i class="fa ' + iconText + '"></i>';
      } else if (imgSrc) {
        this.innerHTML = '<i>photo</i>';
        this.style.backgroundImage = 'url(' + imgSrc + ')';
      }
    }
  }]);

  return Icon;
}(_CustomElement);

customElements.define('mce-icon', Icon);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./mce-polyfill.js */ "./src/mce-polyfill.js");

var _appBar = __webpack_require__(/*! ./app-bar/app-bar.js */ "./src/app-bar/app-bar.js");

var _bottomNavBar = __webpack_require__(/*! ./bottom-nav-bar/bottom-nav-bar.js */ "./src/bottom-nav-bar/bottom-nav-bar.js");

var _button = __webpack_require__(/*! ./button/button.js */ "./src/button/button.js");

var _card = __webpack_require__(/*! ./card/card.js */ "./src/card/card.js");

var _checkbox = __webpack_require__(/*! ./checkbox/checkbox.js */ "./src/checkbox/checkbox.js");

var _chip = __webpack_require__(/*! ./chip/chip.js */ "./src/chip/chip.js");

var _dialog = __webpack_require__(/*! ./dialog/dialog.js */ "./src/dialog/dialog.js");

var _expansionPanel = __webpack_require__(/*! ./expansion-panel/expansion-panel.js */ "./src/expansion-panel/expansion-panel.js");

var _gridList = __webpack_require__(/*! ./grid-list/grid-list.js */ "./src/grid-list/grid-list.js");

var _icon = __webpack_require__(/*! ./icon/icon.js */ "./src/icon/icon.js");

var _list = __webpack_require__(/*! ./list/list.js */ "./src/list/list.js");

var _menu = __webpack_require__(/*! ./menu/menu.js */ "./src/menu/menu.js");

var _navDrawer = __webpack_require__(/*! ./nav-drawer/nav-drawer.js */ "./src/nav-drawer/nav-drawer.js");

var _navItem = __webpack_require__(/*! ./nav-item/nav-item.js */ "./src/nav-item/nav-item.js");

var _radioButton = __webpack_require__(/*! ./radio-button/radio-button.js */ "./src/radio-button/radio-button.js");

var _refreshIndicator = __webpack_require__(/*! ./refresh-indicator/refresh-indicator.js */ "./src/refresh-indicator/refresh-indicator.js");

var _search = __webpack_require__(/*! ./search/search.js */ "./src/search/search.js");

var _snackbar = __webpack_require__(/*! ./snackbar/snackbar.js */ "./src/snackbar/snackbar.js");

var _switch = __webpack_require__(/*! ./switch/switch.js */ "./src/switch/switch.js");

var _tabs = __webpack_require__(/*! ./tabs/tabs.js */ "./src/tabs/tabs.js");

var _textField = __webpack_require__(/*! ./text-field/text-field.js */ "./src/text-field/text-field.js");

var _tooltip = __webpack_require__(/*! ./tooltip/tooltip.js */ "./src/tooltip/tooltip.js");

var _leaflet = __webpack_require__(/*! ./leaflet/leaflet.js */ "./src/leaflet/leaflet.js");

var _marker = __webpack_require__(/*! ./leaflet/marker.js */ "./src/leaflet/marker.js");

var _router = __webpack_require__(/*! ./router/router.js */ "./src/router/router.js");

var _route = __webpack_require__(/*! ./router/route.js */ "./src/router/route.js");

var _blocker = __webpack_require__(/*! ./blocker/blocker.js */ "./src/blocker/blocker.js");

var _inview = __webpack_require__(/*! ./inview/inview.js */ "./src/inview/inview.js");

var _listItem = __webpack_require__(/*! ./list-item/list-item.js */ "./src/list-item/list-item.js");

// include css if not already there with "*mce.mincss" or id="mce-css"
(function () {
  var cssIncluded = window.debug || document.querySelector('link[href$="mce.min.css"]') || document.querySelector('link[id="mce-css"]');

  if (!cssIncluded) {
    var mdIconEl = document.createElement('link');
    mdIconEl.setAttribute('rel', 'stylesheet');
    mdIconEl.setAttribute('auto-added-by-mce', '');
    mdIconEl.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    document.head.appendChild(mdIconEl);

    var mceCssEl = document.createElement('link');
    mceCssEl.setAttribute('rel', 'stylesheet');
    mceCssEl.setAttribute('auto-added-by-mce', '');
    mceCssEl.setAttribute('href', 'https://unpkg.com/mce/dist/mce.min.css');
    document.head.appendChild(mceCssEl);

    var mceThemeEl = document.createElement('link');
    mceThemeEl.setAttribute('rel', 'stylesheet');
    mceThemeEl.setAttribute('auto-added-by-mce', '');
    mceThemeEl.setAttribute('href', 'https://unpkg.com/mce/dist/themes/blue.css');
    document.head.appendChild(mceThemeEl);
  }
})();

/***/ }),

/***/ "./src/inview/inview.js":
/*!******************************!*\
  !*** ./src/inview/inview.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Inview = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Render element only if the element comes into the viewport
 * Then, fires `inview` and `outview` events when in/out of viewport
 *
 * ### example
 * ```
 *  <mce-inview on-inview="inview(event)" on-outview="outview(event)" 
     root="body" root-margin="10px 20px 30px 40px" threshold="[.1,.2,.3,.4,.5]">
 *    <template>
 *      <div class="comment">This image is only rendered when this is in viewport.</div>
 *      <img src="https://picsum.photos/200/300/?random" />
 *    </template>
 *  </mce-inview>
 * ```
 *
 * ### Attributes
 *
 *  |name       |value     |description                        |
 *  |-----------|----------|-----------------------------------|
 *  |root       |selector  | The element that is used as the viewport for checking visiblity of the target. 
 *  |margin     |string    | Margin around the root. e.g. 10px 20px 30px 40px
 *  |threshold  |array     | percentage of the target's visibility the observer's callback should be executed. 
 *  |on-inview  |expression| The given expression will be run when this element is in viewport e.g. on-inview="inview(event)"
 *  |on-outview |expression| The given expression will be run when outview event is fired e.g. on-inview="inview(event)"
 *
 * ### `mce-menu` Child Element Attributes 
 *  |name|value|description|
 *  |---|---|---|
 *  |template| HTMLTemplateElement| contains HTML entities when it comes into the viewport
 *  
 */
var Inview = exports.Inview = function (_CustomElement2) {
  _inherits(Inview, _CustomElement2);

  function Inview() {
    _classCallCheck(this, Inview);

    return _possibleConstructorReturn(this, (Inview.__proto__ || Object.getPrototypeOf(Inview)).apply(this, arguments));
  }

  _createClass(Inview, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.options = { threshold: [.1, .2, .3, .4, .5, .6, .7, .8] }; // default IntersetionObserver options
      this.events = {};
      this.once80PctVisible = false;
      this.templateActivated = false;
      this.initialize();
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      var parsedAttrs = (0, _index.parseAttributes)(this.attributes);
      this.options = Object.assign({}, this.options, parsedAttrs.options);
      this.events = parsedAttrs.events;

      //set Intersection Observer
      this.observer = new IntersectionObserver(this.__handleIntersect.bind(this), this.options);
      this.observer.observe(this);

      this.events.inview = this.events.inview || this.__defaultInviewHandler;
      for (var eventName in this.events) {
        this.addEventListener(eventName, this.events[eventName]);
      }
    }

    /** fires (inview) and (notInview) events when this component is visible or not visible  */

  }, {
    key: '__handleIntersect',
    value: function __handleIntersect(entries, observer) {
      var _this2 = this;

      entries.forEach(function (entry) {
        var detail = { entry: entry };
        if (entry.isIntersecting) {
          _this2.__activateTemplate();
          _this2.dispatchEvent(new CustomEvent('inview', { detail: detail }));
        } else {
          _this2.dispatchEvent(new CustomEvent('outview', { detail: detail }));
        }
      });
    }
  }, {
    key: '__activateTemplate',
    value: function __activateTemplate() {
      if (this.templateActivated) return;

      var t = this.querySelector('template');
      var clone = document.importNode(t.content, true);
      this.appendChild(clone);

      this.templateActivated = true;
    }

    /**
     * default intersection handler, which sets blur dependes on intersection ratio
     */

  }, {
    key: '__defaultInviewHandler',
    value: function __defaultInviewHandler(event) {
      if (this.once80PctVisible) return false;
      var entry = event.detail.entry;

      if (entry.intersectionRatio < 0.8) {
        var opacity = entry.intersectionRatio * (1 / 0.8);
        var blur = 20 - Math.floor(entry.intersectionRatio * 10) * 4;
        var filter = 'blur(' + blur + 'px)';
        // Object.assign(entry.target.style, {opacity, filter});
        Object.assign(entry.target.style, { opacity: opacity });
      } else {
        entry.target.style.opacity = 1;
        entry.target.style.filter = 'unset';

        this.once80PctVisible = true;
      }
    }
  }]);

  return Inview;
}(_CustomElement);

customElements.define('mce-inview', Inview);

/***/ }),

/***/ "./src/leaflet/leaflet-util.js":
/*!*************************************!*\
  !*** ./src/leaflet/leaflet-util.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geocode = geocode;
exports.resolveLatLng = resolveLatLng;
function isLatLng(latlng) {
  return Array.isArray(latlng) && latlng.length === 2 && isFinite(latlng[0]) && isFinite(latlng[1]) || latlng.lat && latlng.lng;
}

function geocode(address) {
  var url = 'https://nominatim.openstreetmap.org/?format=json' + '&addressdetails=1&q=' + address + '&format=json&limit=1';
  return fetch(url).then(function (response) {
    return response.json();
  });
}

function resolveLatLng(latlng) {
  return new Promise(function (resolve, reject) {
    if (typeof latlng === 'string') {
      // we need to resolve it to lat/lng
      geocode(latlng).then(function (json) {
        if (json[0]) {
          resolve([json[0].lat, json[0].lon]);
        } else {
          reject('Invalid address, "' + latlng + '"');
        }
      });
    } else if (isLatLng(latlng)) {
      resolve(latlng);
    } else {
      console.error('Invalid latlng', latlng);
      throw "Invalid latlng";
    }
  });
}

/***/ }),

/***/ "./src/leaflet/leaflet.js":
/*!********************************!*\
  !*** ./src/leaflet/leaflet.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeafletMap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

var _leafletUtil = __webpack_require__(/*! ./leaflet-util.js */ "./src/leaflet/leaflet-util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * @description
 * leaflet map element, `mce-leaflet`
 * 
 * ### example
 * ```
 * <mce-leaflet center="Brampton, Canada"></mce-leaflet>
 * ```
 *
 * <iframe height='265' scrolling='no' title='OzzMbd' src='//codepen.io/allenhwkim/embed/OzzMbd/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/OzzMbd/'>OzzMbd</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * 
 * ### `mce-leaflet` Attributes 
 * any options defined in leaflet, http://leafletjs.com/reference-1.2.0.html#map-option
 * As an example, for center and zoom 
 *
 *  |name|value|description|
 *  |---|---|---|
 *  |center|Array or String| Initial geographic center of the map. [lat, lng], or an address. e.g. [0,0], "Brampton, Canada"
 *  |zoom|number| initial map zoom level e.g. 13
 *  |...|...| [more](http://leafletjs.com/reference-1.2.0.html#map-option)
 * 
 * any events defined in leaflet with `on-` prefixed; http://leafletjs.com/reference-1.2.0.html#map-event
 * As an example, for click event, 
 *
 *  |name|value|description|
 *  |---|---|---|
 *  |on-click|function reference| e.g. on-click="myClickHandler"
 *  |...|...| [more](http://leafletjs.com/reference-1.2.0.html#map-event)
 */
var LeafletMap = exports.LeafletMap = function (_CustomElement2) {
  _inherits(LeafletMap, _CustomElement2);

  function LeafletMap() {
    _classCallCheck(this, LeafletMap);

    return _possibleConstructorReturn(this, (LeafletMap.__proto__ || Object.getPrototypeOf(LeafletMap)).apply(this, arguments));
  }

  _createClass(LeafletMap, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.map;
      this.options = { center: [51.505, -0.09], zoom: 13 }; // default options
      this.events = {};

      // initiazlie separately when `lazy-init` is given
      this.getAttribute('lazy-init') === null && this.initialize();
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      var _this2 = this;

      if (this.map) {
        // already initialized
        return false;
      }
      this.loadLibrary().then(function (L) {
        // set options and events
        var parsedAttrs = (0, _index.parseAttributes)(_this2.attributes);
        _this2.options = Object.assign(_this2.options, parsedAttrs.options);
        _this2.events = parsedAttrs.events;
      }).then(function (_) {
        return (0, _leafletUtil.resolveLatLng)(_this2.options.center);
      }).then(function (latlng) {
        _this2.options.center = latlng;

        var mapOptions = Object.assign({}, _this2.options);
        delete mapOptions.zoom;
        delete mapOptions.center;
        _this2.map = new L.map(_this2, mapOptions);
        _this2.setEvents(); // load event must fire when set view
        _this2.map.setView(latlng, _this2.options.zoom);
      }).then(function (_) {
        (0, _index.observeAttrChange)(_this2, _this2.onAttrChange.bind(_this2));
        setTimeout(function (_) {
          // children are not immediatly visible
          var childEls = Array.from(_this2.querySelectorAll('*')).filter(function (el) {
            return el.tagName.match(/-/);
          });
          childEls.forEach(function (child) {
            return child.initialize(_this2.map);
          });
          if (!_this2.querySelector('mce-tile-layer')) {
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(_this2.map);
          }
        });
      });
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      for (var eventName in this.events) {
        window.debug && console.log('this.events[eventName]', eventName, this.events[eventName]);
        this.map.on(eventName, this.events[eventName]);
      }
    }

    // run setXXX if defined when attribute value changes

  }, {
    key: 'onAttrChange',
    value: function onAttrChange(name, val) {
      var _this3 = this;

      if (name === 'center') {
        if (typeof val === 'string') {
          (0, _leafletUtil.resolveLatLng)(val).then(function (latlng) {
            _this3.map.setView(latlng, _this3.map.getZoom());
          });
        } else {
          this.map.setView(val, this.map.getZoom());
        }
      } else if (!['class', 'tabindex', 'style'].includes(name)) {
        (0, _index.callSetMethod)(this.map, name, val);
      };
    }
  }, {
    key: 'loadLibrary',
    value: function loadLibrary() {
      if (!document.querySelector('link.mce-map.leaflet')) {
        var el = document.createElement('link');
        el.setAttribute('class', 'mce-map leaflet');
        el.setAttribute('rel', 'stylesheet');
        el.setAttribute('href', 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.css');
        document.querySelector('head').appendChild(el);
      }

      if (!document.querySelector('script.mce-map.leaflet')) {
        var _el = document.createElement('script');
        _el.setAttribute('class', 'mce-map leaflet');
        _el.setAttribute('src', 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.js');
        document.querySelector('head').appendChild(_el);
      }

      return (0, _index.waitUntil)(function (_) {
        return window.L;
      }); // this returns a promisse
    }
  }]);

  return LeafletMap;
}(_CustomElement);

customElements.define('mce-leaflet', LeafletMap);

/***/ }),

/***/ "./src/leaflet/marker.js":
/*!*******************************!*\
  !*** ./src/leaflet/marker.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeafletMarker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

var _leafletUtil = __webpack_require__(/*! ./leaflet-util.js */ "./src/leaflet/leaflet-util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * @description
 * leaflet marker element, `mce-marker`
 * 
 * ### example
 * ```
 * <mce-leaflet center="[50.5, 30.5]">
 *   <mce-marker lat-lng="[50.5, 30.5]"></marker>
 * </mce-leaflet>
 * ```
 *
 * <iframe height='265' scrolling='no' title='XVVXRp' src='//codepen.io/allenhwkim/embed/XVVXRp/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/XVVXRp/'>XVVXRp</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * Popup Example
 * 
 * <p data-height="600" data-theme-id="32189" data-slug-hash="mppVmz" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
 * 
 * ### `mce-marker` Attributes 
 * any marker options defined in leaflet, http://leafletjs.com/reference-1.2.0.html#marker-option
 * As an example, for draggable 
 *
 *  |name|value|description|
 *  |---|---|---|
 *  |draggable|Boolean| Whether the marker is draggable with mouse/touch or not.
 *  |...|...| [more](http://leafletjs.com/reference-1.2.0.html#marker-option)
 * 
 * any events defined in marker with `on-` prefixed; http://leafletjs.com/reference-1.2.0.html#marker-event
 * As an example, for move event, 
 *
 *  |name|value|description|
 *  |---|---|---|
 *  |on-move|function reference| e.g. on-move="myMoveHandler"
 *  |...|...| [more](http://leafletjs.com/reference-1.2.0.html#marker-event)
 */
var LeafletMarker = exports.LeafletMarker = function (_CustomElement2) {
  _inherits(LeafletMarker, _CustomElement2);

  function LeafletMarker() {
    _classCallCheck(this, LeafletMarker);

    return _possibleConstructorReturn(this, (LeafletMarker.__proto__ || Object.getPrototypeOf(LeafletMarker)).apply(this, arguments));
  }

  _createClass(LeafletMarker, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._map;
      this.mapObj; // marker
      this.options = { latlng: [51.505, -0.09] }; // default options
      this.events = {};
      this.initialize(this.map);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.map.removeLayer(this.mapObj);
    }
  }, {
    key: 'initialize',
    value: function initialize(map) {
      var _this2 = this;

      if (!map) return;
      var attrParsed = (0, _index.parseAttributes)(this.attributes);

      this.options = Object.assign(this.options, attrParsed.options);
      this.events = attrParsed.events;
      (0, _leafletUtil.resolveLatLng)(this.options.latlng).then(function (latlng) {
        _this2.mapObj = new L.marker(latlng, _this2.options); // set options
        _this2.mapObj.customElement = _this2;
        for (var eventName in _this2.events) {
          // set events
          _this2.mapObj.on(eventName, _this2.events[eventName]);
        }

        _this2.mapObj.addTo(map); // add to map
        (0, _index.observeAttrChange)(_this2, _this2.onAttrChange.bind(_this2));
      });
    }

    // run setXXX if defined when attribute value changes

  }, {
    key: 'onAttrChange',
    value: function onAttrChange(name, val) {
      var _this3 = this;

      if (name === 'latlng') {
        (0, _leafletUtil.resolveLatLng)(val).then(function (latlng) {
          return _this3.mapObj.setLatLng(latlng);
        });
      } else if (!['class', 'tabindex', 'style'].includes(name)) {
        (0, _index.callSetMethod)(this.map, name, val);
      }
    }
  }, {
    key: 'map',
    get: function get() {
      this._map = this._map || this.closest('mce-leaflet').map;
      return this._map;
    }
  }]);

  return LeafletMarker;
}(_CustomElement);

customElements.define('mce-marker', LeafletMarker);

/***/ }),

/***/ "./src/list-item/list-item.js":
/*!************************************!*\
  !*** ./src/list-item/list-item.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * List item responds to tab, keydown, keyup(ENTER, ESC), and cick
 *
 * ## Examples
 *
 * ```
 * <mce-list>
 *  <mce-list-item item="my.obj[1]"></mce-list-item>
 * </mce-list>
 * ```
 *
 * <iframe height='265' scrolling='no' title='MrrKoy' src='//codepen.io/allenhwkim/embed/MrrKoy/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/MrrKoy/'>MrrKoy</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-list-item` attributes 
 *  |name|value   |description                             |
 *  |----|--------|----------------------------------------|
 *  |item| object | The object that will be assigned to this list-item, so when it is selected, this item will be fired as an event
 * 
 */
var ListItem = exports.ListItem = function (_CustomElement2) {
  _inherits(ListItem, _CustomElement2);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.item = null;
      this.parentListEl = null;
      this.initialize();
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      var _this2 = this;

      this.setAttribute('tabindex', '0');
      this.item = this.textContent;
      if (this.getAttribute('item')) {
        // we don't know when the value is assigned
        setTimeout(function (_) {
          _this2.item = (0, _index.str2Val)(_this2.getAttribute('item'));
        });
      }
      this.parentListEl = this.closest('mce-list, .mce-list');
      this.addEventListener('keydown', this.__keydownHandler.bind(this));
      this.addEventListener('keyup', this.__keyupHandler.bind(this));
      this.addEventListener('click', this.__clickHandler.bind(this));
      this.addEventListener('focus', this.__focusHandler.bind(this));
      this.addEventListener('blur', this.__blurHandler.bind(this));
    }
  }, {
    key: '__keydownHandler',
    value: function __keydownHandler(event) {
      var keyCode = event.which || event.keyCode;
      var listItems = this.parentListEl.querySelectorAll('mce-list-item');
      var listItemNdx = Array.from(listItems).indexOf(this);
      var nextListItem = listItems[listItemNdx + 1] || listItems[0];
      var prevListItem = listItems[listItemNdx - 1] || listItems[listItems.length - 1];

      switch (keyCode) {
        case 37:case 38:
          // up arrow, left arrow
          prevListItem.focus();
          break;
        case 39:case 40:
          // down arrow, right arrow
          nextListItem.focus();
          break;
        default:
          break;
      }
    }
  }, {
    key: '__keyupHandler',
    value: function __keyupHandler(event) {
      var customEvent = void 0;
      switch (event.key) {
        case 'Enter':
        case 'Escape':
          var eventName = event.key == 'Enter' ? 'selected' : 'escaped';
          customEvent = new CustomEvent(eventName, { detail: this.item });
          this.parentListEl.dispatchEvent(customEvent);
          this.parentListEl.focus();
          break;
        default:
          break;
      }
    }
  }, {
    key: '__clickHandler',
    value: function __clickHandler(event) {
      var customEvent = new CustomEvent('selected', { detail: this.item });
      this.parentListEl.dispatchEvent(customEvent);
    }
  }, {
    key: '__focusHandler',
    value: function __focusHandler(event) {
      this.parentListEl.setFocused && this.parentListEl.setFocused('listItem', true);
    }
  }, {
    key: '__blurHandler',
    value: function __blurHandler(event) {
      this.parentListEl.setFocused && this.parentListEl.setFocused('listItem', false);
    }
  }]);

  return ListItem;
}(_CustomElement);

customElements.define('mce-list-item', ListItem);

/***/ }),

/***/ "./src/list/list.js":
/*!**************************!*\
  !*** ./src/list/list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Lists present multiple line items vertically as a single continuous element.
 *
 * [Material Design Spec.](https://material.io/guidelines/components/lists.html#lists-actions)
 * 
 * ## Examples
 *
 * ```
 * <mce-list>
 *   <ol>
 *     <li>
 *       <div class="mce-icon">
 *         <mce-icon class="mce-circle">folder</mce-icon>
 *       </div>
 *       <span>Directory</span>
 *       <mce-icon>info</mce-icon>
 *     </li>
 *     <li>
 *       <div class="mce-icon">
 *         <mce-icon class="mce-circle">hotel</mce-icon>
 *       </div>
 *       <span>Hotel</span>
 *       <mce-icon>info</mce-icon>
 *     </li>
 *   </ol>
 * </mce-list>
 * ```
 *
 * <iframe height='265' scrolling='no' title='MrrKoy' src='//codepen.io/allenhwkim/embed/MrrKoy/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/MrrKoy/'>MrrKoy</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * 
`
 */
var List = exports.List = function (_CustomElement2) {
  _inherits(List, _CustomElement2);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._focused = {};
      this._focusTimer;
      this.events = {};
      this.initialize();
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      var parsedAttrs = (0, _index.parseAttributes)(this.attributes);
      this.events = parsedAttrs.events;

      for (var eventName in this.events) {
        this.addEventListener(eventName, this.events[eventName]);
      }
    }
  }, {
    key: 'setFocused',
    value: function setFocused(elType, focused) {
      var _this2 = this;

      if (focused) {
        clearTimeout(this._focusTimer);
        this._focused = { input: false, listItem: false };
        this._focused[elType] = true;
      } else {
        // set blur in a delayed manner;3
        this._focusTimer = setTimeout(function (_) {
          _this2._focused[elType] = false;
        }, 100);
      }
    }
  }]);

  return List;
}(_CustomElement);

customElements.define('mce-list', List);

/***/ }),

/***/ "./src/mce-polyfill.js":
/*!*****************************!*\
  !*** ./src/mce-polyfill.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Allen's Custom Element Polyfill for better performance
 */

/**
 * Hack in support for Function.name for browsers that don't support it.
 * IE, I'm looking at you.
**/
if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
  Object.defineProperty(Function.prototype, 'name', {
    get: function get() {
      var funcNameRegex = /function\s([^(]{1,})\(/;
      var results = funcNameRegex.exec(this.toString());
      return results && results.length > 1 ? results[1].trim() : "";
    },
    set: function set(value) {}
  });
}

(function () {
  var __customElements = {};
  var debug = !!window.location.search.match(/\?debug=true/);

  // change a HTMLElement to a custom element by applying its prototype
  var applyCustomElement = function applyCustomElement(el, klass) {
    if (el.tagName.match(/-/)) {
      // el.__proto__ = klass.prototype;
      Object.setPrototypeOf(el, klass.prototype);
      el._init && el._init();
      setTimeout(function () {
        el.connectedCallback && el.connectedCallback();
      });
    }
  };

  // window.customElement equivalent
  var CustomElements = {
    define: function define(name, klass) {
      __customElements[name] = klass;
      // this is called before or after window.onload. Define any tag found in HTML
      // this also may cause missing elements dynamically loaded before MutationObserver kicks in
      debug && console.log('CustomElements.define.......................');
      Array.from(document.querySelectorAll(name)).forEach(function (el) {
        applyCustomElement(el, __customElements[name]);
      });
    }
  };

  // when document content is loaded, it checks all custom element and initialized it
  var checkAndApplyAllCustomElements = function checkAndApplyAllCustomElements(el) {
    debug && console.log('checkAndApplyAllCustomElements..........', el);

    var _loop = function _loop(name) {
      debug && console.log('checkAndApplyAllCustomElements..........', el.querySelectorAll(name));
      Array.from(el.querySelectorAll(name)).forEach(function (el) {
        if (el.constructor.name.match(/^HTML\w*Element$/)) {
          applyCustomElement(el, __customElements[name]);
        }
      });
    };

    for (var name in __customElements) {
      _loop(name);
    }
  };

  var checkAndApplyCustomElement = function checkAndApplyCustomElement(node) {
    var nodeName = node.nodeName.toLowerCase();
    if (node.nodeType === Node.ELEMENT_NODE && __customElements[nodeName] && // defined as a custom element
    node.constructor.name.match(/^HTML\w*Element$/)) {
      // and not yet initialized
      debug && console.log('observer....................... 2', node);
      applyCustomElement(node, __customElements[nodeName]);
    }
  };

  var observer = new MutationObserver(function (mutationRecords) {

    mutationRecords.forEach(function (mutationRecord) {
      if (mutationRecord.type == 'childList') {
        // e.g. attribures, characterData
        Array.from(mutationRecord.addedNodes).forEach(function (node) {
          //initialize node itself if a custom element 
          checkAndApplyCustomElement(node);

          //initialize children of the node 
          if (node.nodeType === Node.ELEMENT_NODE) {
            debug && console.log('observer....................... 1', node);
            Array.from(node.querySelectorAll('*')).forEach(function (el) {
              checkAndApplyCustomElement(el);
            });
          }
        });

        Array.from(mutationRecord.removedNodes).forEach(function (node) {
          //process children of the node 
          node.disconnectedCallback && node.disconnectedCallback();

          //process children of the node 
          if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.querySelectorAll('*')).forEach(function (el) {
              el.disconnectedCallback && el.disconnectedCallback();
            });
          }
        });
      }
    });
  });

  // polyfill window.customElements(obj)
  if (!window.customElements) {
    window.customElements = CustomElements;
    window.addEventListener('load', function () {
      var options = { childList: true, subtree: true };
      observer.observe(document.body, options);
      checkAndApplyAllCustomElements(document.body);
    });
  }

  // polyfill Object.values(obj)
  if (!Object.values) {
    // Safari does not have this. hmm
    Object.values = function (obj) {
      return Object.keys(obj).map(function (key) {
        return obj[key];
      });
    };
  };

  // polyfill el.matches(selector)
  if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

  // polyfill el.closest(selector)
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement;
      } while (el !== null);
      return null;
    };
  }
})();

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Menus display a list of choices on a transient sheet of material. 
 *
 * [Material Design Spec.](https://material.io/guidelines/components/menus.html#menus-specs)
 * 
 * ### example
 * ```
 *  <a href="javascript:showDemoMenu()">Show/Hide Menu</a>
 *  <mce-menu id="demo-menu" position="bottom-left">
 *    <mce-nav-item icon="favorite" shortcut="ctrl-d">nav item text</mce-nav-item>
 *    <hr>
 *    <mce-nav-item class="mce-disabled">Disabled</mce-nav-item>
 *    <mce-nav-item shortcut="ctrl-d">nav-item text</mce-nav-item>
 *    <mce-nav-item icon="search">nav-item text</mce-nav-item>
 *  </mce-menu>
 * ```
 *
 * <iframe height='265' scrolling='no' title='xppZrL' src='//codepen.io/allenhwkim/embed/xppZrL/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/xppZrL/'>xppZrL</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 * 
 * ### `mce-menu` Style Classes
 *  |name||description|
 *  |---|---|
 *  |mce-visible|Indicates menu is visible or not
 * 
 * ### `mce-menu` Child Element Attributes 
 *  |name|value|description|
 *  |---|---|---|
 *  |position| string| Indicates the position of menu. Value is one of bottom-right, bottom-left, top-left, or top-right
 *  
 * ### `mce-menu` Child Element Style Classes
 *  |name||description|
 *  |---|---|
 *  |mce-divider| An horizontal line that separates group of menus.
 *  |mce-shortcut| shortcut text to be right positioned.
 */
var Menu = exports.Menu = function (_CustomElement2) {
  _inherits(Menu, _CustomElement2);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      (0, _index.observeAttrChange)(this, function (attr, val) {
        if (attr == 'class' && _this2.classList.contains('visible')) {
          _this2.open();
        }
      });
      this.hideMenu = this.close.bind(this); // so that hideMenu can be done from outside
      this._addEventListener();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      document.removeEventListener('click', this.hideMenu);
    }

    /**
     * open the menu by adding `visible` class
     * when a menu is opening, all other menus are closed
     * @returns {void}
     */

  }, {
    key: 'open',
    value: function open() {
      var _this3 = this;

      // show only this
      if (!this.classList.contains('mce-visible')) {
        //  without, infinite loop, add <-> observe
        this.classList.add('mce-visible');
      }
      // hide all other menus
      Array.from(document.querySelectorAll('mce-menu')).forEach(function (menu) {
        _this3.isSameNode(menu) === false && menu.classList.remove('mce-visible');
      });
      // When document is clicked, it closes all menus, but this remained to open
      this.justShown = true; // in case when attribute is changed by outside of this
      setTimeout(function (_) {
        return _this3.justShown = false;
      }, 100);
    }

    /**
     * close the menu by removing `visible` class
     * @returns {void}
     */

  }, {
    key: 'close',
    value: function close(event) {
      if (!this.justShown && !this.contains(event.target)) {
        // if not clicked on menu
        this.classList.remove('mce-visible');
      }
    }
  }, {
    key: '_addEventListener',
    value: function _addEventListener() {
      var _this4 = this;

      document.addEventListener('click', this.hideMenu);
      this.addEventListener('close', function (_) {
        _this4.classList.remove('mce-visible');
      }); //child can fire close. then close it
    }
  }]);

  return Menu;
}(_CustomElement);

customElements.define('mce-menu', Menu);

/***/ }),

/***/ "./src/nav-drawer/nav-drawer.js":
/*!**************************************!*\
  !*** ./src/nav-drawer/nav-drawer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavDrawer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * The navigation drawer slides in from the left and contains the navigation destinations for your app.
 * The nav drawer spans the height of the screen, with everything behind it visible but darkened by a scrim. 
 * When nav drawer opens, the document does not scroll any more. When it's closed, scrolling is enabled again.
 * 
 * [Material Design Spec.](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs)
 *
 * ### example
 * ```
 *   <a href="javascript:document.getElementById('#drawer').open()">Show Navigation Drawer</a>
 *   <mce-nav-drawer id="drawer">
 *     <mce-nav-item icon="favorite">Favourite</mce-nav-item>
 *     <mce-nav-item icon="search" class="mce-disabled">Disabled</mce-nav-item>
 *     <mce-nav-item>Alarm</mce-nav-item>
 *     <hr>
 *     <mce-nav-item icon="music_note">Music</mce-nav-item>
 *   </mce-nav-drawer>
 * ``` 
 *
 * <iframe height='265' scrolling='no' title='jYYWLE' src='//codepen.io/allenhwkim/embed/jYYWLE/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/jYYWLE/'>jYYWLE</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * 
 * ### `mce-nav-drawer` Style Classes
 *  |name||description|
 *  |---|---|
 *  |mce-visible| indicates nav drawer is open state
 * 
 * ### `mce-nav-drawer` Child Element Style Classes
 *  |name||description|
 *  |---|---|
 *  |mce-divider| An horizontal line that separates group of navigable items.
 */
var NavDrawer = exports.NavDrawer = function (_CustomElement2) {
  _inherits(NavDrawer, _CustomElement2);

  function NavDrawer() {
    _classCallCheck(this, NavDrawer);

    return _possibleConstructorReturn(this, (NavDrawer.__proto__ || Object.getPrototypeOf(NavDrawer)).apply(this, arguments));
  }

  _createClass(NavDrawer, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      (0, _index.observeAttrChange)(this, function (attr, val) {
        if (attr === 'class') {
          // if drawer shown, disable body scroll
          document.body.style.overflow = _this2.classList.contains('mce-visible') ? 'hidden' : '';
        }
      });
      if (window.ce && window.ce.resizeHandler) {} else {
        window.ce = { resizeHandler: _index.windowResizeHandler };
        window.addEventListener('resize', window.ce.resizeHandler);
        window.addEventListener('load', window.ce.resizeHandler);
      }
      setTimeout(function (_) {
        _this2.regroupedOnce = false;
        _this2._regroupElements();
      });
    }

    /**
     * open the nav drawer by adding `visible` class
     */

  }, {
    key: 'open',
    value: function open() {
      this.classList.add('mce-visible');
    }

    /**
     * close the nav drawer by removing `visible` class
     */

  }, {
    key: 'close',
    value: function close() {
      this.classList.remove('mce-visible');
    }
  }, {
    key: '_regroupElements',
    value: function _regroupElements() {
      var _this3 = this;

      if (!this.regroupedOnce) {
        var pageBlockerEl = void 0,
            contentsEl = void 0;
        pageBlockerEl = document.createElement('div');
        pageBlockerEl.classList.add('mce-page-blocker');
        pageBlockerEl.addEventListener('click', function () {
          return _this3.close();
        });
        this.appendChild(pageBlockerEl);

        contentsEl = document.createElement('div');
        contentsEl.classList.add('mce-contents');
        this.appendChild(contentsEl);

        Array.from(this.children).forEach(function (el) {
          if (!el.isSameNode(contentsEl) && !el.isSameNode(pageBlockerEl)) {
            contentsEl.appendChild(el);
          }
        });
        this.addEventListener('close', function (_) {
          return _this3.close();
        }); //child can fire close. then close it
      }
      this.regroupedOnce = true;
    }
  }]);

  return NavDrawer;
}(_CustomElement);

customElements.define('mce-nav-drawer', NavDrawer);

/***/ }),

/***/ "./src/nav-item/nav-item.js":
/*!**********************************!*\
  !*** ./src/nav-item/nav-item.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var NavItem = exports.NavItem = function (_CustomElement2) {
  _inherits(NavItem, _CustomElement2);

  function NavItem() {
    _classCallCheck(this, NavItem);

    return _possibleConstructorReturn(this, (NavItem.__proto__ || Object.getPrototypeOf(NavItem)).apply(this, arguments));
  }

  _createClass(NavItem, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.regroupedOnce = false;
      setTimeout(this._regroupElements.bind(this));
    }
  }, {
    key: 'setActiveItem',
    value: function setActiveItem(event) {
      Array.from(this.parentElement.querySelectorAll('mce-nav-item')).forEach(function (el) {
        el.classList.remove('mce-active');
      });
      this.classList.add('mce-active');

      var href = this.getAttribute('href');
      if (href) {
        window.location.href = href; //with href, go to the given url, 
        //with href, close it if the container is mce-nav-drawer or mce-menu
        var customEvent = new CustomEvent('close', event);
        this.dispatchEvent(customEvent);
        event.preventDefault();
      }
    }
  }, {
    key: '_regroupElements',
    value: function _regroupElements() {
      if (!this.regroupedOnce) {
        if (!this.querySelector('span.text')) {
          this.innerHTML = '<span class="mce-text">' + this.innerHTML + '</span>';
        }
        this.addEventListener('click', this.setActiveItem.bind(this));
        this.icon = this.getAttribute('icon');
        this.shortcut = this.getAttribute('shortcut');
        if (this.icon && !this.querySelector('mce-icon')) {
          var isFAIcon = this.icon.match(/^fa-[a-z\-]+$/);
          var isMDIcon = this.icon.match(/^[a-z_]+$/);

          this.iconEl = document.createElement('mce-icon');
          if (isMDIcon) {
            this.iconEl.innerHTML = this.icon;
          } else if (isFAIcon) {
            this.iconEl.insertAdjacentHTML('beforeend', '<i class="fa ' + this.icon + '"></i>');
          } else {
            this.iconEl.insertAdjacentHTML('beforeend', '<img src="' + this.icon + '" />');
          }
          this.insertBefore(this.iconEl, this.firstChild);
        }
        if (this.shortcut && !this.querySelector('mce-icon')) {
          this.shortcutEl = document.createElement('div');
          this.shortcutEl.classList.add('mce-shortcut');
          this.shortcutEl.innerHTML = this.shortcut;
          this.appendChild(this.shortcutEl);
        }
      }
      this.regroupedOnce = true;
    }
  }]);

  return NavItem;
}(_CustomElement);

customElements.define('mce-nav-item', NavItem);

/***/ }),

/***/ "./src/radio-button/radio-button.js":
/*!******************************************!*\
  !*** ./src/radio-button/radio-button.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);


//https://material.io/guidelines/layout/structure.html#structure-app-bar

var iconSVG = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path class="mce-checked" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>\n    <path class="mce-unchecked" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n  </svg>';

/**
 * Radio buttons allow the selection of a single option from a set.
 *
 * [Material Design Spec](https://material.io/guidelines/components/selection-controls.html#)
 * 
 * ### example
 * ```
 * <mce-radio-button name="radio1" id="radio1"></mce-radio-button>
 * <label for="radio1">Unchecked</label>
 * ```
 *
 * <iframe height='265' scrolling='no' title='yppeoe' src='//codepen.io/allenhwkim/embed/yppeoe/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/yppeoe/'>yppeoe</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `radio-button` Attributes 
 * It accepts all `input` checkbox attributes. E.g., id, name, value, disaled, or checked
 */

var RadioButton = exports.RadioButton = function (_CustomElement2) {
  _inherits(RadioButton, _CustomElement2);

  function RadioButton() {
    _classCallCheck(this, RadioButton);

    return _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
  }

  _createClass(RadioButton, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      this.inputAttrs = ['id', 'name', 'value', 'disabled', 'checked'];
      this.inputEl = this._addRealInput();
      (0, _index.observeAttrChange)(this, function (attr, val) {
        val === null ? _this2.inputEl.removeAttribute(attr) : _this2.inputEl.setAttribute(attr, val);
      });
      !this.classList.contains('mce-disabled') && (0, _index.setTabbable)(this, function (_) {
        return _this2.inputEl.click();
      });
    }
  }, {
    key: '_addRealInput',
    value: function _addRealInput() {
      var _this3 = this;

      var inputEl = document.createElement('input');
      inputEl.setAttribute("type", "radio");
      Array.from(this.attributes).forEach(function (attr) {
        if (_this3.inputAttrs.includes(attr.name) && attr.value !== null) {
          inputEl.setAttribute(attr.name, attr.value);
          attr.name === 'id' && _this3.setAttribute('id', 'mce-radio-button-' + attr.value);
        }
      });
      this.appendChild(inputEl);
      this.insertAdjacentHTML('beforeend', iconSVG);
      return inputEl;
    }
  }]);

  return RadioButton;
}(_CustomElement);

customElements.define('mce-radio-button', RadioButton);

/***/ }),

/***/ "./src/refresh-indicator/refresh-indicator.js":
/*!****************************************************!*\
  !*** ./src/refresh-indicator/refresh-indicator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);
var SVG = '\n<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 32 32" width="32" height="32">\n  <circle cx="16" cy="16" r="11"></circle>\n  <polygon points="21.75,16 32.25,16 27,21.25"></polygon>\n</svg>';

/**
 * The refresh indicator appears only in conjunction with a refresh gesture or action. 
 * Syncing does not display a refresh indicator.
 * 
 * [Material Design Spec](https://material.io/guidelines/patterns/swipe-to-refresh.html#swipe-to-refresh-usage)
 * ### example
 * ```
 * <mce-refresh-indicator></mce-refresh-indicator>
 * ```
 *
 * <iframe height='265' scrolling='no' title='EooPvX' src='//codepen.io/allenhwkim/embed/EooPvX/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/EooPvX/'>EooPvX</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * 
 * ### `refresh-indicator` Style Classes
 *  |name||description|
 *  |---|---|
 *  |mce-no-border| Without circle
 *  |mce-dark-bg| Dark background circle
 *  |mce-loading| Spining Animated Icon
 *  |mce-mini| Smaller Icon
 * 
 */

var RefreshIndicator = exports.RefreshIndicator = function (_CustomElement2) {
  _inherits(RefreshIndicator, _CustomElement2);

  function RefreshIndicator() {
    _classCallCheck(this, RefreshIndicator);

    return _possibleConstructorReturn(this, (RefreshIndicator.__proto__ || Object.getPrototypeOf(RefreshIndicator)).apply(this, arguments));
  }

  _createClass(RefreshIndicator, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.insertAdjacentHTML('beforeend', SVG);
    }
  }]);

  return RefreshIndicator;
}(_CustomElement);

customElements.define('mce-refresh-indicator', RefreshIndicator);

/***/ }),

/***/ "./src/router/default-loading-html.js":
/*!********************************************!*\
  !*** ./src/router/default-loading-html.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultLoadingCSS = "\n    <style>\n      @keyframes mce-rotate{\n        from{transform:rotate(0)}\n        to{transform:rotate(359deg)}\n      }\n      mce-router {\n        display: block; \n        /*overflow: hidden;*/\n      }\n      mce-router > .mce-loading {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        position:absolute; top: 0; left: 0; \n        width:100%; height: 100%; \n        min-height: 64px;\n        background-color: rgba(255,255,255,0.5); \n      }\n      mce-router > .mce-loading > svg {\n        animation: mce-rotate 1.4s infinite linear;\n        vertical-align: middle;\n      }\n      mce-router > .mce-loading > svg circle {\n        stroke-dasharray: 44.2336, 200;\n        stroke-dashoffset: -15;\n        stroke: var(--theme-color-500, #9e9e9e);\n        stroke-linecap: round;\n        opacity: 1;\n        stroke-width: 3;\n        fill: none;\n      }\n      mce-router > .mce-loading > svg polygon {\n        fill: var(--theme-color-500, #9e9e9e);\n        transform: rotate(314deg);\n        transform-origin: 16px 16px 0px;\n        opacity: 1;\n      }\n      /*\n      mce-router > .mce-router-target {\n        opacity: 0;\n        margin-left: 100%;\n      }\n      mce-router > .mce-router-target.mce-slide-in {\n        opacity: 1;\n        margin-left: 0%;\n        transition: all 0.25s;\n      }\n      */\n    </style>";

var defaultLoadingHTML = defaultLoadingCSS + "\n    <div class=\"mce-loading\">\n      <svg xmlns=\"http://www.w3.org/2000/svg: viewBox=\"0 0 32 32\" width=\"32\" height=\"32\">\n        <circle cx=\"16\" cy=\"16\" r=\"11\"></circle>\n        <polygon points=\"21.75,16 32.25,16 27,21.25\"></polygon>\n      </svg>\n    </div>";

exports.defaultLoadingHTML = defaultLoadingHTML;

/***/ }),

/***/ "./src/router/route.js":
/*!*****************************!*\
  !*** ./src/router/route.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Route = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! ../mce-polyfill.js */ "./src/mce-polyfill.js");

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 *  Child element of a router,`<mce-router>`
 *
 *  
 * ### Example
 *  ```
 *  <mce-router>
 *     <mce-route path="/path1" import="path1.html">
 *       <mce-router>    <!-- knows that parent path is /path1 -->
 *         <mce-route path="/foo" import="foo.html" ></mce-route> <!-- responds to /path1/foo -->
 *         <mce-route path="/bar" import="bar.html"></mce-route> <!-- responds to /path1/bar -->
 *       </mce-router>
 *     </mce-route>
 *  </mce-router>
 *  ```
 *
 *  <iframe frameborder="no" width="100%" height="300" src="https://embed.plnkr.co/FOLOB9?show=preview"></iframe>
 *  <iframe frameborder="no" width="100%" height="300" src="https://embed.plnkr.co/iyCwi9?show=preview"></iframe>
 *
 *  ### Attributes
 *    * `path`
 *      _required_,  path to respond
 *    * `import`
 *      _required_,  url to load
 *    * `name`
 *      Optional, name of this route. Default. the name of path
 *    * `no-cache`
 *      Optional,Indicates that the route view template is not cached.
 *    * `resolve-func`
 *      Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<mce-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`
 */
var Route = exports.Route = function (_CustomElement2) {
  _inherits(Route, _CustomElement2);

  function Route() {
    _classCallCheck(this, Route);

    return _possibleConstructorReturn(this, (Route.__proto__ || Object.getPrototypeOf(Route)).apply(this, arguments));
  }

  _createClass(Route, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      // add this to the parent route
      this.router = this.closest('mce-router');
      this.path = this.getAttribute('path');
      this.name = this.getAttribute('name') || this.path && this.path.replace('/', ' ');
      this.redirect = this.getAttribute('redirect');
      this.noCache = this.getAttribute('no-cache') !== null;
      this.cachedTemplate = null;
      this.resolveFunc = this.getAttribute('resolve-func') && this._getPromiseFunc('route', this.getAttribute('resolve-func'));

      if (!this.path && !(this.import || this.redirect)) {
        throw "Invalid attributes for mce-route, required path and import";
      }
    }
  }, {
    key: 'activate',


    /**
     * activate this route for the parent router. The activation sequence is;
     * 
     * 1. resolve router function which is given from `mce-router[resolve-func]` 
     * 2. resolve route function which is given from `mce-route[resolve-func]` 
     * 3. run route start callback if given from `mce-route[on-route-start]` 
     * 4. determine html contents
     *   4.1 if html contents is cached, contents is cached one.
     *   4.2 if not cached, run http start callback if given from `mce-router[on-http-start]` 
     *   4.3 fetch html contents, then run http end callback if given from `mce-router[on-http-end]` 
     * 5. show slide-in animation and replace contents
     * 6. run route end callback if given from `mce-router[on-route-end]` 
     */
    value: function activate() {
      var _this2 = this;

      var aPromise = function aPromise(_) {
        return Promise.resolve();
      };
      var routerResolveFn = this.router.resolveFunc || aPromise;
      var routeResolveFn = this.resolveFunc || aPromise;
      var onRouteStartFn = this.router.onRouteStart || aPromise;
      var onRouteEndFn = this.router.onRouteEnd || aPromise;

      this.state = window.history.stae;

      this.router.showLoadingEl(true);

      function buildImportUrl(importURL, matches) {
        var url = importURL;
        if (matches.length > 1) {
          for (var i = 1; i < matches.length; i++) {
            url = url.replace(/:[a-zA-Z_]+/, matches[i]);
          }
        }
        return url;
      }

      routerResolveFn(this) // resolve router resolveFunc
      .then(function (routerData) {
        routerData && (_this2.router.data = routerData);
        return routeResolveFn(_this2); // resolve route resolveFunc
      }).then(function (routeData) {
        routeData && (_this2.data = routeData);
        return onRouteStartFn(_this2); // run onRouteStart 
      }).then(function (result) {
        if (_this2.cachedTemplate) {
          return _this2.cachedTemplate;
        } else {
          // fetch if not cached                       
          if (_this2.import) {
            // only run fetch when import Url is given
            var url = buildImportUrl(_this2.import, _this2.matches),
                options = void 0;
            if (_this2.router.onHttpStart) {
              var cbResp = _this2.router.onHttpStart(_this2); //callback response
              url = cbResp.url || url;
              options = cbResp.options || {};
            }
            return fetch(url, options).then(function (response) {
              if (!response.ok) {
                throw Error('url: ' + url + ', status: ' + response.statusText);
              }
              if (_this2.router.onHttpEnd) {
                return _this2.router.onHttpEnd(response);
              } else {
                return response.text();
              }
            });
          } else {
            return null;
          }
        }
      }).then(function (html) {
        if (html) {
          // only replace HTML when it is fetched or cached properly
          !_this2.noCache && (_this2.cachedTemplate = html);
          // Transtion effect. slide in from left
          // this.router.targetEl.classList.remove('mce-slide-in');
          setTimeout(function (_) {
            // this.router.targetEl.innerHTML = html; 
            (0, _index.setInnerHTML)(_this2.router.targetEl, html); // replace html and run <script> in html
            // this.router.targetEl.classList.add('mce-slide-in');
          }, 50);
        }
        _this2.router.showLoadingEl(false);
        _this2.router.currentRoute = _this2;
        return onRouteEndFn(_this2);
      }).catch(function (error) {
        _this2.router.debug && console.error('routing-error', error);
        _this2.router.showLoadingEl(false);
        throw error;
      });
    }

    /* returns a function which accepts paramName and returns a promise */

  }, {
    key: '_getPromiseFunc',
    value: function _getPromiseFunc(paramName, funcStr) {
      return function (param) {
        var func = new Function(paramName, 'return ' + funcStr);
        return Promise.resolve(func(param));
      };
    }
  }, {
    key: 'import',
    get: function get() {
      var url = void 0,
          attrFn = void 0,
          attr = this.getAttribute('import');
      if (attr && attr.match(/\(.*\)/)) {
        attrFn = new Function('return ' + attr);
        url = attrFn();
      } else {
        url = attr;
      }
      return url;
    }
  }]);

  return Route;
}(_CustomElement);

customElements.define('mce-route', Route);

/***/ }),

/***/ "./src/router/router.js":
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! ../mce-polyfill.js */ "./src/mce-polyfill.js");

__webpack_require__(/*! ./route.js */ "./src/router/route.js");

var _defaultLoadingHtml = __webpack_require__(/*! ./default-loading-html.js */ "./src/router/default-loading-html.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * `mce-router` is an element that responds to url hash change.
 * mce-router watches the url hash changes, find a proper route, and load html.
 * On the other hand, mce-route(without r) does fetch, template caching, transition, and replacing, and throws error if erroneous
 * A router has div.router-html to show the path-related contents.
 * 
 * ### example
 * ```
 * <mce-router>
 *   <mce-route path="page1" import="page1.html" no-cache=""></mce-route>
 *   <mce-route path="page2" import="page2.html"></mce-route>
 *   <mce-route path="not-found" import="not-found.html"></mce-route>
 *   <mce-route path="" redirect="page1"></mce-route>
 * </mce-router>
 * ``` 
 *
 *  <iframe frameborder="no" width="100%" height="300" src="https://embed.plnkr.co/DiFMep?show=preview"></iframe>
 *
 * ### `mce-router` atttibutes
 *  |name          |value     |description                                                  |
 *  |--------------|----------|-------------------------------------------------------------|
 *  |base-path     | url path | Optional. default '/', base path of this router. All route path will be prefixed with this base path.
 *  |import        | url      | **required**, url of partial html
 *  |no-cache      | boolean  | Optional,Indicates that the route view template is not cached.
 *  |resolve-func  | function | Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<mce-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`
 *  |on-route-start| function | Optional, injector function to be executed before route starts.
 *  |on-route-end  | function | Optional, injector function to be executed after route ends.
 *  |on-http-start | function | Optional, injector function to be executed before all http requests calls. This can change http request. It must return `fetch` [call option](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)
 *  |on-http-end   | function | Optional, injector function to be executed after all http responses. This can change http response. It must return a Promise
 *
 * #### `resolve-func` example
 * ```
 *    &lt;mce-router resolve-func="routerResolve()">....&lt;/mce-router>
 *    &lt;script>
 *      function routerResolve(route) {
 *        console.log('executing router-resolve');
 *        return new Promise(function(resolve, reject) {
 *          setTimeout(function() { resolve({data: 'router'}); }, 1000);
 *        });
 *      },
 *    &lt;/script>
 * ```
 * #### `on-http-start` example
 * ```
 *    &lt;mce-router resolve-func="onHttpStart">....&lt;/mce-router>
 *    &lt;script>
 *      function onHttpStart(route) {
 *        console.log('executing on-http-start');
 *        return {method: 'GET'}; // must return httpOptions
 *      },
 *    &lt;/script>
 * ```
 * #### `on-http-end` example
 * ```
 *    &lt;mce-router on-http-end="onHttpEnd">....&lt;/mce-router>
 *    &lt;script>
 *      function onHttpEnd(response) { 
 *        console.log('executing on-http-end');
 *        return response.text(); // must return a promise
 *      }
 *    &lt;/script>
 * ```
 * #### `on-route-start` example
 * ```
 *   &lt;mce-router on-route-start="onRouteStart">....&lt;/mce-router>
 *   &lt;script>
 *     function onRouteStart(route) { 
 *       console.log('executing on-route-start');
 *       return route;
 *     }
 *   &lt;/script>
 * ```
 * #### `on-route-end` example
 * ```
 *    &lt;mce-router on-route-end="onRouteEnd">....&lt;/mce-router>
 *    &lt;script>
 *      function onRouteEnd(route) { 
 *        console.log('executing on-route-end');
 *        return route;
 *      }
 *    &lt;/script>
 * ```
 */
var Router = exports.Router = function (_CustomElement2) {
  _inherits(Router, _CustomElement2);

  function Router() {
    _classCallCheck(this, Router);

    return _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).apply(this, arguments));
  }

  _createClass(Router, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      this.basePath = this.getAttribute('base-path') || '';
      this.debug = this.getAttribute('debug') === 'true';
      this.currentRoute;

      this.resolveFunc; // common resolve function route as parameter, and returning a Promise
      this.onHttpStart; // a callback function, route as parameter, and returning a Promise
      this.onHttpEnd; // a callvack funciton, route as parameter, returning a Promise

      this.routes; // collection of <mce-route> children
      this.defaultRoute;
      this.popStateHandler = this._popStateHandler.bind(this); // saving it to be used by add/remove

      this.style.position = 'relative'; //required to show loaing overlay
      window.addEventListener('popstate', this.popStateHandler);
      setTimeout(function (_) {
        _this2._setProperties();
        _this2.popStateHandler();
      });
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      window.removeEventListener('popstate', this.popStateHandler);
    }
  }, {
    key: 'showLoadingEl',
    value: function showLoadingEl(show) {
      this.loadingEl.style.display = show ? 'flex' : 'none';
    }
  }, {
    key: '_getUrlMatchingRoute',
    value: function _getUrlMatchingRoute(path) {
      var matchingRoute = void 0;

      path = path || this._getRouterPath();
      path = path.replace(/[\/]{2,}/g, '/');

      for (var i = 0; i < this.routes.length; i++) {
        var route = this.routes[i];
        var reStr = (this.basePath + route.path).replace(/[\/]{2,}/g, '/');
        var re = new RegExp('^' + reStr + '$', 'i');
        this.debug && console.log('path', path, 're', re);

        var matches = path.match(re);
        if (matches) {
          matchingRoute = route;
          matchingRoute.matches = matches;
          break;
        }
      }
      return matchingRoute;
    }
  }, {
    key: '_popStateHandler',
    value: function _popStateHandler(event) {
      var route = this._getUrlMatchingRoute();
      this.routerPath = this._getRouterPath();

      if (route && route.redirect) {
        route = this._getUrlMatchingRoute(route.redirect);
        this._redirectTo(route.path);
      } else if (route) {
        route.activate();
      } else {
        // not-found
        this.debug && console.log('route not found for \'' + this._getRouterPath() + '\', redirecting to \'not-found\'');

        if (this.defaultRoute) {
          this.defaultRoute.activate();
        } else if (this.notFoundRoute) {
          this._redirectTo(this.notFoundRoute.path);
        } else {
          this.debug && console.error('route not found for \'/not-found\' or \'not-found\'');
        }
      }
    }
  }, {
    key: '_redirectTo',
    value: function _redirectTo(path) {
      var url = this.basePath + path;
      var route = this._getUrlMatchingRoute(url);
      route ? route.activate() : console.error('route not found for', url);
    }
  }, {
    key: '_setProperties',
    value: function _setProperties() {
      var _this3 = this;

      var resolveFunc = this.getAttribute('resolve-func');
      var onHttpStart = this.getAttribute('on-http-start');
      var onHttpEnd = this.getAttribute('on-http-end');
      var onRouteStart = this.getAttribute('on-route-start');
      var onRouteEnd = this.getAttribute('on-route-end');
      this.resolveFunc = resolveFunc && this._getPromiseFunc('route', resolveFunc);
      this.onHttpStart = onHttpStart && this._getPromiseFunc('route', onHttpStart);
      this.onHttpEnd = onHttpEnd && this._getPromiseFunc('response', onHttpEnd);
      this.onRouteStart = onRouteStart && this._getPromiseFunc('route', onRouteStart);
      this.onRouteEnd = onRouteEnd && this._getPromiseFunc('route', onRouteEnd);

      this.routes = Array.from(this.querySelectorAll('mce-route'));
      this.routes.forEach(function (route) {
        route.getAttribute('default') !== null && (_this3.defaultRoute = route);
      });

      this.targetEl = this._addTargetEl();
      this.loadingEl = this._addLoadingEl();
    }
  }, {
    key: '_getRouterPath',
    value: function _getRouterPath(href) {
      href = href || window.location.href;

      var parsed = new URL(href.replace(/[\/]{2,}/g, '/')),
          routerPath = void 0;

      if (parsed.hash) {
        if (this.basePath === '' && !parsed.hash.match(/\//)) {
          // pure hash reference
          routerPath = parsed.hash.replace('#', '');
        } else {
          parsed = new URL(parsed.hash.replace('#', ''), window.location.origin);
          // routerPath = parsed.pathname.replace(/^\//,'');
          routerPath = parsed.pathname;
        }
      } else {
        routerPath = '';
      }

      return routerPath;
    }
  }, {
    key: '_addLoadingEl',
    value: function _addLoadingEl() {
      var loadingEl = this.querySelector('.mce-loading');
      if (!loadingEl) {
        this.insertAdjacentHTML('beforeend', _defaultLoadingHtml.defaultLoadingHTML);
        loadingEl = this.querySelector('div.mce-loading');
      }
      return loadingEl;
    }
  }, {
    key: '_addTargetEl',
    value: function _addTargetEl() {
      this.insertAdjacentHTML('beforeend', '<div class="mce-router-target"></div>');
      return this.querySelector('div.mce-router-target');
    }

    /* returns a function which accepts paramName and returns a promise */

  }, {
    key: '_getPromiseFunc',
    value: function _getPromiseFunc(paramName, funcStr) {
      if (paramName === 'response') {
        funcStr = 'let res = ' + funcStr + ';\n return res || response.text();';
      } else {
        funcStr = 'return ' + funcStr;
      }
      return function (param) {
        var func = new Function(paramName, funcStr);
        return Promise.resolve(func(param));
      };
    }
  }, {
    key: 'notFoundRoute',
    get: function get() {
      this._notFoundRoute = this._notFoundRoute || this._getUrlMatchingRoute(this.basePath + '/not-found') || this._getUrlMatchingRoute(this.basePath + 'not-found');
      return this._notFoundRoute;
    }
  }]);

  return Router;
}(_CustomElement);

customElements.define('mce-router', Router);

/***/ }),

/***/ "./src/search/search.js":
/*!******************************!*\
  !*** ./src/search/search.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);


var HTML = '\n  <label for="__ID__" tabindex="0">\n    <mce-icon>search</i>\n  </label>\n  <span class="mce-input-wrapper">\n    <input id="__ID__" autocomplete="off" placeholder="Search">\n    <mce-icon class="mce-clear">clear</i>\n  </span>\n';

/**
 * Search allows users to locate app content quickly.
 *
 * [Material Design Spec](https://material.io/guidelines/patterns/search.html#search-in-app-search)
 *
 * ### example
 * ```
 * <mce-search on-search="alert('You are searching...'+keyword)"></mce-search>
 * ```
 *
 * <iframe height='265' scrolling='no' title='GyyovP' src='//codepen.io/allenhwkim/embed/GyyovP/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/GyyovP/'>GyyovP</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * 
 * ### `mce-button` Attributes 
 *  |name|value|description|
 *  |---|---|---|
 *  |on-search|function| A Javascript code to execute for search with the keyword. e.g. `alert(keyword)`
 * 
 */

var Search = exports.Search = function (_CustomElement2) {
  _inherits(Search, _CustomElement2);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      this.regroupedOnce = false;
      this.inputEl;
      this.inputWrapper;
      this._regroupElements();
      setTimeout(function (_) {
        _this2.inputWrapper = _this2.querySelector('.mce-input-wrapper');
        _this2.inputEl = _this2.querySelector('input');
        _this2._addEventListeners();
      });
    }
  }, {
    key: 'close',
    value: function close() {
      this.inputEl.value = '';
      this.inputWrapper.classList.remove('mce-visible');
    }
  }, {
    key: '_regroupElements',
    value: function _regroupElements() {
      if (!this.regroupedOnce) {
        var id = 'mce-search-' + Math.round(Math.random() * Math.pow(10, 9));
        this.innerHTML = HTML.replace('__ID__', id);
      }
      this.regroupedOnce = true;
    }
  }, {
    key: '_addEventListeners',
    value: function _addEventListeners() {
      var _this3 = this;

      var searchIcon = this.querySelector('label');
      var clearIcon = this.querySelector('.mce-clear');

      // when search icon is clicked, show input field
      searchIcon.addEventListener('mouseup', this._showInputField.bind(this));
      searchIcon.addEventListener('touchend', this._showInputField.bind(this));

      searchIcon.addEventListener('keydown', function (_) {
        (event.key === ' ' || event.key === 'Enter') && _this3.inputWrapper.classList.toggle('visible');
      });

      // when input is not focused, hide input field
      this.inputEl.addEventListener('blur', function (_) {
        return _this3.close();
      });
      this.inputEl.addEventListener('keydown', function (event) {
        event.key === 'Enter' && _this3._executeOnSearch();
      });

      // when clear is pressed, clear input field
      clearIcon.addEventListener('mouseup', this._clearInputField.bind(this));
      clearIcon.addEventListener('touchend', this._clearInputField.bind(this));

      // execute custom search function
      this.addEventListener('search', function (_) {
        return _this3._executeOnSearch();
      });
    }
  }, {
    key: '_showInputField',
    value: function _showInputField(event) {
      var _this4 = this;

      if (this.inputWrapper.classList.contains('mce-visible') && this.inputEl.value) {
        var customEvent = new CustomEvent('search', event);
        this.dispatchEvent(customEvent);
      } else {
        this.inputWrapper.classList.toggle('mce-visible');
        setTimeout(function (_) {
          return _this4.inputEl.focus();
        });
      }
    }
  }, {
    key: '_clearInputField',
    value: function _clearInputField(event) {
      this.inputEl.focus();
      this.inputEl.value = '';
      event.preventDefault();
    }
  }, {
    key: '_executeOnSearch',
    value: function _executeOnSearch() {
      if (this.inputEl.value) {
        var onSearch = this.getAttribute('on-search');
        var func = new Function('keyword', onSearch);
        func(this.inputEl.value);
      }
    }
  }]);

  return Search;
}(_CustomElement);

customElements.define('mce-search', Search);

/***/ }),

/***/ "./src/snackbar/snackbar.js":
/*!**********************************!*\
  !*** ./src/snackbar/snackbar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Snackbars contain a single line of text directly related to the operation performed. 
 * They may contain a text action, but no icons.
 *
 * [Material Design Spec](https://material.io/guidelines/components/snackbars-toasts.html#snackbars-toasts-specs)
 *
 * ### example
 * ```
 * <mce-snackbar>Message has been processed.</mce-snackbar>
 * ```
 *
 * <iframe height='265' scrolling='no' title='mce template' src='//codepen.io/allenhwkim/embed/PEJKKo/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/PEJKKo/'>mce template</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-snackbar` attributes
 *  |name|value|description|
 *  |---|---|--|
 *  |bottom|number|distance from bottom in pixel. e.g. 30|
 * 
 * ### `mce-snackbar` classes 
 *  |name|description|
 *  |---|---|
 *  |mce-visible| show this snackbar|
 * 
 */

var Snackbar = exports.Snackbar = function (_CustomElement2) {
  _inherits(Snackbar, _CustomElement2);

  function Snackbar() {
    _classCallCheck(this, Snackbar);

    return _possibleConstructorReturn(this, (Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).apply(this, arguments));
  }

  _createClass(Snackbar, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.bottom = this.getAttribute('bottom') || '56';
      this.open();
    }
  }, {
    key: 'open',


    /**
     * show mce-snackbar by adding `mce-visible` class
     * @param {string} msg message to show
     * @returns {void}
     */
    value: function open(msg) {
      var _this2 = this;

      msg && (this.message = msg);
      this.style.bottom = this.bottom + 'px';
      this.classList.add('mce-visible');
      setTimeout(function (_) {
        _this2.classList.remove('mce-visible');
      }, 3000);
    }

    /**
     * close mce-snackbar by removing `mce-visible` class
     * @returns {void}
     */

  }, {
    key: 'close',
    value: function close() {
      this.classList.remove('mce-visible');
    }
  }, {
    key: 'message',
    set: function set(msg) {
      if (this.querySelector('.text')) {
        this.querySelector('.text').innerHTML = msg;
      } else {
        this.innerHTML = msg;
      }
    }
  }]);

  return Snackbar;
}(_CustomElement);

customElements.define('mce-snackbar', Snackbar);

/***/ }),

/***/ "./src/switch/switch.js":
/*!******************************!*\
  !*** ./src/switch/switch.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

//https://material.io/guidelines/layout/structure.html#structure-app-bar

/**
 * Switches allow a selection to be turned on or off.
 *
 * [Material Design Spec](https://material.io/guidelines/components/selection-controls.html#)
 *
 * ## Examples
 * ```
 * <mce-switch id="checkbox21"></mce-switch> <label for="checkbox21">Unchecked</label>
 * ```
 *
 * <iframe height='265' scrolling='no' title='LeeGzQ' src='//codepen.io/allenhwkim/embed/LeeGzQ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/LeeGzQ/'>LeeGzQ</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-switch` Attributes 
 * It accepts all `input` checkbox attributes. E.g., id, name, value, disaled, or checked
 */
var Switch = exports.Switch = function (_CustomElement2) {
  _inherits(Switch, _CustomElement2);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
  }

  _createClass(Switch, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      this.inputAttrs = ['id', 'name', 'value', 'disabled', 'checked'];
      this.inputEl = this._addRealInput();
      (0, _index.observeAttrChange)(this, function (attr, val) {
        val === null ? _this2.inputEl.removeAttribute(attr) : _this2.inputEl.setAttribute(attr, val);
      });
      (0, _index.setTabbable)(this, function (_) {
        return _this2.inputEl.click();
      });
    }
  }, {
    key: '_addRealInput',
    value: function _addRealInput() {
      var _this3 = this;

      var inputEl = document.createElement('input');
      inputEl.setAttribute("type", "checkbox");
      Array.from(this.attributes).forEach(function (attr) {
        if (_this3.inputAttrs.includes(attr.name) && attr.value !== null) {
          inputEl.setAttribute(attr.name, attr.value);
          attr.name === 'id' && _this3.setAttribute('id', 'mce-switch-' + attr.value);
        }
      });
      inputEl.addEventListener('click', function (_) {
        inputEl.checked ? _this3.setAttribute('checked', '') : _this3.removeAttribute('checked');
      });
      this.appendChild(inputEl);
      return inputEl;
    }
  }]);

  return Switch;
}(_CustomElement);

customElements.define('mce-switch', Switch);

/***/ }),

/***/ "./src/tabs/tabs.js":
/*!**************************!*\
  !*** ./src/tabs/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Tabs make it easy to explore and switch between different views.
 *
 * [Material Design Spec](https://material.io/guidelines/components/tabs.html#tabs-specs)
 * 
 * ### Example
 *
 * ```
 * <mce-tabs>
 *   <mce-nav-item icon="favorite"></mce-nav-item>
 *   <mce-nav-item icon="search" class="mce-active"></mce-nav-item>
 *   <mce-nav-item icon="alarm"></mce-nav-item>
 * </mce-tabs>
 * ```
 *
 * <iframe height='265' scrolling='no' title='VyyeMd' src='//codepen.io/allenhwkim/embed/VyyeMd/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/VyyeMd/'>VyyeMd</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-tabs` Style Classes
 *  |name||description|
 *  |---|---|
 *  |mce-active| indicates currently active tab with indicator
 * 
 */

var Tabs = exports.Tabs = function (_CustomElement2) {
  _inherits(Tabs, _CustomElement2);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      setTimeout(function (_) {
        _this2.indicatorEl = _this2._addIndicatorEl();
        _this2._addEventListener();
        setTimeout(_this2._selectActiveTab.bind(_this2), 100);
      });
    }
  }, {
    key: 'getActiveTab',
    value: function getActiveTab(event) {
      var activeTab = void 0;
      if (event) {
        // if clicked or tapped
        activeTab = event.target.closest('mce-nav-item');
      } else {
        activeTab = this.querySelector('mce-nav-item.mce-active');
        activeTab = activeTab || this.querySelector('mce-nav-item:first-child');
      }
      return activeTab;
    }
  }, {
    key: '_addIndicatorEl',
    value: function _addIndicatorEl() {
      var el = document.createElement('div');
      var thisBCR = this.getBoundingClientRect();
      var activeTabBCR = this.getActiveTab().getBoundingClientRect();

      el.classList.add('mce-indicator');
      el.style.left = (activeTabBCR.left - thisBCR.left) / thisBCR.Width * 100 + '%';
      this.appendChild(el);
      return el;
    }

    /**
     * animate the indicator below the active tab
     */

  }, {
    key: '_selectActiveTab',
    value: function _selectActiveTab(event) {
      var _this3 = this;

      var indicatorEl = this.indicatorEl;
      var numTab = this.querySelectorAll('mce-nav-item').length;
      var activeTab = this.getActiveTab(event);
      // console.log('activeTab', activeTab, event && event.target);

      Array.from(this.querySelectorAll('mce-nav-item')).forEach(function (navItem) {
        navItem.setAttribute('tabindex', navItem.isSameNode(activeTab) ? 0 : -1);
      });
      // activeTab.focus();

      setTimeout(function (_) {
        // wait for mce-nav-item.active changes
        var thisBCR = _this3.getBoundingClientRect();
        var activeTabBCR = activeTab.getBoundingClientRect();

        var indicatorFromPct = parseFloat(indicatorEl.style.left || 0);
        var indicatorToPct = (activeTabBCR.left - thisBCR.left) / thisBCR.width;
        var move = indicatorToPct * 100 - indicatorFromPct;

        indicatorEl.style.width = parseFloat(100 / numTab) + '%';

        (0, _index.animate)({
          duration: 450,
          timing: function timing(timeFraction) {
            return 1 - Math.sin(Math.acos(timeFraction));
          },
          draw: function draw(progress) {
            indicatorEl.style.left = indicatorFromPct + progress * move + '%';
          }
        });
      });
    }
  }, {
    key: '_addEventListener',
    value: function _addEventListener() {
      var _this4 = this;

      // for each tab, set click and keydown event listeners
      Array.from(this.querySelectorAll('mce-nav-item')).forEach(function (navItem) {
        //when clicked, open the tab
        navItem.addEventListener('click', _this4._selectActiveTab.bind(_this4));
        // listen to keyboard up,down,next,right,space and enter
        navItem.addEventListener('keydown', function (event) {
          //with arrow keys, move tab
          var tabMoveIndex = event.key === "ArrowRight" || event.key === "ArrowUp" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowDown" ? -1 : 0;
          var tabToMove = void 0,
              activeTabIndex = 0;
          var activeTab = _this4.getActiveTab(event);
          var navItems = _this4.querySelectorAll('mce-nav-item');

          for (var i = 0; i < navItems.length; i++) {
            navItems[i].isSameNode(activeTab) && (activeTabIndex = i);
          }

          tabToMove = navItems[(activeTabIndex + tabMoveIndex + navItems.length) % navItems.length];
          tabToMove && !tabToMove.isSameNode(activeTab) && tabToMove.click();

          //with space or enter, open tab
          event.key === "Enter" && navItem.click();
        });
      });
    }
  }]);

  return Tabs;
}(_CustomElement);

customElements.define('mce-tabs', Tabs);

/***/ }),

/***/ "./src/text-field/text-field.js":
/*!**************************************!*\
  !*** ./src/text-field/text-field.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search. Text fields contain the following elements; label, input text field, placeholder text, helper text, required field indicator, icon, and error messages.
 * 
 * [Material Design Spec](https://material.io/guidelines/components/text-fields.html#text-fields-layout)
 *
 * ###  Example
 * ```
 * <mce-text-field disabled multi-line
 *   icon="favorite"
 *   helper-text="this is helper text"
 *   label="this is label"
 *   maxlength="100"
 *   minlength="10"
 *   minlength-error="invalid text min. length"
 *   maxlength-error="invalid text max. length"
 *   optional="(optional)"
 *   pattern-error="invalid text pattern"
 *   pattern="[a-z]+"
 *   placeholder="this is hint text"
 *   prefix="$"
 *   readonly
 *   required="this field is required"
 *   suffix="dollars"></mce-text-field>
 * ```
 *
 * <iframe height='265' scrolling='no' title='BJJjwe' src='//codepen.io/allenhwkim/embed/BJJjwe/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/BJJjwe/'>BJJjwe</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 * 
 * ### `mce-text-field` Attributes 
 *  |name|value|description|
 *  |---|---|---|
 *  |disabled| |Disabled Status. No interaction is allowed with this status.
 *  |multi-line| | Allows multi-line input
 *  |icon| text |Icon name that will be located on the left-side. e.g. credit_card
 *  |label| text |Label text that will be displayed when not active, and minized when active.
 *  |optional| text |Text to be appended at the lable indicating it is optional. Default. "(optional)"
 *  |suffix | text |Read-only input helper to be displayed at the end of input field. e.g., 'dollars'
 *  |prefix| text|Read-only input helper to be displayed at the beginning of input field. e.g., '$'
 *  |suffix | text |Read-only input helper to be displayed at the end of input field. e.g., 'dollars'
 *  |required-error| text |Error message when 'required' is given with no value. e.g., 'Fill out the column'. Default. 'This field is required'
 *  |min-error| text | Error message when 'min' is given but not valid. Default. 'invalid min. value''
 *  |max-error| text  |Error message when 'max' is given but not valid. Default. 'invalid max. value''
 *  |minlength-error| text |Error message when 'minlength' is given but not valid. Default. 'invalid min. length''
 *  |maxlength-error| text  |Error message when 'maxlength' is given but not valid. Default. 'invalid max. length''
 *  |pattern-error| text |Error message when 'pattern' is given with regular expression but not valid. Default. 'invalid input text'
 *  |type-error| text |Error message when 'type' is given but not. Default. 'invalid input for type <type>'
 * 
 *  `mce-text-field` passes all attributes to `input` field, which means all standard input attributes are acceptable,
 *  and it affects the actual input. Sometime this can cause some strange behaviour, 
 *  but it's up to user without blocking it. For example `type="range"` is not for text field, but still
 *  working without error.
 *  
 * ### `mce-text-field` Classes
 *  |name|description|
 *  |---|---|
 *  |mce-empty | Indicating that the field is empty. When empty, helper text is shown. When not empty and errorneous, error message is shown.
 *  |mce-invalid | Indicating that the field is errorneous. With this status, error message is shown if given.
 *  |mce-active| Indicating the input field is focused and active by minimizing label and showing placeholder text.
 *  |mce-dirty| Indicating user has entered any input to this field. Error message is only displayed when it is dirty status.
 */
var TextField = exports.TextField = function (_CustomElement2) {
  _inherits(TextField, _CustomElement2);

  function TextField() {
    _classCallCheck(this, TextField);

    return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
  }

  _createClass(TextField, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.id = 'mce-text-field-' + Math.round(Math.random() * Math.pow(10, 9));
      this._buildHTML();

      this.inputEl = this.querySelector('#' + this.id);
      this._addEventListeners();
    }

    /**
     * @property {boolean} disabled - disabled status
     */

  }, {
    key: '_buildHTML',
    value: function _buildHTML() {
      var icon = this.getAttribute('icon') || '';
      var type = this.getAttribute('type') || 'text';
      var hintText = this.getAttribute('placeholder') || '';
      var helpetText = this.getAttribute('helper-text') || '';
      var label = this.getAttribute('label') || '';
      var prefix = this.getAttribute('prefix') || '';
      var suffix = this.getAttribute('suffix') || '';
      var optionalText = this.getAttribute('optional') || '';
      var helperText = this.getAttribute('helper-text') || '';
      var requiredText = this.getAttribute('required') !== null ? ' *' : '';
      var multiLine = this.getAttribute('multi-line') !== null ? true : false;

      var attrs = [];
      for (var i = 0; i < this.attributes.length; i++) {
        var attr = this.attributes[i];
        !attr.name.match(/-/) && attrs.push(attr.name + '="' + attr.value + '"');
      }
      var attributes = attrs.join(' ');
      var inputWrapperHTML = multiLine ? '<textarea class="mce-input" id="' + this.id + '" ' + attributes + '>' + (this.getAttribute('value') || '') + '</textarea>' : '<div class="mce-prefix">' + prefix + '</div>\n\n       <input class="mce-input" type="' + type + '" id="' + this.id + '" ' + attributes + ' />\n\n       <div class="mce-suffix">' + suffix + '</div>\n';

      var html = '\n      <mce-icon class="mce-icon">' + icon + '</mce-icon>\n      <div class="mce-container">\n        <label for="' + this.id + '" style="">' + label + optionalText + requiredText + '</label>\n        <div class="mce-input-wrapper">\n          ' + inputWrapperHTML + '\n        </div>\n        <hr />\n        <div class="mce-helper-text">' + helperText + '</div>\n        <div class="mce-error-messages"></div>\n      </div>\n    ';
      this.insertAdjacentHTML('beforeend', html);
    }
  }, {
    key: '_getErrors',
    value: function _getErrors() {
      var errors = {};
      for (var key in this.inputEl.validity) {
        if (key !== 'valid' && this.inputEl.validity[key]) {
          errors[key] = this.errorMessages[key];
        }
      }
      if (this.getAttribute('maxlength')) {
        var tooLong = this.inputEl.value.length > parseInt(this.getAttribute('maxLength'));
        tooLong && (errors.tooLong = this.errorMessages.tooLong);
      }
      return errors;
    }
  }, {
    key: '_addEventListeners',
    value: function _addEventListeners() {
      var _this2 = this;

      var setStatus = function setStatus() {
        var empty = !_this2.inputEl.value;
        var error = Object.values(_this2._getErrors())[0];
        var errMsgEl = _this2.querySelector('.mce-error-messages');
        var dirty = _this2.classList.contains('mce-dirty');

        empty ? _this2.classList.add('mce-empty') : _this2.classList.remove('mce-empty');
        if (dirty && error) {
          _this2.classList.add('mce-invalid');
          errMsgEl.innerHTML = error;
        } else {
          _this2.classList.remove('mce-invalid');
        }
      };

      setStatus();

      this.addEventListener('click', function (event) {
        _this2.classList.add('mce-active');
        _this2.inputEl.focus();
      });

      this.inputEl.addEventListener('blur', function (event) {
        _this2.classList.remove('mce-active');
      });

      this.inputEl.addEventListener('change', function (event) {
        _this2.classList.add('mce-dirty');
        setStatus();
      });

      if (this.querySelector('textarea')) {
        var delayedResize = function delayedResize() {
          // try {
          //   textarea.value = JSON.stringify(JSON.parse(textarea.value), null, '  ');
          // } catch(e) {}
          window.setTimeout(function () {
            textarea.style.height = textarea.scrollHeight + 'px';
            textarea.closest('.mce-container').style.height = textarea.scrollHeight + 60 + 'px';
          }, 500);
        };

        // if multiline, autoresize the input height
        var textarea = this.inputEl;
        textarea.style.height = 'auto';

        textarea.addEventListener('change', delayedResize, false);
        textarea.addEventListener('cut', delayedResize, false);
        textarea.addEventListener('paste', delayedResize, false);
        textarea.addEventListener('drop', delayedResize, false);
        textarea.addEventListener('keydown', delayedResize, false);

        textarea.focus();
        textarea.select();
        delayedResize();
      }
    }
  }, {
    key: '_autoResizeTextarea',
    value: function _autoResizeTextarea() {}
  }, {
    key: 'disabled',
    get: function get() {
      return this.getAttribute('disabled') !== '';
    }

    /**
     * set disabled status
     * @param {boolean} true of false
     * @returns {void}
     */
    ,
    set: function set(disabled) {
      disabled ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
    }

    /**
     * @returns {Object} registered error messages. e.g., <pre>
     *  {
     *    rangeUnderflow: 'invalid min.value',
     *    rangeOverflow: 'invalid max.value',
     *    stepMismatch: 'invalid value(step)',
     *    tooShort:  'invalid min. length',
     *    tooLong: 'invalid max. length',
     *    patternMismatch: 'invalid input text',
     *    valueMissing: 'this field is requierd',
     *    typeMismatch:  'invalid input for type email',
     *    customError: 'invaid input(custom error)',
     *    invalidError: 'invaid input'
     *  } </pre>
     */

  }, {
    key: 'errorMessages',
    get: function get() {
      var errorMessages = this.__cachedErrorMessages || {
        rangeUnderflow: this.getAttribute('min-error') || 'invalid min. value',
        rangeOverflow: this.getAttribute('max-error') || 'invalid max. value',
        stepMismatch: this.getAttribute('step-error') || 'invalid value(step)',
        tooShort: this.getAttribute('minlength-error') || 'invalid min. length',
        tooLong: this.getAttribute('maxlength-error') || 'invalid max. length',
        patternMismatch: this.getAttribute('pattern-error') || 'invalid input text',
        valueMissing: this.getAttribute('required-error') || 'this field is requierd',
        typeMismatch: this.getAttribute('type-error') || 'invalid input for type, ' + this.getAttribute('type'),
        customError: this.getAttribute('custom-error') || 'invaid input(custom error)',
        invalidError: this.getAttribute('invalid-error') || 'invaid input'
      };
      this.__cachedErrorMessages = errorMessages;
      return errorMessages;
    }
  }]);

  return TextField;
}(_CustomElement);

customElements.define('mce-text-field', TextField);

/***/ }),

/***/ "./src/tooltip/tooltip.js":
/*!********************************!*\
  !*** ./src/tooltip/tooltip.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

// FYI, http://plnkr.co/edit/I9mfBNIKJtALHwKmS0CH?p=preview. ARIA tooltip approach.

/**
 * Tooltips are text labels that appear when the user hovers over, focuses on, or touches an element.
 * 
 * [Material Design Spec](https://material.io/guidelines/components/tooltips.html)
 *
 * ###  Example
 * ```
 * <mce-button class="mce-raised">
 *   <mce-tooltip>This is a tooltip for a button</mce-tooltip>
 *   Mouse
 * </mce-button>
 * <mce-button class="mce-raised" style="float: right">
 *   <mce-tooltip>This is a tooltip for a button</mce-tooltip>
 *   Tooltip
 * </mce-button>
 * ```
 *
 * <iframe height='265' scrolling='no' title='ZvvQap' src='//codepen.io/allenhwkim/embed/ZvvQap/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/ZvvQap/'>ZvvQap</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 */
var Tooltip = exports.Tooltip = function (_CustomElement2) {
  _inherits(Tooltip, _CustomElement2);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._addEventListeners();
    }
  }, {
    key: '_addEventListeners',
    value: function _addEventListeners() {
      var _this2 = this;

      this.parentElement.addEventListener('mouseenter', function (event) {
        _this2.originalPos = {
          parent: event.target,
          nextSibling: _this2.nextSiblingNode
        };
        _this2._showTooltip();
      });
      this.parentElement.addEventListener('mouseleave', function (_) {
        _this2.classList.remove('mce-visible');
        _this2.originalPos.parent.insertBefore(_this2, _this2.originalPos.nextSibling);
      });
    }
  }, {
    key: '_showTooltip',
    value: function _showTooltip() {
      var _this3 = this;

      var parentBCR = this.originalPos.parent.getBoundingClientRect(); // relative to viewport
      var body = document.body;
      var docEl = document.documentElement;

      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

      var clientTop = docEl.clientTop || body.clientTop || 0;
      var clientLeft = docEl.clientLeft || body.clientLeft || 0;

      var docPosTop = Math.round(parentBCR.top + scrollTop - clientTop);
      var docPosLeft = Math.round(parentBCR.left + scrollLeft - clientLeft);

      var top = docPosTop + parentBCR.height + 24;

      this.style.top = top + 'px';
      this.style.left = '';
      this.style.right = '';

      document.body.appendChild(this);
      setTimeout(function (_) {
        var thisBCR = _this3.getBoundingClientRect(); // it needs time to calc this properly
        var left = docPosLeft + parentBCR.width / 2 - thisBCR.width / 2;

        if (left < 8) {
          _this3.style.left = '8px';
        } else if (left + thisBCR.width > document.body.clientWidth) {
          _this3.style.right = '8px';
        } else {
          _this3.style.left = left + 'px';
        }

        _this3.classList.add('mce-visible');
      }, 100);
    }
  }]);

  return Tooltip;
}(_CustomElement);

customElements.define('mce-tooltip', Tooltip);

/***/ }),

/***/ "./src/utils/attribute-related.js":
/*!****************************************!*\
  !*** ./src/utils/attribute-related.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeAttrChange = observeAttrChange;
exports.parseAttributes = parseAttributes;

var _index = __webpack_require__(/*! ./index.js */ "./src/utils/index.js");

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
function observeAttrChange(el, callback) {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'attributes') {
        var newVal = mutation.target.getAttribute(mutation.attributeName);
        callback(mutation.attributeName, newVal);
      }
    });
  });
  observer.observe(el, { attributes: true });
  return observer;
}

/**
 * returns options and events from attributes
 */
function parseAttributes(attributes) {
  var eventsRE = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /^on-/;

  var options = {},
      events = {};

  Array.from(attributes).forEach(function (attr) {
    if (attr.name.match(eventsRE)) {
      var eventName = (0, _index.toCamelCase)(attr.name.replace(/^on-/, ''));
      events[eventName] = function (event) {
        var func = new Function('event', attr.value);
        return func(event);
      };
    } else {
      var optionName = (0, _index.toCamelCase)(attr.name);
      options[optionName] = (0, _index.str2Val)(attr.value);
    }
  });

  return { options: options, events: events };
}

/***/ }),

/***/ "./src/utils/element-related.js":
/*!**************************************!*\
  !*** ./src/utils/element-related.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTabbable = setTabbable;
exports.setInnerHTML = setInnerHTML;
/** 
 * set the given element tabbable by adding tabindex, and click/ENTER event
 * @example
 *   setTabbable(el, _ => this.inputEl.click());
 */
function setTabbable(el, fn) {
  if (el.getAttribute('tabindex')) {
    el.addEventListener('keypress', function (event) {
      if (event.key === ' ' || event.key === 'Enter') {
        fn && fn();
        event.preventDefault();
      }
    });
  }
}

/** 
 * set innerHTML of the element
 * it also executes <script>...</script> in addition to setting HTML
 * @example
 *   set innerHTML(el, '<script>alert(1)</script>')
 */
function setInnerHTML(elm, html) {
  elm.innerHTML = html;
  Array.from(elm.querySelectorAll("script")).forEach(function (el) {

    var newEl = document.createElement("script");
    Array.from(el.attributes).forEach(function (el) {
      newEl.setAttribute(el.name, el.value);
    });

    newEl.appendChild(document.createTextNode(el.innerHTML));
    el.parentNode.replaceChild(newEl, el);
  });
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _attributeRelated = __webpack_require__(/*! ./attribute-related.js */ "./src/utils/attribute-related.js");

Object.defineProperty(exports, 'observeAttrChange', {
  enumerable: true,
  get: function get() {
    return _attributeRelated.observeAttrChange;
  }
});
Object.defineProperty(exports, 'parseAttributes', {
  enumerable: true,
  get: function get() {
    return _attributeRelated.parseAttributes;
  }
});

var _elementRelated = __webpack_require__(/*! ./element-related.js */ "./src/utils/element-related.js");

Object.defineProperty(exports, 'setTabbable', {
  enumerable: true,
  get: function get() {
    return _elementRelated.setTabbable;
  }
});
Object.defineProperty(exports, 'setInnerHTML', {
  enumerable: true,
  get: function get() {
    return _elementRelated.setInnerHTML;
  }
});

var _pureFunctions = __webpack_require__(/*! ./pure-functions.js */ "./src/utils/pure-functions.js");

Object.defineProperty(exports, 'toCamelCase', {
  enumerable: true,
  get: function get() {
    return _pureFunctions.toCamelCase;
  }
});
Object.defineProperty(exports, 'str2Val', {
  enumerable: true,
  get: function get() {
    return _pureFunctions.str2Val;
  }
});
Object.defineProperty(exports, 'callSetMethod', {
  enumerable: true,
  get: function get() {
    return _pureFunctions.callSetMethod;
  }
});

var _windowRelated = __webpack_require__(/*! ./window-related.js */ "./src/utils/window-related.js");

Object.defineProperty(exports, 'waitUntil', {
  enumerable: true,
  get: function get() {
    return _windowRelated.waitUntil;
  }
});
Object.defineProperty(exports, 'windowResizeHandler', {
  enumerable: true,
  get: function get() {
    return _windowRelated.windowResizeHandler;
  }
});
Object.defineProperty(exports, 'animate', {
  enumerable: true,
  get: function get() {
    return _windowRelated.animate;
  }
});

/***/ }),

/***/ "./src/utils/pure-functions.js":
/*!*************************************!*\
  !*** ./src/utils/pure-functions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCamelCase = toCamelCase;
exports.str2Val = str2Val;
exports.callSetMethod = callSetMethod;
/** returns camelCased string value */
function toCamelCase(str) {
  return str.replace(/-([mce-z])/gi, function (g) {
    return g[1].toUpperCase();
  });
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
function str2Val(str) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (!str) return str;

  // return JSON-like string value from the given string {a: 1} -> {"a": 1};
  function __jsonize(str) {
    try {
      JSON.parse(expr); // if va json, it will raise an exception
      return str;
    } catch (e) {
      return str.replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
      function (_, $1) {
        return '"' + $1 + '":';
      }).replace(/'([^']+)'/g, // replacing single quote to double quote
      function (_, $1) {
        return '"' + $1 + '"';
      });
    }
  }

  // retruns the revalue from string variable expression
  // e.g.,  getScopeObj('foo.bar["x"].y'); //returns window.foo.bar.x.y value
  function __getScopedObj(str, scope) {
    var obj = scope,
        arr = void 0;
    arr = str.split(/[\[\]\.]/) // split by [,],.
    .filter(function (el) {
      return el;
    }) // filter out empty one
    .map(function (el) {
      return el.replace(/^['"]+|['"]+$/g, '');
    }); // remove string quotation
    if (arr.length > 1 && arr[0] !== str) {
      arr.forEach(function (el) {
        return obj = obj[el];
      });
      return obj;
    } else {
      return str;
    }
  }

  // Normalize string value
  var expr = str;
  if (expr.match(/^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/)) {
    expr = '[' + str + ']';
  }
  expr = __jsonize(expr);

  // Return value
  try {
    // if JSON parsable, return object
    return JSON.parse(expr);
  } catch (e) {
    try {
      // if variable, return variable value. e.g. 'foo.bar', foo['bar'];
      expr = __getScopedObj(expr, scope);
      return expr;
    } catch (e) {
      return expr; // return as it is e.g. 'hello'
    }
  }
}

/**
 * call obj.setXXX method with the given value
*/
function callSetMethod(obj, key, val) {
  // name, val, excludes, applyTo, attrs
  objApplyFunc = objApplyFunc || function () {
    var funcName = toCamelCase('set-' + key);
    var funcParam = str2Val(val);
    obj[funcName] && obj[funcName](funcParam);
  };
}

/***/ }),

/***/ "./src/utils/window-related.js":
/*!*************************************!*\
  !*** ./src/utils/window-related.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitUntil = waitUntil;
exports.windowResizeHandler = windowResizeHandler;
exports.animate = animate;
/**
 * Returns promise when the given meets
 * @example
 *   waitUntil(_ => window.google.map)
 */
function waitUntil(condition) {
  if (typeof condition !== 'function') {
    console.error('Invalid condition for waitUntil. It must be a function', condition);
    throw "invalid condition";
  }
  return new Promise(function (resolve, reject) {
    (function __wait() {
      var timeElapsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;

      var result = condition();
      if (result) {
        return resolve(result);
      } else if (timeElapsed > timeout) {
        return reject('timeout');
      }
      setTimeout(function () {
        __wait(timeElapsed + 100, timeout);
      }, 100);
    })();
  });
}

/** 
 * callback for window resize handler
 * this handler makes app bar, nav drawer, bottom bar behaves differently by setting mce-desktop
 * @example
 *   window.ce = {resizeHandler: windowResizeHandler};
 *   window.addEventListener('resize', window.ce.resizeHandler);
 *   window.addEventListener('load', window.ce.resizeHandler);v
 */
function windowResizeHandler() {
  if (window.innerWidth >= 1024) {
    document.body.classList.add('mce-desktop');
  } else {
    document.body.classList.remove('mce-desktop');
  }
}

/**
 * common function for Javascript animation
 * @example
 *   animate({
 *    duration: 450,
 *    timing: function(timeFraction) {
 *      return 1 - Math.sin(Math.acos(timeFraction));
 *    },
 *    draw: function(progress) {
 *      indicatorEl.style.left = indicatorFromPct + (progress*move) + '%';
 *    }
 *  });
 */
function animate(_ref) {
  var duration = _ref.duration,
      draw = _ref.draw,
      timing = _ref.timing;

  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    var timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    var progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi core-js/fn/reflect/construct core-js/es6/array ./src/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/fn/reflect/construct */"./node_modules/core-js/fn/reflect/construct.js");
__webpack_require__(/*! core-js/es6/array */"./node_modules/core-js/es6/array.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=mce.js.map