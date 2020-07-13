/**
 * @module util-number
 * @license MIT
 */
/**
 * @file number util
 */
/**
 * Generates a random number of n|n-1 digits
 * @param {number} n specify digits in the output
 * @example
 * // returns 24378
 * getRandomNumber(5);
 * // returns 2993241219
 * getRandomNumber(10);
 * @returns {number}
 */
export declare function getRandomNumber(n: number): number;
/**
 * Generates a random number between min and max range
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
export declare function getRandomNumberBetween(min: number, max: number): number;
