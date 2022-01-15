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
    expect(generateHTML.generateEmployeeHTML(data)).toMatch(/<div class="manager">[\s]*<h2>Name: Miranda Lane<\/h2>[\s]*<img src="https:\/\/img.icons8.com\/ios-glyphs\/30\/000000\/coffee.png"\/>[\s]*<p>Id: 1234<\/p>[\s]*<a href="mailto:m@aol.com">Email: m@aol.com<\/a>[\s]*<p>Office Number: 2345<\/p>[\s]*<\/div>[\s]*<div class="engineer">[\s]*<h2>Name: Poppy Dada<\/h2>[\s]*<img src="https:\/\/img.icons8.com\/ios-filled\/50\/000000\/computer.png"\/>[\s]*<p>Id: 4567<\/p>[\s]*<a href="mailto:p@aol.com">Email: p@aol.com<\/a>[\s]*<a target="_blank" href="https:\/\/github.com\/poppyDada">GitHub: https:\/\/github.com\/poppyDada<\/a>[\s]*<\/div>[\s]*<div class="intern">[\s]*<h2>Name: Harry Washington<\/h2>[\s]*<img src="https:\/\/img.icons8.com\/ios-filled\/50\/000000\/school.png"\/>[\s]*<p>Id: 5778<\/p>[\s]*<a href="mailto:hw@aol.com">Email: hw@aol.com<\/a>[\s]*<p>School: UCSB<\/p>[\s]*<\/div>[\s]*$/);
})


// test("test the output of the generateHTML function", ()=>{
//     let data = [{
//         type: 'manager',
//         name: 'Miranda Lane',
//         id: '1234',
//         email: 'm@aol.com',
//         officeNumber: '2345'  
//     },
//     {
//         type: 'engineer',
//         name: 'Poppy Dada',
//         id: '3456',
//         email: 'pd@aol.com',
//         gitHub: 'poppyD'
//     },
// ]

//     let resultStr = `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>My Team</title>
//         <link rel="stylesheet" href="style.css">
//     </head>
//     <body>
//     <!--header section-->
//         <header>
//             <h1>My Team</h1>
//         </header>
//     <main>
//         <div class="employee-container">
//             <div class="manager">
//         <h2>Name: Miranda lane</h2>
//         <img src="https://img.icons8.com/ios-glyphs/30/000000/coffee.png"/>
//         <p>Id: 1234</p>
//         <a href="mailto:m@aol.com">Email: m@aol.com</a>
//         <p>Office Number: 2345</p>
//             </div>
//         <div class="engineer">
//         <h2>Name: Poppy Dada</h2>
//         <img src="https://img.icons8.com/ios-filled/50/000000/computer.png"/>
//         <p>Id: 3456</p>
//         <a href="mailto:pd@aol.com">Email: pd@aol.com</a>
//         <a target="_blank" href="https://github.com/poppyD">GitHub: https://github.com/poppyD</a>
//             </div>
        
//         </div>
//     </main>    
//     </body>
//     </html>`
//     expect(generateHTML.generateHTML(data)).toMatch(resultStr);
// })