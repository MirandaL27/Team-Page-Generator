const Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(name='', id=0, email='', school='', type='intern'){
        super(name, id, email, type);
        this.school = school;
        this.questions.push({
            type:'input',
            name: 'school',
            message: `What is the school of this ${this.type}?`
        });
        this.questions.push({
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to add another employee?'
        });
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return this;
    }
}

module.exports = Intern;