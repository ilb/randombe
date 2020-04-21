const RuPersonGenerator = require('../RuPersonGenerator');
const GenderGenerator = require('../../../common/GenderGenerator');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });

const rpf = new RuPersonGenerator();
const person = rpf.getValue();
test('innfl', () => {
    expect(person.lastName).toBe("Журавлева");
    expect(person.firstName).toBe("Кристина");
    expect(person.middleName).toBe("Максимовна");
    expect(person.gender).toBe(GenderGenerator.FEMALE);
    expect(person.inn).toBe('066482795302');
    
});