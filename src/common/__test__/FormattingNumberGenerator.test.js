const FormattingNumberGenerator = require('../FormattingNumberGenerator');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });


test('getValue', () => {
    expect(new FormattingNumberGenerator().getValue()).toBe('5456357533');

});

test('getValuePrefix', () => {
    expect(new FormattingNumberGenerator({length: 7}).getValue()).toBe('3358708');

});