# Floyd-Warshall Algorithm

The Floyd-Warshall algorithm is used to find the shortest paths between all pairs of vertices in a weighted graph. It works efficiently even when the graph contains negative edge weights.

## Usage

To use the Floyd-Warshall algorithm in your JavaScript project, you can follow these steps:

1. Import the `FloydWarshall` class and create an instance with the graph you want to analyze.

```javascript
const FloydWarshall = require('adv-dsa').FloydWarshall;

const graph = {
    A: { B: 2, C: 4 },
    B: { D: 7 },
    C: { D: 1 },
    D: { E: 3 },
    E: {},
};

const floydWarshall = new FloydWarshall(graph);
```

2. Use the `findShortestPaths` method to find the shortest paths between all pairs of vertices in the graph.

```javascript
const shortestPaths = floydWarshall.findShortestPaths();
console.log('Shortest paths:', shortestPaths);
```

## Example

```javascript
const FloydWarshall = require('adv-dsa').FloydWarshall;

const graph = {
    A: { B: 2, C: 4 },
    B: { D: 7 },
    C: { D: 1 },
    D: { E: 3 },
    E: {},
};

const floydWarshall = new FloydWarshall(graph);
const shortestPaths = floydWarshall.findShortestPaths();
console.log('Shortest paths:', shortestPaths);
```

This code will output the shortest paths between all pairs of vertices in the graph.

## Test Cases

You can also use the provided test cases to verify that the `FloydWarshall` class works as expected. Here's how you can run the test cases:

1. Import the `FloydWarshall` class in your test file.

```javascript
const FloydWarshall = require('adv-dsa').FloydWarshall;
```

2. Use the `expect` function from your testing framework to assert the results of the `findShortestPaths` method.

```javascript
// Example test case
const graph = {
    A: { B: 2, C: 4 },
    B: { D: 7 },
    C: { D: 1 },
    D: { E: 3 },
    E: {},
};
const floydWarshall = new FloydWarshall(graph);
const shortestPaths = floydWarshall.findShortestPaths();
expect(shortestPaths).toEqual({
    A: { A: 0, B: 2, C: 4, D: 5, E: 8 },
    B: { A: Infinity, B: 0, C: Infinity, D: 7, E: 10 },
    C: { A: Infinity, B: Infinity, C: 0, D: 1, E: 4 },
    D: { A: Infinity, B: Infinity, C: Infinity, D: 0, E: 3 },
    E: { A: Infinity, B: Infinity, C: Infinity, D: Infinity, E: 0 },
});
```

Make sure to run your test suite to validate the correctness of the Floyd-Warshall algorithm implementation and to ensure that it handles different scenarios, including graphs with positive and negative edge weights, empty graphs, graphs with a single vertex, and graphs with or without paths between nodes.
