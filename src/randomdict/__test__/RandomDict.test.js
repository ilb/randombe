const RandomDictFactory = require('../RandomDictFactory');
const RandomDict = require('../RandomDict');
const RandomDictConst = require('../RandomDictConst');
// configure for test reproductivity
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });


const rdf = RandomDictFactory.getInstance();

// const rd = new RandomDict(RandomDictConst.DICT_RU_FIRSTNAME_MALE);
//
//
// test('not empty string', () => {
//   console.log(rd.getValue());
//     expect(rd.getValue()).toBe('Максим');
// });

const params = [
  { dict: 'DICT_RU_FIRSTNAME_MALE', value: 'Геннадий' },
  { dict: 'DICT_RU_FIRSTNAME_FEMALE', value: 'Жанна' },
  { dict: 'DICT_RU_MIDDLENAME_MALE', value: 'Васильевич' },
  { dict: 'DICT_RU_MIDDLENAME_FEMALE', value: 'Константиновна' },
  { dict: 'DICT_RU_LASTNAME_MALE', value: 'Бойко' },
  { dict: 'DICT_RU_LASTNAME_FEMALE', value: 'Дмитриева' },
  { dict: 'DICT_RU_FAMILY_STATUS', value: 'Холост/холоста' },
];

// проверяем что у нас в словарях то что нужно
test('family_status', () => {
  params && params.forEach(param => {
    const randomDict = rdf.getRandomDict(RandomDictConst[param.dict]);
    const value = randomDict.getValue();
    expect(value).toBe(param.value);
  });
});
