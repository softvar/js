"use strict";
/**
 * @module util-url
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeURLParameter = exports.getQueryParamValue = exports.isvalidUrl = void 0;
const util_datatype_1 = require("@softvar/util-datatype");
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
function isvalidUrl(str) {
    if (!util_datatype_1.isString(str)) {
        return false;
    }
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}
exports.isvalidUrl = isvalidUrl;
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
function getQueryParamValue(url, queryParam) {
    if (!util_datatype_1.isString(url) || !util_datatype_1.isString(queryParam)) {
        return '';
    }
    if (!url) {
        url = window.location.href;
    }
    queryParam = queryParam.replace(/[[]]/g, '\\$&');
    const regex = new RegExp('[?&]' + queryParam + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results || !results[2]) {
        return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
exports.getQueryParamValue = getQueryParamValue;
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
function removeURLParameter(url, parameter) {
    if (!util_datatype_1.isString(url) || !util_datatype_1.isString(parameter)) {
        return url;
    }
    // prefer to use l.search if you have a location/link object
    const urlparts = url.split('?');
    if (urlparts.length >= 2) {
        const prefix = encodeURIComponent(parameter) + '=';
        const pars = urlparts[1].split(/[&;]/g);
        // reverse iteration as may be destructive
        for (let i = pars.length; i-- > 0;) {
            // idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }
        return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
    }
    return url;
}
exports.removeURLParameter = removeURLParameter;
//# sourceMappingURL=index.js.map