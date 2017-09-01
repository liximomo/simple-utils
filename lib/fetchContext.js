'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _params = require('./params');

var _params2 = _interopRequireDefault(_params);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

var defaultOption = {
  credentials: 'include',
  timeout: 1000 * 10
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

function createContext(_ref) {
  var _ref$base = _ref.base,
      base = _ref$base === undefined ? '' : _ref$base,
      _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? {} : _ref$headers,
      beforeFetch = _ref.beforeFetch;

  function fetchProxy(url, option) {
    var baseUrl = base;
    var fullOption = _extends({
      headers: _extends({}, defaultHeaders, typeof headers === 'function' ? headers() : headers)
    }, defaultOption, option);
    if (typeof fullOption.base !== 'undefined') {
      baseUrl = fullOption.base;
    }
    var fullurl = url.indexOf('://') !== -1 ? url : baseUrl + '/' + url;
    var request = new Request(fullurl, fullOption);
    if (beforeFetch) {
      beforeFetch(request);
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

  return {
    q: fetchProxy,
    get: get,
    post: post
  };
}

exports.default = createContext;