export default function delay(func, delaySpan) {
  setTimeout(() => func(), delaySpan);
}

export function delayPromise(promise, delaySpan) {
  const delayd = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, delaySpan);
  });

  return Promise.all([promise, delayd])
    .then(resolved => resolved[0]);
}
