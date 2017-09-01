"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.width = width;
exports.height = height;
exports.scrollTop = scrollTop;
/* eslint-disable no-nested-ternary */
function width() {
  return screen.width > 0 ? window.innerWidth >= screen.width || window.innerWidth == 0 ? screen.width : window.innerWidth : window.innerWidth;
}

function height() {
  return screen.height > 0 ? window.innerHeight >= screen.height || window.innerHeight == 0 ? screen.height : window.innerHeight : window.innerHeight;
}

function scrollTop() {
  return window.scrollY || document.documentElement.scrollTop;
}