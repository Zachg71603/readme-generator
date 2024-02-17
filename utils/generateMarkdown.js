//switch cases for license???
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    switch (data.license) {
      case 'Apache 2.0':
        licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case 'GNU GPLv3':
        licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case 'MIT':
        licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case 'Mozilla Public 2.0':
        licenseBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;
      default:
        break;
    }
    return `# ${data.title}
  
    ## Project Description:
    ${data.description}

    ## Table of Contents
    -[Installation](#install)
    -[Usage](#usage)
    -[Contributors](#contributors)
    -[Test](#test)
    -[Questions](#questions)
    -[License](#license)
    -[Author](#author)
  
  ## License
  ${licenseBadge}
  
  ## Installation
  ${data.install}
  
  
  ## Usage
  ${data.use}
  
  
  ## Contributors
  ${data.contribute}
  
  
  ## Test
  ${data.test}
  
  
  ## Questions
  You can checkout my GitHub here: https://github.com/${data.username};
  If you have any questions, contact ${data.email}.
  
  
  ## Author
  ![Github Profile Picture](${data.image})
  
  
  `;
  }
  
  module.exports = generateMarkdown;