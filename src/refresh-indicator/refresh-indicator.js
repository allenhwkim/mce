const SVG = `
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
export class RefreshIndicator extends HTMLElement {

  connectedCallback() {
    this.insertAdjacentHTML('beforeend', SVG);
  }

}

customElements.define('mce-refresh-indicator', RefreshIndicator);
