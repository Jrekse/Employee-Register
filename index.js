const inquirer = require('inquirer');
const jest = require('jest');
const path = require('path');
const fs = require('fs');
const html = require('./lib/constructs')

const promptUser = 
    [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'list',
            name: 'job',
            message: 'What is your role in the team?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
        },
        {
            type: 'list',
            name: 'again',
            message: 'Would you like to add another team member?',
            choices: ['Yes', 'No'],
        }
    ];
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

function init() {
    inquirer.prompt(promptUser).then((...inquirerResponses)=>{
        writeToFile('index.html', gen({...inquirerResponses}))
    })
}

init();