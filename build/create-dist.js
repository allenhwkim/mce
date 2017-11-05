var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');

export function(opts) {
  console.log('re-creating dist directoy');
  rimraf(opts.target);
  mkdirp(path.join(opts.target, 'core'));
}