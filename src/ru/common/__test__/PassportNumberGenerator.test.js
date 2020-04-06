const PassportNumberGenerator = require('../PassportNumberGenerator');

//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });


test('getValue', () => {
    expect(new PassportNumberGenerator().getValue()).toBe('54 56 357533');

});

test('getValuePrefix', () => {
    expect(new PassportNumberGenerator({prefix: 9999}).getValue()).toBe('99 99 335870');

});
