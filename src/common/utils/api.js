/**
 * Replaces the dynaic placeholder in the string with
 * path params object
 * @param {String} url The URL
 * @param {Object} pathParamsObj The path params object
 */
export function replaceUrlWithPathParams(url, pathParamsObj) {
  const tokens = url.split('/');
  const updatedTokens = tokens.map((token) => {
    const prop = token.replace(':', '');
    let result;
    if (pathParamsObj[prop]) {
      result = pathParamsObj[prop];
    } else {
      result = token;
    }
    return result;
  });
  return updatedTokens.join('/');
}

/**
 * Constructs API endpoint
 * @param {String} path The URL with path
 * @param {Object} pathParamsObj The path params object
 */
export function constructApiEndpoint(path = '', pathParamsObj) {
  const baseUrl = process.env.REACT_APP_BASE_API_URL;
  // const apiVersion = process.env.REACT_APP_API_VERSION;
  let url = `${baseUrl}/${path}`;
  if (pathParamsObj) {
    url = replaceUrlWithPathParams(url, pathParamsObj);
  }
  return new URL(url);
}

/**
 * Appends query params to supplied URL.
 * @param {String} url The URL
 * @param {Object} queryParamsObj The query params object.
 */
export function appendQueryParamsToUrl(url, queryParamsObj = {}) {
  const keys = Object.keys(queryParamsObj);
  let urlWithQueryParams = url;
  if (keys.length > 0) {
    keys.forEach((key) =>
      urlWithQueryParams.searchParams.append(key, queryParamsObj[key])
    );
  }
  return urlWithQueryParams;
}
