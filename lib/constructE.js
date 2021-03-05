const Employee = require('./constructs')
class Engineer extends Employee{
    constructor(name, id, email, Egithub, Eschool){
        super(name, id, email)
        this.Egithub = Egithub
        this.again = "Engineer"
        this.Eschool = Eschool
    }
    getGithub(){
        return this.Egithub
    }
    getAgain(){
        return this.again
    }
    getEschool(){
        return this.Eschool
    }

}

module.exports = Engineer