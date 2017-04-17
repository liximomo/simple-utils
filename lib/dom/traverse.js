"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseUp = traverseUp;
function traverseUp(current, testElementFunction) {
  if (!current) {
    return false;
  }

  do {
    if (current.nodeType === 1) {
      if (testElementFunction(current)) {
        return current;
      }
    }

    current = current.parentNode; // eslint-disable-line no-param-reassign
  } while (current);

  return false;
}