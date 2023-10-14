const RadixSort = require("../../../algorithms/sorting/radixSort");

describe("RadixSort (OOP)", () => {
    it("should sort an array in ascending order", () => {
        const arr = [170, 45, 75, 90, 802, 24, 2, 66];
        const sortedArr = new RadixSort(arr).sort();
        expect(sortedArr).toEqual([2, 24, 45, 66, 75, 90, 170, 802]);
    });

    it("should handle an empty array", () => {
        const arr = [];
        const sortedArr = new RadixSort(arr).sort();
        expect(sortedArr).toEqual([]);
    });

    it("should handle an array with one element", () => {
        const arr = [42];
        const sortedArr = new RadixSort(arr).sort();
        expect(sortedArr).toEqual([42]);
    });

    it("should handle an array with duplicate elements", () => {
        const arr = [5, 2, 1, 4, 5, 3, 2, 4, 1, 3];
        const sortedArr = new RadixSort(arr).sort();
        expect(sortedArr).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });
});
