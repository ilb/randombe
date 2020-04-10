class RandomDict {
    constructor(values) {
        this.values = values;
    }

    getValue() {
        const i = Math.floor(Math.random() * this.values.length);
        return this.values[i];
    }
}
module.exports = RandomDict;