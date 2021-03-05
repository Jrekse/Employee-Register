const Employee = require('./constructs')
class Manager extends Employee{
    constructor(name, id, email, oNumber){
        this.oNumber = oNumber
        this.again = "Manager"
        this.github = github
        super(name, id, email)
    }
    getONumber(){
        return this.oNumber
    }
    getAgain(){
        return this.again
    }
    getGithub(){
        return this.github
    }
}

module.exports = Manager