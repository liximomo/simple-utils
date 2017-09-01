'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomRange = randomRange;
exports.randomSerial = randomSerial;
function randomRange(low, high) {
  // eslint-disable-next-line no-mixed-operators
  return Math.floor(low + Math.random() * (high - low));
}

function randomSerial(length) {
  var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return new Array(length).fill('').map(function (_) {
    return chars[randomRange(0, chars.length)];
  }).join('');
}