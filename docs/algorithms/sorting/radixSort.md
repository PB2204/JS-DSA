# RadixSort

The RadixSort algorithm is used to sort an array of elements in ascending order. It is a non-comparative integer sorting algorithm.

## Installation

To use the RadixSort algorithm from the "JS-DSA" package, first, install the package using npm:

```bash
npm install adv-dsa
```

## Usage

You can use the RadixSort class by following these steps:

1. Import the `RadixSort` class from the package.

```javascript
const RadixSort = require('adv-dsa').RadixSort;
```

2. Create an instance of the `RadixSort` class, passing the array you want to sort as an argument to the constructor.

```javascript
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const radixSort = new RadixSort(arr);
```

3. Call the `sort()` method on the instance to sort the array in ascending order.

```javascript
const sortedArr = radixSort.sort();
```

4. The sorted array is returned by the `sort()` method.

```javascript
console.log(sortedArr); // [2, 24, 45, 66, 75, 90, 170, 802]
```

## Example

Here's an example of using the RadixSort algorithm to sort an array:

```javascript
const RadixSort = require('adv-dsa').RadixSort;

const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const radixSort = new RadixSort(arr);
const sortedArr = radixSort.sort();

console.log(sortedArr); // [2, 24, 45, 66, 75, 90, 170, 802]
```

## Test Cases

To ensure that the RadixSort algorithm works correctly, you can write test cases using a testing framework like Jest. Here's an example of test cases for RadixSort:

```javascript
const RadixSort = require('adv-dsa').RadixSort;

describe('RadixSort (OOP)', () => {
    it('should sort an array in ascending order', () => {
        const arr = [170, 45, 75, 90, 802, 24, 2, 66];
        const sortedArr = new RadixSort(arr).sort();
        expect(sortedArr).toEqual([2, 24, 45, 66, 75, 90, 170, 802]);
    });

    it('should handle an empty array', () => {
        const arr = [];
        const sortedArr = new RadixSort(arr).sort();
        expect(sortedArr).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const arr = [42];
        const sortedArr = new RadixSort(arr).sort();
        expect(sortedArr).toEqual([42]);
    });

    it('should handle an array with duplicate elements', () => {
        const arr = [5, 2, 1, 4, 5, 3, 2, 4, 1, 3];
        const sortedArr = new RadixSort(arr).sort();
        expect(sortedArr).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });
});
```

This is how you can use the RadixSort algorithm provided by the "JS-DSA" package.