export default function delay(func, delaySpan) {
  setTimeout(function () {
    return func();
  }, delaySpan);
}

export function delayPromise(promise, delaySpan) {
  var delayd = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(null);
    }, delaySpan);
  });

  return Promise.all([promise, delayd]).then(function (resolved) {
    return resolved[0];
  });
}