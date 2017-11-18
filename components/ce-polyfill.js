/**
 * Custom Element Polyfill
 * It's Allen's customElemnts polyfill for better performance
 */
(function(){
  let __customElements = {};

  // change a HTMLElement to a custom element by applying its prototype
  let applyCustomElement = function(el, klass) {
    if (el.tagName.match(/-/)) {
      // el.__proto__ = klass.prototype;
      Object.setPrototypeOf(el, klass.prototype);
      el._init && el._init();
      setTimeout(function(){
        el.connectedCallback && el.connectedCallback();
      })
    }
  };

  // window.customElement equivalent
  let CustomElements = { 
    define: function(name, klass) {
      __customElements[name] = klass;
      // this is called before or after window.onload. Define any tag found in HTML
      // this also may cause missing elements dynamically loaded before MutationObserver kicks in
      Array.from(document.querySelectorAll(name)).forEach(function(el) {
        applyCustomElement(el, __customElements[name]);
      });
    }
  }

  // window.customElement equivalent
  let checkAndApplyAllCustomElements = function(el) {
    for(let name in __customElements) {
      Array.from(el.querySelectorAll(name)).forEach(function(el) {
        if (el.constructor.name === 'HTMLElement') {
          applyCustomElement(el, __customElements[name]);
        }
      });
    }
  };

  let checkAndApplyCustomElement = function(node) {
    let nodeName = node.nodeName.toLowerCase();
    if (__customElements[nodeName] && node.constructor.name === 'HTMLElement') {
      applyCustomElement(node, __customElements[nodeName]);
    }
  };


  let observer = new MutationObserver(function(mutationRecords) {

    mutationRecords.forEach(function(mutationRecord) {
      if (mutationRecord.type == 'childList') { // e.g. attribures, characterData
        Array.from(mutationRecord.addedNodes).forEach(function(node) {
          //initialize node itself if a custom element 
          checkAndApplyCustomElement(node);

          //initialize children of the node 
          if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.querySelectorAll('*')).forEach(function(el) {
              checkAndApplyCustomElement(el);
            })
          }
        });

        Array.from(mutationRecord.removedNodes).forEach(function(node) {
          //process children of the node 
          node.disconnectedCallback && node.disconnectedCallback();

          //process children of the node 
          if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.querySelectorAll('*')).forEach(function(el) {
              el.disconnectedCallback && el.disconnectedCallback();
            })
          }
        });
      }
    })
  });

  if (!window.customElements) {
    window.customElements = CustomElements;
    window.addEventListener('load', function() {
      let options = {childList: true, subtree: true};
      observer.observe(document.body, options);
      checkAndApplyAllCustomElements(document.body);
    });
  }

  if (!Object.values) { // Safari does not have this. hmm
    Object.values = function(obj) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    }
  };
})();
