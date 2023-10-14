const assert = require('assert');
const GraphNode = require('../../../data-structures/graphs/GraphNode');

describe('GraphNode', () => {
    it('should create a graph node with a value', () => {
        const node = new GraphNode('A');
        assert.strictEqual(node.value, 'A');
    });

    it('should add neighbors to a graph node', () => {
        const nodeA = new GraphNode('A');
        const nodeB = new GraphNode('B');
        const nodeC = new GraphNode('C');

        nodeA.addNeighbor(nodeB);
        nodeA.addNeighbor(nodeC);

        assert.strictEqual(nodeA.getNeighbors().length, 2);
        assert.strictEqual(nodeB.getNeighbors().length, 1);
        assert.strictEqual(nodeC.getNeighbors().length, 1);
    });

    it('should remove neighbors from a graph node', () => {
        const nodeA = new GraphNode('A');
        const nodeB = new GraphNode('B');
        const nodeC = new GraphNode('C');

        nodeA.addNeighbor(nodeB);
        nodeA.addNeighbor(nodeC);
        nodeA.removeNeighbor(nodeB);

        assert.strictEqual(nodeA.getNeighbors().length, 1);
        assert.strictEqual(nodeB.getNeighbors().length, 0);
        assert.strictEqual(nodeC.getNeighbors().length, 1);
    });
});
