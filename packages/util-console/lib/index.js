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
const newLine = '\n';
/**
 * Prints the message to the console with different types. print is available on window, so prints.
 * @since 1.0.0
 * @param {*} message to rprint
 * @param {string} [type=log] log/info/warn/error/table/clear
 * @param {object} [config={}] Optional configuration parameters
 * @param {number} [config.newLinesBefore=0] to have `n` newlines before the console[type] output
 * @param {number} [config.newLinesAfter=0] to have `n` newlines after the console[type] output
 */
function prints(message = '', type = 'log', config = { newLinesBefore: 0, newLinesAfter: 0 }) {
    const { newLinesBefore = 0, newLinesAfter = 0 } = config;
    if (!util_datatype_1.isString(type) || !util_datatype_1.isObject(config)) {
        throw new Error('Please pass the valid types for the arguments');
    }
    for (let i = 0; i < newLinesBefore; i++) {
        console[type](newLine);
    }
    console[type](message);
    for (let i = 0; i < newLinesAfter; i++) {
        console[type](newLine);
    }
}
exports.prints = prints;
//# sourceMappingURL=index.js.map