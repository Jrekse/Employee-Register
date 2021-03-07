const Engineer = require('../lib/constructE');

describe('Engineer', () => {
    it ('should return name using getName()', () => {
            const name = 'Jon Ekse';
            const engineer = new Engineer('Jon Ekse', 1, 'jonekse@email.nul');
            expect(engineer.getName()).toEqual(name);
    });
    it ('should return ID using getID()', () => {
        const id = 1;
        const engineer = new Engineer('Jon Ekse', 1, 'jonekse@email.nul');
        expect(engineer.getId()).toEqual(id);
    });
    it ('should return email using getEmail()', () => {
        const email = 'jonekse@email.nul';
        const engineer = new Engineer('Jon Ekse', 1, 'jonekse@email.nul');
        expect(engineer.getEmail()).toEqual(email);
    });
    it ('should return the job using getAgain() method', () => {
        const job = 'Engineer';
        const engineer = new Engineer('Jon Ekse', 1, 'jonekse@email.nul');
        expect(engineer.getAgain()).toEqual(job);
    });
    
});