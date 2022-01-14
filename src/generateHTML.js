const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

const generateEmployeeHTML = data =>{
    let outputStr = '';
    data.forEach(data => {
        let iconStr = '';
        if(data.type ==='manager'){
            iconStr = '<img src="https://img.icons8.com/ios-glyphs/30/000000/coffee.png"/>'
        }
        else if(data.type ==='engineer'){
            iconStr = '<img src="https://img.icons8.com/ios-filled/50/000000/computer.png"/>'
        }
        else{
            iconStr = '<img src="https://img.icons8.com/ios-filled/50/000000/school.png"/>'
        }
        outputStr += `<div class="${data.type}">
        <h2>Name: ${data.name}</h2>
        ${iconStr}
        <p>Id: ${data.id}</p>
        <a href="mailto:${data.email}">Email: ${data.email}</a>
        `

        if(data.type === "manager"){
            outputStr +=`<p>Office Number: ${data.officeNumber}</p>
            `
        }
        else if(data.type === "engineer"){
            outputStr +=`<a target="_blank" href="https://github.com/${data.gitHub}">GitHub: https://github.com/${data.gitHub}</a>
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