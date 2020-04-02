const common = require('./common');
const Person = require('./Person');
const RandomDictFactory = require('../randomdict/RandomDictFactory');
const RandomDictConst = require('../randomdict/RandomDictConst');

class RandomPersonFactory {
    constructor() {
    }

    getRandomPerson() {
        const randomDictFactory = RandomDictFactory.getInstance()
        const rd = randomDictFactory.getRandomDict(RandomDictConst.DICT_RU_NAMES_MALE);
        const props={};
        props.firstName = rd.getValue();
        const person = new Person(props);
        return person;
    }

}

module.exports = RandomPersonFactory;