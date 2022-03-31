const stringLength = require('./task1.js');

describe('stringLength', function () {
  it('length of the string', function () {
    const string = 'tufahel';
    const strlength = stringLength(string);

    expect(strlength).toEqual(7);
  });

  it('string lenght less than 1 error', function () {
    const string = '';
    expect(() => stringLength(string).toThrowError('length error'));
  });

  it('string lenght larger than 10 error', function () {
    const string = 'Tufahel Ahmed';
    expect(() => stringLength(string).toThrowError('length error'));
  });
})