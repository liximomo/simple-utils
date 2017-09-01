export default function params(obj) {
  return Object.keys(obj)
    .filter(key => obj[key] !== undefined)
    .map(key => `${key}=${encodeURIComponent(obj[key])}`)
    .join('&');
};
