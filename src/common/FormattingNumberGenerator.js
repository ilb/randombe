const Generator = require('./Generator');
const randomutils = require('../utils/randomutils');

class FormattingNumberGenerator extends Generator {
    constructor(props) {
        super();
        props = props || {};
        this.length = props.length || 10;
        this.min = Math.pow(10, this.length - 1);
        this.max = Math.pow(10, this.length) - 1;
        this.formatter = props.formatter || ((value) => value);
    }

    getValue() {
        return this.formatter(this.getRawValue());
    }

    getRawValue() {
        return '' + randomutils.randomInt(this.min, this.max);
    }
}

module.exports = FormattingNumberGenerator;