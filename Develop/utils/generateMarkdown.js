// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return `![License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  } else if (license === "MIT") {
    return `![License](https://img.shields.io/badge/license-${license}-yellow.svg)`
  } else if (license === "Boost Software 1.0") {
    return `![License](https://img.shields.io/badge/license-${license}-lightgrey.svg)`
  } else if (license === "Eclipse Public 2.0") {
    return `![License](https://img.shields.io/badge/license-${license}-red.svg)`
  } else if (license === "Mozilla Public 2.0") {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen.svg)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `- [License](#license)`
    )
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
   `### License

    Copyright @ ${license}. All rights reserved.

    Licensed under the ${license} license.`
    )
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}



  ### Description

  ${data.description}

  ### Table of Contents

  - [Installation](#installation)

  - [Usage](#usage)

  ${renderLicenseLink(data.license)}

  - [Contributing](#contributing)

  - [Test](#test)

  - [Questions](#questions)



  ### Description

  ${data.description}



  ### Installation
  Type the following commands to install dependencies:

  ${data.installation}



  ### Usage

  ${data.usage}



  ${renderLicenseSection(data.license)}



  ### Contributing

  ${data.contributing}



  ### Test

  ${data.test}



  ### Questions

  https://github.com/${data.username}

  Please email me at ${data.email} if you have any questions.

  `;
}

module.exports = generateMarkdown;
