"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fill;
function fill(array, value) {
  for (var i = 0; i < array.length; i++) {
    array[i] = value;
  }
  return array;
}