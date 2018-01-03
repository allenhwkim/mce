import '../mce-polyfill.js';
import {addStyleSheet} from '../mce-util.js';

(function() {
  /**
   * [Material Design Spec.](https://material.io/guidelines/components/grid-lists.html#grid-lists-specs)
   * Grid lists are an alternative to standard list views.
   *
   * ### Example
   * ```
   * <a-grid-list>
   *   <div>
   *     <img src="nature2.jpg">
   *     <div class="text-with-icon">
   *       <h1>Single Line</h1>
   *     </div>
   *   </div>
   *   <div>
   *     <img src="nature2.jpg">
   *     <div class="text-with-icon">
   *       <h1>Single Line</h1>
   *     </div>
   *   </div>
   * </a-grid-list>
   * ```
   *
   * ### Child element of `a-grid-list` style classes
   *  |name|description|
   *  |---|---|
   *  |text-with-icon| A shady bottom section with text and an icon
   *  |text| Text within text-with-icon section 
   *  |icon| An icon within text-with-icon section
   * 
   */
  class GridList extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this);
    }
  }
  
  customElements.define('a-grid-list', GridList);
})();
