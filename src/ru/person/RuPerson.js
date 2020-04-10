const Person = require('../../person/Person');

class RuPerson extends Person {

    constructor(props) {
        super(props);
        this.inn = props.inn;
    }

    getInn() {
        return this.inn;
    }

}

module.exports = RuPerson;
