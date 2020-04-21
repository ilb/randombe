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
    "inn": "066482795302",
    "gender": GenderGenerator.FEMALE,
    "passport": {
        "docDate": "2018-05-21",
        "docNumber": "81 91 212945",
        "orgCode": "180-000",
        "orgName": "ОТДЕЛОМ УФМС РОССИИ",
    }
};
test('generate person', () => {
    expect(person).toStrictEqual(expected);

});