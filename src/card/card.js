/**
 * A card is a sheet of material that serves as an entry point to more detailed information. 
 *
 * [Material Design Spec](https://material.io/guidelines/components/cards.html#cards-content-blocks)
 * 
 * ### example
 * ```
 * <mce-card>
 *   <div class="mce-title">
 *     <h1>Title Goes Here</h1>
 *     <div class="mce-subtitle">Subtitle here</div>
 *   </div>
 *   <div class="mce-text">
 *     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
 *     in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 *   </div>
 *   <div class="mce-actions">
 *     <a href="javascript:void(0)">ACTION 1</a>
 *     <a href="javascript:void(0)">ACTION 2</a>
 *   </div>
 * </mce-card>
 * ```
 * 
 * <iframe height='265' scrolling='no' title='mce card' src='//codepen.io/allenhwkim/embed/ZvaEez/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/ZvaEez/'>mce card</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 *
 * ### `mce-card` elememe style classes
 *  |name|description|
 *  |---|---|
 *  |mce-picked-up| A raised card. Click a card on this document to see the effect. 
 * 
 * 
 * ### Child element of `mce-card` style classes
 *  |name|description|
 *  |---|---|
 *  |mce-title| Showing a raised card. click a card on this document to see the effect.
 *  |mce-subtitle| Card subtitle with the font size of 14px
 *  |mce-subtitle| Card subtitle with the font size of 14px
 *  |mce-media| An image or video with 16x9 aspect ratio
 *  |mce-actions| Action buttons section with icon, button or a link 
 *  |mce-text| Action buttons section with icon, button or a link
 */
export class Card extends HTMLElement {
  connectedCallback() {
  }
}

customElements.define('mce-card', Card);
