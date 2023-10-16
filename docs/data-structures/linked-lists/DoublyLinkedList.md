# JS-DSA (JavaScript Data Structures and Algorithms)

## Introduction
"JS-DSA" is a JavaScript package that provides a `DoublyLinkedList` class, which implements a doubly linked list data structure. A doubly linked list is a type of linked list where each node has both a reference to the next node and a reference to the previous node.

To get started, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a DoublyLinkedList
To use the `DoublyLinkedList` class, first, import it into your JavaScript code:

```javascript
const DoublyLinkedList = require('adv-dsa');

// Initialize a DoublyLinkedList instance
const list = new DoublyLinkedList();
```

### Appending Elements
You can append elements to the doubly linked list using the `append` method. This method adds elements to the end of the list and maintains both the forward and backward references:

```javascript
list.append(1);
list.append(2);
list.append(3);
```

### Displaying the Linked List
To display the elements in the doubly linked list, you can use two methods:

#### Displaying Forward
Use the `displayForward` method to display the linked list in the forward direction:

```javascript
const forwardElements = list.displayForward(); // Returns [1, 2, 3]
```

#### Displaying Backward
Use the `displayBackward` method to display the linked list in the reverse (backward) direction:

```javascript
const backwardElements = list.displayBackward(); // Returns [3, 2, 1]
```

## Testing

You can also test the "JS-DSA" package using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `DoublyLinkedList` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const DoublyLinkedList = require('adv-dsa');

// Your test cases go here
```

## Conclusion
"JS-DSA" offers a versatile `DoublyLinkedList` class for managing doubly linked lists. This data structure is useful in various applications, including implementing data structures like deques, text editors with undo/redo functionality, and more.
