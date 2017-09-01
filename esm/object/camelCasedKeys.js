import type from '../type';
import camelCased from '../string/camelCased';

export default function camelCasedKeys(obj) {
  var includeArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (type.isArray(obj)) {
    return obj.map(camelCasedKeys);
  }

  return Object.keys(obj).reduce(function (camelCasedObject, key) {
    var value = obj[key];
    if (type.isObject(value)) {
      value = camelCasedKeys(value);
    } else if (includeArray && type.isArray(value)) {
      value = camelCasedKeys(value);
    }

    camelCasedObject[camelCased(key)] = value;
    return camelCasedObject;
  }, {});
}