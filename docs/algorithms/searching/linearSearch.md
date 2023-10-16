# Linear Search

The Linear Search algorithm is used to find an element in an array by sequentially checking each element until a match is found or the whole array has been searched.

## LinearSearch

The `LinearSearch` class provides an implementation of the linear search algorithm for finding a target element in an array.

### Constructor

- `constructor(arr: any[])`: Creates a new `LinearSearch` instance with the provided array `arr` to be searched.

### Methods

- `search(target: any): number`: Searches for the `target` element in the array. Returns the index of the first occurrence of the `target` element or -1 if not found.

## Usage

1. Import the `LinearSearch` class from your module.

```javascript
const LinearSearch = require('adv-dsa').LinearSearch;
```

2. Create a `LinearSearch` instance, passing the array to be searched as a parameter to the constructor.

3. Use the `search` method to search for the target element in the array. The method returns the index of the first occurrence of the target element or -1 if not found.

## Example

```javascript
const LinearSearch = require('adv-dsa').LinearSearch;

const arr = [1, 2, 3, 4, 5];
const linearSearch = new LinearSearch(arr);

const target = 3;
const index = linearSearch.search(target);
console.log(index); // Output: 2
```

This example demonstrates how to use the `LinearSearch` class to search for a target element in an array.

## Test Cases

You can use the provided test cases to verify that the `LinearSearch` class works as expected. Import the necessary modules and use the `expect` function from your testing framework to assert the results of the test cases.

```javascript
const LinearSearch = require('adv-dsa').LinearSearch;

// Example test case
const arr = [1, 2, 3, 4, 5];
const linearSearch = new LinearSearch(arr);
const target = 3;
const index = linearSearch.search(target);
expect(index).toEqual(2);

// Additional test cases can be added as needed.
```

This documentation should help users understand how to use the `LinearSearch` class to perform linear search in an array and how to run the provided test cases.