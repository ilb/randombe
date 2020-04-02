class RandomDict {
    constructor(file) {
        var fs = require('fs');
        this.values = JSON.parse(fs.readFileSync(file, 'utf8'));
    }

    getValue() {
        const i = Math.floor(Math.random()*this.values.length);
        return this.values[i];
    }
}
module.exports=RandomDict;