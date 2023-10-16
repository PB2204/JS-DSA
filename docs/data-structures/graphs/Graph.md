# JS-DSA (JavaScript Data Structures and Algorithms)

## Introduction
"JS-DSA" is a JavaScript package that provides a Graph data structure. This data structure allows you to create and manipulate graphs with vertices and edges. A graph is a fundamental data structure used in various applications, including network analysis, route planning, and more.

To get started, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a Graph
To use the `Graph` class, first, import it into your JavaScript code:

```javascript
const Graph = require('adv-dsa');

// Initialize a Graph instance
const graph = new Graph();
```

### Adding Vertices
You can create vertices in the graph using the `addVertex` method:

```javascript
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
```

### Adding Edges
To connect vertices with edges, use the `addEdge` method:

```javascript
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
```

### Retrieving Vertices and Edges
You can retrieve the vertices and edges in the graph using the following methods:

- `getVertices`: Returns an array of all vertices in the graph.
- `getEdges(vertex)`: Returns an array of all vertices connected to the specified vertex.

```javascript
const vertices = graph.getVertices(); // Returns ['A', 'B', 'C']
const edgesOfA = graph.getEdges('A'); // Returns ['B']
```

### Checking for Vertices and Edges
You can check if a vertex or edge exists in the graph using the following methods:

- `hasVertex(vertex)`: Returns `true` if the vertex exists in the graph, `false` otherwise.
- `hasEdge(vertex1, vertex2)`: Returns `true` if there is an edge between the two vertices, `false` otherwise.

```javascript
const hasVertexA = graph.hasVertex('A'); // Returns `true`
const hasEdgeAB = graph.hasEdge('A', 'B'); // Returns `true`
```

### Removing Vertices and Edges
You can remove vertices and edges from the graph using the following methods:

- `removeVertex(vertex)`: Removes the specified vertex and all associated edges.
- `removeEdge(vertex1, vertex2)`: Removes the edge between the specified vertices.

```javascript
graph.removeVertex('B'); // Removes vertex 'B' and associated edges
```

## Testing

You can also test the "JS-DSA" package using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `Graph` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const Graph = require('adv-dsa');

// Your test cases go here
```

## Conclusion
"JS-DSA" provides a flexible Graph data structure for your JavaScript applications. You can use it to model and work with various graph-based problems, from social network analysis to route planning and beyond.
