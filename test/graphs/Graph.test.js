const assert = require('assert');
const Graph = require('../../data-structures/graphs/Graph');

describe('Graph', () => {
    it('should create an empty graph', () => {
        const graph = new Graph();
        assert.strictEqual(graph.getVertices().length, 0);
    });

    it('should add vertices to the graph', () => {
        const graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');

        assert.strictEqual(graph.getVertices().length, 3);
        assert.strictEqual(graph.hasVertex('A'), true);
        assert.strictEqual(graph.hasVertex('D'), false);
    });

    it('should add edges between vertices', () => {
        const graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addEdge('A', 'B');
        graph.addEdge('B', 'C');

        assert.strictEqual(graph.hasEdge('A', 'B'), true);
        assert.strictEqual(graph.hasEdge('B', 'C'), true);
        assert.strictEqual(graph.hasEdge('A', 'C'), false);
    });

    it('should remove vertices and edges', () => {
        const graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addEdge('A', 'B');
        graph.addEdge('B', 'C');
        graph.removeVertex('B');

        assert.strictEqual(graph.hasVertex('B'), false);
        assert.strictEqual(graph.hasEdge('A', 'B'), false);
        assert.strictEqual(graph.hasEdge('B', 'C'), false);
    });
});
