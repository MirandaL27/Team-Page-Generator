const Manager = require("../lib/Manager.js");

test('creates an Manager object', () =>{
    const manager = new Manager('Jarod Prower', '1234', 'JPrower@aol.com','5678','manager');
    const typeStr = manager.type;
    expect(manager.name).toBe('Jarod Prower'); 
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('JPrower@aol.com');
    expect(manager.officeNumber).toBe('5678');
    expect(manager.type).toBe('manager');

    expect(manager.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'name',
                message: `What is the name of this ${typeStr}?`
            })
        ])
    )
    expect(manager.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'id',
                message: `What is the id of this ${typeStr}?`
            })
        ])
    )
    expect(manager.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'email',
                message: `What is the email of this ${typeStr}?`
            })
        ])
    )
    expect(manager.questions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                type:'input',
                name: 'officeNumber',
                message: `What is the office number of this ${typeStr}?`
            })
        ])
    )
})

test('gets manager officeNumber', () =>{
    const manager = new Manager('Jarod Prower', '1234', 'JPrower@aol.com','5678');
    expect(manager.getOfficeNumber()).toBe('5678');
})

test('gets employee', () => {
    const manager = new Manager('Jarod Prower', '1234', 'JPrower@aol.com','5678');
    expect(manager.getRole()).toMatchObject(manager);
})