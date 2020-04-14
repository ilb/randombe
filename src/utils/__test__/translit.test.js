const translit = require('../translit');

test('rus_to_latin', () => {

    expect(translit.rus_to_latin('Экскаватор')).toBe("Ekskavator");
    
    
});