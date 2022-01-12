const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

const generateEmployeeHTML = data =>{
    let outputStr = '';
    data.forEach(data => {
        outputStr += `<div class="${data.type}">
        <p>Name: ${data.name}</p>
        <p>Id: ${data.id}</p>
        <p>Email: ${data.email}</p>
        `

        if(data.type === "manager"){
            outputStr +=`<p>Office Number: ${data.officeNumber}</p>
            `
        }
        else if(data.type === "engineer"){
            outputStr +=`<p>GitHub: https://github.com/${data.gitHub}</p>
            `
        }
        else{
            outputStr += `<p>School: ${data.school}</p>
            `
        }
        outputStr += `</div>
        `
    })

    return outputStr;
}

var generateHTML = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <!--header section-->
        <header>
            <h1>My Team</h1>
        </header>
    <main>
        <div class="employee-container">
            ${generateEmployeeHTML(data)}
        </div>
    </main>    
    </body>
    </html>`;
}


module.exports = {generateHTML,generateEmployeeHTML};