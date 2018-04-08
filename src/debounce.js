export default function debounce(func, wait, { leading = true, trailing = true } = {}) {
  let leadingExecuted = false;
  let timeout = null;

  function wrapper(...args) {
    const exec = reset => () => {
      func.apply(this, args);
      if (reset) {
        leadingExecuted = false;
        timeout = null;
      }
    };

    if (timeout) {
      clearTimeout(timeout);
    }

    if (leading && !leadingExecuted) {
      leadingExecuted = true;
      exec(false)();
    } else if (trailing) {
      timeout = setTimeout(exec(true), wait);
    }
  }

  return wrapper;
}
