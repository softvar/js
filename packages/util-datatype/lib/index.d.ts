/**
 * @module util-datatype
 */
/**
 * Check if the given value is of type: Array
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isArray(val: any): val is any[];
/**
 * Check if the given value is of type: Boolean
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isBoolean(val: any): val is boolean;
/**
 * Check if the given value is of type: Date
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isDate(val: any): val is Date;
/**
 * Check if the given value is defined
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isDefined<T>(val: T): val is NonNullable<T>;
/**
 * Check if the given value is of type: Function
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isFunction(val: any): val is () => void;
/**
 * Check if the given value is of type: Object
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isObject<T>(val: T): val is object & Exclude<T, any[] | (() => void) | RegExp | Promise<any> | Date>;
/**
 * Check if the given value is of type: NaN i.e. not a number
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isNaN(val: any): val is number;
/**
 * Check if the given value is of type: Null
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isNull(val: any): val is null;
/**
 * Check if the given value is of type: Number
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isNumber(val: any): val is number;
/**
 * Check if the given value is of type: Promise
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isPromise(val: any): val is Promise<any>;
/**
 * Check if the given value is of type: Regex
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isRegex(val: any): val is RegExp;
/**
 * Check if the given value is of type: String
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isString(val: any): val is string;
/**
 * Check if the given value is of type: Undefined
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export declare function isUndefined(val: any): val is undefined;
