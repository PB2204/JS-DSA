# JS-DSA (JavaScript Data Structures and Algorithms)

## Introduction
"JS-DSA" is a JavaScript package that provides a `MaxHeap` class, which implements a max heap data structure. A max heap is a binary tree where the parent nodes contain values greater than or equal to the values in their children nodes. This data structure is commonly used for efficiently maintaining and retrieving the maximum element.

To get started, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a MaxHeap
To use the `MaxHeap` class, first, import it into your JavaScript code:

```javascript
const MaxHeap = require('adv-dsa');

// Initialize a MaxHeap instance
const maxHeap = new MaxHeap();
```

### Inserting Elements
You can insert elements into the max heap using the `insert` method. The heap will automatically maintain its structure by moving the inserted element to the correct position:

```javascript
maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.insert(10);
maxHeap.insert(1);
```

### Extracting Maximum Value
To retrieve the maximum value from the max heap, use the `extractMax` method. This method will remove the maximum value from the heap and reorganize it:

```javascript
const max = maxHeap.extractMax(); // Returns 10
```

### Checking Heap Size and Emptiness
You can check the size and emptiness of the heap using the `size` and `isEmpty` methods:

```javascript
const heapSize = maxHeap.size(); // Returns the current size of the heap
const isEmpty = maxHeap.isEmpty(); // Returns `true` if the heap is empty, `false` otherwise
```

## Testing

You can also test the "JS-DSA" package using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `MaxHeap` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const MaxHeap = require('adv-dsa');

// Your test cases go here
```

## Conclusion
"JS-DSA" offers a robust `MaxHeap` class for maintaining maximum values efficiently. This data structure is essential in various algorithms and applications where quick access to the maximum element is required.
