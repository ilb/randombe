const common = require('../common/common');
const GenderGenerator = require('../../common/GenderGenerator');
const RandomDictFactory = require('../../randomdict/RandomDictFactory');
const RandomDictConst = require('../../randomdict/RandomDictConst');

class RuPersonGenerator {
    constructor() {
    }

    getValue() {
        const randomDictFactory = RandomDictFactory.getInstance();
        const gender = new GenderGenerator().getValue();;
        const firstNameDictName = gender == GenderGenerator.MALE ? RandomDictConst.DICT_RU_FIRSTNAME_MALE : RandomDictConst.DICT_RU_FIRSTNAME_FEMALE;
        const lastNameDictName = gender == GenderGenerator.MALE ? RandomDictConst.DICT_RU_LASTNAME_MALE : RandomDictConst.DICT_RU_LASTNAME_FEMALE;
        const middleNameDictName = gender == GenderGenerator.MALE ? RandomDictConst.DICT_RU_MIDDLENAME_MALE : RandomDictConst.DICT_RU_MIDDLENAME_FEMALE;

        const firstNameDict = randomDictFactory.getRandomDict(firstNameDictName);
        const lastNameDict = randomDictFactory.getRandomDict(lastNameDictName);
        const middleNameDict = randomDictFactory.getRandomDict(middleNameDictName);

        const person={};
        person.firstName = firstNameDict.getValue();
        person.lastName = lastNameDict.getValue();
        person.middleName = middleNameDict.getValue();
        person.fullName = person.lastName + ' ' + person.firstName + ' ' + person.middleName;
        person.gender = gender;

        person.inn = common.innfl();

        return person;
    }

}

module.exports = RuPersonGenerator;
