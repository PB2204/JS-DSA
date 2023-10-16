# Heap Sort Algorithm

Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort an array in ascending order. It is an efficient and in-place sorting algorithm with a time complexity of O(n * log n).

## Usage

To use the Heap Sort algorithm in your JavaScript project, you can follow these steps:

1. Import the `HeapSort` class.

```javascript
const HeapSort = require('adv-dsa').HeapSort;
```

2. Create an instance of the `HeapSort` class, passing the array you want to sort as an argument.

```javascript
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sorter = new HeapSort(arr);
```

3. Use the `sort` method to sort the array.

```javascript
const sortedArr = sorter.sort();
console.log('Sorted array:', sortedArr);
```

## Example

```javascript
const HeapSort = require('adv-dsa').HeapSort;

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sorter = new HeapSort(arr);
const sortedArr = sorter.sort();
console.log('Sorted array:', sortedArr);
```

This code will output the sorted array:

```
Sorted array: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

## Test Cases

You can also use the provided test cases to verify that the `HeapSort` class works as expected. Here's how you can run the test cases:

1. Import the `HeapSort` class in your test file.

```javascript
const HeapSort = require('adv-dsa').HeapSort;
```

2. Create an instance of the `HeapSort` class, passing the array you want to sort as an argument.

```javascript
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sorter = new HeapSort(arr);
```

3. Use the `sort` method to sort the array and use the `expect` function from your testing framework to assert the sorted result.

```javascript
// Example test case
const sortedArr = sorter.sort();
expect(sortedArr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
```

Make sure to run your test suite to validate the correctness of the Heap Sort algorithm implementation. This documentation should help users understand how to use the Heap Sort algorithm from your package and how to run the provided test cases.