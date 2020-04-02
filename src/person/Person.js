
class Person {
    constructor(props) {
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.middleName = props.middleName;
        this.gender = props.gender;
    }

    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getMiddleName() {
        return this.middleName;
    }

    getGender() {
        return this.gender;
    }

}

module.exports = Person;