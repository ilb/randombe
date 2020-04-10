const RandomDict = require('./RandomDict');
const RandomDictReader = require('./RandomDictReader');

class RandomDictFactory {

    static getInstance() {
        if (!RandomDictFactory.INSTANCE) {
            RandomDictFactory.INSTANCE = new RandomDictFactory();
        }
        return RandomDictFactory.INSTANCE;
    }
    constructor() {
        this.dictionaries={};
    }
    getRandomDict(file) {
        if (!this.dictionaries[file]) {
            const reader = new RandomDictReader();
            const values = reader.getValues(file);            
            this.dictionaries[file] = new RandomDict(values);
        }
        return this.dictionaries[file];
    }
}

module.exports = RandomDictFactory;