const Intern = require("../lib/Intern.js");

test('creates an intern object', () =>{
    const intern = new Intern('Jarod Prower', '1234', 'JPrower@aol.com','UCSB');

    expect(intern.name).toBe('Jarod Prower'); 
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('JPrower@aol.com');
    expect(intern.school).toBe('UCSB');
})

test('gets Intern School', () =>{
    const intern = new Intern('Jarod Prower', '1234', 'JPrower@aol.com','UCSB');
    expect(intern.getSchool()).toBe('UCSB');
})

test('gets Intern', () => {
    const intern = new Intern('Jarod Prower', '1234', 'JPrower@aol.com','UCSB');
    expect(intern.getRole()).toMatchObject(intern);
})