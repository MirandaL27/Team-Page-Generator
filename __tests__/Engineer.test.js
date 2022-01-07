const Engineer = require("../lib/Engineer.js");

test('creates an engineer object', () =>{
    const engineer = new Engineer('Jarod Prower', '1234', 'JPrower@aol.com','MirandaL27');

    expect(engineer.name).toBe('Jarod Prower'); 
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('JPrower@aol.com');
    expect(engineer.gitHub).toBe('MirandaL27');
})

test('gets manager officeNumber', () =>{
    const engineer = new Engineer('Jarod Prower', '1234', 'JPrower@aol.com','MirandaL27');
    expect(engineer.getGitHub()).toBe('MirandaL27');
})

test('gets employee', () => {
    const engineer = new Engineer('Jarod Prower', '1234', 'JPrower@aol.com','MirandaL27');
    expect(engineer.getRole()).toMatchObject(engineer);
})