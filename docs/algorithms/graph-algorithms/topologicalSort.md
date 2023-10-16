# Topological Sorting Algorithm

Topological sorting is a linear ordering of the vertices in a directed acyclic graph (DAG) such that for every directed edge `(u, v)`, vertex `u` comes before vertex `v` in the ordering. Topological sorting is used in various applications, including scheduling tasks with dependencies, resolving build orders, and more.

## Usage

To use the Topological Sort algorithm in your JavaScript project, you can follow these steps:

1. Import the `TopologicalSort` class and create an instance with the directed acyclic graph (DAG) you want to perform topological sorting on.

```javascript
const TopologicalSort = require('adv-dsa').TopologicalSort;

const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': ['E'],
    'E': [],
    'F': [],
};

const topologicalSorter = new TopologicalSort(graph);
```

2. Use the `performTopologicalSort` method to find the topological ordering of the vertices in the graph.

```javascript
const topologicalOrder = topologicalSorter.performTopologicalSort();
console.log('Topological Order:', topologicalOrder);
```

## Example

```javascript
const TopologicalSort = require('adv-dsa').TopologicalSort;

const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': ['E'],
    'E': [],
    'F': [],
};

const topologicalSorter = new TopologicalSort(graph);
const topologicalOrder = topologicalSorter.performTopologicalSort();
console.log('Topological Order:', topologicalOrder);
```

This code will output the topological order of the vertices in the given directed acyclic graph.

## Test Cases

You can also use the provided test cases to verify that the `TopologicalSort` class works as expected. Here's how you can run the test cases:

1. Import the `TopologicalSort` class in your test file.

```javascript
const TopologicalSort = require('adv-dsa').TopologicalSort;
```

2. Use the `expect` function from your testing framework to assert the results of the `performTopologicalSort` method.

```javascript
// Example test case
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': ['E'],
    'E': [],
    'F': [],
};
const topologicalSorter = new TopologicalSort(graph);
const topologicalOrder = topologicalSorter.performTopologicalSort();
expect(topologicalOrder).toContain('A', 'C', 'F', 'B', 'D', 'E');
```

Ensure that your test suite validates the correctness of the topological sorting algorithm and handles different scenarios, including graphs with multiple valid topological orders.
