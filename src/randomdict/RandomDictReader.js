class RandomDictReader {
    constructor(basePath) {
        this.basePath = basePath || '../..';
    }
    getValues(path) {
        const file = require(this.basePath + '/' +path);
        return file;
    }
}

module.exports = RandomDictReader;