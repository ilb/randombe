const common = require('../common');

test('innfl', () => {
    expect(common.is_valid_inn(common.innfl())).toBe(true);
});