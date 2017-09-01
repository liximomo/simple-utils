export function addDOMEvent(html_element, event_name, event_function, useCapture) {
  if (html_element.addEventListener) {
    html_element.addEventListener(event_name, event_function, useCapture);
    return;
  }

  // Internet Explorer
  html_element.attachEvent(`on${event_name}`, _ => { event_function.call(html_element); });
}

export function on(elSelector, eventName, selector, handler, useCapture = false) {
  let elements = null;
  if (typeof elSelector === 'string') {
    elements = document.querySelectorAll(elSelector);
  } else {
    elements = [].concat(elSelector);
  }
  const addEventListener = function(element) {
    element.addEventListener(eventName, function(e) {
      for (let target = e.target; target && target !== this; target = target.parentNode) {
        // loop parent nodes from the target to the delegation node
        let match = false;
        if (target.matches) {
          match = target.matches(selector);
        } else if (target.webkitMatchesSelector) {
          match = target.webkitMatchesSelector(selector);
        } else if (target.mozMatchesSelector) {
          match = target.mozMatchesSelector(selector);
        } else if (target.msMatchesSelector) {
          match = target.msMatchesSelector(selector);
        } else if (target.oMatchesSelector) {
          match = target.oMatchesSelector(selector);
        }
        if (match) {
          handler.call(target, e);
          break;
        }
      }
    }, useCapture);
  };
  Array.prototype.forEach.call(elements, addEventListener);
}
