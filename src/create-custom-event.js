/**
 * IE11 Compatible CustomEvent
 * @example:
 *   const myEvent = createCustomEvent('agent-live-chat', {bubbles: true});
 *   element.dispatchEvent(myEvent);
 */
export function createCustomEvent(eventName, options) {
  let event;
  if (typeof(CustomEvent) === 'function') {
    event = new CustomEvent(eventName, options);
  }  else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(
      eventName,
      options.bubbles,
      options.cancelable,
      options.detail
    );
  }
  return event;
}
