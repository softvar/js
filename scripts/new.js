const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const execSync = require('child_process').execSync;

const utils = {log: () => {}};

const namePlaceholder = '{name}';
const typePlaceholder = '{type}';
const templateFolder = path.join(__dirname, 'scaffolding/template');

const questions = [
  {
    type: 'string',
    name: 'name',
    message: 'Enter package Name:'
  }
];

const confirmQuestions = [
  {
    type: 'string',
    name: 'confirmDetails',
    message: 'Are you sure (y/n)'
  }
];

function confirm(answers) {
  if (!answers.name) {
    utils.log({
      padding: true,
      type: 'error',
      msg: 'Package name is required. Please try again with the name.'
    });

    init();
    return;
  }

  utils.log({
    type: 'info',
    msg:
      `Module type: ${chalk.bold.red(answers.type)}\n` +
      `Module name: ${chalk.bold.red(answers.name)}\n` +
      `Folder: ${chalk.bold.red(
        `packages/${answers.type}-${answers.name}`
      )}`
  });

  inquirer.prompt(confirmQuestions).then(input => {
    if (input.confirmDetails.toLowerCase() === 'y') {
      addNewPackage(answers);
    } else {
      utils.log({
        padding: true,
        type: 'warning',
        msg: `You did not confirm. Please try again`
      });
      process.exit(0);
    }
  });
}

function addNewPackage(answers) {
  const { name, type = 'util' } = answers;
  const packageName = `${type}-${name}`;
  const folderPath = `packages/${packageName}`;

  try {
    execSync(`mkdir ${folderPath}`);
  } catch (e) {
    utils.log({
      padding: true,
      type: 'error',
      msg:
        'Folder can not be created. Ensure your current directory and the module with same name should not exist.'
    });
    process.exit(0);
  }

  try {
    // Manually adding files so that only selected files goes into final package
    // and also to exclude certain files
    execSync(`cp -r ${templateFolder}/* ${folderPath}`);
  } catch (e) {
    utils.log({
      padding: true,
      type: 'error',
      msg:
        'Can not copy template.  Ensure your current directory and the module with same name should not exist.'
    });
    process.exit(0);
  }

  let list = [
    {
      file: `${folderPath}/package.json`,
      replace: [
        {
          to: namePlaceholder,
          with: name
        },
        {
          to: typePlaceholder,
          with: type
        }
      ]
    },
    {
      file: `${folderPath}/README.md`,
      replace: [
        {
          to: namePlaceholder,
          with: name
        }
      ]
    },
    {
      file: `${folderPath}/index.ts`,
      replace: [
        {
          to: namePlaceholder,
          with: name
        }
      ]
    },
    {
      file: `${folderPath}/test/index.spec.ts`,
      replace: [
        {
          to: namePlaceholder,
          with: name
        }
      ]
    }
  ];

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
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) {
        return utils.log({
          type: 'error',
          msg: err
        });
      }

      // modify it by replacing all the occurrences of different patterns
      for (let j = 0; j < list[i].replace.length; j++) {
        let toReplace = list[i].replace[j].to;
        let withReplace = list[i].replace[j].with;
        let re = new RegExp(toReplace, 'g');

        data = data.replace(re, withReplace);
      }

      // Write file once all the occurrences of pattern have been modified
      fs.writeFile(file, data, 'utf8', function(err) {
        if (err)
          return utils.log({
            type: 'error',
            msg: err
          });
      });
    });
  }
}

function init() {
  inquirer.prompt(questions).then(answers => {
    confirm(answers);
  });
}

init();
