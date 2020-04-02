const RandomRuPersonFactory = require('../RandomRuPersonFactory');
const Gender = require('../../person/Gender');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });

const rpf = new RandomRuPersonFactory();
const person = rpf.getRandomPerson();
test('innfl', () => {
    expect(person.getLastName()).toBe("Журавлева");
    expect(person.getFirstName()).toBe("Кристина");
    expect(person.getMiddleName()).toBe("Максимовна");
    expect(person.getGender()).toBe(Gender.FEMALE);
});