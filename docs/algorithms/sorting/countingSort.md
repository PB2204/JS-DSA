# Counting Sort

The `CountingSort` class provides an implementation of the Counting Sort algorithm to sort an array of integers in ascending order. Counting Sort is an efficient sorting algorithm for a range of input values. This algorithm counts the number of occurrences of each value and reconstructs the sorted array.

## Usage

To use the `CountingSort` class in your JavaScript project, follow these steps:

1. Import the `CountingSort` class from your module.

```javascript
const CountingSort = require('adv-dsa').CountingSort;
```

2. Create an instance of the `CountingSort` class, passing the array you want to sort as a parameter.

```javascript
const arr = [4, 2, 2, 8, 3, 3, 1];
const countingSort = new CountingSort(arr);
```

3. Use the `sort` method to sort the array in ascending order.

```javascript
countingSort.sort();
```

4. The sorted array is available in the `arr` property of the `CountingSort` instance.

```javascript
console.log(countingSort.arr); // Output: [1, 2, 2, 3, 3, 4, 8]
```

This is how you can use the `CountingSort` class to sort an array of integers in ascending order.

## Example

```javascript
const CountingSort = require('adv-dsa').CountingSort;

const arr = [4, 2, 2, 8, 3, 3, 1];
const countingSort = new CountingSort(arr);
countingSort.sort();
console.log(countingSort.arr); // Output: [1, 2, 2, 3, 3, 4, 8]
```

This example demonstrates how to use the `CountingSort` class to sort an array of integers.

## Test Cases

You can use the provided test cases to verify that the `CountingSort` class works as expected.

1. Import the necessary modules in your test file.

```javascript
const CountingSort = require('adv-dsa').CountingSort;
const expect = require('expect');
```

2. Use the `expect` library or other assertion libraries to write test cases for different scenarios.

```javascript
// Example test case for sorting an unsorted array
it('should sort an unsorted array', () => {
    const arr = [4, 2, 2, 8, 3, 3, 1];
    const countingSort = new CountingSort(arr);
    const sortedArr = countingSort.sort();
    expect(sortedArr).toEqual([1, 2, 2, 3, 3, 4, 8]);
});

// Additional test cases for edge cases and scenarios
```

This documentation should help users understand how to use the `CountingSort` class from your package, how to sort an array of integers using Counting Sort, and how to run the provided test cases.