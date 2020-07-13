/**
 * @module util-string
 * @license MIT
 */
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
export declare function lower(str: string): string;
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
export declare function upper(str: string): string;
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
export declare function camelCase(str: string): string;
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
export declare function fixEs6LiteralSpacing(str: string, replaceWith?: string): string;
