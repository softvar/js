"use strict";
/**
 * @module util-object
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.areKeys = exports.keys = void 0;
/**
 * @file All object related utilities
 */
/**
 * Returns keys of the object
 *
 * @param {object} obj - input object
 * @returns {array} keys
 */
function keys(obj) {
    return Object.keys(obj);
}
exports.keys = keys;
/**
 * Returns whether an object has keys
 * @param {object} obj - input object
 * @returns {boolean}
 */
function areKeys(obj) {
    return Object.keys(obj).length;
}
exports.areKeys = areKeys;
//# sourceMappingURL=index.js.map