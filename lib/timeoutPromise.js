'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = timeoutPromise;
function TimeoutError(message) {
  this.name = 'TimeoutError';
  this.message = message || '';
}
TimeoutError.prototype = Error.prototype;

function timeoutPromise(promise, time) {
  var timeout = false;

  function creatTimeout(time) {
    return new Promise(function (_) {
      setTimeout(function () {
        timeout = true;
      }, time);
    });
  }

  return Promise.race([promise, creatTimeout(time)]).then(function (result) {
    if (timeout) {
      throw new TimeoutError();
    }
    return result;
  });
}