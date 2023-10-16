# Kruskal's Minimum Spanning Tree Algorithm

Kruskal's algorithm is used to find the minimum spanning tree (MST) of a connected, undirected graph. It works efficiently even when the graph contains negative edge weights. The MST is a subset of the graph's edges that connects all the vertices with the minimum total edge weight.

## Usage

To use Kruskal's algorithm in your JavaScript project, you can follow these steps:

1. Import the `Kruskal` class and create an instance with the graph you want to find the MST for.

```javascript
const Kruskal = require('adv-dsa').Kruskal;

const graph = {
    A: { B: 2, C: -1 },
    B: { C: 1, D: 7 },
    C: { D: -2, E: 5 },
    D: { E: 2 },
    E: {},
};

const kruskal = new Kruskal(graph);
```

2. Use the `findMinimumSpanningTree` method to find the minimum spanning tree of the graph.

```javascript
const minimumSpanningTree = kruskal.findMinimumSpanningTree();
console.log('Minimum Spanning Tree:', minimumSpanningTree);
```

## Example

```javascript
const Kruskal = require('adv-dsa').Kruskal;

const graph = {
    A: { B: 2, C: -1 },
    B: { C: 1, D: 7 },
    C: { D: -2, E: 5 },
    D: { E: 2 },
    E: {},
};

const kruskal = new Kruskal(graph);
const minimumSpanningTree = kruskal.findMinimumSpanningTree();
console.log('Minimum Spanning Tree:', minimumSpanningTree);
```

This code will output the minimum spanning tree of the input graph.

## Test Cases

You can also use the provided test cases to verify that the `Kruskal` class works as expected. Here's how you can run the test cases:

1. Import the `Kruskal` class in your test file.

```javascript
const Kruskal = require('adv-dsa').Kruskal;
```

2. Use the `expect` function from your testing framework to assert the results of the `findMinimumSpanningTree` method.

```javascript
// Example test case
const graph = {
    A: { B: 2, C: -1 },
    B: { C: 1, D: 7 },
    C: { D: -2, E: 5 },
    D: { E: 2 },
    E: {},
};
const kruskal = new Kruskal(graph);
const minimumSpanningTree = kruskal.findMinimumSpanningTree();
expect(minimumSpanningTree).toEqual([
    ['C', 'D', -2],
    ['A', 'C', -1],
    ['B', 'C', 1],
    ['D', 'E', 2],
]);
```

Make sure to run your test suite to validate the correctness of Kruskal's algorithm implementation and to ensure that it handles different scenarios, including graphs with negative edge weights and graphs with a single node.
