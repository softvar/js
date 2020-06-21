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
 * @param {Function} [config.formatter] message can be transformed via this callback, accepting first parameter as message and second as type
 */
export function prints(message: any = '', type: string = 'log', config: { formatter: (any) } = { formatter: (msg: string, _type: string) => msg}) {
  if (!isString(type) || !isObject(config)) {
    throw new Error('Please pass the valid types for the arguments');
  }

  console[type](config.formatter(message, type));
};
