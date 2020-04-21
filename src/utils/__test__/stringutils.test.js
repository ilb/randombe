const {leftpad0} = require('../stringutils');

test('innfl', () => {
    expect(leftpad0('1',2)).toBe("01");
    expect(leftpad0(1,2)).toBe("01");
    
    
});