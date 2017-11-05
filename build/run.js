var path = require('path');
var createDist = require('create-dist.js');
var createComp = require('create-component.js');
var createCore = require('create-core-min.js');
var createPoly = require('create-polyfill.js');


var target = path.join(__dirname, '..', 'path');
var src = path.join(__dirname, '..', 'components');

createDist({target});
createComp({src, target});
createcore({src: createComp});
createPoly();