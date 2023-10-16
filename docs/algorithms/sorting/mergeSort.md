# Merge Sort

The Merge Sort algorithm is used to sort an array of elements in ascending order.

## Installation

To use the Merge Sort algorithm from the "JS-DSA" package, first, install the package using npm:

```bash
npm install adv-dsa
```

## Usage

You can use the Merge Sort class by following these steps:

1. Import the `MergeSort` class from the package.

```javascript
const MergeSort = require('adv-dsa').MergeSort;
```

2. Create an instance of the `MergeSort` class, passing the array you want to sort as an argument to the constructor.

```javascript
const arr = [64, 25, 12, 22, 11];
const mergeSort = new MergeSort(arr);
```

3. Call the `sort()` method on the instance to sort the array in ascending order.

```javascript
const sortedArr = mergeSort.sort();
```

4. The sorted array is returned by the `sort()` method and can be accessed in the `sortedArr` variable.

```javascript
console.log(sortedArr); // [11, 12, 22, 25, 64]
```

## Example

Here's an example of using the Merge Sort algorithm to sort an array:

```javascript
const MergeSort = require('adv-dsa').MergeSort;

const arr = [64, 25, 12, 22, 11];
const mergeSort = new MergeSort(arr);
const sortedArr = mergeSort.sort();

console.log(sortedArr); // [11, 12, 22, 25, 64]
```

## Test Cases

To ensure that the Merge Sort algorithm works correctly, you can write test cases using a testing framework like Mocha and Chai. Here's an example of test cases for Merge Sort:

```javascript
const assert = require('assert');
const MergeSort = require('adv-dsa').MergeSort;

describe('MergeSort (OOP)', () => {
    it('should sort an array in ascending order', () => {
        const arr = [64, 25, 12, 22, 11];
        const mergeSort = new MergeSort(arr);
        const sortedArr = mergeSort.sort();
        assert.deepStrictEqual(sortedArr, [11, 12, 22, 25, 64]);
    });

    // Add more test cases as needed
});
```

This is how you can use the Merge Sort algorithm provided by the "JS-DSA" package.
