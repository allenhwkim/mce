( function() {
  /**
   * Expansion panels contain creation flows and allow lightweight editing of an element.
   *
   * [Material Design Spec.](https://material.io/guidelines/components/expansion-panels.html#expansion-panels-specs)
   *
   * ### example
   * ```
   *  <mce-expansion-panel>
   *    <div class="mce-title">
   *      <h1>Trip name</h1>
   *      <div>Carribean Cruise</div>
   *    </div>
   *    <div class="mce-text">
   *      Text: 14sp Left and right padding: 16dp Top padding: 16dp or 24dp (when a primary title is present) Bottom padding: 16dp (if there are additional actions or supporting text) or 24dp (if there are no actions or supporting text)
   *    </div>
   *  </mce-expansion-panel>
   * ```
   *
   * <p data-height="600" data-theme-id="32189" data-slug-hash="RxxrRJ" data-default-tab="result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
   *
   *
   * ### `mce-expansion-panel` elememe style classes
   *  |name|description|
   *  |---|---|
   *  |mce-expanded|  Indicates that the expansion-panel is expanded. Without this, it's collapsed.
   * 
   * 
   * ### Child element of `mce-expansion-panel` style classes
   *  |name|description|
   *  |---|---|
   *  |mce-title|  container class of title section. This is visible when it is collapsed.
   *  |mce-text|  container class of text section. This is collapsed when not expanded.
   *  |mce-actions|  container class of actions section. This is collapsed when not expanded.
   * 
   */
  class ExpansionPanel extends HTMLElement {
    connectedCallback() {
      setTimeout(_ => {  //this.querySelector takes time
        let titleEl = this.querySelector('.mce-title');
        titleEl && titleEl.addEventListener('click', this._showThisPanelOnly.bind(this));
      });
    }

    _showThisPanelOnly(event) {
      Array.from(document.querySelectorAll('mce-expansion-panel')).forEach(panelEl => {
        if (panelEl.isSameNode(this)) {
          panelEl.classList.toggle('mce-expanded');
        } else {
          panelEl.classList.remove('mce-expanded');
        }
      })
    }
  }
  
  customElements.define('mce-expansion-panel', ExpansionPanel);
})();
