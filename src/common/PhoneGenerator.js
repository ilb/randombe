const FormattingNumberGenerator = require('./FormattingNumberGenerator');
const randomutils = require('../utils/randomutils');

class PhoneGenerator extends FormattingNumberGenerator {

    constructor(props) {
        props = props || {};
        super({
            length:11,
            formatter: value => '+' + value,  //value => value.replace(/(\d)(\d\d\d)(\d\d\d)(\d\d\d\d)/, '+$1-$2-$3-$4'),
            ...props
        })
    }
}

module.exports=PhoneGenerator;