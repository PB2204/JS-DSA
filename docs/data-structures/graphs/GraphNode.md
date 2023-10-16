# JS-DSA (JavaScript Data Structures and Algorithms)

## Introduction
"JS-DSA" is a JavaScript package that provides a `GraphNode` class. This class is designed to represent nodes in a graph and allows you to create, connect, and manipulate nodes. Graphs are fundamental data structures used in a wide range of applications, from modeling relationships in social networks to representing structures in computer science algorithms.

To get started, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a GraphNode
To use the `GraphNode` class, first, import it into your JavaScript code:

```javascript
const GraphNode = require('adv-dsa');

// Initialize a GraphNode instance with a value
const nodeA = new GraphNode('A');
```

### Adding Neighbors
You can add neighbors to a node using the `addNeighbor` method. This method establishes a connection between the nodes:

```javascript
const nodeB = new GraphNode('B');
const nodeC = new GraphNode('C');

nodeA.addNeighbor(nodeB);
nodeA.addNeighbor(nodeC);
```

### Getting Neighbors
To retrieve the neighbors of a node, use the `getNeighbors` method:

```javascript
const neighborsOfA = nodeA.getNeighbors(); // Returns an array of neighbor nodes (nodeB, nodeC)
```

### Removing Neighbors
You can remove neighbors from a node using the `removeNeighbor` method:

```javascript
nodeA.removeNeighbor(nodeB);
```

## Testing

You can also test the "JS-DSA" package using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `GraphNode` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const GraphNode = require('adv-dsa');

// Your test cases go here
```

## Conclusion
"JS-DSA" offers a flexible `GraphNode` class, allowing you to work with graph-based structures in your JavaScript applications. This class is particularly useful when dealing with graph algorithms and problems where relationships between nodes are crucial.
