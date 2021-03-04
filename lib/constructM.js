const Employee = require('./constructs')
class Manager extends Employee{
    constructor(name, id, email, oNumber){
        this.oNumber = oNumber
        this.Eagain = "Manager"
        super(name, id, email)
    }
    getGithub(){
        return this.oNumber
    }
    getAgain(){
        return this.Mgain
    }
}

module.exports = Manager