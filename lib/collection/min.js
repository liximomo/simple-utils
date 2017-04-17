'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = min;
function min(items, key) {
  var _items = void 0;
  if (typeof key === 'function') {
    _items = items.map(key);
  } else {
    _items = items.map(function (item) {
      return key ? item[key] : item;
    });
  }
  return Math.min.apply(null, _items);
}