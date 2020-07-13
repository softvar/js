"use strict";
/**
 * @module util-string
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixEs6LiteralSpacing = exports.camelCase = exports.upper = exports.lower = void 0;
/**
 * @file string util
 */
/**
 * Takes a string and convert it into lowercase
 * @since 0.0.2
 * @param {string} str
 * @example
 * // returns abc
 * lower('aBc');
 * // returns abcdefg
 * lower('ABCDefG');
 * @returns {string} fully lower-cased string
 */
function lower(str) {
    if (str) {
        return str.toLowerCase();
    }
    return str;
}
exports.lower = lower;
/**
 * Takes a string and convert it into uppercase
 * @since 0.0.2
 * @param {string} str
 * @example
 * // returns ABC
 * upper('aBc');
 * // returns ABCDEFG
 * upper('abcdEFg');
 * @returns {string} fully lower-cased string
 */
function upper(str) {
    if (str) {
        return str.toUpperCase();
    }
    return str;
}
exports.upper = upper;
/**
 * Takes a string having hyphens and convert to camelCase
 * @since 0.0.2
 * @param {string} str
 * @example
 * // returns helloWorld
 * camelCase('hello-world');
 * // returns abcd
 * camelCase('abcd');
 * // returns helloMrWorld
 * camelCase('hello-mr-world');
 * @returns {string}
 */
function camelCase(str) {
    if (!str) {
        return '';
    }
    return str
        .split('-')
        .map((val, index) => {
        return index === 0 ? val : val.charAt(0).toUpperCase() + val.substr(1, val.length);
    })
        .join('');
}
exports.camelCase = camelCase;
/**
 * Takes ES6 literal string having new lines and trim new line spaces which comes before the line when indented
 * @since 0.0.2
 * @param {string} str
 * @param {string} replaceWith when newlines are encountered and spaces are trimmed, this param acts as a join the newline splitted text with
 * @example
 * // returns heytherewith spacestrimmed off
 * fixEs6LiteralSpacing(`hey
 * there
 *   with spaces
 *      trimmed off
 * `, '');
 * @returns {string}
 */
function fixEs6LiteralSpacing(str, replaceWith = '\n') {
    if (!str) {
        return '';
    }
    return str
        .split('\n')
        .map((text) => text.trim())
        .join(replaceWith);
}
exports.fixEs6LiteralSpacing = fixEs6LiteralSpacing;
//# sourceMappingURL=index.js.map