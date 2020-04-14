const PassportNumberGenerator = require("./PassportNumberGenerator");

class PassportGenerator {

    constructor() {
        this.png = new PassportNumberGenerator();
    }
    getValue() {
        return {
            "orgName": "ОТДЕЛОМ УФМС РОССИИ",
            "orgCode": "180-000",
            "docDate": ""
        }
    }
}