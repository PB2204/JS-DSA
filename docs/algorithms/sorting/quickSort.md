# QuickSort

The QuickSort algorithm is used to sort an array of elements in ascending order.

## Installation

To use the QuickSort algorithm from the "JS-DSA" package, first, install the package using npm:

```bash
npm install adv-dsa
```

## Usage

You can use the QuickSort class by following these steps:

1. Import the `QuickSort` class from the package.

```javascript
const QuickSort = require('adv-dsa').QuickSort;
```

2. Create an instance of the `QuickSort` class, passing the array you want to sort as an argument to the constructor.

```javascript
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const quickSort = new QuickSort(arr);
```

3. Call the `sort()` method on the instance to sort the array in ascending order.

```javascript
const sortedArr = quickSort.sort();
```

4. The sorted array is returned by the `sort()` method.

```javascript
console.log(sortedArr); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

## Example

Here's an example of using the QuickSort algorithm to sort an array:

```javascript
const QuickSort = require('adv-dsa').QuickSort;

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const quickSort = new QuickSort(arr);
const sortedArr = quickSort.sort();

console.log(sortedArr); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

## Test Cases

To ensure that the QuickSort algorithm works correctly, you can write test cases using a testing framework like Jest. Here's an example of test cases for QuickSort:

```javascript
const QuickSort = require('adv-dsa').QuickSort;

describe('QuickSort (OOP)', () => {
    it('should sort an array in ascending order', () => {
        const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const sortedArr = new QuickSort(arr).sort();
        expect(sortedArr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });

    it('should handle an empty array', () => {
        const arr = [];
        const sortedArr = new QuickSort(arr).sort();
        expect(sortedArr).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const arr = [42];
        const sortedArr = new QuickSort(arr).sort();
        expect(sortedArr).toEqual([42]);
    });

    it('should handle an array with duplicate elements', () => {
        const arr = [5, 2, 1, 4, 5, 3, 2, 4, 1, 3];
        const sortedArr = new QuickSort(arr).sort();
        expect(sortedArr).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });
});
```

This is how you can use the QuickSort algorithm provided by the "JS-DSA" package.