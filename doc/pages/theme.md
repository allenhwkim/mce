<script>
  function setTheme(theme) {
    var themeEl = document.querySelector('#theme-css');
    var downloadLink = document.querySelector('a#download-theme');
    themeEl.setAttribute('href', '../../themes/' + theme + '.css');
    downloadLink.setAttribute('href', '../../themes/' + theme + '.css');
  }
</script>
<link id="theme-css" rel="stylesheet" href="../../themes/blue.css">

<h2>Theme</h2>
<p>
  Theme is nothing but declaration of variables; color, text color, and shadows. 
  Elements in @custom-element does not specify any specific color or shadow, but it simply uses defined variables. Thus, by simply changing a variable, you can change all the color and effects of all element.
</p>

<a id="download-theme" href="../../themes/blue.css" target="_blank">Download Current Theme</a>

<div class="color">
  <h3>Color / Text Color</h3>
  <div style="background:var(--theme-color-50); color:var(--theme-text-color-900)">
    --theme-color-50   / --theme-text-color-900 
  </div>
  <div style="background:var(--theme-color-100);color:var(--theme-text-color-800)">
    --theme-color-100 / --theme-text-color-800
  </div>
  <div style="background:var(--theme-color-200);color:var(--theme-text-color-700)">
    --theme-color-200 / --theme-text-color-700
  </div>
  <div style="background:var(--theme-color-300);color:var(--theme-text-color-600)">
    --theme-color-300 / --theme-text-color-600
  </div>
  <div style="background:var(--theme-color-400);color:var(--theme-text-color-500)">
    --theme-color-400 / --theme-text-color-500
  </div>
  <div style="background:var(--theme-color-500);color:var(--theme-text-color-400)">
    --theme-color-500 / --theme-text-color-400
  </div>
  <div style="background:var(--theme-color-600);color:var(--theme-text-color-300)">
    --theme-color-600 / --theme-text-color-300
  </div>
  <div style="background:var(--theme-color-700);color:var(--theme-text-color-200)">
    --theme-color-700 / --theme-text-color-200
  </div>
  <div style="background:var(--theme-color-800);color:var(--theme-text-color-100)"> 
    --theme-color-800 / --theme-text-color-100
  </div>
  <div style="background:var(--theme-color-900);color:var(--theme-text-color-50)">
    --theme-color-900 / --theme-text-color-50
  </div>
  <div style="background:var(--theme-color-a100)">--theme-color-a100</div>
  <div style="background:var(--theme-color-a200)">--theme-color-a200</div>
  <div style="background:var(--theme-color-a400)">--theme-color-a400</div>
  <div style="background:var(--theme-color-a700)">--theme-color-a700</div>
</div>

<a href="javascript:setTheme('amber')" icon="palette">Amber</a>
| <a href="javascript:setTheme('blue-grey')" icon="palette">Blue Grey</a>
| <a href="javascript:setTheme('blue')" icon="palette">Blue</a>
| <a href="javascript:setTheme('brown')" icon="palette">Brown</a>
| <a href="javascript:setTheme('cyan')" icon="palette">Cyan</a>
| <a href="javascript:setTheme('deep-orange')" icon="palette">Deep Orange</a>
| <a href="javascript:setTheme('deep-purple')" icon="palette">Deep Purble</a>
| <a href="javascript:setTheme('green')" icon="palette">Green</a>
| <a href="javascript:setTheme('grey')" icon="palette">Grey</a>
| <a href="javascript:setTheme('indigo')" icon="palette">Indigo</a>
| <a href="javascript:setTheme('light-blue')" icon="palette">Light Blue</a>
| <a href="javascript:setTheme('light-green')" icon="palette">Light Green</a>
| <a href="javascript:setTheme('lime')" icon="palette">Lime</a>
| <a href="javascript:setTheme('orange')" icon="palette">Orange</a>
| <a href="javascript:setTheme('pink')" icon="palette">Pink</a>
| <a href="javascript:setTheme('purple')" icon="palette">Purple</a>
| <a href="javascript:setTheme('red')" icon="palette">Red</a>
| <a href="javascript:setTheme('teal')" icon="palette">Teal</a>
| <a href="javascript:setTheme('yellow')" icon="palette">Yellow</a>

<h2>Shadows</h2>

<p>
  There are 9 kinds of shadows pre-defined.
</p>
<div class="shadows">
  <div style="box-shadow: var(--theme-shadow-1dp)">--theme-shadow-1dp</div>
  <div style="box-shadow: var(--theme-shadow-2dp)">--theme-shadow-2dp</div>
  <div style="box-shadow: var(--theme-shadow-3dp)">--theme-shadow-3dp</div>
  <div style="box-shadow: var(--theme-shadow-4dp)">--theme-shadow-4dp</div>
  <div style="box-shadow: var(--theme-shadow-5dp)">--theme-shadow-5dp</div>
  <div style="box-shadow: var(--theme-shadow-6dp)">--theme-shadow-6dp</div>
  <div style="box-shadow: var(--theme-shadow-12dp)">--theme-shadow-12dp</div>
  <div style="box-shadow: var(--theme-shadow-16dp)">--theme-shadow-16dp</div>
  <div style="box-shadow: var(--theme-shadow-24dp)">--theme-shadow-24dp</div>
</div>

<style>
  .color > div {padding: 8px}
  .shadows > div { width: 240px; height: 240px; line-height: 240px; text-align: center; margin: 32px; background-color: #fff; display:inline-block; } 
</style>
