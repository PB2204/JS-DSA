# JS-DSA (JavaScript Data Structures and Algorithms)

## Introduction
"JS-DSA" is a JavaScript package that provides a Disjoint Set (Union-Find) data structure. This data structure is commonly used to manage disjoint sets of elements and perform operations like finding the set a particular element belongs to or uniting two sets into one.

To get started, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a Disjoint Set
To use the `DisjointSet` class, first, import it into your JavaScript code:

```javascript
const DisjointSet = require('adv-dsa');

// Initialize a DisjointSet instance
const ds = new DisjointSet();
```

### Making Sets
You can create individual sets and add elements to them using the `makeSet` method:

```javascript
ds.makeSet('A');
ds.makeSet('B');
ds.makeSet('C');
```

### Finding a Set
To find the set to which an element belongs, use the `find` method:

```javascript
const setA = ds.find('A'); // Returns 'A'
const setB = ds.find('B'); // Returns 'B'
const setC = ds.find('C'); // Returns 'C'
```

### Performing Unions
You can merge two sets together using the `union` method:

```javascript
ds.union('A', 'B');
ds.union('C', 'D');
ds.union('B', 'D');
```

### Handling Invalid Operations
The `DisjointSet` class gracefully handles invalid operations, such as attempting to union elements that don't exist or trying to find an element that doesn't exist. In these cases, the methods return appropriate values:

```javascript
const result = ds.union('E', 'F'); // Returns false (elements don't exist)
const isUnionSuccessful = ds.union('A', 'B'); // Returns true (elements already in the same set)
const notFoundSet = ds.find('X'); // Returns null (element doesn't exist)
```

## Testing

You can also test the "JS-DSA" package using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `DisjointSet` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const DisjointSet = require('adv-dsa');

// Your test cases go here
```

## Conclusion
"JS-DSA" is a powerful tool for managing disjoint sets and performing operations on them. It can be particularly useful in various algorithms and data structures, such as Kruskal's Minimum Spanning Tree algorithm or cycle detection in a graph.