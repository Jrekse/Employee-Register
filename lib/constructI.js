const Employee = require('./constructs')
class Intern extends Employee{
    constructor(name, id, email, iSchool){
        this.iSchool = iSchool
        this.Iagain = "Intern"
        super(name, id, email)
    }
    getSchool(){
        return this.iSchool
    }
    getAgain(){
        return this.Iagain
    }
}

module.exports = Intern