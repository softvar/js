/**
 * @module util-fetch
 */

import { isString } from "@softvar/util-datatype";

/**
 * @file All fetch related utilities
 */

/**
 * Fetch data from the URL passsed
 * @since 0.0.2
 * @param {string} url - URL from data needs to be fetched
 * @param {object} config - define callbacks for success and error
 * @param {object} config.sucwcessCallback - success callback to be called when call returns 200 status code and data
 * @param {object} config.errorCallback = error callback to be called when call returns status code other than 200 or something else breaks
 * @example
 * fetchData('https://google.com', {
 *   successCallback: (data) { console.log('Got data as', data)},
 *   errorCallback: (err) { console.log('Something went wrong', err) }
 * });
 * @returns {Promise} - Promise
 */
export function fetchData(url: string, config?: { successCallback?: callback, errorCallback?: callback }) {
  if (!isString(url)) {
    throw new Error('URL should be a string!');
  }

  return fetch(url)
    .then((response: any) => {
      if (response.status !== 200) {
        config.errorCallback(response);
      }

      return response.json().then((data: any) => {
        config.successCallback(data);

        return data;
      });
    })
    .catch((err: any) => {
      config.errorCallback(err);
    });
}


// callback type
type callback = ( _data: any ) => void;
