const functions = require("./funtions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to Not equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

//toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

//toEquall
test("User should be Chidiebere Ojingwa Object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Chidiebere",
    lastName: "Ojingwa",
  });
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect (load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex
test('There is no I in team', ()=>{
    expect('teami').not.toMatch(/I/);
})
