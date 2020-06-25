(function (workbox) {
  const API_CACHE = 'API_CACHE';

  /**
   * @jsdoc method
   * @name init
   * @return {Void}
   * @description
   *  This method sets the stage for caching static resources
   */
  function init() {
    // Ensure all our service worker gets installed on all the open
    // clients. This may be not be necessary if our ServiceW
    workbox.core.skipWaiting();
    workbox.core.clientsClaim();

    // Cache all the static files
    // self.__precacheManifest is generated by webpack.
    workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
  }

  /**
   * @jsdoc method
   * @name registerRoutesForThirdPartyAssets
   * @return {Void}
   * @description
   *  This method reigster routes to cache any third party resource
   *  We can use following cache strategies (under workbox.strategies object):
   *   1. cacheFirst - Always hit the cache
   *   2. networkFirst - First hit the network, if not available then hit cache (Used for API calls)
   *   3. staleWhileRevalidate - First hit the cache then hit the network
   */
  function registerRoutesForThirdPartyAssets() {
    /*
     * Here's the code to register a route:
     * workbox.routing.registerRoute(<REGEX_OR_STRING>, <STRATEGY>)
     */
  }

  /**
   * @jsdoc method
   * @name handleGetRequest
   * @param {Object} event The fetch API event
   * @return {Void}
   * @description
   *  This method analyses the GET request and either returns the data from cache (if exists)
   *  or save the data to cache.
   */
  async function handleGetRequest(event) {
    const responseFromCache = await caches.match(event.request);
    if (responseFromCache) {
      return responseFromCache;
    }

    // Cloning is mandatory here
    // A request stream can be consumed only once
    const requestToCache = event.request.clone();
    const response = await fetch(requestToCache);
    if (!response || !response.status !== 200) {
      // something went wrong here. Let the application hande it
      return response;
    }

    // We need to pass the response back to caller
    // so have to clone it in order to add it to cache
    const responseToCache = response.clone();
    const cache = await caches.open(API_CACHE);
    cache.put(requestToCache, responseToCache);

    // Return original response back to the application
    return response;
  }

  /**
   * @jsdoc method
   * @name prepareToCacheGetAPIRequests
   * @return {Void}
   * @description
   *  This method is responsible for setting up the
   *  the fetch event to listen for GET requests and delegates
   *  responsibility to cacheGetRequest() method to either return
   *  the data from cache or save the data to the cache.
   */
  function prepareToCacheGetAPIRequests() {
    self.addEventListener('fetch', async (event) => {
      if (event.request.method === 'GET') {
        event.respondWith(handleGetRequest(event));
      }
    });
  }

  init();
  // This function may not be required in future. Will be observing this.
  registerRoutesForThirdPartyAssets();
  prepareToCacheGetAPIRequests();
  // eslint-disable-next-line no-undef
})(workbox);