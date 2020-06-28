/**
 * @module util-url
 */
/**
 * @file All url related utilities
 */
/**
 * Check whether the string is a valid URL
 * @link Inspired from https://stackoverflow.com/a/5717133/2494535
 * @since 0.0.2
 * @param {string} str
 * @example
 * // returns true
 * isvalidUrl('https://google.com/a/b/c?a=123&b=str=c=true');;
 * // returns true
 * isvalidUrl('google.com');
 * // returns false
 * isvalidUrl('oops/what');
 * @returns {boolean}
 */
export declare function isvalidUrl(str: string): boolean;
/**
 * Get query param value from the URL
 * @since 0.0.2
 * @param {string} url - URL of the page
 * @param {string} queryParam - paramto be searched
 * @example
 * // returns "example"
 * getQueryParamValue('https://google.com/about?utm_medium=example&browser=Chrome', 'utm_medium');
 * // returns ""
 * getQueryParamValue('https://google.com/about?utm_medium=example&browser=Chrome', 'not_present_param');
 * @returns {string} - value of the query param after decoding it
 */
export declare function getQueryParamValue(url: string, queryParam: string): string;
/**
 * Remove queryParam from the url
 * @since 0.0.2
 * @link Source - https://stackoverflow.com/a/1634841/2494535
 * @param {string} url
 * @param {string|number} parameter - query param to be removed
 * @example
 * // returns "https://google.com/about?notMe=2"
 * removeURLParameter('https://google.com/about?removeMe=1&notMe=2', 'removeMe');
 * @returns {string} - updated URL
 */
export declare function removeURLParameter(url: string, parameter: string | number): string;
