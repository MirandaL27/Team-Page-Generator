const Engineer = require("../lib/Engineer.js");

test('creates an engineer object', () =>{
    const engineer = new Engineer('Jarod Prower', '1234', 'JPrower@aol.com','MirandaL27');

    expect(engineer.name).toBe('Jarod Prower'); 
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('JPrower@aol.com');
    expect(engineer.gitHub).toBe('MirandaL27');
})

test('gets engineer github', () =>{
    const engineer = new Engineer('Jarod Prower', '1234', 'JPrower@aol.com','MirandaL27');
    expect(engineer.getGitHub()).toBe('MirandaL27');
})

test('gets engineer', () => {
    const engineer = new Engineer('Jarod Prower', '1234', 'JPrower@aol.com','MirandaL27');
    expect(engineer.getRole()).toMatchObject(engineer);
})