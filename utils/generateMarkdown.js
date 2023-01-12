// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) { 
  return `![GitHub license](https://img.shields.io/badge/license-$-{data.license})`;
}
// TODO: Create a function that returns the license link

function renderLicenseLink(license) { 
  return `[${license}](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/
  ${license})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `


  # ${data.project}

  ${renderLicenseSection()}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)

##  Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.install}

\`\`\`

##  Usage

${data.usage} 

##  License

This project is licensed under the ${data.license} license.

##  Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

${data.contributing}

##  Tests

To run tests, run the following command:

\`\`\`
${data.test}

\`\`\`

##  Questions

If you have any questions about the repo, open an issue or contact me directly @coolbreeze.com You can find more of my work at [ShanColeman16] (https://github.com/ShanColeman16).


`;
}

module.exports = generateMarkdown;
