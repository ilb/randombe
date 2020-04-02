const Person = require('../Person');

test('person', () => {
    expect(new Person({firstName: "Иван"}).getFirstName()).toBe("Иван");
});