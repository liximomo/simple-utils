export default function throttle(func, delay) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$leading = _ref.leading,
      leading = _ref$leading === undefined ? true : _ref$leading,
      _ref$trailing = _ref.trailing,
      trailing = _ref$trailing === undefined ? true : _ref$trailing;

  var lastExec = -(delay + 1);
  var timeout = void 0;

  function wrapper() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var elapsed = Number(new Date()) - lastExec;

    var exec = function exec(trail) {
      return function () {
        lastExec = trail ? -(delay + 1) : Number(new Date());
        func.apply(_this, args);
        // timeout = null;
      };
    };

    if (timeout) {
      clearTimeout(timeout);
    }

    if (elapsed > delay) {
      if (leading) {
        exec(false)();
      } else {
        timeout = setTimeout(exec(true), delay);
      }
    } else if (trailing) {
      timeout = setTimeout(exec(true), delay - elapsed);
    }
  }

  return wrapper;
}