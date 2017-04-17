export default function min(items, key) {
  let _items;
  if (typeof key === 'function') {
    _items = items.map(key);
  } else {
    _items = items.map(item => (key ? item[key] : item));
  }
  return Math.min.apply(null, _items);
}
