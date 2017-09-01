export default function params(obj) {
  return Object.keys(obj).filter(function (key) {
    return obj[key] !== undefined;
  }).map(function (key) {
    return key + '=' + encodeURIComponent(obj[key]);
  }).join('&');
};