const Employee = require('./constructs')
class Engineer extends Employee{
    constructor(name, id, email, github){
        this.github = github
        this.again = "Engineer"
        this.Eschool = Eschool
        super(name, id, email)
    }
    getGithub(){
        return this.Egithub
    }
    getAgain(){
        return this.again
    }
    getESchool(){
        return this.Eschool
    }

}

module.exports = Engineer