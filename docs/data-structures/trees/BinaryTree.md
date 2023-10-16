# JavaScript Binary Tree Data Structure

The JavaScript Binary Tree data structure is implemented in the `BinaryTree` class. It allows you to create a binary tree, insert values, search for values, and perform in-order traversal. Here's how to use the `BinaryTree` class:

## Introduction

To get started with the `BinaryTree` class, you can install the package via npm using the following command:

```bash
npm install js-binary-tree
```

## Example Usage

### Creating a Binary Tree

You can create a new Binary Tree using the `BinaryTree` class:

```javascript
const BinaryTree = require('js-binary-tree');

// Initialize a new binary tree
const tree = new BinaryTree();
```

### Inserting Values

You can insert values into the binary tree using the `insert` method:

```javascript
tree.insert(10);
tree.insert(5);
tree.insert(15);
```

### Searching for Values

You can search for values in the binary tree using the `search` method:

```javascript
const found = tree.search(5);
// `found` will be `true` since 5 is in the tree

const notFound = tree.search(20);
// `notFound` will be `false` since 20 is not in the tree
```

### In-Order Traversal

You can perform an in-order traversal of the binary tree using the `inOrderTraversal` method. This returns an array of values in ascending order:

```javascript
const result = tree.inOrderTraversal();
// `result` will be [5, 10, 15] for the example tree
```

## Testing

You can also test the `BinaryTree` class using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `BinaryTree` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const BinaryTree = require('js-binary-tree');

// Your test cases go here
```

## Conclusion

The `BinaryTree` class in JavaScript allows you to create a binary tree, insert values, search for values, and perform in-order traversal. It is useful for scenarios where you need to efficiently store and manage a collection of values in a binary tree structure.
