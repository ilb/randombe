const RandomDict = require('./RandomDict');

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
            this.dictionaries[file] = new RandomDict(file);
        }
        return this.dictionaries[file];
    }
}

module.exports = RandomDictFactory;