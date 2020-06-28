"use strict";
/**
 * @module util-event
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCustom = void 0;
const util_datatype_1 = require("@softvar/util-datatype");
/**
 * @file All event related utilities
 */
/**
 * Send Custom event
 * @since 0.0.2
 * @param {string} name - custom event name
 * @param {object} data - custom event data associated
 * @example
 * // returns nothing
 * sendCustom('click-on-hidden-btn', {selector: '#hidden_btn_xyz'});
 */
function sendCustom(name, data = {}) {
    if (!name || !util_datatype_1.isString(name) || !util_datatype_1.isObject(data)) {
        throw new Error('Name must be a defined string and data is optional but should be an object.');
    }
    // create and dispatch the event
    const event = new window.CustomEvent(name, {
        detail: data,
    });
    document.dispatchEvent(event);
}
exports.sendCustom = sendCustom;
//# sourceMappingURL=index.js.map