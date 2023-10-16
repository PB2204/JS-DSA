# JavaScript AVL Tree Data Structure

The JavaScript AVL Tree data structure is implemented in the `AVLTree` class, which allows you to create a self-balancing binary search tree with AVL properties. Here's how to use the `AVLTree` class:

## Introduction

To get started with the `AVLTree` class, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating an AVL Tree
You can create a new AVL Tree using the `AVLTree` class:

```javascript
const AVLTree = require('adv-dsa');

// Initialize a new AVL tree
const avlTree = new AVLTree();
```

### Inserting Values
You can insert values into the AVL tree using the `insert` method:

```javascript
avlTree.insert(10);
avlTree.insert(5);
avlTree.insert(15);
```

The AVL tree will automatically balance itself after each insertion to maintain AVL properties.

## Testing

You can also test the `AVLTree` class using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `AVLTree` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const AVLTree = require('adv-dsa');

// Your test cases go here
```

## Conclusion

The `AVLTree` class in JavaScript allows you to create a self-balancing binary search tree following AVL properties. It is useful for scenarios where you need to efficiently store and manage a collection of values while maintaining balance for better performance in search and other operations.
