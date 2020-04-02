const RandomDictFactory = require('../RandomDictFactory');
const RandomDict = require('../RandomDict');
const RandomDictConst = require('../RandomDictConst');

const rdf = RandomDictFactory.getInstance()
const rd = rdf.getRandomDict(RandomDictConst.DICT_RU_FIRSTNAME_MALE);
const rd2 = rdf.getRandomDict(RandomDictConst.DICT_RU_FIRSTNAME_MALE);
const rd3 = rdf.getRandomDict(RandomDictConst.DICT_RU_FIRSTNAME_FEMALE);
const rdnew = new RandomDict(RandomDictConst.DICT_RU_FIRSTNAME_MALE);
test('not same object', () => {
    expect(rd === rdnew).toBe(false);
});
test('not same object 2', () => {
    expect(rd === rd3).toBe(false);
});
test('same object', () => {
    expect(rd === rd2).toBe(true);
});