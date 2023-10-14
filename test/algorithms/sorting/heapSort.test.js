const HeapSort = require("../../../algorithms/sorting/heapSort");

describe("HeapSort (OOP)", () => {
    it("should sort an array in ascending order", () => {
        const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const sortedArr = new HeapSort(arr).sort();
        expect(sortedArr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });

    it("should handle an empty array", () => {
        const arr = [];
        const sortedArr = new HeapSort(arr).sort();
        expect(sortedArr).toEqual([]);
    });

    it("should handle an array with one element", () => {
        const arr = [42];
        const sortedArr = new HeapSort(arr).sort();
        expect(sortedArr).toEqual([42]);
    });

    it("should handle an array with duplicate elements", () => {
        const arr = [5, 2, 1, 4, 5, 3, 2, 4, 1, 3];
        const sortedArr = new HeapSort(arr).sort();
        expect(sortedArr).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });
});
