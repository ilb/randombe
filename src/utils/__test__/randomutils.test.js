const randomutils = require('../randomutils');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });

test('innfl', () => {
    expect(randomutils.randomFloat(1,100)).toBe(5.074763933686807);
    expect(randomutils.randomInt(1,100)).toBe(62);
    expect(randomutils.randomLength(1)).toBe(3);
    expect(randomutils.randomLength(5)).toBe(35621);
});