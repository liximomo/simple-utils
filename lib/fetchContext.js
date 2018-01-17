'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _params = require('./params');

var _params2 = _interopRequireDefault(_params);

var _timeoutPromise = require('./timeoutPromise');

var _timeoutPromise2 = _interopRequireDefault(_timeoutPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  var urlString = (0, _params2.default)(paramObject);
  if (!urlString) {
    return '';
  }
  return '?' + urlString;
}

function createContext() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var userOptions = {};
  config(options);

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
      return (0, _timeoutPromise2.default)(window.fetch(request), fullOption.timeout);
    }

    return window.fetch(request);
  }

  function config(options) {
    var base = options.base;


    Object.assign(userOptions, options, base ? {
      base: base.replace(/\/+$/, '')
    } : {});
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

  return {
    q: fetchProxy,
    get: get,
    post: post,
    config: config
  };
}

exports.default = createContext;