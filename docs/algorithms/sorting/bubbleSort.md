# Bubble Sort

The `BubbleSort` class provides an implementation of the Bubble Sort algorithm to sort an array of numbers in ascending order. This sorting algorithm repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

## Usage

To use the `BubbleSort` class in your JavaScript project, follow these steps:

1. Import the `BubbleSort` class from your module.

```javascript
const BubbleSort = require('adv-dsa').BubbleSort;
```

2. Create an instance of the `BubbleSort` class, passing the array you want to sort as a parameter.

```javascript
const arr = [64, 25, 12, 22, 11];
const bubbleSort = new BubbleSort(arr);
```

3. Use the `sort` method to sort the array in ascending order.

```javascript
bubbleSort.sort();
```

4. The sorted array is available in the `arr` property of the `BubbleSort` instance.

```javascript
console.log(bubbleSort.arr); // Output: [11, 12, 22, 25, 64]
```

This is how you can use the `BubbleSort` class to sort an array of numbers in ascending order.

## Example

```javascript
const BubbleSort = require('adv-dsa').BubbleSort;

const arr = [64, 25, 12, 22, 11];
const bubbleSort = new BubbleSort(arr);
bubbleSort.sort();
console.log(bubbleSort.arr); // Output: [11, 12, 22, 25, 64]
```

This example demonstrates how to use the `BubbleSort` class to sort an array of numbers.

## Test Cases

You can use the provided test cases to verify that the `BubbleSort` class works as expected.

1. Import the necessary modules in your test file.

```javascript
const assert = require('assert');
const BubbleSort = require('adv-dsa').BubbleSort;
```

2. Use the `assert` function to assert the results of the test cases. You can add more test cases for different arrays and scenarios.

```javascript
// Example test case for sorting an unsorted array
const unsortedArray = [64, 25, 12, 22, 11];
const bubbleSort = new BubbleSort(unsortedArray);
bubbleSort.sort();
assert.deepStrictEqual(bubbleSort.arr, [11, 12, 22, 25, 64]);

// Example test case for handling an already sorted array
const sortedArray = [10, 20, 30, 40, 50];
const bubbleSort2 = new BubbleSort(sortedArray);
bubbleSort2.sort();
assert.deepStrictEqual(bubbleSort2.arr, [10, 20, 30, 40, 50]);

// Additional test cases can be added to cover edge cases and scenarios.
```

This documentation should help users understand how to use the `BubbleSort` class from your package, how to sort an array using Bubble Sort, and how to run the provided test cases.