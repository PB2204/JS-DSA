# Insertion Sort

The Insertion Sort algorithm is used to sort an array of elements in ascending order.

## Installation

To use the Insertion Sort algorithm from the "JS-DSA" package, first, install the package using npm:

```bash
npm install adv-dsa
```

## Usage

You can use the Insertion Sort class by following these steps:

1. Import the `InsertionSort` class from the package.

```javascript
const InsertionSort = require('adv-dsa').InsertionSort;
```

2. Create an instance of the `InsertionSort` class, passing the array you want to sort as an argument to the constructor.

```javascript
const arr = [64, 25, 12, 22, 11];
const insertionSort = new InsertionSort(arr);
```

3. Call the `sort()` method on the instance to sort the array in ascending order.

```javascript
insertionSort.sort();
```

4. The sorted array can be accessed through the `arr` property of the `InsertionSort` instance.

```javascript
console.log(insertionSort.arr); // [11, 12, 22, 25, 64]
```

## Example

Here's an example of using the Insertion Sort algorithm to sort an array:

```javascript
const InsertionSort = require('adv-dsa').InsertionSort;

const arr = [64, 25, 12, 22, 11];
const insertionSort = new InsertionSort(arr);
insertionSort.sort();

console.log(insertionSort.arr); // [11, 12, 22, 25, 64]
```

## Test Cases

To ensure that the Insertion Sort algorithm works correctly, you can write test cases using a testing framework like Mocha and Chai. Here's an example of test cases for Insertion Sort:

```javascript
const assert = require('assert');
const InsertionSort = require('adv-dsa').InsertionSort;

describe('InsertionSort (OOP)', () => {
    it('should sort an array in ascending order', () => {
        const arr = [64, 25, 12, 22, 11];
        const insertionSort = new InsertionSort(arr);
        insertionSort.sort();
        assert.deepStrictEqual(insertionSort.arr, [11, 12, 22, 25, 64]);
    });

    // Add more test cases as needed
});
```

This is how you can use the Insertion Sort algorithm provided by the "JS-DSA" package.