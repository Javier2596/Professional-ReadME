// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseSpec = license.license;
  let myLicense = '';
  
  if(licenseSpec === 'GPLv3') {
    myLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if(licenseSpec === 'MIT') {
    myLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if(licenseSpec === 'Mozilla Public License 2.0'){
    myLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  } else {
    return '';
  }
  return myLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = license.licenseLink;
  let myLink = '';
  
  if(licenseLink === 'GPLv3') {
    myLink = `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if(licenseLink === 'MIT') {
    myLink = `(https://opensource.org/licenses/MIT)`
  } else if(licenseLink === 'Mozilla Public License 2.0'){
    myLink = `(https://opensource.org/licenses/MPL-2.0)`
  } else {
    return '';
  }
  return myLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let noLicense = !license.license;
  if(noLicense) {
    return '';
  } else {
  return `## License ${license.license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title ${data.title} \n ## ${renderLicenseBadge()} \n ## Description ${data.description} \n ## Installation ${data.installation} \n ## Usage ${data.usage} \n ## Contributions ${data.contribution} \n ## Testing ${data.test} \n ## ${renderLicenseSection(license)} ${renderLicenseLink()}
`;
}


module.exports = generateMarkdown;
