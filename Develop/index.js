// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        prompt: "What is the title of your new project?"
    },
    {
        type: "input",
        name: "title",
        prompt: "What is the title of your new project?"
    },
    {
        type: "input",
        name: "description",
        prompt: "Type a short description about your new project."
    },
    {
        type: "input",
        name: "Usage",
        prompt: "What do users need to know about your new project's repository?"
    },
    {
        type: "input",
        name: "contribution",
        prompt: "What do users need to know about contributing to your new project's repository?"
    },
    {
        type: "input",
        name: "test",
        prompt: "What command should be used to run a test?"
    },
    {
        type: "list",
        name: "license",
        prompt: "Which license would you like for your new project?",
        choices: ["Apache", "MIT", "Boost Software", "Eclipse Public", "Mozilla Public", "The Unlicense", "none"]
    },
    {
        type: "input",
        name: "username",
        prompt: "What is your Github username?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
