const reverseString = require('./reversestring')

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test("reverseString function exists", () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test("reverseString function exists with Uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});