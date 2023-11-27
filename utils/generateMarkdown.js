// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    MIT: "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)",
  };

  if (!license) return "";
  else return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    MIT: `[MIT](https://choosealicense.com/licenses/mit/)`,
    ISC: `[ISC](https://choosealicense.com/licenses/isc/)`,
    none: "",
  };
  return links[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseLink(license)}
  `;
}

// generate markdown for README
function generateMarkdown(data) {
  return `

  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Description
  ${data.description}


  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is under the ${renderLicenseSection(data.license) } liscense.

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions, here is my contact
  GitHub: ${data.github}
  Email:  ${data.email}
`;
}

module.exports = generateMarkdown;