const functions = require('./funtions')

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
})

test("Adds 2 + 2 to Not equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});