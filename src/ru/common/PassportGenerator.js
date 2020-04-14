const PassportNumberGenerator = require("./PassportNumberGenerator");
const randomutils = require('../../utils/randomutils');

class PassportGenerator {

    constructor() {
        this.png = new PassportNumberGenerator();
    }
    getValue() {
        return {
            "docNumber": this.png.getValue(),
            "docDate": randomutils.randomDate(new Date(2012, 0, 1), new Date(2019,11,31)).toISOString().substring(0,10),
            "orgName": "ОТДЕЛОМ УФМС РОССИИ",
            "orgCode": "180-000"
        }
    }
}

module.exports = PassportGenerator;