"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = concat;
function concat(ori, target) {
  if (target === undefined || !target.length) {
    return ori;
  }

  return ori.concat(target);
}