# Selection Sort

The Selection Sort algorithm is used to sort an array of elements in ascending order. It repeatedly selects the minimum element from the unsorted portion of the array and places it at the beginning.

## Installation

To use the Selection Sort algorithm from the "JS-DSA" package, first, install the package using npm:

```bash
npm install adv-dsa
```

## Usage

You can use the SelectionSort class by following these steps:

1. Import the `SelectionSort` class from the package.

```javascript
const SelectionSort = require('adv-dsa').SelectionSort;
```

2. Create an instance of the `SelectionSort` class, passing the array you want to sort as an argument to the constructor.

```javascript
const arr = [64, 25, 12, 22, 11];
const selectionSort = new SelectionSort(arr);
```

3. Call the `sort()` method on the instance to sort the array in ascending order.

```javascript
selectionSort.sort();
```

4. The sorted array can be accessed through the `arr` property of the `SelectionSort` instance.

```javascript
console.log(selectionSort.arr); // [11, 12, 22, 25, 64]
```

## Example

Here's an example of using the Selection Sort algorithm to sort an array:

```javascript
const SelectionSort = require('adv-dsa').SelectionSort;

const arr = [64, 25, 12, 22, 11];
const selectionSort = new SelectionSort(arr);
selectionSort.sort();

console.log(selectionSort.arr); // [11, 12, 22, 25, 64]
```

## Test Cases

To ensure that the Selection Sort algorithm works correctly, you can write test cases using a testing framework like Mocha and Chai. Here's an example of test cases for Selection Sort:

```javascript
const assert = require('assert');
const SelectionSort = require('adv-dsa').SelectionSort;

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
```

This is how you can use the Selection Sort algorithm provided by the "JS-DSA" package.