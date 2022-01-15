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
