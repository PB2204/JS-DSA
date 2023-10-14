const assert = require('assert');
const SelectionSort = require('../../../algorithms/sorting/selectionSort');

describe('SelectionSort (OOP)', () => {
    it('should sort an array in ascending order', () => {
        const arr = [64, 25, 12, 22, 11];
        const selectionSort = new SelectionSort(arr);
        selectionSort.sort();
        assert.deepStrictEqual(selectionSort.arr, [11, 12, 22, 25, 64]);
    });

    it('should handle an already sorted array', () => {
        const arr = [10, 20, 30, 40, 50];
        const selectionSort = new SelectionSort(arr);
        selectionSort.sort();
        assert.deepStrictEqual(selectionSort.arr, [10, 20, 30, 40, 50]);
    });

    it('should handle an empty array', () => {
        const arr = [];
        const selectionSort = new SelectionSort(arr);
        selectionSort.sort();
        assert.deepStrictEqual(selectionSort.arr, []);
    });

    it('should handle an array with one element', () => {
        const arr = [42];
        const selectionSort = new SelectionSort(arr);
        selectionSort.sort();
        assert.deepStrictEqual(selectionSort.arr, [42]);
    });
});
