const randomutils = require('../utils/randomutils');

class GenderGenerator {

    constructor(props) {
        props = props || {};
        this.formatter = props.formatter || (value => value) 
    }

    getValue() {
        return this.formatter(randomutils.randomInt(GenderGenerator.MALE,GenderGenerator.FEMALE));
    }    
}

GenderGenerator.MALE = 1;
GenderGenerator.FEMALE = 2;

module.exports=GenderGenerator;