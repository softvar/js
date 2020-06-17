"use strict";
/**
 * @module util-array
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.copy = void 0;
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
function copy(arr, mapFn) {
    return Array.from(arr, mapFn);
}
exports.copy = copy;
//# sourceMappingURL=index.js.map