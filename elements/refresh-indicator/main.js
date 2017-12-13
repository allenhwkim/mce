import '../ce-polyfill.js';
import {addStyleSheet} from '../util.js';

(function() {
  var SVG = `
  <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 32 32" width="32" height="32">
    <circle cx="16" cy="16" r="11"></circle>
    <polygon points="21.75,16 32.25,16 27,21.25"></polygon>
  </svg>`;

  /**
   * [Material Design Spec](https://material.io/guidelines/patterns/swipe-to-refresh.html#swipe-to-refresh-usage)
   * The refresh indicator appears only in conjunction with a refresh gesture or action. 
   * Syncing does not display a refresh indicator.
   * ### example
   * ```
   * <a-refresh-indicator></a-refresh-indicator>
   * ```
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
      addStyleSheet(this); //id, url
      this.insertAdjacentHTML('beforeend', SVG);
    }

  }
  
  customElements.define('a-refresh-indicator', RefreshIndicator);
})();
