# Max Flow Min Cut Graph

The Max Flow Min Cut Graph is a class for finding the maximum flow in a flow network using the Ford-Fulkerson algorithm. This algorithm determines the maximum amount of flow that can be sent from a source node to a sink node while respecting the capacity constraints of the network.

## Usage

To use the Max Flow Min Cut Graph in your JavaScript project, follow these steps:

1. Create an instance of the `MaxFlowMinCutGraph` class, specifying the number of vertices in your flow network.

```javascript
const MaxFlowMinCutGraph = require('adv-dsa').MaxFlowMinCutGraph;

const graph = new MaxFlowMinCutGraph(6);
```

2. Add edges to the graph with their respective capacities using the `addEdge` method.

```javascript
graph.addEdge(0, 1, 10);
graph.addEdge(0, 2, 10);
graph.addEdge(1, 2, 2);
// Add more edges as needed
```

3. Find the maximum flow in the network by invoking the `fordFulkerson` method with the source and sink node indices.

```javascript
const maxFlow = graph.fordFulkerson(source, sink);
```

4. The `maxFlow` variable will contain the maximum flow value in the network.

```javascript
console.log(maxFlow);
```

This is how you can use the Max Flow Min Cut Graph to find the maximum flow in a flow network.

## Example

```javascript
const MaxFlowMinCutGraph = require('adv-dsa').MaxFlowMinCutGraph;

const graph = new MaxFlowMinCutGraph(6);

graph.addEdge(0, 1, 10);
graph.addEdge(0, 2, 10);
graph.addEdge(1, 2, 2);
graph.addEdge(1, 3, 4);
graph.addEdge(1, 4, 8);
graph.addEdge(2, 4, 9);
graph.addEdge(3, 5, 10);
graph.addEdge(4, 3, 6);
graph.addEdge(4, 5, 10);

const maxFlow = graph.fordFulkerson(0, 5);

console.log(maxFlow);
```

This example demonstrates how to use the Max Flow Min Cut Graph to find the maximum flow in a flow network.

## Test Cases

You can use the provided test cases to verify that the `MaxFlowMinCutGraph` class works as expected.

1. Import the necessary modules in your test file.

```javascript
const MaxFlowMinCutGraph = require('adv-dsa').MaxFlowMinCutGraph;
```

2. Use the `expect` function from your testing framework to assert the results of finding the maximum flow in a flow network. You can add more test cases for different scenarios.

```javascript
// Example test case
const graph = new MaxFlowMinCutGraph(6);

graph.addEdge(0, 1, 10);
graph.addEdge(0, 2, 10);
graph.addEdge(1, 2, 2);
graph.addEdge(1, 3, 4);
graph.addEdge(1, 4, 8);
graph.addEdge(2, 4, 9);
graph.addEdge(3, 5, 10);
graph.addEdge(4, 3, 6);
graph.addEdge(4, 5, 10);

const maxFlow = graph.fordFulkerson(0, 5);

expect(maxFlow).toEqual(19);
```

This documentation should help users understand how to use the Max Flow Min Cut Graph from your package, how to create flow networks, and how to run the provided test cases.