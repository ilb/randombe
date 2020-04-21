const {rus_to_latin} = require('../translit');

test('rus_to_latin', () => {

    expect(rus_to_latin('Экскаватор')).toBe("Ekskavator");
    
    
});