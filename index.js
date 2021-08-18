//packages imported for this function
const inquirer = require("inquirer");
const generater = require("./utils/generateMarkdown");
const fs = require("fs")

//The array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'password',
    message: 'Do you have short description about the project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'what are the installation details ?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What are the usage steps?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'WHat/who contributed to this project?',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'If applicable, please provide test steps?',
    name: 'test',
  },
  {
    type: 'checkbox',
    message: 'What is project license type ?',
    name: 'license',
    choices: ['Boost','MIT', 'ISC', 'IBM', 'one']
  },
  {
    type: 'input',
    message: 'what is your GitHub username ?',
    name: 'username', 
  },
  {
    type: 'input',
    message: 'what is your email address ?',
    name: 'email', 
  },
];

//function that writes to README file
function writeToFile(fileName, data) {

    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
