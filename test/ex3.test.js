const{max} =  require('./../src/ex3.js')

test('when i try to get max number of two string, then à get an error', () => {
    expect(() => max("5", "5")).toThrowError('Both arguments must be numbers')
})
test('when i try to get max number of a number and a string, then i get an error', () => {
    expect(() => max(5, "5")).toThrowError('Both arguments must be numbers')
})

test('when i try to get max number of a string and a number, then i get an error', () => {
    expect(() => max("5", 5)).toThrowError('Both arguments must be numbers')
})

test('when i try to to get max number of two different numbers, then i get the max one', () => {
    expect(max(10, 5)).toBe(10);
    expect(max(5, 10)).toBe(10);
})

test('when i try to to get max number of two equals numbers, then i get the max one', () => {
    expect(max(10, 10)).toBe(10)
})