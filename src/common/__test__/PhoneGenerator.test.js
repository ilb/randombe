const PhoneGenerator = require('../PhoneGenerator');

//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });


test('getValue', () => {
    expect(new PhoneGenerator().getValue()).toBe('+54563575336');

});

test('getValuePrefix', () => {
    expect(new PhoneGenerator({prefix: 7909}).getValue()).toBe('+79093358708');

});
