const Generator = require('./Generator');
const randomutils = require('../utils/randomutils');

class FormattingNumberGenerator extends Generator {
    constructor(props) {
        super();
        props = props || {};
        this.prefix = '' + (props.prefix || '');
        this.length = props.length || 10;
        this.formatter = props.formatter || ((value) => value);
    }

    getValue() {
        return this.formatter(this.prefix + randomutils.randomLength(this.length - this.prefix.length));
    }
}

module.exports = FormattingNumberGenerator;