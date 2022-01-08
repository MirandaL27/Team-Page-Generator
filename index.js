//Required Packages
const Inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//questions for inquirer
const managerQuestions =[
    //need to ask about the manager info first
    {
        type:'input',
        name: 'name',
        message: 'What is the name of the manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the manager?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is the email of the manager?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of the manager?'
    }
];

const EngineerInternQuestions = [
//need to ask the questions for the engineer/intern (github for engineer, school for intern)
//need to ask the user if they want to add more employees (Y/n)
{
    type:'input',
    name: 'name',
    message: 'What is the name of this engineer?'
},
{
    type: 'input',
    name: 'id',
    message: 'What is the id of the manager?'
},
{
    type: 'input',
    name: 'email',
    message: 'what is the email of the manager?'
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'What is the office number of the manager?'
}
];


const promptUser = () => {
    return Inquirer.prompt(managerQuestions);
}

const promptEngineersInterns = employeeData => {
    if(!employeeData.EngineersInternsArray){
        employeeData.EngineersInternsArray = [];
    }
    return inquirer.prompt(EngineerInternQuestions)
    .then(data => {
        employeeData.EngineersInternsArray.push(data);
      if (data.addMore) {
        return promptEngineersInterns(data);
      } else {
        return data;
      }
    }
    );
};

function init(){
    //call inquirer with the managerQuestions first
    promptUser()
    //call inquirer with the engineers/interns questions (keep going until user is done adding people)
    .then(promptEngineersInterns)
    //call the function to generate the HTML
    .then (employeeData => {
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
