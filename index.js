//Required Packages
const Inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
var employeeArray = [];

const typeQuestion = [
    {
        type: 'list',
        name: 'type',
        message: 'What type of employee do you want to add next?',
        choices: ['Engineer', 'Intern']
    }

]
const promptMoreEmployees = (employeeObj) => {
    return Inquirer.prompt(employeeObj.questions)
    .then(data => {
        employeeArray.push(data);
        console.log(employeeArray);
        return (data.addMore ? promptType(): data);
    });
}
const promptUser = () => {
    const manager = new Manager();
    return Inquirer.prompt(manager.questions);
}
const promptType = () =>{
    return Inquirer.prompt(typeQuestion)
    .then(data => {
        const engineer = new Engineer();
        const intern = new Intern();
        return (data.type === "Engineer" ? promptMoreEmployees(engineer): promptMoreEmployees(intern));
    });
}


function init(){
    //call inquirer with the managerQuestions first
     promptUser()
    //call inquirer with the engineers/interns questions (keep going until user is done adding people)
    .then(data => {
        employeeArray.push(data);
        return promptType();
    })
    //call the function to generate the HTML
    .then (employeeData => {
        //console.log(employeeArray);
        return generatePage(employeeData);
    })
    //write the HTML to a file 
    //.then()    
    //call the function to generate the CSS
    //.then()
    //write the CSS to a file
    //.then()
    .catch(err => {
        console.log(err);
    })
}

init();
