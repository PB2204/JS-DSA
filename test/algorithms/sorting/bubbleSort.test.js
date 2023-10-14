const assert = require('assert');
const BubbleSort = require('../../../algorithms/sorting/bubbleSort');

describe('BubbleSort (OOP)', () => {
    it('should sort an array in ascending order', () => {
        const arr = [64, 25, 12, 22, 11];
        const bubbleSort = new BubbleSort(arr);
        bubbleSort.sort();
        assert.deepStrictEqual(bubbleSort.arr, [11, 12, 22, 25, 64]);
    });

    it('should handle an already sorted array', () => {
        const arr = [10, 20, 30, 40, 50];
        const bubbleSort = new BubbleSort(arr);
        bubbleSort.sort();
        assert.deepStrictEqual(bubbleSort.arr, [10, 20, 30, 40, 50]);
    });

    it('should handle an empty array', () => {
        const arr = [];
        const bubbleSort = new BubbleSort(arr);
        bubbleSort.sort();
        assert.deepStrictEqual(bubbleSort.arr, []);
    });

    it('should handle an array with one element', () => {
        const arr = [42];
        const bubbleSort = new BubbleSort(arr);
        bubbleSort.sort();
        assert.deepStrictEqual(bubbleSort.arr, [42]);
    });
});