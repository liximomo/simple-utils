"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eq = eq;
exports.least = least;
exports.most = most;
exports.between = between;
// selector must be a simple selector
function eq(selector, n) {
  return selector + ":first-child:nth-last-child(n+" + n + ")," + (selector + ":first-child:nth-last-child(n+" + n + ") ~ " + selector);
}

function least(selector, n) {
  return selector + ":first-child:nth-last-child(n+" + n + ")," + (selector + ":first-child:nth-last-child(n+" + n + ") ~ " + selector);
}

function most(selector, n) {
  return selector + ":first-child:nth-last-child(-n+" + n + ")," + (selector + ":first-child:nth-last-child(-n+" + n + ") ~ " + selector);
}

function between(selector, l, r) {
  return selector + ":first-child:nth-last-child(n+" + l + "):nth-last-child(-n+" + r + ")," + (selector + ":first-child:nth-last-child(n+" + l + "):nth-last-child(-n+" + r + ") ~ " + selector);
}