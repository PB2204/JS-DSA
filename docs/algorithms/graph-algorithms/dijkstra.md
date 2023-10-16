# Dijkstra's Shortest Path Algorithm

Dijkstra's algorithm is used to find the shortest path from a source node to all other nodes in a weighted graph. It works efficiently even when the graph contains negative or non-negative edge weights.

## Usage

To use the Dijkstra's algorithm in your JavaScript project, you can follow these steps:

1. Import the `Dijkstra` class and create an instance with the graph you want to analyze.

```javascript
const Dijkstra = require('adv-dsa').Dijkstra;

const graph = {
    A: { B: 2, C: 4 },
    B: { D: 7 },
    C: { D: 1 },
    D: { E: 3 },
    E: {},
};

const dijkstra = new Dijkstra(graph);
```

2. Use the `findShortestPath` method to find the shortest path from a specified source node to an end node.

```javascript
const shortestPath = dijkstra.findShortestPath('A', 'E');
console.log('Shortest path:', shortestPath);
```

## Example

```javascript
const Dijkstra = require('adv-dsa').Dijkstra;

const graph = {
    A: { B: 2, C: 4 },
    B: { D: 7 },
    C: { D: 1 },
    D: { E: 3 },
    E: {},
};

const dijkstra = new Dijkstra(graph);
const shortestPath = dijkstra.findShortestPath('A', 'E');
console.log('Shortest path:', shortestPath);
```

This code will output the shortest path from 'A' to 'E'.

## Test Cases

You can also use the provided test cases to verify that the `Dijkstra` class works as expected. Here's how you can run the test cases:

1. Import the `Dijkstra` class in your test file.

```javascript
const Dijkstra = require('adv-dsa').Dijkstra;
```

2. Use the `expect` function from your testing framework to assert the results of the `findShortestPath` method.

```javascript
// Example test case
const graph = {
    A: { B: 2, C: 4 },
    B: { D: 7 },
    C: { D: 1 },
    D: { E: 3 },
    E: {},
};
const dijkstra = new Dijkstra(graph);
const shortestPath = dijkstra.findShortestPath('A', 'E');
expect(shortestPath).toEqual(['A', 'C', 'D', 'E']);
```

Make sure to run your test suite to validate the correctness of the Dijkstra's algorithm implementation and to ensure that it handles different scenarios, including graphs with positive and negative edge weights and graphs with or without paths between nodes.
