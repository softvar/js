"use strict";
/**
 * @module util-console
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.prints = void 0;
/**
 * @file All console related utilities
 */
const util_datatype_1 = require("@softvar/util-datatype");
/**
 * Prints the message to the console with different types. print is available on window, so prints.
 * @since 1.0.0
 * @param {*} message to rprint
 * @param {string} [type=log] log/info/warn/error/table/clear
 * @param {object} [config={}] Optional configuration parameters
 * @param {Function} [config.formatter] message can be transformed via this callback, accepting first parameter as message and second as type
 */
function prints(message = '', type = 'log', config = { formatter: (msg, _type) => msg }) {
    if (!util_datatype_1.isString(type) || !util_datatype_1.isObject(config)) {
        throw new Error('Please pass the valid types for the arguments');
    }
    console[type](config.formatter(message, type));
}
exports.prints = prints;
;
//# sourceMappingURL=index.js.map