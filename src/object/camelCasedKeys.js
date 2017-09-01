import type from '../type';
import camelCased from '../string/camelCased';

export default function camelCasedKeys(obj, includeArray = false) {
  if (type.isArray(obj)) {
    return obj.map(camelCasedKeys);
  }

  return Object.keys(obj).reduce((camelCasedObject, key) => {
    let value = obj[key];
    if (type.isObject(value)) {
      value = camelCasedKeys(value)
    } else if (includeArray && type.isArray(value)) {
      value = camelCasedKeys(value)
    }

    camelCasedObject[camelCased(key)] = value;
    return camelCasedObject;
  }, {});
}
