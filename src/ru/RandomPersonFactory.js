const common = require('./common');
const Person = require('../person/Person');
const Gender = require('../person/Gender');
const RandomDictFactory = require('../randomdict/RandomDictFactory');
const RandomDictConst = require('../randomdict/RandomDictConst');

class RandomPersonFactory {
    constructor() {
    }

    getRandomPerson() {
        const randomDictFactory = RandomDictFactory.getInstance();
        const gender = Math.random() < 0.5 ? Gender.MALE: Gender.FEMALE;
        const firstNameDictName = gender == Gender.MALE ? RandomDictConst.DICT_RU_FIRSTNAME_MALE : RandomDictConst.DICT_RU_FIRSTNAME_FEMALE;
        const lastNameDictName = gender == Gender.MALE ? RandomDictConst.DICT_RU_LASTNAME_MALE : RandomDictConst.DICT_RU_LASTNAME_FEMALE;
        const middleNameDictName = gender == Gender.MALE ? RandomDictConst.DICT_RU_MIDDLENAME_MALE : RandomDictConst.DICT_RU_MIDDLENAME_FEMALE;
        
        const firstNameDict = randomDictFactory.getRandomDict(firstNameDictName);
        const lastNameDict = randomDictFactory.getRandomDict(lastNameDictName);
        const middleNameDict = randomDictFactory.getRandomDict(middleNameDictName);
        
        const props={};
        props.firstName = firstNameDict.getValue();
        props.lastName = lastNameDict.getValue();
        props.middleName = middleNameDict.getValue();
        props.gender = gender;
        const person = new Person(props);
        return person;
    }

}

module.exports = RandomPersonFactory;