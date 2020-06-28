"use strict";
/**
 * @module util-promise
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deferred = void 0;
/**
 * @file All promise related utilities
 */
/**
 * Simpler way of using Promise
 * @since 0.0.2
 * @example
 * // return instance
 * function wait() {
 *   const d = deferred();
 *
 *   setTimeout(() => {
 *     try {
 *       const value = getMeTheValue();
 *       d.resolve(value);
 *     } catch (e) {
 *       d.reject(e)
 *     }
 *   }, 1000);
 *
 *   return d.promise;
 * }
 * @returns {object}
 */
function deferred() {
    this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
    });
    return this;
}
exports.deferred = deferred;
//# sourceMappingURL=index.js.map