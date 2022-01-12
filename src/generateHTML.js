const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

var generateHTML = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="assets/css/style.css">
    </head>
    <body>
    <!--header section-->
        <header>
            <h1>My Team</h1>
        </header>
    <main>
        <div class="manager">
            <p>name: Miranda Lane</p>
            <p>id: 1234</p>
            <p>email: m@aol.com</p>
            <p>office number: 2345</p>
        </div>
        <div class="engineer">
            <p>name: Poppy Dada</p>
            <p>id: 3456</p>
            <p>email: p@aol.com</p>
            <p>github: dada24</p>
        </div>
        <div class="intern">
            <p>name: Micheal Washington</p>
            <p>id: 4567</p>
            <p>email: w@aol.com</p>
            <p>school: UCSB</p>
        </div>
    </main>    
    </body>
    </html>`;
}


module.exports = generateHTML;