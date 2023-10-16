# Ford-Fulkerson Algorithm

The Ford-Fulkerson algorithm is used to find the maximum flow in a flow network. It works by iteratively finding augmenting paths in the residual graph and updating the flow through those paths. The algorithm repeats this process until no more augmenting paths can be found.

## Usage

To use the Ford-Fulkerson algorithm in your JavaScript project, follow these steps:

1. Create a graph and add vertices and edges to represent the flow network.

```javascript
const Graph = require('adv-dsa').Graph;

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B', 10);
graph.addEdge('A', 'C', 10);
graph.addEdge('B', 'C', 2);
graph.addEdge('B', 'D', 15);
graph.addEdge('C', 'D', 10);
```

2. Create an instance of the `FordFulkerson` class with the graph.

```javascript
const FordFulkerson = require('adv-dsa').FordFulkerson;

const fordFulkerson = new FordFulkerson(graph);
```

3. Find the maximum flow in the flow network by calling the `maxFlow` method with the source and sink vertices.

```javascript
const maxFlow = fordFulkerson.maxFlow('A', 'D');
```

4. The `maxFlow` method returns the maximum flow in the network.

```javascript
console.log(maxFlow);
```

This is how you can use the Ford-Fulkerson algorithm in your project to find the maximum flow in a flow network.

## Example

```javascript
const Graph = require('adv-dsa').Graph;
const FordFulkerson = require('adv-dsa').FordFulkerson;

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B', 10);
graph.addEdge('A', 'C', 10);
graph.addEdge('B', 'C', 2);
graph.addEdge('B', 'D', 15);
graph.addEdge('C', 'D', 10);

const fordFulkerson = new FordFulkerson(graph);
const maxFlow = fordFulkerson.maxFlow('A', 'D');

console.log(maxFlow);
```

This example demonstrates how to use the Ford-Fulkerson algorithm to find the maximum flow in a flow network.

## Test Cases

You can use the provided test cases to verify that the `FordFulkerson` class works as expected.

1. Import the necessary modules in your test file.

```javascript
const FordFulkerson = require('adv-dsa').FordFulkerson;
const Graph = require('adv-dsa').Graph;
```

2. Use the `expect` function from your testing framework to assert the results of finding the maximum flow in a flow network. Consider adding additional test cases for different scenarios.

```javascript
// Example test case
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B', 10);
graph.addEdge('A', 'C', 10);
graph.addEdge('B', 'C', 2);
graph.addEdge('B', 'D', 15);
graph.addEdge('C', 'D', 10);

const fordFulkerson = new FordFulkerson(graph);
const maxFlow = fordFulkerson.maxFlow('A', 'D');

expect(maxFlow).toBe(20);
```

This documentation should help users understand how to use the Ford-Fulkerson algorithm from your package, how to create flow networks, and how to run the provided test cases.