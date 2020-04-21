const RuPersonGenerator = require('../RuPersonGenerator');
const GenderGenerator = require('../../../common/GenderGenerator');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });

const rpf = new RuPersonGenerator();
const person = rpf.getValue();
const expected = {
    "lastName": "Журавлева",
    "firstName": "Кристина",
    "middleName": "Максимовна",
    "fullName": "Журавлева Кристина Максимовна",
    "inn":"066482795302",
    "gender": GenderGenerator.FEMALE,
};
test('generate person', () => {
    expect(person).toStrictEqual(expected);
    
});