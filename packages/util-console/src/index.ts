/**
 * @module util-console
 */

/**
 * @file All console related utilities
 */
import { isString, isObject } from '@softvar/util-datatype';

/**
 * Prints the message to the console with different types. print is available on window, so prints.
 * @since 1.0.0
 * @param {*} message to rprint
 * @param {string} [type=log] log/info/warn/error/table/clear
 * @param {object} [config={}] Optional configuration parameters
 * @param {number} [config.newLinesBefore=0] to have `n` newlines before the console[type] output
 * @param {number} [config.newLinesAfter=0] to have `n` newlines after the console[type] output
 * @param {Function} [config.formatter] message can be transformed via this callback, accepting first parameter as message and second as type
 */
export function prints(
  message: any = '',
  type: string = 'log',
  config: { formatter: any; newLinesBefore: number; newLinesAfter: number } = {
    newLinesBefore: 0,
    newLinesAfter: 0,
    formatter: (msg: string, _type: string) => msg,
  }
) {
  if (!isString(type) || !isObject(config)) {
    throw new Error('Please pass the valid types for the arguments');
  }

  for (let i = 0; i < config.newLinesBefore; i++) {
    console[type]('\n');
  }

  console[type](config.formatter(message, type));

  for (let i = 0; i < config.newLinesAfter; i++) {
    console[type]('\n');
  }
}
