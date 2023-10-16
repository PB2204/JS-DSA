# JS-DSA (JavaScript Data Structures and Algorithms)

## Introduction
"JS-DSA" is a JavaScript package that provides a `CircularLinkedList` class, which implements a circular linked list data structure. A circular linked list is a type of linked list where the last node points back to the first node, creating a loop.

To get started, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a CircularLinkedList
To use the `CircularLinkedList` class, first, import it into your JavaScript code:

```javascript
const CircularLinkedList = require('adv-dsa');

// Initialize a CircularLinkedList instance
const list = new CircularLinkedList();
```

### Appending Elements
You can append elements to the circular linked list using the `append` method. This method adds elements to the end of the list and maintains the circular structure:

```javascript
list.append(1);
list.append(2);
list.append(3);
```

### Displaying the Linked List
To display the elements in the circular linked list, use the `display` method. This method returns an array containing the elements in the list, starting from the head node and following the circular references:

```javascript
const elements = list.display(); // Returns [1, 2, 3]
```

## Testing

You can also test the "JS-DSA" package using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `CircularLinkedList` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const CircularLinkedList = require('adv-dsa');

// Your test cases go here
```

## Conclusion
"JS-DSA" offers a robust `CircularLinkedList` class for managing circular linked lists. This data structure is useful in various applications, including implementing circular buffers, circular queues, and more.
