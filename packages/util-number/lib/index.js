"use strict";
/**
 * @module util-number
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumberBetween = exports.getRandomNumber = void 0;
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
function getRandomNumber(n) {
    return Math.round(Math.random() * 10 * n);
}
exports.getRandomNumber = getRandomNumber;
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
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.getRandomNumberBetween = getRandomNumberBetween;
//# sourceMappingURL=index.js.map