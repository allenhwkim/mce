/** 
 * set the given element tabbable by adding tabindex, and click/ENTER event
 * @example
 *   setTabbable(el, _ => this.inputEl.click());
 */
export function setTabbable(el, fn) {
  if (el.getAttribute('tabindex')) {
    el.addEventListener('keypress', function(event) {
      if (event.key === ' ' || event.key === 'Enter') {
        fn && fn();
        event.preventDefault();
      }
    });
  }
}

/** 
 * set innerHTML of the element
 * it also executes <script>...</script> in addition to setting HTML
 * @example
 *   set innerHTML(el, '<script>alert(1)</script>')
 */
export function setInnerHTML(elm, html) {
  elm.innerHTML = html;
  Array.from(elm.querySelectorAll("script")).forEach(function(el) {

    let newEl = document.createElement("script");
    Array.from(el.attributes).forEach(function(el) { 
      newEl.setAttribute(el.name, el.value);
    });

    newEl.appendChild(document.createTextNode(el.innerHTML));
    el.parentNode.replaceChild(newEl, el);
  });
}

