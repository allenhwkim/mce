import {parseAttributes} from '../utils/index.js';
import {createCustomEvent} from '../create-custom-event.js';

/**
 * Render element only if the element comes into the viewport
 * Then, fires `inview` and `outview` events when in/out of viewport
 *
 * ### example
 * ```
 *  <mce-inview on-inview="inview(event)" on-outview="outview(event)" 
     root="body" root-margin="10px 20px 30px 40px" threshold="[.1,.2,.3,.4,.5]">
 *    <template>
 *      <div class="comment">This image is only rendered when this is in viewport.</div>
 *      <img src="https://picsum.photos/200/300/?random" />
 *    </template>
 *  </mce-inview>
 * ```
 *
 * ### Attributes
 *
 *  |name       |value     |description                        |
 *  |-----------|----------|-----------------------------------|
 *  |root       |selector  | The element that is used as the viewport for checking visiblity of the target. 
 *  |margin     |string    | Margin around the root. e.g. 10px 20px 30px 40px
 *  |threshold  |array     | percentage of the target's visibility the observer's callback should be executed. 
 *  |on-inview  |expression| The given expression will be run when this element is in viewport e.g. on-inview="inview(event)"
 *  |on-outview |expression| The given expression will be run when outview event is fired e.g. on-inview="inview(event)"
 *
 * ### `mce-menu` Child Element Attributes 
 *  |name|value|description|
 *  |---|---|---|
 *  |template| HTMLTemplateElement| contains HTML entities when it comes into the viewport
 *  
 */
export class Inview extends HTMLElement {
  connectedCallback() {
    this.options = {threshold: [.1, .2, .3, .4, .5, .6, .7, .8]}; // default IntersetionObserver options
    this.events = {};
    this.once80PctVisible = false;
    this.templateActivated = false;
    this.initialize();
  }

  initialize(){
    let parsedAttrs = parseAttributes(this.attributes);
    this.options = Object.assign({}, this.options, parsedAttrs.options);
    this.events = parsedAttrs.events;

    //set Intersection Observer
    this.observer = new IntersectionObserver(this.__handleIntersect.bind(this), this.options);
    this.observer.observe(this);

    this.events.inview = this.events.inview || this.__defaultInviewHandler;
    for(let eventName in this.events) {
      this.addEventListener(eventName, this.events[eventName]);
    }
  }

  /** fires (inview) and (notInview) events when this component is visible or not visible  */
  __handleIntersect(entries, observer) {
    entries.forEach(entry => {
      let detail = {entry};
      if (entry.isIntersecting) {
        this.__activateTemplate();
        this.dispatchEvent(createCustomEvent('inview', {detail}));
      } else {
        this.dispatchEvent(createCustomEvent('outview', {detail}));
      }
    });
  }

  __activateTemplate() {
    if (this.templateActivated) return;

    const t = this.querySelector('template');
    const clone = document.importNode(t.content, true);
    this.appendChild(clone);

    this.templateActivated = true;
  }

  /**
   * default intersection handler, which sets blur dependes on intersection ratio
   */
  __defaultInviewHandler(event) {
    if (this.once80PctVisible)        return false;
    const entry = event.detail.entry;

    if (entry.intersectionRatio < 0.8) {
      const opacity = entry.intersectionRatio * (1 / 0.8);
      const blur = 20 - Math.floor(entry.intersectionRatio * 10) * 4;
      const filter = `blur(${blur}px)`;
      // Object.assign(entry.target.style, {opacity, filter});
      Object.assign(entry.target.style, {opacity});
    } else {
      entry.target.style.opacity = 1;
      entry.target.style.filter = 'unset';

      this.once80PctVisible = true;
    }
  }

}


customElements.define('mce-inview', Inview);
