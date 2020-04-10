const RandomDict = require('../RandomDict');
const RandomDictConst = require('../RandomDictConst');
// configure for test reproductivity
const seedrandom = require('seedrandom');
seedrandom('hello.', { global: true });

// const rd = new RandomDict(RandomDictConst.DICT_RU_FIRSTNAME_MALE);
//
//
// test('not empty string', () => {
//   console.log(rd.getValue());
//     expect(rd.getValue()).toBe('Максим');
// });

const params = [
  { dict: 'DICT_RU_FIRSTNAME_MALE', value: 'Максим' },
  { dict: 'DICT_RU_FIRSTNAME_FEMALE', value: 'Анна' },
  { dict: 'DICT_RU_MIDDLENAME_MALE', value: 'Александрович' },
  { dict: 'DICT_RU_MIDDLENAME_FEMALE', value: 'Ивановна' },
  { dict: 'DICT_RU_LASTNAME_MALE', value: 'Иванов' },
  { dict: 'DICT_RU_LASTNAME_FEMALE', value: 'Иванова' },
  { dict: 'DICT_RU_MARTIAL_STATUS', value: 'Женат/замужем' },
  { dict: 'DICT_RU_EDUCATION_LEVEL', value: 'Высшее' },
];

// проверяем что у нас в словарях то что нужно
test('test', () => {
  params && params.forEach(param => {
    const rd = new RandomDict(RandomDictConst[param.dict]);
    expect(rd.getValue()).toBe(param.value);
  });
});
