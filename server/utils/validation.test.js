const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    let nonString = isRealString(13);
    expect(nonString).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    let spaces = isRealString('   ');
    expect(spaces).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    let characters = isRealString(' g t ');
    expect(characters).toBe(true);
  });
});
