function createParams(key, value) {
  return `${key}=${encodeURIComponent(value)}`;
}

export default function params(obj) {
  return (
    Object.keys(obj)
      // eslint-disable-next-line eqeqeq
      .filter(key => obj[key] != undefined)
      .map((key) => {
        const value = obj[key];
        if (value instanceof Array) {
          return value.map(val => createParams(key, val)).join('&');
        }

        return createParams(key, value);
      })
      .join('&')
  );
}
