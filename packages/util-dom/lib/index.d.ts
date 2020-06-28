/**
 * @module util-dom
 */
/**
 * @file All dom related utilities
 */
/**
 * Checks wthether the input value matches the dynamic id criteria
 * @since 0.0.2
 * @param identifier - input value
 * @example
 * // returns true
 * isDynamicId('myDiv-aaa_1234');
 * @returns {boolean}
 */
export declare function isDynamicId(identifier: string): boolean;
/**
 * Checks wthether the input value matches the dynamic id criteria
 * @since 0.0.2
 * @param identifier - input value
 * @example
 * // return true
 * isDynamicClass('myDiv-aaa_1234');
 * @returns {boolean}
 */
export declare function isDynamicClass(identifier: string): boolean;
