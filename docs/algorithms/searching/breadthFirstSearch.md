# Breadth-First Search (BFS)

The Breadth-First Search (BFS) algorithm is used to explore or search through a tree or graph by visiting all the vertices at the current level before moving on to the vertices at the next level. This approach ensures that BFS explores the shortest paths from the starting vertex to all other vertices.

## GraphNode

The `GraphNode` class represents a node in the graph. Each node has a value and may have children nodes connected to it.

### Constructor

- `constructor(value: any)`: Creates a new `GraphNode` with the specified `value` and an empty array of children nodes.

### Methods

- `addChild(node: GraphNode)`: Adds a child node to the current node.

## BreadthFirstSearch

The `BreadthFirstSearch` class provides an implementation of the BFS algorithm. It starts from a given node and explores its adjacent nodes in a breadth-first manner.

### Constructor

- `constructor(node: GraphNode)`: Creates a new `BreadthFirstSearch` object with the provided `node` as the starting point for the search.

### Methods

- `search()`: Performs the breadth-first search on the graph starting from the specified node and returns an array of visited nodes' values in the order they were visited.

## Usage

1. Import the `GraphNode` and `BreadthFirstSearch` classes from your module.

```javascript
const { GraphNode, BreadthFirstSearch } = require('adv-dsa').BreadthFirstSearch;
```

2. Create `GraphNode` instances, link them together to represent your graph, and pass the starting node to the `BreadthFirstSearch` constructor.

3. Use the `search` method of the `BreadthFirstSearch` instance to perform the breadth-first search and get the result.

## Example

```javascript
const { GraphNode, BreadthFirstSearch } = require('adv-dsa').BreadthFirstSearch;

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

const bfs = new BreadthFirstSearch(nodeA);
const result = bfs.search();
console.log(result); // Output: ["A", "B", "C", "D", "E", "F"]
```

This example demonstrates how to use the `GraphNode` and `BreadthFirstSearch` classes to perform BFS on a tree or graph.

## Test Cases

You can use the provided test cases to verify that the `BreadthFirstSearch` class works as expected. Import the necessary modules and use the `expect` function from your testing framework to assert the results of the test cases.

```javascript
const { GraphNode, BreadthFirstSearch } = require('adv-dsa').BreadthFirstSearch;

// Example test case for performing BFS on a tree
const nodeA = new GraphNode("A");
const nodeB = new GraphNode("B");
nodeA.addChild(nodeB);
const bfs = new BreadthFirstSearch(nodeA);
const result = bfs.search();
expect(result).toEqual(["A", "B"]);

// Additional test cases can be added as needed.
```

This documentation should help users understand how to use the `GraphNode` and `BreadthFirstSearch` classes from your package to perform breadth-first search on a tree or graph, and how to run the provided test cases.