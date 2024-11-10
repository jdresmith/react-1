const addCommas = require("./addCommas");

test('adds commas to 1000', () => {
  expect(addCommas(1000)).toBe('1,000');
});

test('adds commas to 1234567', () => {
  expect(addCommas(1234567)).toBe('1,234,567');
});

test('adds commas to a decimal number 12345.678', () => {
  expect(addCommas(12345.678)).toBe('12,345.678');
});