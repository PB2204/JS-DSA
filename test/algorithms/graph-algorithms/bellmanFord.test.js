const BellmanFord = require('../../../algorithms/graph-algorithms/bellmanFord');

describe('Bellman-Ford (OOP)', () => {
    it('should find the shortest path in a graph with positive weights', () => {
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
    });

    it('should handle a graph with no path between two nodes', () => {
        const graph = {
            A: { B: 2 },
            B: {},
        };

        const bellmanFord = new BellmanFord(graph);

        expect(() => bellmanFord.findShortestPath('A'));
    });

    it('should handle a graph with negative edge weights', () => {
        const graph = {
            A: { B: 2, C: -1 },
            B: { D: -2 },
            C: { D: 1 },
            D: { E: -3 },
            E: {},
        };

        const bellmanFord = new BellmanFord(graph);
        const { distance, predecessor } = bellmanFord.findShortestPath('A');

        expect(distance.E).toBe(-3);
        expect(predecessor.E).toBe('D');
    });

    it('should handle a graph with the same weight for all edges', () => {
        const graph = {
            A: { B: 1, C: 1 },
            B: { D: 1 },
            C: { D: 1 },
            D: { E: 1 },
            E: {},
        };

        const bellmanFord = new BellmanFord(graph);
        const { distance, predecessor } = bellmanFord.findShortestPath('A');

        expect(distance.E).toBe(3);
        expect(predecessor.E).toBe('D');
    });

    it('should handle a graph with only one node', () => {
        const graph = {
            A: {},
        };

        const bellmanFord = new BellmanFord(graph);
        const { distance, predecessor } = bellmanFord.findShortestPath('A');

        expect(distance.A).toBe(0);
        expect(predecessor.A).toBe(null);
    });
});
