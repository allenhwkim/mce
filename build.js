var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');

console.log('re-creating dist directoy');
rimraf(path.join(__dirname, 'dist'));
mkdirp(path.join(__dirname, 'dist', 'core'));

console.log('reading all files');
var files = fs.readdirSync(path.join(__dirname, 'components'));
let allCSS = '';
let allTmpl = '';
let allJS = '';
let polyfillJS = `
<script>
if (!('import' in document.createElement('link')) {
  let scriptEl = document.createElement('script');
  scriptEl.setAttribute('src', '//unpkg.com/custom-elements/dist/web-components-hi.js')
  document.head.appendChild(scriptEl);
}
if (!(window.customElements) {
  let scriptEl = document.createElement('script');
  scriptEl.setAttribute('src', '//unpkg.com/custom-elements/dist/ce-polyfill.js')
  document.head.appendChild(scriptEl);
}
</script>
`;

files.forEach(file => {

});
// create core-components.html
// read all files, and for each file
  // extract css, add to coreCss
  // minify JS
  // append to core-components.html

console.log('minifying css, js, html');
// minify coreCss
// read core-components.html
// replace `<style id="ce-core-style">` with `<style id="ce-core-style">${coreCss}`
console.log('creating dist/core-components.min.html')
// write to core-components.html

// minify core-components.html, and write to dist/core-components.min.html
// combine webcomponents-hi.js anc ce-polyfill.js, write to dist/custom-elements-polyfill.js

console.log('copying dist/web-components-hi.js');
console.log('copying dist/ce-polyfill.js');
/**  insert polyfill if not defined  **/
/*

<template for="CECore">
  <style id="ce-core-style">
  ${coreCss}
  </style>
</template>

<template for="XXXX"><style id="x-xxx-xx"></style></template><script> ... </script>
<template for="XXXX"><style id="x-xxx-xx"></style></template><script> ... </script>
*/

dist/
  web-components-hi.js
  ce-polyfill.js
  core-elements.html (minified + polyfill)
  core/
    app-bar.html (minified + polyfill)
    card.html (minified + polyfill)
    ...
