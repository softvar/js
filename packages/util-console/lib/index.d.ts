/**
 * @module util-console
 */
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
export declare function prints(message?: any, type?: string, config?: {
    formatter: any;
    newLinesBefore: number;
    newLinesAfter: number;
}): void;
