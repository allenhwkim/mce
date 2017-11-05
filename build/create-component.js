var UglifyES = require("uglify-es");
var CleanCSS = require('clean-css');
var minify   = require('html-minifier').minify;

var allCSS = '';
var allHTMl = '';
var polyfillJS = `
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
  </script>`;

var createComponent = function(opts) {
  console.log('reading all files');
  let css;
  let js;
  let tmpl;

  var files = fs.readdirSync(opts.src);
  files.forEach(file => {
    let html = fs.readFileSync(path.join(opts.src, file), 'utf8'), minHTML;
    let $ = cheerio.load(html);

    let css = $('template style').text();
    let js = $('script').text();

    let minJs= UglifyES.minify(js);
    let minCcss = new CleanCSS().minify(css);

    //write a self-containted file with polyfill and minified js, css, html
    $('template style').text(css);
    $('script').text(js);
    minHTML = minify($.html());
    fs.writFileSync(path.join(ppts.target, 'core', file))

    //add minCSS and html 
    allCSS += css;
    $('template style').text('');
    $('script').text(js);
    allHTML += minify($.html());
  });
}
creareComponent.allCSS = allCSS;
creareComponent.allHTMl = allHTML;
creareComponent.polyfillJS = polyfillJS;


export createComponent;

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