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
export function lower(str: string): string {
  if (str) {
    return str.toLowerCase();
  }

  return str;
}

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
export function upper(str: string): string {
  if (str) {
    return str.toUpperCase();
  }

  return str;
}

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
export function camelCase(str: string): string {
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
export function fixEs6LiteralSpacing(str: string, replaceWith: string = '\n'): string {
  if (!str) {
    return '';
  }

  return str
    .split('\n')
    .map((text) => text.trim())
    .join(replaceWith);
}
