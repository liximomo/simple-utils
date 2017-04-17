'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = max;
function max(items, key) {
  var _items = void 0;
  if (typeof key === 'function') {
    _items = items.map(key);
  } else {
    _items = items.map(function (item) {
      return key ? item[key] : item;
    });
  }
  return Math.max.apply(null, _items);
}