#!/bin/bash
set -x
webpack index.js --output-filename=dist/mce.js
MCE_CLASSES=$(egrep -o 'class .* extends HTML' src/*/*.js src/*/src/*.js | awk '{print $2}' | paste -sd',' -)
uglifyjs dist/mce.js -m reserved=[$MCE_CLASSES] -c > dist/mce.min.js