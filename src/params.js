export default function params(obj) {
  return Object.keys(obj)
    // eslint-disable-next-line eqeqeq
    .filter(key => obj[key] != undefined)
    .map(key => `${key}=${encodeURIComponent(obj[key])}`)
    .join('&');
};
