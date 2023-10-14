const CountingSort = require("../../../algorithms/sorting/countingSort");

describe("CountingSort (OOP)", () => {
    it("should sort an array in ascending order", () => {
        const arr = [4, 2, 2, 8, 3, 3, 1];
        const sortedArr = new CountingSort(arr).sort();
        expect(sortedArr).toEqual([1, 2, 2, 3, 3, 4, 8]);
    });

    it("should handle an empty array", () => {
        const arr = [];
        const sortedArr = new CountingSort(arr).sort();
        expect(sortedArr).toEqual([]);
    });

    it("should handle an array with one element", () => {
        const arr = [42];
        const sortedArr = new CountingSort(arr).sort();
        expect(sortedArr).toEqual([42]);
    });

    it("should handle an array with duplicate elements", () => {
        const arr = [5, 2, 1, 4, 5, 3, 2, 4, 1, 3];
        const sortedArr = new CountingSort(arr).sort();
        expect(sortedArr).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });

    it("should handle a reverse-sorted array", () => {
        const arr = [5, 4, 3, 2, 1];
        const sortedArr = new CountingSort(arr).sort();
        expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
    });
});
