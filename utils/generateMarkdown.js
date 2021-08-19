
// function will return a license badge based on which license is passed.If there is no license, an empty string is returned.
function renderLicenseBadge(license){
  let badge = "";
  if(license === "Boost") {
    badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"} 
  if (license == "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}
  if (license == "ISC") {
    badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"}
  if (license == "IBM") {
    badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"}
  else { badge = ""}
}

//function will return the license link. If there is no license, an empty string will be returned.
function renderLicenseLink(license) {
let link = "";
  if (license === "Boost") {
    link = "[Boost](https://www.boost.org/LICENSE_1_0.txt)"}
  if (license == "MIT") {
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

  if(data.description !== '') {

    var desc = `
    ## Description
    ${data.description}`

  } else {
    desc = ``
  }

  if (data.installation !== '') {
      var intallTOC = ` - [Installation](#Installation)<br>`
      var intallation = `
      ## Installation
      ${data.installation}`

  } else {
    installation = ``
    installTOC = ``
  }

  if (data.usage !== '') {
    var usageTOC = ` - [Usage](#Usage)<br>`
    var usage = `
    ## Usage
    ${data.usage}`

  } else {
    usage = ``
    usageTOC = ``
  }

  if(data.contribution !== '') {
    var contributionTOC = ` - [Contributing](#Contributing)<br>`
    var contribution = `
    ${data.contribution}`

  } else {
    contribution = ``
    contributionTOC = ``
  }


  if (data.test !== '') {
    var testTOC = ` - [Tests](#Tests)<br>`
    var test = `
    ## Tests
    ${data.test}`

  } else {
    test = ``
    testTOC = ``
  }

  if (data.license !== '') {
    var licenseTOC = ` - [License](#License)<br>`
    var section2 = `
    ## License
    ${section}`
    
  } else {
    section = ``
    licenseTOC = ``
  }

  if (data.username !== '' || data.email !== '') {
    var questionTOC = ` - [Question](#Questions)`
    var question = `
    ## Questions
    Github: [@${data.username}](www.github.com/${data.username}) <br>
    Email: ${data.email}`
    
  } else {
    question = ``
    questionTOC =``
  }

  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}


  ${newBadge}

  ${desc}

  ## Table of Contents

  ${intallTOC}
  ${usageTOC}
  ${contributionTOC}
  ${testTOC}
  ${licenseTOC}
  ${questionTOC}

  ${installation}



  ${usage}



  ${contribution}



  ${test}



  ${section2}



  ${question}
`;
}

module.exports = generateMarkdown;
