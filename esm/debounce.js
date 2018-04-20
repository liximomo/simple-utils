export default function debounce(func, wait) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$leading = _ref.leading,
      leading = _ref$leading === undefined ? true : _ref$leading,
      _ref$trailing = _ref.trailing,
      trailing = _ref$trailing === undefined ? true : _ref$trailing;

  var leadingExecuted = false;
  var timeout = null;

  function wrapper() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var exec = function exec(reset) {
      return function () {
        func.apply(_this, args);
        if (reset) {
          leadingExecuted = false;
          timeout = null;
        }
      };
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