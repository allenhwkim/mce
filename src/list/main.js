(function() {
  /**
   * Lists present multiple line items vertically as a single continuous element.
   *
   * [Material Design Spec.](https://material.io/guidelines/components/lists.html#lists-actions)
   * 
   * ## Examples
   *
   * ```
   * <mce-list>
   *   <ol>
   *     <li>
   *       <div class="mce-icon">
   *         <mce-icon class="mce-circle">folder</mce-icon>
   *       </div>
   *       <span>Directory</span>
   *       <mce-icon>info</mce-icon>
   *     </li>
   *     <li>
   *       <div class="mce-icon">
   *         <mce-icon class="mce-circle">hotel</mce-icon>
   *       </div>
   *       <span>Hotel</span>
   *       <mce-icon>info</mce-icon>
   *     </li>
   *   </ol>
   * </mce-list>
   * ```
   *
   * <p datmce-height="300" datmce-theme-id="32189" datmce-slug-hash="BJmaeb" datmce-default-tab="html,result" datmce-user="allenhwkim" datmce-embed-version="2" datmce-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
   *
   * 
```
   */
  class List extends HTMLElement {
    connectedCallback() {
    }
  }
  
  customElements.define('mce-list', List);
})();
