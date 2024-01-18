// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

### Description

${data.description}



### Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Contributing](#contributing)

- [Test](#test)

- [Questions](#questions)



### Installation
Type the following commands to install dependencies:

${data.installation}



### Usage

${data.usage}



### Contributing

${data.contributing}



### Test

${data.test}



### Questions

${data.username}
${data.url}

Please email me if you have any questions.
${data.email}




`;
}

module.exports = generateMarkdown;
