# Binary Search

The `BinarySearch` class provides an implementation of the binary search algorithm, which efficiently searches for a target element in a sorted array. Binary search works by repeatedly dividing the search range in half until the target element is found or the search range is empty.

## Usage

To use the `BinarySearch` class in your JavaScript or TypeScript project, follow these steps:

1. Import the `BinarySearch` class from your module.

```javascript
const BinarySearch = require('adv-dsa').BinarySearch;
```

2. Create an instance of the class, passing a sorted array as an argument.

```javascript
const binarySearch = new BinarySearch(sortedArray);
```

3. Use the `search` method to search for a target element in the array.

```javascript
const targetElement = 4;
const index = binarySearch.search(targetElement);
if (index !== -1) {
    console.log(`Element ${targetElement} found at index ${index}`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}
```

This is how you can use the `BinarySearch` class to perform binary search in a sorted array.

## Example

```javascript
const BinarySearch = require('adv-dsa').BinarySearch;

const sortedArray = [1, 2, 3, 4, 5, 6, 7];
const binarySearch = new BinarySearch(sortedArray);
const targetElement = 4;
const index = binarySearch.search(targetElement);

if (index !== -1) {
    console.log(`Element ${targetElement} found at index ${index}`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}
```

This example demonstrates how to use the `BinarySearch` class to search for a target element in a sorted array.

## Test Cases

You can use the provided test cases to verify that the `BinarySearch` class works as expected. Import the necessary modules and use the `expect` function from your testing framework to assert the results of the test cases.

```javascript
const BinarySearch = require('adv-dsa').BinarySearch;

const binarySearch = new BinarySearch([1, 2, 3, 4, 5, 6, 7]);

// Example test case for finding the target element
const targetElement = 4;
const index = binarySearch.search(targetElement);
expect(index).toEqual(3);

// Additional test cases can be added as needed.
```

This documentation should help users understand how to use the `BinarySearch` class from your package, how to search for a target element in a sorted array, and how to run the provided test cases.