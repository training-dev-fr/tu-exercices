const { sortNumberArray } = require("../src/ex6");

describe("When I try to use sortNumberArray", () => {

    test('when I try with an empty array, then I should get an error', () => {
        expect(sortNumberArray([])).toEqual([]);
    })

    test('when I try with an array of mixed data, then I should get an error', () => {
        expect(() => sortNumberArray([1,"a",2])).toThrowError("Argument must be an array of numbers");
    })

    test('when I try with a string, then I should get an error', () => {
        expect(() => sortNumberArray("")).toThrowError("Argument must be an array");
    })

    test('when I try with no parameters, then I should get an error', () => {
        expect(() => sortNumberArray()).toThrowError("Argument must be an array");
    })

    test('when i try with an array of strings, then i should get an error', () => {
        try {
            let result = sortNumberArray(["a", "b"]);
        } catch (e) {
            expect(e.message).toBe("Argument must be an array of numbers");
        }
    })

    test('when i try with an array of integers', () => {
        expect(sortNumberArray([11, 44, 1])).toEqual([1, 11, 44]);
    })

    test('when i try with an array of numbers', () => {
        expect(sortNumberArray([1.5, 1.2, 1.34578])).toEqual([1.2, 1.34578,1.5]);
    })

    test('when i try with an array of positive and negative numbers', () => {
        expect(sortNumberArray([-25,12.7,-3,0])).toEqual([-25,-3,0,12.7]);
    })
})
