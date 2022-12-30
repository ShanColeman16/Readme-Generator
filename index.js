// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?"
    },
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email address?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(inquirerResponses){
            console.log(inquirerResponses);
        });
}

// Function call to initialize app
init();
