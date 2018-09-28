/**
 * Allen's Custom Element Polyfill for better performance
 */
import 'whatwg-fetch';
import cssVars from 'css-vars-ponyfill';
cssVars({});

(function(){
  let __customElements = {};
  let debug = !!window.location.search.match(/\?debug=true/);

  // common polyfill Object.values(obj)
  if (!Object.values) { // Safari does not have this. hmm
    Object.values = function(obj) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    };
  };

  // common polyfill el.matches(selector)
  if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

  // common polyfill el.closest(selector)
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement;
      } while (el !== null); 
      return null;
    };
  }

  // common polyfill el.constructor.name for IE11
  const getClassName = function(obj) {
    if (obj.constructor.name) return obj.constructor.name;

    // Chrome "function HTMLButtonElement() { [native code] }"
    var funcMatch = obj.constructor.toString().match(/^\s*function\s*(\S+)\s*\(/);
    // IE11   "[object HTMLButtonElement]"
    var objMatch = obj.constructor.toString().match(/\[object\s(\S+)\]/);

    return objMatch ? objMatch[1] : funcMatch[1];
  };


  // change a HTMLElement to a custom element by applying its prototype
  let applyCustomElement = function(el, klass) {
    if (el.tagName.match(/-/)) {
      // el.__proto__ = klass.prototype;
      Object.setPrototypeOf(el, klass.prototype);
      el._init && el._init();
      setTimeout(function(){
        el.connectedCallback && el.connectedCallback();
      });
    }
  };

  // when document content is loaded, it checks all custom element and initialized it
  let checkAndApplyAllCustomElements = function(el) {
    debug && console.log('checkAndApplyAllCustomElements..........', el);
    for(let name in __customElements) {
      debug && console.log('checkAndApplyAllCustomElements..........', el.querySelectorAll(name));
      Array.from(el.querySelectorAll(name)).forEach(function(el) {
        if (getClassName(el).match(/^HTML\w*Element$/)) {
          applyCustomElement(el, __customElements[name]);
        }
      });
    }
  };

  let checkAndApplyCustomElement = function(node) {
    let nodeName = node.nodeName.toLowerCase();
    if (node.nodeType === Node.ELEMENT_NODE && 
      __customElements[nodeName] &&                      // defined as a custom element
      getClassName(node).match(/^HTML\w*Element$/)) { // and not yet initialized
      debug && console.log('observer....................... 2', node);
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
            debug && console.log('observer....................... 1', node);
            Array.from(node.querySelectorAll('*')).forEach(function(el) {
              checkAndApplyCustomElement(el);
            });
          }
        });

        Array.from(mutationRecord.removedNodes).forEach(function(node) {
          //process children of the node 
          node.disconnectedCallback && node.disconnectedCallback();

          //process children of the node 
          if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.querySelectorAll('*')).forEach(function(el) {
              el.disconnectedCallback && el.disconnectedCallback();
            });
          }
        });
      }
    });
  });

  // polyfill window.customElements(obj)
  if (!window.customElements) {
    window.customElements = { 
      define: function(name, klass) {
        __customElements[name] = klass;
        // this is called before or after window.onload. Define any tag found in HTML
        // this also may cause missing elements dynamically loaded before MutationObserver kicks in
        debug && console.log('CustomElements.define.......................');
        Array.from(document.querySelectorAll(name)).forEach(function(el) {
          applyCustomElement(el, __customElements[name]);
        });
      }
    };

    window.addEventListener('load', function() {
      let options = {childList: true, subtree: true};
      observer.observe(document.body, options);
      checkAndApplyAllCustomElements(document.body);
    });
  }

})();
