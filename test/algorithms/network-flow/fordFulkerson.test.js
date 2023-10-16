const FordFulkerson = require('../../../algorithms/network-flow/fordFulkerson');

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(from, to, capacity) {
        this.adjacencyList.get(from).push({ to, capacity });
        this.adjacencyList.get(to).push({ to: from, capacity: 0 });
    }

    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex).map((edge) => edge.to);
    }

    getCapacity(from, to) {
        const edge = this.adjacencyList.get(from).find((e) => e.to === to);
        return edge ? edge.capacity : 0;
    }

    updateCapacity(from, to, capacityChange) {
        const edge = this.adjacencyList.get(from).find((e) => e.to === to);
        if (edge) {
            edge.capacity += capacityChange;
        }
    }
}

describe('FordFulkerson', () => {
    it('should find the maximum flow in a flow network', () => {
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
    });
});