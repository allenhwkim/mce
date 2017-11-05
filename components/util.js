export function addStyleSheet(id, url) {
  if (!document.querySelector(`#ce-core-style, #${id}`)) {
    let linkEl = document.createElement('link');
    linkEl.setAttribute('id', id);
    linkEl.setAttribute('rel', "stylesheet");
    linkEl.setAttribute('href', url);
    document.head.appendChild(linkEl); 
  }
}

export function observeAttrChange(el, callback) {
  var observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes') {
        let newVal = mutation.target.getAttribute(mutation.attributeName);
        callback(mutation.attributeName, newVal);
      }
    });
  });
  observer.observe(el, {attributes: true});
  return observer;
}
