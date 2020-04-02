const common = require('../common');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });

test('innfl', () => {
    expect(common.innfl()).toBe('153105183418');
});

test('is_valid_inn', () => {
    expect(common.is_valid_inn(common.innfl())).toBe(true);
});