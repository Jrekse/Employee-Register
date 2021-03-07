const Intern = require('../lib/constructI');

describe('Intern', () => {
    it ('should return name using getName()', () => {
            const name = 'Jon Ekse';
            const intern = new Intern('Jon Ekse', 1, 'jonekse@email.nul');
            expect(intern.getName()).toEqual(name);
    });
    it ('should return ID using getID()', () => {
        const id = 1;
        const intern = new Intern('Jon Ekse', 1, 'jonekse@email.nul');
        expect(intern.getId()).toEqual(id);
    });
    it ('should return email using getEmail()', () => {
        const email = 'jonekse@email.nul';
        const intern = new Intern('Jon Ekse', 1, 'jonekse@email.nul');
        expect(intern.getEmail()).toEqual(email);
    });
    it ('should return the job using getAgain() method', () => {
        const job = 'Intern';
        const intern = new Intern('Jon Ekse', 1, 'jonekse@email.nul');
        expect(intern.getAgain()).toEqual(job);
    });
    
});