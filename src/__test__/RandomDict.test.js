const RandomDict = require('../RandomDict');

const rd = new RandomDict("data/ru/names_male.json");
test('not empty string', () => {
    expect(!!rd.getValue()).toBe(true);
});
test('not same string', () => {
    expect(rd.getValue() != rd.getValue()).toBe(true);
});