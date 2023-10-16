# JavaScript Stack Data Structure

The JavaScript Stack data structure is implemented in the `Stack` class, which allows you to create a stack (LIFO) data structure. Here's how to use the `Stack` class:

## Introduction

To get started with the `Stack` class, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a Stack
You can create a new Stack using the `Stack` class:

```javascript
const Stack = require('adv-dsa');

// Initialize a new stack
const myStack = new Stack();
```

### Adding Elements
You can add elements to the top of the stack using the `push` method:

```javascript
myStack.push(1);
myStack.push(2);
myStack.push(3);

// The stack now contains [1, 2, 3]
```

### Removing Elements
To remove and return the top element from the stack, use the `pop` method:

```javascript
const poppedElement = myStack.pop(); // Removes and returns 3
```

### Checking the Top Element
You can check the top element of the stack without removing it using the `peek` method:

```javascript
const topElement = myStack.peek(); // Returns 2 (top element)
```

### Checking If the Stack Is Empty
You can check if the stack is empty using the `isEmpty` method:

```javascript
const isEmpty = myStack.isEmpty(); // Returns false
```

### Getting the Size of the Stack
You can get the number of elements in the stack using the `size` method:

```javascript
const stackSize = myStack.size(); // Returns 2
```

## Testing

You can also test the `Stack` class using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `Stack` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const Stack = require('adv-dsa');

// Your test cases go here
```

## Conclusion

The `Stack` class in JavaScript allows you to manage a collection of elements in a stack data structure following the LIFO (Last-In-First-Out) order. It is useful for scenarios where you need to track and manipulate elements in a specific order.
