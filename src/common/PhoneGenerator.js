const randomutils = require('../utils/randomutils');

class PhoneGenerator {

    constructor(props) {
        props = props || {};
        this.prefix = '' +  (props.prefix || randomutils.randomLength(1));
        this.formatter = props.formatter || null;
        //this.mpx = 10000000000000;
    }

    getValue() {
        return this.prefix + randomutils.randomLength(11-this.prefix.length);

        //return this.mpx;
    }
}

module.exports=PhoneGenerator;