'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = params;
function params(obj) {
  return Object.keys(obj)
  // eslint-disable-next-line eqeqeq
  .filter(function (key) {
    return obj[key] != undefined;
  }).map(function (key) {
    return key + '=' + encodeURIComponent(obj[key]);
  }).join('&');
};