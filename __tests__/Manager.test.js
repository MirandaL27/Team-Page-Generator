const Manager = require("../lib/Manager.js");

test('creates an Manager object', () =>{
    const manager = new Manager('Jarod Prower', '1234', 'JPrower@aol.com','5678');

    expect(manager.name).toBe('Jarod Prower'); 
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('JPrower@aol.com');
    expect(manager.officeNumber).toBe('5678');
})

test('gets manager officeNumber', () =>{
    const manager = new Manager('Jarod Prower', '1234', 'JPrower@aol.com','5678');
    expect(manager.getOfficeNumber()).toBe('5678');
})

test('gets employee', () => {
    const manager = new Manager('Jarod Prower', '1234', 'JPrower@aol.com','5678');
    expect(employee.getRole()).toMatchObject(manager);
})