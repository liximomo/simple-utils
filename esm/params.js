function createParams(key, value) {
  return key + '=' + encodeURIComponent(value);
}

export default function params(obj) {
  return Object.keys(obj)
  // eslint-disable-next-line eqeqeq
  .filter(function (key) {
    return obj[key] != undefined;
  }).map(function (key) {
    var value = obj[key];
    if (value instanceof Array) {
      return value.map(function (val) {
        return createParams(key, val);
      }).join('&');
    }

    return createParams(key, value);
  }).join('&');
}