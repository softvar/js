"use strict";
/**
 * @module util-array
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortOnKey = exports.findObjectIndexByKey = exports.findObjectByKey = exports.checkIfDifferOnKey = exports.copy = void 0;
/**
 * @file All array related utilities
 */
/**
 * mapper function
 * @since 0.0.4
 * @callback mapperFunction
 * @param {*} value - array value
 */
/**
 * Copy array from input array, manipulating the values via a mapper function
 * @since 0.0.4
 * @param {any[]} arr - inout array
 * @param {mapperFunction=} mapFn - mapper function to transform array values
 * @returns {Array} copied(and transformed) array
 */
function copy(arr, mapFn) {
    return Array.from(arr, mapFn);
}
exports.copy = copy;
/**
 * Given two array of objects, check whether object differs on the given key
 * @since 0.0.9
 * @param {Object[]} arr1 - input arr1
 * @param {Object[]} arr2 - inpur arr2, to be evaluated with
 * @param key - key of the the object on which difference needs to be checked
 *
 * @returns {Object[]} - array of objects that differ on the key
 */
function checkIfDifferOnKey(arr1, arr2, key) {
    return arr1.filter((obj1) => {
        return (arr2.filter((obj2) => {
            return obj1[key] === obj2[key];
        }).length === 0);
    });
}
exports.checkIfDifferOnKey = checkIfDifferOnKey;
/**
 * Find a particular object based on key from an array of objects
 * @since 0.0.9
 * @param  {Object[]} array - Array of objects
 * @param  {String} key  - Key to be searched
 * @param  {String/Number} value - value to be matched
 *
 * @returns {Object} - Matched object
 */
function findObjectByKey(arr, key, value) {
    if (!arr) {
        return null;
    }
    for (const item of arr) {
        if (item[key] === value) {
            return item;
        }
    }
    return null;
}
exports.findObjectByKey = findObjectByKey;
/**
 * Find a particular object index based on key from an array of objects
 * @since 0.0.9
 * @param  {Array} array - Array of objects
 * @param  {String} key  - Key to be searched
 * @param  {String/Number} value - Value to be matched
 *
 * @returns {Object} - Matched object
 */
function findObjectIndexByKey(arr, key, value) {
    if (!arr) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            return i;
        }
    }
    return null;
}
exports.findObjectIndexByKey = findObjectIndexByKey;
/**
 * Sort Array of objects on the given key of object
 * @since 0.0.9
 * @param arr - Array of objects to be sorted
 * @param key - key of the object on which sorting is required
 *
 * @returns - sorted array of objects
 */
function sortOnKey(arr, key) {
    if (!arr || !arr.length || !key) {
        return [];
    }
    arr.sort((a, b) => {
        return b[key] > a[key] ? -1 : a[key] > b[key] ? 1 : 0;
    });
    return arr;
}
exports.sortOnKey = sortOnKey;
//# sourceMappingURL=index.js.map