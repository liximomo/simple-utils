import params from './params';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

const defaultOption = {
  headers,
  credentials: 'include',
  timeout: 1000 * 10,
};

function createUrlString(paramObject) {
  const urlString = params(paramObject);
  if (!urlString) {
    return '';
  }
  return `?${urlString}`;
}

function createContext({ base }) {
  function fetchProxy(url, option) {
    const fullOption = { ...defaultOption, ...option };
    const fullurl = ~url.indexOf('://') ? url : `${base}/${url}`;
    return window.fetch(fullurl, fullOption);
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
