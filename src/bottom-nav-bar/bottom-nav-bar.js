import {windowResizeHandler} from '../utils/index.js';

/**
 * Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.
 *
 * [Material Design Spec.](https://material.io/guidelines/components/bottom-navigation.html#bottom-navigation-specs)
 * 
 * ## Example
 * ```
 * <mce-bottom-nav-bar>
 *   <mce-nav-item icon="favorite">Favourite</mce-nav-item>
 *   <mce-nav-item icon="search" class="mce-disabled">Disabled</mce-nav-item>
 *   <mce-nav-item icon="alarm">Alarm</mce-nav-item>
 *   <mce-nav-item icon="music_note">Music</mce-nav-item>
 * </mce-bottom-nav-bar>
 * ```   
 * 
 * <iframe height='265' scrolling='no' title='mce a-bottom-bar' src='//codepen.io/allenhwkim/embed/aEVowx/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/allenhwkim/pen/aEVowx/'>mce a-bottom-bar</a> by Allen kim (<a href='https://codepen.io/allenhwkim'>@allenhwkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
 *
 * ### `mce-bottom-nav-bar` style classes
 *  |name|description|
 *  |---|---|
 *  |mce-dark-bg| dark background bottom bar
 */
export class BottomNavBar extends HTMLElement {
  connectedCallback() {
    if (window.ce && window.ce.resizeHandler) {} else {
      window.ce = {resizeHandler: windowResizeHandler};
      window.addEventListener('resize', window.ce.resizeHandler);
            
      const func = window.innerWidth >= 1024 ? 'add' : 'remove';
      document.body.classList[func]('mce-desktop');
    }
  }
}

customElements.define('mce-bottom-nav-bar', BottomNavBar);
