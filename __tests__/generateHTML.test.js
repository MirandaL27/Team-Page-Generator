const generateHTML = require("../src/generateHTML");

test("testing output of the generateEmployeeHTML function",()=>{
    let data = [{
        type: 'manager',
        name: 'Miranda Lane',
        id: '1234',
        email: 'm@aol.com',
        officeNumber: '2345'  
    },
    {
        type: 'engineer',
        name: 'Poppy Dada',
        id: '4567',
        email: 'p@aol.com',
        gitHub: 'poppyDada'
    },
    {
        type: 'intern',
        name: 'Harry Washington',
        id: '5778',
        email: 'hw@aol.com',
        school: 'UCSB'
    }
]
    expect(generateHTML.generateEmployeeHTML(data)).toMatch(/<div class="manager">[\s]*<p>Name: Miranda Lane<\/p>[\s]*<p>Id: 1234<\/p>[\s]*<p>Email: m@aol.com<\/p>[\s]*<p>Office Number: 2345<\/p>[\s]*<\/div>[\s]*<div class="engineer">[\s]*<p>Name: Poppy Dada<\/p>[\s]*<p>Id: 4567<\/p>[\s]*<p>Email: p@aol.com<\/p>[\s]*<p>GitHub: https:\/\/github.com\/poppyDada<\/p>[\s]*<\/div>[\s]*<div class="intern">[\s]*<p>Name: Harry Washington<\/p>[\s]*<p>Id: 5778<\/p>[\s]*<p>Email: hw@aol.com<\/p>[\s]*<p>School: UCSB<\/p>[\s]*<\/div>[\s]*$/);
})

test("test the output of the generateHTML function", ()=>{
    let data = [{
        type: 'manager',
        name: 'Miranda Lane',
        id: '1234',
        email: 'm@aol.com',
        officeNumber: '2345'  
    },
    {
        type: 'engineer',
        name: 'Poppy Dada',
        id: '4567',
        email: 'p@aol.com',
        gitHub: 'poppyDada'
    },
    {
        type: 'intern',
        name: 'Harry Washington',
        id: '5778',
        email: 'hw@aol.com',
        school: 'UCSB'
    }
]

    let resultStr = `<!DOCTYPE html>
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
            <div class="manager">
        <p>Name: Miranda Lane</p>
        <p>Id: 1234</p>
        <p>Email: m@aol.com</p>
        <p>Office Number: 2345</p>
            </div>
        <div class="engineer">
        <p>Name: Poppy Dada</p>
        <p>Id: 4567</p>
        <p>Email: p@aol.com</p>
        <p>GitHub: https://github.com/poppyDada</p>
            </div>
        <div class="intern">
        <p>Name: Harry Washington</p>
        <p>Id: 5778</p>
        <p>Email: hw@aol.com</p>
        <p>School: UCSB</p>
            </div>
        </div>
    </main>
    </body>
    </html>`
    expect(generateHTML.generateHTML(data)).toMatch(resultStr);
})