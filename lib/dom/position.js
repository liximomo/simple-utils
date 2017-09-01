"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOffset = getOffset;
function getOffset(el, relative) {
  var x = 0;
  var y = 0;
  while (el && el !== relative && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    x += el.offsetLeft - el.scrollLeft;
    y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: y, left: x };
}