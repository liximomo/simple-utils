'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDOMEvent = addDOMEvent;
exports.on = on;
function addDOMEvent(html_element, event_name, event_function, useCapture) {
  if (html_element.addEventListener) {
    html_element.addEventListener(event_name, event_function, useCapture);
    return;
  }

  // Internet Explorer
  html_element.attachEvent('on' + event_name, function (_) {
    event_function.call(html_element);
  });
}

function on(elSelector, eventName, selector, handler) {
  var useCapture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  var elements = null;
  if (typeof elSelector === 'string') {
    elements = document.querySelectorAll(elSelector);
  } else {
    elements = [].concat(elSelector);
  }
  var addEventListener = function addEventListener(element) {
    element.addEventListener(eventName, function (e) {
      for (var target = e.target; target && target !== this; target = target.parentNode) {
        // loop parent nodes from the target to the delegation node
        var match = false;
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