const Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(name, id, email, school, type){
        super(name, id, email, type);
        this.school = school;
        this.questions.push({
            type:'input',
            name: 'school',
            message: `What is the school of this ${this.type}?`
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