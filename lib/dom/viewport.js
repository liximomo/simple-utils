"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewPortDimension = getViewPortDimension;
function getViewPortDimension() {
  return {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  };
}