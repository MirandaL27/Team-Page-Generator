//Required Packages
const Inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');


const promptUser = () => {
    const manager = new Manager();
    return Inquirer.prompt(manager.questions);
}

const promptEngineersInterns = employeeData => {
    const engineer = new Engineer();
    const intern = new Intern();
    if(!employeeData.EngineersInternsArray){
        employeeData.EngineersInternsArray = [];
    }
    return (employeeData.type === 'engineer' ? inquirer.prompt(engineer.questions): inquirer.prompt(intern.questions))
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
