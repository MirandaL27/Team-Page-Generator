const Employee = require('./Employee.js');

class Engineer extends Employee{
    constructor(name, id, email, gitHub, type){
        super(name, id, email, type);
        this.gitHub = gitHub;
        this.type = type;
        this.questions.push({
            type: 'input',
            name: 'gitHub',
            message: `What is the github username of this ${type}?`
        });
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return this;
    }
    
}

module.exports = Engineer;