"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientHeight = clientHeight;
exports.clientWidth = clientWidth;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.scrollTop = scrollTop;
exports.documentHeight = documentHeight;
exports.scrollHeight = scrollHeight;
exports.scrollWidth = scrollWidth;
function clientHeight(el) {
  if (el === window) {
    return window.innerHeight;
  }

  return el.clientHeight;
}

function clientWidth(el) {
  if (el === window) {
    return window.innerWidth;
  }

  return el.clientWidth;
}

function innerHeight(el) {
  if (el === window) {
    return window.innerHeight;
  }

  return el.clientHeight;
}

function innerWidth(el) {
  if (el === window) {
    return window.innerWidth;
  }

  return el.clientWidth;
}

function scrollTop(el) {
  if (el === window) {
    return window.scrollY || Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  }

  return el.scrollTop;
}

function documentHeight() {
  return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
}

function scrollHeight(el) {
  // TODO
  if (el === window) {
    return documentHeight();
  }

  return el.scrollHeight;
}

function scrollWidth(el) {
  // TODO
}