function renderLicenseBadge(license) {
  switch (license) {
    case 'None':
      return '';
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU AGPLv3':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    default:
      return ``;
  }
}

function renderLicenseLink(license) {
    switch (license) {
      case 'None':
        return '';
      case 'Apache License 2.0':
        return `https://choosealicense.com/licenses/apache-2.0/`;
      case 'GNU AGPLv3':
        return `https://choosealicense.com/licenses/gpl-3.0/`;
      case 'MIT License':
        return `https://choosealicense.com/licenses/mit/`;
      case 'Mozilla Public License 2.0':
        return `https://choosealicense.com/licenses/mpl-2.0/`;
      default:
        return ``;
  }
}

function renderLicenseSection(license) {
  switch (license) {
    case 'None':
      return '';
    case 'Apache License 2.0':
      return 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
    case 'GNU AGPLv3':
      return 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
    case 'MIT License':
      /* return 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.' */
      return 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
    case 'Mozilla Public License 2.0':
      return 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.'
    default:
      return '';
  }  
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description
  ${data.description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

![](${data.usagePicture}?raw=true)

## Credits
Author: ${data.credits}
Github Repository:  [![Github Repository](${data.githubrepo})
Project URL: [![Application URL](${data.url})



## License  ${renderLicenseBadge(data.license)}
Link ${renderLicenseLink(data.license)}

#### License description
${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
