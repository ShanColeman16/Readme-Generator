// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'project',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a project description?'
  },
  {
    type: 'input',
    name: 'install',
    message: 'Provide installation instructions.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions.'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide usage instructions.'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please contribute any additional details if needed.'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide test instructions.'
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Please select a license.',
    choices: [
      GNU,
      BSD,
      MLP,
    ]
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (answers) {
      const responses = generateMarkdown(answers);
      console.log(responses);
    });
}

// Function call to initialize app
init();
