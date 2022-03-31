const reverseString = require('./task2.js');

describe('reverseString', function () {
  it('check reverse string', function () {
    const string = 'tufahel';
    const reverseStr = reverseString(string);

    expect(reverseStr).toEqual('lehafut');
  });

})