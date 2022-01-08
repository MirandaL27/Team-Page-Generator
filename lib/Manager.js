const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name='', id=0, email='', officeNumber=0, type='manager'){
        super(name, id, email, type);
        this.officeNumber = officeNumber;
        this.type = type;
        this.questions.push({
            type:'input',
            name: 'officeNumber',
            message: `What is the office number of this ${this.type}?`
        })
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return this;
    }
}

module.exports = Manager;