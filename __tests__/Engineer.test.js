const Engineer = require("../lib/Engineer.js");

test('creates an engineer object', () =>{
    const engineer = new Engineer('Jarod Prower', '1234', 'JPrower@aol.com','MirandaL27','engineer');
    const typeStr = engineer.type;
    expect(engineer.name).toBe('Jarod Prower'); 
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('JPrower@aol.com');
    expect(engineer.gitHub).toBe('MirandaL27');
    expect(engineer.type).toBe('engineer');

    expect(engineer.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'name',
                message: `What is the name of this ${typeStr}?`
            })
        ])
    )
    expect(engineer.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'id',
                message: `What is the id of this ${typeStr}?`
            })
        ])
    )
    expect(engineer.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'email',
                message: `What is the email of this ${typeStr}?`
            })
        ])
    )
    expect(engineer.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'gitHub',
                message: `What is the github username of this ${typeStr}?`
            })
        ])
    )
    expect(engineer.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type: 'confirm',
                name: 'addMore',
                message: 'Would you like to add another employee?'
            })
        ])
    ) 
    
})

test('gets engineer github', () =>{
    const engineer = new Engineer('Jarod Prower', '1234', 'JPrower@aol.com','MirandaL27');
    expect(engineer.getGitHub()).toBe('MirandaL27');
})

test('gets engineer', () => {
    const engineer = new Engineer('Jarod Prower', '1234', 'JPrower@aol.com','MirandaL27');
    expect(engineer.getRole()).toMatchObject(engineer);
})