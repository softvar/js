/**
 * @module util-number
 * @license MIT
 */

/**
 * @file number util
 */

/**
 * Generates a random number of n|n-1 digits
 * @since 0.0.2
 * @param {number} n specify digits in the output
 * @example
 * // returns 24378
 * getRandomNumber(5);
 * // returns 2993241219
 * getRandomNumber(10);
 * @returns {number}
 */
export function getRandomNumber(n: number): number {
  return Math.round(Math.random() * 10 * n);
}

/**
 * Generates a random number between min and max range
 * @since 0.0.2
 * @param {number} min the lower range (including it)
 * @param {number} max the upper range (including it)
 * @example
 * // returns 8
 * getRandomNumberBetween(1, 8);
 * // returns 23
 * getRandomNumberBetween(10, 30);
 * // returns 23
 * getRandomNumberBetween(23, 28);
 * @returns {number}
 */
export function getRandomNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
