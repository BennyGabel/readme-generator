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
      return 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
    case 'Mozilla Public License 2.0':
      return 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.'
    default:
      return '';
  }
}

function renderLanguagesBadges(language) {
  switch (language) {
    case 'Bootstrap':
      return 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white';
    case 'CSS':
      return 'https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white';
    case 'HTML':
      return 'https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white';
    case 'JavaScript':
      return 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' ;
    case 'jQuery':
      return 'https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white';
    case 'Node JS':
      return 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' ;
    default:
      return '';
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation <h2>
${data.installation}

### Usage   <h3>
${data.usage}

### Languages Used
renderLanguagesBadges

## License
#### ${data.license}
Link ${renderLicenseLink(data.license)}

#### License description
${renderLicenseSection(data.license)}

#### License Badge
${renderLicenseBadge(data.license)}


![Benny Gabel](/src/img/ProfilePicture.JPG?raw=true)
`;
}

module.exports = generateMarkdown;
