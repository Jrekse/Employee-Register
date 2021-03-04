const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const html = require('./src/pageTemplate')
const Manager = require('./lib/constructs')
const Engineer = require('./lib/constructs')
const Intern = require('./lib/constructs')
const teamArray = [];

function init(){
    //starts code
    return inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'What role do you play in the team?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
}

function takeResponseS(){
    init().then(function(response){
        if (response.start === 'Intern'){
            takeResponseI();
        }
        else if (response.start === 'Manager'){
            takeResponseM();
        }
        else if (response.start === 'Engineer'){
            takeResponseE();
        }
    })
}

function createTeamManager(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Mname',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'Mid',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'Memail',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'Mgithub',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'Mnumber',
            message: 'What is your Office number?'
        },
        {
            type: 'list',
            name: 'again',
            message: 'Would you like to add another team member?',
            choices: ['Intern', 'Manager', 'Engineer', 'No, finish.'],
        }
    ]);
}

function createTeamIntern(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Iname',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'Iid',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'Iemail',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'Igithub',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'Ischool',
            message: 'What intern school are you from?'
        },
        {
            type: 'list',
            name: 'Iagain',
            message: 'Would you like to add another team member?',
            choices: ['Intern', 'Manager', 'Engineer', 'No, finish.'],
        }
    ]);
}

function createTeamEngineer(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Ename',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'Eid',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'Eemail',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'Egithub',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'Eschool',
            message: 'What school did you graduate from?'
        },
        {
            type: 'list',
            name: 'Eagain',
            message: 'Would you like to add another team member?',
            choices: ['Intern', 'Manager', 'Engineer', 'No, finish.'],
        }
    ]);
}

function takeResponseM(){
    createTeamManager().then(function(response){
        const managerInfo = new Manager (response.Mname, response.Mid, response.Memail, response.Mgithub)
        teamArray.push(managerInfo);
        if (response.again === 'Intern'){
            takeResponseI();
        }
        else if (response.again === 'Manager'){
            takeResponseM();
        }
        else if (response.again === 'Engineer'){
            takeResponseM();
        }
        else if (response.again === 'No, finish.'){
            
        }
    })
}

function takeResponseI(){
    createTeamIntern().then(function(response){
        const internInfo = new Intern (response.Iname, response.Iid, response.Iemail, response.Igithub)
        teamArray.push(internInfo);
        if (response.Iagain === 'Intern'){
            takeResponseI();
        }
        else if (response.Iagain === 'Manager'){
            takeResponseM();
        }
        else if (response.Iagain === 'Engineer'){
            takeResponseE();
        }
        else if (response.Iagain === 'No, finish.'){
            
        }
    })
}

function takeResponseE(){
    createTeamEngineer().then(function(response){
        const engineerInfo = new Engineer (response.Ename, response.Eid, response.Eemail, response.Egithub)
        teamArray.push(engineerInfo);
        if (response.again === 'Intern'){
            takeResponseI();
        }
        else if (response.Eagain === 'Manager'){
            takeResponseM();
        }
        else if (response.Eagain === 'Engineer'){
            takeResponseE();
        }
        else if (response.Eagain === 'No, finish.'){
            
        }
    })
}



takeResponseS()