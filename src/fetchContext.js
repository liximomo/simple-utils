import params from './params';
import timeoutPromise from './timeoutPromise';

const defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

const defaultOption = {
  credentials: 'include',
};

function createUrlString(paramObject) {
  if (!paramObject) {
    return '';
  }

  const urlString = params(paramObject);
  if (!urlString) {
    return '';
  }
  return `?${urlString}`;
}

function createContext(options = {}) {
  const userOptions = {};

  function config(cfg) {
    const { base } = cfg;
    Object.assign(
      userOptions,
      cfg,
      base
        ? {
            base: base.replace(/\/+$/, ''),
          }
        : {}
    );
  }
 
  function fetchProxy(url, option) {
    const { base = '', headers = {}, beforeFetch } = userOptions;
    const baseUrl = base;

    const fullOption = {
      headers: {
        ...defaultHeaders,
        ...(typeof headers === 'function' ? headers() : headers),
      },
      ...defaultOption,
      ...option,
    };

    let fullurl;
    if (url.indexOf('://') !== -1) {
      fullurl = url;
    } else {
      fullurl = `${baseUrl}/${url.replace(/^\/+/, '')}`;
    }

    const request = new Request(fullurl, fullOption);
    if (beforeFetch) {
      beforeFetch(request);
    }

    if (fullOption.timeout !== undefined) {
      return timeoutPromise(window.fetch(request), fullOption.timeout);
    }

    return window.fetch(request);
  }

  function get(url, paramObject = {}, option) {
    return fetchProxy(`${url}${createUrlString(paramObject)}`, option);
  }

  function post(url, paramObject = {}, option) {
    const withMethod = {
      method: 'POST',
      ...option,
    };
    return fetchProxy(`${url}${createUrlString(paramObject)}`, withMethod);
  }

  config(options);
  
  return {
    q: fetchProxy,
    get,
    post,
    config,
  };
}

export default createContext;
