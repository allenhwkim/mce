( function() {
  /**
   * Expansion panels contain creation flows and allow lightweight editing of an element.
   *
   * [Material Design Spec.](https://material.io/guidelines/components/expansion-panels.html#expansion-panels-specs)
   *
   * ### example
   * ```
   *  <an-expansion-panel>
   *    <div class="title">
   *      <h1>Trip name</h1>
   *      <div>Carribean Cruise</div>
   *    </div>
   *    <div class="text">
   *      Text: 14sp Left and right padding: 16dp Top padding: 16dp or 24dp (when a primary title is present) Bottom padding: 16dp (if there are additional actions or supporting text) or 24dp (if there are no actions or supporting text)
   *    </div>
   *  </an-expansion-panel>
   * ```
   *
   * <p data-height="300" data-theme-id="32189" data-slug-hash="BJmaeb" data-default-tab="html,result" data-user="allenhwkim" data-embed-version="2" data-pen-title="mce template" class="codepen">See the Pen <a href="https://codepen.io/allenhwkim/pen/PEJKKo/">mce template</a> by Allen kim (<a href="https://codepen.io/allenhwkim">@allenhwkim</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
   *
   *
   * ### `an-expansion-panel` elememe style classes
   *  |name|description|
   *  |---|---|
   *  |expanded|  Indicates that the expansion-panel is expanded. Without this, it's collapsed.
   * 
   * 
   * ### Child element of `an-expansion-panel` style classes
   *  |name|description|
   *  |---|---|
   *  |title|  container class of title section. This is visible when it is collapsed.
   *  |text|  container class of text section. This is collapsed when not expanded.
   *  |actions|  container class of actions section. This is collapsed when not expanded.
   * 
   */
  class ExpansionPanel extends HTMLElement {
    connectedCallback() {
      setTimeout(_ => {  //this.querySelector takes time
        let titleEl = this.querySelector('.title');
        titleEl.addEventListener('click', this._showThisPanelOnly.bind(this));
      });
    }

    _showThisPanelOnly(event) {
      Array.from(document.querySelectorAll('an-expansion-panel')).forEach(panelEl => {
        if (panelEl.isSameNode(this)) {
          panelEl.classList.toggle('expanded');
        } else {
          panelEl.classList.remove('expanded');
        }
      })
    }
  }
  
  customElements.define('an-expansion-panel', ExpansionPanel);
})();
