#!/usr/bin/env node
"use strict";
/**
 * @module script-watch-lerna-packages
 * @license MIT
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.watch = exports.bootstrap = void 0;
/**
 * @file watch-lerna-packages script
 */
/**
 * This file is copied and is modified as per the requirements
 *
 * @package - https://github.com/Dombo/node-lerna-monorepo
 * {@link - https://github.com/Dombo/node-lerna-monorepo}
 * @author - Dom Hutton(https://github.com/Dombo)
 * @license - none
 *
 */
const LERNA_PACKAGE_WATCHER = 'LERNA_PACKAGE_WATCHER'; // tslint-disable-line
const path = require("path");
const fs = require("fs");
const monorepo = require("commander");
const execa = require("execa");
const chokidar = require("chokidar");
monorepo
    .version("0.0.0")
    .option("-b, --bootstrap", "Bootstrap dependencies for the dependents of the current working directory.")
    .option("-w, --watch", "Start a watcher for the dependents of the current working directory.")
    .parse(process.argv);
const manifest = (dir = undefined) => JSON.parse(fs.readFileSync(`${dir ? dir : process.cwd()}/package.json`, {
    encoding: "utf8"
}));
/**
 * From the context of the process.cwd(), find the package manifest name & bootstrap it's dependencies via lerna
 * @since 1.0.0
 */
const bootstrap = () => {
    try {
        const lernaArgs = `bootstrap --scope ${manifest().name} --include-filtered-dependencies`.split(" ");
        execa("lerna", lernaArgs, { stdio: "inherit" });
    }
    catch (error) {
        throw new Error(`There was a problem trying to bootstrap the tree ${error}`);
    }
};
exports.bootstrap = bootstrap;
const buildDependencyTreeMeta = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lernaArgs = `ls --all --sort --toposort --json --include-filtered-dependencies`.split(" ");
        const { stdout, stderr } = yield execa("lerna", lernaArgs);
        return JSON.parse(stdout);
    }
    catch (error) {
        throw new Error(`There was an error building the dependency tree: ${error}`);
    }
});
const findParentPackageManifest = changedFile => {
    const startingPath = path.dirname(changedFile);
    const up = node => {
        let file = path.join(node, "package.json");
        if (fs.existsSync(file)) {
            return path.dirname(file);
        }
        file = path.resolve(node, "..");
        return up(file);
    };
    return up(startingPath);
};
const pruneParentPackageTree = tree => tree.slice(1, tree.length - 1); // removes the leaf node & the tree root
const findParentPackages = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const lernaArgs = `ls --all --toposort --json --scope ${name} --include-filtered-dependents`.split(" ");
    const { stdout } = yield execa("lerna", lernaArgs);
    return JSON.parse(stdout);
});
const buildDependency = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const lernaArgs = `run tsc --scope ${name}`.split(" ");
    yield execa("lerna", lernaArgs, { stdio: "inherit" });
    yield execa("yarn", ["jsdoc"], { stdio: 'inherit' });
});
/*
* From the context of a modified package currently under watch via watch()
*   Find the package manifest of the changed dependency
*   Build said dependency
*   Find the upstream dependencies of said dependency (sans the tree root & node just build)
*   Build them in order
* */
const buildDependencyChain = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const changedPackageManifest = findParentPackageManifest(path);
    const changedPackageName = manifest(changedPackageManifest).name;
    yield buildDependency(changedPackageName);
    const packageParents = yield findParentPackages(changedPackageName);
    const buildWorthyParents = pruneParentPackageTree(packageParents);
    const buildOperations = buildWorthyParents.map(dependency => buildDependency(dependency.name));
    yield Promise.all(buildOperations);
});
const spawnWatcher = (paths) => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log(`Would spawn a watcher over ${paths}`);
    const log = console.log.bind(console);
    // Initialize the watcher
    const watcher = chokidar.watch(paths, {
        ignored: [
            /(^|[\/\\])\../,
            /node_modules/,
            /lib|dist/,
            /\*___jb_tmp___/ // ignore jetbrains IDE temp files
        ],
        persistent: true,
        ignoreInitial: true,
        awaitWriteFinish: true // Helps minimising thrashing of watch events
    });
    // Add event listeners
    return watcher
        .on("add", path => {
        log(`File ${path} has been added`);
        buildDependencyChain(path);
    })
        .on("change", path => {
        log(`File ${path} has been changed`);
        buildDependencyChain(path);
    })
        .on("unlink", path => {
        log(`File ${path} has been removed`);
        buildDependencyChain(path);
    });
});
/**
 * From the context of the process.cwd(), find the package manifest name & spawn a filesystem watcher for it's tree.
 * @since 1.0.0
 */
const watch = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dependencyTreeMeta = yield buildDependencyTreeMeta();
        const paths = dependencyTreeMeta // We only spawn watchers for the dependencies, it's expected you watch your app
            .slice(0, dependencyTreeMeta.length)
            .map(dependency => dependency.location);
        spawnWatcher(paths);
    }
    catch (error) {
        throw new Error(`There was a problem trying to build the tree ${error}`);
    }
});
exports.watch = watch;
if (monorepo.bootstrap)
    bootstrap();
if (monorepo.watch)
    watch();
//# sourceMappingURL=index.js.map