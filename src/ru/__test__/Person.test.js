const Person = require('../Person');

test('innfl', () => {
    expect(new Person({firstName: "Иван"}).getFirstName()).toBe("Иван");
});