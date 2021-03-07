const Manager = require('../lib/constructM');

describe('Manager', () => {
    it ('should return name using getName()', () => {
            const name = 'Jon Ekse';
            const man = new Manager('Jon Ekse', 1, 'jonekse@email.nul');
            expect(man.getName()).toEqual(name);
    });
    it ('should return ID using getID()', () => {
        const id = 1;
        const man = new Manager('Jon Ekse', 1, 'jonekse@email.nul');
        expect(man.getId()).toEqual(id);
    });
    it ('should return email using getEmail()', () => {
        const email = 'jonekse@email.nul';
        const man = new Manager('Jon Ekse', 1, 'jonekse@email.nul');
        expect(man.getEmail()).toEqual(email);
    });
    it ('should return the job using getAgain() method', () => {
        const job = 'Manager';
        const man = new Manager('Jon Ekse', 1, 'jonekse@email.nul');
        expect(man.getAgain()).toEqual(job);
    });
    
});