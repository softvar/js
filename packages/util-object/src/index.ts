/**
 * @module util-object
 */

/**
 * @file All object related utilities
 */

/**
 * Returns keys of the object
 *
 * @param {object} obj - input object
 * @returns {array} keys
 */
export function keys(obj: object) {
  return Object.keys(obj);
}

/**
 * Returns whether an object has keys
 * @param {object} obj - input object
 * @returns {boolean}
 */
export function areKeys(obj: object) {
  return Object.keys(obj).length;
}
