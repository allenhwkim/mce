// create core-components.html
// read all files, and for each file
  // extract css, add to coreCss
  // minify JS
  // append to core-components.html

// minify coreCss
// read core-components.html
// replace `<style id="ce-core-style">` with `<style id="ce-core-style">${coreCss}`
// write to core-components.html

// minify core-components.html, and write to dist/core-components.min.html
// combine webcomponents-hi.js anc ce-polyfill.js, write to dist/custom-elements-polyfill.js

/**  insert polyfill if not defined  **/
/*
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