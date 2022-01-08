const Intern = require("../lib/Intern.js");

test('creates an intern object', () =>{
    const intern = new Intern('Jarod Prower', '1234', 'JPrower@aol.com','UCSB','intern');
    const typeStr = intern.type;
    expect(intern.name).toBe('Jarod Prower'); 
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('JPrower@aol.com');
    expect(intern.school).toBe('UCSB');
    expect(intern.type).toBe('intern');

    expect(intern.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'list',
                name: 'type',
                message: 'What type of employee do you want to add next?'
            })
        ])
    )
    expect(intern.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'name',
                message: `What is the name of this ${typeStr}?`
            })
        ])
    )
    expect(intern.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'id',
                message: `What is the id of this ${typeStr}?`
            })
        ])
    )
    expect(intern.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'email',
                message: `What is the email of this ${typeStr}?`
            })
        ])
    )
    expect(intern.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'school',
                message: `What is the school of this ${typeStr}?`
            })
        ])
    )
    expect(intern.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type: 'confirm',
                name: 'addMore',
                message: 'Would you like to add another employee?'
            })
        ])
    ) 
})

test('gets Intern School', () =>{
    const intern = new Intern('Jarod Prower', '1234', 'JPrower@aol.com','UCSB');
    expect(intern.getSchool()).toBe('UCSB');
})

test('gets Intern', () => {
    const intern = new Intern('Jarod Prower', '1234', 'JPrower@aol.com','UCSB');
    expect(intern.getRole()).toMatchObject(intern);
})