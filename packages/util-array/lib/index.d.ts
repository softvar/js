/**
 * @module util-array
 */
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
export declare function copy(arr: any[], mapFn: any): unknown[];
/**
 * Given two array of objects, check whether object differs on the given key
 * @since 0.0.9
 * @param {Object[]} arr1 - input arr1
 * @param {Object[]} arr2 - inpur arr2, to be evaluated with
 * @param key - key of the the object on which difference needs to be checked
 *
 * @returns {Object[]} - array of objects that differ on the key
 */
export declare function checkIfDifferOnKey(arr1: {
    [key: string]: any;
}[], arr2: {
    [key: string]: any;
}[], key: string): object[];
/**
 * Find a particular object based on key from an array of objects
 * @since 0.0.9
 * @param  {Object[]} array - Array of objects
 * @param  {String} key  - Key to be searched
 * @param  {String/Number} value - value to be matched
 *
 * @returns {Object} - Matched object
 */
export declare function findObjectByKey(arr: {
    [key: string]: any;
}[], key: string, value: string | number): object | null;
/**
 * Find a particular object index based on key from an array of objects
 * @since 0.0.9
 * @param  {Array} array - Array of objects
 * @param  {String} key  - Key to be searched
 * @param  {String/Number} value - Value to be matched
 *
 * @returns {Object} - Matched object
 */
export declare function findObjectIndexByKey(arr: {
    [key: string]: any;
}[], key: string, value: string | number): number | null;
/**
 * Sort Array of objects on the given key of object
 * @since 0.0.9
 * @param arr - Array of objects to be sorted
 * @param key - key of the object on which sorting is required
 *
 * @returns - sorted array of objects
 */
export declare function sortOnKey(arr: object[], key: string): object[] | [];
