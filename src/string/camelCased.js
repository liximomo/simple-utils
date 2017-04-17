import type from '../type';

export default function camelCased(str) {
 return str.replace(/_([a-z])/g, g => g[1].toUpperCase());
}

export function camelCasedKeys(obj) {
  return Object.keys(obj).reduce((camelCasedObject, key) => {
    let value = obj[key];
    if (type.isObject(value)) {
      value = camelCasedKeys(value)
    }
    camelCasedObject[camelCased(key)] = value;
    return camelCasedObject;
  }, {});
}
