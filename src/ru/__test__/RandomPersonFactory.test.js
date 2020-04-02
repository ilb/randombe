const RandomPersonFactory = require('../RandomPersonFactory');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });

const rpf = new RandomPersonFactory();
test('innfl', () => {
    expect(rpf.getRandomPerson().getFirstName()).toBe("Владимир");
});