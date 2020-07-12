#!/usr/bin/env node
"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
/**
 * @module script-add-lerna-package
 * @license MIT
 */
/**
 * @file add-lerna-package script
 */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const execSync = require('child_process').execSync;
const util_datatype_1 = require("@softvar/util-datatype");
let config = {};
try {
    config = require(path.resolve(process.cwd(), 'config.js'));
    if (!util_datatype_1.isObject(config)) {
        console.error(`\nERROR - config.js does not export a valid object..\n`);
        return;
    }
    if (config.github && util_datatype_1.isObject(config.github)) {
        const { user, repo, email, license } = config.github;
        if (!util_datatype_1.isString(user) || !util_datatype_1.isString(repo) || !util_datatype_1.isString(email) || !util_datatype_1.isString(license)) {
            console.error('\nERROR - config.js has incorrect github object.\n');
            return;
        }
    }
    // check for valid object
    JSON.parse(JSON.stringify(config));
}
catch (err) {
    console.error(`\nERROR - config.js file is missing at the root of the project.\n`);
    return;
}
const { prints } = require('@softvar/util-console');
const namePlaceholder = '{name}';
const typePlaceholder = '{type}';
const licensePlaceholder = '{license}';
const githubUsernamePlaceholder = '{githubUsername}';
const githubReponamePlaceholder = '{githubReponame}';
const githubUserEmailPlaceholder = '{githubUserEmail}';
const lernaPackageTemplateDir = path.resolve(path.join(process.cwd(), 'node_modules', '@softvar/template-lerna-package'));
const templateFolder = path.join(lernaPackageTemplateDir, 'template');
const printConfig = {
    newLinesBefore: 1,
    newLinesAfter: 1
};
const questions = [{
        type: 'list',
        name: 'type',
        message: 'Select type of package:',
        choices: [
            'util',
            'types',
            'config',
            'script',
            'service',
            'githook',
            'template',
            'component'
        ]
    }, {
        type: 'string',
        name: 'name',
        message: 'Enter Package Name:'
    }, {
        type: 'list',
        name: 'license',
        message: 'Enter License',
        choices: [
            'MIT',
            'ISC',
            'Apache-2.0',
            'BSD-1-Clause',
            'BSD-2-Clause',
            'BSD-3-Clause',
            'GPL-2.0-only',
            'GPL-2.0-or-later',
            'GPL-3.0-only',
            'GPL-3.0-or-later',
            'OSL-2.0',
            'OSL-2.1',
            'OSL-3.0'
        ]
    }];
const confirmQuestions = [
    {
        type: 'string',
        name: 'confirmDetails',
        message: 'Are you sure (y/n)'
    }
];
function confirm(answers) {
    if (!answers.name) {
        prints(chalk.red('Package name is required. Please try again with the name.'), 'log', printConfig);
        init();
        return;
    }
    prints(chalk.yellow(`Package type: ${chalk.bold.green(answers.type)}\n` +
        `Package name: ${chalk.bold.green(answers.name)}\n` +
        `Folder: ${chalk.bold.green(`packages/${answers.type}-${answers.name}`)}`), 'log', printConfig);
    inquirer.prompt(confirmQuestions).then(input => {
        if (input.confirmDetails.toLowerCase() === 'y') {
            addNewPackage(answers);
        }
        else {
            prints(chalk.redBright(`You did not confirm. Please try again`), 'log', printConfig);
            process.exit(0);
        }
    });
}
function addNewPackage(answers) {
    const { name, type, license = (config.github && config.github.license) } = answers;
    const packageName = `${type}-${name}`;
    const folderPath = `packages/${packageName}`;
    try {
        execSync(`mkdir ${folderPath}`);
    }
    catch (e) {
        prints(chalk.red(`Folder can't be created. Ensure your current directory and the package with same name shouldn't exist!`), 'log', printConfig);
        process.exit(0);
    }
    try {
        // Manually adding files so that only selected files goes into final package
        // and also to exclude certain files
        execSync(`cp -rp ${templateFolder}/* ${folderPath}`);
        execSync(`mv ${folderPath}/package-file.json ${folderPath}/package.json`);
        execSync(`mv ${folderPath}/npmignore ${folderPath}/.npmignore`);
        execSync(`mv ${folderPath}/_tsconfig.json ${folderPath}/tsconfig.json`);
    }
    catch (e) {
        prints(chalk.red(`Can't copy template. Ensure your current directory and the package with same name shouldn't exist!`), 'log', printConfig);
        process.exit(0);
    }
    const replace = [{
            to: namePlaceholder,
            with: name
        }, {
            to: typePlaceholder,
            with: type
        }, {
            to: licensePlaceholder,
            with: license
        }, {
            to: githubUsernamePlaceholder,
            with: config.github && config.github.user
        }, {
            to: githubReponamePlaceholder,
            with: config.github && config.github.repo
        }, {
            to: githubUserEmailPlaceholder,
            with: config.github && config.github.email
        }];
    let list = [{
            file: `${folderPath}/package.json`,
            replace
        }, {
            file: `${folderPath}/README.md`,
            replace
        }, {
            file: `${folderPath}/src/index.ts`,
            replace
        }, {
            file: `${folderPath}/test/index.spec.ts`,
            replace
        }, {
            file: `${folderPath}/jest.config.js`,
            replace
        }, {
            file: `${folderPath}/.npmignore`,
            replace
        }];
    replacePlaceholdersInFiles(list);
}
/**
 * Read a list consisting of file names and the pattern(`to`) which needs to be modified with `with`
 * @param {Array} list
 */
function replacePlaceholdersInFiles(list) {
    for (let i = 0; i < list.length; i++) {
        let file = list[i].file;
        // Open a file to be get modified
        fs.readFile(file, 'utf8', function (err, data) {
            if (err) {
                return prints(chalk.red(err), 'log');
            }
            // modify it by replacing all the occurrences of different patterns
            for (let j = 0; j < list[i].replace.length; j++) {
                let toReplace = list[i].replace[j].to;
                let withReplace = list[i].replace[j].with;
                let re = new RegExp(toReplace, 'g');
                data = data.replace(re, withReplace);
            }
            // Write file once all the occurrences of pattern have been modified
            fs.writeFile(file, data, 'utf8', function (err) {
                if (err)
                    return prints(chalk.red(err), 'log');
            });
        });
    }
}
function init() {
    inquirer.prompt(questions).then(answers => {
        confirm(answers);
    });
}
exports.init = init;
init();
//# sourceMappingURL=index.js.map