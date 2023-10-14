const Kruskal = require('../../../algorithms/graph-algorithms/kruskal');

describe('Kruskal (OOP)', () => {
    it('should handle a graph with negative edge weights', () => {
        const graph = {
            A: { B: 2, C: -1 },
            B: { C: 1, D: 7 },
            C: { D: -2, E: 5 },
            D: { E: 2 },
            E: {},
        };

        const kruskal = new Kruskal(graph);
        const mst = kruskal.findMinimumSpanningTree();

        expect(mst).toEqual([
            ['C', 'D', -2],
            ['A', 'C', -1],
            ['B', 'C', 1],
            ['D', 'E', 2],
        ]);
    });

    it('should handle a graph with a single node', () => {
        const graph = {
            A: {},
        };

        const kruskal = new Kruskal(graph);
        const mst = kruskal.findMinimumSpanningTree();

        expect(mst).toEqual([]);
    });
});
