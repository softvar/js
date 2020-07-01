#!/usr/bin/env node
/**
 * @module script-watch-lerna-packages
 * @license MIT
 */
/**
 * From the context of the process.cwd(), find the package manifest name & bootstrap it's dependencies via lerna
 * @since 1.0.0
 */
declare const bootstrap: () => void;
/**
 * From the context of the process.cwd(), find the package manifest name & spawn a filesystem watcher for it's tree.
 * @since 1.0.0
 */
declare const watch: () => Promise<void>;
export { bootstrap, watch };
