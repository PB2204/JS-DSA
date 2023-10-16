# Bellman-Ford Algorithm

The Bellman-Ford algorithm is used to find the shortest path in a weighted graph, even when the graph contains negative-weight edges. It can also detect the presence of negative-weight cycles in the graph.

## Usage

To use the Bellman-Ford algorithm in your JavaScript project, you can follow these steps:

1. Import the `BellmanFord` class and create an instance with the graph you want to analyze.

```javascript
const BellmanFord = require('adv-dsa').BellmanFord;

const graph = {
    A: { B: 2, C: 4 },
    B: { D: 7 },
    C: { D: 1 },
    D: { E: 3 },
    E: {},
};

const bellmanFord = new BellmanFord(graph);
```

2. Use the `findShortestPath` method to find the shortest path from a specified source node to all other nodes.

```javascript
const { distance, predecessor } = bellmanFord.findShortestPath('A');
console.log('Shortest distances:', distance);
console.log('Predecessors:', predecessor);
```

## Example

```javascript
const BellmanFord = require('adv-dsa').BellmanFord;

const graph = {
    A: { B: 2, C: 4 },
    B: { D: 7 },
    C: { D: 1 },
    D: { E: 3 },
    E: {},
};

const bellmanFord = new BellmanFord(graph);
const { distance, predecessor } = bellmanFord.findShortestPath('A');
console.log('Shortest distances:', distance);
console.log('Predecessors:', predecessor);
```

This code will output the shortest distances and predecessors for all nodes from the source node 'A'.

## Test Cases

You can also use the provided test cases to verify that the `BellmanFord` class works as expected. Here's how you can run the test cases:

1. Import the `BellmanFord` class in your test file.

```javascript
const BellmanFord = require('adv-dsa').BellmanFord;
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
const bellmanFord = new BellmanFord(graph);
const { distance, predecessor } = bellmanFord.findShortestPath('A');
expect(distance.E).toBe(8);
expect(predecessor.E).toBe('D');
```

Make sure to run your test suite to validate the correctness of the Bellman-Ford algorithm implementation and to ensure that it handles different scenarios, including graphs with positive and negative edge weights and graphs with or without paths between nodes.
