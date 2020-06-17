/**
 * @module util-array
 */

/**
 * @file All array related utilities
 */

/**
 * mapper function
 *
 * @callback mapperFunction
 * @param {*} value - array value
 */

/**
 * Copy array from input array, manipulating the values via a mapper function
 *
 * @param {any[]} arr - inout array
 * @param {mapperFunction=} mapFn - mapper function to transform array values
 * @returns {Array} copied(and transformed) array
 */
export function copy(arr: any[], mapFn: (any)) {
  return Array.from(arr, mapFn);
}
