// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//this generate a licensebadge icon inside a link
function renderLicenseBadge(license="") {
  console.log("Which license do you want to put in?(Default:none MIT Mozilla IBM")
  if(license==="MIT"){
    return  `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) `;
  }else if(license==="Mozilla"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }else if(license==="IBM"){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
 

}



// TODO: Create a function to generate markdown for README

const generateMarkdown = ({title,description,tableOfContent,installation,usage,license,contributing,tests,questions})=>{

return  `# ${title}

## Description
${description}

## Table of Content:
${tableOfContent}

## Installation:
${installation}

## Usage:
${usage}

## License:
${renderLicenseBadge(license)}

## Contributing:
${contributing}

## Tests:
${tests}

## Questions:
${questions}`;
}

module.exports = generateMarkdown;
