#!/usr/bin/env node
// @ts-nocheck

/**
 * @module githook-commitmsg
 * @license MIT
 */

/**
 * @file commitmsg githook
 */

/**
 * Name: validate-commit-message.
 * Description: Validate commit message before git commit
 * Authors: Angular Team (Note: this script was originally written by Vojta for AngularJS)
 * URL: https://github.com/angular/angular/blob/master/tools/validate-commit-message/validate-commit-message.js
 * LICENSE: MIT License
 *
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const fs = require('fs');
const util = require('util');
const path = require('path');

const MAX_LENGTH = 100;
const PATTERN = /^(?:fixup!\s*)?(\w*)(\(([\w\$\.\:\*/-]*)\))?\: (.*)$/;
const IGNORED = /^WIP\:/;
const TYPES = {
  feat: true,
  fix: true,
  docs: true,
  style: true,
  refactor: true,
  perf: true,
  test: true,
  chore: true,
  cleanup: true,
  revert: true,
  tracking: true
};

const root = path.resolve(path.join(__dirname, process.argv[2].split('--path=')[1]));

console.log(`Resolving .git folder from: ${root}`);

const error = function() {
  // gitx does not display it
  // http://gitx.lighthouseapp.com/projects/17830/tickets/294-feature-display-hook-error-message-when-hook-fails
  // https://groups.google.com/group/gitx/browse_thread/thread/a03bcab60844b812
  console.error('INVALID COMMIT MSG: ' + util.format.apply(null, arguments));
};


const validateMessage = function(message) {
  let isValid = true;

  if (IGNORED.test(message)) {
    console.log('Commit message validation ignored.');
    return true;
  }

  let match = PATTERN.exec(message),
      isATagCommit = /^\d+.\d+.\d+$/.exec(message),
      isMergeCommit = /^Merge remote-tracking branch.*/.exec(message);

  if (!isMergeCommit && message.length > MAX_LENGTH) {
    error('is longer than %d characters by %d character!', MAX_LENGTH, message.length - MAX_LENGTH);
    isValid = false;
  }

  let isCommitMessageBypassed = isATagCommit || isMergeCommit;
  // Allow version commit without scope restriction and allow merge commits too
  match = match || isCommitMessageBypassed;
  if (!match) {
    error('does not match "<type>(<scope>): <subject>" ! was: ' + message);
    return false;
  }

  let type = match[1];
  let scope = match[3];
  let subject = match[4];

  if (!isCommitMessageBypassed && !TYPES.hasOwnProperty(type)) {
    error('"%s" is not allowed type !', type);
    return false;
  }

  // Some more ideas, do want anything like this ?
  // - allow only specific scopes (eg. fix(docs) should not be allowed ?
  // - auto correct the type to lower case ?
  // - auto correct first letter of the subject to lower case ?
  // - auto add empty line after subject ?
  // - auto remove empty () ?
  // - auto correct typos in type ?
  // - store incorrect messages, so that we can learn

  return isValid;
};


let firstLineFromBuffer = function(buffer) {
  return buffer.toString().split('\n').shift();
};

// publish for testing
export default validateMessage;

// hacky start if not run by jasmine :-D
if (process.argv.join('').indexOf('jasmine-node') === -1) {
  let commitMsgFile = `${root}/.git/COMMIT_EDITMSG`;
  let incorrectLogFile = commitMsgFile.replace('COMMIT_EDITMSG', 'logs/incorrect-commit-msgs');

  fs.readFile(commitMsgFile, function(err, buffer) {
    let msg = firstLineFromBuffer(buffer);

    if (!validateMessage(msg)) {
      fs.appendFile(incorrectLogFile, msg + '\n', function() {
        process.exit(1);
      });
    } else {
      process.exit(0);
    }
  });
}
