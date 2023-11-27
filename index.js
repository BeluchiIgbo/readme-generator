// TODO: Include packages needed for this application
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Add the description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Enter instructions for installation:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage attributes:",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Enter your contribution guidelines:",
  },
  {
    type: "input",
    name: "Tests:",
    message:
      "Enter the test instructions:",
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your application:',
    choices: ['MIT', 'ISC', 'None'],
  },
  {
    type: "input",
    name: "user github",
    message: "Enter GitHub username:",
  },
  {
    type: "input",
    name: "user email",
    message: "Enter email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
  .then(() => console.log(`readme has been created`))
}

// Function call to initialize app
init();