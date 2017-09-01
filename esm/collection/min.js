export default function min(items, key) {
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