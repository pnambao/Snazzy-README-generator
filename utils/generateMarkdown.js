
// function will return a license badge based on which license is passed.If there is no license, an empty string is returned.
var badge = function renderLicenseBadge(license){

  if (license == "Boost") {
    badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    
  } else if (license == "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    
  } else if (license == "ISC") {
    badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"

  } else if (license == "IBM") {
    badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"

  } else if (license == ``) {
    badge = ""
  }
}

//function will return the license link. If there is no license, an empty string will be returned.
var link = function renderLicenseLink(license) {

  if (license == "Boost") {
    link = "[Boost](https://www.boost.org/LICENSE_1_0.txt)"

  }else if (license == "MIT") {
    link = "[MIT](https://opensource.org/licenses/MIT)"

  }else if (license == "ISC") {
    link = "[ISC](https://opensource.org/licenses/ISC)"

  }else if (license == "IBM") {
    link = "[IBM](https://opensource.org/licenses/IPL-1.0)"

  } else if (license == '') {
    link = ""
  }
}

//Function will return the license section of README. If there is no license, an empty string will be returned.

function renderLicenseSection(license) {
  var apend =  renderLicenseLink(license)
  return `${apend}`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
