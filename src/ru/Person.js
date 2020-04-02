
class Person {
    constructor(props) {
        this.firstName = props.firstName;
    }

    getFirstName() {
        return this.firstName;
    }

}

module.exports = Person;