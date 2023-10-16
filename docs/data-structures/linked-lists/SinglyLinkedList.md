# JS-DSA (JavaScript Data Structures and Algorithms)

## Introduction
"JS-DSA" is a JavaScript package that provides a `SinglyLinkedList` class, which implements a singly linked list data structure. A singly linked list is a linear data structure where each element (node) points to the next element in the list.

To get started, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a SinglyLinkedList
To use the `SinglyLinkedList` class, first, import it into your JavaScript code:

```javascript
const SinglyLinkedList = require('adv-dsa');

// Initialize a SinglyLinkedList instance
const list = new SinglyLinkedList();
```

### Appending Elements
You can append elements to the singly linked list using the `append` method. This method adds elements to the end of the list:

```javascript
list.append(1);
list.append(2);
list.append(3);
```

### Displaying the Linked List
To display the elements in the singly linked list, use the `display` method. This method returns an array containing the elements in the list:

```javascript
const elements = list.display(); // Returns [1, 2, 3]
```

## Testing

You can also test the "JS-DSA" package using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `SinglyLinkedList` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const SinglyLinkedList = require('adv-dsa');

// Your test cases go here
```

## Conclusion
"JS-DSA" offers a simple and efficient `SinglyLinkedList` class for managing singly linked lists. This data structure is commonly used in various applications, including building data structures like stacks, queues, and more.
