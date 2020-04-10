const Person = require('../../person/Person');

class RuPerson extends Person {

    constructor(props) {
        super(props);
        this.inn = props.inn;
    }

    getInn() {
        return this.inn;
    }

    getFirstName() {
        return this.firstName;
    }

    getFio() {
        return this.fio;
    }

    getGender() {
        return this.gender;
    }
}

module.exports = RuPerson;
