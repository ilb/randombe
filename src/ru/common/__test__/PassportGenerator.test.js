const PassportGenerator = require('../PassportGenerator');

//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });


test('getValue', () => {
    expect(new PassportGenerator().getValue()).toStrictEqual({"docDate": "2017-02-01", "docNumber": "28 75 855375", "orgCode": "180-000", "orgName": "ОТДЕЛОМ УФМС РОССИИ"});

});
