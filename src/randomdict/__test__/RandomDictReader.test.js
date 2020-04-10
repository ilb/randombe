const RandomDictReader = require('../RandomDictReader');

test('get values', () => {
    const reader = new RandomDictReader();
    const values = reader.getValues('data/ru/family_status.json');
    const expected = [
        "Женат/замужем",
        "Холост/холоста",
        "Разведен/разведена",
        "Вдовец/вдова",
        "Гражданский брак"
    ];
    expect(values).toStrictEqual(expected);
});