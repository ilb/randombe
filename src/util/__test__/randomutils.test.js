const randomutils = require('../randomutils');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });

test('innfl', () => {
    expect(randomutils.randomFloat(1,100)).toBe(63.452628248115);
    expect(randomutils.randomInt(1,100)).toBe(93);
});