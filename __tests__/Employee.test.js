const Employee = require("../lib/Employee.js");

test('creates an employee object', () =>{
    const employee = new Employee('Jarod Prower', '1234', 'JPrower@aol.com');

    expect(employee.name).toBe('Jarod Prower'); 
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('JPrower@aol.com');
})

test('gets employee name', () =>{
    const employee = new Employee('Jarod Prower', '1234', 'JPrower@aol.com');
    expect(employee.getName()).toBe('Jarod Prower');
})

test('gets employee id', () => {
    const employee = new Employee('Jarod Prower', '1234', 'JPrower@aol.com');
    expect(employee.getId()).toBe('1234');
})

test('gets employee email', () => {
    const employee = new Employee('Jarod Prower', '1234', 'JPrower@aol.com');
    expect(employee.getEmail).toBe('JPrower@aol.com');
})

test('gets employee', () => {
    const employee = new Employee('Jarod Prower', '1234', 'JPrower@aol.com');
    expect(employee.getRole()).toMatchObject(Employee);
})
