"use strict";
/**
 * @module util-datatype
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = exports.isString = exports.isRegex = exports.isPromise = exports.isNumber = exports.isNull = exports.isNaN = exports.isObject = exports.isFunction = exports.isDefined = exports.isDate = exports.isBoolean = exports.isArray = void 0;
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
function isArray(val) {
    return toString.call(val) === '[object Array]';
}
exports.isArray = isArray;
/**
 * Check if the given value is of type: Boolean
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isBoolean(val) {
    return toString.call(val) === '[object Boolean]';
}
exports.isBoolean = isBoolean;
/**
 * Check if the given value is of type: Date
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
exports.isDate = isDate;
/**
 * Check if the given value is defined
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isDefined(val) {
    return !this.isUndefined(val) && !this.isNull(val);
}
exports.isDefined = isDefined;
/**
 * Check if the given value is of type: Function
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
exports.isFunction = isFunction;
/**
 * Check if the given value is of type: Object
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isObject(val) {
    return toString.call(val) === '[object Object]';
}
exports.isObject = isObject;
/**
 * Check if the given value is of type: NaN i.e. not a number
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isNaN(val) {
    return val !== val;
}
exports.isNaN = isNaN;
/**
 * Check if the given value is of type: Null
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isNull(val) {
    return toString.call(val) === '[object Null]';
}
exports.isNull = isNull;
/**
 * Check if the given value is of type: Number
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isNumber(val) {
    return toString.call(val) === '[object Number]';
}
exports.isNumber = isNumber;
/**
 * Check if the given value is of type: Promise
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isPromise(val) {
    return toString.call(val) === '[object Promise]';
}
exports.isPromise = isPromise;
/**
 * Check if the given value is of type: Regex
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isRegex(val) {
    return toString.call(val) === '[object RegExp]';
}
exports.isRegex = isRegex;
/**
 * Check if the given value is of type: String
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isString(val) {
    return toString.call(val) === '[object String]';
}
exports.isString = isString;
/**
 * Check if the given value is of type: Undefined
 * @since 1.0.0
 * @param {*} val any input value
 * @returns {boolean}
 */
function isUndefined(val) {
    return toString.call(val) === '[object Undefined]';
}
exports.isUndefined = isUndefined;
//# sourceMappingURL=index.js.map