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
  return `
  # ${data.project}
![GitHub license](https://img.shields.io/badge/license-$-{data.license})

## Description

this is a short description

## Table of Contents

* [Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)

##  Installation

To install necessary dependencies, run the following command:

##  Usage

nothing

##  License

This project is licensed under the APACHE 2.0 license.

##  Contributing

nothing

##  Tests

To run tests, run the following command:

```

```

##  Questions

If you have any questions about the repo, open an issue or contact me directly @ fun@guy.com You can find more of my work at [funguy] (https://github.com/funguy/).


`;
}

module.exports = generateMarkdown;
