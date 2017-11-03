/*
<template for="CECore">
  <style id="ce-core-style">
  ${coreCss}
  </style>
  <script>
  (function() {
    var thisScript = document.currentScript;
    let template = thisScript.ownerDocument.querySelector('template[for=CECore]');
    let style = template.content.querySelector('style').cloneNode(true);
    !document.getElementById(style.id) && document.head.appendChild(style);
  })();
  </script>
</template>
*/

// create core-components.html
// read all files, and for each file
  // extract css, add to coreCss
  // minify JS
  // append to core-components.html

// minify coreCss
// read core-components.html
// replace `<style id="ce-core-style">` with `<style id="ce-core-style">${coreCss}`
// write to core-components.html

// minify core-components.html