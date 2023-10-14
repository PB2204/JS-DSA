const BinarySearch = require("../../../algorithms/searching/binarySearch");

describe("BinarySearch (OOP)", () => {
    it("should find the target element in the sorted array", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const binarySearch = new BinarySearch(arr);
        const target = 4;
        const index = binarySearch.search(target);
        expect(index).toEqual(3);
    });

    it("should handle an empty array", () => {
        const arr = [];
        const binarySearch = new BinarySearch(arr);
        const target = 5;
        const index = binarySearch.search(target);
        expect(index).toEqual(-1);
    });

    it("should handle an array without the target element", () => {
        const arr = [10, 20, 30, 40, 50];
        const binarySearch = new BinarySearch(arr);
        const target = 35;
        const index = binarySearch.search(target);
        expect(index).toEqual(-1);
    });

    it("should find the target element at the beginning of the array", () => {
        const arr = [1, 2, 3, 4, 5];
        const binarySearch = new BinarySearch(arr);
        const target = 1;
        const index = binarySearch.search(target);
        expect(index).toEqual(0);
    });

    it("should find the target element at the end of the array", () => {
        const arr = [1, 2, 3, 4, 5];
        const binarySearch = new BinarySearch(arr);
        const target = 5;
        const index = binarySearch.search(target);
        expect(index).toEqual(4);
    });
});
