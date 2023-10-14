const LinearSearch = require("../../../algorithms/searching/linearSearch");

describe("LinearSearch (OOP)", () => {
    it("should find the target element in the array", () => {
        const arr = [1, 2, 3, 4, 5];
        const linearSearch = new LinearSearch(arr);
        const target = 3;
        const index = linearSearch.search(target);
        expect(index).toEqual(2);
    });

    it("should handle an empty array", () => {
        const arr = [];
        const linearSearch = new LinearSearch(arr);
        const target = 5;
        const index = linearSearch.search(target);
        expect(index).toEqual(-1);
    });

    it("should handle an array without the target element", () => {
        const arr = [10, 20, 30, 40, 50];
        const linearSearch = new LinearSearch(arr);
        const target = 35;
        const index = linearSearch.search(target);
        expect(index).toEqual(-1);
    });

    it("should find the target element at the beginning of the array", () => {
        const arr = [1, 2, 3, 4, 5];
        const linearSearch = new LinearSearch(arr);
        const target = 1;
        const index = linearSearch.search(target);
        expect(index).toEqual(0);
    });

    it("should find the target element at the end of the array", () => {
        const arr = [1, 2, 3, 4, 5];
        const linearSearch = new LinearSearch(arr);
        const target = 5;
        const index = linearSearch.search(target);
        expect(index).toEqual(4);
    });
});
