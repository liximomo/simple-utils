function TimeoutError(message) {
  this.name = 'TimeoutError';
  this.message = message || '';
}
TimeoutError.prototype = Error.prototype;

export default function timeoutPromise(promise, time) {
  let timeout = false;

  function creatTimeout(time) {
    return new Promise(_ => {
      setTimeout(() => {
        timeout = true;
      }, time);
    });
  }

  return Promise.race([promise, creatTimeout(time)]).then(result => {
    if (timeout) {
      throw new TimeoutError();
    }
    return result;
  });
}
