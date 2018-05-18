/**
 * Returns promise when the given meets
 * @example
 *   waitUntil(_ => window.google.map)
 */
export function waitUntil(condition) {
  if (typeof condition !== 'function') {
    console.error('Invalid condition for waitUntil. It must be a function', condition);
    throw "invalid condition";
  }
  return new Promise(function(resolve, reject) {
    (function __wait(timeElapsed=0, timeout=5000) {
      let result = condition();
      if (result) {
        return resolve(result);
      } else if (timeElapsed > timeout)  {
        return reject('timeout');
      }
      setTimeout(function() {
        __wait(timeElapsed+100, timeout);
      }, 100);
    })();
  });
}

/** 
 * callback for window resize handler
 * this handler makes app bar, nav drawer, bottom bar behaves differently by setting mce-desktop
 * @example
 *   window.ce = {resizeHandler: windowResizeHandler};
 *   window.addEventListener('resize', window.ce.resizeHandler);
 *   window.addEventListener('load', window.ce.resizeHandler);v
 */
export function windowResizeHandler() {
  if (window.innerWidth >= 1024) {
    document.body.classList.add('mce-desktop');
  } else {
    document.body.classList.remove('mce-desktop');
  }
}

/**
 * common function for Javascript animation
 * @example
 *   animate({
 *    duration: 450,
 *    timing: function(timeFraction) {
 *      return 1 - Math.sin(Math.acos(timeFraction));
 *    },
 *    draw: function(progress) {
 *      indicatorEl.style.left = indicatorFromPct + (progress*move) + '%';
 *    }
 *  });
 */
export function animate({duration, draw, timing}) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
