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
  { dict: 'DICT_RU_FIRSTNAME_MALE', value: 'Алексей' },
  { dict: 'DICT_RU_FIRSTNAME_FEMALE', value: 'Валентина' },
  { dict: 'DICT_RU_MIDDLENAME_MALE', value: 'Владиславович' },
  { dict: 'DICT_RU_MIDDLENAME_FEMALE', value: 'Артемовна' },
  { dict: 'DICT_RU_LASTNAME_MALE', value: 'Гурьев' },
  { dict: 'DICT_RU_LASTNAME_FEMALE', value: 'Макарова' },
  { dict: 'DICT_RU_MARTIAL_STATUS', value: 'Женат/замужем' },
  { dict: 'DICT_RU_EDUCATION_LEVEL', value: 'Неполное высшее' },
];

// проверяем что у нас в словарях то что нужно
test('test', () => {
  params && params.forEach(param => {
    const randomDict = rdf.getRandomDict(RandomDictConst[param.dict]);
    const value = randomDict.getValue();
    expect(value).toBe(param.value);
  });
});
