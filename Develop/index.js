// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your new project?"
    },
    {
        type: "input",
        name: "description",
        message: "Type a short description about your new project."
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be ran in order to install dependencies?"
    },
    {
        type: "input",
        name: "usage",
        message: "What do users need to know about your new project's repository?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What do users need to know about contributing to your new project's repository?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run a test?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like for your new project?",
        choices: ["Apache 2.0", "MIT", "Boost Software 1.0", "Eclipse Public 2.0", "Mozilla Public 2.0", "None"]
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("README.md", generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();
