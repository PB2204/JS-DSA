# Randomized Quick Sort

The `RandomizedQuickSort` class provides an implementation of the randomized Quick Sort algorithm for sorting an array of numbers in ascending order. The algorithm selects a random pivot element to improve its average-case performance compared to the standard Quick Sort algorithm.

## Usage

To use the `RandomizedQuickSort` class in your JavaScript or TypeScript project, follow these steps:

1. Import the `RandomizedQuickSort` class from your module.

```javascript
const RandomizedQuickSort = require('adv-dsa').RandomizedQuickSort;
```

2. Create an instance of the class.

```javascript
const randomizedQuickSort = new RandomizedQuickSort();
```

3. Use the `sort` method to sort an array of numbers in ascending order.

```javascript
const unsortedArray = [5, 3, 1, 4, 2];
randomizedQuickSort.sort(unsortedArray);
console.log(unsortedArray); // Output: [1, 2, 3, 4, 5]
```

This is how you can use the `RandomizedQuickSort` class to sort an array of numbers using randomized Quick Sort.

## Example

```javascript
const RandomizedQuickSort = require('adv-dsa').RandomizedQuickSort;

const randomizedQuickSort = new RandomizedQuickSort();
const unsortedArray = [5, 3, 1, 4, 2];
randomizedQuickSort.sort(unsortedArray);
console.log(unsortedArray); // Output: [1, 2, 3, 4, 5]
```

This example demonstrates how to use the `RandomizedQuickSort` class to sort an array of numbers.

## Test Cases

You can use the provided test cases to verify that the `RandomizedQuickSort` class works as expected. Import the necessary modules and use the `expect` function from your testing framework to assert the results of the test cases.

```javascript
const RandomizedQuickSort = require('adv-dsa').RandomizedQuickSort;

const randomizedQuickSort = new RandomizedQuickSort();

// Example test case for sorting an array
const arr = [5, 3, 1, 4, 2];
const sortedArr = [1, 2, 3, 4, 5];
randomizedQuickSort.sort(arr);
expect(arr).toEqual(sortedArr);

// Additional test cases can be added as needed.
```

This documentation should help users understand how to use the `RandomizedQuickSort` class from your package, how to sort an array of numbers, and how to run the provided test cases.