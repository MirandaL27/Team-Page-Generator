const Employee = require('./Employee.js');

class Engineer extends Employee{
    constructor(name='', id=0, email='', gitHub='', type='engineer'){
        super(name, id, email, type);
        this.gitHub = gitHub;
        this.type = type;
        this.questions.unshift({
            type: 'list',
            name: 'type',
            message: 'What type of employee do you want to add next?',
            options: ['Engineer', 'Intern']
        });
        this.questions.push({
            type: 'input',
            name: 'gitHub',
            message: `What is the github username of this ${type}?`
        });
        this.questions.push({
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to add another employee?'
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