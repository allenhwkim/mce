(function() {
  var SVG = `
  <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 32 32" width="32" height="32">
    <circle cx="16" cy="16" r="11"></circle>
    <polygon points="21.75,16 32.25,16 27,21.25"></polygon>
  </svg>`;

  /**
   * The refresh indicator appears only in conjunction with a refresh gesture or action. 
   * Syncing does not display a refresh indicator.
   * 
   * [Material Design Spec](https://material.io/guidelines/patterns/swipe-to-refresh.html#swipe-to-refresh-usage)
   * ### example
   * ```
   * <a-refresh-indicator></a-refresh-indicator>
   * ```
   *
   * <p data-height="300" data-theme-id="32189" data-slug-hash="BJmaeb" data-default-tab="html,result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
   *
   * 
   * ### `refresh-indicator` Style Classes
   *  |name||description|
   *  |---|---|
   *  |no-border| Without circle
   *  |dark-bg| Dark background circle
   *  |loading| Spining Animated Icon
   *  |mini| Smaller Icon
   * 
   */
  class RefreshIndicator extends HTMLElement {

    connectedCallback() {
      this.insertAdjacentHTML('beforeend', SVG);
    }

  }
  
  customElements.define('a-refresh-indicator', RefreshIndicator);
})();
