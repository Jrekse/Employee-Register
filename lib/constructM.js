const Employee = require('./constructs')
class Manager extends Employee{
    constructor(name, id, email, oNumber){
        super(name, id, email)
        this.oNumber = oNumber
        this.again = "Manager"
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