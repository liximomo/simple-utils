(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['simple-utils'] = {})));
}(this, (function (exports) { 'use strict';

function debounce(func, wait) {
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

function delay(func, delaySpan) {
  setTimeout(function () {
    return func();
  }, delaySpan);
}

function createParams(key, value) {
  return key + '=' + encodeURIComponent(value);
}

function params(obj) {
  return Object.keys(obj)
  // eslint-disable-next-line eqeqeq
  .filter(function (key) {
    return obj[key] != undefined;
  }).map(function (key) {
    var value = obj[key];
    if (value instanceof Array) {
      return value.map(function (val) {
        return createParams(key, val);
      }).join('&');
    }

    return createParams(key, value);
  }).join('&');
}

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

var defaultOption = {
  credentials: 'include'
};

function createUrlString(paramObject) {
  if (!paramObject) {
    return '';
  }

  var urlString = params(paramObject);
  if (!urlString) {
    return '';
  }
  return '?' + urlString;
}

function createContext() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var userOptions = {};

  function config(cfg) {
    var base = cfg.base;

    Object.assign(userOptions, cfg, base ? {
      base: base.replace(/\/+$/, '')
    } : {});
  }

  function fetchProxy(url, option) {
    var _userOptions$base = userOptions.base,
        base = _userOptions$base === undefined ? '' : _userOptions$base,
        _userOptions$headers = userOptions.headers,
        headers = _userOptions$headers === undefined ? {} : _userOptions$headers,
        beforeFetch = userOptions.beforeFetch;

    var baseUrl = base;

    var fullOption = _extends({
      headers: _extends({}, defaultHeaders, typeof headers === 'function' ? headers() : headers)
    }, defaultOption, option);

    if (option && typeof FormData !== 'undefined' && option.body instanceof FormData) {
      delete fullOption.headers['Content-Type'];
    }

    var fullurl = void 0;
    if (url.indexOf('://') !== -1) {
      fullurl = url;
    } else {
      fullurl = baseUrl + '/' + url.replace(/^\/+/, '');
    }

    var request = new Request(fullurl, fullOption);
    if (beforeFetch) {
      beforeFetch(request);
    }

    if (fullOption.timeout !== undefined) {
      return timeoutPromise(window.fetch(request), fullOption.timeout);
    }

    return window.fetch(request);
  }

  function get(url) {
    var paramObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var option = arguments[2];

    return fetchProxy('' + url + createUrlString(paramObject), option);
  }

  function post(url) {
    var paramObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var option = arguments[2];

    var withMethod = _extends({
      method: 'POST'
    }, option);
    return fetchProxy('' + url + createUrlString(paramObject), withMethod);
  }

  config(options);

  return {
    q: fetchProxy,
    get: get,
    post: post,
    config: config
  };
}

/* eslint-disable */
function parseQueryString(query) {
  var query_string = {};
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}

function randomRange(low, high) {
  // eslint-disable-next-line no-mixed-operators
  return Math.floor(low + Math.random() * (high - low));
}

function randomSerial(length) {
  var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return new Array(length).fill('').map(function (_) {
    return chars[randomRange(0, chars.length)];
  }).join('');
}

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

function throttle(func, delay) {
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

var createAssert = function createAssert(type) {
  return function (target) {
    return Object.prototype.toString.call(target) === '[object ' + type + ']';
  };
};

var isNumber = createAssert('Number');
var isString = createAssert('String');
var isNull = createAssert('Null');
var isUndefined = createAssert('Undefined');
var isBoolean = createAssert('Boolean');
var isArray = createAssert('Array');
var isFunction = createAssert('Function');
var isObject = createAssert('Object');

exports.debounce = debounce;
exports.delay = delay;
exports.fetchContext = createContext;
exports.params = params;
exports.parseQueryString = parseQueryString;
exports.randomRange = randomRange;
exports.randomSerial = randomSerial;
exports.shallowEqual = shallowEqual;
exports.throttle = throttle;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.isBoolean = isBoolean;
exports.isArray = isArray;
exports.isFunction = isFunction;
exports.isObject = isObject;

Object.defineProperty(exports, '__esModule', { value: true });

})));
