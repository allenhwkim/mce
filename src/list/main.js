import '../mce-polyfill.js';
import '../icon/main.js';
import {addStyleSheet} from '../mce-util.js';

(function() {
  /**
   * Material Design Spec.
   * Lists present multiple line items vertically as a single continuous element.
   * 
   * ## Examples
   * ```
   * <a-list>
   *   <ol>
   *     <li>
   *       <div class="icon">
   *         <an-icon class="circle">folder</an-icon>
   *       </div>
   *       <span>Directory</span>
   *       <an-icon>info</an-icon>
   *     </li>
   *     <li>
   *       <div class="icon">
   *         <an-icon class="circle">hotel</an-icon>
   *       </div>
   *       <span>Hotel</span>
   *       <an-icon>info</an-icon>
   *     </li>
   *   </ol>
   * </a-list>
   * ```
   * 
   * ### `a-list` child elements
   *  a list, which is ul or ol
   *  `an-icon` will be right-positioned
   * 
   * ### Child element of `a-list` style classes
   *  |name|description|
   *  |---|---|
   *  |icon| Icon on the left or right side. 
   * 
```
   */
  class List extends HTMLElement {
    connectedCallback() {
      addStyleSheet(this); //id, url
    }
  }
  
  customElements.define('a-list', List);
})();
