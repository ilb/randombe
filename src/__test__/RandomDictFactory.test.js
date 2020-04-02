const RandomDictFactory = require('../RandomDictFactory');
const RandomDict = require('../RandomDict');

const rdf = RandomDictFactory.getInstance()
const rd = rdf.getRandomDict("data/ru/names_male.json");
const rd2 = rdf.getRandomDict("data/ru/names_male.json");
const rd3 = rdf.getRandomDict("data/ru/names_female.json");
const rdnew = new RandomDict("data/ru/names_male.json");
test('not same object', () => {
    expect(rd === rdnew).toBe(false);
});
test('not same object 2', () => {
    expect(rd === rd3).toBe(false);
});
test('same object', () => {
    expect(rd === rd2).toBe(true);
});