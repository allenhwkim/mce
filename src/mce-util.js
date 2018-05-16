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

/**
 * common function for Javascript animation
 */
export function animate({duration, draw, timing}) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction)

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

/** 
 * set the given element tabbable by adding tabindex, and click/ENTER event
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

export function getScopedObj(scope, str) {
  let obj=scope, arr;

  try {
    arr = str.split(/[\[\]\.]/) // split by [,],.
      .filter(el => el)             // filter out empty one
      .map(el => el.replace(/^['"]+|['"]+$/g, '')); // remove string quotation
    arr.forEach(el => obj = obj[el])
  } catch(e) {
    obj = null;
  }
  
  return obj;
}

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

export function windowResizeHandler() {
  if (window.innerWidth >= 1024) {
    document.body.classList.add('mce-desktop');
  } else {
    document.body.classList.remove('mce-desktop');
  }
}