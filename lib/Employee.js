class Employee{
    constructor(name='', id=0, email='', type='employee'){
        this.name = name;
        this.id = id;
        this.email = email;
        this.type = type;
        this.questions = [{
            type:'input',
            name: 'name',
            message: `What is the name of this ${this.type}?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the id of this ${this.type}?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the email of this ${this.type}?`
        }
    ]
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this;
    }
}


module.exports = Employee;