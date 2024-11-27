const {add} = require('./../src/ex1.js')

test('When i try to add 2 numbers, then i should have the sum result', () => {
    expect(add(1, 5)).toBe(6)
});

test('When i try to add 2 strings, then i should have a concat', () => {
    expect(add("1", "5")).toBe("15")
});

