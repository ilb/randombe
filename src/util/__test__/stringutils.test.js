const stringutils = require('../stringutils');

test('innfl', () => {
    expect(stringutils.zeros('1',2)).toBe("01");
    expect(stringutils.zeros(1,2)).toBe("01");
    
    
});