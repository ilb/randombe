/* add zeros to string */
function zeros(str, lng) {
    var factlength = str.length;
    if (factlength < lng) {
        for (var i = 0; i < (lng - factlength); i++) {
            str = '0' + str;
        }
    }
    return str;
}

module.exports = {
    zeros
}