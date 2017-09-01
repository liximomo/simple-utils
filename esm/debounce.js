export default function debounce(func, wait) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$leading = _ref.leading,
      leading = _ref$leading === undefined ? true : _ref$leading,
      _ref$trailing = _ref.trailing,
      trailing = _ref$trailing === undefined ? true : _ref$trailing;

  var lastExec = -(wait + 1);
  var timeout = void 0;

  function wrapper() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var elapsed = Number(new Date()) - lastExec;

    var exec = function exec(trail) {
      return function () {

        lastExec = trail ? -(wait + 1) : Number(new Date());
        func.apply(_this, args);
        // timeout = null;
      };
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