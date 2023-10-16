const RandomizedQuickSort = require('../../../algorithms/randomized/randomizedQuickSort');

describe('RandomizedQuickSort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const arr = [5, 3, 1, 4, 2];
        const sortedArr = [1, 2, 3, 4, 5];
        const randomizedQuickSort = new RandomizedQuickSort();
        randomizedQuickSort.sort(arr);
        expect(arr).toEqual(sortedArr);
    });

    it('should handle an empty array', () => {
        const arr = [];
        const randomizedQuickSort = new RandomizedQuickSort();
        randomizedQuickSort.sort(arr);
        expect(arr).toEqual([]);
    });

    it('should handle an array with a single element', () => {
        const arr = [42];
        const randomizedQuickSort = new RandomizedQuickSort();
        randomizedQuickSort.sort(arr);
        expect(arr).toEqual([42]);
    });

    it('should handle large arrays', () => {
        const arr = [];
        for (let i = 1000; i > 0; i--) {
            arr.push(i);
        }
        const randomizedQuickSort = new RandomizedQuickSort();
        randomizedQuickSort.sort(arr);
        expect(arr).toEqual(Array.from({ length: 1000 }, (_, i) => i + 1));
    });
});
