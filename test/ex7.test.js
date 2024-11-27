const { mergeAndSortNumberArrays } = require("../src/ex7");

describe('when i try to ergeandSortNumberArrays ', () => {
    test('2 arrays of number, then i should have an array sorted', () => {
        expect(mergeAndSortNumberArrays([11, 44, 1], [10, 56, 25])).toEqual([1, 10, 11, 25, 44, 56]);
    })

    test('2 arrays of number with some string, then i should have an error', () => {
        expect(() => mergeAndSortNumberArrays([11, 44, 1, "a"], [10, 56, 25])).toThrowError("First argument must be an array of numbers");
        expect(() => mergeAndSortNumberArrays([11, 44, 1], [10, "a", 56, 25])).toThrowError("Second argument must be an array of numbers");
        expect(() => mergeAndSortNumberArrays(["a",11, 44, 1], [10, "a", 56, 25])).toThrowError("First argument must be an array of numbers");
    })

    test('with something else than array, then i should have an error', () => {
        expect(() => mergeAndSortNumberArrays("", [10, 56, 25])).toThrowError("Arguments must be both array");
        expect(() => mergeAndSortNumberArrays([10, 56, 25],"")).toThrowError("Arguments must be both array");
        expect(() => mergeAndSortNumberArrays("","")).toThrowError("Arguments must be both array");
    })
})
