const Prim = require('../../../algorithms/graph-algorithms/prim');

describe('Prim (OOP)', () => {
    it('should handle an empty graph', () => {
        const graph = {};

        const prim = new Prim(graph);
        const mst = prim.findMinimumSpanningTree();

        expect(mst).toEqual([]);
    });

    it('should handle a graph with a single vertex', () => {
        const graph = { A: {} };

        const prim = new Prim(graph);
        const mst = prim.findMinimumSpanningTree();

        expect(mst).toEqual([]);
    });

    it('should handle a graph with no path between two nodes', () => {
        const graph = {
            A: {},
            B: {},
        };

        const prim = new Prim(graph);
        const mst = prim.findMinimumSpanningTree();

        expect(mst).toEqual([]);
    });
});
