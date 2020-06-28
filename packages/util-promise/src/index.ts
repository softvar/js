/**
 * @module util-promise
 */

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
export function deferred(): void {
  this.promise = new Promise((resolve: any, reject: any) => {
    this.resolve = resolve;
    this.reject = reject;
  });

  return this;
}
