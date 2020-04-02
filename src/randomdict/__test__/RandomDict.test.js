const RandomDict = require('../RandomDict');
const RandomDictConst = require('../RandomDictConst');
//configure for test reproductivity 
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });

const rd = new RandomDict(RandomDictConst.DICT_RU_NAMES_MALE);

test('not empty string', () => {
    expect(rd.getValue()).toBe('Максим');
});
