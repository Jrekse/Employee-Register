const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const teamArray = [];
const Manager = require('./lib/constructM')
const Engineer = require('./lib/constructE')
const Intern = require('./lib/constructI')



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
            name: 'again',
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
            name: 'again',
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
            takeResponseE();
        }
        else if (response.again === 'No, finish.'){
            HTMLTemplate(Mtemplate(teamArray), Etemplate(teamArray), Itemplate(teamArray))
        }
    })
}

function takeResponseI(){
    createTeamIntern().then(function(response){
        const internInfo = new Intern (response.Iname, response.Iid, response.Iemail, response.Igithub)
        teamArray.push(internInfo);
        if (response.again === 'Intern'){
            takeResponseI();
        }
        else if (response.again === 'Manager'){
            takeResponseM();
        }
        else if (response.again === 'Engineer'){
            takeResponseE();
        }
        else if (response.again === 'No, finish.'){
            Mtemplate() = Mtemplate(teamArray)
            HTMLTemplate(Mtemplate(), Etemplate(teamArray), Itemplate(teamArray))
        }
    })
}

function takeResponseE(){
    createTeamEngineer().then(function(response){
        const engineerInfo = new Engineer (response.Ename, response.Eid, response.Eemail, response.Eschool, response.Egithub)
        teamArray.push(engineerInfo);
        if (response.again === 'Intern'){
            takeResponseI();
        }
        else if (response.again === 'Manager'){
            takeResponseM();
        }
        else if (response.again === 'Engineer'){
            takeResponseE();
        }
        else if (response.again === 'No, finish.'){
            HTMLTemplate(Mtemplate(teamArray), Etemplate(teamArray), Itemplate(teamArray))
        }
    })
}


function Mtemplate(arr){
    MObj = arr.filter((employee) => (employee.again === 'Manager'))
    const makeCardStringM = MObj.map(Manager =>
    `<div class="card" style="width: 18rem;">
         <div class="card-body">
             <h5 class="card-title">${Manager.getName()}</h5>
             <h4 class="card-subtitle mb-2">Manager</h4>
             <div class="card-body">ID:${Manager.getId()}</div>
             <div class="card-body">Email:${Manager.getEmail()}</div>
             <div class="card-body">Office Number:${Manager.getONumber()}
         </div>
     </div>`
    );
     return makeCardStringM
}

function Etemplate(arr){
    EObj = arr.filter((employee) => (employee.again === 'Engineer'))
    const makeCardStringE = EObj.map(Engineer =>
    `<div class="card" style="width: 18rem;">
         <div class="card-body">
             <h5 class="card-title">${Engineer.getName()}</h5>
             <h4 class="card-subtitle mb-2">Engineer</h4>
             <div class="card-body">ID:${Engineer.getId()}</div>
             <div class="card-body">Email:${Engineer.getEmail()}</div>
             <div class="card-body">Github:${Engineer.getGithub()}</div>
             <div class="card-body">Alma Mater:${Engineer.getEschool()}
         </div>
     </div>`
    );
     return makeCardStringE
}

function Itemplate(arr){
    IObj = arr.filter((employee) => (employee.again === 'Intern'))
    const makeCardStringI = IObj.map(Intern =>
    `<div class="card" style="width: 18rem;">
         <div class="card-body">
             <h5 class="card-title">${Intern.getName()}</h5>
             <h4 class="card-subtitle mb-2">Intern</h4>
             <div class="card-body">ID:${Intern.getId()}</div>
             <div class="card-body">Email:${Intern.getEmail()}</div>
             <div class="card-body">Github:${Intern.getSchool()}</div>
         </div>
     </div>`
    );
     return makeCardStringI
}

function HTMLTemplate(Man, Eng, Int){
    fs.writeFile('index.html',
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
        <title>Document</title>
    </head>
    <body>
        <div class="navbar-nav" id="title">
            <h1>My Team</h1>
        </div>
        <hr>
        <br>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-4" id="cardcols">
                    ${Man}
                </div>
            </div>
            <div class="row">
                <div class="col-4" id="cardcols">
                    ${Eng}
                </div>
            </div>
            <div class="row">
                <div class="col-4" id="cardcols">
                    ${Int}
                </div>
            </div>
        </div>
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
            crossorigin="anonymous"
        ></script>
    </body>
    </html>`, (err) => err ? console.log(err) : console.log('you son of a bi%$* you did it')
    )
}

takeResponseS()