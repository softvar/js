"use strict";
/**
 * @module util-dom
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDynamicClass = exports.isDynamicId = void 0;
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
function isDynamicId(identifier) {
    // xyz_2535 xyz-35353 xyz3536
    // xyz_252a xyz-3536af
    const reDynamicId1 = /[a-z]+[_-][0-9a-f_-]{2,}/gi;
    // abcd22
    const reDynamicId2 = /[0-9a-f]{5,}/gi;
    return reDynamicId1.test(identifier) || reDynamicId2.test(identifier);
}
exports.isDynamicId = isDynamicId;
/**
 * Checks wthether the input value matches the dynamic id criteria
 * @since 0.0.2
 * @param identifier - input value
 * @example
 * // return true
 * isDynamicClass('myDiv-aaa_1234');
 * @returns {boolean}
 */
function isDynamicClass(identifier) {
    // wrapper-6_3547
    const reDynamicClass1 = /[a-z]+[_-][0-9_-]{4,}/gi;
    return reDynamicClass1.test(identifier);
}
exports.isDynamicClass = isDynamicClass;
//# sourceMappingURL=index.js.map