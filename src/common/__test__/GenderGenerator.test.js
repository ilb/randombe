const GenderGenerator = require('../GenderGenerator');

//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });


test('getValue', () => {
    expect(new GenderGenerator().getValue()).toBe(GenderGenerator.MALE);
    expect(new GenderGenerator().getValue()).toBe(GenderGenerator.FEMALE);
    expect(new GenderGenerator().getValue()).toBe(GenderGenerator.MALE);
    expect(new GenderGenerator().getValue()).toBe(GenderGenerator.MALE);

});
