const Employee = require('../lib/constructs');

describe('Employee', () => {
    it ('should return name using getName()', () => {
            const name = 'Jon Ekse';
            const employee = new Employee('Jon Ekse', 1, 'jonekse@email.nul');
            expect(employee.getName()).toEqual(name);
    });
    it ('should return ID using getID()', () => {
        const id = 1;
        const employee = new Employee('Jon Ekse', 1, 'jonekse@email.nul');
        expect(employee.getId()).toEqual(id);
    });
    it ('should return email using getEmail()', () => {
        const email = 'jonekse@email.nul';
        const employee = new Employee('Jon Ekse', 1, 'jonekse@email.nul');
        expect(employee.getEmail()).toEqual(email);
    });
    it ('should return the job using getJob() method', () => {
        const job = 'Employee';
        const employee = new Employee('Jon Ekse', 1, 'jonekse@email.nul');
        expect(employee.getJob()).toEqual(job);
    });
});