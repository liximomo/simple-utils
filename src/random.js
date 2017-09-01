export function randomRange(low, high) {
  // eslint-disable-next-line no-mixed-operators
  return Math.floor(low + Math.random() * (high - low));
}

export function randomSerial(length, chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  return new Array(length).fill('').map(_ => chars[randomRange(0, chars.length)]).join('');
}
