"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = delay;
exports.delayPromise = delayPromise;
function delay(func, delaySpan) {
  setTimeout(function () {
    return func();
  }, delaySpan);
}

function delayPromise(promise, delaySpan) {
  var delayd = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(null);
    }, delaySpan);
  });

  return Promise.all([promise, delayd]).then(function (resolved) {
    return resolved[0];
  });
}