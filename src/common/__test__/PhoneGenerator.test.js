const PhoneGenerator = require('../PhoneGenerator');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });


test('getValue', () => {
    expect(new PhoneGenerator().getValue()).toBe('43358708367');

});

test('getValuePrefix', () => {
    expect(new PhoneGenerator({prefix: 7}).getValue()).toBe('75975266966');

});