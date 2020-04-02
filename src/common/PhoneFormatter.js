function PhoneFormatter(value) {
    return value.replace(/(\d)(\d\d\d)(\d\d\d)(\d\d\d\d)/, '+$1-$2-$3-$4');
}

module.exports = PhoneFormatter;