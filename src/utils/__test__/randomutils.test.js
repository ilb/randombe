const randomutils = require('../randomutils');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });

test('random', () => {
    expect(randomutils.randomDate(new Date(2019, 0, 1), new Date(2019,11,1))).toStrictEqual(new Date("2019-02-25T03:36:19.535Z"));
    expect(randomutils.randomFloat(1,100)).toBe(68.26514851933275);
    expect(randomutils.randomInt(1,100)).toBe(43);
    expect(randomutils.randomLength(1)).toBe(8);
    expect(randomutils.randomLength(5)).toBe(78027);
});