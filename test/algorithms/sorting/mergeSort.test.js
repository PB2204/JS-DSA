const assert = require('assert');
const MergeSort = require('../../../algorithms/sorting/mergeSort');

describe('MergeSort (OOP)', () => {
    it('should sort an array in ascending order', () => {
        const arr = [64, 25, 12, 22, 11];
        const mergeSort = new MergeSort(arr);
        const sortedArr = mergeSort.sort();
        assert.deepStrictEqual(sortedArr, [11, 12, 22, 25, 64]);
    });

    it('should handle an already sorted array', () => {
        const arr = [10, 20, 30, 40, 50];
        const mergeSort = new MergeSort(arr);
        const sortedArr = mergeSort.sort();
        assert.deepStrictEqual(sortedArr, [10, 20, 30, 40, 50]);
    });

    it('should handle an empty array', () => {
        const arr = [];
        const mergeSort = new MergeSort(arr);
        const sortedArr = mergeSort.sort();
        assert.deepStrictEqual(sortedArr, []);
    });

    it('should handle an array with one element', () => {
        const arr = [42];
        const mergeSort = new MergeSort(arr);
        const sortedArr = mergeSort.sort();
        assert.deepStrictEqual(sortedArr, [42]);
    });
});
