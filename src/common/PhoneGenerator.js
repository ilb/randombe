const randomutils = require('../utils/randomutils');

class PhoneGenerator {

    constructor(props) {
        props = props || {};
        this.prefix = '' + (props.prefix || '');
        this.length = props.length || 11;
        this.formatter = props.formatter || (value => '+' + value)  //value => value.replace(/(\d)(\d\d\d)(\d\d\d)(\d\d\d\d)/, '+$1-$2-$3-$4'),
    }

    getValue() {
        return this.formatter(this.prefix + randomutils.randomLength(this.length - this.prefix.length));
    }    
}

module.exports=PhoneGenerator;