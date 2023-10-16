# JS-DSA (JavaScript Data Structures and Algorithms)

## Introduction
"JS-DSA" is a JavaScript package that provides a `MinHeap` class, which implements a min heap data structure. A min heap is a binary tree where the parent nodes contain values less than or equal to the values in their children nodes. This data structure is commonly used for efficiently maintaining and retrieving the minimum element.

To get started, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a MinHeap
To use the `MinHeap` class, first, import it into your JavaScript code:

```javascript
const MinHeap = require('adv-dsa');

// Initialize a MinHeap instance
const minHeap = new MinHeap();
```

### Inserting Elements
You can insert elements into the min heap using the `insert` method. The heap will automatically maintain its structure by moving the inserted element to the correct position:

```javascript
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(10);
minHeap.insert(1);
```

### Extracting Minimum Value
To retrieve the minimum value from the min heap, use the `extractMin` method. This method will remove the minimum value from the heap and reorganize it:

```javascript
const min = minHeap.extractMin(); // Returns 1
```

### Checking Heap Size and Emptiness
You can check the size and emptiness of the heap using the `size` and `isEmpty` methods:

```javascript
const heapSize = minHeap.size(); // Returns the current size of the heap
const isEmpty = minHeap.isEmpty(); // Returns `true` if the heap is empty, `false` otherwise
```

## Testing

You can also test the "JS-DSA" package using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `MinHeap` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const MinHeap = require('adv-dsa');

// Your test cases go here
```

## Conclusion
"JS-DSA" offers a reliable `MinHeap` class for maintaining minimum values efficiently. This data structure is essential in various algorithms and applications where quick access to the minimum element is required.
