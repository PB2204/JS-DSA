const assert = require('assert');
const InsertionSort = require('../../../algorithms/sorting/insertionSort');

describe('InsertionSort (OOP)', () => {
    it('should sort an array in ascending order', () => {
        const arr = [64, 25, 12, 22, 11];
        const insertionSort = new InsertionSort(arr);
        insertionSort.sort();
        assert.deepStrictEqual(insertionSort.arr, [11, 12, 22, 25, 64]);
    });

    it('should handle an already sorted array', () => {
        const arr = [10, 20, 30, 40, 50];
        const insertionSort = new InsertionSort(arr);
        insertionSort.sort();
        assert.deepStrictEqual(insertionSort.arr, [10, 20, 30, 40, 50]);
    });

    it('should handle an empty array', () => {
        const arr = [];
        const insertionSort = new InsertionSort(arr);
        insertionSort.sort();
        assert.deepStrictEqual(insertionSort.arr, []);
    });

    it('should handle an array with one element', () => {
        const arr = [42];
        const insertionSort = new InsertionSort(arr);
        insertionSort.sort();
        assert.deepStrictEqual(insertionSort.arr, [42]);
    });
});
