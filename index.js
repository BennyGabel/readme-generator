const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');

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
                        name: 'installation',
                        message: 'How to install?'
                    },
                    {
                        type: 'input',
                        name: 'usage',
                        message: 'How to use?'
                    },
                    {
                        // Will insert picture/screenshot in README.md
                        type: 'input',
                        name: 'usagePicture',
                        message: 'Screenshot of how to use?'
                    },
                    {
                        type: 'input',
                        name: 'credits',
                        message: 'Credits'
                    },
                    {
                        type: 'list',
                        name: 'license',
                        message: 'What license does your project have?',
                        choices: ['None', 'Apache License 2.0', 'GNU AGPLv3', 'MIT License', 'jMozilla Public License 2.0']
                    }
                   ];

function init() {
    /* .then(data=>{console.log("***",data) */
    inquirer.prompt(questions)
        .then(data=>{console.log("***",data)
        fs.writeFileSync('README.md',generatePage(data))    } )

}

init();
