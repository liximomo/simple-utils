export default function debounce(func, wait, { leading = true, trailing = true } = {}) {

  let lastExec = -(wait + 1);
  let timeout;

  function wrapper(...args) {
    const elapsed = Number(new Date()) - lastExec;

    const exec = trail => () => {


      lastExec = trail ? -(wait + 1) : Number(new Date());
      func.apply(this, args);
      // timeout = null;
    };

    if (timeout) {
      clearTimeout(timeout);
    }

    if (leading && elapsed > wait) {
      exec(false)();
    } else if (trailing) {
      timeout = setTimeout(exec(true), wait);
    }
  }

  return wrapper;
}
