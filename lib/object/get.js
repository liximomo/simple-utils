'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;
function get(obj, property, altertive) {
  var keyPath = property.split('.').reverse();
  var key = void 0;
  var value = obj;
  while (keyPath.length > 0 && value) {
    key = keyPath.pop();
    value = value[key];
  }

  return value !== undefined ? value : altertive;
}