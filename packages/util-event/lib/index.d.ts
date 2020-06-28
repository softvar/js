/**
 * @module util-event
 */
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
export declare function sendCustom(name: string, data?: object): void;
