# JavaScript Queue Data Structure

The JavaScript Queue data structure is implemented in the `Queue` class, which allows you to create a queue (FIFO) data structure. Here's how to use the `Queue` class:

## Introduction

To get started with the `Queue` class, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a Queue
You can create a new Queue using the `Queue` class:

```javascript
const Queue = require('adv-dsa');

// Initialize a new queue
const myQueue = new Queue();
```

### Adding Elements
You can add elements to the end of the queue using the `enqueue` method:

```javascript
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

// The queue now contains [1, 2, 3]
```

### Removing Elements
To remove and return the front element from the queue, use the `dequeue` method:

```javascript
const dequeuedElement = myQueue.dequeue(); // Removes and returns 1
```

### Checking the Front Element
You can check the front element of the queue without removing it using the `front` method:

```javascript
const frontElement = myQueue.front(); // Returns 2 (front element)

```

### Checking If the Queue Is Empty
You can check if the queue is empty using the `isEmpty` method:

```javascript
const isEmpty = myQueue.isEmpty(); // Returns false
```

### Getting the Size of the Queue
You can get the number of elements in the queue using the `size` method:

```javascript
const queueSize = myQueue.size(); // Returns 2
```

## Testing

You can also test the `Queue` class using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `Queue` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const Queue = require('adv-dsa');

// Your test cases go here
```

## Conclusion

The `Queue` class in JavaScript allows you to manage a collection of elements in a queue data structure following the FIFO (First-In-First-Out) order. It is useful for scenarios where you need to process elements in a specific order.
