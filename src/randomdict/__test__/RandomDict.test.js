const RandomDict = require('../RandomDict');
const RandomDictConst = require('../RandomDictConst');

const rd = new RandomDict(RandomDictConst.DICT_RU_NAMES_MALE);
test('not empty string', () => {
    expect(!!rd.getValue()).toBe(true);
});
test('not same string', () => {
    expect(rd.getValue() != rd.getValue()).toBe(true);
});