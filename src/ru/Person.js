const common = require('common');
const RandomDictFactory = require('../randomdict/RandomDictFactory');

class Person {
    constructor() {
        const rdf = RandomDictFactory.getInstance()
        const rd = rdf.getRandomDict("data/ru/names_male.json");
        this.firstName = rd.getValue();
    }

}

module.exports = Person;