/**
 * @module util-fetch
 */
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
export declare function fetchData(url: string, config?: {
    successCallback?: callback;
    errorCallback?: callback;
}): Promise<any>;
declare type callback = (_data: any) => void;
export {};
