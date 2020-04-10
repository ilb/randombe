const RuPersonFactory = require('../RuPersonFactory');
const Gender = require('../../../person/Gender');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });

const rpf = new RuPersonFactory();
const person = rpf.getRandomPerson();
test('innfl', () => {
    expect(person.getLastName()).toBe("Журавлева");
    expect(person.getFirstName()).toBe("Кристина");
    expect(person.getMiddleName()).toBe("Максимовна");
    expect(person.getGender()).toBe(Gender.FEMALE);
    expect(person.getInn()).toBe('066482795302');
    
});