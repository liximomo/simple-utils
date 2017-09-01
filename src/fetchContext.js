import params from './params';

const defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

const defaultOption = {
  credentials: 'include',
  timeout: 1000 * 10,
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

function createContext({ base = '', headers = {}, beforeFetch }) {
  function fetchProxy(url, option) {
    let baseUrl = base;
    const fullOption = {
      headers: {
        ...defaultHeaders,
        ...(typeof headers === 'function' ? headers() : headers),
      },
      ...defaultOption,
      ...option,
    };
    if (typeof fullOption.base !== 'undefined') {
      baseUrl = fullOption.base;
    }
    const fullurl = url.indexOf('://') !== -1 ? url : `${baseUrl}/${url}`;
    const request = new Request(fullurl, fullOption);
    if (beforeFetch) {
      beforeFetch(request);
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

  return {
    q: fetchProxy,
    get,
    post,
  };
}

export default createContext;
