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
  { dict: 'DICT_RU_FAMILY_STATUS', value: 'Женат/замужем' },
];

// проверяем что у нас в словарях то что нужно
test('family_status', () => {
  params && params.forEach(param => {
    const randic = new RandomDict(RandomDictConst[param.dict]);
    const conteiner = randic.values;
    expect(conteiner).toContain(param.value);
  });
});
