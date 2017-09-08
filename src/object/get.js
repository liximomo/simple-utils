export default function get(obj, property, altertive) {
  const keyPath = property.split('.').reverse();
  let key;
  let value = obj;
  while (keyPath.length > 0 && value) {
    key = keyPath.pop();
    value = value[key];
  }

  return value !== undefined ? value : altertive;
}
