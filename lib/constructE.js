const Employee = require('./constructs')
class Engineer extends Employee{
    constructor(name, id, email, github){
        this.github = github
        this.Eagain = "Engineer"
        super(name, id, email)
    }
    getGithub(){
        return this.github
    }
    getAgain(){
        return this.Eagain
    }
}

module.exports = Engineer