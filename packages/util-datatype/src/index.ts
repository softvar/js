/**
 * @module util-datatype
 */

/**
 * @file All datatype related utilities
 */

const toString = Object.prototype.toString;

/**
 * Check if the given value is of type: Array
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isArray(val: any): val is any[] {
  return toString.call(val) === '[object Array]';
}

/**
 * Check if the given value is of type: Boolean
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isBoolean(val: any): val is boolean {
  return toString.call(val) === '[object Boolean]';
}

/**
 * Check if the given value is of type: Date
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]';
}

/**
 * Check if the given value is defined
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isDefined<T>(val: T): val is NonNullable<T> {
  return !this.isUndefined(val) && !this.isNull(val);
}

/**
 * Check if the given value is of type: Function
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isFunction(val: any): val is () => void {
  return toString.call(val) === '[object Function]';
}

/**
 * Check if the given value is of type: Object
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isObject<T>(val: T): val is object & Exclude<T, any[] | (() => void) | RegExp | Promise<any> | Date> {
  return toString.call(val) === '[object Object]';
}

/**
 * Check if the given value is of type: NaN i.e. not a number
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isNaN(val: any): val is number {
  return val !== val;
}

/**
 * Check if the given value is of type: Null
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isNull(val: any): val is null {
  return toString.call(val) === '[object Null]';
}

/**
 * Check if the given value is of type: Number
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isNumber(val: any): val is number {
  return toString.call(val) === '[object Number]';
}

/**
 * Check if the given value is of type: Promise
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isPromise(val: any): val is Promise<any> {
  return toString.call(val) === '[object Promise]';
}

/**
 * Check if the given value is of type: Regex
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isRegex(val: any): val is RegExp {
  return toString.call(val) === '[object RegExp]';
}

/**
 * Check if the given value is of type: String
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isString(val: any): val is string {
  return toString.call(val) === '[object String]';
}

/**
 * Check if the given value is of type: Undefined
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
export function isUndefined(val: any): val is undefined {
  return toString.call(val) === '[object Undefined]';
}
