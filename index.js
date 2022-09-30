// TODO: Include packages needed for this application
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
// const { title } = require('process');   ???

// TODO: Create an array of questions for user input
const questions = [{
                        type: 'input',
                        name: 'title',
                        message: 'What is the tile of your project?',
                        validate: titleInput => {
                            if (titleInput) {
                                return true;
                            } else {
                                console.log('Please enter the title of the project');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'description',
                        message: 'What is the description of the  project?'
                    },
                    {
                        type: 'input',
                        name: 'contents',
                        message: 'Table of contents'
                    },
                    {
                        type: 'input',
                        name: 'installation',
                        message: 'How to install?'
                    },
                    {
                        type: 'input',
                        name: 'usage',
                        message: 'How to use?'
                    },
                    {
                        type: 'input',
                        name: 'credits',
                        message: 'Table of contents'
                    },
                    {
                        type: 'list',
                        name: 'license',
                        message: 'What license does your project use?',
                        choices: ['None', 'Apache 2.0', 'GNU AGPLv3', 'MIT', 'Mozilla Public 2.0']
                    },
                    {
                        type: 'list',
                        name: 'Badges',
                        message: 'What badges  does your project use?',
                        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
                    }
                    // {
                    //     type: 'input',
                    //     name: 'Features',
                    //     message: 'Please de features'
                    // },
                   ];
/*
Project title        \| 
Description          \| 
Table of Contents        \| 
Installation        \| 
Usage        \| 
Credits        \| 
License
Badges
Features
*/

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    // console.log(questions);  PASSED
    const promptQuestions = () => {
        return inquirer.prompt(questions)
    }

}

// Function call to initialize app
init();






/*  Personal notes


# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features


*/