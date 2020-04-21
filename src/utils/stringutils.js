/**
 * add leftpad0 to string
 * @param {*} str string to pad 
 * @param {*} lng pad length
 */
function leftpad0(str, lng) {
    return leftpad(str,lng,'0');
}

/**
 * left pad string with padchar
 * @param {*} str string to pad 
 * @param {*} lng pad length
 * @param {*} padchar padding char
 */
function leftpad(str, lng, padchar) {
    str = '' + str;
    var factlength = str.length;
    if (factlength < lng) {
        for (var i = 0; i < (lng - factlength); i++) {
            str = padchar + str;
        }
    }
    return str;
}


module.exports = {
    leftpad0
}