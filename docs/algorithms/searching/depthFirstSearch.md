# Depth-First Search (DFS)

The Depth-First Search (DFS) algorithm is used to explore or search through a tree or graph by visiting one branch as deeply as possible before backtracking. This approach explores the full depth of a branch before moving to the next branch.

## GraphNode

The `GraphNode` class represents a node in the graph. Each node has a value and may have children nodes connected to it.

### Constructor

- `constructor(value: any)`: Creates a new `GraphNode` with the specified `value` and an empty array of children nodes.

### Methods

- `addChild(node: GraphNode)`: Adds a child node to the current node.

## DepthFirstSearch

The `DepthFirstSearch` class provides an implementation of the DFS algorithm. It starts from a given node and explores its adjacent nodes in a depth-first manner.

### Constructor

- `constructor(node: GraphNode)`: Creates a new `DepthFirstSearch` object with the provided `node` as the starting point for the search.

### Methods

- `search()`: Performs the depth-first search on the graph starting from the specified node and returns an array of visited nodes' values in the order they were visited.

## Usage

1. Import the `GraphNode` and `DepthFirstSearch` classes from your module.

```javascript
const { GraphNode, DepthFirstSearch } = require('adv-dsa').DepthFirstSearch;
```

2. Create `GraphNode` instances, link them together to represent your graph, and pass the starting node to the `DepthFirstSearch` constructor.

3. Use the `search` method of the `DepthFirstSearch` instance to perform the depth-first search and get the result.

## Example

```javascript
const { GraphNode, DepthFirstSearch } = require('adv-dsa').DepthFirstSearch;

const nodeA = new GraphNode("A");
const nodeB = new GraphNode("B");
const nodeC = new GraphNode("C");
const nodeD = new GraphNode("D");
const nodeE = new GraphNode("E");
const nodeF = new GraphNode("F");

nodeA.addChild(nodeB);
nodeA.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeC.addChild(nodeF);

const dfs = new DepthFirstSearch(nodeA);
const result = dfs.search();
console.log(result); // Output: ["A", "B", "D", "E", "C", "F"]
```

This example demonstrates how to use the `GraphNode` and `DepthFirstSearch` classes to perform DFS on a tree or graph.

## Test Cases

You can use the provided test cases to verify that the `DepthFirstSearch` class works as expected. Import the necessary modules and use the `expect` function from your testing framework to assert the results of the test cases.

```javascript
const { GraphNode, DepthFirstSearch } = require('adv-dsa').DepthFirstSearch;

// Example test case for performing DFS on a tree
const nodeA = new GraphNode("A");
const nodeB = new GraphNode("B");
nodeA.addChild(nodeB);
const dfs = new DepthFirstSearch(nodeA);
const result = dfs.search();
expect(result).toEqual(["A", "B"]);

// Additional test cases can be added as needed.
```

This documentation should help users understand how to use the `GraphNode` and `DepthFirstSearch` classes from your package to perform depth-first search on a tree or graph and how to run the provided test cases.