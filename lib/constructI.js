const Employee = require('./constructs')
class Intern extends Employee{
    constructor(name, id, email, iSchool){
        super(name, id, email)
        this.iSchool = iSchool
        this.again = "Intern"
    }
    getSchool(){
        return this.iSchool
    }
    getAgain(){
        return this.again
    }
}

module.exports = Intern