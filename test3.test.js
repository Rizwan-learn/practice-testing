const calculator = require('./task3.js');

describe('calculator', function () {
  const a = 6;
  const b = 3;

  const calcu = new calculator();

  it('add a and b', function () {
    const ans = calcu.add(a, b)

    expect(ans).toEqual(9);
  });
  it('minus b from a', function () {
    const ans = calcu.minus(a, b)

    expect(ans).toEqual(3);
  });
  it('multiply a and b', function () {
    const ans = calcu.multiply(a, b)

    expect(ans).toEqual(18);
  });
  it('div a by b', function () {
    const ans = calcu.div(a, b)

    expect(ans).toEqual(2);
  });
})