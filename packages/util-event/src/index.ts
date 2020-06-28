/**
 * @module util-event
 */

import { isString, isObject } from "@softvar/util-datatype";

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
export function sendCustom(name: string, data: object = {}) {
  if (!name || !isString(name) || !isObject(data)) {
    throw new Error('Name must be a defined string and data is optional but should be an object.');
  }

  // create and dispatch the event
  const event = new window.CustomEvent(name, {
    detail: data,
  });

  document.dispatchEvent(event);
}
