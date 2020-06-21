/**
 * @module util-object
 */

/**
 * @file All object related utilities
 */

/**
 * Returns keys of the object
 * @since 0.0.4
 *
 * @param {object} obj - input object
 * @returns {array} keys
 */
export function keys(obj: object) {
  return Object.keys(obj);
}

/**
 * Returns whether an object has keys
 * @since 0.0.4
 *
 * @param {object} obj - input object
 * @returns {boolean}
 */
export function areKeys(obj: object) {
  return Object.keys(obj).length;
}
